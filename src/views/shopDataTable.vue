<template>
    <div class="h-100 d-flex align-center my-auto">
        <div class="w-100">
            <div class="d-flex">
                <div ref="pieChart" class="chart" auto-resize/>
                <div ref="barChart" class="chart" auto-resize/>
            </div>
            <c-table class="w-100" :data="productStore.allProduct" :headers="headers" :loading="loading" :search="search">
                <template #[`item.trader`]="{ item }">
                    {{ item.props.title.trader }}
                </template>
                <template #[`item.sold`]="{ item }">
                    {{ item.props.title.sold.toLocaleString() }}
                </template>
                <template #[`item.stock`]="{ item }">
                    {{ item.props.title.stock.toLocaleString() }}
                </template>
                <template #[`item.price`]="{ item }">
                    $ {{ item.props.title.price.toLocaleString() }}
                </template>
                <template #[`item.sum`]="{ item }">
                    $ {{ (item.props.title.sold * item.props.title.price).toLocaleString() }}
                </template>
                <template #[`item.action`]="{ item }">
                    <v-icon @click="productModal = true" icon="mdi-application-outline"/>
                    <v-icon @click="deleteModal = true" icon="mdi-delete"/>
                </template>
            </c-table>
        </div>
        <c-popup v-model="productModal" title="管理產品" width="500"
			btn1="確定" color1="teal" @click1="defaultStore.setSnackbar('已修改')"
			btn2="取消" color2="grey" @click2="defaultStore.setSnackbar('已取消修改')">
        </c-popup>
        <c-popup v-model="deleteModal" title="刪除產品" width="500"
			btn1="刪除" color1="red" @click1="defaultStore.setSnackbar('刪不到啦ㄎㄎ', 'red')"
			btn2="取消" color2="grey" @click2="defaultStore.setSnackbar('已取消刪除')">
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
import lodash from 'lodash'
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
                const data = lodash.find(option.series.data, {'name': product.trader})
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
        }
    }
}
</script>

<style lang="scss" scoped>
.chart {
    height: 500px;
    width: 50%;
}
</style>