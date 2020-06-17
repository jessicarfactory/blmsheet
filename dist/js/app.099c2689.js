(function(t){function e(e){for(var n,l,s=e[0],o=e[1],c=e[2],u=0,p=[];u<s.length;u++)l=s[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function l(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"478f39e5"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.src=l(t);var c=new Error;i=function(e){o.onerror=o.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var f=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"19b4":function(t,e,a){},"2d77":function(t,e,a){"use strict";var n=a("58fa"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("router-view")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{"router-link":"",to:"/"}},[t._v("blackbandcamp.info")]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{"router-link":"",to:"/"}},[t._v("Home "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"router-link":"",to:"/"}},[t._v("About")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"router-link":"",to:"/"}},[t._v("Add Submission")])])])])])])}],l=(a("5c0b"),a("2877")),s={},o=Object(l["a"])(s,r,i,!1,null,null,null),c=o.exports,u=(a("d3b7"),a("8c4f")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-3"},[a("h2",[t._v("A crowd-sourced list of black artists on Bandcamp.")]),a("Filters",{attrs:{name:"Welcome to Your Vue.js App",filters:t.filters}}),a("div",{staticClass:"d-flex flex-wrap"},t._l(t.list,(function(t,e){return a("Card",{key:e,attrs:{name:t.name,location:t.location,link:t.link}})})),1)],1)},p=[],v=a("bc3a"),d=a.n(v),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-light bg-light p-3 mb-2"},[a("h3",[t._v("Filter")]),a("a",{staticClass:"btn btn-primary"},[a("svg",{staticClass:"bi bi-shuffle",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M12.646 1.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 4l-2.147-2.146a.5.5 0 0 1 0-.708zm0 8a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 12l-2.147-2.146a.5.5 0 0 1 0-.708z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M0 4a.5.5 0 0 1 .5-.5h2c3.053 0 4.564 2.258 5.856 4.226l.08.123c.636.97 1.224 1.865 1.932 2.539.718.682 1.538 1.112 2.632 1.112h2a.5.5 0 0 1 0 1h-2c-1.406 0-2.461-.57-3.321-1.388-.795-.755-1.441-1.742-2.055-2.679l-.105-.159C6.186 6.242 4.947 4.5 2.5 4.5h-2A.5.5 0 0 1 0 4z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M0 12a.5.5 0 0 0 .5.5h2c3.053 0 4.564-2.258 5.856-4.226l.08-.123c.636-.97 1.224-1.865 1.932-2.539C11.086 4.93 11.906 4.5 13 4.5h2a.5.5 0 0 0 0-1h-2c-1.406 0-2.461.57-3.321 1.388-.795.755-1.441 1.742-2.055 2.679l-.105.159C6.186 9.758 4.947 11.5 2.5 11.5h-2a.5.5 0 0 0-.5.5z"}})]),t._v(" Pick 50 random artists ")]),a("form",{staticClass:"d-block w-100"},[a("div",{staticClass:"form-inline"},[a("div",{staticClass:"input-group mr-3"},[a("label",{attrs:{for:"location"}},[t._v("Genre")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.genre,expression:"filters.genre"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filters,"genre",e.target.multiple?a:a[0])}}},t._l(t.genresData,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)]),a("div",{staticClass:"input-group"},[a("label",{attrs:{for:"location"}},[t._v("Location")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.location,expression:"filters.location"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filters,"location",e.target.multiple?a:a[0])}}},t._l(t.locationsData,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)])]),a("ul",{staticClass:"mt-3 mb-0"},[a("li",{class:{"d-inline text-uppercase h2 letter":!0,active:null===t.filters.first_letter},on:{click:function(e){t.filters.first_letter=null}}},[t._v("[All]")]),t._l(t.alphabet,(function(e){return a("li",{key:e,class:{"d-inline text-uppercase h2 letter":!0,active:e===t.filters.first_letter},on:{click:function(a){t.filters.first_letter=e}}},[t._v(" "+t._s(e)+" ")])}))],2)])])},m=[],b=(a("ac1f"),a("1276"),{name:"Filters",props:{filters:Object},mounted:function(){this.fetchGenres(),this.fetchLocations()},data:function(){return{genresData:[],locationsData:[],alphabet:"abcdefghijklmnopqrstuvwxyz#".split("")}},methods:{fetchGenres:function(){var t=this;d.a.get("/api/genres").then((function(e){return t.genresData=e.data}))},fetchLocations:function(){var t=this;d.a.get("/api/locations").then((function(e){return t.locationsData=e.data}))}}}),g=b,_=(a("2d77"),Object(l["a"])(g,h,m,!1,null,"39e4596e",null)),C=_.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card m-1"},[a("a",{attrs:{href:t.link,target:"_blank"}},[a("img",{staticClass:"card-img-top",attrs:{src:"https://via.placeholder.com/150",alt:t.name}})]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.name))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.genres))]),a("a",{staticClass:"btn btn-primary",attrs:{href:t.link,target:"_blank"}},[t._v("Open in Bandcamp")])])])},k=[],w={name:"Card",props:{name:String,genres:Array,link:String}},x=w,j=(a("eb0f"),Object(l["a"])(x,y,k,!1,null,"24284e5c",null)),O=j.exports,P={name:"Home",components:{Filters:C,Card:O},data:function(){return{list:[],filters:{genre:null,location:null,first_letter:"a"}}},watch:{filters:{handler:function(){this.fetchList()},deep:!0},"filters.genre":function(){this.filters.first_letter=null},"filters.location":function(){this.filters.first_letter=null}},mounted:function(){this.fetchList()},methods:{fetchList:function(){var t=this;d.a.get("/api/list",{params:this.filters}).then((function(e){return t.list=e.data}))}}},A=P,L=Object(l["a"])(A,f,p,!1,null,null,null),E=L.exports;n["a"].use(u["a"]);var S=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],$=new u["a"]({mode:"history",base:"/",routes:S}),M=$;n["a"].config.productionTip=!1,new n["a"]({router:M,render:function(t){return t(c)}}).$mount("#app")},"58fa":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"9c0c":function(t,e,a){},eb0f:function(t,e,a){"use strict";var n=a("19b4"),r=a.n(n);r.a}});
//# sourceMappingURL=app.099c2689.js.map