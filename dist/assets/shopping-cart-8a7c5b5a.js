import{u as y}from"./product-8593cb6e.js";import{_ as C,o as a,l as o,w as e,d as n,ca as v,i as _,f as m,z as b,V as h,U as w,a as i,F as f,e as g,$ as B,a0 as N,A as z,m as S,b as V}from"./index-03f4c1ac.js";const L={setup(){return{store:y()}},data(){return{showShoppingCart:!1}},computed:{productsNumber(){let s=0;for(const r of this.store.shoppingCart)for(const d of r.size)s+=d.count;return s}},methods:{delShopping(s,r){this.store.del_shoppingCart(s,r)}}},F=V("div",{class:"text-center my-4"},[V("h4",null,"目前購物車是空的唷")],-1),I={key:1};function P(s,r,d,c,u,l){return a(),o(S,{modelValue:u.showShoppingCart,"onUpdate:modelValue":r[0]||(r[0]=t=>u.showShoppingCart=t),"close-on-content-click":!1},{activator:e(({props:t})=>[n(h,b({class:"shopping-cart-btn",color:"primary",size:"x-large"},t,{icon:""}),{default:e(()=>[l.productsNumber>0?(a(),o(v,{key:0,content:l.productsNumber},{default:e(()=>[n(_,null,{default:e(()=>[m("mdi-cart")]),_:1})]),_:1},8,["content"])):(a(),o(_,{key:1},{default:e(()=>[m("mdi-cart")]),_:1}))]),_:2},1040)]),default:e(()=>[n(z,{"max-width":"500",rounded:"xl"},{default:e(()=>[c.store.shoppingCart.length==0?(a(),o(w,{key:0},{default:e(()=>[F]),_:1})):(a(),i("div",I,[(a(!0),i(f,null,g(c.store.shoppingCart,(t,x)=>(a(),o(B,{key:t.id},{default:e(()=>[(a(!0),i(f,null,g(t.size,(p,k)=>(a(),o(N,{key:t.id,"prepend-avatar":t.img,title:t.name,subtitle:p.size+"  x "+p.count},{append:e(()=>[n(h,{variant:"text",icon:"mdi-delete",onClick:T=>l.delShopping(x,k)},null,8,["onClick"])]),_:2},1032,["prepend-avatar","title","subtitle"]))),128))]),_:2},1024))),128))]))]),_:1})]),_:1},8,["modelValue"])}const E=C(L,[["render",P]]);export{E as s};
