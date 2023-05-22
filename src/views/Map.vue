<template>
    <div class="h-100 d-flex align-center my-auto">
        <div class="w-100">
            <div class="d-flex">
                <div ref="mapChart" class="chart" auto-resize/>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import useMapChart from '../components/map-chart.js'
export default {
    setup() {
        // console.log(this.$vuetify.theme.themes[theme].colors.main)
        const recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/echarts@4.9.0/map/js/world.js')
        document.head.appendChild(recaptchaScript)
        
        const mapChart = ref(null)
        onMounted(() => {
            const { setOption, resize } = useMapChart(mapChart.value)
            const option = {
                title: '總人口統計',
                theme: window.sessionStorage.getItem('theme'),
                data: [
                    { name: '基隆市', enName: 'Keelung City', value: 3621771},
                    { name: '新北市', enName: 'New Taipei City', value: 4013659},
                    { name: '臺北市', enName: 'Taipei City', value: 2465610},
                    { name: '桃園市', enName: 'Taoyuan City', value: 2293509},
                    { name: '新竹縣', enName: 'Hsinchu County', value: 584454},
                    { name: '新竹市', enName: 'Hsinchu City', value: 453536},
                    { name: '苗栗縣', enName: 'Miaoli County', value: 535076},
                    { name: '臺中市', enName: 'Taichung City', value: 2826230},
                    { name: '彰化縣', enName: 'Changhua County', value: 1244148},
                    { name: '南投縣', enName: 'Nantou County', value: 479244},
                    { name: '雲林縣', enName: 'Yunlin County', value: 664092},
                    { name: '嘉義縣', enName: 'Chiayi County', value: 488012},
                    { name: '嘉義市', enName: 'Chiayi City', value: 263440},
                    { name: '臺南市', enName: 'Tainan City', value: 1856642},
                    { name: '高雄縣', enName: 'Kaohsiung County', value: 2733964},
                    { name: '屏東縣', enName: 'Pingtung County', value: 798016},
                    { name: '宜蘭縣', enName: 'Yilan County', value: 449510},
                    { name: '花蓮縣', enName: 'Hualien County', value: 318736},
                    { name: '臺東縣', enName: 'Taitung City', value: 212259},
                    { name: '澎湖縣', enName: 'Penghu County', value: 107333},
                    { name: '綠島', enName: 'Green Island', value: 0},
                    { name: '蘭嶼', enName: 'Orchid Island', value: 0},
                    { name: '小蘭嶼', enName: 'Little Orchid Island', value: 0},
                    { name: '金門縣', enName: 'Kinmen County', value: 141505},
                    { name: '連江縣', enName: 'Lienchiang County', value: 13989}
                ]
            }
            setOption(option)

            window.addEventListener('resize', () => { resize() })
        })

        return { mapChart }
    }
}
</script>

<style lang="scss" scoped>
.chart {
    height: 100vh;
    width: 100%;
}
</style>