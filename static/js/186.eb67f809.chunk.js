"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{1552:function(e,r,t){t.d(r,{Z:function(){return u}});var n,c=t(168),a=(t(6444).ZP.div(n||(n=(0,c.Z)(["\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n"]))),t(184),function(e){e.children});a.defaultProps={children:[]};var u=a},186:function(e,r,t){t.r(r);var n=t(4165),c=t(5861),a=t(9439),u=t(2791),s=t(7689),i=t(3521),o=t(1552),p=t(4390),f=t(184);r.default=function(){var e=(0,u.useState)([]),r=(0,a.Z)(e,2),t=r[0],v=r[1],l=(0,u.useState)(!1),h=(0,a.Z)(l,2),d=h[0],Z=h[1],x=(0,u.useState)(""),g=(0,a.Z)(x,2),m=g[0],w=g[1],y=(0,s.UO)().movieId;(0,u.useEffect)((function(){k()}),[]);var k=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(){var r,t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.next=4,p.ZP.fetchReviews(y);case 4:r=e.sent,t=r.results,v(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error("\u0429\u043e\u0441\u044c \u0432\u0456\u0434\u0431\u0443\u043b\u043e\u0441\u044f \u043d\u0435 \u0442\u0430\u043a \u0456\u0437 \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u0434\u043e \u0432\u0456\u0434\u0435\u043e\u0442\u0435\u043a\u0438. \u043f\u043e\u0434\u0440\u043e\u0431\u0438\u0446\u0456 \u043f\u043e\u043c\u0438\u043b\u043a\u0438 \u0442\u0443\u0442 :",e.t0),w(e.t0.message);case 13:return e.prev=13,Z(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,9,13,16]])})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{children:[t.length>0?(0,f.jsx)("ul",{children:t.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,f.jsx)("li",{children:(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:t}),(0,f.jsx)("b",{children:n})]})},r)}))}):(0,f.jsx)("p",{children:" \u0423 \u043d\u0430\u0441 \u043d\u0435\u043c\u0430\u0454 \u0440\u0435\u0446\u0435\u043d\u0437\u0456\u0439 \u043d\u0430 \u0446\u0435\u0439 \u0444\u0456\u043b\u044c\u043c, \u0442\u043e\u0436, \u0434\u043e\u0432\u0456\u0440\u0442\u0435\u0441\u044f \u0456\u043d\u0442\u0443\u0456\u0446\u0456\u0457"}),d&&(0,f.jsx)(i.c,{}),m&&(0,f.jsx)(o.Z,{children:(0,f.jsx)("h2",{children:"\u0421\u0435\u0440\u0432\u0456\u0441 \u043f\u0456\u0448\u043e\u0432 \u043f\u043e\u043f\u043e\u0457\u0441\u0442\u0438. \u041c\u043e\u0436\u043b\u0438\u0432\u043e \u0441\u043a\u043e\u0440\u043e \u043f\u043e\u0432\u0435\u0440\u043d\u0435\u0442\u044c\u0441\u044f."})})]})}},4390:function(e,r,t){var n=t(4165),c=t(5861),a=t(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="d3617e758f1c3082c7bc2da26a77c463",s=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(){var r,t,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("trending/movie/day?api_key=".concat(u));case 3:return r=e.sent,t=r.data,c=t.results,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0),console.error("\u0429\u043e\u0441\u044c \u0432\u0456\u0434\u0431\u0443\u043b\u043e\u0441\u044f \u043d\u0435 \u0442\u0430\u043a \u0456\u0437 \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u0434\u043e \u0432\u0456\u0434\u0435\u043e\u0442\u0435\u043a\u0438. \u043f\u043e\u0434\u0440\u043e\u0431\u0438\u0446\u0456 \u043f\u043e\u043c\u0438\u043b\u043a\u0438 \u0442\u0443\u0442 :",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(r,t){var c,s,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("search/movie?api_key=".concat(u,"&query=").concat(r,"&page=").concat(t,"&language=en-US"));case 3:return c=e.sent,s=c.data,i=s.results,e.abrupt("return",i);case 9:e.prev=9,e.t0=e.catch(0),console.error("\u0429\u043e\u0441\u044c \u0432\u0456\u0434\u0431\u0443\u043b\u043e\u0441\u044f \u043d\u0435 \u0442\u0430\u043a \u0456\u0437 \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u0434\u043e \u0432\u0456\u0434\u0435\u043e\u0442\u0435\u043a\u0438. \u043f\u043e\u0434\u0440\u043e\u0431\u0438\u0446\u0456 \u043f\u043e\u043c\u0438\u043b\u043a\u0438 \u0442\u0443\u0442 :",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r,t){return e.apply(this,arguments)}}(),o=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(r){var t,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("/movie/".concat(r,"?api_key=").concat(u,"&language=en-US"));case 3:return t=e.sent,c=t.data,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.error("\u0429\u043e\u0441\u044c \u0432\u0456\u0434\u0431\u0443\u043b\u043e\u0441\u044f \u043d\u0435 \u0442\u0430\u043a \u0456\u0437 \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u0434\u043e \u0432\u0456\u0434\u0435\u043e\u0442\u0435\u043a\u0438. \u043f\u043e\u0434\u0440\u043e\u0431\u0438\u0446\u0456 \u043f\u043e\u043c\u0438\u043b\u043a\u0438 \u0442\u0443\u0442 :",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(r){var t,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("/movie/".concat(r,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return t=e.sent,c=t.data,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.error("\u0429\u043e\u0441\u044c \u0432\u0456\u0434\u0431\u0443\u043b\u043e\u0441\u044f \u043d\u0435 \u0442\u0430\u043a \u0456\u0437 \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u0434\u043e \u0432\u0456\u0434\u0435\u043e\u0442\u0435\u043a\u0438. \u043f\u043e\u0434\u0440\u043e\u0431\u0438\u0446\u0456 \u043f\u043e\u043c\u0438\u043b\u043a\u0438 \u0442\u0443\u0442 :",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(r){var t,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 3:return t=e.sent,c=t.data,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.error("\u0429\u043e\u0441\u044c \u0432\u0456\u0434\u0431\u0443\u043b\u043e\u0441\u044f \u043d\u0435 \u0442\u0430\u043a \u0456\u0437 \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u0434\u043e \u0432\u0456\u0434\u0435\u043e\u0442\u0435\u043a\u0438. \u043f\u043e\u0434\u0440\u043e\u0431\u0438\u0446\u0456 \u043f\u043e\u043c\u0438\u043b\u043a\u0438 \u0442\u0443\u0442 :",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}();r.ZP={fetchTrends:s,fetchMoviesBySearch:i,fetchMovieById:o,fetchCast:p,fetchReviews:f}}}]);
//# sourceMappingURL=186.eb67f809.chunk.js.map