import{u as y}from"./product-ee6e03d7.js";import{_ as C,o as s,i as o,w as e,b as n,c0 as b,H as _,f as m,m as v,p as h,I as w,c as i,F as f,r as g,V as B,g as N,G as S,bW as z,a as V}from"./index-b012bb6d.js";const I={setup(){return{store:y()}},data(){return{showShoppingCart:!1}},computed:{productsNumber(){let a=0;for(const r of this.store.shoppingCart)for(const c of r.size)a+=c.count;return a}},methods:{delShopping(a,r){this.store.del_shoppingCart(a,r)}}},L=V("div",{class:"text-center my-4"},[V("h4",null,"目前購物車是空的唷")],-1),F={key:1};function P(a,r,c,d,p,l){return s(),o(z,{modelValue:p.showShoppingCart,"onUpdate:modelValue":r[0]||(r[0]=t=>p.showShoppingCart=t),"close-on-content-click":!1},{activator:e(({props:t})=>[n(h,v({class:"shopping-cart-btn",color:"primary",size:"x-large"},t,{icon:""}),{default:e(()=>[l.productsNumber>0?(s(),o(b,{key:0,content:l.productsNumber},{default:e(()=>[n(_,null,{default:e(()=>[m("mdi-cart")]),_:1})]),_:1},8,["content"])):(s(),o(_,{key:1},{default:e(()=>[m("mdi-cart")]),_:1}))]),_:2},1040)]),default:e(()=>[n(S,{"max-width":"500",rounded:"xl"},{default:e(()=>[d.store.shoppingCart.length==0?(s(),o(w,{key:0},{default:e(()=>[L]),_:1})):(s(),i("div",F,[(s(!0),i(f,null,g(d.store.shoppingCart,(t,x)=>(s(),o(B,{key:t.id},{default:e(()=>[(s(!0),i(f,null,g(t.size,(u,k)=>(s(),o(N,{key:t.id,"prepend-avatar":t.img,title:t.name,subtitle:u.size+"  x "+u.count},{append:e(()=>[n(h,{variant:"text",icon:"mdi-delete",onClick:T=>l.delShopping(x,k)},null,8,["onClick"])]),_:2},1032,["prepend-avatar","title","subtitle"]))),128))]),_:2},1024))),128))]))]),_:1})]),_:1},8,["modelValue"])}const H=C(I,[["render",P]]);export{H as s};
