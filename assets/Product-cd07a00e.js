import{u as V,_ as b}from"./product-a07a0a04.js";import{_ as S,L as k,z as C,o as r,c as m,a as t,b as o,w as i,G as I,I as y,d as z,j as c,t as d,b_ as _,bX as w,F as P,r as B,i as T,p as u,f as h,bY as L,bZ as U,H as f,O as F,P as H}from"./index-d1aed19a.js";import{s as N}from"./shopping-cart-614a0f84.js";import"./_commonjsHelpers-042e6b4d.js";const D={components:{shoppingCart:N},setup(){const l=V(),s=k();return{productStore:l,defaultStore:s}},data(){return{product:{},size:[],count:1,trader:{id:1,name:"admin",account:123,evaluation:4},selectedSize:""}},created(){this.product=b.filter(this.productStore.allProduct,{id:parseInt(this.$route.params.id)})[0],this.size=this.product.size.split(",")},watch:{count(l){parseInt(l)>this.product.stock&&(this.count=this.product.stock),parseInt(l)<1&&(this.count=1)}},methods:{addShopping(){this.selectedSize===void 0?this.defaultStore.setSnackbar("尚未選擇選項"):this.productStore.set_shoppingCart({id:this.product.id,img:this.product.img,name:this.product.name,size:this.size[this.selectedSize],count:parseInt(this.count)})},updateCount(l){this.count<=this.product.stock&&this.count>=1&&(l=="plus"?this.count=parseInt(this.count)+1:this.count=parseInt(this.count)-1)}}},p=l=>(F("data-v-bf2a4e47"),l=l(),H(),l),G={class:"pt-5"},M=["src"],R={class:"my-2"},j={class:"d-flex align-items-center mt-4 mb-10"},E={class:"d-flex align-center"},O=["textContent"],X={class:"flex-shrink-1 pt-1"},Y={class:"border-price"},Z={class:"mb-n2"},q={class:"d-flex align-center mb-3 mt-5"},A=p(()=>t("div",{class:"text-no-wrap"},"選項：",-1)),J={class:"d-flex flex-fill flex-wrap"},K={class:"d-flex align-center mb-3"},Q=p(()=>t("span",null,"數量：",-1)),W={style:{width:"120px"},class:"mr-5"},$={class:"flex-shrink-1"},tt={class:"d-flex align-center"},et={class:"col-12 description"},st=p(()=>t("div",{class:"ma-4 ml-2 line"},[t("b",null,"產品介紹：")],-1)),ot={class:"ma-5 content"},nt=["innerHTML"];function lt(l,s,it,dt,e,a){const v=C("shopping-cart");return r(),m("div",null,[t("div",G,[o(I,{elevation:"10",rounded:"xl",class:"pa-6"},{default:i(()=>[o(y,null,{default:i(()=>[o(z,{class:"mb-3"},{default:i(()=>[o(c,{cols:"12",md:"6",lg:"5",xl:"4",class:"image-frame"},{default:i(()=>[t("img",{src:e.product.img,alt:"image"},null,8,M)]),_:1}),o(c,{cols:"12",md:"6",lg:"7",xl:"8"},{default:i(()=>[t("h2",R,d(e.product.name),1),t("div",j,[t("div",E,[o(_,{modelValue:e.product.evaluation,"onUpdate:modelValue":s[0]||(s[0]=n=>e.product.evaluation=n),"half-increments":"",readonly:"",color:"orange",density:"compact"},null,8,["modelValue"]),t("b",{class:"ml-4 evaluation",textContent:d(e.product.evaluation)},null,8,O)]),t("div",X,[t("b",null,"銷量: "+d(e.product.sold),1)])]),t("div",Y,[t("h2",Z," $"+d(e.product.price),1)]),t("div",q,[A,t("div",J,[o(w,{modelValue:e.selectedSize,"onUpdate:modelValue":s[1]||(s[1]=n=>e.selectedSize=n)},{default:i(()=>[(r(!0),m(P,null,B(e.size,n=>(r(),T(L,{key:n.id},{default:i(({isSelected:x,toggle:g})=>[o(u,{color:"main",variant:x?"outlined":"tonal",class:"mb-2 mx-3",onClick:g},{default:i(()=>[h(d(n),1)]),_:2},1032,["variant","onClick"])]),_:2},1024))),128))]),_:1},8,["modelValue"])])]),t("div",K,[Q,t("div",W,[o(U,{modelValue:e.count,"onUpdate:modelValue":s[2]||(s[2]=n=>e.count=n),class:"text-center",min:0,max:e.product.stock,"hide-details":"","single-line":"",type:"number",variant:"solo","prepend-inner-icon":"mdi-minus","onClick:prependInner":s[3]||(s[3]=n=>a.updateCount("minus")),"append-inner-icon":"mdi-plus","onClick:appendInner":s[4]||(s[4]=n=>a.updateCount("plus"))},null,8,["modelValue","max"])]),t("div",$,[t("b",null,"庫存: "+d(e.product.stock),1)])]),o(u,{color:"main",class:"mt-5",onClick:s[5]||(s[5]=n=>a.addShopping())},{default:i(()=>[o(f,{icon:"mdi-cart-outline",class:"mr-2"}),h(" 加入購物車 ")]),_:1})]),_:1})]),_:1}),o(c,{cols:"12",class:"mb-3"},{default:i(()=>[t("div",tt,[o(f,{icon:"mdi-account",height:"50",width:"50"}),o(u,{onClick:s[6]||(s[6]=n=>l.$router.push({name:"product-trader",params:{trader:e.trader.account}})),variant:"text"},{default:i(()=>[t("b",null,"賣家："+d(e.trader.name),1)]),_:1})]),o(_,{modelValue:e.trader.evaluation,"onUpdate:modelValue":s[7]||(s[7]=n=>e.trader.evaluation=n),"half-increments":"",readonly:"",color:"orange",density:"compact"},null,8,["modelValue"])]),_:1}),t("div",et,[st,t("div",ot,d(e.product.text),1),t("div",{class:"ma-5 content",innerHTML:e.product.text},null,8,nt)])]),_:1})]),_:1})]),o(v)])}const pt=S(D,[["render",lt],["__scopeId","data-v-bf2a4e47"]]);export{pt as default};