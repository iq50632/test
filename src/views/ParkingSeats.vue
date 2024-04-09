<template>
    <div class="h-100 d-flex align-center my-auto">
        <div class="w-100">
            <div class="d-flex">
                <div ref="parkingSeatsChart" class="chart" auto-resize/>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import useParkingSeatsChart from '../components/parking-seats-chart'
export default {
    setup() {
        const recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/echarts@4.9.0/map/js/world.js')
        document.head.appendChild(recaptchaScript)
        
        const parkingSeatsChart = ref(null)
        onMounted(async () => {
            const { inputSvg, setOption, resize } = useParkingSeatsChart(parkingSeatsChart.value)
            await inputSvg()
            await setOption()

            window.addEventListener('resize', () => { resize() })
        })

        return { parkingSeatsChart }
    }
}
</script>

<style lang="scss" scoped>
.chart {
    height: 100vh;
    width: 100%;
}
</style>