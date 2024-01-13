"use strict";(self.webpackChunkcb_wallet_extension=self.webpackChunkcb_wallet_extension||[]).push([[2821],{267757:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Table=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(202784)),a=r(704573),l=r(304669),o=r(720067),i=r(377888);const c=["children","variant","bordered","cellSpacing","testID","tableLayout","compact","maxHeight","height","accessibilityLabelledBy","accessibilityLabel"];function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}const d=(0,n.memo)((e=>{let t=e.children,r=e.variant,u=void 0===r?"default":r,d=e.bordered,f=e.cellSpacing,p=e.testID,b=e.tableLayout,y=e.compact,v=e.maxHeight,g=e.height,O=e.accessibilityLabelledBy,h=e.accessibilityLabel,m=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,c);const j=(0,o.useTableStyles)({variant:u,bordered:d}),C=(0,n.useMemo)((()=>({variant:u,cellSpacing:f,compact:y})),[u,f,y]),w="fixed"===b,S=(0,a.cx)(i.table,w&&i.tableFixed),k=(0,n.useMemo)((()=>({height:g,maxHeight:v})),[g,v]);return n.default.createElement(l.TableContext.Provider,{value:C},n.default.createElement("div",{className:j,style:k},n.default.createElement("table",s({className:S,"aria-labelledby":O,"aria-label":h,"data-testid":p},m,{tabIndex:0}),t)))}));t.Table=d,d.displayName="Table"},731067:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TableBody=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(202784)),a=r(932924);const l=["children","testID"];function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const c=(0,n.memo)((e=>{let t=e.children,r=e.testID,o=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,l);return n.default.createElement(a.TableSection,i({as:"tbody",testID:r},o),t)}));t.TableBody=c,c.displayName="TableBody"},413071:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TableCaption=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(202784)),a=r(889036),l=r(288766),o=r(48972),i=r(811321),c=r(576776),u=r(661641),s=r(704573),d=r(1442);const f=["children","as","align","color","backgroundColor","outerSpacing","innerSpacing","responsiveConfig","testID"];function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}const y=(0,n.memo)((e=>{let t=e.children,r=e.as,p=void 0===r?"span":r,y=e.align,v=void 0===y?"start":y,g=e.color,O=e.backgroundColor,h=e.outerSpacing,m=e.innerSpacing,j=e.responsiveConfig,C=e.testID,w=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,f);const S=(0,d.useTableCellSpacing)({outer:h,inner:m,skipAsValidation:!0}),k=S.outer,M=S.inner,P=(0,a.useCellSpacing)({outerSpacing:k,innerSpacing:M}),T=P.outer,_=P.inner,x=(0,l.useResponsiveCellSpacingStyles)(j),W=x.responsiveInnerSpacing,D=x.responsiveOuterSpacing,E=(0,n.useMemo)((()=>({color:g&&c.palette[g],backgroundColor:O&&c.palette[O]})),[O,g]);return n.default.createElement("caption",b({style:E,"data-testid":C},w),n.default.createElement(o.Box,b({},T,{dangerouslySetClassName:(0,s.cx)(D,j&&i.responsiveClassName)}),n.default.createElement(o.Box,b({flexDirection:"column",alignContent:"stretch",flexGrow:1},_,{dangerouslySetClassName:(0,s.cx)(W,j&&i.responsiveClassName)}),"string"==typeof t?n.default.createElement(u.TextTitle3,{as:p,align:v,color:"currentColor"},t):t)))}));t.TableCaption=y,y.displayName="TableCaption"},659672:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TableCell=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(202784)),a=r(964119),l=r(765605),o=r(48972),i=r(661641),c=r(704573),u=r(1442),s=r(678130);const d=["alignItems","children","colSpan","color","direction","end","justifyContent","onPress","start","testID","overflow","title","titleColor","subtitle","subtitleColor","dangerouslySetHtmlWidth","width","innerSpacing","outerSpacing","responsiveConfig","as"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}const b=(0,n.memo)((e=>{let t=e.alignItems,r=e.children,f=e.colSpan,b=void 0===f?1:f,y=e.color,v=void 0===y?"currentColor":y,g=e.direction,O=void 0===g?"vertical":g,h=e.end,m=e.justifyContent,j=e.onPress,C=e.start,w=e.testID,S=e.overflow,k=e.title,M=e.titleColor,P=e.subtitle,T=e.subtitleColor,_=void 0===T?"foregroundMuted":T,x=e.dangerouslySetHtmlWidth,W=e.width,D=e.innerSpacing,E=e.outerSpacing,I=e.responsiveConfig,N=e.as,R=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,d);if((0,a.isDevelopment)()&&r&&(k||P))throw new Error("TableCell: Cannot use `title` or `subtitle` with `children`.");const V=S?l.truncateClassName:void 0,H="vertical"===O?"flex-start":"space-between",B="vertical"===O?"flex-start":"center",F=!!S&&!W,L=(0,u.useTableContext)().compact,z=(0,n.useMemo)((()=>!L&&k?.5:0),[L,k]),G=(0,n.useMemo)((()=>L?.5:1),[L]),A=(0,u.useTableSectionTag)(),q=(0,n.useMemo)((()=>"tbody"===A),[A]),J=(0,n.useMemo)((()=>q?"foreground":"foregroundMuted"),[q]),K=(0,n.useMemo)((()=>{var e;return null!==(e=null!=M?M:v)&&void 0!==e?e:J}),[v,J,M]),Q=(0,u.useTableCellSpacing)({outer:E,inner:D}),U=Q.outer,X=Q.inner,Y=(0,n.useMemo)((()=>null!=t?t:B),[t,B]),Z=(0,n.useMemo)((()=>null!=m?m:H),[H,m]),$=(0,u.useTableCellTag)(N),ee=(0,n.useMemo)((()=>{if("th"===$)return"thead"===A?"row":"col"}),[$,A]),te=(0,n.useMemo)((()=>"vertical"===O?o.VStack:o.HStack),[O]),re=(0,n.useMemo)((()=>"thead"===A?i.TextHeadline:i.TextBody),[A]),ne=(0,n.useMemo)((()=>({width:W,maxWidth:W})),[W]),ae=(0,c.cx)(s.tableCell,"thead"===A&&s.tableHeaderCell,"tfoot"===A&&s.tableFooterCell,F&&s.tableOverflowWidth);return n.default.createElement($,p({"data-testid":w,className:ae,colSpan:b,width:x,style:ne,scope:ee},R),n.default.createElement(l.Cell,{onPress:j,alignItems:t,media:C,accessory:h,shouldOverflow:!S,outerSpacing:U,innerSpacing:X,responsiveConfig:I,gap:G},r?n.default.createElement(re,{as:"div",noWrap:!!S,color:v,overflow:S},n.default.createElement(te,{flexGrow:1,flexShrink:1,gap:.5,justifyContent:Z,alignItems:Y},r)):n.default.createElement(te,{flexGrow:1,flexShrink:1,dangerouslySetClassName:V,justifyContent:Z,alignItems:Y},n.default.createElement(re,{noWrap:!!S,as:"div",color:K,overflow:S},k),P?n.default.createElement(i.TextLabel2,{color:_,as:"div",spacingTop:z,overflow:S},P):null)))}));t.TableCell=b,b.displayName="TableCell"},468819:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TableCellFallback=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(202784)),a=r(542848),l=r(765605),o=r(224254),i=r(48972),c=r(1442),u=r(678130);const s=["title","start","end","subtitle","testID","as","outerSpacing","innerSpacing","responsiveConfig","disableRandomRectWidth","rectWidthVariant"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}const p=(0,n.memo)((e=>{let t=e.title,r=e.start,d=e.end,p=e.subtitle,b=e.testID,y=e.as,v=e.outerSpacing,g=e.innerSpacing,O=e.responsiveConfig,h=e.disableRandomRectWidth,m=e.rectWidthVariant,j=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,s);const C=(0,c.useTableCellTag)(y),w=(0,c.useTableContext)().compact,S=(0,n.useMemo)((()=>!w&&t?1:.5),[w,t]),k=(0,n.useMemo)((()=>w?.5:1),[w]),M=(0,c.useTableCellSpacing)(),P=(0,n.useMemo)((()=>null!=v?v:null==M?void 0:M.outer),[v,null==M?void 0:M.outer]),T=(0,n.useMemo)((()=>null!=g?g:null==M?void 0:M.inner),[g,null==M?void 0:M.inner]);return n.default.createElement(C,f({"data-testid":b,className:u.tableCell},j),n.default.createElement(l.Cell,{gap:k,reduceHorizontalSpacing:!0,accessory:d&&n.default.createElement(o.MediaFallback,{type:d,testID:"table-cell-fallback-accessory"}),media:r&&n.default.createElement(o.MediaFallback,{type:r,testID:"table-cell-fallback-media"}),outerSpacing:P,innerSpacing:T,responsiveConfig:O},t&&n.default.createElement(i.Fallback,{height:24,width:45,disableRandomRectWidth:h,rectWidthVariant:(0,a.getRectWidthVariant)(m,0),percentage:!0,testID:"table-cell-fallback-title"}),p&&n.default.createElement(i.Fallback,{height:16,width:35,spacingTop:S,disableRandomRectWidth:h,rectWidthVariant:(0,a.getRectWidthVariant)(m,1),percentage:!0,testID:"table-cell-fallback-subtitle"})))}));t.TableCellFallback=p,p.displayName="TableCellFallback"},816036:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TableFooter=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(202784)),a=r(932924);const l=["children","testID"];function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const c=(0,n.memo)((e=>{let t=e.children,r=e.testID,o=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,l);return n.default.createElement(a.TableSection,i({as:"tfoot","data-testid":r},o),t)}));t.TableFooter=c,c.displayName="TableFooter"},207596:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TableHeader=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(202784)),a=r(704573),l=r(377888),o=r(932924);const i=["children","sticky","testID"];function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}const s=(0,n.memo)((e=>{let t=e.children,r=e.sticky,c=e.testID,s=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,i);return n.default.createElement(o.TableSection,u({as:"thead",dangerouslySetClassName:(0,a.cx)(l.tableHeaderStaticClassName,r&&l.tableStickyClassName),"data-testid":c},s),t)}));t.TableHeader=s,s.displayName="TableHeader"},449715:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TableRow=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(202784)),a=r(576776),l=r(704573),o=r(1442),i=r(489072),c=r(2179),u=r(659672);const s=["fullWidth","disableHoverIndicator","children","backgroundColor","color","testID","onPress","outerSpacing","innerSpacing","responsiveConfig"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}const p=(0,n.memo)((e=>{let t=e.fullWidth,r=e.disableHoverIndicator,d=e.children,p=e.backgroundColor,b=e.color,y=e.testID,v=e.onPress,g=e.outerSpacing,O=e.innerSpacing,h=e.responsiveConfig,m=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,s);const j="tbody"===(0,o.useTableSectionTag)()&&!r,C=(0,n.useRef)(null);(0,i.useTableRowListener)(C,v);const w=(0,n.useMemo)((()=>({color:b&&a.palette[b],backgroundColor:p&&a.palette[p],cursor:v?"pointer":"default"})),[p,b,v]);return n.default.createElement("tr",f({style:w,className:(0,l.cx)(c.tableRow,j&&c.tableRowHover),"data-testid":y,ref:C,onClick:v,tabIndex:v&&0},m),t?n.default.createElement(u.TableCell,{direction:"horizontal",colSpan:1e3,outerSpacing:g,innerSpacing:O,responsiveConfig:h},d):d)}));t.TableRow=p,p.displayName="TableRow"},932924:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TableSection=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(202784)),a=r(48068);const l=["as","children","testID","dangerouslySetClassName"];function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const c=(0,n.memo)((e=>{let t=e.as,r=void 0===t?"tbody":t,o=e.children,c=e.testID,u=e.dangerouslySetClassName,s=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,l);const d=(0,n.useMemo)((()=>({as:r})),[r]),f=r;return n.default.createElement(a.TableSectionContext.Provider,{value:d},n.default.createElement(f,i({"data-testid":c,className:u},s),n.Children.map(o,(e=>null!=e?e:null))))}));t.TableSection=c,c.displayName="TableSection"},304669:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TableContext=void 0;const n={variant:"default",compact:!1},a=(0,r(202784).createContext)(n);t.TableContext=a},48068:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TableSectionContext=void 0;const n=(0,r(202784).createContext)({});t.TableSectionContext=n},1442:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useTableSectionTag=t.useTableContext=t.useTableCellTag=t.useTableCellSpacing=t.defaultDenseCellSpacing=t.defaultCellSpacing=t.compactCellSpacing=void 0;var n=r(202784),a=r(33524),l=r(304669),o=r(48068);const i={thead:"th",tbody:"td",tfoot:"td",div:"div"},c={outer:{spacingHorizontal:2},inner:{spacingHorizontal:2}};t.defaultCellSpacing=c;const u={outer:{spacingVertical:.5},inner:{spacingVertical:.5}};t.defaultDenseCellSpacing=u;const s={outer:{spacingHorizontal:2,spacingVertical:0},inner:{spacingHorizontal:1,spacingVertical:1}};t.compactCellSpacing=s;const d=({skipAsValidation:e}={})=>{const t=(0,n.useContext)(o.TableSectionContext).as,r=(0,n.useContext)(l.TableContext),a=r.cellSpacing,i=r.compact;if(!e&&!t)throw new Error("This component must be wrapped in a TableHeader, TableBody or TableFooter.");return{as:t,cellSpacing:a,compact:i}};t.useTableContext=d;t.useTableCellTag=e=>{const t=d().as;return e||i[void 0===t?"div":t]};t.useTableSectionTag=()=>{const e=d().as;return void 0===e?"div":e};t.useTableCellSpacing=e=>{const t=d({skipAsValidation:null==e?void 0:e.skipAsValidation}),r=t.cellSpacing,n=t.compact,l=(0,a.useScaleConditional)({dense:u,normal:c}),o=((null==e?void 0:e.inner)||(null==e?void 0:e.outer))&&e;return r?Object.assign({},r,o):n?Object.assign({},s,o):l}},489072:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useTableRowListener=void 0;var n=r(202784);t.useTableRowListener=(e,t)=>{const r=(0,n.useCallback)((({target:r,key:n,code:a})=>{e.current!==r||"Enter"!==n&&"Space"!==a||null==t||t()}),[t,e]);(0,n.useEffect)((()=>{const t=e.current;return null==t||t.addEventListener("keydown",r),()=>{null==t||t.removeEventListener("keydown",r)}}),[e,r])}},720067:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useTableStyles=void 0;var n=r(202784),a=r(704573),l=r(377888);t.useTableStyles=({variant:e,bordered:t})=>(0,n.useMemo)((()=>{switch(e){case"graph":return(0,a.cx)(l.tableVariantBase,l.tableVariantGraph,t&&l.tableBorder);case"ruled":return(0,a.cx)(l.tableVariantBase,l.tableVariantRuled,t&&l.tableBorder);default:return(0,a.cx)(l.tableVariantBase,t&&l.tableBorder)}}),[e,t])},822821:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(267757);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}));var a=r(731067);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))}));var l=r(413071);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}}))}));var o=r(659672);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}));var i=r(468819);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}));var c=r(816036);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===c[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}}))}));var u=r(207596);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===u[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}}))}));var s=r(449715);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===s[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))}))},678130:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tableOverflowWidth=t.tableHeaderCell=t.tableFooterCell=t.tableCell=void 0,r(407629);r(576776);t.tableCell="cds-tableCell-t1jg7jzg";t.tableHeaderCell="cds-tableHeaderCell-t1c6c211";t.tableFooterCell="cds-tableFooterCell-t1ycxxfq";t.tableOverflowWidth="cds-tableOverflowWidth-t1twqdby"},2179:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tableRowHover=t.tableRow=void 0,r(949873);var n=r(250692);r(576776);(0,n.toCssVar)("gray5");t.tableRow="cds-tableRow-t45thuk";t.tableRowHover="cds-tableRowHover-t9ma3wv"},377888:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tableVariantRuled=t.tableVariantGraph=t.tableVariantBase=t.tableStickyClassName=t.tableHeaderStaticClassName=t.tableFixed=t.tableBorder=t.table=void 0,r(470791);r(772875);var n=r(576776);n.borderWidth.card,n.palette.line;t.tableHeaderStaticClassName="cds-table-header";t.table="cds-table-top40r1";t.tableFixed="cds-tableFixed-t1llkl6w";t.tableVariantBase="cds-tableVariantBase-tqygpj6";t.tableVariantGraph="cds-tableVariantGraph-t98kf8t";t.tableVariantRuled="cds-tableVariantRuled-t1wkugao";t.tableBorder="cds-tableBorder-t16449d";t.tableStickyClassName="cds-tableStickyClassName-trrmiho"},407629:(e,t,r)=>{r.r(t)},949873:(e,t,r)=>{r.r(t)},470791:(e,t,r)=>{r.r(t)}}]);
//# sourceMappingURL=2821.js.map