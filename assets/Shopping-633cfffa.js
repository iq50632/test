import{u as I}from"./product-b293171b.js";import{s as L}from"./shopping-cart-b709b29b.js";import{_ as B}from"./lodash-d6562687.js";import{_ as z,u as N,r as j,o as c,a as h,b as s,d as e,w as t,T as A,A as m,F as p,e as V,l as C,U as g,j as x,x as d,t as i,W as D,f,m as E,V as b,z as F,i as w,X as G,Y as k,n as P,Q as R,P as M,h as Q,D as W,E as X}from"./index-ac595f32.js";const S="/test/assets/dabe_blue-b703d988.png";const Y={components:{shoppingCart:L},setup(){const{xlAndUp:o}=N();return{store:I(),xlUp:o}},data(){return{test:"",user:{},model:"",showShoppingCart:!1,filterCategory:0,filterText:"",showProduct:[],categoryList:[{text:"食品",name:"food",icon:"mdi-food"},{text:"電器",name:"electricity",icon:"mdi-home-lightning-bolt"},{text:"生活",name:"life",icon:"mdi-balloon"},{text:"服飾",name:"apparel",icon:"mdi-tshirt-crew"},{text:"美妝",name:"makeup",icon:"mdi-lipstick"},{text:"運動",name:"sport",icon:"mdi-basketball"}]}},watch:{filterCategory(){this.search()}},created(){this.showProduct=[...this.store.allProduct]},methods:{search(){let o=[],n=[];if(this.filterCategory){const _=this.categoryList[this.filterCategory-1];o=B.filter(this.store.allProduct,{category:_.name})}else o=[...this.store.allProduct];o.length&&this.filterText!=""?o.forEach(_=>{_.name.includes(this.filterText)&&n.push(_)}):n=[...o],this.showProduct=n},selectProduct(o){this.store.set_product(o),this.$router.push({name:"product"})}}},u=o=>(W("data-v-c5ba2606"),o=o(),X(),o),q={class:"hot-products"},H=u(()=>s("h2",{class:"pb-4 d-flex align-center text-main"},[s("img",{src:S,height:"50",width:"50",alt:"",class:"ml-2 mr-3"}),f(" 熱銷產品 ")],-1)),J=u(()=>s("hr",{class:"py-5"},null,-1)),K=["src"],O={class:"my-3 text-ellipsis"},Z={class:"d-flex justify-space-between"},$={class:"line"},ee={class:"mb-n5"},te={class:"pb-4 d-flex align-center text-main"},le=u(()=>s("img",{src:S,height:"50",width:"50",alt:"",class:"ml-2 mr-3"},null,-1)),se={class:"ml-auto d-flex align-center my-3",style:{width:"300px"}},oe=u(()=>s("div",{class:"flex-grow-1 text-center"},[s("p",{style:{"font-size":"40px","font-family":"unset","padding-top":"20px"}},"All"),s("br"),s("h4",null,"全部")],-1)),ae={class:"flex-grow-1 text-center"},ne=u(()=>s("br",null,null,-1)),ie=u(()=>s("br",null,null,-1)),ce=u(()=>s("hr",{class:"py-5"},null,-1)),re=["src"],de={class:"my-3 text-ellipsis"},ue={class:"d-flex justify-space-between"},me={class:"line-5"},_e={class:"mb-n5"},he={class:"d-flex align-center mt-3"},fe={key:0,class:"ml-2"};function pe(o,n,_,v,a,y){const T=j("shopping-cart");return c(),h(p,null,[s("div",q,[H,J,e(A,{modelValue:a.model,"onUpdate:modelValue":n[0]||(n[0]=l=>a.model=l),class:"mt-2 mb-10","selected-class":"bg-success",height:"350","show-arrows":""},{default:t(()=>[(c(!0),h(p,null,V(v.store.allProduct,l=>(c(),C(D,{key:l.id},{default:t(()=>[e(m,{class:"pa-4 ma-4",rounded:"xl",height:"350",width:"250",elevation:"5",onClick:r=>y.selectProduct(l)},{default:t(()=>[e(g,null,{default:t(()=>[e(x,null,{default:t(()=>[e(d,{cols:"12",class:"img-frame"},{default:t(()=>[s("img",{src:l.img,alt:"",class:"ma-auto",height:"200",width:"200"},null,8,K)]),_:2},1024),e(d,{cols:"12"},{default:t(()=>[s("h3",O,i(l.name),1),s("div",Z,[s("div",$,[s("p",ee,"$"+i(l.price),1)]),s("div",null,"已售: "+i(l.sold),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),e(m,{elevation:"5",rounded:"xl"},{default:t(()=>[e(g,{class:"pa-12"},{default:t(()=>[s("h2",te,[le,f(" 新品上市 "),s("div",se,[e(E,null,{activator:t(({props:l})=>[e(b,F({class:"mt-4 mr-2",elevation:"0",variant:"tonal",rounded:"xl"},l),{default:t(()=>[e(w,null,{default:t(()=>[f(i(a.filterCategory?a.categoryList[a.filterCategory-1].icon:""),1)]),_:1}),f(" "+i(a.filterCategory?a.categoryList[a.filterCategory-1].text:"全部"),1)]),_:2},1040)]),default:t(()=>[e(m,{"max-width":"550",rounded:"xl"},{default:t(()=>[e(g,null,{default:t(()=>[e(G,{"selected-class":"bg-main",modelValue:a.filterCategory,"onUpdate:modelValue":n[1]||(n[1]=l=>a.filterCategory=l)},{default:t(()=>[e(x,null,{default:t(()=>[e(d,{cols:"4"},{default:t(()=>[e(k,null,{default:t(({selectedClass:l,toggle:r})=>[e(m,{class:P(["d-flex align-center rounded-xl",l]),height:"120",onClick:r},{default:t(()=>[oe]),_:2},1032,["class","onClick"])]),_:1})]),_:1}),(c(!0),h(p,null,V(a.categoryList,l=>(c(),C(d,{key:l,cols:"4"},{default:t(()=>[e(k,null,{default:t(({selectedClass:r,toggle:U})=>[e(m,{class:P(["d-flex align-center rounded-xl",r]),height:"120",onClick:U},{default:t(()=>[s("div",ae,[e(w,{style:{"font-size":"40px"}},{default:t(()=>[f(i(l.icon),1)]),_:2},1024),ne,ie,s("h4",null,i(l.text),1)])]),_:2},1032,["class","onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(R,{label:"搜尋商品",modelValue:a.filterText,"onUpdate:modelValue":n[2]||(n[2]=l=>a.filterText=l),"hide-details":"",variant:"underlined"},null,8,["modelValue"]),e(b,{class:"mt-2",elevation:"0",icon:"mdi-magnify",onClick:y.search},null,8,["onClick"])])]),ce,e(x,null,{default:t(()=>[(c(!0),h(p,null,V(a.showProduct,l=>(c(),C(d,{cols:"6",sm:"6",md:"4",lg:"3",xl:"3",key:l.id},{default:t(()=>[e(m,{elevation:"5",rounded:"xl",class:"pa-4",onClick:r=>y.selectProduct(l)},{default:t(()=>[e(g,null,{default:t(()=>[e(x,null,{default:t(()=>[e(d,{cols:"12",class:"img-frame"},{default:t(()=>[s("img",{src:l.img,alt:"",class:"ma-auto"},null,8,re)]),_:2},1024),e(d,{cols:"12"},{default:t(()=>[s("h3",de,i(l.name),1),s("div",ue,[s("span",me,[s("p",_e,"$"+i(l.price),1)]),s("span",null,"已售: "+i(l.sold),1)]),s("div",he,[e(M,{modelValue:l.evaluation,"onUpdate:modelValue":r=>l.evaluation=r,"half-increments":"",readonly:"",color:"orange",density:"compact"},null,8,["modelValue","onUpdate:modelValue"]),v.xlUp?(c(),h("b",fe,i(l.evaluation),1)):Q("",!0)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e(T)],64)}const Ce=z(Y,[["render",pe],["__scopeId","data-v-c5ba2606"]]);export{Ce as default};
