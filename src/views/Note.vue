<template>
    <div>
        <div class="pt-10 d-flex justify-space-around">
            <div class="text-center">
                <h2>記事本</h2>
                <draggable v-model="showNote" group="showNote" :itemKey="showNote" :swap="true" :move="onMove" ghost-class="ghost" class="v-row v-row--no-gutters w-100">
                    <template #item="{ element }">
                        <div class="pa-5 v-col-md-4 v-col-12">
                            <v-card :key="element.title" class="text-center py-8 h-100" elevation="6" rounded="xl" variant="tonal" :color="colors[element.color]">
                                <div class="d-flex justify-space-around align-center pb-2">
                                    <v-icon :icon="`mdi-pin${element.fixed ? '' : '-outline'}`"
                                        @click="element.fixed = !element.fixed"/>
                                    <b>{{ element.title }}</b>
                                    <v-icon icon="mdi-pencil" @click="open(element)"/>
                                </div>
                                <div class="multiline-ellipsis mx-5">
                                    {{ element.content }}
                                </div>
                            </v-card>
                        </div>
                    </template>
                </draggable>
            </div>
        </div>
        
        <c-popup v-model="noteModal" title="修改筆記" width="500"
            btn1="確定" color1="teal" @click1="edit"
            btn2="取消" color2="grey" @click2="close">
            <div class="d-flex justify-space-between align-center mt-n15">
                <b :class="textColor">標 題</b>
                <v-text-field v-model="selectedNote.title" hide-details required class="py-5" />
            </div>
            <div class="d-flex justify-space-between align-center">
                <b :class="textColor">內 容</b>
                <v-textarea v-model="selectedNote.content" clearable no-resize/>
            </div>
            <v-chip-group v-model="selectedNote.color" :selected-class="`text-${colors[selectedNote.color]}`" column mandatory>
                <v-chip v-for="color in colors" :key="color">
                    {{ color }}
                </v-chip>
            </v-chip-group>
        </c-popup>
    </div>
</template>

<script>
import cPopup from '../components/custom-popup.vue'
import draggable from "vuedraggable"
import { useDefaultStore } from '@/stores/default'
import _ from 'lodash'

export default {
    setup() {
		const store = useDefaultStore()

        return { store }
    },
	components: { draggable, cPopup },
    data() {
        return {
            noteModal: false,
            colors: ["primary", "red", "blue", "indigo", "light-blue", "teal", "blue-grey", "brown", "bronzing", "accent", "grey"],
			notes: [
                {
                    "id": 0,
                    "color": 0,
                    "title": "工作經歷",
                    "content": "2021/9 ~ 2023/4 - 阜爾運通股份有限公司\n2023/7~2024/3 - 尤米爾科技有限公司",
                    "fixed": true
                },
                {
                    "id": 1,
                    "color": 1,
                    "title": "主要技術",
                    "content": "框架： Vue3\nCSS Framework：Vuetify3\n狀態管理工具：pinia",
                    "fixed": true
                },
                {
                    "id": 2,
                    "color": 2,
                    "title": "使用套件",
                    "content": "Echarts（圖表）\nvuedraggable（拖放）\ngpt-to-chatgpt\n（聊天AI，僅可本地使用）",
                    "fixed": true
                },
                {
                    "id": 3,
                    "color": 7,
                    "title": "出門必備",
                    "content": "鑰匙、錢包、手機、衛生紙",
                    "fixed": false
                },
                {
                    "id": 4,
                    "color": 8,
                    "title": "過多文字顯示",
                    "content": "主要擔任前端工程師，主要負責網站的開發與維護，使用語言為Vue；具多人協作之經驗，與後端、PM、設計師等討論如何修改與優化專案，以好維護、優質的使用者體驗做為開發首要目標。",
                    "fixed": false
                },
			],
            selectedNote: {}
		}
	},
    computed: {
        showNote: {
            get() {
                return this.notes
            },
            set(value) {
                this.notes = value
            }
        },
        textColor() {
            return `pr-3 ${this.$vuetify.theme.global.name == 'dark' ? 'text-white' : 'text-bronzing'}`
        }
    },
    methods: {
        onMove({ relatedContext, draggedContext }) {
            const relatedElement = relatedContext.element
            const draggedElement = draggedContext.element
            return (
                (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
            )
        },
        open(element) {
            this.selectedNote = {...element}
            this.noteModal = true
        },
        edit() {
            const id = _.findIndex(this.notes, ['id', this.selectedNote.id])
            this.notes[id] = this.selectedNote
            this.store.setSnackbar('已修改')
            this.noteModal = false
            this.selectedNote = {}
        },
        close() {
            this.store.setSnackbar('已取消修改')
            this.noteModal = false
            this.selectedNote = {}
        }
    }
}
</script>
<style>
.ghost {
    background: rgb(var(--v-theme-grey));
}

.multiline-ellipsis { 
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    letter-spacing: 1.2px;
    white-space: pre-wrap;
}
</style>