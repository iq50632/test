import{_,L as w,u as f,o as d,c as u,a as s,t as y,i as p,w as i,G as v,d as g,n as x,b as t,bY as r,p as m,j as k,O as V,P as b}from"./index-6af9cffe.js";const C={setup(){const c=w(),{smAndDown:l}=f();return{store:c,isSm:l}},data(){return{account:"",password:"",showpw:!1,loginSuccess:!1}},computed:{title(){return"VUE3練習"},fill(){return console.log(this.$vuetify.theme.global.name),console.log(this.$vuetify.theme.themes[this.$vuetify.theme.global.name=="dark"?"dark":"light"].colors),this.$vuetify.theme.themes[this.$vuetify.theme.global.name=="dark"?"dark":"light"].colors.main}},methods:{submit(){this.store.setLogin("User"),this.loginSuccess=!0,setTimeout(this.toHome,1e3)},toHome(){this.$router.push({name:"home"})}}},n=c=>(V("data-v-8f17235d"),c=c(),b(),c),S={class:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},z=["fill"],B=n(()=>s("animate",{attributeName:"d",dur:"3s",repeatCount:"indefinite",values:`\r
                    m0,109l48,5.3c48,5.7 132,17.7 227,42.7c95,25 127,40.6 217,64.3c90,23.7 173,35.1 286,37.4c113,2.3 245,-63.3 347,-90c102,-26.7 171,-54.7 269,-77.7l45,-11l1,-80l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -240,0l-48,0l0,109z;\r
                    m0,161l48,5.3c48,5.7 144,15.7 240,-5.3c96,-21 195,-6.4 289,24.3c94,30.7 144,51.1 258,47.4c114,-3.7 230,-68.3 321,-75c91,-6.7 142,38.3 229,57.3l56,11l-1,-226l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -240,0l-48,0l0,161z;\r
                    m1,161l48,14.3c49,14.7 131,30.7 227,9.7c96,-21 208,-30.4 302,0.3c94,30.7 144,82.1 258,78.4c114,-3.7 207,-150.3 298,-157c91,-6.7 192,54.3 252,108.3l57,42l-2,-257l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -240,0l-48,0l0,161z;\r
                    m0,161l48,5.3c48,5.7 144,15.7 240,-5.3c96,-21 195,-6.4 289,24.3c94,30.7 144,51.1 258,47.4c114,-3.7 230,-68.3 321,-75c91,-6.7 142,38.3 229,57.3l56,11l-1,-226l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -240,0l-48,0l0,161z;\r
                    m0,109l48,5.3c48,5.7 132,17.7 227,42.7c95,25 127,40.6 217,64.3c90,23.7 173,35.1 286,37.4c113,2.3 245,-63.3 347,-90c102,-26.7 171,-54.7 269,-77.7l45,-11l1,-80l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -240,0l-48,0l0,109z;`},null,-1)),U=[B],j=n(()=>s("div",{class:"background"},null,-1)),q={class:"content"},D={class:"title text-center"},I={class:"px-5"},L={class:"d-flex justify-space-between align-center"},N=n(()=>s("span",{class:"pr-3 text-white"},"帳 號 : ",-1)),E={class:"d-flex justify-space-between align-center"},H=n(()=>s("span",{class:"pr-3 text-white"},"密 碼 : ",-1)),T=n(()=>s("h2",{class:"text-white"},"登入",-1)),A={class:"mx-10"},F=n(()=>s("h2",null,"登入",-1));function G(c,l,O,h,e,a){return d(),u("div",null,[(d(),u("svg",S,[s("path",{fill:a.fill},U,8,z)])),j,s("div",q,[s("h1",D,y(a.title),1),h.isSm?(d(),p(g,{key:1,justify:"center"},{default:i(()=>[t(k,{cols:"12",sm:"6"},{default:i(()=>[s("form",null,[s("div",A,[t(r,{modelValue:e.account,"onUpdate:modelValue":l[3]||(l[3]=o=>e.account=o),solo:"",placeholder:"帳 號","hide-details":"",required:"",class:"my-4"},null,8,["modelValue"]),t(r,{modelValue:e.password,"onUpdate:modelValue":l[4]||(l[4]=o=>e.password=o),solo:"","hide-details":"",required:"",placeholder:"密 碼",class:"my-4","append-icon":"mdi-eye"+(e.showpw?"":"-off"),type:e.showpw?"text":"password","onClick:append":l[5]||(l[5]=o=>e.showpw=!e.showpw)},null,8,["modelValue","append-icon","type"]),t(m,{dark:"",block:"",class:"py-7 mt-10",onClick:a.submit,rounded:"xl"},{default:i(()=>[F]),_:1},8,["onClick"])])])]),_:1})]),_:1})):(d(),p(v,{key:0,elevation:"10",rounded:"xl",class:"pa-5 mx-auto card"},{default:i(()=>[s("form",I,[s("div",L,[N,t(r,{modelValue:e.account,"onUpdate:modelValue":l[0]||(l[0]=o=>e.account=o),"hide-details":"",required:"",class:"py-5"},null,8,["modelValue"])]),s("div",E,[H,t(r,{modelValue:e.password,"onUpdate:modelValue":l[1]||(l[1]=o=>e.password=o),"hide-details":"",required:"",class:"py-5","append-icon":"mdi-eye"+(e.showpw?"":"-off"),type:e.showpw?"text":"password","onClick:append":l[2]||(l[2]=o=>e.showpw=!e.showpw)},null,8,["modelValue","append-icon","type"])]),t(m,{color:"main",block:"",dark:"",class:"py-7 my-5",onClick:a.submit,rounded:"xl"},{default:i(()=>[T]),_:1},8,["onClick"])])]),_:1}))]),s("div",{class:x({enlarge:e.loginSuccess,mask:!0})},null,2)])}const R=_(C,[["render",G],["__scopeId","data-v-8f17235d"]]);export{R as default};
