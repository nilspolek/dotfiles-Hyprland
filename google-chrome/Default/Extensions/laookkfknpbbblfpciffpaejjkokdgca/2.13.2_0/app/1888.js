"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[1888],{30512:(e,t,d)=>{d.d(t,{Z:()=>h});var a=d(20144),n=d(88026),s=d(51726),i=d.n(s),o=d(55482),u=d(7838),l=d(35174);let c={};const r={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileClickHandler=!1}),100),e.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),c[e.dataset.mobileClickHandlerId]=t.value,e.addEventListener("click",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",c[e.dataset.mobileClickHandlerId]),delete c[e.dataset.mobileClickHandlerId],delete e.dataset.mobileClickHandlerId,delete e.dataset.justBoundMobileClickHandler)}};let k={};const b={bind:function(e,t){let d,a;e.dataset.justBoundClickOutsideHandler=!0,setTimeout((()=>{e.dataset.justBoundClickOutsideHandler=!1}),100);const n=e=>{a=!1,(e=>e&&e.clientX>window.innerWidth)(e)?a=!0:d=e.target},s=n=>{a||(t.modifiers.bubble||!e.contains(d)&&!e.contains(n.target)&&e!==d&&e!==n.target&&"true"!==e.dataset.justBoundClickOutsideHandler)&&t.value(n)};e.dataset.clickOutsideMouseupHandlerId=Math.random().toString(36).substring(7),e.dataset.clickOutsideMousedownHandlerId=Math.random().toString(36).substring(7),k[e.dataset.clickOutsideMouseupHandlerId]=s,k[e.dataset.clickOutsideMousedownHandlerId]=n,document.addEventListener("mouseup",s),document.addEventListener("mousedown",n)},unbind:function(e){var t,d;null!==(t=e.dataset)&&void 0!==t&&t.clickOutsideMouseupHandlerId&&null!==(d=e.dataset)&&void 0!==d&&d.clickOutsideMousedownHandlerId&&(document.removeEventListener("mouseup",k[e.dataset.clickOutsideMouseupHandlerId]),document.removeEventListener("mousedown",k[e.dataset.clickOutsideMousedownHandlerId]),delete k[e.dataset.clickOutsideMouseupHandlerId],delete k[e.dataset.clickOutsideMousedownHandlerId],delete e.dataset.clickOutsideMouseupHandlerId,delete e.dataset.clickOutsideMousedownHandlerId,delete e.dataset.justBoundClickOutsideHandler)}};var v=d(63420),H=d(30936);const I=(0,v.WB)();I.use(H.default);const p=I;var Z=d(77197),M=d(72433);a.ZP.use(n.Z,{name:"unreactive"}),a.ZP.use(i()),a.ZP.use(o.qK),a.ZP.use(p),a.ZP.use(Z.Z),a.ZP.use(M.ZP),a.ZP.prototype.$xhr=l.Z,a.ZP.prototype.$e=u.Z,a.ZP.directive("mobile-click",r),a.ZP.directive("click-outside",b),new a.ZP({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode,bookmarksSettings:m.models.bookmarksSettings})}),a.ZP.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$mobile:()=>m.reactive.windowDimensions.width<=450,$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin},pinia:p});const h=a.ZP},67652:(e,t,d)=>{var a;d.d(t,{Z:()=>n}),function(e){e.Sync="sync",e.Cache="cache",e.Server="server",e.Timestamp="timestamp"}(a||(a={}));const n=a}}]);