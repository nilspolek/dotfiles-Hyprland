"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[7734],{30512:(e,t,d)=>{d.d(t,{Z:()=>Z});var n=d(20144),a=d(88026),i=d(51726),o=d.n(i),s=d(55482),l=d(7838),u=d(35174);let c={};const r={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileClickHandler=!1}),100),e.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),c[e.dataset.mobileClickHandlerId]=t.value,e.addEventListener("click",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",c[e.dataset.mobileClickHandlerId]),delete c[e.dataset.mobileClickHandlerId],delete e.dataset.mobileClickHandlerId,delete e.dataset.justBoundMobileClickHandler)}};let b={};const k={bind:function(e,t){let d,n;e.dataset.justBoundClickOutsideHandler=!0,setTimeout((()=>{e.dataset.justBoundClickOutsideHandler=!1}),100);const a=e=>{n=!1,(e=>e&&e.clientX>window.innerWidth)(e)?n=!0:d=e.target},i=a=>{n||(t.modifiers.bubble||!e.contains(d)&&!e.contains(a.target)&&e!==d&&e!==a.target&&"true"!==e.dataset.justBoundClickOutsideHandler)&&t.value(a)};e.dataset.clickOutsideMouseupHandlerId=Math.random().toString(36).substring(7),e.dataset.clickOutsideMousedownHandlerId=Math.random().toString(36).substring(7),b[e.dataset.clickOutsideMouseupHandlerId]=i,b[e.dataset.clickOutsideMousedownHandlerId]=a,document.addEventListener("mouseup",i),document.addEventListener("mousedown",a)},unbind:function(e){var t,d;null!==(t=e.dataset)&&void 0!==t&&t.clickOutsideMouseupHandlerId&&null!==(d=e.dataset)&&void 0!==d&&d.clickOutsideMousedownHandlerId&&(document.removeEventListener("mouseup",b[e.dataset.clickOutsideMouseupHandlerId]),document.removeEventListener("mousedown",b[e.dataset.clickOutsideMousedownHandlerId]),delete b[e.dataset.clickOutsideMouseupHandlerId],delete b[e.dataset.clickOutsideMousedownHandlerId],delete e.dataset.clickOutsideMouseupHandlerId,delete e.dataset.clickOutsideMousedownHandlerId,delete e.dataset.justBoundClickOutsideHandler)}};var v=d(63420),p=d(30936);const I=(0,v.WB)();I.use(p.default);const h=I;var H=d(77197),g=d(72433);n.ZP.use(a.Z,{name:"unreactive"}),n.ZP.use(o()),n.ZP.use(s.qK),n.ZP.use(h),n.ZP.use(H.Z),n.ZP.use(g.ZP),n.ZP.prototype.$xhr=u.Z,n.ZP.prototype.$e=l.Z,n.ZP.directive("mobile-click",r),n.ZP.directive("click-outside",k),new n.ZP({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode,bookmarksSettings:m.models.bookmarksSettings})}),n.ZP.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$mobile:()=>m.reactive.windowDimensions.width<=450,$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin},pinia:h});const Z=n.ZP},37734:(e,t,d)=>{d.r(t);var n=d(30512),a=d(4239);const i=()=>Promise.all([d.e(5757),d.e(3246),d.e(3064),d.e(1886),d.e(5746),d.e(3608),d.e(9965),d.e(1288),d.e(9150),d.e(5785)]).then(d.bind(d,27341));Promise.all([d.e(6283),d.e(1196),d.e(6096)]).then(d.bind(d,40391)),localStorage.getItem("dev-panel:open")?l():m.once("globalEvent:ctrlShiftBacktick",l);const o=localStorage.getObject("devPanel:pinnedStep");o&&m.utils.loadModuleDefault((()=>Promise.all([d.e(3064),d.e(5746),d.e(6509)]).then(d.bind(d,55774)))).then((e=>{e.setPinnedStepActiveOnDashLoad(o)}));const s=localStorage.getObject(a.Z);function l(){m.utils.loadModuleDefault(i).then((e=>{const t="dev-panel";let d=document.createElement("div");d.setAttribute("id",t),document.body.prepend(d),new n.Z({render:t=>t(e)}).$mount("#"+t)}))}s&&Promise.all([d.e(5757),d.e(1886),d.e(3608),d.e(158)]).then(d.bind(d,30158)).then((e=>{const t=e.useDevAppsStore(),{appId:d,viewId:n,itemId:a}=s;t.openView(d,n,a)}))},4239:(e,t,d)=>{d.d(t,{Z:()=>n});const n="devPanel:apps:pinnedView"}}]);