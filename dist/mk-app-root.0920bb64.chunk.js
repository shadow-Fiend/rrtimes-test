(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1576:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,i=l(n(2)),a=l(n(43)),u=l(n(4)),o=l(n(8)),c=l(n(3)),d=l(n(5)),p=n(1),s=(l(p),n(955)),f=l(n(1516));function l(t){return t&&t.__esModule?t:{default:t}}var h=(0,s.wrapper)(f.default)(r=function(t){function e(){return(0,u.default)(this,e),(0,c.default)(this,(e.__proto__||(0,a.default)(e)).apply(this,arguments))}return(0,d.default)(e,t),(0,o.default)(e,[{key:"render",value:function(){return this.props.monkeyKing((0,i.default)({},this.props,{path:"root"}))}}]),e}(p.Component))||r;e.default=h,t.exports=e.default},1577:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=d(n(2)),i=d(n(4));e.default=function(t){var e=new a.action(t),n=new p((0,r.default)({},t,{metaAction:e})),i=(0,r.default)({},e,n);return e.config({metaHandlers:i}),i};d(n(1));var a=n(955),u=d(n(1487)),o=n(49),c=n(1497);function d(t){return t&&t.__esModule?t:{default:t}}var p=function t(e){var n=this;(0,i.default)(this,t),this.onInit=function(t){var e=t.component,r=t.injections;n.component=e,n.injections=r;var i=(0,c.getInitState)(),a=i.data.currentAppName,u=o.history.getChildApp("mk-app-root")||a;i.data.currentAppName=u,r.reduce("init",{initState:i}),o.history.listen("mk-app-root",n.listen),n.onRedirect({appName:o.history.getChildApp("mk-app-root")||a})},this.listen=function(t,e,r){var i=(0,c.getInitState)().data.currentAppName,a=n.metaAction.gf("data.currentAppName")||i,u=t||i;u!=a&&n.injections.reduce("redirect",u)},this.onRedirect=function(t){var e=t.appName;o.history.pushChildApp("mk-app-root",e)},this.componentWillUnmount=function(){o.history.unlisten("mk-app-root",n.listen)},this.metaAction=e.metaAction,this.config=u.default.current};t.exports=e.default},1578:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i,a=d(n(2)),u=d(n(4));e.default=function(t){var e=new o.reducer(t),n=new p((0,a.default)({},t,{metaReducer:e}));return(0,a.default)({},e,n)};n(58);var o=n(955),c=d(n(1487));n(1497),n(49);function d(t){return t&&t.__esModule?t:{default:t}}var p=(r=function t(e){(0,u.default)(this,t),i.call(this),this.metaReducer=e.metaReducer,this.config=c.default.current},i=function(){var t=this;this.init=function(e,n){return t.metaReducer.init(e,n.initState)},this.redirect=function(e,n){return t.metaReducer.sf(e,"data.currentAppName",n)}},r);t.exports=e.default}}]);
//# sourceMappingURL=mk-app-root.0920bb64.chunk.js.map