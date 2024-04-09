import * as echarts from 'echarts/core'
import { TooltipComponent, GeoComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import svg from './parking.svg'

echarts.use([TooltipComponent, GeoComponent, CanvasRenderer])


const use = (element) => {

    const takenSeatNames = ['101'];

    const inputSvg = () => {
        fetch(svg).then(response => response.text()).then(svgText => {
            echarts.registerMap('parking-seats', {svg: svgText})
        })
    }
    const chart = echarts.init(element, window.sessionStorage.getItem('theme'))

    const option = {
        backgroundColor: 'transparent',
        tooltip: {},
        geo: {
            map: 'parking-seats',
            roam: true,
            selectedMode: 'multiple',
            layoutCenter: ['50%', '50%'],
            layoutSize: '95%',
            tooltip: {
                show: true
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'green',
                    borderWidth: 2
                },
                label: {
                    show: false
                }
            },
            select: {
                itemStyle: {
                    color: 'green',

                },
                label: {
                    show: false,
                    color: 'white',
                    textBorderColor: 'white',
                    textBorderWidth: 2
                }
            },
            regions: makeTakenRegions(takenSeatNames)
        }
    }

    return chart.setOption(option)


    function makeTakenRegions(takenSeatNames) {
        var regions = [];
        for (var i = 0; i < takenSeatNames.length; i++) {
            regions.push({
                name: takenSeatNames[i],
                silent: true,
                itemStyle: {
                    color: '#bf0e08'
                },
                emphasis: {
                    itemStyle: {
                        borderColor: '#aaa',
                        borderWidth: 1
                    }
                },
                select: {
                    itemStyle: {
                        color: '#bf0e08'
                    }
                }
            })
        }
        return regions
    }
    
    chart.on('geoselectchanged', function (params) {
        const selectedNames = params.allSelected[0].name.slice();
        // Remove taken seats.
        for (var i = selectedNames.length - 1; i >= 0; i--) {
            if (takenSeatNames.indexOf(selectedNames[i]) >= 0) {
                selectedNames.splice(i, 1);
            }
        }
        // console.log('selected', selectedNames);
    });

    const resize = () => chart.resize()

    return { inputSvg, setOption, resize }
}

export default use