(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ih(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var V1={exports:{}},sh={},F1={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=Symbol.for("react.element"),RC=Symbol.for("react.portal"),CC=Symbol.for("react.fragment"),bC=Symbol.for("react.strict_mode"),xC=Symbol.for("react.profiler"),PC=Symbol.for("react.provider"),NC=Symbol.for("react.context"),OC=Symbol.for("react.forward_ref"),DC=Symbol.for("react.suspense"),LC=Symbol.for("react.memo"),MC=Symbol.for("react.lazy"),Xv=Symbol.iterator;function VC(t){return t===null||typeof t!="object"?null:(t=Xv&&t[Xv]||t["@@iterator"],typeof t=="function"?t:null)}var j1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U1=Object.assign,$1={};function Ao(t,e,n){this.props=t,this.context=e,this.refs=$1,this.updater=n||j1}Ao.prototype.isReactComponent={};Ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function z1(){}z1.prototype=Ao.prototype;function Sm(t,e,n){this.props=t,this.context=e,this.refs=$1,this.updater=n||j1}var Am=Sm.prototype=new z1;Am.constructor=Sm;U1(Am,Ao.prototype);Am.isPureReactComponent=!0;var Jv=Array.isArray,B1=Object.prototype.hasOwnProperty,km={current:null},q1={key:!0,ref:!0,__self:!0,__source:!0};function W1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)B1.call(e,r)&&!q1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:vl,type:t,key:s,ref:o,props:i,_owner:km.current}}function FC(t,e){return{$$typeof:vl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rm(t){return typeof t=="object"&&t!==null&&t.$$typeof===vl}function jC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zv=/\/+/g;function Ed(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jC(""+t.key):e.toString(36)}function Pu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vl:case RC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ed(o,0):r,Jv(i)?(n="",t!=null&&(n=t.replace(Zv,"$&/")+"/"),Pu(i,e,n,"",function(c){return c})):i!=null&&(Rm(i)&&(i=FC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Jv(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Ed(s,a);o+=Pu(s,e,n,u,i)}else if(u=VC(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Ed(s,a++),o+=Pu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nu(t,e,n){if(t==null)return t;var r=[],i=0;return Pu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function UC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bt={current:null},Nu={transition:null},$C={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:Nu,ReactCurrentOwner:km};ie.Children={map:nu,forEach:function(t,e,n){nu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nu(t,function(){e++}),e},toArray:function(t){return nu(t,function(e){return e})||[]},only:function(t){if(!Rm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Ao;ie.Fragment=CC;ie.Profiler=xC;ie.PureComponent=Sm;ie.StrictMode=bC;ie.Suspense=DC;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$C;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=U1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=km.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)B1.call(e,u)&&!q1.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:vl,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:NC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:PC,_context:t},t.Consumer=t};ie.createElement=W1;ie.createFactory=function(t){var e=W1.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:OC,render:t}};ie.isValidElement=Rm;ie.lazy=function(t){return{$$typeof:MC,_payload:{_status:-1,_result:t},_init:UC}};ie.memo=function(t,e){return{$$typeof:LC,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Nu.transition;Nu.transition={};try{t()}finally{Nu.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return bt.current.useCallback(t,e)};ie.useContext=function(t){return bt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return bt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return bt.current.useEffect(t,e)};ie.useId=function(){return bt.current.useId()};ie.useImperativeHandle=function(t,e,n){return bt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return bt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return bt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return bt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return bt.current.useReducer(t,e,n)};ie.useRef=function(t){return bt.current.useRef(t)};ie.useState=function(t){return bt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return bt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return bt.current.useTransition()};ie.version="18.2.0";F1.exports=ie;var D=F1.exports;const Re=ih(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zC=D,BC=Symbol.for("react.element"),qC=Symbol.for("react.fragment"),WC=Object.prototype.hasOwnProperty,HC=zC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GC={key:!0,ref:!0,__self:!0,__source:!0};function H1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)WC.call(e,r)&&!GC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:BC,type:t,key:s,ref:o,props:i,_owner:HC.current}}sh.Fragment=qC;sh.jsx=H1;sh.jsxs=H1;V1.exports=sh;var A=V1.exports,kf={},G1={exports:{}},tn={},K1={exports:{}},Q1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,G){var Q=U.length;U.push(G);e:for(;0<Q;){var se=Q-1>>>1,te=U[se];if(0<i(te,G))U[se]=G,U[Q]=te,Q=se;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var G=U[0],Q=U.pop();if(Q!==G){U[0]=Q;e:for(var se=0,te=U.length,he=te>>>1;se<he;){var Ge=2*(se+1)-1,fe=U[Ge],Fe=Ge+1,ct=U[Fe];if(0>i(fe,Q))Fe<te&&0>i(ct,fe)?(U[se]=ct,U[Fe]=Q,se=Fe):(U[se]=fe,U[Ge]=Q,se=Ge);else if(Fe<te&&0>i(ct,Q))U[se]=ct,U[Fe]=Q,se=Fe;else break e}}return G}function i(U,G){var Q=U.sortIndex-G.sortIndex;return Q!==0?Q:U.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,g=!1,E=!1,C=!1,b=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(U){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=U)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function P(U){if(C=!1,T(U),!E)if(n(u)!==null)E=!0,ut(V);else{var G=n(c);G!==null&&Ve(P,G.startTime-U)}}function V(U,G){E=!1,C&&(C=!1,I(v),v=-1),g=!0;var Q=m;try{for(T(G),f=n(u);f!==null&&(!(f.expirationTime>G)||U&&!x());){var se=f.callback;if(typeof se=="function"){f.callback=null,m=f.priorityLevel;var te=se(f.expirationTime<=G);G=t.unstable_now(),typeof te=="function"?f.callback=te:f===n(u)&&r(u),T(G)}else r(u);f=n(u)}if(f!==null)var he=!0;else{var Ge=n(c);Ge!==null&&Ve(P,Ge.startTime-G),he=!1}return he}finally{f=null,m=Q,g=!1}}var L=!1,_=null,v=-1,S=5,R=-1;function x(){return!(t.unstable_now()-R<S)}function N(){if(_!==null){var U=t.unstable_now();R=U;var G=!0;try{G=_(!0,U)}finally{G?k():(L=!1,_=null)}}else L=!1}var k;if(typeof w=="function")k=function(){w(N)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,Pt=He.port2;He.port1.onmessage=N,k=function(){Pt.postMessage(null)}}else k=function(){b(N,0)};function ut(U){_=U,L||(L=!0,k())}function Ve(U,G){v=b(function(){U(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){E||g||(E=!0,ut(V))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(m){case 1:case 2:case 3:var G=3;break;default:G=m}var Q=m;m=G;try{return U()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,G){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Q=m;m=U;try{return G()}finally{m=Q}},t.unstable_scheduleCallback=function(U,G,Q){var se=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?se+Q:se):Q=se,U){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=Q+te,U={id:d++,callback:G,priorityLevel:U,startTime:Q,expirationTime:te,sortIndex:-1},Q>se?(U.sortIndex=Q,e(c,U),n(u)===null&&U===n(c)&&(C?(I(v),v=-1):C=!0,Ve(P,Q-se))):(U.sortIndex=te,e(u,U),E||g||(E=!0,ut(V))),U},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(U){var G=m;return function(){var Q=m;m=G;try{return U.apply(this,arguments)}finally{m=Q}}}})(Q1);K1.exports=Q1;var KC=K1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y1=D,en=KC;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var X1=new Set,Ua={};function os(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for(Ua[t]=e,t=0;t<e.length;t++)X1.add(e[t])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rf=Object.prototype.hasOwnProperty,QC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,e_={},t_={};function YC(t){return Rf.call(t_,t)?!0:Rf.call(e_,t)?!1:QC.test(t)?t_[t]=!0:(e_[t]=!0,!1)}function XC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JC(t,e,n,r){if(e===null||typeof e>"u"||XC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cm=/[\-:]([a-z])/g;function bm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cm,bm);at[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cm,bm);at[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cm,bm);at[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function xm(t,e,n,r){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JC(e,n,i,r)&&(n=null),r||i===null?YC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Er=Y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ru=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),Cs=Symbol.for("react.fragment"),Pm=Symbol.for("react.strict_mode"),Cf=Symbol.for("react.profiler"),J1=Symbol.for("react.provider"),Z1=Symbol.for("react.context"),Nm=Symbol.for("react.forward_ref"),bf=Symbol.for("react.suspense"),xf=Symbol.for("react.suspense_list"),Om=Symbol.for("react.memo"),Nr=Symbol.for("react.lazy"),eE=Symbol.for("react.offscreen"),n_=Symbol.iterator;function Xo(t){return t===null||typeof t!="object"?null:(t=n_&&t[n_]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,Td;function la(t){if(Td===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Td=e&&e[1]||""}return`
`+Td+t}var Id=!1;function Sd(t,e){if(!t||Id)return"";Id=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Id=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?la(t):""}function ZC(t){switch(t.tag){case 5:return la(t.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 2:case 15:return t=Sd(t.type,!1),t;case 11:return t=Sd(t.type.render,!1),t;case 1:return t=Sd(t.type,!0),t;default:return""}}function Pf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cs:return"Fragment";case Rs:return"Portal";case Cf:return"Profiler";case Pm:return"StrictMode";case bf:return"Suspense";case xf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Z1:return(t.displayName||"Context")+".Consumer";case J1:return(t._context.displayName||"Context")+".Provider";case Nm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Om:return e=t.displayName||null,e!==null?e:Pf(t.type)||"Memo";case Nr:e=t._payload,t=t._init;try{return Pf(t(e))}catch{}}return null}function eb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pf(e);case 8:return e===Pm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function oi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tb(t){var e=tE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function iu(t){t._valueTracker||(t._valueTracker=tb(t))}function nE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=tE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nf(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function r_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=oi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rE(t,e){e=e.checked,e!=null&&xm(t,"checked",e,!1)}function Of(t,e){rE(t,e);var n=oi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Df(t,e.type,n):e.hasOwnProperty("defaultValue")&&Df(t,e.type,oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function i_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Df(t,e,n){(e!=="number"||oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function qs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+oi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Lf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function s_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(ua(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:oi(n)}}function iE(t,e){var n=oi(e.value),r=oi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function o_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var su,oE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(su=su||document.createElement("div"),su.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=su.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nb=["Webkit","ms","Moz","O"];Object.keys(Ea).forEach(function(t){nb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ea[e]=Ea[t]})});function aE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ea.hasOwnProperty(t)&&Ea[t]?(""+e).trim():e+"px"}function lE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=aE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rb=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vf(t,e){if(e){if(rb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function Ff(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jf=null;function Dm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uf=null,Ws=null,Hs=null;function a_(t){if(t=El(t)){if(typeof Uf!="function")throw Error($(280));var e=t.stateNode;e&&(e=ch(e),Uf(t.stateNode,t.type,e))}}function uE(t){Ws?Hs?Hs.push(t):Hs=[t]:Ws=t}function cE(){if(Ws){var t=Ws,e=Hs;if(Hs=Ws=null,a_(t),e)for(t=0;t<e.length;t++)a_(e[t])}}function hE(t,e){return t(e)}function dE(){}var Ad=!1;function fE(t,e,n){if(Ad)return t(e,n);Ad=!0;try{return hE(t,e,n)}finally{Ad=!1,(Ws!==null||Hs!==null)&&(dE(),cE())}}function za(t,e){var n=t.stateNode;if(n===null)return null;var r=ch(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var $f=!1;if(cr)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){$f=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{$f=!1}function ib(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ta=!1,ac=null,lc=!1,zf=null,sb={onError:function(t){Ta=!0,ac=t}};function ob(t,e,n,r,i,s,o,a,u){Ta=!1,ac=null,ib.apply(sb,arguments)}function ab(t,e,n,r,i,s,o,a,u){if(ob.apply(this,arguments),Ta){if(Ta){var c=ac;Ta=!1,ac=null}else throw Error($(198));lc||(lc=!0,zf=c)}}function as(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function l_(t){if(as(t)!==t)throw Error($(188))}function lb(t){var e=t.alternate;if(!e){if(e=as(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return l_(i),t;if(s===r)return l_(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function mE(t){return t=lb(t),t!==null?gE(t):null}function gE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gE(t);if(e!==null)return e;t=t.sibling}return null}var yE=en.unstable_scheduleCallback,u_=en.unstable_cancelCallback,ub=en.unstable_shouldYield,cb=en.unstable_requestPaint,Ue=en.unstable_now,hb=en.unstable_getCurrentPriorityLevel,Lm=en.unstable_ImmediatePriority,vE=en.unstable_UserBlockingPriority,uc=en.unstable_NormalPriority,db=en.unstable_LowPriority,_E=en.unstable_IdlePriority,oh=null,Un=null;function fb(t){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(oh,t,void 0,(t.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:gb,pb=Math.log,mb=Math.LN2;function gb(t){return t>>>=0,t===0?32:31-(pb(t)/mb|0)|0}var ou=64,au=4194304;function ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ca(a):(s&=o,s!==0&&(r=ca(s)))}else o=n&~i,o!==0?r=ca(o):s!==0&&(r=ca(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Sn(e),i=1<<n,r|=t[n],e&=~i;return r}function yb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Sn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=yb(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wE(){var t=ou;return ou<<=1,!(ou&4194240)&&(ou=64),t}function kd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _l(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Sn(e),t[e]=n}function _b(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Mm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function EE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var TE,Vm,IE,SE,AE,qf=!1,lu=[],Kr=null,Qr=null,Yr=null,Ba=new Map,qa=new Map,Lr=[],wb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function c_(t,e){switch(t){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Qr=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(e.pointerId)}}function Zo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=El(e),e!==null&&Vm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Eb(t,e,n,r,i){switch(e){case"focusin":return Kr=Zo(Kr,t,e,n,r,i),!0;case"dragenter":return Qr=Zo(Qr,t,e,n,r,i),!0;case"mouseover":return Yr=Zo(Yr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ba.set(s,Zo(Ba.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qa.set(s,Zo(qa.get(s)||null,t,e,n,r,i)),!0}return!1}function kE(t){var e=xi(t.target);if(e!==null){var n=as(e);if(n!==null){if(e=n.tag,e===13){if(e=pE(n),e!==null){t.blockedOn=e,AE(t.priority,function(){IE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ou(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jf=r,n.target.dispatchEvent(r),jf=null}else return e=El(n),e!==null&&Vm(e),t.blockedOn=n,!1;e.shift()}return!0}function h_(t,e,n){Ou(t)&&n.delete(e)}function Tb(){qf=!1,Kr!==null&&Ou(Kr)&&(Kr=null),Qr!==null&&Ou(Qr)&&(Qr=null),Yr!==null&&Ou(Yr)&&(Yr=null),Ba.forEach(h_),qa.forEach(h_)}function ea(t,e){t.blockedOn===e&&(t.blockedOn=null,qf||(qf=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,Tb)))}function Wa(t){function e(i){return ea(i,t)}if(0<lu.length){ea(lu[0],t);for(var n=1;n<lu.length;n++){var r=lu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kr!==null&&ea(Kr,t),Qr!==null&&ea(Qr,t),Yr!==null&&ea(Yr,t),Ba.forEach(e),qa.forEach(e),n=0;n<Lr.length;n++)r=Lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Lr.length&&(n=Lr[0],n.blockedOn===null);)kE(n),n.blockedOn===null&&Lr.shift()}var Gs=Er.ReactCurrentBatchConfig,hc=!0;function Ib(t,e,n,r){var i=pe,s=Gs.transition;Gs.transition=null;try{pe=1,Fm(t,e,n,r)}finally{pe=i,Gs.transition=s}}function Sb(t,e,n,r){var i=pe,s=Gs.transition;Gs.transition=null;try{pe=4,Fm(t,e,n,r)}finally{pe=i,Gs.transition=s}}function Fm(t,e,n,r){if(hc){var i=Wf(t,e,n,r);if(i===null)Md(t,e,r,dc,n),c_(t,r);else if(Eb(i,t,e,n,r))r.stopPropagation();else if(c_(t,r),e&4&&-1<wb.indexOf(t)){for(;i!==null;){var s=El(i);if(s!==null&&TE(s),s=Wf(t,e,n,r),s===null&&Md(t,e,r,dc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Md(t,e,r,null,n)}}var dc=null;function Wf(t,e,n,r){if(dc=null,t=Dm(r),t=xi(t),t!==null)if(e=as(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dc=t,null}function RE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hb()){case Lm:return 1;case vE:return 4;case uc:case db:return 16;case _E:return 536870912;default:return 16}default:return 16}}var Br=null,jm=null,Du=null;function CE(){if(Du)return Du;var t,e=jm,n=e.length,r,i="value"in Br?Br.value:Br.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Du=i.slice(t,1<r?1-r:void 0)}function Lu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uu(){return!0}function d_(){return!1}function nn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uu:d_,this.isPropagationStopped=d_,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uu)},persist:function(){},isPersistent:uu}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Um=nn(ko),wl=Pe({},ko,{view:0,detail:0}),Ab=nn(wl),Rd,Cd,ta,ah=Pe({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$m,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ta&&(ta&&t.type==="mousemove"?(Rd=t.screenX-ta.screenX,Cd=t.screenY-ta.screenY):Cd=Rd=0,ta=t),Rd)},movementY:function(t){return"movementY"in t?t.movementY:Cd}}),f_=nn(ah),kb=Pe({},ah,{dataTransfer:0}),Rb=nn(kb),Cb=Pe({},wl,{relatedTarget:0}),bd=nn(Cb),bb=Pe({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),xb=nn(bb),Pb=Pe({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nb=nn(Pb),Ob=Pe({},ko,{data:0}),p_=nn(Ob),Db={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Mb[t])?!!e[t]:!1}function $m(){return Vb}var Fb=Pe({},wl,{key:function(t){if(t.key){var e=Db[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Lu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$m,charCode:function(t){return t.type==="keypress"?Lu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Lu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jb=nn(Fb),Ub=Pe({},ah,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),m_=nn(Ub),$b=Pe({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$m}),zb=nn($b),Bb=Pe({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),qb=nn(Bb),Wb=Pe({},ah,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hb=nn(Wb),Gb=[9,13,27,32],zm=cr&&"CompositionEvent"in window,Ia=null;cr&&"documentMode"in document&&(Ia=document.documentMode);var Kb=cr&&"TextEvent"in window&&!Ia,bE=cr&&(!zm||Ia&&8<Ia&&11>=Ia),g_=" ",y_=!1;function xE(t,e){switch(t){case"keyup":return Gb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function PE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function Qb(t,e){switch(t){case"compositionend":return PE(e);case"keypress":return e.which!==32?null:(y_=!0,g_);case"textInput":return t=e.data,t===g_&&y_?null:t;default:return null}}function Yb(t,e){if(bs)return t==="compositionend"||!zm&&xE(t,e)?(t=CE(),Du=jm=Br=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bE&&e.locale!=="ko"?null:e.data;default:return null}}var Xb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function v_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Xb[t.type]:e==="textarea"}function NE(t,e,n,r){uE(r),e=fc(e,"onChange"),0<e.length&&(n=new Um("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Sa=null,Ha=null;function Jb(t){BE(t,0)}function lh(t){var e=Ns(t);if(nE(e))return t}function Zb(t,e){if(t==="change")return e}var OE=!1;if(cr){var xd;if(cr){var Pd="oninput"in document;if(!Pd){var __=document.createElement("div");__.setAttribute("oninput","return;"),Pd=typeof __.oninput=="function"}xd=Pd}else xd=!1;OE=xd&&(!document.documentMode||9<document.documentMode)}function w_(){Sa&&(Sa.detachEvent("onpropertychange",DE),Ha=Sa=null)}function DE(t){if(t.propertyName==="value"&&lh(Ha)){var e=[];NE(e,Ha,t,Dm(t)),fE(Jb,e)}}function ex(t,e,n){t==="focusin"?(w_(),Sa=e,Ha=n,Sa.attachEvent("onpropertychange",DE)):t==="focusout"&&w_()}function tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lh(Ha)}function nx(t,e){if(t==="click")return lh(e)}function rx(t,e){if(t==="input"||t==="change")return lh(e)}function ix(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Cn=typeof Object.is=="function"?Object.is:ix;function Ga(t,e){if(Cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rf.call(e,i)||!Cn(t[i],e[i]))return!1}return!0}function E_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function T_(t,e){var n=E_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=E_(n)}}function LE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?LE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ME(){for(var t=window,e=oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oc(t.document)}return e}function Bm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sx(t){var e=ME(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&LE(n.ownerDocument.documentElement,n)){if(r!==null&&Bm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=T_(n,s);var o=T_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ox=cr&&"documentMode"in document&&11>=document.documentMode,xs=null,Hf=null,Aa=null,Gf=!1;function I_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gf||xs==null||xs!==oc(r)||(r=xs,"selectionStart"in r&&Bm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&Ga(Aa,r)||(Aa=r,r=fc(Hf,"onSelect"),0<r.length&&(e=new Um("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xs)))}function cu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ps={animationend:cu("Animation","AnimationEnd"),animationiteration:cu("Animation","AnimationIteration"),animationstart:cu("Animation","AnimationStart"),transitionend:cu("Transition","TransitionEnd")},Nd={},VE={};cr&&(VE=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function uh(t){if(Nd[t])return Nd[t];if(!Ps[t])return t;var e=Ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in VE)return Nd[t]=e[n];return t}var FE=uh("animationend"),jE=uh("animationiteration"),UE=uh("animationstart"),$E=uh("transitionend"),zE=new Map,S_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pi(t,e){zE.set(t,e),os(e,[t])}for(var Od=0;Od<S_.length;Od++){var Dd=S_[Od],ax=Dd.toLowerCase(),lx=Dd[0].toUpperCase()+Dd.slice(1);pi(ax,"on"+lx)}pi(FE,"onAnimationEnd");pi(jE,"onAnimationIteration");pi(UE,"onAnimationStart");pi("dblclick","onDoubleClick");pi("focusin","onFocus");pi("focusout","onBlur");pi($E,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function A_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ab(r,e,void 0,t),t.currentTarget=null}function BE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;A_(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;A_(i,a,c),s=u}}}if(lc)throw t=zf,lc=!1,zf=null,t}function we(t,e){var n=e[Jf];n===void 0&&(n=e[Jf]=new Set);var r=t+"__bubble";n.has(r)||(qE(e,t,2,!1),n.add(r))}function Ld(t,e,n){var r=0;e&&(r|=4),qE(n,t,r,e)}var hu="_reactListening"+Math.random().toString(36).slice(2);function Ka(t){if(!t[hu]){t[hu]=!0,X1.forEach(function(n){n!=="selectionchange"&&(ux.has(n)||Ld(n,!1,t),Ld(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hu]||(e[hu]=!0,Ld("selectionchange",!1,e))}}function qE(t,e,n,r){switch(RE(e)){case 1:var i=Ib;break;case 4:i=Sb;break;default:i=Fm}n=i.bind(null,e,n,t),i=void 0,!$f||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Md(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=xi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}fE(function(){var c=s,d=Dm(n),f=[];e:{var m=zE.get(t);if(m!==void 0){var g=Um,E=t;switch(t){case"keypress":if(Lu(n)===0)break e;case"keydown":case"keyup":g=jb;break;case"focusin":E="focus",g=bd;break;case"focusout":E="blur",g=bd;break;case"beforeblur":case"afterblur":g=bd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=f_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Rb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=zb;break;case FE:case jE:case UE:g=xb;break;case $E:g=qb;break;case"scroll":g=Ab;break;case"wheel":g=Hb;break;case"copy":case"cut":case"paste":g=Nb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=m_}var C=(e&4)!==0,b=!C&&t==="scroll",I=C?m!==null?m+"Capture":null:m;C=[];for(var w=c,T;w!==null;){T=w;var P=T.stateNode;if(T.tag===5&&P!==null&&(T=P,I!==null&&(P=za(w,I),P!=null&&C.push(Qa(w,P,T)))),b)break;w=w.return}0<C.length&&(m=new g(m,E,null,n,d),f.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==jf&&(E=n.relatedTarget||n.fromElement)&&(xi(E)||E[hr]))break e;if((g||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,g?(E=n.relatedTarget||n.toElement,g=c,E=E?xi(E):null,E!==null&&(b=as(E),E!==b||E.tag!==5&&E.tag!==6)&&(E=null)):(g=null,E=c),g!==E)){if(C=f_,P="onMouseLeave",I="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(C=m_,P="onPointerLeave",I="onPointerEnter",w="pointer"),b=g==null?m:Ns(g),T=E==null?m:Ns(E),m=new C(P,w+"leave",g,n,d),m.target=b,m.relatedTarget=T,P=null,xi(d)===c&&(C=new C(I,w+"enter",E,n,d),C.target=T,C.relatedTarget=b,P=C),b=P,g&&E)t:{for(C=g,I=E,w=0,T=C;T;T=vs(T))w++;for(T=0,P=I;P;P=vs(P))T++;for(;0<w-T;)C=vs(C),w--;for(;0<T-w;)I=vs(I),T--;for(;w--;){if(C===I||I!==null&&C===I.alternate)break t;C=vs(C),I=vs(I)}C=null}else C=null;g!==null&&k_(f,m,g,C,!1),E!==null&&b!==null&&k_(f,b,E,C,!0)}}e:{if(m=c?Ns(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var V=Zb;else if(v_(m))if(OE)V=rx;else{V=tx;var L=ex}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=nx);if(V&&(V=V(t,c))){NE(f,V,n,d);break e}L&&L(t,m,c),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&Df(m,"number",m.value)}switch(L=c?Ns(c):window,t){case"focusin":(v_(L)||L.contentEditable==="true")&&(xs=L,Hf=c,Aa=null);break;case"focusout":Aa=Hf=xs=null;break;case"mousedown":Gf=!0;break;case"contextmenu":case"mouseup":case"dragend":Gf=!1,I_(f,n,d);break;case"selectionchange":if(ox)break;case"keydown":case"keyup":I_(f,n,d)}var _;if(zm)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else bs?xE(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(bE&&n.locale!=="ko"&&(bs||v!=="onCompositionStart"?v==="onCompositionEnd"&&bs&&(_=CE()):(Br=d,jm="value"in Br?Br.value:Br.textContent,bs=!0)),L=fc(c,v),0<L.length&&(v=new p_(v,t,null,n,d),f.push({event:v,listeners:L}),_?v.data=_:(_=PE(n),_!==null&&(v.data=_)))),(_=Kb?Qb(t,n):Yb(t,n))&&(c=fc(c,"onBeforeInput"),0<c.length&&(d=new p_("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=_))}BE(f,e)})}function Qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=za(t,n),s!=null&&r.unshift(Qa(t,s,i)),s=za(t,e),s!=null&&r.push(Qa(t,s,i))),t=t.return}return r}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function k_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=za(n,s),u!=null&&o.unshift(Qa(n,u,a))):i||(u=za(n,s),u!=null&&o.push(Qa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cx=/\r\n?/g,hx=/\u0000|\uFFFD/g;function R_(t){return(typeof t=="string"?t:""+t).replace(cx,`
`).replace(hx,"")}function du(t,e,n){if(e=R_(e),R_(t)!==e&&n)throw Error($(425))}function pc(){}var Kf=null,Qf=null;function Yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xf=typeof setTimeout=="function"?setTimeout:void 0,dx=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,fx=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(t){return C_.resolve(null).then(t).catch(px)}:Xf;function px(t){setTimeout(function(){throw t})}function Vd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Wa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wa(e)}function Xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function b_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Ro,Ya="__reactProps$"+Ro,hr="__reactContainer$"+Ro,Jf="__reactEvents$"+Ro,mx="__reactListeners$"+Ro,gx="__reactHandles$"+Ro;function xi(t){var e=t[Mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hr]||n[Mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=b_(t);t!==null;){if(n=t[Mn])return n;t=b_(t)}return e}t=n,n=t.parentNode}return null}function El(t){return t=t[Mn]||t[hr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function ch(t){return t[Ya]||null}var Zf=[],Os=-1;function mi(t){return{current:t}}function Ie(t){0>Os||(t.current=Zf[Os],Zf[Os]=null,Os--)}function ye(t,e){Os++,Zf[Os]=t.current,t.current=e}var ai={},wt=mi(ai),Vt=mi(!1),Wi=ai;function no(t,e){var n=t.type.contextTypes;if(!n)return ai;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function mc(){Ie(Vt),Ie(wt)}function x_(t,e,n){if(wt.current!==ai)throw Error($(168));ye(wt,e),ye(Vt,n)}function WE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,eb(t)||"Unknown",i));return Pe({},n,r)}function gc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ai,Wi=wt.current,ye(wt,t),ye(Vt,Vt.current),!0}function P_(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=WE(t,e,Wi),r.__reactInternalMemoizedMergedChildContext=t,Ie(Vt),Ie(wt),ye(wt,t)):Ie(Vt),ye(Vt,n)}var er=null,hh=!1,Fd=!1;function HE(t){er===null?er=[t]:er.push(t)}function yx(t){hh=!0,HE(t)}function gi(){if(!Fd&&er!==null){Fd=!0;var t=0,e=pe;try{var n=er;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}er=null,hh=!1}catch(i){throw er!==null&&(er=er.slice(t+1)),yE(Lm,gi),i}finally{pe=e,Fd=!1}}return null}var Ds=[],Ls=0,yc=null,vc=0,on=[],an=0,Hi=null,nr=1,rr="";function Ai(t,e){Ds[Ls++]=vc,Ds[Ls++]=yc,yc=t,vc=e}function GE(t,e,n){on[an++]=nr,on[an++]=rr,on[an++]=Hi,Hi=t;var r=nr;t=rr;var i=32-Sn(r)-1;r&=~(1<<i),n+=1;var s=32-Sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nr=1<<32-Sn(e)+i|n<<i|r,rr=s+t}else nr=1<<s|n<<i|r,rr=t}function qm(t){t.return!==null&&(Ai(t,1),GE(t,1,0))}function Wm(t){for(;t===yc;)yc=Ds[--Ls],Ds[Ls]=null,vc=Ds[--Ls],Ds[Ls]=null;for(;t===Hi;)Hi=on[--an],on[an]=null,rr=on[--an],on[an]=null,nr=on[--an],on[an]=null}var Yt=null,Gt=null,ke=!1,Tn=null;function KE(t,e){var n=un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function N_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Yt=t,Gt=Xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Yt=t,Gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hi!==null?{id:nr,overflow:rr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Yt=t,Gt=null,!0):!1;default:return!1}}function ep(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tp(t){if(ke){var e=Gt;if(e){var n=e;if(!N_(t,e)){if(ep(t))throw Error($(418));e=Xr(n.nextSibling);var r=Yt;e&&N_(t,e)?KE(r,n):(t.flags=t.flags&-4097|2,ke=!1,Yt=t)}}else{if(ep(t))throw Error($(418));t.flags=t.flags&-4097|2,ke=!1,Yt=t}}}function O_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yt=t}function fu(t){if(t!==Yt)return!1;if(!ke)return O_(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yf(t.type,t.memoizedProps)),e&&(e=Gt)){if(ep(t))throw QE(),Error($(418));for(;e;)KE(t,e),e=Xr(e.nextSibling)}if(O_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Gt=Xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Gt=null}}else Gt=Yt?Xr(t.stateNode.nextSibling):null;return!0}function QE(){for(var t=Gt;t;)t=Xr(t.nextSibling)}function ro(){Gt=Yt=null,ke=!1}function Hm(t){Tn===null?Tn=[t]:Tn.push(t)}var vx=Er.ReactCurrentBatchConfig;function wn(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var _c=mi(null),wc=null,Ms=null,Gm=null;function Km(){Gm=Ms=wc=null}function Qm(t){var e=_c.current;Ie(_c),t._currentValue=e}function np(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e){wc=t,Gm=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Lt=!0),t.firstContext=null)}function hn(t){var e=t._currentValue;if(Gm!==t)if(t={context:t,memoizedValue:e,next:null},Ms===null){if(wc===null)throw Error($(308));Ms=t,wc.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return e}var Pi=null;function Ym(t){Pi===null?Pi=[t]:Pi.push(t)}function YE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ym(e)):(n.next=i.next,i.next=n),e.interleaved=n,dr(t,r)}function dr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Or=!1;function Xm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function XE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,dr(t,n)}return i=r.interleaved,i===null?(e.next=e,Ym(r)):(e.next=i.next,i.next=e),r.interleaved=e,dr(t,n)}function Mu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mm(t,n)}}function D_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ec(t,e,n,r){var i=t.updateQueue;Or=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,g=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,C=a;switch(m=e,g=n,C.tag){case 1:if(E=C.payload,typeof E=="function"){f=E.call(g,f,m);break e}f=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=C.payload,m=typeof E=="function"?E.call(g,f,m):E,m==null)break e;f=Pe({},f,m);break e;case 2:Or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,u=f):d=d.next=g,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ki|=o,t.lanes=o,t.memoizedState=f}}function L_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var JE=new Y1.Component().refs;function rp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dh={isMounted:function(t){return(t=t._reactInternals)?as(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=ei(t),s=ar(r,i);s.payload=e,n!=null&&(s.callback=n),e=Jr(t,s,i),e!==null&&(An(e,t,i,r),Mu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=ei(t),s=ar(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Jr(t,s,i),e!==null&&(An(e,t,i,r),Mu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ct(),r=ei(t),i=ar(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jr(t,i,r),e!==null&&(An(e,t,r,n),Mu(e,t,r))}};function M_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ga(n,r)||!Ga(i,s):!0}function ZE(t,e,n){var r=!1,i=ai,s=e.contextType;return typeof s=="object"&&s!==null?s=hn(s):(i=Ft(e)?Wi:wt.current,r=e.contextTypes,s=(r=r!=null)?no(t,i):ai),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function V_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dh.enqueueReplaceState(e,e.state,null)}function ip(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=JE,Xm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=hn(s):(s=Ft(e)?Wi:wt.current,i.context=no(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dh.enqueueReplaceState(i,i.state,null),Ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===JE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function pu(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function F_(t){var e=t._init;return e(t._payload)}function eT(t){function e(I,w){if(t){var T=I.deletions;T===null?(I.deletions=[w],I.flags|=16):T.push(w)}}function n(I,w){if(!t)return null;for(;w!==null;)e(I,w),w=w.sibling;return null}function r(I,w){for(I=new Map;w!==null;)w.key!==null?I.set(w.key,w):I.set(w.index,w),w=w.sibling;return I}function i(I,w){return I=ti(I,w),I.index=0,I.sibling=null,I}function s(I,w,T){return I.index=T,t?(T=I.alternate,T!==null?(T=T.index,T<w?(I.flags|=2,w):T):(I.flags|=2,w)):(I.flags|=1048576,w)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,w,T,P){return w===null||w.tag!==6?(w=Wd(T,I.mode,P),w.return=I,w):(w=i(w,T),w.return=I,w)}function u(I,w,T,P){var V=T.type;return V===Cs?d(I,w,T.props.children,P,T.key):w!==null&&(w.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Nr&&F_(V)===w.type)?(P=i(w,T.props),P.ref=na(I,w,T),P.return=I,P):(P=zu(T.type,T.key,T.props,null,I.mode,P),P.ref=na(I,w,T),P.return=I,P)}function c(I,w,T,P){return w===null||w.tag!==4||w.stateNode.containerInfo!==T.containerInfo||w.stateNode.implementation!==T.implementation?(w=Hd(T,I.mode,P),w.return=I,w):(w=i(w,T.children||[]),w.return=I,w)}function d(I,w,T,P,V){return w===null||w.tag!==7?(w=Vi(T,I.mode,P,V),w.return=I,w):(w=i(w,T),w.return=I,w)}function f(I,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Wd(""+w,I.mode,T),w.return=I,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ru:return T=zu(w.type,w.key,w.props,null,I.mode,T),T.ref=na(I,null,w),T.return=I,T;case Rs:return w=Hd(w,I.mode,T),w.return=I,w;case Nr:var P=w._init;return f(I,P(w._payload),T)}if(ua(w)||Xo(w))return w=Vi(w,I.mode,T,null),w.return=I,w;pu(I,w)}return null}function m(I,w,T,P){var V=w!==null?w.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return V!==null?null:a(I,w,""+T,P);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ru:return T.key===V?u(I,w,T,P):null;case Rs:return T.key===V?c(I,w,T,P):null;case Nr:return V=T._init,m(I,w,V(T._payload),P)}if(ua(T)||Xo(T))return V!==null?null:d(I,w,T,P,null);pu(I,T)}return null}function g(I,w,T,P,V){if(typeof P=="string"&&P!==""||typeof P=="number")return I=I.get(T)||null,a(w,I,""+P,V);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ru:return I=I.get(P.key===null?T:P.key)||null,u(w,I,P,V);case Rs:return I=I.get(P.key===null?T:P.key)||null,c(w,I,P,V);case Nr:var L=P._init;return g(I,w,T,L(P._payload),V)}if(ua(P)||Xo(P))return I=I.get(T)||null,d(w,I,P,V,null);pu(w,P)}return null}function E(I,w,T,P){for(var V=null,L=null,_=w,v=w=0,S=null;_!==null&&v<T.length;v++){_.index>v?(S=_,_=null):S=_.sibling;var R=m(I,_,T[v],P);if(R===null){_===null&&(_=S);break}t&&_&&R.alternate===null&&e(I,_),w=s(R,w,v),L===null?V=R:L.sibling=R,L=R,_=S}if(v===T.length)return n(I,_),ke&&Ai(I,v),V;if(_===null){for(;v<T.length;v++)_=f(I,T[v],P),_!==null&&(w=s(_,w,v),L===null?V=_:L.sibling=_,L=_);return ke&&Ai(I,v),V}for(_=r(I,_);v<T.length;v++)S=g(_,I,v,T[v],P),S!==null&&(t&&S.alternate!==null&&_.delete(S.key===null?v:S.key),w=s(S,w,v),L===null?V=S:L.sibling=S,L=S);return t&&_.forEach(function(x){return e(I,x)}),ke&&Ai(I,v),V}function C(I,w,T,P){var V=Xo(T);if(typeof V!="function")throw Error($(150));if(T=V.call(T),T==null)throw Error($(151));for(var L=V=null,_=w,v=w=0,S=null,R=T.next();_!==null&&!R.done;v++,R=T.next()){_.index>v?(S=_,_=null):S=_.sibling;var x=m(I,_,R.value,P);if(x===null){_===null&&(_=S);break}t&&_&&x.alternate===null&&e(I,_),w=s(x,w,v),L===null?V=x:L.sibling=x,L=x,_=S}if(R.done)return n(I,_),ke&&Ai(I,v),V;if(_===null){for(;!R.done;v++,R=T.next())R=f(I,R.value,P),R!==null&&(w=s(R,w,v),L===null?V=R:L.sibling=R,L=R);return ke&&Ai(I,v),V}for(_=r(I,_);!R.done;v++,R=T.next())R=g(_,I,v,R.value,P),R!==null&&(t&&R.alternate!==null&&_.delete(R.key===null?v:R.key),w=s(R,w,v),L===null?V=R:L.sibling=R,L=R);return t&&_.forEach(function(N){return e(I,N)}),ke&&Ai(I,v),V}function b(I,w,T,P){if(typeof T=="object"&&T!==null&&T.type===Cs&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case ru:e:{for(var V=T.key,L=w;L!==null;){if(L.key===V){if(V=T.type,V===Cs){if(L.tag===7){n(I,L.sibling),w=i(L,T.props.children),w.return=I,I=w;break e}}else if(L.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Nr&&F_(V)===L.type){n(I,L.sibling),w=i(L,T.props),w.ref=na(I,L,T),w.return=I,I=w;break e}n(I,L);break}else e(I,L);L=L.sibling}T.type===Cs?(w=Vi(T.props.children,I.mode,P,T.key),w.return=I,I=w):(P=zu(T.type,T.key,T.props,null,I.mode,P),P.ref=na(I,w,T),P.return=I,I=P)}return o(I);case Rs:e:{for(L=T.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===T.containerInfo&&w.stateNode.implementation===T.implementation){n(I,w.sibling),w=i(w,T.children||[]),w.return=I,I=w;break e}else{n(I,w);break}else e(I,w);w=w.sibling}w=Hd(T,I.mode,P),w.return=I,I=w}return o(I);case Nr:return L=T._init,b(I,w,L(T._payload),P)}if(ua(T))return E(I,w,T,P);if(Xo(T))return C(I,w,T,P);pu(I,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,w!==null&&w.tag===6?(n(I,w.sibling),w=i(w,T),w.return=I,I=w):(n(I,w),w=Wd(T,I.mode,P),w.return=I,I=w),o(I)):n(I,w)}return b}var io=eT(!0),tT=eT(!1),Tl={},$n=mi(Tl),Xa=mi(Tl),Ja=mi(Tl);function Ni(t){if(t===Tl)throw Error($(174));return t}function Jm(t,e){switch(ye(Ja,e),ye(Xa,t),ye($n,Tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mf(e,t)}Ie($n),ye($n,e)}function so(){Ie($n),Ie(Xa),Ie(Ja)}function nT(t){Ni(Ja.current);var e=Ni($n.current),n=Mf(e,t.type);e!==n&&(ye(Xa,t),ye($n,n))}function Zm(t){Xa.current===t&&(Ie($n),Ie(Xa))}var be=mi(0);function Tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jd=[];function eg(){for(var t=0;t<jd.length;t++)jd[t]._workInProgressVersionPrimary=null;jd.length=0}var Vu=Er.ReactCurrentDispatcher,Ud=Er.ReactCurrentBatchConfig,Gi=0,xe=null,Ke=null,Je=null,Ic=!1,ka=!1,Za=0,_x=0;function pt(){throw Error($(321))}function tg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Cn(t[n],e[n]))return!1;return!0}function ng(t,e,n,r,i,s){if(Gi=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vu.current=t===null||t.memoizedState===null?Ix:Sx,t=n(r,i),ka){s=0;do{if(ka=!1,Za=0,25<=s)throw Error($(301));s+=1,Je=Ke=null,e.updateQueue=null,Vu.current=Ax,t=n(r,i)}while(ka)}if(Vu.current=Sc,e=Ke!==null&&Ke.next!==null,Gi=0,Je=Ke=xe=null,Ic=!1,e)throw Error($(300));return t}function rg(){var t=Za!==0;return Za=0,t}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?xe.memoizedState=Je=t:Je=Je.next=t,Je}function dn(){if(Ke===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=Je===null?xe.memoizedState:Je.next;if(e!==null)Je=e,Ke=t;else{if(t===null)throw Error($(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Je===null?xe.memoizedState=Je=t:Je=Je.next=t}return Je}function el(t,e){return typeof e=="function"?e(t):e}function $d(t){var e=dn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=Ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Gi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,xe.lanes|=d,Ki|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Cn(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,Ki|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zd(t){var e=dn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Cn(s,e.memoizedState)||(Lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function rT(){}function iT(t,e){var n=xe,r=dn(),i=e(),s=!Cn(r.memoizedState,i);if(s&&(r.memoizedState=i,Lt=!0),r=r.queue,ig(aT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,tl(9,oT.bind(null,n,r,i,e),void 0,null),et===null)throw Error($(349));Gi&30||sT(n,e,i)}return i}function sT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function oT(t,e,n,r){e.value=n,e.getSnapshot=r,lT(e)&&uT(t)}function aT(t,e,n){return n(function(){lT(e)&&uT(t)})}function lT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Cn(t,n)}catch{return!0}}function uT(t){var e=dr(t,1);e!==null&&An(e,t,1,-1)}function j_(t){var e=On();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:t},e.queue=t,t=t.dispatch=Tx.bind(null,xe,t),[e.memoizedState,t]}function tl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function cT(){return dn().memoizedState}function Fu(t,e,n,r){var i=On();xe.flags|=t,i.memoizedState=tl(1|e,n,void 0,r===void 0?null:r)}function fh(t,e,n,r){var i=dn();r=r===void 0?null:r;var s=void 0;if(Ke!==null){var o=Ke.memoizedState;if(s=o.destroy,r!==null&&tg(r,o.deps)){i.memoizedState=tl(e,n,s,r);return}}xe.flags|=t,i.memoizedState=tl(1|e,n,s,r)}function U_(t,e){return Fu(8390656,8,t,e)}function ig(t,e){return fh(2048,8,t,e)}function hT(t,e){return fh(4,2,t,e)}function dT(t,e){return fh(4,4,t,e)}function fT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pT(t,e,n){return n=n!=null?n.concat([t]):null,fh(4,4,fT.bind(null,e,t),n)}function sg(){}function mT(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function gT(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function yT(t,e,n){return Gi&21?(Cn(n,e)||(n=wE(),xe.lanes|=n,Ki|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=n)}function wx(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Ud.transition;Ud.transition={};try{t(!1),e()}finally{pe=n,Ud.transition=r}}function vT(){return dn().memoizedState}function Ex(t,e,n){var r=ei(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_T(t))wT(e,n);else if(n=YE(t,e,n,r),n!==null){var i=Ct();An(n,t,r,i),ET(n,e,r)}}function Tx(t,e,n){var r=ei(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_T(t))wT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Cn(a,o)){var u=e.interleaved;u===null?(i.next=i,Ym(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=YE(t,e,i,r),n!==null&&(i=Ct(),An(n,t,r,i),ET(n,e,r))}}function _T(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function wT(t,e){ka=Ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ET(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mm(t,n)}}var Sc={readContext:hn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},Ix={readContext:hn,useCallback:function(t,e){return On().memoizedState=[t,e===void 0?null:e],t},useContext:hn,useEffect:U_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fu(4194308,4,fT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fu(4,2,t,e)},useMemo:function(t,e){var n=On();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=On();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ex.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=On();return t={current:t},e.memoizedState=t},useState:j_,useDebugValue:sg,useDeferredValue:function(t){return On().memoizedState=t},useTransition:function(){var t=j_(!1),e=t[0];return t=wx.bind(null,t[1]),On().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=On();if(ke){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),et===null)throw Error($(349));Gi&30||sT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,U_(aT.bind(null,r,s,t),[t]),r.flags|=2048,tl(9,oT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=On(),e=et.identifierPrefix;if(ke){var n=rr,r=nr;n=(r&~(1<<32-Sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Za++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_x++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sx={readContext:hn,useCallback:mT,useContext:hn,useEffect:ig,useImperativeHandle:pT,useInsertionEffect:hT,useLayoutEffect:dT,useMemo:gT,useReducer:$d,useRef:cT,useState:function(){return $d(el)},useDebugValue:sg,useDeferredValue:function(t){var e=dn();return yT(e,Ke.memoizedState,t)},useTransition:function(){var t=$d(el)[0],e=dn().memoizedState;return[t,e]},useMutableSource:rT,useSyncExternalStore:iT,useId:vT,unstable_isNewReconciler:!1},Ax={readContext:hn,useCallback:mT,useContext:hn,useEffect:ig,useImperativeHandle:pT,useInsertionEffect:hT,useLayoutEffect:dT,useMemo:gT,useReducer:zd,useRef:cT,useState:function(){return zd(el)},useDebugValue:sg,useDeferredValue:function(t){var e=dn();return Ke===null?e.memoizedState=t:yT(e,Ke.memoizedState,t)},useTransition:function(){var t=zd(el)[0],e=dn().memoizedState;return[t,e]},useMutableSource:rT,useSyncExternalStore:iT,useId:vT,unstable_isNewReconciler:!1};function oo(t,e){try{var n="",r=e;do n+=ZC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kx=typeof WeakMap=="function"?WeakMap:Map;function TT(t,e,n){n=ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){kc||(kc=!0,mp=r),sp(t,e)},n}function IT(t,e,n){n=ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sp(t,e),typeof r!="function"&&(Zr===null?Zr=new Set([this]):Zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ux.bind(null,t,e,n),e.then(t,t))}function z_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function B_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ar(-1,1),e.tag=2,Jr(n,e,1))),n.lanes|=1),t)}var Rx=Er.ReactCurrentOwner,Lt=!1;function Rt(t,e,n,r){e.child=t===null?tT(e,null,n,r):io(e,t.child,n,r)}function q_(t,e,n,r,i){n=n.render;var s=e.ref;return Ks(e,i),r=ng(t,e,n,r,s,i),n=rg(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fr(t,e,i)):(ke&&n&&qm(e),e.flags|=1,Rt(t,e,r,i),e.child)}function W_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!fg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ST(t,e,s,r,i)):(t=zu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ga,n(o,r)&&t.ref===e.ref)return fr(t,e,i)}return e.flags|=1,t=ti(s,r),t.ref=e.ref,t.return=e,e.child=t}function ST(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ga(s,r)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Lt=!0);else return e.lanes=t.lanes,fr(t,e,i)}return op(t,e,n,r,i)}function AT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Fs,Ht),Ht|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Fs,Ht),Ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(Fs,Ht),Ht|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(Fs,Ht),Ht|=r;return Rt(t,e,i,n),e.child}function kT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function op(t,e,n,r,i){var s=Ft(n)?Wi:wt.current;return s=no(e,s),Ks(e,i),n=ng(t,e,n,r,s,i),r=rg(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fr(t,e,i)):(ke&&r&&qm(e),e.flags|=1,Rt(t,e,n,i),e.child)}function H_(t,e,n,r,i){if(Ft(n)){var s=!0;gc(e)}else s=!1;if(Ks(e,i),e.stateNode===null)ju(t,e),ZE(e,n,r),ip(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=hn(c):(c=Ft(n)?Wi:wt.current,c=no(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&V_(e,o,r,c),Or=!1;var m=e.memoizedState;o.state=m,Ec(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Vt.current||Or?(typeof d=="function"&&(rp(e,n,d,r),u=e.memoizedState),(a=Or||M_(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,XE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:wn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=hn(u):(u=Ft(n)?Wi:wt.current,u=no(e,u));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&V_(e,o,r,u),Or=!1,m=e.memoizedState,o.state=m,Ec(e,r,o,i);var E=e.memoizedState;a!==f||m!==E||Vt.current||Or?(typeof g=="function"&&(rp(e,n,g,r),E=e.memoizedState),(c=Or||M_(e,n,c,r,m,E,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return ap(t,e,n,r,s,i)}function ap(t,e,n,r,i,s){kT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&P_(e,n,!1),fr(t,e,s);r=e.stateNode,Rx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=io(e,t.child,null,s),e.child=io(e,null,a,s)):Rt(t,e,a,s),e.memoizedState=r.state,i&&P_(e,n,!0),e.child}function RT(t){var e=t.stateNode;e.pendingContext?x_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&x_(t,e.context,!1),Jm(t,e.containerInfo)}function G_(t,e,n,r,i){return ro(),Hm(i),e.flags|=256,Rt(t,e,n,r),e.child}var lp={dehydrated:null,treeContext:null,retryLane:0};function up(t){return{baseLanes:t,cachePool:null,transitions:null}}function CT(t,e,n){var r=e.pendingProps,i=be.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(be,i&1),t===null)return tp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gh(o,r,0,null),t=Vi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=up(n),e.memoizedState=lp,t):og(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Cx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ti(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ti(a,s):(s=Vi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?up(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=lp,r}return s=t.child,t=s.sibling,r=ti(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function og(t,e){return e=gh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mu(t,e,n,r){return r!==null&&Hm(r),io(e,t.child,null,n),t=og(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Cx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bd(Error($(422))),mu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gh({mode:"visible",children:r.children},i,0,null),s=Vi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&io(e,t.child,null,o),e.child.memoizedState=up(o),e.memoizedState=lp,s);if(!(e.mode&1))return mu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=Bd(s,r,void 0),mu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Lt||a){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,dr(t,i),An(r,t,i,-1))}return dg(),r=Bd(Error($(421))),mu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$x.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Gt=Xr(i.nextSibling),Yt=e,ke=!0,Tn=null,t!==null&&(on[an++]=nr,on[an++]=rr,on[an++]=Hi,nr=t.id,rr=t.overflow,Hi=e),e=og(e,r.children),e.flags|=4096,e)}function K_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),np(t.return,e,n)}function qd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function bT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Rt(t,e,r.children,n),r=be.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&K_(t,n,e);else if(t.tag===19)K_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(be,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qd(e,!0,n,null,s);break;case"together":qd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ju(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ki|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=ti(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ti(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bx(t,e,n){switch(e.tag){case 3:RT(e),ro();break;case 5:nT(e);break;case 1:Ft(e.type)&&gc(e);break;case 4:Jm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(_c,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(be,be.current&1),e.flags|=128,null):n&e.child.childLanes?CT(t,e,n):(ye(be,be.current&1),t=fr(t,e,n),t!==null?t.sibling:null);ye(be,be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return bT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(be,be.current),r)break;return null;case 22:case 23:return e.lanes=0,AT(t,e,n)}return fr(t,e,n)}var xT,cp,PT,NT;xT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cp=function(){};PT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ni($n.current);var s=null;switch(n){case"input":i=Nf(t,i),r=Nf(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=Lf(t,i),r=Lf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pc)}Vf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ua.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&we("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};NT=function(t,e,n,r){n!==r&&(e.flags|=4)};function ra(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xx(t,e,n){var r=e.pendingProps;switch(Wm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Ft(e.type)&&mc(),mt(e),null;case 3:return r=e.stateNode,so(),Ie(Vt),Ie(wt),eg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tn!==null&&(vp(Tn),Tn=null))),cp(t,e),mt(e),null;case 5:Zm(e);var i=Ni(Ja.current);if(n=e.type,t!==null&&e.stateNode!=null)PT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return mt(e),null}if(t=Ni($n.current),fu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mn]=e,r[Ya]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<ha.length;i++)we(ha[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":r_(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":s_(r,s),we("invalid",r)}Vf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&du(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&du(r.textContent,a,t),i=["children",""+a]):Ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":iu(r),i_(r,s,!0);break;case"textarea":iu(r),o_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mn]=e,t[Ya]=r,xT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ff(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<ha.length;i++)we(ha[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":r_(t,r),i=Nf(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),we("invalid",t);break;case"textarea":s_(t,r),i=Lf(t,r),we("invalid",t);break;default:i=r}Vf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?lE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&oE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&$a(t,u):typeof u=="number"&&$a(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ua.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&xm(t,s,u,o))}switch(n){case"input":iu(t),i_(t,r,!1);break;case"textarea":iu(t),o_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+oi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qs(t,!!r.multiple,s,!1):r.defaultValue!=null&&qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)NT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=Ni(Ja.current),Ni($n.current),fu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mn]=e,(s=r.nodeValue!==n)&&(t=Yt,t!==null))switch(t.tag){case 3:du(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&du(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mn]=e,e.stateNode=r}return mt(e),null;case 13:if(Ie(be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&Gt!==null&&e.mode&1&&!(e.flags&128))QE(),ro(),e.flags|=98560,s=!1;else if(s=fu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[Mn]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else Tn!==null&&(vp(Tn),Tn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||be.current&1?Qe===0&&(Qe=3):dg())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return so(),cp(t,e),t===null&&Ka(e.stateNode.containerInfo),mt(e),null;case 10:return Qm(e.type._context),mt(e),null;case 17:return Ft(e.type)&&mc(),mt(e),null;case 19:if(Ie(be),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ra(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tc(t),o!==null){for(e.flags|=128,ra(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(be,be.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>ao&&(e.flags|=128,r=!0,ra(s,!1),e.lanes=4194304)}else{if(!r)if(t=Tc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ra(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ke)return mt(e),null}else 2*Ue()-s.renderingStartTime>ao&&n!==1073741824&&(e.flags|=128,r=!0,ra(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=be.current,ye(be,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return hg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ht&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function Px(t,e){switch(Wm(e),e.tag){case 1:return Ft(e.type)&&mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),Ie(Vt),Ie(wt),eg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zm(e),null;case 13:if(Ie(be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(be),null;case 4:return so(),null;case 10:return Qm(e.type._context),null;case 22:case 23:return hg(),null;case 24:return null;default:return null}}var gu=!1,vt=!1,Nx=typeof WeakSet=="function"?WeakSet:Set,B=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function hp(t,e,n){try{n()}catch(r){Le(t,e,r)}}var Q_=!1;function Ox(t,e){if(Kf=hc,t=ME(),Bm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)m=f,f=g;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(g=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qf={focusedElem:t,selectionRange:n},hc=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var C=E.memoizedProps,b=E.memoizedState,I=e.stateNode,w=I.getSnapshotBeforeUpdate(e.elementType===e.type?C:wn(e.type,C),b);I.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(P){Le(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return E=Q_,Q_=!1,E}function Ra(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&hp(e,n,s)}i=i.next}while(i!==r)}}function ph(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function dp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function OT(t){var e=t.alternate;e!==null&&(t.alternate=null,OT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mn],delete e[Ya],delete e[Jf],delete e[mx],delete e[gx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function DT(t){return t.tag===5||t.tag===3||t.tag===4}function Y_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||DT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pc));else if(r!==4&&(t=t.child,t!==null))for(fp(t,e,n),t=t.sibling;t!==null;)fp(t,e,n),t=t.sibling}function pp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pp(t,e,n),t=t.sibling;t!==null;)pp(t,e,n),t=t.sibling}var nt=null,En=!1;function Cr(t,e,n){for(n=n.child;n!==null;)LT(t,e,n),n=n.sibling}function LT(t,e,n){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(oh,n)}catch{}switch(n.tag){case 5:vt||Vs(n,e);case 6:var r=nt,i=En;nt=null,Cr(t,e,n),nt=r,En=i,nt!==null&&(En?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(En?(t=nt,n=n.stateNode,t.nodeType===8?Vd(t.parentNode,n):t.nodeType===1&&Vd(t,n),Wa(t)):Vd(nt,n.stateNode));break;case 4:r=nt,i=En,nt=n.stateNode.containerInfo,En=!0,Cr(t,e,n),nt=r,En=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hp(n,e,o),i=i.next}while(i!==r)}Cr(t,e,n);break;case 1:if(!vt&&(Vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}Cr(t,e,n);break;case 21:Cr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,Cr(t,e,n),vt=r):Cr(t,e,n);break;default:Cr(t,e,n)}}function X_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Nx),e.forEach(function(r){var i=zx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:nt=a.stateNode,En=!1;break e;case 3:nt=a.stateNode.containerInfo,En=!0;break e;case 4:nt=a.stateNode.containerInfo,En=!0;break e}a=a.return}if(nt===null)throw Error($(160));LT(s,o,i),nt=null,En=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Le(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)MT(e,t),e=e.sibling}function MT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vn(e,t),Pn(t),r&4){try{Ra(3,t,t.return),ph(3,t)}catch(C){Le(t,t.return,C)}try{Ra(5,t,t.return)}catch(C){Le(t,t.return,C)}}break;case 1:vn(e,t),Pn(t),r&512&&n!==null&&Vs(n,n.return);break;case 5:if(vn(e,t),Pn(t),r&512&&n!==null&&Vs(n,n.return),t.flags&32){var i=t.stateNode;try{$a(i,"")}catch(C){Le(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rE(i,s),Ff(a,o);var c=Ff(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?lE(i,f):d==="dangerouslySetInnerHTML"?oE(i,f):d==="children"?$a(i,f):xm(i,d,f,c)}switch(a){case"input":Of(i,s);break;case"textarea":iE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?qs(i,!!s.multiple,g,!1):m!==!!s.multiple&&(s.defaultValue!=null?qs(i,!!s.multiple,s.defaultValue,!0):qs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ya]=s}catch(C){Le(t,t.return,C)}}break;case 6:if(vn(e,t),Pn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){Le(t,t.return,C)}}break;case 3:if(vn(e,t),Pn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(e.containerInfo)}catch(C){Le(t,t.return,C)}break;case 4:vn(e,t),Pn(t);break;case 13:vn(e,t),Pn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ug=Ue())),r&4&&X_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(c=vt)||d,vn(e,t),vt=c):vn(e,t),Pn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(B=t,d=t.child;d!==null;){for(f=B=d;B!==null;){switch(m=B,g=m.child,m.tag){case 0:case 11:case 14:case 15:Ra(4,m,m.return);break;case 1:Vs(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(C){Le(r,n,C)}}break;case 5:Vs(m,m.return);break;case 22:if(m.memoizedState!==null){Z_(f);continue}}g!==null?(g.return=m,B=g):Z_(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=aE("display",o))}catch(C){Le(t,t.return,C)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){Le(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vn(e,t),Pn(t),r&4&&X_(t);break;case 21:break;default:vn(e,t),Pn(t)}}function Pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(DT(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($a(i,""),r.flags&=-33);var s=Y_(t);pp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Y_(t);fp(t,a,o);break;default:throw Error($(161))}}catch(u){Le(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dx(t,e,n){B=t,VT(t)}function VT(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||vt;a=gu;var c=vt;if(gu=o,(vt=u)&&!c)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?e0(i):u!==null?(u.return=o,B=u):e0(i);for(;s!==null;)B=s,VT(s),s=s.sibling;B=i,gu=a,vt=c}J_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):J_(t)}}function J_(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||ph(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:wn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&L_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}L_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Wa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}vt||e.flags&512&&dp(e)}catch(m){Le(e,e.return,m)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Z_(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function e0(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ph(4,e)}catch(u){Le(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Le(e,i,u)}}var s=e.return;try{dp(e)}catch(u){Le(e,s,u)}break;case 5:var o=e.return;try{dp(e)}catch(u){Le(e,o,u)}}}catch(u){Le(e,e.return,u)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var Lx=Math.ceil,Ac=Er.ReactCurrentDispatcher,ag=Er.ReactCurrentOwner,cn=Er.ReactCurrentBatchConfig,le=0,et=null,qe=null,st=0,Ht=0,Fs=mi(0),Qe=0,nl=null,Ki=0,mh=0,lg=0,Ca=null,Ot=null,ug=0,ao=1/0,Jn=null,kc=!1,mp=null,Zr=null,yu=!1,qr=null,Rc=0,ba=0,gp=null,Uu=-1,$u=0;function Ct(){return le&6?Ue():Uu!==-1?Uu:Uu=Ue()}function ei(t){return t.mode&1?le&2&&st!==0?st&-st:vx.transition!==null?($u===0&&($u=wE()),$u):(t=pe,t!==0||(t=window.event,t=t===void 0?16:RE(t.type)),t):1}function An(t,e,n,r){if(50<ba)throw ba=0,gp=null,Error($(185));_l(t,n,r),(!(le&2)||t!==et)&&(t===et&&(!(le&2)&&(mh|=n),Qe===4&&Mr(t,st)),jt(t,r),n===1&&le===0&&!(e.mode&1)&&(ao=Ue()+500,hh&&gi()))}function jt(t,e){var n=t.callbackNode;vb(t,e);var r=cc(t,t===et?st:0);if(r===0)n!==null&&u_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&u_(n),e===1)t.tag===0?yx(t0.bind(null,t)):HE(t0.bind(null,t)),fx(function(){!(le&6)&&gi()}),n=null;else{switch(EE(r)){case 1:n=Lm;break;case 4:n=vE;break;case 16:n=uc;break;case 536870912:n=_E;break;default:n=uc}n=WT(n,FT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function FT(t,e){if(Uu=-1,$u=0,le&6)throw Error($(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var r=cc(t,t===et?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Cc(t,r);else{e=r;var i=le;le|=2;var s=UT();(et!==t||st!==e)&&(Jn=null,ao=Ue()+500,Mi(t,e));do try{Fx();break}catch(a){jT(t,a)}while(!0);Km(),Ac.current=s,le=i,qe!==null?e=0:(et=null,st=0,e=Qe)}if(e!==0){if(e===2&&(i=Bf(t),i!==0&&(r=i,e=yp(t,i))),e===1)throw n=nl,Mi(t,0),Mr(t,r),jt(t,Ue()),n;if(e===6)Mr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Mx(i)&&(e=Cc(t,r),e===2&&(s=Bf(t),s!==0&&(r=s,e=yp(t,s))),e===1))throw n=nl,Mi(t,0),Mr(t,r),jt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:ki(t,Ot,Jn);break;case 3:if(Mr(t,r),(r&130023424)===r&&(e=ug+500-Ue(),10<e)){if(cc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Xf(ki.bind(null,t,Ot,Jn),e);break}ki(t,Ot,Jn);break;case 4:if(Mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lx(r/1960))-r,10<r){t.timeoutHandle=Xf(ki.bind(null,t,Ot,Jn),r);break}ki(t,Ot,Jn);break;case 5:ki(t,Ot,Jn);break;default:throw Error($(329))}}}return jt(t,Ue()),t.callbackNode===n?FT.bind(null,t):null}function yp(t,e){var n=Ca;return t.current.memoizedState.isDehydrated&&(Mi(t,e).flags|=256),t=Cc(t,e),t!==2&&(e=Ot,Ot=n,e!==null&&vp(e)),t}function vp(t){Ot===null?Ot=t:Ot.push.apply(Ot,t)}function Mx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mr(t,e){for(e&=~lg,e&=~mh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Sn(e),r=1<<n;t[n]=-1,e&=~r}}function t0(t){if(le&6)throw Error($(327));Qs();var e=cc(t,0);if(!(e&1))return jt(t,Ue()),null;var n=Cc(t,e);if(t.tag!==0&&n===2){var r=Bf(t);r!==0&&(e=r,n=yp(t,r))}if(n===1)throw n=nl,Mi(t,0),Mr(t,e),jt(t,Ue()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ki(t,Ot,Jn),jt(t,Ue()),null}function cg(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(ao=Ue()+500,hh&&gi())}}function Qi(t){qr!==null&&qr.tag===0&&!(le&6)&&Qs();var e=le;le|=1;var n=cn.transition,r=pe;try{if(cn.transition=null,pe=1,t)return t()}finally{pe=r,cn.transition=n,le=e,!(le&6)&&gi()}}function hg(){Ht=Fs.current,Ie(Fs)}function Mi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dx(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(Wm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mc();break;case 3:so(),Ie(Vt),Ie(wt),eg();break;case 5:Zm(r);break;case 4:so();break;case 13:Ie(be);break;case 19:Ie(be);break;case 10:Qm(r.type._context);break;case 22:case 23:hg()}n=n.return}if(et=t,qe=t=ti(t.current,null),st=Ht=e,Qe=0,nl=null,lg=mh=Ki=0,Ot=Ca=null,Pi!==null){for(e=0;e<Pi.length;e++)if(n=Pi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pi=null}return t}function jT(t,e){do{var n=qe;try{if(Km(),Vu.current=Sc,Ic){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ic=!1}if(Gi=0,Je=Ke=xe=null,ka=!1,Za=0,ag.current=null,n===null||n.return===null){Qe=1,nl=e,qe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=st,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=z_(o);if(g!==null){g.flags&=-257,B_(g,o,a,s,e),g.mode&1&&$_(s,c,e),e=g,u=c;var E=e.updateQueue;if(E===null){var C=new Set;C.add(u),e.updateQueue=C}else E.add(u);break e}else{if(!(e&1)){$_(s,c,e),dg();break e}u=Error($(426))}}else if(ke&&a.mode&1){var b=z_(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),B_(b,o,a,s,e),Hm(oo(u,a));break e}}s=u=oo(u,a),Qe!==4&&(Qe=2),Ca===null?Ca=[s]:Ca.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=TT(s,u,e);D_(s,I);break e;case 1:a=u;var w=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Zr===null||!Zr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=IT(s,a,e);D_(s,P);break e}}s=s.return}while(s!==null)}zT(n)}catch(V){e=V,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function UT(){var t=Ac.current;return Ac.current=Sc,t===null?Sc:t}function dg(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),et===null||!(Ki&268435455)&&!(mh&268435455)||Mr(et,st)}function Cc(t,e){var n=le;le|=2;var r=UT();(et!==t||st!==e)&&(Jn=null,Mi(t,e));do try{Vx();break}catch(i){jT(t,i)}while(!0);if(Km(),le=n,Ac.current=r,qe!==null)throw Error($(261));return et=null,st=0,Qe}function Vx(){for(;qe!==null;)$T(qe)}function Fx(){for(;qe!==null&&!ub();)$T(qe)}function $T(t){var e=qT(t.alternate,t,Ht);t.memoizedProps=t.pendingProps,e===null?zT(t):qe=e,ag.current=null}function zT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Px(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,qe=null;return}}else if(n=xx(n,e,Ht),n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Qe===0&&(Qe=5)}function ki(t,e,n){var r=pe,i=cn.transition;try{cn.transition=null,pe=1,jx(t,e,n,r)}finally{cn.transition=i,pe=r}return null}function jx(t,e,n,r){do Qs();while(qr!==null);if(le&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_b(t,s),t===et&&(qe=et=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yu||(yu=!0,WT(uc,function(){return Qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=cn.transition,cn.transition=null;var o=pe;pe=1;var a=le;le|=4,ag.current=null,Ox(t,n),MT(n,t),sx(Qf),hc=!!Kf,Qf=Kf=null,t.current=n,Dx(n),cb(),le=a,pe=o,cn.transition=s}else t.current=n;if(yu&&(yu=!1,qr=t,Rc=i),s=t.pendingLanes,s===0&&(Zr=null),fb(n.stateNode),jt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kc)throw kc=!1,t=mp,mp=null,t;return Rc&1&&t.tag!==0&&Qs(),s=t.pendingLanes,s&1?t===gp?ba++:(ba=0,gp=t):ba=0,gi(),null}function Qs(){if(qr!==null){var t=EE(Rc),e=cn.transition,n=pe;try{if(cn.transition=null,pe=16>t?16:t,qr===null)var r=!1;else{if(t=qr,qr=null,Rc=0,le&6)throw Error($(331));var i=le;for(le|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(B=c;B!==null;){var d=B;switch(d.tag){case 0:case 11:case 15:Ra(8,d,s)}var f=d.child;if(f!==null)f.return=d,B=f;else for(;B!==null;){d=B;var m=d.sibling,g=d.return;if(OT(d),d===c){B=null;break}if(m!==null){m.return=g,B=m;break}B=g}}}var E=s.alternate;if(E!==null){var C=E.child;if(C!==null){E.child=null;do{var b=C.sibling;C.sibling=null,C=b}while(C!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ra(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,B=I;break e}B=s.return}}var w=t.current;for(B=w;B!==null;){o=B;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,B=T;else e:for(o=w;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ph(9,a)}}catch(V){Le(a,a.return,V)}if(a===o){B=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,B=P;break e}B=a.return}}if(le=i,gi(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(oh,t)}catch{}r=!0}return r}finally{pe=n,cn.transition=e}}return!1}function n0(t,e,n){e=oo(n,e),e=TT(t,e,1),t=Jr(t,e,1),e=Ct(),t!==null&&(_l(t,1,e),jt(t,e))}function Le(t,e,n){if(t.tag===3)n0(t,t,n);else for(;e!==null;){if(e.tag===3){n0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zr===null||!Zr.has(r))){t=oo(n,t),t=IT(e,t,1),e=Jr(e,t,1),t=Ct(),e!==null&&(_l(e,1,t),jt(e,t));break}}e=e.return}}function Ux(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ct(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(st&n)===n&&(Qe===4||Qe===3&&(st&130023424)===st&&500>Ue()-ug?Mi(t,0):lg|=n),jt(t,e)}function BT(t,e){e===0&&(t.mode&1?(e=au,au<<=1,!(au&130023424)&&(au=4194304)):e=1);var n=Ct();t=dr(t,e),t!==null&&(_l(t,e,n),jt(t,n))}function $x(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),BT(t,n)}function zx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),BT(t,n)}var qT;qT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Lt=!1,bx(t,e,n);Lt=!!(t.flags&131072)}else Lt=!1,ke&&e.flags&1048576&&GE(e,vc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ju(t,e),t=e.pendingProps;var i=no(e,wt.current);Ks(e,n),i=ng(null,e,r,t,i,n);var s=rg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(s=!0,gc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xm(e),i.updater=dh,e.stateNode=i,i._reactInternals=e,ip(e,r,t,n),e=ap(null,e,r,!0,s,n)):(e.tag=0,ke&&s&&qm(e),Rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ju(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qx(r),t=wn(r,t),i){case 0:e=op(null,e,r,t,n);break e;case 1:e=H_(null,e,r,t,n);break e;case 11:e=q_(null,e,r,t,n);break e;case 14:e=W_(null,e,r,wn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),op(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),H_(t,e,r,i,n);case 3:e:{if(RT(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,XE(t,e),Ec(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=oo(Error($(423)),e),e=G_(t,e,r,n,i);break e}else if(r!==i){i=oo(Error($(424)),e),e=G_(t,e,r,n,i);break e}else for(Gt=Xr(e.stateNode.containerInfo.firstChild),Yt=e,ke=!0,Tn=null,n=tT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),r===i){e=fr(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return nT(e),t===null&&tp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Yf(r,i)?o=null:s!==null&&Yf(r,s)&&(e.flags|=32),kT(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&tp(e),null;case 13:return CT(t,e,n);case 4:return Jm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=io(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),q_(t,e,r,i,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(_c,r._currentValue),r._currentValue=o,s!==null)if(Cn(s.value,o)){if(s.children===i.children&&!Vt.current){e=fr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=ar(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),np(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),np(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ks(e,n),i=hn(i),r=r(i),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,i=wn(r,e.pendingProps),i=wn(r.type,i),W_(t,e,r,i,n);case 15:return ST(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),ju(t,e),e.tag=1,Ft(r)?(t=!0,gc(e)):t=!1,Ks(e,n),ZE(e,r,i),ip(e,r,i,n),ap(null,e,r,!0,t,n);case 19:return bT(t,e,n);case 22:return AT(t,e,n)}throw Error($(156,e.tag))};function WT(t,e){return yE(t,e)}function Bx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,e,n,r){return new Bx(t,e,n,r)}function fg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qx(t){if(typeof t=="function")return fg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nm)return 11;if(t===Om)return 14}return 2}function ti(t,e){var n=t.alternate;return n===null?(n=un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")fg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Cs:return Vi(n.children,i,s,e);case Pm:o=8,i|=8;break;case Cf:return t=un(12,n,e,i|2),t.elementType=Cf,t.lanes=s,t;case bf:return t=un(13,n,e,i),t.elementType=bf,t.lanes=s,t;case xf:return t=un(19,n,e,i),t.elementType=xf,t.lanes=s,t;case eE:return gh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J1:o=10;break e;case Z1:o=9;break e;case Nm:o=11;break e;case Om:o=14;break e;case Nr:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=un(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vi(t,e,n,r){return t=un(7,t,r,e),t.lanes=n,t}function gh(t,e,n,r){return t=un(22,t,r,e),t.elementType=eE,t.lanes=n,t.stateNode={isHidden:!1},t}function Wd(t,e,n){return t=un(6,t,null,e),t.lanes=n,t}function Hd(t,e,n){return e=un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Wx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kd(0),this.expirationTimes=kd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pg(t,e,n,r,i,s,o,a,u){return t=new Wx(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xm(s),t}function Hx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function HT(t){if(!t)return ai;t=t._reactInternals;e:{if(as(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(Ft(n))return WE(t,n,e)}return e}function GT(t,e,n,r,i,s,o,a,u){return t=pg(n,r,!0,t,i,s,o,a,u),t.context=HT(null),n=t.current,r=Ct(),i=ei(n),s=ar(r,i),s.callback=e??null,Jr(n,s,i),t.current.lanes=i,_l(t,i,r),jt(t,r),t}function yh(t,e,n,r){var i=e.current,s=Ct(),o=ei(i);return n=HT(n),e.context===null?e.context=n:e.pendingContext=n,e=ar(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jr(i,e,o),t!==null&&(An(t,i,o,s),Mu(t,i,o)),o}function bc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function r0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mg(t,e){r0(t,e),(t=t.alternate)&&r0(t,e)}function Gx(){return null}var KT=typeof reportError=="function"?reportError:function(t){console.error(t)};function gg(t){this._internalRoot=t}vh.prototype.render=gg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));yh(t,e,null,null)};vh.prototype.unmount=gg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qi(function(){yh(null,t,null,null)}),e[hr]=null}};function vh(t){this._internalRoot=t}vh.prototype.unstable_scheduleHydration=function(t){if(t){var e=SE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Lr.length&&e!==0&&e<Lr[n].priority;n++);Lr.splice(n,0,t),n===0&&kE(t)}};function yg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function i0(){}function Kx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=bc(o);s.call(c)}}var o=GT(e,r,t,0,null,!1,!1,"",i0);return t._reactRootContainer=o,t[hr]=o.current,Ka(t.nodeType===8?t.parentNode:t),Qi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=bc(u);a.call(c)}}var u=pg(t,0,!1,null,null,!1,!1,"",i0);return t._reactRootContainer=u,t[hr]=u.current,Ka(t.nodeType===8?t.parentNode:t),Qi(function(){yh(e,u,n,r)}),u}function wh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=bc(o);a.call(u)}}yh(e,o,t,i)}else o=Kx(n,e,t,i,r);return bc(o)}TE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ca(e.pendingLanes);n!==0&&(Mm(e,n|1),jt(e,Ue()),!(le&6)&&(ao=Ue()+500,gi()))}break;case 13:Qi(function(){var r=dr(t,1);if(r!==null){var i=Ct();An(r,t,1,i)}}),mg(t,1)}};Vm=function(t){if(t.tag===13){var e=dr(t,134217728);if(e!==null){var n=Ct();An(e,t,134217728,n)}mg(t,134217728)}};IE=function(t){if(t.tag===13){var e=ei(t),n=dr(t,e);if(n!==null){var r=Ct();An(n,t,e,r)}mg(t,e)}};SE=function(){return pe};AE=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Uf=function(t,e,n){switch(e){case"input":if(Of(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ch(r);if(!i)throw Error($(90));nE(r),Of(r,i)}}}break;case"textarea":iE(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};hE=cg;dE=Qi;var Qx={usingClientEntryPoint:!1,Events:[El,Ns,ch,uE,cE,cg]},ia={findFiberByHostInstance:xi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Yx={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mE(t),t===null?null:t.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||Gx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{oh=vu.inject(Yx),Un=vu}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qx;tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yg(e))throw Error($(200));return Hx(t,e,null,n)};tn.createRoot=function(t,e){if(!yg(t))throw Error($(299));var n=!1,r="",i=KT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pg(t,1,!1,null,null,n,!1,r,i),t[hr]=e.current,Ka(t.nodeType===8?t.parentNode:t),new gg(e)};tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=mE(e),t=t===null?null:t.stateNode,t};tn.flushSync=function(t){return Qi(t)};tn.hydrate=function(t,e,n){if(!_h(e))throw Error($(200));return wh(null,t,e,!0,n)};tn.hydrateRoot=function(t,e,n){if(!yg(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=KT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=GT(e,null,t,1,n??null,i,!1,s,o),t[hr]=e.current,Ka(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new vh(e)};tn.render=function(t,e,n){if(!_h(e))throw Error($(200));return wh(null,t,e,!1,n)};tn.unmountComponentAtNode=function(t){if(!_h(t))throw Error($(40));return t._reactRootContainer?(Qi(function(){wh(null,null,t,!1,function(){t._reactRootContainer=null,t[hr]=null})}),!0):!1};tn.unstable_batchedUpdates=cg;tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_h(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return wh(t,e,n,!1,r)};tn.version="18.2.0-next-9e3b772b8-20220608";function QT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(QT)}catch(t){console.error(t)}}QT(),G1.exports=tn;var YT=G1.exports;const js=ih(YT);var s0=YT;kf.createRoot=s0.createRoot,kf.hydrateRoot=s0.hydrateRoot;var XT={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(XT);var Xx=XT.exports;const $e=ih(Xx),Jx=["xxl","xl","lg","md","sm","xs"],Zx="xs",vg=D.createContext({prefixes:{},breakpoints:Jx,minBreakpoint:Zx});function Tt(t,e){const{prefixes:n}=D.useContext(vg);return t||n[e]||e}function JT(){const{breakpoints:t}=D.useContext(vg);return t}function ZT(){const{minBreakpoint:t}=D.useContext(vg);return t}const _g=D.forwardRef(({bsPrefix:t,fluid:e=!1,as:n="div",className:r,...i},s)=>{const o=Tt(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return A.jsx(n,{ref:s,...i,className:$e(r,e?`${o}${a}`:o)})});_g.displayName="Container";var o0={exports:{}},_p={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){function i(o,a,u,c,d,f){var m=c||"<<anonymous>>",g=f||u;if(a[u]==null)return o?new Error("Required "+d+" `"+g+"` was not specified "+("in `"+m+"`.")):null;for(var E=arguments.length,C=Array(E>6?E-6:0),b=6;b<E;b++)C[b-6]=arguments[b];return r.apply(void 0,[a,u,m,d,g].concat(C))}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}t.exports=e.default})(_p,_p.exports);var eP=_p.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=eP,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];function c(){for(var d=arguments.length,f=Array(d),m=0;m<d;m++)f[m]=arguments[m];var g=null;return a.forEach(function(E){if(g==null){var C=E.apply(void 0,f);C!=null&&(g=C)}}),g}return(0,r.default)(c)}t.exports=e.default})(o0,o0.exports);function wp(){return wp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wp.apply(null,arguments)}function eI(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function a0(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function tP(t){var e=nP(t,"string");return typeof e=="symbol"?e:String(e)}function nP(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function rP(t,e,n){var r=D.useRef(t!==void 0),i=D.useState(e),s=i[0],o=i[1],a=t!==void 0,u=r.current;return r.current=a,!a&&u&&s!==e&&o(e),[a?t:s,D.useCallback(function(c){for(var d=arguments.length,f=new Array(d>1?d-1:0),m=1;m<d;m++)f[m-1]=arguments[m];n&&n.apply(void 0,[c].concat(f)),o(c)},[n])]}function tI(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[a0(r)],a=s[r],u=eI(s,[a0(r),r].map(tP)),c=e[r],d=rP(a,o,t[c]),f=d[0],m=d[1];return wp({},u,(i={},i[r]=f,i[c]=m,i))},t)}function Ep(t,e){return Ep=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Ep(t,e)}function iP(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Ep(t,e)}var sP=Function.prototype.bind.call(Function.prototype.call,[].slice);function Ri(t,e){return sP(t.querySelectorAll(e))}function oP(){const[,t]=D.useReducer(e=>!e,!1);return t}const l0=t=>!t||typeof t=="function"?t:e=>{t.current=e};function aP(t,e){const n=l0(t),r=l0(e);return i=>{n&&n(i),r&&r(i)}}function Il(t,e){return D.useMemo(()=>aP(t,e),[t,e])}const wg=D.createContext(null);wg.displayName="NavContext";const xc=D.createContext(null),Eg=(t,e=null)=>t!=null?String(t):e||null,nI=D.createContext(null),lP="data-rr-ui-",uP="rrUi";function Eh(t){return`${lP}${t}`}function cP(t){return`${uP}${t}`}function hP(t){const e=D.useRef(t);return D.useEffect(()=>{e.current=t},[t]),e}function ln(t){const e=hP(t);return D.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const dP=["as","disabled"];function fP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function pP(t){return!t||t.trim()==="#"}function rI({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:u}){t||(n!=null||r!=null||i!=null?t="a":t="button");const c={tagName:t};if(t==="button")return[{type:u||"button",disabled:e},c];const d=m=>{if((e||t==="a"&&pP(n))&&m.preventDefault(),e){m.stopPropagation();return}o==null||o(m)},f=m=>{m.key===" "&&(m.preventDefault(),d(m))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:d,onKeyDown:f},c]}const iI=D.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=fP(t,dP);const[s,{tagName:o}]=rI(Object.assign({tagName:n,disabled:r},i));return A.jsx(o,Object.assign({},i,s,{ref:e}))});iI.displayName="Button";const mP=["as","active","eventKey"];function gP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function sI({key:t,onClick:e,active:n,id:r,role:i,disabled:s}){const o=D.useContext(xc),a=D.useContext(wg),u=D.useContext(nI);let c=n;const d={role:i};if(a){!i&&a.role==="tablist"&&(d.role="tab");const f=a.getControllerId(t??null),m=a.getControlledId(t??null);d[Eh("event-key")]=t,d.id=f||r,c=n==null&&t!=null?a.activeKey===t:n,(c||!(u!=null&&u.unmountOnExit)&&!(u!=null&&u.mountOnEnter))&&(d["aria-controls"]=m)}return d.role==="tab"&&(d["aria-selected"]=c,c||(d.tabIndex=-1),s&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=ln(f=>{s||(e==null||e(f),t!=null&&o&&!f.isPropagationStopped()&&o(t,f))}),[d,{isActive:c}]}const oI=D.forwardRef((t,e)=>{let{as:n=iI,active:r,eventKey:i}=t,s=gP(t,mP);const[o,a]=sI(Object.assign({key:Eg(i,s.href),active:r},s));return o[Eh("active")]=a.isActive,A.jsx(n,Object.assign({},s,o,{ref:e}))});oI.displayName="NavItem";const yP=["as","onSelect","activeKey","role","onKeyDown"];function vP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const u0=()=>{},c0=Eh("event-key"),aI=D.forwardRef((t,e)=>{let{as:n="div",onSelect:r,activeKey:i,role:s,onKeyDown:o}=t,a=vP(t,yP);const u=oP(),c=D.useRef(!1),d=D.useContext(xc),f=D.useContext(nI);let m,g;f&&(s=s||"tablist",i=f.activeKey,m=f.getControlledId,g=f.getControllerId);const E=D.useRef(null),C=T=>{const P=E.current;if(!P)return null;const V=Ri(P,`[${c0}]:not([aria-disabled=true])`),L=P.querySelector("[aria-selected=true]");if(!L||L!==document.activeElement)return null;const _=V.indexOf(L);if(_===-1)return null;let v=_+T;return v>=V.length&&(v=0),v<0&&(v=V.length-1),V[v]},b=(T,P)=>{T!=null&&(r==null||r(T,P),d==null||d(T,P))},I=T=>{if(o==null||o(T),!f)return;let P;switch(T.key){case"ArrowLeft":case"ArrowUp":P=C(-1);break;case"ArrowRight":case"ArrowDown":P=C(1);break;default:return}P&&(T.preventDefault(),b(P.dataset[cP("EventKey")]||null,T),c.current=!0,u())};D.useEffect(()=>{if(E.current&&c.current){const T=E.current.querySelector(`[${c0}][aria-selected=true]`);T==null||T.focus()}c.current=!1});const w=Il(e,E);return A.jsx(xc.Provider,{value:b,children:A.jsx(wg.Provider,{value:{role:s,activeKey:Eg(i),getControlledId:m||u0,getControllerId:g||u0},children:A.jsx(n,Object.assign({},a,{onKeyDown:I,ref:w,role:s}))})})});aI.displayName="Nav";const _P=Object.assign(aI,{Item:oI}),ls=D.createContext(null);ls.displayName="NavbarContext";const lI=D.createContext(null);lI.displayName="CardHeaderContext";const uI=D.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=Tt(e,"nav-item"),A.jsx(n,{ref:i,className:$e(t,e),...r})));uI.displayName="NavItem";function wP(){const t=D.useRef(!0),e=D.useRef(()=>t.current);return D.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function EP(t){const e=D.useRef(null);return D.useEffect(()=>{e.current=t}),e.current}const TP=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",IP=typeof document<"u",Tp=IP||TP?D.useLayoutEffect:D.useEffect,SP=["onKeyDown"];function AP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kP(t){return!t||t.trim()==="#"}const cI=D.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=AP(t,SP);const[i]=rI(Object.assign({tagName:"a"},r)),s=ln(o=>{i.onKeyDown(o),n==null||n(o)});return kP(r.href)||r.role==="button"?A.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):A.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});cI.displayName="Anchor";const hI=D.forwardRef(({bsPrefix:t,className:e,as:n=cI,active:r,eventKey:i,disabled:s=!1,...o},a)=>{t=Tt(t,"nav-link");const[u,c]=sI({key:Eg(i,o.href),active:r,disabled:s,...o});return A.jsx(n,{...o,...u,ref:a,disabled:s,className:$e(e,t,s&&"disabled",c.isActive&&"active")})});hI.displayName="NavLink";const dI=D.forwardRef((t,e)=>{const{as:n="div",bsPrefix:r,variant:i,fill:s=!1,justify:o=!1,navbar:a,navbarScroll:u,className:c,activeKey:d,...f}=tI(t,{activeKey:"onSelect"}),m=Tt(r,"nav");let g,E,C=!1;const b=D.useContext(ls),I=D.useContext(lI);return b?(g=b.bsPrefix,C=a??!0):I&&({cardHeaderBsPrefix:E}=I),A.jsx(_P,{as:n,ref:e,activeKey:d,className:$e(c,{[m]:!C,[`${g}-nav`]:C,[`${g}-nav-scroll`]:C&&u,[`${E}-${i}`]:!!E,[`${m}-${i}`]:!!i,[`${m}-fill`]:s,[`${m}-justified`]:o}),...f})});dI.displayName="Nav";const Nn=Object.assign(dI,{Item:uI,Link:hI}),fI=D.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=Tt(t,"navbar-brand");const s=n||(r.href?"a":"span");return A.jsx(s,{...r,ref:i,className:$e(e,t)})});fI.displayName="NavbarBrand";function Tg(t){return t&&t.ownerDocument||document}function RP(t){var e=Tg(t);return e&&e.defaultView||window}function CP(t,e){return RP(t).getComputedStyle(t,e)}var bP=/([A-Z])/g;function xP(t){return t.replace(bP,"-$1").toLowerCase()}var PP=/^ms-/;function _u(t){return xP(t).replace(PP,"-ms-")}var NP=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function OP(t){return!!(t&&NP.test(t))}function lr(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(_u(e))||CP(t).getPropertyValue(_u(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(_u(i)):OP(i)?r+=i+"("+s+") ":n+=_u(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var pI={exports:{}},DP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",LP=DP,MP=LP;function mI(){}function gI(){}gI.resetWarningCache=mI;var VP=function(){function t(r,i,s,o,a,u){if(u!==MP){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:gI,resetWarningCache:mI};return n.PropTypes=n,n};pI.exports=VP();var FP=pI.exports;const Y=ih(FP),h0={disabled:!1},yI=Re.createContext(null);var jP=function(e){return e.scrollTop},da="unmounted",Dr="exited",In="entering",tr="entered",rl="exiting",Tr=function(t){iP(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,u;return s.appearStatus=null,r.in?a?(u=Dr,s.appearStatus=In):u=tr:r.unmountOnExit||r.mountOnEnter?u=da:u=Dr,s.state={status:u},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===da?{status:Dr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==In&&o!==tr&&(s=In):(o===In||o===tr)&&(s=rl)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===In){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:js.findDOMNode(this);o&&jP(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Dr&&this.setState({status:da})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,u=this.props.nodeRef?[a]:[js.findDOMNode(this),a],c=u[0],d=u[1],f=this.getTimeouts(),m=a?f.appear:f.enter;if(!i&&!o||h0.disabled){this.safeSetState({status:tr},function(){s.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:In},function(){s.props.onEntering(c,d),s.onTransitionEnd(m,function(){s.safeSetState({status:tr},function(){s.props.onEntered(c,d)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:js.findDOMNode(this);if(!s||h0.disabled){this.safeSetState({status:Dr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:rl},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Dr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:js.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=u[0],d=u[1];this.props.addEndListener(c,d)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===da)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=eI(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Re.createElement(yI.Provider,{value:null},typeof o=="function"?o(i,a):Re.cloneElement(Re.Children.only(o),a))},e}(Re.Component);Tr.contextType=yI;Tr.propTypes={};function _s(){}Tr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:_s,onEntering:_s,onEntered:_s,onExit:_s,onExiting:_s,onExited:_s};Tr.UNMOUNTED=da;Tr.EXITED=Dr;Tr.ENTERING=In;Tr.ENTERED=tr;Tr.EXITING=rl;const Th=!!(typeof window<"u"&&window.document&&window.document.createElement);var Ip=!1,Sp=!1;try{var Gd={get passive(){return Ip=!0},get once(){return Sp=Ip=!0}};Th&&(window.addEventListener("test",Gd,Gd),window.removeEventListener("test",Gd,!0))}catch{}function UP(t,e,n,r){if(r&&typeof r!="boolean"&&!Sp){var i=r.once,s=r.capture,o=n;!Sp&&i&&(o=n.__once||function a(u){this.removeEventListener(e,a,s),n.call(this,u)},n.__once=o),t.addEventListener(e,o,Ip?r:s)}t.addEventListener(e,n,r)}function $P(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Pc(t,e,n,r){return UP(t,e,n,r),function(){$P(t,e,n,r)}}function zP(t,e,n,r){if(r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function BP(t){var e=lr(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function qP(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||zP(t,"transitionend",!0)},e+n),s=Pc(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function WP(t,e,n,r){n==null&&(n=BP(t)||0);var i=qP(t,n,r),s=Pc(t,"transitionend",e);return function(){i(),s()}}function d0(t,e){const n=lr(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function Ig(t,e){const n=d0(t,"transitionDuration"),r=d0(t,"transitionDelay"),i=WP(t,s=>{s.target===t&&(i(),e(s))},n+r)}function sa(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}function vI(t){t.offsetHeight}function HP(t){return t&&"setState"in t?js.findDOMNode(t):t??null}const Sg=Re.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:u,...c},d)=>{const f=D.useRef(null),m=Il(f,u),g=L=>{m(HP(L))},E=L=>_=>{L&&f.current&&L(f.current,_)},C=D.useCallback(E(t),[t]),b=D.useCallback(E(e),[e]),I=D.useCallback(E(n),[n]),w=D.useCallback(E(r),[r]),T=D.useCallback(E(i),[i]),P=D.useCallback(E(s),[s]),V=D.useCallback(E(o),[o]);return A.jsx(Tr,{ref:d,...c,onEnter:C,onEntered:I,onEntering:b,onExit:w,onExited:P,onExiting:T,addEndListener:V,nodeRef:f,children:typeof a=="function"?(L,_)=>a(L,{..._,ref:g}):Re.cloneElement(a,{ref:g})})}),GP={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function KP(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=GP[t];return r+parseInt(lr(e,i[0]),10)+parseInt(lr(e,i[1]),10)}const QP={[Dr]:"collapse",[rl]:"collapsing",[In]:"collapsing",[tr]:"collapse show"},YP=Re.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",in:u=!1,timeout:c=300,mountOnEnter:d=!1,unmountOnExit:f=!1,appear:m=!1,getDimensionValue:g=KP,...E},C)=>{const b=typeof a=="function"?a():a,I=D.useMemo(()=>sa(L=>{L.style[b]="0"},t),[b,t]),w=D.useMemo(()=>sa(L=>{const _=`scroll${b[0].toUpperCase()}${b.slice(1)}`;L.style[b]=`${L[_]}px`},e),[b,e]),T=D.useMemo(()=>sa(L=>{L.style[b]=null},n),[b,n]),P=D.useMemo(()=>sa(L=>{L.style[b]=`${g(b,L)}px`,vI(L)},r),[r,g,b]),V=D.useMemo(()=>sa(L=>{L.style[b]=null},i),[b,i]);return A.jsx(Sg,{ref:C,addEndListener:Ig,...E,"aria-expanded":E.role?u:null,onEnter:I,onEntering:w,onEntered:T,onExit:P,onExiting:V,childRef:o.ref,in:u,timeout:c,mountOnEnter:d,unmountOnExit:f,appear:m,children:(L,_)=>Re.cloneElement(o,{..._,className:$e(s,o.props.className,QP[L],b==="width"&&"collapse-horizontal")})})}),_I=D.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=Tt(e,"navbar-collapse");const i=D.useContext(ls);return A.jsx(YP,{in:!!(i&&i.expanded),...n,children:A.jsx("div",{ref:r,className:e,children:t})})});_I.displayName="NavbarCollapse";const wI=D.forwardRef(({bsPrefix:t,className:e,children:n,label:r="Toggle navigation",as:i="button",onClick:s,...o},a)=>{t=Tt(t,"navbar-toggler");const{onToggle:u,expanded:c}=D.useContext(ls)||{},d=ln(f=>{s&&s(f),u&&u()});return i==="button"&&(o.type="button"),A.jsx(i,{...o,ref:a,onClick:d,"aria-label":r,className:$e(e,t,!c&&"collapsed"),children:n||A.jsx("span",{className:`${t}-icon`})})});wI.displayName="NavbarToggle";const Ap=new WeakMap,f0=(t,e)=>{if(!t||!e)return;const n=Ap.get(e)||new Map;Ap.set(e,n);let r=n.get(t);return r||(r=e.matchMedia(t),r.refCount=0,n.set(r.media,r)),r};function XP(t,e=typeof window>"u"?void 0:window){const n=f0(t,e),[r,i]=D.useState(()=>n?n.matches:!1);return Tp(()=>{let s=f0(t,e);if(!s)return i(!1);let o=Ap.get(e);const a=()=>{i(s.matches)};return s.refCount++,s.addListener(a),a(),()=>{s.removeListener(a),s.refCount--,s.refCount<=0&&(o==null||o.delete(s.media)),s=void 0}},[t]),r}function JP(t){const e=Object.keys(t);function n(a,u){return a===u?u:a?`${a} and ${u}`:u}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){const u=r(a);let c=t[u];return typeof c=="number"?c=`${c-.2}px`:c=`calc(${c} - 0.2px)`,`(max-width: ${c})`}function s(a){let u=t[a];return typeof u=="number"&&(u=`${u}px`),`(min-width: ${u})`}function o(a,u,c){let d;typeof a=="object"?(d=a,c=u,u=!0):(u=u||!0,d={[a]:u});let f=D.useMemo(()=>Object.entries(d).reduce((m,[g,E])=>((E==="up"||E===!0)&&(m=n(m,s(g))),(E==="down"||E===!0)&&(m=n(m,i(g))),m),""),[JSON.stringify(d)]);return XP(f,c)}return o}const ZP=JP({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function Kd(t){t===void 0&&(t=Tg());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function p0(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function eN(t){const e=D.useRef(t);return e.current=t,e}function tN(t){const e=eN(t);D.useEffect(()=>()=>e.current(),[])}function nN(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const m0=Eh("modal-open");class Ag{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return nN(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(lr(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(m0,""),lr(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(m0),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const EI=D.createContext(Th?window:void 0);EI.Provider;function kg(){return D.useContext(EI)}const Qd=(t,e)=>Th?t==null?(e||Tg()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function rN(t,e){const n=kg(),[r,i]=D.useState(()=>Qd(t,n==null?void 0:n.document));if(!r){const s=Qd(t);s&&i(s)}return D.useEffect(()=>{},[e,r]),D.useEffect(()=>{const s=Qd(t);s!==r&&i(s)},[t,r]),r}function iN({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=D.useRef(null),o=D.useRef(e),a=ln(n);D.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const u=Il(s,t.ref),c=D.cloneElement(t,{ref:u});return e?c:i||!o.current&&r?null:c}function sN(t){return t.code==="Escape"||t.keyCode===27}function oN(){const t=D.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const aN=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function lN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function uN(t){let{onEnter:e,onEntering:n,onEntered:r,onExit:i,onExiting:s,onExited:o,addEndListener:a,children:u}=t,c=lN(t,aN);const{major:d}=oN(),f=d>=19?u.props.ref:u.ref,m=D.useRef(null),g=Il(m,typeof u=="function"?null:f),E=L=>_=>{L&&m.current&&L(m.current,_)},C=D.useCallback(E(e),[e]),b=D.useCallback(E(n),[n]),I=D.useCallback(E(r),[r]),w=D.useCallback(E(i),[i]),T=D.useCallback(E(s),[s]),P=D.useCallback(E(o),[o]),V=D.useCallback(E(a),[a]);return Object.assign({},c,{nodeRef:m},e&&{onEnter:C},n&&{onEntering:b},r&&{onEntered:I},i&&{onExit:w},s&&{onExiting:T},o&&{onExited:P},a&&{addEndListener:V},{children:typeof u=="function"?(L,_)=>u(L,Object.assign({},_,{ref:g})):D.cloneElement(u,{ref:g})})}const cN=["component"];function hN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const dN=D.forwardRef((t,e)=>{let{component:n}=t,r=hN(t,cN);const i=uN(r);return A.jsx(n,Object.assign({ref:e},i))});function fN({in:t,onTransition:e}){const n=D.useRef(null),r=D.useRef(!0),i=ln(e);return Tp(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),Tp(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function pN({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=D.useState(!e);e&&s&&o(!1);const a=fN({in:!!e,onTransition:c=>{const d=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(o(!0),n==null||n(c.element)))};Promise.resolve(i(c)).then(d,f=>{throw c.in||o(!0),f})}}),u=Il(a,t.ref);return s&&!e?null:D.cloneElement(t,{ref:u})}function g0(t,e,n){return t?A.jsx(dN,Object.assign({},n,{component:t})):e?A.jsx(pN,Object.assign({},n,{transition:e})):A.jsx(iN,Object.assign({},n))}const mN=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function gN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let Yd;function yN(t){return Yd||(Yd=new Ag({ownerDocument:t==null?void 0:t.document})),Yd}function vN(t){const e=kg(),n=t||yN(e),r=D.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:D.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:D.useCallback(i=>{r.current.backdrop=i},[])})}const TI=D.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:u=!0,onBackdropClick:c,onEscapeKeyDown:d,transition:f,runTransition:m,backdropTransition:g,runBackdropTransition:E,autoFocus:C=!0,enforceFocus:b=!0,restoreFocus:I=!0,restoreFocusOptions:w,renderDialog:T,renderBackdrop:P=ve=>A.jsx("div",Object.assign({},ve)),manager:V,container:L,onShow:_,onHide:v=()=>{},onExit:S,onExited:R,onExiting:x,onEnter:N,onEntering:k,onEntered:He}=t,Pt=gN(t,mN);const ut=kg(),Ve=rN(L),U=vN(V),G=wP(),Q=EP(n),[se,te]=D.useState(!n),he=D.useRef(null);D.useImperativeHandle(e,()=>U,[U]),Th&&!Q&&n&&(he.current=Kd(ut==null?void 0:ut.document)),n&&se&&te(!1);const Ge=ln(()=>{if(U.add(),sn.current=Pc(document,"keydown",Qn),Bt.current=Pc(document,"focus",()=>setTimeout(Fe),!0),_&&_(),C){var ve,Mo;const Vo=Kd((ve=(Mo=U.dialog)==null?void 0:Mo.ownerDocument)!=null?ve:ut==null?void 0:ut.document);U.dialog&&Vo&&!p0(U.dialog,Vo)&&(he.current=Vo,U.dialog.focus())}}),fe=ln(()=>{if(U.remove(),sn.current==null||sn.current(),Bt.current==null||Bt.current(),I){var ve;(ve=he.current)==null||ve.focus==null||ve.focus(w),he.current=null}});D.useEffect(()=>{!n||!Ve||Ge()},[n,Ve,Ge]),D.useEffect(()=>{se&&fe()},[se,fe]),tN(()=>{fe()});const Fe=ln(()=>{if(!b||!G()||!U.isTopModal())return;const ve=Kd(ut==null?void 0:ut.document);U.dialog&&ve&&!p0(U.dialog,ve)&&U.dialog.focus()}),ct=ln(ve=>{ve.target===ve.currentTarget&&(c==null||c(ve),a===!0&&v())}),Qn=ln(ve=>{u&&sN(ve)&&U.isTopModal()&&(d==null||d(ve),ve.defaultPrevented||v())}),Bt=D.useRef(),sn=D.useRef(),gn=(...ve)=>{te(!0),R==null||R(...ve)};if(!Ve)return null;const It=Object.assign({role:r,ref:U.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},Pt,{style:s,className:i,tabIndex:-1});let wi=T?T(It):A.jsx("div",Object.assign({},It,{children:D.cloneElement(o,{role:"document"})}));wi=g0(f,m,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:S,onExiting:x,onExited:gn,onEnter:N,onEntering:k,onEntered:He,children:wi});let Sr=null;return a&&(Sr=P({ref:U.setBackdropRef,onClick:ct}),Sr=g0(g,E,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Sr})),A.jsx(A.Fragment,{children:js.createPortal(A.jsxs(A.Fragment,{children:[Sr,wi]}),Ve)})});TI.displayName="Modal";const _N=Object.assign(TI,{Manager:Ag}),wN={[In]:"show",[tr]:"show"},II=D.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=D.useCallback((u,c)=>{vI(u),r==null||r(u,c)},[r]);return A.jsx(Sg,{ref:s,addEndListener:Ig,...o,onEnter:a,childRef:e.ref,children:(u,c)=>D.cloneElement(e,{...c,className:$e("fade",t,e.props.className,wN[u],n[u])})})});II.displayName="Fade";const SI=D.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=Tt(e,"offcanvas-body"),A.jsx(n,{ref:i,className:$e(t,e),...r})));SI.displayName="OffcanvasBody";const EN={[In]:"show",[tr]:"show"},AI=D.forwardRef(({bsPrefix:t,className:e,children:n,in:r=!1,mountOnEnter:i=!1,unmountOnExit:s=!1,appear:o=!1,...a},u)=>(t=Tt(t,"offcanvas"),A.jsx(Sg,{ref:u,addEndListener:Ig,in:r,mountOnEnter:i,unmountOnExit:s,appear:o,...a,childRef:n.ref,children:(c,d)=>D.cloneElement(n,{...d,className:$e(e,n.props.className,(c===In||c===rl)&&`${t}-toggling`,EN[c])})})));AI.displayName="OffcanvasToggling";const kI=D.createContext({onHide(){}}),TN={"aria-label":Y.string,onClick:Y.func,variant:Y.oneOf(["white"])},Rg=D.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>A.jsx("button",{ref:i,type:"button",className:$e("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));Rg.displayName="CloseButton";Rg.propTypes=TN;const IN=D.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const a=D.useContext(kI),u=ln(()=>{a==null||a.onHide(),r==null||r()});return A.jsxs("div",{ref:o,...s,children:[i,n&&A.jsx(Rg,{"aria-label":t,variant:e,onClick:u})]})}),RI=D.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=Tt(t,"offcanvas-header"),A.jsx(IN,{ref:s,...i,className:$e(e,t),closeLabel:n,closeButton:r})));RI.displayName="OffcanvasHeader";const SN=t=>D.forwardRef((e,n)=>A.jsx("div",{...e,ref:n,className:$e(e.className,t)})),AN=SN("h5"),CI=D.forwardRef(({className:t,bsPrefix:e,as:n=AN,...r},i)=>(e=Tt(e,"offcanvas-title"),A.jsx(n,{ref:i,className:$e(t,e),...r})));CI.displayName="OffcanvasTitle";function kN(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function RN(t,e){t.classList?t.classList.add(e):kN(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function y0(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function CN(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=y0(t.className,e):t.setAttribute("class",y0(t.className&&t.className.baseVal||"",e))}const ws={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class bI extends Ag{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,lr(n,{[e]:`${parseFloat(lr(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],lr(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(RN(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Ri(n,ws.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),Ri(n,ws.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),Ri(n,ws.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();CN(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Ri(n,ws.FIXED_CONTENT).forEach(s=>this.restore(r,s)),Ri(n,ws.STICKY_CONTENT).forEach(s=>this.restore(i,s)),Ri(n,ws.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let Xd;function bN(t){return Xd||(Xd=new bI(t)),Xd}function xN(t){return A.jsx(AI,{...t})}function PN(t){return A.jsx(II,{...t})}const xI=D.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i="start",responsive:s,show:o=!1,backdrop:a=!0,keyboard:u=!0,scroll:c=!1,onEscapeKeyDown:d,onShow:f,onHide:m,container:g,autoFocus:E=!0,enforceFocus:C=!0,restoreFocus:b=!0,restoreFocusOptions:I,onEntered:w,onExit:T,onExiting:P,onEnter:V,onEntering:L,onExited:_,backdropClassName:v,manager:S,renderStaticNode:R=!1,...x},N)=>{const k=D.useRef();t=Tt(t,"offcanvas");const{onToggle:He}=D.useContext(ls)||{},[Pt,ut]=D.useState(!1),Ve=ZP(s||"xs","up");D.useEffect(()=>{ut(s?o&&!Ve:o)},[o,s,Ve]);const U=ln(()=>{He==null||He(),m==null||m()}),G=D.useMemo(()=>({onHide:U}),[U]);function Q(){return S||(c?(k.current||(k.current=new bI({handleContainerOverflow:!1})),k.current):bN())}const se=(fe,...Fe)=>{fe&&(fe.style.visibility="visible"),V==null||V(fe,...Fe)},te=(fe,...Fe)=>{fe&&(fe.style.visibility=""),_==null||_(...Fe)},he=D.useCallback(fe=>A.jsx("div",{...fe,className:$e(`${t}-backdrop`,v)}),[v,t]),Ge=fe=>A.jsx("div",{...fe,...x,className:$e(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return A.jsxs(A.Fragment,{children:[!Pt&&(s||R)&&Ge({}),A.jsx(kI.Provider,{value:G,children:A.jsx(_N,{show:Pt,ref:N,backdrop:a,container:g,keyboard:u,autoFocus:E,enforceFocus:C&&!c,restoreFocus:b,restoreFocusOptions:I,onEscapeKeyDown:d,onShow:f,onHide:U,onEnter:se,onEntering:L,onEntered:w,onExit:T,onExiting:P,onExited:te,manager:Q(),transition:xN,backdropTransition:PN,renderBackdrop:he,renderDialog:Ge})})]})});xI.displayName="Offcanvas";const NN=Object.assign(xI,{Body:SI,Header:RI,Title:CI}),PI=D.forwardRef((t,e)=>{const n=D.useContext(ls);return A.jsx(NN,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});PI.displayName="NavbarOffcanvas";const NI=D.forwardRef(({className:t,bsPrefix:e,as:n="span",...r},i)=>(e=Tt(e,"navbar-text"),A.jsx(n,{ref:i,className:$e(t,e),...r})));NI.displayName="NavbarText";const OI=D.forwardRef((t,e)=>{const{bsPrefix:n,expand:r=!0,variant:i="light",bg:s,fixed:o,sticky:a,className:u,as:c="nav",expanded:d,onToggle:f,onSelect:m,collapseOnSelect:g=!1,...E}=tI(t,{expanded:"onToggle"}),C=Tt(n,"navbar"),b=D.useCallback((...T)=>{m==null||m(...T),g&&d&&(f==null||f(!1))},[m,g,d,f]);E.role===void 0&&c!=="nav"&&(E.role="navigation");let I=`${C}-expand`;typeof r=="string"&&(I=`${I}-${r}`);const w=D.useMemo(()=>({onToggle:()=>f==null?void 0:f(!d),bsPrefix:C,expanded:!!d,expand:r}),[C,d,r,f]);return A.jsx(ls.Provider,{value:w,children:A.jsx(xc.Provider,{value:b,children:A.jsx(c,{ref:e,...E,className:$e(u,C,r&&I,i&&`${C}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});OI.displayName="Navbar";const wu=Object.assign(OI,{Brand:fI,Collapse:_I,Offcanvas:PI,Text:NI,Toggle:wI});var v0={};/**
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
 */const DI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ON=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},LI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,g=c&63;u||(g=64,o||(m=64)),r.push(n[d],n[f],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(DI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ON(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new DN;const m=s<<2|a>>4;if(r.push(m),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const E=c<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LN=function(t){const e=DI(t);return LI.encodeByteArray(e,!0)},Nc=function(t){return LN(t).replace(/\./g,"")},MI=function(t){try{return LI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function MN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VN=()=>MN().__FIREBASE_DEFAULTS__,FN=()=>{if(typeof process>"u"||typeof v0>"u")return;const t=v0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&MI(t[1]);return e&&JSON.parse(e)},Ih=()=>{try{return VN()||FN()||jN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},VI=t=>{var e,n;return(n=(e=Ih())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},FI=t=>{const e=VI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jI=()=>{var t;return(t=Ih())===null||t===void 0?void 0:t.config},UI=t=>{var e;return(e=Ih())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class UN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $I(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Nc(JSON.stringify(n)),Nc(JSON.stringify(o)),""].join(".")}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $N(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function zN(){var t;const e=(t=Ih())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qN(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WN(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function HN(){return!zN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BI(){try{return typeof indexedDB=="object"}catch{return!1}}function qI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function GN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const KN="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KN,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new mn(i,a,r)}}function QN(t,e){return t.replace(YN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YN=/\{\$([^}]+)}/g;function XN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function il(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_0(s)&&_0(o)){if(!il(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _0(t){return t!==null&&typeof t=="object"}/**
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
 */function Sl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function JN(t,e){const n=new ZN(t,e);return n.subscribe.bind(n)}class ZN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");e2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Jd),i.error===void 0&&(i.error=Jd),i.complete===void 0&&(i.complete=Jd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jd(){}/**
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
 */const t2=1e3,n2=2,r2=4*60*60*1e3,i2=.5;function w0(t,e=t2,n=n2){const r=e*Math.pow(n,t),i=Math.round(i2*r*(Math.random()-.5)*2);return Math.min(r2,r+i)}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ci="[DEFAULT]";/**
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
 */class s2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a2(e))try{this.getOrInitializeService({instanceIdentifier:Ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ci){return this.instances.has(e)}getOptions(e=Ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:o2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ci){return this.component?this.component.multipleInstances?e:Ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o2(t){return t===Ci?void 0:t}function a2(t){return t.instantiationMode==="EAGER"}/**
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
 */class l2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new s2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const u2={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},c2=oe.INFO,h2={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},d2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=h2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sh{constructor(e){this.name=e,this._logLevel=c2,this._logHandler=d2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?u2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const f2=(t,e)=>e.some(n=>t instanceof n);let E0,T0;function p2(){return E0||(E0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m2(){return T0||(T0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WI=new WeakMap,kp=new WeakMap,HI=new WeakMap,Zd=new WeakMap,Cg=new WeakMap;function g2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ni(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&WI.set(n,t)}).catch(()=>{}),Cg.set(e,t),e}function y2(t){if(kp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});kp.set(t,e)}let Rp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||HI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ni(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function v2(t){Rp=t(Rp)}function _2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ef(this),e,...n);return HI.set(r,e.sort?e.sort():[e]),ni(r)}:m2().includes(t)?function(...e){return t.apply(ef(this),e),ni(WI.get(this))}:function(...e){return ni(t.apply(ef(this),e))}}function w2(t){return typeof t=="function"?_2(t):(t instanceof IDBTransaction&&y2(t),f2(t,p2())?new Proxy(t,Rp):t)}function ni(t){if(t instanceof IDBRequest)return g2(t);if(Zd.has(t))return Zd.get(t);const e=w2(t);return e!==t&&(Zd.set(t,e),Cg.set(e,t)),e}const ef=t=>Cg.get(t);function GI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ni(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ni(o.result),u.oldVersion,u.newVersion,ni(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const E2=["get","getKey","getAll","getAllKeys","count"],T2=["put","add","delete","clear"],tf=new Map;function I0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tf.get(e))return tf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=T2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||E2.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return tf.set(e,s),s}v2(t=>({...t,get:(e,n,r)=>I0(e,n)||t.get(e,n,r),has:(e,n)=>!!I0(e,n)||t.has(e,n)}));/**
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
 */class I2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(S2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function S2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cp="@firebase/app",S0="0.10.13";/**
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
 */const pr=new Sh("@firebase/app"),A2="@firebase/app-compat",k2="@firebase/analytics-compat",R2="@firebase/analytics",C2="@firebase/app-check-compat",b2="@firebase/app-check",x2="@firebase/auth",P2="@firebase/auth-compat",N2="@firebase/database",O2="@firebase/data-connect",D2="@firebase/database-compat",L2="@firebase/functions",M2="@firebase/functions-compat",V2="@firebase/installations",F2="@firebase/installations-compat",j2="@firebase/messaging",U2="@firebase/messaging-compat",$2="@firebase/performance",z2="@firebase/performance-compat",B2="@firebase/remote-config",q2="@firebase/remote-config-compat",W2="@firebase/storage",H2="@firebase/storage-compat",G2="@firebase/firestore",K2="@firebase/vertexai-preview",Q2="@firebase/firestore-compat",Y2="firebase",X2="10.14.1";/**
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
 */const bp="[DEFAULT]",J2={[Cp]:"fire-core",[A2]:"fire-core-compat",[R2]:"fire-analytics",[k2]:"fire-analytics-compat",[b2]:"fire-app-check",[C2]:"fire-app-check-compat",[x2]:"fire-auth",[P2]:"fire-auth-compat",[N2]:"fire-rtdb",[O2]:"fire-data-connect",[D2]:"fire-rtdb-compat",[L2]:"fire-fn",[M2]:"fire-fn-compat",[V2]:"fire-iid",[F2]:"fire-iid-compat",[j2]:"fire-fcm",[U2]:"fire-fcm-compat",[$2]:"fire-perf",[z2]:"fire-perf-compat",[B2]:"fire-rc",[q2]:"fire-rc-compat",[W2]:"fire-gcs",[H2]:"fire-gcs-compat",[G2]:"fire-fst",[Q2]:"fire-fst-compat",[K2]:"fire-vertex","fire-js":"fire-js",[Y2]:"fire-js-all"};/**
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
 */const Oc=new Map,Z2=new Map,xp=new Map;function A0(t,e){try{t.container.addComponent(e)}catch(n){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bn(t){const e=t.name;if(xp.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;xp.set(e,t);for(const n of Oc.values())A0(n,t);for(const n of Z2.values())A0(n,t);return!0}function yi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Wr(t){return t.settings!==void 0}/**
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
 */const eO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ri=new us("app","Firebase",eO);/**
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
 */class tO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ri.create("app-deleted",{appName:this._name})}}/**
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
 */const cs=X2;function KI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ri.create("bad-app-name",{appName:String(i)});if(n||(n=jI()),!n)throw ri.create("no-options");const s=Oc.get(i);if(s){if(il(n,s.options)&&il(r,s.config))return s;throw ri.create("duplicate-app",{appName:i})}const o=new l2(i);for(const u of xp.values())o.addComponent(u);const a=new tO(n,r,o);return Oc.set(i,a),a}function Ah(t=bp){const e=Oc.get(t);if(!e&&t===bp&&jI())return KI();if(!e)throw ri.create("no-app",{appName:t});return e}function Ut(t,e,n){var r;let i=(r=J2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(a.join(" "));return}bn(new fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const nO="firebase-heartbeat-database",rO=1,sl="firebase-heartbeat-store";let nf=null;function QI(){return nf||(nf=GI(nO,rO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(sl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ri.create("idb-open",{originalErrorMessage:t.message})})),nf}async function iO(t){try{const n=(await QI()).transaction(sl),r=await n.objectStore(sl).get(YI(t));return await n.done,r}catch(e){if(e instanceof mn)pr.warn(e.message);else{const n=ri.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(n.message)}}}async function k0(t,e){try{const r=(await QI()).transaction(sl,"readwrite");await r.objectStore(sl).put(e,YI(t)),await r.done}catch(n){if(n instanceof mn)pr.warn(n.message);else{const r=ri.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pr.warn(r.message)}}}function YI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sO=1024,oO=30*24*60*60*1e3;class aO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=R0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=oO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=R0(),{heartbeatsToSend:r,unsentEntries:i}=lO(this._heartbeatsCache.heartbeats),s=Nc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return pr.warn(n),""}}}function R0(){return new Date().toISOString().substring(0,10)}function lO(t,e=sO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),C0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),C0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BI()?qI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return k0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return k0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function C0(t){return Nc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function cO(t){bn(new fn("platform-logger",e=>new I2(e),"PRIVATE")),bn(new fn("heartbeat",e=>new aO(e),"PRIVATE")),Ut(Cp,S0,t),Ut(Cp,S0,"esm2017"),Ut("fire-js","")}cO("");var hO="firebase",dO="10.14.1";/**
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
 */Ut(hO,dO,"app");const XI="@firebase/installations",bg="0.6.9";/**
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
 */const JI=1e4,ZI=`w:${bg}`,eS="FIS_v2",fO="https://firebaseinstallations.googleapis.com/v1",pO=60*60*1e3,mO="installations",gO="Installations";/**
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
 */const yO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yi=new us(mO,gO,yO);function tS(t){return t instanceof mn&&t.code.includes("request-failed")}/**
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
 */function nS({projectId:t}){return`${fO}/projects/${t}/installations`}function rS(t){return{token:t.token,requestStatus:2,expiresIn:_O(t.expiresIn),creationTime:Date.now()}}async function iS(t,e){const r=(await e.json()).error;return Yi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function sS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vO(t,{refreshToken:e}){const n=sS(t);return n.append("Authorization",wO(e)),n}async function oS(t){const e=await t();return e.status>=500&&e.status<600?t():e}function _O(t){return Number(t.replace("s","000"))}function wO(t){return`${eS} ${t}`}/**
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
 */async function EO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=nS(t),i=sS(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:eS,appId:t.appId,sdkVersion:ZI},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await oS(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:rS(c.authToken)}}else throw await iS("Create Installation",u)}/**
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
 */function aS(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function TO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const IO=/^[cdef][\w-]{21}$/,Pp="";function SO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=AO(t);return IO.test(n)?n:Pp}catch{return Pp}}function AO(t){return TO(t).substr(0,22)}/**
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
 */function kh(t){return`${t.appName}!${t.appId}`}/**
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
 */const lS=new Map;function uS(t,e){const n=kh(t);cS(n,e),kO(n,e)}function cS(t,e){const n=lS.get(t);if(n)for(const r of n)r(e)}function kO(t,e){const n=RO();n&&n.postMessage({key:t,fid:e}),CO()}let Oi=null;function RO(){return!Oi&&"BroadcastChannel"in self&&(Oi=new BroadcastChannel("[Firebase] FID Change"),Oi.onmessage=t=>{cS(t.data.key,t.data.fid)}),Oi}function CO(){lS.size===0&&Oi&&(Oi.close(),Oi=null)}/**
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
 */const bO="firebase-installations-database",xO=1,Xi="firebase-installations-store";let rf=null;function xg(){return rf||(rf=GI(bO,xO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xi)}}})),rf}async function Dc(t,e){const n=kh(t),i=(await xg()).transaction(Xi,"readwrite"),s=i.objectStore(Xi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&uS(t,e.fid),e}async function hS(t){const e=kh(t),r=(await xg()).transaction(Xi,"readwrite");await r.objectStore(Xi).delete(e),await r.done}async function Rh(t,e){const n=kh(t),i=(await xg()).transaction(Xi,"readwrite"),s=i.objectStore(Xi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&uS(t,a.fid),a}/**
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
 */async function Pg(t){let e;const n=await Rh(t.appConfig,r=>{const i=PO(r),s=NO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Pp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function PO(t){const e=t||{fid:SO(),registrationStatus:0};return dS(e)}function NO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Yi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=OO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:DO(t)}:{installationEntry:e}}async function OO(t,e){try{const n=await EO(t,e);return Dc(t.appConfig,n)}catch(n){throw tS(n)&&n.customData.serverCode===409?await hS(t.appConfig):await Dc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function DO(t){let e=await b0(t.appConfig);for(;e.registrationStatus===1;)await aS(100),e=await b0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Pg(t);return r||n}return e}function b0(t){return Rh(t,e=>{if(!e)throw Yi.create("installation-not-found");return dS(e)})}function dS(t){return LO(t)?{fid:t.fid,registrationStatus:0}:t}function LO(t){return t.registrationStatus===1&&t.registrationTime+JI<Date.now()}/**
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
 */async function MO({appConfig:t,heartbeatServiceProvider:e},n){const r=VO(t,n),i=vO(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:ZI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await oS(()=>fetch(r,a));if(u.ok){const c=await u.json();return rS(c)}else throw await iS("Generate Auth Token",u)}function VO(t,{fid:e}){return`${nS(t)}/${e}/authTokens:generate`}/**
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
 */async function Ng(t,e=!1){let n;const r=await Rh(t.appConfig,s=>{if(!fS(s))throw Yi.create("not-registered");const o=s.authToken;if(!e&&UO(o))return s;if(o.requestStatus===1)return n=FO(t,e),s;{if(!navigator.onLine)throw Yi.create("app-offline");const a=zO(s);return n=jO(t,a),a}});return n?await n:r.authToken}async function FO(t,e){let n=await x0(t.appConfig);for(;n.authToken.requestStatus===1;)await aS(100),n=await x0(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ng(t,e):r}function x0(t){return Rh(t,e=>{if(!fS(e))throw Yi.create("not-registered");const n=e.authToken;return BO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function jO(t,e){try{const n=await MO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Dc(t.appConfig,r),n}catch(n){if(tS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hS(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Dc(t.appConfig,r)}throw n}}function fS(t){return t!==void 0&&t.registrationStatus===2}function UO(t){return t.requestStatus===2&&!$O(t)}function $O(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pO}function zO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function BO(t){return t.requestStatus===1&&t.requestTime+JI<Date.now()}/**
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
 */async function qO(t){const e=t,{installationEntry:n,registrationPromise:r}=await Pg(e);return r?r.catch(console.error):Ng(e).catch(console.error),n.fid}/**
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
 */async function WO(t,e=!1){const n=t;return await HO(n),(await Ng(n,e)).token}async function HO(t){const{registrationPromise:e}=await Pg(t);e&&await e}/**
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
 */function GO(t){if(!t||!t.options)throw sf("App Configuration");if(!t.name)throw sf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw sf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function sf(t){return Yi.create("missing-app-config-values",{valueName:t})}/**
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
 */const pS="installations",KO="installations-internal",QO=t=>{const e=t.getProvider("app").getImmediate(),n=GO(e),r=yi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},YO=t=>{const e=t.getProvider("app").getImmediate(),n=yi(e,pS).getImmediate();return{getId:()=>qO(n),getToken:i=>WO(n,i)}};function XO(){bn(new fn(pS,QO,"PUBLIC")),bn(new fn(KO,YO,"PRIVATE"))}XO();Ut(XI,bg);Ut(XI,bg,"esm2017");/**
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
 */const Lc="analytics",JO="firebase_id",ZO="origin",eD=60*1e3,tD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Og="https://www.googletagmanager.com/gtag/js";/**
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
 */const $t=new Sh("@firebase/analytics");/**
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
 */const nD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xt=new us("analytics","Analytics",nD);/**
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
 */function rD(t){if(!t.startsWith(Og)){const e=Xt.create("invalid-gtag-resource",{gtagURL:t});return $t.warn(e.message),""}return t}function mS(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function iD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function sD(t,e){const n=iD("firebase-js-sdk-policy",{createScriptURL:rD}),r=document.createElement("script"),i=`${Og}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function oD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function aD(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await mS(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){$t.error(a)}t("config",i,s)}async function lD(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await mS(n);for(const u of o){const c=a.find(f=>f.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){$t.error(s)}}function uD(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await lD(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await aD(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){$t.error(a)}}return i}function cD(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=uD(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function hD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Og)&&n.src.includes(t))return n;return null}/**
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
 */const dD=30,fD=1e3;class pD{constructor(e={},n=fD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gS=new pD;function mD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function gD(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:mD(r)},s=tD.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw Xt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function yD(t,e=gS,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Xt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Xt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new wD;return setTimeout(async()=>{a.abort()},eD),yS({appId:r,apiKey:i,measurementId:s},o,a,e)}async function yS(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=gS){var s;const{appId:o,measurementId:a}=t;try{await vD(r,e)}catch(u){if(a)return $t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await gD(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!_D(c)){if(i.deleteThrottleMetadata(o),a)return $t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?w0(n,i.intervalMillis,dD):w0(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,f),$t.debug(`Calling attemptFetch again in ${d} millis`),yS(t,f,r,i)}}function vD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Xt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function _D(t){if(!(t instanceof mn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class wD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ED(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function TD(){if(BI())try{await qI()}catch(t){return $t.warn(Xt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return $t.warn(Xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ID(t,e,n,r,i,s,o){var a;const u=yD(t);u.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&$t.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>$t.error(g)),e.push(u);const c=TD().then(g=>{if(g)return r.getId()}),[d,f]=await Promise.all([u,c]);hD(s)||sD(s,d.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[ZO]="firebase",m.update=!0,f!=null&&(m[JO]=f),i("config",d.measurementId,m),d.measurementId}/**
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
 */class SD{constructor(e){this.app=e}_delete(){return delete xa[this.app.options.appId],Promise.resolve()}}let xa={},P0=[];const N0={};let of="dataLayer",AD="gtag",O0,vS,D0=!1;function kD(){const t=[];if(zI()&&t.push("This is a browser extension environment."),GN()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Xt.create("invalid-analytics-context",{errorInfo:e});$t.warn(n.message)}}function RD(t,e,n){kD();const r=t.options.appId;if(!r)throw Xt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)$t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xt.create("no-api-key");if(xa[r]!=null)throw Xt.create("already-exists",{id:r});if(!D0){oD(of);const{wrappedGtag:s,gtagCore:o}=cD(xa,P0,N0,of,AD);vS=s,O0=o,D0=!0}return xa[r]=ID(t,P0,N0,e,O0,of,n),new SD(t)}function CD(t=Ah()){t=Me(t);const e=yi(t,Lc);return e.isInitialized()?e.getImmediate():bD(t)}function bD(t,e={}){const n=yi(t,Lc);if(n.isInitialized()){const i=n.getImmediate();if(il(e,n.getOptions()))return i;throw Xt.create("already-initialized")}return n.initialize({options:e})}function xD(t,e,n,r){t=Me(t),ED(vS,xa[t.app.options.appId],e,n,r).catch(i=>$t.error(i))}const L0="@firebase/analytics",M0="0.10.8";function PD(){bn(new fn(Lc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return RD(r,i,n)},"PUBLIC")),bn(new fn("analytics-internal",t,"PRIVATE")),Ut(L0,M0),Ut(L0,M0,"esm2017");function t(e){try{const n=e.getProvider(Lc).getImmediate();return{logEvent:(r,i,s)=>xD(n,r,i,s)}}catch(n){throw Xt.create("interop-component-reg-failed",{reason:n})}}}PD();var V0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fi,_S;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,v){function S(){}S.prototype=v.prototype,_.D=v.prototype,_.prototype=new S,_.prototype.constructor=_,_.C=function(R,x,N){for(var k=Array(arguments.length-2),He=2;He<arguments.length;He++)k[He-2]=arguments[He];return v.prototype[x].apply(R,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,v,S){S||(S=0);var R=Array(16);if(typeof v=="string")for(var x=0;16>x;++x)R[x]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(x=0;16>x;++x)R[x]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=_.g[0],S=_.g[1],x=_.g[2];var N=_.g[3],k=v+(N^S&(x^N))+R[0]+3614090360&4294967295;v=S+(k<<7&4294967295|k>>>25),k=N+(x^v&(S^x))+R[1]+3905402710&4294967295,N=v+(k<<12&4294967295|k>>>20),k=x+(S^N&(v^S))+R[2]+606105819&4294967295,x=N+(k<<17&4294967295|k>>>15),k=S+(v^x&(N^v))+R[3]+3250441966&4294967295,S=x+(k<<22&4294967295|k>>>10),k=v+(N^S&(x^N))+R[4]+4118548399&4294967295,v=S+(k<<7&4294967295|k>>>25),k=N+(x^v&(S^x))+R[5]+1200080426&4294967295,N=v+(k<<12&4294967295|k>>>20),k=x+(S^N&(v^S))+R[6]+2821735955&4294967295,x=N+(k<<17&4294967295|k>>>15),k=S+(v^x&(N^v))+R[7]+4249261313&4294967295,S=x+(k<<22&4294967295|k>>>10),k=v+(N^S&(x^N))+R[8]+1770035416&4294967295,v=S+(k<<7&4294967295|k>>>25),k=N+(x^v&(S^x))+R[9]+2336552879&4294967295,N=v+(k<<12&4294967295|k>>>20),k=x+(S^N&(v^S))+R[10]+4294925233&4294967295,x=N+(k<<17&4294967295|k>>>15),k=S+(v^x&(N^v))+R[11]+2304563134&4294967295,S=x+(k<<22&4294967295|k>>>10),k=v+(N^S&(x^N))+R[12]+1804603682&4294967295,v=S+(k<<7&4294967295|k>>>25),k=N+(x^v&(S^x))+R[13]+4254626195&4294967295,N=v+(k<<12&4294967295|k>>>20),k=x+(S^N&(v^S))+R[14]+2792965006&4294967295,x=N+(k<<17&4294967295|k>>>15),k=S+(v^x&(N^v))+R[15]+1236535329&4294967295,S=x+(k<<22&4294967295|k>>>10),k=v+(x^N&(S^x))+R[1]+4129170786&4294967295,v=S+(k<<5&4294967295|k>>>27),k=N+(S^x&(v^S))+R[6]+3225465664&4294967295,N=v+(k<<9&4294967295|k>>>23),k=x+(v^S&(N^v))+R[11]+643717713&4294967295,x=N+(k<<14&4294967295|k>>>18),k=S+(N^v&(x^N))+R[0]+3921069994&4294967295,S=x+(k<<20&4294967295|k>>>12),k=v+(x^N&(S^x))+R[5]+3593408605&4294967295,v=S+(k<<5&4294967295|k>>>27),k=N+(S^x&(v^S))+R[10]+38016083&4294967295,N=v+(k<<9&4294967295|k>>>23),k=x+(v^S&(N^v))+R[15]+3634488961&4294967295,x=N+(k<<14&4294967295|k>>>18),k=S+(N^v&(x^N))+R[4]+3889429448&4294967295,S=x+(k<<20&4294967295|k>>>12),k=v+(x^N&(S^x))+R[9]+568446438&4294967295,v=S+(k<<5&4294967295|k>>>27),k=N+(S^x&(v^S))+R[14]+3275163606&4294967295,N=v+(k<<9&4294967295|k>>>23),k=x+(v^S&(N^v))+R[3]+4107603335&4294967295,x=N+(k<<14&4294967295|k>>>18),k=S+(N^v&(x^N))+R[8]+1163531501&4294967295,S=x+(k<<20&4294967295|k>>>12),k=v+(x^N&(S^x))+R[13]+2850285829&4294967295,v=S+(k<<5&4294967295|k>>>27),k=N+(S^x&(v^S))+R[2]+4243563512&4294967295,N=v+(k<<9&4294967295|k>>>23),k=x+(v^S&(N^v))+R[7]+1735328473&4294967295,x=N+(k<<14&4294967295|k>>>18),k=S+(N^v&(x^N))+R[12]+2368359562&4294967295,S=x+(k<<20&4294967295|k>>>12),k=v+(S^x^N)+R[5]+4294588738&4294967295,v=S+(k<<4&4294967295|k>>>28),k=N+(v^S^x)+R[8]+2272392833&4294967295,N=v+(k<<11&4294967295|k>>>21),k=x+(N^v^S)+R[11]+1839030562&4294967295,x=N+(k<<16&4294967295|k>>>16),k=S+(x^N^v)+R[14]+4259657740&4294967295,S=x+(k<<23&4294967295|k>>>9),k=v+(S^x^N)+R[1]+2763975236&4294967295,v=S+(k<<4&4294967295|k>>>28),k=N+(v^S^x)+R[4]+1272893353&4294967295,N=v+(k<<11&4294967295|k>>>21),k=x+(N^v^S)+R[7]+4139469664&4294967295,x=N+(k<<16&4294967295|k>>>16),k=S+(x^N^v)+R[10]+3200236656&4294967295,S=x+(k<<23&4294967295|k>>>9),k=v+(S^x^N)+R[13]+681279174&4294967295,v=S+(k<<4&4294967295|k>>>28),k=N+(v^S^x)+R[0]+3936430074&4294967295,N=v+(k<<11&4294967295|k>>>21),k=x+(N^v^S)+R[3]+3572445317&4294967295,x=N+(k<<16&4294967295|k>>>16),k=S+(x^N^v)+R[6]+76029189&4294967295,S=x+(k<<23&4294967295|k>>>9),k=v+(S^x^N)+R[9]+3654602809&4294967295,v=S+(k<<4&4294967295|k>>>28),k=N+(v^S^x)+R[12]+3873151461&4294967295,N=v+(k<<11&4294967295|k>>>21),k=x+(N^v^S)+R[15]+530742520&4294967295,x=N+(k<<16&4294967295|k>>>16),k=S+(x^N^v)+R[2]+3299628645&4294967295,S=x+(k<<23&4294967295|k>>>9),k=v+(x^(S|~N))+R[0]+4096336452&4294967295,v=S+(k<<6&4294967295|k>>>26),k=N+(S^(v|~x))+R[7]+1126891415&4294967295,N=v+(k<<10&4294967295|k>>>22),k=x+(v^(N|~S))+R[14]+2878612391&4294967295,x=N+(k<<15&4294967295|k>>>17),k=S+(N^(x|~v))+R[5]+4237533241&4294967295,S=x+(k<<21&4294967295|k>>>11),k=v+(x^(S|~N))+R[12]+1700485571&4294967295,v=S+(k<<6&4294967295|k>>>26),k=N+(S^(v|~x))+R[3]+2399980690&4294967295,N=v+(k<<10&4294967295|k>>>22),k=x+(v^(N|~S))+R[10]+4293915773&4294967295,x=N+(k<<15&4294967295|k>>>17),k=S+(N^(x|~v))+R[1]+2240044497&4294967295,S=x+(k<<21&4294967295|k>>>11),k=v+(x^(S|~N))+R[8]+1873313359&4294967295,v=S+(k<<6&4294967295|k>>>26),k=N+(S^(v|~x))+R[15]+4264355552&4294967295,N=v+(k<<10&4294967295|k>>>22),k=x+(v^(N|~S))+R[6]+2734768916&4294967295,x=N+(k<<15&4294967295|k>>>17),k=S+(N^(x|~v))+R[13]+1309151649&4294967295,S=x+(k<<21&4294967295|k>>>11),k=v+(x^(S|~N))+R[4]+4149444226&4294967295,v=S+(k<<6&4294967295|k>>>26),k=N+(S^(v|~x))+R[11]+3174756917&4294967295,N=v+(k<<10&4294967295|k>>>22),k=x+(v^(N|~S))+R[2]+718787259&4294967295,x=N+(k<<15&4294967295|k>>>17),k=S+(N^(x|~v))+R[9]+3951481745&4294967295,_.g[0]=_.g[0]+v&4294967295,_.g[1]=_.g[1]+(x+(k<<21&4294967295|k>>>11))&4294967295,_.g[2]=_.g[2]+x&4294967295,_.g[3]=_.g[3]+N&4294967295}r.prototype.u=function(_,v){v===void 0&&(v=_.length);for(var S=v-this.blockSize,R=this.B,x=this.h,N=0;N<v;){if(x==0)for(;N<=S;)i(this,_,N),N+=this.blockSize;if(typeof _=="string"){for(;N<v;)if(R[x++]=_.charCodeAt(N++),x==this.blockSize){i(this,R),x=0;break}}else for(;N<v;)if(R[x++]=_[N++],x==this.blockSize){i(this,R),x=0;break}}this.h=x,this.o+=v},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var v=1;v<_.length-8;++v)_[v]=0;var S=8*this.o;for(v=_.length-8;v<_.length;++v)_[v]=S&255,S/=256;for(this.u(_),_=Array(16),v=S=0;4>v;++v)for(var R=0;32>R;R+=8)_[S++]=this.g[v]>>>R&255;return _};function s(_,v){var S=a;return Object.prototype.hasOwnProperty.call(S,_)?S[_]:S[_]=v(_)}function o(_,v){this.h=v;for(var S=[],R=!0,x=_.length-1;0<=x;x--){var N=_[x]|0;R&&N==v||(S[x]=N,R=!1)}this.g=S}var a={};function u(_){return-128<=_&&128>_?s(_,function(v){return new o([v|0],0>v?-1:0)}):new o([_|0],0>_?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return f;if(0>_)return b(c(-_));for(var v=[],S=1,R=0;_>=S;R++)v[R]=_/S|0,S*=4294967296;return new o(v,0)}function d(_,v){if(_.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(_.charAt(0)=="-")return b(d(_.substring(1),v));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(v,8)),R=f,x=0;x<_.length;x+=8){var N=Math.min(8,_.length-x),k=parseInt(_.substring(x,x+N),v);8>N?(N=c(Math.pow(v,N)),R=R.j(N).add(c(k))):(R=R.j(S),R=R.add(c(k)))}return R}var f=u(0),m=u(1),g=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-b(this).m();for(var _=0,v=1,S=0;S<this.g.length;S++){var R=this.i(S);_+=(0<=R?R:4294967296+R)*v,v*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E(this))return"0";if(C(this))return"-"+b(this).toString(_);for(var v=c(Math.pow(_,6)),S=this,R="";;){var x=P(S,v).g;S=I(S,x.j(v));var N=((0<S.g.length?S.g[0]:S.h)>>>0).toString(_);if(S=x,E(S))return N+R;for(;6>N.length;)N="0"+N;R=N+R}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function E(_){if(_.h!=0)return!1;for(var v=0;v<_.g.length;v++)if(_.g[v]!=0)return!1;return!0}function C(_){return _.h==-1}t.l=function(_){return _=I(this,_),C(_)?-1:E(_)?0:1};function b(_){for(var v=_.g.length,S=[],R=0;R<v;R++)S[R]=~_.g[R];return new o(S,~_.h).add(m)}t.abs=function(){return C(this)?b(this):this},t.add=function(_){for(var v=Math.max(this.g.length,_.g.length),S=[],R=0,x=0;x<=v;x++){var N=R+(this.i(x)&65535)+(_.i(x)&65535),k=(N>>>16)+(this.i(x)>>>16)+(_.i(x)>>>16);R=k>>>16,N&=65535,k&=65535,S[x]=k<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function I(_,v){return _.add(b(v))}t.j=function(_){if(E(this)||E(_))return f;if(C(this))return C(_)?b(this).j(b(_)):b(b(this).j(_));if(C(_))return b(this.j(b(_)));if(0>this.l(g)&&0>_.l(g))return c(this.m()*_.m());for(var v=this.g.length+_.g.length,S=[],R=0;R<2*v;R++)S[R]=0;for(R=0;R<this.g.length;R++)for(var x=0;x<_.g.length;x++){var N=this.i(R)>>>16,k=this.i(R)&65535,He=_.i(x)>>>16,Pt=_.i(x)&65535;S[2*R+2*x]+=k*Pt,w(S,2*R+2*x),S[2*R+2*x+1]+=N*Pt,w(S,2*R+2*x+1),S[2*R+2*x+1]+=k*He,w(S,2*R+2*x+1),S[2*R+2*x+2]+=N*He,w(S,2*R+2*x+2)}for(R=0;R<v;R++)S[R]=S[2*R+1]<<16|S[2*R];for(R=v;R<2*v;R++)S[R]=0;return new o(S,0)};function w(_,v){for(;(_[v]&65535)!=_[v];)_[v+1]+=_[v]>>>16,_[v]&=65535,v++}function T(_,v){this.g=_,this.h=v}function P(_,v){if(E(v))throw Error("division by zero");if(E(_))return new T(f,f);if(C(_))return v=P(b(_),v),new T(b(v.g),b(v.h));if(C(v))return v=P(_,b(v)),new T(b(v.g),v.h);if(30<_.g.length){if(C(_)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var S=m,R=v;0>=R.l(_);)S=V(S),R=V(R);var x=L(S,1),N=L(R,1);for(R=L(R,2),S=L(S,2);!E(R);){var k=N.add(R);0>=k.l(_)&&(x=x.add(S),N=k),R=L(R,1),S=L(S,1)}return v=I(_,x.j(v)),new T(x,v)}for(x=f;0<=_.l(v);){for(S=Math.max(1,Math.floor(_.m()/v.m())),R=Math.ceil(Math.log(S)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),N=c(S),k=N.j(v);C(k)||0<k.l(_);)S-=R,N=c(S),k=N.j(v);E(N)&&(N=m),x=x.add(N),_=I(_,k)}return new T(x,_)}t.A=function(_){return P(this,_).h},t.and=function(_){for(var v=Math.max(this.g.length,_.g.length),S=[],R=0;R<v;R++)S[R]=this.i(R)&_.i(R);return new o(S,this.h&_.h)},t.or=function(_){for(var v=Math.max(this.g.length,_.g.length),S=[],R=0;R<v;R++)S[R]=this.i(R)|_.i(R);return new o(S,this.h|_.h)},t.xor=function(_){for(var v=Math.max(this.g.length,_.g.length),S=[],R=0;R<v;R++)S[R]=this.i(R)^_.i(R);return new o(S,this.h^_.h)};function V(_){for(var v=_.g.length+1,S=[],R=0;R<v;R++)S[R]=_.i(R)<<1|_.i(R-1)>>>31;return new o(S,_.h)}function L(_,v){var S=v>>5;v%=32;for(var R=_.g.length-S,x=[],N=0;N<R;N++)x[N]=0<v?_.i(N+S)>>>v|_.i(N+S+1)<<32-v:_.i(N+S);return new o(x,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_S=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Fi=o}).apply(typeof V0<"u"?V0:typeof self<"u"?self:typeof window<"u"?window:{});var Eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wS,fa,ES,Bu,Np,TS,IS,SS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eu=="object"&&Eu];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var O=l[y];if(!(O in p))break e;p=p[O]}l=l[l.length-1],y=p[l],h=h(y),h!=y&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,y=!1,O={next:function(){if(!y&&p<l.length){var M=p++;return{value:h(M,l[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,y),l.apply(h,O)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function g(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function E(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(y,O,M){for(var z=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)z[ge-2]=arguments[ge];return h.prototype[O].apply(y,z)}}function C(l){const h=l.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=l[y];return p}return[]}function b(l,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const O=l.length||0,M=y.length||0;l.length=O+M;for(let z=0;z<M;z++)l[O+z]=y[z]}else l.push(y)}}class I{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(l){return/^[\s\xa0]*$/.test(l)}function T(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function P(l){return P[" "](l),l}P[" "]=function(){};var V=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function L(l,h,p){for(const y in l)h.call(p,l[y],y,l)}function _(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function v(l){const h={};for(const p in l)h[p]=l[p];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,h){let p,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(p in y)l[p]=y[p];for(let M=0;M<S.length;M++)p=S[M],Object.prototype.hasOwnProperty.call(y,p)&&(l[p]=y[p])}}function x(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function k(){var l=G;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class He{constructor(){this.h=this.g=null}add(h,p){const y=Pt.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var Pt=new I(()=>new ut,l=>l.reset());class ut{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,U=!1,G=new He,Q=()=>{const l=a.Promise.resolve(void 0);Ve=()=>{l.then(se)}};var se=()=>{for(var l;l=k();){try{l.h.call(l.g)}catch(p){N(p)}var h=Pt;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}U=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Ge=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function fe(l,h){if(he.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(V){e:{try{P(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Fe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&fe.aa.h.call(this)}}E(fe,he);var Fe={2:"touch",3:"pen",4:"mouse"};fe.prototype.h=function(){fe.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),Qn=0;function Bt(l,h,p,y,O){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=O,this.key=++Qn,this.da=this.fa=!1}function sn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function gn(l){this.src=l,this.g={},this.h=0}gn.prototype.add=function(l,h,p,y,O){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var z=wi(l,h,y,O);return-1<z?(h=l[z],p||(h.fa=!1)):(h=new Bt(h,this.src,M,!!y,O),h.fa=p,l.push(h)),h};function It(l,h){var p=h.type;if(p in l.g){var y=l.g[p],O=Array.prototype.indexOf.call(y,h,void 0),M;(M=0<=O)&&Array.prototype.splice.call(y,O,1),M&&(sn(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function wi(l,h,p,y){for(var O=0;O<l.length;++O){var M=l[O];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==y)return O}return-1}var Sr="closure_lm_"+(1e6*Math.random()|0),ve={};function Mo(l,h,p,y,O){if(Array.isArray(h)){for(var M=0;M<h.length;M++)Mo(l,h[M],p,y,O);return null}return p=tv(p),l&&l[ct]?l.K(h,p,c(y)?!!y.capture:!!y,O):Vo(l,h,p,!1,y,O)}function Vo(l,h,p,y,O,M){if(!h)throw Error("Invalid event type");var z=c(O)?!!O.capture:!!O,ge=rd(l);if(ge||(l[Sr]=ge=new gn(l)),p=ge.add(h,p,y,z,M),p.proxy)return p;if(y=ZR(),p.proxy=y,y.src=l,y.listener=p,l.addEventListener)Ge||(O=z),O===void 0&&(O=!1),l.addEventListener(h.toString(),y,O);else if(l.attachEvent)l.attachEvent(ev(h.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ZR(){function l(p){return h.call(l.src,l.listener,p)}const h=eC;return l}function Zy(l,h,p,y,O){if(Array.isArray(h))for(var M=0;M<h.length;M++)Zy(l,h[M],p,y,O);else y=c(y)?!!y.capture:!!y,p=tv(p),l&&l[ct]?(l=l.i,h=String(h).toString(),h in l.g&&(M=l.g[h],p=wi(M,p,y,O),-1<p&&(sn(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete l.g[h],l.h--)))):l&&(l=rd(l))&&(h=l.g[h.toString()],l=-1,h&&(l=wi(h,p,y,O)),(p=-1<l?h[l]:null)&&nd(p))}function nd(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[ct])It(h.i,l);else{var p=l.type,y=l.proxy;h.removeEventListener?h.removeEventListener(p,y,l.capture):h.detachEvent?h.detachEvent(ev(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=rd(h))?(It(p,l),p.h==0&&(p.src=null,h[Sr]=null)):sn(l)}}}function ev(l){return l in ve?ve[l]:ve[l]="on"+l}function eC(l,h){if(l.da)l=!0;else{h=new fe(h,this);var p=l.listener,y=l.ha||l.src;l.fa&&nd(l),l=p.call(y,h)}return l}function rd(l){return l=l[Sr],l instanceof gn?l:null}var id="__closure_events_fn_"+(1e9*Math.random()>>>0);function tv(l){return typeof l=="function"?l:(l[id]||(l[id]=function(h){return l.handleEvent(h)}),l[id])}function ht(){te.call(this),this.i=new gn(this),this.M=this,this.F=null}E(ht,te),ht.prototype[ct]=!0,ht.prototype.removeEventListener=function(l,h,p,y){Zy(this,l,h,p,y)};function St(l,h){var p,y=l.F;if(y)for(p=[];y;y=y.F)p.push(y);if(l=l.M,y=h.type||h,typeof h=="string")h=new he(h,l);else if(h instanceof he)h.target=h.target||l;else{var O=h;h=new he(y,l),R(h,O)}if(O=!0,p)for(var M=p.length-1;0<=M;M--){var z=h.g=p[M];O=Ul(z,y,!0,h)&&O}if(z=h.g=l,O=Ul(z,y,!0,h)&&O,O=Ul(z,y,!1,h)&&O,p)for(M=0;M<p.length;M++)z=h.g=p[M],O=Ul(z,y,!1,h)&&O}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],y=0;y<p.length;y++)sn(p[y]);delete l.g[h],l.h--}}this.F=null},ht.prototype.K=function(l,h,p,y){return this.i.add(String(l),h,!1,p,y)},ht.prototype.L=function(l,h,p,y){return this.i.add(String(l),h,!0,p,y)};function Ul(l,h,p,y){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,M=0;M<h.length;++M){var z=h[M];if(z&&!z.da&&z.capture==p){var ge=z.listener,tt=z.ha||z.src;z.fa&&It(l.i,z),O=ge.call(tt,y)!==!1&&O}}return O&&!y.defaultPrevented}function nv(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function rv(l){l.g=nv(()=>{l.g=null,l.i&&(l.i=!1,rv(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class tC extends te{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:rv(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fo(l){te.call(this),this.h=l,this.g={}}E(Fo,te);var iv=[];function sv(l){L(l.g,function(h,p){this.g.hasOwnProperty(p)&&nd(h)},l),l.g={}}Fo.prototype.N=function(){Fo.aa.N.call(this),sv(this)},Fo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sd=a.JSON.stringify,nC=a.JSON.parse,rC=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function od(){}od.prototype.h=null;function ov(l){return l.h||(l.h=l.i())}function av(){}var jo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ad(){he.call(this,"d")}E(ad,he);function ld(){he.call(this,"c")}E(ld,he);var Ei={},lv=null;function $l(){return lv=lv||new ht}Ei.La="serverreachability";function uv(l){he.call(this,Ei.La,l)}E(uv,he);function Uo(l){const h=$l();St(h,new uv(h))}Ei.STAT_EVENT="statevent";function cv(l,h){he.call(this,Ei.STAT_EVENT,l),this.stat=h}E(cv,he);function At(l){const h=$l();St(h,new cv(h,l))}Ei.Ma="timingevent";function hv(l,h){he.call(this,Ei.Ma,l),this.size=h}E(hv,he);function $o(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function zo(){this.g=!0}zo.prototype.xa=function(){this.g=!1};function iC(l,h,p,y,O,M){l.info(function(){if(l.g)if(M)for(var z="",ge=M.split("&"),tt=0;tt<ge.length;tt++){var ue=ge[tt].split("=");if(1<ue.length){var dt=ue[0];ue=ue[1];var ft=dt.split("_");z=2<=ft.length&&ft[1]=="type"?z+(dt+"="+ue+"&"):z+(dt+"=redacted&")}}else z=null;else z=M;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+h+`
`+p+`
`+z})}function sC(l,h,p,y,O,M,z){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+h+`
`+p+`
`+M+" "+z})}function ps(l,h,p,y){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+aC(l,p)+(y?" "+y:"")})}function oC(l,h){l.info(function(){return"TIMEOUT: "+h})}zo.prototype.info=function(){};function aC(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var y=p[l];if(!(2>y.length)){var O=y[1];if(Array.isArray(O)&&!(1>O.length)){var M=O[0];if(M!="noop"&&M!="stop"&&M!="close")for(var z=1;z<O.length;z++)O[z]=""}}}}return sd(p)}catch{return h}}var zl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ud;function Bl(){}E(Bl,od),Bl.prototype.g=function(){return new XMLHttpRequest},Bl.prototype.i=function(){return{}},ud=new Bl;function Ar(l,h,p,y){this.j=l,this.i=h,this.l=p,this.R=y||1,this.U=new Fo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fv}function fv(){this.i=null,this.g="",this.h=!1}var pv={},cd={};function hd(l,h,p){l.L=1,l.v=Gl(Yn(h)),l.m=p,l.P=!0,mv(l,null)}function mv(l,h){l.F=Date.now(),ql(l),l.A=Yn(l.v);var p=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),bv(p.i,"t",y),l.C=0,p=l.j.J,l.h=new fv,l.g=Gv(l.j,p?h:null,!l.m),0<l.O&&(l.M=new tC(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,y=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(iv[0]=O.toString()),O=iv);for(var M=0;M<O.length;M++){var z=Mo(p,O[M],y||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Uo(),iC(l.i,l.u,l.A,l.l,l.R,l.m)}Ar.prototype.ca=function(l){l=l.target;const h=this.M;h&&Xn(l)==3?h.j():this.Y(l)},Ar.prototype.Y=function(l){try{if(l==this.g)e:{const ft=Xn(this.g);var h=this.g.Ba();const ys=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Mv(this.g)))){this.J||ft!=4||h==7||(h==8||0>=ys?Uo(3):Uo(2)),dd(this);var p=this.g.Z();this.X=p;t:if(gv(this)){var y=Mv(this.g);l="";var O=y.length,M=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ti(this),Bo(this);var z="";break t}this.h.i=new a.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,l+=this.h.i.decode(y[h],{stream:!(M&&h==O-1)});y.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,sC(this.i,this.u,this.A,this.l,this.R,ft,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ge,tt=this.g;if((ge=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ge)){var ue=ge;break t}}ue=null}if(p=ue)ps(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fd(this,p);else{this.o=!1,this.s=3,At(12),Ti(this),Bo(this);break e}}if(this.P){p=!0;let yn;for(;!this.J&&this.C<z.length;)if(yn=lC(this,z),yn==cd){ft==4&&(this.s=4,At(14),p=!1),ps(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==pv){this.s=4,At(15),ps(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else ps(this.i,this.l,yn,null),fd(this,yn);if(gv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||z.length!=0||this.h.h||(this.s=1,At(16),p=!1),this.o=this.o&&p,!p)ps(this.i,this.l,z,"[Invalid Chunked Response]"),Ti(this),Bo(this);else if(0<z.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),_d(dt),dt.M=!0,At(11))}}else ps(this.i,this.l,z,null),fd(this,z);ft==4&&Ti(this),this.o&&!this.J&&(ft==4?Bv(this.j,this):(this.o=!1,ql(this)))}else AC(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Ti(this),Bo(this)}}}catch{}finally{}};function gv(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function lC(l,h){var p=l.C,y=h.indexOf(`
`,p);return y==-1?cd:(p=Number(h.substring(p,y)),isNaN(p)?pv:(y+=1,y+p>h.length?cd:(h=h.slice(y,y+p),l.C=y+p,h)))}Ar.prototype.cancel=function(){this.J=!0,Ti(this)};function ql(l){l.S=Date.now()+l.I,yv(l,l.I)}function yv(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=$o(m(l.ba,l),h)}function dd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Ar.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(oC(this.i,this.A),this.L!=2&&(Uo(),At(17)),Ti(this),this.s=2,Bo(this)):yv(this,this.S-l)};function Bo(l){l.j.G==0||l.J||Bv(l.j,l)}function Ti(l){dd(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,sv(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function fd(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||pd(p.h,l))){if(!l.K&&pd(p.h,l)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Zl(p),Xl(p);else break e;vd(p),At(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=$o(m(p.Za,p),6e3));if(1>=wv(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Si(p,11)}else if((l.K||p.g==l)&&Zl(p),!w(h))for(O=p.Da.g.parse(h),h=0;h<O.length;h++){let ue=O[h];if(p.T=ue[0],ue=ue[1],p.G==2)if(ue[0]=="c"){p.K=ue[1],p.ia=ue[2];const dt=ue[3];dt!=null&&(p.la=dt,p.j.info("VER="+p.la));const ft=ue[4];ft!=null&&(p.Aa=ft,p.j.info("SVER="+p.Aa));const ys=ue[5];ys!=null&&typeof ys=="number"&&0<ys&&(y=1.5*ys,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const yn=l.g;if(yn){const tu=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tu){var M=y.h;M.g||tu.indexOf("spdy")==-1&&tu.indexOf("quic")==-1&&tu.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(md(M,M.h),M.h=null))}if(y.D){const wd=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;wd&&(y.ya=wd,_e(y.I,y.D,wd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var z=l;if(y.qa=Hv(y,y.J?y.ia:null,y.W),z.K){Ev(y.h,z);var ge=z,tt=y.L;tt&&(ge.I=tt),ge.B&&(dd(ge),ql(ge)),y.g=z}else $v(y);0<p.i.length&&Jl(p)}else ue[0]!="stop"&&ue[0]!="close"||Si(p,7);else p.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Si(p,7):yd(p):ue[0]!="noop"&&p.l&&p.l.ta(ue),p.v=0)}}Uo(4)}catch{}}var uC=class{constructor(l,h){this.g=l,this.map=h}};function vv(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _v(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function wv(l){return l.h?1:l.g?l.g.size:0}function pd(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function md(l,h){l.g?l.g.add(h):l.h=h}function Ev(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}vv.prototype.cancel=function(){if(this.i=Tv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Tv(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return C(l.i)}function cC(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,y=0;y<p;y++)h.push(l[y]);return h}h=[],p=0;for(y in l)h[p++]=l[y];return h}function hC(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const y in l)h[p++]=y;return h}}}function Iv(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=hC(l),y=cC(l),O=y.length,M=0;M<O;M++)h.call(void 0,y[M],p&&p[M],l)}var Sv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dC(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var y=l[p].indexOf("="),O=null;if(0<=y){var M=l[p].substring(0,y);O=l[p].substring(y+1)}else M=l[p];h(M,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Ii(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Ii){this.h=l.h,Wl(this,l.j),this.o=l.o,this.g=l.g,Hl(this,l.s),this.l=l.l;var h=l.i,p=new Ho;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Av(this,p),this.m=l.m}else l&&(h=String(l).match(Sv))?(this.h=!1,Wl(this,h[1]||"",!0),this.o=qo(h[2]||""),this.g=qo(h[3]||"",!0),Hl(this,h[4]),this.l=qo(h[5]||"",!0),Av(this,h[6]||"",!0),this.m=qo(h[7]||"")):(this.h=!1,this.i=new Ho(null,this.h))}Ii.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Wo(h,kv,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Wo(h,kv,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Wo(p,p.charAt(0)=="/"?mC:pC,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Wo(p,yC)),l.join("")};function Yn(l){return new Ii(l)}function Wl(l,h,p){l.j=p?qo(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Hl(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Av(l,h,p){h instanceof Ho?(l.i=h,vC(l.i,l.h)):(p||(h=Wo(h,gC)),l.i=new Ho(h,l.h))}function _e(l,h,p){l.i.set(h,p)}function Gl(l){return _e(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function qo(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Wo(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,fC),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function fC(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var kv=/[#\/\?@]/g,pC=/[#\?:]/g,mC=/[#\?]/g,gC=/[#\?@]/g,yC=/#/g;function Ho(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function kr(l){l.g||(l.g=new Map,l.h=0,l.i&&dC(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Ho.prototype,t.add=function(l,h){kr(this),this.i=null,l=ms(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function Rv(l,h){kr(l),h=ms(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Cv(l,h){return kr(l),h=ms(l,h),l.g.has(h)}t.forEach=function(l,h){kr(this),this.g.forEach(function(p,y){p.forEach(function(O){l.call(h,O,y,this)},this)},this)},t.na=function(){kr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const O=l[y];for(let M=0;M<O.length;M++)p.push(h[y])}return p},t.V=function(l){kr(this);let h=[];if(typeof l=="string")Cv(this,l)&&(h=h.concat(this.g.get(ms(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return kr(this),this.i=null,l=ms(this,l),Cv(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function bv(l,h,p){Rv(l,h),0<p.length&&(l.i=null,l.g.set(ms(l,h),C(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const M=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var O=M;z[y]!==""&&(O+="="+encodeURIComponent(String(z[y]))),l.push(O)}}return this.i=l.join("&")};function ms(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function vC(l,h){h&&!l.j&&(kr(l),l.i=null,l.g.forEach(function(p,y){var O=y.toLowerCase();y!=O&&(Rv(this,y),bv(this,O,p))},l)),l.j=h}function _C(l,h){const p=new zo;if(a.Image){const y=new Image;y.onload=g(Rr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=g(Rr,p,"TestLoadImage: error",!1,h,y),y.onabort=g(Rr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=g(Rr,p,"TestLoadImage: timeout",!1,h,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else h(!1)}function wC(l,h){const p=new zo,y=new AbortController,O=setTimeout(()=>{y.abort(),Rr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:y.signal}).then(M=>{clearTimeout(O),M.ok?Rr(p,"TestPingServer: ok",!0,h):Rr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Rr(p,"TestPingServer: error",!1,h)})}function Rr(l,h,p,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(p)}catch{}}function EC(){this.g=new rC}function TC(l,h,p){const y=p||"";try{Iv(l,function(O,M){let z=O;c(O)&&(z=sd(O)),h.push(y+M+"="+encodeURIComponent(z))})}catch(O){throw h.push(y+"type="+encodeURIComponent("_badmap")),O}}function Kl(l){this.l=l.Ub||null,this.j=l.eb||!1}E(Kl,od),Kl.prototype.g=function(){return new Ql(this.l,this.j)},Kl.prototype.i=function(l){return function(){return l}}({});function Ql(l,h){ht.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Ql,ht),t=Ql.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,Ko(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Go(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ko(this)),this.g&&(this.readyState=3,Ko(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xv(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function xv(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Go(this):Ko(this),this.readyState==3&&xv(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Go(this))},t.Qa=function(l){this.g&&(this.response=l,Go(this))},t.ga=function(){this.g&&Go(this)};function Go(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ko(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function Ko(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ql.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Pv(l){let h="";return L(l,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function gd(l,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Pv(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):_e(l,h,p))}function De(l){ht.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(De,ht);var IC=/^https?$/i,SC=["POST","PUT"];t=De.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ud.g(),this.v=this.o?ov(this.o):ov(ud),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(M){Nv(this,M);return}if(l=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)p.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())p.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(SC,h,void 0))||y||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,z]of p)this.g.setRequestHeader(M,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Lv(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){Nv(this,M)}};function Nv(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Ov(l),Yl(l)}function Ov(l){l.A||(l.A=!0,St(l,"complete"),St(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,St(this,"complete"),St(this,"abort"),Yl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yl(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Dv(this):this.bb())},t.bb=function(){Dv(this)};function Dv(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Xn(l)!=4||l.Z()!=2)){if(l.u&&Xn(l)==4)nv(l.Ea,0,l);else if(St(l,"readystatechange"),Xn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=z===0){var O=String(l.D).match(Sv)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),y=!IC.test(O?O.toLowerCase():"")}p=y}if(p)St(l,"complete"),St(l,"success");else{l.m=6;try{var M=2<Xn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",Ov(l)}}finally{Yl(l)}}}}function Yl(l,h){if(l.g){Lv(l);const p=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||St(l,"ready");try{p.onreadystatechange=y}catch{}}}function Lv(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Xn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),nC(h)}};function Mv(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function AC(l){const h={};l=(l.g&&2<=Xn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(w(l[y]))continue;var p=x(l[y]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[O]||[];h[O]=M,M.push(p)}_(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qo(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function Vv(l){this.Aa=0,this.i=[],this.j=new zo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qo("baseRetryDelayMs",5e3,l),this.cb=Qo("retryDelaySeedMs",1e4,l),this.Wa=Qo("forwardChannelMaxRetries",2,l),this.wa=Qo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new vv(l&&l.concurrentRequestLimit),this.Da=new EC,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Vv.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,y){At(0),this.W=l,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Hv(this,null,this.W),Jl(this)};function yd(l){if(Fv(l),l.G==3){var h=l.U++,p=Yn(l.I);if(_e(p,"SID",l.K),_e(p,"RID",h),_e(p,"TYPE","terminate"),Yo(l,p),h=new Ar(l,l.j,h),h.L=2,h.v=Gl(Yn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=Gv(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ql(h)}Wv(l)}function Xl(l){l.g&&(_d(l),l.g.cancel(),l.g=null)}function Fv(l){Xl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Zl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Jl(l){if(!_v(l.h)&&!l.s){l.s=!0;var h=l.Ga;Ve||Q(),U||(Ve(),U=!0),G.add(h,l),l.B=0}}function kC(l,h){return wv(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=$o(m(l.Ga,l,h),qv(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new Ar(this,this.j,l);let M=this.o;if(this.S&&(M?(M=v(M),R(M,this.S)):M=this.S),this.m!==null||this.O||(O.H=M,M=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Uv(this,O,h),p=Yn(this.I),_e(p,"RID",l),_e(p,"CVER",22),this.D&&_e(p,"X-HTTP-Session-Id",this.D),Yo(this,p),M&&(this.O?h="headers="+encodeURIComponent(String(Pv(M)))+"&"+h:this.m&&gd(p,this.m,M)),md(this.h,O),this.Ua&&_e(p,"TYPE","init"),this.P?(_e(p,"$req",h),_e(p,"SID","null"),O.T=!0,hd(O,p,null)):hd(O,p,h),this.G=2}}else this.G==3&&(l?jv(this,l):this.i.length==0||_v(this.h)||jv(this))};function jv(l,h){var p;h?p=h.l:p=l.U++;const y=Yn(l.I);_e(y,"SID",l.K),_e(y,"RID",p),_e(y,"AID",l.T),Yo(l,y),l.m&&l.o&&gd(y,l.m,l.o),p=new Ar(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Uv(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),md(l.h,p),hd(p,y,h)}function Yo(l,h){l.H&&L(l.H,function(p,y){_e(h,y,p)}),l.l&&Iv({},function(p,y){_e(h,y,p)})}function Uv(l,h,p){p=Math.min(l.i.length,p);var y=l.l?m(l.l.Na,l.l,l):null;e:{var O=l.i;let M=-1;for(;;){const z=["count="+p];M==-1?0<p?(M=O[0].g,z.push("ofs="+M)):M=0:z.push("ofs="+M);let ge=!0;for(let tt=0;tt<p;tt++){let ue=O[tt].g;const dt=O[tt].map;if(ue-=M,0>ue)M=Math.max(0,O[tt].g-100),ge=!1;else try{TC(dt,z,"req"+ue+"_")}catch{y&&y(dt)}}if(ge){y=z.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,y}function $v(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Ve||Q(),U||(Ve(),U=!0),G.add(h,l),l.v=0}}function vd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=$o(m(l.Fa,l),qv(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,zv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=$o(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Xl(this),zv(this))};function _d(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function zv(l){l.g=new Ar(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Yn(l.qa);_e(h,"RID","rpc"),_e(h,"SID",l.K),_e(h,"AID",l.T),_e(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&_e(h,"TO",l.ja),_e(h,"TYPE","xmlhttp"),Yo(l,h),l.m&&l.o&&gd(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Gl(Yn(h)),p.m=null,p.P=!0,mv(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Xl(this),vd(this),At(19))};function Zl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Bv(l,h){var p=null;if(l.g==h){Zl(l),_d(l),l.g=null;var y=2}else if(pd(l.h,h))p=h.D,Ev(l.h,h),y=1;else return;if(l.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var O=l.B;y=$l(),St(y,new hv(y,p)),Jl(l)}else $v(l);else if(O=h.s,O==3||O==0&&0<h.X||!(y==1&&kC(l,h)||y==2&&vd(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),O){case 1:Si(l,5);break;case 4:Si(l,10);break;case 3:Si(l,6);break;default:Si(l,2)}}}function qv(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function Si(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),y=l.Xa;const O=!y;y=new Ii(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Wl(y,"https"),Gl(y),O?_C(y.toString(),p):wC(y.toString(),p)}else At(2);l.G=0,l.l&&l.l.sa(h),Wv(l),Fv(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function Wv(l){if(l.G=0,l.ka=[],l.l){const h=Tv(l.h);(h.length!=0||l.i.length!=0)&&(b(l.ka,h),b(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function Hv(l,h,p){var y=p instanceof Ii?Yn(p):new Ii(p);if(y.g!="")h&&(y.g=h+"."+y.g),Hl(y,y.s);else{var O=a.location;y=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var M=new Ii(null);y&&Wl(M,y),h&&(M.g=h),O&&Hl(M,O),p&&(M.l=p),y=M}return p=l.D,h=l.ya,p&&h&&_e(y,p,h),_e(y,"VER",l.la),Yo(l,y),y}function Gv(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new De(new Kl({eb:p})):new De(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kv(){}t=Kv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function eu(){}eu.prototype.g=function(l,h){return new qt(l,h)};function qt(l,h){ht.call(this),this.g=new Vv(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!w(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new gs(this)}E(qt,ht),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){yd(this.g)},qt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=sd(l),l=p);h.i.push(new uC(h.Ya++,l)),h.G==3&&Jl(h)},qt.prototype.N=function(){this.g.l=null,delete this.j,yd(this.g),delete this.g,qt.aa.N.call(this)};function Qv(l){ad.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}E(Qv,ad);function Yv(){ld.call(this),this.status=1}E(Yv,ld);function gs(l){this.g=l}E(gs,Kv),gs.prototype.ua=function(){St(this.g,"a")},gs.prototype.ta=function(l){St(this.g,new Qv(l))},gs.prototype.sa=function(l){St(this.g,new Yv)},gs.prototype.ra=function(){St(this.g,"b")},eu.prototype.createWebChannel=eu.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,SS=function(){return new eu},IS=function(){return $l()},TS=Ei,Np={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zl.NO_ERROR=0,zl.TIMEOUT=8,zl.HTTP_ERROR=6,Bu=zl,dv.COMPLETE="complete",ES=dv,av.EventType=jo,jo.OPEN="a",jo.CLOSE="b",jo.ERROR="c",jo.MESSAGE="d",ht.prototype.listen=ht.prototype.K,fa=av,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,wS=De}).apply(typeof Eu<"u"?Eu:typeof self<"u"?self:typeof window<"u"?window:{});const F0="@firebase/firestore";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let Co="10.14.0";/**
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
 */const Ji=new Sh("@firebase/firestore");function oa(){return Ji.logLevel}function W(t,...e){if(Ji.logLevel<=oe.DEBUG){const n=e.map(Dg);Ji.debug(`Firestore (${Co}): ${t}`,...n)}}function mr(t,...e){if(Ji.logLevel<=oe.ERROR){const n=e.map(Dg);Ji.error(`Firestore (${Co}): ${t}`,...n)}}function lo(t,...e){if(Ji.logLevel<=oe.WARN){const n=e.map(Dg);Ji.warn(`Firestore (${Co}): ${t}`,...n)}}function Dg(t){if(typeof t=="string")return t;try{/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+t;throw mr(e),new Error(e)}function me(t,e){t||J()}function ee(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ii{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class AS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ND{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class OD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DD{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ii;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ii,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ii)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new AS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new yt(e)}}class LD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class MD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new LD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class VD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){me(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new VD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function jD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class kS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=jD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function uo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ye(0,0))}static max(){return new Z(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ol{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ol.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ol?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends ol{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const UD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends ol{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return UD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new q(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Te.fromString(e))}static fromName(e){return new K(Te.fromString(e).popFirst(5))}static empty(){return new K(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Te(e.slice()))}}function $D(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new li(i,K.empty(),e)}function zD(t){return new li(t.readTime,t.key,-1)}class li{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new li(Z.min(),K.empty(),-1)}static max(){return new li(Z.max(),K.empty(),-1)}}function BD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const qD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Al(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==qD)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function HD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function kl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Lg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Lg.oe=-1;function Ch(t){return t==null}function Mc(t){return t===0&&1/t==-1/0}function GD(t){return typeof t=="number"&&Number.isInteger(t)&&!Mc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function j0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function RS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tu(this.root,e,this.comparator,!0)}}class Tu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ot{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new U0(this.data.getIterator())}getIteratorFrom(e){return new U0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class U0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new ot(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return uo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class CS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new CS("Invalid base64 string: "+s):s}}(e);return new lt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const KD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ui(t){if(me(!!t),typeof t=="string"){let e=0;const n=KD.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zi(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
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
 */function Mg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vg(t){const e=t.mapValue.fields.__previous_value__;return Mg(e)?Vg(e):e}function al(t){const e=ui(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class QD{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ll{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ll("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ll&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Iu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function es(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mg(t)?4:XD(t)?9007199254740991:YD(t)?10:11:J()}function Gn(t,e){if(t===e)return!0;const n=es(t);if(n!==es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return al(t).isEqual(al(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ui(i.timestampValue),a=ui(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Zi(i.bytesValue).isEqual(Zi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return je(i.geoPointValue.latitude)===je(s.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return je(i.integerValue)===je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=je(i.doubleValue),a=je(s.doubleValue);return o===a?Mc(o)===Mc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return uo(t.arrayValue.values||[],e.arrayValue.values||[],Gn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(j0(o)!==j0(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Gn(o[u],a[u])))return!1;return!0}(t,e);default:return J()}}function ul(t,e){return(t.values||[]).find(n=>Gn(n,e))!==void 0}function co(t,e){if(t===e)return 0;const n=es(t),r=es(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=je(s.integerValue||s.doubleValue),u=je(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return $0(t.timestampValue,e.timestampValue);case 4:return $0(al(t),al(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Zi(s),u=Zi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=ce(a[c],u[c]);if(d!==0)return d}return ce(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ce(je(s.latitude),je(o.latitude));return a!==0?a:ce(je(s.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return z0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const f=s.fields||{},m=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,E=(u=m.value)===null||u===void 0?void 0:u.arrayValue,C=ce(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((d=E==null?void 0:E.values)===null||d===void 0?void 0:d.length)||0);return C!==0?C:z0(g,E)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Iu.mapValue&&o===Iu.mapValue)return 0;if(s===Iu.mapValue)return 1;if(o===Iu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=ce(u[f],d[f]);if(m!==0)return m;const g=co(a[u[f]],c[d[f]]);if(g!==0)return g}return ce(u.length,d.length)}(t.mapValue,e.mapValue);default:throw J()}}function $0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=ui(t),r=ui(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function z0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=co(n[i],r[i]);if(s)return s}return ce(n.length,r.length)}function ho(t){return Op(t)}function Op(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ui(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Op(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Op(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function B0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Dp(t){return!!t&&"integerValue"in t}function Fg(t){return!!t&&"arrayValue"in t}function q0(t){return!!t&&"nullValue"in t}function W0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qu(t){return!!t&&"mapValue"in t}function YD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Pa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Pa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function XD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pa(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Pa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());qu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];qu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(Pa(this.value))}}function bS(t){const e=[];return hs(t.fields,(n,r)=>{const i=new it([n]);if(qu(r)){const s=bS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Kt(e)}/**
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
 */class _t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,Z.min(),Z.min(),Z.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,Z.min(),Z.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,Z.min(),Z.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vc{constructor(e,n){this.position=e,this.inclusive=n}}function H0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=co(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function G0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class cl{constructor(e,n="asc"){this.field=e,this.dir=n}}function JD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class xS{}class We extends xS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new e4(e,n,r):n==="array-contains"?new r4(e,r):n==="in"?new i4(e,r):n==="not-in"?new s4(e,r):n==="array-contains-any"?new o4(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new t4(e,r):new n4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(co(n,this.value)):n!==null&&es(this.value)===es(n)&&this.matchesComparison(co(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends xS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new xn(e,n)}matches(e){return PS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function PS(t){return t.op==="and"}function NS(t){return ZD(t)&&PS(t)}function ZD(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function Lp(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+ho(t.value);if(NS(t))return t.filters.map(e=>Lp(e)).join(",");{const e=t.filters.map(n=>Lp(n)).join(",");return`${t.op}(${e})`}}function OS(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&Gn(r.value,i.value)}(t,e):t instanceof xn?function(r,i){return i instanceof xn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&OS(o,i.filters[a]),!0):!1}(t,e):void J()}function DS(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${ho(n.value)}`}(t):t instanceof xn?function(n){return n.op.toString()+" {"+n.getFilters().map(DS).join(" ,")+"}"}(t):"Filter"}class e4 extends We{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class t4 extends We{constructor(e,n){super(e,"in",n),this.keys=LS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class n4 extends We{constructor(e,n){super(e,"not-in",n),this.keys=LS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function LS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class r4 extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fg(n)&&ul(n.arrayValue,this.value)}}class i4 extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ul(this.value.arrayValue,n)}}class s4 extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ul(this.value.arrayValue,n)}}class o4 extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ul(this.value.arrayValue,r))}}/**
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
 */class a4{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function K0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new a4(t,e,n,r,i,s,o)}function jg(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Lp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ch(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ho(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ho(r)).join(",")),e.ue=n}return e.ue}function Ug(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!OS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!G0(t.startAt,e.startAt)&&G0(t.endAt,e.endAt)}function Mp(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class bo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function l4(t,e,n,r,i,s,o,a){return new bo(t,e,n,r,i,s,o,a)}function $g(t){return new bo(t)}function Q0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function MS(t){return t.collectionGroup!==null}function Na(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ot(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new cl(s,r))}),n.has(it.keyField().canonicalString())||e.ce.push(new cl(it.keyField(),r))}return e.ce}function zn(t){const e=ee(t);return e.le||(e.le=u4(e,Na(t))),e.le}function u4(t,e){if(t.limitType==="F")return K0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new cl(i.field,s)});const n=t.endAt?new Vc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vc(t.startAt.position,t.startAt.inclusive):null;return K0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vp(t,e){const n=t.filters.concat([e]);return new bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Fp(t,e,n){return new bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bh(t,e){return Ug(zn(t),zn(e))&&t.limitType===e.limitType}function VS(t){return`${jg(zn(t))}|lt:${t.limitType}`}function Is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>DS(i)).join(", ")}]`),Ch(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ho(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ho(i)).join(",")),`Target(${r})`}(zn(t))}; limitType=${t.limitType})`}function xh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Na(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=H0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Na(r),i)||r.endAt&&!function(o,a,u){const c=H0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Na(r),i))}(t,e)}function c4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function FS(t){return(e,n)=>{let r=!1;for(const i of Na(t)){const s=h4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function h4(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?co(u,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class xo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return RS(this.inner)}size(){return this.innerSize}}/**
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
 */const d4=new Ne(K.comparator);function gr(){return d4}const jS=new Ne(K.comparator);function pa(...t){let e=jS;for(const n of t)e=e.insert(n.key,n);return e}function US(t){let e=jS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Di(){return Oa()}function $S(){return Oa()}function Oa(){return new xo(t=>t.toString(),(t,e)=>t.isEqual(e))}const f4=new Ne(K.comparator),p4=new ot(K.comparator);function re(...t){let e=p4;for(const n of t)e=e.add(n);return e}const m4=new ot(ce);function g4(){return m4}/**
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
 */function zg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mc(e)?"-0":e}}function zS(t){return{integerValue:""+t}}function y4(t,e){return GD(e)?zS(e):zg(t,e)}/**
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
 */class Ph{constructor(){this._=void 0}}function v4(t,e,n){return t instanceof Fc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Mg(s)&&(s=Vg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof hl?qS(t,e):t instanceof dl?WS(t,e):function(i,s){const o=BS(i,s),a=Y0(o)+Y0(i.Pe);return Dp(o)&&Dp(i.Pe)?zS(a):zg(i.serializer,a)}(t,e)}function _4(t,e,n){return t instanceof hl?qS(t,e):t instanceof dl?WS(t,e):n}function BS(t,e){return t instanceof jc?function(r){return Dp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Fc extends Ph{}class hl extends Ph{constructor(e){super(),this.elements=e}}function qS(t,e){const n=HS(e);for(const r of t.elements)n.some(i=>Gn(i,r))||n.push(r);return{arrayValue:{values:n}}}class dl extends Ph{constructor(e){super(),this.elements=e}}function WS(t,e){let n=HS(e);for(const r of t.elements)n=n.filter(i=>!Gn(i,r));return{arrayValue:{values:n}}}class jc extends Ph{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Y0(t){return je(t.integerValue||t.doubleValue)}function HS(t){return Fg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function w4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof hl&&i instanceof hl||r instanceof dl&&i instanceof dl?uo(r.elements,i.elements,Gn):r instanceof jc&&i instanceof jc?Gn(r.Pe,i.Pe):r instanceof Fc&&i instanceof Fc}(t.transform,e.transform)}class E4{constructor(e,n){this.version=e,this.transformResults=n}}class kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nh{}function GS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bg(t.key,kn.none()):new Rl(t.key,t.data,kn.none());{const n=t.data,r=Dt.empty();let i=new ot(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new vi(t.key,r,new Kt(i.toArray()),kn.none())}}function T4(t,e,n){t instanceof Rl?function(i,s,o){const a=i.value.clone(),u=J0(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof vi?function(i,s,o){if(!Wu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=J0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(KS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Da(t,e,n,r){return t instanceof Rl?function(s,o,a,u){if(!Wu(s.precondition,o))return a;const c=s.value.clone(),d=Z0(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof vi?function(s,o,a,u){if(!Wu(s.precondition,o))return a;const c=Z0(s.fieldTransforms,u,o),d=o.data;return d.setAll(KS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Wu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function I4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=BS(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function X0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&uo(r,i,(s,o)=>w4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Rl extends Nh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vi extends Nh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function KS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function J0(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,_4(o,a,n[i]))}return r}function Z0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,v4(s,o,e))}return r}class Bg extends Nh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class S4 extends Nh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class A4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&T4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$S();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=GS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&uo(this.mutations,e.mutations,(n,r)=>X0(n,r))&&uo(this.baseMutations,e.baseMutations,(n,r)=>X0(n,r))}}class qg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return f4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qg(e,n,r,i)}}/**
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
 */class k4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class R4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,ae;function C4(t){switch(t){default:return J();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function QS(t){if(t===void 0)return mr("GRPC error has no .code"),F.UNKNOWN;switch(t){case ze.OK:return F.OK;case ze.CANCELLED:return F.CANCELLED;case ze.UNKNOWN:return F.UNKNOWN;case ze.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case ze.INTERNAL:return F.INTERNAL;case ze.UNAVAILABLE:return F.UNAVAILABLE;case ze.UNAUTHENTICATED:return F.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case ze.NOT_FOUND:return F.NOT_FOUND;case ze.ALREADY_EXISTS:return F.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return F.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case ze.ABORTED:return F.ABORTED;case ze.OUT_OF_RANGE:return F.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return F.UNIMPLEMENTED;case ze.DATA_LOSS:return F.DATA_LOSS;default:return J()}}(ae=ze||(ze={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function b4(){return new TextEncoder}/**
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
 */const x4=new Fi([4294967295,4294967295],0);function ew(t){const e=b4().encode(t),n=new _S;return n.update(e),new Uint8Array(n.digest())}function tw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Fi([n,r],0),new Fi([i,s],0)]}class Wg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ma(`Invalid padding: ${n}`);if(r<0)throw new ma(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ma(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ma(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Fi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Fi.fromNumber(r)));return i.compare(x4)===1&&(i=new Fi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ew(e),[r,i]=tw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Wg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=ew(e),[r,i]=tw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Oh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Cl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Oh(Z.min(),i,new Ne(ce),gr(),re())}}class Cl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Cl(r,n,re(),re(),re())}}/**
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
 */class Hu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class YS{constructor(e,n){this.targetId=e,this.me=n}}class XS{constructor(e,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class nw{constructor(){this.fe=0,this.ge=iw(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new Cl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=iw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class P4{constructor(e){this.Le=e,this.Be=new Map,this.ke=gr(),this.qe=rw(),this.Qe=new Ne(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Mp(s))if(r===0){const o=new K(s.path);this.Ue(n,o,_t.newNoDocument(o,Z.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Zi(r).toUint8Array()}catch(u){if(u instanceof CS)return lo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Wg(o,i,s)}catch(u){return lo(u instanceof ma?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Mp(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,_t.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=re();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Oh(e,n,this.Qe,this.ke,r);return this.ke=gr(),this.qe=rw(),this.Qe=new Ne(ce),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new nw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ot(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new nw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function rw(){return new Ne(K.comparator)}function iw(){return new Ne(K.comparator)}const N4={asc:"ASCENDING",desc:"DESCENDING"},O4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},D4={and:"AND",or:"OR"};class L4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jp(t,e){return t.useProto3Json||Ch(e)?e:{value:e}}function Uc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function JS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function M4(t,e){return Uc(t,e.toTimestamp())}function Bn(t){return me(!!t),Z.fromTimestamp(function(n){const r=ui(n);return new Ye(r.seconds,r.nanos)}(t))}function Hg(t,e){return Up(t,e).canonicalString()}function Up(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ZS(t){const e=Te.fromString(t);return me(iA(e)),e}function $p(t,e){return Hg(t.databaseId,e.path)}function af(t,e){const n=ZS(e);if(n.get(1)!==t.databaseId.projectId)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(tA(n))}function eA(t,e){return Hg(t.databaseId,e)}function V4(t){const e=ZS(t);return e.length===4?Te.emptyPath():tA(e)}function zp(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tA(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sw(t,e,n){return{name:$p(t,e),fields:n.value.mapValue.fields}}function F4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(me(d===void 0||typeof d=="string"),lt.fromBase64String(d||"")):(me(d===void 0||d instanceof Buffer||d instanceof Uint8Array),lt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?F.UNKNOWN:QS(c.code);return new q(d,c.message||"")}(o);n=new XS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=af(t,r.document.name),s=Bn(r.document.updateTime),o=r.document.createTime?Bn(r.document.createTime):Z.min(),a=new Dt({mapValue:{fields:r.document.fields}}),u=_t.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Hu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=af(t,r.document),s=r.readTime?Bn(r.readTime):Z.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Hu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=af(t,r.document),s=r.removedTargetIds||[];n=new Hu([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new R4(i,s),a=r.targetId;n=new YS(a,o)}}return n}function j4(t,e){let n;if(e instanceof Rl)n={update:sw(t,e.key,e.value)};else if(e instanceof Bg)n={delete:$p(t,e.key)};else if(e instanceof vi)n={update:sw(t,e.key,e.data),updateMask:K4(e.fieldMask)};else{if(!(e instanceof S4))return J();n={verify:$p(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Fc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof hl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof dl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof jc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:M4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function U4(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Bn(i.updateTime):Bn(s);return o.isEqual(Z.min())&&(o=Bn(s)),new E4(o,i.transformResults||[])}(n,e))):[]}function $4(t,e){return{documents:[eA(t,e.path)]}}function z4(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=eA(t,i);const s=function(c){if(c.length!==0)return rA(xn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ss(m.field),direction:W4(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=jp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function B4(t){let e=V4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=nA(f);return m instanceof xn&&NS(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(E){return new cl(As(E.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Ch(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,g=f.values||[];return new Vc(g,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,g=f.values||[];return new Vc(g,m)}(n.endAt)),l4(e,i,o,s,a,"F",u,c)}function q4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function nA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=As(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=As(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=As(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=As(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return We.create(As(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xn.create(n.compositeFilter.filters.map(r=>nA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function W4(t){return N4[t]}function H4(t){return O4[t]}function G4(t){return D4[t]}function Ss(t){return{fieldPath:t.canonicalString()}}function As(t){return it.fromServerFormat(t.fieldPath)}function rA(t){return t instanceof We?function(n){if(n.op==="=="){if(W0(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NAN"}};if(q0(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(W0(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NAN"}};if(q0(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ss(n.field),op:H4(n.op),value:n.value}}}(t):t instanceof xn?function(n){const r=n.getFilters().map(i=>rA(i));return r.length===1?r[0]:{compositeFilter:{op:G4(n.op),filters:r}}}(t):J()}function K4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function iA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Hr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=lt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Q4{constructor(e){this.ct=e}}function Y4(t){const e=B4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fp(e,e.limit,"L"):e}/**
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
 */class X4{constructor(){this.un=new J4}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(li.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(li.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class J4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ot(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ot(Te.comparator)).toArray()}}/**
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
 */class fo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new fo(0)}static kn(){return new fo(-1)}}/**
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
 */class Z4{constructor(){this.changes=new xo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Da(r.mutation,i,Kt.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Di();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=pa();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Di();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=gr();const o=Oa(),a=function(){return Oa()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof vi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Da(d.mutation,c,d.mutation.getFieldMask(),Ye.now())):o.set(c.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new eL(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Oa();let i=new Ne((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Kt.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||re()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=$S();d.forEach(m=>{if(!s.has(m)){const g=GS(n.get(m),r.get(m));g!==null&&f.set(m,g),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):MS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(Di());let a=-1,u=s;return o.next(c=>j.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(d=>({batchId:a,changes:US(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=pa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=pa();return this.indexManager.getCollectionParents(e,s).next(a=>j.forEach(a,u=>{const c=function(f,m){return new bo(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,_t.newInvalidDocument(d)))});let a=pa();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Da(d.mutation,c,Kt.empty(),Ye.now()),xh(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class nL{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Bn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Y4(i.bundledQuery),readTime:Bn(i.readTime)}}(n)),j.resolve()}}/**
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
 */class rL{constructor(){this.overlays=new Ne(K.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Di();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=Di(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ne((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Di(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Di(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return j.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new k4(n,r));let s=this.Ir.get(n);s===void 0&&(s=re(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class iL{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Gg{constructor(){this.Tr=new ot(Xe.Er),this.dr=new ot(Xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Xe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Te([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Te([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=re();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ce(e.wr,n.wr)}static Ar(e,n){return ce(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class sL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ot(Xe.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new A4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Xe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(ce);return n.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new K(s),0);let a=new ot(ce);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),j.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Xe(n,0),i=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class oL{constructor(e){this.Mr=e,this.docs=function(){return new Ne(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=gr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=gr();const o=n.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||BD(zD(d),r)<=0||(i.has(d.key)||xh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new aL(this)}getSize(e){return j.resolve(this.size)}}class aL extends Z4{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class lL{constructor(e){this.persistence=e,this.Nr=new xo(n=>jg(n),Ug),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Gg,this.targetCount=0,this.kr=fo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new fo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
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
 */class uL{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Lg(0),this.Kr=!1,this.Kr=!0,this.$r=new iL,this.referenceDelegate=e(this),this.Ur=new lL(this),this.indexManager=new X4,this.remoteDocumentCache=function(i){return new oL(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Q4(n),this.Gr=new nL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new sL(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new cL(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class cL extends WD{constructor(e){super(),this.currentSequenceNumber=e}}class Kg{constructor(e){this.persistence=e,this.Jr=new Gg,this.Yr=null}static Zr(e){return new Kg(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Qg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qg(e,n.fromCache,r,i)}}/**
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
 */class hL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dL{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return HN()?8:HD(Et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new hL;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(oa()<=oe.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(oa()<=oe.DEBUG&&W("QueryEngine","Query:",Is(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(oa()<=oe.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zn(n))):j.resolve())}Yi(e,n){if(Q0(n))return j.resolve(null);let r=zn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fp(n,null,"F"),r=zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Fp(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Q0(n)||i.isEqual(Z.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?j.resolve(null):(oa()<=oe.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Is(n)),this.rs(e,o,n,$D(i,-1)).next(a=>a))})}ts(e,n){let r=new ot(FS(e));return n.forEach((i,s)=>{xh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return oa()<=oe.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Is(n)),this.Ji.getDocumentsMatchingQuery(e,n,li.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class fL{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ne(ce),this._s=new xo(s=>jg(s),Ug),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tL(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function pL(t,e,n,r){return new fL(t,e,n,r)}async function sA(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=re();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function mL(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let g=j.resolve();return m.forEach(E=>{g=g.next(()=>d.getEntry(u,E)).next(C=>{const b=c.docVersions.get(E);me(b!==null),C.version.compareTo(b)<0&&(f.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),d.addEntry(C)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function oA(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function gL(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,f)));let g=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(lt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),i=i.insert(f,g),function(C,b,I){return C.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,g,d)&&a.push(n.Ur.updateTargetData(s,g))});let u=gr(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(yL(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(Z.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return j.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function yL(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=gr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function vL(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _L(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Bp(t,e,n){const r=ee(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!kl(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function ow(t,e,n){const r=ee(t);let i=Z.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=ee(u),m=f._s.get(d);return m!==void 0?j.resolve(f.os.get(m)):f.Ur.getTargetData(c,d)}(r,o,zn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:re())).next(a=>(wL(r,c4(e),a),{documents:a,Ts:s})))}function wL(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class aw{constructor(){this.activeTargetIds=g4()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EL{constructor(){this.so=new aw,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new aw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class TL{_o(e){}shutdown(){}}/**
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
 */class lw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Su=null;function lf(){return Su===null?Su=function(){return 268435456+Math.round(2147483648*Math.random())}():Su++,"0x"+Su.toString(16)}/**
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
 */const IL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class SL{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const gt="WebChannelConnection";class AL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=lf(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(W("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw lo("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Co}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=IL[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=lf();return new Promise((o,a)=>{const u=new wS;u.setWithCredentials(!0),u.listenOnce(ES.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Bu.NO_ERROR:const d=u.getResponseJson();W(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Bu.TIMEOUT:W(gt,`RPC '${e}' ${s} timed out`),a(new q(F.DEADLINE_EXCEEDED,"Request time out"));break;case Bu.HTTP_ERROR:const f=u.getStatus();if(W(gt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const E=function(b){const I=b.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(I)>=0?I:F.UNKNOWN}(g.status);a(new q(E,g.message))}else a(new q(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new q(F.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{W(gt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(gt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=lf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=SS(),a=IS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");W(gt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,g=!1;const E=new SL({Io:b=>{g?W(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(W(gt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),W(gt,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},To:()=>f.close()}),C=(b,I,w)=>{b.listen(I,T=>{try{w(T)}catch(P){setTimeout(()=>{throw P},0)}})};return C(f,fa.EventType.OPEN,()=>{g||(W(gt,`RPC '${e}' stream ${i} transport opened.`),E.yo())}),C(f,fa.EventType.CLOSE,()=>{g||(g=!0,W(gt,`RPC '${e}' stream ${i} transport closed`),E.So())}),C(f,fa.EventType.ERROR,b=>{g||(g=!0,lo(gt,`RPC '${e}' stream ${i} transport errored:`,b),E.So(new q(F.UNAVAILABLE,"The operation could not be completed")))}),C(f,fa.EventType.MESSAGE,b=>{var I;if(!g){const w=b.data[0];me(!!w);const T=w,P=T.error||((I=T[0])===null||I===void 0?void 0:I.error);if(P){W(gt,`RPC '${e}' stream ${i} received error:`,P);const V=P.status;let L=function(S){const R=ze[S];if(R!==void 0)return QS(R)}(V),_=P.message;L===void 0&&(L=F.INTERNAL,_="Unknown error status: "+V+" with message "+P.message),g=!0,E.So(new q(L,_)),f.close()}else W(gt,`RPC '${e}' stream ${i} received:`,w),E.bo(w)}}),C(a,TS.STAT_EVENT,b=>{b.stat===Np.PROXY?W(gt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Np.NOPROXY&&W(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}function uf(){return typeof document<"u"?document:null}/**
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
 */function Dh(t){return new L4(t,!0)}/**
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
 */class aA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class lA{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new aA(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(mr(n.toString()),mr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kL extends lA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=F4(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?Bn(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=zp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Mp(u)?{documents:$4(s,u)}:{query:z4(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=JS(s,o.resumeToken);const c=jp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=Uc(s,o.snapshotVersion.toTimestamp());const c=jp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=q4(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=zp(this.serializer),n.removeTarget=e,this.a_(n)}}class RL extends lA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=U4(e.writeResults,e.commitTime),r=Bn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=zp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>j4(this.serializer,r))};this.a_(n)}}/**
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
 */class CL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Up(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Up(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class bL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(mr(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class xL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ds(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.L_.add(4),await bl(c),c.q_.set("Unknown"),c.L_.delete(4),await Lh(c)}(this))})}),this.q_=new bL(r,i)}}async function Lh(t){if(ds(t))for(const e of t.B_)await e(!0)}async function bl(t){for(const e of t.B_)await e(!1)}function uA(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Zg(n)?Jg(n):Po(n).r_()&&Xg(n,e))}function Yg(t,e){const n=ee(t),r=Po(n);n.N_.delete(e),r.r_()&&cA(n,e),n.N_.size===0&&(r.r_()?r.o_():ds(n)&&n.q_.set("Unknown"))}function Xg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Po(t).A_(e)}function cA(t,e){t.Q_.xe(e),Po(t).R_(e)}function Jg(t){t.Q_=new P4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Po(t).start(),t.q_.v_()}function Zg(t){return ds(t)&&!Po(t).n_()&&t.N_.size>0}function ds(t){return ee(t).L_.size===0}function hA(t){t.Q_=void 0}async function PL(t){t.q_.set("Online")}async function NL(t){t.N_.forEach((e,n)=>{Xg(t,e)})}async function OL(t,e){hA(t),Zg(t)?(t.q_.M_(e),Jg(t)):t.q_.set("Unknown")}async function DL(t,e,n){if(t.q_.set("Online"),e instanceof XS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $c(t,r)}else if(e instanceof Hu?t.Q_.Ke(e):e instanceof YS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await oA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(lt.EMPTY_BYTE_STRING,d.snapshotVersion)),cA(s,u);const f=new Hr(d.target,u,c,d.sequenceNumber);Xg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await $c(t,r)}}async function $c(t,e,n){if(!kl(e))throw e;t.L_.add(1),await bl(t),t.q_.set("Offline"),n||(n=()=>oA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Lh(t)})}function dA(t,e){return e().catch(n=>$c(t,n,e))}async function Mh(t){const e=ee(t),n=ci(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;LL(e);)try{const i=await vL(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,ML(e,i)}catch(i){await $c(e,i)}fA(e)&&pA(e)}function LL(t){return ds(t)&&t.O_.length<10}function ML(t,e){t.O_.push(e);const n=ci(t);n.r_()&&n.V_&&n.m_(e.mutations)}function fA(t){return ds(t)&&!ci(t).n_()&&t.O_.length>0}function pA(t){ci(t).start()}async function VL(t){ci(t).p_()}async function FL(t){const e=ci(t);for(const n of t.O_)e.m_(n.mutations)}async function jL(t,e,n){const r=t.O_.shift(),i=qg.from(r,e,n);await dA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mh(t)}async function UL(t,e){e&&ci(t).V_&&await async function(r,i){if(function(o){return C4(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();ci(r).s_(),await dA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Mh(r)}}(t,e),fA(t)&&pA(t)}async function uw(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ds(n);n.L_.add(3),await bl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Lh(n)}async function $L(t,e){const n=ee(t);e?(n.L_.delete(2),await Lh(n)):e||(n.L_.add(2),await bl(n),n.q_.set("Unknown"))}function Po(t){return t.K_||(t.K_=function(n,r,i){const s=ee(n);return s.w_(),new kL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:PL.bind(null,t),Ro:NL.bind(null,t),mo:OL.bind(null,t),d_:DL.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Zg(t)?Jg(t):t.q_.set("Unknown")):(await t.K_.stop(),hA(t))})),t.K_}function ci(t){return t.U_||(t.U_=function(n,r,i){const s=ee(n);return s.w_(),new RL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:VL.bind(null,t),mo:UL.bind(null,t),f_:FL.bind(null,t),g_:jL.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Mh(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class ey{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ii,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ey(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ty(t,e){if(mr("AsyncQueue",`${e}: ${t}`),kl(t))return new q(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ys{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=pa(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new Ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class cw{constructor(){this.W_=new Ne(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class po{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new po(e,n,Ys.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class zL{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class BL{constructor(){this.queries=hw(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=hw(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new q(F.ABORTED,"Firestore shutting down"))}}function hw(){return new xo(t=>VS(t),bh)}async function mA(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new zL,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=ty(o,`Initialization of query '${Is(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&ny(n)}async function gA(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function qL(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&ny(n)}function WL(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function ny(t){t.Y_.forEach(e=>{e.next()})}var qp,dw;(dw=qp||(qp={})).ea="default",dw.Cache="cache";class yA{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new po(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==qp.Cache}}/**
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
 */class vA{constructor(e){this.key=e}}class _A{constructor(e){this.key=e}}class HL{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=FS(e),this.Ra=new Ys(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new cw,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),g=xh(this.query,f)?f:null,E=!!m&&this.mutatedKeys.has(m.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let b=!1;m&&g?m.data.isEqual(g.data)?E!==C&&(r.track({type:3,doc:g}),b=!0):this.ga(m,g)||(r.track({type:2,doc:g}),b=!0,(u&&this.Aa(g,u)>0||c&&this.Aa(g,c)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),b=!0):m&&!g&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(a=!0)),b&&(g?(o=o.add(g),s=C?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(g,E){const C=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return C(g)-C(E)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new po(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new cw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new _A(r))}),this.da.forEach(r=>{e.has(r)||n.push(new vA(r))}),n}ba(e){this.Ta=e.Ts,this.da=re();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return po.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class GL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class KL{constructor(e){this.key=e,this.va=!1}}class QL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new xo(a=>VS(a),bh),this.Ma=new Map,this.xa=new Set,this.Oa=new Ne(K.comparator),this.Na=new Map,this.La=new Gg,this.Ba={},this.ka=new Map,this.qa=fo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function YL(t,e,n=!0){const r=AA(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await wA(r,e,n,!0),i}async function XL(t,e){const n=AA(t);await wA(n,e,!0,!1)}async function wA(t,e,n,r){const i=await _L(t.localStore,zn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await JL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&uA(t.remoteStore,i),a}async function JL(t,e,n,r,i){t.Ka=(f,m,g)=>async function(C,b,I,w){let T=b.view.ma(I);T.ns&&(T=await ow(C.localStore,b.query,!1).then(({documents:_})=>b.view.ma(_,T)));const P=w&&w.targetChanges.get(b.targetId),V=w&&w.targetMismatches.get(b.targetId)!=null,L=b.view.applyChanges(T,C.isPrimaryClient,P,V);return pw(C,b.targetId,L.wa),L.snapshot}(t,f,m,g);const s=await ow(t.localStore,e,!0),o=new HL(e,s.Ts),a=o.ma(s.documents),u=Cl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);pw(t,n,c.wa);const d=new GL(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function ZL(t,e,n){const r=ee(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!bh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Bp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Yg(r.remoteStore,i.targetId),Wp(r,i.targetId)}).catch(Al)):(Wp(r,i.targetId),await Bp(r.localStore,i.targetId,!0))}async function eM(t,e){const n=ee(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yg(n.remoteStore,r.targetId))}async function tM(t,e,n){const r=lM(t);try{const i=await function(o,a){const u=ee(o),c=Ye.now(),d=a.reduce((g,E)=>g.add(E.key),re());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let E=gr(),C=re();return u.cs.getEntries(g,d).next(b=>{E=b,E.forEach((I,w)=>{w.isValidDocument()||(C=C.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,E)).next(b=>{f=b;const I=[];for(const w of a){const T=I4(w,f.get(w.key).overlayedDocument);T!=null&&I.push(new vi(w.key,T,bS(T.value.mapValue),kn.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,I,a)}).next(b=>{m=b;const I=b.applyToLocalDocumentSet(f,C);return u.documentOverlayCache.saveOverlays(g,b.batchId,I)})}).then(()=>({batchId:m.batchId,changes:US(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ne(ce)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await xl(r,i.changes),await Mh(r.remoteStore)}catch(i){const s=ty(i,"Failed to persist write");n.reject(s)}}async function EA(t,e){const n=ee(t);try{const r=await gL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?me(o.va):i.removedDocuments.size>0&&(me(o.va),o.va=!1))}),await xl(n,r,e)}catch(r){await Al(r)}}function fw(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ee(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&ny(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nM(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ne(K.comparator);o=o.insert(s,_t.newNoDocument(s,Z.min()));const a=re().add(s),u=new Oh(Z.min(),new Map,new Ne(ce),o,a);await EA(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),ry(r)}else await Bp(r.localStore,e,!1).then(()=>Wp(r,e,n)).catch(Al)}async function rM(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await mL(n.localStore,e);IA(n,r,null),TA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xl(n,i)}catch(i){await Al(i)}}async function iM(t,e,n){const r=ee(t);try{const i=await function(o,a){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(me(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);IA(r,e,n),TA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xl(r,i)}catch(i){await Al(i)}}function TA(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function IA(t,e,n){const r=ee(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Wp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||SA(t,r)})}function SA(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Yg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ry(t))}function pw(t,e,n){for(const r of n)r instanceof vA?(t.La.addReference(r.key,e),sM(t,r)):r instanceof _A?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||SA(t,r.key)):J()}function sM(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),ry(t))}function ry(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Te.fromString(e)),r=t.qa.next();t.Na.set(r,new KL(n)),t.Oa=t.Oa.insert(n,r),uA(t.remoteStore,new Hr(zn($g(n.path)),r,"TargetPurposeLimboResolution",Lg.oe))}}async function xl(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Qg.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=ee(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,m=>j.forEach(m.$i,g=>d.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>j.forEach(m.Ui,g=>d.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!kl(f))throw f;W("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const g=d.os.get(m),E=g.snapshotVersion,C=g.withLastLimboFreeSnapshotVersion(E);d.os=d.os.insert(m,C)}}}(r.localStore,s))}async function oM(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await sA(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new q(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xl(n,r.hs)}}function aM(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return re().add(r.key);{let i=re();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function AA(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=EA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nM.bind(null,e),e.Ca.d_=qL.bind(null,e.eventManager),e.Ca.$a=WL.bind(null,e.eventManager),e}function lM(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iM.bind(null,e),e}class zc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Dh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return pL(this.persistence,new dL,e.initialUser,this.serializer)}Ga(e){return new uL(Kg.Zr,this.serializer)}Wa(e){return new EL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zc.provider={build:()=>new zc};class Hp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oM.bind(null,this.syncEngine),await $L(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BL}()}createDatastore(e){const n=Dh(e.databaseInfo.databaseId),r=function(s){return new AL(s)}(e.databaseInfo);return function(s,o,a,u){return new CL(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new xL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>fw(this.syncEngine,n,0),function(){return lw.D()?new lw:new TL}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new QL(i,s,o,a,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await bl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Hp.provider={build:()=>new Hp};/**
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
 */class kA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):mr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class uM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=kS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ii;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ty(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cf(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cM(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>uw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>uw(e.remoteStore,i)),t._onlineComponents=e}async function cM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await cf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;lo("Error using user provided cache. Falling back to memory cache: "+n),await cf(t,new zc)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await cf(t,new zc);return t._offlineComponents}async function RA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await mw(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await mw(t,new Hp))),t._onlineComponents}function hM(t){return RA(t).then(e=>e.syncEngine)}async function Gp(t){const e=await RA(t),n=e.eventManager;return n.onListen=YL.bind(null,e.syncEngine),n.onUnlisten=ZL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=XL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eM.bind(null,e.syncEngine),n}function dM(t,e,n={}){const r=new ii;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new kA({next:m=>{d.Za(),o.enqueueAndForget(()=>gA(s,f)),m.fromCache&&u.source==="server"?c.reject(new q(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new yA(a,d,{includeMetadataChanges:!0,_a:!0});return mA(s,f)}(await Gp(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function CA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const gw=new Map;/**
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
 */function bA(t,e,n){if(!n)throw new q(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fM(t,e,n,r){if(e===!0&&r===!0)throw new q(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yw(t){if(!K.isDocumentKey(t))throw new q(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vw(t){if(K.isDocumentKey(t))throw new q(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function qn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vh(t);throw new q(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class _w{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _w({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _w(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ND;switch(r.type){case"firstParty":return new MD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gw.get(n);r&&(W("ComponentProvider","Removing Datastore"),gw.delete(n),r.terminate())}(this),Promise.resolve()}}function pM(t,e,n,r={}){var i;const s=(t=qn(t,Fh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&lo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=yt.MOCK_USER;else{a=$I(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new yt(c)}t._authCredentials=new OD(new AS(a,u))}}/**
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
 */class _i{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _i(this.firestore,e,this._query)}}class zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}}class si extends _i{constructor(e,n,r){super(e,n,$g(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new K(e))}withConverter(e){return new si(this.firestore,e,this._path)}}function mo(t,e,...n){if(t=Me(t),bA("collection","path",e),t instanceof Fh){const r=Te.fromString(e,...n);return vw(r),new si(t,null,r)}{if(!(t instanceof zt||t instanceof si))throw new q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return vw(r),new si(t.firestore,null,r)}}function Gu(t,e,...n){if(t=Me(t),arguments.length===1&&(e=kS.newId()),bA("doc","path",e),t instanceof Fh){const r=Te.fromString(e,...n);return yw(r),new zt(t,null,new K(r))}{if(!(t instanceof zt||t instanceof si))throw new q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return yw(r),new zt(t.firestore,t instanceof si?t.converter:null,new K(r))}}/**
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
 */class ww{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new aA(this,"async_queue_retry"),this.Vu=()=>{const r=uf();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=uf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=uf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ii;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!kl(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw mr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=ey.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Ew(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ts extends Fh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ww,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ww(e),this._firestoreClient=void 0,await e}}}function xA(t,e){const n=typeof t=="object"?t:Ah(),r=typeof t=="string"?t:"(default)",i=yi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=FI("firestore");s&&pM(i,...s)}return i}function iy(t){if(t._terminated)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||mM(t),t._firestoreClient}function mM(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new QD(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,CA(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new uM(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class go{constructor(e){this._byteString=e}static fromBase64String(e){try{return new go(lt.fromBase64String(e))}catch(n){throw new q(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new go(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class jh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sy{constructor(e){this._methodName=e}}/**
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
 */class oy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */class ay{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const gM=/^__.*__$/;class yM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Rl(e,this.data,n,this.fieldTransforms)}}class PA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function NA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class ly{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ly(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Bc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(NA(this.Cu)&&gM.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class vM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Dh(e)}Qu(e,n,r,i=!1){return new ly({Cu:e,methodName:n,qu:r,path:it.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uy(t){const e=t._freezeSettings(),n=Dh(t._databaseId);return new vM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _M(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);cy("Data must be an object, but it was:",o,r);const a=OA(r,o);let u,c;if(s.merge)u=new Kt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=Kp(e,f,n);if(!o.contains(m))throw new q(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);LA(d,m)||d.push(m)}u=new Kt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new yM(new Dt(a),u,c)}class Uh extends sy{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uh}}function wM(t,e,n,r){const i=t.Qu(1,e,n);cy("Data must be an object, but it was:",i,r);const s=[],o=Dt.empty();hs(r,(u,c)=>{const d=hy(e,u,n);c=Me(c);const f=i.Nu(d);if(c instanceof Uh)s.push(d);else{const m=Pl(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new Kt(s);return new PA(o,a,i.fieldTransforms)}function EM(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Kp(e,r,n)],u=[i];if(s.length%2!=0)throw new q(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Kp(e,s[m])),u.push(s[m+1]);const c=[],d=Dt.empty();for(let m=a.length-1;m>=0;--m)if(!LA(c,a[m])){const g=a[m];let E=u[m];E=Me(E);const C=o.Nu(g);if(E instanceof Uh)c.push(g);else{const b=Pl(E,C);b!=null&&(c.push(g),d.set(g,b))}}const f=new Kt(c);return new PA(d,f,o.fieldTransforms)}function TM(t,e,n,r=!1){return Pl(n,t.Qu(r?4:3,e))}function Pl(t,e){if(DA(t=Me(t)))return cy("Unsupported field value:",e,t),OA(t,e);if(t instanceof sy)return function(r,i){if(!NA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Pl(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return y4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ye.fromDate(r);return{timestampValue:Uc(i.serializer,s)}}if(r instanceof Ye){const s=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uc(i.serializer,s)}}if(r instanceof oy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof go)return{bytesValue:JS(i.serializer,r._byteString)};if(r instanceof zt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Hg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ay)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return zg(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Vh(r)}`)}(t,e)}function OA(t,e){const n={};return RS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(t,(r,i)=>{const s=Pl(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function DA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof oy||t instanceof go||t instanceof zt||t instanceof sy||t instanceof ay)}function cy(t,e,n){if(!DA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Vh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Kp(t,e,n){if((e=Me(e))instanceof jh)return e._internalPath;if(typeof e=="string")return hy(t,e);throw Bc("Field path arguments must be of type string or ",t,!1,void 0,n)}const IM=new RegExp("[~\\*/\\[\\]]");function hy(t,e,n){if(e.search(IM)>=0)throw Bc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jh(...e.split("."))._internalPath}catch{throw Bc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(F.INVALID_ARGUMENT,a+t+u)}function LA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class MA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SM extends MA{data(){return super.data()}}function dy(t,e){return typeof e=="string"?hy(t,e):e instanceof jh?e._internalPath:e._delegate._internalPath}/**
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
 */function VA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fy{}class FA extends fy{}function AM(t,e,...n){let r=[];e instanceof fy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof my).length,a=s.filter(u=>u instanceof py).length;if(o>1||o>0&&a>0)throw new q(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class py extends FA{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new py(e,n,r)}_apply(e){const n=this._parse(e);return jA(e._query,n),new _i(e.firestore,e.converter,Vp(e._query,n))}_parse(e){const n=uy(e.firestore);return function(s,o,a,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new q(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Iw(f,d);const g=[];for(const E of f)g.push(Tw(u,s,E));m={arrayValue:{values:g}}}else m=Tw(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Iw(f,d),m=TM(a,o,f,d==="in"||d==="not-in");return We.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class my extends fy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new my(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:xn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)jA(o,u),o=Vp(o,u)}(e._query,n),new _i(e.firestore,e.converter,Vp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gy extends FA{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new gy(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new q(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cl(s,o)}(e._query,this._field,this._direction);return new _i(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new bo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function kM(t,e="asc"){const n=e,r=dy("orderBy",t);return gy._create(r,n)}function Tw(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new q(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!MS(e)&&n.indexOf("/")!==-1)throw new q(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!K.isDocumentKey(r))throw new q(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return B0(t,new K(r))}if(n instanceof zt)return B0(t,n._key);throw new q(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vh(n)}.`)}function Iw(t,e){if(!Array.isArray(t)||t.length===0)throw new q(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class RM{convertValue(e,n="none"){switch(es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>je(o.doubleValue));return new ay(s)}convertGeoPoint(e){return new oy(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(al(e));default:return null}}convertTimestamp(e){const n=ui(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);me(iA(r));const i=new ll(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||mr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function CM(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class ga{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class UA extends MA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ku extends UA{data(e={}){return super.data(e)}}class $A{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ga(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ku(this._firestore,this._userDataWriter,r.key,r,new ga(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Ku(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ga(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Ku(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ga(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:bM(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class yy extends RM{constructor(e){super(),this.firestore=e}convertBytes(e){return new go(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,n)}}function xM(t){t=qn(t,_i);const e=qn(t.firestore,ts),n=iy(e),r=new yy(e);return VA(t._query),dM(n,t._query).then(i=>new $A(e,r,t,i))}function Sw(t,e,n,...r){t=qn(t,zt);const i=qn(t.firestore,ts),s=uy(i);let o;return o=typeof(e=Me(e))=="string"||e instanceof jh?EM(s,"updateDoc",t._key,e,n,r):wM(s,"updateDoc",t._key,e),vy(i,[o.toMutation(t._key,kn.exists(!0))])}function PM(t){return vy(qn(t.firestore,ts),[new Bg(t._key,kn.none())])}function $h(t,e){const n=qn(t.firestore,ts),r=Gu(t),i=CM(t.converter,e);return vy(n,[_M(uy(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,kn.exists(!1))]).then(()=>r)}function NM(t,...e){var n,r,i;t=Me(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ew(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Ew(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof zt)c=qn(t.firestore,ts),d=$g(t._key.path),u={next:f=>{e[o]&&e[o](OM(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=qn(t,_i);c=qn(f.firestore,ts),d=f._query;const m=new yy(c);u={next:g=>{e[o]&&e[o](new $A(c,m,f,g))},error:e[o+1],complete:e[o+2]},VA(t._query)}return function(m,g,E,C){const b=new kA(C),I=new yA(g,b,E);return m.asyncQueue.enqueueAndForget(async()=>mA(await Gp(m),I)),()=>{b.Za(),m.asyncQueue.enqueueAndForget(async()=>gA(await Gp(m),I))}}(iy(c),d,a,u)}function vy(t,e){return function(r,i){const s=new ii;return r.asyncQueue.enqueueAndForget(async()=>tM(await hM(r),i,s)),s.promise}(iy(t),e)}function OM(t,e,n){const r=n.docs.get(e._key),i=new yy(t);return new UA(t,i,e._key,r,new ga(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Co=i})(cs),bn(new fn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ts(new DD(r.getProvider("auth-internal")),new FD(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ll(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ut(F0,"4.7.3",e),Ut(F0,"4.7.3","esm2017")})();var Mt=function(){return Mt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Mt.apply(this,arguments)};function _y(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fl(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function zA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DM=zA,BA=new us("auth","Firebase",zA());/**
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
 */const qc=new Sh("@firebase/auth");function LM(t,...e){qc.logLevel<=oe.WARN&&qc.warn(`Auth (${cs}): ${t}`,...e)}function Qu(t,...e){qc.logLevel<=oe.ERROR&&qc.error(`Auth (${cs}): ${t}`,...e)}/**
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
 */function yr(t,...e){throw wy(t,...e)}function Wn(t,...e){return wy(t,...e)}function qA(t,e,n){const r=Object.assign(Object.assign({},DM()),{[e]:n});return new us("auth","Firebase",r).create(e,{appName:t.name})}function ji(t){return qA(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return BA.create(t,...e)}function X(t,e,...n){if(!t)throw wy(e,...n)}function ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qu(e),new Error(e)}function vr(t,e){t||ir(e)}/**
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
 */function Qp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MM(){return Aw()==="http:"||Aw()==="https:"}function Aw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function VM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MM()||zI()||"connection"in navigator)?navigator.onLine:!0}function FM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Nl{constructor(e,n){this.shortDelay=e,this.longDelay=n,vr(n>e,"Short delay should be less than long delay!"),this.isMobile=$N()||qN()}get(){return VM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ey(t,e){vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class WA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const UM=new Nl(3e4,6e4);function Ty(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function No(t,e,n,r,i={}){return HA(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Sl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return BN()||(c.referrerPolicy="no-referrer"),WA.fetch()(GA(t,t.config.apiHost,n,a),c)})}async function HA(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jM),e);try{const i=new zM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Au(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Au(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Au(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Au(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw qA(t,d,c);yr(t,d)}}catch(i){if(i instanceof mn)throw i;yr(t,"network-request-failed",{message:String(i)})}}async function $M(t,e,n,r,i={}){const s=await No(t,e,n,r,i);return"mfaPendingCredential"in s&&yr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function GA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ey(t.config,i):`${t.config.apiScheme}://${i}`}class zM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wn(this.auth,"network-request-failed")),UM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Au(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Wn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function BM(t,e){return No(t,"POST","/v1/accounts:delete",e)}async function KA(t,e){return No(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function La(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qM(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=Iy(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:La(hf(i.auth_time)),issuedAtTime:La(hf(i.iat)),expirationTime:La(hf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hf(t){return Number(t)*1e3}function Iy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qu("JWT malformed, contained fewer than 3 sections"),null;try{const i=MI(n);return i?JSON.parse(i):(Qu("Failed to decode base64 JWT payload"),null)}catch(i){return Qu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kw(t){const e=Iy(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&WM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class HM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=La(this.lastLoginAt),this.creationTime=La(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pl(t,KA(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?QA(s.providerUserInfo):[],a=KM(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function GM(t){const e=Me(t);await Wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function QA(t){return t.map(e=>{var{providerId:n}=e,r=_y(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function QM(t,e){const n=await HA(t,{},async()=>{const r=Sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=GA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",WA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YM(t,e){return No(t,"POST","/v2/accounts:revokeToken",Ty(t,e))}/**
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
 */class Xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=kw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Xs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xs,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
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
 */function br(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_y(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pl(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qM(this,e)}reload(){return GM(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wr(this.auth.app))return Promise.reject(ji(this.auth));const e=await this.getIdToken();return await pl(this,BM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:T,emailVerified:P,isAnonymous:V,providerData:L,stsTokenManager:_}=n;X(T&&_,e,"internal-error");const v=Xs.fromJSON(this.name,_);X(typeof T=="string",e,"internal-error"),br(f,e.name),br(m,e.name),X(typeof P=="boolean",e,"internal-error"),X(typeof V=="boolean",e,"internal-error"),br(g,e.name),br(E,e.name),br(C,e.name),br(b,e.name),br(I,e.name),br(w,e.name);const S=new sr({uid:T,auth:e,email:m,emailVerified:P,displayName:f,isAnonymous:V,photoURL:E,phoneNumber:g,tenantId:C,stsTokenManager:v,createdAt:I,lastLoginAt:w});return L&&Array.isArray(L)&&(S.providerData=L.map(R=>Object.assign({},R))),b&&(S._redirectEventId=b),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Xs;i.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?QA(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Xs;a.updateFromIdToken(r);const u=new sr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Yp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Rw=new Map;function or(t){vr(t instanceof Function,"Expected a class definition");let e=Rw.get(t);return e?(vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rw.set(t,e),e)}/**
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
 */class YA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}YA.type="NONE";const Cw=YA;/**
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
 */function Yu(t,e,n){return`firebase:${t}:${e}:${n}`}class Js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Js(or(Cw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||or(Cw);const o=Yu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=sr._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Js(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Js(s,e,r))}}/**
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
 */function bw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ek(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nk(e))return"Blackberry";if(rk(e))return"Webos";if(JA(e))return"Safari";if((e.includes("chrome/")||ZA(e))&&!e.includes("edge/"))return"Chrome";if(tk(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function XA(t=Et()){return/firefox\//i.test(t)}function JA(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ZA(t=Et()){return/crios\//i.test(t)}function ek(t=Et()){return/iemobile/i.test(t)}function tk(t=Et()){return/android/i.test(t)}function nk(t=Et()){return/blackberry/i.test(t)}function rk(t=Et()){return/webos/i.test(t)}function Sy(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XM(t=Et()){var e;return Sy(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JM(){return WN()&&document.documentMode===10}function ik(t=Et()){return Sy(t)||tk(t)||rk(t)||nk(t)||/windows phone/i.test(t)||ek(t)}/**
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
 */function sk(t,e=[]){let n;switch(t){case"Browser":n=bw(Et());break;case"Worker":n=`${bw(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${r}`}/**
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
 */class ZM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function eV(t,e={}){return No(t,"GET","/v2/passwordPolicy",Ty(t,e))}/**
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
 */const tV=6;class nV{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class rV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xw(this),this.idTokenSubscription=new xw(this),this.beforeStateQueue=new ZM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=or(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await KA(this,{idToken:e}),r=await sr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Wr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wr(this.app))return Promise.reject(ji(this));const n=e?Me(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wr(this.app)?Promise.reject(ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wr(this.app)?Promise.reject(ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eV(this),n=new nV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&or(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ay(t){return Me(t)}class xw{constructor(e){this.auth=e,this.observer=null,this.addObserver=JN(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ky={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iV(t){ky=t}function sV(t){return ky.loadJS(t)}function oV(){return ky.gapiScript}function aV(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function lV(t,e){const n=yi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(il(s,e??{}))return i;yr(i,"already-initialized")}return n.initialize({options:e})}function uV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cV(t,e,n){const r=Ay(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ok(e),{host:o,port:a}=hV(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),dV()}function ok(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hV(t){const e=ok(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Pw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Pw(o)}}}function Pw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ak{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,n){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}/**
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
 */async function Zs(t,e){return $M(t,"POST","/v1/accounts:signInWithIdp",Ty(t,e))}/**
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
 */const fV="http://localhost";class ns extends ak{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_y(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ns(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zs(e,n)}buildRequest(){const e={requestUri:fV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Sl(n)}return e}}/**
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
 */class lk{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ol extends lk{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vr extends Ol{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vr.PROVIDER_ID="facebook.com";/**
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
 */class Fr extends Ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fr.credential(n,r)}catch{return null}}}Fr.GOOGLE_SIGN_IN_METHOD="google.com";Fr.PROVIDER_ID="google.com";/**
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
 */class jr extends Ol{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.GITHUB_SIGN_IN_METHOD="github.com";jr.PROVIDER_ID="github.com";/**
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
 */class Ur extends Ol{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ur.credential(n,r)}catch{return null}}}Ur.TWITTER_SIGN_IN_METHOD="twitter.com";Ur.PROVIDER_ID="twitter.com";/**
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
 */class yo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=Nw(r);return new yo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Nw(r);return new yo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Nw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Hc extends mn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Hc(e,n,r,i)}}function uk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hc._fromErrorAndOperation(t,s,e,r):s})}async function pV(t,e,n=!1){const r=await pl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yo._forOperation(t,"link",r)}/**
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
 */async function mV(t,e,n=!1){const{auth:r}=t;if(Wr(r.app))return Promise.reject(ji(r));const i="reauthenticate";try{const s=await pl(t,uk(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Iy(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),yo._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&yr(r,"user-mismatch"),s}}/**
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
 */async function gV(t,e,n=!1){if(Wr(t.app))return Promise.reject(ji(t));const r="signIn",i=await uk(t,r,e),s=await yo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function yV(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function vV(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}const Gc="__sak";/**
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
 */class ck{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gc,"1"),this.storage.removeItem(Gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _V=1e3,wV=10;class hk extends ck{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ik(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);JM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wV):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_V)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hk.type="LOCAL";const EV=hk;/**
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
 */class dk extends ck{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dk.type="SESSION";const fk=dk;/**
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
 */function TV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await TV(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zh.receivers=[];/**
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
 */function Ry(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class IV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Ry("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Hn(){return window}function SV(t){Hn().location.href=t}/**
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
 */function pk(){return typeof Hn().WorkerGlobalScope<"u"&&typeof Hn().importScripts=="function"}async function AV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RV(){return pk()?self:null}/**
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
 */const mk="firebaseLocalStorageDb",CV=1,Kc="firebaseLocalStorage",gk="fbase_key";class Dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bh(t,e){return t.transaction([Kc],e?"readwrite":"readonly").objectStore(Kc)}function bV(){const t=indexedDB.deleteDatabase(mk);return new Dl(t).toPromise()}function Xp(){const t=indexedDB.open(mk,CV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kc,{keyPath:gk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kc)?e(r):(r.close(),await bV(),e(await Xp()))})})}async function Ow(t,e,n){const r=Bh(t,!0).put({[gk]:e,value:n});return new Dl(r).toPromise()}async function xV(t,e){const n=Bh(t,!1).get(e),r=await new Dl(n).toPromise();return r===void 0?null:r.value}function Dw(t,e){const n=Bh(t,!0).delete(e);return new Dl(n).toPromise()}const PV=800,NV=3;class yk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zh._getInstance(RV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AV(),!this.activeServiceWorker)return;this.sender=new IV(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xp();return await Ow(e,Gc,"1"),await Dw(e,Gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ow(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xV(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bh(i,!1).getAll();return new Dl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yk.type="LOCAL";const OV=yk;new Nl(3e4,6e4);/**
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
 */function DV(t,e){return e?or(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Cy extends ak{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LV(t){return gV(t.auth,new Cy(t),t.bypassAuthState)}function MV(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),mV(n,new Cy(t),t.bypassAuthState)}async function VV(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),pV(n,new Cy(t),t.bypassAuthState)}/**
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
 */class vk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LV;case"linkViaPopup":case"linkViaRedirect":return VV;case"reauthViaPopup":case"reauthViaRedirect":return MV;default:yr(this.auth,"internal-error")}}resolve(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FV=new Nl(2e3,1e4);class Us extends vk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Us.currentPopupAction&&Us.currentPopupAction.cancel(),Us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){vr(this.filter.length===1,"Popup operations only handle one event");const e=Ry();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FV.get())};e()}}Us.currentPopupAction=null;/**
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
 */const jV="pendingRedirect",Xu=new Map;class UV extends vk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xu.get(this.auth._key());if(!e){try{const r=await $V(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xu.set(this.auth._key(),e)}return this.bypassAuthState||Xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $V(t,e){const n=qV(e),r=BV(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function zV(t,e){Xu.set(t._key(),e)}function BV(t){return or(t._redirectPersistence)}function qV(t){return Yu(jV,t.config.apiKey,t.name)}async function WV(t,e,n=!1){if(Wr(t.app))return Promise.reject(ji(t));const r=Ay(t),i=DV(r,e),o=await new UV(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const HV=10*60*1e3;class GV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_k(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HV&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lw(e))}saveEventToCache(e){this.cachedEventUids.add(Lw(e)),this.lastProcessedEventTime=Date.now()}}function Lw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _k({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _k(t);default:return!1}}/**
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
 */async function QV(t,e={}){return No(t,"GET","/v1/projects",e)}/**
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
 */const YV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XV=/^https?/;async function JV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QV(t);for(const n of e)try{if(ZV(n))return}catch{}yr(t,"unauthorized-domain")}function ZV(t){const e=Qp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XV.test(n))return!1;if(YV.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const e6=new Nl(3e4,6e4);function Mw(){const t=Hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function t6(t){return new Promise((e,n)=>{var r,i,s;function o(){Mw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mw(),n(Wn(t,"network-request-failed"))},timeout:e6.get()})}if(!((i=(r=Hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Hn().gapi)===null||s===void 0)&&s.load)o();else{const a=aV("iframefcb");return Hn()[a]=()=>{gapi.load?o():n(Wn(t,"network-request-failed"))},sV(`${oV()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Ju=null,e})}let Ju=null;function n6(t){return Ju=Ju||t6(t),Ju}/**
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
 */const r6=new Nl(5e3,15e3),i6="__/auth/iframe",s6="emulator/auth/iframe",o6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},a6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function l6(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ey(e,s6):`https://${t.config.authDomain}/${i6}`,r={apiKey:e.apiKey,appName:t.name,v:cs},i=a6.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Sl(r).slice(1)}`}async function u6(t){const e=await n6(t),n=Hn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:l6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:o6,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Wn(t,"network-request-failed"),a=Hn().setTimeout(()=>{s(o)},r6.get());function u(){Hn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const c6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},h6=500,d6=600,f6="_blank",p6="http://localhost";class Vw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function m6(t,e,n,r=h6,i=d6){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},c6),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Et().toLowerCase();n&&(a=ZA(c)?f6:n),XA(c)&&(e=e||p6,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[g,E])=>`${m}${g}=${E},`,"");if(XM(c)&&a!=="_self")return g6(e||"",a),new Vw(null);const f=window.open(e||"",a,d);X(f,t,"popup-blocked");try{f.focus()}catch{}return new Vw(f)}function g6(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const y6="__/auth/handler",v6="emulator/auth/handler",_6=encodeURIComponent("fac");async function Fw(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cs,eventId:i};if(e instanceof lk){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Ol){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${_6}=${encodeURIComponent(u)}`:"";return`${w6(t)}?${Sl(a).slice(1)}${c}`}function w6({config:t}){return t.emulator?Ey(t,v6):`https://${t.authDomain}/${y6}`}/**
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
 */const df="webStorageSupport";class E6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fk,this._completeRedirectFn=WV,this._overrideRedirectResult=zV}async _openPopup(e,n,r,i){var s;vr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Fw(e,n,r,Qp(),i);return m6(e,o,Ry())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Fw(e,n,r,Qp(),i);return SV(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await u6(e),r=new GV(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(df,{type:df},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[df];o!==void 0&&n(!!o),yr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ik()||JA()||Sy()}}const T6=E6;var jw="@firebase/auth",Uw="1.7.9";/**
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
 */class I6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function S6(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function A6(t){bn(new fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sk(t)},c=new rV(r,i,s,u);return uV(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bn(new fn("auth-internal",e=>{const n=Ay(e.getProvider("auth").getImmediate());return(r=>new I6(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(jw,Uw,S6(t)),Ut(jw,Uw,"esm2017")}/**
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
 */const k6=5*60,R6=UI("authIdTokenMaxAge")||k6;let $w=null;const C6=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>R6)return;const i=n==null?void 0:n.token;$w!==i&&($w=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function b6(t=Ah()){const e=yi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lV(t,{popupRedirectResolver:T6,persistence:[OV,EV,fk]}),r=UI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=C6(s.toString());vV(n,o,()=>o(n.currentUser)),yV(n,a=>o(a))}}const i=VI("auth");return i&&cV(n,`http://${i}`),n}function x6(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}iV({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",x6().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});A6("Browser");const P6={apiKey:"AIzaSyB5QFjl6jvIKBCRn12esrOba58STMP9dM0",authDomain:"galeriazdjec-f4180.firebaseapp.com",projectId:"galeriazdjec-f4180",storageBucket:"galeriazdjec-f4180.appspot.com",messagingSenderId:"789024046392",appId:"1:789024046392:web:26d9e3195917ed28e515cd",measurementId:"G-WX9ZBHXLSD"},by=KI(P6);CD(by);const $r=xA(by);b6(by);function wk(){const[t,e]=D.useState(""),n=async i=>{try{await $h(mo($r,"tasks"),{text:i,completed:!1,timestamp:new Date}),console.log("Task added to Firestore!")}catch(s){console.error("Error adding task: ",s)}},r=i=>{i.preventDefault(),t.trim()&&(n(t),e(""))};return A.jsxs("form",{className:"flex flex-col space-y-2  !important",onSubmit:r,children:[A.jsx("input",{type:"text",className:"mt-[1px] border border-gray-300 w-[165px] rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow shadow-sm hover:shadow-md",placeholder:"What is the task today?",value:t,onChange:i=>e(i.target.value)}),A.jsx("button",{type:"submit",className:"px-4 py-0.5 mb-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75",children:"Add Task"})]})}wk.propTypes={};const zw=()=>{};let xy={},Ek={},Tk=null,Ik={mark:zw,measure:zw};try{typeof window<"u"&&(xy=window),typeof document<"u"&&(Ek=document),typeof MutationObserver<"u"&&(Tk=MutationObserver),typeof performance<"u"&&(Ik=performance)}catch{}const{userAgent:Bw=""}=xy.navigator||{},hi=xy,Se=Ek,qw=Tk,ku=Ik;hi.document;const Ir=!!Se.documentElement&&!!Se.head&&typeof Se.addEventListener=="function"&&typeof Se.createElement=="function",Sk=~Bw.indexOf("MSIE")||~Bw.indexOf("Trident/");var Ce="classic",Ak="duotone",Jt="sharp",Zt="sharp-duotone",N6=[Ce,Ak,Jt,Zt],O6={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Ww={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},D6=["kit"],L6=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,M6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,V6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},F6={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},j6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},U6={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},$6={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},z6={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},kk={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},B6=["solid","regular","light","thin","duotone","brands"],Rk=[1,2,3,4,5,6,7,8,9,10],q6=Rk.concat([11,12,13,14,15,16,17,18,19,20]),ya={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},W6=[...Object.keys(U6),...B6,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ya.GROUP,ya.SWAP_OPACITY,ya.PRIMARY,ya.SECONDARY].concat(Rk.map(t=>"".concat(t,"x"))).concat(q6.map(t=>"w-".concat(t))),H6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},G6={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},K6={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Hw={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const _r="___FONT_AWESOME___",Jp=16,Ck="fa",bk="svg-inline--fa",rs="data-fa-i2svg",Zp="data-fa-pseudo-element",Q6="data-fa-pseudo-element-pending",Py="data-prefix",Ny="data-icon",Gw="fontawesome-i2svg",Y6="async",X6=["HTML","HEAD","STYLE","SCRIPT"],xk=(()=>{try{return!0}catch{return!1}})(),Pk=[Ce,Jt,Zt];function Ll(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Ce]}})}const Nk={...kk};Nk[Ce]={...kk[Ce],...Ww.kit,...Ww["kit-duotone"]};const Ui=Ll(Nk),em={...z6};em[Ce]={...em[Ce],...Hw.kit,...Hw["kit-duotone"]};const ml=Ll(em),tm={...$6};tm[Ce]={...tm[Ce],...K6.kit};const $i=Ll(tm),nm={...j6};nm[Ce]={...nm[Ce],...G6.kit};const J6=Ll(nm),Z6=L6,Ok="fa-layers-text",eF=M6,tF={...O6};Ll(tF);const nF=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ff=ya,vo=new Set;Object.keys(ml[Ce]).map(vo.add.bind(vo));Object.keys(ml[Jt]).map(vo.add.bind(vo));Object.keys(ml[Zt]).map(vo.add.bind(vo));const rF=[...D6,...W6],Ma=hi.FontAwesomeConfig||{};function iF(t){var e=Se.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function sF(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Se&&typeof Se.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=sF(iF(n));i!=null&&(Ma[r]=i)});const Dk={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ck,replacementClass:bk,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ma.familyPrefix&&(Ma.cssPrefix=Ma.familyPrefix);const _o={...Dk,...Ma};_o.autoReplaceSvg||(_o.observeMutations=!1);const H={};Object.keys(Dk).forEach(t=>{Object.defineProperty(H,t,{enumerable:!0,set:function(e){_o[t]=e,Va.forEach(n=>n(H))},get:function(){return _o[t]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(t){_o.cssPrefix=t,Va.forEach(e=>e(H))},get:function(){return _o.cssPrefix}});hi.FontAwesomeConfig=H;const Va=[];function oF(t){return Va.push(t),()=>{Va.splice(Va.indexOf(t),1)}}const xr=Jp,Vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function aF(t){if(!t||!Ir)return;const e=Se.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Se.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Se.head.insertBefore(e,r),t}const lF="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gl(){let t=12,e="";for(;t-- >0;)e+=lF[Math.random()*62|0];return e}function Oo(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Oy(t){return t.classList?Oo(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Lk(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uF(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Lk(t[n]),'" '),"").trim()}function qh(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Dy(t){return t.size!==Vn.size||t.x!==Vn.x||t.y!==Vn.y||t.rotate!==Vn.rotate||t.flipX||t.flipY}function cF(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function hF(t){let{transform:e,width:n=Jp,height:r=Jp,startCentered:i=!1}=t,s="";return i&&Sk?s+="translate(".concat(e.x/xr-n/2,"em, ").concat(e.y/xr-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/xr,"em), calc(-50% + ").concat(e.y/xr,"em)) "):s+="translate(".concat(e.x/xr,"em, ").concat(e.y/xr,"em) "),s+="scale(".concat(e.size/xr*(e.flipX?-1:1),", ").concat(e.size/xr*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var dF=`:root, :host {
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
}`;function Mk(){const t=Ck,e=bk,n=H.cssPrefix,r=H.replacementClass;let i=dF;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Kw=!1;function pf(){H.autoAddCss&&!Kw&&(aF(Mk()),Kw=!0)}var fF={mixout(){return{dom:{css:Mk,insertCss:pf}}},hooks(){return{beforeDOMElementCreation(){pf()},beforeI2svg(){pf()}}}};const wr=hi||{};wr[_r]||(wr[_r]={});wr[_r].styles||(wr[_r].styles={});wr[_r].hooks||(wr[_r].hooks={});wr[_r].shims||(wr[_r].shims=[]);var Fn=wr[_r];const Vk=[],Fk=function(){Se.removeEventListener("DOMContentLoaded",Fk),Qc=1,Vk.map(t=>t())};let Qc=!1;Ir&&(Qc=(Se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Se.readyState),Qc||Se.addEventListener("DOMContentLoaded",Fk));function pF(t){Ir&&(Qc?setTimeout(t,0):Vk.push(t))}function Ml(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Lk(t):"<".concat(e," ").concat(uF(n),">").concat(r.map(Ml).join(""),"</").concat(e,">")}function Qw(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var mf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,u,c,d;for(r===void 0?(u=1,d=e[s[0]]):(u=0,d=r);u<o;u++)c=s[u],d=a(d,e[c],c,e);return d};function mF(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function rm(t){const e=mF(t);return e.length===1?e[0].toString(16):null}function gF(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Yw(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function im(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Yw(e);typeof Fn.hooks.addPack=="function"&&!r?Fn.hooks.addPack(t,Yw(e)):Fn.styles[t]={...Fn.styles[t]||{},...i},t==="fas"&&im("fa",e)}const{styles:bi,shims:yF}=Fn,vF={[Ce]:Object.values($i[Ce]),[Jt]:Object.values($i[Jt]),[Zt]:Object.values($i[Zt])};let Ly=null,jk={},Uk={},$k={},zk={},Bk={};const _F={[Ce]:Object.keys(Ui[Ce]),[Jt]:Object.keys(Ui[Jt]),[Zt]:Object.keys(Ui[Zt])};function wF(t){return~rF.indexOf(t)}function EF(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!wF(i)?i:null}const qk=()=>{const t=r=>mf(bi,(i,s,o)=>(i[o]=mf(s,r,{}),i),{});jk=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),Uk=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),Bk=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in bi||H.autoFetchSvg,n=mf(yF,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});$k=n.names,zk=n.unicodes,Ly=Wh(H.styleDefault,{family:H.familyDefault})};oF(t=>{Ly=Wh(t.styleDefault,{family:H.familyDefault})});qk();function My(t,e){return(jk[t]||{})[e]}function TF(t,e){return(Uk[t]||{})[e]}function Gr(t,e){return(Bk[t]||{})[e]}function Wk(t){return $k[t]||{prefix:null,iconName:null}}function IF(t){const e=zk[t],n=My("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function di(){return Ly}const Vy=()=>({prefix:null,iconName:null,rest:[]});function Wh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ce}=e,r=Ui[n][t],i=ml[n][t]||ml[n][r],s=t in Fn.styles?t:null;return i||s||null}const SF={[Ce]:Object.keys($i[Ce]),[Jt]:Object.keys($i[Jt]),[Zt]:Object.keys($i[Zt])};function Hh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Ce]:"".concat(H.cssPrefix,"-").concat(Ce),[Jt]:"".concat(H.cssPrefix,"-").concat(Jt),[Zt]:"".concat(H.cssPrefix,"-").concat(Zt)};let i=null,s=Ce;const o=N6.filter(u=>u!==Ak);o.forEach(u=>{(t.includes(r[u])||t.some(c=>SF[u].includes(c)))&&(s=u)});const a=t.reduce((u,c)=>{const d=EF(H.cssPrefix,c);if(bi[c]?(c=vF[s].includes(c)?J6[s][c]:c,i=c,u.prefix=c):_F[s].indexOf(c)>-1?(i=c,u.prefix=Wh(c,{family:s})):d?u.iconName=d:c!==H.replacementClass&&!o.some(f=>c===r[f])&&u.rest.push(c),!n&&u.prefix&&u.iconName){const f=i==="fa"?Wk(u.iconName):{},m=Gr(u.prefix,u.iconName);f.prefix&&(i=null),u.iconName=f.iconName||m||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!bi.far&&bi.fas&&!H.autoFetchSvg&&(u.prefix="fas")}return u},Vy());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===Jt&&(bi.fass||H.autoFetchSvg)&&(a.prefix="fass",a.iconName=Gr(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===Zt&&(bi.fasds||H.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Gr(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=di()||"fas"),a}class AF{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},im(s,i[s]);const o=$i[Ce][s];o&&im(o,i[s]),qk()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],u=a[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let Xw=[],$s={};const eo={},kF=Object.keys(eo);function RF(t,e){let{mixoutsTo:n}=e;return Xw=t,$s={},Object.keys(eo).forEach(r=>{kF.indexOf(r)===-1&&delete eo[r]}),Xw.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{$s[o]||($s[o]=[]),$s[o].push(s[o])})}r.provides&&r.provides(eo)}),n}function sm(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return($s[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function is(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];($s[t]||[]).forEach(s=>{s.apply(null,n)})}function fi(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return eo[t]?eo[t].apply(null,e):void 0}function om(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||di();if(e)return e=Gr(n,e)||e,Qw(Hk.definitions,n,e)||Qw(Fn.styles,n,e)}const Hk=new AF,CF=()=>{H.autoReplaceSvg=!1,H.observeMutations=!1,is("noAuto")},bF={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ir?(is("beforeI2svg",t),fi("pseudoElements2svg",t),fi("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,pF(()=>{PF({autoReplaceSvgRoot:e}),is("watch",t)})}},xF={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Gr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Wh(t[0]);return{prefix:n,iconName:Gr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(H.cssPrefix,"-"))>-1||t.match(Z6))){const e=Hh(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||di(),iconName:Gr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=di();return{prefix:e,iconName:Gr(e,t)||t}}}},rn={noAuto:CF,config:H,dom:bF,parse:xF,library:Hk,findIconDefinition:om,toHtml:Ml},PF=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Se}=t;(Object.keys(Fn.styles).length>0||H.autoFetchSvg)&&Ir&&H.autoReplaceSvg&&rn.dom.i2svg({node:e})};function Gh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ml(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Ir)return;const n=Se.createElement("div");return n.innerHTML=t.html,n.children}}),t}function NF(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Dy(o)&&n.found&&!r.found){const{width:a,height:u}=n,c={x:a/u/2,y:.5};i.style=qh({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function OF(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(H.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function Fy(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:u,titleId:c,extra:d,watchable:f=!1}=t,{width:m,height:g}=n.found?n:e,E=r==="fak",C=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(V=>d.classes.indexOf(V)===-1).filter(V=>V!==""||!!V).concat(d.classes).join(" ");let b={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:C,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)}};const I=E&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};f&&(b.attributes[rs]=""),a&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||gl())},children:[a]}),delete b.attributes.title);const w={...b,prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:{...I,...d.styles}},{children:T,attributes:P}=n.found&&e.found?fi("generateAbstractMask",w)||{children:[],attributes:{}}:fi("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=T,w.attributes=P,o?OF(w):NF(w)}function Jw(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,u={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(u[rs]="");const c={...o.styles};Dy(i)&&(c.transform=hF({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=qh(c);d.length>0&&(u.style=d);const f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function DF(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=qh(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:gf}=Fn;function am(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(ff.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(ff.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(ff.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const LF={found:!1,width:512,height:512};function MF(t,e){!xk&&!H.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function lm(t,e){let n=e;return e==="fa"&&H.styleDefault!==null&&(e=di()),new Promise((r,i)=>{if(n==="fa"){const s=Wk(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&gf[e]&&gf[e][t]){const s=gf[e][t];return r(am(s))}MF(t,e),r({...LF,icon:H.showMissingIcons&&t?fi("missingIconAbstract")||{}:{}})})}const Zw=()=>{},um=H.measurePerformance&&ku&&ku.mark&&ku.measure?ku:{mark:Zw,measure:Zw},va='FA "6.6.0"',VF=t=>(um.mark("".concat(va," ").concat(t," begins")),()=>Gk(t)),Gk=t=>{um.mark("".concat(va," ").concat(t," ends")),um.measure("".concat(va," ").concat(t),"".concat(va," ").concat(t," begins"),"".concat(va," ").concat(t," ends"))};var jy={begin:VF,end:Gk};const Zu=()=>{};function e1(t){return typeof(t.getAttribute?t.getAttribute(rs):null)=="string"}function FF(t){const e=t.getAttribute?t.getAttribute(Py):null,n=t.getAttribute?t.getAttribute(Ny):null;return e&&n}function jF(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(H.replacementClass)}function UF(){return H.autoReplaceSvg===!0?ec.replace:ec[H.autoReplaceSvg]||ec.replace}function $F(t){return Se.createElementNS("http://www.w3.org/2000/svg",t)}function zF(t){return Se.createElement(t)}function Kk(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?$F:zF}=e;if(typeof t=="string")return Se.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(Kk(s,{ceFn:n}))}),r}function BF(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ec={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Kk(n),e)}),e.getAttribute(rs)===null&&H.keepOriginalSource){let n=Se.createComment(BF(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Oy(e).indexOf(H.replacementClass))return ec.replace(t);const r=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===H.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Ml(s)).join(`
`);e.setAttribute(rs,""),e.innerHTML=i}};function t1(t){t()}function Qk(t,e){const n=typeof e=="function"?e:Zu;if(t.length===0)n();else{let r=t1;H.mutateApproach===Y6&&(r=hi.requestAnimationFrame||t1),r(()=>{const i=UF(),s=jy.begin("mutate");t.map(i),s(),n()})}}let Uy=!1;function Yk(){Uy=!0}function cm(){Uy=!1}let Yc=null;function n1(t){if(!qw||!H.observeMutations)return;const{treeCallback:e=Zu,nodeCallback:n=Zu,pseudoElementsCallback:r=Zu,observeMutationsRoot:i=Se}=t;Yc=new qw(s=>{if(Uy)return;const o=di();Oo(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!e1(a.addedNodes[0])&&(H.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&H.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&e1(a.target)&&~nF.indexOf(a.attributeName))if(a.attributeName==="class"&&FF(a.target)){const{prefix:u,iconName:c}=Hh(Oy(a.target));a.target.setAttribute(Py,u||o),c&&a.target.setAttribute(Ny,c)}else jF(a.target)&&n(a.target)})}),Ir&&Yc.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function qF(){Yc&&Yc.disconnect()}function WF(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function HF(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Hh(Oy(t));return i.prefix||(i.prefix=di()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=TF(i.prefix,t.innerText)||My(i.prefix,rm(t.innerText))),!i.iconName&&H.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function GF(t){const e=Oo(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return H.autoA11y&&(n?e["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||gl()):(e["aria-hidden"]="true",e.focusable="false")),e}function KF(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function r1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=HF(t),s=GF(t),o=sm("parseNodeAttributes",{},t);let a=e.styleParser?WF(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:QF}=Fn;function Xk(t){const e=H.autoReplaceSvg==="nest"?r1(t,{styleParser:!1}):r1(t);return~e.extra.classes.indexOf(Ok)?fi("generateLayersText",t,e):fi("generateSvgReplacementMutation",t,e)}let Kn=new Set;Pk.map(t=>{Kn.add("fa-".concat(t))});Object.keys(Ui[Ce]).map(Kn.add.bind(Kn));Object.keys(Ui[Jt]).map(Kn.add.bind(Kn));Object.keys(Ui[Zt]).map(Kn.add.bind(Kn));Kn=[...Kn];function i1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ir)return Promise.resolve();const n=Se.documentElement.classList,r=d=>n.add("".concat(Gw,"-").concat(d)),i=d=>n.remove("".concat(Gw,"-").concat(d)),s=H.autoFetchSvg?Kn:Pk.map(d=>"fa-".concat(d)).concat(Object.keys(QF));s.includes("fa")||s.push("fa");const o=[".".concat(Ok,":not([").concat(rs,"])")].concat(s.map(d=>".".concat(d,":not([").concat(rs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Oo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const u=jy.begin("onTree"),c=a.reduce((d,f)=>{try{const m=Xk(f);m&&d.push(m)}catch(m){xk||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,f)=>{Promise.all(c).then(m=>{Qk(m,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),f(m)})})}function YF(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xk(t).then(n=>{n&&Qk([n],e)})}function XF(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:om(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:om(i||{})),t(r,{...n,mask:i})}}const JF=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Vn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:u=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:f,iconName:m,icon:g}=t;return Gh({type:"icon",...t},()=>(is("beforeDOMElementCreation",{iconDefinition:t,params:e}),H.autoA11y&&(o?c["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(a||gl()):(c["aria-hidden"]="true",c.focusable="false")),Fy({icons:{main:am(g),mask:i?am(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:m,transform:{...Vn,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:d,classes:u}})))};var ZF={mixout(){return{icon:XF(JF)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=i1,t.nodeCallback=YF,t}}},provides(t){t.i2svg=function(e){const{node:n=Se,callback:r=()=>{}}=e;return i1(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:u,mask:c,maskId:d,extra:f}=n;return new Promise((m,g)=>{Promise.all([lm(r,o),c.iconName?lm(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[C,b]=E;m([e,Fy({icons:{main:C,mask:b},prefix:o,iconName:r,transform:a,symbol:u,maskId:d,title:i,titleId:s,extra:f,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=qh(o);a.length>0&&(r.style=a);let u;return Dy(s)&&(u=fi("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},e3={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Gh({type:"layer"},()=>{is("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},t3={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Gh({type:"counter",content:t},()=>(is("beforeDOMElementCreation",{content:t,params:e}),DF({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(H.cssPrefix,"-layers-counter"),...r]}})))}}}},n3={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Vn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Gh({type:"text",content:t},()=>(is("beforeDOMElementCreation",{content:t,params:e}),Jw({content:t,transform:{...Vn,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(H.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(Sk){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,a=c.height/u}return H.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Jw({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const r3=new RegExp('"',"ug"),s1=[1105920,1112319],o1={FontAwesome:{normal:"fas",400:"fas"},...F6,...V6,...H6},hm=Object.keys(o1).reduce((t,e)=>(t[e.toLowerCase()]=o1[e],t),{}),i3=Object.keys(hm).reduce((t,e)=>{const n=hm[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function s3(t){const e=t.replace(r3,""),n=gF(e,0),r=n>=s1[0]&&n<=s1[1],i=e.length===2?e[0]===e[1]:!1;return{value:rm(i?e[0]:e),isSecondary:r||i}}function o3(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(hm[n]||{})[i]||i3[n]}function a1(t,e){const n="".concat(Q6).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Oo(t.children).filter(m=>m.getAttribute(Zp)===e)[0],a=hi.getComputedStyle(t,e),u=a.getPropertyValue("font-family"),c=u.match(eF),d=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&f!=="none"&&f!==""){const m=a.getPropertyValue("content");let g=o3(u,d);const{value:E,isSecondary:C}=s3(m),b=c[0].startsWith("FontAwesome");let I=My(g,E),w=I;if(b){const T=IF(E);T.iconName&&T.prefix&&(I=T.iconName,g=T.prefix)}if(I&&!C&&(!o||o.getAttribute(Py)!==g||o.getAttribute(Ny)!==w)){t.setAttribute(n,w),o&&t.removeChild(o);const T=KF(),{extra:P}=T;P.attributes[Zp]=e,lm(I,g).then(V=>{const L=Fy({...T,icons:{main:V,mask:Vy()},prefix:g,iconName:w,extra:P,watchable:!0}),_=Se.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(_,t.firstChild):t.appendChild(_),_.outerHTML=L.map(v=>Ml(v)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function a3(t){return Promise.all([a1(t,"::before"),a1(t,"::after")])}function l3(t){return t.parentNode!==document.head&&!~X6.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Zp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function l1(t){if(Ir)return new Promise((e,n)=>{const r=Oo(t.querySelectorAll("*")).filter(l3).map(a3),i=jy.begin("searchPseudoElements");Yk(),Promise.all(r).then(()=>{i(),cm(),e()}).catch(()=>{i(),cm(),n()})})}var u3={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=l1,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Se}=e;H.searchPseudoElements&&l1(n)}}};let u1=!1;var c3={mixout(){return{dom:{unwatch(){Yk(),u1=!0}}}},hooks(){return{bootstrap(){n1(sm("mutationObserverCallbacks",{}))},noAuto(){qF()},watch(t){const{observeMutationsRoot:e}=t;u1?cm():n1(sm("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const c1=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var h3={mixout(){return{parse:{transform:t=>c1(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=c1(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(a," ").concat(u," ").concat(c)},f={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:d,path:f};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const yf={x:0,y:0,width:"100%",height:"100%"};function h1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function d3(t){return t.tag==="g"?t.children:[t]}var f3={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Hh(n.split(" ").map(i=>i.trim())):Vy();return r.prefix||(r.prefix=di()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:u,icon:c}=i,{width:d,icon:f}=s,m=cF({transform:a,containerWidth:d,iconWidth:u}),g={tag:"rect",attributes:{...yf,fill:"white"}},E=c.children?{children:c.children.map(h1)}:{},C={tag:"g",attributes:{...m.inner},children:[h1({tag:c.tag,attributes:{...c.attributes,...m.path},...E})]},b={tag:"g",attributes:{...m.outer},children:[C]},I="mask-".concat(o||gl()),w="clip-".concat(o||gl()),T={tag:"mask",attributes:{...yf,id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,b]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:d3(f)},T]};return n.push(P,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(I,")"),...yf}}),{children:n,attributes:r}}}},p3={provides(t){let e=!1;hi.matchMedia&&(e=hi.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},m3={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},g3=[fF,ZF,e3,t3,n3,u3,c3,h3,f3,p3,m3];RF(g3,{mixoutsTo:rn});rn.noAuto;rn.config;rn.library;rn.dom;const dm=rn.parse;rn.findIconDefinition;rn.toHtml;const y3=rn.icon;rn.layer;rn.text;rn.counter;function d1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Dn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?d1(Object(n),!0).forEach(function(r){zs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Xc(t){"@babel/helpers - typeof";return Xc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xc(t)}function zs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function _3(t,e){if(t==null)return{};var n=v3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function fm(t){return w3(t)||E3(t)||T3(t)||I3()}function w3(t){if(Array.isArray(t))return pm(t)}function E3(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function T3(t,e){if(t){if(typeof t=="string")return pm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pm(t,e)}}function pm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function I3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S3(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,d=t.spinReverse,f=t.pulse,m=t.fixedWidth,g=t.inverse,E=t.border,C=t.listItem,b=t.flip,I=t.size,w=t.rotation,T=t.pull,P=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":m,"fa-inverse":g,"fa-border":E,"fa-li":C,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},zs(e,"fa-".concat(I),typeof I<"u"&&I!==null),zs(e,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),zs(e,"fa-pull-".concat(T),typeof T<"u"&&T!==null),zs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(P).map(function(V){return P[V]?V:null}).filter(function(V){return V})}function A3(t){return t=t-0,t===t}function Jk(t){return A3(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var k3=["style"];function R3(t){return t.charAt(0).toUpperCase()+t.slice(1)}function C3(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Jk(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[R3(i)]=s:e[i]=s,e},{})}function Zk(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return Zk(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var d=e.attributes[c];switch(c){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=C3(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=d:u.attrs[Jk(c)]=d}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=_3(n,k3);return i.attrs.style=Dn(Dn({},i.attrs.style),o),t.apply(void 0,[e.tag,Dn(Dn({},i.attrs),a)].concat(fm(r)))}var eR=!1;try{eR=!0}catch{}function b3(){if(!eR&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function f1(t){if(t&&Xc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(dm.icon)return dm.icon(t);if(t===null)return null;if(t&&Xc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function vf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?zs({},t,e):{}}var p1={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},$y=Re.forwardRef(function(t,e){var n=Dn(Dn({},p1),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,u=n.titleId,c=n.maskId,d=f1(r),f=vf("classes",[].concat(fm(S3(n)),fm((o||"").split(" ")))),m=vf("transform",typeof n.transform=="string"?dm.transform(n.transform):n.transform),g=vf("mask",f1(i)),E=y3(d,Dn(Dn(Dn(Dn({},f),m),g),{},{symbol:s,title:a,titleId:u,maskId:c}));if(!E)return b3("Could not find icon",d),null;var C=E.abstract,b={ref:e};return Object.keys(n).forEach(function(I){p1.hasOwnProperty(I)||(b[I]=n[I])}),x3(C[0],b)});$y.displayName="FontAwesomeIcon";$y.propTypes={beat:Y.bool,border:Y.bool,beatFade:Y.bool,bounce:Y.bool,className:Y.string,fade:Y.bool,flash:Y.bool,mask:Y.oneOfType([Y.object,Y.array,Y.string]),maskId:Y.string,fixedWidth:Y.bool,inverse:Y.bool,flip:Y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.oneOfType([Y.object,Y.array,Y.string]),listItem:Y.bool,pull:Y.oneOf(["right","left"]),pulse:Y.bool,rotation:Y.oneOf([0,90,180,270]),shake:Y.bool,size:Y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.bool,spinPulse:Y.bool,spinReverse:Y.bool,symbol:Y.oneOfType([Y.bool,Y.string]),title:Y.string,titleId:Y.string,transform:Y.oneOfType([Y.string,Y.object]),swapOpacity:Y.bool};var x3=Zk.bind(null,Re.createElement);const P3={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]};var tR={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m1=Re.createContext&&Re.createContext(tR),N3=["attr","size","title"];function O3(t,e){if(t==null)return{};var n=D3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function D3(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Jc(){return Jc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jc.apply(this,arguments)}function g1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Zc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?g1(Object(n),!0).forEach(function(r){L3(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function L3(t,e,n){return e=M3(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M3(t){var e=V3(t,"string");return typeof e=="symbol"?e:e+""}function V3(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function nR(t){return t&&t.map((e,n)=>Re.createElement(e.tag,Zc({key:n},e.attr),nR(e.child)))}function Kh(t){return e=>Re.createElement(F3,Jc({attr:Zc({},t.attr)},e),nR(t.child))}function F3(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=O3(t,N3),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),Re.createElement("svg",Jc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Zc(Zc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Re.createElement("title",null,s),t.children)};return m1!==void 0?Re.createElement(m1.Consumer,null,n=>e(n)):e(tR)}function j3(t){return Kh({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M380.44 32H64a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32V131.56zM112 176v-64h192v64zm223.91 179.76a80 80 0 1 1-83.66-83.67 80.21 80.21 0 0 1 83.66 83.67z"},child:[]}]})(t)}function U3(t){return Kh({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"},child:[]}]})(t)}const rR=({task:t,toggleComplete:e,deleteTodo:n,editTodo:r})=>{const[i,s]=D.useState(!1),[o,a]=D.useState(t.text),u=()=>{s(!0)},c=()=>{s(!1),r(t.id,o)},d=f=>{f.key==="Enter"&&c()};return A.jsxs("div",{className:`Todo ${t.completed?"completed":""}`,children:[i?A.jsx("input",{type:"text",value:o,onChange:f=>a(f.target.value),onKeyPress:d,className:"edit-input"}):A.jsx("p",{onClick:()=>e(t.id,t.completed),children:t.text}),A.jsxs("div",{className:"icon-container",children:[i?A.jsx(j3,{"aria-label":"Save Task",role:"button",tabIndex:0,onClick:f=>{f.stopPropagation(),c()}}):A.jsx(U3,{"aria-label":"Edit Task",role:"button",tabIndex:0,onClick:f=>{f.stopPropagation(),u()}}),A.jsx($y,{icon:P3,"aria-label":"Delete Task",role:"button",tabIndex:0,onClick:f=>{f.stopPropagation(),n(t.id)}})]})]})};rR.propTypes={task:Y.shape({id:Y.string.isRequired,text:Y.string.isRequired,completed:Y.bool.isRequired}).isRequired,toggleComplete:Y.func.isRequired,deleteTodo:Y.func.isRequired,editTodo:Y.func.isRequired};const $3=({tasks:t,toggleComplete:e,deleteTodo:n,editTodo:r})=>A.jsx("div",{className:"task-list",children:t.map(i=>A.jsx(rR,{task:i,toggleComplete:e,deleteTodo:n,editTodo:r},i.id))}),iR=({className:t})=>{const[e,n]=D.useState([]);D.useEffect(()=>{const a=mo($r,"tasks"),u=AM(a,kM("timestamp","desc")),c=NM(u,d=>{const f=d.docs.map(m=>({id:m.id,...m.data()}));n(f)});return()=>c()},[]);const r=async a=>{const u={text:a,completed:!1,timestamp:new Date};try{await $h(mo($r,"tasks"),u),console.log("Task added:",u)}catch(c){console.error("Error adding task:",c)}},i=async(a,u)=>{try{const c=Gu($r,"tasks",a);await Sw(c,{completed:!u}),console.log("Task updated:",a)}catch(c){console.error("Error updating task:",c)}},s=async a=>{try{const u=Gu($r,"tasks",a);await PM(u),console.log("Task deleted:",a)}catch(u){console.error("Error deleting task:",u)}},o=async(a,u)=>{try{const c=Gu($r,"tasks",a);await Sw(c,{text:u}),console.log("Task edited:",a)}catch(c){console.error("Error editing task:",c)}};return A.jsxs("div",{className:`TodoWrapper ${t}`,children:[A.jsx("h1",{className:"mb-[9px] -mt-0.5",children:"Together We Achieve!"}),A.jsx(wk,{onSubmit:r}),A.jsx($3,{tasks:e,toggleComplete:i,deleteTodo:s,editTodo:o})]})};iR.propTypes={className:Y.string};const z3=()=>{const[t,e]=D.useState({name:"",email:"",message:""}),n=r=>{const{name:i,value:s}=r.target;e(o=>({...o,[i]:s}))};return A.jsxs("div",{className:"p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto",children:[A.jsx("h2",{className:"text-2xl font-bold text-center mb-4 text-gray-800",children:"Get a free quote"}),A.jsx("p",{className:"text-center text-gray-600 mb-1",children:"For a price quote, simply fill out the following form with details about your query."}),A.jsxs("form",{action:"https://public.herotofu.com/v1/1f80fb50-9353-11ef-840d-9fdbf4f87a8b",method:"POST",acceptCharset:"UTF-8",className:"space-y-4",children:[A.jsxs("div",{children:[A.jsx("label",{htmlFor:"name",className:"block text-xs font-medium text-gray-700 text-left"}),A.jsx("input",{type:"text",name:"name",id:"name",value:t.name,onChange:n,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-500 focus:outline-none text-left",placeholder:"Wpisz swoje imię*"})]}),A.jsxs("div",{children:[A.jsx("label",{htmlFor:"email",className:"block text-xs font-medium text-gray-700 text-left"}),A.jsx("input",{type:"email",name:"email",id:"email",value:t.email,onChange:n,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-500 focus:outline-none",placeholder:"Wpisz swój email*"})]}),A.jsxs("div",{children:[A.jsx("label",{htmlFor:"message",className:"block text-xs font-medium text-gray-700"}),A.jsx("textarea",{name:"message",id:"message",value:t.message,onChange:n,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-500 focus:outline-none",placeholder:"Napisz swoją wiadomość",rows:"4"})]}),A.jsx("button",{type:"submit",className:"w-1/2 bg-blue-600 text-white font-bold py-1 rounded hover:bg-blue-700 transition duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none ml-auto block",children:"Wyślij"}),A.jsx("div",{style:{textIndent:"-99999px",whiteSpace:"nowrap",overflow:"hidden",position:"absolute"},"aria-hidden":"true",children:A.jsx("input",{type:"text",name:"_gotcha",tabIndex:"-1",autoComplete:"off"})})]})]})};function B3({as:t,bsPrefix:e,className:n,...r}){e=Tt(e,"col");const i=JT(),s=ZT(),o=[],a=[];return i.forEach(u=>{const c=r[u];delete r[u];let d,f,m;typeof c=="object"&&c!=null?{span:d,offset:f,order:m}=c:d=c;const g=u!==s?`-${u}`:"";d&&o.push(d===!0?`${e}${g}`:`${e}${g}-${d}`),m!=null&&a.push(`order${g}-${m}`),f!=null&&a.push(`offset${g}-${f}`)}),[{...r,className:$e(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const _a=D.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=B3(t);return A.jsx(i,{...r,ref:e,className:$e(n,!o.length&&s)})});_a.displayName="Col";const sR=D.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=Tt(t,"row"),o=JT(),a=ZT(),u=`${s}-cols`,c=[];return o.forEach(d=>{const f=r[d];delete r[d];let m;f!=null&&typeof f=="object"?{cols:m}=f:m=f;const g=d!==a?`-${d}`:"";m!=null&&c.push(`${u}${g}-${m}`)}),A.jsx(n,{ref:i,...r,className:$e(e,s,...c)})});sR.displayName="Row";function q3(){return A.jsxs("footer",{className:"text-center text-lg-start text-white",style:{backgroundColor:""},children:[A.jsxs("section",{className:"d-flex justify-content-between p-4",style:{backgroundColor:"#6351ce"},children:[A.jsx("div",{className:"me-5",children:A.jsx("span",{children:"Get connected with me on social networks:"})}),A.jsxs("div",{children:[A.jsx("a",{href:"#",className:"text-white me-4",children:A.jsx("i",{className:"fab fa-facebook-f"})}),A.jsx("a",{href:"#",className:"text-white me-4",children:A.jsx("i",{className:"fab fa-twitter"})}),A.jsx("a",{href:"#",className:"text-white me-4",children:A.jsx("i",{className:"fab fa-google"})}),A.jsx("a",{href:"#",className:"text-white me-4",children:A.jsx("i",{className:"fab fa-instagram"})}),A.jsx("a",{href:"#",className:"text-white me-4",children:A.jsx("i",{className:"fab fa-linkedin"})}),A.jsx("a",{href:"#",className:"text-white me-4",children:A.jsx("i",{className:"fab fa-github"})})]})]}),A.jsx("section",{children:A.jsx(_g,{className:"text-center text-md-start mt-5",children:A.jsxs(sR,{className:"mt-3",children:[A.jsxs(_a,{md:3,lg:4,xl:3,className:"mx-auto mb-4",children:[A.jsx("h6",{className:"text-uppercase fw-bold",children:"Maciej Liberadzki Gallery"}),A.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),A.jsx("p",{children:"The family gallery is a collection of cherished photos and memories that capture the most important moments of family life."})]}),A.jsxs(_a,{md:2,lg:2,xl:2,className:"mx-auto mb-4",children:[A.jsx("h6",{className:"text-uppercase fw-bold",children:"Technologies used"}),A.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"CSS/Tailwind"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"React"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Firebase"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Bootstrap"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Node.js"})})]}),A.jsxs(_a,{md:3,lg:2,xl:2,className:"mx-auto mb-4",children:[A.jsx("h6",{className:"text-uppercase fw-bold",children:"Services"}),A.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Support"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Website Maintenence"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Responsive Design"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Web Hosting Service"})}),A.jsx("p",{children:A.jsx("a",{href:"#!",className:"text-white",children:"Tailor-made solutions"})})]}),A.jsxs(_a,{md:4,lg:3,xl:3,className:"mx-auto mb-md-0 mb-4",children:[A.jsx("h6",{className:"text-uppercase fw-bold",children:"Contact"}),A.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),A.jsxs("p",{children:[A.jsx("i",{className:"fas fa-home mr-3"})," Srebrzynska Park, Lodz, Poland"]}),A.jsxs("p",{children:[A.jsx("i",{className:"fas fa-envelope mr-3"})," LoremIpsum"]}),A.jsxs("p",{children:[A.jsx("i",{className:"fas fa-phone mr-3"})," + 01 234 567 88"]}),A.jsx("p",{children:A.jsx("i",{className:""})})]})]})})}),A.jsxs("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["© 2024 Designed by me",A.jsx("a",{className:"text-white",href:""})]})]})}function W3(){const[t,e]=D.useState(""),[n,r]=D.useState(window.innerWidth<=992);D.useEffect(()=>{const s=()=>{r(window.innerWidth<=992)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const i=s=>{if(s.preventDefault(),t.trim()==="")return;const o="https://www.google.com/search?q="+encodeURIComponent(t);window.open(o,"_blank"),e("")};return A.jsx("div",{className:"mx-auto",style:{width:"140px",marginBottom:n?"40px":"0px"},children:A.jsx("form",{onSubmit:i,children:A.jsx("input",{type:"text",placeholder:"Search anything...",className:"form-control","aria-label":"Search",value:t,onChange:s=>e(s.target.value),style:{height:"25px"}})})})}var Ee="-ms-",Fa="-moz-",de="-webkit-",oR="comm",Qh="rule",zy="decl",H3="@import",aR="@keyframes",G3="@layer",lR=Math.abs,By=String.fromCharCode,mm=Object.assign;function K3(t,e){return Ze(t,0)^45?(((e<<2^Ze(t,0))<<2^Ze(t,1))<<2^Ze(t,2))<<2^Ze(t,3):0}function uR(t){return t.trim()}function Zn(t,e){return(t=e.exec(t))?t[0]:t}function ne(t,e,n){return t.replace(e,n)}function tc(t,e,n){return t.indexOf(e,n)}function Ze(t,e){return t.charCodeAt(e)|0}function wo(t,e,n){return t.slice(e,n)}function Ln(t){return t.length}function cR(t){return t.length}function wa(t,e){return e.push(t),t}function Q3(t,e){return t.map(e).join("")}function y1(t,e){return t.filter(function(n){return!Zn(n,e)})}var Yh=1,Eo=1,hR=0,pn=0,Be=0,Do="";function Xh(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Yh,column:Eo,length:o,return:"",siblings:a}}function Pr(t,e){return mm(Xh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Es(t){for(;t.root;)t=Pr(t.root,{children:[t]});wa(t,t.siblings)}function Y3(){return Be}function X3(){return Be=pn>0?Ze(Do,--pn):0,Eo--,Be===10&&(Eo=1,Yh--),Be}function Rn(){return Be=pn<hR?Ze(Do,pn++):0,Eo++,Be===10&&(Eo=1,Yh++),Be}function zi(){return Ze(Do,pn)}function nc(){return pn}function Jh(t,e){return wo(Do,t,e)}function gm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function J3(t){return Yh=Eo=1,hR=Ln(Do=t),pn=0,[]}function Z3(t){return Do="",t}function _f(t){return uR(Jh(pn-1,ym(t===91?t+2:t===40?t+1:t)))}function ej(t){for(;(Be=zi())&&Be<33;)Rn();return gm(t)>2||gm(Be)>3?"":" "}function tj(t,e){for(;--e&&Rn()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return Jh(t,nc()+(e<6&&zi()==32&&Rn()==32))}function ym(t){for(;Rn();)switch(Be){case t:return pn;case 34:case 39:t!==34&&t!==39&&ym(Be);break;case 40:t===41&&ym(t);break;case 92:Rn();break}return pn}function nj(t,e){for(;Rn()&&t+Be!==57;)if(t+Be===84&&zi()===47)break;return"/*"+Jh(e,pn-1)+"*"+By(t===47?t:Rn())}function rj(t){for(;!gm(zi());)Rn();return Jh(t,pn)}function ij(t){return Z3(rc("",null,null,null,[""],t=J3(t),0,[0],t))}function rc(t,e,n,r,i,s,o,a,u){for(var c=0,d=0,f=o,m=0,g=0,E=0,C=1,b=1,I=1,w=0,T="",P=i,V=s,L=r,_=T;b;)switch(E=w,w=Rn()){case 40:if(E!=108&&Ze(_,f-1)==58){tc(_+=ne(_f(w),"&","&\f"),"&\f",lR(c?a[c-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:_+=_f(w);break;case 9:case 10:case 13:case 32:_+=ej(E);break;case 92:_+=tj(nc()-1,7);continue;case 47:switch(zi()){case 42:case 47:wa(sj(nj(Rn(),nc()),e,n,u),u);break;default:_+="/"}break;case 123*C:a[c++]=Ln(_)*I;case 125*C:case 59:case 0:switch(w){case 0:case 125:b=0;case 59+d:I==-1&&(_=ne(_,/\f/g,"")),g>0&&Ln(_)-f&&wa(g>32?_1(_+";",r,n,f-1,u):_1(ne(_," ","")+";",r,n,f-2,u),u);break;case 59:_+=";";default:if(wa(L=v1(_,e,n,c,d,i,a,T,P=[],V=[],f,s),s),w===123)if(d===0)rc(_,e,L,L,P,s,f,a,V);else switch(m===99&&Ze(_,3)===110?100:m){case 100:case 108:case 109:case 115:rc(t,L,L,r&&wa(v1(t,L,L,0,0,i,a,T,i,P=[],f,V),V),i,V,f,a,r?P:V);break;default:rc(_,L,L,L,[""],V,0,a,V)}}c=d=g=0,C=I=1,T=_="",f=o;break;case 58:f=1+Ln(_),g=E;default:if(C<1){if(w==123)--C;else if(w==125&&C++==0&&X3()==125)continue}switch(_+=By(w),w*C){case 38:I=d>0?1:(_+="\f",-1);break;case 44:a[c++]=(Ln(_)-1)*I,I=1;break;case 64:zi()===45&&(_+=_f(Rn())),m=zi(),d=f=Ln(T=_+=rj(nc())),w++;break;case 45:E===45&&Ln(_)==2&&(C=0)}}return s}function v1(t,e,n,r,i,s,o,a,u,c,d,f){for(var m=i-1,g=i===0?s:[""],E=cR(g),C=0,b=0,I=0;C<r;++C)for(var w=0,T=wo(t,m+1,m=lR(b=o[C])),P=t;w<E;++w)(P=uR(b>0?g[w]+" "+T:ne(T,/&\f/g,g[w])))&&(u[I++]=P);return Xh(t,e,n,i===0?Qh:a,u,c,d,f)}function sj(t,e,n,r){return Xh(t,e,n,oR,By(Y3()),wo(t,2,-2),0,r)}function _1(t,e,n,r,i){return Xh(t,e,n,zy,wo(t,0,r),wo(t,r+1,-1),r,i)}function dR(t,e,n){switch(K3(t,e)){case 5103:return de+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+t+t;case 4789:return Fa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return de+t+Fa+t+Ee+t+t;case 5936:switch(Ze(t,e+11)){case 114:return de+t+Ee+ne(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return de+t+Ee+ne(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return de+t+Ee+ne(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return de+t+Ee+t+t;case 6165:return de+t+Ee+"flex-"+t+t;case 5187:return de+t+ne(t,/(\w+).+(:[^]+)/,de+"box-$1$2"+Ee+"flex-$1$2")+t;case 5443:return de+t+Ee+"flex-item-"+ne(t,/flex-|-self/g,"")+(Zn(t,/flex-|baseline/)?"":Ee+"grid-row-"+ne(t,/flex-|-self/g,""))+t;case 4675:return de+t+Ee+"flex-line-pack"+ne(t,/align-content|flex-|-self/g,"")+t;case 5548:return de+t+Ee+ne(t,"shrink","negative")+t;case 5292:return de+t+Ee+ne(t,"basis","preferred-size")+t;case 6060:return de+"box-"+ne(t,"-grow","")+de+t+Ee+ne(t,"grow","positive")+t;case 4554:return de+ne(t,/([^-])(transform)/g,"$1"+de+"$2")+t;case 6187:return ne(ne(ne(t,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),t,"")+t;case 5495:case 3959:return ne(t,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return ne(ne(t,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+Ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+t+t;case 4200:if(!Zn(t,/flex-|baseline/))return Ee+"grid-column-align"+wo(t,e)+t;break;case 2592:case 3360:return Ee+ne(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Zn(r.props,/grid-\w+-end/)})?~tc(t+(n=n[e].value),"span",0)?t:Ee+ne(t,"-start","")+t+Ee+"grid-row-span:"+(~tc(n,"span",0)?Zn(n,/\d+/):+Zn(n,/\d+/)-+Zn(t,/\d+/))+";":Ee+ne(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Zn(r.props,/grid-\w+-start/)})?t:Ee+ne(ne(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ne(t,/(.+)-inline(.+)/,de+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ln(t)-1-e>6)switch(Ze(t,e+1)){case 109:if(Ze(t,e+4)!==45)break;case 102:return ne(t,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+Fa+(Ze(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~tc(t,"stretch",0)?dR(ne(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ne(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,u,c){return Ee+i+":"+s+c+(o?Ee+i+"-span:"+(a?u:+u-+s)+c:"")+t});case 4949:if(Ze(t,e+6)===121)return ne(t,":",":"+de)+t;break;case 6444:switch(Ze(t,Ze(t,14)===45?18:11)){case 120:return ne(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+de+(Ze(t,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+Ee+"$2box$3")+t;case 100:return ne(t,":",":"+Ee)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(t,"scroll-","scroll-snap-")+t}return t}function eh(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function oj(t,e,n,r){switch(t.type){case G3:if(t.children.length)break;case H3:case zy:return t.return=t.return||t.value;case oR:return"";case aR:return t.return=t.value+"{"+eh(t.children,r)+"}";case Qh:if(!Ln(t.value=t.props.join(",")))return""}return Ln(n=eh(t.children,r))?t.return=t.value+"{"+n+"}":""}function aj(t){var e=cR(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function lj(t){return function(e){e.root||(e=e.return)&&t(e)}}function uj(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case zy:t.return=dR(t.value,t.length,n);return;case aR:return eh([Pr(t,{value:ne(t.value,"@","@"+de)})],r);case Qh:if(t.length)return Q3(n=t.props,function(i){switch(Zn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Es(Pr(t,{props:[ne(i,/:(read-\w+)/,":"+Fa+"$1")]})),Es(Pr(t,{props:[i]})),mm(t,{props:y1(n,r)});break;case"::placeholder":Es(Pr(t,{props:[ne(i,/:(plac\w+)/,":"+de+"input-$1")]})),Es(Pr(t,{props:[ne(i,/:(plac\w+)/,":"+Fa+"$1")]})),Es(Pr(t,{props:[ne(i,/:(plac\w+)/,Ee+"input-$1")]})),Es(Pr(t,{props:[i]})),mm(t,{props:y1(n,r)});break}return""})}}var cj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wt={},To=typeof process<"u"&&Wt!==void 0&&(Wt.REACT_APP_SC_ATTR||Wt.SC_ATTR)||"data-styled",fR="active",pR="data-styled-version",Zh="6.1.13",qy=`/*!sc*/
`,th=typeof window<"u"&&"HTMLElement"in window,hj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==""?Wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.SC_DISABLE_SPEEDY!==void 0&&Wt.SC_DISABLE_SPEEDY!==""&&Wt.SC_DISABLE_SPEEDY!=="false"&&Wt.SC_DISABLE_SPEEDY),ed=Object.freeze([]),Io=Object.freeze({});function dj(t,e,n){return n===void 0&&(n=Io),t.theme!==n.theme&&t.theme||e||n.theme}var mR=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pj=/(^-|-$)/g;function w1(t){return t.replace(fj,"-").replace(pj,"")}var mj=/(a)(d)/gi,Ru=52,E1=function(t){return String.fromCharCode(t+(t>25?39:97))};function vm(t){var e,n="";for(e=Math.abs(t);e>Ru;e=e/Ru|0)n=E1(e%Ru)+n;return(E1(e%Ru)+n).replace(mj,"$1-$2")}var wf,gR=5381,Bs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},yR=function(t){return Bs(gR,t)};function vR(t){return vm(yR(t)>>>0)}function gj(t){return t.displayName||t.name||"Component"}function Ef(t){return typeof t=="string"&&!0}var _R=typeof Symbol=="function"&&Symbol.for,wR=_R?Symbol.for("react.memo"):60115,yj=_R?Symbol.for("react.forward_ref"):60112,vj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_j={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ER={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wj=((wf={})[yj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wf[wR]=ER,wf);function T1(t){return("type"in(e=t)&&e.type.$$typeof)===wR?ER:"$$typeof"in t?wj[t.$$typeof]:vj;var e}var Ej=Object.defineProperty,Tj=Object.getOwnPropertyNames,I1=Object.getOwnPropertySymbols,Ij=Object.getOwnPropertyDescriptor,Sj=Object.getPrototypeOf,S1=Object.prototype;function TR(t,e,n){if(typeof e!="string"){if(S1){var r=Sj(e);r&&r!==S1&&TR(t,r,n)}var i=Tj(e);I1&&(i=i.concat(I1(e)));for(var s=T1(t),o=T1(e),a=0;a<i.length;++a){var u=i[a];if(!(u in _j||n&&n[u]||o&&u in o||s&&u in s)){var c=Ij(e,u);try{Ej(t,u,c)}catch{}}}}return t}function So(t){return typeof t=="function"}function Wy(t){return typeof t=="object"&&"styledComponentId"in t}function Li(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function _m(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function yl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function wm(t,e,n){if(n===void 0&&(n=!1),!n&&!yl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=wm(t[r],e[r]);else if(yl(e))for(var r in e)t[r]=wm(t[r],e[r]);return t}function Hy(t,e){Object.defineProperty(t,"toString",{value:e})}function Vl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Aj=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Vl(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(qy);return n},t}(),ic=new Map,nh=new Map,sc=1,Cu=function(t){if(ic.has(t))return ic.get(t);for(;nh.has(sc);)sc++;var e=sc++;return ic.set(t,e),nh.set(e,t),e},kj=function(t,e){sc=e+1,ic.set(t,e),nh.set(e,t)},Rj="style[".concat(To,"][").concat(pR,'="').concat(Zh,'"]'),Cj=new RegExp("^".concat(To,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bj=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},xj=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(qy),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var u=a.match(Cj);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(kj(d,c),bj(t,d,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},A1=function(t){for(var e=document.querySelectorAll(Rj),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(To)!==fR&&(xj(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function Pj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var IR=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(To,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(To,fR),r.setAttribute(pR,Zh);var o=Pj();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Nj=function(){function t(e){this.element=IR(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Vl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Oj=function(){function t(e){this.element=IR(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Dj=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),k1=th,Lj={isServer:!th,useCSSOMInjection:!hj},SR=function(){function t(e,n,r){e===void 0&&(e=Io),n===void 0&&(n={});var i=this;this.options=Mt(Mt({},Lj),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&th&&k1&&(k1=!1,A1(this)),Hy(this,function(){return function(s){for(var o=s.getTag(),a=o.length,u="",c=function(f){var m=function(I){return nh.get(I)}(f);if(m===void 0)return"continue";var g=s.names.get(m),E=o.getGroup(f);if(g===void 0||!g.size||E.length===0)return"continue";var C="".concat(To,".g").concat(f,'[id="').concat(m,'"]'),b="";g!==void 0&&g.forEach(function(I){I.length>0&&(b+="".concat(I,","))}),u+="".concat(E).concat(C,'{content:"').concat(b,'"}').concat(qy)},d=0;d<a;d++)c(d);return u}(i)})}return t.registerId=function(e){return Cu(e)},t.prototype.rehydrate=function(){!this.server&&th&&A1(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Mt(Mt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Dj(i):r?new Nj(i):new Oj(i)}(this.options),new Aj(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Cu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Cu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Cu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Mj=/&/g,Vj=/^\s*\/\/.*$/gm;function AR(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=AR(n.children,e)),n})}function Fj(t){var e,n,r,i=Io,s=i.options,o=s===void 0?Io:s,a=i.plugins,u=a===void 0?ed:a,c=function(m,g,E){return E.startsWith(n)&&E.endsWith(n)&&E.replaceAll(n,"").length>0?".".concat(e):m},d=u.slice();d.push(function(m){m.type===Qh&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Mj,n).replace(r,c))}),o.prefix&&d.push(uj),d.push(oj);var f=function(m,g,E,C){g===void 0&&(g=""),E===void 0&&(E=""),C===void 0&&(C="&"),e=C,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var b=m.replace(Vj,""),I=ij(E||g?"".concat(E," ").concat(g," { ").concat(b," }"):b);o.namespace&&(I=AR(I,o.namespace));var w=[];return eh(I,aj(d.concat(lj(function(T){return w.push(T)})))),w};return f.hash=u.length?u.reduce(function(m,g){return g.name||Vl(15),Bs(m,g.name)},gR).toString():"",f}var jj=new SR,Em=Fj(),kR=Re.createContext({shouldForwardProp:void 0,styleSheet:jj,stylis:Em});kR.Consumer;Re.createContext(void 0);function R1(){return D.useContext(kR)}var RR=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Em);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Hy(this,function(){throw Vl(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Em),this.name+e.hash},t}(),Uj=function(t){return t>="A"&&t<="Z"};function C1(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;Uj(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var CR=function(t){return t==null||t===!1||t===""},bR=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!CR(s)&&(Array.isArray(s)&&s.isCss||So(s)?r.push("".concat(C1(i),":"),s,";"):yl(s)?r.push.apply(r,fl(fl(["".concat(i," {")],bR(s),!1),["}"],!1)):r.push("".concat(C1(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in cj||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Bi(t,e,n,r){if(CR(t))return[];if(Wy(t))return[".".concat(t.styledComponentId)];if(So(t)){if(!So(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Bi(i,e,n,r)}var s;return t instanceof RR?n?(t.inject(n,r),[t.getName(r)]):[t]:yl(t)?bR(t):Array.isArray(t)?Array.prototype.concat.apply(ed,t.map(function(o){return Bi(o,e,n,r)})):[t.toString()]}function $j(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(So(n)&&!Wy(n))return!1}return!0}var zj=yR(Zh),Bj=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$j(e),this.componentId=n,this.baseHash=Bs(zj,n),this.baseStyle=r,SR.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Li(i,this.staticRulesId);else{var s=_m(Bi(this.rules,e,n,r)),o=vm(Bs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Li(i,o),this.staticRulesId=o}else{for(var u=Bs(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var m=_m(Bi(f,e,n,r));u=Bs(u,m+d),c+=m}}if(c){var g=vm(u>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=Li(i,g)}}return i},t}(),xR=Re.createContext(void 0);xR.Consumer;var Tf={};function qj(t,e,n){var r=Wy(t),i=t,s=!Ef(t),o=e.attrs,a=o===void 0?ed:o,u=e.componentId,c=u===void 0?function(P,V){var L=typeof P!="string"?"sc":w1(P);Tf[L]=(Tf[L]||0)+1;var _="".concat(L,"-").concat(vR(Zh+L+Tf[L]));return V?"".concat(V,"-").concat(_):_}(e.displayName,e.parentComponentId):u,d=e.displayName,f=d===void 0?function(P){return Ef(P)?"styled.".concat(P):"Styled(".concat(gj(P),")")}(t):d,m=e.displayName&&e.componentId?"".concat(w1(e.displayName),"-").concat(e.componentId):e.componentId||c,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,E=e.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(e.shouldForwardProp){var b=e.shouldForwardProp;E=function(P,V){return C(P,V)&&b(P,V)}}else E=C}var I=new Bj(n,m,r?i.componentStyle:void 0);function w(P,V){return function(L,_,v){var S=L.attrs,R=L.componentStyle,x=L.defaultProps,N=L.foldedComponentIds,k=L.styledComponentId,He=L.target,Pt=Re.useContext(xR),ut=R1(),Ve=L.shouldForwardProp||ut.shouldForwardProp,U=dj(_,Pt,x)||Io,G=function(fe,Fe,ct){for(var Qn,Bt=Mt(Mt({},Fe),{className:void 0,theme:ct}),sn=0;sn<fe.length;sn+=1){var gn=So(Qn=fe[sn])?Qn(Bt):Qn;for(var It in gn)Bt[It]=It==="className"?Li(Bt[It],gn[It]):It==="style"?Mt(Mt({},Bt[It]),gn[It]):gn[It]}return Fe.className&&(Bt.className=Li(Bt.className,Fe.className)),Bt}(S,_,U),Q=G.as||He,se={};for(var te in G)G[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&G.theme===U||(te==="forwardedAs"?se.as=G.forwardedAs:Ve&&!Ve(te,Q)||(se[te]=G[te]));var he=function(fe,Fe){var ct=R1(),Qn=fe.generateAndInjectStyles(Fe,ct.styleSheet,ct.stylis);return Qn}(R,G),Ge=Li(N,k);return he&&(Ge+=" "+he),G.className&&(Ge+=" "+G.className),se[Ef(Q)&&!mR.has(Q)?"class":"className"]=Ge,se.ref=v,D.createElement(Q,se)}(T,P,V)}w.displayName=f;var T=Re.forwardRef(w);return T.attrs=g,T.componentStyle=I,T.displayName=f,T.shouldForwardProp=E,T.foldedComponentIds=r?Li(i.foldedComponentIds,i.styledComponentId):"",T.styledComponentId=m,T.target=r?i.target:t,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=r?function(V){for(var L=[],_=1;_<arguments.length;_++)L[_-1]=arguments[_];for(var v=0,S=L;v<S.length;v++)wm(V,S[v],!0);return V}({},i.defaultProps,P):P}}),Hy(T,function(){return".".concat(T.styledComponentId)}),s&&TR(T,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function b1(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var x1=function(t){return Object.assign(t,{isCss:!0})};function PR(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(So(t)||yl(t))return x1(Bi(b1(ed,fl([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Bi(r):x1(Bi(b1(r,e)))}function Tm(t,e,n){if(n===void 0&&(n=Io),!e)throw Vl(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,PR.apply(void 0,fl([i],s,!1)))};return r.attrs=function(i){return Tm(t,e,Mt(Mt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Tm(t,e,Mt(Mt({},n),i))},r}var NR=function(t){return Tm(qj,t)},fs=NR;mR.forEach(function(t){fs[t]=NR(t)});function Gy(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=_m(PR.apply(void 0,fl([t],e,!1))),i=vR(r);return new RR(i,r)}const Wj="#4fa94d",Hj={"aria-busy":!0,role:"progressbar"},Gj=fs.div`
  display: ${t=>t.$visible?"flex":"none"};
`,Kj="http://www.w3.org/2000/svg",Qj=({height:t=80,width:e=80,color:n=Wj,ariaLabel:r="circles-loading",wrapperStyle:i,wrapperClass:s,visible:o=!0})=>A.jsx(Gj,{style:i,$visible:o,className:s,"aria-label":r,"data-testid":"circles-loading",...Hj,children:A.jsxs("svg",{width:e,height:t,viewBox:"0 0 135 135",xmlns:Kj,fill:n,"data-testid":"circles-svg",children:[A.jsx("title",{children:"circles-loading"}),A.jsx("desc",{children:"Animated representation of circles"}),A.jsx("path",{d:"M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z",children:A.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"-360 67 67",dur:"2.5s",repeatCount:"indefinite"})}),A.jsx("path",{d:"M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z",children:A.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"360 67 67",dur:"8s",repeatCount:"indefinite"})})]})}),_n=242.776657104492,Yj=1.6,Xj=Gy`
12.5% {
  stroke-dasharray: ${_n*.14}px, ${_n}px;
  stroke-dashoffset: -${_n*.11}px;
}
43.75% {
  stroke-dasharray: ${_n*.35}px, ${_n}px;
  stroke-dashoffset: -${_n*.35}px;
}
100% {
  stroke-dasharray: ${_n*.01}px, ${_n}px;
  stroke-dashoffset: -${_n*.99}px;
}
`;fs.path`
  stroke-dasharray: ${_n*.01}px, ${_n};
  stroke-dashoffset: 0;
  animation: ${Xj} ${Yj}s linear infinite;
`;const Jj=Gy`
to {
   transform: rotate(360deg);
 }
`;fs.svg`
  animation: ${Jj} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;fs.polyline`
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
`;const Zj=Gy`
to {
   stroke-dashoffset: 136;
 }
`;fs.polygon`
  stroke-dasharray: 17;
  animation: ${Zj} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;fs.svg`
  transform-origin: 50% 65%;
`;function e5(t){return Kh({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(t)}function t5(t){return Kh({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(t)}function n5(){const[t,e]=D.useState([]),[n,r]=D.useState(""),[i,s]=D.useState(""),[o,a]=D.useState(!1);D.useEffect(()=>{(async()=>{try{const g=(await xM(mo($r,"posts"))).docs.map(E=>({id:E.id,...E.data()}));e(g)}catch(m){console.error("Błąd podczas pobierania danych:",m)}})()},[]);const u=f=>{var m;try{if(f.includes("youtu.be"))return`https://img.youtube.com/vi/${(m=f.split("youtu.be/")[1])==null?void 0:m.split("?")[0]}/hqdefault.jpg`;if(f.includes("youtube.com")){const E=new URL(f).searchParams.get("v");if(E)return`https://img.youtube.com/vi/${E}/hqdefault.jpg`}return null}catch(g){return console.error("Błąd podczas generowania miniaturki YouTube:",g),null}},c=async f=>{if(f.includes("youtube.com")||f.includes("youtu.be"))return u(f);try{const g=await(await fetch(`https://opengraph.io/api/1.1/site/${encodeURIComponent(f)}?app_id=74430628-2023-4e90-9d59-a4ff6779d48e`)).json();return console.log("OpenGraph response:",g),g.hybridGraph.image||null}catch(m){return console.error("Błąd podczas pobierania miniaturki:",m),null}},d=async f=>{if(f.preventDefault(),!n||!i){alert("Proszę wypełnić oba pola!");return}a(!0);try{const m=await c(i),g=await $h(mo($r,"posts"),{title:n,link:i,thumbnail:m});e(E=>[...E,{id:g.id,title:n,link:i,thumbnail:m}]),r(""),s(""),alert("Post został dodany!")}catch(m){console.error("Błąd podczas dodawania posta:",m)}finally{a(!1)}};return A.jsxs("div",{className:"recent-posts",children:[A.jsx("h3",{children:"Dodaj nowy post"}),A.jsxs("form",{onSubmit:d,children:[A.jsx("input",{type:"text",placeholder:"Tytuł posta",value:n,onChange:f=>r(f.target.value),required:!0}),A.jsx("input",{type:"url",placeholder:"Link do posta",value:i,onChange:f=>s(f.target.value),required:!0}),A.jsx("button",{type:"submit",disabled:o,children:o?"Dodawanie...":"Dodaj post"})]}),A.jsx("h3",{children:"Ostatnie posty"}),A.jsx("ul",{children:t.map(f=>A.jsxs("li",{style:{display:"flex",alignItems:"center",marginBottom:"15px"},children:[f.thumbnail&&A.jsx("img",{src:f.thumbnail,alt:f.title,style:{width:"100px",height:"100px",objectFit:"cover",marginRight:"10px",borderRadius:"8px"}}),A.jsx("a",{href:f.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"black"},children:A.jsx("h4",{style:{margin:0},children:f.title})})]},f.id))})]})}/**
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
 */const OR="firebasestorage.googleapis.com",DR="storageBucket",r5=2*60*1e3,i5=10*60*1e3,s5=1e3;/**
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
 */class Oe extends mn{constructor(e,n,r=0){super(If(e),`Firebase Storage: ${n} (${If(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return If(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function If(t){return"storage/"+t}function Ky(){const t="An unknown error occurred, please check the error payload for server response.";return new Oe(Ae.UNKNOWN,t)}function o5(t){return new Oe(Ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function a5(t){return new Oe(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function l5(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Oe(Ae.UNAUTHENTICATED,t)}function u5(){return new Oe(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function c5(t){return new Oe(Ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function LR(){return new Oe(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function MR(){return new Oe(Ae.CANCELED,"User canceled the upload/download.")}function h5(t){return new Oe(Ae.INVALID_URL,"Invalid URL '"+t+"'.")}function d5(t){return new Oe(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function f5(){return new Oe(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+DR+"' property when initializing the app?")}function VR(){return new Oe(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function p5(){return new Oe(Ae.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function m5(){return new Oe(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function g5(t){return new Oe(Ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Im(t){return new Oe(Ae.INVALID_ARGUMENT,t)}function FR(){return new Oe(Ae.APP_DELETED,"The Firebase app was deleted.")}function y5(t){return new Oe(Ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ja(t,e){return new Oe(Ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function aa(t){throw new Oe(Ae.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Qt.makeFromUrl(e,n)}catch{return new Qt(e,"")}if(r.path==="")return r;throw d5(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(P){P.path_=decodeURIComponent(P.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),E={bucket:1,path:3},C=n===OR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",I=new RegExp(`^https?://${C}/${i}/${b}`,"i"),T=[{regex:a,indices:u,postModify:s},{regex:g,indices:E,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let P=0;P<T.length;P++){const V=T[P],L=V.regex.exec(e);if(L){const _=L[V.indices.bucket];let v=L[V.indices.path];v||(v=""),r=new Qt(_,v),V.postModify(r);break}}if(r==null)throw h5(e);return r}}class v5{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function _5(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...b){c||(c=!0,e.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,t(g,u())},b)}function m(){s&&clearTimeout(s)}function g(b,...I){if(c){m();return}if(b){m(),d.call(null,b,...I);return}if(u()||o){m(),d.call(null,b,...I);return}r<64&&(r*=2);let T;a===1?(a=2,T=0):T=(r+Math.random())*1e3,f(T)}let E=!1;function C(b){E||(E=!0,m(),!c&&(i!==null?(b||(a=2),clearTimeout(i),f(0)):b||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,C(!0)},n),C}function w5(t){t(!1)}/**
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
 */function E5(t){return t!==void 0}function T5(t){return typeof t=="function"}function I5(t){return typeof t=="object"&&!Array.isArray(t)}function td(t){return typeof t=="string"||t instanceof String}function P1(t){return Qy()&&t instanceof Blob}function Qy(){return typeof Blob<"u"}function N1(t,e,n,r){if(r<e)throw Im(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Im(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Fl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function jR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var qi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qi||(qi={}));/**
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
 */function UR(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class S5{constructor(e,n,r,i,s,o,a,u,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,E)=>{this.resolve_=g,this.reject_=E,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new bu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===qi.NO_ERROR,u=s.getStatus();if(!a||UR(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===qi.ABORT;r(!1,new bu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new bu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());E5(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Ky();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?FR():MR();o(u)}else{const u=LR();o(u)}};this.canceled_?n(!1,new bu(!1,null,!0)):this.backoffId_=_5(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&w5(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function A5(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function k5(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function R5(t,e){e&&(t["X-Firebase-GMPID"]=e)}function C5(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function b5(t,e,n,r,i,s,o=!0){const a=jR(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return R5(c,e),A5(c,n),k5(c,s),C5(c,r),new S5(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function x5(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function P5(...t){const e=x5();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Qy())return new Blob(t);throw new Oe(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function N5(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function O5(t){if(typeof atob>"u")throw g5("base-64");return atob(t)}/**
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
 */const jn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sf{constructor(e,n){this.data=e,this.contentType=n||null}}function D5(t,e){switch(t){case jn.RAW:return new Sf($R(e));case jn.BASE64:case jn.BASE64URL:return new Sf(zR(t,e));case jn.DATA_URL:return new Sf(M5(e),V5(e))}throw Ky()}function $R(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function L5(t){let e;try{e=decodeURIComponent(t)}catch{throw ja(jn.DATA_URL,"Malformed data URL.")}return $R(e)}function zR(t,e){switch(t){case jn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ja(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case jn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ja(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=O5(e)}catch(i){throw i.message.includes("polyfill")?i:ja(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class BR{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ja(jn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=F5(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function M5(t){const e=new BR(t);return e.base64?zR(jn.BASE64,e.rest):L5(e.rest)}function V5(t){return new BR(t).contentType}function F5(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class zr{constructor(e,n){let r=0,i="";P1(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(P1(this.data_)){const r=this.data_,i=N5(r,e,n);return i===null?null:new zr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new zr(r,!0)}}static getBlob(...e){if(Qy()){const n=e.map(r=>r instanceof zr?r.data_:r);return new zr(P5.apply(null,n))}else{const n=e.map(o=>td(o)?D5(jn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new zr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function qR(t){let e;try{e=JSON.parse(t)}catch{return null}return I5(e)?e:null}/**
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
 */function j5(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function U5(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function WR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function $5(t,e){return e}class kt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||$5}}let xu=null;function z5(t){return!td(t)||t.length<2?t:WR(t)}function HR(){if(xu)return xu;const t=[];t.push(new kt("bucket")),t.push(new kt("generation")),t.push(new kt("metageneration")),t.push(new kt("name","fullPath",!0));function e(s,o){return z5(o)}const n=new kt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new kt("size");return i.xform=r,t.push(i),t.push(new kt("timeCreated")),t.push(new kt("updated")),t.push(new kt("md5Hash",null,!0)),t.push(new kt("cacheControl",null,!0)),t.push(new kt("contentDisposition",null,!0)),t.push(new kt("contentEncoding",null,!0)),t.push(new kt("contentLanguage",null,!0)),t.push(new kt("contentType",null,!0)),t.push(new kt("metadata","customMetadata",!0)),xu=t,xu}function B5(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Qt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function q5(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return B5(r,t),r}function GR(t,e,n){const r=qR(e);return r===null?null:q5(t,r,n)}function W5(t,e,n,r){const i=qR(e);if(i===null||!td(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),g=Fl(m,n,r),E=jR({alt:"media",token:c});return g+E})[0]}function KR(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Lo{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ur(t){if(!t)throw Ky()}function Yy(t,e){function n(r,i){const s=GR(t,i,e);return ur(s!==null),s}return n}function H5(t,e){function n(r,i){const s=GR(t,i,e);return ur(s!==null),W5(s,i,t.host,t._protocol)}return n}function jl(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=u5():i=l5():n.getStatus()===402?i=a5(t.bucket):n.getStatus()===403?i=c5(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function QR(t){const e=jl(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=o5(t.path)),s.serverResponse=i.serverResponse,s}return n}function G5(t,e,n){const r=e.fullServerUrl(),i=Fl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Lo(i,s,Yy(t,n),o);return a.errorHandler=QR(e),a}function K5(t,e,n){const r=e.fullServerUrl(),i=Fl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Lo(i,s,H5(t,n),o);return a.errorHandler=QR(e),a}function Q5(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function YR(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Q5(null,e)),r}function Y5(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let P=0;P<2;P++)T=T+Math.random().toString().slice(2);return T}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=YR(e,r,i),d=KR(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",g=zr.getBlob(f,r,m);if(g===null)throw VR();const E={name:c.fullPath},C=Fl(s,t.host,t._protocol),b="POST",I=t.maxUploadRetryTime,w=new Lo(C,b,Yy(t,n),I);return w.urlParams=E,w.headers=o,w.body=g.uploadData(),w.errorHandler=jl(e),w}class rh{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Xy(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{ur(!1)}return ur(!!n&&(e||["active"]).indexOf(n)!==-1),n}function X5(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=YR(e,r,i),a={name:o.fullPath},u=Fl(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=KR(o,n),m=t.maxUploadRetryTime;function g(C){Xy(C);let b;try{b=C.getResponseHeader("X-Goog-Upload-URL")}catch{ur(!1)}return ur(td(b)),b}const E=new Lo(u,c,g,m);return E.urlParams=a,E.headers=d,E.body=f,E.errorHandler=jl(e),E}function J5(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=Xy(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ur(!1)}f||ur(!1);const m=Number(f);return ur(!isNaN(m)),new rh(m,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,u=new Lo(n,o,s,a);return u.headers=i,u.errorHandler=jl(e),u}const O1=256*1024;function Z5(t,e,n,r,i,s,o,a){const u=new rh(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw p5();const c=u.total-u.current;let d=c;i>0&&(d=Math.min(d,i));const f=u.current,m=f+d;let g="";d===0?g="finalize":c===d?g="upload, finalize":g="upload";const E={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${u.current}`},C=r.slice(f,m);if(C===null)throw VR();function b(P,V){const L=Xy(P,["active","final"]),_=u.current+d,v=r.size();let S;return L==="final"?S=Yy(e,s)(P,V):S=null,new rh(_,v,L==="final",S)}const I="POST",w=e.maxUploadRetryTime,T=new Lo(n,I,b,w);return T.headers=E,T.body=C.uploadData(),T.progressCallback=a||null,T.errorHandler=jl(t),T}const Nt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Af(t){switch(t){case"running":case"pausing":case"canceling":return Nt.RUNNING;case"paused":return Nt.PAUSED;case"success":return Nt.SUCCESS;case"canceled":return Nt.CANCELED;case"error":return Nt.ERROR;default:return Nt.ERROR}}/**
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
 */class e9{constructor(e,n,r){if(T5(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Ts(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class t9{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw aa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw aa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw aa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw aa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw aa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class n9 extends t9{initXhr(){this.xhr_.responseType="text"}}function ks(){return new n9}/**
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
 */class r9{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=HR(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ae.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(UR(i.status,[]))if(s)i=LR();else{this.sleepTime=Math.max(this.sleepTime*2,s5),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ae.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=X5(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ks,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=J5(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,ks,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=O1*this._chunkMultiplier,n=new rh(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=Z5(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ks,i,s,!1);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){O1*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=G5(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,ks,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=Y5(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ks,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=MR(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Af(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new e9(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Af(this._state)){case Nt.SUCCESS:Ts(this._resolve.bind(null,this.snapshot))();break;case Nt.CANCELED:case Nt.ERROR:const n=this._reject;Ts(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Af(this._state)){case Nt.RUNNING:case Nt.PAUSED:e.next&&Ts(e.next.bind(e,this.snapshot))();break;case Nt.SUCCESS:e.complete&&Ts(e.complete.bind(e))();break;case Nt.CANCELED:case Nt.ERROR:e.error&&Ts(e.error.bind(e,this._error))();break;default:e.error&&Ts(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class ss{constructor(e,n){this._service=e,n instanceof Qt?this._location=n:this._location=Qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ss(e,n)}get root(){const e=new Qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return WR(this._location.path)}get storage(){return this._service}get parent(){const e=j5(this._location.path);if(e===null)return null;const n=new Qt(this._location.bucket,e);return new ss(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw y5(e)}}function i9(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new r9(t,new zr(e),n)}function s9(t){t._throwIfRoot("getDownloadURL");const e=K5(t.storage,t._location,HR());return t.storage.makeRequestWithTokens(e,ks).then(n=>{if(n===null)throw m5();return n})}function o9(t,e){const n=U5(t._location.path,e),r=new Qt(t._location.bucket,n);return new ss(t.storage,r)}/**
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
 */function a9(t){return/^[A-Za-z]+:\/\//.test(t)}function l9(t,e){return new ss(t,e)}function XR(t,e){if(t instanceof Jy){const n=t;if(n._bucket==null)throw f5();const r=new ss(n,n._bucket);return e!=null?XR(r,e):r}else return e!==void 0?o9(t,e):t}function u9(t,e){if(e&&a9(e)){if(t instanceof Jy)return l9(t,e);throw Im("To use ref(service, url), the first argument must be a Storage instance.")}else return XR(t,e)}function D1(t,e){const n=e==null?void 0:e[DR];return n==null?null:Qt.makeFromBucketSpec(n,t)}function c9(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:$I(i,t.app.options.projectId))}class Jy{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=OR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=r5,this._maxUploadRetryTime=i5,this._requests=new Set,i!=null?this._bucket=Qt.makeFromBucketSpec(i,this._host):this._bucket=D1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qt.makeFromBucketSpec(this._url,e):this._bucket=D1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){N1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){N1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ss(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new v5(FR());{const o=b5(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const L1="@firebase/storage",M1="0.13.2";/**
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
 */const JR="storage";function h9(t,e,n){return t=Me(t),i9(t,e,n)}function d9(t){return t=Me(t),s9(t)}function f9(t,e){return t=Me(t),u9(t,e)}function p9(t=Ah(),e){t=Me(t);const r=yi(t,JR).getImmediate({identifier:e}),i=FI("storage");return i&&m9(r,...i),r}function m9(t,e,n,r={}){c9(t,e,n,r)}function g9(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Jy(n,r,i,e,cs)}function y9(){bn(new fn(JR,g9,"PUBLIC").setMultipleInstances(!0)),Ut(L1,M1,""),Ut(L1,M1,"esm2017")}y9();const v9=()=>{const[t,e]=D.useState(null),[n,r]=D.useState(!1),[i,s]=D.useState(0),o=p9(),a=xA();D.useEffect(()=>{console.log("isUploading zmieniony na:",n)},[n]);const u=d=>{if(d.target.files[0]){const f=d.target.files[0];console.log("Wybrano plik:",f.name),console.log("Rozmiar pliku:",f.size),console.log("Typ pliku:",f.type),e(f)}else console.error("Nie wybrano żadnego pliku!")},c=async()=>{if(console.log("Funkcja handleUpload została wywołana."),!t){console.error("Brak wybranego pliku do przesłania!");return}r(!0);const d=f9(o,`images/${t.name}`);console.log("Przygotowano StorageRef:",d.fullPath);const f=h9(d,t);f.on("state_changed",m=>{const g=m.bytesTransferred/m.totalBytes*100;s(g.toFixed(2)),console.log(`Postęp przesyłania: ${g.toFixed(2)}%`)},m=>{console.error("Błąd podczas przesyłania pliku:",m),r(!1)},async()=>{try{const m=await d9(f.snapshot.ref);console.log("Plik przesłany! URL:",m),await $h(mo(a,"pictures"),{url:m,name:t.name,createdAt:new Date}),console.log("Dane zapisane w Firestore pomyślnie!"),alert("Zdjęcie zostało przesłane pomyślnie!")}catch(m){console.error("Błąd podczas zapisywania danych w Firestore:",m)}finally{r(!1),s(0)}})};return A.jsxs("div",{style:{padding:"20px",fontFamily:"Arial, sans-serif"},children:[A.jsx("h1",{children:"Prześlij zdjęcie"}),A.jsx("input",{type:"file",onChange:u}),A.jsx("br",{}),i>0&&A.jsxs("p",{style:{margin:"10px 0"},children:["Postęp przesyłania: ",A.jsxs("strong",{children:[i,"%"]})]}),A.jsx("button",{onClick:c,disabled:n,style:{padding:"10px 20px",backgroundColor:n?"gray":"blue",color:"white",border:"none",borderRadius:"5px",cursor:n?"not-allowed":"pointer",marginTop:"10px"},children:n?"Przesyłanie...":"Prześlij"})]})},_9="/gallery/assets/video/api.json";function w9(){var m,g;const[t,e]=D.useState([]),[n,r]=D.useState(0),[i,s]=D.useState(!1),o=D.useRef(),[a,u]=D.useState(window.innerWidth<=992),[c,d]=D.useState(!0);D.useEffect(()=>{console.log("Fetching videos from API..."),fetch(_9).then(E=>E.json()).then(E=>e(E)).catch(E=>console.error("Failed to fetch videos:",E)).finally(()=>d(!1))},[]),D.useEffect(()=>{var E;t.length>0&&o.current&&(o.current.src=(E=t[n])==null?void 0:E.video,o.current.load(),s(!1))},[t,n]),D.useEffect(()=>{const E=()=>{u(window.innerWidth<=992)};return window.addEventListener("resize",E),()=>{window.removeEventListener("resize",E)}},[]);const f=()=>{s(E=>!E)};return t.length<1?A.jsx("div",{children:"Loading..."}):c?A.jsx("div",{className:"flex justify-center items-center min-h-screen",style:{backgroundColor:"black",color:"white"},children:A.jsx(Qj,{color:"#00BFFF",height:80,width:80})}):A.jsx(A.Fragment,{children:A.jsxs("div",{style:{backgroundImage:'url("https://raw.githubusercontent.com/wolczan/gallery/main/public/back.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",minHeight:"100vh",width:"100%",backgroundAttachment:"fixed"},children:[A.jsx(wu,{expand:"lg",collapseOnSelect:!0,className:"navbar-custom",style:{height:"40px",backgroundColor:"black",color:"white"},children:A.jsxs(_g,{className:"justify-content-between d-flex custom-margin-top",style:{alignItems:"baseline",backgroundColor:""},children:[A.jsxs(wu.Brand,{href:"#home",style:{fontSize:"17px",color:"white"},children:[A.jsx("img",{src:"https://raw.githubusercontent.com/wolczan/gallery/refs/heads/main/napis.webp",width:"35",height:"50",className:"d-inline-block",alt:""}),"Gallery"]}),A.jsx(W3,{}),A.jsx(wu.Toggle,{"aria-controls":"responsive-navbar-nav",style:{paddingBottom:"0px",alignItems:"center",backgroundColor:"white"}}),A.jsx(wu.Collapse,{id:"responsive-navbar-nav",style:{backgroundColor:"black",opacity:1,padding:"0px"},children:A.jsxs(Nn,{className:"mx-auto",children:[A.jsx(Nn.Link,{href:"#home",className:"nav-link-custom",children:"Home"}),A.jsx(Nn.Link,{href:"#about",className:"nav-link-custom",children:"About"}),A.jsx(Nn.Link,{href:"#pricing",className:"nav-link-custom",children:"Films"}),A.jsx(Nn.Link,{href:"#features",className:"nav-link-custom",children:"Images"}),A.jsx(Nn.Link,{href:"#pricing",className:"nav-link-custom",children:"My List"}),A.jsx(Nn.Link,{href:"#pricing",className:"nav-link-custom",children:"Latest"}),A.jsx(Nn.Link,{href:"#pricing",className:"nav-link-custom",children:"Contact"}),A.jsx(Nn.Link,{href:"#signin",className:"nav-link-custom btn btn-custom",children:"Sign In"}),A.jsx(Nn.Link,{href:"#signup",className:"nav-link-custom btn btn-custom",children:"Sign Up"})]})})]})}),A.jsx("div",{className:"min-h-screen text-white flex items-center justify-center",children:A.jsxs("section",{className:"flex flex-row items-center space-x-2 p-1 w-full mt-4 mb-4 ",style:{justifyContent:"space-evenly"},children:[A.jsx(iR,{className:"flex-shrink-0 w-[25%] sm:w-[30%] lg:w-[25%] p-1 rounded-lg todo-wrapper-shadow relative z-10"}),A.jsx("div",{className:"flex-shrink-0 w-[15%] sm:w-[20%] lg:w-[11%] flex items-center justify-center border-1 rounded-lg shadow-2xl shadow-white bg-black",children:i&&t.length>0?A.jsx("video",{ref:o,src:(m=t[n])==null?void 0:m.video,className:"object-cover rounded-lg w-full h-full border-1",controls:!0,autoPlay:!0,style:{width:"150px",height:"260px"}}):A.jsx("img",{src:(g=t[n])==null?void 0:g.cover,alt:"Video cover",style:{width:"150px",height:"260px"},className:"hover-enlarge object-cover rounded-lg w-full h-full"})})]})}),A.jsxs("div",{className:"relative z-10 p-1 rounded bg-black text-white border-1 flex flex-col justify-between",style:{minHeight:"120px",maxWidth:"400px",width:"100%",margin:"auto",boxShadow:"10px 15px 80px -5px rgba(0, 0, 0, 0.7)"},children:[A.jsxs("div",{children:[A.jsx("h2",{style:{fontSize:"1rem",fontWeight:"bold",color:"white"},className:"text-2xl font-bold text-white",children:t[n].title}),A.jsx("p",{className:"text-white",children:t[n].description})]}),A.jsx("div",{className:"flex justify-end mt-auto",children:A.jsx("button",{onClick:f,className:"relative bg-gradient-to-r from-red-600 via-pink-500 to-red-600 hover:from-red-500 hover:via-orange-400 hover:to-red-500 active:from-red-700 active:via-pink-600 active:to-red-700 text-white py-1 px-4 rounded-full m-2 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95",style:{border:"2px solid rgba(255, 255, 255, 0.4)",boxShadow:"0 0 15px rgba(255, 0, 0, 0.8)",color:"white"},children:i?A.jsx(e5,{}):A.jsx(t5,{})})})]}),A.jsxs("section",{className:"min-h-screen flex flex-col items-center",children:[A.jsx("h1",{className:"heading-reset text-4xl md:text-5xl font-extrabold text-center mt-12 text-white drop-shadow-lg tracking-wide",children:"Browse Library"}),A.jsx("div",{className:"flex flex-wrap justify-center items-center p-4 max-w-screen-lg mx-auto min-h-screen",children:t.map((E,C)=>A.jsx("div",{onClick:()=>r(C),className:`hover-enlarge border-1 m-2 rounded-lg overflow-hidden cursor-pointer ${n===C?"border-4 border-blue-500":""}`,style:{width:"129px",height:"170px",borderRadius:"6px"},children:A.jsx("img",{src:E.cover,className:"object-cover w-full h-full rounded-lg",alt:E.title})},E.id))})]}),A.jsxs("div",{className:"p-4 max-w-screen-sm mx-auto  sm:space-x-0 sm:space-y-2 custom-container",children:[A.jsxs("div",{className:"w-full mt-8 mx-auto",children:[" ",A.jsx(z3,{})]}),A.jsx("div",{className:"w-full map-container p-5 mx-auto",children:A.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.374953124007!2d19.395962676321443!3d51.75924867968213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a3460d27d2c89%3A0x4a2f25c77f622a88!2s%C5%81%C3%B3d%C5%BA%2094-203%2C%20Poland!5e0!3m2!1sen!2sus!4v1698609072847!5m2!1sen!2sus",width:"350",height:"250",style:{border:0},allowFullScreen:"",loading:"lazy",title:"Google Map - Łódź 94-203"})})]}),A.jsx(v9,{}),A.jsx(n5,{}),A.jsx(q3,{})]})})}console.log("Starting application...");kf.createRoot(document.getElementById("root")).render(A.jsx(Re.StrictMode,{children:A.jsx(w9,{})}));console.log("Application started.");
