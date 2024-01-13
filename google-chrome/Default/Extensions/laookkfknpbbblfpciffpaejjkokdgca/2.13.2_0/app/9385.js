"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[9385],{66383:(e,i,t)=>{t.d(i,{LA:()=>c,Tv:()=>p,cc:()=>u,dU:()=>d,xk:()=>l});var a=t(15106),o=t(54046),s=t(40531),n=t(70287),r=t(68122);const l=()=>{const e=s.tJ.focusModeSettings,i={notesVisible:!0,todoVisible:!0,quoteVisible:!1,pomodoroSettingsVisible:!!e.apps.pomodoro.enabled,soundscapesVisible:!!e.apps.soundscapes.enabled,tabsVisible:!!e.apps.tabStash.enabled,focusVisible:!0,centerBelowNavVisible:!1,searchVisible:!1,launchpadVisible:!1,focusModeVisible:!0};(0,a.z)(i)},u=()=>{m.widgetManager.addVueAppExemption(o.BD,"focusMode"),m.widgetManager.addAppExemption(o.Tt,"focusMode")},c=()=>{m.widgetManager.hideApps({layer:"focusMode"}),m.widgetManager.removeVueAppExemption(o.BD,"focusMode"),m.widgetManager.removeAppExemption(o.Tt,"focusMode")},d=()=>{(0,a.z)({soundscapesVisible:!!m.conditionalFeatures.featureEnabled("plus")&&null,tabsVisible:!(!m.conditionalFeatures.featureEnabled("tab-stash-degraded")&&!m.conditionalFeatures.featureEnabled("plus"))&&null,notesVisible:null,todoVisible:null,quoteVisible:null,pomodoroSettingsVisible:null,focusVisible:null,centerBelowNavVisible:null,searchVisible:null,launchpadVisible:null,focusModeVisible:null})},p=async()=>{if(n.Z.currentValue){const e=(await r.Z.focusModeSessionStore())();await e.disableAppsBeforeStop(!1),e.stopAndSaveFocusMode()}}},69385:(e,i,t)=>{t.r(i),t.d(i,{default:()=>c,useFocusModeViewStateStore:()=>u});var a=t(63420),o=t(95756),s=t(80809),n=t(54046),r=t(66383);const l=(0,o.vM)("focusModeDash",{views:{[n.VQ.Idle]:{beforeLeave:async e=>{e===n.VQ.Transition?(m.widgetManager.hideApps({layer:"focusMode"}),await s.Z.delay(n.mQ),(0,r.xk)()):e===n.VQ.Focusing&&(m.widgetManager.hideApps({layer:"focusMode"}),(0,r.xk)(),s.Z.delay(n.mQ).then((()=>{(0,r.cc)()})))},defaultView:!0},[n.VQ.Transition]:{beforeLeave:()=>{s.Z.delay(n.mQ).then((()=>{(0,r.cc)()}))}},[n.VQ.Focusing]:{beforeLeave:e=>{(0,r.LA)(),s.Z.delay(n.mQ).then((()=>{(0,r.dU)(),e===n.VQ.Idle&&m.widgetManager.showApps({layer:"focusMode"})}))}},[n.VQ.Celebration]:{beforeLeave:()=>{s.Z.delay(n.mQ).then((()=>{m.widgetManager.showApps({layer:"focusMode"})}))}}}})(),u=(0,o.t7)("focusMode",{extend:(e,i)=>(0,a.Q_)(i,{state:()=>({backgroundScale:1,backgroundBlurLayerOpacity:0,backgroundTransitionDuration:0}),getters:{currentFocusModeView:()=>l.activeViewId,currentlyFocusing(){return this.currentFocusModeView===n.VQ.Focusing},backgroundBlurLayerVisible(){return this.currentFocusModeView!==n.VQ.Idle}},actions:{async startFocusMode(){e.popupActive=!1,await l.setActiveView(n.VQ.Transition),this.backgroundTransitionDuration=n.sk,await s.Z.doubleRaf(),this.setFocusingStyleVariables(),await s.Z.delay(this.backgroundTransitionDuration),this.backgroundTransitionDuration=0},async celebrateFocusMode(){e.popupActive=!1,await l.setActiveView(n.VQ.Celebration),this.backgroundTransitionDuration=1500,await s.Z.doubleRaf(),this.resetFocusingStyleVariables(),await s.Z.delay(this.backgroundTransitionDuration),this.backgroundTransitionDuration=0,await s.Z.delay(2*n.mQ)},async stopFocusMode(){e.popupActive=!1,this.resetFocusingStyleVariables(),await l.setActiveView(n.VQ.Idle)},setFocusingStyleVariables(){this.backgroundScale=1.1,this.backgroundBlurLayerOpacity=1},resetFocusingStyleVariables(){this.backgroundScale=1,this.backgroundBlurLayerOpacity=0},async resumeFocusModeAfterTabLoad(){await l.setActiveView(n.VQ.Focusing),await("visible"===document.visibilityState?s.Z.doubleRaf():s.Z.delay(0)),this.setFocusingStyleVariables()}}})}),c=u},95756:(e,i,t)=>{t.d(i,{t7:()=>d,vM:()=>c});var a=t(63420),o=t(20144),s=t(96046),n=t(63139),r=t(7838),l=t(80809);const u=e=>Object.keys(e).find((i=>{var t;return null===(t=e[i])||void 0===t?void 0:t.defaultView})),c=(e,{views:i}={})=>{const t=(0,a.Q_)(e+"ViewState",{state:()=>{var t;return{activeViewId:null!==(t=i&&u(i))&&void 0!==t?t:"",beforeViewChange:()=>Promise.resolve(!0),confirmationProps:null,popupActive:!1,name:e}},getters:{activeView(e){if(!i)return null;const t=i[e.activeViewId];if(t)return t;throw new Error("No view found with id: "+e.activeViewId)},focused:()=>n.Z.isOnTop(e)},actions:{focus(){n.Z.add(e)},async setActiveView(e){var t,a;if(!i||!await this.beforeViewChange())return;let o=e;if("default"===e){const e=u(i);if(!e)throw new Error("No view found with defaultView: true");o=e}await(null===(a=null===(t=this.activeView)||void 0===t?void 0:t.beforeLeave)||void 0===a?void 0:a.call(t,o)),this.activeViewId=o},async togglePopup(e,{resetActiveView:i=!0}={}){await this.beforeViewChange()&&(await o.ZP.nextTick(),this.popupActive=null!=e?e:!this.popupActive,!this.popupActive&&i&&(this.resetBeforeViewChange(),this.confirmationProps=null,await this.setActiveView("default")))},resetBeforeViewChange(){this.beforeViewChange=()=>Promise.resolve(!0)},async setConfirmation(e){return new Promise((i=>{this.confirmationProps=e,this.confirmationProps.confirm=()=>i(!0),this.confirmationProps.cancel=()=>i(!1)})).finally((()=>{this.confirmationProps=null}))}}}),l=(0,a.Jk)(t());return r.Z.$on(e+":close",(()=>t().togglePopup(!1))),(0,o.YP)(l.popupActive,(i=>{i?n.Z.add(e):n.Z.remove(e)})),(0,o.YP)(l.confirmationProps,(i=>{(null==i?void 0:i.dashboardOverlay)&&n.Z.add(e,!0),s.Z.dashboardOverlayActive=!!(null==i?void 0:i.dashboardOverlay)})),t},d=(e,{views:i,extend:t})=>{const a=c(`base${l.Z.capitalizeFirstLetter(e)}`,{views:i}),o=t(a(),`extended${l.Z.capitalizeFirstLetter(e)}ViewState`);return p(`${e}ViewState`,a,o)},p=(e,i,t)=>{const s=i(),n=t();return(0,a.Q_)(e,(()=>({...(0,o.BK)(s),...(0,o.BK)(n)})))}}}]);