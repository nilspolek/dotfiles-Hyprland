"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[6781],{84722:(e,t,i)=>{i.d(t,{V:()=>a});const a=(0,i(95756).vM)("notes",{views:{list:{defaultView:!0,order:1},deleted:{order:2}}})},34145:(e,t,i)=>{i.d(t,{U:()=>o});var a=i(42935),s=i(24960),r=i(67652),n=i(35597);class o{constructor(e,{queryParams:t={},path:i="",mode:a=r.Z.Sync}={}){this.type=e,this.queryParams=t,this.path=i,this.mode=a,this.dataSync=s.Z}get({id:e,path:t=this.path||this.type,mode:i=this.mode,success:a,failure:s,queryParams:o={},responseProperty:h,appendIdToPath:d}){(async()=>{var c;i===r.Z.Timestamp&&(i=await n.Z.requiresSync(this.type)?r.Z.Sync:r.Z.Cache,n.Z.addUpdateListener(this.type,this.refresh.bind(this))),t+=this.buildQueryString((null===(c=this.queryParams)||void 0===c?void 0:c.get)||{},o);const p=[this.type,{id:e,path:t,env:this.getEnv(),mode:i,responseProperty:h,appendIdToPath:d}];i===r.Z.Server?this.dataSync.sendMessage({handler:"get",args:p}).then(a).catch(s):this.dataSync.sendRecurringCrossTabMessage({msgId:`${this.type}${e?`:${e}`:""}:refreshed`,handler:"get",args:p,success:a,failure:s})})()}refresh({path:e=this.path||this.type,queryParams:t={}}={}){return new Promise(((i,a)=>this.get({mode:r.Z.Server,path:e,queryParams:t,success:i,failure:a})))}async create(e,t,{path:i=this.path||this.type,mode:a=this.mode}={}){const s=[this.type,e,t];s.push({path:i,mode:a,env:this.getEnv()}),await this.dataSync.sendMessage({handler:"create",args:s})}async update(e,t,{path:i=this.path||this.type,mode:a=this.mode,queryParams:s={},appendIdToPath:r}={}){var n;const o=this.buildQueryString((null===(n=this.queryParams)||void 0===n?void 0:n.update)||{},s),h=[this.type,e,t];h.push({path:i,mode:a,env:this.getEnv(),queryString:o,appendIdToPath:r}),await this.dataSync.sendMessage({handler:"update",args:h})}async delete(e,{path:t=this.path||this.type,mode:i=this.mode}={}){const a=[this.type,e];a.push({path:t,mode:i,env:this.getEnv()}),await this.dataSync.sendMessage({handler:"delete",args:a})}getEnv(){return{token:localStorage.getItem("token"),clientUuid:localStorage.getItem("client_uuid"),apiUrl:m.globals.urlRootApi,version:m.globals.version,tabId:a.Z}}buildQueryString(...e){const t=new URLSearchParams(Object.assign({},...e)).toString();return t?"?"+t:""}}},95756:(e,t,i)=>{i.d(t,{t7:()=>p,vM:()=>c});var a=i(63420),s=i(20144),r=i(96046),n=i(63139),o=i(7838),h=i(80809);const d=e=>Object.keys(e).find((t=>{var i;return null===(i=e[t])||void 0===i?void 0:i.defaultView})),c=(e,{views:t}={})=>{const i=(0,a.Q_)(e+"ViewState",{state:()=>{var i;return{activeViewId:null!==(i=t&&d(t))&&void 0!==i?i:"",beforeViewChange:()=>Promise.resolve(!0),confirmationProps:null,popupActive:!1,name:e}},getters:{activeView(e){if(!t)return null;const i=t[e.activeViewId];if(i)return i;throw new Error("No view found with id: "+e.activeViewId)},focused:()=>n.Z.isOnTop(e)},actions:{focus(){n.Z.add(e)},async setActiveView(e){var i,a;if(!t||!await this.beforeViewChange())return;let s=e;if("default"===e){const e=d(t);if(!e)throw new Error("No view found with defaultView: true");s=e}await(null===(a=null===(i=this.activeView)||void 0===i?void 0:i.beforeLeave)||void 0===a?void 0:a.call(i,s)),this.activeViewId=s},async togglePopup(e,{resetActiveView:t=!0}={}){await this.beforeViewChange()&&(await s.ZP.nextTick(),this.popupActive=null!=e?e:!this.popupActive,!this.popupActive&&t&&(this.resetBeforeViewChange(),this.confirmationProps=null,await this.setActiveView("default")))},resetBeforeViewChange(){this.beforeViewChange=()=>Promise.resolve(!0)},async setConfirmation(e){return new Promise((t=>{this.confirmationProps=e,this.confirmationProps.confirm=()=>t(!0),this.confirmationProps.cancel=()=>t(!1)})).finally((()=>{this.confirmationProps=null}))}}}),h=(0,a.Jk)(i());return o.Z.$on(e+":close",(()=>i().togglePopup(!1))),(0,s.YP)(h.popupActive,(t=>{t?n.Z.add(e):n.Z.remove(e)})),(0,s.YP)(h.confirmationProps,(t=>{(null==t?void 0:t.dashboardOverlay)&&n.Z.add(e,!0),r.Z.dashboardOverlayActive=!!(null==t?void 0:t.dashboardOverlay)})),i},p=(e,{views:t,extend:i})=>{const a=c(`base${h.Z.capitalizeFirstLetter(e)}`,{views:t}),s=i(a(),`extended${h.Z.capitalizeFirstLetter(e)}ViewState`);return u(`${e}ViewState`,a,s)},u=(e,t,i)=>{const r=t(),n=i();return(0,a.Q_)(e,(()=>({...(0,s.BK)(r),...(0,s.BK)(n)})))}},67652:(e,t,i)=>{var a;i.d(t,{Z:()=>s}),function(e){e.Sync="sync",e.Cache="cache",e.Server="server",e.Timestamp="timestamp"}(a||(a={}));const s=a}}]);