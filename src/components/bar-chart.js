import * as echarts from 'echarts/core'
import { GridComponent, ToolboxComponent, TooltipComponent, DataZoomComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import dayjs from 'dayjs'
echarts.use([GridComponent, BarChart, CanvasRenderer, ToolboxComponent, TooltipComponent, DataZoomComponent ])

const use = (element) => {
    const chart = echarts.init(element, window.sessionStorage.getItem('theme'))
    const setOption = ({name, data}) => {
        const defaultOption = {
            backgroundColor: 'transparent',
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: false
                    },
                    saveAsImage: {
                        pixelRatio: 2,
                        name: 'shop-data-bar-chart_' + dayjs().format('YYYY-MM-DD HH:mm')
                    }
                }
            },
            dataZoom: [ { type: 'inside' }, { type: 'slider' } ],
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: name,
            },
            yAxis: {
                type: 'value',
                minInterval: 1,
                boundaryGap: [0, 0.01]
            },
            series: {
                type: 'bar',
                data: data,
                itemStyle: {
                    color: window.sessionStorage.getItem('color')
                }
            }
        }
        return chart.setOption(defaultOption)
    }
    const resize = () => chart.resize()

    return { setOption, resize }
}

export default use