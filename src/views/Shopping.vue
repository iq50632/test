<template>
    <div class="hot-products">
        <h2 class="pb-4 d-flex align-center text-main">
            <img src="@/assets/image/dabe_blue.png" height="50" width="50" alt="" class="ml-2 mr-3">
            熱銷產品
        </h2>
        <hr class="py-5">
        <v-slide-group v-model="model" class="mt-2 mb-10" selected-class="bg-success" height="350" show-arrows>
            <v-slide-group-item v-for="i in store.allProduct" :key="i.id">
                <v-card class="pa-4 ma-4" rounded="xl" height="350" width="250" elevation="5" @click="selectProduct(i)">
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" class="img-frame">
                                <img :src="i.img" alt="" class="ma-auto" height="200" width="200">
                            </v-col>
                            <v-col cols="12">
                                <h3 class="my-3 text-ellipsis">{{i.name}}</h3>
                                <div class="d-flex justify-space-between">
                                    <div class="line">
                                        <p class="mb-n5">${{i.price}}</p>
                                    </div>
                                    <div>已售: {{i.sold}}</div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </div>
    <v-card elevation="5" rounded="xl">
        <v-card-text class="pa-12">
            <h2 class="pb-4 d-flex align-center text-main">
                <img src="@/assets/image/dabe_blue.png" height="50" width="50" alt="" class="ml-2 mr-3">
                新品上市
                <div class="ml-auto d-flex align-center my-3" style="width: 300px;">
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn class="mt-4 mr-2" elevation="0" variant="tonal" rounded="xl" v-bind="props">
                                <v-icon>{{ filterCategory ? categoryList[filterCategory - 1].icon : '' }}</v-icon>
                                {{ filterCategory ? categoryList[filterCategory - 1].text : '全部' }}
                            </v-btn>
                        </template>
                        <v-card max-width="550" rounded="xl">
                            <v-card-text>
                                <v-item-group selected-class="bg-main" v-model="filterCategory">
                                    <v-row>
                                        <v-col cols="4">
                                            <v-item v-slot="{ selectedClass, toggle }">
                                                <v-card :class="['d-flex align-center rounded-xl', selectedClass]" height="120" @click="toggle">
                                                    <div class="flex-grow-1 text-center">
                                                        <p style="font-size: 40px;font-family: unset;padding-top: 20px;">All</p><br>
                                                        <h4>全部</h4>
                                                    </div>
                                                </v-card>
                                            </v-item>
                                        </v-col>
                                        <v-col v-for="category in categoryList" :key="category" cols="4">
                                            <v-item v-slot="{ selectedClass, toggle }">
                                                <v-card :class="['d-flex align-center rounded-xl', selectedClass]" height="120" @click="toggle">
                                                    <div class="flex-grow-1 text-center">
                                                        <v-icon style="font-size: 40px">{{category.icon}}</v-icon><br><br>
                                                        <h4>{{ category.text }}</h4>
                                                    </div>
                                                </v-card>
                                            </v-item>
                                        </v-col>
                                    </v-row>
                                </v-item-group>
                            </v-card-text>
                        </v-card>
                    </v-menu>
                    <v-text-field label="搜尋商品" v-model="filterText" hide-details variant="underlined" />
                    <v-btn class="mt-2" elevation="0" icon="mdi-magnify" @click="search"/>
                </div>
            </h2>
            <hr class="py-5">
            <v-row>
                <v-col cols="6" sm="6" md="4" lg="3" xl="3" v-for="i in showProduct" :key="i.id">
                    <v-card elevation="5" rounded="xl" class="pa-4" @click="selectProduct(i)">
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" class="img-frame">
                                    <img :src="i.img" alt="" class="ma-auto">
                                </v-col>
                                <v-col cols="12">
                                    <h3 class="my-3 text-ellipsis">{{i.name}}</h3>
                                    <div class="d-flex justify-space-between">
                                        <span class="line-5">
                                            <p class="mb-n5">${{i.price}}</p>
                                        </span>
                                        <span>已售: {{i.sold}}</span>
                                    </div>
                                    <div class="d-flex align-center mt-3">
                                        <v-rating v-model="i.evaluation" half-increments readonly color="orange" density="compact"/>
                                        <b class="ml-2" v-if="xlUp">{{ i.evaluation }}</b>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
    <shopping-cart />
</template>

<script>
import { useProductStore } from '@/stores/product'
import { useDisplay } from 'vuetify'
import shoppingCart from '../components/shopping-cart.vue'
import _ from 'lodash'

export default {
    components: { shoppingCart },
    setup() {
		const { xlAndUp } = useDisplay()
		const store = useProductStore()
        return { store, xlUp: xlAndUp }
    },
    data() {
        return {
            test: '',
            user: {},
            model: '',
            showShoppingCart: false,
            filterCategory: 0,
            filterText: '',
            showProduct: [],
            categoryList: [
                { text: '食品', name: 'food', icon: 'mdi-food'},
                { text: '電器', name: 'electricity', icon: 'mdi-home-lightning-bolt'},
                { text: '生活', name: 'life', icon: 'mdi-balloon'},
                { text: '服飾', name: 'apparel', icon: 'mdi-tshirt-crew'},
                { text: '美妝', name: 'makeup', icon: 'mdi-lipstick'},
                { text: '運動', name: 'sport', icon: 'mdi-basketball'}
            ]
        }
    },
    watch: {
        filterCategory() {
            this.search()
        }
    },
    created() {
        this.showProduct = [...this.store.allProduct]
    },
    methods: {
        search() {
            let allList = []
            let showList = []
            if (this.filterCategory) {
                const selectedCategory = this.categoryList[this.filterCategory - 1]
                allList = _.filter(this.store.allProduct, {'category': selectedCategory.name})
            } else {
                allList = [...this.store.allProduct]
            }
            if (allList.length && this.filterText != '') {
                allList.forEach(product => {
                    if (product.name.includes(this.filterText)) {
                        showList.push(product)
                    }
                })
            } else {
                showList = [...allList]
            }
            this.showProduct = showList
        },
        selectProduct(product) {
            this.store.set_product(product)
            this.$router.push({ name: 'product'}) 
        }
    }
}
</script>

<style lang="scss" scoped>
hr {
    border-top: 4px solid rgb(var(--v-theme-main));
    border-left: 0;
    border-bottom: 0;
    border-right: 0;
}
.img-frame > img {
    width: -webkit-fill-available;
}

.line {
    border-bottom: 3px solid rgb(var(--v-theme-main));
    width: 50px;

    &-5 {
        border-bottom: 3px solid rgb(var(--v-theme-main), .5);
        width: 50px;
    }
}

.shopping-cart-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
</style>
