(this.webpackJsonpcardmatch=this.webpackJsonpcardmatch||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),s=c(5),i=c.n(s),r=(c(10),c(3)),d=c(2),o=c.p+"static/media/star.2e8b1958.png",l=c(0);function j(t){var e=t.card,c=t.handleClick,n=t.flipped,a=t.disabled;return Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:n?"flipped":"",children:[Object(l.jsx)("img",{className:"front",alt:"front",src:e.src}),Object(l.jsx)("img",{className:"back",alt:"card",src:o,onClick:function(t){a||c(e)}})]})},e.id)}var u=c.p+"static/media/lion.6f3d6a85.jpeg",b=c.p+"static/media/bird.35996dc4.jpeg",m=c.p+"static/media/ele.c2c7b667.png",h=c.p+"static/media/rabbit.e6a30d3b.png",O=c.p+"static/media/bear.c163cf76.png",f=c.p+"static/media/panda.657b4004.jpeg",p=(c(12),[{src:u,matched:!1},{src:b,matched:!1},{src:m,matched:!1},{src:h,matched:!1},{src:O,matched:!1},{src:f,matched:!1}]);var g=function(){var t=Object(n.useState)([]),e=Object(d.a)(t,2),c=e[0],s=e[1],i=Object(n.useState)(0),o=Object(d.a)(i,2),u=o[0],b=o[1],m=Object(n.useState)(null),h=Object(d.a)(m,2),O=h[0],f=h[1],g=Object(n.useState)(null),x=Object(d.a)(g,2),v=x[0],k=x[1],N=Object(n.useState)(!1),S=Object(d.a)(N,2),C=S[0],M=S[1],F=Object(n.useState)(!1),w=Object(d.a)(F,2),T=w[0],y=w[1],E=Object(n.useState)(0),B=Object(d.a)(E,2),I=B[0],J=B[1],L=function(){var t=[].concat(p,p).sort((function(){return Math.random()-Math.floor(5*Math.random()+1)})).map((function(t){return Object(r.a)(Object(r.a)({},t),{},{id:Math.random()})}));s(t),b(0),J(0),y(!1)},P=function(t){O?k(t):f(t)},A=function(){k(null),f(null),b((function(t){return t+1})),M(!1)};return Object(n.useEffect)((function(){I<p.length?O&&v&&(M(!0),O.src===v.src?(s((function(t){return t.map((function(t){return t.src===O.src?(console.log("count",I),J(I+1),Object(r.a)(Object(r.a)({},t),{},{matched:!0})):t}))})),console.log("matched"),A()):(console.log("not matched"),setTimeout((function(){A()}),1e3))):I===p.length&&y(!0)}),[O,v,I]),Object(n.useEffect)((function(){L()}),[]),console.log(I,"matches deeky"),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Card Match Game Using React Hooks"}),Object(l.jsxs)("div",{className:"menu-info",children:[Object(l.jsx)("span",{children:Object(l.jsx)("button",{onClick:L,children:"Start"})}),Object(l.jsxs)("span",{className:"turns-button",children:["Turns:",u]})]}),T&&Object(l.jsx)(a.a.Fragment,{children:Object(l.jsx)("div",{id:"overlay",className:"container",onClick:function(){y(!1),L()},children:Object(l.jsx)("div",{className:"won-text",children:" You won! "})})}),Object(l.jsx)("div",{className:"cards-grid",children:c.map((function(t){return Object(l.jsx)(j,{card:t,handleClick:P,flipped:t===O||t===v||t.matched,disabled:C},t.id)}))})]})},x=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),s(t),i(t)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),x()}},[[13,1,2]]]);
//# sourceMappingURL=main.e4b33b78.chunk.js.map