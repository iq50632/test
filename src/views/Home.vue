<template>
    <div>
        <div :class="(menu == '' ? 'menu' : 'float-menu') + ' d-flex flex-column justify-space-between'">
            <div v-if="menu == 'project'">
                <div class="d-flex mt-15">
                    <v-btn variant="text" icon="mdi-chevron-left" @click="changeMenu('expertise')"/>
                    <h3 class="mt-2">專案經歷</h3>
                </div>
                <v-divider class="my-3"/>
                <v-btn v-for="i in workList" :key="i.id" variant="text" @click="showContent = i.id">{{ i.title }}</v-btn>
            </div>
            <div v-else/>
            <div v-if="menu != 'project'">
                <h3 class="mt-2">Front-End Developer</h3>
                <v-divider class="my-12"/>
                <div>
                    <span v-if="menu == ''">
                        　私立亞東技術學院資訊管理系 大學畢業 <v-chip>2017/9～2021/6</v-chip>
                        <br><br>
                    </span>
                    　擁有 2 年 11 個月的網頁開發經驗，主要負責網站的開發與維護，使用語言為Vue。
                    <br><br>
                    　具多人協作之經驗，與後端、PM、設計師等討論如何修改與優化專案，以好維護、優質的使用者體驗做為開發首要目標。
                    <br><br>
                    <div class="nav">
                        <button @click="changeMenu('expertise')">
                            <v-icon>mdi-desktop-tower-monitor</v-icon><br>
                            電腦專長
                        </button>
                        <button @click="changeMenu('work')">
                            <v-icon>mdi-briefcase</v-icon><br>
                            ⼯作經驗
                        </button>
                        <button @click="changeMenu('project')">
                            <v-icon>mdi-folder-network</v-icon><br>
                            專案經歷
                        </button>
                        <div class="animation"/>
                        <div class="animation-shadow"/>
                    </div>
                </div>
            </div>
            <v-btn variant="text" icon="mdi-cog" @click="settingModal = true"/>
        </div>
        <div v-if="menu" class="content">
            <div v-if="showContent == 'expertise'">
                <h2 class="pb-5">電腦專長</h2>
                <div class="d-flex flex-column justify-space-between">
                    <v-row>
                        <v-col cols="6" md="4" v-for="item in expertise" :key="item.id">
                            <p class="m-0 mt-4">{{item.name}}</p>
                            <div class="d-flex flex-wrap">
                                <div class="m-1" v-for="items in item.list" :key="items.id">
                                    <v-chip type="button" class="main mx-1">{{items}}</v-chip>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </div>
            <div v-if="showContent == 'work'" class="hv-100">
                <h2 class="pb-5">⼯作經驗</h2>
                <v-timeline direction="horizontal" dot-color="main" size="small">
                    <v-timeline-item v-for="item in work" :key="item.id">
                        <template v-slot:opposite>
                            {{item.date}}
                        </template>
                        <div>
                            <b class="text-h6 text-main font-weight-bold">{{item.name}} - {{item.office}}</b>
                            <p class="m-0 mt-4">{{item.description}}</p>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </div>
            <div v-if="menu == 'project'" class="mt-n8">
                <div :key="showProject.title" :id="`project-${showProject.id}`">
                    <div class="h-100 d-flex align-center">
                        <div class="w-100 mt-5">
                            <div class="d-flex">
                                <h3 class="mr-5">{{showProject.title}}</h3>
                                <v-menu open-on-hover v-if="showProject.chips.length">
                                    <template #activator="{ props }">
                                        <v-btn color="main" v-bind="props">
                                            包含功能
                                        </v-btn>
                                    </template>
                                    <v-card max-width="500" rounded="xl" class="pa-3">
                                        <v-chip class="mx-1 my-2" v-for="chip in ['語系', '更新資料倒數', '隱碼', '登入與自動登出'].concat(showProject.chips)" :key="chip">
                                            {{chip}}
                                        </v-chip>
                                    </v-card>
                                </v-menu>
                            </div>
                            <div class="py-3">
                                專案功能：<br>
                                <span class="pl-8">{{showProject.content}}</span><br>
                            </div>
                            <div v-if="showProject.images" class="pt-5">
                                <v-carousel cycle height="450" show-arrows="hover">
                                    <v-carousel-item v-for="img in showProject.images" :key="img">
                                        <v-img contain eager :src="`src/assets/image/project/${showProject.id}/${img}.png`" :alt="`${showProject.title}-${img}`"/>
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
        </div>
        <popup v-model="settingModal" width="700">
            <setting/>
        </popup>
    </div>
