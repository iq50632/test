import * as echarts from 'echarts/core'
import { VisualMapComponent, GeoComponent } from 'echarts/components'
import { MapChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import mapJson from './taiwan.json'

echarts.use([VisualMapComponent, GeoComponent, MapChart, CanvasRenderer])

const use = (element) => {
    echarts.registerMap('taiwan', mapJson);
    const chart = echarts.init(element, window.sessionStorage.getItem('theme'))

    chart.showLoading()

    chart.hideLoading();

    const setOption = ({data, theme }) => {
        const nameMap = {}
        const mapData = []
        const labelData = {}
        const color = theme == 'dark' ? '255 255 255' : '0 0 0'
        for (const item of data) {
            nameMap[item.enName] = item.name
            mapData.push({id: item.id, name: item.name, value: item.value})
            labelData[item.name] = item.value
        }


        const defaultOption = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return params.name
                }
            },
            visualMap: {
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

    chart.on('click', function(params) {
        localStorage.setItem("areaID", params.data.id)
    })

    chart.getZr().on('click', function(event) {
        if (!event.target) {
            localStorage.setItem("areaID", 0)
        }
    })

    const resize = () => chart.resize()

    return { setOption, resize }
}

export default use