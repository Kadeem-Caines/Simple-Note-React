(this["webpackJsonpnote-app"]=this["webpackJsonpnote-app"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n.n(a),s=n(9),i=n.n(s),l=(n(30),n(31),n(20)),o=n(13),j=n(21);n(18);var d=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(l.a,{bg:"dark",variant:"dark",sticky:"top",children:[Object(c.jsx)(l.a.Brand,{children:"Simple Note App"}),Object(c.jsx)(j.a,{className:"mr-auto",children:Object(c.jsx)(j.a.Link,{href:"https://kadeem-caines.github.io/Website-Portfolio/",children:"Home"})}),Object(c.jsx)(o.a,{variant:"outline-info",href:"mailto:kadeem.caines@gmail.com",children:"Contact"})]})})},b=n(23);var u=function(){return Object(c.jsx)("div",{className:"Header",children:Object(c.jsx)(b.a,{fluid:!0,style:{backgroundColor:"rgb(81, 73, 126)",textAlign:"center"},children:Object(c.jsx)("h1",{children:"Simple Note App"})})})},h=n(24),m=n(22),x=(n(38),"#"+Math.floor(16777215*Math.random()).toString(16));var O=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(0),i=Object(m.a)(s,2),l=i[0],j=i[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"date",id:"start",name:"trip-start"}),Object(c.jsx)("input",{type:"text",className:"title",id:"fname",name:"fname",placeholder:"Title"}),Object(c.jsx)("textarea",{id:"test",className:"box",rows:"4",cols:"50",children:"Your stories start here..."}),Object(c.jsx)(o.a,{variant:"primary",className:"save",onClick:function(){var e=document.getElementById("test").value,t=document.getElementById("start").value,c=document.getElementById("fname").value;r([].concat(Object(h.a)(n),[{id:n.length,value:e,date:t,title:c}])),alert("Your Note was submitted"),j(l+1)},children:"Save"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),l>0&&Object(c.jsxs)("p",{style:{textAlign:"center"},children:[" You currently have ",l," notes showing"]}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"noteContainer",children:n.map((function(e){return Object(c.jsxs)("div",{className:"template",style:{backgroundColor:x},children:[Object(c.jsxs)("h5",{style:{textAlign:"center"},children:[e.title,":"]}),Object(c.jsxs)("h5",{style:{textAlign:"center"},children:[e.date,":"]}),e.value]},e.id)}))})]})})};var p=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(d,{}),Object(c.jsx)(u,{}),Object(c.jsx)(O,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),v()}},[[39,1,2]]]);
//# sourceMappingURL=main.8aab8811.chunk.js.map