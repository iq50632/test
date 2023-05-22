<template>
    <div class="pr-15">
        <div class="float-menu">
            <!-- <a href="#work">個人資料</a> -->
            <!-- <a href="#work">自傳</a> -->
            <v-list v-model:opened="open" color="main">
                <v-list-item prepend-icon="mdi-school" title="教育程度" href="#school"/>
                <v-list-item prepend-icon="mdi-desktop-tower-monitor"  title="電腦專長" href="#expertise"/>
                <v-list-item prepend-icon="mdi-briefcase" title="⼯作經驗" href="#work"/>
                <v-list-group value="project">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-folder-network" title="工作專案經歷" href="#project"/>
                    </template>
                    <v-list-item v-for="i in workList" :key="i.id" :title="i.title" :value="i.id" :href="`#project-${i.id}`"/>
                </v-list-group>
            </v-list>
        </div>
        <v-row>
            <v-col cols="12" md="6">
                <div :class="isMD ? '' : 'd-flex justify-space-between'" id='school'>
                    <div>
                        <h2 class="pb-15">教育程度</h2>
                        <v-timeline dot-color="main" size="small" side="end" :direction="isMD ? 'horizontal': 'vertical'">
                            <v-timeline-item v-for="item in school" :key="item.id">
                                <strong class="me-4">{{item.date}}</strong>
                                <div class="d-flex">
                                    <v-chip>{{ item.type }}</v-chip>
                                    <b class="text-h6 text-main font-weight-bold mx-2">{{item.name}} - {{item.department}}</b>
                                    <v-chip>{{ item.graduate ? '畢業' : '肄業' }}</v-chip>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <div id="expertise">
                    <h2 class="pb-15">電腦專長</h2>
                    <v-row>
                        <v-col cols="6" md="12" v-for="item in expertise" :key="item.id">
                            <p class="m-0 mt-4">{{item.name}}</p>
                            <div class="d-flex flex-wrap">
                                <div class="m-1" v-for="items in item.list" :key="items.id">
                                    <v-chip type="button" class="main mx-1">{{items}}</v-chip>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="12">
                <div class="text-center my-10">
                    <v-btn icon="mdi-chevron-down" href="#work" elevation="0" class="next" size="x-large"/>
                </div>
            </v-col>
        </v-row>
        <div>
        </div>
        <div class="hv-100" id="work">
            <div class="py-10">
                <h2 class="pb-15">⼯作經驗</h2>
                <v-timeline direction="horizontal" dot-color="main" size="small">
                    <v-timeline-item v-for="item in work" :key="item.id">
                        <template v-slot:opposite>
                            {{item.date}}
                        </template>
                        <div>
                            <b class="text-h6 text-main font-weight-bold">{{item.office}}</b>
                            <p class="m-0 mt-4">{{item.description}}</p>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </div>
            <div class="text-center my-10">
                <v-btn icon="mdi-chevron-down" href="#project" elevation="0" class="next" size="x-large"/>
            </div>
        </div>

        <h2 class="pb-15" id="project">工作專案經歷</h2>
        各專案小功能：<br>
        <v-chip class="mx-1" v-for="chip in ['語系', '更新資料倒數', '隱碼', '登入與自動登出']" :key="chip">
            {{chip}}
        </v-chip><br>
        <div v-for="(project, i) in data" :key="project.title" :id="`project-${project.id}`">
            <div class="text-center mt-10" v-if="i != 0 && i != data.length">
                <v-btn icon="mdi-chevron-down" :href="`#project-${project.id}`" elevation="0" class="next" size="x-large"/>
            </div>
            <div class="h-100 d-flex align-center">
                <div class="w-100 mt-5">
                    <h3>{{project.title}}</h3>
                    <div class="py-3">
                        專案功能：<br>
                        <span class="pl-8">{{project.content}}</span><br>
                    </div>
                    <v-chip class="mx-1" v-for="chip in project.chips" :key="chip">
                        {{chip}}
                    </v-chip>
                    <div v-if="project.images" class="pt-5">
                        <v-carousel cycle height="500" show-arrows="hover">
                            <v-carousel-item v-for="img in project.images" :key="img">
                                <v-img contain eager :src="`/assets/image/project/${project.id}/${img}.png`" :alt="`${project.title}-${img}`"/>
                            </v-carousel-item>
                        </v-carousel>
                    </div>
                    <div v-else style="height: 500px; background: #e7e7e7;" class="mt-5 text-center">
                        {{ $vuetify.theme.global.name == 'dark' ? 'text-grey' : 'text-white' }}
                        <h1 :style="{'padding-top': '221px', 'color': $vuetify.theme.global.name == 'dark' ? '#6e6e6e' : '#FFF'}">尚無相關 UI / UX</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
    setup() {
		const { mdAndDown } = useDisplay()
		return { isMD: mdAndDown }
	},
    data() {
        return {
            data: [
                {
                    id: 1,
                    title: '101後臺管理系統',
                    content: '大改前端介面與新增頁面',
                    chips: ['設定充電車格', '報表', '其他費用（額外收入）', '會員名單', '悠遊卡人工加值', '路邊停車繳費', '交易紀錄', '監控畫面'],
                    images: ['main', '1-1', '3-1', '5-1', '5-2', '5-3', '5-4', '6-1', '6-2', '7-1', '7-2', '7-3', '8-1']
                },
                {
                    id: 2,
                    title: '停車場後臺管理系統',
                    content: '新增功能與介面',
                    chips: ['充電管理介面'],
                    images: ['01', '02', '03']

                },
                {
                    id: 3,
                    title: '商家操作系統',
                    content: '大改前端介面與新增功能',
                    chips: ['介面優化', '即時折扣調整'],
                    images: ['1-2', '1-3']
                },
                {
                    id: 4,
                    title: '大樓訪客系統',
                    content: '依業主設計UI建立前端介面（表單規則等）',
                    chips: ['依照步驟填寫訪客資料', '設計Email介面']
                },
                {
                    id: 5,
                    title: '人工辨識操作端與管理端',
                    content: '（操作端）車辨系統失誤時的後續人工判斷與修正。（管理端）對員工的帳號、中心、token等管理。',
                    chips: ['token管理', '工作流程管理', '中心管理', '使用者管理', '人工調整車牌號碼、判斷']
                },
                {
                    id: 6,
                    title: '高雄市路邊停車系統',
                    content: '檢視路邊車格、設備單據狀態，車牌號碼修改功能、開單功能，如設備異常可使用障礙申告功能。',
                    chips: [],
                    images: ['pc-1', 'pc-2', 'pc-3', 'pc-4', 'pc-5', 'pc-6', 'pc-7', 'phone-1', 'phone-2', 'phone-3', 'phone-4', 'phone-5']
                },	
                {
                    id: 7,
                    title: '101新月租系統',
                    content: '讓使用者藉由前端 UI 管理月租資料。',
                    chips: ['月租車資料維護', '即時車輛控管', '隱碼', '新增', '刪除', '修改', '查詢', '匯入', '匯出'],
                    images: ['1', '2', '3', '4', '5', '6']
                },
                {
                    id: 8,
                    title: '路邊停車繳費網頁',
                    content: '使用線上付款方式進行路邊停車繳費',
                    chips: ['查詢車輛', '選擇繳費單', '確認金額與繳費單', '選擇支付方式', '顯示繳費結果'],
                    images: ['pc-1', 'pc-2', 'pc-3', 'pc-4', 'pc-5', 'pc-6', 'phone-1', 'phone-2', 'phone-3', 'phone-4', 'phone-5']
                },
                {
                    id: 9,
                    title: '三井活動管理',
                    content: '使人員能方便管理與查看目前活動給予各會員等級的折扣時間與金額',
                    chips: ['新增', '刪除', '修改', '查詢'],
                    images: ['01', '02', '03', '04']
                },
                {
                    id: 10,
                    title: '聖馬醫院客製化轉接器',
                    content: '給予進出場辨識與開啟閘門',
                    chips: ['進出場辨識與開啟閘門', '傳送ＡＰＩ']
                },
                {
                    id: 11,
                    title: '萬豪酒店折扣中心',
                    content: '製作入住折扣管理頁面，給予新增修改等功能，使人員能方便管理與查看。',
                    chips: ['新增', '刪除', '修改', '查詢'],
                    images: ['1', '2', '3', '4', '5']
                }
            ],
            work: [
                {
                    name: '阜爾運通股份有限公司',
                    date: '2021/09/02 - 2023/04/30',
                    office: '⼯程師',
                    description: '與後端工程師協同合作，進行後台系統開發與維護。工作內容為UI / UX設計、使⽤Laravel、Vue、Lodash、Vuetify等網⾴技術撰寫前端、串接後端API、測試與修正系統。'
                },
                {
                    name: '巨跡資訊股份有限公司',
                    date: '2021/01/25 - 2021/06/30',
                    office: '助理⼯程師',
                    description: '大學實習時協助並與後端工程師合作，使用Laravel、Vue、Angular、Bootstrap、Lodash等網頁技術撰寫前後端，讀取與匯入資料、串接後端API、測試與修正系統。'
                },
                // {
                //     name: '新北市政府-⼟地稅科',
                //     date: '2019/7 - 2019/8',
                //     office: '實習⽣',
                //     description: '文件歸檔、完成委託事項、協助完成後續⼯作。'
                // },
                // {
                //     name: 'Comebuy',
                //     date: '2018/7 - 2018/9',
                //     office: '櫃台服務⼈員',
                //     description: '調製飲料、服務顧客。'
                // }
            ],
            school:  [
                {
                    name: '樹⼈家商',
                    type: '⾼職',
                    department: '資料處理科',
                    date: '2015/9～2017/6',
                    graduate: true
                },
                {
                    name: '亞東技術學院',
                    type: '⼤學',
                    department: '資訊管理系',
                    date: '2017/9～2021/6',
                    graduate: true
                }
            ],
            expertise: [
                {
                    name: '辦公室應用',
                    list: [ 'Word', 'Excel', 'PowerPoint' ]
                },
                {
                    name: '程式設計',
                    list: [ 'Python' ]
                },
                // {
                //     name: '資料庫',
                //     list: [ 'MySQL' ]
                // },
                // {
                //     name: '電腦繪圖/影像處理/工程製圖',
                //     list: [ '3Ds Max' ]
                // },
                {
                    name: '網頁技術',
                    list: [ 'HTML', 'CSS', 'JavaScript']
                },
                {
                    name: '前端JS框架',
                    list: [ 'Vue2', 'Vue3(學習中)' ]
                },
                {
                    name: '前端狀態管理工具',
                    list: [ 'Pinia', 'Vuex' ]
                },
                {
                    name: 'CSS Framework',
                    list: [ 'Bootstrap', 'Vuetify' ]
                },
                {
                    name: '前端測試工具（E2E Testing Library）',
                    list: [ 'cypress' ]
                },
                {
                    name: 'UI / UX',
                    list: [ 'Adobe XD', 'Figma' ]
                },
                // {
                //     name: '中文打字',
                //     list: [ '每分鐘 70 個字' ]
                // },
                // {
                //     name: '英文打字',
                //     list: [ '每分鐘 30 個字' ]
                // }
            ]
        }
    },
    computed: {
        workList() {
            return this.data.map((i) => {return {id: i.id, title: i.title}})
        }
    },
    methods: {
        getAssetsFile(id, img) {
            return new URL('../assets/image/project/' + id + '/' + img + '.png', import.meta.url).href
        }
    }
}
</script>

<style lang="scss">
.next .mdi-chevron-down {
    font-size: 50px;
}
.hv-100 {
    height: 100vh;
}

.float-menu {
    position: fixed;
    right: 0;
    top: 64px;
    z-index: 1;
}

</style>
