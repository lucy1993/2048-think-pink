(this.webpackJsonp2048=this.webpackJsonp2048||[]).push([[0],{15:function(t,n,e){},17:function(t,n,e){},18:function(t,n,e){"use strict";e.r(n);var c=e(0),a=e(1),r=e.n(a),i=e(8),o=e.n(i),s=(e(15),e(7)),u=e(9),l=e(3),f=e(6),h=e.n(f),j=(e(17),{2:"two",4:"four",8:"eight",16:"sixteen",32:"thirty-two",64:"sixty-four",128:"h-t-e",256:"t-f-s",512:"f-o-t",1024:"o-z-t-f",2048:"t-z-f-e"});var b=function(){var t=Object(a.useRef)(),n=Object(a.useState)(null),e=Object(l.a)(n,2),r=e[0],i=e[1],o=Object(a.useState)(null),f=Object(l.a)(o,2),b=f[0],d=f[1],v=Object(a.useState)(0),m=Object(l.a)(v,2),g=m[0],p=m[1],O=Object(a.useState)([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,2]]),x=Object(l.a)(O,2),w=x[0],y=x[1],N=function(){d("new"),p(0),y([[0,0,0,0],[2,0,0,0],[0,0,0,0],[0,0,0,2]])};Object(a.useEffect)((function(){M(),t.current.focus()})),Object(a.useEffect)((function(){y(E())}),[r]);var E=function t(){var n=Object(u.a)(w);if("lost"!==b){var e=Math.floor(4*Math.random()),c=Math.floor(4*Math.random()),a=Math.floor(6*Math.random())+1<4?2:4;if(n[e][c])return t();n[e][c]=a}return n},M=function(){h.a.config({left:function(){C("left")},right:function(){C("right")},up:function(){C("up")},down:function(){C("down")}})},A=function(t,n){var e=[],c=0;t.forEach((function(t){var a=[];t.forEach((function(t){t&&a.push(t)})),4===a.length&&c++,"right"===n?e.push(new Array(4-a.length).fill(0).concat(a)):e.push(a.concat(new Array(4-a.length).fill(0)))}));var a=function(t,n){var e=[];return t.forEach((function(t){var c=[];t.map((function(n,e){var a=t;return n&&(n===a[e+1]?(a[e+1]=0,c.push(n+n),p(g+n+n)):c.push(n)),a})),"right"===n?e.push(new Array(4-c.length).fill(0).concat(c)):e.push(c.concat(new Array(4-c.length).fill(0)))})),e}(e,n);return 4!==c||S(w)||d("lost"),a},S=function(t){var n=!1;return t.forEach((function(t){t.map((function(e,c){e&&e===t[c+1]&&(n=!0)}))})),n},k=function(t){var n=[];return w.forEach((function(e,c){var a=[];e.forEach((function(n,e){a.push(t[e][c])})),n.push(a)})),n},C=function(t){var n=null;if("left"===t&&(n=A(w,t)),"right"===t&&(n=A(w,t)),"up"===t){var e=k(w),c=A(e,t);n=k(c)}if("down"===t){var a=k(w),r=A(a,"right");n=k(r)}n&&y(n),i(t)};return Object(c.jsx)("div",Object(s.a)(Object(s.a)({className:"App",ref:t},h.a.events),{},{tabIndex:"1",children:Object(c.jsxs)("div",{className:"big-box",children:[Object(c.jsxs)("div",{className:"box-header",children:[Object(c.jsx)("div",{className:"new-game-btn",onClick:N,children:" new game "}),Object(c.jsxs)("div",{className:"new-score-btn",children:[" score: ",g," "]})]}),Object(c.jsxs)("div",{className:"small-box",children:["lost"===b?Object(c.jsxs)("div",{className:"pop-up-message",children:[Object(c.jsx)("h1",{className:"message-text",children:" game over! "}),Object(c.jsx)("div",{className:"new-game-btn",onClick:N,children:" try again "})]}):null,w&&w.length?w.map((function(t,n){var e="swipeAnimation";setTimeout((function(){return e=" "}),0);var a=n;return"up"===r&&(a=4-n),Object(c.jsxs)("div",{className:"row",children:[" ",t.map((function(t,n){return"right"===r?a=n:"left"===r&&(a=4-n),Object(c.jsxs)("div",{style:{animationDelay:"0.".concat(a-1,"s")},className:"".concat(t?null:e," box ").concat(t?j[t]:""),children:[" ",t||null]},Math.random())}))," "]})})):null]}),Object(c.jsx)("div",{className:"intro-text",children:" please use your arrow keys to navigate "})]})}))},d=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,19)).then((function(n){var e=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;e(t),c(t),a(t),r(t),i(t)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),d()}},[[18,1,2]]]);
//# sourceMappingURL=main.cb6067b5.chunk.js.map