(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[6297,9385],{48494:(e,t,o)=>{"use strict";function s({useViewStateStore:e,analytics:t}={}){return{computed:{popupActive(){return this.viewStateStore.popupActive}},unreactive(){const o={};return e&&(o.viewStateStore=e()),t&&(o.capture=t.capture.bind(t)),t&&(o.batchCapture=t.batchCapture),o},methods:{async togglePopupAndCaptureIfOpen(e){if(await this.togglePopup(),this.popupActive){const t=e instanceof KeyboardEvent?"hotkey":"click";this.capture("app show",{source:t})}},closePopup(){this.viewStateStore.togglePopup(!1)},async togglePopup(e){const t="boolean"!=typeof e;t&&this.popupActive&&!this.viewStateStore.focused?this.viewStateStore.focus():await this.viewStateStore.togglePopup(t?void 0:e)}},provide:()=>({capture:t.capture.bind(t),batchCapture:t.batchCapture})}}o.d(t,{Z:()=>s})},79575:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var s=o(8081),i=o.n(s),a=o(23645),n=o.n(a)()(i());n.push([e.id,'.app-container[data-v-543b79bc]{order:4}.app-dash-icon[data-v-543b79bc]{pointer-events:all}.focus-mode[data-v-543b79bc]{transition:top .2s ease,var(--app-container-transition)}.focus-mode .click-target[data-v-543b79bc]{display:flex;align-items:center;pointer-events:none}.focus-mode .click-target>.focus-icon[data-v-543b79bc]{--icon-size: 36px;--color-icon: var(--color-stop-4);padding:8px;transition:var(--a-default);cursor:pointer;pointer-events:all}.focus-mode .click-target>.text[data-v-543b79bc]{padding:8px 8px 8px 0;transition:var(--a-default);color:var(--color-stop-4);font-size:.875rem;font-weight:700;text-transform:uppercase;cursor:pointer;pointer-events:all}.focus-mode .ellipsis[data-v-543b79bc]{--icon-size: 15px;--color-icon: var(--color-stop-4);position:relative;margin:-5px;color:var(--color-icon);cursor:pointer;pointer-events:all}.focus-mode .ellipsis[data-v-543b79bc]::before{content:"";position:absolute;border-radius:100%;inset:-5px}.focus-mode .ellipsis[data-v-543b79bc]:hover::before{background-color:var(--color-stop-2)}.focus-mode .click-target:hover>.text[data-v-543b79bc],.focus-mode .click-target:hover>.focus-icon[data-v-543b79bc],.focus-mode .click-target:hover .ellipsis[data-v-543b79bc]{--color-icon: var(--color-stop-6);color:var(--color-stop-6)}.focus-mode.popup-active .click-target>.focus-icon[data-v-543b79bc],.focus-mode.popup-active .click-target>.text[data-v-543b79bc],.focus-mode.popup-active .click-target .ellipsis[data-v-543b79bc]{--color-icon: var(--color-stop-6);color:var(--color-stop-6)}.focus-mode.popup-active .click-target .ellipsis[data-v-543b79bc]::before{background-color:var(--color-stop-2)}.focus-mode.focusing[data-v-543b79bc]{height:40px;display:flex;position:absolute;z-index:1;align-items:center;justify-content:center;padding:5px 0;inset:0}.focus-mode.focusing .icon-container[data-v-543b79bc]{position:relative;padding:25px 10px}',""]);const c=n},54046:(e,t,o)=>{"use strict";var s;o.d(t,{BD:()=>u,Jk:()=>a,Le:()=>p,P7:()=>f,Tt:()=>d,VQ:()=>s,cb:()=>l,dy:()=>i,ie:()=>c,mQ:()=>r,oF:()=>m,sk:()=>h,t9:()=>n}),function(e){e.Idle="idle",e.Transition="transition",e.Focusing="focusing",e.Celebration="celebration"}(s||(s={}));const i=17053164e5,a=17057376e5,n=17058168e5,c="Focus Mode ended due to inactivity.",r=500,u=["tabs","soundscapes","notes","focus-mode","focus-mode-app","pomodoro","pomodoro-settings","focus","clock","greeting","mantra","focus","big-search","launchpad","links"],d=".todo, .settings",l="soundscapes:shoudResumeOnReload",p=36e5,m=108e5,h=4500,f=["I am centered and focused on my next task","Deep focus is the key to meaningful work","I'm focused on my most meaningful work","Deep work leads to mindful productivity ","I'm connected to my why and focused on the next step","I choose to focus to create my best work","I'm moving forward on what matters","Focus is the key to satisfying work","Distractions have no power over me","Unstoppable focus powers success","I'll let distracting thoughts float away","This is my intentional work time","This is my mindful productivity time","This is my time to access flow state","This is my time for deep work","This is my time to move toward my why","This is my time to complete important tasks","I will take on each task one at a time","I give myself permission to focus on only one thing","This is my time to take action on essential tasks","Block out everything but your next task","I give myself permission to zone in and ignore distractions","I claim this time to focus on what matters","I am connected to my purpose","I am connected to the bigger vision","Focus is my superpower","Deep work is my superpower","Now is the time to tune out the world and focus","Now is the time to move toward my goals","Now is the time to take the next step","Now is the time to move on what matters","I am an unstoppable force of focus","I commit to mindful productivity","Narrow your focus for extraordinary results.","I give my undivided attention to what matters most.","“Until my ONE Thing is done — everything else is a distraction.” - Gary Keller",'"Multitasking is a lie" - Gary Keller',"With undivided attention, I can get it done.","The time I invest with 100% focus yields the most success.","I'm honoring what's important with undivided attention.","I will reach the next milestone with 100% focus.","With practice, I can cultivate lasting deep focus.","I give the best I have to the task at hand.","I am focused on a single direction and one task at a time.","Ignore everything but your most essential task.","One focused step every day creates extraordinary results.","“Focus is a matter of deciding what things you’re not going to do.” —John Carmack","I dedicate my willpower to accomplish one task.","My purpose guides my focus.","My ritual for success is deep work."]},70287:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var s=o(20144);const i=new class{constructor(e,t){this.localStorageKey=e,this.propertyGetter=(0,s.iH)(null);const o=JSON.parse(localStorage.getItem(e)||"null")||t;this.property=(0,s.iH)(o),(0,s.YP)((()=>this.currentValue),(e=>localStorage.setItem(this.localStorageKey,JSON.stringify(e))))}get currentValue(){return this.propertyGetter.value?this.propertyGetter.value():this.property.value}switchOverToWatchedStoreItem(e){this.propertyGetter.value=e}}("focusMode:activeState",!1)},66383:(e,t,o)=>{"use strict";o.d(t,{LA:()=>d,Tv:()=>p,cc:()=>u,dU:()=>l,xk:()=>r});var s=o(15106),i=o(54046),a=o(40531),n=o(70287),c=o(68122);const r=()=>{const e=a.tJ.focusModeSettings,t={notesVisible:!0,todoVisible:!0,quoteVisible:!1,pomodoroSettingsVisible:!!e.apps.pomodoro.enabled,soundscapesVisible:!!e.apps.soundscapes.enabled,tabsVisible:!!e.apps.tabStash.enabled,focusVisible:!0,centerBelowNavVisible:!1,searchVisible:!1,launchpadVisible:!1,focusModeVisible:!0};(0,s.z)(t)},u=()=>{m.widgetManager.addVueAppExemption(i.BD,"focusMode"),m.widgetManager.addAppExemption(i.Tt,"focusMode")},d=()=>{m.widgetManager.hideApps({layer:"focusMode"}),m.widgetManager.removeVueAppExemption(i.BD,"focusMode"),m.widgetManager.removeAppExemption(i.Tt,"focusMode")},l=()=>{(0,s.z)({soundscapesVisible:!!m.conditionalFeatures.featureEnabled("plus")&&null,tabsVisible:!(!m.conditionalFeatures.featureEnabled("tab-stash-degraded")&&!m.conditionalFeatures.featureEnabled("plus"))&&null,notesVisible:null,todoVisible:null,quoteVisible:null,pomodoroSettingsVisible:null,focusVisible:null,centerBelowNavVisible:null,searchVisible:null,launchpadVisible:null,focusModeVisible:null})},p=async()=>{if(n.Z.currentValue){const e=(await c.Z.focusModeSessionStore())();await e.disableAppsBeforeStop(!1),e.stopAndSaveFocusMode()}}},56297:(e,t,o)=>{"use strict";o.r(t);var s=o(30512),i=function(){var e=this,t=e._self._c;return t("app-container",{class:{focusing:e.focusingOrCelebrationViewActive,"popup-active":e.popupActive},attrs:{"app-name":"focus-mode","visible-setting":"focusModeVisible","data-test":"focus-mode"}},[e.focusingOrCelebrationViewActive?t("focus-mode-focusing-view",{ref:"focusing-view",on:{openUpsell:e.openUpsell,stopFocusMode:e.stopFocusMode}}):e._e(),e._v(" "),t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.closePopup,expression:"closePopup"}],staticClass:"click-target"},[e.focusingOrCelebrationViewActive?[t("inline-svg",{staticClass:"icon focus-icon dark",attrs:{src:o(48100)},on:{click:e.toggleFocusModeApp}}),e._v(" "),t("span",{staticClass:"text dark",on:{click:e.toggleFocusModeApp}},[e._v("Focusing")])]:e._e(),e._v(" "),t("div",{staticClass:"icon-container"},[e.focusingOrCelebrationViewActive?[t("base-icon",{staticClass:"icon dark ellipsis",attrs:{src:"icon-ellipsis","data-test":"focus-mode-top-banner-app-toggle",size:"13px"},on:{click:e.toggleFocusModeApp}})]:[t("app-dash",{attrs:{icon:"icon/apps/focus-mode"+(e.popupActive?"-fill":""),label:"Focus","data-test":"focus-mode-top-left-app-toggle"},on:{mouseenter:e.openHoverDropdown,mouseleave:e.closeHoverDropdown,click:e.toggleAppOrStart}}),e._v(" "),t("transition",{attrs:{name:"slide-down-fade-blurred-app",duration:200}},[e.hoverDropdownOpen?t("focus-mode-hover-dropdown"):e._e()],1)],e._v(" "),t("transition",{attrs:{name:"slide-down-fade"},on:{afterEnter:e.triggerAppOpenEvent}},[e.popupActive?t("focus-mode-app",{on:{close:e.closePopup,start:e.startFocusMode,stop:e.stopFocusMode}}):e._e()],1)],2)],2)],1)};i._withStripped=!0;var a=o(38267),n=o(81196),c=o(47920),r=o(69385),u=o(65228),d=o(54046),l=o(40531),p=o(81405),h=o(20144),f=o(63139),v=o(48494),g=o(96046),b=o(80809),w=o(84820),y=o(70287);const S=new p.ZP({feature:"focus mode"}),M={name:"FocusMode",components:{AppContainer:a.default,AppDash:c.Z,FocusModeHoverDropdown:()=>Promise.all([o.e(8670),o.e(5848)]).then(o.bind(o,15848)),FocusModeApp:()=>Promise.all([o.e(3064),o.e(8670),o.e(6390),o.e(541),o.e(927),o.e(3597)]).then(o.bind(o,11450)),BaseIcon:w.Z,FocusModeFocusingView:()=>o.e(7864).then(o.bind(o,77864))},mixins:[(0,v.Z)({useViewStateStore:r.useFocusModeViewStateStore,analytics:S})],setup(){const e=(0,r.useFocusModeViewStateStore)(),t=(0,n.useFocusModeSessionStore)();return(0,h.JJ)("store",t),(0,h.JJ)("viewStateStore",e),{apps:u.apps,FocusModeView:d.VQ,focusModeViewStateStore:e,focusModeSessionStore:t,CAPACITY_LIMIT_MS_ALLOWED_PER_DAY:d.Le}},data:()=>({hoverDropdownOpen:!1}),computed:{tabFocused:()=>g.Z.tabFocused,activatedApps(){return Object.keys(this.apps).filter((e=>l.wA.focusModeSettings.apps[e].enabled)).map((e=>({key:e,...this.apps[e]})))},focusing(){return this.focusModeViewStateStore.currentlyFocusing},focusingOrCelebrationViewActive(){return this.focusModeViewStateStore.currentlyFocusing||this.focusModeViewStateStore.currentFocusModeView===d.VQ.Celebration}},watch:{"focusModeViewStateStore.currentFocusModeView"(e){e===d.VQ.Transition&&this.loadPlusApps()},"focusModeSessionStore.loaded":{handler(e){e&&(this.focusModeSessionStore.shouldAutoDisable&&this.$plus&&"true"!==localStorage.getItem("pomodoro-running")&&(this.stopFocusMode(!0),m.once("appsReady",(()=>{m.$e.$emit("flashMessage",{icon:o(65299),message:d.ie,button:{text:"Jump back in",action:this.startFocusMode}})}))),this.focusModeSessionStore.focusModeActive&&(this.loadPlusApps(),m.once("appsReady",(async()=>{for(const o in u.apps){var e,t;const s=l.tJ.focusModeSettings.apps[o].enabled,i=null===(e=(t=u.apps[o]).shouldEnableOnResume)||void 0===e?void 0:e.call(t);s&&i&&u.apps[o].enable(this.focusModeSessionStore.appActivationData[o])}await this.triggerFocusModeStartedEventAfterDelay()}))),m.widgetManager.appReady("focus-mode"))},immediate:!0},async"focusModeSessionStore.stop"(e){if(null===e){const e=async()=>{await this.focusModeViewStateStore.resumeFocusModeAfterTabLoad(),this.setCapacityLimitFocusModeTimeout()};g.Z.appsReady?await e():m.once("appsReady",e)}else this.focusModeViewStateStore.currentFocusModeView!==d.VQ.Idle&&(await this.focusModeViewStateStore.stopFocusMode(),m.tourActive&&m.trigger("modal:close"))},tabFocused:{handler(){this.setCapacityLimitFocusModeTimeout()},immediate:!0}},mounted(){m.on("globalEvent:click",this.focusModeSessionStore.refreshLastInteraction),m.on("focus:completed",this.displayFocusTaskCompleteFlashMessage),m.on("focusMode:start",this.startFocusMode),y.Z.currentValue||m.widgetManager.appReady("focus-mode")},destroyed(){m.off("globalEvent:click",this.focusModeSessionStore.refreshLastInteraction),m.off("focus:completed",this.displayFocusTaskCompleteFlashMessage),m.off("focusMode:start",this.startFocusMode)},methods:{toggleFocusModeApp(){this.closeHoverDropdown(),this.togglePopupAndCaptureIfOpen()},toggleAppOrStart(){this.popupActive||!l.tJ.focusModeSettings.oneClickFocus||this.focusing?this.toggleFocusModeApp():this.startFocusMode()},async loadPlusApps(){this.$plus||(m.widgetManager.loadWidget("tabs"),m.widgetManager.loadWidget("soundscapes"))},openHoverDropdown(){1===this.focusModeSessionStore.start&&0===f.Z.stack.length&&(this.hoverDropdownOpen=!0)},closeHoverDropdown(){this.hoverDropdownOpen=!1},triggerAppOpenEvent(){m.trigger("focusModeApp:opened")},async triggerFocusModeStartedEventAfterDelay(){await b.Z.delay(d.mQ),await b.Z.doubleRaf(),m.trigger("focusMode:started")},async startFocusMode(){if(!this.focusing)if(!this.$plus&&this.focusModeSessionStore.isOverCapacityLimit)this.openUpsell();else{await this.focusModeViewStateStore.startFocusMode();const e={};for(const t of this.activatedApps)e[t.key]=await u.apps[t.key].enable();this.focusModeSessionStore.startAndSaveFocusMode(e),S.capture("focus mode start",{enabled_apps:this.activatedApps.map((e=>e.key))}),await this.triggerFocusModeStartedEventAfterDelay()}},async stopFocusMode(e=!1){const t=async()=>{await b.Z.delay(d.mQ),this.focusModeSessionStore.disableAppsBeforeStop(e)};var o;e?t():(null===(o=this.$refs["focusing-view"])||void 0===o||o.transitionBeforeDestroy(),await this.$nextTick(),await Promise.allSettled([t(),this.focusModeViewStateStore.celebrateFocusMode()])),this.focusModeSessionStore.stopAndSaveFocusMode();const s=this.activatedApps.map((e=>e.key)),i=Math.round((this.focusModeSessionStore.stop-this.focusModeSessionStore.start)/1e3);S.capture("focus mode stop",{enabled_apps:s,seconds_since_start:i,stopped_by_inactivity:e}),this.setCapacityLimitFocusModeTimeout()},setCapacityLimitFocusModeTimeout(){clearTimeout(this.capacityLimitInterval),this.$plus||this.focusing&&(this.capacityLimitInterval=setTimeout((()=>{if(this.focusing){if(!this.focusModeSessionStore.isOverCapacityLimit)return this.setCapacityLimitFocusModeTimeout();u.apps.pomodoro.disable(),u.apps.soundscapes.disable(),g.Z.tabFocused&&this.stopFocusMode()}}),Math.max(this.focusModeSessionStore.msUntilOverCapacityLimit+100,500)))},openUpsell(){m.cmd("modal.open","UPSELL_FOCUS_MODE",{event_source:"dash"})},displayFocusTaskCompleteFlashMessage(){this.$e.$emit("flashMessage",{message:"Task completed!",icon:o(52545),buttons:[{text:"Continue focusing",action:()=>{},dismissOnClick:!0},{text:"Stop focus mode",action:this.stopFocusMode,dismissOnClick:!0,cssClasses:["button-tertiary"]}],persist:1e4})}}};o(51174);const V=(0,o(51900).Z)(M,i,[],!1,null,"543b79bc",null).exports,k=document.querySelector(".region.top-left"),F=document.createElement("div");k&&k.prepend(F),new s.Z({render:e=>e(V)}).$mount(F)},69385:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d,useFocusModeViewStateStore:()=>u});var s=o(63420),i=o(95756),a=o(80809),n=o(54046),c=o(66383);const r=(0,i.vM)("focusModeDash",{views:{[n.VQ.Idle]:{beforeLeave:async e=>{e===n.VQ.Transition?(m.widgetManager.hideApps({layer:"focusMode"}),await a.Z.delay(n.mQ),(0,c.xk)()):e===n.VQ.Focusing&&(m.widgetManager.hideApps({layer:"focusMode"}),(0,c.xk)(),a.Z.delay(n.mQ).then((()=>{(0,c.cc)()})))},defaultView:!0},[n.VQ.Transition]:{beforeLeave:()=>{a.Z.delay(n.mQ).then((()=>{(0,c.cc)()}))}},[n.VQ.Focusing]:{beforeLeave:e=>{(0,c.LA)(),a.Z.delay(n.mQ).then((()=>{(0,c.dU)(),e===n.VQ.Idle&&m.widgetManager.showApps({layer:"focusMode"})}))}},[n.VQ.Celebration]:{beforeLeave:()=>{a.Z.delay(n.mQ).then((()=>{m.widgetManager.showApps({layer:"focusMode"})}))}}}})(),u=(0,i.t7)("focusMode",{extend:(e,t)=>(0,s.Q_)(t,{state:()=>({backgroundScale:1,backgroundBlurLayerOpacity:0,backgroundTransitionDuration:0}),getters:{currentFocusModeView:()=>r.activeViewId,currentlyFocusing(){return this.currentFocusModeView===n.VQ.Focusing},backgroundBlurLayerVisible(){return this.currentFocusModeView!==n.VQ.Idle}},actions:{async startFocusMode(){e.popupActive=!1,await r.setActiveView(n.VQ.Transition),this.backgroundTransitionDuration=n.sk,await a.Z.doubleRaf(),this.setFocusingStyleVariables(),await a.Z.delay(this.backgroundTransitionDuration),this.backgroundTransitionDuration=0},async celebrateFocusMode(){e.popupActive=!1,await r.setActiveView(n.VQ.Celebration),this.backgroundTransitionDuration=1500,await a.Z.doubleRaf(),this.resetFocusingStyleVariables(),await a.Z.delay(this.backgroundTransitionDuration),this.backgroundTransitionDuration=0,await a.Z.delay(2*n.mQ)},async stopFocusMode(){e.popupActive=!1,this.resetFocusingStyleVariables(),await r.setActiveView(n.VQ.Idle)},setFocusingStyleVariables(){this.backgroundScale=1.1,this.backgroundBlurLayerOpacity=1},resetFocusingStyleVariables(){this.backgroundScale=1,this.backgroundBlurLayerOpacity=0},async resumeFocusModeAfterTabLoad(){await r.setActiveView(n.VQ.Focusing),await("visible"===document.visibilityState?a.Z.doubleRaf():a.Z.delay(0)),this.setFocusingStyleVariables()}}})}),d=u},68122:(e,t,o)=>{"use strict";async function s(e){return(await e).default}o.d(t,{Z:()=>i});const i={countdowns:()=>s(Promise.all([o.e(3064),o.e(5535)]).then(o.bind(o,55535))),metrics:()=>s(Promise.all([o.e(3064),o.e(1103),o.e(3990)]).then(o.bind(o,71103))),clocks:()=>s(Promise.all([o.e(3064),o.e(1554)]).then(o.bind(o,71554))),focus:()=>s(Promise.all([o.e(3064),o.e(5711)]).then(o.bind(o,85711))),linksViewStateStore:()=>s(o.e(9968).then(o.bind(o,89968))),linksStore:()=>s(o.e(1886).then(o.bind(o,71886))),tabsViewStateStore:()=>s(o.e(5140).then(o.bind(o,85140))),tabsStore:()=>s(o.e(3943).then(o.bind(o,63943))),focusModeViewStateStore:()=>s(o.e(9385).then(o.bind(o,69385))),focusModeSessionStore:()=>s(Promise.all([o.e(6283),o.e(1196)]).then(o.bind(o,81196)))}},95756:(e,t,o)=>{"use strict";o.d(t,{t7:()=>l,vM:()=>d});var s=o(63420),i=o(20144),a=o(96046),n=o(63139),c=o(7838),r=o(80809);const u=e=>Object.keys(e).find((t=>{var o;return null===(o=e[t])||void 0===o?void 0:o.defaultView})),d=(e,{views:t}={})=>{const o=(0,s.Q_)(e+"ViewState",{state:()=>{var o;return{activeViewId:null!==(o=t&&u(t))&&void 0!==o?o:"",beforeViewChange:()=>Promise.resolve(!0),confirmationProps:null,popupActive:!1,name:e}},getters:{activeView(e){if(!t)return null;const o=t[e.activeViewId];if(o)return o;throw new Error("No view found with id: "+e.activeViewId)},focused:()=>n.Z.isOnTop(e)},actions:{focus(){n.Z.add(e)},async setActiveView(e){var o,s;if(!t||!await this.beforeViewChange())return;let i=e;if("default"===e){const e=u(t);if(!e)throw new Error("No view found with defaultView: true");i=e}await(null===(s=null===(o=this.activeView)||void 0===o?void 0:o.beforeLeave)||void 0===s?void 0:s.call(o,i)),this.activeViewId=i},async togglePopup(e,{resetActiveView:t=!0}={}){await this.beforeViewChange()&&(await i.ZP.nextTick(),this.popupActive=null!=e?e:!this.popupActive,!this.popupActive&&t&&(this.resetBeforeViewChange(),this.confirmationProps=null,await this.setActiveView("default")))},resetBeforeViewChange(){this.beforeViewChange=()=>Promise.resolve(!0)},async setConfirmation(e){return new Promise((t=>{this.confirmationProps=e,this.confirmationProps.confirm=()=>t(!0),this.confirmationProps.cancel=()=>t(!1)})).finally((()=>{this.confirmationProps=null}))}}}),r=(0,s.Jk)(o());return c.Z.$on(e+":close",(()=>o().togglePopup(!1))),(0,i.YP)(r.popupActive,(t=>{t?n.Z.add(e):n.Z.remove(e)})),(0,i.YP)(r.confirmationProps,(t=>{(null==t?void 0:t.dashboardOverlay)&&n.Z.add(e,!0),a.Z.dashboardOverlayActive=!!(null==t?void 0:t.dashboardOverlay)})),o},l=(e,{views:t,extend:o})=>{const s=d(`base${r.Z.capitalizeFirstLetter(e)}`,{views:t}),i=o(s(),`extended${r.Z.capitalizeFirstLetter(e)}ViewState`);return p(`${e}ViewState`,s,i)},p=(e,t,o)=>{const a=t(),n=o();return(0,s.Q_)(e,(()=>({...(0,i.BK)(a),...(0,i.BK)(n)})))}},51174:(e,t,o)=>{var s=o(79575);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,o(45346).Z)("041d752a",s,!1,{})}}]);