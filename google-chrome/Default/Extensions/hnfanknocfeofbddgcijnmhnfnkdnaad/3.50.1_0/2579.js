/*! For license information please see 2579.js.LICENSE.txt */
"use strict";(self.webpackChunkcb_wallet_extension=self.webpackChunkcb_wallet_extension||[]).push([[2579],{651104:(e,t,r)=>{r.d(t,{R:()=>g});var o,n=r(202784),a=r(344962),i=r(448449),l=r(136967),s=r(627763),c=r(960723),u=r(48972),d=r(661641),f=r(552322);e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var h,p,y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m="add-new-wallet",g=(0,n.memo)(y((function(e){var t=e.handlePressContinue,r=e.isCreateWalletDisabled,o=(0,a.useAddNewWalletCopy)(),n=o.contentTitle,h=o.bodyText,p=o.buttonText,y="dark"===(0,s.useSpectrum)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(u.VStack,{testID:m,flexGrow:1,spacingHorizontal:3,children:[(0,f.jsxs)(u.VStack,{gap:4,flexGrow:1,children:[(0,f.jsx)(d.TextTitle1,{testID:"".concat(m,"--title"),as:"h1",children:n}),(0,f.jsx)(u.VStack,{alignItems:"center",children:y?(0,f.jsx)(l.X,{alt:n}):(0,f.jsx)(i.G,{alt:n})}),(0,f.jsx)(d.TextBody,{testID:"".concat(m,"--body"),color:"foregroundMuted",as:"p",children:h})]}),(0,f.jsx)(c.Button,{testID:"".concat(m,"--continue"),onPress:t,disabled:r,children:p}),(0,f.jsx)(u.Spacer,{vertical:2})]})})}),"useAddNewWalletCopy{{ contentTitle, bodyText, buttonText }}\nuseSpectrum{}",(function(){return[a.useAddNewWalletCopy,s.useSpectrum]})));(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(m,"testID","/workspaces/apps/extension/src/screens/ManageWallets/WhyNewWallet.tsx"),h.register(g,"WhyNewWallet","/workspaces/apps/extension/src/screens/ManageWallets/WhyNewWallet.tsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)},212981:(e,t,r)=>{r.r(t),r.d(t,{WhyCreate:()=>I,testID:()=>x});var o,n=r(202784),a=r(107267),i=r(385394),l=r(446048),s=r(48972),c=r(395545),u=r(936483),d=r(651104),f=r(552322);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function p(){p=function(){return t};var e,t={},r=Object.prototype,o=r.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof b?t:b,i=Object.create(a.prototype),l=new E(o||[]);return n(i,"_invoke",{value:A(e,r,l)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var f="suspendedStart",y="suspendedYield",m="executing",g="completed",w={};function b(){}function v(){}function L(){}var x={};c(x,i,(function(){return this}));var I=Object.getPrototypeOf,W=I&&I(I(M([])));W&&W!==r&&o.call(W,i)&&(x=W);var C=L.prototype=b.prototype=Object.create(x);function T(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function G(e,t){function r(n,a,i,l){var s=d(e[n],e,a);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==h(u)&&o.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(u).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,l)}))}l(s.arg)}var a;n(this,"_invoke",{value:function(e,o){function n(){return new t((function(t,n){r(e,o,t,n)}))}return a=a?a.then(n,n):n()}})}function A(t,r,o){var n=f;return function(a,i){if(n===m)throw new Error("Generator is already running");if(n===g){if("throw"===a)throw i;return{value:e,done:!0}}for(o.method=a,o.arg=i;;){var l=o.delegate;if(l){var s=k(l,o);if(s){if(s===w)continue;return s}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(n===f)throw n=g,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n=m;var c=d(t,r,o);if("normal"===c.type){if(n=o.done?g:y,c.arg===w)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(n=g,o.method="throw",o.arg=c.arg)}}}function k(t,r){var o=r.method,n=t.iterator[o];if(n===e)return r.delegate=null,"throw"===o&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),w;var a=d(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,w;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,w):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,w)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function M(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(h(t)+" is not iterable")}return v.prototype=L,n(C,"constructor",{value:L,configurable:!0}),n(L,"constructor",{value:v,configurable:!0}),v.displayName=c(L,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,L):(e.__proto__=L,c(e,s,"GeneratorFunction")),e.prototype=Object.create(C),e},t.awrap=function(e){return{__await:e}},T(G.prototype),c(G.prototype,l,(function(){return this})),t.AsyncIterator=G,t.async=function(e,r,o,n,a){void 0===a&&(a=Promise);var i=new G(u(e,r,o,n),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},T(C),c(C,s,"Generator"),c(C,i,(function(){return this})),c(C,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},t.values=M,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(o,n){return l.type="throw",l.arg=t,r.next=o,n&&(r.method="next",r.arg=e),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,w):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),w},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),w}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;_(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:M(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),w}},t}function y(e,t,r,o,n,a,i){try{var l=e[a](i),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(o,n)}function m(e){return function(){var t=this,r=arguments;return new Promise((function(o,n){var a=e.apply(t,r);function i(e){y(a,o,n,i,l,"next",e)}function l(e){y(a,o,n,i,l,"throw",e)}i(void 0)}))}}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,a,i,l=[],s=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(o=a.call(r)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(e){c=!0,n=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw n}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var b,v,L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},x="wallet-why-create",I=(0,n.memo)(L((function(){var e=(0,u.S)(),t=g((0,n.useState)(!1),2),r=t[0],o=t[1],h=(0,a.useParams)().accountId;(0,i.useTriggerWhyCreateNewWalletViewed)({componentType:c.ComponentType.page});var y=(0,n.useCallback)(m(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o(!0),e({accountId:decodeURIComponent(h)});case 2:case"end":return t.stop()}}),t)}))),[e,h]);return(0,f.jsxs)(s.VStack,{testID:x,height:"100%",flexGrow:1,overflow:"auto",children:[(0,f.jsx)(l.w,{}),(0,f.jsx)(d.R,{handlePressContinue:y,isCreateWalletDisabled:r})]})}),"useHandleCreateWalletGroupPress{handleCreateWalletGroupPress}\nuseState{[isCreateWalletDisabled, setIsCreateWalletDisabled](false)}\nuseParams{{ accountId }}\nuseTriggerWhyCreateNewWalletViewed{}\nuseCallback{handlePressContinue}",(function(){return[u.S,a.useParams,i.useTriggerWhyCreateNewWalletViewed]})));(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(x,"testID","/workspaces/apps/extension/src/screens/ManageWallets/pages/WhyCreate.tsx"),b.register(I,"WhyCreate","/workspaces/apps/extension/src/screens/ManageWallets/pages/WhyCreate.tsx")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)},448449:(e,t,r)=>{r.d(t,{G:()=>c});const o=r.p+"b8596b93a111ba639524.svg";var n,a=r(386744),i=r(552322);e=r.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var l,s;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function c(e){var t=e.alt,r=e.scaleMultiplier,n=void 0===r?1:r,l=n*a.NP.width,s=n*a.NP.height;return(0,i.jsx)("img",{src:o,alt:t,"data-testid":"explore-decentralized-apps-miami",width:l,height:s})}(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&l.register(c,"ExploreDecentralizedAppsMiami","/workspaces/libs/wallet-cds-web/components/MiamiIllustrationWrapper/MiamiIllustrations/ExploreDecentralizedAppsMiami.tsx"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},136967:(e,t,r)=>{r.d(t,{X:()=>c});const o=r.p+"a1fb418c6b2002ba38c7.svg";var n,a=r(386744),i=r(552322);e=r.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var l,s;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function c(e){var t=e.alt,r=e.scaleMultiplier,n=void 0===r?1:r,l=n*a.NP.width,s=n*a.NP.height;return(0,i.jsx)("img",{src:o,alt:t,"data-testid":"explore-decentralized-apps-miami-dark",width:l,height:s})}(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&l.register(c,"ExploreDecentralizedAppsMiamiDark","/workspaces/libs/wallet-cds-web/components/MiamiIllustrationWrapper/MiamiIllustrations/ExploreDecentralizedAppsMiamiDark.tsx"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},936483:(e,t,r)=>{t.S=void 0;const o=r(202784),n=r(647933),a=r(385394),i=r(805173),l=r(344962),s=r(595494),c=r(854743),u=r(846374),d=r(363528),f=r(476689),h=r(395545),p=r(728209),y=r(70801);t.S=function(){const{push:e}=(0,n.useHistory)(),t=(0,f.useToast)(),r=(0,i.useGetAccountById)(),m=(0,d.useWalletGroups)(),{toastText:g}=(0,l.useAddNewWalletCopy)(),{walletLimitReachedText:w}=(0,u.useWalletGroupLimitReachedCopy)(),b=(0,s.useCreateNextWalletGroup)(),v=(0,c.useSetActiveWalletGroupId)(),L=(0,y.useHandleUnlockForTransaction)();return(0,o.useCallback)((async({accountId:o})=>{L({accountId:o,unlockSuccess:async()=>{const n=await b({accountId:o});if(n){v(n.id),t.show(g);const o=r(n.accountId);(0,a.triggerWalletGroupCreatedByUser)({action:h.ActionType.click,componentType:h.ComponentType.button,accountType:o?.type,walletIndex:n.walletIndex.toString(),context:m.length<=1?"first_new_manual_wallet_group":"subsequent_new_manual_wallet_group"}),e(p.RoutesEnum.PORTFOLIO)}else t.show(w)}})}),[L,b,v,t,g,r,m.length,e,w])}},70801:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useHandleUnlockForTransaction=void 0;const n=r(929148),a=o(r(334291)),i=r(870769),l=r(892254),s=r(427052);t.useHandleUnlockForTransaction=function(){const e=(0,n.useActiveAccountId)();return(0,l.useObservableCallback)(((t,{accountId:r,unlockSuccess:o,unlockError:n=a.default})=>{t&&t.unsubscribe();const l=r||e;return s.appLockRepository.unlock({...i.AppLockTypes.TransactionAccess,accountId:l}).subscribe((({status:e})=>{"SUCCESS"===e?o?.():n(new Error("Unlock Failed"))}),(e=>{n(e)}))}),[e])}},907742:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addAddressesToAccountBasedHistoryListeners=void 0;const o=r(297630),n=r(446101),a=r(108389),i=r(529225),l=r(53610),s=r(637420),c=r(152964),u=r(706135);t.addAddressesToAccountBasedHistoryListeners=async function({accountId:e,walletIndex:t,isEthereumNudgeKilled:r,isSolanaNudgeKilled:d}){const[f,h]=await Promise.all([(0,s.getAddressesForBlockchain)({blockchain:n.EthereumWalletConfiguration.blockchain}),(0,s.getAddressesForBlockchain)({blockchain:i.SolanaWalletConfiguration.blockchain})]),p=(0,o.getPrimaryAddressForIndex)({blockchain:n.EthereumWalletConfiguration.blockchain,addresses:f,currencyCode:n.EthereumWalletConfiguration.currencyCode,network:n.EthereumWalletConfiguration.networkSetting.defaultMainnet.network,walletIndex:t,accountId:e}),y=(0,o.getPrimaryAddressForIndex)({blockchain:i.SolanaWalletConfiguration.blockchain,addresses:h,currencyCode:i.SolanaWalletConfiguration.currencyCode,network:i.SolanaWalletConfiguration.networkSetting.defaultMainnet.network,walletIndex:t,accountId:e});if(p?.address){const o=await(0,u.deriveAccountBasedAddressConfigs)({blockchainSymbol:a.ETHEREUM_SYMBOL,walletIndex:t,accountId:e,primaryAddress:p.address,isNudgeKilled:r,addressesForBlockchain:f});c.ethereumAddressHistoryListener.addAddresses(o)}if(y?.address){const r=await(0,u.deriveAccountBasedAddressConfigs)({blockchainSymbol:l.SOLANA_SYMBOL,walletIndex:t,accountId:e,primaryAddress:y.address,isNudgeKilled:d,addressesForBlockchain:h});c.solanaAddressHistoryListener.addAddresses(r)}}},344962:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useAddNewWalletCopy=void 0;const o=r(202784),n=r(239398),a=r(700434),i=(0,n.defineMessages)({contentTitle:{id:"ievRIB",defaultMessage:"Add {uiTermForWalletGroupWithIndefiniteArticleLowerCase}"},bodyText:{id:"G7gth3",defaultMessage:"Each {uiTermForWalletGroupLowerCase} includes a unique Ethereum and Solana address that belongs to your {uiTermForAccountLowerCase}. You can add up to 15 per {uiTermForAccountLowerCase}. You can import them into other crypto wallets too."},buttonText:{id:"afrd3s",defaultMessage:"Continue"},utxoWalletsInfoText:{id:"NF0B0r",defaultMessage:"Additional {uiTermForWalletGroupsLowerCase} only support Ethereum and Solana at this time."},toastText:{id:"YcUEjn",defaultMessage:"New {uiTermForWalletGroupLowerCase} added"}});t.useAddNewWalletCopy=function(){const{formatMessage:e}=(0,n.useIntl)(),{uiTermForWalletGroupLowerCase:t,uiTermForAccountLowerCase:r,uiTermForWalletGroupsLowerCase:l,uiTermForWalletGroupWithIndefiniteArticleLowerCase:s}=(0,a.useUserFacingTerminology)();return(0,o.useMemo)((()=>({contentTitle:e(i.contentTitle,{uiTermForWalletGroupWithIndefiniteArticleLowerCase:s}),bodyText:e(i.bodyText,{uiTermForWalletGroupLowerCase:t,uiTermForAccountLowerCase:r}),buttonText:e(i.buttonText),toastText:e(i.toastText,{uiTermForWalletGroupLowerCase:t}),utxoWalletsInfoText:e(i.utxoWalletsInfoText,{uiTermForWalletGroupsLowerCase:l})})),[e,r,t,s,l])}},595494:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useCreateNextWalletGroup=void 0;const o=r(202784),n=r(385394),a=r(907742),i=r(214390),l=r(916589),s=r(91164),c=r(571591),u=r(998806),d=r(363528);t.useCreateNextWalletGroup=function(){const e=(0,d.useWalletGroups)(),t=(0,c.useCreateWalletGroups)(),r=(0,s.useCreateWalletsAtIndex)(),f=(0,u.useIsWalletGroupLimitReached)(),h=(0,i.useOverridableKillSwitch)((0,l.getKillSwitchByPlatform)("kill_balance_nudge_blockchain_eth")),p=(0,i.useOverridableKillSwitch)((0,l.getKillSwitchByPlatform)("kill_balance_nudge_blockchain_sol"));return(0,o.useCallback)((async function({accountId:o}){if(f(o))return void(0,n.triggerLogWalletLimitReached)();const i=e.filter((e=>e.accountId===o)).map((e=>Number(e.walletIndex)));let l=0;for(;i.includes(l);)l++;await r({index:BigInt(l),accountId:o});const s={accountId:o,walletIndex:BigInt(l)},[c]=await t([s]);return(0,a.addAddressesToAccountBasedHistoryListeners)({accountId:o,walletIndex:c?.walletIndex,isEthereumNudgeKilled:h,isSolanaNudgeKilled:p}),c}),[f,e,r,t,h,p])}},998806:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useIsWalletGroupLimitReached=t.WALLET_GROUP_LIMIT=void 0;const o=r(202784),n=r(363528);t.WALLET_GROUP_LIMIT=15,t.useIsWalletGroupLimitReached=function(){const e=(0,n.useWalletGroups)();return(0,o.useCallback)((function(r){return e.filter((e=>e.accountId===r)).length>=t.WALLET_GROUP_LIMIT}),[e])}},846374:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useWalletGroupLimitReachedCopy=void 0;const o=r(202784),n=r(239398),a=r(700434),i=r(998806),l=(0,n.defineMessages)({walletLimitReachedText:{id:"LhuXZv",defaultMessage:"The current limit is {walletGroupLimit} {uiTermForWalletGroupsLowerCase} per {uiTermForAccountLowerCase}"}});t.useWalletGroupLimitReachedCopy=function(){const{uiTermForWalletGroupsLowerCase:e,uiTermForAccountLowerCase:t}=(0,a.useUserFacingTerminology)(),{formatMessage:r}=(0,n.useIntl)();return(0,o.useMemo)((()=>({walletLimitReachedText:r(l.walletLimitReachedText,{walletGroupLimit:i.WALLET_GROUP_LIMIT,uiTermForWalletGroupsLowerCase:e,uiTermForAccountLowerCase:t})})),[r,e,t])}},91164:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useCreateWalletsAtIndex=void 0;const o=r(202784),n=r(385394),a=r(108389),i=r(236794),l=r(484475),s=r(86296),c=r(279547),u=r(98707),d=r(793892);t.useCreateWalletsAtIndex=function(){const e=(0,d.useSendCreateWalletsPostRequest)(),t=(0,l.getAllCurrentSupportedBlockchainSymbols)(),r=(0,o.useMemo)((()=>Object.keys(u.createWalletsByBlockchainMap).reduce((function(e,t){return l.allDeprecatedBlockchains.includes(t)||(e[t]=u.createWalletsByBlockchainMap[t]),e}),{})),[]);return(0,o.useCallback)((async function({index:o,accountId:u}){try{const s=[],d=(await(0,c.getWallets)()).filter((e=>e.selectedIndex===o&&e.accountId===u)),f=(0,l.getCurrentGroupSupportedBlockchainSymbols)({blockchainGroup:"Account"}).filter((e=>(0,l.isMultiWalletBlockchain)(e))).reduce(((e,t)=>(d.some((e=>e.blockchain.toString()===t))||e.push(t),e)),[]);return f.length?(await Promise.all(Object.entries(r).filter((([e])=>t.includes(e)&&f.includes(e))).map((async function([,e]){const t=await e({createAtIndexes:[o],accountId:u});t&&s.push(...t)}))),f.includes(a.ETHEREUM_SYMBOL)&&await e({accountId:u,indexes:[o]}),(0,i.clearKeyPairPromises)(),(0,c.saveWallets)(s),(0,n.triggerCreateWalletsAtIndexSuccess)({blockchains:f,count:s.length,walletIndex:o.toString()}),s):((0,n.triggerCreateWalletsAtIndexSuccess)({blockchains:[],count:0,walletIndex:o.toString()}),s)}catch(e){(0,n.triggerCreateWalletsAtIndexFailed)({walletIndex:o.toString()});const t=(0,s.coerceError)(e,"useCreateWalletsAtIndex");throw(0,s.cbReportError)({error:t,context:"multi-account",severity:"error",isHandled:!1}),e}}),[r,t,e])}},793892:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useSendCreateWalletsPostRequest=void 0;const o=r(202784),n=r(911598),a=r(829606),i=r(721743),l=r(430234);t.useSendCreateWalletsPostRequest=function(){const e=(0,n.useAuthedPost)(l.CREATE_WALLETS_ENDPOINT);return(0,o.useCallback)((async function({indexes:t,accountId:r,mnemonic:o}){const n=await(0,a.createNonce)(),s=await Promise.all(t.map((async function(e){if(r)return(0,i.generateMnemonicSignature)({header:l.CREATE_WALLETS_HEADER,nonce:n,accountId:r,index:e});if(o)return(0,i.generateMnemonicSignature)({header:l.CREATE_WALLETS_HEADER,nonce:n,mnemonic:o,index:e});throw new Error("Either accountId or mnemonic must be provided.")})));return e({nonce:n,ethereumAddresses:s})}),[e])}}}]);
//# sourceMappingURL=2579.js.map