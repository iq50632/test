import{_ as v,M as b,c as N,r as p,o as r,a as m,b as l,d as i,w as d,l as f,i as h,t as a,A as y,n as x,Q as C,R as k,S as w,F as M,e as S,f as U,g as j}from"./index-03f4c1ac.js";import{d as z}from"./vuedraggable.umd-ab844a3e.js";import{_ as B}from"./lodash-d6562687.js";const E={setup(){return{store:b()}},components:{draggable:z,cPopup:N},data(){return{noteModal:!1,colors:["primary","red","blue","indigo","light-blue","teal","blue-grey","brown","bronzing","accent","grey"],notes:[{id:0,color:0,title:"工作經歷",content:`2021/9 ~ 2023/4 - 阜爾運通股份有限公司
2023/7~2024/3 - 尤米爾科技有限公司`,fixed:!0},{id:1,color:1,title:"主要技術",content:`框架： Vue3
CSS Framework：Vuetify3
狀態管理工具：pinia`,fixed:!0},{id:2,color:2,title:"使用套件",content:`Echarts（圖表）
vuedraggable（拖放）
gpt-to-chatgpt
（聊天AI，僅可本地使用）`,fixed:!0},{id:3,color:7,title:"出門必備",content:"鑰匙、錢包、手機、衛生紙",fixed:!1},{id:4,color:8,title:"過多文字顯示",content:"主要擔任前端工程師，主要負責網站的開發與維護，使用語言為Vue；具多人協作之經驗，與後端、PM、設計師等討論如何修改與優化專案，以好維護、優質的使用者體驗做為開發首要目標。",fixed:!1}],selectedNote:{}}},computed:{showNote:{get(){return this.notes},set(s){this.notes=s}},textColor(){return`pr-3 ${this.$vuetify.theme.global.name=="dark"?"text-white":"text-bronzing"}`}},methods:{onMove({relatedContext:s,draggedContext:t}){const c=s.element,u=t.element;return(!c||!c.fixed)&&!u.fixed},open(s){this.selectedNote={...s},this.noteModal=!0},edit(){const s=B.findIndex(this.notes,["id",this.selectedNote.id]);this.notes[s]=this.selectedNote,this.store.setSnackbar("已修改"),this.noteModal=!1,this.selectedNote={}},close(){this.store.setSnackbar("已取消修改"),this.noteModal=!1,this.selectedNote={}}}},F={class:"pt-10 d-flex justify-space-around"},I={class:"text-center"},T=l("h2",null,"記事本",-1),A={class:"pa-5 v-col-md-4 v-col-12"},D={class:"d-flex justify-space-around align-center pb-2"},K={class:"multiline-ellipsis mx-5"},P={class:"d-flex justify-space-between align-center mt-n15"},q={class:"d-flex justify-space-between align-center"};function G(s,t,c,u,o,n){const _=p("draggable"),g=p("c-popup");return r(),m("div",null,[l("div",F,[l("div",I,[T,i(_,{modelValue:n.showNote,"onUpdate:modelValue":t[0]||(t[0]=e=>n.showNote=e),group:"showNote",itemKey:n.showNote,swap:!0,move:n.onMove,"ghost-class":"ghost",class:"v-row v-row--no-gutters w-100"},{item:d(({element:e})=>[l("div",A,[(r(),f(y,{key:e.title,class:"text-center py-8 h-100",elevation:"6",rounded:"xl",variant:"tonal",color:o.colors[e.color]},{default:d(()=>[l("div",D,[i(h,{icon:`mdi-pin${e.fixed?"":"-outline"}`,onClick:V=>e.fixed=!e.fixed},null,8,["icon","onClick"]),l("b",null,a(e.title),1),i(h,{icon:"mdi-pencil",onClick:V=>n.open(e)},null,8,["onClick"])]),l("div",K,a(e.content),1)]),_:2},1032,["color"]))])]),_:1},8,["modelValue","itemKey","move"])])]),i(g,{modelValue:o.noteModal,"onUpdate:modelValue":t[4]||(t[4]=e=>o.noteModal=e),title:"修改筆記",width:"500",btn1:"確定",color1:"teal",onClick1:n.edit,btn2:"取消",color2:"grey",onClick2:n.close},{default:d(()=>[l("div",P,[l("b",{class:x(n.textColor)},"標 題",2),i(C,{modelValue:o.selectedNote.title,"onUpdate:modelValue":t[1]||(t[1]=e=>o.selectedNote.title=e),"hide-details":"",required:"",class:"py-5"},null,8,["modelValue"])]),l("div",q,[l("b",{class:x(n.textColor)},"內 容",2),i(k,{modelValue:o.selectedNote.content,"onUpdate:modelValue":t[2]||(t[2]=e=>o.selectedNote.content=e),clearable:"","no-resize":""},null,8,["modelValue"])]),i(w,{modelValue:o.selectedNote.color,"onUpdate:modelValue":t[3]||(t[3]=e=>o.selectedNote.color=e),"selected-class":`text-${o.colors[o.selectedNote.color]}`,column:"",mandatory:""},{default:d(()=>[(r(!0),m(M,null,S(o.colors,e=>(r(),f(j,{key:e},{default:d(()=>[U(a(e),1)]),_:2},1024))),128))]),_:1},8,["modelValue","selected-class"])]),_:1},8,["modelValue","onClick1","onClick2"])])}const H=v(E,[["render",G]]);export{H as default};