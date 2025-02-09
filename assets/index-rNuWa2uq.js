(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Gh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var z1={exports:{}},Hh={},q1={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nu=Symbol.for("react.element"),BP=Symbol.for("react.portal"),$P=Symbol.for("react.fragment"),zP=Symbol.for("react.strict_mode"),qP=Symbol.for("react.profiler"),KP=Symbol.for("react.provider"),WP=Symbol.for("react.context"),GP=Symbol.for("react.forward_ref"),HP=Symbol.for("react.suspense"),QP=Symbol.for("react.memo"),YP=Symbol.for("react.lazy"),B_=Symbol.iterator;function XP(t){return t===null||typeof t!="object"?null:(t=B_&&t[B_]||t["@@iterator"],typeof t=="function"?t:null)}var K1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W1=Object.assign,G1={};function Yo(t,e,n){this.props=t,this.context=e,this.refs=G1,this.updater=n||K1}Yo.prototype.isReactComponent={};Yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function H1(){}H1.prototype=Yo.prototype;function gg(t,e,n){this.props=t,this.context=e,this.refs=G1,this.updater=n||K1}var yg=gg.prototype=new H1;yg.constructor=gg;W1(yg,Yo.prototype);yg.isPureReactComponent=!0;var $_=Array.isArray,Q1=Object.prototype.hasOwnProperty,vg={current:null},Y1={key:!0,ref:!0,__self:!0,__source:!0};function X1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Q1.call(e,r)&&!Y1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:nu,type:t,key:s,ref:o,props:i,_owner:vg.current}}function JP(t,e){return{$$typeof:nu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _g(t){return typeof t=="object"&&t!==null&&t.$$typeof===nu}function ZP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var z_=/\/+/g;function pf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ZP(""+t.key):e.toString(36)}function gc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case nu:case BP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+pf(o,0):r,$_(i)?(n="",t!=null&&(n=t.replace(z_,"$&/")+"/"),gc(i,e,n,"",function(c){return c})):i!=null&&(_g(i)&&(i=JP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(z_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$_(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+pf(s,a);o+=gc(s,e,n,l,i)}else if(l=XP(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+pf(s,a++),o+=gc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ju(t,e,n){if(t==null)return t;var r=[],i=0;return gc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function eC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Lt={current:null},yc={transition:null},tC={ReactCurrentDispatcher:Lt,ReactCurrentBatchConfig:yc,ReactCurrentOwner:vg};le.Children={map:ju,forEach:function(t,e,n){ju(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ju(t,function(){e++}),e},toArray:function(t){return ju(t,function(e){return e})||[]},only:function(t){if(!_g(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=Yo;le.Fragment=$P;le.Profiler=qP;le.PureComponent=gg;le.StrictMode=zP;le.Suspense=HP;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tC;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=W1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Q1.call(e,l)&&!Y1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:nu,type:t.type,key:i,ref:s,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:WP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:KP,_context:t},t.Consumer=t};le.createElement=X1;le.createFactory=function(t){var e=X1.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:GP,render:t}};le.isValidElement=_g;le.lazy=function(t){return{$$typeof:YP,_payload:{_status:-1,_result:t},_init:eC}};le.memo=function(t,e){return{$$typeof:QP,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=yc.transition;yc.transition={};try{t()}finally{yc.transition=e}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(t,e){return Lt.current.useCallback(t,e)};le.useContext=function(t){return Lt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Lt.current.useDeferredValue(t)};le.useEffect=function(t,e){return Lt.current.useEffect(t,e)};le.useId=function(){return Lt.current.useId()};le.useImperativeHandle=function(t,e,n){return Lt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Lt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Lt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Lt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Lt.current.useReducer(t,e,n)};le.useRef=function(t){return Lt.current.useRef(t)};le.useState=function(t){return Lt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Lt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Lt.current.useTransition()};le.version="18.2.0";q1.exports=le;var V=q1.exports;const Ce=Gh(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nC=V,rC=Symbol.for("react.element"),iC=Symbol.for("react.fragment"),sC=Object.prototype.hasOwnProperty,oC=nC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aC={key:!0,ref:!0,__self:!0,__source:!0};function J1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sC.call(e,r)&&!aC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rC,type:t,key:s,ref:o,props:i,_owner:oC.current}}Hh.Fragment=iC;Hh.jsx=J1;Hh.jsxs=J1;z1.exports=Hh;var A=z1.exports,pp={},Z1={exports:{}},an={},eI={exports:{}},tI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var J=B.length;B.push(Q);e:for(;0<J;){var ue=J-1>>>1,re=B[ue];if(0<i(re,Q))B[ue]=Q,B[J]=re,J=ue;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],J=B.pop();if(J!==Q){B[0]=J;e:for(var ue=0,re=B.length,fe=re>>>1;ue<fe;){var Ze=2*(ue+1)-1,ge=B[Ze],qe=Ze+1,pt=B[qe];if(0>i(ge,J))qe<re&&0>i(pt,ge)?(B[ue]=pt,B[qe]=J,ue=qe):(B[ue]=ge,B[Ze]=J,ue=Ze);else if(qe<re&&0>i(pt,J))B[ue]=pt,B[qe]=J,ue=qe;else break e}}return Q}function i(B,Q){var J=B.sortIndex-Q.sortIndex;return J!==0?J:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,p=3,g=!1,T=!1,b=!1,P=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(B){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=B)r(c),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(c)}}function C(B){if(b=!1,E(B),!T)if(n(l)!==null)T=!0,ft(M);else{var Q=n(c);Q!==null&&ze(C,Q.startTime-B)}}function M(B,Q){T=!1,b&&(b=!1,I(v),v=-1),g=!0;var J=p;try{for(E(Q),f=n(l);f!==null&&(!(f.expirationTime>Q)||B&&!k());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,p=f.priorityLevel;var re=ue(f.expirationTime<=Q);Q=t.unstable_now(),typeof re=="function"?f.callback=re:f===n(l)&&r(l),E(Q)}else r(l);f=n(l)}if(f!==null)var fe=!0;else{var Ze=n(c);Ze!==null&&ze(C,Ze.startTime-Q),fe=!1}return fe}finally{f=null,p=J,g=!1}}var D=!1,w=null,v=-1,S=5,R=-1;function k(){return!(t.unstable_now()-R<S)}function N(){if(w!==null){var B=t.unstable_now();R=B;var Q=!0;try{Q=w(!0,B)}finally{Q?x():(D=!1,w=null)}}else D=!1}var x;if(typeof _=="function")x=function(){_(N)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,Ft=Je.port2;Je.port1.onmessage=N,x=function(){Ft.postMessage(null)}}else x=function(){P(N,0)};function ft(B){w=B,D||(D=!0,x())}function ze(B,Q){v=P(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){T||g||(T=!0,ft(M))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(p){case 1:case 2:case 3:var Q=3;break;default:Q=p}var J=p;p=Q;try{return B()}finally{p=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=p;p=B;try{return Q()}finally{p=J}},t.unstable_scheduleCallback=function(B,Q,J){var ue=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ue+J:ue):J=ue,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=J+re,B={id:h++,callback:Q,priorityLevel:B,startTime:J,expirationTime:re,sortIndex:-1},J>ue?(B.sortIndex=J,e(c,B),n(l)===null&&B===n(c)&&(b?(I(v),v=-1):b=!0,ze(C,J-ue))):(B.sortIndex=re,e(l,B),T||g||(T=!0,ft(M))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var Q=p;return function(){var J=p;p=Q;try{return B.apply(this,arguments)}finally{p=J}}}})(tI);eI.exports=tI;var lC=eI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nI=V,sn=lC;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rI=new Set,vl={};function As(t,e){xo(t,e),xo(t+"Capture",e)}function xo(t,e){for(vl[t]=e,t=0;t<e.length;t++)rI.add(e[t])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mp=Object.prototype.hasOwnProperty,uC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,q_={},K_={};function cC(t){return mp.call(K_,t)?!0:mp.call(q_,t)?!1:uC.test(t)?K_[t]=!0:(q_[t]=!0,!1)}function hC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dC(t,e,n,r){if(e===null||typeof e>"u"||hC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new Mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new Mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new Mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new Mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new Mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new Mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new Mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new Mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new Mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var wg=/[\-:]([a-z])/g;function Eg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wg,Eg);dt[e]=new Mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wg,Eg);dt[e]=new Mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wg,Eg);dt[e]=new Mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ig(t,e,n,r){var i=dt.hasOwnProperty(e)?dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dC(e,n,i,r)&&(n=null),r||i===null?cC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rr=nI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uu=Symbol.for("react.element"),Xs=Symbol.for("react.portal"),Js=Symbol.for("react.fragment"),Tg=Symbol.for("react.strict_mode"),gp=Symbol.for("react.profiler"),iI=Symbol.for("react.provider"),sI=Symbol.for("react.context"),Sg=Symbol.for("react.forward_ref"),yp=Symbol.for("react.suspense"),vp=Symbol.for("react.suspense_list"),Ag=Symbol.for("react.memo"),Br=Symbol.for("react.lazy"),oI=Symbol.for("react.offscreen"),W_=Symbol.iterator;function Ia(t){return t===null||typeof t!="object"?null:(t=W_&&t[W_]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,mf;function Ma(t){if(mf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mf=e&&e[1]||""}return`
`+mf+t}var gf=!1;function yf(t,e){if(!t||gf)return"";gf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{gf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ma(t):""}function fC(t){switch(t.tag){case 5:return Ma(t.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return t=yf(t.type,!1),t;case 11:return t=yf(t.type.render,!1),t;case 1:return t=yf(t.type,!0),t;default:return""}}function _p(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Js:return"Fragment";case Xs:return"Portal";case gp:return"Profiler";case Tg:return"StrictMode";case yp:return"Suspense";case vp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sI:return(t.displayName||"Context")+".Consumer";case iI:return(t._context.displayName||"Context")+".Provider";case Sg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ag:return e=t.displayName||null,e!==null?e:_p(t.type)||"Memo";case Br:e=t._payload,t=t._init;try{return _p(t(e))}catch{}}return null}function pC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _p(e);case 8:return e===Tg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function aI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mC(t){var e=aI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bu(t){t._valueTracker||(t._valueTracker=mC(t))}function lI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=aI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Qc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wp(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function G_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uI(t,e){e=e.checked,e!=null&&Ig(t,"checked",e,!1)}function Ep(t,e){uI(t,e);var n=mi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ip(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ip(t,e.type,mi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function H_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ip(t,e,n){(e!=="number"||Qc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fa=Array.isArray;function mo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Tp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Q_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(Fa(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mi(n)}}function cI(t,e){var n=mi(e.value),r=mi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Y_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $u,dI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($u=$u||document.createElement("div"),$u.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$u.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _l(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gC=["Webkit","ms","Moz","O"];Object.keys(Za).forEach(function(t){gC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Za[e]=Za[t]})});function fI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Za.hasOwnProperty(t)&&Za[t]?(""+e).trim():e+"px"}function pI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yC=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ap(t,e){if(e){if(yC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function xp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rp=null;function xg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bp=null,go=null,yo=null;function X_(t){if(t=su(t)){if(typeof bp!="function")throw Error($(280));var e=t.stateNode;e&&(e=Zh(e),bp(t.stateNode,t.type,e))}}function mI(t){go?yo?yo.push(t):yo=[t]:go=t}function gI(){if(go){var t=go,e=yo;if(yo=go=null,X_(t),e)for(t=0;t<e.length;t++)X_(e[t])}}function yI(t,e){return t(e)}function vI(){}var vf=!1;function _I(t,e,n){if(vf)return t(e,n);vf=!0;try{return yI(t,e,n)}finally{vf=!1,(go!==null||yo!==null)&&(vI(),gI())}}function wl(t,e){var n=t.stateNode;if(n===null)return null;var r=Zh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var Pp=!1;if(vr)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){Pp=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{Pp=!1}function vC(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var el=!1,Yc=null,Xc=!1,Cp=null,_C={onError:function(t){el=!0,Yc=t}};function wC(t,e,n,r,i,s,o,a,l){el=!1,Yc=null,vC.apply(_C,arguments)}function EC(t,e,n,r,i,s,o,a,l){if(wC.apply(this,arguments),el){if(el){var c=Yc;el=!1,Yc=null}else throw Error($(198));Xc||(Xc=!0,Cp=c)}}function xs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function J_(t){if(xs(t)!==t)throw Error($(188))}function IC(t){var e=t.alternate;if(!e){if(e=xs(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return J_(i),t;if(s===r)return J_(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function EI(t){return t=IC(t),t!==null?II(t):null}function II(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=II(t);if(e!==null)return e;t=t.sibling}return null}var TI=sn.unstable_scheduleCallback,Z_=sn.unstable_cancelCallback,TC=sn.unstable_shouldYield,SC=sn.unstable_requestPaint,Ke=sn.unstable_now,AC=sn.unstable_getCurrentPriorityLevel,Rg=sn.unstable_ImmediatePriority,SI=sn.unstable_UserBlockingPriority,Jc=sn.unstable_NormalPriority,xC=sn.unstable_LowPriority,AI=sn.unstable_IdlePriority,Qh=null,Wn=null;function RC(t){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(Qh,t,void 0,(t.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:CC,bC=Math.log,PC=Math.LN2;function CC(t){return t>>>=0,t===0?32:31-(bC(t)/PC|0)|0}var zu=64,qu=4194304;function ja(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ja(a):(s&=o,s!==0&&(r=ja(s)))}else o=n&~i,o!==0?r=ja(o):s!==0&&(r=ja(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Pn(e),i=1<<n,r|=t[n],e&=~i;return r}function kC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function NC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Pn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=kC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function kp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xI(){var t=zu;return zu<<=1,!(zu&4194240)&&(zu=64),t}function _f(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ru(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pn(e),t[e]=n}function DC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function RI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bI,Pg,PI,CI,kI,Np=!1,Ku=[],ni=null,ri=null,ii=null,El=new Map,Il=new Map,qr=[],OC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function e0(t,e){switch(t){case"focusin":case"focusout":ni=null;break;case"dragenter":case"dragleave":ri=null;break;case"mouseover":case"mouseout":ii=null;break;case"pointerover":case"pointerout":El.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(e.pointerId)}}function Sa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=su(e),e!==null&&Pg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function VC(t,e,n,r,i){switch(e){case"focusin":return ni=Sa(ni,t,e,n,r,i),!0;case"dragenter":return ri=Sa(ri,t,e,n,r,i),!0;case"mouseover":return ii=Sa(ii,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return El.set(s,Sa(El.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Il.set(s,Sa(Il.get(s)||null,t,e,n,r,i)),!0}return!1}function NI(t){var e=Gi(t.target);if(e!==null){var n=xs(e);if(n!==null){if(e=n.tag,e===13){if(e=wI(n),e!==null){t.blockedOn=e,kI(t.priority,function(){PI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rp=r,n.target.dispatchEvent(r),Rp=null}else return e=su(n),e!==null&&Pg(e),t.blockedOn=n,!1;e.shift()}return!0}function t0(t,e,n){vc(t)&&n.delete(e)}function LC(){Np=!1,ni!==null&&vc(ni)&&(ni=null),ri!==null&&vc(ri)&&(ri=null),ii!==null&&vc(ii)&&(ii=null),El.forEach(t0),Il.forEach(t0)}function Aa(t,e){t.blockedOn===e&&(t.blockedOn=null,Np||(Np=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,LC)))}function Tl(t){function e(i){return Aa(i,t)}if(0<Ku.length){Aa(Ku[0],t);for(var n=1;n<Ku.length;n++){var r=Ku[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ni!==null&&Aa(ni,t),ri!==null&&Aa(ri,t),ii!==null&&Aa(ii,t),El.forEach(e),Il.forEach(e),n=0;n<qr.length;n++)r=qr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qr.length&&(n=qr[0],n.blockedOn===null);)NI(n),n.blockedOn===null&&qr.shift()}var vo=Rr.ReactCurrentBatchConfig,eh=!0;function MC(t,e,n,r){var i=ve,s=vo.transition;vo.transition=null;try{ve=1,Cg(t,e,n,r)}finally{ve=i,vo.transition=s}}function FC(t,e,n,r){var i=ve,s=vo.transition;vo.transition=null;try{ve=4,Cg(t,e,n,r)}finally{ve=i,vo.transition=s}}function Cg(t,e,n,r){if(eh){var i=Dp(t,e,n,r);if(i===null)Pf(t,e,r,th,n),e0(t,r);else if(VC(i,t,e,n,r))r.stopPropagation();else if(e0(t,r),e&4&&-1<OC.indexOf(t)){for(;i!==null;){var s=su(i);if(s!==null&&bI(s),s=Dp(t,e,n,r),s===null&&Pf(t,e,r,th,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Pf(t,e,r,null,n)}}var th=null;function Dp(t,e,n,r){if(th=null,t=xg(r),t=Gi(t),t!==null)if(e=xs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return th=t,null}function DI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AC()){case Rg:return 1;case SI:return 4;case Jc:case xC:return 16;case AI:return 536870912;default:return 16}default:return 16}}var Jr=null,kg=null,_c=null;function OI(){if(_c)return _c;var t,e=kg,n=e.length,r,i="value"in Jr?Jr.value:Jr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return _c=i.slice(t,1<r?1-r:void 0)}function wc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wu(){return!0}function n0(){return!1}function ln(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wu:n0,this.isPropagationStopped=n0,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wu)},persist:function(){},isPersistent:Wu}),e}var Xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ng=ln(Xo),iu=Me({},Xo,{view:0,detail:0}),jC=ln(iu),wf,Ef,xa,Yh=Me({},iu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xa&&(xa&&t.type==="mousemove"?(wf=t.screenX-xa.screenX,Ef=t.screenY-xa.screenY):Ef=wf=0,xa=t),wf)},movementY:function(t){return"movementY"in t?t.movementY:Ef}}),r0=ln(Yh),UC=Me({},Yh,{dataTransfer:0}),BC=ln(UC),$C=Me({},iu,{relatedTarget:0}),If=ln($C),zC=Me({},Xo,{animationName:0,elapsedTime:0,pseudoElement:0}),qC=ln(zC),KC=Me({},Xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WC=ln(KC),GC=Me({},Xo,{data:0}),i0=ln(GC),HC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YC[t])?!!e[t]:!1}function Dg(){return XC}var JC=Me({},iu,{key:function(t){if(t.key){var e=HC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dg,charCode:function(t){return t.type==="keypress"?wc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZC=ln(JC),ek=Me({},Yh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),s0=ln(ek),tk=Me({},iu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dg}),nk=ln(tk),rk=Me({},Xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ik=ln(rk),sk=Me({},Yh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ok=ln(sk),ak=[9,13,27,32],Og=vr&&"CompositionEvent"in window,tl=null;vr&&"documentMode"in document&&(tl=document.documentMode);var lk=vr&&"TextEvent"in window&&!tl,VI=vr&&(!Og||tl&&8<tl&&11>=tl),o0=" ",a0=!1;function LI(t,e){switch(t){case"keyup":return ak.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function MI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zs=!1;function uk(t,e){switch(t){case"compositionend":return MI(e);case"keypress":return e.which!==32?null:(a0=!0,o0);case"textInput":return t=e.data,t===o0&&a0?null:t;default:return null}}function ck(t,e){if(Zs)return t==="compositionend"||!Og&&LI(t,e)?(t=OI(),_c=kg=Jr=null,Zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return VI&&e.locale!=="ko"?null:e.data;default:return null}}var hk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function l0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hk[t.type]:e==="textarea"}function FI(t,e,n,r){mI(r),e=nh(e,"onChange"),0<e.length&&(n=new Ng("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var nl=null,Sl=null;function dk(t){QI(t,0)}function Xh(t){var e=no(t);if(lI(e))return t}function fk(t,e){if(t==="change")return e}var jI=!1;if(vr){var Tf;if(vr){var Sf="oninput"in document;if(!Sf){var u0=document.createElement("div");u0.setAttribute("oninput","return;"),Sf=typeof u0.oninput=="function"}Tf=Sf}else Tf=!1;jI=Tf&&(!document.documentMode||9<document.documentMode)}function c0(){nl&&(nl.detachEvent("onpropertychange",UI),Sl=nl=null)}function UI(t){if(t.propertyName==="value"&&Xh(Sl)){var e=[];FI(e,Sl,t,xg(t)),_I(dk,e)}}function pk(t,e,n){t==="focusin"?(c0(),nl=e,Sl=n,nl.attachEvent("onpropertychange",UI)):t==="focusout"&&c0()}function mk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xh(Sl)}function gk(t,e){if(t==="click")return Xh(e)}function yk(t,e){if(t==="input"||t==="change")return Xh(e)}function vk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nn=typeof Object.is=="function"?Object.is:vk;function Al(t,e){if(Nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mp.call(e,i)||!Nn(t[i],e[i]))return!1}return!0}function h0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function d0(t,e){var n=h0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=h0(n)}}function BI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?BI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $I(){for(var t=window,e=Qc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qc(t.document)}return e}function Vg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _k(t){var e=$I(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&BI(n.ownerDocument.documentElement,n)){if(r!==null&&Vg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=d0(n,s);var o=d0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wk=vr&&"documentMode"in document&&11>=document.documentMode,eo=null,Op=null,rl=null,Vp=!1;function f0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vp||eo==null||eo!==Qc(r)||(r=eo,"selectionStart"in r&&Vg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rl&&Al(rl,r)||(rl=r,r=nh(Op,"onSelect"),0<r.length&&(e=new Ng("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=eo)))}function Gu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var to={animationend:Gu("Animation","AnimationEnd"),animationiteration:Gu("Animation","AnimationIteration"),animationstart:Gu("Animation","AnimationStart"),transitionend:Gu("Transition","TransitionEnd")},Af={},zI={};vr&&(zI=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Jh(t){if(Af[t])return Af[t];if(!to[t])return t;var e=to[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zI)return Af[t]=e[n];return t}var qI=Jh("animationend"),KI=Jh("animationiteration"),WI=Jh("animationstart"),GI=Jh("transitionend"),HI=new Map,p0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Si(t,e){HI.set(t,e),As(e,[t])}for(var xf=0;xf<p0.length;xf++){var Rf=p0[xf],Ek=Rf.toLowerCase(),Ik=Rf[0].toUpperCase()+Rf.slice(1);Si(Ek,"on"+Ik)}Si(qI,"onAnimationEnd");Si(KI,"onAnimationIteration");Si(WI,"onAnimationStart");Si("dblclick","onDoubleClick");Si("focusin","onFocus");Si("focusout","onBlur");Si(GI,"onTransitionEnd");xo("onMouseEnter",["mouseout","mouseover"]);xo("onMouseLeave",["mouseout","mouseover"]);xo("onPointerEnter",["pointerout","pointerover"]);xo("onPointerLeave",["pointerout","pointerover"]);As("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));As("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));As("onBeforeInput",["compositionend","keypress","textInput","paste"]);As("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));As("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));As("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function m0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,EC(r,e,void 0,t),t.currentTarget=null}function QI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;m0(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;m0(i,a,c),s=l}}}if(Xc)throw t=Cp,Xc=!1,Cp=null,t}function Se(t,e){var n=e[Up];n===void 0&&(n=e[Up]=new Set);var r=t+"__bubble";n.has(r)||(YI(e,t,2,!1),n.add(r))}function bf(t,e,n){var r=0;e&&(r|=4),YI(n,t,r,e)}var Hu="_reactListening"+Math.random().toString(36).slice(2);function xl(t){if(!t[Hu]){t[Hu]=!0,rI.forEach(function(n){n!=="selectionchange"&&(Tk.has(n)||bf(n,!1,t),bf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hu]||(e[Hu]=!0,bf("selectionchange",!1,e))}}function YI(t,e,n,r){switch(DI(e)){case 1:var i=MC;break;case 4:i=FC;break;default:i=Cg}n=i.bind(null,e,n,t),i=void 0,!Pp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Pf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}_I(function(){var c=s,h=xg(n),f=[];e:{var p=HI.get(t);if(p!==void 0){var g=Ng,T=t;switch(t){case"keypress":if(wc(n)===0)break e;case"keydown":case"keyup":g=ZC;break;case"focusin":T="focus",g=If;break;case"focusout":T="blur",g=If;break;case"beforeblur":case"afterblur":g=If;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=r0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=BC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=nk;break;case qI:case KI:case WI:g=qC;break;case GI:g=ik;break;case"scroll":g=jC;break;case"wheel":g=ok;break;case"copy":case"cut":case"paste":g=WC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=s0}var b=(e&4)!==0,P=!b&&t==="scroll",I=b?p!==null?p+"Capture":null:p;b=[];for(var _=c,E;_!==null;){E=_;var C=E.stateNode;if(E.tag===5&&C!==null&&(E=C,I!==null&&(C=wl(_,I),C!=null&&b.push(Rl(_,C,E)))),P)break;_=_.return}0<b.length&&(p=new g(p,T,null,n,h),f.push({event:p,listeners:b}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Rp&&(T=n.relatedTarget||n.fromElement)&&(Gi(T)||T[_r]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(T=n.relatedTarget||n.toElement,g=c,T=T?Gi(T):null,T!==null&&(P=xs(T),T!==P||T.tag!==5&&T.tag!==6)&&(T=null)):(g=null,T=c),g!==T)){if(b=r0,C="onMouseLeave",I="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(b=s0,C="onPointerLeave",I="onPointerEnter",_="pointer"),P=g==null?p:no(g),E=T==null?p:no(T),p=new b(C,_+"leave",g,n,h),p.target=P,p.relatedTarget=E,C=null,Gi(h)===c&&(b=new b(I,_+"enter",T,n,h),b.target=E,b.relatedTarget=P,C=b),P=C,g&&T)t:{for(b=g,I=T,_=0,E=b;E;E=Fs(E))_++;for(E=0,C=I;C;C=Fs(C))E++;for(;0<_-E;)b=Fs(b),_--;for(;0<E-_;)I=Fs(I),E--;for(;_--;){if(b===I||I!==null&&b===I.alternate)break t;b=Fs(b),I=Fs(I)}b=null}else b=null;g!==null&&g0(f,p,g,b,!1),T!==null&&P!==null&&g0(f,P,T,b,!0)}}e:{if(p=c?no(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var M=fk;else if(l0(p))if(jI)M=yk;else{M=mk;var D=pk}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(M=gk);if(M&&(M=M(t,c))){FI(f,M,n,h);break e}D&&D(t,p,c),t==="focusout"&&(D=p._wrapperState)&&D.controlled&&p.type==="number"&&Ip(p,"number",p.value)}switch(D=c?no(c):window,t){case"focusin":(l0(D)||D.contentEditable==="true")&&(eo=D,Op=c,rl=null);break;case"focusout":rl=Op=eo=null;break;case"mousedown":Vp=!0;break;case"contextmenu":case"mouseup":case"dragend":Vp=!1,f0(f,n,h);break;case"selectionchange":if(wk)break;case"keydown":case"keyup":f0(f,n,h)}var w;if(Og)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Zs?LI(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(VI&&n.locale!=="ko"&&(Zs||v!=="onCompositionStart"?v==="onCompositionEnd"&&Zs&&(w=OI()):(Jr=h,kg="value"in Jr?Jr.value:Jr.textContent,Zs=!0)),D=nh(c,v),0<D.length&&(v=new i0(v,t,null,n,h),f.push({event:v,listeners:D}),w?v.data=w:(w=MI(n),w!==null&&(v.data=w)))),(w=lk?uk(t,n):ck(t,n))&&(c=nh(c,"onBeforeInput"),0<c.length&&(h=new i0("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=w))}QI(f,e)})}function Rl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=wl(t,n),s!=null&&r.unshift(Rl(t,s,i)),s=wl(t,e),s!=null&&r.push(Rl(t,s,i))),t=t.return}return r}function Fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function g0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=wl(n,s),l!=null&&o.unshift(Rl(n,l,a))):i||(l=wl(n,s),l!=null&&o.push(Rl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Sk=/\r\n?/g,Ak=/\u0000|\uFFFD/g;function y0(t){return(typeof t=="string"?t:""+t).replace(Sk,`
`).replace(Ak,"")}function Qu(t,e,n){if(e=y0(e),y0(t)!==e&&n)throw Error($(425))}function rh(){}var Lp=null,Mp=null;function Fp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jp=typeof setTimeout=="function"?setTimeout:void 0,xk=typeof clearTimeout=="function"?clearTimeout:void 0,v0=typeof Promise=="function"?Promise:void 0,Rk=typeof queueMicrotask=="function"?queueMicrotask:typeof v0<"u"?function(t){return v0.resolve(null).then(t).catch(bk)}:jp;function bk(t){setTimeout(function(){throw t})}function Cf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Tl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Tl(e)}function si(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),jn="__reactFiber$"+Jo,bl="__reactProps$"+Jo,_r="__reactContainer$"+Jo,Up="__reactEvents$"+Jo,Pk="__reactListeners$"+Jo,Ck="__reactHandles$"+Jo;function Gi(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_r]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_0(t);t!==null;){if(n=t[jn])return n;t=_0(t)}return e}t=n,n=t.parentNode}return null}function su(t){return t=t[jn]||t[_r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function no(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Zh(t){return t[bl]||null}var Bp=[],ro=-1;function Ai(t){return{current:t}}function xe(t){0>ro||(t.current=Bp[ro],Bp[ro]=null,ro--)}function Ee(t,e){ro++,Bp[ro]=t.current,t.current=e}var gi={},Tt=Ai(gi),qt=Ai(!1),os=gi;function Ro(t,e){var n=t.type.contextTypes;if(!n)return gi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Kt(t){return t=t.childContextTypes,t!=null}function ih(){xe(qt),xe(Tt)}function w0(t,e,n){if(Tt.current!==gi)throw Error($(168));Ee(Tt,e),Ee(qt,n)}function XI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,pC(t)||"Unknown",i));return Me({},n,r)}function sh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gi,os=Tt.current,Ee(Tt,t),Ee(qt,qt.current),!0}function E0(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=XI(t,e,os),r.__reactInternalMemoizedMergedChildContext=t,xe(qt),xe(Tt),Ee(Tt,t)):xe(qt),Ee(qt,n)}var sr=null,ed=!1,kf=!1;function JI(t){sr===null?sr=[t]:sr.push(t)}function kk(t){ed=!0,JI(t)}function xi(){if(!kf&&sr!==null){kf=!0;var t=0,e=ve;try{var n=sr;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sr=null,ed=!1}catch(i){throw sr!==null&&(sr=sr.slice(t+1)),TI(Rg,xi),i}finally{ve=e,kf=!1}}return null}var io=[],so=0,oh=null,ah=0,hn=[],dn=0,as=null,ar=1,lr="";function Mi(t,e){io[so++]=ah,io[so++]=oh,oh=t,ah=e}function ZI(t,e,n){hn[dn++]=ar,hn[dn++]=lr,hn[dn++]=as,as=t;var r=ar;t=lr;var i=32-Pn(r)-1;r&=~(1<<i),n+=1;var s=32-Pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ar=1<<32-Pn(e)+i|n<<i|r,lr=s+t}else ar=1<<s|n<<i|r,lr=t}function Lg(t){t.return!==null&&(Mi(t,1),ZI(t,1,0))}function Mg(t){for(;t===oh;)oh=io[--so],io[so]=null,ah=io[--so],io[so]=null;for(;t===as;)as=hn[--dn],hn[dn]=null,lr=hn[--dn],hn[dn]=null,ar=hn[--dn],hn[dn]=null}var tn=null,Jt=null,Pe=!1,Rn=null;function eT(t,e){var n=pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function I0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tn=t,Jt=si(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tn=t,Jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=as!==null?{id:ar,overflow:lr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tn=t,Jt=null,!0):!1;default:return!1}}function $p(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zp(t){if(Pe){var e=Jt;if(e){var n=e;if(!I0(t,e)){if($p(t))throw Error($(418));e=si(n.nextSibling);var r=tn;e&&I0(t,e)?eT(r,n):(t.flags=t.flags&-4097|2,Pe=!1,tn=t)}}else{if($p(t))throw Error($(418));t.flags=t.flags&-4097|2,Pe=!1,tn=t}}}function T0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function Yu(t){if(t!==tn)return!1;if(!Pe)return T0(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fp(t.type,t.memoizedProps)),e&&(e=Jt)){if($p(t))throw tT(),Error($(418));for(;e;)eT(t,e),e=si(e.nextSibling)}if(T0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Jt=si(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Jt=null}}else Jt=tn?si(t.stateNode.nextSibling):null;return!0}function tT(){for(var t=Jt;t;)t=si(t.nextSibling)}function bo(){Jt=tn=null,Pe=!1}function Fg(t){Rn===null?Rn=[t]:Rn.push(t)}var Nk=Rr.ReactCurrentBatchConfig;function An(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var lh=Ai(null),uh=null,oo=null,jg=null;function Ug(){jg=oo=uh=null}function Bg(t){var e=lh.current;xe(lh),t._currentValue=e}function qp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _o(t,e){uh=t,jg=oo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Bt=!0),t.firstContext=null)}function vn(t){var e=t._currentValue;if(jg!==t)if(t={context:t,memoizedValue:e,next:null},oo===null){if(uh===null)throw Error($(308));oo=t,uh.dependencies={lanes:0,firstContext:t}}else oo=oo.next=t;return e}var Hi=null;function $g(t){Hi===null?Hi=[t]:Hi.push(t)}function nT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$g(e)):(n.next=i.next,i.next=n),e.interleaved=n,wr(t,r)}function wr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $r=!1;function zg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function oi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wr(t,n)}return i=r.interleaved,i===null?(e.next=e,$g(r)):(e.next=i.next,i.next=e),r.interleaved=e,wr(t,n)}function Ec(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bg(t,n)}}function S0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ch(t,e,n,r){var i=t.updateQueue;$r=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,b=a;switch(p=e,g=n,b.tag){case 1:if(T=b.payload,typeof T=="function"){f=T.call(g,f,p);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=b.payload,p=typeof T=="function"?T.call(g,f,p):T,p==null)break e;f=Me({},f,p);break e;case 2:$r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=f):h=h.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);us|=o,t.lanes=o,t.memoizedState=f}}function A0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var iT=new nI.Component().refs;function Kp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var td={isMounted:function(t){return(t=t._reactInternals)?xs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=li(t),s=pr(r,i);s.payload=e,n!=null&&(s.callback=n),e=oi(t,s,i),e!==null&&(Cn(e,t,i,r),Ec(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=li(t),s=pr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=oi(t,s,i),e!==null&&(Cn(e,t,i,r),Ec(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=li(t),i=pr(n,r);i.tag=2,e!=null&&(i.callback=e),e=oi(t,i,r),e!==null&&(Cn(e,t,r,n),Ec(e,t,r))}};function x0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Al(n,r)||!Al(i,s):!0}function sT(t,e,n){var r=!1,i=gi,s=e.contextType;return typeof s=="object"&&s!==null?s=vn(s):(i=Kt(e)?os:Tt.current,r=e.contextTypes,s=(r=r!=null)?Ro(t,i):gi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=td,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function R0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&td.enqueueReplaceState(e,e.state,null)}function Wp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=iT,zg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vn(s):(s=Kt(e)?os:Tt.current,i.context=Ro(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&td.enqueueReplaceState(i,i.state,null),ch(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ra(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===iT&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function Xu(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function b0(t){var e=t._init;return e(t._payload)}function oT(t){function e(I,_){if(t){var E=I.deletions;E===null?(I.deletions=[_],I.flags|=16):E.push(_)}}function n(I,_){if(!t)return null;for(;_!==null;)e(I,_),_=_.sibling;return null}function r(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function i(I,_){return I=ui(I,_),I.index=0,I.sibling=null,I}function s(I,_,E){return I.index=E,t?(E=I.alternate,E!==null?(E=E.index,E<_?(I.flags|=2,_):E):(I.flags|=2,_)):(I.flags|=1048576,_)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,_,E,C){return _===null||_.tag!==6?(_=Ff(E,I.mode,C),_.return=I,_):(_=i(_,E),_.return=I,_)}function l(I,_,E,C){var M=E.type;return M===Js?h(I,_,E.props.children,C,E.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Br&&b0(M)===_.type)?(C=i(_,E.props),C.ref=Ra(I,_,E),C.return=I,C):(C=Rc(E.type,E.key,E.props,null,I.mode,C),C.ref=Ra(I,_,E),C.return=I,C)}function c(I,_,E,C){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=jf(E,I.mode,C),_.return=I,_):(_=i(_,E.children||[]),_.return=I,_)}function h(I,_,E,C,M){return _===null||_.tag!==7?(_=Ji(E,I.mode,C,M),_.return=I,_):(_=i(_,E),_.return=I,_)}function f(I,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ff(""+_,I.mode,E),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Uu:return E=Rc(_.type,_.key,_.props,null,I.mode,E),E.ref=Ra(I,null,_),E.return=I,E;case Xs:return _=jf(_,I.mode,E),_.return=I,_;case Br:var C=_._init;return f(I,C(_._payload),E)}if(Fa(_)||Ia(_))return _=Ji(_,I.mode,E,null),_.return=I,_;Xu(I,_)}return null}function p(I,_,E,C){var M=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return M!==null?null:a(I,_,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Uu:return E.key===M?l(I,_,E,C):null;case Xs:return E.key===M?c(I,_,E,C):null;case Br:return M=E._init,p(I,_,M(E._payload),C)}if(Fa(E)||Ia(E))return M!==null?null:h(I,_,E,C,null);Xu(I,E)}return null}function g(I,_,E,C,M){if(typeof C=="string"&&C!==""||typeof C=="number")return I=I.get(E)||null,a(_,I,""+C,M);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Uu:return I=I.get(C.key===null?E:C.key)||null,l(_,I,C,M);case Xs:return I=I.get(C.key===null?E:C.key)||null,c(_,I,C,M);case Br:var D=C._init;return g(I,_,E,D(C._payload),M)}if(Fa(C)||Ia(C))return I=I.get(E)||null,h(_,I,C,M,null);Xu(_,C)}return null}function T(I,_,E,C){for(var M=null,D=null,w=_,v=_=0,S=null;w!==null&&v<E.length;v++){w.index>v?(S=w,w=null):S=w.sibling;var R=p(I,w,E[v],C);if(R===null){w===null&&(w=S);break}t&&w&&R.alternate===null&&e(I,w),_=s(R,_,v),D===null?M=R:D.sibling=R,D=R,w=S}if(v===E.length)return n(I,w),Pe&&Mi(I,v),M;if(w===null){for(;v<E.length;v++)w=f(I,E[v],C),w!==null&&(_=s(w,_,v),D===null?M=w:D.sibling=w,D=w);return Pe&&Mi(I,v),M}for(w=r(I,w);v<E.length;v++)S=g(w,I,v,E[v],C),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?v:S.key),_=s(S,_,v),D===null?M=S:D.sibling=S,D=S);return t&&w.forEach(function(k){return e(I,k)}),Pe&&Mi(I,v),M}function b(I,_,E,C){var M=Ia(E);if(typeof M!="function")throw Error($(150));if(E=M.call(E),E==null)throw Error($(151));for(var D=M=null,w=_,v=_=0,S=null,R=E.next();w!==null&&!R.done;v++,R=E.next()){w.index>v?(S=w,w=null):S=w.sibling;var k=p(I,w,R.value,C);if(k===null){w===null&&(w=S);break}t&&w&&k.alternate===null&&e(I,w),_=s(k,_,v),D===null?M=k:D.sibling=k,D=k,w=S}if(R.done)return n(I,w),Pe&&Mi(I,v),M;if(w===null){for(;!R.done;v++,R=E.next())R=f(I,R.value,C),R!==null&&(_=s(R,_,v),D===null?M=R:D.sibling=R,D=R);return Pe&&Mi(I,v),M}for(w=r(I,w);!R.done;v++,R=E.next())R=g(w,I,v,R.value,C),R!==null&&(t&&R.alternate!==null&&w.delete(R.key===null?v:R.key),_=s(R,_,v),D===null?M=R:D.sibling=R,D=R);return t&&w.forEach(function(N){return e(I,N)}),Pe&&Mi(I,v),M}function P(I,_,E,C){if(typeof E=="object"&&E!==null&&E.type===Js&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Uu:e:{for(var M=E.key,D=_;D!==null;){if(D.key===M){if(M=E.type,M===Js){if(D.tag===7){n(I,D.sibling),_=i(D,E.props.children),_.return=I,I=_;break e}}else if(D.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Br&&b0(M)===D.type){n(I,D.sibling),_=i(D,E.props),_.ref=Ra(I,D,E),_.return=I,I=_;break e}n(I,D);break}else e(I,D);D=D.sibling}E.type===Js?(_=Ji(E.props.children,I.mode,C,E.key),_.return=I,I=_):(C=Rc(E.type,E.key,E.props,null,I.mode,C),C.ref=Ra(I,_,E),C.return=I,I=C)}return o(I);case Xs:e:{for(D=E.key;_!==null;){if(_.key===D)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(I,_.sibling),_=i(_,E.children||[]),_.return=I,I=_;break e}else{n(I,_);break}else e(I,_);_=_.sibling}_=jf(E,I.mode,C),_.return=I,I=_}return o(I);case Br:return D=E._init,P(I,_,D(E._payload),C)}if(Fa(E))return T(I,_,E,C);if(Ia(E))return b(I,_,E,C);Xu(I,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(I,_.sibling),_=i(_,E),_.return=I,I=_):(n(I,_),_=Ff(E,I.mode,C),_.return=I,I=_),o(I)):n(I,_)}return P}var Po=oT(!0),aT=oT(!1),ou={},Gn=Ai(ou),Pl=Ai(ou),Cl=Ai(ou);function Qi(t){if(t===ou)throw Error($(174));return t}function qg(t,e){switch(Ee(Cl,e),Ee(Pl,t),Ee(Gn,ou),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sp(e,t)}xe(Gn),Ee(Gn,e)}function Co(){xe(Gn),xe(Pl),xe(Cl)}function lT(t){Qi(Cl.current);var e=Qi(Gn.current),n=Sp(e,t.type);e!==n&&(Ee(Pl,t),Ee(Gn,n))}function Kg(t){Pl.current===t&&(xe(Gn),xe(Pl))}var De=Ai(0);function hh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nf=[];function Wg(){for(var t=0;t<Nf.length;t++)Nf[t]._workInProgressVersionPrimary=null;Nf.length=0}var Ic=Rr.ReactCurrentDispatcher,Df=Rr.ReactCurrentBatchConfig,ls=0,Ve=null,et=null,st=null,dh=!1,il=!1,kl=0,Dk=0;function vt(){throw Error($(321))}function Gg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nn(t[n],e[n]))return!1;return!0}function Hg(t,e,n,r,i,s){if(ls=s,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ic.current=t===null||t.memoizedState===null?Mk:Fk,t=n(r,i),il){s=0;do{if(il=!1,kl=0,25<=s)throw Error($(301));s+=1,st=et=null,e.updateQueue=null,Ic.current=jk,t=n(r,i)}while(il)}if(Ic.current=fh,e=et!==null&&et.next!==null,ls=0,st=et=Ve=null,dh=!1,e)throw Error($(300));return t}function Qg(){var t=kl!==0;return kl=0,t}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Ve.memoizedState=st=t:st=st.next=t,st}function _n(){if(et===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=st===null?Ve.memoizedState:st.next;if(e!==null)st=e,et=t;else{if(t===null)throw Error($(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},st===null?Ve.memoizedState=st=t:st=st.next=t}return st}function Nl(t,e){return typeof e=="function"?e(t):e}function Of(t){var e=_n(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((ls&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Ve.lanes|=h,us|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Nn(r,e.memoizedState)||(Bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ve.lanes|=s,us|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vf(t){var e=_n(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nn(s,e.memoizedState)||(Bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function uT(){}function cT(t,e){var n=Ve,r=_n(),i=e(),s=!Nn(r.memoizedState,i);if(s&&(r.memoizedState=i,Bt=!0),r=r.queue,Yg(fT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,Dl(9,dT.bind(null,n,r,i,e),void 0,null),at===null)throw Error($(349));ls&30||hT(n,e,i)}return i}function hT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dT(t,e,n,r){e.value=n,e.getSnapshot=r,pT(e)&&mT(t)}function fT(t,e,n){return n(function(){pT(e)&&mT(t)})}function pT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nn(t,n)}catch{return!0}}function mT(t){var e=wr(t,1);e!==null&&Cn(e,t,1,-1)}function P0(t){var e=Ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nl,lastRenderedState:t},e.queue=t,t=t.dispatch=Lk.bind(null,Ve,t),[e.memoizedState,t]}function Dl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function gT(){return _n().memoizedState}function Tc(t,e,n,r){var i=Ln();Ve.flags|=t,i.memoizedState=Dl(1|e,n,void 0,r===void 0?null:r)}function nd(t,e,n,r){var i=_n();r=r===void 0?null:r;var s=void 0;if(et!==null){var o=et.memoizedState;if(s=o.destroy,r!==null&&Gg(r,o.deps)){i.memoizedState=Dl(e,n,s,r);return}}Ve.flags|=t,i.memoizedState=Dl(1|e,n,s,r)}function C0(t,e){return Tc(8390656,8,t,e)}function Yg(t,e){return nd(2048,8,t,e)}function yT(t,e){return nd(4,2,t,e)}function vT(t,e){return nd(4,4,t,e)}function _T(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wT(t,e,n){return n=n!=null?n.concat([t]):null,nd(4,4,_T.bind(null,e,t),n)}function Xg(){}function ET(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function IT(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function TT(t,e,n){return ls&21?(Nn(n,e)||(n=xI(),Ve.lanes|=n,us|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Bt=!0),t.memoizedState=n)}function Ok(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=Df.transition;Df.transition={};try{t(!1),e()}finally{ve=n,Df.transition=r}}function ST(){return _n().memoizedState}function Vk(t,e,n){var r=li(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},AT(t))xT(e,n);else if(n=nT(t,e,n,r),n!==null){var i=Dt();Cn(n,t,r,i),RT(n,e,r)}}function Lk(t,e,n){var r=li(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(AT(t))xT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Nn(a,o)){var l=e.interleaved;l===null?(i.next=i,$g(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=nT(t,e,i,r),n!==null&&(i=Dt(),Cn(n,t,r,i),RT(n,e,r))}}function AT(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function xT(t,e){il=dh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function RT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bg(t,n)}}var fh={readContext:vn,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},Mk={readContext:vn,useCallback:function(t,e){return Ln().memoizedState=[t,e===void 0?null:e],t},useContext:vn,useEffect:C0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tc(4194308,4,_T.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tc(4,2,t,e)},useMemo:function(t,e){var n=Ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Vk.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=Ln();return t={current:t},e.memoizedState=t},useState:P0,useDebugValue:Xg,useDeferredValue:function(t){return Ln().memoizedState=t},useTransition:function(){var t=P0(!1),e=t[0];return t=Ok.bind(null,t[1]),Ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,i=Ln();if(Pe){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),at===null)throw Error($(349));ls&30||hT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,C0(fT.bind(null,r,s,t),[t]),r.flags|=2048,Dl(9,dT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ln(),e=at.identifierPrefix;if(Pe){var n=lr,r=ar;n=(r&~(1<<32-Pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=kl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Dk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fk={readContext:vn,useCallback:ET,useContext:vn,useEffect:Yg,useImperativeHandle:wT,useInsertionEffect:yT,useLayoutEffect:vT,useMemo:IT,useReducer:Of,useRef:gT,useState:function(){return Of(Nl)},useDebugValue:Xg,useDeferredValue:function(t){var e=_n();return TT(e,et.memoizedState,t)},useTransition:function(){var t=Of(Nl)[0],e=_n().memoizedState;return[t,e]},useMutableSource:uT,useSyncExternalStore:cT,useId:ST,unstable_isNewReconciler:!1},jk={readContext:vn,useCallback:ET,useContext:vn,useEffect:Yg,useImperativeHandle:wT,useInsertionEffect:yT,useLayoutEffect:vT,useMemo:IT,useReducer:Vf,useRef:gT,useState:function(){return Vf(Nl)},useDebugValue:Xg,useDeferredValue:function(t){var e=_n();return et===null?e.memoizedState=t:TT(e,et.memoizedState,t)},useTransition:function(){var t=Vf(Nl)[0],e=_n().memoizedState;return[t,e]},useMutableSource:uT,useSyncExternalStore:cT,useId:ST,unstable_isNewReconciler:!1};function ko(t,e){try{var n="",r=e;do n+=fC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Lf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Uk=typeof WeakMap=="function"?WeakMap:Map;function bT(t,e,n){n=pr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){mh||(mh=!0,rm=r),Gp(t,e)},n}function PT(t,e,n){n=pr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gp(t,e),typeof r!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function k0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Uk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=eN.bind(null,t,e,n),e.then(t,t))}function N0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function D0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pr(-1,1),e.tag=2,oi(n,e,1))),n.lanes|=1),t)}var Bk=Rr.ReactCurrentOwner,Bt=!1;function Pt(t,e,n,r){e.child=t===null?aT(e,null,n,r):Po(e,t.child,n,r)}function O0(t,e,n,r,i){n=n.render;var s=e.ref;return _o(e,i),r=Hg(t,e,n,r,s,i),n=Qg(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(Pe&&n&&Lg(e),e.flags|=1,Pt(t,e,r,i),e.child)}function V0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sy(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,CT(t,e,s,r,i)):(t=Rc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Al,n(o,r)&&t.ref===e.ref)return Er(t,e,i)}return e.flags|=1,t=ui(s,r),t.ref=e.ref,t.return=e,e.child=t}function CT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Al(s,r)&&t.ref===e.ref)if(Bt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Bt=!0);else return e.lanes=t.lanes,Er(t,e,i)}return Hp(t,e,n,r,i)}function kT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(lo,Xt),Xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(lo,Xt),Xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(lo,Xt),Xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(lo,Xt),Xt|=r;return Pt(t,e,i,n),e.child}function NT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hp(t,e,n,r,i){var s=Kt(n)?os:Tt.current;return s=Ro(e,s),_o(e,i),n=Hg(t,e,n,r,s,i),r=Qg(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(Pe&&r&&Lg(e),e.flags|=1,Pt(t,e,n,i),e.child)}function L0(t,e,n,r,i){if(Kt(n)){var s=!0;sh(e)}else s=!1;if(_o(e,i),e.stateNode===null)Sc(t,e),sT(e,n,r),Wp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=vn(c):(c=Kt(n)?os:Tt.current,c=Ro(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&R0(e,o,r,c),$r=!1;var p=e.memoizedState;o.state=p,ch(e,r,o,i),l=e.memoizedState,a!==r||p!==l||qt.current||$r?(typeof h=="function"&&(Kp(e,n,h,r),l=e.memoizedState),(a=$r||x0(e,n,a,r,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,rT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:An(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vn(l):(l=Kt(n)?os:Tt.current,l=Ro(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&R0(e,o,r,l),$r=!1,p=e.memoizedState,o.state=p,ch(e,r,o,i);var T=e.memoizedState;a!==f||p!==T||qt.current||$r?(typeof g=="function"&&(Kp(e,n,g,r),T=e.memoizedState),(c=$r||x0(e,n,c,r,p,T,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Qp(t,e,n,r,s,i)}function Qp(t,e,n,r,i,s){NT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&E0(e,n,!1),Er(t,e,s);r=e.stateNode,Bk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Po(e,t.child,null,s),e.child=Po(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&E0(e,n,!0),e.child}function DT(t){var e=t.stateNode;e.pendingContext?w0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&w0(t,e.context,!1),qg(t,e.containerInfo)}function M0(t,e,n,r,i){return bo(),Fg(i),e.flags|=256,Pt(t,e,n,r),e.child}var Yp={dehydrated:null,treeContext:null,retryLane:0};function Xp(t){return{baseLanes:t,cachePool:null,transitions:null}}function OT(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(De,i&1),t===null)return zp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sd(o,r,0,null),t=Ji(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xp(n),e.memoizedState=Yp,t):Jg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $k(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ui(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ui(a,s):(s=Ji(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Xp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yp,r}return s=t.child,t=s.sibling,r=ui(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jg(t,e){return e=sd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ju(t,e,n,r){return r!==null&&Fg(r),Po(e,t.child,null,n),t=Jg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $k(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Lf(Error($(422))),Ju(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=sd({mode:"visible",children:r.children},i,0,null),s=Ji(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Po(e,t.child,null,o),e.child.memoizedState=Xp(o),e.memoizedState=Yp,s);if(!(e.mode&1))return Ju(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=Lf(s,r,void 0),Ju(t,e,o,r)}if(a=(o&t.childLanes)!==0,Bt||a){if(r=at,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wr(t,i),Cn(r,t,i,-1))}return iy(),r=Lf(Error($(421))),Ju(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=tN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Jt=si(i.nextSibling),tn=e,Pe=!0,Rn=null,t!==null&&(hn[dn++]=ar,hn[dn++]=lr,hn[dn++]=as,ar=t.id,lr=t.overflow,as=e),e=Jg(e,r.children),e.flags|=4096,e)}function F0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qp(t.return,e,n)}function Mf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function VT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&F0(t,n,e);else if(t.tag===19)F0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(De,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Mf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Mf(e,!0,n,null,s);break;case"together":Mf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),us|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=ui(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ui(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zk(t,e,n){switch(e.tag){case 3:DT(e),bo();break;case 5:lT(e);break;case 1:Kt(e.type)&&sh(e);break;case 4:qg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(lh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?OT(t,e,n):(Ee(De,De.current&1),t=Er(t,e,n),t!==null?t.sibling:null);Ee(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return VT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,kT(t,e,n)}return Er(t,e,n)}var LT,Jp,MT,FT;LT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jp=function(){};MT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qi(Gn.current);var s=null;switch(n){case"input":i=wp(t,i),r=wp(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=Tp(t,i),r=Tp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=rh)}Ap(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};FT=function(t,e,n,r){n!==r&&(e.flags|=4)};function ba(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function qk(t,e,n){var r=e.pendingProps;switch(Mg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Kt(e.type)&&ih(),_t(e),null;case 3:return r=e.stateNode,Co(),xe(qt),xe(Tt),Wg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Yu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(om(Rn),Rn=null))),Jp(t,e),_t(e),null;case 5:Kg(e);var i=Qi(Cl.current);if(n=e.type,t!==null&&e.stateNode!=null)MT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return _t(e),null}if(t=Qi(Gn.current),Yu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jn]=e,r[bl]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<Ua.length;i++)Se(Ua[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":G_(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":Q_(r,s),Se("invalid",r)}Ap(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qu(r.textContent,a,t),i=["children",""+a]):vl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":Bu(r),H_(r,s,!0);break;case"textarea":Bu(r),Y_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[jn]=e,t[bl]=r,LT(t,e,!1,!1),e.stateNode=t;e:{switch(o=xp(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ua.length;i++)Se(Ua[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":G_(t,r),i=wp(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Se("invalid",t);break;case"textarea":Q_(t,r),i=Tp(t,r),Se("invalid",t);break;default:i=r}Ap(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?pI(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dI(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_l(t,l):typeof l=="number"&&_l(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Se("scroll",t):l!=null&&Ig(t,s,l,o))}switch(n){case"input":Bu(t),H_(t,r,!1);break;case"textarea":Bu(t),Y_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?mo(t,!!r.multiple,s,!1):r.defaultValue!=null&&mo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=rh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)FT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=Qi(Cl.current),Qi(Gn.current),Yu(e)){if(r=e.stateNode,n=e.memoizedProps,r[jn]=e,(s=r.nodeValue!==n)&&(t=tn,t!==null))switch(t.tag){case 3:Qu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jn]=e,e.stateNode=r}return _t(e),null;case 13:if(xe(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&Jt!==null&&e.mode&1&&!(e.flags&128))tT(),bo(),e.flags|=98560,s=!1;else if(s=Yu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[jn]=e}else bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_t(e),s=!1}else Rn!==null&&(om(Rn),Rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?tt===0&&(tt=3):iy())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return Co(),Jp(t,e),t===null&&xl(e.stateNode.containerInfo),_t(e),null;case 10:return Bg(e.type._context),_t(e),null;case 17:return Kt(e.type)&&ih(),_t(e),null;case 19:if(xe(De),s=e.memoizedState,s===null)return _t(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ba(s,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hh(t),o!==null){for(e.flags|=128,ba(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ke()>No&&(e.flags|=128,r=!0,ba(s,!1),e.lanes=4194304)}else{if(!r)if(t=hh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ba(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Pe)return _t(e),null}else 2*Ke()-s.renderingStartTime>No&&n!==1073741824&&(e.flags|=128,r=!0,ba(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ke(),e.sibling=null,n=De.current,Ee(De,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return ry(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xt&1073741824&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function Kk(t,e){switch(Mg(e),e.tag){case 1:return Kt(e.type)&&ih(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Co(),xe(qt),xe(Tt),Wg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kg(e),null;case 13:if(xe(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(De),null;case 4:return Co(),null;case 10:return Bg(e.type._context),null;case 22:case 23:return ry(),null;case 24:return null;default:return null}}var Zu=!1,Et=!1,Wk=typeof WeakSet=="function"?WeakSet:Set,W=null;function ao(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function Zp(t,e,n){try{n()}catch(r){je(t,e,r)}}var j0=!1;function Gk(t,e){if(Lp=eh,t=$I(),Vg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(l=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mp={focusedElem:t,selectionRange:n},eh=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var b=T.memoizedProps,P=T.memoizedState,I=e.stateNode,_=I.getSnapshotBeforeUpdate(e.elementType===e.type?b:An(e.type,b),P);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(C){je(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return T=j0,j0=!1,T}function sl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zp(e,n,s)}i=i.next}while(i!==r)}}function rd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function em(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jT(t){var e=t.alternate;e!==null&&(t.alternate=null,jT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[bl],delete e[Up],delete e[Pk],delete e[Ck])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function UT(t){return t.tag===5||t.tag===3||t.tag===4}function U0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||UT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rh));else if(r!==4&&(t=t.child,t!==null))for(tm(t,e,n),t=t.sibling;t!==null;)tm(t,e,n),t=t.sibling}function nm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nm(t,e,n),t=t.sibling;t!==null;)nm(t,e,n),t=t.sibling}var ut=null,xn=!1;function Vr(t,e,n){for(n=n.child;n!==null;)BT(t,e,n),n=n.sibling}function BT(t,e,n){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(Qh,n)}catch{}switch(n.tag){case 5:Et||ao(n,e);case 6:var r=ut,i=xn;ut=null,Vr(t,e,n),ut=r,xn=i,ut!==null&&(xn?(t=ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(xn?(t=ut,n=n.stateNode,t.nodeType===8?Cf(t.parentNode,n):t.nodeType===1&&Cf(t,n),Tl(t)):Cf(ut,n.stateNode));break;case 4:r=ut,i=xn,ut=n.stateNode.containerInfo,xn=!0,Vr(t,e,n),ut=r,xn=i;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zp(n,e,o),i=i.next}while(i!==r)}Vr(t,e,n);break;case 1:if(!Et&&(ao(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,e,a)}Vr(t,e,n);break;case 21:Vr(t,e,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,Vr(t,e,n),Et=r):Vr(t,e,n);break;default:Vr(t,e,n)}}function B0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Wk),e.forEach(function(r){var i=nN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ut=a.stateNode,xn=!1;break e;case 3:ut=a.stateNode.containerInfo,xn=!0;break e;case 4:ut=a.stateNode.containerInfo,xn=!0;break e}a=a.return}if(ut===null)throw Error($(160));BT(s,o,i),ut=null,xn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){je(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$T(e,t),e=e.sibling}function $T(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),On(t),r&4){try{sl(3,t,t.return),rd(3,t)}catch(b){je(t,t.return,b)}try{sl(5,t,t.return)}catch(b){je(t,t.return,b)}}break;case 1:Tn(e,t),On(t),r&512&&n!==null&&ao(n,n.return);break;case 5:if(Tn(e,t),On(t),r&512&&n!==null&&ao(n,n.return),t.flags&32){var i=t.stateNode;try{_l(i,"")}catch(b){je(t,t.return,b)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&uI(i,s),xp(a,o);var c=xp(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?pI(i,f):h==="dangerouslySetInnerHTML"?dI(i,f):h==="children"?_l(i,f):Ig(i,h,f,c)}switch(a){case"input":Ep(i,s);break;case"textarea":cI(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?mo(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?mo(i,!!s.multiple,s.defaultValue,!0):mo(i,!!s.multiple,s.multiple?[]:"",!1))}i[bl]=s}catch(b){je(t,t.return,b)}}break;case 6:if(Tn(e,t),On(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(b){je(t,t.return,b)}}break;case 3:if(Tn(e,t),On(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tl(e.containerInfo)}catch(b){je(t,t.return,b)}break;case 4:Tn(e,t),On(t);break;case 13:Tn(e,t),On(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ty=Ke())),r&4&&B0(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(c=Et)||h,Tn(e,t),Et=c):Tn(e,t),On(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(W=t,h=t.child;h!==null;){for(f=W=h;W!==null;){switch(p=W,g=p.child,p.tag){case 0:case 11:case 14:case 15:sl(4,p,p.return);break;case 1:ao(p,p.return);var T=p.stateNode;if(typeof T.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(b){je(r,n,b)}}break;case 5:ao(p,p.return);break;case 22:if(p.memoizedState!==null){z0(f);continue}}g!==null?(g.return=p,W=g):z0(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fI("display",o))}catch(b){je(t,t.return,b)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(b){je(t,t.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Tn(e,t),On(t),r&4&&B0(t);break;case 21:break;default:Tn(e,t),On(t)}}function On(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(UT(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_l(i,""),r.flags&=-33);var s=U0(t);nm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=U0(t);tm(t,a,o);break;default:throw Error($(161))}}catch(l){je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hk(t,e,n){W=t,zT(t)}function zT(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Zu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Et;a=Zu;var c=Et;if(Zu=o,(Et=l)&&!c)for(W=i;W!==null;)o=W,l=o.child,o.tag===22&&o.memoizedState!==null?q0(i):l!==null?(l.return=o,W=l):q0(i);for(;s!==null;)W=s,zT(s),s=s.sibling;W=i,Zu=a,Et=c}$0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):$0(t)}}function $0(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||rd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:An(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&A0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}A0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Tl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Et||e.flags&512&&em(e)}catch(p){je(e,e.return,p)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function z0(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function q0(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rd(4,e)}catch(l){je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){je(e,i,l)}}var s=e.return;try{em(e)}catch(l){je(e,s,l)}break;case 5:var o=e.return;try{em(e)}catch(l){je(e,o,l)}}}catch(l){je(e,e.return,l)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var Qk=Math.ceil,ph=Rr.ReactCurrentDispatcher,Zg=Rr.ReactCurrentOwner,gn=Rr.ReactCurrentBatchConfig,he=0,at=null,Ye=null,ht=0,Xt=0,lo=Ai(0),tt=0,Ol=null,us=0,id=0,ey=0,ol=null,Ut=null,ty=0,No=1/0,rr=null,mh=!1,rm=null,ai=null,ec=!1,Zr=null,gh=0,al=0,im=null,Ac=-1,xc=0;function Dt(){return he&6?Ke():Ac!==-1?Ac:Ac=Ke()}function li(t){return t.mode&1?he&2&&ht!==0?ht&-ht:Nk.transition!==null?(xc===0&&(xc=xI()),xc):(t=ve,t!==0||(t=window.event,t=t===void 0?16:DI(t.type)),t):1}function Cn(t,e,n,r){if(50<al)throw al=0,im=null,Error($(185));ru(t,n,r),(!(he&2)||t!==at)&&(t===at&&(!(he&2)&&(id|=n),tt===4&&Kr(t,ht)),Wt(t,r),n===1&&he===0&&!(e.mode&1)&&(No=Ke()+500,ed&&xi()))}function Wt(t,e){var n=t.callbackNode;NC(t,e);var r=Zc(t,t===at?ht:0);if(r===0)n!==null&&Z_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Z_(n),e===1)t.tag===0?kk(K0.bind(null,t)):JI(K0.bind(null,t)),Rk(function(){!(he&6)&&xi()}),n=null;else{switch(RI(r)){case 1:n=Rg;break;case 4:n=SI;break;case 16:n=Jc;break;case 536870912:n=AI;break;default:n=Jc}n=XT(n,qT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qT(t,e){if(Ac=-1,xc=0,he&6)throw Error($(327));var n=t.callbackNode;if(wo()&&t.callbackNode!==n)return null;var r=Zc(t,t===at?ht:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yh(t,r);else{e=r;var i=he;he|=2;var s=WT();(at!==t||ht!==e)&&(rr=null,No=Ke()+500,Xi(t,e));do try{Jk();break}catch(a){KT(t,a)}while(!0);Ug(),ph.current=s,he=i,Ye!==null?e=0:(at=null,ht=0,e=tt)}if(e!==0){if(e===2&&(i=kp(t),i!==0&&(r=i,e=sm(t,i))),e===1)throw n=Ol,Xi(t,0),Kr(t,r),Wt(t,Ke()),n;if(e===6)Kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Yk(i)&&(e=yh(t,r),e===2&&(s=kp(t),s!==0&&(r=s,e=sm(t,s))),e===1))throw n=Ol,Xi(t,0),Kr(t,r),Wt(t,Ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Fi(t,Ut,rr);break;case 3:if(Kr(t,r),(r&130023424)===r&&(e=ty+500-Ke(),10<e)){if(Zc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jp(Fi.bind(null,t,Ut,rr),e);break}Fi(t,Ut,rr);break;case 4:if(Kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qk(r/1960))-r,10<r){t.timeoutHandle=jp(Fi.bind(null,t,Ut,rr),r);break}Fi(t,Ut,rr);break;case 5:Fi(t,Ut,rr);break;default:throw Error($(329))}}}return Wt(t,Ke()),t.callbackNode===n?qT.bind(null,t):null}function sm(t,e){var n=ol;return t.current.memoizedState.isDehydrated&&(Xi(t,e).flags|=256),t=yh(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&om(e)),t}function om(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function Yk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kr(t,e){for(e&=~ey,e&=~id,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pn(e),r=1<<n;t[n]=-1,e&=~r}}function K0(t){if(he&6)throw Error($(327));wo();var e=Zc(t,0);if(!(e&1))return Wt(t,Ke()),null;var n=yh(t,e);if(t.tag!==0&&n===2){var r=kp(t);r!==0&&(e=r,n=sm(t,r))}if(n===1)throw n=Ol,Xi(t,0),Kr(t,e),Wt(t,Ke()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fi(t,Ut,rr),Wt(t,Ke()),null}function ny(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(No=Ke()+500,ed&&xi())}}function cs(t){Zr!==null&&Zr.tag===0&&!(he&6)&&wo();var e=he;he|=1;var n=gn.transition,r=ve;try{if(gn.transition=null,ve=1,t)return t()}finally{ve=r,gn.transition=n,he=e,!(he&6)&&xi()}}function ry(){Xt=lo.current,xe(lo)}function Xi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xk(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(Mg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ih();break;case 3:Co(),xe(qt),xe(Tt),Wg();break;case 5:Kg(r);break;case 4:Co();break;case 13:xe(De);break;case 19:xe(De);break;case 10:Bg(r.type._context);break;case 22:case 23:ry()}n=n.return}if(at=t,Ye=t=ui(t.current,null),ht=Xt=e,tt=0,Ol=null,ey=id=us=0,Ut=ol=null,Hi!==null){for(e=0;e<Hi.length;e++)if(n=Hi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Hi=null}return t}function KT(t,e){do{var n=Ye;try{if(Ug(),Ic.current=fh,dh){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}dh=!1}if(ls=0,st=et=Ve=null,il=!1,kl=0,Zg.current=null,n===null||n.return===null){tt=1,Ol=e,Ye=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=N0(o);if(g!==null){g.flags&=-257,D0(g,o,a,s,e),g.mode&1&&k0(s,c,e),e=g,l=c;var T=e.updateQueue;if(T===null){var b=new Set;b.add(l),e.updateQueue=b}else T.add(l);break e}else{if(!(e&1)){k0(s,c,e),iy();break e}l=Error($(426))}}else if(Pe&&a.mode&1){var P=N0(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),D0(P,o,a,s,e),Fg(ko(l,a));break e}}s=l=ko(l,a),tt!==4&&(tt=2),ol===null?ol=[s]:ol.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=bT(s,l,e);S0(s,I);break e;case 1:a=l;var _=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(ai===null||!ai.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=PT(s,a,e);S0(s,C);break e}}s=s.return}while(s!==null)}HT(n)}catch(M){e=M,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(!0)}function WT(){var t=ph.current;return ph.current=fh,t===null?fh:t}function iy(){(tt===0||tt===3||tt===2)&&(tt=4),at===null||!(us&268435455)&&!(id&268435455)||Kr(at,ht)}function yh(t,e){var n=he;he|=2;var r=WT();(at!==t||ht!==e)&&(rr=null,Xi(t,e));do try{Xk();break}catch(i){KT(t,i)}while(!0);if(Ug(),he=n,ph.current=r,Ye!==null)throw Error($(261));return at=null,ht=0,tt}function Xk(){for(;Ye!==null;)GT(Ye)}function Jk(){for(;Ye!==null&&!TC();)GT(Ye)}function GT(t){var e=YT(t.alternate,t,Xt);t.memoizedProps=t.pendingProps,e===null?HT(t):Ye=e,Zg.current=null}function HT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Kk(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Ye=null;return}}else if(n=qk(n,e,Xt),n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);tt===0&&(tt=5)}function Fi(t,e,n){var r=ve,i=gn.transition;try{gn.transition=null,ve=1,Zk(t,e,n,r)}finally{gn.transition=i,ve=r}return null}function Zk(t,e,n,r){do wo();while(Zr!==null);if(he&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(DC(t,s),t===at&&(Ye=at=null,ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ec||(ec=!0,XT(Jc,function(){return wo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gn.transition,gn.transition=null;var o=ve;ve=1;var a=he;he|=4,Zg.current=null,Gk(t,n),$T(n,t),_k(Mp),eh=!!Lp,Mp=Lp=null,t.current=n,Hk(n),SC(),he=a,ve=o,gn.transition=s}else t.current=n;if(ec&&(ec=!1,Zr=t,gh=i),s=t.pendingLanes,s===0&&(ai=null),RC(n.stateNode),Wt(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mh)throw mh=!1,t=rm,rm=null,t;return gh&1&&t.tag!==0&&wo(),s=t.pendingLanes,s&1?t===im?al++:(al=0,im=t):al=0,xi(),null}function wo(){if(Zr!==null){var t=RI(gh),e=gn.transition,n=ve;try{if(gn.transition=null,ve=16>t?16:t,Zr===null)var r=!1;else{if(t=Zr,Zr=null,gh=0,he&6)throw Error($(331));var i=he;for(he|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(W=c;W!==null;){var h=W;switch(h.tag){case 0:case 11:case 15:sl(8,h,s)}var f=h.child;if(f!==null)f.return=h,W=f;else for(;W!==null;){h=W;var p=h.sibling,g=h.return;if(jT(h),h===c){W=null;break}if(p!==null){p.return=g,W=p;break}W=g}}}var T=s.alternate;if(T!==null){var b=T.child;if(b!==null){T.child=null;do{var P=b.sibling;b.sibling=null,b=P}while(b!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sl(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,W=I;break e}W=s.return}}var _=t.current;for(W=_;W!==null;){o=W;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,W=E;else e:for(o=_;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rd(9,a)}}catch(M){je(a,a.return,M)}if(a===o){W=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,W=C;break e}W=a.return}}if(he=i,xi(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(Qh,t)}catch{}r=!0}return r}finally{ve=n,gn.transition=e}}return!1}function W0(t,e,n){e=ko(n,e),e=bT(t,e,1),t=oi(t,e,1),e=Dt(),t!==null&&(ru(t,1,e),Wt(t,e))}function je(t,e,n){if(t.tag===3)W0(t,t,n);else for(;e!==null;){if(e.tag===3){W0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ai===null||!ai.has(r))){t=ko(n,t),t=PT(e,t,1),e=oi(e,t,1),t=Dt(),e!==null&&(ru(e,1,t),Wt(e,t));break}}e=e.return}}function eN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,at===t&&(ht&n)===n&&(tt===4||tt===3&&(ht&130023424)===ht&&500>Ke()-ty?Xi(t,0):ey|=n),Wt(t,e)}function QT(t,e){e===0&&(t.mode&1?(e=qu,qu<<=1,!(qu&130023424)&&(qu=4194304)):e=1);var n=Dt();t=wr(t,e),t!==null&&(ru(t,e,n),Wt(t,n))}function tN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),QT(t,n)}function nN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),QT(t,n)}var YT;YT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qt.current)Bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Bt=!1,zk(t,e,n);Bt=!!(t.flags&131072)}else Bt=!1,Pe&&e.flags&1048576&&ZI(e,ah,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Sc(t,e),t=e.pendingProps;var i=Ro(e,Tt.current);_o(e,n),i=Hg(null,e,r,t,i,n);var s=Qg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(r)?(s=!0,sh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zg(e),i.updater=td,e.stateNode=i,i._reactInternals=e,Wp(e,r,t,n),e=Qp(null,e,r,!0,s,n)):(e.tag=0,Pe&&s&&Lg(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Sc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=iN(r),t=An(r,t),i){case 0:e=Hp(null,e,r,t,n);break e;case 1:e=L0(null,e,r,t,n);break e;case 11:e=O0(null,e,r,t,n);break e;case 14:e=V0(null,e,r,An(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),Hp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),L0(t,e,r,i,n);case 3:e:{if(DT(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,rT(t,e),ch(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ko(Error($(423)),e),e=M0(t,e,r,n,i);break e}else if(r!==i){i=ko(Error($(424)),e),e=M0(t,e,r,n,i);break e}else for(Jt=si(e.stateNode.containerInfo.firstChild),tn=e,Pe=!0,Rn=null,n=aT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bo(),r===i){e=Er(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return lT(e),t===null&&zp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Fp(r,i)?o=null:s!==null&&Fp(r,s)&&(e.flags|=32),NT(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&zp(e),null;case 13:return OT(t,e,n);case 4:return qg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Po(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),O0(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(lh,r._currentValue),r._currentValue=o,s!==null)if(Nn(s.value,o)){if(s.children===i.children&&!qt.current){e=Er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=pr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),qp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_o(e,n),i=vn(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=An(r,e.pendingProps),i=An(r.type,i),V0(t,e,r,i,n);case 15:return CT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),Sc(t,e),e.tag=1,Kt(r)?(t=!0,sh(e)):t=!1,_o(e,n),sT(e,r,i),Wp(e,r,i,n),Qp(null,e,r,!0,t,n);case 19:return VT(t,e,n);case 22:return kT(t,e,n)}throw Error($(156,e.tag))};function XT(t,e){return TI(t,e)}function rN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(t,e,n,r){return new rN(t,e,n,r)}function sy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iN(t){if(typeof t=="function")return sy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sg)return 11;if(t===Ag)return 14}return 2}function ui(t,e){var n=t.alternate;return n===null?(n=pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sy(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Js:return Ji(n.children,i,s,e);case Tg:o=8,i|=8;break;case gp:return t=pn(12,n,e,i|2),t.elementType=gp,t.lanes=s,t;case yp:return t=pn(13,n,e,i),t.elementType=yp,t.lanes=s,t;case vp:return t=pn(19,n,e,i),t.elementType=vp,t.lanes=s,t;case oI:return sd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iI:o=10;break e;case sI:o=9;break e;case Sg:o=11;break e;case Ag:o=14;break e;case Br:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=pn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ji(t,e,n,r){return t=pn(7,t,r,e),t.lanes=n,t}function sd(t,e,n,r){return t=pn(22,t,r,e),t.elementType=oI,t.lanes=n,t.stateNode={isHidden:!1},t}function Ff(t,e,n){return t=pn(6,t,null,e),t.lanes=n,t}function jf(t,e,n){return e=pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_f(0),this.expirationTimes=_f(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_f(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function oy(t,e,n,r,i,s,o,a,l){return t=new sN(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zg(s),t}function oN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function JT(t){if(!t)return gi;t=t._reactInternals;e:{if(xs(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(Kt(n))return XI(t,n,e)}return e}function ZT(t,e,n,r,i,s,o,a,l){return t=oy(n,r,!0,t,i,s,o,a,l),t.context=JT(null),n=t.current,r=Dt(),i=li(n),s=pr(r,i),s.callback=e??null,oi(n,s,i),t.current.lanes=i,ru(t,i,r),Wt(t,r),t}function od(t,e,n,r){var i=e.current,s=Dt(),o=li(i);return n=JT(n),e.context===null?e.context=n:e.pendingContext=n,e=pr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=oi(i,e,o),t!==null&&(Cn(t,i,o,s),Ec(t,i,o)),o}function vh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function G0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ay(t,e){G0(t,e),(t=t.alternate)&&G0(t,e)}function aN(){return null}var eS=typeof reportError=="function"?reportError:function(t){console.error(t)};function ly(t){this._internalRoot=t}ad.prototype.render=ly.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));od(t,e,null,null)};ad.prototype.unmount=ly.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cs(function(){od(null,t,null,null)}),e[_r]=null}};function ad(t){this._internalRoot=t}ad.prototype.unstable_scheduleHydration=function(t){if(t){var e=CI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qr.length&&e!==0&&e<qr[n].priority;n++);qr.splice(n,0,t),n===0&&NI(t)}};function uy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function H0(){}function lN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=vh(o);s.call(c)}}var o=ZT(e,r,t,0,null,!1,!1,"",H0);return t._reactRootContainer=o,t[_r]=o.current,xl(t.nodeType===8?t.parentNode:t),cs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=vh(l);a.call(c)}}var l=oy(t,0,!1,null,null,!1,!1,"",H0);return t._reactRootContainer=l,t[_r]=l.current,xl(t.nodeType===8?t.parentNode:t),cs(function(){od(e,l,n,r)}),l}function ud(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=vh(o);a.call(l)}}od(e,o,t,i)}else o=lN(n,e,t,i,r);return vh(o)}bI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ja(e.pendingLanes);n!==0&&(bg(e,n|1),Wt(e,Ke()),!(he&6)&&(No=Ke()+500,xi()))}break;case 13:cs(function(){var r=wr(t,1);if(r!==null){var i=Dt();Cn(r,t,1,i)}}),ay(t,1)}};Pg=function(t){if(t.tag===13){var e=wr(t,134217728);if(e!==null){var n=Dt();Cn(e,t,134217728,n)}ay(t,134217728)}};PI=function(t){if(t.tag===13){var e=li(t),n=wr(t,e);if(n!==null){var r=Dt();Cn(n,t,e,r)}ay(t,e)}};CI=function(){return ve};kI=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};bp=function(t,e,n){switch(e){case"input":if(Ep(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zh(r);if(!i)throw Error($(90));lI(r),Ep(r,i)}}}break;case"textarea":cI(t,n);break;case"select":e=n.value,e!=null&&mo(t,!!n.multiple,e,!1)}};yI=ny;vI=cs;var uN={usingClientEntryPoint:!1,Events:[su,no,Zh,mI,gI,ny]},Pa={findFiberByHostInstance:Gi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},cN={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=EI(t),t===null?null:t.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||aN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{Qh=tc.inject(cN),Wn=tc}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uN;an.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uy(e))throw Error($(200));return oN(t,e,null,n)};an.createRoot=function(t,e){if(!uy(t))throw Error($(299));var n=!1,r="",i=eS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=oy(t,1,!1,null,null,n,!1,r,i),t[_r]=e.current,xl(t.nodeType===8?t.parentNode:t),new ly(e)};an.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=EI(e),t=t===null?null:t.stateNode,t};an.flushSync=function(t){return cs(t)};an.hydrate=function(t,e,n){if(!ld(e))throw Error($(200));return ud(null,t,e,!0,n)};an.hydrateRoot=function(t,e,n){if(!uy(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=eS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ZT(e,null,t,1,n??null,i,!1,s,o),t[_r]=e.current,xl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ad(e)};an.render=function(t,e,n){if(!ld(e))throw Error($(200));return ud(null,t,e,!1,n)};an.unmountComponentAtNode=function(t){if(!ld(t))throw Error($(40));return t._reactRootContainer?(cs(function(){ud(null,null,t,!1,function(){t._reactRootContainer=null,t[_r]=null})}),!0):!1};an.unstable_batchedUpdates=ny;an.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ld(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return ud(t,e,n,!1,r)};an.version="18.2.0-next-9e3b772b8-20220608";function tS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tS)}catch(t){console.error(t)}}tS(),Z1.exports=an;var nS=Z1.exports;const uo=Gh(nS);var Q0=nS;pp.createRoot=Q0.createRoot,pp.hydrateRoot=Q0.hydrateRoot;var rS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(rS);var hN=rS.exports;const We=Gh(hN),dN=["xxl","xl","lg","md","sm","xs"],fN="xs",cy=V.createContext({prefixes:{},breakpoints:dN,minBreakpoint:fN});function St(t,e){const{prefixes:n}=V.useContext(cy);return t||n[e]||e}function iS(){const{breakpoints:t}=V.useContext(cy);return t}function sS(){const{minBreakpoint:t}=V.useContext(cy);return t}const hy=V.forwardRef(({bsPrefix:t,fluid:e=!1,as:n="div",className:r,...i},s)=>{const o=St(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return A.jsx(n,{ref:s,...i,className:We(r,e?`${o}${a}`:o)})});hy.displayName="Container";var Y0={exports:{}},am={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){function i(o,a,l,c,h,f){var p=c||"<<anonymous>>",g=f||l;if(a[l]==null)return o?new Error("Required "+h+" `"+g+"` was not specified "+("in `"+p+"`.")):null;for(var T=arguments.length,b=Array(T>6?T-6:0),P=6;P<T;P++)b[P-6]=arguments[P];return r.apply(void 0,[a,l,p,h,g].concat(b))}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}t.exports=e.default})(am,am.exports);var pN=am.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=pN,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];function c(){for(var h=arguments.length,f=Array(h),p=0;p<h;p++)f[p]=arguments[p];var g=null;return a.forEach(function(T){if(g==null){var b=T.apply(void 0,f);b!=null&&(g=b)}}),g}return(0,r.default)(c)}t.exports=e.default})(Y0,Y0.exports);function lm(){return lm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},lm.apply(null,arguments)}function oS(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function X0(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function mN(t){var e=gN(t,"string");return typeof e=="symbol"?e:String(e)}function gN(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function yN(t,e,n){var r=V.useRef(t!==void 0),i=V.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,V.useCallback(function(c){for(var h=arguments.length,f=new Array(h>1?h-1:0),p=1;p<h;p++)f[p-1]=arguments[p];n&&n.apply(void 0,[c].concat(f)),o(c)},[n])]}function aS(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[X0(r)],a=s[r],l=oS(s,[X0(r),r].map(mN)),c=e[r],h=yN(a,o,t[c]),f=h[0],p=h[1];return lm({},l,(i={},i[r]=f,i[c]=p,i))},t)}function um(t,e){return um=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},um(t,e)}function vN(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,um(t,e)}var _N=Function.prototype.bind.call(Function.prototype.call,[].slice);function ji(t,e){return _N(t.querySelectorAll(e))}function wN(){const[,t]=V.useReducer(e=>!e,!1);return t}const J0=t=>!t||typeof t=="function"?t:e=>{t.current=e};function EN(t,e){const n=J0(t),r=J0(e);return i=>{n&&n(i),r&&r(i)}}function au(t,e){return V.useMemo(()=>EN(t,e),[t,e])}const dy=V.createContext(null);dy.displayName="NavContext";const _h=V.createContext(null),fy=(t,e=null)=>t!=null?String(t):e||null,lS=V.createContext(null),IN="data-rr-ui-",TN="rrUi";function cd(t){return`${IN}${t}`}function SN(t){return`${TN}${t}`}function AN(t){const e=V.useRef(t);return V.useEffect(()=>{e.current=t},[t]),e}function fn(t){const e=AN(t);return V.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const xN=["as","disabled"];function RN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function bN(t){return!t||t.trim()==="#"}function uS({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const c={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},c];const h=p=>{if((e||t==="a"&&bN(n))&&p.preventDefault(),e){p.stopPropagation();return}o==null||o(p)},f=p=>{p.key===" "&&(p.preventDefault(),h(p))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:h,onKeyDown:f},c]}const cS=V.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=RN(t,xN);const[s,{tagName:o}]=uS(Object.assign({tagName:n,disabled:r},i));return A.jsx(o,Object.assign({},i,s,{ref:e}))});cS.displayName="Button";const PN=["as","active","eventKey"];function CN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function hS({key:t,onClick:e,active:n,id:r,role:i,disabled:s}){const o=V.useContext(_h),a=V.useContext(dy),l=V.useContext(lS);let c=n;const h={role:i};if(a){!i&&a.role==="tablist"&&(h.role="tab");const f=a.getControllerId(t??null),p=a.getControlledId(t??null);h[cd("event-key")]=t,h.id=f||r,c=n==null&&t!=null?a.activeKey===t:n,(c||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(h["aria-controls"]=p)}return h.role==="tab"&&(h["aria-selected"]=c,c||(h.tabIndex=-1),s&&(h.tabIndex=-1,h["aria-disabled"]=!0)),h.onClick=fn(f=>{s||(e==null||e(f),t!=null&&o&&!f.isPropagationStopped()&&o(t,f))}),[h,{isActive:c}]}const dS=V.forwardRef((t,e)=>{let{as:n=cS,active:r,eventKey:i}=t,s=CN(t,PN);const[o,a]=hS(Object.assign({key:fy(i,s.href),active:r},s));return o[cd("active")]=a.isActive,A.jsx(n,Object.assign({},s,o,{ref:e}))});dS.displayName="NavItem";const kN=["as","onSelect","activeKey","role","onKeyDown"];function NN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const Z0=()=>{},ew=cd("event-key"),fS=V.forwardRef((t,e)=>{let{as:n="div",onSelect:r,activeKey:i,role:s,onKeyDown:o}=t,a=NN(t,kN);const l=wN(),c=V.useRef(!1),h=V.useContext(_h),f=V.useContext(lS);let p,g;f&&(s=s||"tablist",i=f.activeKey,p=f.getControlledId,g=f.getControllerId);const T=V.useRef(null),b=E=>{const C=T.current;if(!C)return null;const M=ji(C,`[${ew}]:not([aria-disabled=true])`),D=C.querySelector("[aria-selected=true]");if(!D||D!==document.activeElement)return null;const w=M.indexOf(D);if(w===-1)return null;let v=w+E;return v>=M.length&&(v=0),v<0&&(v=M.length-1),M[v]},P=(E,C)=>{E!=null&&(r==null||r(E,C),h==null||h(E,C))},I=E=>{if(o==null||o(E),!f)return;let C;switch(E.key){case"ArrowLeft":case"ArrowUp":C=b(-1);break;case"ArrowRight":case"ArrowDown":C=b(1);break;default:return}C&&(E.preventDefault(),P(C.dataset[SN("EventKey")]||null,E),c.current=!0,l())};V.useEffect(()=>{if(T.current&&c.current){const E=T.current.querySelector(`[${ew}][aria-selected=true]`);E==null||E.focus()}c.current=!1});const _=au(e,T);return A.jsx(_h.Provider,{value:P,children:A.jsx(dy.Provider,{value:{role:s,activeKey:fy(i),getControlledId:p||Z0,getControllerId:g||Z0},children:A.jsx(n,Object.assign({},a,{onKeyDown:I,ref:_,role:s}))})})});fS.displayName="Nav";const DN=Object.assign(fS,{Item:dS}),Rs=V.createContext(null);Rs.displayName="NavbarContext";const pS=V.createContext(null);pS.displayName="CardHeaderContext";const mS=V.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=St(e,"nav-item"),A.jsx(n,{ref:i,className:We(t,e),...r})));mS.displayName="NavItem";function ON(){const t=V.useRef(!0),e=V.useRef(()=>t.current);return V.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function VN(t){const e=V.useRef(null);return V.useEffect(()=>{e.current=t}),e.current}const LN=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",MN=typeof document<"u",cm=MN||LN?V.useLayoutEffect:V.useEffect,FN=["onKeyDown"];function jN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function UN(t){return!t||t.trim()==="#"}const gS=V.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=jN(t,FN);const[i]=uS(Object.assign({tagName:"a"},r)),s=fn(o=>{i.onKeyDown(o),n==null||n(o)});return UN(r.href)||r.role==="button"?A.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):A.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});gS.displayName="Anchor";const yS=V.forwardRef(({bsPrefix:t,className:e,as:n=gS,active:r,eventKey:i,disabled:s=!1,...o},a)=>{t=St(t,"nav-link");const[l,c]=hS({key:fy(i,o.href),active:r,disabled:s,...o});return A.jsx(n,{...o,...l,ref:a,disabled:s,className:We(e,t,s&&"disabled",c.isActive&&"active")})});yS.displayName="NavLink";const vS=V.forwardRef((t,e)=>{const{as:n="div",bsPrefix:r,variant:i,fill:s=!1,justify:o=!1,navbar:a,navbarScroll:l,className:c,activeKey:h,...f}=aS(t,{activeKey:"onSelect"}),p=St(r,"nav");let g,T,b=!1;const P=V.useContext(Rs),I=V.useContext(pS);return P?(g=P.bsPrefix,b=a??!0):I&&({cardHeaderBsPrefix:T}=I),A.jsx(DN,{as:n,ref:e,activeKey:h,className:We(c,{[p]:!b,[`${g}-nav`]:b,[`${g}-nav-scroll`]:b&&l,[`${T}-${i}`]:!!T,[`${p}-${i}`]:!!i,[`${p}-fill`]:s,[`${p}-justified`]:o}),...f})});vS.displayName="Nav";const Vn=Object.assign(vS,{Item:mS,Link:yS}),_S=V.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=St(t,"navbar-brand");const s=n||(r.href?"a":"span");return A.jsx(s,{...r,ref:i,className:We(e,t)})});_S.displayName="NavbarBrand";function py(t){return t&&t.ownerDocument||document}function BN(t){var e=py(t);return e&&e.defaultView||window}function $N(t,e){return BN(t).getComputedStyle(t,e)}var zN=/([A-Z])/g;function qN(t){return t.replace(zN,"-$1").toLowerCase()}var KN=/^ms-/;function nc(t){return qN(t).replace(KN,"-ms-")}var WN=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function GN(t){return!!(t&&WN.test(t))}function mr(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(nc(e))||$N(t).getPropertyValue(nc(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(nc(i)):GN(i)?r+=i+"("+s+") ":n+=nc(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var wS={exports:{}},HN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",QN=HN,YN=QN;function ES(){}function IS(){}IS.resetWarningCache=ES;var XN=function(){function t(r,i,s,o,a,l){if(l!==YN){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:IS,resetWarningCache:ES};return n.PropTypes=n,n};wS.exports=XN();var JN=wS.exports;const Z=Gh(JN),tw={disabled:!1},TS=Ce.createContext(null);var ZN=function(e){return e.scrollTop},Ba="unmounted",zr="exited",bn="entering",or="entered",Vl="exiting",br=function(t){vN(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=zr,s.appearStatus=bn):l=or:r.unmountOnExit||r.mountOnEnter?l=Ba:l=zr,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Ba?{status:zr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==bn&&o!==or&&(s=bn):(o===bn||o===or)&&(s=Vl)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===bn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:uo.findDOMNode(this);o&&ZN(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===zr&&this.setState({status:Ba})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[uo.findDOMNode(this),a],c=l[0],h=l[1],f=this.getTimeouts(),p=a?f.appear:f.enter;if(!i&&!o||tw.disabled){this.safeSetState({status:or},function(){s.props.onEntered(c)});return}this.props.onEnter(c,h),this.safeSetState({status:bn},function(){s.props.onEntering(c,h),s.onTransitionEnd(p,function(){s.safeSetState({status:or},function(){s.props.onEntered(c,h)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:uo.findDOMNode(this);if(!s||tw.disabled){this.safeSetState({status:zr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Vl},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:zr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:uo.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=l[0],h=l[1];this.props.addEndListener(c,h)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Ba)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=oS(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ce.createElement(TS.Provider,{value:null},typeof o=="function"?o(i,a):Ce.cloneElement(Ce.Children.only(o),a))},e}(Ce.Component);br.contextType=TS;br.propTypes={};function js(){}br.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:js,onEntering:js,onEntered:js,onExit:js,onExiting:js,onExited:js};br.UNMOUNTED=Ba;br.EXITED=zr;br.ENTERING=bn;br.ENTERED=or;br.EXITING=Vl;const hd=!!(typeof window<"u"&&window.document&&window.document.createElement);var hm=!1,dm=!1;try{var Uf={get passive(){return hm=!0},get once(){return dm=hm=!0}};hd&&(window.addEventListener("test",Uf,Uf),window.removeEventListener("test",Uf,!0))}catch{}function e2(t,e,n,r){if(r&&typeof r!="boolean"&&!dm){var i=r.once,s=r.capture,o=n;!dm&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,hm?r:s)}t.addEventListener(e,n,r)}function t2(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function wh(t,e,n,r){return e2(t,e,n,r),function(){t2(t,e,n,r)}}function n2(t,e,n,r){if(r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function r2(t){var e=mr(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function i2(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||n2(t,"transitionend",!0)},e+n),s=wh(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function s2(t,e,n,r){n==null&&(n=r2(t)||0);var i=i2(t,n,r),s=wh(t,"transitionend",e);return function(){i(),s()}}function nw(t,e){const n=mr(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function my(t,e){const n=nw(t,"transitionDuration"),r=nw(t,"transitionDelay"),i=s2(t,s=>{s.target===t&&(i(),e(s))},n+r)}function Ca(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}function SS(t){t.offsetHeight}function o2(t){return t&&"setState"in t?uo.findDOMNode(t):t??null}const gy=Ce.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...c},h)=>{const f=V.useRef(null),p=au(f,l),g=D=>{p(o2(D))},T=D=>w=>{D&&f.current&&D(f.current,w)},b=V.useCallback(T(t),[t]),P=V.useCallback(T(e),[e]),I=V.useCallback(T(n),[n]),_=V.useCallback(T(r),[r]),E=V.useCallback(T(i),[i]),C=V.useCallback(T(s),[s]),M=V.useCallback(T(o),[o]);return A.jsx(br,{ref:h,...c,onEnter:b,onEntered:I,onEntering:P,onExit:_,onExited:C,onExiting:E,addEndListener:M,nodeRef:f,children:typeof a=="function"?(D,w)=>a(D,{...w,ref:g}):Ce.cloneElement(a,{ref:g})})}),a2={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function l2(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=a2[t];return r+parseInt(mr(e,i[0]),10)+parseInt(mr(e,i[1]),10)}const u2={[zr]:"collapse",[Vl]:"collapsing",[bn]:"collapsing",[or]:"collapse show"},c2=Ce.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",in:l=!1,timeout:c=300,mountOnEnter:h=!1,unmountOnExit:f=!1,appear:p=!1,getDimensionValue:g=l2,...T},b)=>{const P=typeof a=="function"?a():a,I=V.useMemo(()=>Ca(D=>{D.style[P]="0"},t),[P,t]),_=V.useMemo(()=>Ca(D=>{const w=`scroll${P[0].toUpperCase()}${P.slice(1)}`;D.style[P]=`${D[w]}px`},e),[P,e]),E=V.useMemo(()=>Ca(D=>{D.style[P]=null},n),[P,n]),C=V.useMemo(()=>Ca(D=>{D.style[P]=`${g(P,D)}px`,SS(D)},r),[r,g,P]),M=V.useMemo(()=>Ca(D=>{D.style[P]=null},i),[P,i]);return A.jsx(gy,{ref:b,addEndListener:my,...T,"aria-expanded":T.role?l:null,onEnter:I,onEntering:_,onEntered:E,onExit:C,onExiting:M,childRef:o.ref,in:l,timeout:c,mountOnEnter:h,unmountOnExit:f,appear:p,children:(D,w)=>Ce.cloneElement(o,{...w,className:We(s,o.props.className,u2[D],P==="width"&&"collapse-horizontal")})})}),AS=V.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=St(e,"navbar-collapse");const i=V.useContext(Rs);return A.jsx(c2,{in:!!(i&&i.expanded),...n,children:A.jsx("div",{ref:r,className:e,children:t})})});AS.displayName="NavbarCollapse";const xS=V.forwardRef(({bsPrefix:t,className:e,children:n,label:r="Toggle navigation",as:i="button",onClick:s,...o},a)=>{t=St(t,"navbar-toggler");const{onToggle:l,expanded:c}=V.useContext(Rs)||{},h=fn(f=>{s&&s(f),l&&l()});return i==="button"&&(o.type="button"),A.jsx(i,{...o,ref:a,onClick:h,"aria-label":r,className:We(e,t,!c&&"collapsed"),children:n||A.jsx("span",{className:`${t}-icon`})})});xS.displayName="NavbarToggle";const fm=new WeakMap,rw=(t,e)=>{if(!t||!e)return;const n=fm.get(e)||new Map;fm.set(e,n);let r=n.get(t);return r||(r=e.matchMedia(t),r.refCount=0,n.set(r.media,r)),r};function h2(t,e=typeof window>"u"?void 0:window){const n=rw(t,e),[r,i]=V.useState(()=>n?n.matches:!1);return cm(()=>{let s=rw(t,e);if(!s)return i(!1);let o=fm.get(e);const a=()=>{i(s.matches)};return s.refCount++,s.addListener(a),a(),()=>{s.removeListener(a),s.refCount--,s.refCount<=0&&(o==null||o.delete(s.media)),s=void 0}},[t]),r}function d2(t){const e=Object.keys(t);function n(a,l){return a===l?l:a?`${a} and ${l}`:l}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){const l=r(a);let c=t[l];return typeof c=="number"?c=`${c-.2}px`:c=`calc(${c} - 0.2px)`,`(max-width: ${c})`}function s(a){let l=t[a];return typeof l=="number"&&(l=`${l}px`),`(min-width: ${l})`}function o(a,l,c){let h;typeof a=="object"?(h=a,c=l,l=!0):(l=l||!0,h={[a]:l});let f=V.useMemo(()=>Object.entries(h).reduce((p,[g,T])=>((T==="up"||T===!0)&&(p=n(p,s(g))),(T==="down"||T===!0)&&(p=n(p,i(g))),p),""),[JSON.stringify(h)]);return h2(f,c)}return o}const f2=d2({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function Bf(t){t===void 0&&(t=py());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function iw(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function p2(t){const e=V.useRef(t);return e.current=t,e}function m2(t){const e=p2(t);V.useEffect(()=>()=>e.current(),[])}function g2(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const sw=cd("modal-open");class yy{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return g2(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(mr(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(sw,""),mr(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(sw),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const RS=V.createContext(hd?window:void 0);RS.Provider;function vy(){return V.useContext(RS)}const $f=(t,e)=>hd?t==null?(e||py()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function y2(t,e){const n=vy(),[r,i]=V.useState(()=>$f(t,n==null?void 0:n.document));if(!r){const s=$f(t);s&&i(s)}return V.useEffect(()=>{},[e,r]),V.useEffect(()=>{const s=$f(t);s!==r&&i(s)},[t,r]),r}function v2({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=V.useRef(null),o=V.useRef(e),a=fn(n);V.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const l=au(s,t.ref),c=V.cloneElement(t,{ref:l});return e?c:i||!o.current&&r?null:c}function _2(t){return t.code==="Escape"||t.keyCode===27}function w2(){const t=V.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const E2=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function I2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function T2(t){let{onEnter:e,onEntering:n,onEntered:r,onExit:i,onExiting:s,onExited:o,addEndListener:a,children:l}=t,c=I2(t,E2);const{major:h}=w2(),f=h>=19?l.props.ref:l.ref,p=V.useRef(null),g=au(p,typeof l=="function"?null:f),T=D=>w=>{D&&p.current&&D(p.current,w)},b=V.useCallback(T(e),[e]),P=V.useCallback(T(n),[n]),I=V.useCallback(T(r),[r]),_=V.useCallback(T(i),[i]),E=V.useCallback(T(s),[s]),C=V.useCallback(T(o),[o]),M=V.useCallback(T(a),[a]);return Object.assign({},c,{nodeRef:p},e&&{onEnter:b},n&&{onEntering:P},r&&{onEntered:I},i&&{onExit:_},s&&{onExiting:E},o&&{onExited:C},a&&{addEndListener:M},{children:typeof l=="function"?(D,w)=>l(D,Object.assign({},w,{ref:g})):V.cloneElement(l,{ref:g})})}const S2=["component"];function A2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const x2=V.forwardRef((t,e)=>{let{component:n}=t,r=A2(t,S2);const i=T2(r);return A.jsx(n,Object.assign({ref:e},i))});function R2({in:t,onTransition:e}){const n=V.useRef(null),r=V.useRef(!0),i=fn(e);return cm(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),cm(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function b2({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=V.useState(!e);e&&s&&o(!1);const a=R2({in:!!e,onTransition:c=>{const h=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(o(!0),n==null||n(c.element)))};Promise.resolve(i(c)).then(h,f=>{throw c.in||o(!0),f})}}),l=au(a,t.ref);return s&&!e?null:V.cloneElement(t,{ref:l})}function ow(t,e,n){return t?A.jsx(x2,Object.assign({},n,{component:t})):e?A.jsx(b2,Object.assign({},n,{transition:e})):A.jsx(v2,Object.assign({},n))}const P2=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function C2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let zf;function k2(t){return zf||(zf=new yy({ownerDocument:t==null?void 0:t.document})),zf}function N2(t){const e=vy(),n=t||k2(e),r=V.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:V.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:V.useCallback(i=>{r.current.backdrop=i},[])})}const bS=V.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:c,onEscapeKeyDown:h,transition:f,runTransition:p,backdropTransition:g,runBackdropTransition:T,autoFocus:b=!0,enforceFocus:P=!0,restoreFocus:I=!0,restoreFocusOptions:_,renderDialog:E,renderBackdrop:C=Ie=>A.jsx("div",Object.assign({},Ie)),manager:M,container:D,onShow:w,onHide:v=()=>{},onExit:S,onExited:R,onExiting:k,onEnter:N,onEntering:x,onEntered:Je}=t,Ft=C2(t,P2);const ft=vy(),ze=y2(D),B=N2(M),Q=ON(),J=VN(n),[ue,re]=V.useState(!n),fe=V.useRef(null);V.useImperativeHandle(e,()=>B,[B]),hd&&!J&&n&&(fe.current=Bf(ft==null?void 0:ft.document)),n&&ue&&re(!1);const Ze=fn(()=>{if(B.add(),cn.current=wh(document,"keydown",er),Ht.current=wh(document,"focus",()=>setTimeout(qe),!0),w&&w(),b){var Ie,aa;const la=Bf((Ie=(aa=B.dialog)==null?void 0:aa.ownerDocument)!=null?Ie:ft==null?void 0:ft.document);B.dialog&&la&&!iw(B.dialog,la)&&(fe.current=la,B.dialog.focus())}}),ge=fn(()=>{if(B.remove(),cn.current==null||cn.current(),Ht.current==null||Ht.current(),I){var Ie;(Ie=fe.current)==null||Ie.focus==null||Ie.focus(_),fe.current=null}});V.useEffect(()=>{!n||!ze||Ze()},[n,ze,Ze]),V.useEffect(()=>{ue&&ge()},[ue,ge]),m2(()=>{ge()});const qe=fn(()=>{if(!P||!Q()||!B.isTopModal())return;const Ie=Bf(ft==null?void 0:ft.document);B.dialog&&Ie&&!iw(B.dialog,Ie)&&B.dialog.focus()}),pt=fn(Ie=>{Ie.target===Ie.currentTarget&&(c==null||c(Ie),a===!0&&v())}),er=fn(Ie=>{l&&_2(Ie)&&B.isTopModal()&&(h==null||h(Ie),Ie.defaultPrevented||v())}),Ht=V.useRef(),cn=V.useRef(),En=(...Ie)=>{re(!0),R==null||R(...Ie)};if(!ze)return null;const At=Object.assign({role:r,ref:B.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},Ft,{style:s,className:i,tabIndex:-1});let ki=E?E(At):A.jsx("div",Object.assign({},At,{children:V.cloneElement(o,{role:"document"})}));ki=ow(f,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:S,onExiting:k,onExited:En,onEnter:N,onEntering:x,onEntered:Je,children:ki});let kr=null;return a&&(kr=C({ref:B.setBackdropRef,onClick:pt}),kr=ow(g,T,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:kr})),A.jsx(A.Fragment,{children:uo.createPortal(A.jsxs(A.Fragment,{children:[kr,ki]}),ze)})});bS.displayName="Modal";const D2=Object.assign(bS,{Manager:yy}),O2={[bn]:"show",[or]:"show"},PS=V.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=V.useCallback((l,c)=>{SS(l),r==null||r(l,c)},[r]);return A.jsx(gy,{ref:s,addEndListener:my,...o,onEnter:a,childRef:e.ref,children:(l,c)=>V.cloneElement(e,{...c,className:We("fade",t,e.props.className,O2[l],n[l])})})});PS.displayName="Fade";const CS=V.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=St(e,"offcanvas-body"),A.jsx(n,{ref:i,className:We(t,e),...r})));CS.displayName="OffcanvasBody";const V2={[bn]:"show",[or]:"show"},kS=V.forwardRef(({bsPrefix:t,className:e,children:n,in:r=!1,mountOnEnter:i=!1,unmountOnExit:s=!1,appear:o=!1,...a},l)=>(t=St(t,"offcanvas"),A.jsx(gy,{ref:l,addEndListener:my,in:r,mountOnEnter:i,unmountOnExit:s,appear:o,...a,childRef:n.ref,children:(c,h)=>V.cloneElement(n,{...h,className:We(e,n.props.className,(c===bn||c===Vl)&&`${t}-toggling`,V2[c])})})));kS.displayName="OffcanvasToggling";const NS=V.createContext({onHide(){}}),L2={"aria-label":Z.string,onClick:Z.func,variant:Z.oneOf(["white"])},_y=V.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>A.jsx("button",{ref:i,type:"button",className:We("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));_y.displayName="CloseButton";_y.propTypes=L2;const M2=V.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const a=V.useContext(NS),l=fn(()=>{a==null||a.onHide(),r==null||r()});return A.jsxs("div",{ref:o,...s,children:[i,n&&A.jsx(_y,{"aria-label":t,variant:e,onClick:l})]})}),DS=V.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=St(t,"offcanvas-header"),A.jsx(M2,{ref:s,...i,className:We(e,t),closeLabel:n,closeButton:r})));DS.displayName="OffcanvasHeader";const F2=t=>V.forwardRef((e,n)=>A.jsx("div",{...e,ref:n,className:We(e.className,t)})),j2=F2("h5"),OS=V.forwardRef(({className:t,bsPrefix:e,as:n=j2,...r},i)=>(e=St(e,"offcanvas-title"),A.jsx(n,{ref:i,className:We(t,e),...r})));OS.displayName="OffcanvasTitle";function U2(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function B2(t,e){t.classList?t.classList.add(e):U2(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function aw(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function $2(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=aw(t.className,e):t.setAttribute("class",aw(t.className&&t.className.baseVal||"",e))}const Us={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class VS extends yy{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,mr(n,{[e]:`${parseFloat(mr(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],mr(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(B2(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";ji(n,Us.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),ji(n,Us.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),ji(n,Us.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();$2(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";ji(n,Us.FIXED_CONTENT).forEach(s=>this.restore(r,s)),ji(n,Us.STICKY_CONTENT).forEach(s=>this.restore(i,s)),ji(n,Us.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let qf;function z2(t){return qf||(qf=new VS(t)),qf}function q2(t){return A.jsx(kS,{...t})}function K2(t){return A.jsx(PS,{...t})}const LS=V.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i="start",responsive:s,show:o=!1,backdrop:a=!0,keyboard:l=!0,scroll:c=!1,onEscapeKeyDown:h,onShow:f,onHide:p,container:g,autoFocus:T=!0,enforceFocus:b=!0,restoreFocus:P=!0,restoreFocusOptions:I,onEntered:_,onExit:E,onExiting:C,onEnter:M,onEntering:D,onExited:w,backdropClassName:v,manager:S,renderStaticNode:R=!1,...k},N)=>{const x=V.useRef();t=St(t,"offcanvas");const{onToggle:Je}=V.useContext(Rs)||{},[Ft,ft]=V.useState(!1),ze=f2(s||"xs","up");V.useEffect(()=>{ft(s?o&&!ze:o)},[o,s,ze]);const B=fn(()=>{Je==null||Je(),p==null||p()}),Q=V.useMemo(()=>({onHide:B}),[B]);function J(){return S||(c?(x.current||(x.current=new VS({handleContainerOverflow:!1})),x.current):z2())}const ue=(ge,...qe)=>{ge&&(ge.style.visibility="visible"),M==null||M(ge,...qe)},re=(ge,...qe)=>{ge&&(ge.style.visibility=""),w==null||w(...qe)},fe=V.useCallback(ge=>A.jsx("div",{...ge,className:We(`${t}-backdrop`,v)}),[v,t]),Ze=ge=>A.jsx("div",{...ge,...k,className:We(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return A.jsxs(A.Fragment,{children:[!Ft&&(s||R)&&Ze({}),A.jsx(NS.Provider,{value:Q,children:A.jsx(D2,{show:Ft,ref:N,backdrop:a,container:g,keyboard:l,autoFocus:T,enforceFocus:b&&!c,restoreFocus:P,restoreFocusOptions:I,onEscapeKeyDown:h,onShow:f,onHide:B,onEnter:ue,onEntering:D,onEntered:_,onExit:E,onExiting:C,onExited:re,manager:J(),transition:q2,backdropTransition:K2,renderBackdrop:fe,renderDialog:Ze})})]})});LS.displayName="Offcanvas";const W2=Object.assign(LS,{Body:CS,Header:DS,Title:OS}),MS=V.forwardRef((t,e)=>{const n=V.useContext(Rs);return A.jsx(W2,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});MS.displayName="NavbarOffcanvas";const FS=V.forwardRef(({className:t,bsPrefix:e,as:n="span",...r},i)=>(e=St(e,"navbar-text"),A.jsx(n,{ref:i,className:We(t,e),...r})));FS.displayName="NavbarText";const jS=V.forwardRef((t,e)=>{const{bsPrefix:n,expand:r=!0,variant:i="light",bg:s,fixed:o,sticky:a,className:l,as:c="nav",expanded:h,onToggle:f,onSelect:p,collapseOnSelect:g=!1,...T}=aS(t,{expanded:"onToggle"}),b=St(n,"navbar"),P=V.useCallback((...E)=>{p==null||p(...E),g&&h&&(f==null||f(!1))},[p,g,h,f]);T.role===void 0&&c!=="nav"&&(T.role="navigation");let I=`${b}-expand`;typeof r=="string"&&(I=`${I}-${r}`);const _=V.useMemo(()=>({onToggle:()=>f==null?void 0:f(!h),bsPrefix:b,expanded:!!h,expand:r}),[b,h,r,f]);return A.jsx(Rs.Provider,{value:_,children:A.jsx(_h.Provider,{value:P,children:A.jsx(c,{ref:e,...T,className:We(l,b,r&&I,i&&`${b}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});jS.displayName="Navbar";const rc=Object.assign(jS,{Brand:_S,Collapse:AS,Offcanvas:MS,Text:FS,Toggle:xS});var lw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},G2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},BS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(US(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):G2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new H2;const p=s<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class H2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Q2=function(t){const e=US(t);return BS.encodeByteArray(e,!0)},Eh=function(t){return Q2(t).replace(/\./g,"")},$S=function(t){try{return BS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=()=>Y2().__FIREBASE_DEFAULTS__,J2=()=>{if(typeof process>"u"||typeof lw>"u")return;const t=lw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Z2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$S(t[1]);return e&&JSON.parse(e)},dd=()=>{try{return X2()||J2()||Z2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zS=t=>{var e,n;return(n=(e=dd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eD=t=>{const e=zS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qS=()=>{var t;return(t=dd())===null||t===void 0?void 0:t.config},KS=t=>{var e;return(e=dd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Eh(JSON.stringify(n)),Eh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function iD(){var t;const e=(t=dd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lD(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WS(){return!iD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function GS(){try{return typeof indexedDB=="object"}catch{return!1}}function uD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD="FirebaseError";class Zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cD,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lu.prototype.create)}}class lu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zn(i,a,r)}}function hD(t,e){return t.replace(dD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dD=/\{\$([^}]+)}/g;function fD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ll(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(uw(s)&&uw(o)){if(!Ll(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function uw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $a(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function za(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function pD(t,e){const n=new mD(t,e);return n.subscribe.bind(n)}class mD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kf),i.error===void 0&&(i.error=Kf),i.complete===void 0&&(i.complete=Kf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return t&&t._delegate?t._delegate:t}class yi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_D(e))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ui){return this.instances.has(e)}getOptions(e=Ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ui){return this.component?this.component.multipleInstances?e:Ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vD(t){return t===Ui?void 0:t}function _D(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const ED={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},ID=oe.INFO,TD={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},SD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=TD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wy{constructor(e){this.name=e,this._logLevel=ID,this._logHandler=SD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ED[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const AD=(t,e)=>e.some(n=>t instanceof n);let cw,hw;function xD(){return cw||(cw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RD(){return hw||(hw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const HS=new WeakMap,pm=new WeakMap,QS=new WeakMap,Wf=new WeakMap,Ey=new WeakMap;function bD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ci(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&HS.set(n,t)}).catch(()=>{}),Ey.set(e,t),e}function PD(t){if(pm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});pm.set(t,e)}let mm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||QS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ci(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CD(t){mm=t(mm)}function kD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gf(this),e,...n);return QS.set(r,e.sort?e.sort():[e]),ci(r)}:RD().includes(t)?function(...e){return t.apply(Gf(this),e),ci(HS.get(this))}:function(...e){return ci(t.apply(Gf(this),e))}}function ND(t){return typeof t=="function"?kD(t):(t instanceof IDBTransaction&&PD(t),AD(t,xD())?new Proxy(t,mm):t)}function ci(t){if(t instanceof IDBRequest)return bD(t);if(Wf.has(t))return Wf.get(t);const e=ND(t);return e!==t&&(Wf.set(t,e),Ey.set(e,t)),e}const Gf=t=>Ey.get(t);function DD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ci(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ci(o.result),l.oldVersion,l.newVersion,ci(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const OD=["get","getKey","getAll","getAllKeys","count"],VD=["put","add","delete","clear"],Hf=new Map;function dw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hf.get(e))return Hf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=VD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||OD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Hf.set(e,s),s}CD(t=>({...t,get:(e,n,r)=>dw(e,n)||t.get(e,n,r),has:(e,n)=>!!dw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gm="@firebase/app",fw="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new wy("@firebase/app"),FD="@firebase/app-compat",jD="@firebase/analytics-compat",UD="@firebase/analytics",BD="@firebase/app-check-compat",$D="@firebase/app-check",zD="@firebase/auth",qD="@firebase/auth-compat",KD="@firebase/database",WD="@firebase/data-connect",GD="@firebase/database-compat",HD="@firebase/functions",QD="@firebase/functions-compat",YD="@firebase/installations",XD="@firebase/installations-compat",JD="@firebase/messaging",ZD="@firebase/messaging-compat",eO="@firebase/performance",tO="@firebase/performance-compat",nO="@firebase/remote-config",rO="@firebase/remote-config-compat",iO="@firebase/storage",sO="@firebase/storage-compat",oO="@firebase/firestore",aO="@firebase/vertexai-preview",lO="@firebase/firestore-compat",uO="firebase",cO="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="[DEFAULT]",hO={[gm]:"fire-core",[FD]:"fire-core-compat",[UD]:"fire-analytics",[jD]:"fire-analytics-compat",[$D]:"fire-app-check",[BD]:"fire-app-check-compat",[zD]:"fire-auth",[qD]:"fire-auth-compat",[KD]:"fire-rtdb",[WD]:"fire-data-connect",[GD]:"fire-rtdb-compat",[HD]:"fire-fn",[QD]:"fire-fn-compat",[YD]:"fire-iid",[XD]:"fire-iid-compat",[JD]:"fire-fcm",[ZD]:"fire-fcm-compat",[eO]:"fire-perf",[tO]:"fire-perf-compat",[nO]:"fire-rc",[rO]:"fire-rc-compat",[iO]:"fire-gcs",[sO]:"fire-gcs-compat",[oO]:"fire-fst",[lO]:"fire-fst-compat",[aO]:"fire-vertex","fire-js":"fire-js",[uO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=new Map,dO=new Map,vm=new Map;function pw(t,e){try{t.container.addComponent(e)}catch(n){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hs(t){const e=t.name;if(vm.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;vm.set(e,t);for(const n of Ih.values())pw(n,t);for(const n of dO.values())pw(n,t);return!0}function fd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ur(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hi=new lu("app","Firebase",fO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=cO;function YS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ym,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw hi.create("bad-app-name",{appName:String(i)});if(n||(n=qS()),!n)throw hi.create("no-options");const s=Ih.get(i);if(s){if(Ll(n,s.options)&&Ll(r,s.config))return s;throw hi.create("duplicate-app",{appName:i})}const o=new wD(i);for(const l of vm.values())o.addComponent(l);const a=new pO(n,r,o);return Ih.set(i,a),a}function XS(t=ym){const e=Ih.get(t);if(!e&&t===ym&&qS())return YS();if(!e)throw hi.create("no-app",{appName:t});return e}function Hn(t,e,n){var r;let i=(r=hO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(a.join(" "));return}hs(new yi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO="firebase-heartbeat-database",gO=1,Ml="firebase-heartbeat-store";let Qf=null;function JS(){return Qf||(Qf=DD(mO,gO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ml)}catch(n){console.warn(n)}}}}).catch(t=>{throw hi.create("idb-open",{originalErrorMessage:t.message})})),Qf}async function yO(t){try{const n=(await JS()).transaction(Ml),r=await n.objectStore(Ml).get(ZS(t));return await n.done,r}catch(e){if(e instanceof Zn)Ir.warn(e.message);else{const n=hi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(n.message)}}}async function mw(t,e){try{const r=(await JS()).transaction(Ml,"readwrite");await r.objectStore(Ml).put(e,ZS(t)),await r.done}catch(n){if(n instanceof Zn)Ir.warn(n.message);else{const r=hi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ir.warn(r.message)}}}function ZS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=1024,_O=30*24*60*60*1e3;class wO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new IO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=_O}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gw(),{heartbeatsToSend:r,unsentEntries:i}=EO(this._heartbeatsCache.heartbeats),s=Eh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ir.warn(n),""}}}function gw(){return new Date().toISOString().substring(0,10)}function EO(t,e=vO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),yw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class IO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GS()?uD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function yw(t){return Eh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t){hs(new yi("platform-logger",e=>new LD(e),"PRIVATE")),hs(new yi("heartbeat",e=>new wO(e),"PRIVATE")),Hn(gm,fw,t),Hn(gm,fw,"esm2017"),Hn("fire-js","")}TO("");var SO="firebase",AO="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(SO,AO,"app");var vw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zi,eA;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function S(){}S.prototype=v.prototype,w.D=v.prototype,w.prototype=new S,w.prototype.constructor=w,w.C=function(R,k,N){for(var x=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)x[Je-2]=arguments[Je];return v.prototype[k].apply(R,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,v,S){S||(S=0);var R=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)R[k]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(k=0;16>k;++k)R[k]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=w.g[0],S=w.g[1],k=w.g[2];var N=w.g[3],x=v+(N^S&(k^N))+R[0]+3614090360&4294967295;v=S+(x<<7&4294967295|x>>>25),x=N+(k^v&(S^k))+R[1]+3905402710&4294967295,N=v+(x<<12&4294967295|x>>>20),x=k+(S^N&(v^S))+R[2]+606105819&4294967295,k=N+(x<<17&4294967295|x>>>15),x=S+(v^k&(N^v))+R[3]+3250441966&4294967295,S=k+(x<<22&4294967295|x>>>10),x=v+(N^S&(k^N))+R[4]+4118548399&4294967295,v=S+(x<<7&4294967295|x>>>25),x=N+(k^v&(S^k))+R[5]+1200080426&4294967295,N=v+(x<<12&4294967295|x>>>20),x=k+(S^N&(v^S))+R[6]+2821735955&4294967295,k=N+(x<<17&4294967295|x>>>15),x=S+(v^k&(N^v))+R[7]+4249261313&4294967295,S=k+(x<<22&4294967295|x>>>10),x=v+(N^S&(k^N))+R[8]+1770035416&4294967295,v=S+(x<<7&4294967295|x>>>25),x=N+(k^v&(S^k))+R[9]+2336552879&4294967295,N=v+(x<<12&4294967295|x>>>20),x=k+(S^N&(v^S))+R[10]+4294925233&4294967295,k=N+(x<<17&4294967295|x>>>15),x=S+(v^k&(N^v))+R[11]+2304563134&4294967295,S=k+(x<<22&4294967295|x>>>10),x=v+(N^S&(k^N))+R[12]+1804603682&4294967295,v=S+(x<<7&4294967295|x>>>25),x=N+(k^v&(S^k))+R[13]+4254626195&4294967295,N=v+(x<<12&4294967295|x>>>20),x=k+(S^N&(v^S))+R[14]+2792965006&4294967295,k=N+(x<<17&4294967295|x>>>15),x=S+(v^k&(N^v))+R[15]+1236535329&4294967295,S=k+(x<<22&4294967295|x>>>10),x=v+(k^N&(S^k))+R[1]+4129170786&4294967295,v=S+(x<<5&4294967295|x>>>27),x=N+(S^k&(v^S))+R[6]+3225465664&4294967295,N=v+(x<<9&4294967295|x>>>23),x=k+(v^S&(N^v))+R[11]+643717713&4294967295,k=N+(x<<14&4294967295|x>>>18),x=S+(N^v&(k^N))+R[0]+3921069994&4294967295,S=k+(x<<20&4294967295|x>>>12),x=v+(k^N&(S^k))+R[5]+3593408605&4294967295,v=S+(x<<5&4294967295|x>>>27),x=N+(S^k&(v^S))+R[10]+38016083&4294967295,N=v+(x<<9&4294967295|x>>>23),x=k+(v^S&(N^v))+R[15]+3634488961&4294967295,k=N+(x<<14&4294967295|x>>>18),x=S+(N^v&(k^N))+R[4]+3889429448&4294967295,S=k+(x<<20&4294967295|x>>>12),x=v+(k^N&(S^k))+R[9]+568446438&4294967295,v=S+(x<<5&4294967295|x>>>27),x=N+(S^k&(v^S))+R[14]+3275163606&4294967295,N=v+(x<<9&4294967295|x>>>23),x=k+(v^S&(N^v))+R[3]+4107603335&4294967295,k=N+(x<<14&4294967295|x>>>18),x=S+(N^v&(k^N))+R[8]+1163531501&4294967295,S=k+(x<<20&4294967295|x>>>12),x=v+(k^N&(S^k))+R[13]+2850285829&4294967295,v=S+(x<<5&4294967295|x>>>27),x=N+(S^k&(v^S))+R[2]+4243563512&4294967295,N=v+(x<<9&4294967295|x>>>23),x=k+(v^S&(N^v))+R[7]+1735328473&4294967295,k=N+(x<<14&4294967295|x>>>18),x=S+(N^v&(k^N))+R[12]+2368359562&4294967295,S=k+(x<<20&4294967295|x>>>12),x=v+(S^k^N)+R[5]+4294588738&4294967295,v=S+(x<<4&4294967295|x>>>28),x=N+(v^S^k)+R[8]+2272392833&4294967295,N=v+(x<<11&4294967295|x>>>21),x=k+(N^v^S)+R[11]+1839030562&4294967295,k=N+(x<<16&4294967295|x>>>16),x=S+(k^N^v)+R[14]+4259657740&4294967295,S=k+(x<<23&4294967295|x>>>9),x=v+(S^k^N)+R[1]+2763975236&4294967295,v=S+(x<<4&4294967295|x>>>28),x=N+(v^S^k)+R[4]+1272893353&4294967295,N=v+(x<<11&4294967295|x>>>21),x=k+(N^v^S)+R[7]+4139469664&4294967295,k=N+(x<<16&4294967295|x>>>16),x=S+(k^N^v)+R[10]+3200236656&4294967295,S=k+(x<<23&4294967295|x>>>9),x=v+(S^k^N)+R[13]+681279174&4294967295,v=S+(x<<4&4294967295|x>>>28),x=N+(v^S^k)+R[0]+3936430074&4294967295,N=v+(x<<11&4294967295|x>>>21),x=k+(N^v^S)+R[3]+3572445317&4294967295,k=N+(x<<16&4294967295|x>>>16),x=S+(k^N^v)+R[6]+76029189&4294967295,S=k+(x<<23&4294967295|x>>>9),x=v+(S^k^N)+R[9]+3654602809&4294967295,v=S+(x<<4&4294967295|x>>>28),x=N+(v^S^k)+R[12]+3873151461&4294967295,N=v+(x<<11&4294967295|x>>>21),x=k+(N^v^S)+R[15]+530742520&4294967295,k=N+(x<<16&4294967295|x>>>16),x=S+(k^N^v)+R[2]+3299628645&4294967295,S=k+(x<<23&4294967295|x>>>9),x=v+(k^(S|~N))+R[0]+4096336452&4294967295,v=S+(x<<6&4294967295|x>>>26),x=N+(S^(v|~k))+R[7]+1126891415&4294967295,N=v+(x<<10&4294967295|x>>>22),x=k+(v^(N|~S))+R[14]+2878612391&4294967295,k=N+(x<<15&4294967295|x>>>17),x=S+(N^(k|~v))+R[5]+4237533241&4294967295,S=k+(x<<21&4294967295|x>>>11),x=v+(k^(S|~N))+R[12]+1700485571&4294967295,v=S+(x<<6&4294967295|x>>>26),x=N+(S^(v|~k))+R[3]+2399980690&4294967295,N=v+(x<<10&4294967295|x>>>22),x=k+(v^(N|~S))+R[10]+4293915773&4294967295,k=N+(x<<15&4294967295|x>>>17),x=S+(N^(k|~v))+R[1]+2240044497&4294967295,S=k+(x<<21&4294967295|x>>>11),x=v+(k^(S|~N))+R[8]+1873313359&4294967295,v=S+(x<<6&4294967295|x>>>26),x=N+(S^(v|~k))+R[15]+4264355552&4294967295,N=v+(x<<10&4294967295|x>>>22),x=k+(v^(N|~S))+R[6]+2734768916&4294967295,k=N+(x<<15&4294967295|x>>>17),x=S+(N^(k|~v))+R[13]+1309151649&4294967295,S=k+(x<<21&4294967295|x>>>11),x=v+(k^(S|~N))+R[4]+4149444226&4294967295,v=S+(x<<6&4294967295|x>>>26),x=N+(S^(v|~k))+R[11]+3174756917&4294967295,N=v+(x<<10&4294967295|x>>>22),x=k+(v^(N|~S))+R[2]+718787259&4294967295,k=N+(x<<15&4294967295|x>>>17),x=S+(N^(k|~v))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var S=v-this.blockSize,R=this.B,k=this.h,N=0;N<v;){if(k==0)for(;N<=S;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<v;)if(R[k++]=w.charCodeAt(N++),k==this.blockSize){i(this,R),k=0;break}}else for(;N<v;)if(R[k++]=w[N++],k==this.blockSize){i(this,R),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var S=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=S&255,S/=256;for(this.u(w),w=Array(16),v=S=0;4>v;++v)for(var R=0;32>R;R+=8)w[S++]=this.g[v]>>>R&255;return w};function s(w,v){var S=a;return Object.prototype.hasOwnProperty.call(S,w)?S[w]:S[w]=v(w)}function o(w,v){this.h=v;for(var S=[],R=!0,k=w.length-1;0<=k;k--){var N=w[k]|0;R&&N==v||(S[k]=N,R=!1)}this.g=S}var a={};function l(w){return-128<=w&&128>w?s(w,function(v){return new o([v|0],0>v?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return P(c(-w));for(var v=[],S=1,R=0;w>=S;R++)v[R]=w/S|0,S*=4294967296;return new o(v,0)}function h(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return P(h(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(v,8)),R=f,k=0;k<w.length;k+=8){var N=Math.min(8,w.length-k),x=parseInt(w.substring(k,k+N),v);8>N?(N=c(Math.pow(v,N)),R=R.j(N).add(c(x))):(R=R.j(S),R=R.add(c(x)))}return R}var f=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(b(this))return-P(this).m();for(var w=0,v=1,S=0;S<this.g.length;S++){var R=this.i(S);w+=(0<=R?R:4294967296+R)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T(this))return"0";if(b(this))return"-"+P(this).toString(w);for(var v=c(Math.pow(w,6)),S=this,R="";;){var k=C(S,v).g;S=I(S,k.j(v));var N=((0<S.g.length?S.g[0]:S.h)>>>0).toString(w);if(S=k,T(S))return N+R;for(;6>N.length;)N="0"+N;R=N+R}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function T(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function b(w){return w.h==-1}t.l=function(w){return w=I(this,w),b(w)?-1:T(w)?0:1};function P(w){for(var v=w.g.length,S=[],R=0;R<v;R++)S[R]=~w.g[R];return new o(S,~w.h).add(p)}t.abs=function(){return b(this)?P(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),S=[],R=0,k=0;k<=v;k++){var N=R+(this.i(k)&65535)+(w.i(k)&65535),x=(N>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);R=x>>>16,N&=65535,x&=65535,S[k]=x<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function I(w,v){return w.add(P(v))}t.j=function(w){if(T(this)||T(w))return f;if(b(this))return b(w)?P(this).j(P(w)):P(P(this).j(w));if(b(w))return P(this.j(P(w)));if(0>this.l(g)&&0>w.l(g))return c(this.m()*w.m());for(var v=this.g.length+w.g.length,S=[],R=0;R<2*v;R++)S[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<w.g.length;k++){var N=this.i(R)>>>16,x=this.i(R)&65535,Je=w.i(k)>>>16,Ft=w.i(k)&65535;S[2*R+2*k]+=x*Ft,_(S,2*R+2*k),S[2*R+2*k+1]+=N*Ft,_(S,2*R+2*k+1),S[2*R+2*k+1]+=x*Je,_(S,2*R+2*k+1),S[2*R+2*k+2]+=N*Je,_(S,2*R+2*k+2)}for(R=0;R<v;R++)S[R]=S[2*R+1]<<16|S[2*R];for(R=v;R<2*v;R++)S[R]=0;return new o(S,0)};function _(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function E(w,v){this.g=w,this.h=v}function C(w,v){if(T(v))throw Error("division by zero");if(T(w))return new E(f,f);if(b(w))return v=C(P(w),v),new E(P(v.g),P(v.h));if(b(v))return v=C(w,P(v)),new E(P(v.g),v.h);if(30<w.g.length){if(b(w)||b(v))throw Error("slowDivide_ only works with positive integers.");for(var S=p,R=v;0>=R.l(w);)S=M(S),R=M(R);var k=D(S,1),N=D(R,1);for(R=D(R,2),S=D(S,2);!T(R);){var x=N.add(R);0>=x.l(w)&&(k=k.add(S),N=x),R=D(R,1),S=D(S,1)}return v=I(w,k.j(v)),new E(k,v)}for(k=f;0<=w.l(v);){for(S=Math.max(1,Math.floor(w.m()/v.m())),R=Math.ceil(Math.log(S)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),N=c(S),x=N.j(v);b(x)||0<x.l(w);)S-=R,N=c(S),x=N.j(v);T(N)&&(N=p),k=k.add(N),w=I(w,x)}return new E(k,w)}t.A=function(w){return C(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),S=[],R=0;R<v;R++)S[R]=this.i(R)&w.i(R);return new o(S,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),S=[],R=0;R<v;R++)S[R]=this.i(R)|w.i(R);return new o(S,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),S=[],R=0;R<v;R++)S[R]=this.i(R)^w.i(R);return new o(S,this.h^w.h)};function M(w){for(var v=w.g.length+1,S=[],R=0;R<v;R++)S[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(S,w.h)}function D(w,v){var S=v>>5;v%=32;for(var R=w.g.length-S,k=[],N=0;N<R;N++)k[N]=0<v?w.i(N+S)>>>v|w.i(N+S+1)<<32-v:w.i(N+S);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,eA=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Zi=o}).apply(typeof vw<"u"?vw:typeof self<"u"?self:typeof window<"u"?window:{});var ic=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tA,qa,nA,bc,_m,rA,iA,sA;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,m){return u==Array.prototype||u==Object.prototype||(u[d]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ic=="object"&&ic];for(var d=0;d<u.length;++d){var m=u[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var m=r;u=u.split(".");for(var y=0;y<u.length-1;y++){var O=u[y];if(!(O in m))break e;m=m[O]}u=u[u.length-1],y=m[u],d=d(y),d!=y&&d!=null&&e(m,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var m=0,y=!1,O={next:function(){if(!y&&m<u.length){var F=m++;return{value:d(F,u[F]),done:!1}}return y=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,m){return u.call.apply(u.bind,arguments)}function f(u,d,m){if(!u)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,y),u.apply(d,O)}}return function(){return u.apply(d,arguments)}}function p(u,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function g(u,d){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),u.apply(this,y)}}function T(u,d){function m(){}m.prototype=d.prototype,u.aa=d.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(y,O,F){for(var z=Array(arguments.length-2),we=2;we<arguments.length;we++)z[we-2]=arguments[we];return d.prototype[O].apply(y,z)}}function b(u){const d=u.length;if(0<d){const m=Array(d);for(let y=0;y<d;y++)m[y]=u[y];return m}return[]}function P(u,d){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(l(y)){const O=u.length||0,F=y.length||0;u.length=O+F;for(let z=0;z<F;z++)u[O+z]=y[z]}else u.push(y)}}class I{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function _(u){return/^[\s\xa0]*$/.test(u)}function E(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function C(u){return C[" "](u),u}C[" "]=function(){};var M=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function D(u,d,m){for(const y in u)d.call(m,u[y],y,u)}function w(u,d){for(const m in u)d.call(void 0,u[m],m,u)}function v(u){const d={};for(const m in u)d[m]=u[m];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(u,d){let m,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(m in y)u[m]=y[m];for(let F=0;F<S.length;F++)m=S[F],Object.prototype.hasOwnProperty.call(y,m)&&(u[m]=y[m])}}function k(u){var d=1;u=u.split(":");const m=[];for(;0<d&&u.length;)m.push(u.shift()),d--;return u.length&&m.push(u.join(":")),m}function N(u){a.setTimeout(()=>{throw u},0)}function x(){var u=Q;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class Je{constructor(){this.h=this.g=null}add(d,m){const y=Ft.get();y.set(d,m),this.h?this.h.next=y:this.g=y,this.h=y}}var Ft=new I(()=>new ft,u=>u.reset());class ft{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,B=!1,Q=new Je,J=()=>{const u=a.Promise.resolve(void 0);ze=()=>{u.then(ue)}};var ue=()=>{for(var u;u=x();){try{u.h.call(u.g)}catch(m){N(m)}var d=Ft;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}B=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ze=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return u}();function ge(u,d){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,y=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(M){e:{try{C(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else m=="mouseover"?d=u.fromElement:m=="mouseout"&&(d=u.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:qe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ge.aa.h.call(this)}}T(ge,fe);var qe={2:"touch",3:"pen",4:"mouse"};ge.prototype.h=function(){ge.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var pt="closure_listenable_"+(1e6*Math.random()|0),er=0;function Ht(u,d,m,y,O){this.listener=u,this.proxy=null,this.src=d,this.type=m,this.capture=!!y,this.ha=O,this.key=++er,this.da=this.fa=!1}function cn(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function En(u){this.src=u,this.g={},this.h=0}En.prototype.add=function(u,d,m,y,O){var F=u.toString();u=this.g[F],u||(u=this.g[F]=[],this.h++);var z=ki(u,d,y,O);return-1<z?(d=u[z],m||(d.fa=!1)):(d=new Ht(d,this.src,F,!!y,O),d.fa=m,u.push(d)),d};function At(u,d){var m=d.type;if(m in u.g){var y=u.g[m],O=Array.prototype.indexOf.call(y,d,void 0),F;(F=0<=O)&&Array.prototype.splice.call(y,O,1),F&&(cn(d),u.g[m].length==0&&(delete u.g[m],u.h--))}}function ki(u,d,m,y){for(var O=0;O<u.length;++O){var F=u[O];if(!F.da&&F.listener==d&&F.capture==!!m&&F.ha==y)return O}return-1}var kr="closure_lm_"+(1e6*Math.random()|0),Ie={};function aa(u,d,m,y,O){if(Array.isArray(d)){for(var F=0;F<d.length;F++)aa(u,d[F],m,y,O);return null}return m=Kv(m),u&&u[pt]?u.K(d,m,c(y)?!!y.capture:!!y,O):la(u,d,m,!1,y,O)}function la(u,d,m,y,O,F){if(!d)throw Error("Invalid event type");var z=c(O)?!!O.capture:!!O,we=Qd(u);if(we||(u[kr]=we=new En(u)),m=we.add(d,m,y,z,F),m.proxy)return m;if(y=fP(),m.proxy=y,y.src=u,y.listener=m,u.addEventListener)Ze||(O=z),O===void 0&&(O=!1),u.addEventListener(d.toString(),y,O);else if(u.attachEvent)u.attachEvent(qv(d.toString()),y);else if(u.addListener&&u.removeListener)u.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function fP(){function u(m){return d.call(u.src,u.listener,m)}const d=pP;return u}function zv(u,d,m,y,O){if(Array.isArray(d))for(var F=0;F<d.length;F++)zv(u,d[F],m,y,O);else y=c(y)?!!y.capture:!!y,m=Kv(m),u&&u[pt]?(u=u.i,d=String(d).toString(),d in u.g&&(F=u.g[d],m=ki(F,m,y,O),-1<m&&(cn(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete u.g[d],u.h--)))):u&&(u=Qd(u))&&(d=u.g[d.toString()],u=-1,d&&(u=ki(d,m,y,O)),(m=-1<u?d[u]:null)&&Hd(m))}function Hd(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[pt])At(d.i,u);else{var m=u.type,y=u.proxy;d.removeEventListener?d.removeEventListener(m,y,u.capture):d.detachEvent?d.detachEvent(qv(m),y):d.addListener&&d.removeListener&&d.removeListener(y),(m=Qd(d))?(At(m,u),m.h==0&&(m.src=null,d[kr]=null)):cn(u)}}}function qv(u){return u in Ie?Ie[u]:Ie[u]="on"+u}function pP(u,d){if(u.da)u=!0;else{d=new ge(d,this);var m=u.listener,y=u.ha||u.src;u.fa&&Hd(u),u=m.call(y,d)}return u}function Qd(u){return u=u[kr],u instanceof En?u:null}var Yd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kv(u){return typeof u=="function"?u:(u[Yd]||(u[Yd]=function(d){return u.handleEvent(d)}),u[Yd])}function mt(){re.call(this),this.i=new En(this),this.M=this,this.F=null}T(mt,re),mt.prototype[pt]=!0,mt.prototype.removeEventListener=function(u,d,m,y){zv(this,u,d,m,y)};function xt(u,d){var m,y=u.F;if(y)for(m=[];y;y=y.F)m.push(y);if(u=u.M,y=d.type||d,typeof d=="string")d=new fe(d,u);else if(d instanceof fe)d.target=d.target||u;else{var O=d;d=new fe(y,u),R(d,O)}if(O=!0,m)for(var F=m.length-1;0<=F;F--){var z=d.g=m[F];O=Tu(z,y,!0,d)&&O}if(z=d.g=u,O=Tu(z,y,!0,d)&&O,O=Tu(z,y,!1,d)&&O,m)for(F=0;F<m.length;F++)z=d.g=m[F],O=Tu(z,y,!1,d)&&O}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var m=u.g[d],y=0;y<m.length;y++)cn(m[y]);delete u.g[d],u.h--}}this.F=null},mt.prototype.K=function(u,d,m,y){return this.i.add(String(u),d,!1,m,y)},mt.prototype.L=function(u,d,m,y){return this.i.add(String(u),d,!0,m,y)};function Tu(u,d,m,y){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,F=0;F<d.length;++F){var z=d[F];if(z&&!z.da&&z.capture==m){var we=z.listener,lt=z.ha||z.src;z.fa&&At(u.i,z),O=we.call(lt,y)!==!1&&O}}return O&&!y.defaultPrevented}function Wv(u,d,m){if(typeof u=="function")m&&(u=p(u,m));else if(u&&typeof u.handleEvent=="function")u=p(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function Gv(u){u.g=Wv(()=>{u.g=null,u.i&&(u.i=!1,Gv(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class mP extends re{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Gv(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ua(u){re.call(this),this.h=u,this.g={}}T(ua,re);var Hv=[];function Qv(u){D(u.g,function(d,m){this.g.hasOwnProperty(m)&&Hd(d)},u),u.g={}}ua.prototype.N=function(){ua.aa.N.call(this),Qv(this)},ua.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xd=a.JSON.stringify,gP=a.JSON.parse,yP=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Jd(){}Jd.prototype.h=null;function Yv(u){return u.h||(u.h=u.i())}function Xv(){}var ca={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zd(){fe.call(this,"d")}T(Zd,fe);function ef(){fe.call(this,"c")}T(ef,fe);var Ni={},Jv=null;function Su(){return Jv=Jv||new mt}Ni.La="serverreachability";function Zv(u){fe.call(this,Ni.La,u)}T(Zv,fe);function ha(u){const d=Su();xt(d,new Zv(d))}Ni.STAT_EVENT="statevent";function e_(u,d){fe.call(this,Ni.STAT_EVENT,u),this.stat=d}T(e_,fe);function Rt(u){const d=Su();xt(d,new e_(d,u))}Ni.Ma="timingevent";function t_(u,d){fe.call(this,Ni.Ma,u),this.size=d}T(t_,fe);function da(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function fa(){this.g=!0}fa.prototype.xa=function(){this.g=!1};function vP(u,d,m,y,O,F){u.info(function(){if(u.g)if(F)for(var z="",we=F.split("&"),lt=0;lt<we.length;lt++){var de=we[lt].split("=");if(1<de.length){var gt=de[0];de=de[1];var yt=gt.split("_");z=2<=yt.length&&yt[1]=="type"?z+(gt+"="+de+"&"):z+(gt+"=redacted&")}}else z=null;else z=F;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+d+`
`+m+`
`+z})}function _P(u,d,m,y,O,F,z){u.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+d+`
`+m+`
`+F+" "+z})}function Os(u,d,m,y){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+EP(u,m)+(y?" "+y:"")})}function wP(u,d){u.info(function(){return"TIMEOUT: "+d})}fa.prototype.info=function(){};function EP(u,d){if(!u.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var y=m[u];if(!(2>y.length)){var O=y[1];if(Array.isArray(O)&&!(1>O.length)){var F=O[0];if(F!="noop"&&F!="stop"&&F!="close")for(var z=1;z<O.length;z++)O[z]=""}}}}return Xd(m)}catch{return d}}var Au={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},n_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tf;function xu(){}T(xu,Jd),xu.prototype.g=function(){return new XMLHttpRequest},xu.prototype.i=function(){return{}},tf=new xu;function Nr(u,d,m,y){this.j=u,this.i=d,this.l=m,this.R=y||1,this.U=new ua(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new r_}function r_(){this.i=null,this.g="",this.h=!1}var i_={},nf={};function rf(u,d,m){u.L=1,u.v=Cu(tr(d)),u.m=m,u.P=!0,s_(u,null)}function s_(u,d){u.F=Date.now(),Ru(u),u.A=tr(u.v);var m=u.A,y=u.R;Array.isArray(y)||(y=[String(y)]),__(m.i,"t",y),u.C=0,m=u.j.J,u.h=new r_,u.g=M_(u.j,m?d:null,!u.m),0<u.O&&(u.M=new mP(p(u.Y,u,u.g),u.O)),d=u.U,m=u.g,y=u.ca;var O="readystatechange";Array.isArray(O)||(O&&(Hv[0]=O.toString()),O=Hv);for(var F=0;F<O.length;F++){var z=aa(m,O[F],y||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=u.H?v(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),ha(),vP(u.i,u.u,u.A,u.l,u.R,u.m)}Nr.prototype.ca=function(u){u=u.target;const d=this.M;d&&nr(u)==3?d.j():this.Y(u)},Nr.prototype.Y=function(u){try{if(u==this.g)e:{const yt=nr(this.g);var d=this.g.Ba();const Ms=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||x_(this.g)))){this.J||yt!=4||d==7||(d==8||0>=Ms?ha(3):ha(2)),sf(this);var m=this.g.Z();this.X=m;t:if(o_(this)){var y=x_(this.g);u="";var O=y.length,F=nr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Di(this),pa(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,u+=this.h.i.decode(y[d],{stream:!(F&&d==O-1)});y.length=0,this.h.g+=u,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=m==200,_P(this.i,this.u,this.A,this.l,this.R,yt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var we,lt=this.g;if((we=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(we)){var de=we;break t}}de=null}if(m=de)Os(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,of(this,m);else{this.o=!1,this.s=3,Rt(12),Di(this),pa(this);break e}}if(this.P){m=!0;let In;for(;!this.J&&this.C<z.length;)if(In=IP(this,z),In==nf){yt==4&&(this.s=4,Rt(14),m=!1),Os(this.i,this.l,null,"[Incomplete Response]");break}else if(In==i_){this.s=4,Rt(15),Os(this.i,this.l,z,"[Invalid Chunk]"),m=!1;break}else Os(this.i,this.l,In,null),of(this,In);if(o_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||z.length!=0||this.h.h||(this.s=1,Rt(16),m=!1),this.o=this.o&&m,!m)Os(this.i,this.l,z,"[Invalid Chunked Response]"),Di(this),pa(this);else if(0<z.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),df(gt),gt.M=!0,Rt(11))}}else Os(this.i,this.l,z,null),of(this,z);yt==4&&Di(this),this.o&&!this.J&&(yt==4?D_(this.j,this):(this.o=!1,Ru(this)))}else jP(this.g),m==400&&0<z.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Di(this),pa(this)}}}catch{}finally{}};function o_(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function IP(u,d){var m=u.C,y=d.indexOf(`
`,m);return y==-1?nf:(m=Number(d.substring(m,y)),isNaN(m)?i_:(y+=1,y+m>d.length?nf:(d=d.slice(y,y+m),u.C=y+m,d)))}Nr.prototype.cancel=function(){this.J=!0,Di(this)};function Ru(u){u.S=Date.now()+u.I,a_(u,u.I)}function a_(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=da(p(u.ba,u),d)}function sf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Nr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(wP(this.i,this.A),this.L!=2&&(ha(),Rt(17)),Di(this),this.s=2,pa(this)):a_(this,this.S-u)};function pa(u){u.j.G==0||u.J||D_(u.j,u)}function Di(u){sf(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,Qv(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function of(u,d){try{var m=u.j;if(m.G!=0&&(m.g==u||af(m.h,u))){if(!u.K&&af(m.h,u)&&m.G==3){try{var y=m.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)Lu(m),Ou(m);else break e;hf(m),Rt(18)}}else m.za=O[1],0<m.za-m.T&&37500>O[2]&&m.F&&m.v==0&&!m.C&&(m.C=da(p(m.Za,m),6e3));if(1>=c_(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Vi(m,11)}else if((u.K||m.g==u)&&Lu(m),!_(d))for(O=m.Da.g.parse(d),d=0;d<O.length;d++){let de=O[d];if(m.T=de[0],de=de[1],m.G==2)if(de[0]=="c"){m.K=de[1],m.ia=de[2];const gt=de[3];gt!=null&&(m.la=gt,m.j.info("VER="+m.la));const yt=de[4];yt!=null&&(m.Aa=yt,m.j.info("SVER="+m.Aa));const Ms=de[5];Ms!=null&&typeof Ms=="number"&&0<Ms&&(y=1.5*Ms,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const In=u.g;if(In){const Fu=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fu){var F=y.h;F.g||Fu.indexOf("spdy")==-1&&Fu.indexOf("quic")==-1&&Fu.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(lf(F,F.h),F.h=null))}if(y.D){const ff=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;ff&&(y.ya=ff,Te(y.I,y.D,ff))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var z=u;if(y.qa=L_(y,y.J?y.ia:null,y.W),z.K){h_(y.h,z);var we=z,lt=y.L;lt&&(we.I=lt),we.B&&(sf(we),Ru(we)),y.g=z}else k_(y);0<m.i.length&&Vu(m)}else de[0]!="stop"&&de[0]!="close"||Vi(m,7);else m.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Vi(m,7):cf(m):de[0]!="noop"&&m.l&&m.l.ta(de),m.v=0)}}ha(4)}catch{}}var TP=class{constructor(u,d){this.g=u,this.map=d}};function l_(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function u_(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function c_(u){return u.h?1:u.g?u.g.size:0}function af(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function lf(u,d){u.g?u.g.add(d):u.h=d}function h_(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}l_.prototype.cancel=function(){if(this.i=d_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function d_(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const m of u.g.values())d=d.concat(m.D);return d}return b(u.i)}function SP(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],m=u.length,y=0;y<m;y++)d.push(u[y]);return d}d=[],m=0;for(y in u)d[m++]=u[y];return d}function AP(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var m=0;m<u;m++)d.push(m);return d}d=[],m=0;for(const y in u)d[m++]=y;return d}}}function f_(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var m=AP(u),y=SP(u),O=y.length,F=0;F<O;F++)d.call(void 0,y[F],m&&m[F],u)}var p_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xP(u,d){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var y=u[m].indexOf("="),O=null;if(0<=y){var F=u[m].substring(0,y);O=u[m].substring(y+1)}else F=u[m];d(F,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Oi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Oi){this.h=u.h,bu(this,u.j),this.o=u.o,this.g=u.g,Pu(this,u.s),this.l=u.l;var d=u.i,m=new ya;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),m_(this,m),this.m=u.m}else u&&(d=String(u).match(p_))?(this.h=!1,bu(this,d[1]||"",!0),this.o=ma(d[2]||""),this.g=ma(d[3]||"",!0),Pu(this,d[4]),this.l=ma(d[5]||"",!0),m_(this,d[6]||"",!0),this.m=ma(d[7]||"")):(this.h=!1,this.i=new ya(null,this.h))}Oi.prototype.toString=function(){var u=[],d=this.j;d&&u.push(ga(d,g_,!0),":");var m=this.g;return(m||d=="file")&&(u.push("//"),(d=this.o)&&u.push(ga(d,g_,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(ga(m,m.charAt(0)=="/"?PP:bP,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",ga(m,kP)),u.join("")};function tr(u){return new Oi(u)}function bu(u,d,m){u.j=m?ma(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Pu(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function m_(u,d,m){d instanceof ya?(u.i=d,NP(u.i,u.h)):(m||(d=ga(d,CP)),u.i=new ya(d,u.h))}function Te(u,d,m){u.i.set(d,m)}function Cu(u){return Te(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ma(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ga(u,d,m){return typeof u=="string"?(u=encodeURI(u).replace(d,RP),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function RP(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var g_=/[#\/\?@]/g,bP=/[#\?:]/g,PP=/[#\?]/g,CP=/[#\?@]/g,kP=/#/g;function ya(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function Dr(u){u.g||(u.g=new Map,u.h=0,u.i&&xP(u.i,function(d,m){u.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=ya.prototype,t.add=function(u,d){Dr(this),this.i=null,u=Vs(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(d),this.h+=1,this};function y_(u,d){Dr(u),d=Vs(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function v_(u,d){return Dr(u),d=Vs(u,d),u.g.has(d)}t.forEach=function(u,d){Dr(this),this.g.forEach(function(m,y){m.forEach(function(O){u.call(d,O,y,this)},this)},this)},t.na=function(){Dr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let y=0;y<d.length;y++){const O=u[y];for(let F=0;F<O.length;F++)m.push(d[y])}return m},t.V=function(u){Dr(this);let d=[];if(typeof u=="string")v_(this,u)&&(d=d.concat(this.g.get(Vs(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)d=d.concat(u[m])}return d},t.set=function(u,d){return Dr(this),this.i=null,u=Vs(this,u),v_(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function __(u,d,m){y_(u,d),0<m.length&&(u.i=null,u.g.set(Vs(u,d),b(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var y=d[m];const F=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var O=F;z[y]!==""&&(O+="="+encodeURIComponent(String(z[y]))),u.push(O)}}return this.i=u.join("&")};function Vs(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function NP(u,d){d&&!u.j&&(Dr(u),u.i=null,u.g.forEach(function(m,y){var O=y.toLowerCase();y!=O&&(y_(this,y),__(this,O,m))},u)),u.j=d}function DP(u,d){const m=new fa;if(a.Image){const y=new Image;y.onload=g(Or,m,"TestLoadImage: loaded",!0,d,y),y.onerror=g(Or,m,"TestLoadImage: error",!1,d,y),y.onabort=g(Or,m,"TestLoadImage: abort",!1,d,y),y.ontimeout=g(Or,m,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=u}else d(!1)}function OP(u,d){const m=new fa,y=new AbortController,O=setTimeout(()=>{y.abort(),Or(m,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:y.signal}).then(F=>{clearTimeout(O),F.ok?Or(m,"TestPingServer: ok",!0,d):Or(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),Or(m,"TestPingServer: error",!1,d)})}function Or(u,d,m,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(m)}catch{}}function VP(){this.g=new yP}function LP(u,d,m){const y=m||"";try{f_(u,function(O,F){let z=O;c(O)&&(z=Xd(O)),d.push(y+F+"="+encodeURIComponent(z))})}catch(O){throw d.push(y+"type="+encodeURIComponent("_badmap")),O}}function ku(u){this.l=u.Ub||null,this.j=u.eb||!1}T(ku,Jd),ku.prototype.g=function(){return new Nu(this.l,this.j)},ku.prototype.i=function(u){return function(){return u}}({});function Nu(u,d){mt.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Nu,mt),t=Nu.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,_a(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,va(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,_a(this)),this.g&&(this.readyState=3,_a(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;w_(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function w_(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?va(this):_a(this),this.readyState==3&&w_(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,va(this))},t.Qa=function(u){this.g&&(this.response=u,va(this))},t.ga=function(){this.g&&va(this)};function va(u){u.readyState=4,u.l=null,u.j=null,u.v=null,_a(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=d.next();return u.join(`\r
`)};function _a(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Nu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function E_(u){let d="";return D(u,function(m,y){d+=y,d+=":",d+=m,d+=`\r
`}),d}function uf(u,d,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=E_(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):Te(u,d,m))}function Fe(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Fe,mt);var MP=/^https?$/i,FP=["POST","PUT"];t=Fe.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tf.g(),this.v=this.o?Yv(this.o):Yv(tf),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(F){I_(this,F);return}if(u=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)m.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const F of y.keys())m.set(F,y.get(F));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),O=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(FP,d,void 0))||y||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,z]of m)this.g.setRequestHeader(F,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{A_(this),this.u=!0,this.g.send(u),this.u=!1}catch(F){I_(this,F)}};function I_(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,T_(u),Du(u)}function T_(u){u.A||(u.A=!0,xt(u,"complete"),xt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,xt(this,"complete"),xt(this,"abort"),Du(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Du(this,!0)),Fe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?S_(this):this.bb())},t.bb=function(){S_(this)};function S_(u){if(u.h&&typeof o<"u"&&(!u.v[1]||nr(u)!=4||u.Z()!=2)){if(u.u&&nr(u)==4)Wv(u.Ea,0,u);else if(xt(u,"readystatechange"),nr(u)==4){u.h=!1;try{const z=u.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var y;if(y=z===0){var O=String(u.D).match(p_)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),y=!MP.test(O?O.toLowerCase():"")}m=y}if(m)xt(u,"complete"),xt(u,"success");else{u.m=6;try{var F=2<nr(u)?u.g.statusText:""}catch{F=""}u.l=F+" ["+u.Z()+"]",T_(u)}}finally{Du(u)}}}}function Du(u,d){if(u.g){A_(u);const m=u.g,y=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||xt(u,"ready");try{m.onreadystatechange=y}catch{}}}function A_(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function nr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<nr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),gP(d)}};function x_(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function jP(u){const d={};u=(u.g&&2<=nr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<u.length;y++){if(_(u[y]))continue;var m=k(u[y]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=d[O]||[];d[O]=F,F.push(m)}w(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wa(u,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||d}function R_(u){this.Aa=0,this.i=[],this.j=new fa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wa("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wa("baseRetryDelayMs",5e3,u),this.cb=wa("retryDelaySeedMs",1e4,u),this.Wa=wa("forwardChannelMaxRetries",2,u),this.wa=wa("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new l_(u&&u.concurrentRequestLimit),this.Da=new VP,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=R_.prototype,t.la=8,t.G=1,t.connect=function(u,d,m,y){Rt(0),this.W=u,this.H=d||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=L_(this,null,this.W),Vu(this)};function cf(u){if(b_(u),u.G==3){var d=u.U++,m=tr(u.I);if(Te(m,"SID",u.K),Te(m,"RID",d),Te(m,"TYPE","terminate"),Ea(u,m),d=new Nr(u,u.j,d),d.L=2,d.v=Cu(tr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=M_(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ru(d)}V_(u)}function Ou(u){u.g&&(df(u),u.g.cancel(),u.g=null)}function b_(u){Ou(u),u.u&&(a.clearTimeout(u.u),u.u=null),Lu(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Vu(u){if(!u_(u.h)&&!u.s){u.s=!0;var d=u.Ga;ze||J(),B||(ze(),B=!0),Q.add(d,u),u.B=0}}function UP(u,d){return c_(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=da(p(u.Ga,u,d),O_(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const O=new Nr(this,this.j,u);let F=this.o;if(this.S&&(F?(F=v(F),R(F,this.S)):F=this.S),this.m!==null||this.O||(O.H=F,F=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=C_(this,O,d),m=tr(this.I),Te(m,"RID",u),Te(m,"CVER",22),this.D&&Te(m,"X-HTTP-Session-Id",this.D),Ea(this,m),F&&(this.O?d="headers="+encodeURIComponent(String(E_(F)))+"&"+d:this.m&&uf(m,this.m,F)),lf(this.h,O),this.Ua&&Te(m,"TYPE","init"),this.P?(Te(m,"$req",d),Te(m,"SID","null"),O.T=!0,rf(O,m,null)):rf(O,m,d),this.G=2}}else this.G==3&&(u?P_(this,u):this.i.length==0||u_(this.h)||P_(this))};function P_(u,d){var m;d?m=d.l:m=u.U++;const y=tr(u.I);Te(y,"SID",u.K),Te(y,"RID",m),Te(y,"AID",u.T),Ea(u,y),u.m&&u.o&&uf(y,u.m,u.o),m=new Nr(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),d&&(u.i=d.D.concat(u.i)),d=C_(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),lf(u.h,m),rf(m,y,d)}function Ea(u,d){u.H&&D(u.H,function(m,y){Te(d,y,m)}),u.l&&f_({},function(m,y){Te(d,y,m)})}function C_(u,d,m){m=Math.min(u.i.length,m);var y=u.l?p(u.l.Na,u.l,u):null;e:{var O=u.i;let F=-1;for(;;){const z=["count="+m];F==-1?0<m?(F=O[0].g,z.push("ofs="+F)):F=0:z.push("ofs="+F);let we=!0;for(let lt=0;lt<m;lt++){let de=O[lt].g;const gt=O[lt].map;if(de-=F,0>de)F=Math.max(0,O[lt].g-100),we=!1;else try{LP(gt,z,"req"+de+"_")}catch{y&&y(gt)}}if(we){y=z.join("&");break e}}}return u=u.i.splice(0,m),d.D=u,y}function k_(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;ze||J(),B||(ze(),B=!0),Q.add(d,u),u.v=0}}function hf(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=da(p(u.Fa,u),O_(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,N_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=da(p(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),Ou(this),N_(this))};function df(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function N_(u){u.g=new Nr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=tr(u.qa);Te(d,"RID","rpc"),Te(d,"SID",u.K),Te(d,"AID",u.T),Te(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&Te(d,"TO",u.ja),Te(d,"TYPE","xmlhttp"),Ea(u,d),u.m&&u.o&&uf(d,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=Cu(tr(d)),m.m=null,m.P=!0,s_(m,u)}t.Za=function(){this.C!=null&&(this.C=null,Ou(this),hf(this),Rt(19))};function Lu(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function D_(u,d){var m=null;if(u.g==d){Lu(u),df(u),u.g=null;var y=2}else if(af(u.h,d))m=d.D,h_(u.h,d),y=1;else return;if(u.G!=0){if(d.o)if(y==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var O=u.B;y=Su(),xt(y,new t_(y,m)),Vu(u)}else k_(u);else if(O=d.s,O==3||O==0&&0<d.X||!(y==1&&UP(u,d)||y==2&&hf(u)))switch(m&&0<m.length&&(d=u.h,d.i=d.i.concat(m)),O){case 1:Vi(u,5);break;case 4:Vi(u,10);break;case 3:Vi(u,6);break;default:Vi(u,2)}}}function O_(u,d){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*d}function Vi(u,d){if(u.j.info("Error code "+d),d==2){var m=p(u.fb,u),y=u.Xa;const O=!y;y=new Oi(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||bu(y,"https"),Cu(y),O?DP(y.toString(),m):OP(y.toString(),m)}else Rt(2);u.G=0,u.l&&u.l.sa(d),V_(u),b_(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function V_(u){if(u.G=0,u.ka=[],u.l){const d=d_(u.h);(d.length!=0||u.i.length!=0)&&(P(u.ka,d),P(u.ka,u.i),u.h.i.length=0,b(u.i),u.i.length=0),u.l.ra()}}function L_(u,d,m){var y=m instanceof Oi?tr(m):new Oi(m);if(y.g!="")d&&(y.g=d+"."+y.g),Pu(y,y.s);else{var O=a.location;y=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var F=new Oi(null);y&&bu(F,y),d&&(F.g=d),O&&Pu(F,O),m&&(F.l=m),y=F}return m=u.D,d=u.ya,m&&d&&Te(y,m,d),Te(y,"VER",u.la),Ea(u,y),y}function M_(u,d,m){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Fe(new ku({eb:m})):new Fe(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function F_(){}t=F_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Mu(){}Mu.prototype.g=function(u,d){return new Qt(u,d)};function Qt(u,d){mt.call(this),this.g=new R_(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!_(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!_(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new Ls(this)}T(Qt,mt),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){cf(this.g)},Qt.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=Xd(u),u=m);d.i.push(new TP(d.Ya++,u)),d.G==3&&Vu(d)},Qt.prototype.N=function(){this.g.l=null,delete this.j,cf(this.g),delete this.g,Qt.aa.N.call(this)};function j_(u){Zd.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const m in d){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}T(j_,Zd);function U_(){ef.call(this),this.status=1}T(U_,ef);function Ls(u){this.g=u}T(Ls,F_),Ls.prototype.ua=function(){xt(this.g,"a")},Ls.prototype.ta=function(u){xt(this.g,new j_(u))},Ls.prototype.sa=function(u){xt(this.g,new U_)},Ls.prototype.ra=function(){xt(this.g,"b")},Mu.prototype.createWebChannel=Mu.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,sA=function(){return new Mu},iA=function(){return Su()},rA=Ni,_m={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Au.NO_ERROR=0,Au.TIMEOUT=8,Au.HTTP_ERROR=6,bc=Au,n_.COMPLETE="complete",nA=n_,Xv.EventType=ca,ca.OPEN="a",ca.CLOSE="b",ca.ERROR="c",ca.MESSAGE="d",mt.prototype.listen=mt.prototype.K,qa=Xv,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,tA=Fe}).apply(typeof ic<"u"?ic:typeof self<"u"?self:typeof window<"u"?window:{});const _w="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new wy("@firebase/firestore");function Ws(){return ds.logLevel}function U(t,...e){if(ds.logLevel<=oe.DEBUG){const n=e.map(Iy);ds.debug(`Firestore (${Zo}): ${t}`,...n)}}function kt(t,...e){if(ds.logLevel<=oe.ERROR){const n=e.map(Iy);ds.error(`Firestore (${Zo}): ${t}`,...n)}}function Fl(t,...e){if(ds.logLevel<=oe.WARN){const n=e.map(Iy);ds.warn(`Firestore (${Zo}): ${t}`,...n)}}function Iy(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t="Unexpected state"){const e=`FIRESTORE (${Zo}) INTERNAL ASSERTION FAILED: `+t;throw kt(e),new Error(e)}function Y(t,e){t||H()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class bO{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Y(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new xO(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new Ct(e)}}class PO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class CO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new PO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Y(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Y(typeof n.token=="string"),this.R=n.token,new kO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=DO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Do(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function aA(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Le(0,0))}static max(){return new X(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return jl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends jl{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const OO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends jl{construct(e,n,r){return new Oe(e,n,r)}static isValidIdentifier(e){return OO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new q(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(n)}static emptyPath(){return new Oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(me.fromString(e))}static fromName(e){return new K(me.fromString(e).popFirst(5))}static empty(){return new K(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new me(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function wm(t){return t.fields.find(e=>e.kind===2)}function Bi(t){return t.fields.filter(e=>e.kind!==2)}Th.UNKNOWN_ID=-1;class Pc{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ul{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ul(0,on.min())}}function VO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new on(i,K.empty(),e)}function lA(t){return new on(t.readTime,t.key,-1)}class on{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new on(X.min(),K.empty(),-1)}static max(){return new on(X.max(),K.empty(),-1)}}function Ty(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==uA)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new gr,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ll(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Sy(r.target.error);this.V.reject(new ll(e,i))}}static open(e,n,r,i){try{return new pd(n,e.transaction(i,r))}catch(s){throw new ll(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new MO(n)}}class di{constructor(e,n,r){this.name=e,this.version=n,this.p=r,di.S(nt())===12.2&&kt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),$i(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!GS())return!1;if(di.v())return!0;const e=nt(),n=di.S(e),r=0<n&&n<10,i=hA(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ll(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new q(j.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new q(j.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ll(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=pd.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),L.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function hA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class LO{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return $i(this.B.delete())}}class ll extends q{constructor(e,n){super(j.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ri(t){return t.name==="IndexedDbTransactionError"}class MO{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),$i(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),$i(this.store.add(e))}get(e){return $i(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),$i(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),$i(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new L((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new L((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new L((r,i)=>{n.onerror=s=>{const o=Sy(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new L((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new LO(a),c=n(a.primaryKey,a.value,l);if(c instanceof L){const h=c.catch(f=>(l.done(),L.reject(f)));r.push(h)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>L.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function $i(t){return new L((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Sy(r.target.error);n(i)}})}let ww=!1;function Sy(t){const e=di.S(nt());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new q("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ww||(ww=!0,setTimeout(()=>{throw r},0)),r}}return t}class FO{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){Ri(n)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Ps(n)}await this.X(6e4)})}}class jO{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return L.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=lA(s);Ty(o,r)>0&&(r=o)}),new on(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}mn.oe=-1;function md(t){return t==null}function Bl(t){return t===0&&1/t==-1/0}function UO(t){return typeof t=="number"&&Number.isInteger(t)&&!Bl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ew(e)),e=BO(t.get(n),e);return Ew(e)}function BO(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Ew(t){return t+""}function Bn(t){const e=t.length;if(Y(e>=2),e===2)return Y(t.charAt(0)===""&&t.charAt(1)===""),me.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&H(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:H()}s=o+2}return new me(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t,e){return[t,Ot(e)]}function dA(t,e,n){return[t,Ot(e),n]}const $O={},zO=["prefixPath","collectionGroup","readTime","documentId"],qO=["prefixPath","collectionGroup","documentId"],KO=["collectionGroup","readTime","prefixPath","documentId"],WO=["canonicalId","targetId"],GO=["targetId","path"],HO=["path","targetId"],QO=["collectionId","parent"],YO=["indexId","uid"],XO=["uid","sequenceNumber"],JO=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ZO=["indexId","uid","orderedDocumentKey"],eV=["userId","collectionPath","documentId"],tV=["userId","collectionPath","largestBatchId"],nV=["userId","collectionGroup","largestBatchId"],fA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],rV=[...fA,"documentOverlays"],pA=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],mA=pA,Ay=[...mA,"indexConfiguration","indexState","indexEntries"],iV=Ay,sV=[...Ay,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em extends cA{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function rt(t,e){const n=te(t);return di.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sc(this.root,e,this.comparator,!1)}getReverseIterator(){return new sc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sc(this.root,e,this.comparator,!0)}}class sc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=s??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ct(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sw(this.data.getIterator())}getIteratorFrom(e){return new Sw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class Sw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Bs(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new $t([])}unionWith(e){let n=new _e(Oe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yA("Invalid base64 string: "+s):s}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const oV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(Y(!!t),typeof t=="string"){let e=0;const n=oV.exec(t);if(Y(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vi(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ry(t){const e=t.mapValue.fields.__previous_value__;return xy(e)?Ry(e):e}function $l(t){const e=Tr(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class fs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},kc={nullValue:"NULL_VALUE"};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xy(t)?4:vA(t)?9007199254740991:gd(t)?10:11:H()}function Xn(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $l(t).isEqual($l(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Tr(i.timestampValue),a=Tr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return vi(i.bytesValue).isEqual(vi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),a=be(s.doubleValue);return o===a?Bl(o)===Bl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Do(t.arrayValue.values||[],e.arrayValue.values||[],Xn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Tw(o)!==Tw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Xn(o[l],a[l])))return!1;return!0}(t,e);default:return H()}}function zl(t,e){return(t.values||[]).find(n=>Xn(n,e))!==void 0}function _i(t,e){if(t===e)return 0;const n=ps(t),r=ps(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=be(s.integerValue||s.doubleValue),l=be(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Aw(t.timestampValue,e.timestampValue);case 4:return Aw($l(t),$l(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(s,o){const a=vi(s),l=vi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=ne(a[c],l[c]);if(h!==0)return h}return ne(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ne(be(s.latitude),be(o.latitude));return a!==0?a:ne(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return xw(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const f=s.fields||{},p=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,T=(l=p.value)===null||l===void 0?void 0:l.arrayValue,b=ne(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0);return b!==0?b:xw(g,T)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ei.mapValue&&o===ei.mapValue)return 0;if(s===ei.mapValue)return 1;if(o===ei.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=ne(l[f],h[f]);if(p!==0)return p;const g=_i(a[l[f]],c[h[f]]);if(g!==0)return g}return ne(l.length,h.length)}(t.mapValue,e.mapValue);default:throw H()}}function Aw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Tr(t),r=Tr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function xw(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=_i(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function Oo(t){return Im(t)}function Im(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Im(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Im(n.fields[o])}`;return i+"}"}(t.mapValue):H()}function ql(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tm(t){return!!t&&"integerValue"in t}function Kl(t){return!!t&&"arrayValue"in t}function Rw(t){return!!t&&"nullValue"in t}function bw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nc(t){return!!t&&"mapValue"in t}function gd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ul(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ul(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ul(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const _A={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function lV(t){return"nullValue"in t?kc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ql(fs.empty(),K.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?gd(t)?_A:{mapValue:{}}:H()}function uV(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ql(fs.empty(),K.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?_A:"mapValue"in t?gd(t)?{mapValue:{}}:ei:H()}function Pw(t,e){const n=_i(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Cw(t,e){const n=_i(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Nc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ul(n)}setAll(e){let n=Oe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ul(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Nc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Nc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Cs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(ul(this.value))}}function wA(t){const e=[];return Cs(t.fields,(n,r)=>{const i=new Oe([n]);if(Nc(r)){const s=wA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new $t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ue(e,0,X.min(),X.min(),X.min(),It.empty(),0)}static newFoundDocument(e,n,r,i){return new Ue(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new Ue(e,2,n,X.min(),X.min(),It.empty(),0)}static newUnknownDocument(e,n){return new Ue(e,3,n,X.min(),X.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n){this.position=e,this.inclusive=n}}function kw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=_i(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n="asc"){this.field=e,this.dir=n}}function cV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{}class ae extends EA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hV(e,n,r):n==="array-contains"?new pV(e,r):n==="in"?new RA(e,r):n==="not-in"?new mV(e,r):n==="array-contains-any"?new gV(e,r):new ae(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dV(e,r):new fV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_i(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.matchesComparison(_i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ye extends EA{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ye(e,n)}matches(e){return Lo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Lo(t){return t.op==="and"}function Sm(t){return t.op==="or"}function by(t){return IA(t)&&Lo(t)}function IA(t){for(const e of t.filters)if(e instanceof ye)return!1;return!0}function Am(t){if(t instanceof ae)return t.field.canonicalString()+t.op.toString()+Oo(t.value);if(by(t))return t.filters.map(e=>Am(e)).join(",");{const e=t.filters.map(n=>Am(n)).join(",");return`${t.op}(${e})`}}function TA(t,e){return t instanceof ae?function(r,i){return i instanceof ae&&r.op===i.op&&r.field.isEqual(i.field)&&Xn(r.value,i.value)}(t,e):t instanceof ye?function(r,i){return i instanceof ye&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&TA(o,i.filters[a]),!0):!1}(t,e):void H()}function SA(t,e){const n=t.filters.concat(e);return ye.create(n,t.op)}function AA(t){return t instanceof ae?function(n){return`${n.field.canonicalString()} ${n.op} ${Oo(n.value)}`}(t):t instanceof ye?function(n){return n.op.toString()+" {"+n.getFilters().map(AA).join(" ,")+"}"}(t):"Filter"}class hV extends ae{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class dV extends ae{constructor(e,n){super(e,"in",n),this.keys=xA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fV extends ae{constructor(e,n){super(e,"not-in",n),this.keys=xA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class pV extends ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kl(n)&&zl(n.arrayValue,this.value)}}class RA extends ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zl(this.value.arrayValue,n)}}class mV extends ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(zl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!zl(this.value.arrayValue,n)}}class gV extends ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function xm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new yV(t,e,n,r,i,s,o)}function ms(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Am(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),md(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Oo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Oo(r)).join(",")),e.ue=n}return e.ue}function cu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!TA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nw(t.startAt,e.startAt)&&Nw(t.endAt,e.endAt)}function Sh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Ah(t,e){return t.filters.filter(n=>n instanceof ae&&n.field.isEqual(e))}function Dw(t,e,n){let r=kc,i=!0;for(const s of Ah(t,e)){let o=kc,a=!0;switch(s.op){case"<":case"<=":o=lV(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=kc}Pw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Pw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Ow(t,e,n){let r=ei,i=!0;for(const s of Ah(t,e)){let o=ei,a=!0;switch(s.op){case">=":case">":o=uV(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=ei}Cw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Cw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vV(t,e,n,r,i,s,o,a){return new ea(t,e,n,r,i,s,o,a)}function yd(t){return new ea(t)}function Vw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bA(t){return t.collectionGroup!==null}function cl(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new _e(Oe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Wl(s,r))}),n.has(Oe.keyField().canonicalString())||e.ce.push(new Wl(Oe.keyField(),r))}return e.ce}function yn(t){const e=te(t);return e.le||(e.le=_V(e,cl(t))),e.le}function _V(t,e){if(t.limitType==="F")return xm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Wl(i.field,s)});const n=t.endAt?new Vo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vo(t.startAt.position,t.startAt.inclusive):null;return xm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rm(t,e){const n=t.filters.concat([e]);return new ea(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bm(t,e,n){return new ea(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vd(t,e){return cu(yn(t),yn(e))&&t.limitType===e.limitType}function PA(t){return`${ms(yn(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>AA(i)).join(", ")}]`),md(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Oo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Oo(i)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function hu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of cl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=kw(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,cl(r),i)||r.endAt&&!function(o,a,l){const c=kw(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,cl(r),i))}(t,e)}function wV(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function CA(t){return(e,n)=>{let r=!1;for(const i of cl(t)){const s=EV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function EV(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?_i(l,c):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Cs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return gA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IV=new Ne(K.comparator);function Zt(){return IV}const kA=new Ne(K.comparator);function Ka(...t){let e=kA;for(const n of t)e=e.insert(n.key,n);return e}function NA(t){let e=kA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $n(){return hl()}function DA(){return hl()}function hl(){return new bi(t=>t.toString(),(t,e)=>t.isEqual(e))}const TV=new Ne(K.comparator),SV=new _e(K.comparator);function se(...t){let e=SV;for(const n of t)e=e.add(n);return e}const AV=new _e(ne);function xV(){return AV}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bl(e)?"-0":e}}function OA(t){return{integerValue:""+t}}function RV(t,e){return UO(e)?OA(e):Py(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this._=void 0}}function bV(t,e,n){return t instanceof Gl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&xy(s)&&(s=Ry(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Mo?LA(t,e):t instanceof Fo?MA(t,e):function(i,s){const o=VA(i,s),a=Lw(o)+Lw(i.Pe);return Tm(o)&&Tm(i.Pe)?OA(a):Py(i.serializer,a)}(t,e)}function PV(t,e,n){return t instanceof Mo?LA(t,e):t instanceof Fo?MA(t,e):n}function VA(t,e){return t instanceof Hl?function(r){return Tm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Gl extends _d{}class Mo extends _d{constructor(e){super(),this.elements=e}}function LA(t,e){const n=FA(e);for(const r of t.elements)n.some(i=>Xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fo extends _d{constructor(e){super(),this.elements=e}}function MA(t,e){let n=FA(e);for(const r of t.elements)n=n.filter(i=>!Xn(i,r));return{arrayValue:{values:n}}}class Hl extends _d{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Lw(t){return be(t.integerValue||t.doubleValue)}function FA(t){return Kl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(e,n){this.field=e,this.transform=n}}function kV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Mo&&i instanceof Mo||r instanceof Fo&&i instanceof Fo?Do(r.elements,i.elements,Xn):r instanceof Hl&&i instanceof Hl?Xn(r.Pe,i.Pe):r instanceof Gl&&i instanceof Gl}(t.transform,e.transform)}class NV{constructor(e,n){this.version=e,this.transformResults=n}}class Nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wd{}function jA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ed(t.key,Nt.none()):new ta(t.key,t.data,Nt.none());{const n=t.data,r=It.empty();let i=new _e(Oe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pr(t.key,r,new $t(i.toArray()),Nt.none())}}function DV(t,e,n){t instanceof ta?function(i,s,o){const a=i.value.clone(),l=Fw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Pr?function(i,s,o){if(!Dc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Fw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(UA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function dl(t,e,n,r){return t instanceof ta?function(s,o,a,l){if(!Dc(s.precondition,o))return a;const c=s.value.clone(),h=jw(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pr?function(s,o,a,l){if(!Dc(s.precondition,o))return a;const c=jw(s.fieldTransforms,l,o),h=o.data;return h.setAll(UA(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Dc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function OV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=VA(r.transform,i||null);s!=null&&(n===null&&(n=It.empty()),n.set(r.field,s))}return n||null}function Mw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Do(r,i,(s,o)=>kV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ta extends wd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pr extends wd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function UA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Fw(t,e,n){const r=new Map;Y(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,PV(o,a,n[i]))}return r}function jw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,bV(s,o,e))}return r}class Ed extends wd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class BA extends wd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&DV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=dl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=dl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=DA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=jA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,(n,r)=>Mw(n,r))&&Do(this.baseMutations,e.baseMutations,(n,r)=>Mw(n,r))}}class ky{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Y(e.mutations.length===r.length);let i=function(){return TV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ky(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,ce;function LV(t){switch(t){default:return H();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function $A(t){if(t===void 0)return kt("GRPC error has no .code"),j.UNKNOWN;switch(t){case He.OK:return j.OK;case He.CANCELLED:return j.CANCELLED;case He.UNKNOWN:return j.UNKNOWN;case He.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case He.INTERNAL:return j.INTERNAL;case He.UNAVAILABLE:return j.UNAVAILABLE;case He.UNAUTHENTICATED:return j.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case He.NOT_FOUND:return j.NOT_FOUND;case He.ALREADY_EXISTS:return j.ALREADY_EXISTS;case He.PERMISSION_DENIED:return j.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case He.ABORTED:return j.ABORTED;case He.OUT_OF_RANGE:return j.OUT_OF_RANGE;case He.UNIMPLEMENTED:return j.UNIMPLEMENTED;case He.DATA_LOSS:return j.DATA_LOSS;default:return H()}}(ce=He||(He={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MV(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FV=new Zi([4294967295,4294967295],0);function Uw(t){const e=MV().encode(t),n=new eA;return n.update(e),new Uint8Array(n.digest())}function Bw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zi([n,r],0),new Zi([i,s],0)]}class Dy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Wa(`Invalid padding: ${n}`);if(r<0)throw new Wa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Wa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Zi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Zi.fromNumber(r)));return i.compare(FV)===1&&(i=new Zi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Uw(e),[r,i]=Bw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Dy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Uw(e),[r,i]=Bw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,du.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Id(X.min(),i,new Ne(ne),Zt(),se())}}class du{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new du(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class zA{constructor(e,n){this.targetId=e,this.me=n}}class qA{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $w{constructor(){this.fe=0,this.ge=qw(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H()}}),new du(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=qw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class jV{constructor(e){this.Le=e,this.Be=new Map,this.ke=Zt(),this.qe=zw(),this.Qe=new Ne(ne)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Sh(s))if(r===0){const o=new K(s.path);this.Ue(n,o,Ue.newNoDocument(o,X.min()))}else Y(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=vi(r).toUint8Array()}catch(l){if(l instanceof yA)return Fl("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Dy(o,i,s)}catch(l){return Fl(l instanceof Wa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Sh(a.target)){const l=new K(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ue.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=se();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Id(e,n,this.Qe,this.ke,r);return this.ke=Zt(),this.qe=zw(),this.Qe=new Ne(ne),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new $w,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new _e(ne),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new $w),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function zw(){return new Ne(K.comparator)}function qw(){return new Ne(K.comparator)}const UV={asc:"ASCENDING",desc:"DESCENDING"},BV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$V={and:"AND",or:"OR"};class zV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pm(t,e){return t.useProto3Json||md(e)?e:{value:e}}function jo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qV(t,e){return jo(t,e.toTimestamp())}function Vt(t){return Y(!!t),X.fromTimestamp(function(n){const r=Tr(n);return new Le(r.seconds,r.nanos)}(t))}function Oy(t,e){return Cm(t,e).canonicalString()}function Cm(t,e){const n=function(i){return new me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function WA(t){const e=me.fromString(t);return Y(tx(e)),e}function xh(t,e){return Oy(t.databaseId,e.path)}function es(t,e){const n=WA(e);if(n.get(1)!==t.databaseId.projectId)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(QA(n))}function GA(t,e){return Oy(t.databaseId,e)}function HA(t){const e=WA(t);return e.length===4?me.emptyPath():QA(e)}function km(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function QA(t){return Y(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Kw(t,e,n){return{name:xh(t,e),fields:n.value.mapValue.fields}}function KV(t,e,n){const r=es(t,e.name),i=Vt(e.updateTime),s=e.createTime?Vt(e.createTime):X.min(),o=new It({mapValue:{fields:e.fields}}),a=Ue.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function WV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Y(h===void 0||typeof h=="string"),Xe.fromBase64String(h||"")):(Y(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Xe.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?j.UNKNOWN:$A(c.code);return new q(h,c.message||"")}(o);n=new qA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=es(t,r.document.name),s=Vt(r.document.updateTime),o=r.document.createTime?Vt(r.document.createTime):X.min(),a=new It({mapValue:{fields:r.document.fields}}),l=Ue.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Oc(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=es(t,r.document),s=r.readTime?Vt(r.readTime):X.min(),o=Ue.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Oc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=es(t,r.document),s=r.removedTargetIds||[];n=new Oc([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new VV(i,s),a=r.targetId;n=new zA(a,o)}}return n}function Rh(t,e){let n;if(e instanceof ta)n={update:Kw(t,e.key,e.value)};else if(e instanceof Ed)n={delete:xh(t,e.key)};else if(e instanceof Pr)n={update:Kw(t,e.key,e.data),updateMask:JV(e.fieldMask)};else{if(!(e instanceof BA))return H();n={verify:xh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Gl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Mo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Fo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Hl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:qV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(t,e.precondition)),n}function Nm(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Nt.updateTime(Vt(s.updateTime)):s.exists!==void 0?Nt.exists(s.exists):Nt.none()}(e.currentDocument):Nt.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)Y(a.setToServerValue==="REQUEST_TIME"),l=new Gl;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new Mo(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new Fo(h)}else"increment"in a?l=new Hl(o,a.increment):H();const c=Oe.fromServerFormat(a.fieldPath);return new CV(c,l)}(t,i)):[];if(e.update){e.update.name;const i=es(t,e.update.name),s=new It({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new $t(c.map(h=>Oe.fromServerFormat(h)))}(e.updateMask);return new Pr(i,s,o,n,r)}return new ta(i,s,n,r)}if(e.delete){const i=es(t,e.delete);return new Ed(i,n)}if(e.verify){const i=es(t,e.verify);return new BA(i,n)}return H()}function GV(t,e){return t&&t.length>0?(Y(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Vt(i.updateTime):Vt(s);return o.isEqual(X.min())&&(o=Vt(s)),new NV(o,i.transformResults||[])}(n,e))):[]}function YA(t,e){return{documents:[GA(t,e.path)]}}function XA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=GA(t,i);const s=function(c){if(c.length!==0)return ex(ye.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Hs(p.field),direction:QV(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Pm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function JA(t){let e=HA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Y(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=ZA(f);return p instanceof ye&&by(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(T){return new Wl(Qs(T.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,md(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,g=f.values||[];return new Vo(g,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,g=f.values||[];return new Vo(g,p)}(n.endAt)),vV(e,i,o,s,a,"F",l,c)}function HV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ZA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qs(n.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qs(n.unaryFilter.field);return ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qs(n.unaryFilter.field);return ae.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qs(n.unaryFilter.field);return ae.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(n){return ae.create(Qs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ye.create(n.compositeFilter.filters.map(r=>ZA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H()}}(n.compositeFilter.op))}(t):H()}function QV(t){return UV[t]}function YV(t){return BV[t]}function XV(t){return $V[t]}function Hs(t){return{fieldPath:t.canonicalString()}}function Qs(t){return Oe.fromServerFormat(t.fieldPath)}function ex(t){return t instanceof ae?function(n){if(n.op==="=="){if(bw(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NAN"}};if(Rw(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bw(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NOT_NAN"}};if(Rw(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hs(n.field),op:YV(n.op),value:n.value}}}(t):t instanceof ye?function(n){const r=n.getFilters().map(i=>ex(i));return r.length===1?r[0]:{compositeFilter:{op:XV(n.op),filters:r}}}(t):H()}function JV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,r,i,s=X.min(),o=X.min(),a=Xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.ct=e}}function ZV(t,e){let n;if(e.document)n=KV(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=K.fromSegments(e.noDocument.path),i=ys(e.noDocument.readTime);n=Ue.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return H();{const r=K.fromSegments(e.unknownDocument.path),i=ys(e.unknownDocument.version);n=Ue.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Le(i[0],i[1]);return X.fromTimestamp(s)}(e.readTime)),n}function Ww(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:bh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:xh(s,o.key),fields:o.data.value.mapValue.fields,updateTime:jo(s,o.version.toTimestamp()),createTime:jo(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:gs(e.version)};else{if(!e.isUnknownDocument())return H();r.unknownDocument={path:n.path.toArray(),version:gs(e.version)}}return r}function bh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function gs(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ys(t){const e=new Le(t.seconds,t.nanoseconds);return X.fromTimestamp(e)}function zi(t,e){const n=(e.baseMutations||[]).map(s=>Nm(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Nm(t.ct,s)),i=Le.fromMillis(e.localWriteTimeMs);return new Cy(e.batchId,i,n,r)}function Ga(t){const e=ys(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ys(t.lastLimboFreeSnapshotVersion):X.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return Y(s.documents.length===1),yn(yd(HA(s.documents[0])))}(t.query):function(s){return yn(JA(s))}(t.query),new cr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Xe.fromBase64String(t.resumeToken))}function rx(t,e){const n=gs(e.snapshotVersion),r=gs(e.lastLimboFreeSnapshotVersion);let i;i=Sh(e.target)?YA(t.ct,e.target):XA(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ms(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function ix(t){const e=JA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bm(e,e.limit,"L"):e}function Yf(t,e){return new Ny(e.largestBatchId,Nm(t.ct,e.overlayMutation))}function Gw(t,e){const n=e.path.lastSegment();return[t,Ot(e.path.popLast()),n]}function Hw(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:gs(r.readTime),documentKey:Ot(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{getBundleMetadata(e,n){return Qw(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ys(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return Qw(e).put(function(i){return{bundleId:i.id,createTime:gs(Vt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return Yw(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:ix(s.bundledQuery),readTime:ys(s.readTime)}}(r)})}saveNamedQuery(e,n){return Yw(e).put(function(i){return{name:i.name,readTime:gs(Vt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function Qw(t){return rt(t,"bundles")}function Yw(t){return rt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Td(e,r)}getOverlay(e,n){return ka(e).get(Gw(this.userId,n)).next(r=>r?Yf(this.serializer,r):null)}getOverlays(e,n){const r=$n();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Ny(n,o);i.push(this.ht(e,a))}),L.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Ot(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ka(e).j("collectionPathOverlayIndex",a))}),L.waitFor(s)}getOverlaysForCollection(e,n,r){const i=$n(),s=Ot(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ka(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=Yf(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=$n();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ka(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,h)=>{const f=Yf(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):h.done()}).next(()=>s)}ht(e,n){return ka(e).put(function(i,s,o){const[a,l,c]=Gw(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Rh(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function ka(t){return rt(t,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{Pt(e){return rt(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Xe.fromUint8Array(r):Xe.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(be(e.integerValue));else if("doubleValue"in e){const r=be(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),Bl(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=Tr(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(vi(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?vA(e)?this.dt(n,Number.MAX_SAFE_INTEGER):gd(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):H()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(be(a)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),K.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}qi.vt=new qi;function n4(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Xw(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=n4(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class r4{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=Xw(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=Xw(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class i4{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class s4{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Na{constructor(){this.jt=new r4,this.Ht=new i4(this.jt),this.Jt=new s4(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ki(this.indexId,this.documentKey,this.arrayValue,r)}}function Lr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Jw(t.arrayValue,e.arrayValue),n!==0?n:(n=Jw(t.directionalValue,e.directionalValue),n!==0?n:K.comparator(t.documentKey,e.documentKey)))}function Jw(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.Xt=new _e((n,r)=>Oe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Y(e.collectionGroup===this.collectionId),this.nn)return!1;const n=wm(e);if(n!==void 0&&!this.sn(n))return!1;const r=Bi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.on(a,l)||!this._n(this.en[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new _e(Oe.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Pc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Pc(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Pc(r.field,r.dir==="asc"?0:1)));return new Th(Th.UNKNOWN_ID,this.collectionId,n,Ul.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){var e,n;if(Y(t instanceof ae||t instanceof ye),t instanceof ae){if(t instanceof RA){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ae.create(t.field,"==",s)))||[];return ye.create(i,"or")}return t}const r=t.filters.map(i=>sx(i));return ye.create(r,t.op)}function o4(t){if(t.getFilters().length===0)return[];const e=Vm(sx(t));return Y(ox(e)),Dm(e)||Om(e)?[e]:e.getFilters()}function Dm(t){return t instanceof ae}function Om(t){return t instanceof ye&&by(t)}function ox(t){return Dm(t)||Om(t)||function(n){if(n instanceof ye&&Sm(n)){for(const r of n.getFilters())if(!Dm(r)&&!Om(r))return!1;return!0}return!1}(t)}function Vm(t){if(Y(t instanceof ae||t instanceof ye),t instanceof ae)return t;if(t.filters.length===1)return Vm(t.filters[0]);const e=t.filters.map(r=>Vm(r));let n=ye.create(e,t.op);return n=Ph(n),ox(n)?n:(Y(n instanceof ye),Y(Lo(n)),Y(n.filters.length>1),n.filters.reduce((r,i)=>Vy(r,i)))}function Vy(t,e){let n;return Y(t instanceof ae||t instanceof ye),Y(e instanceof ae||e instanceof ye),n=t instanceof ae?e instanceof ae?function(i,s){return ye.create([i,s],"and")}(t,e):eE(t,e):e instanceof ae?eE(e,t):function(i,s){if(Y(i.filters.length>0&&s.filters.length>0),Lo(i)&&Lo(s))return SA(i,s.getFilters());const o=Sm(i)?i:s,a=Sm(i)?s:i,l=o.filters.map(c=>Vy(c,a));return ye.create(l,"or")}(t,e),Ph(n)}function eE(t,e){if(Lo(e))return SA(e,t.getFilters());{const n=e.filters.map(r=>Vy(t,r));return ye.create(n,"or")}}function Ph(t){if(Y(t instanceof ae||t instanceof ye),t instanceof ae)return t;const e=t.getFilters();if(e.length===1)return Ph(e[0]);if(IA(t))return t;const n=e.map(i=>Ph(i)),r=[];return n.forEach(i=>{i instanceof ae?r.push(i):i instanceof ye&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ye.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(){this.un=new Ly}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(on.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(on.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Ly{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _e(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _e(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Uint8Array(0);class l4{constructor(e,n){this.databaseId=n,this.cn=new Ly,this.ln=new bi(r=>ms(r),(r,i)=>cu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:Ot(i)};return tE(e).put(s)}return L.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[aA(n),""],!1,!0);return tE(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Bn(o.parent))}return r})}addFieldIndex(e,n){const r=Da(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=zs(e);return s.next(a=>{o.put(Hw(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Da(e),i=zs(e),s=$s(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Da(e),r=$s(e),i=zs(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return L.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Zw(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=$s(e);let i=!0;const s=new Map;return L.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=se();const a=[];return L.forEach(s,(l,c)=>{U("IndexedDbIndexManager",`Using index ${function(E){return`id=${E.indexId}|cg=${E.collectionGroup}|f=${E.fields.map(C=>`${C.fieldPath}:${C.kind}`).join(",")}`}(l)} to execute ${ms(n)}`);const h=function(E,C){const M=wm(C);if(M===void 0)return null;for(const D of Ah(E,M.fieldPath))switch(D.op){case"array-contains-any":return D.value.arrayValue.values||[];case"array-contains":return[D.value]}return null}(c,l),f=function(E,C){const M=new Map;for(const D of Bi(C))for(const w of Ah(E,D.fieldPath))switch(w.op){case"==":case"in":M.set(D.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return M.set(D.fieldPath.canonicalString(),w.value),Array.from(M.values())}return null}(c,l),p=function(E,C){const M=[];let D=!0;for(const w of Bi(C)){const v=w.kind===0?Dw(E,w.fieldPath,E.startAt):Ow(E,w.fieldPath,E.startAt);M.push(v.value),D&&(D=v.inclusive)}return new Vo(M,D)}(c,l),g=function(E,C){const M=[];let D=!0;for(const w of Bi(C)){const v=w.kind===0?Ow(E,w.fieldPath,E.endAt):Dw(E,w.fieldPath,E.endAt);M.push(v.value),D&&(D=v.inclusive)}return new Vo(M,D)}(c,l),T=this.In(l,c,p),b=this.In(l,c,g),P=this.Tn(l,c,f),I=this.En(l.indexId,h,T,p.inclusive,b,g.inclusive,P);return L.forEach(I,_=>r.G(_,n.limit).next(E=>{E.forEach(C=>{const M=K.fromSegments(C.documentKey);o.has(M)||(o=o.add(M),a.push(M))})}))}).next(()=>a)}return L.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=o4(ye.create(e.filters,"and")).map(r=>xm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),h=[];for(let f=0;f<l;++f){const p=n?this.dn(n[f/c]):oc,g=this.An(e,p,r[f%c],i),T=this.Rn(e,p,s[f%c],o),b=a.map(P=>this.An(e,p,P,!0));h.push(...this.createRange(g,T,b))}return h}An(e,n,r,i){const s=new Ki(e,K.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new Ki(e,K.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new Zw(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return L.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new _e(Oe.comparator),h=!1;for(const f of l.filters)for(const p of f.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?h=!0:c=c.add(p.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new Na;for(const i of Bi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);qi.vt.It(s,o)}return r.zt()}dn(e){const n=new Na;return qi.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new Na;return qi.vt.It(ql(this.databaseId,n),r.Yt(function(s){const o=Bi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new Na);let s=0;for(const o of Bi(e)){const a=r[s++];for(const l of i)if(this.fn(n,o.fieldPath)&&Kl(a))i=this.gn(i,o,a);else{const c=l.Yt(o.kind);qi.vt.It(a,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Na;l.seed(a.zt()),qi.vt.It(o,l.Yt(n.kind)),s.push(l)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof ae&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Da(e),i=zs(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return L.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(h,f){const p=f?new Ul(f.sequenceNumber,new on(ys(f.readTime),new K(Bn(f.documentKey)),f.largestBatchId)):Ul.empty(),g=h.fields.map(([T,b])=>new Pc(Oe.fromServerFormat(T),b));return new Th(h.indexId,h.collectionGroup,g,p)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ne(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Da(e),s=zs(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>L.forEach(a,l=>s.put(Hw(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return L.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?L.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),L.forEach(a,l=>this.wn(e,i,l).next(c=>{const h=this.Sn(s,l);return c.isEqual(h)?L.resolve():this.bn(e,s,l,c,h)}))))})}Dn(e,n,r,i){return $s(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return $s(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=$s(e);let s=new _e(Lr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new Ki(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,n){let r=new _e(Lr);const i=this.Vn(n,e);if(i==null)return r;const s=wm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Kl(o))for(const a of o.arrayValue.values||[])r=r.add(new Ki(n.indexId,e.key,this.dn(a),i))}else r=r.add(new Ki(n.indexId,e.key,oc,i));return r}bn(e,n,r,i,s){U("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,h,f,p){const g=l.getIterator(),T=c.getIterator();let b=Bs(g),P=Bs(T);for(;b||P;){let I=!1,_=!1;if(b&&P){const E=h(b,P);E<0?_=!0:E>0&&(I=!0)}else b!=null?_=!0:I=!0;I?(f(P),P=Bs(T)):_?(p(b),b=Bs(g)):(b=Bs(g),P=Bs(T))}}(i,s,Lr,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),L.waitFor(o)}yn(e){let n=1;return zs(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Lr(o,a)).filter((o,a,l)=>!a||Lr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Lr(o,e),l=Lr(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,oc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,oc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Cn(e,n){return Lr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(nE)}getMinOffset(e,n){return L.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||H())).next(nE)}}function tE(t){return rt(t,"collectionParents")}function $s(t){return rt(t,"indexEntries")}function Da(t){return rt(t,"indexConfiguration")}function zs(t){return rt(t,"indexState")}function nE(t){Y(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Ty(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new on(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class jt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new jt(e,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(h,f,p)=>(a++,p.delete()));s.push(l.next(()=>{Y(a===1)}));const c=[];for(const h of n.mutations){const f=dA(e,h.key.path,n.batchId);s.push(i.delete(f)),c.push(h.key)}return L.waitFor(s).next(()=>c)}function Ch(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw H();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.DEFAULT_COLLECTION_PERCENTILE=10,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jt.DEFAULT=new jt(41943040,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jt.DISABLED=new jt(-1,0,0);class Sd{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){Y(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Sd(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Mr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Ys(e),o=Mr(e);return o.add({}).next(a=>{Y(typeof a=="number");const l=new Cy(a,n,r,i),c=function(g,T,b){const P=b.baseMutations.map(_=>Rh(g.ct,_)),I=b.mutations.map(_=>Rh(g.ct,_));return{userId:T,batchId:b.batchId,localWriteTimeMs:b.localWriteTime.toMillis(),baseMutations:P,mutations:I}}(this.serializer,this.userId,l),h=[];let f=new _e((p,g)=>ne(p.canonicalString(),g.canonicalString()));for(const p of i){const g=dA(this.userId,p.key.path,a);f=f.add(p.key.path.popLast()),h.push(o.put(c)),h.push(s.put(g,$O))}return f.forEach(p=>{h.push(this.indexManager.addToCollectionParentIndex(e,p))}),e.addOnCommittedListener(()=>{this.Fn[a]=l.keys()}),L.waitFor(h).next(()=>l)})}lookupMutationBatch(e,n){return Mr(e).get(n).next(r=>r?(Y(r.userId===this.userId),zi(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?L.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Mr(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(Y(a.batchId>=r),s=zi(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Mr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Mr(e).U("userMutationsIndex",n).next(r=>r.map(i=>zi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Cc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Ys(e).J({range:i},(o,a,l)=>{const[c,h,f]=o,p=Bn(h);if(c===this.userId&&n.path.isEqual(p))return Mr(e).get(f).next(g=>{if(!g)throw H();Y(g.userId===this.userId),s.push(zi(this.serializer,g))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(ne);const i=[];return n.forEach(s=>{const o=Cc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Ys(e).J({range:a},(c,h,f)=>{const[p,g,T]=c,b=Bn(g);p===this.userId&&s.path.isEqual(b)?r=r.add(T):f.done()});i.push(l)}),L.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Cc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new _e(ne);return Ys(e).J({range:o},(l,c,h)=>{const[f,p,g]=l,T=Bn(p);f===this.userId&&r.isPrefixOf(T)?T.length===i&&(a=a.add(g)):h.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Mr(e).get(s).next(o=>{if(o===null)throw H();Y(o.userId===this.userId),r.push(zi(this.serializer,o))}))}),L.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return ax(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),L.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return L.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Ys(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Bn(s[1]);i.push(l)}else a.done()}).next(()=>{Y(i.length===0)})})}containsKey(e,n){return lx(e,this.userId,n)}Nn(e){return ux(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function lx(t,e,n){const r=Cc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ys(t).J({range:s,H:!0},(a,l,c)=>{const[h,f,p]=a;h===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Mr(t){return rt(t,"mutations")}function Ys(t){return rt(t,"documentMutations")}function ux(t){return rt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new vs(0)}static kn(){return new vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new vs(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>X.fromTimestamp(new Le(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>qs(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(Y(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return qs(e).J((o,a)=>{const l=Ga(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>L.waitFor(s)).next(()=>i)}forEachTarget(e,n){return qs(e).J((r,i)=>{const s=Ga(i);n(s)})}qn(e){return iE(e).get("targetGlobalKey").next(n=>(Y(n!==null),n))}Qn(e,n){return iE(e).put("targetGlobalKey",n)}Kn(e,n){return qs(e).put(rx(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ms(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return qs(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=Ga(a);cu(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Wr(e);return n.forEach(o=>{const a=Ot(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),L.waitFor(i)}removeMatchingKeys(e,n,r){const i=Wr(e);return L.forEach(n,s=>{const o=Ot(s.path);return L.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Wr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Wr(e);let s=se();return i.J({range:r,H:!0},(o,a,l)=>{const c=Bn(o[1]),h=new K(c);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=Ot(n.path),i=IDBKeyRange.bound([r],[aA(r)],!1,!0);let s=0;return Wr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return qs(e).get(n).next(r=>r?Ga(r):null)}}function qs(t){return rt(t,"targets")}function iE(t){return rt(t,"targetGlobal")}function Wr(t){return rt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class c4{constructor(e){this.Un=e,this.buffer=new _e(sE),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class h4{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ri(n)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ps(n)}await this.Hn(3e5)})}}class d4{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(mn.oe);const r=new c4(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(rE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rE):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Ws()<=oe.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function f4(t,e){return new d4(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(e,n){this.db=e,this.garbageCollector=f4(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return ac(e,r)}removeReference(e,n,r){return ac(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return ac(e,n)}nr(e,n){return function(i,s){let o=!1;return ux(i).Y(a=>lx(i,a,s).next(l=>(l&&(o=!0),L.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=n){const l=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,X.min()),Wr(e).delete(function(f){return[0,Ot(f.path)]}(o))))});i.push(l)}}).next(()=>L.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return ac(e,n)}tr(e,n){const r=Wr(e);let i,s=mn.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==mn.oe&&n(new K(Bn(i)),s),s=c,i=l):s=mn.oe}).next(()=>{s!==mn.oe&&n(new K(Bn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ac(t,e){return Wr(t).put(function(r,i){return{targetId:0,path:Ot(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(){this.changes=new bi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Li(e).put(r)}removeEntry(e,n,r){return Li(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],bh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=Ue.newInvalidDocument(n);return Li(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Oa(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:Ue.newInvalidDocument(n)};return Li(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Oa(n))},(i,s)=>{r={document:this.ir(n,s),size:Ch(s)}}).next(()=>r)}getEntries(e,n){let r=Zt();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=Zt(),i=new Ne(K.comparator);return this._r(e,n,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,Ch(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return L.resolve();let i=new _e(lE);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Oa(i.first()),Oa(i.last())),o=i.getIterator();let a=o.getNext();return Li(e).J({index:"documentKeyIndex",range:s},(l,c,h)=>{const f=K.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&lE(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(Oa(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),bh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Li(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=Zt();for(const f of c){const p=this.ir(K.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);p.isFoundDocument()&&(hu(n,p)||i.has(p.key))&&(h=h.insert(p.key,p))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=Zt();const o=aE(n,r),a=aE(n,on.max());return Li(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,h)=>{const f=this.ir(K.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new g4(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return oE(e).get("remoteDocumentGlobalKey").next(n=>(Y(!!n),n))}rr(e,n){return oE(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=ZV(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(X.min())))return r}return Ue.newInvalidDocument(e)}}function hx(t){return new m4(t)}class g4 extends cx{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new bi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new _e((s,o)=>ne(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=Ww(this.cr.serializer,o);i=i.add(s.path.popLast());const c=Ch(l);r+=c-a.size,n.push(this.cr.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=Ww(this.cr.serializer,o.convertToNoDocument(X.min()));n.push(this.cr.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),L.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function oE(t){return rt(t,"remoteDocumentGlobal")}function Li(t){return rt(t,"remoteDocumentsV14")}function Oa(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function aE(t,e){const n=e.documentKey.path.toArray();return[t,bh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function lE(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ne(n[s],r[s]),i)return i;return i=ne(n.length,r.length),i||(i=ne(n[n.length-2],r[r.length-2]),i||ne(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&dl(r.mutation,i,$t.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=$n();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ka();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$n();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Zt();const o=hl(),a=function(){return hl()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Pr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),dl(h.mutation,c,h.mutation.getFieldMask(),Le.now())):o.set(c.key,$t.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new y4(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=hl();let i=new Ne((o,a)=>o-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||$t.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||se()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=DA();h.forEach(p=>{if(!s.has(p)){const g=jA(n.get(p),r.get(p));g!==null&&f.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve($n());let a=-1,l=s;return o.next(c=>L.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?L.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,se())).next(h=>({batchId:a,changes:NA(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Ka();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ka();return this.indexManager.getCollectionParents(e,s).next(a=>L.forEach(a,l=>{const c=function(f,p){return new ea(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Ue.newInvalidDocument(h)))});let a=Ka();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&dl(h.mutation,c,$t.empty(),Le.now()),hu(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Vt(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:ix(i.bundledQuery),readTime:Vt(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(){this.overlays=new Ne(K.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$n();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=$n(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ne((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=$n(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=$n(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return L.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ny(n,r));let s=this.Ir.get(n);s===void 0&&(s=se(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(){this.Tr=new _e(it.Er),this.dr=new _e(it.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new it(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new me([])),r=new it(n,e),i=new it(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new me([])),r=new it(n,e),i=new it(n,e+1);let s=se();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ne(e.wr,n.wr)}static Ar(e,n){return ne(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new _e(it.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cy(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(ne);return n.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new it(new K(s),0);let a=new _e(ne);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),L.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Y(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new it(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new it(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e){this.Mr=e,this.docs=function(){return new Ne(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(n))}getEntries(e,n){let r=Zt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ue.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Zt();const o=n.path,a=new K(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ty(lA(h),r)<=0||(i.has(h.key)||hu(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){H()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new T4(this)}getSize(e){return L.resolve(this.size)}}class T4 extends cx{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e){this.persistence=e,this.Nr=new bi(n=>ms(n),cu),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new My,this.targetCount=0,this.kr=vs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n){this.qr={},this.overlays={},this.Qr=new mn(0),this.Kr=!1,this.Kr=!0,this.$r=new w4,this.referenceDelegate=e(this),this.Ur=new S4(this),this.indexManager=new a4,this.remoteDocumentCache=function(i){return new I4(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new nx(n),this.Gr=new v4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new E4(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new A4(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class A4 extends cA{constructor(e){super(),this.currentSequenceNumber=e}}class Ad{constructor(e){this.persistence=e,this.Jr=new My,this.Yr=null}static Zr(e){return new Ad(e)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e){this.serializer=e}O(e,n,r,i){const s=new pd("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Iw,{unique:!0}),l.createObjectStore("documentMutations")}(e),uE(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=L.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),uE(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:X.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Iw,{unique:!0});const f=c.store("mutations"),p=h.map(g=>f.put(g));return L.waitFor(p)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:eV});c.createIndex("collectionPathOverlayIndex",tV,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",nV,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:zO});c.createIndex("documentKeyIndex",qO),c.createIndex("collectionGroupIndex",KO)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:YO}).createIndex("sequenceNumberIndex",XO,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:JO}).createIndex("documentKeyIndex",ZO,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=Ch(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>L.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>L.forEach(a,l=>{Y(l.userId===s.userId);const c=zi(this.serializer,l);return ax(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new me(o),c=function(f){return[0,Ot(f)]}(l);s.push(n.get(c).next(h=>h?L.resolve():(f=>n.put({targetId:0,path:Ot(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>L.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:QO});const r=n.store("collectionParents"),i=new Ly,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Ot(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new me(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const h=Bn(a);return s(h.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=Ga(i),o=rx(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(f){return f.document?new K(me.fromString(f.document.name).popFirst(5)):f.noDocument?K.fromSegments(f.noDocument.path):f.unknownDocument?K.fromSegments(f.unknownDocument.path):H()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>L.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=hx(this.serializer),s=new fx(Ad.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let h=(c=a.get(l.userId))!==null&&c!==void 0?c:se();zi(this.serializer,l).keys().forEach(f=>h=h.add(f)),a.set(l.userId,h)}),L.forEach(a,(l,c)=>{const h=new Ct(c),f=Td.lt(this.serializer,h),p=s.getIndexManager(h),g=Sd.lt(h,this.serializer,p,s.referenceDelegate);return new dx(i,g,f,p).recalculateAndSaveOverlaysForDocumentKeys(new Em(n,mn.oe),l).next()})})}}function uE(t){t.createObjectStore("targetDocuments",{keyPath:GO}).createIndex("documentTargetsIndex",HO,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",WO,{unique:!0}),t.createObjectStore("targetGlobal")}const Xf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Fy{constructor(e,n,r,i,s,o,a,l,c,h,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=h,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=p=>Promise.resolve(),!Fy.D())throw new q(j.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new p4(this,i),this.Ai=n+"main",this.serializer=new nx(l),this.Ri=new di(this.Ai,this.hi,new x4(this.serializer)),this.$r=new t4,this.Ur=new u4(this.referenceDelegate,this.serializer),this.remoteDocumentCache=hx(this.serializer),this.Gr=new e4,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&kt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new q(j.FAILED_PRECONDITION,Xf);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new mn(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>lc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(Ri(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Va(e).get("owner").next(n=>L.resolve(this.vi(n)))}Ci(e){return lc(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=rt(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return L.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?L.resolve(!0):Va(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new q(j.FAILED_PRECONDITION,Xf);return!1}}return!(!this.networkEnabled||!this.inForeground)||lc(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Em(e,mn.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>lc(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return Sd.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new l4(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Td.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===17?sV:l===16?iV:l===15?Ay:l===14?mA:l===13?pA:l===12?rV:l===11?fA:void H()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new Em(a,this.Qr?this.Qr.next():mn.oe),n==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw kt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new q(j.FAILED_PRECONDITION,uA);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return Va(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new q(j.FAILED_PRECONDITION,Xf)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Va(e).put("owner",n)}static D(){return di.D()}bi(e){const n=Va(e);return n.get("owner").next(r=>this.vi(r)?(U("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):L.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(kt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;WS()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return kt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){kt("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Va(t){return rt(t,"owner")}function lc(t){return rt(t,"clientMetadata")}function R4(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new jy(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return WS()?8:hA(nt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new b4;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ws()<=oe.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Ws()<=oe.DEBUG&&U("QueryEngine","Query:",Gs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ws()<=oe.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):L.resolve())}Yi(e,n){if(Vw(n))return L.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bm(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,bm(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return Vw(n)||i.isEqual(X.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(Ws()<=oe.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gs(n)),this.rs(e,o,n,VO(i,-1)).next(a=>a))})}ts(e,n){let r=new _e(CA(e));return n.forEach((i,s)=>{hu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ws()<=oe.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Gs(n)),this.Ji.getDocumentsMatchingQuery(e,n,on.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ne(ne),this._s=new bi(s=>ms(s),cu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function mx(t,e,n,r){return new P4(t,e,n,r)}async function gx(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=se();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function C4(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,p=f.keys();let g=L.resolve();return p.forEach(T=>{g=g.next(()=>h.getEntry(l,T)).next(b=>{const P=c.docVersions.get(T);Y(P!==null),b.version.compareTo(P)<0&&(f.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),h.addEntry(b)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=se();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function yx(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function k4(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Xe.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(f,g),function(b,P,I){return b.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(p,g,h)&&a.push(n.Ur.updateTargetData(s,g))});let l=Zt(),c=se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(N4(s,o,e.documentUpdates).next(h=>{l=h.Ps,c=h.Is})),!r.isEqual(X.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return L.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function N4(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Zt();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function D4(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function O4(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Lm(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ri(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function cE(t,e,n){const r=te(t);let i=X.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=te(l),p=f._s.get(h);return p!==void 0?L.resolve(f.os.get(p)):f.Ur.getTargetData(c,h)}(r,o,yn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:se())).next(a=>(V4(r,wV(e),a),{documents:a,Ts:s})))}function V4(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class hE{constructor(){this.activeTargetIds=xV()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vx{constructor(){this.so=new hE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new hE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc=null;function Jf(){return uc===null?uc=function(){return 268435456+Math.round(2147483648*Math.random())}():uc++,"0x"+uc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class j4 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Jf(),l=this.xo(n,r.toUriEncodedString());U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(h=>(U("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Fl("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=M4[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Jf();return new Promise((o,a)=>{const l=new tA;l.setWithCredentials(!0),l.listenOnce(nA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case bc.NO_ERROR:const h=l.getResponseJson();U(wt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case bc.TIMEOUT:U(wt,`RPC '${e}' ${s} timed out`),a(new q(j.DEADLINE_EXCEEDED,"Request time out"));break;case bc.HTTP_ERROR:const f=l.getStatus();if(U(wt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const T=function(P){const I=P.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(I)>=0?I:j.UNKNOWN}(g.status);a(new q(T,g.message))}else a(new q(j.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(j.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{U(wt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);U(wt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Jf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sA(),a=iA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");U(wt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let p=!1,g=!1;const T=new F4({Io:P=>{g?U(wt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(p||(U(wt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),U(wt,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},To:()=>f.close()}),b=(P,I,_)=>{P.listen(I,E=>{try{_(E)}catch(C){setTimeout(()=>{throw C},0)}})};return b(f,qa.EventType.OPEN,()=>{g||(U(wt,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),b(f,qa.EventType.CLOSE,()=>{g||(g=!0,U(wt,`RPC '${e}' stream ${i} transport closed`),T.So())}),b(f,qa.EventType.ERROR,P=>{g||(g=!0,Fl(wt,`RPC '${e}' stream ${i} transport errored:`,P),T.So(new q(j.UNAVAILABLE,"The operation could not be completed")))}),b(f,qa.EventType.MESSAGE,P=>{var I;if(!g){const _=P.data[0];Y(!!_);const E=_,C=E.error||((I=E[0])===null||I===void 0?void 0:I.error);if(C){U(wt,`RPC '${e}' stream ${i} received error:`,C);const M=C.status;let D=function(S){const R=He[S];if(R!==void 0)return $A(R)}(M),w=C.message;D===void 0&&(D=j.INTERNAL,w="Unknown error status: "+M+" with message "+C.message),g=!0,T.So(new q(D,w)),f.close()}else U(wt,`RPC '${e}' stream ${i} received:`,_),T.bo(_)}}),b(a,rA.STAT_EVENT,P=>{P.stat===_m.PROXY?U(wt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===_m.NOPROXY&&U(wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U4(){return typeof window<"u"?window:null}function Vc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t){return new zV(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new _x(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(kt(n.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class B4 extends wx{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=WV(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Vt(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=km(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Sh(l)?{documents:YA(s,l)}:{query:XA(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=KA(s,o.resumeToken);const c=Pm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=jo(s,o.snapshotVersion.toTimestamp());const c=Pm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=HV(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=km(this.serializer),n.removeTarget=e,this.a_(n)}}class $4 extends wx{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Y(!!e.streamToken),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=GV(e.writeResults,e.commitTime),r=Vt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=km(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Rh(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Cm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Cm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class q4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(kt(n),this.D_=!1):U("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ks(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=te(l);c.L_.add(4),await fu(c),c.q_.set("Unknown"),c.L_.delete(4),await Rd(c)}(this))})}),this.q_=new q4(r,i)}}async function Rd(t){if(ks(t))for(const e of t.B_)await e(!0)}async function fu(t){for(const e of t.B_)await e(!1)}function Ex(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),zy(n)?$y(n):na(n).r_()&&By(n,e))}function Uy(t,e){const n=te(t),r=na(n);n.N_.delete(e),r.r_()&&Ix(n,e),n.N_.size===0&&(r.r_()?r.o_():ks(n)&&n.q_.set("Unknown"))}function By(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}na(t).A_(e)}function Ix(t,e){t.Q_.xe(e),na(t).R_(e)}function $y(t){t.Q_=new jV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),na(t).start(),t.q_.v_()}function zy(t){return ks(t)&&!na(t).n_()&&t.N_.size>0}function ks(t){return te(t).L_.size===0}function Tx(t){t.Q_=void 0}async function W4(t){t.q_.set("Online")}async function G4(t){t.N_.forEach((e,n)=>{By(t,e)})}async function H4(t,e){Tx(t),zy(t)?(t.q_.M_(e),$y(t)):t.q_.set("Unknown")}async function Q4(t,e,n){if(t.q_.set("Online"),e instanceof qA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kh(t,r)}else if(e instanceof Oc?t.Q_.Ke(e):e instanceof zA?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await yx(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.N_.get(l);if(!h)return;s.N_.set(l,h.withResumeToken(Xe.EMPTY_BYTE_STRING,h.snapshotVersion)),Ix(s,l);const f=new cr(h.target,l,c,h.sequenceNumber);By(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await kh(t,r)}}async function kh(t,e,n){if(!Ri(e))throw e;t.L_.add(1),await fu(t),t.q_.set("Offline"),n||(n=()=>yx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Rd(t)})}function Sx(t,e){return e().catch(n=>kh(t,n,e))}async function pu(t){const e=te(t),n=wi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Y4(e);)try{const i=await D4(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,X4(e,i)}catch(i){await kh(e,i)}Ax(e)&&xx(e)}function Y4(t){return ks(t)&&t.O_.length<10}function X4(t,e){t.O_.push(e);const n=wi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Ax(t){return ks(t)&&!wi(t).n_()&&t.O_.length>0}function xx(t){wi(t).start()}async function J4(t){wi(t).p_()}async function Z4(t){const e=wi(t);for(const n of t.O_)e.m_(n.mutations)}async function eL(t,e,n){const r=t.O_.shift(),i=ky.from(r,e,n);await Sx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await pu(t)}async function tL(t,e){e&&wi(t).V_&&await async function(r,i){if(function(o){return LV(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();wi(r).s_(),await Sx(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await pu(r)}}(t,e),Ax(t)&&xx(t)}async function fE(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=ks(n);n.L_.add(3),await fu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Rd(n)}async function nL(t,e){const n=te(t);e?(n.L_.delete(2),await Rd(n)):e||(n.L_.add(2),await fu(n),n.q_.set("Unknown"))}function na(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new B4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:W4.bind(null,t),Ro:G4.bind(null,t),mo:H4.bind(null,t),d_:Q4.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),zy(t)?$y(t):t.q_.set("Unknown")):(await t.K_.stop(),Tx(t))})),t.K_}function wi(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new $4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:J4.bind(null,t),mo:tL.bind(null,t),f_:Z4.bind(null,t),g_:eL.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await pu(t)):(await t.U_.stop(),t.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new qy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ky(t,e){if(kt("AsyncQueue",`${e}: ${t}`),Ri(t))return new q(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ka(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new Eo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Eo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Eo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.W_=new Ne(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):H():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Uo{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Uo(e,n,Eo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class iL{constructor(){this.queries=mE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=mE(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new q(j.ABORTED,"Firestore shutting down"))}}function mE(){return new bi(t=>PA(t),vd)}async function Rx(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new rL,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Ky(o,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Wy(n)}async function bx(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sL(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Wy(n)}function oL(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Wy(t){t.Y_.forEach(e=>{e.next()})}var Mm,gE;(gE=Mm||(Mm={})).ea="default",gE.Cache="cache";class Px{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Uo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Mm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.key=e}}class kx{constructor(e){this.key=e}}class aL{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=CA(e),this.Ra=new Eo(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new pE,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),g=hu(this.query,f)?f:null,T=!!p&&this.mutatedKeys.has(p.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;p&&g?p.data.isEqual(g.data)?T!==b&&(r.track({type:3,doc:g}),P=!0):this.ga(p,g)||(r.track({type:2,doc:g}),P=!0,(l&&this.Aa(g,l)>0||c&&this.Aa(g,c)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),P=!0):p&&!g&&(r.track({type:1,doc:p}),P=!0,(l||c)&&(a=!0)),P&&(g?(o=o.add(g),s=b?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(g,T){const b=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return b(g)-b(T)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new Uo(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new pE,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new kx(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Cx(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Uo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class lL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uL{constructor(e){this.key=e,this.va=!1}}class cL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new bi(a=>PA(a),vd),this.Ma=new Map,this.xa=new Set,this.Oa=new Ne(K.comparator),this.Na=new Map,this.La=new My,this.Ba={},this.ka=new Map,this.qa=vs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function hL(t,e,n=!0){const r=Mx(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Nx(r,e,n,!0),i}async function dL(t,e){const n=Mx(t);await Nx(n,e,!0,!1)}async function Nx(t,e,n,r){const i=await O4(t.localStore,yn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await fL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Ex(t.remoteStore,i),a}async function fL(t,e,n,r,i){t.Ka=(f,p,g)=>async function(b,P,I,_){let E=P.view.ma(I);E.ns&&(E=await cE(b.localStore,P.query,!1).then(({documents:w})=>P.view.ma(w,E)));const C=_&&_.targetChanges.get(P.targetId),M=_&&_.targetMismatches.get(P.targetId)!=null,D=P.view.applyChanges(E,b.isPrimaryClient,C,M);return vE(b,P.targetId,D.wa),D.snapshot}(t,f,p,g);const s=await cE(t.localStore,e,!0),o=new aL(e,s.Ts),a=o.ma(s.documents),l=du.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);vE(t,n,c.wa);const h=new lL(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function pL(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!vd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Lm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Uy(r.remoteStore,i.targetId),Fm(r,i.targetId)}).catch(Ps)):(Fm(r,i.targetId),await Lm(r.localStore,i.targetId,!0))}async function mL(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Uy(n.remoteStore,r.targetId))}async function gL(t,e,n){const r=Fx(t);try{const i=await function(o,a){const l=te(o),c=Le.now(),h=a.reduce((g,T)=>g.add(T.key),se());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let T=Zt(),b=se();return l.cs.getEntries(g,h).next(P=>{T=P,T.forEach((I,_)=>{_.isValidDocument()||(b=b.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,T)).next(P=>{f=P;const I=[];for(const _ of a){const E=OV(_,f.get(_.key).overlayedDocument);E!=null&&I.push(new Pr(_.key,E,wA(E.value.mapValue),Nt.exists(!0)))}return l.mutationQueue.addMutationBatch(g,c,I,a)}).next(P=>{p=P;const I=P.applyToLocalDocumentSet(f,b);return l.documentOverlayCache.saveOverlays(g,P.batchId,I)})}).then(()=>({batchId:p.batchId,changes:NA(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ne(ne)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await mu(r,i.changes),await pu(r.remoteStore)}catch(i){const s=Ky(i,"Failed to persist write");n.reject(s)}}async function Dx(t,e){const n=te(t);try{const r=await k4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Y(o.va):i.removedDocuments.size>0&&(Y(o.va),o.va=!1))}),await mu(n,r,e)}catch(r){await Ps(r)}}function yE(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&Wy(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yL(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ne(K.comparator);o=o.insert(s,Ue.newNoDocument(s,X.min()));const a=se().add(s),l=new Id(X.min(),new Map,new Ne(ne),o,a);await Dx(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),Gy(r)}else await Lm(r.localStore,e,!1).then(()=>Fm(r,e,n)).catch(Ps)}async function vL(t,e){const n=te(t),r=e.batch.batchId;try{const i=await C4(n.localStore,e);Vx(n,r,null),Ox(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mu(n,i)}catch(i){await Ps(i)}}async function _L(t,e,n){const r=te(t);try{const i=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Y(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);Vx(r,e,n),Ox(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mu(r,i)}catch(i){await Ps(i)}}function Ox(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Vx(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Fm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Lx(t,r)})}function Lx(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Uy(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Gy(t))}function vE(t,e,n){for(const r of n)r instanceof Cx?(t.La.addReference(r.key,e),wL(t,r)):r instanceof kx?(U("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Lx(t,r.key)):H()}function wL(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(U("SyncEngine","New document in limbo: "+n),t.xa.add(r),Gy(t))}function Gy(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(me.fromString(e)),r=t.qa.next();t.Na.set(r,new uL(n)),t.Oa=t.Oa.insert(n,r),Ex(t.remoteStore,new cr(yn(yd(n.path)),r,"TargetPurposeLimboResolution",mn.oe))}}async function mu(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=jy.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const h=te(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>L.forEach(c,p=>L.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>L.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!Ri(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const g=h.os.get(p),T=g.snapshotVersion,b=g.withLastLimboFreeSnapshotVersion(T);h.os=h.os.insert(p,b)}}}(r.localStore,s))}async function EL(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await gx(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new q(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mu(n,r.hs)}}function IL(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let i=se();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function Mx(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yL.bind(null,e),e.Ca.d_=sL.bind(null,e.eventManager),e.Ca.$a=oL.bind(null,e.eventManager),e}function Fx(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_L.bind(null,e),e}class Ql{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=xd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return mx(this.persistence,new px,e.initialUser,this.serializer)}Ga(e){return new fx(Ad.Zr,this.serializer)}Wa(e){return new vx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ql.provider={build:()=>new Ql};class TL extends Ql{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Fx(this.Ja.syncEngine),await pu(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return mx(this.persistence,new px,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new h4(r,e.asyncQueue,n)}Ha(e,n){const r=new jO(n,this.persistence);return new FO(e.asyncQueue,r)}Ga(e){const n=R4(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?jt.withCacheSize(this.cacheSizeBytes):jt.DEFAULT;return new Fy(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,U4(),Vc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new vx}}class Nh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=EL.bind(null,this.syncEngine),await nL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iL}()}createDatastore(e){const n=xd(e.databaseInfo.databaseId),r=function(s){return new j4(s)}(e.databaseInfo);return function(s,o,a,l){return new z4(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new K4(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>yE(this.syncEngine,n,0),function(){return dE.D()?new dE:new L4}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new cL(i,s,o,a,l,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await fu(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Nh.provider={build:()=>new Nh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):kt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ct.UNAUTHENTICATED,this.clientId=oA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ky(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zf(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await gx(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _E(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AL(t);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>fE(e.remoteStore,i)),t._onlineComponents=e}async function AL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Fl("Error using user provided cache. Falling back to memory cache: "+n),await Zf(t,new Ql)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Zf(t,new Ql);return t._offlineComponents}async function Ux(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await _E(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await _E(t,new Nh))),t._onlineComponents}function xL(t){return Ux(t).then(e=>e.syncEngine)}async function jm(t){const e=await Ux(t),n=e.eventManager;return n.onListen=hL.bind(null,e.syncEngine),n.onUnlisten=pL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=dL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mL.bind(null,e.syncEngine),n}function RL(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new jx({next:p=>{h.Za(),o.enqueueAndForget(()=>bx(s,f)),p.fromCache&&l.source==="server"?c.reject(new q(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new Px(a,h,{includeMetadataChanges:!0,_a:!0});return Rx(s,f)}(await jm(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(t,e,n){if(!n)throw new q(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bL(t,e,n,r){if(e===!0&&r===!0)throw new q(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function EE(t){if(!K.isDocumentKey(t))throw new q(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function IE(t){if(K.isDocumentKey(t))throw new q(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function yr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bd(t);throw new q(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hy{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new TE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new TE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new RO;switch(r.type){case"firstParty":return new CO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wE.get(n);r&&(U("ComponentProvider","Removing Datastore"),wE.delete(n),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pi(this.firestore,e,this._query)}}class Gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}}class fi extends Pi{constructor(e,n,r){super(e,n,yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new K(e))}withConverter(e){return new fi(this.firestore,e,this._path)}}function _s(t,e,...n){if(t=Ge(t),$x("collection","path",e),t instanceof Hy){const r=me.fromString(e,...n);return IE(r),new fi(t,null,r)}{if(!(t instanceof Gt||t instanceof fi))throw new q(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return IE(r),new fi(t.firestore,null,r)}}function Lc(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=oA.newId()),$x("doc","path",e),t instanceof Hy){const r=me.fromString(e,...n);return EE(r),new Gt(t,null,new K(r))}{if(!(t instanceof Gt||t instanceof fi))throw new q(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return EE(r),new Gt(t.firestore,t instanceof fi?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new _x(this,"async_queue_retry"),this.Vu=()=>{const r=Vc();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Vc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Vc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new gr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ri(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw kt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=qy.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function AE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ws extends Hy{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new SE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new SE(e),this._firestoreClient=void 0,await e}}}function PL(t,e,n){n||(n="(default)");const r=fd(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(Ll(s,e))return i;throw new q(j.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new q(j.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function Qy(t){if(t._terminated)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||CL(t),t._firestoreClient}function CL(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new aV(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Bx(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new SL(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bo(Xe.fromBase64String(e))}catch(n){throw new q(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bo(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL=/^__.*__$/;class NL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ta(e,this.data,n,this.fieldTransforms)}}class zx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function qx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Zy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Zy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Dh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(qx(this.Cu)&&kL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class DL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xd(e)}Qu(e,n,r,i=!1){return new Zy({Cu:e,methodName:n,qu:r,path:Oe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ev(t){const e=t._freezeSettings(),n=xd(t._databaseId);return new DL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function OL(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);tv("Data must be an object, but it was:",o,r);const a=Kx(r,o);let l,c;if(s.merge)l=new $t(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=Um(e,f,n);if(!o.contains(p))throw new q(j.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Gx(h,p)||h.push(p)}l=new $t(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new NL(new It(a),l,c)}class Cd extends Yy{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cd}}function VL(t,e,n,r){const i=t.Qu(1,e,n);tv("Data must be an object, but it was:",i,r);const s=[],o=It.empty();Cs(r,(l,c)=>{const h=nv(e,l,n);c=Ge(c);const f=i.Nu(h);if(c instanceof Cd)s.push(h);else{const p=gu(c,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new $t(s);return new zx(o,a,i.fieldTransforms)}function LL(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Um(e,r,n)],l=[i];if(s.length%2!=0)throw new q(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Um(e,s[p])),l.push(s[p+1]);const c=[],h=It.empty();for(let p=a.length-1;p>=0;--p)if(!Gx(c,a[p])){const g=a[p];let T=l[p];T=Ge(T);const b=o.Nu(g);if(T instanceof Cd)c.push(g);else{const P=gu(T,b);P!=null&&(c.push(g),h.set(g,P))}}const f=new $t(c);return new zx(h,f,o.fieldTransforms)}function ML(t,e,n,r=!1){return gu(n,t.Qu(r?4:3,e))}function gu(t,e){if(Wx(t=Ge(t)))return tv("Unsupported field value:",e,t),Kx(t,e);if(t instanceof Yy)return function(r,i){if(!qx(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=gu(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RV(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:jo(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jo(i.serializer,s)}}if(r instanceof Xy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bo)return{bytesValue:KA(i.serializer,r._byteString)};if(r instanceof Gt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Oy(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Jy)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return Py(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${bd(r)}`)}(t,e)}function Kx(t,e){const n={};return gA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cs(t,(r,i)=>{const s=gu(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Wx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Xy||t instanceof Bo||t instanceof Gt||t instanceof Yy||t instanceof Jy)}function tv(t,e,n){if(!Wx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=bd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Um(t,e,n){if((e=Ge(e))instanceof Pd)return e._internalPath;if(typeof e=="string")return nv(t,e);throw Dh("Field path arguments must be of type string or ",t,!1,void 0,n)}const FL=new RegExp("[~\\*/\\[\\]]");function nv(t,e,n){if(e.search(FL)>=0)throw Dh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pd(...e.split("."))._internalPath}catch{throw Dh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new q(j.INVALID_ARGUMENT,a+t+l)}function Gx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jL extends Hx{data(){return super.data()}}function rv(t,e){return typeof e=="string"?nv(t,e):e instanceof Pd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class iv{}class Yx extends iv{}function UL(t,e,...n){let r=[];e instanceof iv&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof ov).length,a=s.filter(l=>l instanceof sv).length;if(o>1||o>0&&a>0)throw new q(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class sv extends Yx{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sv(e,n,r)}_apply(e){const n=this._parse(e);return Xx(e._query,n),new Pi(e.firestore,e.converter,Rm(e._query,n))}_parse(e){const n=ev(e.firestore);return function(s,o,a,l,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new q(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){RE(f,h);const g=[];for(const T of f)g.push(xE(l,s,T));p={arrayValue:{values:g}}}else p=xE(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||RE(f,h),p=ML(a,o,f,h==="in"||h==="not-in");return ae.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ov extends iv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ov(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ye.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)Xx(o,l),o=Rm(o,l)}(e._query,n),new Pi(e.firestore,e.converter,Rm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class av extends Yx{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new av(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new q(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Wl(s,o)}(e._query,this._field,this._direction);return new Pi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ea(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function BL(t,e="asc"){const n=e,r=rv("orderBy",t);return av._create(r,n)}function xE(t,e,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new q(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bA(e)&&n.indexOf("/")!==-1)throw new q(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!K.isDocumentKey(r))throw new q(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ql(t,new K(r))}if(n instanceof Gt)return ql(t,n._key);throw new q(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bd(n)}.`)}function RE(t,e){if(!Array.isArray(t)||t.length===0)throw new q(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xx(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class $L{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>be(o.doubleValue));return new Jy(s)}convertGeoPoint(e){return new Xy(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ry(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($l(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);Y(tx(r));const i=new fs(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||kt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zL(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jx extends Hx{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Mc extends Jx{data(e={}){return super.data(e)}}class Zx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ha(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Mc(this._firestore,this._userDataWriter,r.key,r,new Ha(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Mc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ha(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Mc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ha(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:qL(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class lv extends $L{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,n)}}function eR(t){t=yr(t,Pi);const e=yr(t.firestore,ws),n=Qy(e),r=new lv(e);return Qx(t._query),RL(n,t._query).then(i=>new Zx(e,r,t,i))}function bE(t,e,n,...r){t=yr(t,Gt);const i=yr(t.firestore,ws),s=ev(i);let o;return o=typeof(e=Ge(e))=="string"||e instanceof Pd?LL(s,"updateDoc",t._key,e,n,r):VL(s,"updateDoc",t._key,e),uv(i,[o.toMutation(t._key,Nt.exists(!0))])}function KL(t){return uv(yr(t.firestore,ws),[new Ed(t._key,Nt.none())])}function kd(t,e){const n=yr(t.firestore,ws),r=Lc(t),i=zL(t.converter,e);return uv(n,[OL(ev(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Nt.exists(!1))]).then(()=>r)}function WL(t,...e){var n,r,i;t=Ge(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||AE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(AE(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof Gt)c=yr(t.firestore,ws),h=yd(t._key.path),l={next:f=>{e[o]&&e[o](GL(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=yr(t,Pi);c=yr(f.firestore,ws),h=f._query;const p=new lv(c);l={next:g=>{e[o]&&e[o](new Zx(c,p,f,g))},error:e[o+1],complete:e[o+2]},Qx(t._query)}return function(p,g,T,b){const P=new jx(b),I=new Px(g,P,T);return p.asyncQueue.enqueueAndForget(async()=>Rx(await jm(p),I)),()=>{P.Za(),p.asyncQueue.enqueueAndForget(async()=>bx(await jm(p),I))}}(Qy(c),h,a,l)}function uv(t,e){return function(r,i){const s=new gr;return r.asyncQueue.enqueueAndForget(async()=>gL(await xL(r),i,s)),s.promise}(Qy(t),e)}function GL(t,e,n){const r=n.docs.get(e._key),i=new lv(t);return new Jx(t,i,e._key,r,new Ha(n.hasPendingWrites,n.fromCache),e.converter)}class HL{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=XL(),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function QL(t){return new HL(t)}class YL{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Nh.provider,this._offlineComponentProvider={build:n=>new TL(n,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}function XL(t){return new YL(void 0)}(function(e,n=!0){(function(i){Zo=i})(bs),hs(new yi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ws(new bO(r.getProvider("auth-internal")),new NO(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fs(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Hn(_w,"4.7.3",e),Hn(_w,"4.7.3","esm2017")})();var zt=function(){return zt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},zt.apply(this,arguments)};function cv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Yl(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function tR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JL=tR,nR=new lu("auth","Firebase",tR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=new wy("@firebase/auth");function ZL(t,...e){Oh.logLevel<=oe.WARN&&Oh.warn(`Auth (${bs}): ${t}`,...e)}function Fc(t,...e){Oh.logLevel<=oe.ERROR&&Oh.error(`Auth (${bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,...e){throw hv(t,...e)}function Qn(t,...e){return hv(t,...e)}function rR(t,e,n){const r=Object.assign(Object.assign({},JL()),{[e]:n});return new lu("auth","Firebase",r).create(e,{appName:t.name})}function pi(t){return rR(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nR.create(t,...e)}function ee(t,e,...n){if(!t)throw hv(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fc(e),new Error(e)}function Sr(t,e){t||hr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eM(){return PE()==="http:"||PE()==="https:"}function PE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eM()||oD()||"connection"in navigator)?navigator.onLine:!0}function nM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sr(n>e,"Short delay should be less than long delay!"),this.isMobile=rD()||aD()}get(){return tM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t,e){Sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM=new yu(3e4,6e4);function Ns(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ci(t,e,n,r,i={}){return sR(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=uu(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return sD()||(c.referrerPolicy="no-referrer"),iR.fetch()(oR(t,t.config.apiHost,n,a),c)})}async function sR(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rM),e);try{const i=new oM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw cc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw cc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw cc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw cc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw rR(t,h,c);Dn(t,h)}}catch(i){if(i instanceof Zn)throw i;Dn(t,"network-request-failed",{message:String(i)})}}async function Nd(t,e,n,r,i={}){const s=await Ci(t,e,n,r,i);return"mfaPendingCredential"in s&&Dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function oR(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?dv(t.config,i):`${t.config.apiScheme}://${i}`}function sM(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qn(this.auth,"network-request-failed")),iM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qn(t,e,r);return i.customData._tokenResponse=n,i}function CE(t){return t!==void 0&&t.enterprise!==void 0}class aM{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sM(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function lM(t,e){return Ci(t,"GET","/v2/recaptchaConfig",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uM(t,e){return Ci(t,"POST","/v1/accounts:delete",e)}async function aR(t,e){return Ci(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cM(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),i=fv(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fl(ep(i.auth_time)),issuedAtTime:fl(ep(i.iat)),expirationTime:fl(ep(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ep(t){return Number(t)*1e3}function fv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fc("JWT malformed, contained fewer than 3 sections"),null;try{const i=$S(n);return i?JSON.parse(i):(Fc("Failed to decode base64 JWT payload"),null)}catch(i){return Fc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kE(t){const e=fv(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zn&&hM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fl(this.lastLoginAt),this.creationTime=fl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vh(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xl(t,aR(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?lR(s.providerUserInfo):[],a=pM(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $m(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function fM(t){const e=Ge(t);await Vh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lR(t){return t.map(e=>{var{providerId:n}=e,r=cv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mM(t,e){const n=await sR(t,{},async()=>{const r=uu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=oR(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iR.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gM(t,e){return Ci(t,"POST","/v2/accounts:revokeToken",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=kE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Io;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Io,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=cv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $m(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xl(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cM(this,e)}reload(){return fM(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ur(this.auth.app))return Promise.reject(pi(this.auth));const e=await this.getIdToken();return await Xl(this,uM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:E,emailVerified:C,isAnonymous:M,providerData:D,stsTokenManager:w}=n;ee(E&&w,e,"internal-error");const v=Io.fromJSON(this.name,w);ee(typeof E=="string",e,"internal-error"),Fr(f,e.name),Fr(p,e.name),ee(typeof C=="boolean",e,"internal-error"),ee(typeof M=="boolean",e,"internal-error"),Fr(g,e.name),Fr(T,e.name),Fr(b,e.name),Fr(P,e.name),Fr(I,e.name),Fr(_,e.name);const S=new dr({uid:E,auth:e,email:p,emailVerified:C,displayName:f,isAnonymous:M,photoURL:T,phoneNumber:g,tenantId:b,stsTokenManager:v,createdAt:I,lastLoginAt:_});return D&&Array.isArray(D)&&(S.providerData=D.map(R=>Object.assign({},R))),P&&(S._redirectEventId=P),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Io;i.updateFromServerResponse(n);const s=new dr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vh(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?lR(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Io;a.updateFromIdToken(r);const l=new dr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $m(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=new Map;function fr(t){Sr(t instanceof Function,"Expected a class definition");let e=NE.get(t);return e?(Sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,NE.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uR.type="NONE";const DE=uR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t,e,n){return`firebase:${t}:${e}:${n}`}class To{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=jc(this.userKey,i.apiKey,s),this.fullPersistenceKey=jc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new To(fr(DE),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||fr(DE);const o=jc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=dr._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new To(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new To(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mR(e))return"Blackberry";if(gR(e))return"Webos";if(hR(e))return"Safari";if((e.includes("chrome/")||dR(e))&&!e.includes("edge/"))return"Chrome";if(pR(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cR(t=nt()){return/firefox\//i.test(t)}function hR(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dR(t=nt()){return/crios\//i.test(t)}function fR(t=nt()){return/iemobile/i.test(t)}function pR(t=nt()){return/android/i.test(t)}function mR(t=nt()){return/blackberry/i.test(t)}function gR(t=nt()){return/webos/i.test(t)}function pv(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yM(t=nt()){var e;return pv(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vM(){return lD()&&document.documentMode===10}function yR(t=nt()){return pv(t)||pR(t)||gR(t)||mR(t)||/windows phone/i.test(t)||fR(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t,e=[]){let n;switch(t){case"Browser":n=OE(nt());break;case"Worker":n=`${OE(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wM(t,e={}){return Ci(t,"GET","/v2/passwordPolicy",Ns(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM=6;class IM{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:EM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new VE(this),this.idTokenSubscription=new VE(this),this.beforeStateQueue=new _M(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await To.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await aR(this,{idToken:e}),r=await dr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ur(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ur(this.app))return Promise.reject(pi(this));const n=e?Ge(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ur(this.app)?Promise.reject(pi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ur(this.app)?Promise.reject(pi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wM(this),n=new IM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fr(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[fr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ra(t){return Ge(t)}class VE{constructor(e){this.auth=e,this.observer=null,this.addObserver=pD(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SM(t){Dd=t}function _R(t){return Dd.loadJS(t)}function AM(){return Dd.recaptchaEnterpriseScript}function xM(){return Dd.gapiScript}function RM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bM="recaptcha-enterprise",PM="NO_RECAPTCHA";class CM{constructor(e){this.type=bM,this.auth=ra(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{lM(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new aM(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;CE(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(PM)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&CE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=AM();l.length!==0&&(l+=a),_R(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function LE(t,e,n,r=!1){const i=new CM(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ME(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await LE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await LE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kM(t,e){const n=fd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ll(s,e??{}))return i;Dn(i,"already-initialized")}return n.initialize({options:e})}function NM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DM(t,e,n){const r=ra(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=wR(e),{host:o,port:a}=OM(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),VM()}function wR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OM(t){const e=wR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:FE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:FE(o)}}}function FE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,n){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}async function LM(t,e){return Ci(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MM(t,e){return Nd(t,"POST","/v1/accounts:signInWithPassword",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FM(t,e){return Nd(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}async function jM(t,e){return Nd(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends mv{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Jl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Jl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ME(e,n,"signInWithPassword",MM);case"emailLink":return FM(e,{email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ME(e,r,"signUpPassword",LM);case"emailLink":return jM(e,{idToken:n,email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t,e){return Nd(t,"POST","/v1/accounts:signInWithIdp",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM="http://localhost";class Es extends mv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=cv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Es(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return So(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,So(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,So(e,n)}buildRequest(){const e={requestUri:UM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=uu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $M(t){const e=$a(za(t)).link,n=e?$a(za(e)).deep_link_id:null,r=$a(za(t)).deep_link_id;return(r?$a(za(r)).link:null)||r||n||e||t}class gv{constructor(e){var n,r,i,s,o,a;const l=$a(za(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=BM((i=l.mode)!==null&&i!==void 0?i:null);ee(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$M(e);try{return new gv(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.providerId=ia.PROVIDER_ID}static credential(e,n){return Jl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gv.parseLink(n);return ee(r,"argument-error"),Jl._fromEmailAndCode(e,r.code,r.tenantId)}}ia.PROVIDER_ID="password";ia.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ia.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends ER{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends vu{constructor(){super("facebook.com")}static credential(e){return Es._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends vu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Es._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hr.credential(n,r)}catch{return null}}}Hr.GOOGLE_SIGN_IN_METHOD="google.com";Hr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends vu{constructor(){super("github.com")}static credential(e){return Es._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends vu{constructor(){super("twitter.com")}static credential(e,n){return Es._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yr.credential(n,r)}catch{return null}}}Yr.TWITTER_SIGN_IN_METHOD="twitter.com";Yr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dr._fromIdTokenResponse(e,r,i),o=jE(r);return new $o({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jE(r);return new $o({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh extends Zn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Lh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Lh(e,n,r,i)}}function IR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Lh._fromErrorAndOperation(t,s,e,r):s})}async function zM(t,e,n=!1){const r=await Xl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $o._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qM(t,e,n=!1){const{auth:r}=t;if(ur(r.app))return Promise.reject(pi(r));const i="reauthenticate";try{const s=await Xl(t,IR(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=fv(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),$o._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Dn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(t,e,n=!1){if(ur(t.app))return Promise.reject(pi(t));const r="signIn",i=await IR(t,r,e),s=await $o._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function KM(t,e){return TR(ra(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WM(t){const e=ra(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function GM(t,e,n){return ur(t.app)?Promise.reject(pi(t)):KM(Ge(t),ia.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&WM(t),r})}function HM(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function QM(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}const Mh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mh,"1"),this.storage.removeItem(Mh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM=1e3,XM=10;class AR extends SR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}AR.type="LOCAL";const JM=AR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR extends SR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xR.type="SESSION";const RR=xR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Od(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await ZM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Od.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=yv("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(){return window}function tF(t){Yn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(){return typeof Yn().WorkerGlobalScope<"u"&&typeof Yn().importScripts=="function"}async function nF(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rF(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iF(){return bR()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="firebaseLocalStorageDb",sF=1,Fh="firebaseLocalStorage",CR="fbase_key";class _u{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vd(t,e){return t.transaction([Fh],e?"readwrite":"readonly").objectStore(Fh)}function oF(){const t=indexedDB.deleteDatabase(PR);return new _u(t).toPromise()}function zm(){const t=indexedDB.open(PR,sF);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fh,{keyPath:CR})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fh)?e(r):(r.close(),await oF(),e(await zm()))})})}async function UE(t,e,n){const r=Vd(t,!0).put({[CR]:e,value:n});return new _u(r).toPromise()}async function aF(t,e){const n=Vd(t,!1).get(e),r=await new _u(n).toPromise();return r===void 0?null:r.value}function BE(t,e){const n=Vd(t,!0).delete(e);return new _u(n).toPromise()}const lF=800,uF=3;class kR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uF)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Od._getInstance(iF()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nF(),!this.activeServiceWorker)return;this.sender=new eF(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rF()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zm();return await UE(e,Mh,"1"),await BE(e,Mh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>UE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aF(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>BE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vd(i,!1).getAll();return new _u(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kR.type="LOCAL";const cF=kR;new yu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hF(t,e){return e?fr(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv extends mv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,n){return So(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dF(t){return TR(t.auth,new vv(t),t.bypassAuthState)}function fF(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),qM(n,new vv(t),t.bypassAuthState)}async function pF(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),zM(n,new vv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dF;case"linkViaPopup":case"linkViaRedirect":return pF;case"reauthViaPopup":case"reauthViaRedirect":return fF;default:Dn(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mF=new yu(2e3,1e4);class co extends NR{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,co.currentPopupAction&&co.currentPopupAction.cancel(),co.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=yv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,co.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mF.get())};e()}}co.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF="pendingRedirect",Uc=new Map;class yF extends NR{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Uc.get(this.auth._key());if(!e){try{const r=await vF(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Uc.set(this.auth._key(),e)}return this.bypassAuthState||Uc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vF(t,e){const n=EF(e),r=wF(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _F(t,e){Uc.set(t._key(),e)}function wF(t){return fr(t._redirectPersistence)}function EF(t){return jc(gF,t.config.apiKey,t.name)}async function IF(t,e,n=!1){if(ur(t.app))return Promise.reject(pi(t));const r=ra(t),i=hF(r,e),o=await new yF(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TF=10*60*1e3;class SF{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AF(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!DR(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TF&&this.cachedEventUids.clear(),this.cachedEventUids.has($E(e))}saveEventToCache(e){this.cachedEventUids.add($E(e)),this.lastProcessedEventTime=Date.now()}}function $E(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function DR({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AF(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return DR(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xF(t,e={}){return Ci(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bF=/^https?/;async function PF(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xF(t);for(const n of e)try{if(CF(n))return}catch{}Dn(t,"unauthorized-domain")}function CF(t){const e=Bm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bF.test(n))return!1;if(RF.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kF=new yu(3e4,6e4);function zE(){const t=Yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NF(t){return new Promise((e,n)=>{var r,i,s;function o(){zE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zE(),n(Qn(t,"network-request-failed"))},timeout:kF.get()})}if(!((i=(r=Yn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yn().gapi)===null||s===void 0)&&s.load)o();else{const a=RM("iframefcb");return Yn()[a]=()=>{gapi.load?o():n(Qn(t,"network-request-failed"))},_R(`${xM()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Bc=null,e})}let Bc=null;function DF(t){return Bc=Bc||NF(t),Bc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OF=new yu(5e3,15e3),VF="__/auth/iframe",LF="emulator/auth/iframe",MF={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jF(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dv(e,LF):`https://${t.config.authDomain}/${VF}`,r={apiKey:e.apiKey,appName:t.name,v:bs},i=FF.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${uu(r).slice(1)}`}async function UF(t){const e=await DF(t),n=Yn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:jF(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MF,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qn(t,"network-request-failed"),a=Yn().setTimeout(()=>{s(o)},OF.get());function l(){Yn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BF={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$F=500,zF=600,qF="_blank",KF="http://localhost";class qE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WF(t,e,n,r=$F,i=zF){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},BF),{width:r.toString(),height:i.toString(),top:s,left:o}),c=nt().toLowerCase();n&&(a=dR(c)?qF:n),cR(c)&&(e=e||KF,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,T])=>`${p}${g}=${T},`,"");if(yM(c)&&a!=="_self")return GF(e||"",a),new qE(null);const f=window.open(e||"",a,h);ee(f,t,"popup-blocked");try{f.focus()}catch{}return new qE(f)}function GF(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HF="__/auth/handler",QF="emulator/auth/handler",YF=encodeURIComponent("fac");async function KE(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:i};if(e instanceof ER){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fD(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof vu){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${YF}=${encodeURIComponent(l)}`:"";return`${XF(t)}?${uu(a).slice(1)}${c}`}function XF({config:t}){return t.emulator?dv(t,QF):`https://${t.authDomain}/${HF}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="webStorageSupport";class JF{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=RR,this._completeRedirectFn=IF,this._overrideRedirectResult=_F}async _openPopup(e,n,r,i){var s;Sr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await KE(e,n,r,Bm(),i);return WF(e,o,yv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await KE(e,n,r,Bm(),i);return tF(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UF(e),r=new SF(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tp,{type:tp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[tp];o!==void 0&&n(!!o),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PF(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yR()||hR()||pv()}}const ZF=JF;var WE="@firebase/auth",GE="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t6(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function n6(t){hs(new yi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vR(t)},c=new TM(r,i,s,l);return NM(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hs(new yi("auth-internal",e=>{const n=ra(e.getProvider("auth").getImmediate());return(r=>new e6(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(WE,GE,t6(t)),Hn(WE,GE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r6=5*60,i6=KS("authIdTokenMaxAge")||r6;let HE=null;const s6=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>i6)return;const i=n==null?void 0:n.token;HE!==i&&(HE=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function OR(t=XS()){const e=fd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kM(t,{popupRedirectResolver:ZF,persistence:[cF,JM,RR]}),r=KS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=s6(s.toString());QM(n,o,()=>o(n.currentUser)),HM(n,a=>o(a))}}const i=zS("auth");return i&&DM(n,`http://${i}`),n}function o6(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}SM({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",o6().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});n6("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR="firebasestorage.googleapis.com",LR="storageBucket",a6=2*60*1e3,l6=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Zn{constructor(e,n,r=0){super(np(e),`Firebase Storage: ${n} (${np(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return np(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Be||(Be={}));function np(t){return"storage/"+t}function _v(){const t="An unknown error occurred, please check the error payload for server response.";return new $e(Be.UNKNOWN,t)}function u6(t){return new $e(Be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function c6(t){return new $e(Be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function h6(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $e(Be.UNAUTHENTICATED,t)}function d6(){return new $e(Be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function f6(t){return new $e(Be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function p6(){return new $e(Be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function m6(){return new $e(Be.CANCELED,"User canceled the upload/download.")}function g6(t){return new $e(Be.INVALID_URL,"Invalid URL '"+t+"'.")}function y6(t){return new $e(Be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function v6(){return new $e(Be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+LR+"' property when initializing the app?")}function _6(){return new $e(Be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function w6(){return new $e(Be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function E6(t){return new $e(Be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qm(t){return new $e(Be.INVALID_ARGUMENT,t)}function MR(){return new $e(Be.APP_DELETED,"The Firebase app was deleted.")}function I6(t){return new $e(Be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function pl(t,e){return new $e(Be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function La(t){throw new $e(Be.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=en.makeFromUrl(e,n)}catch{return new en(e,"")}if(r.path==="")return r;throw y6(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(C){C.path_=decodeURIComponent(C.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${i}/o${p}`,"i"),T={bucket:1,path:3},b=n===VR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",I=new RegExp(`^https?://${b}/${i}/${P}`,"i"),E=[{regex:a,indices:l,postModify:s},{regex:g,indices:T,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let C=0;C<E.length;C++){const M=E[C],D=M.regex.exec(e);if(D){const w=D[M.indices.bucket];let v=D[M.indices.path];v||(v=""),r=new en(w,v),M.postModify(r);break}}if(r==null)throw g6(e);return r}}class T6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S6(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...P){c||(c=!0,e.apply(null,P))}function f(P){i=setTimeout(()=>{i=null,t(g,l())},P)}function p(){s&&clearTimeout(s)}function g(P,...I){if(c){p();return}if(P){p(),h.call(null,P,...I);return}if(l()||o){p(),h.call(null,P,...I);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,f(E)}let T=!1;function b(P){T||(T=!0,p(),!c&&(i!==null?(P||(a=2),clearTimeout(i),f(0)):P||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,b(!0)},n),b}function A6(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x6(t){return t!==void 0}function R6(t){return typeof t=="object"&&!Array.isArray(t)}function wv(t){return typeof t=="string"||t instanceof String}function QE(t){return Ev()&&t instanceof Blob}function Ev(){return typeof Blob<"u"}function YE(t,e,n,r){if(r<e)throw qm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw qm(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function FR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ts;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ts||(ts={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b6(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P6{constructor(e,n,r,i,s,o,a,l,c,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,T)=>{this.resolve_=g,this.reject_=T,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new hc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ts.NO_ERROR,l=s.getStatus();if(!a||b6(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===ts.ABORT;r(!1,new hc(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new hc(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());x6(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=_v();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?MR():m6();o(l)}else{const l=p6();o(l)}};this.canceled_?n(!1,new hc(!1,null,!0)):this.backoffId_=S6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&A6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class hc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function C6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function k6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function N6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function D6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function O6(t,e,n,r,i,s,o=!0){const a=FR(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return N6(c,e),C6(c,n),k6(c,s),D6(c,r),new P6(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V6(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function L6(...t){const e=V6();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ev())return new Blob(t);throw new $e(Be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function M6(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F6(t){if(typeof atob>"u")throw E6("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rp{constructor(e,n){this.data=e,this.contentType=n||null}}function j6(t,e){switch(t){case zn.RAW:return new rp(jR(e));case zn.BASE64:case zn.BASE64URL:return new rp(UR(t,e));case zn.DATA_URL:return new rp(B6(e),$6(e))}throw _v()}function jR(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function U6(t){let e;try{e=decodeURIComponent(t)}catch{throw pl(zn.DATA_URL,"Malformed data URL.")}return jR(e)}function UR(t,e){switch(t){case zn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw pl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case zn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw pl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=F6(e)}catch(i){throw i.message.includes("polyfill")?i:pl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class BR{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw pl(zn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=z6(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function B6(t){const e=new BR(t);return e.base64?UR(zn.BASE64,e.rest):U6(e.rest)}function $6(t){return new BR(t).contentType}function z6(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){let r=0,i="";QE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(QE(this.data_)){const r=this.data_,i=M6(r,e,n);return i===null?null:new Xr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Xr(r,!0)}}static getBlob(...e){if(Ev()){const n=e.map(r=>r instanceof Xr?r.data_:r);return new Xr(L6.apply(null,n))}else{const n=e.map(o=>wv(o)?j6(zn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Xr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(t){let e;try{e=JSON.parse(t)}catch{return null}return R6(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q6(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function K6(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function zR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W6(t,e){return e}class bt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||W6}}let dc=null;function G6(t){return!wv(t)||t.length<2?t:zR(t)}function qR(){if(dc)return dc;const t=[];t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));function e(s,o){return G6(o)}const n=new bt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new bt("size");return i.xform=r,t.push(i),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),dc=t,dc}function H6(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new en(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Q6(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return H6(r,t),r}function KR(t,e,n){const r=$R(e);return r===null?null:Q6(t,r,n)}function Y6(t,e,n,r){const i=$R(e);if(i===null||!wv(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,f=t.fullPath,p="/b/"+o(h)+"/o/"+o(f),g=Iv(p,n,r),T=FR({alt:"media",token:c});return g+T})[0]}function X6(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class WR{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t){if(!t)throw _v()}function J6(t,e){function n(r,i){const s=KR(t,i,e);return GR(s!==null),s}return n}function Z6(t,e){function n(r,i){const s=KR(t,i,e);return GR(s!==null),Y6(s,i,t.host,t._protocol)}return n}function HR(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=d6():i=h6():n.getStatus()===402?i=c6(t.bucket):n.getStatus()===403?i=f6(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function e5(t){const e=HR(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=u6(t.path)),s.serverResponse=i.serverResponse,s}return n}function t5(t,e,n){const r=e.fullServerUrl(),i=Iv(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new WR(i,s,Z6(t,n),o);return a.errorHandler=e5(e),a}function n5(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function r5(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=n5(null,e)),r}function i5(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let C=0;C<2;C++)E=E+Math.random().toString().slice(2);return E}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=r5(e,r,i),h=X6(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=Xr.getBlob(f,r,p);if(g===null)throw _6();const T={name:c.fullPath},b=Iv(s,t.host,t._protocol),P="POST",I=t.maxUploadRetryTime,_=new WR(b,P,J6(t,n),I);return _.urlParams=T,_.headers=o,_.body=g.uploadData(),_.errorHandler=HR(e),_}class s5{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw La("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw La("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw La("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw La("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw La("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class o5 extends s5{initXhr(){this.xhr_.responseType="text"}}function QR(){return new o5}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this._service=e,n instanceof en?this._location=n:this._location=en.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Is(e,n)}get root(){const e=new en(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zR(this._location.path)}get storage(){return this._service}get parent(){const e=q6(this._location.path);if(e===null)return null;const n=new en(this._location.bucket,e);return new Is(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw I6(e)}}function a5(t,e,n){t._throwIfRoot("uploadBytes");const r=i5(t.storage,t._location,qR(),new Xr(e,!0),n);return t.storage.makeRequestWithTokens(r,QR).then(i=>({metadata:i,ref:t}))}function l5(t){t._throwIfRoot("getDownloadURL");const e=t5(t.storage,t._location,qR());return t.storage.makeRequestWithTokens(e,QR).then(n=>{if(n===null)throw w6();return n})}function u5(t,e){const n=K6(t._location.path,e),r=new en(t._location.bucket,n);return new Is(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c5(t){return/^[A-Za-z]+:\/\//.test(t)}function h5(t,e){return new Is(t,e)}function YR(t,e){if(t instanceof Tv){const n=t;if(n._bucket==null)throw v6();const r=new Is(n,n._bucket);return e!=null?YR(r,e):r}else return e!==void 0?u5(t,e):t}function d5(t,e){if(e&&c5(e)){if(t instanceof Tv)return h5(t,e);throw qm("To use ref(service, url), the first argument must be a Storage instance.")}else return YR(t,e)}function XE(t,e){const n=e==null?void 0:e[LR];return n==null?null:en.makeFromBucketSpec(n,t)}function f5(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:nD(i,t.app.options.projectId))}class Tv{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=VR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=a6,this._maxUploadRetryTime=l6,this._requests=new Set,i!=null?this._bucket=en.makeFromBucketSpec(i,this._host):this._bucket=XE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=en.makeFromBucketSpec(this._url,e):this._bucket=XE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){YE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){YE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Is(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new T6(MR());{const o=O6(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const JE="@firebase/storage",ZE="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="storage";function p5(t,e,n){return t=Ge(t),a5(t,e,n)}function m5(t){return t=Ge(t),l5(t)}function g5(t,e){return t=Ge(t),d5(t,e)}function y5(t=XS(),e){t=Ge(t);const r=fd(t,XR).getImmediate({identifier:e}),i=eD("storage");return i&&v5(r,...i),r}function v5(t,e,n,r={}){f5(t,e,n,r)}function _5(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Tv(n,r,i,e,bs)}function w5(){hs(new yi(XR,_5,"PUBLIC").setMultipleInstances(!0)),Hn(JE,ZE,""),Hn(JE,ZE,"esm2017")}w5();const Ld={apiKey:"AIzaSyB5QFjl6jvIKBCRn12esrOba58STMP9dM0",authDomain:"galeriazdjec-f4180.firebaseapp.com",projectId:"galeriazdjec-f4180",storageBucket:"galeriazdjec-f4180.appspot.com",messagingSenderId:"789024046392",appId:"1:789024046392:web:26d9e3195917ed28e515cd"},Sv=YS(Ld),Un=PL(Sv,{localCache:QL({}),experimentalForceLongPolling:!0});_s(Un,"images");const E5=y5(Sv,{experimentalForceLongPolling:!0});OR(Sv);console.log("✅ Firebase Project ID:",Ld.projectId);console.log("✅ Firebase Config:",Ld);console.log("✅ Firebase Storage Bucket:",Ld.storageBucket);function JR(){const[t,e]=V.useState(""),n=async i=>{try{await kd(_s(Un,"tasks"),{text:i,completed:!1,timestamp:new Date}),console.log("Task added to Firestore!")}catch(s){console.error("Error adding task: ",s)}},r=i=>{i.preventDefault(),t.trim()&&(n(t),e(""))};return A.jsxs("form",{className:"flex flex-col space-y-2  !important",onSubmit:r,children:[A.jsx("input",{type:"text",className:"mt-[1px] border border-gray-300 w-[165px] rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow shadow-sm hover:shadow-md",placeholder:"What is the task today?",value:t,onChange:i=>e(i.target.value)}),A.jsx("button",{type:"submit",className:"px-4 py-0.5 mb-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75",children:"Add Task"})]})}JR.propTypes={};const e1=()=>{};let Av={},ZR={},eb=null,tb={mark:e1,measure:e1};try{typeof window<"u"&&(Av=window),typeof document<"u"&&(ZR=document),typeof MutationObserver<"u"&&(eb=MutationObserver),typeof performance<"u"&&(tb=performance)}catch{}const{userAgent:t1=""}=Av.navigator||{},Ei=Av,Re=ZR,n1=eb,fc=tb;Ei.document;const Cr=!!Re.documentElement&&!!Re.head&&typeof Re.addEventListener=="function"&&typeof Re.createElement=="function",nb=~t1.indexOf("MSIE")||~t1.indexOf("Trident/");var ke="classic",rb="duotone",nn="sharp",rn="sharp-duotone",I5=[ke,rb,nn,rn],T5={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},r1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},S5=["kit"],A5=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,x5=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,R5={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},b5={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},P5={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},C5={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},k5={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},N5={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},ib={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},D5=["solid","regular","light","thin","duotone","brands"],sb=[1,2,3,4,5,6,7,8,9,10],O5=sb.concat([11,12,13,14,15,16,17,18,19,20]),Qa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},V5=[...Object.keys(C5),...D5,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Qa.GROUP,Qa.SWAP_OPACITY,Qa.PRIMARY,Qa.SECONDARY].concat(sb.map(t=>"".concat(t,"x"))).concat(O5.map(t=>"w-".concat(t))),L5={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},M5={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},F5={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},i1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Ar="___FONT_AWESOME___",Km=16,ob="fa",ab="svg-inline--fa",Ts="data-fa-i2svg",Wm="data-fa-pseudo-element",j5="data-fa-pseudo-element-pending",xv="data-prefix",Rv="data-icon",s1="fontawesome-i2svg",U5="async",B5=["HTML","HEAD","STYLE","SCRIPT"],lb=(()=>{try{return!0}catch{return!1}})(),ub=[ke,nn,rn];function wu(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[ke]}})}const cb={...ib};cb[ke]={...ib[ke],...r1.kit,...r1["kit-duotone"]};const ns=wu(cb),Gm={...N5};Gm[ke]={...Gm[ke],...i1.kit,...i1["kit-duotone"]};const Zl=wu(Gm),Hm={...k5};Hm[ke]={...Hm[ke],...F5.kit};const rs=wu(Hm),Qm={...P5};Qm[ke]={...Qm[ke],...M5.kit};const $5=wu(Qm),z5=A5,hb="fa-layers-text",q5=x5,K5={...T5};wu(K5);const W5=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ip=Qa,zo=new Set;Object.keys(Zl[ke]).map(zo.add.bind(zo));Object.keys(Zl[nn]).map(zo.add.bind(zo));Object.keys(Zl[rn]).map(zo.add.bind(zo));const G5=[...S5,...V5],ml=Ei.FontAwesomeConfig||{};function H5(t){var e=Re.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Q5(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Re&&typeof Re.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=Q5(H5(n));i!=null&&(ml[r]=i)});const db={styleDefault:"solid",familyDefault:"classic",cssPrefix:ob,replacementClass:ab,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ml.familyPrefix&&(ml.cssPrefix=ml.familyPrefix);const qo={...db,...ml};qo.autoReplaceSvg||(qo.observeMutations=!1);const G={};Object.keys(db).forEach(t=>{Object.defineProperty(G,t,{enumerable:!0,set:function(e){qo[t]=e,gl.forEach(n=>n(G))},get:function(){return qo[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(t){qo.cssPrefix=t,gl.forEach(e=>e(G))},get:function(){return qo.cssPrefix}});Ei.FontAwesomeConfig=G;const gl=[];function Y5(t){return gl.push(t),()=>{gl.splice(gl.indexOf(t),1)}}const jr=Km,qn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function X5(t){if(!t||!Cr)return;const e=Re.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Re.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Re.head.insertBefore(e,r),t}const J5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function eu(){let t=12,e="";for(;t-- >0;)e+=J5[Math.random()*62|0];return e}function sa(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function bv(t){return t.classList?sa(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function fb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Z5(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(fb(t[n]),'" '),"").trim()}function Md(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Pv(t){return t.size!==qn.size||t.x!==qn.x||t.y!==qn.y||t.rotate!==qn.rotate||t.flipX||t.flipY}function e3(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function t3(t){let{transform:e,width:n=Km,height:r=Km,startCentered:i=!1}=t,s="";return i&&nb?s+="translate(".concat(e.x/jr-n/2,"em, ").concat(e.y/jr-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/jr,"em), calc(-50% + ").concat(e.y/jr,"em)) "):s+="translate(".concat(e.x/jr,"em, ").concat(e.y/jr,"em) "),s+="scale(".concat(e.size/jr*(e.flipX?-1:1),", ").concat(e.size/jr*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var n3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function pb(){const t=ob,e=ab,n=G.cssPrefix,r=G.replacementClass;let i=n3;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let o1=!1;function sp(){G.autoAddCss&&!o1&&(X5(pb()),o1=!0)}var r3={mixout(){return{dom:{css:pb,insertCss:sp}}},hooks(){return{beforeDOMElementCreation(){sp()},beforeI2svg(){sp()}}}};const xr=Ei||{};xr[Ar]||(xr[Ar]={});xr[Ar].styles||(xr[Ar].styles={});xr[Ar].hooks||(xr[Ar].hooks={});xr[Ar].shims||(xr[Ar].shims=[]);var Kn=xr[Ar];const mb=[],gb=function(){Re.removeEventListener("DOMContentLoaded",gb),jh=1,mb.map(t=>t())};let jh=!1;Cr&&(jh=(Re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Re.readyState),jh||Re.addEventListener("DOMContentLoaded",gb));function i3(t){Cr&&(jh?setTimeout(t,0):mb.push(t))}function Eu(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?fb(t):"<".concat(e," ").concat(Z5(n),">").concat(r.map(Eu).join(""),"</").concat(e,">")}function a1(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var op=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,l,c,h;for(r===void 0?(l=1,h=e[s[0]]):(l=0,h=r);l<o;l++)c=s[l],h=a(h,e[c],c,e);return h};function s3(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ym(t){const e=s3(t);return e.length===1?e[0].toString(16):null}function o3(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function l1(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Xm(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=l1(e);typeof Kn.hooks.addPack=="function"&&!r?Kn.hooks.addPack(t,l1(e)):Kn.styles[t]={...Kn.styles[t]||{},...i},t==="fas"&&Xm("fa",e)}const{styles:Wi,shims:a3}=Kn,l3={[ke]:Object.values(rs[ke]),[nn]:Object.values(rs[nn]),[rn]:Object.values(rs[rn])};let Cv=null,yb={},vb={},_b={},wb={},Eb={};const u3={[ke]:Object.keys(ns[ke]),[nn]:Object.keys(ns[nn]),[rn]:Object.keys(ns[rn])};function c3(t){return~G5.indexOf(t)}function h3(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!c3(i)?i:null}const Ib=()=>{const t=r=>op(Wi,(i,s,o)=>(i[o]=op(s,r,{}),i),{});yb=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),vb=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),Eb=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in Wi||G.autoFetchSvg,n=op(a3,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});_b=n.names,wb=n.unicodes,Cv=Fd(G.styleDefault,{family:G.familyDefault})};Y5(t=>{Cv=Fd(t.styleDefault,{family:G.familyDefault})});Ib();function kv(t,e){return(yb[t]||{})[e]}function d3(t,e){return(vb[t]||{})[e]}function ti(t,e){return(Eb[t]||{})[e]}function Tb(t){return _b[t]||{prefix:null,iconName:null}}function f3(t){const e=wb[t],n=kv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ii(){return Cv}const Nv=()=>({prefix:null,iconName:null,rest:[]});function Fd(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ke}=e,r=ns[n][t],i=Zl[n][t]||Zl[n][r],s=t in Kn.styles?t:null;return i||s||null}const p3={[ke]:Object.keys(rs[ke]),[nn]:Object.keys(rs[nn]),[rn]:Object.keys(rs[rn])};function jd(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[ke]:"".concat(G.cssPrefix,"-").concat(ke),[nn]:"".concat(G.cssPrefix,"-").concat(nn),[rn]:"".concat(G.cssPrefix,"-").concat(rn)};let i=null,s=ke;const o=I5.filter(l=>l!==rb);o.forEach(l=>{(t.includes(r[l])||t.some(c=>p3[l].includes(c)))&&(s=l)});const a=t.reduce((l,c)=>{const h=h3(G.cssPrefix,c);if(Wi[c]?(c=l3[s].includes(c)?$5[s][c]:c,i=c,l.prefix=c):u3[s].indexOf(c)>-1?(i=c,l.prefix=Fd(c,{family:s})):h?l.iconName=h:c!==G.replacementClass&&!o.some(f=>c===r[f])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const f=i==="fa"?Tb(l.iconName):{},p=ti(l.prefix,l.iconName);f.prefix&&(i=null),l.iconName=f.iconName||p||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!Wi.far&&Wi.fas&&!G.autoFetchSvg&&(l.prefix="fas")}return l},Nv());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===nn&&(Wi.fass||G.autoFetchSvg)&&(a.prefix="fass",a.iconName=ti(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===rn&&(Wi.fasds||G.autoFetchSvg)&&(a.prefix="fasds",a.iconName=ti(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=Ii()||"fas"),a}class m3{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},Xm(s,i[s]);const o=rs[ke][s];o&&Xm(o,i[s]),Ib()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let u1=[],ho={};const Ao={},g3=Object.keys(Ao);function y3(t,e){let{mixoutsTo:n}=e;return u1=t,ho={},Object.keys(Ao).forEach(r=>{g3.indexOf(r)===-1&&delete Ao[r]}),u1.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{ho[o]||(ho[o]=[]),ho[o].push(s[o])})}r.provides&&r.provides(Ao)}),n}function Jm(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(ho[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Ss(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ho[t]||[]).forEach(s=>{s.apply(null,n)})}function Ti(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ao[t]?Ao[t].apply(null,e):void 0}function Zm(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Ii();if(e)return e=ti(n,e)||e,a1(Sb.definitions,n,e)||a1(Kn.styles,n,e)}const Sb=new m3,v3=()=>{G.autoReplaceSvg=!1,G.observeMutations=!1,Ss("noAuto")},_3={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Cr?(Ss("beforeI2svg",t),Ti("pseudoElements2svg",t),Ti("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,i3(()=>{E3({autoReplaceSvgRoot:e}),Ss("watch",t)})}},w3={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ti(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Fd(t[0]);return{prefix:n,iconName:ti(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(G.cssPrefix,"-"))>-1||t.match(z5))){const e=jd(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ii(),iconName:ti(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Ii();return{prefix:e,iconName:ti(e,t)||t}}}},un={noAuto:v3,config:G,dom:_3,parse:w3,library:Sb,findIconDefinition:Zm,toHtml:Eu},E3=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Re}=t;(Object.keys(Kn.styles).length>0||G.autoFetchSvg)&&Cr&&G.autoReplaceSvg&&un.dom.i2svg({node:e})};function Ud(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Eu(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Cr)return;const n=Re.createElement("div");return n.innerHTML=t.html,n.children}}),t}function I3(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Pv(o)&&n.found&&!r.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=Md({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function T3(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function Dv(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:l,titleId:c,extra:h,watchable:f=!1}=t,{width:p,height:g}=n.found?n:e,T=r==="fak",b=[G.replacementClass,i?"".concat(G.cssPrefix,"-").concat(i):""].filter(M=>h.classes.indexOf(M)===-1).filter(M=>M!==""||!!M).concat(h.classes).join(" ");let P={children:[],attributes:{...h.attributes,"data-prefix":r,"data-icon":i,class:b,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)}};const I=T&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};f&&(P.attributes[Ts]=""),a&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(c||eu())},children:[a]}),delete P.attributes.title);const _={...P,prefix:r,iconName:i,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...I,...h.styles}},{children:E,attributes:C}=n.found&&e.found?Ti("generateAbstractMask",_)||{children:[],attributes:{}}:Ti("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=E,_.attributes=C,o?T3(_):I3(_)}function c1(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[Ts]="");const c={...o.styles};Pv(i)&&(c.transform=t3({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const h=Md(c);h.length>0&&(l.style=h);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function S3(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Md(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ap}=Kn;function eg(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(ip.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(ip.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(ip.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const A3={found:!1,width:512,height:512};function x3(t,e){!lb&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function tg(t,e){let n=e;return e==="fa"&&G.styleDefault!==null&&(e=Ii()),new Promise((r,i)=>{if(n==="fa"){const s=Tb(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&ap[e]&&ap[e][t]){const s=ap[e][t];return r(eg(s))}x3(t,e),r({...A3,icon:G.showMissingIcons&&t?Ti("missingIconAbstract")||{}:{}})})}const h1=()=>{},ng=G.measurePerformance&&fc&&fc.mark&&fc.measure?fc:{mark:h1,measure:h1},Ya='FA "6.6.0"',R3=t=>(ng.mark("".concat(Ya," ").concat(t," begins")),()=>Ab(t)),Ab=t=>{ng.mark("".concat(Ya," ").concat(t," ends")),ng.measure("".concat(Ya," ").concat(t),"".concat(Ya," ").concat(t," begins"),"".concat(Ya," ").concat(t," ends"))};var Ov={begin:R3,end:Ab};const $c=()=>{};function d1(t){return typeof(t.getAttribute?t.getAttribute(Ts):null)=="string"}function b3(t){const e=t.getAttribute?t.getAttribute(xv):null,n=t.getAttribute?t.getAttribute(Rv):null;return e&&n}function P3(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function C3(){return G.autoReplaceSvg===!0?zc.replace:zc[G.autoReplaceSvg]||zc.replace}function k3(t){return Re.createElementNS("http://www.w3.org/2000/svg",t)}function N3(t){return Re.createElement(t)}function xb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?k3:N3}=e;if(typeof t=="string")return Re.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(xb(s,{ceFn:n}))}),r}function D3(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const zc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(xb(n),e)}),e.getAttribute(Ts)===null&&G.keepOriginalSource){let n=Re.createComment(D3(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~bv(e).indexOf(G.replacementClass))return zc.replace(t);const r=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===G.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Eu(s)).join(`
`);e.setAttribute(Ts,""),e.innerHTML=i}};function f1(t){t()}function Rb(t,e){const n=typeof e=="function"?e:$c;if(t.length===0)n();else{let r=f1;G.mutateApproach===U5&&(r=Ei.requestAnimationFrame||f1),r(()=>{const i=C3(),s=Ov.begin("mutate");t.map(i),s(),n()})}}let Vv=!1;function bb(){Vv=!0}function rg(){Vv=!1}let Uh=null;function p1(t){if(!n1||!G.observeMutations)return;const{treeCallback:e=$c,nodeCallback:n=$c,pseudoElementsCallback:r=$c,observeMutationsRoot:i=Re}=t;Uh=new n1(s=>{if(Vv)return;const o=Ii();sa(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!d1(a.addedNodes[0])&&(G.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&G.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&d1(a.target)&&~W5.indexOf(a.attributeName))if(a.attributeName==="class"&&b3(a.target)){const{prefix:l,iconName:c}=jd(bv(a.target));a.target.setAttribute(xv,l||o),c&&a.target.setAttribute(Rv,c)}else P3(a.target)&&n(a.target)})}),Cr&&Uh.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function O3(){Uh&&Uh.disconnect()}function V3(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function L3(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=jd(bv(t));return i.prefix||(i.prefix=Ii()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=d3(i.prefix,t.innerText)||kv(i.prefix,Ym(t.innerText))),!i.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function M3(t){const e=sa(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||eu()):(e["aria-hidden"]="true",e.focusable="false")),e}function F3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:qn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function m1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=L3(t),s=M3(t),o=Jm("parseNodeAttributes",{},t);let a=e.styleParser?V3(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:qn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:j3}=Kn;function Pb(t){const e=G.autoReplaceSvg==="nest"?m1(t,{styleParser:!1}):m1(t);return~e.extra.classes.indexOf(hb)?Ti("generateLayersText",t,e):Ti("generateSvgReplacementMutation",t,e)}let Jn=new Set;ub.map(t=>{Jn.add("fa-".concat(t))});Object.keys(ns[ke]).map(Jn.add.bind(Jn));Object.keys(ns[nn]).map(Jn.add.bind(Jn));Object.keys(ns[rn]).map(Jn.add.bind(Jn));Jn=[...Jn];function g1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Cr)return Promise.resolve();const n=Re.documentElement.classList,r=h=>n.add("".concat(s1,"-").concat(h)),i=h=>n.remove("".concat(s1,"-").concat(h)),s=G.autoFetchSvg?Jn:ub.map(h=>"fa-".concat(h)).concat(Object.keys(j3));s.includes("fa")||s.push("fa");const o=[".".concat(hb,":not([").concat(Ts,"])")].concat(s.map(h=>".".concat(h,":not([").concat(Ts,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=sa(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=Ov.begin("onTree"),c=a.reduce((h,f)=>{try{const p=Pb(f);p&&h.push(p)}catch(p){lb||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,f)=>{Promise.all(c).then(p=>{Rb(p,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),h()})}).catch(p=>{l(),f(p)})})}function U3(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Pb(t).then(n=>{n&&Rb([n],e)})}function B3(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Zm(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Zm(i||{})),t(r,{...n,mask:i})}}const $3=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=qn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:h={}}=e;if(!t)return;const{prefix:f,iconName:p,icon:g}=t;return Ud({type:"icon",...t},()=>(Ss("beforeDOMElementCreation",{iconDefinition:t,params:e}),G.autoA11y&&(o?c["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(a||eu()):(c["aria-hidden"]="true",c.focusable="false")),Dv({icons:{main:eg(g),mask:i?eg(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:p,transform:{...qn,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:h,classes:l}})))};var z3={mixout(){return{icon:B3($3)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=g1,t.nodeCallback=U3,t}}},provides(t){t.i2svg=function(e){const{node:n=Re,callback:r=()=>{}}=e;return g1(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:l,mask:c,maskId:h,extra:f}=n;return new Promise((p,g)=>{Promise.all([tg(r,o),c.iconName?tg(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(T=>{let[b,P]=T;p([e,Dv({icons:{main:b,mask:P},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:i,titleId:s,extra:f,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=Md(o);a.length>0&&(r.style=a);let l;return Pv(s)&&(l=Ti("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},q3={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ud({type:"layer"},()=>{Ss("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},K3={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Ud({type:"counter",content:t},()=>(Ss("beforeDOMElementCreation",{content:t,params:e}),S3({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(G.cssPrefix,"-layers-counter"),...r]}})))}}}},W3={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=qn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Ud({type:"text",content:t},()=>(Ss("beforeDOMElementCreation",{content:t,params:e}),c1({content:t,transform:{...qn,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(G.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(nb){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return G.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,c1({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const G3=new RegExp('"',"ug"),y1=[1105920,1112319],v1={FontAwesome:{normal:"fas",400:"fas"},...b5,...R5,...L5},ig=Object.keys(v1).reduce((t,e)=>(t[e.toLowerCase()]=v1[e],t),{}),H3=Object.keys(ig).reduce((t,e)=>{const n=ig[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Q3(t){const e=t.replace(G3,""),n=o3(e,0),r=n>=y1[0]&&n<=y1[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ym(i?e[0]:e),isSecondary:r||i}}function Y3(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(ig[n]||{})[i]||H3[n]}function _1(t,e){const n="".concat(j5).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=sa(t.children).filter(p=>p.getAttribute(Wm)===e)[0],a=Ei.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(q5),h=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&f!=="none"&&f!==""){const p=a.getPropertyValue("content");let g=Y3(l,h);const{value:T,isSecondary:b}=Q3(p),P=c[0].startsWith("FontAwesome");let I=kv(g,T),_=I;if(P){const E=f3(T);E.iconName&&E.prefix&&(I=E.iconName,g=E.prefix)}if(I&&!b&&(!o||o.getAttribute(xv)!==g||o.getAttribute(Rv)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);const E=F3(),{extra:C}=E;C.attributes[Wm]=e,tg(I,g).then(M=>{const D=Dv({...E,icons:{main:M,mask:Nv()},prefix:g,iconName:_,extra:C,watchable:!0}),w=Re.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=D.map(v=>Eu(v)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function X3(t){return Promise.all([_1(t,"::before"),_1(t,"::after")])}function J3(t){return t.parentNode!==document.head&&!~B5.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wm)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function w1(t){if(Cr)return new Promise((e,n)=>{const r=sa(t.querySelectorAll("*")).filter(J3).map(X3),i=Ov.begin("searchPseudoElements");bb(),Promise.all(r).then(()=>{i(),rg(),e()}).catch(()=>{i(),rg(),n()})})}var Z3={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=w1,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Re}=e;G.searchPseudoElements&&w1(n)}}};let E1=!1;var ej={mixout(){return{dom:{unwatch(){bb(),E1=!0}}}},hooks(){return{bootstrap(){p1(Jm("mutationObserverCallbacks",{}))},noAuto(){O3()},watch(t){const{observeMutationsRoot:e}=t;E1?rg():p1(Jm("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const I1=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var tj={mixout(){return{parse:{transform:t=>I1(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=I1(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(c)},f={transform:"translate(".concat(s/2*-1," -256)")},p={outer:o,inner:h,path:f};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const lp={x:0,y:0,width:"100%",height:"100%"};function T1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function nj(t){return t.tag==="g"?t.children:[t]}var rj={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?jd(n.split(" ").map(i=>i.trim())):Nv();return r.prefix||(r.prefix=Ii()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:l,icon:c}=i,{width:h,icon:f}=s,p=e3({transform:a,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:{...lp,fill:"white"}},T=c.children?{children:c.children.map(T1)}:{},b={tag:"g",attributes:{...p.inner},children:[T1({tag:c.tag,attributes:{...c.attributes,...p.path},...T})]},P={tag:"g",attributes:{...p.outer},children:[b]},I="mask-".concat(o||eu()),_="clip-".concat(o||eu()),E={tag:"mask",attributes:{...lp,id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,P]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:nj(f)},E]};return n.push(C,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(I,")"),...lp}}),{children:n,attributes:r}}}},ij={provides(t){let e=!1;Ei.matchMedia&&(e=Ei.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},sj={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},oj=[r3,z3,q3,K3,W3,Z3,ej,tj,rj,ij,sj];y3(oj,{mixoutsTo:un});un.noAuto;un.config;un.library;un.dom;const sg=un.parse;un.findIconDefinition;un.toHtml;const aj=un.icon;un.layer;un.text;un.counter;function S1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Mn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?S1(Object(n),!0).forEach(function(r){fo(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Bh(t){"@babel/helpers - typeof";return Bh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bh(t)}function fo(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function uj(t,e){if(t==null)return{};var n=lj(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function og(t){return cj(t)||hj(t)||dj(t)||fj()}function cj(t){if(Array.isArray(t))return ag(t)}function hj(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function dj(t,e){if(t){if(typeof t=="string")return ag(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ag(t,e)}}function ag(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function fj(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pj(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,h=t.spinReverse,f=t.pulse,p=t.fixedWidth,g=t.inverse,T=t.border,b=t.listItem,P=t.flip,I=t.size,_=t.rotation,E=t.pull,C=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":h,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":p,"fa-inverse":g,"fa-border":T,"fa-li":b,"fa-flip":P===!0,"fa-flip-horizontal":P==="horizontal"||P==="both","fa-flip-vertical":P==="vertical"||P==="both"},fo(e,"fa-".concat(I),typeof I<"u"&&I!==null),fo(e,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),fo(e,"fa-pull-".concat(E),typeof E<"u"&&E!==null),fo(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(C).map(function(M){return C[M]?M:null}).filter(function(M){return M})}function mj(t){return t=t-0,t===t}function Cb(t){return mj(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var gj=["style"];function yj(t){return t.charAt(0).toUpperCase()+t.slice(1)}function vj(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Cb(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[yj(i)]=s:e[i]=s,e},{})}function kb(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return kb(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var h=e.attributes[c];switch(c){case"class":l.attrs.className=h,delete e.attributes.class;break;case"style":l.attrs.style=vj(h);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=h:l.attrs[Cb(c)]=h}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=uj(n,gj);return i.attrs.style=Mn(Mn({},i.attrs.style),o),t.apply(void 0,[e.tag,Mn(Mn({},i.attrs),a)].concat(og(r)))}var Nb=!1;try{Nb=!0}catch{}function _j(){if(!Nb&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function A1(t){if(t&&Bh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(sg.icon)return sg.icon(t);if(t===null)return null;if(t&&Bh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function up(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?fo({},t,e):{}}var x1={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Lv=Ce.forwardRef(function(t,e){var n=Mn(Mn({},x1),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,c=n.maskId,h=A1(r),f=up("classes",[].concat(og(pj(n)),og((o||"").split(" ")))),p=up("transform",typeof n.transform=="string"?sg.transform(n.transform):n.transform),g=up("mask",A1(i)),T=aj(h,Mn(Mn(Mn(Mn({},f),p),g),{},{symbol:s,title:a,titleId:l,maskId:c}));if(!T)return _j("Could not find icon",h),null;var b=T.abstract,P={ref:e};return Object.keys(n).forEach(function(I){x1.hasOwnProperty(I)||(P[I]=n[I])}),wj(b[0],P)});Lv.displayName="FontAwesomeIcon";Lv.propTypes={beat:Z.bool,border:Z.bool,beatFade:Z.bool,bounce:Z.bool,className:Z.string,fade:Z.bool,flash:Z.bool,mask:Z.oneOfType([Z.object,Z.array,Z.string]),maskId:Z.string,fixedWidth:Z.bool,inverse:Z.bool,flip:Z.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Z.oneOfType([Z.object,Z.array,Z.string]),listItem:Z.bool,pull:Z.oneOf(["right","left"]),pulse:Z.bool,rotation:Z.oneOf([0,90,180,270]),shake:Z.bool,size:Z.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Z.bool,spinPulse:Z.bool,spinReverse:Z.bool,symbol:Z.oneOfType([Z.bool,Z.string]),title:Z.string,titleId:Z.string,transform:Z.oneOfType([Z.string,Z.object]),swapOpacity:Z.bool};var wj=kb.bind(null,Ce.createElement);const Ej={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]};var Db={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},R1=Ce.createContext&&Ce.createContext(Db),Ij=["attr","size","title"];function Tj(t,e){if(t==null)return{};var n=Sj(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Sj(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function $h(){return $h=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$h.apply(this,arguments)}function b1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function zh(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?b1(Object(n),!0).forEach(function(r){Aj(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Aj(t,e,n){return e=xj(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xj(t){var e=Rj(t,"string");return typeof e=="symbol"?e:e+""}function Rj(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ob(t){return t&&t.map((e,n)=>Ce.createElement(e.tag,zh({key:n},e.attr),Ob(e.child)))}function Bd(t){return e=>Ce.createElement(bj,$h({attr:zh({},t.attr)},e),Ob(t.child))}function bj(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=Tj(t,Ij),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Ce.createElement("svg",$h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:zh(zh({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Ce.createElement("title",null,s),t.children)};return R1!==void 0?Ce.createElement(R1.Consumer,null,n=>e(n)):e(Db)}function Pj(t){return Bd({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M380.44 32H64a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32V131.56zM112 176v-64h192v64zm223.91 179.76a80 80 0 1 1-83.66-83.67 80.21 80.21 0 0 1 83.66 83.67z"},child:[]}]})(t)}function Cj(t){return Bd({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"},child:[]}]})(t)}const Vb=({task:t,toggleComplete:e,deleteTodo:n,editTodo:r})=>{const[i,s]=V.useState(!1),[o,a]=V.useState(t.text),l=()=>{s(!0)},c=()=>{s(!1),r(t.id,o)},h=f=>{f.key==="Enter"&&c()};return A.jsxs("div",{className:`Todo ${t.completed?"completed":""}`,children:[i?A.jsx("input",{type:"text",value:o,onChange:f=>a(f.target.value),onKeyPress:h,className:"edit-input"}):A.jsx("p",{onClick:()=>e(t.id,t.completed),children:t.text}),A.jsxs("div",{className:"icon-container",children:[i?A.jsx(Pj,{"aria-label":"Save Task",role:"button",tabIndex:0,onClick:f=>{f.stopPropagation(),c()}}):A.jsx(Cj,{"aria-label":"Edit Task",role:"button",tabIndex:0,onClick:f=>{f.stopPropagation(),l()}}),A.jsx(Lv,{icon:Ej,"aria-label":"Delete Task",role:"button",tabIndex:0,onClick:f=>{f.stopPropagation(),n(t.id)}})]})]})};Vb.propTypes={task:Z.shape({id:Z.string.isRequired,text:Z.string.isRequired,completed:Z.bool.isRequired}).isRequired,toggleComplete:Z.func.isRequired,deleteTodo:Z.func.isRequired,editTodo:Z.func.isRequired};const kj=({tasks:t,toggleComplete:e,deleteTodo:n,editTodo:r})=>A.jsx("div",{className:"task-list",children:t.map(i=>A.jsx(Vb,{task:i,toggleComplete:e,deleteTodo:n,editTodo:r},i.id))}),Lb=({className:t})=>{const[e,n]=V.useState([]);V.useEffect(()=>{const a=_s(Un,"tasks"),l=UL(a,BL("timestamp","desc")),c=WL(l,h=>{const f=h.docs.map(p=>({id:p.id,...p.data()}));n(f)});return()=>c()},[]);const r=async a=>{const l={text:a,completed:!1,timestamp:new Date};try{await kd(_s(Un,"tasks"),l),console.log("Task added:",l)}catch(c){console.error("Error adding task:",c)}},i=async(a,l)=>{try{const c=Lc(Un,"tasks",a);await bE(c,{completed:!l}),console.log("Task updated:",a)}catch(c){console.error("Error updating task:",c)}},s=async a=>{try{const l=Lc(Un,"tasks",a);await KL(l),console.log("Task deleted:",a)}catch(l){console.error("Error deleting task:",l)}},o=async(a,l)=>{try{const c=Lc(Un,"tasks",a);await bE(c,{text:l}),console.log("Task edited:",a)}catch(c){console.error("Error editing task:",c)}};return A.jsxs("div",{className:`TodoWrapper ${t}`,children:[A.jsx("h1",{className:"mb-[9px] -mt-0.5",children:"Together We Achieve!"}),A.jsx(JR,{onSubmit:r}),A.jsx(kj,{tasks:e,toggleComplete:i,deleteTodo:s,editTodo:o})]})};Lb.propTypes={className:Z.string};const Nj=()=>{const[t,e]=V.useState({name:"",email:"",message:""}),n=r=>{const{name:i,value:s}=r.target;e(o=>({...o,[i]:s}))};return A.jsxs("div",{className:"p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto",children:[A.jsx("h2",{className:"text-2xl font-bold text-center mb-4 text-gray-800",children:"Get a free quote"}),A.jsx("p",{className:"text-center text-gray-600 mb-1",children:"For a price quote, simply fill out the following form with details about your query."}),A.jsxs("form",{action:"https://public.herotofu.com/v1/1f80fb50-9353-11ef-840d-9fdbf4f87a8b",method:"POST",acceptCharset:"UTF-8",className:"space-y-4",children:[A.jsxs("div",{children:[A.jsx("label",{htmlFor:"name",className:"block text-xs font-medium text-gray-700 text-left"}),A.jsx("input",{type:"text",name:"name",id:"name",value:t.name,onChange:n,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-500 focus:outline-none text-left",placeholder:"Wpisz swoje imię*"})]}),A.jsxs("div",{children:[A.jsx("label",{htmlFor:"email",className:"block text-xs font-medium text-gray-700 text-left"}),A.jsx("input",{type:"email",name:"email",id:"email",value:t.email,onChange:n,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-500 focus:outline-none",placeholder:"Wpisz swój email*"})]}),A.jsxs("div",{children:[A.jsx("label",{htmlFor:"message",className:"block text-xs font-medium text-gray-700"}),A.jsx("textarea",{name:"message",id:"message",value:t.message,onChange:n,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-500 focus:outline-none",placeholder:"Napisz swoją wiadomość",rows:"4"})]}),A.jsx("button",{type:"submit",className:"w-1/2 bg-blue-600 text-white font-bold py-1 rounded hover:bg-blue-700 transition duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none ml-auto block",children:"Wyślij"}),A.jsx("div",{style:{textIndent:"-99999px",whiteSpace:"nowrap",overflow:"hidden",position:"absolute"},"aria-hidden":"true",children:A.jsx("input",{type:"text",name:"_gotcha",tabIndex:"-1",autoComplete:"off"})})]})]})};function Dj({as:t,bsPrefix:e,className:n,...r}){e=St(e,"col");const i=iS(),s=sS(),o=[],a=[];return i.forEach(l=>{const c=r[l];delete r[l];let h,f,p;typeof c=="object"&&c!=null?{span:h,offset:f,order:p}=c:h=c;const g=l!==s?`-${l}`:"";h&&o.push(h===!0?`${e}${g}`:`${e}${g}-${h}`),p!=null&&a.push(`order${g}-${p}`),f!=null&&a.push(`offset${g}-${f}`)}),[{...r,className:We(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const Xa=V.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=Dj(t);return A.jsx(i,{...r,ref:e,className:We(n,!o.length&&s)})});Xa.displayName="Col";const Mb=V.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=St(t,"row"),o=iS(),a=sS(),l=`${s}-cols`,c=[];return o.forEach(h=>{const f=r[h];delete r[h];let p;f!=null&&typeof f=="object"?{cols:p}=f:p=f;const g=h!==a?`-${h}`:"";p!=null&&c.push(`${l}${g}-${p}`)}),A.jsx(n,{ref:i,...r,className:We(e,s,...c)})});Mb.displayName="Row";function Oj(){return A.jsxs("footer",{className:"text-center text-lg-start text-white",style:{backgroundColor:""},children:[A.jsxs("section",{className:"d-flex justify-content-between p-4",style:{backgroundColor:"#6351ce"},children:[A.jsx("div",{className:"me-5",children:A.jsx("span",{children:"Get connected with me on social networks:"})}),A.jsxs("div",{children:[A.jsx("a",{href:"#",className:"text-white me-4",children:A.jsx("i",{className:"fab fa-facebook-f"})}),A.jsx("a",{href:"#",className:"text-white me-4",children:A.jsx("i",{className:"fab fa-twitter"})}),A.jsx("a",{href:"#",className:"text-white me-4",children:A.jsx("i",{className:"fab fa-google"})}),A.jsx("a",{href:"#",className:"text-white me-4",children:A.jsx("i",{className:"fab fa-instagram"})}),A.jsx("a",{href:"#",className:"text-white me-4",children:A.jsx("i",{className:"fab fa-linkedin"})}),A.jsx("a",{href:"#",className:"text-white me-4",children:A.jsx("i",{className:"fab fa-github"})})]})]}),A.jsx("section",{children:A.jsx(hy,{className:"text-center text-md-start mt-5",children:A.jsxs(Mb,{className:"mt-3",children:[A.jsxs(Xa,{md:3,lg:4,xl:3,className:"mx-auto mb-4",children:[A.jsx("h6",{className:"text-uppercase fw-bold",children:"Maciej Liberadzki Gallery"}),A.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),A.jsx("p",{children:"The family gallery is a collection of cherished photos and memories that capture the most important moments of family life."})]}),A.jsxs(Xa,{md:2,lg:2,xl:2,className:"mx-auto mb-4",children:[A.jsx("h6",{className:"text-uppercase fw-bold",children:"Technologies used"}),A.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"CSS/Tailwind"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"React"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Firebase"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Bootstrap"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Node.js"})})]}),A.jsxs(Xa,{md:3,lg:2,xl:2,className:"mx-auto mb-4",children:[A.jsx("h6",{className:"text-uppercase fw-bold",children:"Services"}),A.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Support"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Website Maintenence"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Responsive Design"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Web Hosting Service"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Tailor-made solutions"})})]}),A.jsxs(Xa,{md:4,lg:3,xl:3,className:"mx-auto mb-md-0 mb-4",children:[A.jsx("h6",{className:"text-uppercase fw-bold",children:"Contact"}),A.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),A.jsxs("p",{children:[A.jsx("i",{className:"fas fa-home mr-3"})," Srebrzynska Park, Lodz, Poland"]}),A.jsxs("p",{children:[A.jsx("i",{className:"fas fa-envelope mr-3"})," LoremIpsum"]}),A.jsxs("p",{children:[A.jsx("i",{className:"fas fa-phone mr-3"})," + 01 234 567 88"]}),A.jsx("p",{children:A.jsx("i",{className:""})})]})]})})}),A.jsxs("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["© 2024 Designed by me",A.jsx("a",{className:"text-white",href:""})]})]})}function Vj(){const[t,e]=V.useState(""),[n,r]=V.useState(window.innerWidth<=992);V.useEffect(()=>{const s=()=>{r(window.innerWidth<=992)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const i=s=>{if(s.preventDefault(),t.trim()==="")return;const o="https://www.google.com/search?q="+encodeURIComponent(t);window.open(o,"_blank"),e("")};return A.jsx("div",{className:"mx-auto",style:{width:"140px",marginBottom:n?"40px":"0px"},children:A.jsx("form",{onSubmit:i,children:A.jsx("input",{type:"text",placeholder:"Search anything...",className:"form-control","aria-label":"Search",value:t,onChange:s=>e(s.target.value),style:{height:"25px"}})})})}var Ae="-ms-",yl="-moz-",pe="-webkit-",Fb="comm",$d="rule",Mv="decl",Lj="@import",jb="@keyframes",Mj="@layer",Ub=Math.abs,Fv=String.fromCharCode,lg=Object.assign;function Fj(t,e){return ot(t,0)^45?(((e<<2^ot(t,0))<<2^ot(t,1))<<2^ot(t,2))<<2^ot(t,3):0}function Bb(t){return t.trim()}function ir(t,e){return(t=e.exec(t))?t[0]:t}function ie(t,e,n){return t.replace(e,n)}function qc(t,e,n){return t.indexOf(e,n)}function ot(t,e){return t.charCodeAt(e)|0}function Ko(t,e,n){return t.slice(e,n)}function Fn(t){return t.length}function $b(t){return t.length}function Ja(t,e){return e.push(t),t}function jj(t,e){return t.map(e).join("")}function P1(t,e){return t.filter(function(n){return!ir(n,e)})}var zd=1,Wo=1,zb=0,wn=0,Qe=0,oa="";function qd(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:zd,column:Wo,length:o,return:"",siblings:a}}function Ur(t,e){return lg(qd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ks(t){for(;t.root;)t=Ur(t.root,{children:[t]});Ja(t,t.siblings)}function Uj(){return Qe}function Bj(){return Qe=wn>0?ot(oa,--wn):0,Wo--,Qe===10&&(Wo=1,zd--),Qe}function kn(){return Qe=wn<zb?ot(oa,wn++):0,Wo++,Qe===10&&(Wo=1,zd++),Qe}function is(){return ot(oa,wn)}function Kc(){return wn}function Kd(t,e){return Ko(oa,t,e)}function ug(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $j(t){return zd=Wo=1,zb=Fn(oa=t),wn=0,[]}function zj(t){return oa="",t}function cp(t){return Bb(Kd(wn-1,cg(t===91?t+2:t===40?t+1:t)))}function qj(t){for(;(Qe=is())&&Qe<33;)kn();return ug(t)>2||ug(Qe)>3?"":" "}function Kj(t,e){for(;--e&&kn()&&!(Qe<48||Qe>102||Qe>57&&Qe<65||Qe>70&&Qe<97););return Kd(t,Kc()+(e<6&&is()==32&&kn()==32))}function cg(t){for(;kn();)switch(Qe){case t:return wn;case 34:case 39:t!==34&&t!==39&&cg(Qe);break;case 40:t===41&&cg(t);break;case 92:kn();break}return wn}function Wj(t,e){for(;kn()&&t+Qe!==57;)if(t+Qe===84&&is()===47)break;return"/*"+Kd(e,wn-1)+"*"+Fv(t===47?t:kn())}function Gj(t){for(;!ug(is());)kn();return Kd(t,wn)}function Hj(t){return zj(Wc("",null,null,null,[""],t=$j(t),0,[0],t))}function Wc(t,e,n,r,i,s,o,a,l){for(var c=0,h=0,f=o,p=0,g=0,T=0,b=1,P=1,I=1,_=0,E="",C=i,M=s,D=r,w=E;P;)switch(T=_,_=kn()){case 40:if(T!=108&&ot(w,f-1)==58){qc(w+=ie(cp(_),"&","&\f"),"&\f",Ub(c?a[c-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:w+=cp(_);break;case 9:case 10:case 13:case 32:w+=qj(T);break;case 92:w+=Kj(Kc()-1,7);continue;case 47:switch(is()){case 42:case 47:Ja(Qj(Wj(kn(),Kc()),e,n,l),l);break;default:w+="/"}break;case 123*b:a[c++]=Fn(w)*I;case 125*b:case 59:case 0:switch(_){case 0:case 125:P=0;case 59+h:I==-1&&(w=ie(w,/\f/g,"")),g>0&&Fn(w)-f&&Ja(g>32?k1(w+";",r,n,f-1,l):k1(ie(w," ","")+";",r,n,f-2,l),l);break;case 59:w+=";";default:if(Ja(D=C1(w,e,n,c,h,i,a,E,C=[],M=[],f,s),s),_===123)if(h===0)Wc(w,e,D,D,C,s,f,a,M);else switch(p===99&&ot(w,3)===110?100:p){case 100:case 108:case 109:case 115:Wc(t,D,D,r&&Ja(C1(t,D,D,0,0,i,a,E,i,C=[],f,M),M),i,M,f,a,r?C:M);break;default:Wc(w,D,D,D,[""],M,0,a,M)}}c=h=g=0,b=I=1,E=w="",f=o;break;case 58:f=1+Fn(w),g=T;default:if(b<1){if(_==123)--b;else if(_==125&&b++==0&&Bj()==125)continue}switch(w+=Fv(_),_*b){case 38:I=h>0?1:(w+="\f",-1);break;case 44:a[c++]=(Fn(w)-1)*I,I=1;break;case 64:is()===45&&(w+=cp(kn())),p=is(),h=f=Fn(E=w+=Gj(Kc())),_++;break;case 45:T===45&&Fn(w)==2&&(b=0)}}return s}function C1(t,e,n,r,i,s,o,a,l,c,h,f){for(var p=i-1,g=i===0?s:[""],T=$b(g),b=0,P=0,I=0;b<r;++b)for(var _=0,E=Ko(t,p+1,p=Ub(P=o[b])),C=t;_<T;++_)(C=Bb(P>0?g[_]+" "+E:ie(E,/&\f/g,g[_])))&&(l[I++]=C);return qd(t,e,n,i===0?$d:a,l,c,h,f)}function Qj(t,e,n,r){return qd(t,e,n,Fb,Fv(Uj()),Ko(t,2,-2),0,r)}function k1(t,e,n,r,i){return qd(t,e,n,Mv,Ko(t,0,r),Ko(t,r+1,-1),r,i)}function qb(t,e,n){switch(Fj(t,e)){case 5103:return pe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+t+t;case 4789:return yl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+t+yl+t+Ae+t+t;case 5936:switch(ot(t,e+11)){case 114:return pe+t+Ae+ie(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return pe+t+Ae+ie(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return pe+t+Ae+ie(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return pe+t+Ae+t+t;case 6165:return pe+t+Ae+"flex-"+t+t;case 5187:return pe+t+ie(t,/(\w+).+(:[^]+)/,pe+"box-$1$2"+Ae+"flex-$1$2")+t;case 5443:return pe+t+Ae+"flex-item-"+ie(t,/flex-|-self/g,"")+(ir(t,/flex-|baseline/)?"":Ae+"grid-row-"+ie(t,/flex-|-self/g,""))+t;case 4675:return pe+t+Ae+"flex-line-pack"+ie(t,/align-content|flex-|-self/g,"")+t;case 5548:return pe+t+Ae+ie(t,"shrink","negative")+t;case 5292:return pe+t+Ae+ie(t,"basis","preferred-size")+t;case 6060:return pe+"box-"+ie(t,"-grow","")+pe+t+Ae+ie(t,"grow","positive")+t;case 4554:return pe+ie(t,/([^-])(transform)/g,"$1"+pe+"$2")+t;case 6187:return ie(ie(ie(t,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),t,"")+t;case 5495:case 3959:return ie(t,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return ie(ie(t,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+Ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+t+t;case 4200:if(!ir(t,/flex-|baseline/))return Ae+"grid-column-align"+Ko(t,e)+t;break;case 2592:case 3360:return Ae+ie(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,ir(r.props,/grid-\w+-end/)})?~qc(t+(n=n[e].value),"span",0)?t:Ae+ie(t,"-start","")+t+Ae+"grid-row-span:"+(~qc(n,"span",0)?ir(n,/\d+/):+ir(n,/\d+/)-+ir(t,/\d+/))+";":Ae+ie(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return ir(r.props,/grid-\w+-start/)})?t:Ae+ie(ie(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ie(t,/(.+)-inline(.+)/,pe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Fn(t)-1-e>6)switch(ot(t,e+1)){case 109:if(ot(t,e+4)!==45)break;case 102:return ie(t,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+yl+(ot(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~qc(t,"stretch",0)?qb(ie(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ie(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return Ae+i+":"+s+c+(o?Ae+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(ot(t,e+6)===121)return ie(t,":",":"+pe)+t;break;case 6444:switch(ot(t,ot(t,14)===45?18:11)){case 120:return ie(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(ot(t,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+Ae+"$2box$3")+t;case 100:return ie(t,":",":"+Ae)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(t,"scroll-","scroll-snap-")+t}return t}function qh(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function Yj(t,e,n,r){switch(t.type){case Mj:if(t.children.length)break;case Lj:case Mv:return t.return=t.return||t.value;case Fb:return"";case jb:return t.return=t.value+"{"+qh(t.children,r)+"}";case $d:if(!Fn(t.value=t.props.join(",")))return""}return Fn(n=qh(t.children,r))?t.return=t.value+"{"+n+"}":""}function Xj(t){var e=$b(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function Jj(t){return function(e){e.root||(e=e.return)&&t(e)}}function Zj(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Mv:t.return=qb(t.value,t.length,n);return;case jb:return qh([Ur(t,{value:ie(t.value,"@","@"+pe)})],r);case $d:if(t.length)return jj(n=t.props,function(i){switch(ir(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ks(Ur(t,{props:[ie(i,/:(read-\w+)/,":"+yl+"$1")]})),Ks(Ur(t,{props:[i]})),lg(t,{props:P1(n,r)});break;case"::placeholder":Ks(Ur(t,{props:[ie(i,/:(plac\w+)/,":"+pe+"input-$1")]})),Ks(Ur(t,{props:[ie(i,/:(plac\w+)/,":"+yl+"$1")]})),Ks(Ur(t,{props:[ie(i,/:(plac\w+)/,Ae+"input-$1")]})),Ks(Ur(t,{props:[i]})),lg(t,{props:P1(n,r)});break}return""})}}var e9={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yt={},Go=typeof process<"u"&&Yt!==void 0&&(Yt.REACT_APP_SC_ATTR||Yt.SC_ATTR)||"data-styled",Kb="active",Wb="data-styled-version",Wd="6.1.13",jv=`/*!sc*/
`,Kh=typeof window<"u"&&"HTMLElement"in window,t9=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==""?Yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.SC_DISABLE_SPEEDY!==void 0&&Yt.SC_DISABLE_SPEEDY!==""&&Yt.SC_DISABLE_SPEEDY!=="false"&&Yt.SC_DISABLE_SPEEDY),Gd=Object.freeze([]),Ho=Object.freeze({});function n9(t,e,n){return n===void 0&&(n=Ho),t.theme!==n.theme&&t.theme||e||n.theme}var Gb=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),r9=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,i9=/(^-|-$)/g;function N1(t){return t.replace(r9,"-").replace(i9,"")}var s9=/(a)(d)/gi,pc=52,D1=function(t){return String.fromCharCode(t+(t>25?39:97))};function hg(t){var e,n="";for(e=Math.abs(t);e>pc;e=e/pc|0)n=D1(e%pc)+n;return(D1(e%pc)+n).replace(s9,"$1-$2")}var hp,Hb=5381,po=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Qb=function(t){return po(Hb,t)};function Yb(t){return hg(Qb(t)>>>0)}function o9(t){return t.displayName||t.name||"Component"}function dp(t){return typeof t=="string"&&!0}var Xb=typeof Symbol=="function"&&Symbol.for,Jb=Xb?Symbol.for("react.memo"):60115,a9=Xb?Symbol.for("react.forward_ref"):60112,l9={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u9={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c9=((hp={})[a9]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hp[Jb]=Zb,hp);function O1(t){return("type"in(e=t)&&e.type.$$typeof)===Jb?Zb:"$$typeof"in t?c9[t.$$typeof]:l9;var e}var h9=Object.defineProperty,d9=Object.getOwnPropertyNames,V1=Object.getOwnPropertySymbols,f9=Object.getOwnPropertyDescriptor,p9=Object.getPrototypeOf,L1=Object.prototype;function eP(t,e,n){if(typeof e!="string"){if(L1){var r=p9(e);r&&r!==L1&&eP(t,r,n)}var i=d9(e);V1&&(i=i.concat(V1(e)));for(var s=O1(t),o=O1(e),a=0;a<i.length;++a){var l=i[a];if(!(l in u9||n&&n[l]||o&&l in o||s&&l in s)){var c=f9(e,l);try{h9(t,l,c)}catch{}}}}return t}function Qo(t){return typeof t=="function"}function Uv(t){return typeof t=="object"&&"styledComponentId"in t}function Yi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function dg(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function tu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function fg(t,e,n){if(n===void 0&&(n=!1),!n&&!tu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=fg(t[r],e[r]);else if(tu(e))for(var r in e)t[r]=fg(t[r],e[r]);return t}function Bv(t,e){Object.defineProperty(t,"toString",{value:e})}function Iu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var m9=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Iu(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(jv);return n},t}(),Gc=new Map,Wh=new Map,Hc=1,mc=function(t){if(Gc.has(t))return Gc.get(t);for(;Wh.has(Hc);)Hc++;var e=Hc++;return Gc.set(t,e),Wh.set(e,t),e},g9=function(t,e){Hc=e+1,Gc.set(t,e),Wh.set(e,t)},y9="style[".concat(Go,"][").concat(Wb,'="').concat(Wd,'"]'),v9=new RegExp("^".concat(Go,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_9=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},w9=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(jv),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(v9);if(l){var c=0|parseInt(l[1],10),h=l[2];c!==0&&(g9(h,c),_9(t,h,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},M1=function(t){for(var e=document.querySelectorAll(y9),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Go)!==Kb&&(w9(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function E9(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var tP=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Go,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Go,Kb),r.setAttribute(Wb,Wd);var o=E9();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},I9=function(){function t(e){this.element=tP(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Iu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),T9=function(){function t(e){this.element=tP(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),S9=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),F1=Kh,A9={isServer:!Kh,useCSSOMInjection:!t9},nP=function(){function t(e,n,r){e===void 0&&(e=Ho),n===void 0&&(n={});var i=this;this.options=zt(zt({},A9),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Kh&&F1&&(F1=!1,M1(this)),Bv(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(f){var p=function(I){return Wh.get(I)}(f);if(p===void 0)return"continue";var g=s.names.get(p),T=o.getGroup(f);if(g===void 0||!g.size||T.length===0)return"continue";var b="".concat(Go,".g").concat(f,'[id="').concat(p,'"]'),P="";g!==void 0&&g.forEach(function(I){I.length>0&&(P+="".concat(I,","))}),l+="".concat(T).concat(b,'{content:"').concat(P,'"}').concat(jv)},h=0;h<a;h++)c(h);return l}(i)})}return t.registerId=function(e){return mc(e)},t.prototype.rehydrate=function(){!this.server&&Kh&&M1(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(zt(zt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new S9(i):r?new I9(i):new T9(i)}(this.options),new m9(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(mc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(mc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(mc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),x9=/&/g,R9=/^\s*\/\/.*$/gm;function rP(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=rP(n.children,e)),n})}function b9(t){var e,n,r,i=Ho,s=i.options,o=s===void 0?Ho:s,a=i.plugins,l=a===void 0?Gd:a,c=function(p,g,T){return T.startsWith(n)&&T.endsWith(n)&&T.replaceAll(n,"").length>0?".".concat(e):p},h=l.slice();h.push(function(p){p.type===$d&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(x9,n).replace(r,c))}),o.prefix&&h.push(Zj),h.push(Yj);var f=function(p,g,T,b){g===void 0&&(g=""),T===void 0&&(T=""),b===void 0&&(b="&"),e=b,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var P=p.replace(R9,""),I=Hj(T||g?"".concat(T," ").concat(g," { ").concat(P," }"):P);o.namespace&&(I=rP(I,o.namespace));var _=[];return qh(I,Xj(h.concat(Jj(function(E){return _.push(E)})))),_};return f.hash=l.length?l.reduce(function(p,g){return g.name||Iu(15),po(p,g.name)},Hb).toString():"",f}var P9=new nP,pg=b9(),iP=Ce.createContext({shouldForwardProp:void 0,styleSheet:P9,stylis:pg});iP.Consumer;Ce.createContext(void 0);function j1(){return V.useContext(iP)}var sP=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=pg);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Bv(this,function(){throw Iu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=pg),this.name+e.hash},t}(),C9=function(t){return t>="A"&&t<="Z"};function U1(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;C9(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var oP=function(t){return t==null||t===!1||t===""},aP=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!oP(s)&&(Array.isArray(s)&&s.isCss||Qo(s)?r.push("".concat(U1(i),":"),s,";"):tu(s)?r.push.apply(r,Yl(Yl(["".concat(i," {")],aP(s),!1),["}"],!1)):r.push("".concat(U1(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in e9||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ss(t,e,n,r){if(oP(t))return[];if(Uv(t))return[".".concat(t.styledComponentId)];if(Qo(t)){if(!Qo(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return ss(i,e,n,r)}var s;return t instanceof sP?n?(t.inject(n,r),[t.getName(r)]):[t]:tu(t)?aP(t):Array.isArray(t)?Array.prototype.concat.apply(Gd,t.map(function(o){return ss(o,e,n,r)})):[t.toString()]}function k9(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Qo(n)&&!Uv(n))return!1}return!0}var N9=Qb(Wd),D9=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&k9(e),this.componentId=n,this.baseHash=po(N9,n),this.baseStyle=r,nP.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Yi(i,this.staticRulesId);else{var s=dg(ss(this.rules,e,n,r)),o=hg(po(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Yi(i,o),this.staticRulesId=o}else{for(var l=po(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")c+=f;else if(f){var p=dg(ss(f,e,n,r));l=po(l,p+h),c+=p}}if(c){var g=hg(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=Yi(i,g)}}return i},t}(),lP=Ce.createContext(void 0);lP.Consumer;var fp={};function O9(t,e,n){var r=Uv(t),i=t,s=!dp(t),o=e.attrs,a=o===void 0?Gd:o,l=e.componentId,c=l===void 0?function(C,M){var D=typeof C!="string"?"sc":N1(C);fp[D]=(fp[D]||0)+1;var w="".concat(D,"-").concat(Yb(Wd+D+fp[D]));return M?"".concat(M,"-").concat(w):w}(e.displayName,e.parentComponentId):l,h=e.displayName,f=h===void 0?function(C){return dp(C)?"styled.".concat(C):"Styled(".concat(o9(C),")")}(t):h,p=e.displayName&&e.componentId?"".concat(N1(e.displayName),"-").concat(e.componentId):e.componentId||c,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,T=e.shouldForwardProp;if(r&&i.shouldForwardProp){var b=i.shouldForwardProp;if(e.shouldForwardProp){var P=e.shouldForwardProp;T=function(C,M){return b(C,M)&&P(C,M)}}else T=b}var I=new D9(n,p,r?i.componentStyle:void 0);function _(C,M){return function(D,w,v){var S=D.attrs,R=D.componentStyle,k=D.defaultProps,N=D.foldedComponentIds,x=D.styledComponentId,Je=D.target,Ft=Ce.useContext(lP),ft=j1(),ze=D.shouldForwardProp||ft.shouldForwardProp,B=n9(w,Ft,k)||Ho,Q=function(ge,qe,pt){for(var er,Ht=zt(zt({},qe),{className:void 0,theme:pt}),cn=0;cn<ge.length;cn+=1){var En=Qo(er=ge[cn])?er(Ht):er;for(var At in En)Ht[At]=At==="className"?Yi(Ht[At],En[At]):At==="style"?zt(zt({},Ht[At]),En[At]):En[At]}return qe.className&&(Ht.className=Yi(Ht.className,qe.className)),Ht}(S,w,B),J=Q.as||Je,ue={};for(var re in Q)Q[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&Q.theme===B||(re==="forwardedAs"?ue.as=Q.forwardedAs:ze&&!ze(re,J)||(ue[re]=Q[re]));var fe=function(ge,qe){var pt=j1(),er=ge.generateAndInjectStyles(qe,pt.styleSheet,pt.stylis);return er}(R,Q),Ze=Yi(N,x);return fe&&(Ze+=" "+fe),Q.className&&(Ze+=" "+Q.className),ue[dp(J)&&!Gb.has(J)?"class":"className"]=Ze,ue.ref=v,V.createElement(J,ue)}(E,C,M)}_.displayName=f;var E=Ce.forwardRef(_);return E.attrs=g,E.componentStyle=I,E.displayName=f,E.shouldForwardProp=T,E.foldedComponentIds=r?Yi(i.foldedComponentIds,i.styledComponentId):"",E.styledComponentId=p,E.target=r?i.target:t,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(M){for(var D=[],w=1;w<arguments.length;w++)D[w-1]=arguments[w];for(var v=0,S=D;v<S.length;v++)fg(M,S[v],!0);return M}({},i.defaultProps,C):C}}),Bv(E,function(){return".".concat(E.styledComponentId)}),s&&eP(E,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function B1(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var $1=function(t){return Object.assign(t,{isCss:!0})};function uP(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Qo(t)||tu(t))return $1(ss(B1(Gd,Yl([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?ss(r):$1(ss(B1(r,e)))}function mg(t,e,n){if(n===void 0&&(n=Ho),!e)throw Iu(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,uP.apply(void 0,Yl([i],s,!1)))};return r.attrs=function(i){return mg(t,e,zt(zt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return mg(t,e,zt(zt({},n),i))},r}var cP=function(t){return mg(O9,t)},Ds=cP;Gb.forEach(function(t){Ds[t]=cP(t)});function $v(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=dg(uP.apply(void 0,Yl([t],e,!1))),i=Yb(r);return new sP(i,r)}const V9="#4fa94d",L9={"aria-busy":!0,role:"progressbar"},M9=Ds.div`
  display: ${t=>t.$visible?"flex":"none"};
`,F9="http://www.w3.org/2000/svg",j9=({height:t=80,width:e=80,color:n=V9,ariaLabel:r="circles-loading",wrapperStyle:i,wrapperClass:s,visible:o=!0})=>A.jsx(M9,{style:i,$visible:o,className:s,"aria-label":r,"data-testid":"circles-loading",...L9,children:A.jsxs("svg",{width:e,height:t,viewBox:"0 0 135 135",xmlns:F9,fill:n,"data-testid":"circles-svg",children:[A.jsx("title",{children:"circles-loading"}),A.jsx("desc",{children:"Animated representation of circles"}),A.jsx("path",{d:"M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z",children:A.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"-360 67 67",dur:"2.5s",repeatCount:"indefinite"})}),A.jsx("path",{d:"M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z",children:A.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"360 67 67",dur:"8s",repeatCount:"indefinite"})})]})}),Sn=242.776657104492,U9=1.6,B9=$v`
12.5% {
  stroke-dasharray: ${Sn*.14}px, ${Sn}px;
  stroke-dashoffset: -${Sn*.11}px;
}
43.75% {
  stroke-dasharray: ${Sn*.35}px, ${Sn}px;
  stroke-dashoffset: -${Sn*.35}px;
}
100% {
  stroke-dasharray: ${Sn*.01}px, ${Sn}px;
  stroke-dashoffset: -${Sn*.99}px;
}
`;Ds.path`
  stroke-dasharray: ${Sn*.01}px, ${Sn};
  stroke-dashoffset: 0;
  animation: ${B9} ${U9}s linear infinite;
`;const $9=$v`
to {
   transform: rotate(360deg);
 }
`;Ds.svg`
  animation: ${$9} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;Ds.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const z9=$v`
to {
   stroke-dashoffset: 136;
 }
`;Ds.polygon`
  stroke-dasharray: 17;
  animation: ${z9} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;Ds.svg`
  transform-origin: 50% 65%;
`;function q9(t){return Bd({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(t)}function K9(t){return Bd({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(t)}function W9(){const[t,e]=V.useState([]),[n,r]=V.useState(""),[i,s]=V.useState(""),[o,a]=V.useState(!1);V.useEffect(()=>{(async()=>{try{const g=(await eR(_s(Un,"posts"))).docs.map(T=>({id:T.id,...T.data()}));e(g)}catch(p){console.error("Błąd podczas pobierania danych:",p)}})()},[]);const l=f=>{var p;try{if(f.includes("youtu.be"))return`https://img.youtube.com/vi/${(p=f.split("youtu.be/")[1])==null?void 0:p.split("?")[0]}/hqdefault.jpg`;if(f.includes("youtube.com")){const T=new URL(f).searchParams.get("v");if(T)return`https://img.youtube.com/vi/${T}/hqdefault.jpg`}return null}catch(g){return console.error("Błąd podczas generowania miniaturki YouTube:",g),null}},c=async f=>{if(f.includes("youtube.com")||f.includes("youtu.be"))return l(f);try{const g=await(await fetch(`https://opengraph.io/api/1.1/site/${encodeURIComponent(f)}?app_id=74430628-2023-4e90-9d59-a4ff6779d48e`)).json();return console.log("OpenGraph response:",g),g.hybridGraph.image||null}catch(p){return console.error("Błąd podczas pobierania miniaturki:",p),null}},h=async f=>{if(f.preventDefault(),!n||!i){alert("Proszę wypełnić oba pola!");return}a(!0);try{const p=await c(i),g=await kd(_s(Un,"posts"),{title:n,link:i,thumbnail:p});e(T=>[...T,{id:g.id,title:n,link:i,thumbnail:p}]),r(""),s(""),alert("Post został dodany!")}catch(p){console.error("Błąd podczas dodawania posta:",p)}finally{a(!1)}};return A.jsxs("div",{className:"recent-posts",children:[A.jsx("h3",{children:"Dodaj nowy post"}),A.jsxs("form",{onSubmit:h,children:[A.jsx("input",{type:"text",placeholder:"Tytuł posta",value:n,onChange:f=>r(f.target.value),required:!0}),A.jsx("input",{type:"url",placeholder:"Link do posta",value:i,onChange:f=>s(f.target.value),required:!0}),A.jsx("button",{type:"submit",disabled:o,children:o?"Dodawanie...":"Dodaj post"})]}),A.jsx("h3",{children:"Ostatnie posty"}),A.jsx("ul",{children:t.map(f=>A.jsxs("li",{style:{display:"flex",alignItems:"center",marginBottom:"15px"},children:[f.thumbnail&&A.jsx("img",{src:f.thumbnail,alt:f.title,style:{width:"100px",height:"100px",objectFit:"cover",marginRight:"10px",borderRadius:"8px"}}),A.jsx("a",{href:f.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"black"},children:A.jsx("h4",{style:{margin:0},children:f.title})})]},f.id))})]})}const hP=_s(Un,"images"),G9=async t=>{if(!t)throw new Error("Brak pliku!");const e=g5(E5,`images/${t.name}`);try{const n=await p5(e,t);console.log("✅ Plik przesłany do Storage:",n.metadata.fullPath);const r=await m5(e);console.log("✅ URL obrazu:",r);const i=await kd(hP,{imageUrl:r});return console.log("✅ Obraz zapisany w Firestore, ID:",i.id),r}catch(n){throw console.error("❌ Błąd przesyłania obrazu:",n),n}},H9=async()=>{try{return(await eR(hP)).docs.map(e=>({id:e.id,...e.data()}))}catch(t){return console.error("❌ Błąd pobierania obrazów:",t),[]}},Q9=()=>{const[t,e]=V.useState(null),[n,r]=V.useState([]);V.useEffect(()=>{i()},[]);const i=async()=>{try{const a=await H9();r(a)}catch(a){console.error("❌ Błąd pobierania obrazów:",a)}},s=a=>{a.target.files[0]&&e(a.target.files[0])},o=async()=>{if(!t){console.error("Brak wybranego pliku do przesłania!");return}try{const a=await G9(t);alert("Obraz przesłany! URL: "+a),i()}catch(a){console.error("❌ Błąd przesyłania obrazu:",a)}};return A.jsxs("div",{children:[A.jsx("h1",{children:"Prześlij zdjęcie"}),A.jsx("input",{type:"file",onChange:s}),A.jsx("button",{onClick:o,className:"upload-btn",children:"Prześlij"}),A.jsx("h2",{children:"Zapisane obrazy:"}),A.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:n.map(a=>A.jsx("img",{src:a.imageUrl,alt:"Zapisany obraz",style:{width:"100px",height:"100px",objectFit:"cover",borderRadius:"5px"}},a.id))})]})};function dP({onClose:t}){const[e,n]=V.useState(""),[r,i]=V.useState(""),s=async()=>{const o=OR();try{const a=await GM(o,e,r);console.log("✅ Zalogowano:",a.user),t()}catch(a){console.error("⛔ Błąd logowania:",a.message)}};return A.jsxs("div",{className:"login-modal",children:[A.jsx("h2",{children:"Logowanie"}),A.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:o=>n(o.target.value)}),A.jsx("input",{type:"password",placeholder:"Hasło",value:r,onChange:o=>i(o.target.value)}),A.jsx("button",{onClick:s,children:"Sign In"}),A.jsx("button",{onClick:t,children:"Zamknij"})," "]})}dP.propTypes={onClose:Z.func.isRequired};const Y9={BASE_URL:"/gallery/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyB5QFjl6jvIKBCRn12esrOba58STMP9dM0",VITE_FIREBASE_APP_ID:"1:789024046392:web:26d9e3195917ed28e515cd",VITE_FIREBASE_AUTH_DOMAIN:"galeriazdjec-f4180.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-WX9ZBHXLSD",VITE_FIREBASE_MESSAGING_SENDER_ID:"789024046392",VITE_FIREBASE_PROJECT_ID:"galeriazdjec-f4180",VITE_FIREBASE_STORAGE_BUCKET:"galeriazdjec-f4180.appspot.com"},X9="/gallery/assets/video/api.json";function J9(){var T,b;const[t,e]=V.useState([]),[n,r]=V.useState(0),[i,s]=V.useState(!1),o=V.useRef(),[a,l]=V.useState(window.innerWidth<=992),[c,h]=V.useState(!0),[f,p]=V.useState(!1);V.useEffect(()=>{console.log("Fetching videos from API..."),fetch(X9).then(P=>P.json()).then(P=>e(P)).catch(P=>console.error("Failed to fetch videos:",P)).finally(()=>h(!1)),console.log("Firebase API Key:","AIzaSyB5QFjl6jvIKBCRn12esrOba58STMP9dM0"),console.log("All env variables:",Y9)},[]),V.useEffect(()=>{var P;t.length>0&&o.current&&(o.current.src=(P=t[n])==null?void 0:P.video,o.current.load(),s(!1))},[t,n]),V.useEffect(()=>{const P=()=>{l(window.innerWidth<=992)};return window.addEventListener("resize",P),()=>{window.removeEventListener("resize",P)}},[]);const g=()=>{s(P=>!P)};return t.length<1?A.jsx("div",{children:"Loading..."}):c?A.jsx("div",{className:"flex justify-center items-center min-h-screen",style:{backgroundColor:"black",color:"white"},children:A.jsx(j9,{color:"#00BFFF",height:80,width:80})}):(console.log("Firebase API Key:","AIzaSyB5QFjl6jvIKBCRn12esrOba58STMP9dM0"),console.log("Firebase Config:",{apiKey:"AIzaSyB5QFjl6jvIKBCRn12esrOba58STMP9dM0",authDomain:"galeriazdjec-f4180.firebaseapp.com",projectId:"galeriazdjec-f4180"}),A.jsx(A.Fragment,{children:A.jsxs("div",{style:{backgroundImage:'url("https://raw.githubusercontent.com/wolczan/gallery/main/public/back.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",minHeight:"100vh",width:"100%",backgroundAttachment:"fixed"},children:[A.jsx(rc,{expand:"lg",collapseOnSelect:!0,className:"navbar-custom",style:{height:"40px",backgroundColor:"black",color:"white"},children:A.jsxs(hy,{className:"justify-content-between d-flex custom-margin-top",style:{alignItems:"baseline",backgroundColor:""},children:[A.jsxs(rc.Brand,{href:"#home",style:{fontSize:"17px",color:"white"},children:[A.jsx("img",{src:"https://raw.githubusercontent.com/wolczan/gallery/refs/heads/main/napis.webp",width:"35",height:"50",className:"d-inline-block",alt:""}),"Gallery"]}),A.jsx(Vj,{}),A.jsx(rc.Toggle,{"aria-controls":"responsive-navbar-nav",style:{paddingBottom:"0px",alignItems:"center",backgroundColor:"white"}}),A.jsx(rc.Collapse,{id:"responsive-navbar-nav",style:{backgroundColor:"black",opacity:1,padding:"0px"},children:A.jsxs(Vn,{className:"mx-auto",children:[A.jsx(Vn.Link,{href:"#home",className:"nav-link-custom",children:"Home"}),A.jsx(Vn.Link,{href:"#about",className:"nav-link-custom",children:"About"}),A.jsx(Vn.Link,{href:"#pricing",className:"nav-link-custom",children:"Films"}),A.jsx(Vn.Link,{href:"#features",className:"nav-link-custom",children:"Images"}),A.jsx(Vn.Link,{href:"#pricing",className:"nav-link-custom",children:"My List"}),A.jsx(Vn.Link,{href:"#pricing",className:"nav-link-custom",children:"Latest"}),A.jsx(Vn.Link,{href:"#pricing",className:"nav-link-custom",children:"Contact"}),A.jsx(Vn.Link,{onClick:()=>p(!0),className:"nav-link-custom btn btn-custom",children:"Sign In"}),A.jsx(Vn.Link,{href:"#signup",className:"nav-link-custom btn btn-custom",children:"Sign Up"})]})})]})}),f&&A.jsx(dP,{onClose:()=>p(!1)}),A.jsx("div",{className:"min-h-screen text-white flex items-center justify-center",children:A.jsxs("section",{className:"flex flex-row items-center space-x-2 p-1 w-full mt-4 mb-4 ",style:{justifyContent:"space-evenly"},children:[A.jsx(Lb,{className:"flex-shrink-0 w-[25%] sm:w-[30%] lg:w-[25%] p-1 rounded-lg todo-wrapper-shadow relative z-10"}),A.jsx("div",{className:"flex-shrink-0 w-[15%] sm:w-[20%] lg:w-[11%] flex items-center justify-center border-1 rounded-lg shadow-2xl shadow-white bg-black",children:i&&t.length>0?A.jsx("video",{ref:o,src:(T=t[n])==null?void 0:T.video,className:"object-cover rounded-lg w-full h-full border-1",controls:!0,autoPlay:!0,style:{width:"150px",height:"260px"}}):A.jsx("img",{src:(b=t[n])==null?void 0:b.cover,alt:"Video cover",style:{width:"150px",height:"260px"},className:"hover-enlarge object-cover rounded-lg w-full h-full"})})]})}),A.jsxs("div",{className:"relative z-10 p-1 rounded bg-black text-white border-1 flex flex-col justify-between",style:{minHeight:"120px",maxWidth:"400px",width:"100%",margin:"auto",boxShadow:"10px 15px 80px -5px rgba(0, 0, 0, 0.7)"},children:[A.jsxs("div",{children:[A.jsx("h2",{style:{fontSize:"1rem",fontWeight:"bold",color:"white"},className:"text-2xl font-bold text-white",children:t[n].title}),A.jsx("p",{className:"text-white",children:t[n].description})]}),A.jsx("div",{className:"flex justify-end mt-auto",children:A.jsx("button",{onClick:g,className:"relative bg-gradient-to-r from-red-600 via-pink-500 to-red-600 hover:from-red-500 hover:via-orange-400 hover:to-red-500 active:from-red-700 active:via-pink-600 active:to-red-700 text-white py-1 px-4 rounded-full m-2 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95",style:{border:"2px solid rgba(255, 255, 255, 0.4)",boxShadow:"0 0 15px rgba(255, 0, 0, 0.8)",color:"white"},children:i?A.jsx(q9,{}):A.jsx(K9,{})})})]}),A.jsxs("section",{className:"min-h-screen flex flex-col items-center",children:[A.jsx("h1",{className:"heading-reset text-4xl md:text-5xl font-extrabold text-center mt-12 text-white drop-shadow-lg tracking-wide",children:"Browse Library"}),A.jsx("div",{className:"flex flex-wrap justify-center items-center p-4 max-w-screen-lg mx-auto min-h-screen",children:t.map((P,I)=>A.jsx("div",{onClick:()=>r(I),className:`hover-enlarge border-1 m-2 rounded-lg overflow-hidden cursor-pointer ${n===I?"border-4 border-blue-500":""}`,style:{width:"129px",height:"170px",borderRadius:"6px"},children:A.jsx("img",{src:P.cover,className:"object-cover w-full h-full rounded-lg",alt:P.title})},P.id))})]}),A.jsxs("div",{className:"p-4 max-w-screen-sm mx-auto  sm:space-x-0 sm:space-y-2 custom-container",children:[A.jsxs("div",{className:"w-full mt-8 mx-auto",children:[" ",A.jsx(Nj,{})]}),A.jsx("div",{className:"w-full map-container p-5 mx-auto",children:A.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.374953124007!2d19.395962676321443!3d51.75924867968213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a3460d27d2c89%3A0x4a2f25c77f622a88!2s%C5%81%C3%B3d%C5%BA%2094-203%2C%20Poland!5e0!3m2!1sen!2sus!4v1698609072847!5m2!1sen!2sus",width:"350",height:"250",style:{border:0},allowFullScreen:"",loading:"lazy",title:"Google Map - Łódź 94-203"})})]}),A.jsx(Q9,{}),A.jsx(W9,{}),A.jsx(Oj,{})]})}))}console.log("Starting application...");pp.createRoot(document.getElementById("root")).render(A.jsx(Ce.StrictMode,{children:A.jsx(J9,{})}));console.log("Application started.");
