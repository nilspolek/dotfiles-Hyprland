(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[6612],{84968:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>a});var i=o(8081),n=o.n(i),s=o(23645),d=o.n(s)()(n());d.push([t.id,"\n/* stylelint-disable */\n.dropdown[data-v-2e98129d] { display: block;\n} /* Override general stylesheet dropdown styling for display: block, but move to this when refactor complete; */\n.dropdown-hide[data-v-2e98129d] { opacity: 0;\n}\n.dropdown-visible .icon[data-v-2e98129d] { opacity: 0.8;\n}\n.open-enter-active[data-v-2e98129d], .open-leave-active[data-v-2e98129d] { transition: opacity 0.1s ease;\n} /* Consolidate this with center nav and other animations? */\n.open-enter[data-v-2e98129d], .open-leave-to[data-v-2e98129d] { opacity: 0;\n}\n\n",""]);const a=d},1594:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>s});var i=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideDropdown,expression:"hideDropdown"}],staticClass:"more",class:{"shift-to-left":t.shiftToLeft,"dropdown-visible":t.active,"more-dash":t.onDash},attrs:{"data-test":"more-container"}},[t._t("moreToggle",(function(){return[e("div",{staticClass:"icon-wrapper more-toggle",class:{"dash-icon-wrapper":t.onDash,"u--touch-hide":t.onDash},attrs:{"data-test":"more-toggle","data-ob":t.dataOb},on:{click:function(e){return t.$emit("toggle",!t.active)}}},[e("inline-svg",{staticClass:"icon icon-ellipsis more-icon",class:{"dash-icon":t.onDash},attrs:{src:o(49710)}})],1)]})),t._v(" "),e("transition",{attrs:{name:"open"}},[t.active?e("div",{ref:"dropdown",staticClass:"dropdown more-dropdown",class:{"app dash-dropdown nipple nipple-top-left":t.onDash},attrs:{"data-test":"dropdown"}},[t._t("header"),t._v(" "),t._t("upsell"),t._v(" "),e("ul",{staticClass:"dropdown-list",class:{"dropdown-hide":t.$slots.upsell},attrs:{"data-test":"dropdown-options"}},[t._t("default")],2)],2):t._e()])],2)};i._withStripped=!0;const n={doNotWaitForMount:!0,name:"Dropdown",props:{dataOb:{type:String,default:""},active:{type:Boolean,default:!1},onDash:{type:Boolean,default:!1}},data:()=>({shiftToLeft:!1}),watch:{active(t){t?(this.shiftToLeft=!1,this.$nextTick(this.shiftDropdownLeftIfNeeded),window.addEventListener("resize",this.debouncedDropdownShift)):window.removeEventListener("resize",this.debouncedDropdownShift)}},created(){m.on("globalEvent:esc",this.hideDropdown),m.on("globalEvent:toggle:bottom-right",this.hideDropdown)},destroyed(){m.off("globalEvent:esc",this.hideDropdown),m.off("globalEvent:toggle:bottom-right",this.hideDropdown),window.removeEventListener("resize",this.shouldDropdownShiftToLeft)},methods:{hideDropdown(t){this.active&&(this.$touch&&t.stopPropagation(),this.$emit("toggle",!1))},shiftDropdownLeftIfNeeded(){const t=this.$refs.dropdown&&this.$refs.dropdown.getBoundingClientRect();if(!t)return;const e=window.innerWidth-t.right;this.shiftToLeft=!(e>=135)},debouncedDropdownShift(){clearTimeout(this.debounce),this.debounce=setTimeout((()=>{this.shiftToLeft=!1,this.$nextTick(this.shiftDropdownLeftIfNeeded)}),200)}}};o(58686);const s=(0,o(51900).Z)(n,i,[],!1,null,"2e98129d",null).exports},58686:(t,e,o)=>{var i=o(84968);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,o(45346).Z)("369a6654",i,!1,{ssrId:!0})}}]);