<template>
    <v-menu v-model="openJourney" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn class="attraction-btn" color="primary" size="x-large" v-bind="props" icon>
                <v-icon>mdi-map-legend</v-icon>
            </v-btn>
        </template>
        <v-card max-width="500" rounded="xl">
            <v-card-text v-if="journey.length == 0">
                <div class="text-center my-4">
                    <h4>目前尚未新增行程唷<br>在景點的左上角點擊"+"號即可新增行程</h4>
                </div>
            </v-card-text>
            <div v-else>
                <v-list>
                    <draggable v-model="journey" :list="journey" item-key="id" :swap="true" @end="refreshJourney" ghost-class="ghost">
                        <template #item="{ index }">
                            <v-list-item
                                :prepend-avatar="showJourney[index].image"
                                :title="showJourney[index].title"
                                :subtitle="showJourney[index].address">
                                <template v-slot:append>
                                    <v-btn variant="text" icon="mdi-delete" @click="delAttraction(index)"/>
                                </template>
                            </v-list-item>
                        </template>
                    </draggable>
                </v-list>
            </div>
        </v-card>
    </v-menu>
</template>

<script>
import draggable from "vuedraggable"
import { useAttractionStore } from '@/stores/attraction'
import _ from 'lodash'

export default {
	components: { draggable },
    setup() {
		const store = useAttractionStore()
        const journey = store.journey
        const attractions = store.attractions
        return { store, journey, attractions }
    },
    data() {
        return {
            openJourney: false,
			showJourney: []
        }
    },
    watch: {
        openJourney() {
            this.refreshJourney()
        }
    },
    methods: {
        delAttraction(index) {
            this.store.del_attraction(index)
        },
        findAttraction(id) {
            return _.find(this.attractions, ['id', id])
        },
        refreshJourney() {
            this.showJourney = []
            this.journey.forEach(id => {
                this.showJourney.push(this.findAttraction(id))
            })
        }
    }
}
</script>

<style lang="scss">
.ghost {
    background: rgb(var(--v-theme-grey));
}

.attraction-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
}

.v-list-item__prepend {
    margin-right: -10px;
}
</style>
