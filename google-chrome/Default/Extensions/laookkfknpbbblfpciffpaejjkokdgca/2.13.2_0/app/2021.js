(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[2021],{92999:(t,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>r});var a=e(8081),n=e.n(a),s=e(23645),o=e.n(s)()(n());o.push([t.id,".base-dropdown-text[data-v-d3fdffb8]{padding:.425rem var(--dropdown-padding);color:var(--color-stop-4);font-size:.8125rem;font-weight:600}.base-dropdown-text.title[data-v-d3fdffb8]{color:var(--color-stop-4);text-transform:uppercase}",""]);const r=o},12639:(t,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>r});var a=e(8081),n=e.n(a),s=e(23645),o=e.n(s)()(n());o.push([t.id,".touch .link-dropdown[data-v-56b08de7]{opacity:1 !important}.link-list-item[data-v-56b08de7]{--icon-size: 16px;width:100%;height:fit-content;display:flex;position:relative;align-items:center;padding:.25rem var(--app-padding);overflow:hidden;transition:transform var(--a-fast) var(--a-curve);cursor:pointer;gap:.5625rem}.link-list-item.dragging[data-v-56b08de7]{transition:var(--a-default)}.link-list-item .link-title[data-v-56b08de7]{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.link-list-item .link-dropdown[data-v-56b08de7]{opacity:0;margin-left:auto}.link-list-item .link-dropdown.open[data-v-56b08de7]{opacity:1}.link-list-item .link-dropdown[data-v-56b08de7] .icon{fill:currentcolor}.link-list-item .lock-wrapper[data-v-56b08de7]{display:inline-flex;align-items:center;justify-content:center;padding:5px}.link-list-item[data-v-56b08de7]:hover{background-color:var(--color-stop-1);color:inherit}.link-list-item:hover .link-dropdown[data-v-56b08de7]{opacity:1}.link-list-item.tile[data-v-56b08de7]{--icon-size: 24px;flex-direction:column;padding:.5rem .375rem;border-radius:var(--border-radius);font-size:.8125rem;gap:.3125rem;line-height:1rem}.link-list-item.tile .link-title[data-v-56b08de7]{text-align:center}.link-list-item.tile .link-dropdown[data-v-56b08de7]{position:absolute;top:.125rem;right:.125rem}.link-list-item.tile[data-v-56b08de7] .icon-wrapper::after{--icon-wrapper-size: 21px}.link-list-item.dash[data-v-56b08de7]{color:rgba(255,255,255,.85)}.link-list-item.dash[data-v-56b08de7]:hover{background-color:inherit;color:#fff}.link-list-item.dash[data-v-56b08de7]:not(.tile){padding-right:0;padding-left:var(--dash-side-margin)}@media screen and (max-width: 800px){.link-list-item.dash:not(.tile) .link-title[data-v-56b08de7]{display:none}}",""]);const r=o},15016:(t,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>r});var a=e(8081),n=e.n(a),s=e(23645),o=e.n(s)()(n());o.push([t.id,".link-favicon-grid[data-v-9a8a2356]{--calculated-icon-size: calc(var(--icon-size) / 2 - (0.125rem / 2) - 0.125rem);width:var(--icon-size);height:var(--icon-size);display:grid;grid-auto-flow:row;grid-template-columns:repeat(2, var(--calculated-icon-size));grid-template-rows:repeat(2, var(--calculated-icon-size));padding:.125rem;border-radius:.3rem;background-color:var(--color-stop-3);gap:.125rem}.dash .link-favicon-grid[data-v-9a8a2356]{background-color:rgba(255,255,255,.25)}.link-favicon[data-v-9a8a2356]{width:var(--calculated-icon-size, var(--icon-size));height:var(--calculated-icon-size, var(--icon-size))}.link-favicon[data-v-9a8a2356] .icon-favicon{width:var(--calculated-icon-size, var(--icon-size));height:var(--calculated-icon-size, var(--icon-size));overflow:hidden;border-radius:.125rem;fill:currentcolor}",""]);const r=o},835:(t,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>r});var a=e(8081),n=e.n(a),s=e(23645),o=e.n(s)()(n());o.push([t.id,".links-list-item-toast-header[data-v-3bd3c28c]{--icon-size: 24px;display:flex;align-items:center;font-size:1.15rem;gap:.75rem}.links-list-item-toast-header .link-title[data-v-3bd3c28c]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""]);const r=o},78492:(t,i,e)=>{"use strict";e.d(i,{Z:()=>s});var a=function(){var t=this;return(0,t._self._c)("p",{class:["base-dropdown-text",{title:t.isTitle}]},[t._t("default")],2)};a._withStripped=!0;const n={name:"BaseDropdownText",props:{isTitle:{type:Boolean,default:!1}}};e(18359);const s=(0,e(51900).Z)(n,a,[],!1,null,"d3fdffb8",null).exports},22021:(t,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>w});var a=function(){var t=this,i=t._self._c;return i("li",{class:["link-list-item",{tile:t.isTile,dash:t.isOnDash}],attrs:{"data-test":"list-item",title:t.linkGroupTitle},on:{click:t.openLinks,auxclick:t.openLinks}},[i("links-list-item-icon",{attrs:{"link-group":t.linkGroup}}),t._v(" "),i("span",{staticClass:"link-title"},[t._v(t._s(t.linkGroup.title))]),t._v(" "),t.isTeamLink&&!t.$admin?i("div",{staticClass:"link-dropdown lock-wrapper",attrs:{title:"Managed by Team","data-test":"list-item-lock"}},[i("inline-svg",{staticClass:"icon icon-lock",attrs:{src:e(94784)}})],1):i("base-dropdown",{ref:"link-dropdown",staticClass:"link-dropdown",attrs:{"container-class":t.isOnDash?"dash":"app","data-test":"list-item-dropdown",title:""},scopedSlots:t._u([{key:"toastHeader",fn:function(){return[i("links-list-item-toast-header",{attrs:{"link-group":t.linkGroup}})]},proxy:!0}])},[t._v(" "),t.isTeamLink?i("base-dropdown-text",{attrs:{"is-title":!0,"data-test":"team-link-title"}},[t._v("Team Link")]):t._e(),t._v(" "),t.isTeamLink||t.isLegacyLink?t._e():i("base-dropdown-option",{attrs:{"data-test":"pin-item"},on:{click:t.toggleLinkPinned}},[i("inline-svg",{staticClass:"icon icon-pin",attrs:{src:e(25301)}}),t._v(" "),i("span",{staticClass:"text"},[t._v("\n\t\t\t\t"+t._s(t.linkGroup.pinned?"Unpin":"Pin")+"\n\t\t\t")])],1),t._v(" "),!t.isLegacyLink||t.isTeamLink?i("base-dropdown-option",{attrs:{"data-test":"edit-item"},on:{click:t.editLink}},[i("inline-svg",{staticClass:"icon icon-edit",attrs:{src:e(13228)}}),t._v(" "),i("span",{staticClass:"text"},[t._v("Edit")])],1):t._e(),t._v(" "),t.isTeamLink?t._e():i("base-dropdown-option",{attrs:{"data-test":"delete-item"},on:{click:t.deleteLink}},[i("inline-svg",{staticClass:"icon icon-trash",attrs:{src:e(9241)}}),t._v(" "),i("span",{staticClass:"text"},[t._v("Delete")])],1)],1)],1)};a._withStripped=!0;var n=e(78492),s=e(39226),o=e(24749),r=e(42223),l=e(93287),d=e(68099),c=e(24960),p=function(){var t=this,i=t._self._c;return i("div",{staticClass:"links-list-item-toast-header"},[i("links-list-item-icon",{attrs:{"link-group":t.linkGroup}}),t._v(" "),i("span",{staticClass:"link-title"},[t._v(t._s(t.linkGroup.title))])],1)};p._withStripped=!0;const u={name:"LinksListItemToastHeader",components:{LinksListItemIcon:d.Z},props:{linkGroup:{type:Object,required:!0}}};e(99375);var k=e(51900);const v=(0,k.Z)(u,p,[],!1,null,"3bd3c28c",null).exports;var h=e(91488),f=e(77140);const g={name:"LinksListItem",components:{LinksListItemToastHeader:v,LinksListItemIcon:d.Z,BaseDropdown:l.Z,BaseDropdownOption:s.Z,BaseDropdownText:n.Z},mixins:[r.Z],inject:["viewStateStore","itemStore","capture","batchCapture"],props:{linkGroup:{type:Object,required:!0},isTile:{type:Boolean,default:!1},isOnDash:{type:Boolean,default:!1},isTeamLink:{type:Boolean,default:!1}},computed:{linkGroupTitle(){const t=new Set(this.linkGroup.links.map((t=>new URL(t.url).hostname)));return Array.from(t).join("\n")},isLegacyLink(){return this.linkGroup instanceof h.R}},methods:{openLinks(t){this.batchCapture((this.linkGroup.hasManyLinks?"tab group":"link")+" click",{is_paid_event:this.linkGroup.hasManyLinks});let i=m.models.bookmarksSettings.get("openInNewTab")||t.metaKey||"auxclick"===t.type;this.linkGroup.links.forEach((({url:t})=>{f.H.tabs.openUrl(t,i),i=!0}))},async toggleLinkPinned(){this.closeLinkDropdown(),await this.itemStore.update(this.linkGroup.id,{pinned:!this.linkGroup.pinned})},async editLink(){if(this.closeLinkDropdown(),this.$admin&&this.isTeamLink){const t=await c.Z.sendMessage({handler:"getSid",args:[this.linkGroup.id]});m.cmd("window.account.open.login","team/links?id="+t.substring(1))}else await this.viewStateStore.togglePopup(!0),this.itemStore.editItem(this.linkGroup.id),await this.viewStateStore.setActiveView(o.od.Form)},async deleteLink(){this.closeLinkDropdown(),await this.viewStateStore.togglePopup(!0),await this.viewStateStore.setConfirmation({title:"Are you sure you want to delete this link?"})&&(this.capture((this.linkGroup.hasManyLinks?"tab group":"link")+" delete",{is_paid_event:this.linkGroup.hasManyLinks}),await this.itemStore.deleteLinkGroup(this.linkGroup.id))},closeLinkDropdown(){var t;null===(t=this.$refs["link-dropdown"])||void 0===t||t.closeDropdown()}}};e(9024);const w=(0,k.Z)(g,a,[],!1,null,"56b08de7",null).exports},68099:(t,i,e)=>{"use strict";e.d(i,{Z:()=>s});var a=function(){var t=this,i=t._self._c;return t.iconSrc?i("div",{staticClass:"link-favicon"},[i("inline-svg",{staticClass:"icon-favicon",attrs:{src:t.iconSrc}})],1):t.linkGroup.hasManyLinks?i("div",{staticClass:"link-favicon-grid"},t._l(t.topFourLinks,(function(t){return i("fav-icon",{key:t.id,staticClass:"link-favicon",attrs:{url:t.url}})})),1):i("fav-icon",{staticClass:"link-favicon",attrs:{url:t.linkGroup.links[0].url}})};a._withStripped=!0;const n={name:"LinksListItemIcon",components:{FavIcon:e(39134).Z},props:{linkGroup:{type:Object,default:null},iconSrc:{type:String,default:""}},computed:{topFourLinks(){return this.linkGroup.links.slice(0,4)}}};e(26941);const s=(0,e(51900).Z)(n,a,[],!1,null,"9a8a2356",null).exports},39134:(t,i,e)=>{"use strict";e.d(i,{Z:()=>o});var a=function(){var t=this,i=t._self._c;return i("div",[t.imgLoading?i("inline-svg",{staticClass:"icon-favicon",attrs:{src:e(58858)}}):t._e(),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:!t.imgLoading,expression:"!imgLoading"}],staticClass:"icon-favicon",attrs:{src:t.favicon,draggable:"false"},on:{load:function(i){t.imgLoading=!1}}})],1)};a._withStripped=!0;var n=e(80809);const s={name:"FavIcon",props:{url:{type:String,default:""}},data(){return{imgLoading:!0,updatedUrl:this.url}},computed:{favicon(){return m.utils.getFavIcon(n.Z.ensureUrlScheme(this.updatedUrl))}},watch:{url(){this.debouncedUrlChange&&clearTimeout(this.debouncedUrlChange),this.debouncedUrlChange=setTimeout((()=>{this.updatedUrl=this.url}),300)}}},o=(0,e(51900).Z)(s,a,[],!1,null,null,null).exports},18359:(t,i,e)=>{var a=e(92999);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,e(45346).Z)("585b3780",a,!1,{})},9024:(t,i,e)=>{var a=e(12639);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,e(45346).Z)("31788606",a,!1,{})},26941:(t,i,e)=>{var a=e(15016);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,e(45346).Z)("126bd76c",a,!1,{})},99375:(t,i,e)=>{var a=e(835);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,e(45346).Z)("7362fd83",a,!1,{})}}]);