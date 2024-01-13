"use strict";(self.webpackChunkcb_wallet_extension=self.webpackChunkcb_wallet_extension||[]).push([[1418],{608856:(e,t,r)=>{r.d(t,{t:()=>A});var o,s=r(202784),a=r(239398),n=r(783112),i=r(309592),u=r(21717),c=r(623330),l=r(48972),d=r(746946),M=r(188807),g=r(226135),y=r(552322);e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var L,j,f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},I=(0,a.defineMessages)({assetAddressLabel:{id:"r1h9BX",defaultMessage:[{type:1,value:"currencyCode"},{type:0,value:" address"}]}});function A(e){var t=e.wallet,r=t.primaryAddress,o=t.imageURL,a=t.currencyCode,L=t.blockchain,j=t.addresses,f=(0,d.B)(),A=(0,n.Z)().formatMessage,T=(0,u.useActiveAccount)(),N=(0,c.useActiveWalletGroup)(),v=L.toString(),p=a.code;(0,i.useReceiveByAssetAddressScreenViewed)({blockchain:v,currencyCode:p,accountType:T.type,walletIndex:null==N?void 0:N.walletIndex.toString()});var b=(0,s.useMemo)((function(){return{url:o}}),[o]),D=(0,s.useCallback)((function(){(0,i.triggerReceiveByAssetCopyAddressClicked)(v,p)}),[v,p]);return(0,y.jsx)(l.VStack,{height:"100%",spacingHorizontal:4,children:f(t)?(0,y.jsx)(M.L,{blockchainName:L.rawValue,addresses:j,addressHeadline:A(I.assetAddressLabel,{currencyCode:a.code}),onCopyClick:D,iconSettings:b}):(0,y.jsx)(g.s,{address:r,addressHeadline:A(I.assetAddressLabel,{currencyCode:a.code}),onCopyClick:D,iconSettings:b})})}f(A,"useGetShouldShowLegacySegwitReceive{getShouldShowLegacySegwitReceive}\nuseIntl{{ formatMessage }}\nuseActiveAccount{activeAccount}\nuseActiveWalletGroup{activeWalletGroup}\nuseReceiveByAssetAddressScreenViewed{}\nuseMemo{qrCodeIconSettings}\nuseCallback{handlePress}",(function(){return[d.B,n.Z,u.useActiveAccount,c.useActiveWalletGroup,i.useReceiveByAssetAddressScreenViewed]})),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(L.register(I,"messages","/workspaces/apps/extension/src/screens/Receive/AssetReceiveByAddress.tsx"),L.register(A,"AssetReceiveByAddress","/workspaces/apps/extension/src/screens/Receive/AssetReceiveByAddress.tsx")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)},875071:(e,t,r)=>{r.r(t),r.d(t,{Receive:()=>y});var o,s,a,n=r(107267),i=r(351795),u=r(285881),c=r(728209),l=r(964699),d=r(532363),M=r(931890),g=r(552322);function y(){var e=(0,u.L)();return(0,g.jsx)(i.E,{wallet:e,learnMoreLink:l.LINK_CRYPTO_SUPPORT,children:(0,g.jsxs)(n.Switch,{children:[(0,g.jsx)(n.Route,{path:c.RoutesEnum.RECEIVE,exact:!0,component:d.A}),(0,g.jsx)(n.Route,{path:c.RoutesEnum.RECEIVE_ADDRESS,exact:!0,component:d.A}),(0,g.jsx)(n.Route,{path:c.RoutesEnum.RECEIVE_SEARCH_ASSET,exact:!0,component:M.y})]})})}e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(y,"useWalletFromPathParams{wallet}",(function(){return[u.L]})),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(y,"Receive","/workspaces/apps/extension/src/screens/Receive/Receive.tsx"),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&a(e)},235367:(e,t,r)=>{r.d(t,{L:()=>S});var o,s=r(202784),a=r(239398),n=r(783112),i=r(497814),u=r(309592),c=r(632810),l=r(575853),d=r(695578),M=r(894617),g=r(29904),y=r(713961),L=r(661641),j=r(226135),f=r(552322);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==I(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==I(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===I(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var v,p,b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},D=(0,a.defineMessages)({recentsSectionTitle:{id:"f3C+oE",defaultMessage:[{type:0,value:"Recent"}]}}),w=10;function S(){var e=(0,d.i)({maxResultsCount:w,txType:"RECEIVE"}),t=(0,s.useRef)(null),r=(0,c.usePrimaryReceiveWallets)(),o=(0,l.usePrimaryReceiveAddresses)(),a=(0,y.d)(),I=a.openModal,A=a.closeModal,N=(0,n.Z)().formatMessage;(0,u.useSearchReceiveAssetSuggestionsViewed)();var v=(0,s.useCallback)((function(e){var t,s=r.get(e),a=null===(t=o.get(e))||void 0===t?void 0:t.address;return function(){var t;s&&a?((0,u.triggerReceiveAssetSuggestionsAssetClicked)(e),I((0,f.jsx)(j.e,{visible:!0,address:a,addressImageURL:s.imageURL||(null===(t=s.network.asChain())||void 0===t?void 0:t.chainImageUrl),blockchainName:e,testID:"generic-receive-wallet-address-modal",onRequestClose:A}))):(0,u.triggerReceiveAssetSuggestionUnsupported)(e)}}),[A,I,o,r]),p=(0,s.useCallback)((function(e){var t=e.network,r=e.blockchain.rawValue;return{id:"".concat(null==t?void 0:t.rawValue,"/").concat(r,"/").concat(e.contractAddress,"/").concat(e.currencyCode.rawValue),network:t,name:e.displayName,currencyCode:e.currencyCode.rawValue,imageUrl:e.imageURL,showNetworkIcon:!0,onSelect:v(r)}}),[v]),b=(0,s.useMemo)((function(){return e.slice(0,w).map(p)}),[p,e]),S=(0,s.useCallback)((function(e){var t=e.key,r=e.index,o=e.style,s=b[r];return s?(0,f.jsx)("div",{style:o,children:(0,f.jsx)(M.a,T(T({},s),{},{testID:"search-receive-address-suggestion-item-".concat(s.id)}))},t):null}),[b]);return(0,f.jsxs)(g.VStack,{flexGrow:1,children:[b.length>0&&(0,f.jsx)(L.TextCaption,{as:"p",color:"foregroundMuted",spacingStart:3,children:N(D.recentsSectionTitle)}),(0,f.jsx)(i.aV,{ref:t,rowCount:b.length,width:375,height:400,rowHeight:80,rowRenderer:S,overscanRowCount:20},"receive-asset-suggestions-list")]})}b(S,"useRecentTransactedWallets{recentTransactedWallets}\nuseRef{listRef}\nusePrimaryReceiveWallets{wallets}\nusePrimaryReceiveAddresses{walletAddresses}\nuseModal{{ openModal, closeModal }}\nuseIntl{{ formatMessage }}\nuseSearchReceiveAssetSuggestionsViewed{}\nuseCallback{handleSelectAsset}\nuseCallback{parseWalletToSuggestionItemInfo}\nuseMemo{addressSuggestionsItemInfos}\nuseCallback{renderAssetListItem}",(function(){return[d.i,c.usePrimaryReceiveWallets,l.usePrimaryReceiveAddresses,y.d,n.Z,u.useSearchReceiveAssetSuggestionsViewed]})),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(D,"messages","/workspaces/apps/extension/src/screens/Receive/ReceiveAssetSuggestions.tsx"),v.register(w,"RECEIVE_ADDRESS_SUGGESTION_MAX_COUNT","/workspaces/apps/extension/src/screens/Receive/ReceiveAssetSuggestions.tsx"),v.register(S,"ReceiveAssetSuggestions","/workspaces/apps/extension/src/screens/Receive/ReceiveAssetSuggestions.tsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)},532363:(e,t,r)=>{r.d(t,{A:()=>l});var o,s,a,n=r(285881),i=r(608856),u=r(476563),c=r(552322);function l(){var e=(0,n.L)();return e?(0,c.jsx)(i.t,{wallet:e}):(0,c.jsx)(u.a,{})}e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(l,"useWalletFromPathParams{wallet}",(function(){return[n.L]})),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(l,"ReceiveByAddress","/workspaces/apps/extension/src/screens/Receive/ReceiveByAddress.tsx"),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&a(e)},931890:(e,t,r)=>{r.d(t,{y:()=>v});var o,s=r(202784),a=r(239398),n=r(783112),i=r(309592),u=r(64335),c=r(233806),l=r(972205),d=r(48972),M=r(790726),g=r(552322);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,s,a,n,i=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(o=a.call(r)).done)&&(i.push(o.value),i.length!==t);u=!0);}catch(e){c=!0,s=e}finally{try{if(!u&&null!=r.return&&(n=r.return(),Object(n)!==n))return}finally{if(c)throw s}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var j,f,I="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},A=(0,a.defineMessages)({screenTitle:{id:"RSUswk",defaultMessage:[{type:0,value:"Which asset are you receiving?"}]},searchInputPlaceholder:{id:"TqzMvT",defaultMessage:[{type:0,value:"Search assets"}]},learnMoreHyperText:{id:"P7MhFY",defaultMessage:[{type:0,value:"Learn more"}]},learnMoreDescription:{id:"v8xDaf",defaultMessage:[{type:0,value:"about how the same asset can exist on different networks."}]}}),T=300;function N(){var e=(0,n.Z)().formatMessage,t=y((0,s.useState)(""),2),r=t[0],o=t[1],a=y((0,s.useState)(""),2),i=a[0],L=a[1],j=(0,c.f)(i),f=j.data,I=j.isLoading,N=j.error,v=(0,u.useDebouncedCallback)(L,T),p=(0,s.useCallback)((function(e){o(e),v(e)}),[v]);return(0,g.jsxs)(d.VStack,{flexGrow:1,children:[(0,g.jsx)(d.Box,{spacingHorizontal:3,spacingBottom:2,children:(0,g.jsx)(l.SearchInput,{placeholder:e(A.searchInputPlaceholder),value:r,onChangeText:p,autoFocus:!0,testID:"search-receive-address--search-input"})}),(0,g.jsx)(M.T,{data:f,loading:I,error:N})]})}function v(){return(0,i.useSearchReceiveAssetViewed)(),(0,g.jsx)(d.VStack,{flexGrow:1,children:(0,g.jsx)(N,{})})}I(N,"useIntl{{ formatMessage }}\nuseState{[inputValue, setInputValue]('')}\nuseState{[query, setQuery]('')}\nuseAssetSearch{{ data, isLoading, error }}\nuseDebouncedCallback{debouncedQueryUpdate}\nuseCallback{handleInputChange}",(function(){return[n.Z,c.f,u.useDebouncedCallback]})),I(v,"useSearchReceiveAssetViewed{}",(function(){return[i.useSearchReceiveAssetViewed]})),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(j.register(A,"messages","/workspaces/apps/extension/src/screens/Receive/SearchReceiveAsset.tsx"),j.register(T,"SEARCH_ASSET_QUERY_DEBOUNCE_MS","/workspaces/apps/extension/src/screens/Receive/SearchReceiveAsset.tsx"),j.register(N,"SearchReceiveAssetContent","/workspaces/apps/extension/src/screens/Receive/SearchReceiveAsset.tsx"),j.register(v,"SearchReceiveAsset","/workspaces/apps/extension/src/screens/Receive/SearchReceiveAsset.tsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)},790726:(e,t,r)=>{r.d(t,{T:()=>E});var o,s=r(202784),a=r(239398),n=r(783112),i=r(497814),u=r(309592),c=r(86296),l=r(632810),d=r(308209),M=r(43398),g=r(928540),y=r(523792),L=r(575853),j=r(894617),f=r(476689),I=r(544562),A=r(48972),T=r(29904),N=r(713961),v=r(235367),p=r(226135),b=r(244941),D=r(552322);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==w(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==w(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===w(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var O,h,C="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},k=(0,a.defineMessages)({assetDescription:{id:"OqB4GV",defaultMessage:[{type:0,value:"on "},{type:1,value:"networkDisplayName"},{type:0,value:" network"}]},somethingWentWrong:{id:"j9qSqk",defaultMessage:[{type:0,value:"Something went wrong"}]}});function E(e){var t,r=e.data,o=e.loading,a=e.error,w=(0,n.Z)().formatMessage,S=(0,l.usePrimaryReceiveWallets)(),x=(0,L.usePrimaryReceiveAddresses)(),O=(0,y.useActiveWalletGroupIndex)(),h=(0,N.d)(),C=h.openModal,E=h.closeModal,R=(0,f.useToast)().show,G=(0,s.useRef)(null),z=(0,d.useHasUTXOExtensionExperiment)(),H=(0,s.useCallback)((function(e){var t=S.get(e),r=x.get(e);return function(){var o;if(!t||!r)return(0,u.triggerReceiveUnsupportedBlockchainAssetClicked)(e),void R(w(k.somethingWentWrong));(0,u.triggerReceiveSupportedBlockchainAssetClicked)(e),C((0,D.jsx)(p.e,{visible:!0,address:r.address,addressImageURL:t.imageURL||(null===(o=t.network.asChain())||void 0===o?void 0:o.chainImageUrl),blockchainName:e,testID:"generic-receive-wallet-address-modal",onRequestClose:E}))}}),[x,E,w,C,R,S]),Y=(0,s.useCallback)((function(e){return(0===O||!d.UTXO_EXPERIMENT_ENABLED_CHAINS.includes(e))&&(!!z||!d.UTXO_EXPERIMENT_ENABLED_CHAINS.includes(e))}),[z,O]),U=(0,s.useCallback)((function(e){var t,r=(0,g.getNetworkForWacId)(e.network),o=null==r?void 0:r.asChain(),s=null==o?void 0:o.displayName,a=null==o?void 0:o.blockchainSymbol,n=null!=a?a:e.symbol;return{id:"".concat(null==r?void 0:r.rawValue,"/").concat(a,"/").concat(e.contract_address,"/").concat(e.symbol),network:r,name:e.name,description:s?w(k.assetDescription,{networkDisplayName:s}):void 0,currencyCode:e.symbol,imageUrl:null===(t=(0,M.j)(e.images))||void 0===t?void 0:t.url,showNetworkIcon:!0,onSelect:H(n)}}),[w,H]),P=(0,s.useMemo)((function(){var e;return null==r||null===(e=r.filter((function(e){var t=(0,g.getNetworkForWacId)(e.network),r=null==t?void 0:t.asChain(),o=null==r?void 0:r.blockchainSymbol,s=null!=o?o:e.symbol;return Y(s)})))||void 0===e?void 0:e.map(U)}),[r,U,Y]),Q=(0,s.useCallback)((function(e){var t=e.key,r=e.index,o=e.style,s=null==P?void 0:P[r];return s?(0,D.jsx)("div",{style:o,children:(0,D.jsx)(j.a,m(m({},s),{},{testID:"search-receive-address-list-cell--".concat(s.id)}))},t):null}),[P]);return(0,s.useEffect)((function(){r&&r.length>0&&((0,u.triggerSearchRequestResult)({status:"success",count:r.length}),(0,u.triggerReceiveAssetResultsListViewed)()),0!==(null==r?void 0:r.length)||o||a||(0,u.triggerSearchRequestResult)({status:"no_results",count:0}),r||o||!a||((0,c.cbReportError)({error:a,severity:"error",context:"receive",isHandled:!1}),(0,u.triggerSearchRequestResult)({status:"error",count:0,errorMessage:a.message}))}),[r,a,o]),o?(0,D.jsx)(T.VStack,{width:"100%",height:"100%",children:Array(7).fill(null).map((function(e,t){return(0,D.jsx)(A.HStack,{testID:"asset-search-fallback-".concat(t),children:(0,D.jsx)(I.ListCellFallback,{title:!0,description:!0,media:"avatar"})},"asset-search-fallback-".concat(t))}))}):void 0!==r||a?0===(null==r?void 0:r.length)?(0,D.jsx)(T.VStack,{width:"100%",height:"100%",children:(0,D.jsx)(b.I,{})}):(0,D.jsx)(T.VStack,{width:"100%",height:"100%",children:(0,D.jsx)(i.aV,{ref:G,rowCount:null!==(t=null==P?void 0:P.length)&&void 0!==t?t:0,width:375,height:400,rowHeight:80,rowRenderer:Q,overscanRowCount:20})}):(0,D.jsx)(T.VStack,{width:"100%",height:"100%",children:(0,D.jsx)(v.L,{})})}C(E,"useIntl{{ formatMessage }}\nusePrimaryReceiveWallets{wallets}\nusePrimaryReceiveAddresses{addresses}\nuseActiveWalletGroupIndex{walletGroupIndex}\nuseModal{{ openModal, closeModal }}\nuseToast{{ show }}\nuseRef{listRef}\nuseHasUTXOExtensionExperiment{hasUTXOExtensionExperiment}\nuseCallback{handleSelectAsset}\nuseCallback{shouldIncludeBlockchain}\nuseCallback{formatAssetSearchResult}\nuseMemo{assetListCellInfos}\nuseCallback{renderAssetListItem}\nuseEffect{}",(function(){return[n.Z,l.usePrimaryReceiveWallets,L.usePrimaryReceiveAddresses,y.useActiveWalletGroupIndex,N.d,f.useToast,d.useHasUTXOExtensionExperiment]})),(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(O.register(k,"messages","/workspaces/apps/extension/src/screens/Receive/SearchReceiveAssetList.tsx"),O.register(E,"SearchReceiveAssetList","/workspaces/apps/extension/src/screens/Receive/SearchReceiveAssetList.tsx")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)},244941:(e,t,r)=>{r.d(t,{I:()=>I});var o=r(202784),s=r(239398),a=r(783112),n=r(309592),i=r(48972),u=r(950018),c=r(661641);const l="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQxIiBoZWlnaHQ9IjEyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGQ9Ik0xNi40NjcgMTE1LjczMWMwLTU5LjI1NCA0NS45MDktMTA3LjI5IDEwMi41MzUtMTA3LjI5IDU2LjYyNyAwIDEwMi41MzUgNDguMDM2IDEwMi41MzUgMTA3LjI4djQuNzA4SDE2LjQ2N3YtNC43MDguMDFaIiBmaWxsPSIjQ0VEMkRCIi8+PHBhdGggZD0iTTEyOC45NDkgMzMuOTgyYzguMTY1IDAgMTQuNzg0LTYuNTk1IDE0Ljc4NC0xNC43MzFTMTM3LjExNCA0LjUyIDEyOC45NDkgNC41MmMtOC4xNjQgMC0xNC43ODMgNi41OTUtMTQuNzgzIDE0LjczIDAgOC4xMzcgNi42MTkgMTQuNzMyIDE0Ljc4MyAxNC43MzJaIiBmaWxsPSIjMDA1MkZGIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNjEuNTk4IDM1Ljg3MWM0LjAwMy0zLjc4OCA2LjQ5OS05LjE0MyA2LjQ5OS0xNS4wNzhDMTY4LjA5NyA5LjMwOSAxNTguNzU0IDAgMTQ3LjIzIDBjLTExLjIzMSAwLTIwLjM5IDguODQyLTIwLjg0OSAxOS45MjEtMTAuOTE4IDguMTYtMjEuMTk2IDE4LjU5Ni0zMC4yMDQgMjguMzY0bC0xLjM4OCAxLjUxMmMtMS4yMDkgMS4zMjQtLjI4IDMuNDU0IDEuNTE4IDMuNDU0bDI3Ljc2My4xMDYtMTkuMzY5IDkuNjc0Yy0yLjE5NS0xLjUyNi00LjY3Ny0yLjM1NC03LjIzNi0yLjM1NGgtOC4wMzFjLTQuMTQ1IDAtNy45NjEgMi44OTYtOS45NzkgNy41NTVoMTkuMjU4bC05LjcyOCAxMS42NDUgMzguOTgzIDIuNDI3LTYuMjMyIDIxLjIxM2gtNy4wOTdjLTcuMTg5IDAtMTIuOTI5IDguNTQtMTMuMTM5IDE2LjQ3M2wtLjEwOS0uMDAyLjEwMy40MDl2LjA0MWguMDFsLS4wMS0uMDQxYzAtLjEzNS4wMDItLjI3MS4wMDYtLjQwN2wxNS4zMzEuMjIyLS4wNjYuMjI2di4wMmg3Ny41NzVjMi4wMDguMzQ3IDQuMDczLjUyNyA2LjE4MS41MjcgMi4xMDggMCA0LjE3My0uMTggNi4xODItLjUyN2guMTMxbC0uMDA2LS4wMjJjMTYuODY0LTIuOTcxIDI5LjY3My0xNy42NDcgMjkuNjczLTM1LjMwNCAwLTE5LjgtMTYuMTA5LTM1Ljg1Mi0zNS45OC0zNS44NTItMy42MjcgMC03LjEzLjUzNS0xMC40MzEgMS41My0uMTE2LjAxOS0uMjMyLjA0NC0uMzQ4LjA3NS01LjQzNCAxLjQ0OC0xMS4xOTQtMS44NTUtMTIuNzQ5LTcuNjEtMS41NDUtNS43NTcgMS43ODgtMTEuNDkzIDcuMjA2LTEyLjk0YTMuNTgzIDMuNTgzIDAgMCAwIDIuNTQ0LTQuMzg4IDMuNTk4IDMuNTk4IDAgMCAwLTQuNDA0LTIuNTM0Yy04LjEwNyAyLjE2NC0xMy4yMzQgOS43MTEtMTIuODk5IDE3Ljc3YTcxLjgyMSA3MS44MjEgMCAwIDAtMy45NC0yLjc2MmwtMy45MDItMi41NVptNjcuNzExIDQ5LjI2MWMwIDE0LjM2LTEwLjU5IDI2LjI1Ny0yNC40MTIgMjguMzU3bC04Ljg1MS0zMS44NWE3MS41NDMgNzEuNTQzIDAgMCAwLTkuMjU0LTIxLjcyNiAyOC43MzggMjguNzM4IDAgMCAxIDEzLjcyOS0zLjQ2N2MxNS44OTkgMCAyOC43ODggMTIuODQ0IDI4Ljc4OCAyOC42ODZaIiBmaWxsPSIjMEEwQjBEIi8+PHBhdGggZD0iTTEyOC4yMjIgMzguMjhjMi4wOTEgMCAzLjc4Ni0xLjY2MSAzLjc4Ni0zLjcxMiAwLTIuMDUtMS42OTUtMy43MTItMy43ODYtMy43MTJzLTMuNzg2IDEuNjYyLTMuNzg2IDMuNzEyYzAgMi4wNSAxLjY5NSAzLjcxMyAzLjc4NiAzLjcxM1oiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwNC42NjYgNTYuNzU2YzExLjc5NiAxLjQ0MyAyNC42NTIgMTIuMjQyIDI0LjQ4MiAyOC4zMTctLjEgOS41OTYtMy40NDYgMTQuNjEyLTYuNzYyIDE4LjY3My0uNC40ODgtLjg5OSAxLjA5NS0xLjMzOSAxLjUxM2wuNDkgOC45ODhjMS4wODktLjc2NiAzLjY1Ni0yLjkwNiA0LjA2NS0zLjI4NCA1LjUwNC01LjA2NyAxMC44ODgtMTIuMzYzIDEwLjg4OC0yNi4xOTggMC0yMi4wNTctMTkuODQ4LTM2LjQ4LTM2Ljk2OS0zNS40NjVNMTc2LjAzOCAyNi41NjZhMTcuMzc4IDE3LjM3OCAwIDAgMSA2LjMwMy0zLjE1NiAzLjU4NyAzLjU4NyAwIDEgMSAxLjg1OCA2LjkyOCA5Ljg2NCA5Ljg2NCAwIDAgMC0yLjEwNy44MjZsLTYuMDY0LTQuNTk4aC4wMVoiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMTQ2LjgyMSAzMC44MzdjMC02LjkyNy01LjY0My0xMi41NTEtMTIuNTk1LTEyLjU1MSA2Ljk1MiAwIDEyLjU5NS01LjYxNCAxMi41OTUtMTIuNTUyIDAgNi45MjggNS42NDQgMTIuNTUyIDEyLjU5NiAxMi41NTItNi45NTIgMC0xMi41OTYgNS42MTQtMTIuNTk2IDEyLjU1MVoiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwOC40NzMgODEuNTUyYTEgMSAwIDAgMSAxLjAzNy0uOTYxbDM3LjM4OCAxLjQyM2ExIDEgMCAxIDEtLjA3NiAxLjk5OWwtMzcuMzg4LTEuNDI0YTEgMSAwIDAgMS0uOTYxLTEuMDM3Wk0xNzcuNTI5IDgyLjU3MWExIDEgMCAwIDEtLjQzOSAxLjM0NGwtMTQuODE3IDcuNTIyYy0xLjc1NC45MjQtMi44NTQgMS42MDYtMy42MTggMi40LS43MjcuNzU2LTEuMjAyIDEuNjcyLTEuNTQ4IDMuMTc2bC0xLjk2MSA5LjQ1NmgtOC4yODhjLTQuOTQyLjA3Mi04LjM3NiAyLjIwMi0xMC41OTYgNC45NzgtMi4yNDYgMi44MDktMy4yNTUgNi4yOTEtMy4yNTUgOC45OTJhMSAxIDAgMSAxLTIgMGMwLTMuMTMyIDEuMTQ5LTcuMDYgMy42OTMtMTAuMjQxIDIuNTY5LTMuMjEyIDYuNTU0LTUuNjUgMTIuMTM3LTUuNzI5aDYuNjgxbDEuNjM1LTcuODgzLjAwMy0uMDFjLjQwMi0xLjc1NSAxLjAxMS0zLjAzNyAyLjA1OC00LjEyNSAxLjAxMS0xLjA1MiAyLjM3Ni0xLjg2MiA0LjEzNC0yLjc4N2wuMDA3LS4wMDQgMTQuODMtNy41MjhhMSAxIDAgMCAxIDEuMzQ0LjQzOVoiIGZpbGw9IiNDRUQyREIiLz48cGF0aCBkPSJNMTA5LjQ3MiA2OC4yM0gyNy44OTRsMjEuNDg2IDUyLjIwN2g3NS4wNTVsLTE0Ljk2My01Mi4yMDZaIiBmaWxsPSIjMDA1MkZGIi8+PHBhdGggZD0iTTI3LjA4NSA2OC4yM2g4Mi4zODdsLTE1LjEwMyA1Mi4yMDdINC41bDIyLjU4NS01Mi4yMDZaIiBmaWxsPSIjNURFMkY4Ii8+PHBhdGggZD0iTTQxLjkwOCAxMDUuNDY5aDIyLjQ0NWwtNy40MTIgMTQuOTdIMzQuNDk3bDcuNDExLTE0Ljk3WiIgZmlsbD0iI0ZGRDIwMCIvPjxwYXRoIGQ9Ik00NC40NTUgMzEuODUyYTIwLjA2NiAyMC4wNjYgMCAwIDAgNy45OTEgNy45NjIgMjAuMDY2IDIwLjA2NiAwIDAgMC03Ljk5IDcuOTYzIDIwLjA2NiAyMC4wNjYgMCAwIDAtNy45OTItNy45NjMgMjAuMDY2IDIwLjA2NiAwIDAgMCA3Ljk5MS03Ljk2MloiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNNDkuMTUzIDM3LjU3YTIwLjA1IDIwLjA1IDAgMCAxLTQuNjk4LTUuNzE4IDIwLjA2NiAyMC4wNjYgMCAwIDEtNy45OSA3Ljk2MiAyMC4wODkgMjAuMDg5IDAgMCAxIDUuODM3IDQuOGMxLjk2NC0yLjI4NSA0Ljk3My01LjM5IDYuNjk4LTcuMTE0bC4xNTMuMDdaTTIxMi4yNjcgMTEuOTQ1YTkuOTY2IDkuOTY2IDAgMCAwIDMuOTk2IDMuOTgyIDkuOTY3IDkuOTY3IDAgMCAwLTMuOTk2IDMuOTgxIDkuOTY3IDkuOTY3IDAgMCAwLTMuOTk2LTMuOTgxIDkuOTY2IDkuOTY2IDAgMCAwIDMuOTk2LTMuOTgyWiIgZmlsbD0iI0ZGRDIwMCIvPjxwYXRoIGQ9Ik0yOC40NzMgMTkuOTA2YTkuOTcgOS45NyAwIDAgMCAzLjk5NiAzLjk4MiA5Ljk3IDkuOTcgMCAwIDAtMy45OTYgMy45ODEgOS45NyA5Ljk3IDAgMCAwLTMuOTk1LTMuOTgxIDkuOTcyIDkuOTcyIDAgMCAwIDMuOTk1LTMuOTgyWiIgZmlsbD0iIzVERTJGOCIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC41KSIgZD0iTTAgMGgyNDB2MTIwSDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+";var d,M=r(964699),g=r(552322);e=r.hmd(e),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&d(e);var y,L,j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=(0,s.defineMessages)({nuxScreenTitle:{id:"oNK5EN",defaultMessage:[{type:0,value:"Asset not found"}]},nuxScreenDescription:{id:"/Qbu7G",defaultMessage:[{type:0,value:"This may be because the asset is on a custom network or is unsupported."}]},learnMoreButtonLabel:{id:"l6+7FA",defaultMessage:[{type:8,value:"learnMoreLink",children:[{type:0,value:"Learn more"}]}]},goBackButtonLabel:{id:"+63t7i",defaultMessage:[{type:0,value:"Go back"}]},nuxIllustrationAltText:{id:"JL4qco",defaultMessage:[{type:0,value:"Asset not found icon"}]}});function I(){var e=(0,a.Z)().formatMessage,t=(0,o.useCallback)((function(e){return(0,g.jsx)(c.Link,{href:M.LINK_CRYPTO_SUPPORT,target:"_blank",testID:"learn-more-link",children:e})}),[]);return(0,n.useSearchReceiveAssetNuxViewed)(),(0,g.jsxs)(i.VStack,{flexGrow:1,alignItems:"center",spacingHorizontal:5,position:"relative",children:[(0,g.jsx)(i.Box,{spacingVertical:3,children:(0,g.jsx)(u.RemoteImage,{alt:e(f.nuxIllustrationAltText),source:l,testID:"search-receive-address-nux-card"})}),(0,g.jsx)(c.TextTitle3,{as:"p",align:"center",children:e(f.nuxScreenTitle)}),(0,g.jsx)(c.TextBody,{as:"p",align:"center",color:"foregroundMuted",spacingTop:1,children:e(f.nuxScreenDescription)}),(0,g.jsx)(c.TextBody,{as:"p",align:"center",color:"primary",underline:!0,children:e(f.learnMoreButtonLabel,{learnMoreLink:t})})]})}j(I,"useIntl{{ formatMessage }}\nuseCallback{LearnMoreLink}\nuseSearchReceiveAssetNuxViewed{}",(function(){return[a.Z,n.useSearchReceiveAssetNuxViewed]})),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(f,"messages","/workspaces/apps/extension/src/screens/Receive/SearchReceiveAssetNux.tsx"),y.register(I,"SearchReceiveAssetNux","/workspaces/apps/extension/src/screens/Receive/SearchReceiveAssetNux.tsx")),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&L(e)},739573:(e,t,r)=>{r.r(t),r.d(t,{useSelectWallet:()=>L});var o,s,a,n=r(202784),i=r(149644),u=r(373881),c=r(553476),l=r(118912);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==d(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e){var t=(0,c.useRecoilValue)(l.walletsAtom),r=(0,c.useRecoilValue)(i.isSimulatingEmptyWalletAtom);return(0,n.useMemo)((function(){if(void 0!==e){var o=u.Wallet.generateIdFromMaybeEncodedString(e);if(void 0!==o){var s=t[o];return r?g(g({},s),{},{balance:0n}):s}}}),[r,e,t])}e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(L,"useRecoilValue{walletMap}\nuseRecoilValue{isSimulatingEmptyWallet}\nuseMemo{}",(function(){return[c.useRecoilValue,c.useRecoilValue]})),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(L,"useSelectWallet","/workspaces/libs/data/stores/Wallets/hooks/useSelectWallet.tsx"),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&a(e)},285881:(e,t,r)=>{t.L=void 0;const o=r(647933),s=r(739573);t.L=function(){const{walletId:e=""}=(0,o.useParams)();return(0,s.useSelectWallet)(e)}},233806:(e,t,r)=>{t.f=void 0;const o=r(202784),s=r(632810),a=r(602438),n=r(928540),i=r(49982),u="receive/searchAsset";t.f=function(e){const t=(0,s.usePrimaryReceiveWallets)(),{data:r,isInitialLoading:c,error:l}=(0,a.useQuery)([u,e.toLocaleLowerCase()],(async function(){const r=await async function(e){const{result:t}=await(0,i.getJSON)(u,{query:e});return t?.data?.filter((e=>!!e.network))??[]}(e);return r.filter((function(e){const r=(0,n.getNetworkForWacId)(e.network),o=r?.asChain()?.blockchainSymbol??e.symbol;return t.has(o)}))}),{enabled:e.length>=3,suspense:!1,staleTime:0,cacheTime:0,useErrorBoundary:!1});return(0,o.useMemo)((()=>({data:r,isLoading:c,error:l})),[r,l,c])}},43398:(e,t)=>{t.j=void 0;t.j=function(e){const t=e?.find((({width:e})=>e>40&&e<240));return t||e?.[0]}},450706:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useDedupeTransactions=void 0;const o=r(202784);t.useDedupeTransactions=function(e){return(0,o.useMemo)((()=>{const t=new Map;for(const r of e){const e=t.get(r.txHash);if(e){if(e.source!==r.source&&"V3"===e.source){t.set(r.txHash,e);continue}if(e.source!==r.source&&"V3"===r.source){t.set(r.txHash,r);continue}const o=Number(e.amount)>Number(r.amount)&&e.isSent?e:r;t.set(r.txHash,o)}else t.set(r.txHash,r)}return Array.from(t.values())}),[e])}},370158:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useFilteredTransactionsForPortfolioWallets=void 0;const o=r(202784),s=r(149644),a=r(487236),n=r(553476),i=r(915577);t.useFilteredTransactionsForPortfolioWallets=function(){const e=(0,a.useIsTestnetsEnabled)(),t=(0,n.useRecoilValue)(i.userFilteredTransactionsAtom),r=(0,n.useRecoilValue)(s.isSimulatingEmptyWalletAtom),u=(0,o.useMemo)((()=>e?t:t.filter((e=>!e.network.isTestnet))),[e,t]);return(0,o.useMemo)((()=>r?[]:u),[r,u])}},695578:(e,t,r)=>{t.i=void 0;const o=r(202784),s=r(450706),a=r(370158),n=r(118912),i=r(553476);t.i=function(e){const{maxResultsCount:t=30,txType:r}=e,u=(0,a.useFilteredTransactionsForPortfolioWallets)(),c=(0,o.useMemo)((()=>r?u.filter((e=>e.type===r)):u),[u,r]),l=(0,s.useDedupeTransactions)(c.slice(0,t)),d=(0,i.useRecoilValue)(n.walletsAtom);return(0,o.useMemo)((function(){const e=l.reduce((function(e,t){const r=d[t.walletId];return r&&!e[t.walletId]&&(e[t.walletId]=r),e}),{});return Object.values(e)}),[l,d])}}}]);
//# sourceMappingURL=1418.js.map