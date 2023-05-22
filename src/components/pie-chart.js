// 按需引入
import * as echarts from 'echarts/core'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import { PieChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([TitleComponent, TooltipComponent, LegendComponent, PieChart, CanvasRenderer])

const use = (element) => {
    const chart = echarts.init(element, window.sessionStorage.getItem('theme'))

    const setOption = ({title, series }) => {
        const { name, data } = series
        const defaultOption = {
            title: {
                text: title,
                left: 'center'
            },
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '20%',
                containLabel: true
            },
            legend: {
                top: 'top',
                orient: 'vertical',
                left: 'left'
            },
            labelLine: {
                show: false
            },
            series: [
                {
                    radius: ['40%', '70%'],
                    label: {
                        show: false,
                        position: 'center'
                    },
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: window.sessionStorage.getItem('theme') == 'light' ? '#FFF' : '#121212',
                        borderWidth: 2
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 40,
                            fontWeight: 'bold'
                        }
                    },
                    name: name,
                    type: 'pie',
                    data: data
                }
            ]
        }
        return chart.setOption(defaultOption)
    }

    const resize = () => chart.resize()

    return { setOption, resize }
}

export default use