(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[8670],{65550:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});const a=new(i(20144).ZP.extend({name:"GlobalKeyEventManager",data:()=>({events:{}}),methods:{registerEventListener(t,e,i,a){Object.prototype.hasOwnProperty.call(this.events,e)?Object.prototype.hasOwnProperty.call(this.events[e],i)||(this.events[e][i]=[]):(this.events[e]={},this.events[e][i]=[],this._addListener(e)),this.events[e][i].push({id:t,handler:a})},removeEventListener(t,e,i){if(!Object.prototype.hasOwnProperty.call(this.events,e))return void(m.utils.isDev()&&console.warn(`No event listeners registered with event type: ${e} to remove`));if(!Object.prototype.hasOwnProperty.call(this.events[e],i))return void(m.utils.isDev()&&console.warn(`No event listeners registered with keyCode: ${i} to remove`));let a=this.events[e][i].findIndex((e=>e.id===t));-1!==a?(this.events[e][i].splice(a,1),this._cleanupIfEmpty(e,i)):m.utils.isDev()&&console.warn(`No event listeners registered with id: ${t} to remove`)},_cleanupIfEmpty(t,e){this.events[t][e].length||delete this.events[t][e],Object.keys(this.events[t]).length||(delete this.events[t],this._removeListener(t))},_addListener(t){window.addEventListener(t,this._eventRouter)},_removeListener(t){window.removeEventListener(t,this._eventRouter)},_eventRouter(t){if(m.tourActive)return;if(!Object.prototype.hasOwnProperty.call(this.events,t.type))return;if(!Object.prototype.hasOwnProperty.call(this.events[t.type],t.keyCode))return;let e=this.events[t.type][t.keyCode];e[e.length-1].handler(t)}}}))},73675:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var a=i(8081),n=i.n(a),s=i(23645),p=i.n(s)()(n());p.push([t.id,"\n/* stylelint-disable */\n.app-popup[data-v-3e394d9a] { --origin-inset: 0px; --top: auto; --bottom: auto; --right: auto; --left: auto; height: calc(100vh - (var(--origin-inset) + var(--app-edge-padding))); width: var(--width); max-width: calc(100vw - (var(--app-edge-padding) * 2)); position: absolute !important; z-index: 2; top: var(--top); bottom: var(--bottom); right: var(--right); left: var(--left); pointer-events: none;\n}\n.app-popup.fullscreen.nipple[data-v-3e394d9a]::after, .app-popup.animating.nipple[data-v-3e394d9a]::after { opacity: 0;\n}\n.app-popup.focused[data-v-3e394d9a] { z-index: 4;\n}\n.app-popup.unfocused > .app[data-v-3e394d9a], .app-popup.unfocused[data-v-3e394d9a]::after { filter: brightness(var(--unfocused-app-brightness)) blur(2px);\n}\n.app[data-v-3e394d9a] { height: auto; min-height: auto; max-height: 100%; max-width: unset !important; position: absolute !important; top: var(--app-top); bottom: var(--app-bottom); right: 0; left: 0; display: flex; flex-direction: column; align-items: stretch; background-color: var(--color-bg); border-radius: var(--border-radius); pointer-events: auto; overflow: hidden;\n}\n.fullscreen:not(.animating) .app[data-v-3e394d9a], .fullscreen:not(.animating) .app[data-v-3e394d9a] > * { border-radius: 0;\n}\n.animating .app[data-v-3e394d9a] { transition: transform 0.2s ease, opacity 0.2s ease, top 0.2s ease-in-out, right 0.2s ease-in-out, bottom 0.2s ease-in-out, left 0.2s ease-in-out;\n}\n.animating .app[data-v-3e394d9a] > * { opacity: 0;\n}\n.app[data-v-3e394d9a] > * { transition: opacity var(--opacity-anim-duration) ease-in-out;\n}\n.nipple-top-left[data-v-3e394d9a]:after, .nipple-bottom-left[data-v-3e394d9a]:after { left: var(--nipple-displacement);\n}\n.nipple-top-right[data-v-3e394d9a]:after, .nipple-bottom-right[data-v-3e394d9a]:after { right: var(--nipple-displacement);\n}\n\t\t /* This needs to be in this component (or general stylesheet) or else the transition won't work when the component is async. I don't know why. */\n.slide-down-fade-enter-active[data-v-3e394d9a], .slide-down-fade-leave-active[data-v-3e394d9a], .slide-up-fade-enter-active[data-v-3e394d9a], .slide-up-fade-leave-active[data-v-3e394d9a] { transition: transform 0.2s ease, opacity 0.2s ease, inset 0s;\n} /* inset 0s is to fix a case where the app transitions right when opening if it is flipping horizontal direction */\n.slide-down-fade-enter[data-v-3e394d9a], .slide-down-fade-leave-to[data-v-3e394d9a] { opacity: 0; transform: translateY(-3px);\n}\n.slide-up-fade-enter[data-v-3e394d9a], .slide-up-fade-leave-to[data-v-3e394d9a] { opacity: 0; transform: translateY(3px);\n}\n\t\t /* An app can be opened in fullscreen mode immediately, so prevent the transform from happening to avoid any weird width/height jumps */\n.slide-down-fade-enter-active.fullscreen[data-v-3e394d9a], .slide-down-fade-leave-active.fullscreen[data-v-3e394d9a], .slide-up-fade-enter-active.fullscreen[data-v-3e394d9a], .slide-up-fade-leave-active.fullscreen[data-v-3e394d9a] { transition: opacity 0.2s ease, inset 0s;\n}\n.slide-down-fade-enter.fullscreen[data-v-3e394d9a], .slide-down-fade-leave-to.fullscreen[data-v-3e394d9a] { opacity: 0; transform: unset;\n}\n.slide-up-fade-enter.fullscreen[data-v-3e394d9a], .slide-up-fade-leave-to.fullscreen[data-v-3e394d9a] { opacity: 0; transform: unset;\n}\n@media screen and (max-width: 450px) {\n.app-popup[data-v-3e394d9a] { height: var(--app-max-height); position: fixed !important;\n}\n.top-row .app-popup[data-v-3e394d9a] { top: var(--app-edge-padding);\n}\n.bottom-row .app-popup[data-v-3e394d9a] { bottom: var(--app-edge-padding);\n}\n.top-left .app-popup[data-v-3e394d9a], .bottom-left .app-popup[data-v-3e394d9a] { left: var(--app-edge-padding);\n}\n.top-right .app-popup[data-v-3e394d9a], .bottom-right .app-popup[data-v-3e394d9a] { right: var(--app-edge-padding);\n}\n.slide-down-fade-enter-active[data-v-3e394d9a], .slide-down-fade-leave-active[data-v-3e394d9a], .slide-up-fade-enter-active[data-v-3e394d9a], .slide-up-fade-leave-active[data-v-3e394d9a] { transition: transform 0.2s ease, opacity 0.2s ease, inset 0s;\n} /* inset 0s is to fix a case where the app transitions right when opening if it is flipping horizontal direction */\n.slide-down-fade-enter[data-v-3e394d9a], .slide-down-fade-leave-to[data-v-3e394d9a] { opacity: 0; transform: translateY(calc(var(--app-translate-amount) * -1));\n}\n.slide-up-fade-enter[data-v-3e394d9a], .slide-up-fade-leave-to[data-v-3e394d9a] { opacity: 0; transform: translateY(var(--app-translate-amount));\n}\n}\n.app-popup[data-v-3e394d9a]::after {\n\tcontent: var(--344133f2);\n}\n.slide-down-fade-blurred-app-enter-active[data-v-3e394d9a] > :is(.app, .app-shadow),\n.slide-down-fade-blurred-app-leave-active[data-v-3e394d9a] > :is(.app, .app-shadow),\n.slide-up-fade-blurred-app-leave-active[data-v-3e394d9a] > :is(.app, .app-shadow),\n.slide-up-fade-blurred-app-leave-active[data-v-3e394d9a] > :is(.app, .app-shadow) {\n\ttransition: transform 0.2s ease, opacity, 0.2s ease;\n}\n.slide-down-fade-blurred-app-enter[data-v-3e394d9a] > :is(.app, .app-shadow),\n.slide-down-fade-blurred-app-leave-to[data-v-3e394d9a] > :is(.app, .app-shadow) {\n\topacity: 0; transform: translateY(-3px);\n}\n.slide-up-fade-blurred-app-enter[data-v-3e394d9a] > :is(.app, .app-shadow),\n.slide-up-fade-blurred-app-leave-to[data-v-3e394d9a] > :is(.app, .app-shadow) {\n\topacity: 0; transform: translateY(3px);\n}\n\n",""]);const o=p},28670:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var a=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.updateContentMaxHeight,expression:"updateContentMaxHeight"}],ref:"app-wrapper",staticClass:"app-popup nipple",class:[{animating:t.animating,fullscreen:t.fullscreenClass,focused:t.focused,unfocused:!1===t.focused},t.nippleClass],style:[{"--width":t.width+"px","--content-max-height":null===t.dimensions.maxHeight?"":t.dimensions.maxHeight+"px","--nipple-displacement":t.shiftedNippleDisplacement+"px"},t.positionCss],attrs:{"data-test":"app-popup-wrapper"}},[e("div",{directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.updateDimensions,expression:"updateDimensions"}],ref:"app",staticClass:"app popup",style:[t.appStyle,t.svgBackgroundStyles.app],attrs:{"data-test":"app-popup"}},[t.svgBackgroundVisible?e("svg",{staticStyle:{width:"100%",height:"100%",position:"absolute",inset:"0"}},[e("clipPath",{attrs:{id:"clip"+t.uuid}},[e("path",{style:t.svgBackgroundStyles.appSvgNipple,attrs:{d:"M5.58579 1.41421L0 7H14L8.41421 1.41421C7.63316 0.633165 6.36684 0.633164 5.58579 1.41421Z",fill:"black"}}),t._v(" "),e("rect",{style:t.svgBackgroundStyles.appSvgBackgroundRectangle,attrs:{x:"0",y:"0",rx:"10",ry:"10"}})])]):t._e(),t._v(" "),t._t("default",null,{showFullscreenElements:t.fullscreenClass})],2),t._v(" "),t.svgBackgroundStyles.appShadowDiv?e("div",{staticClass:"app-shadow",style:t.svgBackgroundStyles.appShadowDiv}):t._e()])};a._withStripped=!0;var n=i(61706),s=i(65550),p=i(96046),o=i(80809),r=i(20144);const d={name:"AppPopup",doNotWaitForMount:!0,directives:{ResizeSensor:n.Z},provide(){return{appDimensions:this.dimensions}},props:{nippleDisplacement:{type:Number,default:m.constants.nippleDisplacementPx},width:{type:Number,default:300},position:{type:String,required:!0},detailedPosition:{type:Object,default:null},region:{type:[String,Array],required:!0},fullscreenAnimDuration:{type:Number,default:200},fullscreen:{type:Boolean,default:!1},hideAppsExclusions:{type:String,default:""},focused:{type:Boolean,default:null},svgBackground:{type:Boolean,default:!1}},emits:["close"],setup:()=>({halfNippleWidth:m.constants.nippleWidthPx/2,uuid:o.Z.uuidv4()}),data(){return{flipHorizontalPosition:!1,shiftByPx:0,instantTransition:!1,inset:this.getDefaultInset(this.fullscreen),animating:!1,fullscreenClass:this.fullscreen,dimensions:{maxHeight:null,width:null,height:null}}},computed:{windowWidth:()=>p.Z.windowDimensions.width,appStyle(){const t={...this.inset,position:this.positionFixed?"fixed !important":"absolute","transition-duration":this.instantTransition?"0s":this.fullscreenAnimDuration+"ms","--opacity-anim-duration":this.fullscreenAnimDuration/2+"ms"};return this.positionFixed&&Object.assign(t,{width:"auto !important",height:"auto !important","max-height":"100vh",overflow:"hidden"}),t},positionFixed(){return null!==this.inset.left},positionArray(){const t=this.position.split("-");return this.flipHorizontalPosition&&(t[1]=o.Z.getOppositePosition(t[1])),t},nippleClass(){return["nipple"].concat(this.positionArray.map(o.Z.getOppositePosition)).join("-")},positionCss(){const t=o.Z.getOppositePosition(this.positionArray[0]),e=this.detailedPosition||{[t]:this.$mobile?"0":"100%",[o.Z.getOppositePosition(this.positionArray[1])]:"50%"};return Object.entries(e).reduce(((t,[e,i])=>(["left","right"].includes(e)?"number"==typeof i?i=i-(this.flipHorizontalPosition?this.width-2*this.nippleDisplacement:0)-this.shiftByPx:"string"==typeof i&&(i=`calc(${i} - ${this.nippleDisplacement-this.shiftByPx}px)`):(t["--app-"+e]="0px",t["--app-"+o.Z.getOppositePosition(e)]="auto"),t["--"+e]="number"==typeof i?i+"px":i,t)),{"--origin-inset":`var(--${t})`})},shiftedNippleDisplacement(){return this.nippleDisplacement-this.halfNippleWidth-this.shiftByPx},pseudoElementContents(){return this.svgBackground?void 0:'""'},svgBackgroundVisible(){if(!this.svgBackground)return!1;if(!this.animating&&!this.fullscreen&&!this.fullscreenClass)return!0;if(this.animating){if(!this.fullscreenClass&&this.fullscreen)return!0;if(!this.fullscreen&&this.fullscreenClass&&null===this.inset.left)return!0;if(!this.fullscreen&&!this.fullscreenClass&&this.instantTransition)return!0}return!1},svgBackgroundStyles(){if(!this.svgBackgroundVisible)return{};const t=this.position.includes("left")?this.dimensions.width-this.shiftedNippleDisplacement-m.constants.nippleWidthPx:this.shiftedNippleDisplacement,e=o.Z.getOppositePosition(this.positionArray[0]);return{app:{clipPath:`url(#clip${this.uuid})`,"-webkit-clip-path":`url(#clip${this.uuid})`,[`padding-${e}`]:"calc("+this.halfNippleWidth+"px + var(--app-padding))",[e]:`calc(var(--app-${e}) - ${this.halfNippleWidth}px)`,boxShadow:"none"},appSvgNipple:{translate:this.position.includes("bottom")?`${t}px 0`:`${t+m.constants.nippleWidthPx}px ${this.dimensions.height}px`,rotate:this.position.includes("bottom")?void 0:"180deg"},appSvgBackgroundRectangle:{translate:`0 ${this.position.includes("bottom")?this.halfNippleWidth:0}px`,width:this.dimensions.width+"px",height:Math.max(this.dimensions.height-this.halfNippleWidth,0)+"px"},appShadowDiv:{width:this.dimensions.width+"px",height:this.dimensions.height-this.halfNippleWidth+"px",position:"absolute",inset:"auto 0",[e]:0,borderRadius:"10px",boxShadow:"1px 1px 5px rgba(0 0 0 / var(--opacity-stop-3))"}}}},watch:{fullscreen(t){t?this.enterFullscreen():this.exitFullscreen()},async windowWidth(){this.shiftByPx=0,await this.$nextTick(),this.shiftByPx=this.getShiftPx()}},mounted(){this.flipHorizontalPosition=this.shouldFlipHorizontalPosition(),this.$nextTick((()=>this.shiftByPx=this.getShiftPx())),this.hideOverlappingWidgets(),this.updateContentMaxHeight(),this.updateDimensions(),this.fullscreen&&m.widgetManager.hideApps({exemptionSelectors:this.hideAppsExclusions,layer:"appPopup"})},created(){s.Z.registerEventListener("closeApp","keyup",27,this.close)},destroyed(){s.Z.removeEventListener("closeApp","keyup",27),m.widgetManager.refocusOverlap(this.region),this.fullscreen&&m.widgetManager.showApps({layer:"appPopup"})},methods:{updateDimensions({height:t,width:e}={}){if(void 0===t||void 0===e){const i=this.$refs.app;t=i.clientHeight,e=i.clientWidth}this.dimensions.height=t,this.dimensions.width=e},updateContentMaxHeight({height:t}={}){var e;void 0===t&&(t=null===(e=this.$refs["app-wrapper"])||void 0===e?void 0:e.clientHeight),this.dimensions.maxHeight=t},shouldFlipHorizontalPosition(){const t=this.$refs.app&&this.$refs.app.getBoundingClientRect();return!!t&&t.left<0&&t.right-window.innerWidth>t.left},getShiftPx(){const t=m.constants.dashboardSidePaddingPx,e=this.$refs.app&&this.$refs.app.getBoundingClientRect();return e?"left"===this.positionArray[1]?e.left<t?e.left-t:Math.max(e.right-(window.innerWidth-t),0):e.right>window.innerWidth-t?window.innerWidth-e.right-t:Math.max(-1*(e.left-t),0):0},close(){this.$emit("close")},hideOverlappingWidgets(){var t,e;let i=(null===(t=this.$refs.view)||void 0===t?void 0:t.scrollHeight)||(null===(e=this.$refs.loading)||void 0===e?void 0:e.scrollHeight);i&&m.widgetManager.unfocusOverlap(this.region,i)},getDefaultInset:t=>t?{left:0,right:0,top:0,bottom:0}:{left:null,right:null,top:null,bottom:null},async enterFullscreen(){m.widgetManager.hideApps({exemptionSelectors:this.hideAppsExclusions,layer:"appPopup"}),this.animating=!0,await o.Z.delay(this.fullscreenAnimDuration/2),this.instantTransition=!0,this.fullscreenClass=!0,this.inset=this.getFixedRectInset(),await o.Z.doubleRaf(),this.inset=this.getDefaultInset(!0),this.instantTransition=!1,await o.Z.delay(this.fullscreenAnimDuration),this.animating=!1,await o.Z.delay(this.fullscreenAnimDuration/2)},async exitFullscreen(){m.widgetManager.showApps({layer:"appPopup"}),this.animating=!0,await o.Z.delay(this.fullscreenAnimDuration/2),this.instantTransition=!0,this.inset=this.getDefaultInset(!1),await this.$nextTick();const t=this.getFixedRectInset();this.inset=this.getDefaultInset(!0),await o.Z.doubleRaf(),this.instantTransition=!1,this.fullscreenClass=!1,this.inset=t,await o.Z.delay(this.fullscreenAnimDuration),this.instantTransition=!0,this.inset=this.getDefaultInset(!1),await o.Z.doubleRaf(),this.instantTransition=!1,this.animating=!1,await o.Z.delay(this.fullscreenAnimDuration/2)},getFixedRectInset(){const t=this.$refs.app;if(!t)return this.getDefaultInset(!0);let e=t.getBoundingClientRect();const i={top:0,bottom:0},a=o.Z.getOppositePosition(this.positionArray[0]);return!this.fullscreen&&this.svgBackground&&(i[a]=this.halfNippleWidth),{top:e.y+i.top+"px",right:window.innerWidth-e.right+"px",bottom:window.innerHeight-e.bottom+i.bottom+"px",left:e.x+"px"}}}},l=()=>{(0,r.sj)(((t,e)=>({"344133f2":t.pseudoElementContents})))},h=d.setup;d.setup=h?(t,e)=>(l(),h(t,e)):l;const u=d;i(17266);const c=(0,i(51900).Z)(u,a,[],!1,null,"3e394d9a",null).exports},17266:(t,e,i)=>{var a=i(73675);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,i(45346).Z)("6fb1b1d7",a,!1,{ssrId:!0})}}]);