</template>

<script>
import { useDisplay } from 'vuetify'
import popup from '../components/custom-popup.vue'
import setting from '../components/setting.vue'
import _ from 'lodash'

export default {
    setup() {
		const { mdAndDown, smAndDown } = useDisplay()
		return { isMD: mdAndDown, isSM: smAndDown  }
	},
    components: { popup, setting },
    data() {
        return {
            menu: '',
            showContent: 'expertise',
            showProject: {},
            settingModal: false,
            data: [
                {
                    id: 1,
                    title: '101後臺管理系統',
                    content: '大改前端介面與新增頁面（設定充電車格、報表、其他費用（額外收入）、會員名單、悠遊卡人工加值、路邊停車繳費、交易紀錄、監控畫面）',
                    chips: [],
                    images: ['main', '1-1', '3-1', '5-1', '5-2', '5-3', '5-4', '6-1', '6-2', '7-1', '7-2', '7-3', '8-1']
                },
                {
                    id: 2,
                    title: '停車場後臺管理系統',
                    content: '新增充電管理介面與功能',
                    chips: [],
                    images: ['01', '02', '03']

                },
                {
                    id: 3,
                    title: '商家操作系統',
                    content: '大改前端介面與新增功能（即時折扣調整）',
                    chips: [],
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
                    content: '（操作端）車辨系統失誤時的後續人工判斷與修正。\n（管理端）對員工的帳號、中心、token等管理。',
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
                    name: '巨跡資訊股份有限公司',
                    date: '2021/01/25 - 2021/06/30',
                    office: '助理⼯程師',
                    description: '大學實習時協助並與後端工程師合作，使用Laravel、Vue、Angular、Bootstrap、Lodash等網頁技術撰寫前後端，讀取與匯入資料、串接後端API、測試與修正系統。'
                },
                {
                    name: '阜爾運通股份有限公司',
                    date: '2021/09/02 - 2023/04/30',
                    office: '⼯程師',
                    description: '與後端工程師協同合作，進行後台系統開發與維護。工作內容為UI / UX設計、使⽤Laravel、Vue、Lodash、Vuetify等網⾴技術撰寫前端、串接後端API、測試與修正系統。'
                },
                {
                    name: '尤米爾科技有限公司',
                    date: '2023/07/03 - 2021/12/31',
                    office: '前端工程師',
                    description: '工作內容：\n1. 以 Vue.js 開發前端畫面、互動效果與串接後端API\n2. 與PM、設計、後端、Mobile團隊協作開發\n3. 開發未來新功能以及維護舊有功能\n4. 協助排查問題\n5. 持續優化、重構與維護既有程式碼'
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
            expertise: [
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
    watch: {
        showContent() {
            this.searchProject()
        }
    },
    computed: {
        workList() {
            return this.data.map((i) => {return {id: i.id, title: i.title}})
        },
		showDark() {
			this.$vuetify.theme.global.name == 'dark'
		},
    },
    created() {
        setTimeout(() => {
            document.querySelector('.menu').style.top = '0'
        })
    },
    methods: {
        changeMenu(name) {
            if (document.querySelector('.menu')) {
                document.querySelector('.menu').style.transform = 'translateX(calc(-100% + 400px))'
                document.querySelector('.menu').style.transition = 'all .7s ease 0s'
                document.querySelector('.menu').style['z-index'] = 1
            }
            
            this.menu = name
            if (name == 'project') {
                this.showContent = 1
                this.searchProject()
            } else {
                this.showContent = name
            }
        },
        searchProject() {
            this.showProject = _.find(this.data, ['id', this.showContent])
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    font-family: '微軟正黑體';
    white-space: pre-wrap;
}

// 隱藏滾動條
//Chorme
:global(body::-webkit-scrollbar) {
    display: none !important;
}
//IE/Edge
body {
    -ms-overflow-style: none;
}
//Firefox
:global(html) {
    overflow: -moz-hidden-unscrollable; /*注意！若只打 hidden，chrome 的其它 hidden 會出問題*/
    height: 100%;
}

:global(body) {
	height: 100%;
	width: calc(100vw + 18px); /*瀏覽器滾動條的長度大約是 18px*/
	overflow: auto;
}

.next .mdi-chevron-down {
    font-size: 50px;
}

.hv-100 {
    height: 100vh;
}
.menu, .float-menu {
    background: rgb(var(--v-theme-main));
    height: 100vh;
    position: fixed;
    left: 0;
}

.menu {
    width: 100vw;
    top: -100vw;
    padding: 10%;
    z-index: 1007;
    transition: all .7s ease 0s;

    .nav {
        height: 200px;

        .animation, .animation-shadow {
            /* 菱形效果 */
            display: inline-block;
            transform: rotate(-65deg);
            overflow: hidden;
        }

        button {
            line-height: 3;
            font-size: 18px;

            &:nth-child(1), &:nth-child(2), &:nth-child(3) {
                &.active ~ .animation, &.active ~ .animation-shadow, &:hover ~ .animation-shadow {
                    height: 250px;
                    top: -30px;
                }
            }

            &:nth-child(1) {
                &.active ~ .animation, &.active ~ .animation-shadow, &:hover ~ .animation-shadow {
                    width: calc(100% / 3 - 40px);
                    left: 20px;
                }
            }

            &:nth-child(2) {
                    &.active ~ .animation, &.active ~ .animation-shadow, &:hover ~ .animation-shadow {
                    width: calc(100% / 3 - 40px);
                    left: calc(100% / 3 + 25px);
                }
            }

            &:nth-child(3) {
                &.active ~ .animation, &.active ~ .animation-shadow, &:hover ~ .animation-shadow {
                    width: calc(100% / 3 - 40px);
                    left: calc(100% / 3 * 2 + 30px);
                }
            }
        }
    }
}

.float-menu {
    width: 400px;
    top: 64px;
    padding: 36px;

    .v-btn.v-btn--variant-outlined {
        width: 100px;
        height: 100px;

        i {
            font-size: 35px;
        }
    }

    .nav {
        height: 100px;

        .animation, .animation-shadow {
            /* 菱形效果 */
            display: inline-block;
            overflow: hidden;
        }

        button {
            line-height: 2;

            &:nth-child(1), &:nth-child(2), &:nth-child(3) {
                &.active ~ .animation, &.active ~ .animation-shadow, &:hover ~ .animation-shadow {
                    width: calc(100% / 3);
                    top: 0;
                }
            }
    
            &:nth-child(1) {
                &.active ~ .animation, &.active ~ .animation-shadow, &:hover ~ .animation-shadow {
                    left: 0;
                }
            }

            &:nth-child(2) {
                    &.active ~ .animation, &.active ~ .animation-shadow, &:hover ~ .animation-shadow {
                    left: calc(100% / 3);
                }
            }

            &:nth-child(3) {
                &.active ~ .animation, &.active ~ .animation-shadow, &:hover ~ .animation-shadow {
                    left: calc(100% / 3 * 2);
                }
            }
        }
    }
}

.nav {
    position: relative;
    margin: 0;
    width: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    button {
        text-transform: uppercase;
        width: calc(100% / 3);
        color: white;
        text-decoration: none;
        position: relative;
        z-index: 1;
        display: inline-block;
        text-align: center;

        i {
            font-size: 35px;
        }
    }

    .animation, .animation-shadow {
        position: absolute;
        /* 背景跟随 */
        height: 100px;
        top: 0;
        z-index: 0;
        background: #ffffff;
        border-radius: 8px;
        transition: all .7s ease 0s;
    }

    .animation-shadow {
        background: rgba(255, 255, 255, 0.4);
    }

}

.content {
    position: fixed;
    right: 0;
    width: calc(100vw - 400px);
    padding: 0 36px;
}
</style>