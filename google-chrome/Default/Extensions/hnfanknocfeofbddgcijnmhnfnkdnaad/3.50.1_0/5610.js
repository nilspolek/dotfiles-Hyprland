"use strict";(self.webpackChunkcb_wallet_extension=self.webpackChunkcb_wallet_extension||[]).push([[5610],{662554:(e,a,t)=>{t.d(a,{i:()=>H});var s,n=t(202784),o=t(239398),i=t(783112),r=t(107267),l=t(80724),d=t(593657),c=t(903172),u=t(301940),p=t(256022),f=t(43654),g=t(432204),h=t(38438),x=t(91427),T=t(230438),m=t(866799),w=t(873225),y=t(476689),b=t(960723),k=t(586421),M=t(48972),v=t(76470),C=t(661641),D=t(728209),S=t(552322);e=t.hmd(e),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e);var E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},j={bottomOffset:50,hideCloseButton:!0},L=(0,o.defineMessages)({copyToolTip:{id:"iEsPwy",defaultMessage:[{type:0,value:"Copy address"}]},dateLabel:{id:"fHjkcn",defaultMessage:[{type:0,value:"Date"}]},toLabel:{id:"vR4DVj",defaultMessage:[{type:0,value:"To"}]},fromLabel:{id:"nJDri3",defaultMessage:[{type:0,value:"From"}]},statusLabel:{id:"39Bj2T",defaultMessage:[{type:0,value:"Status"}]},valueLabel:{id:"YNXbAG",defaultMessage:[{type:0,value:"Value"}]},sponsoredTx:{id:"GVBhAg",defaultMessage:[{type:0,value:"Paid by Coinbase Wallet"}]},networkDisplayName:{id:"rufuBw",defaultMessage:[{type:0,value:"Network"}]},txHashDisplayName:{id:"xz698j",defaultMessage:[{type:0,value:"Transaction hash"}]},networkFeeLabel:{id:"QgMJss",defaultMessage:[{type:0,value:"Network fee"}]},totalLabel:{id:"+lHe0i",defaultMessage:[{type:0,value:"Total cost"}]},totalReceivedLabel:{id:"DwRw8S",defaultMessage:[{type:0,value:"Total received"}]},txExplorerButtonLabel:{id:"K+/lTl",defaultMessage:[{type:0,value:"View on block explorer"}]},sponsoredTooltip:{id:"xjfJW5",defaultMessage:[{type:0,value:"This network fee was paid by Coinbase."}]},speedupButtonLabel:{id:"vYzqU8",defaultMessage:[{type:0,value:"Speed up"}]},nonceLabel:{id:"TSnvPq",defaultMessage:[{type:0,value:"Transaction nonce"}]},hashLabel:{id:"vk+4my",defaultMessage:[{type:0,value:"Transaction hash:"}]},tokenLabel:{id:"bjC3Od",defaultMessage:[{type:0,value:"Token name"}]},cancelButtonLabel:{id:"PdBE4f",defaultMessage:[{type:0,value:"Cancel"}]},etherscanButtonLabel:{id:"JXgAVP",defaultMessage:[{type:0,value:"Block explorer"}]},receivedLabel:{id:"KZuUH3",defaultMessage:[{type:0,value:"Received"}]},coinbaseFeeLabel:{id:"zn4N7D",defaultMessage:[{type:0,value:"Coinbase fee"}]},freeLabel:{id:"Hdiqk0",defaultMessage:[{type:0,value:"Free"}]},thirdPartyDexFeeLabel:{id:"W8J9hz",defaultMessage:[{type:0,value:"3rd party DEX fee"}]},coinbaseFeeFreeTooltip:{id:"26mcey",defaultMessage:[{type:0,value:"Coinbase does not charge a fee for swaps."}]},transactionHashCopied:{id:"Aa52Ml",defaultMessage:[{type:0,value:"Transaction hash copied"}]},fromAddressCopied:{id:"TAnvuH",defaultMessage:[{type:0,value:"From address copied"}]},toAddressCopied:{id:"I1vmCv",defaultMessage:[{type:0,value:"To address copied"}]}});function H(e){var a,t,s=e.transaction,o=(0,i.Z)().formatMessage,l=(0,r.useHistory)(),E=(0,n.useMemo)((function(){var e;return null===(e=s.network)||void 0===e||null===(e=e.asChain())||void 0===e?void 0:e.displayName}),[s]),H=(0,r.useParams)(),B=H.walletId,F=H.id,V=(0,g.A)(),R=(0,T.useActiveWalletGroupId)(),O=(0,f.xX)(R,s),G=O.fiatValue,_=O.dateAndTime,U=O.networkFee,z=O.valueDisplay,X=O.blockExplorerUrl,$=O.totalFiat,q=O.cryptoValueDisplay,Y=O.is1559Enabled,Q=O.fromDisplay,W=O.toDisplay,Z=O.status,K=s.isSponsored(),J=(0,h.useIsSwapTransaction)(s),ee=J&&s.state===x.TxState.PENDING,ae=(0,n.useMemo)((function(){return K?"".concat(z):J?s.state===x.TxState.PENDING?Z:"".concat(z):null!=$?$:q}),[K,J,$,q,z,s.state,Z]),te=(0,u.useNetworkFeeTooltipMessages)(null===(a=s.network.asChain())||void 0===a?void 0:a.chainId).networkFeeTooltip,se=(0,n.useMemo)((function(){return(0,r.generatePath)(D.RoutesEnum.TX_SPEEDUP_CANCEL,{walletId:B,id:F,updateType:"speedup"})}),[F,B]),ne=(0,n.useMemo)((function(){return(0,r.generatePath)(D.RoutesEnum.TX_SPEEDUP_CANCEL,{walletId:B,id:F,updateType:"cancel"})}),[F,B]),oe=(0,n.useCallback)((function(){(0,d.logBlockExplorerClicked)(s.blockchain.rawValue,s.network.rawValue),chrome.tabs.create({url:X})}),[X,s.blockchain.rawValue,s.network.rawValue]),ie=(0,y.useToast)(),re=(0,n.useRef)(null),le=(0,n.useCallback)((function(){ie.clearQueue(),re.current=setTimeout((function(){var e;navigator.clipboard.writeText(null!==(e=s.txHash)&&void 0!==e?e:""),ie.show(o(L.transactionHashCopied),j)}))}),[o,ie,s.txHash]),de=(0,n.useCallback)((function(){V(s)||(ie.clearQueue(),re.current=setTimeout((function(){var e;navigator.clipboard.writeText(null!==(e=s.fromAddress)&&void 0!==e?e:""),ie.show(o(L.fromAddressCopied),j)})))}),[o,V,ie,s]),ce=(0,n.useCallback)((function(){ie.clearQueue(),re.current=setTimeout((function(){var e;navigator.clipboard.writeText(null!==(e=s.toAddress)&&void 0!==e?e:""),ie.show(o(L.toAddressCopied),j)}))}),[o,ie,s.toAddress]),ue=(0,n.useCallback)((function(){l.push(se)}),[se,l]),pe=(0,n.useCallback)((function(){l.push(ne)}),[ne,l]),fe=(0,p.useIsSpeedUpCancelEnabled)()({is1559Enabled:Y,transaction:s}),ge=(0,n.useMemo)((function(){return Boolean(G)&&!s.network.isTestnet}),[G,s.network.isTestnet]),he=(0,n.useMemo)((function(){return ee?(0,S.jsx)(C.TextDisplay2,{as:"h2",spacingTop:3,spacingBottom:1,children:Z}):ge?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(C.TextLabel2,{spacingTop:2,testID:"txDetail_crypto_display",as:"p",color:"foregroundMuted",children:q}),(0,S.jsx)(C.TextTitle1,{testID:"txDetail_fiat_display",as:"h2",children:G})]}):(0,S.jsx)(C.TextDisplay2,{testID:"txDetail_crypto_display",as:"h2",spacingTop:3,spacingBottom:1,children:q})}),[ee,ge,q,G,Z]),xe=(0,n.useMemo)((function(){return J?(0,S.jsxs)(M.HStack,{spacingVertical:1,width:"100%",justifyContent:"space-between",children:[(0,S.jsxs)(M.HStack,{children:[(0,S.jsx)(C.TextBody,{as:"p",children:o(L.coinbaseFeeLabel)}),(0,S.jsx)("div",{className:I,children:(0,S.jsx)(v.Tooltip,{content:o(L.coinbaseFeeFreeTooltip),placement:"bottom",children:(0,S.jsx)(k.Icon,{name:"info",size:"xs",color:"foregroundMuted"})})})]}),(0,S.jsx)(C.TextBody,{as:"p",color:"foregroundMuted",align:"end",children:o(L.freeLabel)})]}):null}),[o,J]),Te=(0,n.useMemo)((function(){return s.txHash?(0,m.getTruncatedAddress)(s.txHash):""}),[s.txHash]);return(0,S.jsxs)(M.VStack,{spacingHorizontal:3,children:[(0,S.jsx)(M.VStack,{alignItems:"center",children:he}),(0,S.jsx)(M.Divider,{direction:"horizontal",spacingTop:2}),(0,S.jsxs)(M.VStack,{children:[J?(0,S.jsxs)(M.HStack,{spacingTop:2,spacingBottom:1,width:"100%",justifyContent:"space-between",children:[(0,S.jsx)(C.TextBody,{as:"p",children:o(L.receivedLabel)}),(0,S.jsx)(C.TextBody,{as:"p",color:"foregroundMuted",align:"end",children:ee?Z:z})]}):null,(0,S.jsxs)(M.HStack,{onClick:de,spacingTop:J?1:2,spacingBottom:1,width:"100%",justifyContent:"space-between",children:[(0,S.jsx)(C.TextBody,{as:"p",children:o(L.fromLabel)}),(0,S.jsx)(C.TextBody,{as:"p",color:"foregroundMuted",align:"end",children:Q})]}),(0,S.jsxs)(M.HStack,{spacingVertical:1,width:"100%",justifyContent:"space-between",onClick:ce,children:[(0,S.jsx)(C.TextBody,{as:"p",children:o(L.toLabel)}),(0,S.jsx)(C.TextBody,{as:"p",color:"foregroundMuted",align:"end",children:W})]}),(0,S.jsxs)(M.HStack,{spacingVertical:1,width:"100%",justifyContent:"space-between",children:[(0,S.jsx)(C.TextBody,{as:"p",children:o(L.dateLabel)}),(0,S.jsx)(C.TextBody,{as:"p",color:"foregroundMuted",align:"end",children:_})]}),E&&(0,S.jsxs)(M.HStack,{spacingVertical:1,width:"100%",justifyContent:"space-between",children:[(0,S.jsx)(C.TextBody,{as:"p",children:o(L.networkDisplayName)}),(0,S.jsx)(C.TextBody,{as:"p",color:"foregroundMuted",align:"end",children:E})]}),s.network.isTestnet&&(0,S.jsxs)(M.HStack,{spacingVertical:1,width:"100%",justifyContent:"space-between",children:[(0,S.jsx)(C.TextBody,{as:"p",children:o(L.tokenLabel)}),(0,S.jsx)(C.TextBody,{as:"p",color:"foregroundMuted",align:"end",children:s.tokenName})]}),s.txHash&&!K&&![x.TxState.DROPPED,x.TxState.REPLACED].includes(s.state)&&(0,S.jsxs)(M.HStack,{spacingVertical:1,width:"100%",justifyContent:"space-between",onClick:le,children:[(0,S.jsx)(C.TextBody,{as:"p",children:o(L.txHashDisplayName)}),(0,S.jsx)(C.TextBody,{as:"p",color:"foregroundMuted",align:"end",children:Te})]}),(0,S.jsxs)(M.HStack,{spacingVertical:1,width:"100%",justifyContent:"space-between",children:[(0,S.jsx)(C.TextBody,{as:"p",children:o(L.statusLabel)}),(0,S.jsx)(C.TextBody,{as:"p",color:"foregroundMuted",align:"end",children:Z})]}),xe,s.isNFTTransfer()||J?null:(0,S.jsxs)(M.HStack,{spacingVertical:1,width:"100%",justifyContent:"space-between",children:[(0,S.jsx)(C.TextBody,{as:"p",children:o(L.valueLabel)}),(0,S.jsx)(C.TextBody,{as:"p",color:"foregroundMuted",align:"end",children:z})]}),(0,S.jsxs)(M.HStack,{spacingVertical:1,width:"100%",justifyContent:"space-between",alignItems:"flex-start",children:[(0,S.jsxs)(M.HStack,{children:[(0,S.jsx)(C.TextBody,{as:"p",children:o(L.networkFeeLabel)}),(0,S.jsx)("div",{className:I,children:(0,S.jsx)(v.Tooltip,{content:o(K?L.sponsoredTooltip:te),placement:"bottom",children:(0,S.jsx)(k.Icon,{name:"info",size:"xs",color:"foregroundMuted"})})})]}),(0,S.jsxs)(M.VStack,{alignItems:"flex-end",children:[(0,S.jsx)(C.TextBody,{as:"p",testID:"tx-detail-network-fee",dangerouslySetClassName:K&&!J?N:"",color:"foregroundMuted",align:"end",children:ee?Z:U}),K&&!J&&(0,S.jsx)(C.TextLabel2,{as:"p",color:"foregroundMuted",dangerouslySetClassName:A,children:o(L.sponsoredTx)})]})]}),s.network.isTestnet&&(0,S.jsx)(M.VStack,{gap:2,spacingTop:1,spacingBottom:3,children:(0,S.jsxs)(S.Fragment,{children:[s.nonce&&(0,S.jsxs)(M.HStack,{width:"100%",justifyContent:"space-between",children:[(0,S.jsx)(C.TextBody,{as:"p",children:o(L.nonceLabel)}),(0,S.jsx)(C.TextBody,{as:"span",color:"foregroundMuted",children:(0,c.bigIntStringFromBigInt)(s.nonce)})]}),(0,S.jsxs)(M.VStack,{width:"100%",gap:1,spacingTop:2,children:[(0,S.jsx)(C.TextBody,{as:"p",children:o(L.hashLabel)}),(0,S.jsx)(P,{defaultValue:s.txHash,readOnly:!0})]})]})}),s.isNFTTransfer()||s.network.isTestnet||J?null:(0,S.jsxs)(M.HStack,{spacingTop:1,spacingBottom:5,width:"100%",justifyContent:"space-between",children:[(0,S.jsx)(C.TextBody,{as:"p",children:s.isSent?o(L.totalLabel):o(L.totalReceivedLabel)}),(0,S.jsx)(C.TextBody,{as:"p",color:"foregroundMuted",align:"end",children:ae})]}),(0,S.jsx)(M.VStack,{position:"sticky",width:"100%",spacingHorizontal:3,spacingVertical:1,justifyContent:"center",bottom:0,background:"background",children:fe?(0,S.jsxs)(M.HStack,{alignSelf:"center",gap:3,children:[(0,S.jsx)(w.Q,{variant:"secondary",iconName:"lightningBolt",handleOnPress:ue,testID:"speedupButton",label:o(L.speedupButtonLabel),labelColor:"foregroundMuted"}),"cancel"!==(null==s||null===(t=s.pendingEthTxData)||void 0===t?void 0:t.txSubmissionType)?(0,S.jsx)(w.Q,{variant:"secondary",iconName:"close",handleOnPress:pe,testID:"cancelButton",label:o(L.cancelButtonLabel),labelColor:"foregroundMuted"}):null,(0,S.jsx)(w.Q,{variant:"secondary",iconName:"externalLink",handleOnPress:oe,testID:"view-on-etherscan-button",label:o(L.etherscanButtonLabel),labelColor:"foregroundMuted"})]}):X&&(0,S.jsx)(M.HStack,{alignSelf:"center",spacingBottom:2,children:(0,S.jsx)(b.Button,{variant:"secondary",onPress:oe,testID:"view-on-etherscan-button",children:o(L.txExplorerButtonLabel)})})})]})]})}E(H,"useIntl{{\n    formatMessage\n  }}\nuseHistory{history}\nuseMemo{networkName}\nuseParams{{\n    walletId,\n    id\n  }}\nuseIsMaliciousZeroValueTransfer{getIsMaliciousZeroValueTransfer}\nuseActiveWalletGroupId{activeWalletGroupId}\nuseFormattedTransaction{{\n    fiatValue,\n    dateAndTime,\n    networkFee,\n    valueDisplay,\n    blockExplorerUrl,\n    totalFiat,\n    cryptoValueDisplay,\n    is1559Enabled,\n    fromDisplay,\n    toDisplay,\n    status\n  }}\nuseIsSwapTransaction{isSwapTx}\nuseMemo{totalRawValue}\nuseNetworkFeeTooltipMessages{{\n    networkFeeTooltip\n  }}\nuseMemo{speedUpURL}\nuseMemo{cancelURL}\nuseCallback{handleEtherscanClick}\nuseToast{toast}\nuseRef{timer}\nuseCallback{handleTxHashClick}\nuseCallback{handleFromClick}\nuseCallback{handleToClick}\nuseCallback{handleSpeedUp}\nuseCallback{handleCancel}\nuseIsSpeedUpCancelEnabled{getIsSpeedUpCancelEnabled}\nuseMemo{dominantCurrencyIsFiat}\nuseMemo{header}\nuseMemo{coninbaseFeeRow}\nuseMemo{formattedTxHash}",(function(){return[i.Z,r.useHistory,r.useParams,g.A,T.useActiveWalletGroupId,f.xX,h.useIsSwapTransaction,u.useNetworkFeeTooltipMessages,y.useToast,p.useIsSpeedUpCancelEnabled]}));var B,F,A="i147wxg0",N="s46g9zo",I="i1gnk9ht",P=(0,l.z)("textarea")({name:"StyledTextArea",class:"s1acmhe",propsAsIs:!1});t(98752),(B="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(B.register(j,"toastOptions","/workspaces/apps/extension/src/screens/TransactionHistory/TransactionDetail.tsx"),B.register(L,"messages","/workspaces/apps/extension/src/screens/TransactionHistory/TransactionDetail.tsx"),B.register(H,"TransactionDetail","/workspaces/apps/extension/src/screens/TransactionHistory/TransactionDetail.tsx"),B.register(A,"inlineTextBody","/workspaces/apps/extension/src/screens/TransactionHistory/TransactionDetail.tsx"),B.register(N,"sponsoredTxStrikethroughText","/workspaces/apps/extension/src/screens/TransactionHistory/TransactionDetail.tsx"),B.register(I,"infoIcon","/workspaces/apps/extension/src/screens/TransactionHistory/TransactionDetail.tsx"),B.register(P,"StyledTextArea","/workspaces/apps/extension/src/screens/TransactionHistory/TransactionDetail.tsx")),(F="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&F(e)},561808:(e,a,t)=>{t.r(a),t.d(a,{TransactionDetailContainer:()=>g});var s,n,o,i=t(107267),r=t(877410),l=t(48931),d=t(352871),c=t(790424),u=t(48972),p=t(662554),f=t(552322);function g(){var e=(0,i.useHistory)().goBack,a=(0,i.useParams)().id,t=(0,l.k)(a),s=(0,c.q7)().isSecondarySticky,n=(0,r.z)(t);return(0,f.jsx)(c.lL,{header:(0,f.jsx)(d.l2,{variant:"secondary",title:n,handleBack:e,isSecondarySticky:s}),children:t?(0,f.jsx)(p.i,{transaction:t}):(0,f.jsxs)(u.VStack,{spacingHorizontal:3,children:[(0,f.jsx)(u.Fallback,{spacingVertical:2,width:180,height:60,alignSelf:"center"}),(0,f.jsx)(u.Fallback,{spacingBottom:2,alignSelf:"center",width:120,height:20}),(0,f.jsx)(u.Fallback,{spacingTop:2,width:60,height:20}),(0,f.jsx)(u.Fallback,{spacingVertical:1,width:"100%",height:20}),(0,f.jsx)(u.Fallback,{spacingBottom:1,width:"100%",height:20}),(0,f.jsx)(u.Fallback,{spacingTop:2,width:60,height:20}),(0,f.jsx)(u.Fallback,{spacingVertical:1,width:"100%",height:20}),(0,f.jsx)(u.Fallback,{spacingTop:2,width:60,height:20}),(0,f.jsx)(u.Fallback,{spacingVertical:1,width:"100%",height:20}),(0,f.jsx)(u.Fallback,{spacingTop:2,width:60,height:20}),(0,f.jsx)(u.Fallback,{spacingVertical:1,width:"100%",height:20})]})})}e=t.hmd(e),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(g,"useHistory{{ goBack }}\nuseParams{{ id }}\nuseTransaction{transaction}\nuseScreenContext{{ isSecondarySticky }}\nuseTransactionTitle{pageTitle}",(function(){return[i.useHistory,i.useParams,l.k,c.q7,r.z]})),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(g,"TransactionDetailContainer","/workspaces/apps/extension/src/screens/TransactionHistory/TransactionDetailContainer.tsx"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)},98752:(e,a,t)=>{t.r(a)},903172:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.bigIntStringFromBigInt=void 0,a.bigIntStringFromBigInt=function(e){return e.toString(10)}},877410:(e,a,t)=>{a.z=void 0;const s=t(202784),n=t(239398),o=t(38438),i=t(91427),r=(0,n.defineMessages)({pendingSwap:{id:"Bwt7lo",defaultMessage:"Pending swap"},pendingSend:{id:"Glo6PQ",defaultMessage:"Pending send"},cancelSend:{id:"ssr3M6",defaultMessage:"Cancel send"},sendTxnHeader:{id:"ZMiI4i",defaultMessage:"Sent {walletDisplayName}"},receiveTxnHeader:{id:"xrEQLe",defaultMessage:"Received {walletDisplayName}"},droppedTxnHeader:{id:"roi7dP",defaultMessage:"Dropped transaction"},replaceTxnHeader:{id:"rPev8c",defaultMessage:"Replaced transaction"},droppedByRelayerTxnHeader:{id:"AuYGul",defaultMessage:"Dropped operation"},relayTxnHeader:{id:"vBjafL",defaultMessage:"Relayed Transaction"},swapTxnHeader:{id:"0D6opd",defaultMessage:"Swap"}});a.z=function(e){const{formatMessage:a}=(0,n.useIntl)(),t=(0,o.useIsSwapTransaction)(e);return(0,s.useMemo)((()=>{if(!e)return"";if(e.state===i.TxState.PENDING)return"cancel"===e.pendingEthTxData?.txSubmissionType?a(r.cancelSend):a(t?r.pendingSwap:r.pendingSend);const s=a(r.sendTxnHeader,{walletDisplayName:e.tokenName}),n=a(r.receiveTxnHeader,{walletDisplayName:e.tokenName});return e.state===i.TxState.REPLACED?a(r.replaceTxnHeader):e.state===i.TxState.DROPPED?a(r.droppedTxnHeader):e.state===i.TxState.DROPPED_BY_RELAYER?a(r.droppedByRelayerTxnHeader):e.isRelayed()?a(r.relayTxnHeader):t?a(r.swapTxnHeader):e.isSent?s:n}),[e,a,t])}},301940:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.useNetworkFeeTooltipMessages=void 0;const s=t(202784),n=t(239398),o=t(698859),i=(0,n.defineMessages)({networkFeeTooltip:{id:"MnkMuK",defaultMessage:"Applies to all transactions. Not paid to Coinbase."},networkAndApprovalFeeTooltip:{id:"pmYfiH",defaultMessage:"For approval & conversion. Applies to all transactions. Not paid to Coinbase."},web3ActivationBuyNFTNetworkFeeDescription:{id:"rTr16h",defaultMessage:"This is for network fees. Not paid to Coinbase."},web3ActivationSwapNetworkFeeDescription:{id:"CVtApE",defaultMessage:"Each step will require a network fee. This fee is not paid to Coinbase. {learnMore}"},nftCollectionNetworkFeeTooltip:{id:"+CfSUd",defaultMessage:"This sale requires a network fee to process as well as a one-time fee to approve this NFT collection for sale on {platform}. Not paid to Coinbase."},tokenApprovalNuxNetworkFeeDescription:{id:"9Zulof",defaultMessage:"This fee goes to the network\u2019s validators, not Coinbase."},generateTransactionDefaultZeroBalanceTrayText2:{id:"m1qUXQ",defaultMessage:"The network fee goes to network participants who process transactions, not Coinbase."},generateTransactionDefaultNotEnoughBalanceTrayText:{id:"HK8qU0",defaultMessage:"The network fee (also called a gas fee) goes to network participants who process transactions, not Coinbase. It may be less than our estimate."},swapNetworkFeeEstimateTooltip:{id:"VD9qh5",defaultMessage:"The network fee (also called a gas fee) goes to network participants who process transactions, not Coinbase. It may be less than our estimate."},swapGaslessNetworkFeeEstimateTooltip:{id:"j7SlmX",defaultMessage:"The network fee (also called a gas fee) goes to network participants, not Coinbase. It's charged in {gasToken}. If you don't have {gasToken}, you can deduct the fee from the swap, which is more convenient but also more expensive."}}),r=(0,n.defineMessages)({networkFeeTooltip:{id:"derWOp",defaultMessage:"Applies to all transactions."},networkAndApprovalFeeTooltip:{id:"c6U3Td",defaultMessage:"For approval & conversion. Applies to all transactions."},web3ActivationBuyNFTNetworkFeeDescription:{id:"V/Jo28",defaultMessage:"This is for network fees."},web3ActivationSwapNetworkFeeDescription:{id:"bExL4T",defaultMessage:"Each step will require a network fee. {learnMore}"},nftCollectionNetworkFeeTooltip:{id:"zvxSIW",defaultMessage:"This sale requires a network fee to process as well as a one-time fee to approve this NFT collection for sale on {platform}."},tokenApprovalNuxNetworkFeeDescription:{id:"XHNssL",defaultMessage:"This fee goes to the network\u2019s validators."},generateTransactionDefaultZeroBalanceTrayText2:{id:"ILLTay",defaultMessage:"The network fee goes to network participants who process transactions."},generateTransactionDefaultNotEnoughBalanceTrayText:{id:"diOAFn",defaultMessage:"The network fee (also called a gas fee) goes to network participants who process transactions. It may be less than our estimate."},swapNetworkFeeEstimateTooltip:{id:"g3I7IU",defaultMessage:"The network fee (also called a gas fee) goes to network participants who process transactions. It may be less than our estimate."},swapGaslessNetworkFeeEstimateTooltip:{id:"TwxfKO",defaultMessage:"The network fee (also called a gas fee) goes to network participants. It's charged in {gasToken}. If you don't have {gasToken}, you can deduct the fee from the swap, which is more convenient but also more expensive."}});a.useNetworkFeeTooltipMessages=function(e){return(0,s.useMemo)((()=>{switch(Number(e)){case o.allEthNetworkChainIds.BASE:case o.allEthNetworkChainIds.BASE_SEPOLIA:return r;default:return i}}),[e])}},43654:(e,a,t)=>{a.xX=void 0;const s=t(202784),n=t(239398),o=t(53610),i=t(101620),r=t(861050),l=t(256022),d=t(511803),c=t(266016),u=t(1886),p=t(866799),f=t(178012),g=t(91427),h=t(603758),x=t(425954),T=t(43888),m=(0,n.defineMessages)({viewOnExplorerLabel:{id:"XQ+USC",defaultMessage:"View on block explorer"},viewOnExplorerLabelEtherscan:{id:"Robda7",defaultMessage:"View on block explorer"},viewOnExplorerLabelSolana:{id:"iOsIHm",defaultMessage:"View on Solana explorer"},viewOnExplorerLabelXRP:{id:"CSdVrz",defaultMessage:"View on XRP scanner"},viewOnExplorerLabelCompact:{id:"LGMe2j",defaultMessage:"Block explorer"},viewOnExplorerLabelEtherscanCompact:{id:"wd1pft",defaultMessage:"Block explorer"},viewOnExplorerLabelSolanaCompact:{id:"CEmYQP",defaultMessage:"Solana"},viewOnExplorerLabelXRPCompact:{id:"m7gH5u",defaultMessage:"XRP scanner"}});a.xX=function(e,a){const{is1559Enabled:t,walletId:r,txnDescription:x,fiatValueDisplay:w,cryptoValueDisplay:y,transactionIconType:b,totalCrypto:k}=(0,T.useFormattedTransactionListItem)(e,a),{formatMessage:M,formatDate:v}=(0,n.useIntl)(),C=(0,i.useCurrencyFormatter)(),D=(0,l.useIsSpeedUpCancelEnabled)()({is1559Enabled:t,transaction:a}),S=(0,c.usePrivacyMode)(),E=a.fromAddress??"",j=a.fromDomain??"",L=a.toAddress??"",H=a.toDomain??"",B=(0,s.useMemo)((()=>a.network?.asChain()?.displayName),[a]),F=a.network.isTestnet,A=C.formatToFiat(a.currencyCode,a.tokenDecimal,a.amount,!1,a.contractAddress,a.network),N=C.fiatValue(a.currencyCode,a.tokenDecimal,a.amount,a.contractAddress,a.network),I=(0,h.getTransactionFiatTotal)(a,C,a.isSponsored()||a.isGaslessSwap()),P=(0,s.useMemo)((()=>{const e=(0,f.truncateMiddle)(j,6,10);return`${e?`${e} \u2022 `:""}${(0,p.getTruncatedAddress)(E)}`}),[j,E]),V=(0,s.useMemo)((()=>{const e=(0,f.truncateMiddle)(H,6,10);return`${e?`${e} \u2022 `:""}${(0,p.getTruncatedAddress)(L)}`}),[H,L]),R=(0,s.useCallback)((function(e){return`${v(e,{hour:"numeric",minute:"2-digit"})} ${v(e,{year:"numeric",month:"short",day:"2-digit"})}`}),[v]),O=R(a.createdAt),G=a.confirmedAt?R(a.confirmedAt):void 0,_=a.confirmedAt?`${v(a.confirmedAt,{hour:"2-digit",minute:"2-digit"})} \u2022 ${v(a.confirmedAt,{year:"numeric",month:"short",day:"2-digit"})}`:`Submitted ${v(a.createdAt,{hour:"2-digit",minute:"2-digit"})}`,U=(0,s.useMemo)((()=>a.state===g.TxState.PENDING&&D&&(!!a.pendingEthTxData||!!a.pendingUTXOTxData)&&!a.isSponsored()&&!a.isGaslessSwap()),[D,a]),z=(0,s.useMemo)((()=>{if(S)return i.DEFAULT_PRIVACY_MODE_ELEMENT;const e=C.formatToCrypto({currencyCode:a.feeCurrencyCode,decimals:a.feeCurrencyDecimal,value:a.fee,includeCode:!0}),t=C.formatToFiatFeeRange(a.feeCurrencyCode,a.feeCurrencyDecimal,a.fee,!1,a.confirmedAt?void 0:a.pendingEthTxData?.lowerBoundValue,a.network);return t&&!F?e?`${t} \u2022 ${e}`:t:e}),[S,C,a.feeCurrencyCode,a.feeCurrencyDecimal,a.fee,a.confirmedAt,a.pendingEthTxData?.lowerBoundValue,a.network,F]),X=(0,s.useMemo)((()=>S?i.DEFAULT_PRIVACY_MODE_ELEMENT:A&&!F?`${A} \u2022 ${y}`:y),[y,A,S,F]),$=!(a.state===g.TxState.PENDING&&a.isSponsored()),q=a.txHash&&![g.TxState.DROPPED,g.TxState.DROPPED_BY_RELAYER].includes(a.state)&&$?a.blockchain.blockExplorerUrl(a.txHash,a.network):"",Y=(0,s.useMemo)((()=>{const e=q?new URL(q):void 0;return e?.hostname.toLowerCase().endsWith("etherscan.io")}),[q]),Q=(0,s.useMemo)((()=>Y?M(m.viewOnExplorerLabelEtherscan):a.blockchain.rawValue===o.SOLANA_SYMBOL?M(m.viewOnExplorerLabelSolana):M(m.viewOnExplorerLabel)),[M,a.blockchain.rawValue,Y]),W=(0,s.useMemo)((()=>Y?M(m.viewOnExplorerLabelEtherscanCompact):a.blockchain.rawValue===o.SOLANA_SYMBOL?M(m.viewOnExplorerLabelSolanaCompact):M(m.viewOnExplorerLabelCompact)),[M,a.blockchain.rawValue,Y]),Z=(0,s.useMemo)((()=>{switch(a.state){case g.TxState.PENDING:return a.isRelayed()?M(d.messages.relayed):"cancel"===a.pendingEthTxData?.txSubmissionType?M(d.messages.cancel):M(d.messages.pending);case g.TxState.FAILED:return M(d.messages.failed);case g.TxState.CONFIRMED:return M(d.messages.completed);case g.TxState.DROPPED:return M(d.messages.dropped);case g.TxState.REPLACED:return M(d.messages.replaced);case g.TxState.DROPPED_BY_RELAYER:return M(d.messages.droppedByRelayer);default:return(0,u.exhaustiveGuard)(a.state)}}),[a,M]);return{fiatValue:A,unformattedFiatValue:N,networkFee:z,networkName:B,fromDisplay:P,toDisplay:V,dateAndTime:_,submittedDate:O,completedOnDate:G,blockExplorerUrl:q,blockExplorerTitle:Q,blockExplorerCompactTitle:W,totalFiat:I,totalCrypto:k,walletId:r,is1559Enabled:t,valueDisplay:X,txnDescription:x,fiatValueDisplay:w,cryptoValueDisplay:y,transactionIconType:b,showPendingActions:U,status:Z}}},432204:(e,a,t)=>{a.A=void 0;const s=t(202784),n=t(587952),o=t(446101),i=t(839668);a.A=function(){return(0,s.useCallback)((function(e){const a=(e.isSent&&i.Blockchain.isEqual(e.blockchain,o.EthereumBlockchain)&&e.transfers?.some((e=>0n===e.amount&&e.contractAddress)))??!1;return a&&(0,n.triggerHadMaliciousZeroValueTransfer)(),a}),[])}},48931:(e,a,t)=>{a.k=void 0;const s=t(202784),n=t(543819);a.k=function(e){const a=(0,n.useTransactions)();return(0,s.useMemo)((()=>a.find((a=>a.id===e))),[e,a])}},425954:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.useFormatMilliseconds=void 0;const s=t(202784),n=t(239398),o=(0,n.defineMessages)({second:{id:"3c6rCZ",defaultMessage:"{time} second"},seconds:{id:"A3adkw",defaultMessage:"{time} seconds"},minute:{id:"bG9nuR",defaultMessage:"{time} minute"},minutes:{id:"LPQ3uK",defaultMessage:"{time} minutes"},hour:{id:"Fn+73A",defaultMessage:"{time} hour"},hours:{id:"FACkPK",defaultMessage:"{time} hours"},day:{id:"DK8Mje",defaultMessage:"{time} day"},days:{id:"2mHvRN",defaultMessage:"{time} days"}});a.useFormatMilliseconds=function(){const{formatMessage:e}=(0,n.useIntl)();return{formatMilliseconds:(0,s.useCallback)((function(a){const t=Math.floor(a/1e3),s=Math.floor(a/6e4),n=Math.floor(a/36e5),i=Math.floor(a/864e5);return 1===t?e(o.second,{time:1}):t<60?e(o.seconds,{time:t}):1===s?e(o.minute,{time:1}):s<60?e(o.minutes,{time:s}):1===n?e(o.hour,{time:1}):n<24?e(o.hours,{time:n}):1===i?e(o.day,{time:1}):e(o.days,{time:i})}),[e])}}},199059:(e,a)=>{a.Wx=a.nT=a.Tq=void 0,BigInt("175000000000"),a.Tq=(new Date).getTime()-864e5,a.nT=(new Date).getTime()+864e5,a.Wx=5},1886:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.exhaustiveGuard=void 0,a.exhaustiveGuard=function(e){throw new Error(`ERROR! Reached forbidden guard function with unexpected value: ${JSON.stringify(e)}`)}}}]);
//# sourceMappingURL=5610.js.map