(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,,,,,function(c,e,t){},function(c,e,t){},function(c,e,t){},,function(c,e,t){"use strict";t.r(e);var n=t(1),r=t.n(n),a=t(5),i=t.n(a),s=(t(10),t(3)),o=t(2),d=(t(11),t(12),t(0));var u=function(c){var e=c.card,t=c.handleChoice,n=c.flipped;return Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:n?"flipped":"",children:[Object(d.jsx)("img",{className:"front",src:e.src,alt:"card front"}),Object(d.jsx)("img",{className:"back",src:"img/cover.png",onClick:function(){t(e)},alt:"card back"})]})})},m=[{src:"img/helmet-1.png",matched:!1},{src:"img/potion-1.png",matched:!1},{src:"img/ring-1.png",matched:!1},{src:"img/scroll-1.png",matched:!1},{src:"img/shield-1.png",matched:!1},{src:"img/sword-1.png",matched:!1}];var l=function(){var c=Object(n.useState)([]),e=Object(o.a)(c,2),t=e[0],r=e[1],a=Object(n.useState)(0),i=Object(o.a)(a,2),l=(i[0],i[1]),j=Object(n.useState)(null),b=Object(o.a)(j,2),h=b[0],f=b[1],p=Object(n.useState)(null),O=Object(o.a)(p,2),g=O[0],v=O[1],x=function(c){h?v(c):f(c)};Object(n.useEffect)((function(){h&&g&&(h.src===g.src?(r((function(c){return c.map((function(c){return c.src===h.src?Object(s.a)(Object(s.a)({},c),{},{matched:!0}):c}))})),N()):setTimeout((function(){return N()}),1e3))}),[h,g]),console.log(t);var N=function(){f(null),v(null),l((function(c){return c+1}))};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Magic Match"}),Object(d.jsx)("button",{onClick:function(){var c=[].concat(m,m).sort((function(){return Math.random()-.5})).map((function(c){return Object(s.a)(Object(s.a)({},c),{},{id:Math.random()})}));r(c),l(0)},children:"New Game"}),Object(d.jsx)("div",{className:"card-grid",children:t.map((function(c){return Object(d.jsx)(u,{card:c,handleChoice:x,flipped:c===h||c===g||c.matched},c.id)}))})]})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.cc5bc772.chunk.js.map