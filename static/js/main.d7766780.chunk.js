(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,function(e,t,n){},,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(4),c=n.n(i),l=(n(11),n(5)),r=n(1),s=function(e){var t=e.data,n=e.removeItem;return t.isList?o.a.createElement("div",{className:"sub-list"},o.a.createElement("li",{className:"sub-title",onClick:n},t.title),o.a.createElement(u,null)):o.a.createElement("div",null,o.a.createElement("li",{className:"title",onClick:n},t.title))},u=(n(12),function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)([]),u=Object(r.a)(c,2),m=u[0],h=u[1],d=function(e){var t=m.findIndex((function(t){return e.target.innerHTML===t.title}));console.log(t);var n=[];return t>-1&&(m.splice(t,1),n=Object(l.a)(m),h(n)),console.log(n),n};return o.a.createElement("div",{className:"list"},o.a.createElement("input",{className:"to-do-input",type:"text",placeholder:"Please enter a To-Do.",onKeyPress:function(e){"Enter"===e.key&&(m.push({title:e.target.value,isList:n}),h(m.slice(0)),e.target.value="",i(!1),console.log(m))}}),o.a.createElement("input",{type:"checkbox",checked:n,onChange:function(e){i(e.target.checked)}}),o.a.createElement("span",{className:"list-check"}," Is this item another list?"),m.map((function(e){return o.a.createElement(s,{data:e,removeItem:d})})))});n(3);var m=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h4",{className:"app-title"},"This is your ToDo list. Click on an item to delete it. Make lists within lists by clicking on the checkbox before entering a ToDo."),o.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.d7766780.chunk.js.map