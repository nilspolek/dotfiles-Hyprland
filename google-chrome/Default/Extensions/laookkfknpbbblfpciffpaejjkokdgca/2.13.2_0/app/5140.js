"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[5140],{85140:(e,i,t)=>{t.r(i),t.d(i,{default:()=>r,useTabsViewStateStore:()=>o});const o=(0,t(95756).vM)("tabs",{views:{list:{defaultView:!0,order:1},detail:{order:2}}}),r=o},95756:(e,i,t)=>{t.d(i,{t7:()=>d,vM:()=>u});var o=t(63420),r=t(20144),a=t(96046),n=t(63139),s=t(7838),l=t(80809);const c=e=>Object.keys(e).find((i=>{var t;return null===(t=e[i])||void 0===t?void 0:t.defaultView})),u=(e,{views:i}={})=>{const t=(0,o.Q_)(e+"ViewState",{state:()=>{var t;return{activeViewId:null!==(t=i&&c(i))&&void 0!==t?t:"",beforeViewChange:()=>Promise.resolve(!0),confirmationProps:null,popupActive:!1,name:e}},getters:{activeView(e){if(!i)return null;const t=i[e.activeViewId];if(t)return t;throw new Error("No view found with id: "+e.activeViewId)},focused:()=>n.Z.isOnTop(e)},actions:{focus(){n.Z.add(e)},async setActiveView(e){var t,o;if(!i||!await this.beforeViewChange())return;let r=e;if("default"===e){const e=c(i);if(!e)throw new Error("No view found with defaultView: true");r=e}await(null===(o=null===(t=this.activeView)||void 0===t?void 0:t.beforeLeave)||void 0===o?void 0:o.call(t,r)),this.activeViewId=r},async togglePopup(e,{resetActiveView:i=!0}={}){await this.beforeViewChange()&&(await r.ZP.nextTick(),this.popupActive=null!=e?e:!this.popupActive,!this.popupActive&&i&&(this.resetBeforeViewChange(),this.confirmationProps=null,await this.setActiveView("default")))},resetBeforeViewChange(){this.beforeViewChange=()=>Promise.resolve(!0)},async setConfirmation(e){return new Promise((i=>{this.confirmationProps=e,this.confirmationProps.confirm=()=>i(!0),this.confirmationProps.cancel=()=>i(!1)})).finally((()=>{this.confirmationProps=null}))}}}),l=(0,o.Jk)(t());return s.Z.$on(e+":close",(()=>t().togglePopup(!1))),(0,r.YP)(l.popupActive,(i=>{i?n.Z.add(e):n.Z.remove(e)})),(0,r.YP)(l.confirmationProps,(i=>{(null==i?void 0:i.dashboardOverlay)&&n.Z.add(e,!0),a.Z.dashboardOverlayActive=!!(null==i?void 0:i.dashboardOverlay)})),t},d=(e,{views:i,extend:t})=>{const o=u(`base${l.Z.capitalizeFirstLetter(e)}`,{views:i}),r=t(o(),`extended${l.Z.capitalizeFirstLetter(e)}ViewState`);return v(`${e}ViewState`,o,r)},v=(e,i,t)=>{const a=i(),n=t();return(0,o.Q_)(e,(()=>({...(0,r.BK)(a),...(0,r.BK)(n)})))}}}]);