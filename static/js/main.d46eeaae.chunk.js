(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{51:function(e,t,c){},60:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c.n(s),a=c(21),n=c.n(a),i=(c(51),c(12)),l=c(7),o=c(84),j=c(86),d=c(85),b=c(46),h=c(83),m=(c(52),c(1)),x=function(){return Object(m.jsxs)(o.a,{bg:"primary",variant:"dark",className:"flexwrap",children:[Object(m.jsx)(o.a.Brand,{children:Object(m.jsx)(i.b,{to:"/insert",style:{color:"white"},children:"Insert "})}),Object(m.jsxs)(j.a,{className:"mr-auto flex justifyaround width70",children:[Object(m.jsx)(i.b,{to:"/",style:{color:"white"},children:"Home"}),Object(m.jsx)(i.b,{to:"/rice",style:{color:"white"},children:"Rice"}),Object(m.jsx)(i.b,{to:"/lentils",style:{color:"white"},children:"Lentils/Beans"}),Object(m.jsx)(i.b,{to:"/oils",style:{color:"white"},children:"Oils/Ghee"}),Object(m.jsx)(i.b,{to:"/spice",style:{color:"white"},children:"Spices"}),Object(m.jsx)(i.b,{to:"/bread",style:{color:"white"},children:"Breads/Roti"})]}),Object(m.jsxs)(d.a,{inline:!0,children:[Object(m.jsx)(b.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(m.jsx)(h.a,{variant:"outline-light",children:"Search"})]})]})},O=(c(60),c.p+"static/media/pak.69c2b172.png"),g=c.p+"static/media/palmtree3.0706cb8e.png",u=function(){return Object(m.jsxs)("div",{className:"header App flexcol alignitems justify ",style:{marginTop:"2%"},children:[Object(m.jsx)("table",{id:"title",border:"4",bordercolor:"#ff0000",style:{backgroundColor:"white",maxWidth:"80vw",padding:"5%"},children:Object(m.jsx)("tbody",{children:Object(m.jsx)("tr",{children:Object(m.jsxs)("td",{align:"center",className:"padding2",children:["  ",Object(m.jsx)("h1",{style:{marginBottom:"-3px",fontWeight:"600"},children:" Sahar's International Food "}),Object(m.jsxs)("div",{className:"flex justify alignitems ",children:[Object(m.jsx)("img",{src:O,style:{width:"90px"},className:"padding1 marginright1",alt:"header img"}),Object(m.jsx)("h1",{className:"padding1 marginright1",style:{marginBottom:"-3px",fontWeight:"600"},children:"Market"}),Object(m.jsx)("img",{src:g,style:{width:"90px"},alt:"header img"})]})]})})})}),Object(m.jsx)("div",{className:"flexwrap width50 ",style:{marginTop:"1%"},children:Object(m.jsx)("hr",{})}),Object(m.jsxs)("div",{style:{align:"center"},children:[Object(m.jsx)("h5",{children:"Welcome to our Organic and International Foods Store \u262a   "}),Object(m.jsx)("address",{children:Object(m.jsx)("a",{href:"https://www.google.com/maps?q=6831+Angola+Rd+Holland,+OH+43528&rlz=1C1CHBF_enUS819US822&um=1&ie=UTF-8&sa=X&ved=2ahUKEwix47j70LPnAhWYK80KHaphCv8Q_AUoAXoECAwQAw",alt:"store address",target:"_blank",rel:"noreferrer",children:"6831 Angola Rd Holland, OH 43528"})})]})]})},p=c(19),y=c(22),f=c.n(y),v=function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"flexwrap justifyaround",children:e.groceryItem.map((function(e){return Object(m.jsx)("div",{className:"marginright2 margintop ",style:{maxWidth:""},children:Object(m.jsxs)("div",{className:"flexcol alignitems",style:{width:"210px"},children:[Object(m.jsxs)("div",{className:"",style:{height:"4rem"},children:[e.groceryCo,"  "," ",e.groceryTitle,"-",e.grocerySize]}),Object(m.jsx)("img",{className:" ",style:{width:"190px",height:"180px"},src:e.groceryUrl,alt:"grocery url"}),Object(m.jsxs)("div",{className:"margintop",children:["$",e.groceryCost]}),Object(m.jsx)("div",{className:"margintop",children:Object(m.jsx)("button",{className:"btn btn-warning",children:"Add to Cart"})})]})},e.groceryID)}))})})},N=function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),c=t[0],r=t[1];return Object(s.useEffect)((function(){f.a.get("https://192.168.0.4:3001/getgrocery").then((function(e,t){r(e.data)}))}),[]),Object(m.jsxs)("div",{className:"App width70 padding1 ",style:{border:"4px solid wheat",backgroundColor:"white",maxWidth:"1200px"},children:[Object(m.jsx)("h1",{children:"Grocery Items"}),Object(m.jsx)("div",{className:"",children:Object(m.jsx)(v,{groceryItem:c})})]})},w=function(){return Object(m.jsx)("div",{className:"flexwrap justify width70",style:{border:"3px solid red"},children:Object(m.jsx)("h1",{children:" Rice"})})},C=function(){var e=Object(s.useState)(""),t=Object(p.a)(e,2),c=t[0],r=t[1],a=Object(s.useState)(""),n=Object(p.a)(a,2),i=n[0],l=n[1],o=Object(s.useState)(""),j=Object(p.a)(o,2),d=j[0],b=j[1],h=Object(s.useState)(""),x=Object(p.a)(h,2),O=x[0],g=x[1],u=Object(s.useState)(0),y=Object(p.a)(u,2),v=y[0],N=y[1];Object(s.useEffect)((function(){f.a.get("https://192.168.0.4:3001/getgrocery").then((function(e){console.log(e.data)}))}),[]);return Object(m.jsxs)("div",{style:{marginTop:"3%"},children:[Object(m.jsx)("h2",{children:" Insert Grocery Item:"}),Object(m.jsxs)("div",{className:"margintop10",children:[Object(m.jsx)("label",{htmlFor:"company",className:"label",children:"Grocery Co. :"}),Object(m.jsx)("input",{id:"name",value:c,name:"company",type:"text",onChange:function(e){r(e.target.value)}})]}),Object(m.jsxs)("div",{className:"margintop",children:[Object(m.jsx)("label",{htmlFor:"title",className:"label",children:"Grocery Title :"}),Object(m.jsx)("input",{id:"name",value:i,name:"title",type:"text",onChange:function(e){l(e.target.value)}})]}),Object(m.jsxs)("div",{className:"margintop",children:[Object(m.jsx)("label",{htmlFor:"size",className:"label",children:"Grocery Size :"}),Object(m.jsx)("input",{id:"name",value:d,name:"size",type:"text",onChange:function(e){b(e.target.value)}})]}),Object(m.jsxs)("div",{className:"margintop",children:[Object(m.jsx)("label",{htmlFor:"url",className:"label",children:"Image Url:"}),Object(m.jsx)("input",{id:"name",value:O,name:"url",type:"text",onChange:function(e){g(e.target.value)}})]}),Object(m.jsxs)("div",{className:"margintop",children:[Object(m.jsx)("label",{htmlFor:"cost",className:"label",children:"Grocery Cost :"}),Object(m.jsx)("input",{id:"name",name:"cost",type:"text",value:v,onChange:function(e){N(e.target.value)}})]}),Object(m.jsx)("div",{className:"flex justifyend margintop",children:Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log("I was clicked to Submit"),f.a.post("http://localhost:3001/postgrocery",{groceryCo:c,groceryTitle:i,grocerySize:d,groceryUrl:O,groceryCost:v}).then((function(){console.log("success"),g("")}))},children:"Submit"})}),Object(m.jsx)("div",{className:""})]})},S=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(i.b,{className:"btn btn-danger",to:"/inserthomebody",children:"Insert Groceries"}),Object(m.jsx)("div",{className:"margintop",children:Object(m.jsx)(i.b,{className:"btn btn-danger",to:"/insertflours",children:"Insert Flours"})})]})};var I=function(){return Object(m.jsx)(i.a,{children:Object(m.jsxs)("div",{className:"",style:{fontFamily:""},children:[Object(m.jsx)(u,{}),Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:"flex justify",style:{},children:[Object(m.jsx)(l.a,{exact:!0,path:"/",component:N}),Object(m.jsx)(l.a,{path:"/rice",component:w}),Object(m.jsx)(l.a,{path:"/inserthomebody",component:C}),Object(m.jsx)(l.a,{path:"/insert",component:S})]})]})})};c(79);n.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.d46eeaae.chunk.js.map