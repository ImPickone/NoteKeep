(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(4),c=n.n(r),o=n(1);var m=()=>l.a.createElement("header",null,l.a.createElement("h1",null,"NoteKeep"));var u=()=>{let e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \xa9 ",e))};var i=({title:e,content:t,onDelete:n,id:a})=>l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e),l.a.createElement("hr",{className:"note-line"}),l.a.createElement("p",null,t),l.a.createElement("button",{onClick:()=>{n(a)}},"X")),p=n(2);var E=({onAdd:e})=>{const t=Object(a.useState)({title:"",content:""}),n=Object(o.a)(t,2),r=n[0],c=n[1],m=e=>{const t=e.target,n=t.name,a=t.value;c(e=>Object(p.a)(Object(p.a)({},e),{},{[n]:a}))};return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("input",{autoComplete:"off",onChange:m,value:r.title,name:"title",placeholder:"Title"}),l.a.createElement("hr",null),l.a.createElement("textarea",{onChange:m,value:r.content,name:"content",placeholder:"Take a note...",rows:"3"}),l.a.createElement("button",{onClick:t=>{r.title&&""!==r.content&&(c({title:"",content:""}),e(r)),t.preventDefault()}},"Add")))};var s=()=>{const e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=e=>{r(t=>t.filter((t,n)=>n!==e))};return l.a.createElement("div",null," ",l.a.createElement(m,null),l.a.createElement(E,{onAdd:e=>{r(t=>[...t,e])}}),l.a.createElement("div",{className:"note-container"},n.map((e,t)=>l.a.createElement(i,{key:t,id:t,title:e.title,content:e.content,onDelete:c}))),l.a.createElement(u,null))};c.a.render(l.a.createElement(s,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.4b341e47.chunk.js.map