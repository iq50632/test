import{_ as y,L as C,c1 as w,o as c,c as u,b as t,w as e,d as _,F as h,a as r,r as m,i as x,g as S,H as f,f as o,c2 as p,t as k,j as d,p as g}from"./index-d8aef4e2.js";const v={setup(){const s=C(),i=w();return{store:s,theme:i}},data(){return{currentTheme:0,themes:["red","blue","indigo","light-blue","teal","brown","blue-grey"]}},computed:{isSidebar(){return this.store.isSidebar},isDark(){return this.$vuetify.theme.global.name=="dark"}},methods:{setSidebar(){this.store.setSidebar()},toggleTheme(){this.$vuetify.theme.global.name=this.isDark?"light":"dark",window.sessionStorage.setItem("theme",this.$vuetify.theme.global.name)},toggleMainColorTone(s){if(s.includes("-")){let i=s.split("-");i[1]=i[1][0].toUpperCase()+i[1].slice(1),i.join("")}window.sessionStorage.setItem("color",s),this.$vuetify.theme.themes.dark.colors.main=this.$vuetify.theme.themes.dark.colors[s],this.$vuetify.theme.themes.light.colors.main=this.$vuetify.theme.themes.light.colors[s]}}},T=r("h2",null,"主題顏色",-1),V={class:"ml-2"},D=r("p",{class:"pt-2"},"淺色模式",-1),B=r("p",{class:"pt-2"},"深色模式",-1);function I(s,i,L,N,b,l){return c(),u(h,null,[T,t(_,null,{default:e(()=>[(c(!0),u(h,null,m(b.themes,a=>(c(),x(d,{cols:"12",sm:"6",md:"4",xl:"3",key:a},{default:e(()=>[t(S,{onClick:n=>l.toggleMainColorTone(a)},{default:e(()=>[r("div",V,[(c(),u(h,null,m([4,3,2,1],n=>t(f,{key:n+"d",color:a+"-darken-"+n,class:"ml-n2"},{default:e(()=>[o("mdi-circle")]),_:2},1032,["color"])),64)),(c(),u(h,null,m(4,n=>t(f,{key:n+"l",color:a+"-lighten-"+n,class:"ml-n2"},{default:e(()=>[o("mdi-circle")]),_:2},1032,["color"])),64))]),t(p,{class:"ml-2"},{default:e(()=>[o(k(a),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1}),t(_,null,{default:e(()=>[(c(),u(h,null,m(["主題模式","換頁標籤"],a=>t(d,{key:a,cols:"6",lg:"4",xl:"2"},{default:e(()=>[r("h2",null,k(a),1)]),_:2},1024)),64))]),_:1}),t(_,null,{default:e(()=>[t(d,{cols:"3",lg:"2",xl:"1"},{default:e(()=>[t(g,{color:l.isDark?"":"main",height:"100",width:"100",onClick:l.toggleTheme},{default:e(()=>[r("div",null,[t(f,{style:{"font-size":"35px"}},{default:e(()=>[o("mdi-weather-sunny")]),_:1}),D])]),_:1},8,["color","onClick"])]),_:1}),t(d,{cols:"3",lg:"2",xl:"1"},{default:e(()=>[t(g,{color:l.isDark?"main":"",height:"100",width:"100",onClick:l.toggleTheme},{default:e(()=>[r("div",null,[t(f,{style:{"font-size":"35px"}},{default:e(()=>[o("mdi-weather-night")]),_:1}),B])]),_:1},8,["color","onClick"])]),_:1}),t(d,{cols:"3",lg:"2",xl:"1"},{default:e(()=>[t(g,{color:l.isSidebar?"main":"",height:"100",width:"100",onClick:l.setSidebar},{default:e(()=>[o(" 導航欄 ")]),_:1},8,["color","onClick"])]),_:1}),t(d,{cols:"3",lg:"2",xl:"1"},{default:e(()=>[t(g,{color:l.isSidebar?"":"main",height:"100",width:"100",onClick:l.setSidebar},{default:e(()=>[o(" 側邊攔 ")]),_:1},8,["color","onClick"])]),_:1})]),_:1})],64)}const z=y(v,[["render",I]]);export{z as default};
