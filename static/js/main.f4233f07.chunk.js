(this["webpackJsonpscrabble-game"]=this["webpackJsonpscrabble-game"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c,r=n(1),a=n.n(r),o=n(21),i=n.n(o),l=(n(29),n(35)),s=n(23),u=(n(30),n(5)),d=n(10),j="draggable_item",b="Initial",p="Selection",f=b,O=p,m=[{letter:"e",score:1,count:12},{letter:"a",score:1,count:9},{letter:"i",score:1,count:9},{letter:"o",score:1,count:8},{letter:"n",score:1,count:6},{letter:"r",score:1,count:6},{letter:"t",score:1,count:6},{letter:"l",score:1,count:4},{letter:"s",score:1,count:4},{letter:"u",score:1,count:4},{letter:"d",score:2,count:4},{letter:"g",score:2,count:3},{letter:"b",score:3,count:2},{letter:"c",score:3,count:2},{letter:"m",score:3,count:2},{letter:"p",score:3,count:2},{letter:"f",score:4,count:2},{letter:"h",score:4,count:2},{letter:"v",score:4,count:2},{letter:"w",score:4,count:2},{letter:"y",score:4,count:2},{letter:"k",score:5,count:1},{letter:"j",score:8,count:1},{letter:"x",score:8,count:1},{letter:"q",score:10,count:1},{letter:"z",score:10,count:1}],v=function(){return Date.now()},h=function(e){return v()+e},g=[m[0],m[25],m[3],m[22],m[7]].map((function(e,t){return Object(d.a)(Object(d.a)({},e),{},{id:h(t),name:"".concat(t,"-").concat(e.letter),currentParent:f})})),x=[m[3],m[8]].map((function(e,t){return Object(d.a)(Object(d.a)({},e),{},{id:v()+t,name:"".concat(t,"-").concat(e.letter),currentParent:O})})),P=n(15);!function(e){e.MoveTile="MOVE_TILE",e.ChangeParent="CHANGE_PARENT"}(c||(c={}));var y=function(e,t){var n=e.payload,c=n.currentParent,r=n.dragIndex,a=n.hoverIndex,o=t[c],i=o[r];return o.splice(r,1),o.splice(a,0,i),o},I=function(e,t){switch(t.type){case c.MoveTile:var n=t.payload.currentParent,r="Selection"===n;return{Initial:"Initial"===n?y(t,e):Object(P.a)(e.Initial),Selection:r?y(t,e):Object(P.a)(e.Selection)};case c.ChangeParent:return function(e,t){var n=e.payload,c=n.currentParent,r=n.index,a=n.newParent,o=t[c],i=o[r];o.splice(r,1);var l=t[a];return l.push(i),{Initial:"Initial"===c?o:l,Selection:"Selection"===c?o:l}}(t,e);default:return Object(P.a)(e)}},N=n(2),C={tiles:{Initial:g,Selection:x}},S=Object(r.createContext)({state:C,dispatch:function(){return null}}),T=function(e,t){var n=e.tiles;return{tiles:I(n,t)}},D=function(e){var t=e.children,n=Object(r.useReducer)(T,C),c=Object(u.a)(n,2),a=c[0],o=c[1];return Object(N.jsx)(S.Provider,{value:{state:a,dispatch:o},children:t})},k=n(36),w=n(37),R=function(e){var t=e.name,n=e.index,c=e.currentParent,a=e.children,o=e.changeItemParent,i=e.moveItemHandler,l=Object(r.useRef)(null),s=Object(k.a)({accept:j,hover:function(e,t){if(l.current){var r=e.index,a=n;if(r!==a){var o=l.current;if(console.log("current: ".concat(o)),o){var s=o.getBoundingClientRect(),u=(s.bottom-s.top)/2,d=t.getClientOffset(),j=(d?d.y:0)-s.top;r<a&&j<u||r>a&&j>u||i(r,a,c)}}}}}),d=Object(u.a)(s,2)[1],b=Object(w.a)({item:{index:n,name:t,currentParent:c,type:j},end:function(e,t){var n=t.getDropResult();if(e&&n&&n.name){var c=n.name;o(e,c)}},collect:function(e){return{isDragging:e.isDragging()}}}),p=Object(u.a)(b,2),f=p[0].isDragging?.4:1;return(0,p[1])(d(l)),Object(N.jsx)("div",{ref:l,className:"movable-item",style:{opacity:f},children:a})},E=function(e){var t=e.letter,n=e.score;return Object(N.jsxs)("div",{className:"center-box tile",children:[Object(N.jsx)("h1",{children:t}),Object(N.jsx)("p",{className:"score",children:n})]})},F=function(e){var t=e.tileRackType,n=e.className,a=Object(r.useContext)(S),o=a.state,i=a.dispatch,l=function(e,t){i({type:c.ChangeParent,payload:{newParent:t,currentParent:e.currentParent,name:e.name,index:e.index}})},s=function(e,t,n){i({type:c.MoveTile,payload:{dragIndex:e,hoverIndex:t,currentParent:n}})},d="Initial"===t?"Initial":"Selection",b=o.tiles[d].map((function(e,t){return Object(N.jsx)(R,{changeItemParent:l,currentParent:e.currentParent,index:t,moveItemHandler:s,name:"".concat(e?e.name:"not-known"),children:Object(N.jsx)(E,{letter:e.letter,score:e.score})},e.id)})),p=Object(k.a)({accept:j,drop:function(){return{name:t}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}},canDrop:function(e){return e.currentParent!==t}}),f=Object(u.a)(p,2)[1];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{ref:f,className:n,children:b}),Object(N.jsxs)("p",{style:{display:"none"},children:["state: ",JSON.stringify(o.tiles)]})]})},M=function(){var e=b,t=p;return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)("div",{className:"container",children:Object(N.jsx)(D,{children:Object(N.jsxs)(l.a,{backend:s.a,children:[Object(N.jsx)(F,{tileRackType:e,className:"tiles-container initial"}),Object(N.jsx)(F,{tileRackType:t,className:"tiles-container selection"})]})})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};i.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(M,{})}),document.getElementById("root")),A()}},[[33,1,2]]]);
//# sourceMappingURL=main.f4233f07.chunk.js.map