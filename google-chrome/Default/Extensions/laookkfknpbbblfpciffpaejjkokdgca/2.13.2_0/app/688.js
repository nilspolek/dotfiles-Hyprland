(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[688],{91901:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>i});var n=e(8081),s=e.n(n),o=e(23645),l=e.n(o)()(s());l.push([a.id,"\n/* stylelint-disable */\n.play[data-v-a907a72c] { --size: 30px; height: var(--size); width: var(--size); padding: 0; position: relative; display: flex; align-items: center; justify-content: center; border-radius: var(--size); cursor: pointer; transition: 0.1s ease;\n}\n.play[data-v-a907a72c]:hover { transform: scale(1.1);\n}\n.play[data-v-a907a72c]:hover:active { transform: scale(1); transition-duration: 0s;\n}\n.play[data-v-a907a72c]:before { --a: var(--opacity-stop-2); position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-color: hsla(var(--color-base) / var(--a)); border-radius: var(--size); content: ''; transform: scale(1);\n}\n.play[data-v-a907a72c]:hover:before { --a: var(--opacity-stop-3);\n}\n.play[data-v-a907a72c]:hover:active:before { --a: var(--opacity-stop-2);\n}\n.icon-play[data-v-a907a72c], .icon-pause[data-v-a907a72c] { opacity: 1 !important;\n}\n.app-dash .play[data-v-a907a72c] { --size: 26px; margin-left: 8px;\n}\n.app-dash .play[data-v-a907a72c]:hover { transform: scale(1);\n}\n.app-dash .icon[data-v-a907a72c] { height: 10px; transform: translate3d(0,0,0);\n}\n",""]);const i=l},50688:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>i});var n=function(){var a=this,t=a._self._c;return t("span",{staticClass:"play control",attrs:{title:a.playing?"Pause":"Play"},on:{click:function(t){return t.stopPropagation(),a.toggleMasterPlayPause.apply(null,arguments)}}},[a.playing?t("inline-svg",{staticClass:"icon icon-pause",attrs:{src:e(22673)}}):t("inline-svg",{staticClass:"icon icon-play",attrs:{src:e(60786)}})],1)};n._withStripped=!0;var s=e(16730);const o=new(e(81405).ZP)({feature:"soundscapes",is_paid_event:!0}),l={name:"PlayButton",props:{location:{type:String,default:"app"}},computed:{playing:()=>s.default.globalPlaying},methods:{toggleMasterPlayPause(){s.default.globalPlaying=!s.default.globalPlaying,o.capture("play toggle",{method:`${this.location} click`})}}};e(56325);const i=(0,e(51900).Z)(l,n,[],!1,null,"a907a72c",null).exports},56325:(a,t,e)=>{var n=e(91901);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[a.id,n,""]]),n.locals&&(a.exports=n.locals),(0,e(45346).Z)("6f1e6dec",n,!1,{ssrId:!0})}}]);