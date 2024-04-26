<template>
    <div class="h-100 d-flex align-center my-auto">
        <v-row class="w-100">
            <v-col cols="12" sm="5" class="d-flex">
                <div ref="mapChart" class="chart" auto-resize/>
            </v-col>
            <v-col cols="12" sm="7" class="pa-5">
                <v-row>
                    <v-col cols="12" lg="6" class="pa-3" v-for="attraction in selectedCityAttractions" :key="attraction">
                        <v-card class="text-center py-8 h-100 card" elevation="6" rounded="xl" variant="tonal" color="white"
                            :image="attraction.image">
                            <div class="d-flex justify-space-around align-center pb-2">
                                <v-icon v-if="!journey.includes(attraction.id)" icon="mdi-plus"
                                    @click="addAttraction(attraction.id)"/>
                                <v-chip v-else color="main" variant="elevated">{{ getOrder(attraction.id) }}</v-chip>
                                <v-card-title>{{ attraction.title }}</v-card-title>
                                <v-icon icon="mdi-map-marker" @click="openLink(attraction.link)"/>
                            </div>
                            <v-card-subtitle>{{ attraction.subtitle }}</v-card-subtitle>
                            <br>
                            <div class="multiline-ellipsis mx-5">
                                {{ attraction.content }}
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <journey/>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import useMapChart from '../components/journey-chart.js'
import { useAttractionStore } from '@/stores/attraction'
import journey from '../components/journey.vue'
import _ from 'lodash'

export default {
    components: { journey },
    setup() {
		const store = useAttractionStore()
        const journey = store.journey
        const cityAttractions = store.cityAttractions
        const attractions = store.attractions

        const recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/echarts@4.9.0/map/js/world.js')
        document.head.appendChild(recaptchaScript)
        
        const mapChart = ref(null)
        
        onMounted(() => {
            const { setOption, resize } = useMapChart(mapChart.value)
            const option = {
                theme: window.sessionStorage.getItem('theme'),
                data: store.demographics
            }
            setOption(option)

            window.addEventListener('resize', () => { resize() })
        })

        return { mapChart, store, journey, cityAttractions, attractions }
    },
    data() {
        return {
            selectedArea: 0,
            selectedCityAttractions: []
        }
    },
    created() {
        window.addEventListener('click', () => { this.selectArea() })
        this.cityAttractions[0].forEach(id => {
            this.selectedCityAttractions.push(this.findAttraction(id))
        })
    },
    methods: {
        selectArea() {
            if (this.selectedArea != localStorage.getItem("areaID")) {
                this.selectedArea = localStorage.getItem("areaID")
                this.selectedCityAttractions = []
                this.cityAttractions[this.selectedArea].forEach(id => {
                    this.selectedCityAttractions.push(this.findAttraction(id))
                })
            }
        },
        openLink(link) {
            window.open(link)
        },
        findAttraction(index) {
            return _.find(this.attractions, ['id', index])
        },
        addAttraction(id) {
            if (!this.journey.includes(id)) {
                this.store.add_attraction(id)
            }
        },
        getOrder(id) {
            return this.journey.findIndex((element) => element === id) + 1
        }
    }
}
</script>

<style lang="scss" scoped>
.chart {
    height: 100vh;
    width: 100%;
}

:deep .v-responsive::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .6);
}

:deep .v-card {
    &-title {
        font-weight: bold;
    }

    &__image {
        transform:scale(1,1);
        transition: all 1s ease-out;
    }

    &__image:hover {
        transform:scale(1.2,1.2);
    }
}
:deep .v-card-title, .v-card-subtitle, .multiline-ellipsis, br {
    pointer-events: none;
}
</style>