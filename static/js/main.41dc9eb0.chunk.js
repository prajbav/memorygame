(this.webpackJsonpcardmatch=this.webpackJsonpcardmatch||[]).push([[0],{10:function(t,c,e){},12:function(t,c,e){},13:function(t,c,e){"use strict";e.r(c);var a=e(1),n=e.n(a),s=e(5),i=e.n(s),r=(e(10),e(3)),d=e(2),o=e.p+"static/media/star.2e8b1958.png",l=e(0);function u(t){var c=t.card,e=t.handleClick,a=t.flipped,n=t.disabled;return Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:a?"flipped":"",children:[Object(l.jsx)("img",{className:"front",alt:"front",src:c.src}),Object(l.jsx)("img",{className:"back",alt:"card",src:o,onClick:function(t){n||e(c)}})]})},c.id)}var b=e.p+"static/media/lion.6f3d6a85.jpeg",j=e.p+"static/media/bird.35996dc4.jpeg",m=e.p+"static/media/ele.c2c7b667.png",f=e.p+"static/media/rabbit.e6a30d3b.png",h=e.p+"static/media/bear.c163cf76.png",p=e.p+"static/media/panda.657b4004.jpeg",O=(e(12),[{src:b,matched:!1},{src:j,matched:!1},{src:m,matched:!1},{src:f,matched:!1},{src:h,matched:!1},{src:p,matched:!1}]);var g=function(){var t=Object(a.useState)([]),c=Object(d.a)(t,2),e=c[0],n=c[1],s=Object(a.useState)(0),i=Object(d.a)(s,2),o=i[0],b=i[1],j=Object(a.useState)(null),m=Object(d.a)(j,2),f=m[0],h=m[1],p=Object(a.useState)(null),g=Object(d.a)(p,2),x=g[0],v=g[1],C=Object(a.useState)(!1),S=Object(d.a)(C,2),k=S[0],N=S[1],F=function(){var t=[].concat(O,O).sort((function(){return Math.random()-.5})).map((function(t){return Object(r.a)(Object(r.a)({},t),{},{id:Math.random()})}));n(t),b(0)},M=function(t){f?v(t):h(t)},T=function(){v(null),h(null),b((function(t){return t+1})),N(!1)};return Object(a.useEffect)((function(){f&&x&&(N(!0),f.src===x.src?(n((function(t){return t.map((function(t){return t.src===f.src?(console.log("setting matched"),Object(r.a)(Object(r.a)({},t),{},{matched:!0})):t}))})),console.log("matched"),T()):(console.log("not matched"),setTimeout((function(){T()}),1e3)))}),[f,x]),Object(a.useEffect)((function(){F()}),[]),console.log(e),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Card Match Game"}),Object(l.jsx)("button",{onClick:F,children:"Start"}),Object(l.jsxs)("div",{className:"cards-grid",children:[e.map((function(t){return Object(l.jsx)(u,{card:t,handleClick:M,flipped:t===f||t===x||t.matched,disabled:k},t.id)})),Object(l.jsxs)("p",{children:["Turns:",o]})]})]})},x=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,14)).then((function(c){var e=c.getCLS,a=c.getFID,n=c.getFCP,s=c.getLCP,i=c.getTTFB;e(t),a(t),n(t),s(t),i(t)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),x()}},[[13,1,2]]]);
//# sourceMappingURL=main.41dc9eb0.chunk.js.map