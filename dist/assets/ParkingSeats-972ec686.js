import{ac as c,b7 as d,b8 as p,b9 as u}from"./installCanvasRenderer-1a88128e.js";import{i as h}from"./install-efd33b3b.js";import{_ as m,I as _,J as f,o as g,c as b,a as i}from"./index-73275c5f.js";c([d,h,p]);const v=e=>{const t=["101"],s=u(e,window.sessionStorage.getItem("theme")),o={backgroundColor:"transparent",tooltip:{},geo:{map:"parking-seats",roam:!0,selectedMode:"multiple",layoutCenter:["50%","50%"],layoutSize:"95%",tooltip:{show:!0},emphasis:{itemStyle:{borderColor:"green",borderWidth:2},label:{show:!1}},select:{itemStyle:{color:"green"},label:{show:!1,color:"white",textBorderColor:"white",textBorderWidth:2}},regions:a(t)}};return s.setOption(o);function a(r){for(var l=[],n=0;n<r.length;n++)l.push({name:r[n],silent:!0,itemStyle:{color:"#bf0e08"},emphasis:{itemStyle:{borderColor:"#aaa",borderWidth:1}},select:{itemStyle:{color:"#bf0e08"}}});return l}};const w={setup(){const e=document.createElement("script");e.setAttribute("src","https://cdn.jsdelivr.net/npm/echarts@4.9.0/map/js/world.js"),document.head.appendChild(e);const t=_(null);return f(async()=>{const{inputSvg:s,setOption:o,resize:a}=v(t.value);await s(),await o(),window.addEventListener("resize",()=>{a()})}),{parkingSeatsChart:t}}},S={class:"h-100 d-flex align-center my-auto"},y={class:"w-100"},k={class:"d-flex"},x={ref:"parkingSeatsChart",class:"chart","auto-resize":""};function C(e,t,s,o,a,r){return g(),b("div",S,[i("div",y,[i("div",k,[i("div",x,null,512)])])])}const j=m(w,[["render",C],["__scopeId","data-v-77f6a317"]]);export{j as default};