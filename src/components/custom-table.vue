<template>
    <v-card elevation="5" rounded="xl">
        <v-data-table class="mb-1"
            :groupBy.sync="groupBy ? groupBy : []"
            :headers="headers" :items="data" :loading="loading" :search="search"
            :show-expand="expand"
            :items-per-page="itemsPerPage" :page.sync="page"
            @page-count="pageCount = $event">
            <template #top>
                <slot name='top' />
            </template>
            <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
                <slot :name="slotName" v-bind="slotProps || []" />
            </template>

            <template #no-results>
                <tr>
                    <td :colspan="headers.length + 1">
                        <h2 class="my-7">無搜尋結果，請重新確認</h2>
                    </td>
                </tr>
            </template>
            <template #no-data>
                <tr>
                    <td :colspan="headers.length + 1">
                        <h2 class="my-7 w-100 text-center">尚無資料</h2>
                    </td>
                </tr>
            </template>
            <template #[`footer.prepend`]>
                <span class="d-flex">
                    目前顯示資料為第 {{ firstData.toFixed(0) }} 筆 - 第 {{ lastData.toFixed(0) }} 筆
                </span>
                <span>
                    共 {{ data.length }} 筆資料
                </span>
            </template>
            <template #expanded-item="{ headers, item }">
                <td :colspan="headers.length" class="px-0 elevation-1">
                    <slot name='expand' :item="item"/>
                </td>
            </template>
        </v-data-table>
        <v-pagination v-if="data.length" v-model="page" :length="pageCount" :total-visible="8" :disabled="loading" rounded="circle" color="main"/>
    </v-card>
</template>

<script>
import gsap from 'gsap'

export default {
    props: {
        headers: {
            type: Array,
            default: () => []
        }, 
        data: {
            type: Array,
            default: () => []
        }, 
        loading: {
            type: Boolean,
            default: false
        },
        search: {
            type: String,
            default: ""
        },
        expand: {
            type: Boolean,
            default: false
        },
        hideFooter: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            groupBy: [],//[{ key: 'trader' }],
            page: 1,
            itemsPerPage: 10,
            firstData: 0,
            lastData: 0,
        }
    },
    created() {
        this.computedDataCount()
    },
    watch: {
        page() {
            this.computedDataCount()
        }
    },
    computed: {
        pageCount() {
            return Math.ceil(this.data.length / this.itemsPerPage)
        }
    },
    methods: {
        computedDataCount() {
            const firstData = this.itemsPerPage * (this.page - 1) + 1
            const lastData = this.page * this.itemsPerPage
            gsap.to(this, { duration: 0.5, firstData: firstData || 0 })
            gsap.to(this, { duration: 0.5, lastData: lastData < this.data.length ? lastData : this.data.length })
        }
    }
}
</script>


<style lang="scss">
.v-pagination {
    &__item, &__navigation {
        min-width: 44px;
        height: 44px;
    }
}

.v-table {
    font-family: 微軟正黑體;
    letter-spacing: .01rem;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;

    &__wrapper {
        table {
            thead {
                tr {
                    th {
                        font-size: 15px;
                        font-weight: bold !important;
                        transition: color 0.3s !important;
                        color: rgb(var(--v-theme-main), .7) !important;
                        &:hover {
                            color: rgb(var(--v-theme-main)) !important;
                        }
                    }
                    i {
                        font-size: 20px;
                        padding-left: 4px;
                    }
                }
            }
            tbody {
                tr td {
                    background-color: transparent !important;
                    //animation: anim 1s ease;
                }
                tr:has(td:hover) {
                    transition: background-color 0.3s;
                    background-color: rgb(var(--v-theme-main), .1) !important;
                }
                i {
                    font-size: 20px;
                    padding: 4px;
                    margin: 0 2px;
                    color: #6d6d6d;
                    &:hover {
                        transition: color 0.5s;
                        color: rgb(var(--v-theme-main), .5);
                    }
                }
            }
        }
    }
}
.v-data-table {
    &-footer {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid rgba(0, 0, 0, 0.051);
        padding-top: 12px;
        box-shadow: 0 -5px 5px 0px rgba(0, 0, 0, 0.1);
        
        &__items-per-page, &__info, &__pagination {
            display: none;
        }

        span {
            margin: 0 8px;
            color: #6d6d6d;
            letter-spacing: .03rem;
            font-size: 14px;
        }
    }
    &__td {
        font-size: 14px;
    }
    &__th {
        font-size: 16px;
        &--sortable {
            padding-left: 36px !important;
        }
    }
}

@keyframes anim {
    0% {
        height: 0;
        z-index: -1;
        opacity: 0;
    }
    50% {
        opacity: .3;
    }
    100% {
        height: 52px;
        opacity: 1;
    }
}
</style>