<template>
    <div class="h-100 d-flex align-center my-auto">
        <div class="w-100">
            <div class="d-flex">
                <div ref="pieChart" class="chart" auto-resize/>
                <div ref="barChart" class="chart" auto-resize/>
            </div>
            <c-table class="w-100" :data="productStore.allProduct" :headers="headers" :loading="loading" :search="search">
                <template #[`item.trader`]="{ item }">
                    {{ item.trader }}
                </template>
                <template #[`item.sold`]="{ item }">
                    {{ item.sold }}
                </template>
                <template #[`item.stock`]="{ item }">
                    {{ item.stock }}
                </template>
                <template #[`item.price`]="{ item }">
                    $ {{ item.price }}
                </template>
                <template #[`item.sum`]="{ item }">
                    $ {{ (item.price * item.sold).toLocaleString() }}
                </template>
                <template #[`item.action`]="{ item }">
                    <div class="d-flex">
                        <v-icon @click="openProductModal(item)" icon="mdi-application-outline"/>
                        <v-icon @click="openDeleteModal(item)" icon="mdi-delete"/>
                    </div>
                </template>
            </c-table>
        </div>
        <c-popup v-model="productModal" title="管理產品" width="800"
			btn1="確定" color1="teal" @click1="edit"
			btn2="取消" color2="grey" @click2="cancelEdit">
            <v-row>
                <v-col cols="12" md="6" lg="5" xl="4" class="image-frame">
                    <img :src="selectedProduct.img" alt="image">
                </v-col>
                <v-col cols="12" md="6" lg="7" xl="8">
                    <h2 class="my-2">{{selectedProduct.name}}</h2>
                    <div class="mt-4 d-flex align-center">
                        <v-rating v-model="selectedProduct.evaluation" half-increments readonly color="orange" density="compact"/>
                        <b class="ml-4 evaluation" v-text="selectedProduct.evaluation"/>
                    </div>
                    <div class="mt-5 mb-10">
                            <b>銷量: {{selectedProduct.sold}}</b>
                    </div>
                    <div class="d-flex align-center border-price">
                        <span>價格：</span>
                        <div style="width: 120px">
                            <v-text-field v-model="selectedProduct.price" hide-details required @keypress="isNumber" />
                        </div>
                    </div>
                    <div class="d-flex align-center mb-3 mt-5">
                        <div class="text-no-wrap">尺寸：</div>
                        <div class="d-flex flex-fill flex-wrap ">
                            <v-text-field v-model="selectedProduct.size" hint="請使用'',''分隔" required />
                        </div>
                    </div>
                    <div class="d-flex align-center mb-3">
                        <span>庫存：</span>
                        <div style="width: 120px" class="mr-5">
                            <v-text-field v-model="selectedProduct.stock" hide-details required @keypress="isNumber" />
                        </div>
                    </div>
                </v-col>
            </v-row>
        </c-popup>
        <c-popup v-model="deleteModal" title="刪除產品" width="500"
			btn1="刪除" color1="red" @click1="del"
			btn2="取消" color2="grey" @click2="cancelDel">
            <p class="text-center">是否確定刪除此筆產品？</p>
        </c-popup>
    </div>
</template>

<script>
import cTable from '../components/custom-table.vue'
import cPopup from '../components/custom-popup.vue'

import { useProductStore } from '@/stores/product'
import { useDefaultStore } from '@/stores/default'

import { ref, onMounted } from 'vue'
import _ from 'lodash'
import usePieChart from '../components/pie-chart.js'
import useBarChart from '../components/bar-chart.js'

export default {
    setup() {
		const defaultStore = useDefaultStore()
		const productStore = useProductStore()
        
        const pieChart = ref(null)
        onMounted(() => {
            const { setOption, resize } = usePieChart(pieChart.value)
            const option = {
                title: '賣家總銷售統計',
                series: {
                    name: '',
                    data: []
                }
            }
            for (const product of productStore.allProduct) {
                const data = _.find(option.series.data, {'name': product.trader})
                if (data) {
                    data.value += product.sold * product.price
                } else {
                    option.series.data.push({name: product.trader, value: product.price * product.sold})
                }
            }
            setOption(option)

            window.addEventListener('resize', () => { resize() })
        })

        const barChart = ref(null)
        onMounted(() => {
            const { setOption, resize } = useBarChart(barChart.value)
            const option = {
                name: [],
                data: []
            }
            for (const product of productStore.allProduct) {
                option.name.push(product.name)
                option.data.push(product.sold)
            }
            setOption(option)

            window.addEventListener('resize', () => { resize() })
        })

        return { defaultStore, productStore, pieChart, barChart }
    },
    components: { cTable, cPopup },
    data() {
        return {
            data: [],
            headers: [
                { title: '產品序號', align: 'center', key: 'id' },
                { title: '賣家帳號', align: 'center' , key: 'trader' },
                { title: '產品名稱', align: 'center', key: 'name' },
                { title: '品牌', align: 'center', key: 'brand' },
                { title: '售出數量', align: 'end', key: 'sold' },
                { title: '庫存數量', align: 'end', key: 'stock' },
                { title: '價格', align: 'end', key: 'price' },
                { title: '總銷售金額', align: 'end', key: 'sum' },
                { title: '建立時間', align: 'center', key: 'created_at' },
                { title: '更新時間', align: 'center', key: 'updated_at' },
                { title: '', align: 'center', key: 'action', sortable: false }
            ],
            search: "",
            loading: false,
            productModal: false,
            deleteModal: false,
            selectedProduct: {},
            size: []
        }
    },
    methods: {
        openProductModal(value) {
            this.productModal = true
            this.selectedProduct = value
            this.size = value.size.split(',')
        },
        openDeleteModal(value) {
            this.selectedProduct = value
            this.deleteModal = true
        },
        isNumber(evt) { 
            if (!['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(evt.key)) { 
                evt.preventDefault()
            }
        },
        edit() {
            this.productStore.edit_product( this.selectedProduct)
            this.selectedProduct = {}
            this.productModal = false
            this.defaultStore.setSnackbar('已修改')
        },
        cancelEdit() {
            this.selectedProduct = {}
            this.productModal = false
            this.defaultStore.setSnackbar('已取消修改')
        },
        del() {
            this.productStore.del_product(this.selectedProduct)
            this.deleteModal = false
            this.defaultStore.setSnackbar('已刪除', 'red')
            this.selectedProduct = {}
        },
        cancelDel() {
            this.selectedProduct = {}
            this.deleteModal = false
            this.defaultStore.setSnackbar('已取消刪除')
        }
    }
}
</script>

<style lang="scss" scoped>
.chart {
    height: 500px;
    width: 50%;
}

.image-frame {
    padding: 20px;
    
    img {
        width: -webkit-fill-available;;
    }
}
</style>