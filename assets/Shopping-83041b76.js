import{u as w}from"./product-3d8b8e93.js";import{_ as S,o as d,c as u,a as e,b as l,w as t,bR as k,B as _,F as i,r as b,i as V,D as m,d as p,j as c,t as o,bS as C,bT as P,K as B,L as I,f as v}from"./index-94d06814.js";const y="/test/assets/dabe_blue-b703d988.png";const j={setup(){return{store:w()}},data(){return{test:"",user:{},model:""}},methods:{selectProduct(a){this.store.set_product(a),this.$router.push({name:"product"})}}},n=a=>(B("data-v-edb8923a"),a=a(),I(),a),N={class:"hot-products"},R=n(()=>e("h2",{class:"pb-4 d-flex align-center text-main"},[e("img",{src:y,height:"50",width:"50",alt:"",class:"ml-2 mr-3"}),v(" 熱銷產品 ")],-1)),T=n(()=>e("hr",{class:"py-5"},null,-1)),U=["src"],$={class:"my-3 text-ellipsis"},D={class:"d-flex justify-content-between"},F={class:"line"},G={class:"mb-n5"},L=n(()=>e("h2",{class:"pb-4 d-flex align-center text-main"},[e("img",{src:y,height:"50",width:"50",alt:"",class:"ml-2 mr-3"}),v(" 新品上市 ")],-1)),E=n(()=>e("hr",{class:"py-5"},null,-1)),K=["src"],q={class:"my-3 text-ellipsis"},z={class:"d-flex justify-content-between"},A={class:"line-5"},H={class:"mb-n5"},J={class:"d-flex align-center mt-3"},M={class:"ml-2"};function O(a,h,Q,f,g,x){return d(),u(i,null,[e("div",N,[R,T,l(k,{modelValue:g.model,"onUpdate:modelValue":h[0]||(h[0]=s=>g.model=s),class:"mt-2 mb-10","selected-class":"bg-success",height:"350","show-arrows":""},{default:t(()=>[(d(!0),u(i,null,b(f.store.allProduct,s=>(d(),V(C,{key:s.id},{default:t(()=>[l(_,{class:"pa-4 ma-4",rounded:"xl",height:"350",width:"250",elevation:"5",onClick:r=>x.selectProduct(s)},{default:t(()=>[l(m,null,{default:t(()=>[l(p,null,{default:t(()=>[l(c,{cols:"12",class:"img-frame"},{default:t(()=>[e("img",{src:s.img,alt:"",class:"ma-auto",height:"200",width:"200"},null,8,U)]),_:2},1024),l(c,{cols:"12"},{default:t(()=>[e("h3",$,o(s.name),1),e("div",D,[e("span",F,[e("p",G,"$"+o(s.price),1)]),e("span",null,"已售: "+o(s.sold),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),l(_,{elevation:"5",rounded:"xl"},{default:t(()=>[l(m,{class:"pa-12"},{default:t(()=>[L,E,l(p,null,{default:t(()=>[(d(!0),u(i,null,b(f.store.allProduct,s=>(d(),V(c,{cols:"12",md:"6",lg:"4",xl:"2",key:s.id},{default:t(()=>[l(_,{elevation:"5",rounded:"xl",class:"pa-4",onClick:r=>x.selectProduct(s)},{default:t(()=>[l(m,null,{default:t(()=>[l(p,null,{default:t(()=>[l(c,{cols:"12",md:"5",lg:"12",xl:"12",class:"img-frame"},{default:t(()=>[e("img",{src:s.img,alt:"",class:"ma-auto"},null,8,K)]),_:2},1024),l(c,{cols:"12",md:"5",lg:"12",xl:"12"},{default:t(()=>[e("h3",q,o(s.name),1),e("div",z,[e("span",A,[e("p",H,"$"+o(s.price),1)]),e("span",null,"已售: "+o(s.sold),1)]),e("div",J,[l(P,{modelValue:s.evaluation,"onUpdate:modelValue":r=>s.evaluation=r,"half-increments":"",readonly:"",color:"orange",density:"compact"},null,8,["modelValue","onUpdate:modelValue"]),e("b",M,o(s.evaluation),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})],64)}const Y=S(j,[["render",O],["__scopeId","data-v-edb8923a"]]);export{Y as default};