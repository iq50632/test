import{_ as h,o as a,j as i,w as l,b as n,c as u,a as r,t as f,f as _,L as p,g,q as d,p as y,S as w,A as m,T as x,G as C,U as v}from"./index-639587b1.js";const k={model:{prop:"dialog",event:"changeDialog"},props:{dialog:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1},spacing:{type:Boolean,default:!1},width:{type:String,default:"500"},close:{type:Boolean,default:!1},title:{type:String,default:""},titleCenter:{type:Boolean,default:!1},color1:{type:String,default:"grey"},color2:{type:String,default:"primary"},btn1:{type:String,default:""},btn2:{type:String,default:""}},computed:{show:{get(){return this.dialog},set(o){this.$emit("changeDialog",o)}}}},b={id:"header"},V={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"-100 0 1440 320",preserveAspectRatio:"none"},B=r("path",{fill:"#c8ae67","fill-opacity":"1",d:"M0,0L120,26.7C240,53,480,107,720,133.3C960,160,1200,160,1320,160L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"},null,-1),L=[B],S={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"-100 40 1440 320"},D=r("path",{fill:"#c8ae67","fill-opacity":"1",d:"M0,32L120,74.7C240,117,480,250,680,270.7C960,307,1350,305,1420,264.7L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"},null,-1),N=[D],A={class:"font-weight-bold text-white pb-3",id:"title"};function T(o,t,e,j,z,c){return a(),i(v,{modelValue:c.show,"onUpdate:modelValue":t[3]||(t[3]=s=>c.show=s),persistent:e.persistent,"max-width":e.width,scrollable:""},{default:l(()=>[n(C,{rounded:"xl"},{default:l(()=>[e.title?(a(),u("div",{key:0,class:y({"text-center":e.titleCenter}),style:{overflow:"hidden","border-top-left-radius":"24px"}},[r("div",b,[e.width>500?(a(),u("svg",V,L)):(a(),u("svg",S,N))]),r("h1",A,f(e.title),1),e.close?(a(),i(_,{key:0,icon:"",id:"icon-close",onClick:t[0]||(t[0]=s=>c.show=!1)},{default:l(()=>[n(p,null,{default:l(()=>[g("mdi-close")]),_:1})]),_:1})):d("",!0)],2)):d("",!0),n(w,{class:y(["pb-5 letter-1",e.spacing?"px-0":"pa-10"]),style:{"z-index":"3"}},{default:l(()=>[m(o.$slots,"default")]),_:3},8,["class"]),e.btn1?(a(),i(x,{key:1,class:"d-flex justify-space-around pb-7"},{default:l(()=>[n(_,{color:e.color1,text:"",onClick:t[1]||(t[1]=s=>o.$emit("click1"))},{default:l(()=>[g(f(e.btn1),1)]),_:1},8,["color"]),e.btn2?(a(),i(_,{key:0,color:e.color2,text:"",onClick:t[2]||(t[2]=s=>o.$emit("click2"))},{default:l(()=>[g(f(e.btn2),1)]),_:1},8,["color"])):d("",!0)]),_:1})):d("",!0)]),_:3})]),_:3},8,["modelValue","persistent","max-width"])}const P=h(k,[["render",T]]);export{P as c};
