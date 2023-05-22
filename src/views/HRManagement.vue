<template>
    <div class="pt-10 d-flex justify-space-around">
        <!-- <div class="text-center" v-for="department in companySector" :key="department.name">
            <h2>{{ department.chName }}</h2>
            <draggable v-model="department.listName" group="department.listName" item-key="name" ghost-class="ghost">
                <template #item="{element}">
                    <v-card :key="element.name" class="mx-5 text-center py-8 my-5" width="140px" elevation="6">
                        <v-icon :icon="`mdi-pin${element.fixed ? '' : '-outline'}`" size="x-large"
                            @click="element.fixed = !element.fixed"/>
                        {{ element.name }}
                    </v-card>
                </template>
            </draggable>
        </div> -->
        <div class="text-center">
            <h2>人事部</h2>
            <draggable v-model="showPersonnel" group="showPersonnel" item-key="name" ghost-class="ghost">
                <template #item="{element}">
                    <v-card :key="element.name" class="mx-5 text-center py-8 my-5" width="140px" elevation="6">
                        <v-icon :icon="`mdi-pin${element.fixed ? '' : '-outline'}`" size="x-large"
                            @click="element.fixed = !element.fixed"/>
                        {{ element.name }}
                    </v-card>
                </template>
            </draggable>
        </div>
        <div class="text-center">
            <h2>研發部</h2>
            <draggable v-model="showRD" group="showRD" item-key="name" ghost-class="ghost">
                <template #item="{element}">
                    <v-card :key="element.name" class="mx-5 text-center py-8 my-5" width="140px" elevation="6">
                        <v-icon :icon="`mdi-pin${element.fixed ? '' : '-outline'}`" size="x-large"
                            @click="element.fixed = !element.fixed"/>
                        {{ element.name }}
                    </v-card>
                </template>
            </draggable>
        </div>
        <div class="text-center">
            <h2>採購部</h2>
            <draggable v-model="showPurchasingDepartment" group="showPurchasingDepartment" item-key="name" ghost-class="ghost">
                <template #item="{element}">
                    <v-card :key="element.name" class="mx-5 text-center py-8 my-5" width="140px" elevation="6">
                        <v-icon :icon="`mdi-pin${element.fixed ? '' : '-outline'}`" size="x-large"
                            @click="element.fixed = !element.fixed"/>
                        {{ element.name }}
                    </v-card>
                </template>
            </draggable>
        </div>
        <div class="text-center">
            <h2>業務部</h2>
            <draggable v-model="showSalesDepartment" group="showSalesDepartment" item-key="name" ghost-class="ghost">
                <template #item="{element}">
                    <v-card :key="element.name" class="mx-5 text-center py-8 my-5" width="140px" elevation="6">
                        <v-icon :icon="`mdi-pin${element.fixed ? '' : '-outline'}`" size="x-large"
                            @click="element.fixed = !element.fixed"/>
                        {{ element.name }}
                    </v-card>
                </template>
            </draggable>
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable"

export default {
	components: { draggable },
    data() {
        return {
            e1: 1,
            isMove: -1,
            isEdit: false,
			personnel: [
                {
                    "name": "張小美",
                    "fixed": true
                },
                {
                    "name": "王小明",
                    "fixed": true
                },
                {
                    "name": "廖小丁",
                    "fixed": true
                },
                {
                    "name": "賴小皮",
                    "fixed": true
                },
                {
                    "name": "邱小瓜",
                    "fixed": true
                },
			],
			RD: [
                {
                    "name": "張小美",
                    "fixed": true
                },
                {
                    "name": "王小明",
                    "fixed": true
                },
                {
                    "name": "廖小丁",
                    "fixed": true
                },
                {
                    "name": "賴小皮",
                    "fixed": true
                },
                {
                    "name": "邱小瓜",
                    "fixed": true
                },
			],
            purchasingDepartment: [
                {
                    "name": "張小美",
                    "fixed": true
                },
                {
                    "name": "王小明",
                    "fixed": true
                },
                {
                    "name": "廖小丁",
                    "fixed": true
                },
                {
                    "name": "賴小皮",
                    "fixed": true
                },
                {
                    "name": "邱小瓜",
                    "fixed": true
                },
			],
            salesDepartment: [
                {
                    "name": "張小美",
                    "fixed": true
                },
                {
                    "name": "王小明",
                    "fixed": true
                },
                {
                    "name": "廖小丁",
                    "fixed": true
                },
                {
                    "name": "賴小皮",
                    "fixed": true
                },
                {
                    "name": "邱小瓜",
                    "fixed": true
                },
			],
            companySector: [
                {chName: '人事部', listName: 'showPersonnel'},
                {chName: '研發部', listName: 'showRD'},
                {chName: '採購部', listName: 'showPurchasingDepartment'},
                {chName: '業務部', listName: 'showSalesDepartment'},
            ]
		}
	},
    computed: {
        showPersonnel: {
            get() {
                return this.personnel
            },
            set(value) {
                this.personnel = value
            }
        },
        showRD: {
            get() {
                return this.RD
            },
            set(value) {
                this.RD = value
            }
        },
        showPurchasingDepartment: {
            get() {
                return this.purchasingDepartment
            },
            set(value) {
                this.purchasingDepartment = value
            }
        },
        showSalesDepartment: {
            get() {
                return this.salesDepartment
            },
            set(value) {
                this.salesDepartment = value
            }
        },
    },
    methods: {
        mousemove(i) {
            this.isMove = i
        }
    }
}
</script>
<style>
.ghost {
    background: rgb(var(--v-theme-grey));
}
</style>