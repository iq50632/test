import * as echarts from 'echarts/core'
import { TitleComponent, ToolboxComponent, TooltipComponent, VisualMapComponent, GeoComponent } from 'echarts/components'
import { MapChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import mapJson from './taiwan.json'

echarts.use([TitleComponent, ToolboxComponent, TooltipComponent, VisualMapComponent, GeoComponent, MapChart, CanvasRenderer])

const use = (element) => {
    echarts.registerMap('taiwan', mapJson);
    const chart = echarts.init(element, window.sessionStorage.getItem('theme'))

    chart.showLoading()

    chart.hideLoading();

    const setOption = ({title, data, theme }) => {
        const nameMap = {}
        const mapData = []
        const labelData = {}
        const color = theme == 'dark' ? '255 255 255' : '0 0 0'
        for (const item of data) {
            nameMap[item.enName] = item.name
            mapData.push({name: item.name, value: item.value})
            labelData[item.name] = item.value
        }


        const defaultOption = {
            title: {
                text: title,
                subtext: '資料時間為2023年3月',
                sublink: 'https://zh.wikipedia.org/zh-tw/%E8%87%BA%E7%81%A3%E8%A1%8C%E6%94%BF%E5%8D%80%E4%BA%BA%E5%8F%A3%E5%88%97%E8%A1%A8',
                left: 'center'
            },
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return `${params.name} </br>${title}: ${labelData[params.name].toLocaleString()}`
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'left',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                }
            },
            visualMap: {
                min: 100000,
                max: 5000000,
                text: ['High', 'Low'],
                left: 'right',
                top: 'bottom',
                realtime: false,
                calculable: true,
                inRange: {
                    color: [
                        '#313695',
                        '#4575b4',
                        '#74add1',
                        '#abd9e9',
                        '#e0f3f8',
                        '#ffffbf',
                        '#fee090',
                        '#fdae61',
                        '#f46d43',
                        '#d73027',
                        '#a50026'
                    ]
                },
            },
            series: [{
                // mapValueCalculation: 'sum',
                name: title,
                type: "map",
                map: 'taiwan',
                emphasis: {
                    label: {
                        show: true,
                        color: `rgb(${color} / 80%)`
                    },
                    itemStyle: {
                        color: `rgb(${color} / 80%)`,
                        areaColor: `rgb(${color} / 30%)`,
                        borderColor: '#FFF',
                        borderWidth: 1.8
                    },
                },
                itemStyle: {
                    borderWidth: 1,
                    borderColor: `rgb(${color} / 80%)`,
                    color: `rgb(${color} / 80%)`
                },
                emphasis: {
                    itemStyle: {
                        areaColor: `rgb(${color} / 50%)`
                    },
                    label: {
                        color: '#FFF'
                    }
                },
                select: {
                    label: {
                        color: `rgb(${color})`
                    },
                    itemStyle: {
                        areaColor: `rgb(${color} / 80%)`
                    }
                },
                data: mapData,
                nameMap: nameMap
            }]
        }
        return chart.setOption(defaultOption)
    }

    const resize = () => chart.resize()

    return { setOption, resize }
}

export default use