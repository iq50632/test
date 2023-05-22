// 按需引入
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
            mapData.push({[item.name]: item.value})
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
                trigger: 'item'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                }
            },
            geo: [
                {
                    map: 'taiwan',
                    roam: true,
                    layoutCenter: ['50%', '50%'],
                    layoutSize: '100%',
                    selectedMode: 'single',
                    nameMap: nameMap,
                    label: {
                        show: true,
                        color: `rgb(${color} / 60%)`
                    },
                    itemStyle: {
                        areaColor: `rgb(${color} / 30%)`,
                        borderColor: '#FFF',
                        borderWidth: 1.8
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
                    tooltip: {
                        show: true,
                        distance: 2,
                        backgroundColor: '#FFFFFFB3',
                        color: `rgb(${color})`,
                        borderColor: '#FFF',
                        mapData,
                        formatter: function (params) {
                            return `${params.name} </br>${title}: ${labelData[params.name].toLocaleString()}`
                        }
                    },
                }
            ],
            visualMap: {
                min: 100000,
                max: 5000000,
                text: ['High', 'Low'],
                itemSymbol: 'circle',
                show: true,
                realtime: false,
                calculable: true,
                seriesIndex: 0,
                pirces: [
                    {
                        gte: 4000000,
                        lt: 2000000,
                        color: 'red',
                    },
                    {
                        gte: 2000000,
                        lt: 1000000,
                        color: 'orangered',
                    },
                    {
                        gte: 800000,
                        lt: 1000000,
                        color: 'orange',
                    },
                    {
                        gte: 500000,
                        lt: 800000,
                        color: 'yellow',
                    },
                    {
                        gte: 100000,
                        lt: 500000,
                        color: 'lightblue',
                    },
                ],
            },
            series: [{
                mapValueCalculation: 'sum',
                type: "scatter",
                coordinateSystem: "geo",
                itemStyle: {
                    color: {
                        type: "radial",
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [
                            {
                                offset: 0.5,
                                color: "#fff",
                            },
                            {
                                offset: 1,
                                color: "rgb(0 0 0 / 0%)",
                            }
                        ],
                        giobal: false,
                    },
                    bordercolor: "#fff",
                    borderWidth: 1
                },
                symbolSize: 10,
                data: data,
                zlevel: 1,
            }]
        }
        return chart.setOption(defaultOption)
    }

    const resize = () => chart.resize()

    return { setOption, resize }
}

export default use