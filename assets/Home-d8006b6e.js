import{_ as C,u as L,o as l,c as i,a as t,b as s,w as n,V as I,d as w,e as V,f as r,F as c,r as u,g as v,h as S,m as U,i as _,j as y,t as o,k as g,l as b,n as z,p as k,q as F,s as A,v as B,x as D,y as P}from"./index-58491e4e.js";const E={setup(){const{mdAndDown:d,smAndDown:a}=L();return{isMD:d,isSM:a}},data(){return{data:[{id:1,title:"101後臺管理系統",content:"大改前端介面與新增頁面",chips:["設定充電車格","報表","其他費用（額外收入）","會員名單","悠遊卡人工加值","路邊停車繳費","交易紀錄","監控畫面"],images:["main","1-1","3-1","5-1","5-2","5-3","5-4","6-1","6-2","7-1","7-2","7-3","8-1"]},{id:2,title:"停車場後臺管理系統",content:"新增功能與介面",chips:["充電管理介面"],images:["01","02","03"]},{id:3,title:"商家操作系統",content:"大改前端介面與新增功能",chips:["介面優化","即時折扣調整"],images:["1-2","1-3"]},{id:4,title:"大樓訪客系統",content:"依業主設計UI建立前端介面（表單規則等）",chips:["依照步驟填寫訪客資料","設計Email介面"]},{id:5,title:"人工辨識操作端與管理端",content:"（操作端）車辨系統失誤時的後續人工判斷與修正。（管理端）對員工的帳號、中心、token等管理。",chips:["token管理","工作流程管理","中心管理","使用者管理","人工調整車牌號碼、判斷"]},{id:6,title:"高雄市路邊停車系統",content:"檢視路邊車格、設備單據狀態，車牌號碼修改功能、開單功能，如設備異常可使用障礙申告功能。",chips:[],images:["pc-1","pc-2","pc-3","pc-4","pc-5","pc-6","pc-7","phone-1","phone-2","phone-3","phone-4","phone-5"]},{id:7,title:"101新月租系統",content:"讓使用者藉由前端 UI 管理月租資料。",chips:["月租車資料維護","即時車輛控管","隱碼","新增","刪除","修改","查詢","匯入","匯出"],images:["1","2","3","4","5","6"]},{id:8,title:"路邊停車繳費網頁",content:"使用線上付款方式進行路邊停車繳費",chips:["查詢車輛","選擇繳費單","確認金額與繳費單","選擇支付方式","顯示繳費結果"],images:["pc-1","pc-2","pc-3","pc-4","pc-5","pc-6","phone-1","phone-2","phone-3","phone-4","phone-5"]},{id:9,title:"三井活動管理",content:"使人員能方便管理與查看目前活動給予各會員等級的折扣時間與金額",chips:["新增","刪除","修改","查詢"],images:["01","02","03","04"]},{id:10,title:"聖馬醫院客製化轉接器",content:"給予進出場辨識與開啟閘門",chips:["進出場辨識與開啟閘門","傳送ＡＰＩ"]},{id:11,title:"萬豪酒店折扣中心",content:"製作入住折扣管理頁面，給予新增修改等功能，使人員能方便管理與查看。",chips:["新增","刪除","修改","查詢"],images:["1","2","3","4","5"]}],work:[{name:"阜爾運通股份有限公司",date:"2021/09/02 - 2023/04/30",office:"⼯程師",description:"與後端工程師協同合作，進行後台系統開發與維護。工作內容為UI / UX設計、使⽤Laravel、Vue、Lodash、Vuetify等網⾴技術撰寫前端、串接後端API、測試與修正系統。"},{name:"巨跡資訊股份有限公司",date:"2021/01/25 - 2021/06/30",office:"助理⼯程師",description:"大學實習時協助並與後端工程師合作，使用Laravel、Vue、Angular、Bootstrap、Lodash等網頁技術撰寫前後端，讀取與匯入資料、串接後端API、測試與修正系統。"}],school:[{name:"樹⼈家商",type:"⾼職",department:"資料處理科",date:"2015/9～2017/6",graduate:!0},{name:"亞東技術學院",type:"⼤學",department:"資訊管理系",date:"2017/9～2021/6",graduate:!0}],expertise:[{name:"辦公室應用",list:["Word","Excel","PowerPoint"]},{name:"程式設計",list:["Python"]},{name:"網頁技術",list:["HTML","CSS","JavaScript"]},{name:"前端JS框架",list:["Vue2","Vue3(學習中)"]},{name:"前端狀態管理工具",list:["Pinia","Vuex"]},{name:"CSS Framework",list:["Bootstrap","Vuetify"]},{name:"前端測試工具（E2E Testing Library）",list:["cypress"]},{name:"UI / UX",list:["Adobe XD","Figma"]}]}},computed:{workList(){return this.data.map(d=>({id:d.id,title:d.title}))}},methods:{getAssetsFile(d,a){return new URL("../assets/image/project/"+d+"/"+a+".png",import.meta.url).href},scroll(d){document.querySelector(d).scrollIntoView()}}},M={class:"pr-15"},T={class:"float-menu"},$=t("h2",{class:"pb-15"},"教育程度",-1),N={class:"me-4"},X={class:"d-flex"},H={class:"text-h6 text-main font-weight-bold mx-2"},j={id:"expertise"},q=t("h2",{class:"pb-15"},"電腦專長",-1),J={class:"m-0 mt-4"},R={class:"d-flex flex-wrap"},G={class:"text-center my-10"},W=t("div",null,null,-1),K={class:"hv-100",id:"work"},O={class:"py-10"},Q=t("h2",{class:"pb-15"},"⼯作經驗",-1),Y={class:"text-h6 text-main font-weight-bold"},Z={class:"m-0 mt-4"},ee={class:"text-center my-10"},te=t("h2",{class:"pb-15",id:"project"},"工作專案經歷",-1),se=t("br",null,null,-1),le=t("br",null,null,-1),ne=["id"],oe={key:0,class:"text-center mt-10"},ie={class:"h-100 d-flex align-center"},ae={class:"w-100 mt-5"},de={class:"py-3"},re=t("br",null,null,-1),ce={class:"pl-8"},ue=t("br",null,null,-1),pe={key:0,class:"pt-5"},he={key:1,style:{height:"500px",background:"#e7e7e7"},class:"mt-5 text-center"};function me(d,a,_e,x,f,h){return l(),i("div",M,[t("div",T,[s(I,{opened:d.open,"onUpdate:opened":a[4]||(a[4]=e=>d.open=e),color:"main"},{default:n(()=>[s(v,{"prepend-icon":"mdi-school",title:"教育程度",onClick:a[0]||(a[0]=e=>h.scroll("#school"))}),s(v,{"prepend-icon":"mdi-desktop-tower-monitor",title:"電腦專長",onClick:a[1]||(a[1]=e=>h.scroll("#expertise"))}),s(v,{"prepend-icon":"mdi-briefcase",title:"⼯作經驗",onClick:a[2]||(a[2]=e=>h.scroll("#work"))}),s(S,{value:"project"},{activator:n(({props:e})=>[s(v,U(e,{"prepend-icon":"mdi-folder-network",title:"工作專案經歷",onClick:a[3]||(a[3]=p=>h.scroll("#project"))}),null,16)]),default:n(()=>[(l(!0),i(c,null,u(h.workList,e=>(l(),_(v,{key:e.id,title:e.title,value:e.id,onClick:p=>h.scroll(`#project-${e.id}`)},null,8,["title","value","onClick"]))),128))]),_:1})]),_:1},8,["opened"])]),s(w,null,{default:n(()=>[s(y,{cols:"12",md:"6"},{default:n(()=>[t("div",{class:z(x.isMD?"":"d-flex justify-space-between"),id:"school"},[t("div",null,[$,s(V,{"dot-color":"main",size:"small",side:"end",direction:x.isSM?"horizontal":"vertical"},{default:n(()=>[(l(!0),i(c,null,u(f.school,e=>(l(),_(b,{key:e.id},{default:n(()=>[t("strong",N,o(e.date),1),t("div",X,[s(g,null,{default:n(()=>[r(o(e.type),1)]),_:2},1024),t("b",H,o(e.name)+" - "+o(e.department),1),s(g,null,{default:n(()=>[r(o(e.graduate?"畢業":"肄業"),1)]),_:2},1024)])]),_:2},1024))),128))]),_:1},8,["direction"])])],2)]),_:1}),s(y,{cols:"12",md:"6"},{default:n(()=>[t("div",j,[q,s(w,null,{default:n(()=>[(l(!0),i(c,null,u(f.expertise,e=>(l(),_(y,{cols:"6",md:"12",key:e.id},{default:n(()=>[t("p",J,o(e.name),1),t("div",R,[(l(!0),i(c,null,u(e.list,p=>(l(),i("div",{class:"m-1",key:p.id},[s(g,{type:"button",class:"main mx-1"},{default:n(()=>[r(o(p),1)]),_:2},1024)]))),128))])]),_:2},1024))),128))]),_:1})])]),_:1}),s(y,{cols:"12"},{default:n(()=>[t("div",G,[s(k,{icon:"mdi-chevron-down",href:"#work",elevation:"0",class:"next",size:"x-large"})])]),_:1})]),_:1}),W,t("div",K,[t("div",O,[Q,s(V,{direction:"horizontal","dot-color":"main",size:"small"},{default:n(()=>[(l(!0),i(c,null,u(f.work,e=>(l(),_(b,{key:e.id},{opposite:n(()=>[r(o(e.date),1)]),default:n(()=>[t("div",null,[t("b",Y,o(e.name)+" - "+o(e.office),1),t("p",Z,o(e.description),1)])]),_:2},1024))),128))]),_:1})]),t("div",ee,[s(k,{icon:"mdi-chevron-down",href:"#project",elevation:"0",class:"next",size:"x-large"})])]),te,r(" 各專案小功能："),se,(l(),i(c,null,u(["語系","更新資料倒數","隱碼","登入與自動登出"],e=>s(g,{class:"mx-1",key:e},{default:n(()=>[r(o(e),1)]),_:2},1024)),64)),le,(l(!0),i(c,null,u(f.data,(e,p)=>(l(),i("div",{key:e.title,id:`project-${e.id}`},[p!=0&&p!=f.data.length?(l(),i("div",oe,[s(k,{icon:"mdi-chevron-down",href:`#project-${e.id}`,elevation:"0",class:"next",size:"x-large"},null,8,["href"])])):F("",!0),t("div",ie,[t("div",ae,[t("h3",null,o(e.title),1),t("div",de,[r(" 專案功能："),re,t("span",ce,o(e.content),1),ue]),(l(!0),i(c,null,u(e.chips,m=>(l(),_(g,{class:"mx-1",key:m},{default:n(()=>[r(o(m),1)]),_:2},1024))),128)),e.images?(l(),i("div",pe,[s(D,{cycle:"",height:"500","show-arrows":"hover"},{default:n(()=>[(l(!0),i(c,null,u(e.images,m=>(l(),_(B,{key:m},{default:n(()=>[s(A,{contain:"",eager:"",src:`src/assets/image/project/${e.id}/${m}.png`,alt:`${e.title}-${m}`},null,8,["src","alt"])]),_:2},1024))),128))]),_:2},1024)])):(l(),i("div",he,[r(o(d.$vuetify.theme.global.name=="dark"?"text-grey":"text-white")+" ",1),t("h1",{style:P({"padding-top":"221px",color:d.$vuetify.theme.global.name=="dark"?"#6e6e6e":"#FFF"})},"尚無相關 UI / UX",4)]))])])],8,ne))),128))])}const ve=C(E,[["render",me]]);export{ve as default};