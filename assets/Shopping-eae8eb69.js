import{u as w}from"./product-df38d8be.js";import{_ as k,o as d,c as u,a as e,b as l,w as t,bU as S,G as _,F as i,r as b,i as V,I as m,d as p,j as c,t as o,bV as C,bW as P,O as I,P as B,f as v}from"./index-e13b1f79.js";const y="/test/assets/dabe_blue-b703d988.png";const U={setup(){return{store:w()}},data(){return{test:"",user:{},model:""}},methods:{selectProduct(a){this.store.set_product(a),this.$router.push({name:"product"})}}},n=a=>(I("data-v-edb8923a"),a=a(),B(),a),j={class:"hot-products"},G=n(()=>e("h2",{class:"pb-4 d-flex align-center text-main"},[e("img",{src:y,height:"50",width:"50",alt:"",class:"ml-2 mr-3"}),v(" 熱銷產品 ")],-1)),N=n(()=>e("hr",{class:"py-5"},null,-1)),$=["src"],F={class:"my-3 text-ellipsis"},R={class:"d-flex justify-content-between"},T={class:"line"},D={class:"mb-n5"},E=n(()=>e("h2",{class:"pb-4 d-flex align-center text-main"},[e("img",{src:y,height:"50",width:"50",alt:"",class:"ml-2 mr-3"}),v(" 新品上市 ")],-1)),L=n(()=>e("hr",{class:"py-5"},null,-1)),O=["src"],W={class:"my-3 text-ellipsis"},q={class:"d-flex justify-content-between"},z={class:"line-5"},A={class:"mb-n5"},H={class:"d-flex align-center mt-3"},J={class:"ml-2"};function K(a,h,M,f,g,x){return d(),u(i,null,[e("div",j,[G,N,l(S,{modelValue:g.model,"onUpdate:modelValue":h[0]||(h[0]=s=>g.model=s),class:"mt-2 mb-10","selected-class":"bg-success",height:"350","show-arrows":""},{default:t(()=>[(d(!0),u(i,null,b(f.store.allProduct,s=>(d(),V(C,{key:s.id},{default:t(()=>[l(_,{class:"pa-4 ma-4",rounded:"xl",height:"350",width:"250",elevation:"5",onClick:r=>x.selectProduct(s)},{default:t(()=>[l(m,null,{default:t(()=>[l(p,null,{default:t(()=>[l(c,{cols:"12",class:"img-frame"},{default:t(()=>[e("img",{src:s.img,alt:"",class:"ma-auto",height:"200",width:"200"},null,8,$)]),_:2},1024),l(c,{cols:"12"},{default:t(()=>[e("h3",F,o(s.name),1),e("div",R,[e("span",T,[e("p",D,"$"+o(s.price),1)]),e("span",null,"已售: "+o(s.sold),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),l(_,{elevation:"5",rounded:"xl"},{default:t(()=>[l(m,{class:"pa-12"},{default:t(()=>[E,L,l(p,null,{default:t(()=>[(d(!0),u(i,null,b(f.store.allProduct,s=>(d(),V(c,{cols:"12",md:"6",lg:"4",xl:"2",key:s.id},{default:t(()=>[l(_,{elevation:"5",rounded:"xl",class:"pa-4",onClick:r=>x.selectProduct(s)},{default:t(()=>[l(m,null,{default:t(()=>[l(p,null,{default:t(()=>[l(c,{cols:"12",md:"5",lg:"12",xl:"12",class:"img-frame"},{default:t(()=>[e("img",{src:s.img,alt:"",class:"ma-auto"},null,8,O)]),_:2},1024),l(c,{cols:"12",md:"5",lg:"12",xl:"12"},{default:t(()=>[e("h3",W,o(s.name),1),e("div",q,[e("span",z,[e("p",A,"$"+o(s.price),1)]),e("span",null,"已售: "+o(s.sold),1)]),e("div",H,[l(P,{modelValue:s.evaluation,"onUpdate:modelValue":r=>s.evaluation=r,"half-increments":"",readonly:"",color:"orange",density:"compact"},null,8,["modelValue","onUpdate:modelValue"]),e("b",J,o(s.evaluation),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})],64)}const Y=k(U,[["render",K],["__scopeId","data-v-edb8923a"]]);export{Y as default};