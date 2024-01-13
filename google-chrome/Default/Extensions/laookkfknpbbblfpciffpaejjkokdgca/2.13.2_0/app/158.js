"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[158,9968],{12363:(e,t,i)=>{i.d(t,{Z:()=>u});const s=async e=>{if(!e.loaded)return e.loading?new Promise((t=>{e.$subscribe(((e,i)=>i.loaded&&t()))})):e.refresh()},a=(e,t)=>({resetBeforeViewChange:()=>t.resetBeforeViewChange(),isOpen:()=>t.popupActive,open:async()=>t.popupActive||await t.togglePopup(!0),close:async()=>!t.popupActive||await t.togglePopup(!1),refresh:()=>e.refresh(),loaded:()=>e.loaded});var o=i(89968),n=i(71886);const r=(0,o.default)(),d=(0,n.default)(),c={...a(d,r),views:{links:{setActive:()=>r.setActiveView("list"),isActive:()=>r.popupActive&&"list"===r.activeViewId},add:{setActive:()=>(d.addItem(),r.setActiveView("form")),isActive:()=>r.popupActive&&"form"===r.activeViewId&&!d.activeItemId},edit:{async setActive(e){await s(d),d.editItem(e),await r.setActiveView("form")},isActive:()=>r.popupActive&&"form"===r.activeViewId&&d.activeItemId,selectableItems:()=>d.getUnPinnedItems.map((({id:e,title:t})=>({id:e,name:t})))}}};var l=i(84722),v=i(51545);const p=(0,l.V)(),w=(0,v.useNotesStore)(),u={links:c,notes:{...a(w,p),refresh:()=>w.refresh(!0),views:{notes:{async setActive(e){e&&await s(w),w.activeItemId=e,await p.setActiveView("list")},isActive:()=>p.popupActive&&"list"===p.activeViewId,selectableItems:()=>Object.values(w.getItems).map((({id:e,preview:t})=>({id:e,name:t})))},deleted:{setActive:()=>p.setActiveView("deleted"),isActive:()=>p.popupActive&&"deleted"===p.activeViewId,selectableItems:()=>Object.values(w.getDeletedItems).map((({id:e,preview:t})=>({id:e,name:t})))}}}}},30158:(e,t,i)=>{i.r(t),i.d(t,{useDevAppsStore:()=>r});var s=i(4239),a=i(63420),o=i(12363),n=i(20144);const r=(0,a.Q_)("devApps",{state(){return{pinned:localStorage.getObject(s.Z)||{appId:null,viewId:null,itemId:null},selectedItems:(e=o.Z,Object.entries(e).reduce(((e,[t,i])=>{const s=Object.entries(i.views).reduce(((e,[t,i])=>(i.selectableItems&&(e[t]=null),e)),{});return Object.keys(s).length&&(e[t]=s),e}),{}))};var e},getters:{loaded:()=>Object.values(o.Z).every((e=>e.loaded()))},actions:{async openView(e,t,i){await o.Z[e].open(),o.Z[e].resetBeforeViewChange(),o.Z[e].views[t].setActive(i)},closeApp:e=>o.Z[e].close(),pinApp(e,t,i){this.pinned.appId=e,this.pinned.viewId=t,localStorage.setObject(s.Z,{appId:e,viewId:t,itemId:i})},clearPinned(){this.pinned={appId:null,viewId:null,itemId:null},localStorage.removeItem(s.Z)},setActiveSelectedItems(){Object.entries(this.selectedItems).forEach((([e,t])=>{Object.keys(t).forEach((i=>{const s=o.Z[e].views[i].selectableItems();this.pinned.appId===e&&this.pinned.viewId===i&&((e,t)=>t.find((t=>t.id===e)))(this.pinned.itemId,s)?t[i]=this.pinned.itemId:s.length&&(t[i]=s[0].id)}))}))}}}),d=r();(0,n.YP)((0,a.Jk)(d).loaded,(e=>e&&d.setActiveSelectedItems()))},89968:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n,useLinksViewStateStore:()=>o});var s=i(95756),a=i(24749);const o=(0,s.vM)("links",{views:{[a.od.List]:{defaultView:!0,order:1},[a.od.Form]:{order:2}}}),n=o},84722:(e,t,i)=>{i.d(t,{V:()=>s});const s=(0,i(95756).vM)("notes",{views:{list:{defaultView:!0,order:1},deleted:{order:2}}})},95756:(e,t,i)=>{i.d(t,{t7:()=>v,vM:()=>l});var s=i(63420),a=i(20144),o=i(96046),n=i(63139),r=i(7838),d=i(80809);const c=e=>Object.keys(e).find((t=>{var i;return null===(i=e[t])||void 0===i?void 0:i.defaultView})),l=(e,{views:t}={})=>{const i=(0,s.Q_)(e+"ViewState",{state:()=>{var i;return{activeViewId:null!==(i=t&&c(t))&&void 0!==i?i:"",beforeViewChange:()=>Promise.resolve(!0),confirmationProps:null,popupActive:!1,name:e}},getters:{activeView(e){if(!t)return null;const i=t[e.activeViewId];if(i)return i;throw new Error("No view found with id: "+e.activeViewId)},focused:()=>n.Z.isOnTop(e)},actions:{focus(){n.Z.add(e)},async setActiveView(e){var i,s;if(!t||!await this.beforeViewChange())return;let a=e;if("default"===e){const e=c(t);if(!e)throw new Error("No view found with defaultView: true");a=e}await(null===(s=null===(i=this.activeView)||void 0===i?void 0:i.beforeLeave)||void 0===s?void 0:s.call(i,a)),this.activeViewId=a},async togglePopup(e,{resetActiveView:t=!0}={}){await this.beforeViewChange()&&(await a.ZP.nextTick(),this.popupActive=null!=e?e:!this.popupActive,!this.popupActive&&t&&(this.resetBeforeViewChange(),this.confirmationProps=null,await this.setActiveView("default")))},resetBeforeViewChange(){this.beforeViewChange=()=>Promise.resolve(!0)},async setConfirmation(e){return new Promise((t=>{this.confirmationProps=e,this.confirmationProps.confirm=()=>t(!0),this.confirmationProps.cancel=()=>t(!1)})).finally((()=>{this.confirmationProps=null}))}}}),d=(0,s.Jk)(i());return r.Z.$on(e+":close",(()=>i().togglePopup(!1))),(0,a.YP)(d.popupActive,(t=>{t?n.Z.add(e):n.Z.remove(e)})),(0,a.YP)(d.confirmationProps,(t=>{(null==t?void 0:t.dashboardOverlay)&&n.Z.add(e,!0),o.Z.dashboardOverlayActive=!!(null==t?void 0:t.dashboardOverlay)})),i},v=(e,{views:t,extend:i})=>{const s=l(`base${d.Z.capitalizeFirstLetter(e)}`,{views:t}),a=i(s(),`extended${d.Z.capitalizeFirstLetter(e)}ViewState`);return p(`${e}ViewState`,s,a)},p=(e,t,i)=>{const o=t(),n=i();return(0,s.Q_)(e,(()=>({...(0,a.BK)(o),...(0,a.BK)(n)})))}}}]);