(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,a){e.exports=a(340)},162:function(e,t,a){},340:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(47),i=a.n(c),o=(a(162),a(138)),l=(a(78),r.a.memo(function(e){var t=e.list,a=e.onSelect,n=e.selection;return r.a.createElement("div",{className:"list"},r.a.createElement("span",null,"Currently slected appID - ",n||"none"),t&&t.map(function(e){var t=e.appID;return r.a.createElement("div",{key:t,className:"list-item ".concat(n===t&&"active-item"),onClick:function(){return a(t)}},t)}))},function(e,t){return e.list===t.list&&e.selection===t.selection})),u=a(20);function p(e,t){var a=t.data;switch(t.type){case"LIST_LOAD":return Object(u.a)({},e,{isLoading:!0,appIDList:[]});case"LIST_LOADED":return Object(u.a)({},e,{isLoading:!1,appIDList:a});case"LOAD_APPID_INFO":return Object(u.a)({},e,{isLoading:!0,currentAppID:a,currentAppData:null});case"APPID_INFO_LOADED":return Object(u.a)({},e,{isLoading:!1,currentAppData:a});case"APPS_INFO_LOADED":return Object(u.a)({},e,{isLoading:!1,appsData:s(a,"meanSendingRateKbps")});default:return e}}var s=function(e,t){var a=Array.isArray(e)&&e.reduce(function(e,a){return e[a.appID]?e[a.appID][t].push(a[t]):(e[a.appID]={},e[a.appID][t]=[]),e},{});return Object.keys(a).map(function(e){return Object(u.a)({},a[e],{name:"appID "+e})}).map(function(e){return Object(u.a)({},e,{avgSendingRate:e[t].reduce(function(e,t){return parseFloat(e)+parseFloat(t)})/e[t].length})})},d=a(8),m=function(e){var t=e.data,a=e.dataKey;return t?r.a.createElement(d.b,{width:800,height:600,data:t},r.a.createElement(d.k,null),r.a.createElement(d.j,null),r.a.createElement(d.i,null),r.a.createElement(d.d,{formatter:D("Distribution of sending rate within selected appID")}),r.a.createElement(d.a,{dataKey:a,fill:"#9acd32"})):r.a.createElement("span",null,"Preparing chart data......")},f=function(e){var t=e.data,a=e.dataKey;return t?r.a.createElement(d.f,{width:800,height:400,data:t},r.a.createElement(d.j,{dataKey:"name"}),r.a.createElement(d.k,null),r.a.createElement(d.i,null),r.a.createElement(d.d,{formatter:D("Distribution of average application sending rate across all appIDs")}),r.a.createElement(d.e,{type:"monotone",dataKey:a,stroke:"#4363d8",strokeWidth:3})):r.a.createElement("span",null,"Preparing chart data...")},D=function(e){return function(t,a){var n=a.color;return r.a.createElement("span",{style:{color:n}},e)}},h={isLoading:!1,appIDList:[],currentAppID:null,currentAppData:null,appsData:null},E=function(){var e=Object(n.useReducer)(p,h),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){!function(e){e({type:"LIST_LOAD"}),fetch("https://fathomless-island-89335.herokuapp.com/app").then(function(e){return e.json()}).then(function(t){return e({type:"LIST_LOADED",data:t})}),fetch("https://fathomless-island-89335.herokuapp.com/rates").then(function(e){return e.json()}).then(function(t){return e({type:"APPS_INFO_LOADED",data:t})})}(c)},[]),r.a.createElement("div",{className:"App"},r.a.createElement(l,{list:a.appIDList,onSelect:function(e){return function(e,t){e({type:"LOAD_APPID_INFO",data:t.toString()}),fetch("https://fathomless-island-89335.herokuapp.com/app/".concat(t)).then(function(e){return e.json()}).then(function(t){return e({type:"APPID_INFO_LOADED",data:t})})}(c,e)},selection:a.currentAppID}),r.a.createElement("div",{className:"chartHolder"},r.a.createElement(m,{data:a.currentAppData&&a.currentAppData.filter(function(e){return e.meanSendingRateKbps.length}),dataKey:"meanSendingRateKbps"}),r.a.createElement(f,{data:a.appsData,dataKey:"avgSendingRate"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,t,a){}},[[157,1,2]]]);
//# sourceMappingURL=main.145f5ca3.chunk.js.map