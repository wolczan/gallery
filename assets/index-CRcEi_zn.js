(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Fc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tw={exports:{}},jc={},nw={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl=Symbol.for("react.element"),TC=Symbol.for("react.portal"),IC=Symbol.for("react.fragment"),SC=Symbol.for("react.strict_mode"),AC=Symbol.for("react.profiler"),kC=Symbol.for("react.provider"),CC=Symbol.for("react.context"),RC=Symbol.for("react.forward_ref"),xC=Symbol.for("react.suspense"),PC=Symbol.for("react.memo"),bC=Symbol.for("react.lazy"),Ev=Symbol.iterator;function NC(t){return t===null||typeof t!="object"?null:(t=Ev&&t[Ev]||t["@@iterator"],typeof t=="function"?t:null)}var rw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iw=Object.assign,sw={};function co(t,e,n){this.props=t,this.context=e,this.refs=sw,this.updater=n||rw}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ow(){}ow.prototype=co.prototype;function Jp(t,e,n){this.props=t,this.context=e,this.refs=sw,this.updater=n||rw}var Zp=Jp.prototype=new ow;Zp.constructor=Jp;iw(Zp,co.prototype);Zp.isPureReactComponent=!0;var Tv=Array.isArray,aw=Object.prototype.hasOwnProperty,em={current:null},lw={key:!0,ref:!0,__self:!0,__source:!0};function uw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)aw.call(e,r)&&!lw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:rl,type:t,key:s,ref:o,props:i,_owner:em.current}}function OC(t,e){return{$$typeof:rl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tm(t){return typeof t=="object"&&t!==null&&t.$$typeof===rl}function DC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Iv=/\/+/g;function Zh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?DC(""+t.key):e.toString(36)}function fu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case rl:case TC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zh(o,0):r,Tv(i)?(n="",t!=null&&(n=t.replace(Iv,"$&/")+"/"),fu(i,e,n,"",function(c){return c})):i!=null&&(tm(i)&&(i=OC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Iv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Tv(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Zh(s,a);o+=fu(s,e,n,u,i)}else if(u=NC(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Zh(s,a++),o+=fu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function jl(t,e,n){if(t==null)return t;var r=[],i=0;return fu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function LC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},du={transition:null},MC={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:du,ReactCurrentOwner:em};ie.Children={map:jl,forEach:function(t,e,n){jl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return jl(t,function(){e++}),e},toArray:function(t){return jl(t,function(e){return e})||[]},only:function(t){if(!tm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=co;ie.Fragment=IC;ie.Profiler=AC;ie.PureComponent=Jp;ie.StrictMode=SC;ie.Suspense=xC;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MC;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=iw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=em.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)aw.call(e,u)&&!lw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:rl,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:CC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kC,_context:t},t.Consumer=t};ie.createElement=uw;ie.createFactory=function(t){var e=uw.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:RC,render:t}};ie.isValidElement=tm;ie.lazy=function(t){return{$$typeof:bC,_payload:{_status:-1,_result:t},_init:LC}};ie.memo=function(t,e){return{$$typeof:PC,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=du.transition;du.transition={};try{t()}finally{du.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return kt.current.useCallback(t,e)};ie.useContext=function(t){return kt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return kt.current.useEffect(t,e)};ie.useId=function(){return kt.current.useId()};ie.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return kt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};ie.useRef=function(t){return kt.current.useRef(t)};ie.useState=function(t){return kt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return kt.current.useTransition()};ie.version="18.2.0";nw.exports=ie;var D=nw.exports;const ke=Fc(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VC=D,FC=Symbol.for("react.element"),jC=Symbol.for("react.fragment"),UC=Object.prototype.hasOwnProperty,$C=VC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zC={key:!0,ref:!0,__self:!0,__source:!0};function cw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)UC.call(e,r)&&!zC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:FC,type:t,key:s,ref:o,props:i,_owner:$C.current}}jc.Fragment=jC;jc.jsx=cw;jc.jsxs=cw;tw.exports=jc;var C=tw.exports,td={},hw={exports:{}},Qt={},fw={exports:{}},dw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,K){var Q=U.length;U.push(K);e:for(;0<Q;){var se=Q-1>>>1,te=U[se];if(0<i(te,K))U[se]=K,U[Q]=te,Q=se;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var K=U[0],Q=U.pop();if(Q!==K){U[0]=Q;e:for(var se=0,te=U.length,he=te>>>1;se<he;){var We=2*(se+1)-1,de=U[We],Le=We+1,lt=U[Le];if(0>i(de,Q))Le<te&&0>i(lt,de)?(U[se]=lt,U[Le]=Q,se=Le):(U[se]=de,U[We]=Q,se=We);else if(Le<te&&0>i(lt,Q))U[se]=lt,U[Le]=Q,se=Le;else break e}}return K}function i(U,K){var Q=U.sortIndex-K.sortIndex;return Q!==0?Q:U.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],f=1,p=null,m=3,v=!1,E=!1,R=!1,P=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(U){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=U)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function b(U){if(R=!1,I(U),!E)if(n(u)!==null)E=!0,at(V);else{var K=n(c);K!==null&&De(b,K.startTime-U)}}function V(U,K){E=!1,R&&(R=!1,T(y),y=-1),v=!0;var Q=m;try{for(I(K),p=n(u);p!==null&&(!(p.expirationTime>K)||U&&!x());){var se=p.callback;if(typeof se=="function"){p.callback=null,m=p.priorityLevel;var te=se(p.expirationTime<=K);K=t.unstable_now(),typeof te=="function"?p.callback=te:p===n(u)&&r(u),I(K)}else r(u);p=n(u)}if(p!==null)var he=!0;else{var We=n(c);We!==null&&De(b,We.startTime-K),he=!1}return he}finally{p=null,m=Q,v=!1}}var L=!1,_=null,y=-1,S=5,k=-1;function x(){return!(t.unstable_now()-k<S)}function N(){if(_!==null){var U=t.unstable_now();k=U;var K=!0;try{K=_(!0,U)}finally{K?A():(L=!1,_=null)}}else L=!1}var A;if(typeof w=="function")A=function(){w(N)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,Rt=Be.port2;Be.port1.onmessage=N,A=function(){Rt.postMessage(null)}}else A=function(){P(N,0)};function at(U){_=U,L||(L=!0,A())}function De(U,K){y=P(function(){U(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){E||v||(E=!0,at(V))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var Q=m;m=K;try{return U()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,K){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Q=m;m=U;try{return K()}finally{m=Q}},t.unstable_scheduleCallback=function(U,K,Q){var se=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?se+Q:se):Q=se,U){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=Q+te,U={id:f++,callback:K,priorityLevel:U,startTime:Q,expirationTime:te,sortIndex:-1},Q>se?(U.sortIndex=Q,e(c,U),n(u)===null&&U===n(c)&&(R?(T(y),y=-1):R=!0,De(b,Q-se))):(U.sortIndex=te,e(u,U),E||v||(E=!0,at(V))),U},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(U){var K=m;return function(){var Q=m;m=K;try{return U.apply(this,arguments)}finally{m=Q}}}})(dw);fw.exports=dw;var BC=fw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pw=D,Gt=BC;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mw=new Set,Sa={};function Qi(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(Sa[t]=e,t=0;t<e.length;t++)mw.add(e[t])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nd=Object.prototype.hasOwnProperty,WC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sv={},Av={};function HC(t){return nd.call(Av,t)?!0:nd.call(Sv,t)?!1:WC.test(t)?Av[t]=!0:(Sv[t]=!0,!1)}function qC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function KC(t,e,n,r){if(e===null||typeof e>"u"||qC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var nm=/[\-:]([a-z])/g;function rm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nm,rm);st[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nm,rm);st[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nm,rm);st[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function im(t,e,n,r){var i=st.hasOwnProperty(e)?st[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(KC(e,n,i,r)&&(n=null),r||i===null?HC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ul=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),sm=Symbol.for("react.strict_mode"),rd=Symbol.for("react.profiler"),gw=Symbol.for("react.provider"),yw=Symbol.for("react.context"),om=Symbol.for("react.forward_ref"),id=Symbol.for("react.suspense"),sd=Symbol.for("react.suspense_list"),am=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),vw=Symbol.for("react.offscreen"),kv=Symbol.iterator;function Vo(t){return t===null||typeof t!="object"?null:(t=kv&&t[kv]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,ef;function Ko(t){if(ef===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ef=e&&e[1]||""}return`
`+ef+t}var tf=!1;function nf(t,e){if(!t||tf)return"";tf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{tf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ko(t):""}function GC(t){switch(t.tag){case 5:return Ko(t.type);case 16:return Ko("Lazy");case 13:return Ko("Suspense");case 19:return Ko("SuspenseList");case 0:case 2:case 15:return t=nf(t.type,!1),t;case 11:return t=nf(t.type.render,!1),t;case 1:return t=nf(t.type,!0),t;default:return""}}function od(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ms:return"Fragment";case ps:return"Portal";case rd:return"Profiler";case sm:return"StrictMode";case id:return"Suspense";case sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yw:return(t.displayName||"Context")+".Consumer";case gw:return(t._context.displayName||"Context")+".Provider";case om:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case am:return e=t.displayName||null,e!==null?e:od(t.type)||"Memo";case Ar:e=t._payload,t=t._init;try{return od(t(e))}catch{}}return null}function QC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return od(e);case 8:return e===sm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _w(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YC(t){var e=_w(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $l(t){t._valueTracker||(t._valueTracker=YC(t))}function ww(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_w(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $u(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ad(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ew(t,e){e=e.checked,e!=null&&im(t,"checked",e,!1)}function ld(t,e){Ew(t,e);var n=Jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ud(t,e.type,n):e.hasOwnProperty("defaultValue")&&ud(t,e.type,Jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ud(t,e,n){(e!=="number"||$u(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Go=Array.isArray;function bs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(Go(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jr(n)}}function Tw(t,e){var n=Jr(e.value),r=Jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Pv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Iw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Iw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zl,Sw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zl=zl||document.createElement("div"),zl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XC=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){XC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function Aw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function kw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Aw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var JC=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fd(t,e){if(e){if(JC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function dd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pd=null;function lm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var md=null,Ns=null,Os=null;function bv(t){if(t=ol(t)){if(typeof md!="function")throw Error($(280));var e=t.stateNode;e&&(e=Wc(e),md(t.stateNode,t.type,e))}}function Cw(t){Ns?Os?Os.push(t):Os=[t]:Ns=t}function Rw(){if(Ns){var t=Ns,e=Os;if(Os=Ns=null,bv(t),e)for(t=0;t<e.length;t++)bv(e[t])}}function xw(t,e){return t(e)}function Pw(){}var rf=!1;function bw(t,e,n){if(rf)return t(e,n);rf=!0;try{return xw(t,e,n)}finally{rf=!1,(Ns!==null||Os!==null)&&(Pw(),Rw())}}function ka(t,e){var n=t.stateNode;if(n===null)return null;var r=Wc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var gd=!1;if(rr)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){gd=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{gd=!1}function ZC(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var aa=!1,zu=null,Bu=!1,yd=null,eR={onError:function(t){aa=!0,zu=t}};function tR(t,e,n,r,i,s,o,a,u){aa=!1,zu=null,ZC.apply(eR,arguments)}function nR(t,e,n,r,i,s,o,a,u){if(tR.apply(this,arguments),aa){if(aa){var c=zu;aa=!1,zu=null}else throw Error($(198));Bu||(Bu=!0,yd=c)}}function Yi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Nw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nv(t){if(Yi(t)!==t)throw Error($(188))}function rR(t){var e=t.alternate;if(!e){if(e=Yi(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Nv(i),t;if(s===r)return Nv(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function Ow(t){return t=rR(t),t!==null?Dw(t):null}function Dw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dw(t);if(e!==null)return e;t=t.sibling}return null}var Lw=Gt.unstable_scheduleCallback,Ov=Gt.unstable_cancelCallback,iR=Gt.unstable_shouldYield,sR=Gt.unstable_requestPaint,Ve=Gt.unstable_now,oR=Gt.unstable_getCurrentPriorityLevel,um=Gt.unstable_ImmediatePriority,Mw=Gt.unstable_UserBlockingPriority,Wu=Gt.unstable_NormalPriority,aR=Gt.unstable_LowPriority,Vw=Gt.unstable_IdlePriority,Uc=null,On=null;function lR(t){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Uc,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:hR,uR=Math.log,cR=Math.LN2;function hR(t){return t>>>=0,t===0?32:31-(uR(t)/cR|0)|0}var Bl=64,Wl=4194304;function Qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Qo(a):(s&=o,s!==0&&(r=Qo(s)))}else o=n&~i,o!==0?r=Qo(o):s!==0&&(r=Qo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function fR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=fR(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function vd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fw(){var t=Bl;return Bl<<=1,!(Bl&4194240)&&(Bl=64),t}function sf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function il(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function pR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function cm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function jw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Uw,hm,$w,zw,Bw,_d=!1,Hl=[],Ur=null,$r=null,zr=null,Ca=new Map,Ra=new Map,Rr=[],mR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dv(t,e){switch(t){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function jo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ol(e),e!==null&&hm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function gR(t,e,n,r,i){switch(e){case"focusin":return Ur=jo(Ur,t,e,n,r,i),!0;case"dragenter":return $r=jo($r,t,e,n,r,i),!0;case"mouseover":return zr=jo(zr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ca.set(s,jo(Ca.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ra.set(s,jo(Ra.get(s)||null,t,e,n,r,i)),!0}return!1}function Ww(t){var e=Ei(t.target);if(e!==null){var n=Yi(e);if(n!==null){if(e=n.tag,e===13){if(e=Nw(n),e!==null){t.blockedOn=e,Bw(t.priority,function(){$w(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pd=r,n.target.dispatchEvent(r),pd=null}else return e=ol(n),e!==null&&hm(e),t.blockedOn=n,!1;e.shift()}return!0}function Lv(t,e,n){pu(t)&&n.delete(e)}function yR(){_d=!1,Ur!==null&&pu(Ur)&&(Ur=null),$r!==null&&pu($r)&&($r=null),zr!==null&&pu(zr)&&(zr=null),Ca.forEach(Lv),Ra.forEach(Lv)}function Uo(t,e){t.blockedOn===e&&(t.blockedOn=null,_d||(_d=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,yR)))}function xa(t){function e(i){return Uo(i,t)}if(0<Hl.length){Uo(Hl[0],t);for(var n=1;n<Hl.length;n++){var r=Hl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ur!==null&&Uo(Ur,t),$r!==null&&Uo($r,t),zr!==null&&Uo(zr,t),Ca.forEach(e),Ra.forEach(e),n=0;n<Rr.length;n++)r=Rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)Ww(n),n.blockedOn===null&&Rr.shift()}var Ds=pr.ReactCurrentBatchConfig,qu=!0;function vR(t,e,n,r){var i=pe,s=Ds.transition;Ds.transition=null;try{pe=1,fm(t,e,n,r)}finally{pe=i,Ds.transition=s}}function _R(t,e,n,r){var i=pe,s=Ds.transition;Ds.transition=null;try{pe=4,fm(t,e,n,r)}finally{pe=i,Ds.transition=s}}function fm(t,e,n,r){if(qu){var i=wd(t,e,n,r);if(i===null)mf(t,e,r,Ku,n),Dv(t,r);else if(gR(i,t,e,n,r))r.stopPropagation();else if(Dv(t,r),e&4&&-1<mR.indexOf(t)){for(;i!==null;){var s=ol(i);if(s!==null&&Uw(s),s=wd(t,e,n,r),s===null&&mf(t,e,r,Ku,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mf(t,e,r,null,n)}}var Ku=null;function wd(t,e,n,r){if(Ku=null,t=lm(r),t=Ei(t),t!==null)if(e=Yi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Nw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ku=t,null}function Hw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oR()){case um:return 1;case Mw:return 4;case Wu:case aR:return 16;case Vw:return 536870912;default:return 16}default:return 16}}var Lr=null,dm=null,mu=null;function qw(){if(mu)return mu;var t,e=dm,n=e.length,r,i="value"in Lr?Lr.value:Lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return mu=i.slice(t,1<r?1-r:void 0)}function gu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ql(){return!0}function Mv(){return!1}function Yt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ql:Mv,this.isPropagationStopped=Mv,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pm=Yt(ho),sl=Pe({},ho,{view:0,detail:0}),wR=Yt(sl),of,af,$o,$c=Pe({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$o&&($o&&t.type==="mousemove"?(of=t.screenX-$o.screenX,af=t.screenY-$o.screenY):af=of=0,$o=t),of)},movementY:function(t){return"movementY"in t?t.movementY:af}}),Vv=Yt($c),ER=Pe({},$c,{dataTransfer:0}),TR=Yt(ER),IR=Pe({},sl,{relatedTarget:0}),lf=Yt(IR),SR=Pe({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),AR=Yt(SR),kR=Pe({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),CR=Yt(kR),RR=Pe({},ho,{data:0}),Fv=Yt(RR),xR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bR[t])?!!e[t]:!1}function mm(){return NR}var OR=Pe({},sl,{key:function(t){if(t.key){var e=xR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mm,charCode:function(t){return t.type==="keypress"?gu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),DR=Yt(OR),LR=Pe({},$c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jv=Yt(LR),MR=Pe({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mm}),VR=Yt(MR),FR=Pe({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),jR=Yt(FR),UR=Pe({},$c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$R=Yt(UR),zR=[9,13,27,32],gm=rr&&"CompositionEvent"in window,la=null;rr&&"documentMode"in document&&(la=document.documentMode);var BR=rr&&"TextEvent"in window&&!la,Kw=rr&&(!gm||la&&8<la&&11>=la),Uv=" ",$v=!1;function Gw(t,e){switch(t){case"keyup":return zR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function WR(t,e){switch(t){case"compositionend":return Qw(e);case"keypress":return e.which!==32?null:($v=!0,Uv);case"textInput":return t=e.data,t===Uv&&$v?null:t;default:return null}}function HR(t,e){if(gs)return t==="compositionend"||!gm&&Gw(t,e)?(t=qw(),mu=dm=Lr=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kw&&e.locale!=="ko"?null:e.data;default:return null}}var qR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qR[t.type]:e==="textarea"}function Yw(t,e,n,r){Cw(r),e=Gu(e,"onChange"),0<e.length&&(n=new pm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ua=null,Pa=null;function KR(t){aE(t,0)}function zc(t){var e=_s(t);if(ww(e))return t}function GR(t,e){if(t==="change")return e}var Xw=!1;if(rr){var uf;if(rr){var cf="oninput"in document;if(!cf){var Bv=document.createElement("div");Bv.setAttribute("oninput","return;"),cf=typeof Bv.oninput=="function"}uf=cf}else uf=!1;Xw=uf&&(!document.documentMode||9<document.documentMode)}function Wv(){ua&&(ua.detachEvent("onpropertychange",Jw),Pa=ua=null)}function Jw(t){if(t.propertyName==="value"&&zc(Pa)){var e=[];Yw(e,Pa,t,lm(t)),bw(KR,e)}}function QR(t,e,n){t==="focusin"?(Wv(),ua=e,Pa=n,ua.attachEvent("onpropertychange",Jw)):t==="focusout"&&Wv()}function YR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zc(Pa)}function XR(t,e){if(t==="click")return zc(e)}function JR(t,e){if(t==="input"||t==="change")return zc(e)}function ZR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var En=typeof Object.is=="function"?Object.is:ZR;function ba(t,e){if(En(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nd.call(e,i)||!En(t[i],e[i]))return!1}return!0}function Hv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qv(t,e){var n=Hv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hv(n)}}function Zw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function eE(){for(var t=window,e=$u();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$u(t.document)}return e}function ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ex(t){var e=eE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zw(n.ownerDocument.documentElement,n)){if(r!==null&&ym(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qv(n,s);var o=qv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tx=rr&&"documentMode"in document&&11>=document.documentMode,ys=null,Ed=null,ca=null,Td=!1;function Kv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Td||ys==null||ys!==$u(r)||(r=ys,"selectionStart"in r&&ym(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ca&&ba(ca,r)||(ca=r,r=Gu(Ed,"onSelect"),0<r.length&&(e=new pm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ys)))}function Kl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionend:Kl("Transition","TransitionEnd")},hf={},tE={};rr&&(tE=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Bc(t){if(hf[t])return hf[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tE)return hf[t]=e[n];return t}var nE=Bc("animationend"),rE=Bc("animationiteration"),iE=Bc("animationstart"),sE=Bc("transitionend"),oE=new Map,Gv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(t,e){oE.set(t,e),Qi(e,[t])}for(var ff=0;ff<Gv.length;ff++){var df=Gv[ff],nx=df.toLowerCase(),rx=df[0].toUpperCase()+df.slice(1);oi(nx,"on"+rx)}oi(nE,"onAnimationEnd");oi(rE,"onAnimationIteration");oi(iE,"onAnimationStart");oi("dblclick","onDoubleClick");oi("focusin","onFocus");oi("focusout","onBlur");oi(sE,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);Qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ix=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function Qv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nR(r,e,void 0,t),t.currentTarget=null}function aE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Qv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Qv(i,a,c),s=u}}}if(Bu)throw t=yd,Bu=!1,yd=null,t}function we(t,e){var n=e[Cd];n===void 0&&(n=e[Cd]=new Set);var r=t+"__bubble";n.has(r)||(lE(e,t,2,!1),n.add(r))}function pf(t,e,n){var r=0;e&&(r|=4),lE(n,t,r,e)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function Na(t){if(!t[Gl]){t[Gl]=!0,mw.forEach(function(n){n!=="selectionchange"&&(ix.has(n)||pf(n,!1,t),pf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gl]||(e[Gl]=!0,pf("selectionchange",!1,e))}}function lE(t,e,n,r){switch(Hw(e)){case 1:var i=vR;break;case 4:i=_R;break;default:i=fm}n=i.bind(null,e,n,t),i=void 0,!gd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ei(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}bw(function(){var c=s,f=lm(n),p=[];e:{var m=oE.get(t);if(m!==void 0){var v=pm,E=t;switch(t){case"keypress":if(gu(n)===0)break e;case"keydown":case"keyup":v=DR;break;case"focusin":E="focus",v=lf;break;case"focusout":E="blur",v=lf;break;case"beforeblur":case"afterblur":v=lf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Vv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=TR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=VR;break;case nE:case rE:case iE:v=AR;break;case sE:v=jR;break;case"scroll":v=wR;break;case"wheel":v=$R;break;case"copy":case"cut":case"paste":v=CR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=jv}var R=(e&4)!==0,P=!R&&t==="scroll",T=R?m!==null?m+"Capture":null:m;R=[];for(var w=c,I;w!==null;){I=w;var b=I.stateNode;if(I.tag===5&&b!==null&&(I=b,T!==null&&(b=ka(w,T),b!=null&&R.push(Oa(w,b,I)))),P)break;w=w.return}0<R.length&&(m=new v(m,E,null,n,f),p.push({event:m,listeners:R}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==pd&&(E=n.relatedTarget||n.fromElement)&&(Ei(E)||E[ir]))break e;if((v||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,v?(E=n.relatedTarget||n.toElement,v=c,E=E?Ei(E):null,E!==null&&(P=Yi(E),E!==P||E.tag!==5&&E.tag!==6)&&(E=null)):(v=null,E=c),v!==E)){if(R=Vv,b="onMouseLeave",T="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(R=jv,b="onPointerLeave",T="onPointerEnter",w="pointer"),P=v==null?m:_s(v),I=E==null?m:_s(E),m=new R(b,w+"leave",v,n,f),m.target=P,m.relatedTarget=I,b=null,Ei(f)===c&&(R=new R(T,w+"enter",E,n,f),R.target=I,R.relatedTarget=P,b=R),P=b,v&&E)t:{for(R=v,T=E,w=0,I=R;I;I=as(I))w++;for(I=0,b=T;b;b=as(b))I++;for(;0<w-I;)R=as(R),w--;for(;0<I-w;)T=as(T),I--;for(;w--;){if(R===T||T!==null&&R===T.alternate)break t;R=as(R),T=as(T)}R=null}else R=null;v!==null&&Yv(p,m,v,R,!1),E!==null&&P!==null&&Yv(p,P,E,R,!0)}}e:{if(m=c?_s(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var V=GR;else if(zv(m))if(Xw)V=JR;else{V=YR;var L=QR}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=XR);if(V&&(V=V(t,c))){Yw(p,V,n,f);break e}L&&L(t,m,c),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&ud(m,"number",m.value)}switch(L=c?_s(c):window,t){case"focusin":(zv(L)||L.contentEditable==="true")&&(ys=L,Ed=c,ca=null);break;case"focusout":ca=Ed=ys=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,Kv(p,n,f);break;case"selectionchange":if(tx)break;case"keydown":case"keyup":Kv(p,n,f)}var _;if(gm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else gs?Gw(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Kw&&n.locale!=="ko"&&(gs||y!=="onCompositionStart"?y==="onCompositionEnd"&&gs&&(_=qw()):(Lr=f,dm="value"in Lr?Lr.value:Lr.textContent,gs=!0)),L=Gu(c,y),0<L.length&&(y=new Fv(y,t,null,n,f),p.push({event:y,listeners:L}),_?y.data=_:(_=Qw(n),_!==null&&(y.data=_)))),(_=BR?WR(t,n):HR(t,n))&&(c=Gu(c,"onBeforeInput"),0<c.length&&(f=new Fv("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=_))}aE(p,e)})}function Oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ka(t,n),s!=null&&r.unshift(Oa(t,s,i)),s=ka(t,e),s!=null&&r.push(Oa(t,s,i))),t=t.return}return r}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ka(n,s),u!=null&&o.unshift(Oa(n,u,a))):i||(u=ka(n,s),u!=null&&o.push(Oa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var sx=/\r\n?/g,ox=/\u0000|\uFFFD/g;function Xv(t){return(typeof t=="string"?t:""+t).replace(sx,`
`).replace(ox,"")}function Ql(t,e,n){if(e=Xv(e),Xv(t)!==e&&n)throw Error($(425))}function Qu(){}var Id=null,Sd=null;function Ad(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kd=typeof setTimeout=="function"?setTimeout:void 0,ax=typeof clearTimeout=="function"?clearTimeout:void 0,Jv=typeof Promise=="function"?Promise:void 0,lx=typeof queueMicrotask=="function"?queueMicrotask:typeof Jv<"u"?function(t){return Jv.resolve(null).then(t).catch(ux)}:kd;function ux(t){setTimeout(function(){throw t})}function gf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xa(e)}function Br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),Pn="__reactFiber$"+fo,Da="__reactProps$"+fo,ir="__reactContainer$"+fo,Cd="__reactEvents$"+fo,cx="__reactListeners$"+fo,hx="__reactHandles$"+fo;function Ei(t){var e=t[Pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ir]||n[Pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zv(t);t!==null;){if(n=t[Pn])return n;t=Zv(t)}return e}t=n,n=t.parentNode}return null}function ol(t){return t=t[Pn]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Wc(t){return t[Da]||null}var Rd=[],ws=-1;function ai(t){return{current:t}}function Ie(t){0>ws||(t.current=Rd[ws],Rd[ws]=null,ws--)}function ye(t,e){ws++,Rd[ws]=t.current,t.current=e}var Zr={},vt=ai(Zr),Ot=ai(!1),Li=Zr;function Bs(t,e){var n=t.type.contextTypes;if(!n)return Zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Dt(t){return t=t.childContextTypes,t!=null}function Yu(){Ie(Ot),Ie(vt)}function e0(t,e,n){if(vt.current!==Zr)throw Error($(168));ye(vt,e),ye(Ot,n)}function uE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,QC(t)||"Unknown",i));return Pe({},n,r)}function Xu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zr,Li=vt.current,ye(vt,t),ye(Ot,Ot.current),!0}function t0(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=uE(t,e,Li),r.__reactInternalMemoizedMergedChildContext=t,Ie(Ot),Ie(vt),ye(vt,t)):Ie(Ot),ye(Ot,n)}var Gn=null,Hc=!1,yf=!1;function cE(t){Gn===null?Gn=[t]:Gn.push(t)}function fx(t){Hc=!0,cE(t)}function li(){if(!yf&&Gn!==null){yf=!0;var t=0,e=pe;try{var n=Gn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gn=null,Hc=!1}catch(i){throw Gn!==null&&(Gn=Gn.slice(t+1)),Lw(um,li),i}finally{pe=e,yf=!1}}return null}var Es=[],Ts=0,Ju=null,Zu=0,Zt=[],en=0,Mi=null,Yn=1,Xn="";function gi(t,e){Es[Ts++]=Zu,Es[Ts++]=Ju,Ju=t,Zu=e}function hE(t,e,n){Zt[en++]=Yn,Zt[en++]=Xn,Zt[en++]=Mi,Mi=t;var r=Yn;t=Xn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yn=1<<32-yn(e)+i|n<<i|r,Xn=s+t}else Yn=1<<s|n<<i|r,Xn=t}function vm(t){t.return!==null&&(gi(t,1),hE(t,1,0))}function _m(t){for(;t===Ju;)Ju=Es[--Ts],Es[Ts]=null,Zu=Es[--Ts],Es[Ts]=null;for(;t===Mi;)Mi=Zt[--en],Zt[en]=null,Xn=Zt[--en],Zt[en]=null,Yn=Zt[--en],Zt[en]=null}var Wt=null,zt=null,Ae=!1,mn=null;function fE(t,e){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function n0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,zt=Br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mi!==null?{id:Yn,overflow:Xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,zt=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pd(t){if(Ae){var e=zt;if(e){var n=e;if(!n0(t,e)){if(xd(t))throw Error($(418));e=Br(n.nextSibling);var r=Wt;e&&n0(t,e)?fE(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Wt=t)}}else{if(xd(t))throw Error($(418));t.flags=t.flags&-4097|2,Ae=!1,Wt=t}}}function r0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function Yl(t){if(t!==Wt)return!1;if(!Ae)return r0(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ad(t.type,t.memoizedProps)),e&&(e=zt)){if(xd(t))throw dE(),Error($(418));for(;e;)fE(t,e),e=Br(e.nextSibling)}if(r0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=Br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Wt?Br(t.stateNode.nextSibling):null;return!0}function dE(){for(var t=zt;t;)t=Br(t.nextSibling)}function Ws(){zt=Wt=null,Ae=!1}function wm(t){mn===null?mn=[t]:mn.push(t)}var dx=pr.ReactCurrentBatchConfig;function dn(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ec=ai(null),tc=null,Is=null,Em=null;function Tm(){Em=Is=tc=null}function Im(t){var e=ec.current;Ie(ec),t._currentValue=e}function bd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){tc=t,Em=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bt=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(Em!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(tc===null)throw Error($(308));Is=t,tc.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var Ti=null;function Sm(t){Ti===null?Ti=[t]:Ti.push(t)}function pE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sm(e)):(n.next=i.next,i.next=n),e.interleaved=n,sr(t,r)}function sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kr=!1;function Am(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,sr(t,n)}return i=r.interleaved,i===null?(e.next=e,Sm(r)):(e.next=i.next,i.next=e),r.interleaved=e,sr(t,n)}function yu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cm(t,n)}}function i0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nc(t,e,n,r){var i=t.updateQueue;kr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,R=a;switch(m=e,v=n,R.tag){case 1:if(E=R.payload,typeof E=="function"){p=E.call(v,p,m);break e}p=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=R.payload,m=typeof E=="function"?E.call(v,p,m):E,m==null)break e;p=Pe({},p,m);break e;case 2:kr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=v,u=p):f=f.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Fi|=o,t.lanes=o,t.memoizedState=p}}function s0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var gE=new pw.Component().refs;function Nd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qc={isMounted:function(t){return(t=t._reactInternals)?Yi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=At(),i=qr(t),s=tr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,i),e!==null&&(vn(e,t,i,r),yu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=At(),i=qr(t),s=tr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,i),e!==null&&(vn(e,t,i,r),yu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=At(),r=qr(t),i=tr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Wr(t,i,r),e!==null&&(vn(e,t,r,n),yu(e,t,r))}};function o0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ba(n,r)||!ba(i,s):!0}function yE(t,e,n){var r=!1,i=Zr,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=Dt(e)?Li:vt.current,r=e.contextTypes,s=(r=r!=null)?Bs(t,i):Zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function a0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qc.enqueueReplaceState(e,e.state,null)}function Od(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=gE,Am(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=Dt(e)?Li:vt.current,i.context=Bs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&qc.enqueueReplaceState(i,i.state,null),nc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===gE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function Xl(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function l0(t){var e=t._init;return e(t._payload)}function vE(t){function e(T,w){if(t){var I=T.deletions;I===null?(T.deletions=[w],T.flags|=16):I.push(w)}}function n(T,w){if(!t)return null;for(;w!==null;)e(T,w),w=w.sibling;return null}function r(T,w){for(T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function i(T,w){return T=Kr(T,w),T.index=0,T.sibling=null,T}function s(T,w,I){return T.index=I,t?(I=T.alternate,I!==null?(I=I.index,I<w?(T.flags|=2,w):I):(T.flags|=2,w)):(T.flags|=1048576,w)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,w,I,b){return w===null||w.tag!==6?(w=Sf(I,T.mode,b),w.return=T,w):(w=i(w,I),w.return=T,w)}function u(T,w,I,b){var V=I.type;return V===ms?f(T,w,I.props.children,b,I.key):w!==null&&(w.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ar&&l0(V)===w.type)?(b=i(w,I.props),b.ref=zo(T,w,I),b.return=T,b):(b=Iu(I.type,I.key,I.props,null,T.mode,b),b.ref=zo(T,w,I),b.return=T,b)}function c(T,w,I,b){return w===null||w.tag!==4||w.stateNode.containerInfo!==I.containerInfo||w.stateNode.implementation!==I.implementation?(w=Af(I,T.mode,b),w.return=T,w):(w=i(w,I.children||[]),w.return=T,w)}function f(T,w,I,b,V){return w===null||w.tag!==7?(w=Ri(I,T.mode,b,V),w.return=T,w):(w=i(w,I),w.return=T,w)}function p(T,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Sf(""+w,T.mode,I),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ul:return I=Iu(w.type,w.key,w.props,null,T.mode,I),I.ref=zo(T,null,w),I.return=T,I;case ps:return w=Af(w,T.mode,I),w.return=T,w;case Ar:var b=w._init;return p(T,b(w._payload),I)}if(Go(w)||Vo(w))return w=Ri(w,T.mode,I,null),w.return=T,w;Xl(T,w)}return null}function m(T,w,I,b){var V=w!==null?w.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return V!==null?null:a(T,w,""+I,b);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ul:return I.key===V?u(T,w,I,b):null;case ps:return I.key===V?c(T,w,I,b):null;case Ar:return V=I._init,m(T,w,V(I._payload),b)}if(Go(I)||Vo(I))return V!==null?null:f(T,w,I,b,null);Xl(T,I)}return null}function v(T,w,I,b,V){if(typeof b=="string"&&b!==""||typeof b=="number")return T=T.get(I)||null,a(w,T,""+b,V);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ul:return T=T.get(b.key===null?I:b.key)||null,u(w,T,b,V);case ps:return T=T.get(b.key===null?I:b.key)||null,c(w,T,b,V);case Ar:var L=b._init;return v(T,w,I,L(b._payload),V)}if(Go(b)||Vo(b))return T=T.get(I)||null,f(w,T,b,V,null);Xl(w,b)}return null}function E(T,w,I,b){for(var V=null,L=null,_=w,y=w=0,S=null;_!==null&&y<I.length;y++){_.index>y?(S=_,_=null):S=_.sibling;var k=m(T,_,I[y],b);if(k===null){_===null&&(_=S);break}t&&_&&k.alternate===null&&e(T,_),w=s(k,w,y),L===null?V=k:L.sibling=k,L=k,_=S}if(y===I.length)return n(T,_),Ae&&gi(T,y),V;if(_===null){for(;y<I.length;y++)_=p(T,I[y],b),_!==null&&(w=s(_,w,y),L===null?V=_:L.sibling=_,L=_);return Ae&&gi(T,y),V}for(_=r(T,_);y<I.length;y++)S=v(_,T,y,I[y],b),S!==null&&(t&&S.alternate!==null&&_.delete(S.key===null?y:S.key),w=s(S,w,y),L===null?V=S:L.sibling=S,L=S);return t&&_.forEach(function(x){return e(T,x)}),Ae&&gi(T,y),V}function R(T,w,I,b){var V=Vo(I);if(typeof V!="function")throw Error($(150));if(I=V.call(I),I==null)throw Error($(151));for(var L=V=null,_=w,y=w=0,S=null,k=I.next();_!==null&&!k.done;y++,k=I.next()){_.index>y?(S=_,_=null):S=_.sibling;var x=m(T,_,k.value,b);if(x===null){_===null&&(_=S);break}t&&_&&x.alternate===null&&e(T,_),w=s(x,w,y),L===null?V=x:L.sibling=x,L=x,_=S}if(k.done)return n(T,_),Ae&&gi(T,y),V;if(_===null){for(;!k.done;y++,k=I.next())k=p(T,k.value,b),k!==null&&(w=s(k,w,y),L===null?V=k:L.sibling=k,L=k);return Ae&&gi(T,y),V}for(_=r(T,_);!k.done;y++,k=I.next())k=v(_,T,y,k.value,b),k!==null&&(t&&k.alternate!==null&&_.delete(k.key===null?y:k.key),w=s(k,w,y),L===null?V=k:L.sibling=k,L=k);return t&&_.forEach(function(N){return e(T,N)}),Ae&&gi(T,y),V}function P(T,w,I,b){if(typeof I=="object"&&I!==null&&I.type===ms&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Ul:e:{for(var V=I.key,L=w;L!==null;){if(L.key===V){if(V=I.type,V===ms){if(L.tag===7){n(T,L.sibling),w=i(L,I.props.children),w.return=T,T=w;break e}}else if(L.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ar&&l0(V)===L.type){n(T,L.sibling),w=i(L,I.props),w.ref=zo(T,L,I),w.return=T,T=w;break e}n(T,L);break}else e(T,L);L=L.sibling}I.type===ms?(w=Ri(I.props.children,T.mode,b,I.key),w.return=T,T=w):(b=Iu(I.type,I.key,I.props,null,T.mode,b),b.ref=zo(T,w,I),b.return=T,T=b)}return o(T);case ps:e:{for(L=I.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===I.containerInfo&&w.stateNode.implementation===I.implementation){n(T,w.sibling),w=i(w,I.children||[]),w.return=T,T=w;break e}else{n(T,w);break}else e(T,w);w=w.sibling}w=Af(I,T.mode,b),w.return=T,T=w}return o(T);case Ar:return L=I._init,P(T,w,L(I._payload),b)}if(Go(I))return E(T,w,I,b);if(Vo(I))return R(T,w,I,b);Xl(T,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,w!==null&&w.tag===6?(n(T,w.sibling),w=i(w,I),w.return=T,T=w):(n(T,w),w=Sf(I,T.mode,b),w.return=T,T=w),o(T)):n(T,w)}return P}var Hs=vE(!0),_E=vE(!1),al={},Dn=ai(al),La=ai(al),Ma=ai(al);function Ii(t){if(t===al)throw Error($(174));return t}function km(t,e){switch(ye(Ma,e),ye(La,t),ye(Dn,al),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hd(e,t)}Ie(Dn),ye(Dn,e)}function qs(){Ie(Dn),Ie(La),Ie(Ma)}function wE(t){Ii(Ma.current);var e=Ii(Dn.current),n=hd(e,t.type);e!==n&&(ye(La,t),ye(Dn,n))}function Cm(t){La.current===t&&(Ie(Dn),Ie(La))}var Re=ai(0);function rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vf=[];function Rm(){for(var t=0;t<vf.length;t++)vf[t]._workInProgressVersionPrimary=null;vf.length=0}var vu=pr.ReactCurrentDispatcher,_f=pr.ReactCurrentBatchConfig,Vi=0,xe=null,He=null,Qe=null,ic=!1,ha=!1,Va=0,px=0;function ft(){throw Error($(321))}function xm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!En(t[n],e[n]))return!1;return!0}function Pm(t,e,n,r,i,s){if(Vi=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vu.current=t===null||t.memoizedState===null?vx:_x,t=n(r,i),ha){s=0;do{if(ha=!1,Va=0,25<=s)throw Error($(301));s+=1,Qe=He=null,e.updateQueue=null,vu.current=wx,t=n(r,i)}while(ha)}if(vu.current=sc,e=He!==null&&He.next!==null,Vi=0,Qe=He=xe=null,ic=!1,e)throw Error($(300));return t}function bm(){var t=Va!==0;return Va=0,t}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?xe.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function an(){if(He===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Qe===null?xe.memoizedState:Qe.next;if(e!==null)Qe=e,He=t;else{if(t===null)throw Error($(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Qe===null?xe.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function Fa(t,e){return typeof e=="function"?e(t):e}function wf(t){var e=an(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var f=c.lane;if((Vi&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,xe.lanes|=f,Fi|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,En(r,e.memoizedState)||(bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,Fi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ef(t){var e=an(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);En(s,e.memoizedState)||(bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function EE(){}function TE(t,e){var n=xe,r=an(),i=e(),s=!En(r.memoizedState,i);if(s&&(r.memoizedState=i,bt=!0),r=r.queue,Nm(AE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,ja(9,SE.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error($(349));Vi&30||IE(n,e,i)}return i}function IE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function SE(t,e,n,r){e.value=n,e.getSnapshot=r,kE(e)&&CE(t)}function AE(t,e,n){return n(function(){kE(e)&&CE(t)})}function kE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!En(t,n)}catch{return!0}}function CE(t){var e=sr(t,1);e!==null&&vn(e,t,1,-1)}function u0(t){var e=Cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=yx.bind(null,xe,t),[e.memoizedState,t]}function ja(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function RE(){return an().memoizedState}function _u(t,e,n,r){var i=Cn();xe.flags|=t,i.memoizedState=ja(1|e,n,void 0,r===void 0?null:r)}function Kc(t,e,n,r){var i=an();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&xm(r,o.deps)){i.memoizedState=ja(e,n,s,r);return}}xe.flags|=t,i.memoizedState=ja(1|e,n,s,r)}function c0(t,e){return _u(8390656,8,t,e)}function Nm(t,e){return Kc(2048,8,t,e)}function xE(t,e){return Kc(4,2,t,e)}function PE(t,e){return Kc(4,4,t,e)}function bE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function NE(t,e,n){return n=n!=null?n.concat([t]):null,Kc(4,4,bE.bind(null,e,t),n)}function Om(){}function OE(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function DE(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function LE(t,e,n){return Vi&21?(En(n,e)||(n=Fw(),xe.lanes|=n,Fi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bt=!0),t.memoizedState=n)}function mx(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=_f.transition;_f.transition={};try{t(!1),e()}finally{pe=n,_f.transition=r}}function ME(){return an().memoizedState}function gx(t,e,n){var r=qr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},VE(t))FE(e,n);else if(n=pE(t,e,n,r),n!==null){var i=At();vn(n,t,r,i),jE(n,e,r)}}function yx(t,e,n){var r=qr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(VE(t))FE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,En(a,o)){var u=e.interleaved;u===null?(i.next=i,Sm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=pE(t,e,i,r),n!==null&&(i=At(),vn(n,t,r,i),jE(n,e,r))}}function VE(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function FE(t,e){ha=ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cm(t,n)}}var sc={readContext:on,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},vx={readContext:on,useCallback:function(t,e){return Cn().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:c0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_u(4194308,4,bE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _u(4194308,4,t,e)},useInsertionEffect:function(t,e){return _u(4,2,t,e)},useMemo:function(t,e){var n=Cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gx.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=Cn();return t={current:t},e.memoizedState=t},useState:u0,useDebugValue:Om,useDeferredValue:function(t){return Cn().memoizedState=t},useTransition:function(){var t=u0(!1),e=t[0];return t=mx.bind(null,t[1]),Cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=Cn();if(Ae){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),Xe===null)throw Error($(349));Vi&30||IE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,c0(AE.bind(null,r,s,t),[t]),r.flags|=2048,ja(9,SE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Cn(),e=Xe.identifierPrefix;if(Ae){var n=Xn,r=Yn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=px++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_x={readContext:on,useCallback:OE,useContext:on,useEffect:Nm,useImperativeHandle:NE,useInsertionEffect:xE,useLayoutEffect:PE,useMemo:DE,useReducer:wf,useRef:RE,useState:function(){return wf(Fa)},useDebugValue:Om,useDeferredValue:function(t){var e=an();return LE(e,He.memoizedState,t)},useTransition:function(){var t=wf(Fa)[0],e=an().memoizedState;return[t,e]},useMutableSource:EE,useSyncExternalStore:TE,useId:ME,unstable_isNewReconciler:!1},wx={readContext:on,useCallback:OE,useContext:on,useEffect:Nm,useImperativeHandle:NE,useInsertionEffect:xE,useLayoutEffect:PE,useMemo:DE,useReducer:Ef,useRef:RE,useState:function(){return Ef(Fa)},useDebugValue:Om,useDeferredValue:function(t){var e=an();return He===null?e.memoizedState=t:LE(e,He.memoizedState,t)},useTransition:function(){var t=Ef(Fa)[0],e=an().memoizedState;return[t,e]},useMutableSource:EE,useSyncExternalStore:TE,useId:ME,unstable_isNewReconciler:!1};function Ks(t,e){try{var n="",r=e;do n+=GC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Tf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ex=typeof WeakMap=="function"?WeakMap:Map;function UE(t,e,n){n=tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ac||(ac=!0,Wd=r),Dd(t,e)},n}function $E(t,e,n){n=tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dd(t,e),typeof r!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function h0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ex;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Lx.bind(null,t,e,n),e.then(t,t))}function f0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function d0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=tr(-1,1),e.tag=2,Wr(n,e,1))),n.lanes|=1),t)}var Tx=pr.ReactCurrentOwner,bt=!1;function St(t,e,n,r){e.child=t===null?_E(e,null,n,r):Hs(e,t.child,n,r)}function p0(t,e,n,r,i){n=n.render;var s=e.ref;return Ls(e,i),r=Pm(t,e,n,r,s,i),n=bm(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,or(t,e,i)):(Ae&&n&&vm(e),e.flags|=1,St(t,e,r,i),e.child)}function m0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!$m(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zE(t,e,s,r,i)):(t=Iu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ba,n(o,r)&&t.ref===e.ref)return or(t,e,i)}return e.flags|=1,t=Kr(s,r),t.ref=e.ref,t.return=e,e.child=t}function zE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ba(s,r)&&t.ref===e.ref)if(bt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(bt=!0);else return e.lanes=t.lanes,or(t,e,i)}return Ld(t,e,n,r,i)}function BE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(As,$t),$t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(As,$t),$t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(As,$t),$t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(As,$t),$t|=r;return St(t,e,i,n),e.child}function WE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ld(t,e,n,r,i){var s=Dt(n)?Li:vt.current;return s=Bs(e,s),Ls(e,i),n=Pm(t,e,n,r,s,i),r=bm(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,or(t,e,i)):(Ae&&r&&vm(e),e.flags|=1,St(t,e,n,i),e.child)}function g0(t,e,n,r,i){if(Dt(n)){var s=!0;Xu(e)}else s=!1;if(Ls(e,i),e.stateNode===null)wu(t,e),yE(e,n,r),Od(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=on(c):(c=Dt(n)?Li:vt.current,c=Bs(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&a0(e,o,r,c),kr=!1;var m=e.memoizedState;o.state=m,nc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Ot.current||kr?(typeof f=="function"&&(Nd(e,n,f,r),u=e.memoizedState),(a=kr||o0(e,n,a,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,mE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:dn(e.type,a),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=on(u):(u=Dt(n)?Li:vt.current,u=Bs(e,u));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&a0(e,o,r,u),kr=!1,m=e.memoizedState,o.state=m,nc(e,r,o,i);var E=e.memoizedState;a!==p||m!==E||Ot.current||kr?(typeof v=="function"&&(Nd(e,n,v,r),E=e.memoizedState),(c=kr||o0(e,n,c,r,m,E,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Md(t,e,n,r,s,i)}function Md(t,e,n,r,i,s){WE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&t0(e,n,!1),or(t,e,s);r=e.stateNode,Tx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,a,s)):St(t,e,a,s),e.memoizedState=r.state,i&&t0(e,n,!0),e.child}function HE(t){var e=t.stateNode;e.pendingContext?e0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&e0(t,e.context,!1),km(t,e.containerInfo)}function y0(t,e,n,r,i){return Ws(),wm(i),e.flags|=256,St(t,e,n,r),e.child}var Vd={dehydrated:null,treeContext:null,retryLane:0};function Fd(t){return{baseLanes:t,cachePool:null,transitions:null}}function qE(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Re,i&1),t===null)return Pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yc(o,r,0,null),t=Ri(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fd(n),e.memoizedState=Vd,t):Dm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ix(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Kr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Kr(a,s):(s=Ri(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vd,r}return s=t.child,t=s.sibling,r=Kr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dm(t,e){return e=Yc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Jl(t,e,n,r){return r!==null&&wm(r),Hs(e,t.child,null,n),t=Dm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ix(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Tf(Error($(422))),Jl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yc({mode:"visible",children:r.children},i,0,null),s=Ri(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Hs(e,t.child,null,o),e.child.memoizedState=Fd(o),e.memoizedState=Vd,s);if(!(e.mode&1))return Jl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=Tf(s,r,void 0),Jl(t,e,o,r)}if(a=(o&t.childLanes)!==0,bt||a){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,sr(t,i),vn(r,t,i,-1))}return Um(),r=Tf(Error($(421))),Jl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Mx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,zt=Br(i.nextSibling),Wt=e,Ae=!0,mn=null,t!==null&&(Zt[en++]=Yn,Zt[en++]=Xn,Zt[en++]=Mi,Yn=t.id,Xn=t.overflow,Mi=e),e=Dm(e,r.children),e.flags|=4096,e)}function v0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bd(t.return,e,n)}function If(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function KE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(St(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&v0(t,n,e);else if(t.tag===19)v0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&rc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),If(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&rc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}If(e,!0,n,null,s);break;case"together":If(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function or(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=Kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sx(t,e,n){switch(e.tag){case 3:HE(e),Ws();break;case 5:wE(e);break;case 1:Dt(e.type)&&Xu(e);break;case 4:km(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(ec,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?qE(t,e,n):(ye(Re,Re.current&1),t=or(t,e,n),t!==null?t.sibling:null);ye(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return KE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,BE(t,e,n)}return or(t,e,n)}var GE,jd,QE,YE;GE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jd=function(){};QE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ii(Dn.current);var s=null;switch(n){case"input":i=ad(t,i),r=ad(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=cd(t,i),r=cd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qu)}fd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&we("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};YE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bo(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ax(t,e,n){var r=e.pendingProps;switch(_m(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return Dt(e.type)&&Yu(),dt(e),null;case 3:return r=e.stateNode,qs(),Ie(Ot),Ie(vt),Rm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mn!==null&&(Kd(mn),mn=null))),jd(t,e),dt(e),null;case 5:Cm(e);var i=Ii(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)QE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return dt(e),null}if(t=Ii(Dn.current),Yl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Pn]=e,r[Da]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Yo.length;i++)we(Yo[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Cv(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":xv(r,s),we("invalid",r)}fd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ql(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ql(r.textContent,a,t),i=["children",""+a]):Sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":$l(r),Rv(r,s,!0);break;case"textarea":$l(r),Pv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Qu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Iw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pn]=e,t[Da]=r,GE(t,e,!1,!1),e.stateNode=t;e:{switch(o=dd(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<Yo.length;i++)we(Yo[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Cv(t,r),i=ad(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),we("invalid",t);break;case"textarea":xv(t,r),i=cd(t,r),we("invalid",t);break;default:i=r}fd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?kw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Sw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Aa(t,u):typeof u=="number"&&Aa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&im(t,s,u,o))}switch(n){case"input":$l(t),Rv(t,r,!1);break;case"textarea":$l(t),Pv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?bs(t,!!r.multiple,s,!1):r.defaultValue!=null&&bs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Qu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dt(e),null;case 6:if(t&&e.stateNode!=null)YE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=Ii(Ma.current),Ii(Dn.current),Yl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pn]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:Ql(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ql(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pn]=e,e.stateNode=r}return dt(e),null;case 13:if(Ie(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&zt!==null&&e.mode&1&&!(e.flags&128))dE(),Ws(),e.flags|=98560,s=!1;else if(s=Yl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[Pn]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dt(e),s=!1}else mn!==null&&(Kd(mn),mn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?qe===0&&(qe=3):Um())),e.updateQueue!==null&&(e.flags|=4),dt(e),null);case 4:return qs(),jd(t,e),t===null&&Na(e.stateNode.containerInfo),dt(e),null;case 10:return Im(e.type._context),dt(e),null;case 17:return Dt(e.type)&&Yu(),dt(e),null;case 19:if(Ie(Re),s=e.memoizedState,s===null)return dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Bo(s,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rc(t),o!==null){for(e.flags|=128,Bo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>Gs&&(e.flags|=128,r=!0,Bo(s,!1),e.lanes=4194304)}else{if(!r)if(t=rc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return dt(e),null}else 2*Ve()-s.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,r=!0,Bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=Re.current,ye(Re,r?n&1|2:n&1),e):(dt(e),null);case 22:case 23:return jm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$t&1073741824&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function kx(t,e){switch(_m(e),e.tag){case 1:return Dt(e.type)&&Yu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qs(),Ie(Ot),Ie(vt),Rm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cm(e),null;case 13:if(Ie(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Re),null;case 4:return qs(),null;case 10:return Im(e.type._context),null;case 22:case 23:return jm(),null;case 24:return null;default:return null}}var Zl=!1,gt=!1,Cx=typeof WeakSet=="function"?WeakSet:Set,B=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Ud(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var _0=!1;function Rx(t,e){if(Id=qu,t=eE(),ym(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++f===r&&(u=o),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sd={focusedElem:t,selectionRange:n},qu=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var R=E.memoizedProps,P=E.memoizedState,T=e.stateNode,w=T.getSnapshotBeforeUpdate(e.elementType===e.type?R:dn(e.type,R),P);T.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(b){Oe(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return E=_0,_0=!1,E}function fa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ud(e,n,s)}i=i.next}while(i!==r)}}function Gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function XE(t){var e=t.alternate;e!==null&&(t.alternate=null,XE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pn],delete e[Da],delete e[Cd],delete e[cx],delete e[hx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function JE(t){return t.tag===5||t.tag===3||t.tag===4}function w0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||JE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qu));else if(r!==4&&(t=t.child,t!==null))for(zd(t,e,n),t=t.sibling;t!==null;)zd(t,e,n),t=t.sibling}function Bd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bd(t,e,n),t=t.sibling;t!==null;)Bd(t,e,n),t=t.sibling}var et=null,pn=!1;function Er(t,e,n){for(n=n.child;n!==null;)ZE(t,e,n),n=n.sibling}function ZE(t,e,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Uc,n)}catch{}switch(n.tag){case 5:gt||Ss(n,e);case 6:var r=et,i=pn;et=null,Er(t,e,n),et=r,pn=i,et!==null&&(pn?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(pn?(t=et,n=n.stateNode,t.nodeType===8?gf(t.parentNode,n):t.nodeType===1&&gf(t,n),xa(t)):gf(et,n.stateNode));break;case 4:r=et,i=pn,et=n.stateNode.containerInfo,pn=!0,Er(t,e,n),et=r,pn=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ud(n,e,o),i=i.next}while(i!==r)}Er(t,e,n);break;case 1:if(!gt&&(Ss(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,Er(t,e,n),gt=r):Er(t,e,n);break;default:Er(t,e,n)}}function E0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Cx),e.forEach(function(r){var i=Vx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function hn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,pn=!1;break e;case 3:et=a.stateNode.containerInfo,pn=!0;break e;case 4:et=a.stateNode.containerInfo,pn=!0;break e}a=a.return}if(et===null)throw Error($(160));ZE(s,o,i),et=null,pn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)eT(e,t),e=e.sibling}function eT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hn(e,t),An(t),r&4){try{fa(3,t,t.return),Gc(3,t)}catch(R){Oe(t,t.return,R)}try{fa(5,t,t.return)}catch(R){Oe(t,t.return,R)}}break;case 1:hn(e,t),An(t),r&512&&n!==null&&Ss(n,n.return);break;case 5:if(hn(e,t),An(t),r&512&&n!==null&&Ss(n,n.return),t.flags&32){var i=t.stateNode;try{Aa(i,"")}catch(R){Oe(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ew(i,s),dd(a,o);var c=dd(a,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?kw(i,p):f==="dangerouslySetInnerHTML"?Sw(i,p):f==="children"?Aa(i,p):im(i,f,p,c)}switch(a){case"input":ld(i,s);break;case"textarea":Tw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?bs(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?bs(i,!!s.multiple,s.defaultValue,!0):bs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Da]=s}catch(R){Oe(t,t.return,R)}}break;case 6:if(hn(e,t),An(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Oe(t,t.return,R)}}break;case 3:if(hn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(e.containerInfo)}catch(R){Oe(t,t.return,R)}break;case 4:hn(e,t),An(t);break;case 13:hn(e,t),An(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Vm=Ve())),r&4&&E0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(c=gt)||f,hn(e,t),gt=c):hn(e,t),An(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(p=B=f;B!==null;){switch(m=B,v=m.child,m.tag){case 0:case 11:case 14:case 15:fa(4,m,m.return);break;case 1:Ss(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(R){Oe(r,n,R)}}break;case 5:Ss(m,m.return);break;case 22:if(m.memoizedState!==null){I0(p);continue}}v!==null?(v.return=m,B=v):I0(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Aw("display",o))}catch(R){Oe(t,t.return,R)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(R){Oe(t,t.return,R)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:hn(e,t),An(t),r&4&&E0(t);break;case 21:break;default:hn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(JE(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Aa(i,""),r.flags&=-33);var s=w0(t);Bd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=w0(t);zd(t,a,o);break;default:throw Error($(161))}}catch(u){Oe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xx(t,e,n){B=t,tT(t)}function tT(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Zl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||gt;a=Zl;var c=gt;if(Zl=o,(gt=u)&&!c)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?S0(i):u!==null?(u.return=o,B=u):S0(i);for(;s!==null;)B=s,tT(s),s=s.sibling;B=i,Zl=a,gt=c}T0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):T0(t)}}function T0(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||Gc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&s0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}s0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&xa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}gt||e.flags&512&&$d(e)}catch(m){Oe(e,e.return,m)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function I0(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function S0(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gc(4,e)}catch(u){Oe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Oe(e,i,u)}}var s=e.return;try{$d(e)}catch(u){Oe(e,s,u)}break;case 5:var o=e.return;try{$d(e)}catch(u){Oe(e,o,u)}}}catch(u){Oe(e,e.return,u)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var Px=Math.ceil,oc=pr.ReactCurrentDispatcher,Lm=pr.ReactCurrentOwner,rn=pr.ReactCurrentBatchConfig,le=0,Xe=null,$e=null,rt=0,$t=0,As=ai(0),qe=0,Ua=null,Fi=0,Qc=0,Mm=0,da=null,xt=null,Vm=0,Gs=1/0,qn=null,ac=!1,Wd=null,Hr=null,eu=!1,Mr=null,lc=0,pa=0,Hd=null,Eu=-1,Tu=0;function At(){return le&6?Ve():Eu!==-1?Eu:Eu=Ve()}function qr(t){return t.mode&1?le&2&&rt!==0?rt&-rt:dx.transition!==null?(Tu===0&&(Tu=Fw()),Tu):(t=pe,t!==0||(t=window.event,t=t===void 0?16:Hw(t.type)),t):1}function vn(t,e,n,r){if(50<pa)throw pa=0,Hd=null,Error($(185));il(t,n,r),(!(le&2)||t!==Xe)&&(t===Xe&&(!(le&2)&&(Qc|=n),qe===4&&xr(t,rt)),Lt(t,r),n===1&&le===0&&!(e.mode&1)&&(Gs=Ve()+500,Hc&&li()))}function Lt(t,e){var n=t.callbackNode;dR(t,e);var r=Hu(t,t===Xe?rt:0);if(r===0)n!==null&&Ov(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ov(n),e===1)t.tag===0?fx(A0.bind(null,t)):cE(A0.bind(null,t)),lx(function(){!(le&6)&&li()}),n=null;else{switch(jw(r)){case 1:n=um;break;case 4:n=Mw;break;case 16:n=Wu;break;case 536870912:n=Vw;break;default:n=Wu}n=uT(n,nT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nT(t,e){if(Eu=-1,Tu=0,le&6)throw Error($(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var r=Hu(t,t===Xe?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uc(t,r);else{e=r;var i=le;le|=2;var s=iT();(Xe!==t||rt!==e)&&(qn=null,Gs=Ve()+500,Ci(t,e));do try{Ox();break}catch(a){rT(t,a)}while(!0);Tm(),oc.current=s,le=i,$e!==null?e=0:(Xe=null,rt=0,e=qe)}if(e!==0){if(e===2&&(i=vd(t),i!==0&&(r=i,e=qd(t,i))),e===1)throw n=Ua,Ci(t,0),xr(t,r),Lt(t,Ve()),n;if(e===6)xr(t,r);else{if(i=t.current.alternate,!(r&30)&&!bx(i)&&(e=uc(t,r),e===2&&(s=vd(t),s!==0&&(r=s,e=qd(t,s))),e===1))throw n=Ua,Ci(t,0),xr(t,r),Lt(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:yi(t,xt,qn);break;case 3:if(xr(t,r),(r&130023424)===r&&(e=Vm+500-Ve(),10<e)){if(Hu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){At(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=kd(yi.bind(null,t,xt,qn),e);break}yi(t,xt,qn);break;case 4:if(xr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Px(r/1960))-r,10<r){t.timeoutHandle=kd(yi.bind(null,t,xt,qn),r);break}yi(t,xt,qn);break;case 5:yi(t,xt,qn);break;default:throw Error($(329))}}}return Lt(t,Ve()),t.callbackNode===n?nT.bind(null,t):null}function qd(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(Ci(t,e).flags|=256),t=uc(t,e),t!==2&&(e=xt,xt=n,e!==null&&Kd(e)),t}function Kd(t){xt===null?xt=t:xt.push.apply(xt,t)}function bx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!En(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~Mm,e&=~Qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function A0(t){if(le&6)throw Error($(327));Ms();var e=Hu(t,0);if(!(e&1))return Lt(t,Ve()),null;var n=uc(t,e);if(t.tag!==0&&n===2){var r=vd(t);r!==0&&(e=r,n=qd(t,r))}if(n===1)throw n=Ua,Ci(t,0),xr(t,e),Lt(t,Ve()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yi(t,xt,qn),Lt(t,Ve()),null}function Fm(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Gs=Ve()+500,Hc&&li())}}function ji(t){Mr!==null&&Mr.tag===0&&!(le&6)&&Ms();var e=le;le|=1;var n=rn.transition,r=pe;try{if(rn.transition=null,pe=1,t)return t()}finally{pe=r,rn.transition=n,le=e,!(le&6)&&li()}}function jm(){$t=As.current,Ie(As)}function Ci(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ax(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(_m(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yu();break;case 3:qs(),Ie(Ot),Ie(vt),Rm();break;case 5:Cm(r);break;case 4:qs();break;case 13:Ie(Re);break;case 19:Ie(Re);break;case 10:Im(r.type._context);break;case 22:case 23:jm()}n=n.return}if(Xe=t,$e=t=Kr(t.current,null),rt=$t=e,qe=0,Ua=null,Mm=Qc=Fi=0,xt=da=null,Ti!==null){for(e=0;e<Ti.length;e++)if(n=Ti[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ti=null}return t}function rT(t,e){do{var n=$e;try{if(Tm(),vu.current=sc,ic){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ic=!1}if(Vi=0,Qe=He=xe=null,ha=!1,Va=0,Lm.current=null,n===null||n.return===null){qe=1,Ua=e,$e=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=rt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=f0(o);if(v!==null){v.flags&=-257,d0(v,o,a,s,e),v.mode&1&&h0(s,c,e),e=v,u=c;var E=e.updateQueue;if(E===null){var R=new Set;R.add(u),e.updateQueue=R}else E.add(u);break e}else{if(!(e&1)){h0(s,c,e),Um();break e}u=Error($(426))}}else if(Ae&&a.mode&1){var P=f0(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),d0(P,o,a,s,e),wm(Ks(u,a));break e}}s=u=Ks(u,a),qe!==4&&(qe=2),da===null?da=[s]:da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=UE(s,u,e);i0(s,T);break e;case 1:a=u;var w=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Hr===null||!Hr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=$E(s,a,e);i0(s,b);break e}}s=s.return}while(s!==null)}oT(n)}catch(V){e=V,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function iT(){var t=oc.current;return oc.current=sc,t===null?sc:t}function Um(){(qe===0||qe===3||qe===2)&&(qe=4),Xe===null||!(Fi&268435455)&&!(Qc&268435455)||xr(Xe,rt)}function uc(t,e){var n=le;le|=2;var r=iT();(Xe!==t||rt!==e)&&(qn=null,Ci(t,e));do try{Nx();break}catch(i){rT(t,i)}while(!0);if(Tm(),le=n,oc.current=r,$e!==null)throw Error($(261));return Xe=null,rt=0,qe}function Nx(){for(;$e!==null;)sT($e)}function Ox(){for(;$e!==null&&!iR();)sT($e)}function sT(t){var e=lT(t.alternate,t,$t);t.memoizedProps=t.pendingProps,e===null?oT(t):$e=e,Lm.current=null}function oT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kx(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,$e=null;return}}else if(n=Ax(n,e,$t),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);qe===0&&(qe=5)}function yi(t,e,n){var r=pe,i=rn.transition;try{rn.transition=null,pe=1,Dx(t,e,n,r)}finally{rn.transition=i,pe=r}return null}function Dx(t,e,n,r){do Ms();while(Mr!==null);if(le&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pR(t,s),t===Xe&&($e=Xe=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eu||(eu=!0,uT(Wu,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rn.transition,rn.transition=null;var o=pe;pe=1;var a=le;le|=4,Lm.current=null,Rx(t,n),eT(n,t),ex(Sd),qu=!!Id,Sd=Id=null,t.current=n,xx(n),sR(),le=a,pe=o,rn.transition=s}else t.current=n;if(eu&&(eu=!1,Mr=t,lc=i),s=t.pendingLanes,s===0&&(Hr=null),lR(n.stateNode),Lt(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ac)throw ac=!1,t=Wd,Wd=null,t;return lc&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===Hd?pa++:(pa=0,Hd=t):pa=0,li(),null}function Ms(){if(Mr!==null){var t=jw(lc),e=rn.transition,n=pe;try{if(rn.transition=null,pe=16>t?16:t,Mr===null)var r=!1;else{if(t=Mr,Mr=null,lc=0,le&6)throw Error($(331));var i=le;for(le|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(B=c;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:fa(8,f,s)}var p=f.child;if(p!==null)p.return=f,B=p;else for(;B!==null;){f=B;var m=f.sibling,v=f.return;if(XE(f),f===c){B=null;break}if(m!==null){m.return=v,B=m;break}B=v}}}var E=s.alternate;if(E!==null){var R=E.child;if(R!==null){E.child=null;do{var P=R.sibling;R.sibling=null,R=P}while(R!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fa(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,B=T;break e}B=s.return}}var w=t.current;for(B=w;B!==null;){o=B;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,B=I;else e:for(o=w;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gc(9,a)}}catch(V){Oe(a,a.return,V)}if(a===o){B=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,B=b;break e}B=a.return}}if(le=i,li(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Uc,t)}catch{}r=!0}return r}finally{pe=n,rn.transition=e}}return!1}function k0(t,e,n){e=Ks(n,e),e=UE(t,e,1),t=Wr(t,e,1),e=At(),t!==null&&(il(t,1,e),Lt(t,e))}function Oe(t,e,n){if(t.tag===3)k0(t,t,n);else for(;e!==null;){if(e.tag===3){k0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hr===null||!Hr.has(r))){t=Ks(n,t),t=$E(e,t,1),e=Wr(e,t,1),t=At(),e!==null&&(il(e,1,t),Lt(e,t));break}}e=e.return}}function Lx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(rt&n)===n&&(qe===4||qe===3&&(rt&130023424)===rt&&500>Ve()-Vm?Ci(t,0):Mm|=n),Lt(t,e)}function aT(t,e){e===0&&(t.mode&1?(e=Wl,Wl<<=1,!(Wl&130023424)&&(Wl=4194304)):e=1);var n=At();t=sr(t,e),t!==null&&(il(t,e,n),Lt(t,n))}function Mx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),aT(t,n)}function Vx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),aT(t,n)}var lT;lT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bt=!1,Sx(t,e,n);bt=!!(t.flags&131072)}else bt=!1,Ae&&e.flags&1048576&&hE(e,Zu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wu(t,e),t=e.pendingProps;var i=Bs(e,vt.current);Ls(e,n),i=Pm(null,e,r,t,i,n);var s=bm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dt(r)?(s=!0,Xu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Am(e),i.updater=qc,e.stateNode=i,i._reactInternals=e,Od(e,r,t,n),e=Md(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&vm(e),St(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=jx(r),t=dn(r,t),i){case 0:e=Ld(null,e,r,t,n);break e;case 1:e=g0(null,e,r,t,n);break e;case 11:e=p0(null,e,r,t,n);break e;case 14:e=m0(null,e,r,dn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Ld(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),g0(t,e,r,i,n);case 3:e:{if(HE(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,mE(t,e),nc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ks(Error($(423)),e),e=y0(t,e,r,n,i);break e}else if(r!==i){i=Ks(Error($(424)),e),e=y0(t,e,r,n,i);break e}else for(zt=Br(e.stateNode.containerInfo.firstChild),Wt=e,Ae=!0,mn=null,n=_E(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),r===i){e=or(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return wE(e),t===null&&Pd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ad(r,i)?o=null:s!==null&&Ad(r,s)&&(e.flags|=32),WE(t,e),St(t,e,o,n),e.child;case 6:return t===null&&Pd(e),null;case 13:return qE(t,e,n);case 4:return km(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hs(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),p0(t,e,r,i,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(ec,r._currentValue),r._currentValue=o,s!==null)if(En(s.value,o)){if(s.children===i.children&&!Ot.current){e=or(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=tr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),bd(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}St(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ls(e,n),i=on(i),r=r(i),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,i=dn(r,e.pendingProps),i=dn(r.type,i),m0(t,e,r,i,n);case 15:return zE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),wu(t,e),e.tag=1,Dt(r)?(t=!0,Xu(e)):t=!1,Ls(e,n),yE(e,r,i),Od(e,r,i,n),Md(null,e,r,!0,t,n);case 19:return KE(t,e,n);case 22:return BE(t,e,n)}throw Error($(156,e.tag))};function uT(t,e){return Lw(t,e)}function Fx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(t,e,n,r){return new Fx(t,e,n,r)}function $m(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jx(t){if(typeof t=="function")return $m(t)?1:0;if(t!=null){if(t=t.$$typeof,t===om)return 11;if(t===am)return 14}return 2}function Kr(t,e){var n=t.alternate;return n===null?(n=nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Iu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")$m(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ms:return Ri(n.children,i,s,e);case sm:o=8,i|=8;break;case rd:return t=nn(12,n,e,i|2),t.elementType=rd,t.lanes=s,t;case id:return t=nn(13,n,e,i),t.elementType=id,t.lanes=s,t;case sd:return t=nn(19,n,e,i),t.elementType=sd,t.lanes=s,t;case vw:return Yc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gw:o=10;break e;case yw:o=9;break e;case om:o=11;break e;case am:o=14;break e;case Ar:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=nn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ri(t,e,n,r){return t=nn(7,t,r,e),t.lanes=n,t}function Yc(t,e,n,r){return t=nn(22,t,r,e),t.elementType=vw,t.lanes=n,t.stateNode={isHidden:!1},t}function Sf(t,e,n){return t=nn(6,t,null,e),t.lanes=n,t}function Af(t,e,n){return e=nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ux(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sf(0),this.expirationTimes=sf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zm(t,e,n,r,i,s,o,a,u){return t=new Ux(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Am(s),t}function $x(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cT(t){if(!t)return Zr;t=t._reactInternals;e:{if(Yi(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(Dt(n))return uE(t,n,e)}return e}function hT(t,e,n,r,i,s,o,a,u){return t=zm(n,r,!0,t,i,s,o,a,u),t.context=cT(null),n=t.current,r=At(),i=qr(n),s=tr(r,i),s.callback=e??null,Wr(n,s,i),t.current.lanes=i,il(t,i,r),Lt(t,r),t}function Xc(t,e,n,r){var i=e.current,s=At(),o=qr(i);return n=cT(n),e.context===null?e.context=n:e.pendingContext=n,e=tr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wr(i,e,o),t!==null&&(vn(t,i,o,s),yu(t,i,o)),o}function cc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function C0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bm(t,e){C0(t,e),(t=t.alternate)&&C0(t,e)}function zx(){return null}var fT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wm(t){this._internalRoot=t}Jc.prototype.render=Wm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));Xc(t,e,null,null)};Jc.prototype.unmount=Wm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ji(function(){Xc(null,t,null,null)}),e[ir]=null}};function Jc(t){this._internalRoot=t}Jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=zw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rr.length&&e!==0&&e<Rr[n].priority;n++);Rr.splice(n,0,t),n===0&&Ww(t)}};function Hm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function R0(){}function Bx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=cc(o);s.call(c)}}var o=hT(e,r,t,0,null,!1,!1,"",R0);return t._reactRootContainer=o,t[ir]=o.current,Na(t.nodeType===8?t.parentNode:t),ji(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=cc(u);a.call(c)}}var u=zm(t,0,!1,null,null,!1,!1,"",R0);return t._reactRootContainer=u,t[ir]=u.current,Na(t.nodeType===8?t.parentNode:t),ji(function(){Xc(e,u,n,r)}),u}function eh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=cc(o);a.call(u)}}Xc(e,o,t,i)}else o=Bx(n,e,t,i,r);return cc(o)}Uw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qo(e.pendingLanes);n!==0&&(cm(e,n|1),Lt(e,Ve()),!(le&6)&&(Gs=Ve()+500,li()))}break;case 13:ji(function(){var r=sr(t,1);if(r!==null){var i=At();vn(r,t,1,i)}}),Bm(t,1)}};hm=function(t){if(t.tag===13){var e=sr(t,134217728);if(e!==null){var n=At();vn(e,t,134217728,n)}Bm(t,134217728)}};$w=function(t){if(t.tag===13){var e=qr(t),n=sr(t,e);if(n!==null){var r=At();vn(n,t,e,r)}Bm(t,e)}};zw=function(){return pe};Bw=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};md=function(t,e,n){switch(e){case"input":if(ld(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wc(r);if(!i)throw Error($(90));ww(r),ld(r,i)}}}break;case"textarea":Tw(t,n);break;case"select":e=n.value,e!=null&&bs(t,!!n.multiple,e,!1)}};xw=Fm;Pw=ji;var Wx={usingClientEntryPoint:!1,Events:[ol,_s,Wc,Cw,Rw,Fm]},Wo={findFiberByHostInstance:Ei,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Hx={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ow(t),t===null?null:t.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||zx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{Uc=tu.inject(Hx),On=tu}catch{}}Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wx;Qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hm(e))throw Error($(200));return $x(t,e,null,n)};Qt.createRoot=function(t,e){if(!Hm(t))throw Error($(299));var n=!1,r="",i=fT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=zm(t,1,!1,null,null,n,!1,r,i),t[ir]=e.current,Na(t.nodeType===8?t.parentNode:t),new Wm(e)};Qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=Ow(e),t=t===null?null:t.stateNode,t};Qt.flushSync=function(t){return ji(t)};Qt.hydrate=function(t,e,n){if(!Zc(e))throw Error($(200));return eh(null,t,e,!0,n)};Qt.hydrateRoot=function(t,e,n){if(!Hm(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=fT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hT(e,null,t,1,n??null,i,!1,s,o),t[ir]=e.current,Na(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jc(e)};Qt.render=function(t,e,n){if(!Zc(e))throw Error($(200));return eh(null,t,e,!1,n)};Qt.unmountComponentAtNode=function(t){if(!Zc(t))throw Error($(40));return t._reactRootContainer?(ji(function(){eh(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1};Qt.unstable_batchedUpdates=Fm;Qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zc(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return eh(t,e,n,!1,r)};Qt.version="18.2.0-next-9e3b772b8-20220608";function dT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dT)}catch(t){console.error(t)}}dT(),hw.exports=Qt;var pT=hw.exports;const ks=Fc(pT);var x0=pT;td.createRoot=x0.createRoot,td.hydrateRoot=x0.hydrateRoot;var mT={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(mT);var qx=mT.exports;const Fe=Fc(qx),Kx=["xxl","xl","lg","md","sm","xs"],Gx="xs",qm=D.createContext({prefixes:{},breakpoints:Kx,minBreakpoint:Gx});function wt(t,e){const{prefixes:n}=D.useContext(qm);return t||n[e]||e}function gT(){const{breakpoints:t}=D.useContext(qm);return t}function yT(){const{minBreakpoint:t}=D.useContext(qm);return t}const Km=D.forwardRef(({bsPrefix:t,fluid:e=!1,as:n="div",className:r,...i},s)=>{const o=wt(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return C.jsx(n,{ref:s,...i,className:Fe(r,e?`${o}${a}`:o)})});Km.displayName="Container";var P0={exports:{}},Gd={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){function i(o,a,u,c,f,p){var m=c||"<<anonymous>>",v=p||u;if(a[u]==null)return o?new Error("Required "+f+" `"+v+"` was not specified "+("in `"+m+"`.")):null;for(var E=arguments.length,R=Array(E>6?E-6:0),P=6;P<E;P++)R[P-6]=arguments[P];return r.apply(void 0,[a,u,m,f,v].concat(R))}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}t.exports=e.default})(Gd,Gd.exports);var Qx=Gd.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=Qx,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];function c(){for(var f=arguments.length,p=Array(f),m=0;m<f;m++)p[m]=arguments[m];var v=null;return a.forEach(function(E){if(v==null){var R=E.apply(void 0,p);R!=null&&(v=R)}}),v}return(0,r.default)(c)}t.exports=e.default})(P0,P0.exports);function Qd(){return Qd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qd.apply(null,arguments)}function vT(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function b0(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function Yx(t){var e=Xx(t,"string");return typeof e=="symbol"?e:String(e)}function Xx(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function Jx(t,e,n){var r=D.useRef(t!==void 0),i=D.useState(e),s=i[0],o=i[1],a=t!==void 0,u=r.current;return r.current=a,!a&&u&&s!==e&&o(e),[a?t:s,D.useCallback(function(c){for(var f=arguments.length,p=new Array(f>1?f-1:0),m=1;m<f;m++)p[m-1]=arguments[m];n&&n.apply(void 0,[c].concat(p)),o(c)},[n])]}function _T(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[b0(r)],a=s[r],u=vT(s,[b0(r),r].map(Yx)),c=e[r],f=Jx(a,o,t[c]),p=f[0],m=f[1];return Qd({},u,(i={},i[r]=p,i[c]=m,i))},t)}function Yd(t,e){return Yd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Yd(t,e)}function Zx(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Yd(t,e)}var eP=Function.prototype.bind.call(Function.prototype.call,[].slice);function vi(t,e){return eP(t.querySelectorAll(e))}function tP(){const[,t]=D.useReducer(e=>!e,!1);return t}const N0=t=>!t||typeof t=="function"?t:e=>{t.current=e};function nP(t,e){const n=N0(t),r=N0(e);return i=>{n&&n(i),r&&r(i)}}function ll(t,e){return D.useMemo(()=>nP(t,e),[t,e])}const Gm=D.createContext(null);Gm.displayName="NavContext";const hc=D.createContext(null),Qm=(t,e=null)=>t!=null?String(t):e||null,wT=D.createContext(null),rP="data-rr-ui-",iP="rrUi";function th(t){return`${rP}${t}`}function sP(t){return`${iP}${t}`}function oP(t){const e=D.useRef(t);return D.useEffect(()=>{e.current=t},[t]),e}function tn(t){const e=oP(t);return D.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const aP=["as","disabled"];function lP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function uP(t){return!t||t.trim()==="#"}function ET({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:u}){t||(n!=null||r!=null||i!=null?t="a":t="button");const c={tagName:t};if(t==="button")return[{type:u||"button",disabled:e},c];const f=m=>{if((e||t==="a"&&uP(n))&&m.preventDefault(),e){m.stopPropagation();return}o==null||o(m)},p=m=>{m.key===" "&&(m.preventDefault(),f(m))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:f,onKeyDown:p},c]}const TT=D.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=lP(t,aP);const[s,{tagName:o}]=ET(Object.assign({tagName:n,disabled:r},i));return C.jsx(o,Object.assign({},i,s,{ref:e}))});TT.displayName="Button";const cP=["as","active","eventKey"];function hP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function IT({key:t,onClick:e,active:n,id:r,role:i,disabled:s}){const o=D.useContext(hc),a=D.useContext(Gm),u=D.useContext(wT);let c=n;const f={role:i};if(a){!i&&a.role==="tablist"&&(f.role="tab");const p=a.getControllerId(t??null),m=a.getControlledId(t??null);f[th("event-key")]=t,f.id=p||r,c=n==null&&t!=null?a.activeKey===t:n,(c||!(u!=null&&u.unmountOnExit)&&!(u!=null&&u.mountOnEnter))&&(f["aria-controls"]=m)}return f.role==="tab"&&(f["aria-selected"]=c,c||(f.tabIndex=-1),s&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=tn(p=>{s||(e==null||e(p),t!=null&&o&&!p.isPropagationStopped()&&o(t,p))}),[f,{isActive:c}]}const ST=D.forwardRef((t,e)=>{let{as:n=TT,active:r,eventKey:i}=t,s=hP(t,cP);const[o,a]=IT(Object.assign({key:Qm(i,s.href),active:r},s));return o[th("active")]=a.isActive,C.jsx(n,Object.assign({},s,o,{ref:e}))});ST.displayName="NavItem";const fP=["as","onSelect","activeKey","role","onKeyDown"];function dP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const O0=()=>{},D0=th("event-key"),AT=D.forwardRef((t,e)=>{let{as:n="div",onSelect:r,activeKey:i,role:s,onKeyDown:o}=t,a=dP(t,fP);const u=tP(),c=D.useRef(!1),f=D.useContext(hc),p=D.useContext(wT);let m,v;p&&(s=s||"tablist",i=p.activeKey,m=p.getControlledId,v=p.getControllerId);const E=D.useRef(null),R=I=>{const b=E.current;if(!b)return null;const V=vi(b,`[${D0}]:not([aria-disabled=true])`),L=b.querySelector("[aria-selected=true]");if(!L||L!==document.activeElement)return null;const _=V.indexOf(L);if(_===-1)return null;let y=_+I;return y>=V.length&&(y=0),y<0&&(y=V.length-1),V[y]},P=(I,b)=>{I!=null&&(r==null||r(I,b),f==null||f(I,b))},T=I=>{if(o==null||o(I),!p)return;let b;switch(I.key){case"ArrowLeft":case"ArrowUp":b=R(-1);break;case"ArrowRight":case"ArrowDown":b=R(1);break;default:return}b&&(I.preventDefault(),P(b.dataset[sP("EventKey")]||null,I),c.current=!0,u())};D.useEffect(()=>{if(E.current&&c.current){const I=E.current.querySelector(`[${D0}][aria-selected=true]`);I==null||I.focus()}c.current=!1});const w=ll(e,E);return C.jsx(hc.Provider,{value:P,children:C.jsx(Gm.Provider,{value:{role:s,activeKey:Qm(i),getControlledId:m||O0,getControllerId:v||O0},children:C.jsx(n,Object.assign({},a,{onKeyDown:T,ref:w,role:s}))})})});AT.displayName="Nav";const pP=Object.assign(AT,{Item:ST}),Xi=D.createContext(null);Xi.displayName="NavbarContext";const kT=D.createContext(null);kT.displayName="CardHeaderContext";const CT=D.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=wt(e,"nav-item"),C.jsx(n,{ref:i,className:Fe(t,e),...r})));CT.displayName="NavItem";function mP(){const t=D.useRef(!0),e=D.useRef(()=>t.current);return D.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function gP(t){const e=D.useRef(null);return D.useEffect(()=>{e.current=t}),e.current}const yP=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",vP=typeof document<"u",Xd=vP||yP?D.useLayoutEffect:D.useEffect,_P=["onKeyDown"];function wP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function EP(t){return!t||t.trim()==="#"}const RT=D.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=wP(t,_P);const[i]=ET(Object.assign({tagName:"a"},r)),s=tn(o=>{i.onKeyDown(o),n==null||n(o)});return EP(r.href)||r.role==="button"?C.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):C.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});RT.displayName="Anchor";const xT=D.forwardRef(({bsPrefix:t,className:e,as:n=RT,active:r,eventKey:i,disabled:s=!1,...o},a)=>{t=wt(t,"nav-link");const[u,c]=IT({key:Qm(i,o.href),active:r,disabled:s,...o});return C.jsx(n,{...o,...u,ref:a,disabled:s,className:Fe(e,t,s&&"disabled",c.isActive&&"active")})});xT.displayName="NavLink";const PT=D.forwardRef((t,e)=>{const{as:n="div",bsPrefix:r,variant:i,fill:s=!1,justify:o=!1,navbar:a,navbarScroll:u,className:c,activeKey:f,...p}=_T(t,{activeKey:"onSelect"}),m=wt(r,"nav");let v,E,R=!1;const P=D.useContext(Xi),T=D.useContext(kT);return P?(v=P.bsPrefix,R=a??!0):T&&({cardHeaderBsPrefix:E}=T),C.jsx(pP,{as:n,ref:e,activeKey:f,className:Fe(c,{[m]:!R,[`${v}-nav`]:R,[`${v}-nav-scroll`]:R&&u,[`${E}-${i}`]:!!E,[`${m}-${i}`]:!!i,[`${m}-fill`]:s,[`${m}-justified`]:o}),...p})});PT.displayName="Nav";const kn=Object.assign(PT,{Item:CT,Link:xT}),bT=D.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=wt(t,"navbar-brand");const s=n||(r.href?"a":"span");return C.jsx(s,{...r,ref:i,className:Fe(e,t)})});bT.displayName="NavbarBrand";function Ym(t){return t&&t.ownerDocument||document}function TP(t){var e=Ym(t);return e&&e.defaultView||window}function IP(t,e){return TP(t).getComputedStyle(t,e)}var SP=/([A-Z])/g;function AP(t){return t.replace(SP,"-$1").toLowerCase()}var kP=/^ms-/;function nu(t){return AP(t).replace(kP,"-ms-")}var CP=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function RP(t){return!!(t&&CP.test(t))}function nr(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(nu(e))||IP(t).getPropertyValue(nu(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(nu(i)):RP(i)?r+=i+"("+s+") ":n+=nu(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var NT={exports:{}},xP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",PP=xP,bP=PP;function OT(){}function DT(){}DT.resetWarningCache=OT;var NP=function(){function t(r,i,s,o,a,u){if(u!==bP){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:DT,resetWarningCache:OT};return n.PropTypes=n,n};NT.exports=NP();var OP=NT.exports;const Y=Fc(OP),L0={disabled:!1},LT=ke.createContext(null);var DP=function(e){return e.scrollTop},Xo="unmounted",Cr="exited",gn="entering",Qn="entered",$a="exiting",mr=function(t){Zx(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,u;return s.appearStatus=null,r.in?a?(u=Cr,s.appearStatus=gn):u=Qn:r.unmountOnExit||r.mountOnEnter?u=Xo:u=Cr,s.state={status:u},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Xo?{status:Cr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==gn&&o!==Qn&&(s=gn):(o===gn||o===Qn)&&(s=$a)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===gn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:ks.findDOMNode(this);o&&DP(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Cr&&this.setState({status:Xo})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,u=this.props.nodeRef?[a]:[ks.findDOMNode(this),a],c=u[0],f=u[1],p=this.getTimeouts(),m=a?p.appear:p.enter;if(!i&&!o||L0.disabled){this.safeSetState({status:Qn},function(){s.props.onEntered(c)});return}this.props.onEnter(c,f),this.safeSetState({status:gn},function(){s.props.onEntering(c,f),s.onTransitionEnd(m,function(){s.safeSetState({status:Qn},function(){s.props.onEntered(c,f)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:ks.findDOMNode(this);if(!s||L0.disabled){this.safeSetState({status:Cr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:$a},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Cr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:ks.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=u[0],f=u[1];this.props.addEndListener(c,f)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Xo)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=vT(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ke.createElement(LT.Provider,{value:null},typeof o=="function"?o(i,a):ke.cloneElement(ke.Children.only(o),a))},e}(ke.Component);mr.contextType=LT;mr.propTypes={};function ls(){}mr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ls,onEntering:ls,onEntered:ls,onExit:ls,onExiting:ls,onExited:ls};mr.UNMOUNTED=Xo;mr.EXITED=Cr;mr.ENTERING=gn;mr.ENTERED=Qn;mr.EXITING=$a;const nh=!!(typeof window<"u"&&window.document&&window.document.createElement);var Jd=!1,Zd=!1;try{var kf={get passive(){return Jd=!0},get once(){return Zd=Jd=!0}};nh&&(window.addEventListener("test",kf,kf),window.removeEventListener("test",kf,!0))}catch{}function LP(t,e,n,r){if(r&&typeof r!="boolean"&&!Zd){var i=r.once,s=r.capture,o=n;!Zd&&i&&(o=n.__once||function a(u){this.removeEventListener(e,a,s),n.call(this,u)},n.__once=o),t.addEventListener(e,o,Jd?r:s)}t.addEventListener(e,n,r)}function MP(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function fc(t,e,n,r){return LP(t,e,n,r),function(){MP(t,e,n,r)}}function VP(t,e,n,r){if(r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function FP(t){var e=nr(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function jP(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||VP(t,"transitionend",!0)},e+n),s=fc(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function UP(t,e,n,r){n==null&&(n=FP(t)||0);var i=jP(t,n,r),s=fc(t,"transitionend",e);return function(){i(),s()}}function M0(t,e){const n=nr(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function Xm(t,e){const n=M0(t,"transitionDuration"),r=M0(t,"transitionDelay"),i=UP(t,s=>{s.target===t&&(i(),e(s))},n+r)}function Ho(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}function MT(t){t.offsetHeight}function $P(t){return t&&"setState"in t?ks.findDOMNode(t):t??null}const Jm=ke.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:u,...c},f)=>{const p=D.useRef(null),m=ll(p,u),v=L=>{m($P(L))},E=L=>_=>{L&&p.current&&L(p.current,_)},R=D.useCallback(E(t),[t]),P=D.useCallback(E(e),[e]),T=D.useCallback(E(n),[n]),w=D.useCallback(E(r),[r]),I=D.useCallback(E(i),[i]),b=D.useCallback(E(s),[s]),V=D.useCallback(E(o),[o]);return C.jsx(mr,{ref:f,...c,onEnter:R,onEntered:T,onEntering:P,onExit:w,onExited:b,onExiting:I,addEndListener:V,nodeRef:p,children:typeof a=="function"?(L,_)=>a(L,{..._,ref:v}):ke.cloneElement(a,{ref:v})})}),zP={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function BP(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=zP[t];return r+parseInt(nr(e,i[0]),10)+parseInt(nr(e,i[1]),10)}const WP={[Cr]:"collapse",[$a]:"collapsing",[gn]:"collapsing",[Qn]:"collapse show"},HP=ke.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",in:u=!1,timeout:c=300,mountOnEnter:f=!1,unmountOnExit:p=!1,appear:m=!1,getDimensionValue:v=BP,...E},R)=>{const P=typeof a=="function"?a():a,T=D.useMemo(()=>Ho(L=>{L.style[P]="0"},t),[P,t]),w=D.useMemo(()=>Ho(L=>{const _=`scroll${P[0].toUpperCase()}${P.slice(1)}`;L.style[P]=`${L[_]}px`},e),[P,e]),I=D.useMemo(()=>Ho(L=>{L.style[P]=null},n),[P,n]),b=D.useMemo(()=>Ho(L=>{L.style[P]=`${v(P,L)}px`,MT(L)},r),[r,v,P]),V=D.useMemo(()=>Ho(L=>{L.style[P]=null},i),[P,i]);return C.jsx(Jm,{ref:R,addEndListener:Xm,...E,"aria-expanded":E.role?u:null,onEnter:T,onEntering:w,onEntered:I,onExit:b,onExiting:V,childRef:o.ref,in:u,timeout:c,mountOnEnter:f,unmountOnExit:p,appear:m,children:(L,_)=>ke.cloneElement(o,{..._,className:Fe(s,o.props.className,WP[L],P==="width"&&"collapse-horizontal")})})}),VT=D.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=wt(e,"navbar-collapse");const i=D.useContext(Xi);return C.jsx(HP,{in:!!(i&&i.expanded),...n,children:C.jsx("div",{ref:r,className:e,children:t})})});VT.displayName="NavbarCollapse";const FT=D.forwardRef(({bsPrefix:t,className:e,children:n,label:r="Toggle navigation",as:i="button",onClick:s,...o},a)=>{t=wt(t,"navbar-toggler");const{onToggle:u,expanded:c}=D.useContext(Xi)||{},f=tn(p=>{s&&s(p),u&&u()});return i==="button"&&(o.type="button"),C.jsx(i,{...o,ref:a,onClick:f,"aria-label":r,className:Fe(e,t,!c&&"collapsed"),children:n||C.jsx("span",{className:`${t}-icon`})})});FT.displayName="NavbarToggle";const ep=new WeakMap,V0=(t,e)=>{if(!t||!e)return;const n=ep.get(e)||new Map;ep.set(e,n);let r=n.get(t);return r||(r=e.matchMedia(t),r.refCount=0,n.set(r.media,r)),r};function qP(t,e=typeof window>"u"?void 0:window){const n=V0(t,e),[r,i]=D.useState(()=>n?n.matches:!1);return Xd(()=>{let s=V0(t,e);if(!s)return i(!1);let o=ep.get(e);const a=()=>{i(s.matches)};return s.refCount++,s.addListener(a),a(),()=>{s.removeListener(a),s.refCount--,s.refCount<=0&&(o==null||o.delete(s.media)),s=void 0}},[t]),r}function KP(t){const e=Object.keys(t);function n(a,u){return a===u?u:a?`${a} and ${u}`:u}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){const u=r(a);let c=t[u];return typeof c=="number"?c=`${c-.2}px`:c=`calc(${c} - 0.2px)`,`(max-width: ${c})`}function s(a){let u=t[a];return typeof u=="number"&&(u=`${u}px`),`(min-width: ${u})`}function o(a,u,c){let f;typeof a=="object"?(f=a,c=u,u=!0):(u=u||!0,f={[a]:u});let p=D.useMemo(()=>Object.entries(f).reduce((m,[v,E])=>((E==="up"||E===!0)&&(m=n(m,s(v))),(E==="down"||E===!0)&&(m=n(m,i(v))),m),""),[JSON.stringify(f)]);return qP(p,c)}return o}const GP=KP({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function Cf(t){t===void 0&&(t=Ym());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function F0(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function QP(t){const e=D.useRef(t);return e.current=t,e}function YP(t){const e=QP(t);D.useEffect(()=>()=>e.current(),[])}function XP(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const j0=th("modal-open");class Zm{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return XP(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(nr(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(j0,""),nr(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(j0),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const jT=D.createContext(nh?window:void 0);jT.Provider;function eg(){return D.useContext(jT)}const Rf=(t,e)=>nh?t==null?(e||Ym()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function JP(t,e){const n=eg(),[r,i]=D.useState(()=>Rf(t,n==null?void 0:n.document));if(!r){const s=Rf(t);s&&i(s)}return D.useEffect(()=>{},[e,r]),D.useEffect(()=>{const s=Rf(t);s!==r&&i(s)},[t,r]),r}function ZP({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=D.useRef(null),o=D.useRef(e),a=tn(n);D.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const u=ll(s,t.ref),c=D.cloneElement(t,{ref:u});return e?c:i||!o.current&&r?null:c}function eb(t){return t.code==="Escape"||t.keyCode===27}function tb(){const t=D.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const nb=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function rb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ib(t){let{onEnter:e,onEntering:n,onEntered:r,onExit:i,onExiting:s,onExited:o,addEndListener:a,children:u}=t,c=rb(t,nb);const{major:f}=tb(),p=f>=19?u.props.ref:u.ref,m=D.useRef(null),v=ll(m,typeof u=="function"?null:p),E=L=>_=>{L&&m.current&&L(m.current,_)},R=D.useCallback(E(e),[e]),P=D.useCallback(E(n),[n]),T=D.useCallback(E(r),[r]),w=D.useCallback(E(i),[i]),I=D.useCallback(E(s),[s]),b=D.useCallback(E(o),[o]),V=D.useCallback(E(a),[a]);return Object.assign({},c,{nodeRef:m},e&&{onEnter:R},n&&{onEntering:P},r&&{onEntered:T},i&&{onExit:w},s&&{onExiting:I},o&&{onExited:b},a&&{addEndListener:V},{children:typeof u=="function"?(L,_)=>u(L,Object.assign({},_,{ref:v})):D.cloneElement(u,{ref:v})})}const sb=["component"];function ob(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const ab=D.forwardRef((t,e)=>{let{component:n}=t,r=ob(t,sb);const i=ib(r);return C.jsx(n,Object.assign({ref:e},i))});function lb({in:t,onTransition:e}){const n=D.useRef(null),r=D.useRef(!0),i=tn(e);return Xd(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),Xd(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function ub({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=D.useState(!e);e&&s&&o(!1);const a=lb({in:!!e,onTransition:c=>{const f=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(o(!0),n==null||n(c.element)))};Promise.resolve(i(c)).then(f,p=>{throw c.in||o(!0),p})}}),u=ll(a,t.ref);return s&&!e?null:D.cloneElement(t,{ref:u})}function U0(t,e,n){return t?C.jsx(ab,Object.assign({},n,{component:t})):e?C.jsx(ub,Object.assign({},n,{transition:e})):C.jsx(ZP,Object.assign({},n))}const cb=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function hb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let xf;function fb(t){return xf||(xf=new Zm({ownerDocument:t==null?void 0:t.document})),xf}function db(t){const e=eg(),n=t||fb(e),r=D.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:D.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:D.useCallback(i=>{r.current.backdrop=i},[])})}const UT=D.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:u=!0,onBackdropClick:c,onEscapeKeyDown:f,transition:p,runTransition:m,backdropTransition:v,runBackdropTransition:E,autoFocus:R=!0,enforceFocus:P=!0,restoreFocus:T=!0,restoreFocusOptions:w,renderDialog:I,renderBackdrop:b=ve=>C.jsx("div",Object.assign({},ve)),manager:V,container:L,onShow:_,onHide:y=()=>{},onExit:S,onExited:k,onExiting:x,onEnter:N,onEntering:A,onEntered:Be}=t,Rt=hb(t,cb);const at=eg(),De=JP(L),U=db(V),K=mP(),Q=gP(n),[se,te]=D.useState(!n),he=D.useRef(null);D.useImperativeHandle(e,()=>U,[U]),nh&&!Q&&n&&(he.current=Cf(at==null?void 0:at.document)),n&&se&&te(!1);const We=tn(()=>{if(U.add(),Jt.current=fc(document,"keydown",Bn),Ft.current=fc(document,"focus",()=>setTimeout(Le),!0),_&&_(),R){var ve,To;const Io=Cf((ve=(To=U.dialog)==null?void 0:To.ownerDocument)!=null?ve:at==null?void 0:at.document);U.dialog&&Io&&!F0(U.dialog,Io)&&(he.current=Io,U.dialog.focus())}}),de=tn(()=>{if(U.remove(),Jt.current==null||Jt.current(),Ft.current==null||Ft.current(),T){var ve;(ve=he.current)==null||ve.focus==null||ve.focus(w),he.current=null}});D.useEffect(()=>{!n||!De||We()},[n,De,We]),D.useEffect(()=>{se&&de()},[se,de]),YP(()=>{de()});const Le=tn(()=>{if(!P||!K()||!U.isTopModal())return;const ve=Cf(at==null?void 0:at.document);U.dialog&&ve&&!F0(U.dialog,ve)&&U.dialog.focus()}),lt=tn(ve=>{ve.target===ve.currentTarget&&(c==null||c(ve),a===!0&&y())}),Bn=tn(ve=>{u&&eb(ve)&&U.isTopModal()&&(f==null||f(ve),ve.defaultPrevented||y())}),Ft=D.useRef(),Jt=D.useRef(),un=(...ve)=>{te(!0),k==null||k(...ve)};if(!De)return null;const Et=Object.assign({role:r,ref:U.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},Rt,{style:s,className:i,tabIndex:-1});let hi=I?I(Et):C.jsx("div",Object.assign({},Et,{children:D.cloneElement(o,{role:"document"})}));hi=U0(p,m,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:S,onExiting:x,onExited:un,onEnter:N,onEntering:A,onEntered:Be,children:hi});let yr=null;return a&&(yr=b({ref:U.setBackdropRef,onClick:lt}),yr=U0(v,E,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:yr})),C.jsx(C.Fragment,{children:ks.createPortal(C.jsxs(C.Fragment,{children:[yr,hi]}),De)})});UT.displayName="Modal";const pb=Object.assign(UT,{Manager:Zm}),mb={[gn]:"show",[Qn]:"show"},$T=D.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=D.useCallback((u,c)=>{MT(u),r==null||r(u,c)},[r]);return C.jsx(Jm,{ref:s,addEndListener:Xm,...o,onEnter:a,childRef:e.ref,children:(u,c)=>D.cloneElement(e,{...c,className:Fe("fade",t,e.props.className,mb[u],n[u])})})});$T.displayName="Fade";const zT=D.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=wt(e,"offcanvas-body"),C.jsx(n,{ref:i,className:Fe(t,e),...r})));zT.displayName="OffcanvasBody";const gb={[gn]:"show",[Qn]:"show"},BT=D.forwardRef(({bsPrefix:t,className:e,children:n,in:r=!1,mountOnEnter:i=!1,unmountOnExit:s=!1,appear:o=!1,...a},u)=>(t=wt(t,"offcanvas"),C.jsx(Jm,{ref:u,addEndListener:Xm,in:r,mountOnEnter:i,unmountOnExit:s,appear:o,...a,childRef:n.ref,children:(c,f)=>D.cloneElement(n,{...f,className:Fe(e,n.props.className,(c===gn||c===$a)&&`${t}-toggling`,gb[c])})})));BT.displayName="OffcanvasToggling";const WT=D.createContext({onHide(){}}),yb={"aria-label":Y.string,onClick:Y.func,variant:Y.oneOf(["white"])},tg=D.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>C.jsx("button",{ref:i,type:"button",className:Fe("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));tg.displayName="CloseButton";tg.propTypes=yb;const vb=D.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const a=D.useContext(WT),u=tn(()=>{a==null||a.onHide(),r==null||r()});return C.jsxs("div",{ref:o,...s,children:[i,n&&C.jsx(tg,{"aria-label":t,variant:e,onClick:u})]})}),HT=D.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=wt(t,"offcanvas-header"),C.jsx(vb,{ref:s,...i,className:Fe(e,t),closeLabel:n,closeButton:r})));HT.displayName="OffcanvasHeader";const _b=t=>D.forwardRef((e,n)=>C.jsx("div",{...e,ref:n,className:Fe(e.className,t)})),wb=_b("h5"),qT=D.forwardRef(({className:t,bsPrefix:e,as:n=wb,...r},i)=>(e=wt(e,"offcanvas-title"),C.jsx(n,{ref:i,className:Fe(t,e),...r})));qT.displayName="OffcanvasTitle";function Eb(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function Tb(t,e){t.classList?t.classList.add(e):Eb(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function $0(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Ib(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=$0(t.className,e):t.setAttribute("class",$0(t.className&&t.className.baseVal||"",e))}const us={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class KT extends Zm{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,nr(n,{[e]:`${parseFloat(nr(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],nr(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(Tb(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";vi(n,us.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),vi(n,us.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),vi(n,us.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();Ib(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";vi(n,us.FIXED_CONTENT).forEach(s=>this.restore(r,s)),vi(n,us.STICKY_CONTENT).forEach(s=>this.restore(i,s)),vi(n,us.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let Pf;function Sb(t){return Pf||(Pf=new KT(t)),Pf}function Ab(t){return C.jsx(BT,{...t})}function kb(t){return C.jsx($T,{...t})}const GT=D.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i="start",responsive:s,show:o=!1,backdrop:a=!0,keyboard:u=!0,scroll:c=!1,onEscapeKeyDown:f,onShow:p,onHide:m,container:v,autoFocus:E=!0,enforceFocus:R=!0,restoreFocus:P=!0,restoreFocusOptions:T,onEntered:w,onExit:I,onExiting:b,onEnter:V,onEntering:L,onExited:_,backdropClassName:y,manager:S,renderStaticNode:k=!1,...x},N)=>{const A=D.useRef();t=wt(t,"offcanvas");const{onToggle:Be}=D.useContext(Xi)||{},[Rt,at]=D.useState(!1),De=GP(s||"xs","up");D.useEffect(()=>{at(s?o&&!De:o)},[o,s,De]);const U=tn(()=>{Be==null||Be(),m==null||m()}),K=D.useMemo(()=>({onHide:U}),[U]);function Q(){return S||(c?(A.current||(A.current=new KT({handleContainerOverflow:!1})),A.current):Sb())}const se=(de,...Le)=>{de&&(de.style.visibility="visible"),V==null||V(de,...Le)},te=(de,...Le)=>{de&&(de.style.visibility=""),_==null||_(...Le)},he=D.useCallback(de=>C.jsx("div",{...de,className:Fe(`${t}-backdrop`,y)}),[y,t]),We=de=>C.jsx("div",{...de,...x,className:Fe(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return C.jsxs(C.Fragment,{children:[!Rt&&(s||k)&&We({}),C.jsx(WT.Provider,{value:K,children:C.jsx(pb,{show:Rt,ref:N,backdrop:a,container:v,keyboard:u,autoFocus:E,enforceFocus:R&&!c,restoreFocus:P,restoreFocusOptions:T,onEscapeKeyDown:f,onShow:p,onHide:U,onEnter:se,onEntering:L,onEntered:w,onExit:I,onExiting:b,onExited:te,manager:Q(),transition:Ab,backdropTransition:kb,renderBackdrop:he,renderDialog:We})})]})});GT.displayName="Offcanvas";const Cb=Object.assign(GT,{Body:zT,Header:HT,Title:qT}),QT=D.forwardRef((t,e)=>{const n=D.useContext(Xi);return C.jsx(Cb,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});QT.displayName="NavbarOffcanvas";const YT=D.forwardRef(({className:t,bsPrefix:e,as:n="span",...r},i)=>(e=wt(e,"navbar-text"),C.jsx(n,{ref:i,className:Fe(t,e),...r})));YT.displayName="NavbarText";const XT=D.forwardRef((t,e)=>{const{bsPrefix:n,expand:r=!0,variant:i="light",bg:s,fixed:o,sticky:a,className:u,as:c="nav",expanded:f,onToggle:p,onSelect:m,collapseOnSelect:v=!1,...E}=_T(t,{expanded:"onToggle"}),R=wt(n,"navbar"),P=D.useCallback((...I)=>{m==null||m(...I),v&&f&&(p==null||p(!1))},[m,v,f,p]);E.role===void 0&&c!=="nav"&&(E.role="navigation");let T=`${R}-expand`;typeof r=="string"&&(T=`${T}-${r}`);const w=D.useMemo(()=>({onToggle:()=>p==null?void 0:p(!f),bsPrefix:R,expanded:!!f,expand:r}),[R,f,r,p]);return C.jsx(Xi.Provider,{value:w,children:C.jsx(hc.Provider,{value:P,children:C.jsx(c,{ref:e,...E,className:Fe(u,R,r&&T,i&&`${R}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});XT.displayName="Navbar";const ru=Object.assign(XT,{Brand:bT,Collapse:VT,Offcanvas:QT,Text:YT,Toggle:FT});var z0={};/**
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
 */const JT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Rb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ZT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;u||(v=64,o||(m=64)),r.push(n[f],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(JT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Rb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new xb;const m=s<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),p!==64){const E=c<<6&192|p;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pb=function(t){const e=JT(t);return ZT.encodeByteArray(e,!0)},dc=function(t){return Pb(t).replace(/\./g,"")},eI=function(t){try{return ZT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nb=()=>bb().__FIREBASE_DEFAULTS__,Ob=()=>{if(typeof process>"u"||typeof z0>"u")return;const t=z0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Db=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eI(t[1]);return e&&JSON.parse(e)},rh=()=>{try{return Nb()||Ob()||Db()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tI=t=>{var e,n;return(n=(e=rh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Lb=t=>{const e=tI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nI=()=>{var t;return(t=rh())===null||t===void 0?void 0:t.config},rI=t=>{var e;return(e=rh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Mb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Vb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[dc(JSON.stringify(n)),dc(JSON.stringify(o)),""].join(".")}/**
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
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function jb(){var t;const e=(t=rh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ub(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $b(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zb(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bb(){return!jb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sI(){try{return typeof indexedDB=="object"}catch{return!1}}function oI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Wb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Hb="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Hb,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Sn(i,a,r)}}function qb(t,e){return t.replace(Kb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Kb=/\{\$([^}]+)}/g;function Gb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function za(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(B0(s)&&B0(o)){if(!za(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function B0(t){return t!==null&&typeof t=="object"}/**
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
 */function ul(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qb(t,e){const n=new Yb(t,e);return n.subscribe.bind(n)}class Yb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bf),i.error===void 0&&(i.error=bf),i.complete===void 0&&(i.complete=bf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bf(){}/**
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
 */const Jb=1e3,Zb=2,e2=4*60*60*1e3,t2=.5;function W0(t,e=Jb,n=Zb){const r=e*Math.pow(n,t),i=Math.round(t2*r*(Math.random()-.5)*2);return Math.min(e2,r+i)}/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _i="[DEFAULT]";/**
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
 */class n2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i2(e))try{this.getOrInitializeService({instanceIdentifier:_i})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=_i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_i){return this.instances.has(e)}getOptions(e=_i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:r2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_i){return this.component?this.component.multipleInstances?e:_i:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r2(t){return t===_i?void 0:t}function i2(t){return t.instantiationMode==="EAGER"}/**
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
 */class s2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new n2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const o2={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},a2=oe.INFO,l2={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},u2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=l2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ih{constructor(e){this.name=e,this._logLevel=a2,this._logHandler=u2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?o2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const c2=(t,e)=>e.some(n=>t instanceof n);let H0,q0;function h2(){return H0||(H0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f2(){return q0||(q0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aI=new WeakMap,tp=new WeakMap,lI=new WeakMap,Nf=new WeakMap,ng=new WeakMap;function d2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&aI.set(n,t)}).catch(()=>{}),ng.set(e,t),e}function p2(t){if(tp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});tp.set(t,e)}let np={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function m2(t){np=t(np)}function g2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Of(this),e,...n);return lI.set(r,e.sort?e.sort():[e]),Gr(r)}:f2().includes(t)?function(...e){return t.apply(Of(this),e),Gr(aI.get(this))}:function(...e){return Gr(t.apply(Of(this),e))}}function y2(t){return typeof t=="function"?g2(t):(t instanceof IDBTransaction&&p2(t),c2(t,h2())?new Proxy(t,np):t)}function Gr(t){if(t instanceof IDBRequest)return d2(t);if(Nf.has(t))return Nf.get(t);const e=y2(t);return e!==t&&(Nf.set(t,e),ng.set(e,t)),e}const Of=t=>ng.get(t);function uI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Gr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Gr(o.result),u.oldVersion,u.newVersion,Gr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const v2=["get","getKey","getAll","getAllKeys","count"],_2=["put","add","delete","clear"],Df=new Map;function K0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Df.get(e))return Df.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v2.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Df.set(e,s),s}m2(t=>({...t,get:(e,n,r)=>K0(e,n)||t.get(e,n,r),has:(e,n)=>!!K0(e,n)||t.has(e,n)}));/**
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
 */class w2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(E2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function E2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rp="@firebase/app",G0="0.10.13";/**
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
 */const ar=new ih("@firebase/app"),T2="@firebase/app-compat",I2="@firebase/analytics-compat",S2="@firebase/analytics",A2="@firebase/app-check-compat",k2="@firebase/app-check",C2="@firebase/auth",R2="@firebase/auth-compat",x2="@firebase/database",P2="@firebase/data-connect",b2="@firebase/database-compat",N2="@firebase/functions",O2="@firebase/functions-compat",D2="@firebase/installations",L2="@firebase/installations-compat",M2="@firebase/messaging",V2="@firebase/messaging-compat",F2="@firebase/performance",j2="@firebase/performance-compat",U2="@firebase/remote-config",$2="@firebase/remote-config-compat",z2="@firebase/storage",B2="@firebase/storage-compat",W2="@firebase/firestore",H2="@firebase/vertexai-preview",q2="@firebase/firestore-compat",K2="firebase",G2="10.14.1";/**
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
 */const ip="[DEFAULT]",Q2={[rp]:"fire-core",[T2]:"fire-core-compat",[S2]:"fire-analytics",[I2]:"fire-analytics-compat",[k2]:"fire-app-check",[A2]:"fire-app-check-compat",[C2]:"fire-auth",[R2]:"fire-auth-compat",[x2]:"fire-rtdb",[P2]:"fire-data-connect",[b2]:"fire-rtdb-compat",[N2]:"fire-fn",[O2]:"fire-fn-compat",[D2]:"fire-iid",[L2]:"fire-iid-compat",[M2]:"fire-fcm",[V2]:"fire-fcm-compat",[F2]:"fire-perf",[j2]:"fire-perf-compat",[U2]:"fire-rc",[$2]:"fire-rc-compat",[z2]:"fire-gcs",[B2]:"fire-gcs-compat",[W2]:"fire-fst",[q2]:"fire-fst-compat",[H2]:"fire-vertex","fire-js":"fire-js",[K2]:"fire-js-all"};/**
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
 */const pc=new Map,Y2=new Map,sp=new Map;function Q0(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Un(t){const e=t.name;if(sp.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;sp.set(e,t);for(const n of pc.values())Q0(n,t);for(const n of Y2.values())Q0(n,t);return!0}function Zi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vr(t){return t.settings!==void 0}/**
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
 */const X2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qr=new Ji("app","Firebase",X2);/**
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
 */class J2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
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
 */const po=G2;function cI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ip,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qr.create("bad-app-name",{appName:String(i)});if(n||(n=nI()),!n)throw Qr.create("no-options");const s=pc.get(i);if(s){if(za(n,s.options)&&za(r,s.config))return s;throw Qr.create("duplicate-app",{appName:i})}const o=new s2(i);for(const u of sp.values())o.addComponent(u);const a=new J2(n,r,o);return pc.set(i,a),a}function rg(t=ip){const e=pc.get(t);if(!e&&t===ip&&nI())return cI();if(!e)throw Qr.create("no-app",{appName:t});return e}function sn(t,e,n){var r;let i=(r=Q2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(a.join(" "));return}Un(new Tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Z2="firebase-heartbeat-database",eN=1,Ba="firebase-heartbeat-store";let Lf=null;function hI(){return Lf||(Lf=uI(Z2,eN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ba)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qr.create("idb-open",{originalErrorMessage:t.message})})),Lf}async function tN(t){try{const n=(await hI()).transaction(Ba),r=await n.objectStore(Ba).get(fI(t));return await n.done,r}catch(e){if(e instanceof Sn)ar.warn(e.message);else{const n=Qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(n.message)}}}async function Y0(t,e){try{const r=(await hI()).transaction(Ba,"readwrite");await r.objectStore(Ba).put(e,fI(t)),await r.done}catch(n){if(n instanceof Sn)ar.warn(n.message);else{const r=Qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(r.message)}}}function fI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nN=1024,rN=30*24*60*60*1e3;class iN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=X0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=rN}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ar.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=X0(),{heartbeatsToSend:r,unsentEntries:i}=sN(this._heartbeatsCache.heartbeats),s=dc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ar.warn(n),""}}}function X0(){return new Date().toISOString().substring(0,10)}function sN(t,e=nN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),J0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),J0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sI()?oI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Y0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Y0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function J0(t){return dc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function aN(t){Un(new Tn("platform-logger",e=>new w2(e),"PRIVATE")),Un(new Tn("heartbeat",e=>new iN(e),"PRIVATE")),sn(rp,G0,t),sn(rp,G0,"esm2017"),sn("fire-js","")}aN("");var lN="firebase",uN="10.14.1";/**
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
 */sn(lN,uN,"app");const dI="@firebase/installations",ig="0.6.9";/**
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
 */const pI=1e4,mI=`w:${ig}`,gI="FIS_v2",cN="https://firebaseinstallations.googleapis.com/v1",hN=60*60*1e3,fN="installations",dN="Installations";/**
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
 */const pN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ui=new Ji(fN,dN,pN);function yI(t){return t instanceof Sn&&t.code.includes("request-failed")}/**
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
 */function vI({projectId:t}){return`${cN}/projects/${t}/installations`}function _I(t){return{token:t.token,requestStatus:2,expiresIn:gN(t.expiresIn),creationTime:Date.now()}}async function wI(t,e){const r=(await e.json()).error;return Ui.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function EI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function mN(t,{refreshToken:e}){const n=EI(t);return n.append("Authorization",yN(e)),n}async function TI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function gN(t){return Number(t.replace("s","000"))}function yN(t){return`${gI} ${t}`}/**
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
 */async function vN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=vI(t),i=EI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:gI,appId:t.appId,sdkVersion:mI},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await TI(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:_I(c.authToken)}}else throw await wI("Create Installation",u)}/**
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
 */function II(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function _N(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const wN=/^[cdef][\w-]{21}$/,op="";function EN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=TN(t);return wN.test(n)?n:op}catch{return op}}function TN(t){return _N(t).substr(0,22)}/**
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
 */function sh(t){return`${t.appName}!${t.appId}`}/**
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
 */const SI=new Map;function AI(t,e){const n=sh(t);kI(n,e),IN(n,e)}function kI(t,e){const n=SI.get(t);if(n)for(const r of n)r(e)}function IN(t,e){const n=SN();n&&n.postMessage({key:t,fid:e}),AN()}let Si=null;function SN(){return!Si&&"BroadcastChannel"in self&&(Si=new BroadcastChannel("[Firebase] FID Change"),Si.onmessage=t=>{kI(t.data.key,t.data.fid)}),Si}function AN(){SI.size===0&&Si&&(Si.close(),Si=null)}/**
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
 */const kN="firebase-installations-database",CN=1,$i="firebase-installations-store";let Mf=null;function sg(){return Mf||(Mf=uI(kN,CN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($i)}}})),Mf}async function mc(t,e){const n=sh(t),i=(await sg()).transaction($i,"readwrite"),s=i.objectStore($i),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&AI(t,e.fid),e}async function CI(t){const e=sh(t),r=(await sg()).transaction($i,"readwrite");await r.objectStore($i).delete(e),await r.done}async function oh(t,e){const n=sh(t),i=(await sg()).transaction($i,"readwrite"),s=i.objectStore($i),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&AI(t,a.fid),a}/**
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
 */async function og(t){let e;const n=await oh(t.appConfig,r=>{const i=RN(r),s=xN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===op?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function RN(t){const e=t||{fid:EN(),registrationStatus:0};return RI(e)}function xN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ui.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=PN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bN(t)}:{installationEntry:e}}async function PN(t,e){try{const n=await vN(t,e);return mc(t.appConfig,n)}catch(n){throw yI(n)&&n.customData.serverCode===409?await CI(t.appConfig):await mc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function bN(t){let e=await Z0(t.appConfig);for(;e.registrationStatus===1;)await II(100),e=await Z0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await og(t);return r||n}return e}function Z0(t){return oh(t,e=>{if(!e)throw Ui.create("installation-not-found");return RI(e)})}function RI(t){return NN(t)?{fid:t.fid,registrationStatus:0}:t}function NN(t){return t.registrationStatus===1&&t.registrationTime+pI<Date.now()}/**
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
 */async function ON({appConfig:t,heartbeatServiceProvider:e},n){const r=DN(t,n),i=mN(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:mI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await TI(()=>fetch(r,a));if(u.ok){const c=await u.json();return _I(c)}else throw await wI("Generate Auth Token",u)}function DN(t,{fid:e}){return`${vI(t)}/${e}/authTokens:generate`}/**
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
 */async function ag(t,e=!1){let n;const r=await oh(t.appConfig,s=>{if(!xI(s))throw Ui.create("not-registered");const o=s.authToken;if(!e&&VN(o))return s;if(o.requestStatus===1)return n=LN(t,e),s;{if(!navigator.onLine)throw Ui.create("app-offline");const a=jN(s);return n=MN(t,a),a}});return n?await n:r.authToken}async function LN(t,e){let n=await e_(t.appConfig);for(;n.authToken.requestStatus===1;)await II(100),n=await e_(t.appConfig);const r=n.authToken;return r.requestStatus===0?ag(t,e):r}function e_(t){return oh(t,e=>{if(!xI(e))throw Ui.create("not-registered");const n=e.authToken;return UN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function MN(t,e){try{const n=await ON(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await mc(t.appConfig,r),n}catch(n){if(yI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await CI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await mc(t.appConfig,r)}throw n}}function xI(t){return t!==void 0&&t.registrationStatus===2}function VN(t){return t.requestStatus===2&&!FN(t)}function FN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+hN}function jN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function UN(t){return t.requestStatus===1&&t.requestTime+pI<Date.now()}/**
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
 */async function $N(t){const e=t,{installationEntry:n,registrationPromise:r}=await og(e);return r?r.catch(console.error):ag(e).catch(console.error),n.fid}/**
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
 */async function zN(t,e=!1){const n=t;return await BN(n),(await ag(n,e)).token}async function BN(t){const{registrationPromise:e}=await og(t);e&&await e}/**
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
 */function WN(t){if(!t||!t.options)throw Vf("App Configuration");if(!t.name)throw Vf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Vf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Vf(t){return Ui.create("missing-app-config-values",{valueName:t})}/**
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
 */const PI="installations",HN="installations-internal",qN=t=>{const e=t.getProvider("app").getImmediate(),n=WN(e),r=Zi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},KN=t=>{const e=t.getProvider("app").getImmediate(),n=Zi(e,PI).getImmediate();return{getId:()=>$N(n),getToken:i=>zN(n,i)}};function GN(){Un(new Tn(PI,qN,"PUBLIC")),Un(new Tn(HN,KN,"PRIVATE"))}GN();sn(dI,ig);sn(dI,ig,"esm2017");/**
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
 */const gc="analytics",QN="firebase_id",YN="origin",XN=60*1e3,JN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",lg="https://www.googletagmanager.com/gtag/js";/**
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
 */const Mt=new ih("@firebase/analytics");/**
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
 */const ZN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ht=new Ji("analytics","Analytics",ZN);/**
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
 */function eO(t){if(!t.startsWith(lg)){const e=Ht.create("invalid-gtag-resource",{gtagURL:t});return Mt.warn(e.message),""}return t}function bI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function tO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function nO(t,e){const n=tO("firebase-js-sdk-policy",{createScriptURL:eO}),r=document.createElement("script"),i=`${lg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function rO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function iO(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await bI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){Mt.error(a)}t("config",i,s)}async function sO(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await bI(n);for(const u of o){const c=a.find(p=>p.measurementId===u),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Mt.error(s)}}function oO(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await sO(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await iO(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Mt.error(a)}}return i}function aO(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=oO(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function lO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(lg)&&n.src.includes(t))return n;return null}/**
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
 */const uO=30,cO=1e3;class hO{constructor(e={},n=cO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const NI=new hO;function fO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function dO(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:fO(r)},s=JN.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw Ht.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function pO(t,e=NI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ht.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ht.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new yO;return setTimeout(async()=>{a.abort()},XN),OI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function OI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=NI){var s;const{appId:o,measurementId:a}=t;try{await mO(r,e)}catch(u){if(a)return Mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await dO(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!gO(c)){if(i.deleteThrottleMetadata(o),a)return Mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const f=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?W0(n,i.intervalMillis,uO):W0(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,p),Mt.debug(`Calling attemptFetch again in ${f} millis`),OI(t,p,r,i)}}function mO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ht.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gO(t){if(!(t instanceof Sn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class yO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function vO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function _O(){if(sI())try{await oI()}catch(t){return Mt.warn(Ht.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Mt.warn(Ht.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wO(t,e,n,r,i,s,o){var a;const u=pO(t);u.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&Mt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Mt.error(v)),e.push(u);const c=_O().then(v=>{if(v)return r.getId()}),[f,p]=await Promise.all([u,c]);lO(s)||nO(s,f.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[YN]="firebase",m.update=!0,p!=null&&(m[QN]=p),i("config",f.measurementId,m),f.measurementId}/**
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
 */class EO{constructor(e){this.app=e}_delete(){return delete ma[this.app.options.appId],Promise.resolve()}}let ma={},t_=[];const n_={};let Ff="dataLayer",TO="gtag",r_,DI,i_=!1;function IO(){const t=[];if(iI()&&t.push("This is a browser extension environment."),Wb()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ht.create("invalid-analytics-context",{errorInfo:e});Mt.warn(n.message)}}function SO(t,e,n){IO();const r=t.options.appId;if(!r)throw Ht.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ht.create("no-api-key");if(ma[r]!=null)throw Ht.create("already-exists",{id:r});if(!i_){rO(Ff);const{wrappedGtag:s,gtagCore:o}=aO(ma,t_,n_,Ff,TO);DI=s,r_=o,i_=!0}return ma[r]=wO(t,t_,n_,e,r_,Ff,n),new EO(t)}function AO(t=rg()){t=Je(t);const e=Zi(t,gc);return e.isInitialized()?e.getImmediate():kO(t)}function kO(t,e={}){const n=Zi(t,gc);if(n.isInitialized()){const i=n.getImmediate();if(za(e,n.getOptions()))return i;throw Ht.create("already-initialized")}return n.initialize({options:e})}function CO(t,e,n,r){t=Je(t),vO(DI,ma[t.app.options.appId],e,n,r).catch(i=>Mt.error(i))}const s_="@firebase/analytics",o_="0.10.8";function RO(){Un(new Tn(gc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return SO(r,i,n)},"PUBLIC")),Un(new Tn("analytics-internal",t,"PRIVATE")),sn(s_,o_),sn(s_,o_,"esm2017");function t(e){try{const n=e.getProvider(gc).getImmediate();return{logEvent:(r,i,s)=>CO(n,r,i,s)}}catch(n){throw Ht.create("interop-component-reg-failed",{reason:n})}}}RO();var a_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xi,LI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function S(){}S.prototype=y.prototype,_.D=y.prototype,_.prototype=new S,_.prototype.constructor=_,_.C=function(k,x,N){for(var A=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)A[Be-2]=arguments[Be];return y.prototype[x].apply(k,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,S){S||(S=0);var k=Array(16);if(typeof y=="string")for(var x=0;16>x;++x)k[x]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(x=0;16>x;++x)k[x]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=_.g[0],S=_.g[1],x=_.g[2];var N=_.g[3],A=y+(N^S&(x^N))+k[0]+3614090360&4294967295;y=S+(A<<7&4294967295|A>>>25),A=N+(x^y&(S^x))+k[1]+3905402710&4294967295,N=y+(A<<12&4294967295|A>>>20),A=x+(S^N&(y^S))+k[2]+606105819&4294967295,x=N+(A<<17&4294967295|A>>>15),A=S+(y^x&(N^y))+k[3]+3250441966&4294967295,S=x+(A<<22&4294967295|A>>>10),A=y+(N^S&(x^N))+k[4]+4118548399&4294967295,y=S+(A<<7&4294967295|A>>>25),A=N+(x^y&(S^x))+k[5]+1200080426&4294967295,N=y+(A<<12&4294967295|A>>>20),A=x+(S^N&(y^S))+k[6]+2821735955&4294967295,x=N+(A<<17&4294967295|A>>>15),A=S+(y^x&(N^y))+k[7]+4249261313&4294967295,S=x+(A<<22&4294967295|A>>>10),A=y+(N^S&(x^N))+k[8]+1770035416&4294967295,y=S+(A<<7&4294967295|A>>>25),A=N+(x^y&(S^x))+k[9]+2336552879&4294967295,N=y+(A<<12&4294967295|A>>>20),A=x+(S^N&(y^S))+k[10]+4294925233&4294967295,x=N+(A<<17&4294967295|A>>>15),A=S+(y^x&(N^y))+k[11]+2304563134&4294967295,S=x+(A<<22&4294967295|A>>>10),A=y+(N^S&(x^N))+k[12]+1804603682&4294967295,y=S+(A<<7&4294967295|A>>>25),A=N+(x^y&(S^x))+k[13]+4254626195&4294967295,N=y+(A<<12&4294967295|A>>>20),A=x+(S^N&(y^S))+k[14]+2792965006&4294967295,x=N+(A<<17&4294967295|A>>>15),A=S+(y^x&(N^y))+k[15]+1236535329&4294967295,S=x+(A<<22&4294967295|A>>>10),A=y+(x^N&(S^x))+k[1]+4129170786&4294967295,y=S+(A<<5&4294967295|A>>>27),A=N+(S^x&(y^S))+k[6]+3225465664&4294967295,N=y+(A<<9&4294967295|A>>>23),A=x+(y^S&(N^y))+k[11]+643717713&4294967295,x=N+(A<<14&4294967295|A>>>18),A=S+(N^y&(x^N))+k[0]+3921069994&4294967295,S=x+(A<<20&4294967295|A>>>12),A=y+(x^N&(S^x))+k[5]+3593408605&4294967295,y=S+(A<<5&4294967295|A>>>27),A=N+(S^x&(y^S))+k[10]+38016083&4294967295,N=y+(A<<9&4294967295|A>>>23),A=x+(y^S&(N^y))+k[15]+3634488961&4294967295,x=N+(A<<14&4294967295|A>>>18),A=S+(N^y&(x^N))+k[4]+3889429448&4294967295,S=x+(A<<20&4294967295|A>>>12),A=y+(x^N&(S^x))+k[9]+568446438&4294967295,y=S+(A<<5&4294967295|A>>>27),A=N+(S^x&(y^S))+k[14]+3275163606&4294967295,N=y+(A<<9&4294967295|A>>>23),A=x+(y^S&(N^y))+k[3]+4107603335&4294967295,x=N+(A<<14&4294967295|A>>>18),A=S+(N^y&(x^N))+k[8]+1163531501&4294967295,S=x+(A<<20&4294967295|A>>>12),A=y+(x^N&(S^x))+k[13]+2850285829&4294967295,y=S+(A<<5&4294967295|A>>>27),A=N+(S^x&(y^S))+k[2]+4243563512&4294967295,N=y+(A<<9&4294967295|A>>>23),A=x+(y^S&(N^y))+k[7]+1735328473&4294967295,x=N+(A<<14&4294967295|A>>>18),A=S+(N^y&(x^N))+k[12]+2368359562&4294967295,S=x+(A<<20&4294967295|A>>>12),A=y+(S^x^N)+k[5]+4294588738&4294967295,y=S+(A<<4&4294967295|A>>>28),A=N+(y^S^x)+k[8]+2272392833&4294967295,N=y+(A<<11&4294967295|A>>>21),A=x+(N^y^S)+k[11]+1839030562&4294967295,x=N+(A<<16&4294967295|A>>>16),A=S+(x^N^y)+k[14]+4259657740&4294967295,S=x+(A<<23&4294967295|A>>>9),A=y+(S^x^N)+k[1]+2763975236&4294967295,y=S+(A<<4&4294967295|A>>>28),A=N+(y^S^x)+k[4]+1272893353&4294967295,N=y+(A<<11&4294967295|A>>>21),A=x+(N^y^S)+k[7]+4139469664&4294967295,x=N+(A<<16&4294967295|A>>>16),A=S+(x^N^y)+k[10]+3200236656&4294967295,S=x+(A<<23&4294967295|A>>>9),A=y+(S^x^N)+k[13]+681279174&4294967295,y=S+(A<<4&4294967295|A>>>28),A=N+(y^S^x)+k[0]+3936430074&4294967295,N=y+(A<<11&4294967295|A>>>21),A=x+(N^y^S)+k[3]+3572445317&4294967295,x=N+(A<<16&4294967295|A>>>16),A=S+(x^N^y)+k[6]+76029189&4294967295,S=x+(A<<23&4294967295|A>>>9),A=y+(S^x^N)+k[9]+3654602809&4294967295,y=S+(A<<4&4294967295|A>>>28),A=N+(y^S^x)+k[12]+3873151461&4294967295,N=y+(A<<11&4294967295|A>>>21),A=x+(N^y^S)+k[15]+530742520&4294967295,x=N+(A<<16&4294967295|A>>>16),A=S+(x^N^y)+k[2]+3299628645&4294967295,S=x+(A<<23&4294967295|A>>>9),A=y+(x^(S|~N))+k[0]+4096336452&4294967295,y=S+(A<<6&4294967295|A>>>26),A=N+(S^(y|~x))+k[7]+1126891415&4294967295,N=y+(A<<10&4294967295|A>>>22),A=x+(y^(N|~S))+k[14]+2878612391&4294967295,x=N+(A<<15&4294967295|A>>>17),A=S+(N^(x|~y))+k[5]+4237533241&4294967295,S=x+(A<<21&4294967295|A>>>11),A=y+(x^(S|~N))+k[12]+1700485571&4294967295,y=S+(A<<6&4294967295|A>>>26),A=N+(S^(y|~x))+k[3]+2399980690&4294967295,N=y+(A<<10&4294967295|A>>>22),A=x+(y^(N|~S))+k[10]+4293915773&4294967295,x=N+(A<<15&4294967295|A>>>17),A=S+(N^(x|~y))+k[1]+2240044497&4294967295,S=x+(A<<21&4294967295|A>>>11),A=y+(x^(S|~N))+k[8]+1873313359&4294967295,y=S+(A<<6&4294967295|A>>>26),A=N+(S^(y|~x))+k[15]+4264355552&4294967295,N=y+(A<<10&4294967295|A>>>22),A=x+(y^(N|~S))+k[6]+2734768916&4294967295,x=N+(A<<15&4294967295|A>>>17),A=S+(N^(x|~y))+k[13]+1309151649&4294967295,S=x+(A<<21&4294967295|A>>>11),A=y+(x^(S|~N))+k[4]+4149444226&4294967295,y=S+(A<<6&4294967295|A>>>26),A=N+(S^(y|~x))+k[11]+3174756917&4294967295,N=y+(A<<10&4294967295|A>>>22),A=x+(y^(N|~S))+k[2]+718787259&4294967295,x=N+(A<<15&4294967295|A>>>17),A=S+(N^(x|~y))+k[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,_.g[2]=_.g[2]+x&4294967295,_.g[3]=_.g[3]+N&4294967295}r.prototype.u=function(_,y){y===void 0&&(y=_.length);for(var S=y-this.blockSize,k=this.B,x=this.h,N=0;N<y;){if(x==0)for(;N<=S;)i(this,_,N),N+=this.blockSize;if(typeof _=="string"){for(;N<y;)if(k[x++]=_.charCodeAt(N++),x==this.blockSize){i(this,k),x=0;break}}else for(;N<y;)if(k[x++]=_[N++],x==this.blockSize){i(this,k),x=0;break}}this.h=x,this.o+=y},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;var S=8*this.o;for(y=_.length-8;y<_.length;++y)_[y]=S&255,S/=256;for(this.u(_),_=Array(16),y=S=0;4>y;++y)for(var k=0;32>k;k+=8)_[S++]=this.g[y]>>>k&255;return _};function s(_,y){var S=a;return Object.prototype.hasOwnProperty.call(S,_)?S[_]:S[_]=y(_)}function o(_,y){this.h=y;for(var S=[],k=!0,x=_.length-1;0<=x;x--){var N=_[x]|0;k&&N==y||(S[x]=N,k=!1)}this.g=S}var a={};function u(_){return-128<=_&&128>_?s(_,function(y){return new o([y|0],0>y?-1:0)}):new o([_|0],0>_?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return p;if(0>_)return P(c(-_));for(var y=[],S=1,k=0;_>=S;k++)y[k]=_/S|0,S*=4294967296;return new o(y,0)}function f(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return P(f(_.substring(1),y));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(y,8)),k=p,x=0;x<_.length;x+=8){var N=Math.min(8,_.length-x),A=parseInt(_.substring(x,x+N),y);8>N?(N=c(Math.pow(y,N)),k=k.j(N).add(c(A))):(k=k.j(S),k=k.add(c(A)))}return k}var p=u(0),m=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-P(this).m();for(var _=0,y=1,S=0;S<this.g.length;S++){var k=this.i(S);_+=(0<=k?k:4294967296+k)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E(this))return"0";if(R(this))return"-"+P(this).toString(_);for(var y=c(Math.pow(_,6)),S=this,k="";;){var x=b(S,y).g;S=T(S,x.j(y));var N=((0<S.g.length?S.g[0]:S.h)>>>0).toString(_);if(S=x,E(S))return N+k;for(;6>N.length;)N="0"+N;k=N+k}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function E(_){if(_.h!=0)return!1;for(var y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function R(_){return _.h==-1}t.l=function(_){return _=T(this,_),R(_)?-1:E(_)?0:1};function P(_){for(var y=_.g.length,S=[],k=0;k<y;k++)S[k]=~_.g[k];return new o(S,~_.h).add(m)}t.abs=function(){return R(this)?P(this):this},t.add=function(_){for(var y=Math.max(this.g.length,_.g.length),S=[],k=0,x=0;x<=y;x++){var N=k+(this.i(x)&65535)+(_.i(x)&65535),A=(N>>>16)+(this.i(x)>>>16)+(_.i(x)>>>16);k=A>>>16,N&=65535,A&=65535,S[x]=A<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function T(_,y){return _.add(P(y))}t.j=function(_){if(E(this)||E(_))return p;if(R(this))return R(_)?P(this).j(P(_)):P(P(this).j(_));if(R(_))return P(this.j(P(_)));if(0>this.l(v)&&0>_.l(v))return c(this.m()*_.m());for(var y=this.g.length+_.g.length,S=[],k=0;k<2*y;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(var x=0;x<_.g.length;x++){var N=this.i(k)>>>16,A=this.i(k)&65535,Be=_.i(x)>>>16,Rt=_.i(x)&65535;S[2*k+2*x]+=A*Rt,w(S,2*k+2*x),S[2*k+2*x+1]+=N*Rt,w(S,2*k+2*x+1),S[2*k+2*x+1]+=A*Be,w(S,2*k+2*x+1),S[2*k+2*x+2]+=N*Be,w(S,2*k+2*x+2)}for(k=0;k<y;k++)S[k]=S[2*k+1]<<16|S[2*k];for(k=y;k<2*y;k++)S[k]=0;return new o(S,0)};function w(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function I(_,y){this.g=_,this.h=y}function b(_,y){if(E(y))throw Error("division by zero");if(E(_))return new I(p,p);if(R(_))return y=b(P(_),y),new I(P(y.g),P(y.h));if(R(y))return y=b(_,P(y)),new I(P(y.g),y.h);if(30<_.g.length){if(R(_)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var S=m,k=y;0>=k.l(_);)S=V(S),k=V(k);var x=L(S,1),N=L(k,1);for(k=L(k,2),S=L(S,2);!E(k);){var A=N.add(k);0>=A.l(_)&&(x=x.add(S),N=A),k=L(k,1),S=L(S,1)}return y=T(_,x.j(y)),new I(x,y)}for(x=p;0<=_.l(y);){for(S=Math.max(1,Math.floor(_.m()/y.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),N=c(S),A=N.j(y);R(A)||0<A.l(_);)S-=k,N=c(S),A=N.j(y);E(N)&&(N=m),x=x.add(N),_=T(_,A)}return new I(x,_)}t.A=function(_){return b(this,_).h},t.and=function(_){for(var y=Math.max(this.g.length,_.g.length),S=[],k=0;k<y;k++)S[k]=this.i(k)&_.i(k);return new o(S,this.h&_.h)},t.or=function(_){for(var y=Math.max(this.g.length,_.g.length),S=[],k=0;k<y;k++)S[k]=this.i(k)|_.i(k);return new o(S,this.h|_.h)},t.xor=function(_){for(var y=Math.max(this.g.length,_.g.length),S=[],k=0;k<y;k++)S[k]=this.i(k)^_.i(k);return new o(S,this.h^_.h)};function V(_){for(var y=_.g.length+1,S=[],k=0;k<y;k++)S[k]=_.i(k)<<1|_.i(k-1)>>>31;return new o(S,_.h)}function L(_,y){var S=y>>5;y%=32;for(var k=_.g.length-S,x=[],N=0;N<k;N++)x[N]=0<y?_.i(N+S)>>>y|_.i(N+S+1)<<32-y:_.i(N+S);return new o(x,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,LI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,xi=o}).apply(typeof a_<"u"?a_:typeof self<"u"?self:typeof window<"u"?window:{});var iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var MI,Jo,VI,Su,ap,FI,jI,UI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,d){return l==Array.prototype||l==Object.prototype||(l[h]=d.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof iu=="object"&&iu];for(var h=0;h<l.length;++h){var d=l[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var d=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var O=l[g];if(!(O in d))break e;d=d[O]}l=l[l.length-1],g=d[l],h=h(g),h!=g&&h!=null&&e(d,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var d=0,g=!1,O={next:function(){if(!g&&d<l.length){var M=d++;return{value:h(M,l[M]),done:!1}}return g=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function f(l,h,d){return l.call.apply(l.bind,arguments)}function p(l,h,d){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,g),l.apply(h,O)}}return function(){return l.apply(h,arguments)}}function m(l,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function v(l,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function E(l,h){function d(){}d.prototype=h.prototype,l.aa=h.prototype,l.prototype=new d,l.prototype.constructor=l,l.Qb=function(g,O,M){for(var z=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)z[ge-2]=arguments[ge];return h.prototype[O].apply(g,z)}}function R(l){const h=l.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=l[g];return d}return[]}function P(l,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const O=l.length||0,M=g.length||0;l.length=O+M;for(let z=0;z<M;z++)l[O+z]=g[z]}else l.push(g)}}class T{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function b(l){return b[" "](l),l}b[" "]=function(){};var V=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function L(l,h,d){for(const g in l)h.call(d,l[g],g,l)}function _(l,h){for(const d in l)h.call(void 0,l[d],d,l)}function y(l){const h={};for(const d in l)h[d]=l[d];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,h){let d,g;for(let O=1;O<arguments.length;O++){g=arguments[O];for(d in g)l[d]=g[d];for(let M=0;M<S.length;M++)d=S[M],Object.prototype.hasOwnProperty.call(g,d)&&(l[d]=g[d])}}function x(l){var h=1;l=l.split(":");const d=[];for(;0<h&&l.length;)d.push(l.shift()),h--;return l.length&&d.push(l.join(":")),d}function N(l){a.setTimeout(()=>{throw l},0)}function A(){var l=K;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Be{constructor(){this.h=this.g=null}add(h,d){const g=Rt.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Rt=new T(()=>new at,l=>l.reset());class at{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let De,U=!1,K=new Be,Q=()=>{const l=a.Promise.resolve(void 0);De=()=>{l.then(se)}};var se=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(d){N(d)}var h=Rt;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}U=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var We=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const d=()=>{};a.addEventListener("test",d,h),a.removeEventListener("test",d,h)}catch{}return l}();function de(l,h){if(he.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var d=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(V){e:{try{b(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else d=="mouseover"?h=l.fromElement:d=="mouseout"&&(h=l.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Le[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&de.aa.h.call(this)}}E(de,he);var Le={2:"touch",3:"pen",4:"mouse"};de.prototype.h=function(){de.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var lt="closure_listenable_"+(1e6*Math.random()|0),Bn=0;function Ft(l,h,d,g,O){this.listener=l,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=O,this.key=++Bn,this.da=this.fa=!1}function Jt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function un(l){this.src=l,this.g={},this.h=0}un.prototype.add=function(l,h,d,g,O){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var z=hi(l,h,g,O);return-1<z?(h=l[z],d||(h.fa=!1)):(h=new Ft(h,this.src,M,!!g,O),h.fa=d,l.push(h)),h};function Et(l,h){var d=h.type;if(d in l.g){var g=l.g[d],O=Array.prototype.indexOf.call(g,h,void 0),M;(M=0<=O)&&Array.prototype.splice.call(g,O,1),M&&(Jt(h),l.g[d].length==0&&(delete l.g[d],l.h--))}}function hi(l,h,d,g){for(var O=0;O<l.length;++O){var M=l[O];if(!M.da&&M.listener==h&&M.capture==!!d&&M.ha==g)return O}return-1}var yr="closure_lm_"+(1e6*Math.random()|0),ve={};function To(l,h,d,g,O){if(Array.isArray(h)){for(var M=0;M<h.length;M++)To(l,h[M],d,g,O);return null}return d=Ay(d),l&&l[lt]?l.K(h,d,c(g)?!!g.capture:!!g,O):Io(l,h,d,!1,g,O)}function Io(l,h,d,g,O,M){if(!h)throw Error("Invalid event type");var z=c(O)?!!O.capture:!!O,ge=Lh(l);if(ge||(l[yr]=ge=new un(l)),d=ge.add(h,d,g,z,M),d.proxy)return d;if(g=Gk(),d.proxy=g,g.src=l,g.listener=d,l.addEventListener)We||(O=z),O===void 0&&(O=!1),l.addEventListener(h.toString(),g,O);else if(l.attachEvent)l.attachEvent(Sy(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Gk(){function l(d){return h.call(l.src,l.listener,d)}const h=Qk;return l}function Iy(l,h,d,g,O){if(Array.isArray(h))for(var M=0;M<h.length;M++)Iy(l,h[M],d,g,O);else g=c(g)?!!g.capture:!!g,d=Ay(d),l&&l[lt]?(l=l.i,h=String(h).toString(),h in l.g&&(M=l.g[h],d=hi(M,d,g,O),-1<d&&(Jt(M[d]),Array.prototype.splice.call(M,d,1),M.length==0&&(delete l.g[h],l.h--)))):l&&(l=Lh(l))&&(h=l.g[h.toString()],l=-1,h&&(l=hi(h,d,g,O)),(d=-1<l?h[l]:null)&&Dh(d))}function Dh(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[lt])Et(h.i,l);else{var d=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(d,g,l.capture):h.detachEvent?h.detachEvent(Sy(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Lh(h))?(Et(d,l),d.h==0&&(d.src=null,h[yr]=null)):Jt(l)}}}function Sy(l){return l in ve?ve[l]:ve[l]="on"+l}function Qk(l,h){if(l.da)l=!0;else{h=new de(h,this);var d=l.listener,g=l.ha||l.src;l.fa&&Dh(l),l=d.call(g,h)}return l}function Lh(l){return l=l[yr],l instanceof un?l:null}var Mh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ay(l){return typeof l=="function"?l:(l[Mh]||(l[Mh]=function(h){return l.handleEvent(h)}),l[Mh])}function ut(){te.call(this),this.i=new un(this),this.M=this,this.F=null}E(ut,te),ut.prototype[lt]=!0,ut.prototype.removeEventListener=function(l,h,d,g){Iy(this,l,h,d,g)};function Tt(l,h){var d,g=l.F;if(g)for(d=[];g;g=g.F)d.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new he(h,l);else if(h instanceof he)h.target=h.target||l;else{var O=h;h=new he(g,l),k(h,O)}if(O=!0,d)for(var M=d.length-1;0<=M;M--){var z=h.g=d[M];O=Il(z,g,!0,h)&&O}if(z=h.g=l,O=Il(z,g,!0,h)&&O,O=Il(z,g,!1,h)&&O,d)for(M=0;M<d.length;M++)z=h.g=d[M],O=Il(z,g,!1,h)&&O}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var d=l.g[h],g=0;g<d.length;g++)Jt(d[g]);delete l.g[h],l.h--}}this.F=null},ut.prototype.K=function(l,h,d,g){return this.i.add(String(l),h,!1,d,g)},ut.prototype.L=function(l,h,d,g){return this.i.add(String(l),h,!0,d,g)};function Il(l,h,d,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,M=0;M<h.length;++M){var z=h[M];if(z&&!z.da&&z.capture==d){var ge=z.listener,Ze=z.ha||z.src;z.fa&&Et(l.i,z),O=ge.call(Ze,g)!==!1&&O}}return O&&!g.defaultPrevented}function ky(l,h,d){if(typeof l=="function")d&&(l=m(l,d));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function Cy(l){l.g=ky(()=>{l.g=null,l.i&&(l.i=!1,Cy(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class Yk extends te{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Cy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function So(l){te.call(this),this.h=l,this.g={}}E(So,te);var Ry=[];function xy(l){L(l.g,function(h,d){this.g.hasOwnProperty(d)&&Dh(h)},l),l.g={}}So.prototype.N=function(){So.aa.N.call(this),xy(this)},So.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vh=a.JSON.stringify,Xk=a.JSON.parse,Jk=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Fh(){}Fh.prototype.h=null;function Py(l){return l.h||(l.h=l.i())}function by(){}var Ao={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jh(){he.call(this,"d")}E(jh,he);function Uh(){he.call(this,"c")}E(Uh,he);var fi={},Ny=null;function Sl(){return Ny=Ny||new ut}fi.La="serverreachability";function Oy(l){he.call(this,fi.La,l)}E(Oy,he);function ko(l){const h=Sl();Tt(h,new Oy(h))}fi.STAT_EVENT="statevent";function Dy(l,h){he.call(this,fi.STAT_EVENT,l),this.stat=h}E(Dy,he);function It(l){const h=Sl();Tt(h,new Dy(h,l))}fi.Ma="timingevent";function Ly(l,h){he.call(this,fi.Ma,l),this.size=h}E(Ly,he);function Co(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Ro(){this.g=!0}Ro.prototype.xa=function(){this.g=!1};function Zk(l,h,d,g,O,M){l.info(function(){if(l.g)if(M)for(var z="",ge=M.split("&"),Ze=0;Ze<ge.length;Ze++){var ue=ge[Ze].split("=");if(1<ue.length){var ct=ue[0];ue=ue[1];var ht=ct.split("_");z=2<=ht.length&&ht[1]=="type"?z+(ct+"="+ue+"&"):z+(ct+"=redacted&")}}else z=null;else z=M;return"XMLHTTP REQ ("+g+") [attempt "+O+"]: "+h+`
`+d+`
`+z})}function eC(l,h,d,g,O,M,z){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+O+"]: "+h+`
`+d+`
`+M+" "+z})}function rs(l,h,d,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+nC(l,d)+(g?" "+g:"")})}function tC(l,h){l.info(function(){return"TIMEOUT: "+h})}Ro.prototype.info=function(){};function nC(l,h){if(!l.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(l=0;l<d.length;l++)if(Array.isArray(d[l])){var g=d[l];if(!(2>g.length)){var O=g[1];if(Array.isArray(O)&&!(1>O.length)){var M=O[0];if(M!="noop"&&M!="stop"&&M!="close")for(var z=1;z<O.length;z++)O[z]=""}}}}return Vh(d)}catch{return h}}var Al={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},My={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$h;function kl(){}E(kl,Fh),kl.prototype.g=function(){return new XMLHttpRequest},kl.prototype.i=function(){return{}},$h=new kl;function vr(l,h,d,g){this.j=l,this.i=h,this.l=d,this.R=g||1,this.U=new So(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vy}function Vy(){this.i=null,this.g="",this.h=!1}var Fy={},zh={};function Bh(l,h,d){l.L=1,l.v=Pl(Wn(h)),l.m=d,l.P=!0,jy(l,null)}function jy(l,h){l.F=Date.now(),Cl(l),l.A=Wn(l.v);var d=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),Zy(d.i,"t",g),l.C=0,d=l.j.J,l.h=new Vy,l.g=yv(l.j,d?h:null,!l.m),0<l.O&&(l.M=new Yk(m(l.Y,l,l.g),l.O)),h=l.U,d=l.g,g=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(Ry[0]=O.toString()),O=Ry);for(var M=0;M<O.length;M++){var z=To(d,O[M],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),ko(),Zk(l.i,l.u,l.A,l.l,l.R,l.m)}vr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Hn(l)==3?h.j():this.Y(l)},vr.prototype.Y=function(l){try{if(l==this.g)e:{const ht=Hn(this.g);var h=this.g.Ba();const os=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||ov(this.g)))){this.J||ht!=4||h==7||(h==8||0>=os?ko(3):ko(2)),Wh(this);var d=this.g.Z();this.X=d;t:if(Uy(this)){var g=ov(this.g);l="";var O=g.length,M=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){di(this),xo(this);var z="";break t}this.h.i=new a.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,l+=this.h.i.decode(g[h],{stream:!(M&&h==O-1)});g.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,eC(this.i,this.u,this.A,this.l,this.R,ht,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ge,Ze=this.g;if((ge=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ge)){var ue=ge;break t}}ue=null}if(d=ue)rs(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hh(this,d);else{this.o=!1,this.s=3,It(12),di(this),xo(this);break e}}if(this.P){d=!0;let cn;for(;!this.J&&this.C<z.length;)if(cn=rC(this,z),cn==zh){ht==4&&(this.s=4,It(14),d=!1),rs(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==Fy){this.s=4,It(15),rs(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else rs(this.i,this.l,cn,null),Hh(this,cn);if(Uy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||z.length!=0||this.h.h||(this.s=1,It(16),d=!1),this.o=this.o&&d,!d)rs(this.i,this.l,z,"[Invalid Chunked Response]"),di(this),xo(this);else if(0<z.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Xh(ct),ct.M=!0,It(11))}}else rs(this.i,this.l,z,null),Hh(this,z);ht==4&&di(this),this.o&&!this.J&&(ht==4?dv(this.j,this):(this.o=!1,Cl(this)))}else wC(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),di(this),xo(this)}}}catch{}finally{}};function Uy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function rC(l,h){var d=l.C,g=h.indexOf(`
`,d);return g==-1?zh:(d=Number(h.substring(d,g)),isNaN(d)?Fy:(g+=1,g+d>h.length?zh:(h=h.slice(g,g+d),l.C=g+d,h)))}vr.prototype.cancel=function(){this.J=!0,di(this)};function Cl(l){l.S=Date.now()+l.I,$y(l,l.I)}function $y(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Co(m(l.ba,l),h)}function Wh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}vr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(tC(this.i,this.A),this.L!=2&&(ko(),It(17)),di(this),this.s=2,xo(this)):$y(this,this.S-l)};function xo(l){l.j.G==0||l.J||dv(l.j,l)}function di(l){Wh(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,xy(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Hh(l,h){try{var d=l.j;if(d.G!=0&&(d.g==l||qh(d.h,l))){if(!l.K&&qh(d.h,l)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var O=g;if(O[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<l.F)Ml(d),Dl(d);else break e;Yh(d),It(18)}}else d.za=O[1],0<d.za-d.T&&37500>O[2]&&d.F&&d.v==0&&!d.C&&(d.C=Co(m(d.Za,d),6e3));if(1>=Wy(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else mi(d,11)}else if((l.K||d.g==l)&&Ml(d),!w(h))for(O=d.Da.g.parse(h),h=0;h<O.length;h++){let ue=O[h];if(d.T=ue[0],ue=ue[1],d.G==2)if(ue[0]=="c"){d.K=ue[1],d.ia=ue[2];const ct=ue[3];ct!=null&&(d.la=ct,d.j.info("VER="+d.la));const ht=ue[4];ht!=null&&(d.Aa=ht,d.j.info("SVER="+d.Aa));const os=ue[5];os!=null&&typeof os=="number"&&0<os&&(g=1.5*os,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const cn=l.g;if(cn){const Fl=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fl){var M=g.h;M.g||Fl.indexOf("spdy")==-1&&Fl.indexOf("quic")==-1&&Fl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Kh(M,M.h),M.h=null))}if(g.D){const Jh=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;Jh&&(g.ya=Jh,_e(g.I,g.D,Jh))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-l.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var z=l;if(g.qa=gv(g,g.J?g.ia:null,g.W),z.K){Hy(g.h,z);var ge=z,Ze=g.L;Ze&&(ge.I=Ze),ge.B&&(Wh(ge),Cl(ge)),g.g=z}else hv(g);0<d.i.length&&Ll(d)}else ue[0]!="stop"&&ue[0]!="close"||mi(d,7);else d.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?mi(d,7):Qh(d):ue[0]!="noop"&&d.l&&d.l.ta(ue),d.v=0)}}ko(4)}catch{}}var iC=class{constructor(l,h){this.g=l,this.map=h}};function zy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function By(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Wy(l){return l.h?1:l.g?l.g.size:0}function qh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Kh(l,h){l.g?l.g.add(h):l.h=h}function Hy(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}zy.prototype.cancel=function(){if(this.i=qy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function qy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const d of l.g.values())h=h.concat(d.D);return h}return R(l.i)}function sC(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],d=l.length,g=0;g<d;g++)h.push(l[g]);return h}h=[],d=0;for(g in l)h[d++]=l[g];return h}function oC(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var d=0;d<l;d++)h.push(d);return h}h=[],d=0;for(const g in l)h[d++]=g;return h}}}function Ky(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var d=oC(l),g=sC(l),O=g.length,M=0;M<O;M++)h.call(void 0,g[M],d&&d[M],l)}var Gy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aC(l,h){if(l){l=l.split("&");for(var d=0;d<l.length;d++){var g=l[d].indexOf("="),O=null;if(0<=g){var M=l[d].substring(0,g);O=l[d].substring(g+1)}else M=l[d];h(M,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function pi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof pi){this.h=l.h,Rl(this,l.j),this.o=l.o,this.g=l.g,xl(this,l.s),this.l=l.l;var h=l.i,d=new No;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Qy(this,d),this.m=l.m}else l&&(h=String(l).match(Gy))?(this.h=!1,Rl(this,h[1]||"",!0),this.o=Po(h[2]||""),this.g=Po(h[3]||"",!0),xl(this,h[4]),this.l=Po(h[5]||"",!0),Qy(this,h[6]||"",!0),this.m=Po(h[7]||"")):(this.h=!1,this.i=new No(null,this.h))}pi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(bo(h,Yy,!0),":");var d=this.g;return(d||h=="file")&&(l.push("//"),(h=this.o)&&l.push(bo(h,Yy,!0),"@"),l.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&l.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&l.push("/"),l.push(bo(d,d.charAt(0)=="/"?cC:uC,!0))),(d=this.i.toString())&&l.push("?",d),(d=this.m)&&l.push("#",bo(d,fC)),l.join("")};function Wn(l){return new pi(l)}function Rl(l,h,d){l.j=d?Po(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function xl(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Qy(l,h,d){h instanceof No?(l.i=h,dC(l.i,l.h)):(d||(h=bo(h,hC)),l.i=new No(h,l.h))}function _e(l,h,d){l.i.set(h,d)}function Pl(l){return _e(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Po(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function bo(l,h,d){return typeof l=="string"?(l=encodeURI(l).replace(h,lC),d&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function lC(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Yy=/[#\/\?@]/g,uC=/[#\?:]/g,cC=/[#\?]/g,hC=/[#\?@]/g,fC=/#/g;function No(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function _r(l){l.g||(l.g=new Map,l.h=0,l.i&&aC(l.i,function(h,d){l.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=No.prototype,t.add=function(l,h){_r(this),this.i=null,l=is(this,l);var d=this.g.get(l);return d||this.g.set(l,d=[]),d.push(h),this.h+=1,this};function Xy(l,h){_r(l),h=is(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Jy(l,h){return _r(l),h=is(l,h),l.g.has(h)}t.forEach=function(l,h){_r(this),this.g.forEach(function(d,g){d.forEach(function(O){l.call(h,O,g,this)},this)},this)},t.na=function(){_r(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const O=l[g];for(let M=0;M<O.length;M++)d.push(h[g])}return d},t.V=function(l){_r(this);let h=[];if(typeof l=="string")Jy(this,l)&&(h=h.concat(this.g.get(is(this,l))));else{l=Array.from(this.g.values());for(let d=0;d<l.length;d++)h=h.concat(l[d])}return h},t.set=function(l,h){return _r(this),this.i=null,l=is(this,l),Jy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Zy(l,h,d){Xy(l,h),0<d.length&&(l.i=null,l.g.set(is(l,h),R(d)),l.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const M=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var O=M;z[g]!==""&&(O+="="+encodeURIComponent(String(z[g]))),l.push(O)}}return this.i=l.join("&")};function is(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function dC(l,h){h&&!l.j&&(_r(l),l.i=null,l.g.forEach(function(d,g){var O=g.toLowerCase();g!=O&&(Xy(this,g),Zy(this,O,d))},l)),l.j=h}function pC(l,h){const d=new Ro;if(a.Image){const g=new Image;g.onload=v(wr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=v(wr,d,"TestLoadImage: error",!1,h,g),g.onabort=v(wr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=v(wr,d,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function mC(l,h){const d=new Ro,g=new AbortController,O=setTimeout(()=>{g.abort(),wr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(M=>{clearTimeout(O),M.ok?wr(d,"TestPingServer: ok",!0,h):wr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),wr(d,"TestPingServer: error",!1,h)})}function wr(l,h,d,g,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),g(d)}catch{}}function gC(){this.g=new Jk}function yC(l,h,d){const g=d||"";try{Ky(l,function(O,M){let z=O;c(O)&&(z=Vh(O)),h.push(g+M+"="+encodeURIComponent(z))})}catch(O){throw h.push(g+"type="+encodeURIComponent("_badmap")),O}}function bl(l){this.l=l.Ub||null,this.j=l.eb||!1}E(bl,Fh),bl.prototype.g=function(){return new Nl(this.l,this.j)},bl.prototype.i=function(l){return function(){return l}}({});function Nl(l,h){ut.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Nl,ut),t=Nl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,Do(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Do(this)),this.g&&(this.readyState=3,Do(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ev(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ev(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Oo(this):Do(this),this.readyState==3&&ev(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Oo(this))},t.Qa=function(l){this.g&&(this.response=l,Oo(this))},t.ga=function(){this.g&&Oo(this)};function Oo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Do(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,l.push(d[0]+": "+d[1]),d=h.next();return l.join(`\r
`)};function Do(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Nl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function tv(l){let h="";return L(l,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Gh(l,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=tv(d),typeof l=="string"?d!=null&&encodeURIComponent(String(d)):_e(l,h,d))}function Ne(l){ut.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Ne,ut);var vC=/^https?$/i,_C=["POST","PUT"];t=Ne.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$h.g(),this.v=this.o?Py(this.o):Py($h),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(M){nv(this,M);return}if(l=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var O in g)d.set(O,g[O]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const M of g.keys())d.set(M,g.get(M));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(M=>M.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(_C,h,void 0))||g||O||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,z]of d)this.g.setRequestHeader(M,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sv(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){nv(this,M)}};function nv(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,rv(l),Ol(l)}function rv(l){l.A||(l.A=!0,Tt(l,"complete"),Tt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Tt(this,"complete"),Tt(this,"abort"),Ol(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ol(this,!0)),Ne.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?iv(this):this.bb())},t.bb=function(){iv(this)};function iv(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Hn(l)!=4||l.Z()!=2)){if(l.u&&Hn(l)==4)ky(l.Ea,0,l);else if(Tt(l,"readystatechange"),Hn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=z===0){var O=String(l.D).match(Gy)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),g=!vC.test(O?O.toLowerCase():"")}d=g}if(d)Tt(l,"complete"),Tt(l,"success");else{l.m=6;try{var M=2<Hn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",rv(l)}}finally{Ol(l)}}}}function Ol(l,h){if(l.g){sv(l);const d=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Tt(l,"ready");try{d.onreadystatechange=g}catch{}}}function sv(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Hn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),Xk(h)}};function ov(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function wC(l){const h={};l=(l.g&&2<=Hn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(w(l[g]))continue;var d=x(l[g]);const O=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const M=h[O]||[];h[O]=M,M.push(d)}_(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Lo(l,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[l]||h}function av(l){this.Aa=0,this.i=[],this.j=new Ro,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Lo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Lo("baseRetryDelayMs",5e3,l),this.cb=Lo("retryDelaySeedMs",1e4,l),this.Wa=Lo("forwardChannelMaxRetries",2,l),this.wa=Lo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new zy(l&&l.concurrentRequestLimit),this.Da=new gC,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=av.prototype,t.la=8,t.G=1,t.connect=function(l,h,d,g){It(0),this.W=l,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=gv(this,null,this.W),Ll(this)};function Qh(l){if(lv(l),l.G==3){var h=l.U++,d=Wn(l.I);if(_e(d,"SID",l.K),_e(d,"RID",h),_e(d,"TYPE","terminate"),Mo(l,d),h=new vr(l,l.j,h),h.L=2,h.v=Pl(Wn(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&a.Image&&(new Image().src=h.v,d=!0),d||(h.g=yv(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Cl(h)}mv(l)}function Dl(l){l.g&&(Xh(l),l.g.cancel(),l.g=null)}function lv(l){Dl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ml(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ll(l){if(!By(l.h)&&!l.s){l.s=!0;var h=l.Ga;De||Q(),U||(De(),U=!0),K.add(h,l),l.B=0}}function EC(l,h){return Wy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Co(m(l.Ga,l,h),pv(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new vr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=y(M),k(M,this.S)):M=this.S),this.m!==null||this.O||(O.H=M,M=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=cv(this,O,h),d=Wn(this.I),_e(d,"RID",l),_e(d,"CVER",22),this.D&&_e(d,"X-HTTP-Session-Id",this.D),Mo(this,d),M&&(this.O?h="headers="+encodeURIComponent(String(tv(M)))+"&"+h:this.m&&Gh(d,this.m,M)),Kh(this.h,O),this.Ua&&_e(d,"TYPE","init"),this.P?(_e(d,"$req",h),_e(d,"SID","null"),O.T=!0,Bh(O,d,null)):Bh(O,d,h),this.G=2}}else this.G==3&&(l?uv(this,l):this.i.length==0||By(this.h)||uv(this))};function uv(l,h){var d;h?d=h.l:d=l.U++;const g=Wn(l.I);_e(g,"SID",l.K),_e(g,"RID",d),_e(g,"AID",l.T),Mo(l,g),l.m&&l.o&&Gh(g,l.m,l.o),d=new vr(l,l.j,d,l.B+1),l.m===null&&(d.H=l.o),h&&(l.i=h.D.concat(l.i)),h=cv(l,d,1e3),d.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Kh(l.h,d),Bh(d,g,h)}function Mo(l,h){l.H&&L(l.H,function(d,g){_e(h,g,d)}),l.l&&Ky({},function(d,g){_e(h,g,d)})}function cv(l,h,d){d=Math.min(l.i.length,d);var g=l.l?m(l.l.Na,l.l,l):null;e:{var O=l.i;let M=-1;for(;;){const z=["count="+d];M==-1?0<d?(M=O[0].g,z.push("ofs="+M)):M=0:z.push("ofs="+M);let ge=!0;for(let Ze=0;Ze<d;Ze++){let ue=O[Ze].g;const ct=O[Ze].map;if(ue-=M,0>ue)M=Math.max(0,O[Ze].g-100),ge=!1;else try{yC(ct,z,"req"+ue+"_")}catch{g&&g(ct)}}if(ge){g=z.join("&");break e}}}return l=l.i.splice(0,d),h.D=l,g}function hv(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;De||Q(),U||(De(),U=!0),K.add(h,l),l.v=0}}function Yh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Co(m(l.Fa,l),pv(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,fv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Co(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Dl(this),fv(this))};function Xh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function fv(l){l.g=new vr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Wn(l.qa);_e(h,"RID","rpc"),_e(h,"SID",l.K),_e(h,"AID",l.T),_e(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&_e(h,"TO",l.ja),_e(h,"TYPE","xmlhttp"),Mo(l,h),l.m&&l.o&&Gh(h,l.m,l.o),l.L&&(l.g.I=l.L);var d=l.g;l=l.ia,d.L=1,d.v=Pl(Wn(h)),d.m=null,d.P=!0,jy(d,l)}t.Za=function(){this.C!=null&&(this.C=null,Dl(this),Yh(this),It(19))};function Ml(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function dv(l,h){var d=null;if(l.g==h){Ml(l),Xh(l),l.g=null;var g=2}else if(qh(l.h,h))d=h.D,Hy(l.h,h),g=1;else return;if(l.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var O=l.B;g=Sl(),Tt(g,new Ly(g,d)),Ll(l)}else hv(l);else if(O=h.s,O==3||O==0&&0<h.X||!(g==1&&EC(l,h)||g==2&&Yh(l)))switch(d&&0<d.length&&(h=l.h,h.i=h.i.concat(d)),O){case 1:mi(l,5);break;case 4:mi(l,10);break;case 3:mi(l,6);break;default:mi(l,2)}}}function pv(l,h){let d=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(d*=2),d*h}function mi(l,h){if(l.j.info("Error code "+h),h==2){var d=m(l.fb,l),g=l.Xa;const O=!g;g=new pi(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Rl(g,"https"),Pl(g),O?pC(g.toString(),d):mC(g.toString(),d)}else It(2);l.G=0,l.l&&l.l.sa(h),mv(l),lv(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function mv(l){if(l.G=0,l.ka=[],l.l){const h=qy(l.h);(h.length!=0||l.i.length!=0)&&(P(l.ka,h),P(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function gv(l,h,d){var g=d instanceof pi?Wn(d):new pi(d);if(g.g!="")h&&(g.g=h+"."+g.g),xl(g,g.s);else{var O=a.location;g=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var M=new pi(null);g&&Rl(M,g),h&&(M.g=h),O&&xl(M,O),d&&(M.l=d),g=M}return d=l.D,h=l.ya,d&&h&&_e(g,d,h),_e(g,"VER",l.la),Mo(l,g),g}function yv(l,h,d){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ne(new bl({eb:d})):new Ne(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function vv(){}t=vv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Vl(){}Vl.prototype.g=function(l,h){return new jt(l,h)};function jt(l,h){ut.call(this),this.g=new av(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!w(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new ss(this)}E(jt,ut),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Qh(this.g)},jt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var d={};d.__data__=l,l=d}else this.u&&(d={},d.__data__=Vh(l),l=d);h.i.push(new iC(h.Ya++,l)),h.G==3&&Ll(h)},jt.prototype.N=function(){this.g.l=null,delete this.j,Qh(this.g),delete this.g,jt.aa.N.call(this)};function _v(l){jh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const d in h){l=d;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}E(_v,jh);function wv(){Uh.call(this),this.status=1}E(wv,Uh);function ss(l){this.g=l}E(ss,vv),ss.prototype.ua=function(){Tt(this.g,"a")},ss.prototype.ta=function(l){Tt(this.g,new _v(l))},ss.prototype.sa=function(l){Tt(this.g,new wv)},ss.prototype.ra=function(){Tt(this.g,"b")},Vl.prototype.createWebChannel=Vl.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,UI=function(){return new Vl},jI=function(){return Sl()},FI=fi,ap={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Al.NO_ERROR=0,Al.TIMEOUT=8,Al.HTTP_ERROR=6,Su=Al,My.COMPLETE="complete",VI=My,by.EventType=Ao,Ao.OPEN="a",Ao.CLOSE="b",Ao.ERROR="c",Ao.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Jo=by,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,MI=Ne}).apply(typeof iu<"u"?iu:typeof self<"u"?self:typeof window<"u"?window:{});const l_="@firebase/firestore";/**
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
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */let mo="10.14.0";/**
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
 */const zi=new ih("@firebase/firestore");function qo(){return zi.logLevel}function H(t,...e){if(zi.logLevel<=oe.DEBUG){const n=e.map(ug);zi.debug(`Firestore (${mo}): ${t}`,...n)}}function lr(t,...e){if(zi.logLevel<=oe.ERROR){const n=e.map(ug);zi.error(`Firestore (${mo}): ${t}`,...n)}}function Qs(t,...e){if(zi.logLevel<=oe.WARN){const n=e.map(ug);zi.warn(`Firestore (${mo}): ${t}`,...n)}}function ug(t){if(typeof t=="string")return t;try{/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: `+t;throw lr(e),new Error(e)}function me(t,e){t||J()}function ee(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class $I{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class PO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bO{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Yr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Yr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new $I(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new mt(e)}}class NO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class OO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new NO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){me(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new DO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function MO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class zI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=MO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Ys(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ke(0,0))}static max(){return new Z(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Wa{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Wa{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const VO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Wa{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return VO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Te.fromString(e))}static fromName(e){return new G(Te.fromString(e).popFirst(5))}static empty(){return new G(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Te(e.slice()))}}function FO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new ei(i,G.empty(),e)}function jO(t){return new ei(t.readTime,t.key,-1)}class ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ei(Z.min(),G.empty(),-1)}static max(){return new ei(Z.max(),G.empty(),-1)}}function UO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const $O="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function cl(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==$O)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++a,a===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function BO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function hl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}cg.oe=-1;function ah(t){return t==null}function yc(t){return t===0&&1/t==-1/0}function WO(t){return typeof t=="number"&&Number.isInteger(t)&&!yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function u_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function BI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class be{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new su(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new su(this.root,e,this.comparator,!1)}getReverseIterator(){return new su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new su(this.root,e,this.comparator,!0)}}class su{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??tt.RED,this.left=i??tt.EMPTY,this.right=s??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new c_(this.data.getIterator())}getIteratorFrom(e){return new c_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class c_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new it(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ys(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class WI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new WI("Invalid base64 string: "+s):s}}(e);return new ot(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const HO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ti(t){if(me(!!t),typeof t=="string"){let e=0;const n=HO.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bi(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */function hg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fg(t){const e=t.mapValue.fields.__previous_value__;return hg(e)?fg(e):e}function Ha(t){const e=ti(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class qO{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class qa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ou={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hg(t)?4:GO(t)?9007199254740991:KO(t)?10:11:J()}function $n(t,e){if(t===e)return!0;const n=Wi(t);if(n!==Wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ha(t).isEqual(Ha(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ti(i.timestampValue),a=ti(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Bi(i.bytesValue).isEqual(Bi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),a=Me(s.doubleValue);return o===a?yc(o)===yc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ys(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(u_(o)!==u_(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!$n(o[u],a[u])))return!1;return!0}(t,e);default:return J()}}function Ka(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function Xs(t,e){if(t===e)return 0;const n=Wi(t),r=Wi(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Me(s.integerValue||s.doubleValue),u=Me(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return h_(t.timestampValue,e.timestampValue);case 4:return h_(Ha(t),Ha(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Bi(s),u=Bi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const f=ce(a[c],u[c]);if(f!==0)return f}return ce(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ce(Me(s.latitude),Me(o.latitude));return a!==0?a:ce(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return f_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,f;const p=s.fields||{},m=o.fields||{},v=(a=p.value)===null||a===void 0?void 0:a.arrayValue,E=(u=m.value)===null||u===void 0?void 0:u.arrayValue,R=ce(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((f=E==null?void 0:E.values)===null||f===void 0?void 0:f.length)||0);return R!==0?R:f_(v,E)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ou.mapValue&&o===ou.mapValue)return 0;if(s===ou.mapValue)return 1;if(o===ou.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=ce(u[p],f[p]);if(m!==0)return m;const v=Xs(a[u[p]],c[f[p]]);if(v!==0)return v}return ce(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J()}}function h_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=ti(t),r=ti(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function f_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Xs(n[i],r[i]);if(s)return s}return ce(n.length,r.length)}function Js(t){return lp(t)}function lp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ti(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Bi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=lp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${lp(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function d_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function up(t){return!!t&&"integerValue"in t}function dg(t){return!!t&&"arrayValue"in t}function p_(t){return!!t&&"nullValue"in t}function m_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Au(t){return!!t&&"mapValue"in t}function KO(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ga(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ga(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ga(t.arrayValue.values[n]);return e}return Object.assign({},t)}function GO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Au(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ga(n)}setAll(e){let n=nt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ga(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Au(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Au(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){es(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pt(ga(this.value))}}function HI(t){const e=[];return es(t.fields,(n,r)=>{const i=new nt([n]);if(Au(r)){const s=HI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
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
 */class yt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new yt(e,0,Z.min(),Z.min(),Z.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,i){return new yt(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new yt(e,2,n,Z.min(),Z.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,Z.min(),Z.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vc{constructor(e,n){this.position=e,this.inclusive=n}}function g_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Xs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function y_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ga{constructor(e,n="asc"){this.field=e,this.dir=n}}function QO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class qI{}class ze extends qI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new XO(e,n,r):n==="array-contains"?new eD(e,r):n==="in"?new tD(e,r):n==="not-in"?new nD(e,r):n==="array-contains-any"?new rD(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new JO(e,r):new ZO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xs(n,this.value)):n!==null&&Wi(this.value)===Wi(n)&&this.matchesComparison(Xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class In extends qI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new In(e,n)}matches(e){return KI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function KI(t){return t.op==="and"}function GI(t){return YO(t)&&KI(t)}function YO(t){for(const e of t.filters)if(e instanceof In)return!1;return!0}function cp(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+Js(t.value);if(GI(t))return t.filters.map(e=>cp(e)).join(",");{const e=t.filters.map(n=>cp(n)).join(",");return`${t.op}(${e})`}}function QI(t,e){return t instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.field.isEqual(i.field)&&$n(r.value,i.value)}(t,e):t instanceof In?function(r,i){return i instanceof In&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&QI(o,i.filters[a]),!0):!1}(t,e):void J()}function YI(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Js(n.value)}`}(t):t instanceof In?function(n){return n.op.toString()+" {"+n.getFilters().map(YI).join(" ,")+"}"}(t):"Filter"}class XO extends ze{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class JO extends ze{constructor(e,n){super(e,"in",n),this.keys=XI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZO extends ze{constructor(e,n){super(e,"not-in",n),this.keys=XI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function XI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class eD extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dg(n)&&Ka(n.arrayValue,this.value)}}class tD extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ka(this.value.arrayValue,n)}}class nD extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ka(this.value.arrayValue,n)}}class rD extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ka(this.value.arrayValue,r))}}/**
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
 */class iD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function v_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new iD(t,e,n,r,i,s,o)}function pg(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>cp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ah(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Js(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Js(r)).join(",")),e.ue=n}return e.ue}function mg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!QI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!y_(t.startAt,e.startAt)&&y_(t.endAt,e.endAt)}function hp(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class go{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sD(t,e,n,r,i,s,o,a){return new go(t,e,n,r,i,s,o,a)}function gg(t){return new go(t)}function __(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function JI(t){return t.collectionGroup!==null}function ya(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new it(nt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ga(s,r))}),n.has(nt.keyField().canonicalString())||e.ce.push(new Ga(nt.keyField(),r))}return e.ce}function Ln(t){const e=ee(t);return e.le||(e.le=oD(e,ya(t))),e.le}function oD(t,e){if(t.limitType==="F")return v_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ga(i.field,s)});const n=t.endAt?new vc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vc(t.startAt.position,t.startAt.inclusive):null;return v_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fp(t,e){const n=t.filters.concat([e]);return new go(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function dp(t,e,n){return new go(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lh(t,e){return mg(Ln(t),Ln(e))&&t.limitType===e.limitType}function ZI(t){return`${pg(Ln(t))}|lt:${t.limitType}`}function hs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>YI(i)).join(", ")}]`),ah(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Js(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Js(i)).join(",")),`Target(${r})`}(Ln(t))}; limitType=${t.limitType})`}function uh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ya(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=g_(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ya(r),i)||r.endAt&&!function(o,a,u){const c=g_(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ya(r),i))}(t,e)}function aD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function eS(t){return(e,n)=>{let r=!1;for(const i of ya(t)){const s=lD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lD(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Xs(u,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class yo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return BI(this.inner)}size(){return this.innerSize}}/**
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
 */const uD=new be(G.comparator);function ur(){return uD}const tS=new be(G.comparator);function Zo(...t){let e=tS;for(const n of t)e=e.insert(n.key,n);return e}function nS(t){let e=tS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ai(){return va()}function rS(){return va()}function va(){return new yo(t=>t.toString(),(t,e)=>t.isEqual(e))}const cD=new be(G.comparator),hD=new it(G.comparator);function re(...t){let e=hD;for(const n of t)e=e.add(n);return e}const fD=new it(ce);function dD(){return fD}/**
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
 */function yg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yc(e)?"-0":e}}function iS(t){return{integerValue:""+t}}function pD(t,e){return WO(e)?iS(e):yg(t,e)}/**
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
 */class ch{constructor(){this._=void 0}}function mD(t,e,n){return t instanceof _c?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&hg(s)&&(s=fg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Qa?oS(t,e):t instanceof Ya?aS(t,e):function(i,s){const o=sS(i,s),a=w_(o)+w_(i.Pe);return up(o)&&up(i.Pe)?iS(a):yg(i.serializer,a)}(t,e)}function gD(t,e,n){return t instanceof Qa?oS(t,e):t instanceof Ya?aS(t,e):n}function sS(t,e){return t instanceof wc?function(r){return up(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class _c extends ch{}class Qa extends ch{constructor(e){super(),this.elements=e}}function oS(t,e){const n=lS(e);for(const r of t.elements)n.some(i=>$n(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ya extends ch{constructor(e){super(),this.elements=e}}function aS(t,e){let n=lS(e);for(const r of t.elements)n=n.filter(i=>!$n(i,r));return{arrayValue:{values:n}}}class wc extends ch{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function w_(t){return Me(t.integerValue||t.doubleValue)}function lS(t){return dg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Qa&&i instanceof Qa||r instanceof Ya&&i instanceof Ya?Ys(r.elements,i.elements,$n):r instanceof wc&&i instanceof wc?$n(r.Pe,i.Pe):r instanceof _c&&i instanceof _c}(t.transform,e.transform)}class vD{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ku(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hh{}function uS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vg(t.key,_n.none()):new fl(t.key,t.data,_n.none());{const n=t.data,r=Pt.empty();let i=new it(nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ui(t.key,r,new Bt(i.toArray()),_n.none())}}function _D(t,e,n){t instanceof fl?function(i,s,o){const a=i.value.clone(),u=T_(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ui?function(i,s,o){if(!ku(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=T_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(cS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _a(t,e,n,r){return t instanceof fl?function(s,o,a,u){if(!ku(s.precondition,o))return a;const c=s.value.clone(),f=I_(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ui?function(s,o,a,u){if(!ku(s.precondition,o))return a;const c=I_(s.fieldTransforms,u,o),f=o.data;return f.setAll(cS(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return ku(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function wD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=sS(r.transform,i||null);s!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function E_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ys(r,i,(s,o)=>yD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fl extends hh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ui extends hh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function cS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function T_(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,gD(o,a,n[i]))}return r}function I_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mD(s,o,e))}return r}class vg extends hh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ED extends hh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class TD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_D(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_a(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_a(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=rS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=uS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Ys(this.mutations,e.mutations,(n,r)=>E_(n,r))&&Ys(this.baseMutations,e.baseMutations,(n,r)=>E_(n,r))}}class _g{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return cD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new _g(e,n,r,i)}}/**
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
 */class ID{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class SD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var je,ae;function AD(t){switch(t){default:return J();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function hS(t){if(t===void 0)return lr("GRPC error has no .code"),F.UNKNOWN;switch(t){case je.OK:return F.OK;case je.CANCELLED:return F.CANCELLED;case je.UNKNOWN:return F.UNKNOWN;case je.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case je.INTERNAL:return F.INTERNAL;case je.UNAVAILABLE:return F.UNAVAILABLE;case je.UNAUTHENTICATED:return F.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case je.NOT_FOUND:return F.NOT_FOUND;case je.ALREADY_EXISTS:return F.ALREADY_EXISTS;case je.PERMISSION_DENIED:return F.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case je.ABORTED:return F.ABORTED;case je.OUT_OF_RANGE:return F.OUT_OF_RANGE;case je.UNIMPLEMENTED:return F.UNIMPLEMENTED;case je.DATA_LOSS:return F.DATA_LOSS;default:return J()}}(ae=je||(je={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function kD(){return new TextEncoder}/**
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
 */const CD=new xi([4294967295,4294967295],0);function S_(t){const e=kD().encode(t),n=new LI;return n.update(e),new Uint8Array(n.digest())}function A_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new xi([n,r],0),new xi([i,s],0)]}class wg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ea(`Invalid padding: ${n}`);if(r<0)throw new ea(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ea(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ea(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=xi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(xi.fromNumber(r)));return i.compare(CD)===1&&(i=new xi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=S_(e),[r,i]=A_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new wg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=S_(e),[r,i]=A_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ea extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,dl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fh(Z.min(),i,new be(ce),ur(),re())}}class dl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new dl(r,n,re(),re(),re())}}/**
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
 */class Cu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class fS{constructor(e,n){this.targetId=e,this.me=n}}class dS{constructor(e,n,r=ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class k_{constructor(){this.fe=0,this.ge=R_(),this.pe=ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new dl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=R_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class RD{constructor(e){this.Le=e,this.Be=new Map,this.ke=ur(),this.qe=C_(),this.Qe=new be(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(hp(s))if(r===0){const o=new G(s.path);this.Ue(n,o,yt.newNoDocument(o,Z.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Bi(r).toUint8Array()}catch(u){if(u instanceof WI)return Qs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new wg(o,i,s)}catch(u){return Qs(u instanceof ea?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&hp(a.target)){const u=new G(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,yt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=re();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new fh(e,n,this.Qe,this.ke,r);return this.ke=ur(),this.qe=C_(),this.Qe=new be(ce),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new k_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new it(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new k_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function C_(){return new be(G.comparator)}function R_(){return new be(G.comparator)}const xD={asc:"ASCENDING",desc:"DESCENDING"},PD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bD={and:"AND",or:"OR"};class ND{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pp(t,e){return t.useProto3Json||ah(e)?e:{value:e}}function Ec(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function OD(t,e){return Ec(t,e.toTimestamp())}function Mn(t){return me(!!t),Z.fromTimestamp(function(n){const r=ti(n);return new Ke(r.seconds,r.nanos)}(t))}function Eg(t,e){return mp(t,e).canonicalString()}function mp(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function mS(t){const e=Te.fromString(t);return me(wS(e)),e}function gp(t,e){return Eg(t.databaseId,e.path)}function jf(t,e){const n=mS(e);if(n.get(1)!==t.databaseId.projectId)throw new W(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(yS(n))}function gS(t,e){return Eg(t.databaseId,e)}function DD(t){const e=mS(t);return e.length===4?Te.emptyPath():yS(e)}function yp(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yS(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function x_(t,e,n){return{name:gp(t,e),fields:n.value.mapValue.fields}}function LD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(me(f===void 0||typeof f=="string"),ot.fromBase64String(f||"")):(me(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ot.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const f=c.code===void 0?F.UNKNOWN:hS(c.code);return new W(f,c.message||"")}(o);n=new dS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=jf(t,r.document.name),s=Mn(r.document.updateTime),o=r.document.createTime?Mn(r.document.createTime):Z.min(),a=new Pt({mapValue:{fields:r.document.fields}}),u=yt.newFoundDocument(i,s,o,a),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Cu(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=jf(t,r.document),s=r.readTime?Mn(r.readTime):Z.min(),o=yt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Cu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=jf(t,r.document),s=r.removedTargetIds||[];n=new Cu([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new SD(i,s),a=r.targetId;n=new fS(a,o)}}return n}function MD(t,e){let n;if(e instanceof fl)n={update:x_(t,e.key,e.value)};else if(e instanceof vg)n={delete:gp(t,e.key)};else if(e instanceof ui)n={update:x_(t,e.key,e.data),updateMask:HD(e.fieldMask)};else{if(!(e instanceof ED))return J();n={verify:gp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof _c)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Qa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ya)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof wc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:OD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function VD(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Mn(i.updateTime):Mn(s);return o.isEqual(Z.min())&&(o=Mn(s)),new vD(o,i.transformResults||[])}(n,e))):[]}function FD(t,e){return{documents:[gS(t,e.path)]}}function jD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=gS(t,i);const s=function(c){if(c.length!==0)return _S(In.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:fs(m.field),direction:zD(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=pp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function UD(t){let e=DD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=vS(p);return m instanceof In&&GI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(E){return new Ga(ds(E.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,ah(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,v=p.values||[];return new vc(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,v=p.values||[];return new vc(v,m)}(n.endAt)),sD(e,i,o,s,a,"F",u,c)}function $D(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ds(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ds(n.unaryFilter.field);return ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ds(n.unaryFilter.field);return ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ds(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return ze.create(ds(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return In.create(n.compositeFilter.filters.map(r=>vS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function zD(t){return xD[t]}function BD(t){return PD[t]}function WD(t){return bD[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ds(t){return nt.fromServerFormat(t.fieldPath)}function _S(t){return t instanceof ze?function(n){if(n.op==="=="){if(m_(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NAN"}};if(p_(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(m_(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NAN"}};if(p_(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(n.field),op:BD(n.op),value:n.value}}}(t):t instanceof In?function(n){const r=n.getFilters().map(i=>_S(i));return r.length===1?r[0]:{compositeFilter:{op:WD(n.op),filters:r}}}(t):J()}function HD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Fr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=ot.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qD{constructor(e){this.ct=e}}function KD(t){const e=UD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dp(e,e.limit,"L"):e}/**
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
 */class GD{constructor(){this.un=new QD}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(ei.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(ei.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class QD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new it(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new it(Te.comparator)).toArray()}}/**
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
 */class Zs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Zs(0)}static kn(){return new Zs(-1)}}/**
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
 */class YD{constructor(){this.changes=new yo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class XD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class JD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&_a(r.mutation,i,Bt.empty(),Ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Ai();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Zo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ai();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ur();const o=va(),a=function(){return va()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof ui)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),_a(f.mutation,c,f.mutation.getFieldMask(),Ke.now())):o.set(c.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return a.set(c,new XD(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=va();let i=new be((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Bt.empty();f=a.applyToLocalView(c,f),r.set(u,f);const p=(i.get(a.batchId)||re()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,f=u.value,p=rS();f.forEach(m=>{if(!s.has(m)){const v=uS(n.get(m),r.get(m));v!==null&&p.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):JI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(Ai());let a=-1,u=s;return o.next(c=>j.forEach(c,(f,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(f=>({batchId:a,changes:nS(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Zo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Zo();return this.indexManager.getCollectionParents(e,s).next(a=>j.forEach(a,u=>{const c=function(p,m){return new go(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,yt.newInvalidDocument(f)))});let a=Zo();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&_a(f.mutation,c,Bt.empty(),Ke.now()),uh(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class ZD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Mn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:KD(i.bundledQuery),readTime:Mn(i.readTime)}}(n)),j.resolve()}}/**
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
 */class e4{constructor(){this.overlays=new be(G.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ai();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=Ai(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new be((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Ai(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const a=Ai(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>a.set(c,f)),!(a.size()>=i)););return j.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ID(n,r));let s=this.Ir.get(n);s===void 0&&(s=re(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class t4{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Tg{constructor(){this.Tr=new it(Ge.Er),this.dr=new it(Ge.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ge(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new Te([])),r=new Ge(n,e),i=new Ge(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new Te([])),r=new Ge(n,e),i=new Ge(n,e+1);let s=re();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ge(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||ce(e.wr,n.wr)}static Ar(e,n){return ce(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
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
 */class n4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new it(Ge.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ge(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),i=new Ge(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(ce);return n.forEach(i=>{const s=new Ge(i,0),o=new Ge(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Ge(new G(s),0);let a=new it(ce);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),j.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,i=>{const s=new Ge(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ge(n,0),i=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class r4{constructor(e){this.Mr=e,this.docs=function(){return new be(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=ur();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():yt.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ur();const o=n.path,a=new G(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||UO(jO(f),r)<=0||(i.has(f.key)||uh(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new i4(this)}getSize(e){return j.resolve(this.size)}}class i4 extends YD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class s4{constructor(e){this.persistence=e,this.Nr=new yo(n=>pg(n),mg),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Tg,this.targetCount=0,this.kr=Zs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Zs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
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
 */class o4{constructor(e,n){this.qr={},this.overlays={},this.Qr=new cg(0),this.Kr=!1,this.Kr=!0,this.$r=new t4,this.referenceDelegate=e(this),this.Ur=new s4(this),this.indexManager=new GD,this.remoteDocumentCache=function(i){return new r4(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new qD(n),this.Gr=new ZD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new e4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new n4(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new a4(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class a4 extends zO{constructor(e){super(),this.currentSequenceNumber=e}}class Ig{constructor(e){this.persistence=e,this.Jr=new Tg,this.Yr=null}static Zr(e){return new Ig(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Sg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Sg(e,n.fromCache,r,i)}}/**
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
 */class l4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class u4{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Bb()?8:BO(_t())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new l4;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(qo()<=oe.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",hs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(qo()<=oe.DEBUG&&H("QueryEngine","Query:",hs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(qo()<=oe.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",hs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(n))):j.resolve())}Yi(e,n){if(__(n))return j.resolve(null);let r=Ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=dp(n,null,"F"),r=Ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,dp(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return __(n)||i.isEqual(Z.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?j.resolve(null):(qo()<=oe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hs(n)),this.rs(e,o,n,FO(i,-1)).next(a=>a))})}ts(e,n){let r=new it(eS(e));return n.forEach((i,s)=>{uh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return qo()<=oe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",hs(n)),this.Ji.getDocumentsMatchingQuery(e,n,ei.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class c4{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new be(ce),this._s=new yo(s=>pg(s),mg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function h4(t,e,n,r){return new c4(t,e,n,r)}async function ES(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=re();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){a.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function f4(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,f){const p=c.batch,m=p.keys();let v=j.resolve();return m.forEach(E=>{v=v.next(()=>f.getEntry(u,E)).next(R=>{const P=c.docVersions.get(E);me(P!==null),R.version.compareTo(P)<0&&(p.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),f.addEntry(R)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function TS(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function d4(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(ot.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),i=i.insert(p,v),function(R,P,T){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,v,f)&&a.push(n.Ur.updateTargetData(s,v))});let u=ur(),c=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(p4(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(Z.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return j.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function p4(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ur();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function m4(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function g4(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function vp(t,e,n){const r=ee(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!hl(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function P_(t,e,n){const r=ee(t);let i=Z.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=ee(u),m=p._s.get(f);return m!==void 0?j.resolve(p.os.get(m)):p.Ur.getTargetData(c,f)}(r,o,Ln(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:re())).next(a=>(y4(r,aD(e),a),{documents:a,Ts:s})))}function y4(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class b_{constructor(){this.activeTargetIds=dD()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class v4{constructor(){this.so=new b_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new b_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _4{_o(e){}shutdown(){}}/**
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
 */class N_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let au=null;function Uf(){return au===null?au=function(){return 268435456+Math.round(2147483648*Math.random())}():au++,"0x"+au.toString(16)}/**
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
 */const w4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class E4{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const pt="WebChannelConnection";class T4 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Uf(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw Qs("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=w4[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Uf();return new Promise((o,a)=>{const u=new MI;u.setWithCredentials(!0),u.listenOnce(VI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Su.NO_ERROR:const f=u.getResponseJson();H(pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Su.TIMEOUT:H(pt,`RPC '${e}' ${s} timed out`),a(new W(F.DEADLINE_EXCEEDED,"Request time out"));break;case Su.HTTP_ERROR:const p=u.getStatus();if(H(pt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const E=function(P){const T=P.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(T)>=0?T:F.UNKNOWN}(v.status);a(new W(E,v.message))}else a(new W(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new W(F.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{H(pt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(pt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Uf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=UI(),a=jI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(pt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let m=!1,v=!1;const E=new E4({Io:P=>{v?H(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(H(pt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(pt,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},To:()=>p.close()}),R=(P,T,w)=>{P.listen(T,I=>{try{w(I)}catch(b){setTimeout(()=>{throw b},0)}})};return R(p,Jo.EventType.OPEN,()=>{v||(H(pt,`RPC '${e}' stream ${i} transport opened.`),E.yo())}),R(p,Jo.EventType.CLOSE,()=>{v||(v=!0,H(pt,`RPC '${e}' stream ${i} transport closed`),E.So())}),R(p,Jo.EventType.ERROR,P=>{v||(v=!0,Qs(pt,`RPC '${e}' stream ${i} transport errored:`,P),E.So(new W(F.UNAVAILABLE,"The operation could not be completed")))}),R(p,Jo.EventType.MESSAGE,P=>{var T;if(!v){const w=P.data[0];me(!!w);const I=w,b=I.error||((T=I[0])===null||T===void 0?void 0:T.error);if(b){H(pt,`RPC '${e}' stream ${i} received error:`,b);const V=b.status;let L=function(S){const k=je[S];if(k!==void 0)return hS(k)}(V),_=b.message;L===void 0&&(L=F.INTERNAL,_="Unknown error status: "+V+" with message "+b.message),v=!0,E.So(new W(L,_)),p.close()}else H(pt,`RPC '${e}' stream ${i} received:`,w),E.bo(w)}}),R(a,FI.STAT_EVENT,P=>{P.stat===ap.PROXY?H(pt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===ap.NOPROXY&&H(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}function $f(){return typeof document<"u"?document:null}/**
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
 */function dh(t){return new ND(t,!0)}/**
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
 */class IS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class SS{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new IS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(lr(n.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class I4 extends SS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=LD(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?Mn(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=yp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=hp(u)?{documents:FD(s,u)}:{query:jD(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=pS(s,o.resumeToken);const c=pp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=Ec(s,o.snapshotVersion.toTimestamp());const c=pp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=$D(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=yp(this.serializer),n.removeTarget=e,this.a_(n)}}class S4 extends SS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=VD(e.writeResults,e.commitTime),r=Mn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=yp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>MD(this.serializer,r))};this.a_(n)}}/**
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
 */class A4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,mp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,mp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class k4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(lr(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class C4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ts(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.L_.add(4),await pl(c),c.q_.set("Unknown"),c.L_.delete(4),await ph(c)}(this))})}),this.q_=new k4(r,i)}}async function ph(t){if(ts(t))for(const e of t.B_)await e(!0)}async function pl(t){for(const e of t.B_)await e(!1)}function AS(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Rg(n)?Cg(n):vo(n).r_()&&kg(n,e))}function Ag(t,e){const n=ee(t),r=vo(n);n.N_.delete(e),r.r_()&&kS(n,e),n.N_.size===0&&(r.r_()?r.o_():ts(n)&&n.q_.set("Unknown"))}function kg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vo(t).A_(e)}function kS(t,e){t.Q_.xe(e),vo(t).R_(e)}function Cg(t){t.Q_=new RD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),vo(t).start(),t.q_.v_()}function Rg(t){return ts(t)&&!vo(t).n_()&&t.N_.size>0}function ts(t){return ee(t).L_.size===0}function CS(t){t.Q_=void 0}async function R4(t){t.q_.set("Online")}async function x4(t){t.N_.forEach((e,n)=>{kg(t,e)})}async function P4(t,e){CS(t),Rg(t)?(t.q_.M_(e),Cg(t)):t.q_.set("Unknown")}async function b4(t,e,n){if(t.q_.set("Online"),e instanceof dS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tc(t,r)}else if(e instanceof Cu?t.Q_.Ke(e):e instanceof fS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await TS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(ot.EMPTY_BYTE_STRING,f.snapshotVersion)),kS(s,u);const p=new Fr(f.target,u,c,f.sequenceNumber);kg(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Tc(t,r)}}async function Tc(t,e,n){if(!hl(e))throw e;t.L_.add(1),await pl(t),t.q_.set("Offline"),n||(n=()=>TS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ph(t)})}function RS(t,e){return e().catch(n=>Tc(t,n,e))}async function mh(t){const e=ee(t),n=ni(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;N4(e);)try{const i=await m4(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,O4(e,i)}catch(i){await Tc(e,i)}xS(e)&&PS(e)}function N4(t){return ts(t)&&t.O_.length<10}function O4(t,e){t.O_.push(e);const n=ni(t);n.r_()&&n.V_&&n.m_(e.mutations)}function xS(t){return ts(t)&&!ni(t).n_()&&t.O_.length>0}function PS(t){ni(t).start()}async function D4(t){ni(t).p_()}async function L4(t){const e=ni(t);for(const n of t.O_)e.m_(n.mutations)}async function M4(t,e,n){const r=t.O_.shift(),i=_g.from(r,e,n);await RS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await mh(t)}async function V4(t,e){e&&ni(t).V_&&await async function(r,i){if(function(o){return AD(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();ni(r).s_(),await RS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await mh(r)}}(t,e),xS(t)&&PS(t)}async function O_(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ts(n);n.L_.add(3),await pl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ph(n)}async function F4(t,e){const n=ee(t);e?(n.L_.delete(2),await ph(n)):e||(n.L_.add(2),await pl(n),n.q_.set("Unknown"))}function vo(t){return t.K_||(t.K_=function(n,r,i){const s=ee(n);return s.w_(),new I4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:R4.bind(null,t),Ro:x4.bind(null,t),mo:P4.bind(null,t),d_:b4.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Rg(t)?Cg(t):t.q_.set("Unknown")):(await t.K_.stop(),CS(t))})),t.K_}function ni(t){return t.U_||(t.U_=function(n,r,i){const s=ee(n);return s.w_(),new S4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:D4.bind(null,t),mo:V4.bind(null,t),f_:L4.bind(null,t),g_:M4.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await mh(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class xg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new xg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pg(t,e){if(lr("AsyncQueue",`${e}: ${t}`),hl(t))return new W(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Vs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Zo(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new Vs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class D_{constructor(){this.W_=new be(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class eo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new eo(e,n,Vs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class j4{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class U4{constructor(){this.queries=L_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=L_(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new W(F.ABORTED,"Firestore shutting down"))}}function L_(){return new yo(t=>ZI(t),lh)}async function bS(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new j4,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Pg(o,`Initialization of query '${hs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&bg(n)}async function NS(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function $4(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&bg(n)}function z4(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function bg(t){t.Y_.forEach(e=>{e.next()})}var _p,M_;(M_=_p||(_p={})).ea="default",M_.Cache="cache";class OS{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new eo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==_p.Cache}}/**
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
 */class DS{constructor(e){this.key=e}}class LS{constructor(e){this.key=e}}class B4{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=eS(e),this.Ra=new Vs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new D_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),v=uh(this.query,p)?p:null,E=!!m&&this.mutatedKeys.has(m.key),R=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let P=!1;m&&v?m.data.isEqual(v.data)?E!==R&&(r.track({type:3,doc:v}),P=!0):this.ga(m,v)||(r.track({type:2,doc:v}),P=!0,(u&&this.Aa(v,u)>0||c&&this.Aa(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),P=!0):m&&!v&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(a=!0)),P&&(v?(o=o.add(v),s=R?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(v,E){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return R(v)-R(E)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new eo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new D_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new LS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new DS(r))}),n}ba(e){this.Ta=e.Ts,this.da=re();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return eo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class W4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class H4{constructor(e){this.key=e,this.va=!1}}class q4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new yo(a=>ZI(a),lh),this.Ma=new Map,this.xa=new Set,this.Oa=new be(G.comparator),this.Na=new Map,this.La=new Tg,this.Ba={},this.ka=new Map,this.qa=Zs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function K4(t,e,n=!0){const r=$S(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await MS(r,e,n,!0),i}async function G4(t,e){const n=$S(t);await MS(n,e,!0,!1)}async function MS(t,e,n,r){const i=await g4(t.localStore,Ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await Q4(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&AS(t.remoteStore,i),a}async function Q4(t,e,n,r,i){t.Ka=(p,m,v)=>async function(R,P,T,w){let I=P.view.ma(T);I.ns&&(I=await P_(R.localStore,P.query,!1).then(({documents:_})=>P.view.ma(_,I)));const b=w&&w.targetChanges.get(P.targetId),V=w&&w.targetMismatches.get(P.targetId)!=null,L=P.view.applyChanges(I,R.isPrimaryClient,b,V);return F_(R,P.targetId,L.wa),L.snapshot}(t,p,m,v);const s=await P_(t.localStore,e,!0),o=new B4(e,s.Ts),a=o.ma(s.documents),u=dl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);F_(t,n,c.wa);const f=new W4(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function Y4(t,e,n){const r=ee(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!lh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ag(r.remoteStore,i.targetId),wp(r,i.targetId)}).catch(cl)):(wp(r,i.targetId),await vp(r.localStore,i.targetId,!0))}async function X4(t,e){const n=ee(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ag(n.remoteStore,r.targetId))}async function J4(t,e,n){const r=sL(t);try{const i=await function(o,a){const u=ee(o),c=Ke.now(),f=a.reduce((v,E)=>v.add(E.key),re());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let E=ur(),R=re();return u.cs.getEntries(v,f).next(P=>{E=P,E.forEach((T,w)=>{w.isValidDocument()||(R=R.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,E)).next(P=>{p=P;const T=[];for(const w of a){const I=wD(w,p.get(w.key).overlayedDocument);I!=null&&T.push(new ui(w.key,I,HI(I.value.mapValue),_n.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,T,a)}).next(P=>{m=P;const T=P.applyToLocalDocumentSet(p,R);return u.documentOverlayCache.saveOverlays(v,P.batchId,T)})}).then(()=>({batchId:m.batchId,changes:nS(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new be(ce)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await ml(r,i.changes),await mh(r.remoteStore)}catch(i){const s=Pg(i,"Failed to persist write");n.reject(s)}}async function VS(t,e){const n=ee(t);try{const r=await d4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?me(o.va):i.removedDocuments.size>0&&(me(o.va),o.va=!1))}),await ml(n,r,e)}catch(r){await cl(r)}}function V_(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ee(o);u.onlineState=a;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(a)&&(c=!0)}),c&&bg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Z4(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new be(G.comparator);o=o.insert(s,yt.newNoDocument(s,Z.min()));const a=re().add(s),u=new fh(Z.min(),new Map,new be(ce),o,a);await VS(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Ng(r)}else await vp(r.localStore,e,!1).then(()=>wp(r,e,n)).catch(cl)}async function eL(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await f4(n.localStore,e);jS(n,r,null),FS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ml(n,i)}catch(i){await cl(i)}}async function tL(t,e,n){const r=ee(t);try{const i=await function(o,a){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,a).next(p=>(me(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);jS(r,e,n),FS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ml(r,i)}catch(i){await cl(i)}}function FS(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function jS(t,e,n){const r=ee(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function wp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||US(t,r)})}function US(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ag(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Ng(t))}function F_(t,e,n){for(const r of n)r instanceof DS?(t.La.addReference(r.key,e),nL(t,r)):r instanceof LS?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||US(t,r.key)):J()}function nL(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),Ng(t))}function Ng(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(Te.fromString(e)),r=t.qa.next();t.Na.set(r,new H4(n)),t.Oa=t.Oa.insert(n,r),AS(t.remoteStore,new Fr(Ln(gg(n.path)),r,"TargetPurposeLimboResolution",cg.oe))}}async function ml(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Sg.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=ee(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(c,m=>j.forEach(m.$i,v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>j.forEach(m.Ui,v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!hl(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const v=f.os.get(m),E=v.snapshotVersion,R=v.withLastLimboFreeSnapshotVersion(E);f.os=f.os.insert(m,R)}}}(r.localStore,s))}async function rL(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await ES(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new W(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ml(n,r.hs)}}function iL(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return re().add(r.key);{let i=re();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function $S(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=VS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Z4.bind(null,e),e.Ca.d_=$4.bind(null,e.eventManager),e.Ca.$a=z4.bind(null,e.eventManager),e}function sL(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tL.bind(null,e),e}class Ic{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return h4(this.persistence,new u4,e.initialUser,this.serializer)}Ga(e){return new o4(Ig.Zr,this.serializer)}Wa(e){return new v4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ic.provider={build:()=>new Ic};class Ep{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>V_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rL.bind(null,this.syncEngine),await F4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new U4}()}createDatastore(e){const n=dh(e.databaseInfo.databaseId),r=function(s){return new T4(s)}(e.databaseInfo);return function(s,o,a,u){return new A4(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new C4(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>V_(this.syncEngine,n,0),function(){return N_.D()?new N_:new _4}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,f){const p=new q4(i,s,o,a,u,c);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await pl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ep.provider={build:()=>new Ep};/**
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
 */class zS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):lr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class oL{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=zI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zf(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ES(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function j_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aL(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>O_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>O_(e.remoteStore,i)),t._onlineComponents=e}async function aL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await zf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Qs("Error using user provided cache. Falling back to memory cache: "+n),await zf(t,new Ic)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await zf(t,new Ic);return t._offlineComponents}async function BS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await j_(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await j_(t,new Ep))),t._onlineComponents}function lL(t){return BS(t).then(e=>e.syncEngine)}async function Tp(t){const e=await BS(t),n=e.eventManager;return n.onListen=K4.bind(null,e.syncEngine),n.onUnlisten=Y4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=G4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=X4.bind(null,e.syncEngine),n}function uL(t,e,n={}){const r=new Yr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const f=new zS({next:m=>{f.Za(),o.enqueueAndForget(()=>NS(s,p)),m.fromCache&&u.source==="server"?c.reject(new W(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new OS(a,f,{includeMetadataChanges:!0,_a:!0});return bS(s,p)}(await Tp(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function WS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const U_=new Map;/**
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
 */function HS(t,e,n){if(!n)throw new W(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cL(t,e,n,r){if(e===!0&&r===!0)throw new W(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $_(t){if(!G.isDocumentKey(t))throw new W(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function z_(t){if(G.isDocumentKey(t))throw new W(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gh(t);throw new W(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class B_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=WS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new B_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new B_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xO;switch(r.type){case"firstParty":return new OO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=U_.get(n);r&&(H("ComponentProvider","Removing Datastore"),U_.delete(n),r.terminate())}(this),Promise.resolve()}}function hL(t,e,n,r={}){var i;const s=(t=Vn(t,yh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Qs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=mt.MOCK_USER;else{a=Vb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new mt(c)}t._authCredentials=new PO(new $I(a,u))}}/**
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
 */class ci{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ci(this.firestore,e,this._query)}}class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class Xr extends ci{constructor(e,n,r){super(e,n,gg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new G(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function Xa(t,e,...n){if(t=Je(t),HS("collection","path",e),t instanceof yh){const r=Te.fromString(e,...n);return z_(r),new Xr(t,null,r)}{if(!(t instanceof Vt||t instanceof Xr))throw new W(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return z_(r),new Xr(t.firestore,null,r)}}function Ru(t,e,...n){if(t=Je(t),arguments.length===1&&(e=zI.newId()),HS("doc","path",e),t instanceof yh){const r=Te.fromString(e,...n);return $_(r),new Vt(t,null,new G(r))}{if(!(t instanceof Vt||t instanceof Xr))throw new W(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return $_(r),new Vt(t.firestore,t instanceof Xr?t.converter:null,new G(r))}}/**
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
 */class W_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new IS(this,"async_queue_retry"),this.Vu=()=>{const r=$f();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=$f();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=$f();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Yr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!hl(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw lr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=xg.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function H_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Hi extends yh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new W_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new W_(e),this._firestoreClient=void 0,await e}}}function fL(t,e){const n=typeof t=="object"?t:rg(),r=typeof t=="string"?t:"(default)",i=Zi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Lb("firestore");s&&hL(i,...s)}return i}function Og(t){if(t._terminated)throw new W(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||dL(t),t._firestoreClient}function dL(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,f){return new qO(a,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,WS(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new oL(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class to{constructor(e){this._byteString=e}static fromBase64String(e){try{return new to(ot.fromBase64String(e))}catch(n){throw new W(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new to(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class vh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Dg{constructor(e){this._methodName=e}}/**
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
 */class Lg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */class Mg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const pL=/^__.*__$/;class mL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ui(e,this.data,this.fieldMask,n,this.fieldTransforms):new fl(e,this.data,n,this.fieldTransforms)}}class qS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ui(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function KS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Vg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Vg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Sc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(KS(this.Cu)&&pL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class gL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dh(e)}Qu(e,n,r,i=!1){return new Vg({Cu:e,methodName:n,qu:r,path:nt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fg(t){const e=t._freezeSettings(),n=dh(t._databaseId);return new gL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yL(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);jg("Data must be an object, but it was:",o,r);const a=GS(r,o);let u,c;if(s.merge)u=new Bt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=Ip(e,p,n);if(!o.contains(m))throw new W(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);YS(f,m)||f.push(m)}u=new Bt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new mL(new Pt(a),u,c)}class _h extends Dg{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _h}}function vL(t,e,n,r){const i=t.Qu(1,e,n);jg("Data must be an object, but it was:",i,r);const s=[],o=Pt.empty();es(r,(u,c)=>{const f=Ug(e,u,n);c=Je(c);const p=i.Nu(f);if(c instanceof _h)s.push(f);else{const m=gl(c,p);m!=null&&(s.push(f),o.set(f,m))}});const a=new Bt(s);return new qS(o,a,i.fieldTransforms)}function _L(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Ip(e,r,n)],u=[i];if(s.length%2!=0)throw new W(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Ip(e,s[m])),u.push(s[m+1]);const c=[],f=Pt.empty();for(let m=a.length-1;m>=0;--m)if(!YS(c,a[m])){const v=a[m];let E=u[m];E=Je(E);const R=o.Nu(v);if(E instanceof _h)c.push(v);else{const P=gl(E,R);P!=null&&(c.push(v),f.set(v,P))}}const p=new Bt(c);return new qS(f,p,o.fieldTransforms)}function wL(t,e,n,r=!1){return gl(n,t.Qu(r?4:3,e))}function gl(t,e){if(QS(t=Je(t)))return jg("Unsupported field value:",e,t),GS(t,e);if(t instanceof Dg)return function(r,i){if(!KS(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=gl(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ke.fromDate(r);return{timestampValue:Ec(i.serializer,s)}}if(r instanceof Ke){const s=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ec(i.serializer,s)}}if(r instanceof Lg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof to)return{bytesValue:pS(i.serializer,r._byteString)};if(r instanceof Vt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Eg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Mg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return yg(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${gh(r)}`)}(t,e)}function GS(t,e){const n={};return BI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,(r,i)=>{const s=gl(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function QS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Lg||t instanceof to||t instanceof Vt||t instanceof Dg||t instanceof Mg)}function jg(t,e,n){if(!QS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=gh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Ip(t,e,n){if((e=Je(e))instanceof vh)return e._internalPath;if(typeof e=="string")return Ug(t,e);throw Sc("Field path arguments must be of type string or ",t,!1,void 0,n)}const EL=new RegExp("[~\\*/\\[\\]]");function Ug(t,e,n){if(e.search(EL)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vh(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(F.INVALID_ARGUMENT,a+t+u)}function YS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class XS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($g("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TL extends XS{data(){return super.data()}}function $g(t,e){return typeof e=="string"?Ug(t,e):e instanceof vh?e._internalPath:e._delegate._internalPath}/**
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
 */function JS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zg{}class ZS extends zg{}function IL(t,e,...n){let r=[];e instanceof zg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Wg).length,a=s.filter(u=>u instanceof Bg).length;if(o>1||o>0&&a>0)throw new W(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Bg extends ZS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Bg(e,n,r)}_apply(e){const n=this._parse(e);return eA(e._query,n),new ci(e.firestore,e.converter,fp(e._query,n))}_parse(e){const n=Fg(e.firestore);return function(s,o,a,u,c,f,p){let m;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){K_(p,f);const v=[];for(const E of p)v.push(q_(u,s,E));m={arrayValue:{values:v}}}else m=q_(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||K_(p,f),m=wL(a,o,p,f==="in"||f==="not-in");return ze.create(c,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Wg extends zg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Wg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:In.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)eA(o,u),o=fp(o,u)}(e._query,n),new ci(e.firestore,e.converter,fp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hg extends ZS{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Hg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ga(s,o)}(e._query,this._field,this._direction);return new ci(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new go(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function SL(t,e="asc"){const n=e,r=$g("orderBy",t);return Hg._create(r,n)}function q_(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new W(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!JI(e)&&n.indexOf("/")!==-1)throw new W(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!G.isDocumentKey(r))throw new W(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return d_(t,new G(r))}if(n instanceof Vt)return d_(t,n._key);throw new W(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gh(n)}.`)}function K_(t,e){if(!Array.isArray(t)||t.length===0)throw new W(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function eA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class AL{convertValue(e,n="none"){switch(Wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return es(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Me(o.doubleValue));return new Mg(s)}convertGeoPoint(e){return new Lg(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=fg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ha(e));default:return null}}convertTimestamp(e){const n=ti(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);me(wS(r));const i=new qa(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||lr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function kL(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class ta{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tA extends XS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($g("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class xu extends tA{data(e={}){return super.data(e)}}class nA{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ta(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xu(this._firestore,this._userDataWriter,r.key,r,new ta(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new xu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ta(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new xu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ta(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:CL(a.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class qg extends AL{constructor(e){super(),this.firestore=e}convertBytes(e){return new to(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function RL(t){t=Vn(t,ci);const e=Vn(t.firestore,Hi),n=Og(e),r=new qg(e);return JS(t._query),uL(n,t._query).then(i=>new nA(e,r,t,i))}function G_(t,e,n,...r){t=Vn(t,Vt);const i=Vn(t.firestore,Hi),s=Fg(i);let o;return o=typeof(e=Je(e))=="string"||e instanceof vh?_L(s,"updateDoc",t._key,e,n,r):vL(s,"updateDoc",t._key,e),Gg(i,[o.toMutation(t._key,_n.exists(!0))])}function xL(t){return Gg(Vn(t.firestore,Hi),[new vg(t._key,_n.none())])}function Kg(t,e){const n=Vn(t.firestore,Hi),r=Ru(t),i=kL(t.converter,e);return Gg(n,[yL(Fg(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,_n.exists(!1))]).then(()=>r)}function PL(t,...e){var n,r,i;t=Je(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||H_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(H_(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,f;if(t instanceof Vt)c=Vn(t.firestore,Hi),f=gg(t._key.path),u={next:p=>{e[o]&&e[o](bL(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Vn(t,ci);c=Vn(p.firestore,Hi),f=p._query;const m=new qg(c);u={next:v=>{e[o]&&e[o](new nA(c,m,p,v))},error:e[o+1],complete:e[o+2]},JS(t._query)}return function(m,v,E,R){const P=new zS(R),T=new OS(v,P,E);return m.asyncQueue.enqueueAndForget(async()=>bS(await Tp(m),T)),()=>{P.Za(),m.asyncQueue.enqueueAndForget(async()=>NS(await Tp(m),T))}}(Og(c),f,a,u)}function Gg(t,e){return function(r,i){const s=new Yr;return r.asyncQueue.enqueueAndForget(async()=>J4(await lL(r),i,s)),s.promise}(Og(t),e)}function bL(t,e,n){const r=n.docs.get(e._key),i=new qg(t);return new tA(t,i,e._key,r,new ta(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){mo=i})(po),Un(new Tn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Hi(new bO(r.getProvider("auth-internal")),new LO(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qa(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),sn(l_,"4.7.3",e),sn(l_,"4.7.3","esm2017")})();var Nt=function(){return Nt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Nt.apply(this,arguments)};function Qg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ja(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function rA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NL=rA,iA=new Ji("auth","Firebase",rA());/**
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
 */const Ac=new ih("@firebase/auth");function OL(t,...e){Ac.logLevel<=oe.WARN&&Ac.warn(`Auth (${po}): ${t}`,...e)}function Pu(t,...e){Ac.logLevel<=oe.ERROR&&Ac.error(`Auth (${po}): ${t}`,...e)}/**
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
 */function cr(t,...e){throw Yg(t,...e)}function Fn(t,...e){return Yg(t,...e)}function sA(t,e,n){const r=Object.assign(Object.assign({},NL()),{[e]:n});return new Ji("auth","Firebase",r).create(e,{appName:t.name})}function Pi(t){return sA(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iA.create(t,...e)}function X(t,e,...n){if(!t)throw Yg(e,...n)}function Jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pu(e),new Error(e)}function hr(t,e){t||Jn(e)}/**
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
 */function Sp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function DL(){return Q_()==="http:"||Q_()==="https:"}function Q_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function LL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DL()||iI()||"connection"in navigator)?navigator.onLine:!0}function ML(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yl{constructor(e,n){this.shortDelay=e,this.longDelay=n,hr(n>e,"Short delay should be less than long delay!"),this.isMobile=Fb()||$b()}get(){return LL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xg(t,e){hr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class oA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const FL=new yl(3e4,6e4);function Jg(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _o(t,e,n,r,i={}){return aA(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ul(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Ub()||(c.referrerPolicy="no-referrer"),oA.fetch()(lA(t,t.config.apiHost,n,a),c)})}async function aA(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VL),e);try{const i=new UL(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw lu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw lu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw lu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw lu(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw sA(t,f,c);cr(t,f)}}catch(i){if(i instanceof Sn)throw i;cr(t,"network-request-failed",{message:String(i)})}}async function jL(t,e,n,r,i={}){const s=await _o(t,e,n,r,i);return"mfaPendingCredential"in s&&cr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function lA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xg(t.config,i):`${t.config.apiScheme}://${i}`}class UL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fn(this.auth,"network-request-failed")),FL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Fn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function $L(t,e){return _o(t,"POST","/v1/accounts:delete",e)}async function uA(t,e){return _o(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zL(t,e=!1){const n=Je(t),r=await n.getIdToken(e),i=Zg(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wa(Bf(i.auth_time)),issuedAtTime:wa(Bf(i.iat)),expirationTime:wa(Bf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bf(t){return Number(t)*1e3}function Zg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pu("JWT malformed, contained fewer than 3 sections"),null;try{const i=eI(n);return i?JSON.parse(i):(Pu("Failed to decode base64 JWT payload"),null)}catch(i){return Pu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Y_(t){const e=Zg(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Za(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&BL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class WL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ap{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wa(this.lastLoginAt),this.creationTime=wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function kc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Za(t,uA(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?cA(s.providerUserInfo):[],a=qL(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ap(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function HL(t){const e=Je(t);await kc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function cA(t){return t.map(e=>{var{providerId:n}=e,r=Qg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function KL(t,e){const n=await aA(t,{},async()=>{const r=ul({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=lA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",oA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GL(t,e){return _o(t,"POST","/v2/accounts:revokeToken",Jg(t,e))}/**
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
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Y_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Y_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await KL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Fs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return Jn("not implemented")}}/**
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
 */function Tr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ap(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Za(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zL(this,e)}reload(){return HL(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await kc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vr(this.auth.app))return Promise.reject(Pi(this.auth));const e=await this.getIdToken();return await Za(this,$L(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:I,emailVerified:b,isAnonymous:V,providerData:L,stsTokenManager:_}=n;X(I&&_,e,"internal-error");const y=Fs.fromJSON(this.name,_);X(typeof I=="string",e,"internal-error"),Tr(p,e.name),Tr(m,e.name),X(typeof b=="boolean",e,"internal-error"),X(typeof V=="boolean",e,"internal-error"),Tr(v,e.name),Tr(E,e.name),Tr(R,e.name),Tr(P,e.name),Tr(T,e.name),Tr(w,e.name);const S=new Zn({uid:I,auth:e,email:m,emailVerified:b,displayName:p,isAnonymous:V,photoURL:E,phoneNumber:v,tenantId:R,stsTokenManager:y,createdAt:T,lastLoginAt:w});return L&&Array.isArray(L)&&(S.providerData=L.map(k=>Object.assign({},k))),P&&(S._redirectEventId=P),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Fs;i.updateFromServerResponse(n);const s=new Zn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await kc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?cA(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Fs;a.updateFromIdToken(r);const u=new Zn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ap(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const X_=new Map;function er(t){hr(t instanceof Function,"Expected a class definition");let e=X_.get(t);return e?(hr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,X_.set(t,e),e)}/**
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
 */class hA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hA.type="NONE";const J_=hA;/**
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
 */function bu(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bu(this.userKey,i.apiKey,s),this.fullPersistenceKey=bu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new js(er(J_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||er(J_);const o=bu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){const p=Zn._fromJSON(e,f);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new js(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new js(s,e,r))}}/**
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
 */function Z_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yA(e))return"Blackberry";if(vA(e))return"Webos";if(dA(e))return"Safari";if((e.includes("chrome/")||pA(e))&&!e.includes("edge/"))return"Chrome";if(gA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fA(t=_t()){return/firefox\//i.test(t)}function dA(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pA(t=_t()){return/crios\//i.test(t)}function mA(t=_t()){return/iemobile/i.test(t)}function gA(t=_t()){return/android/i.test(t)}function yA(t=_t()){return/blackberry/i.test(t)}function vA(t=_t()){return/webos/i.test(t)}function ey(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QL(t=_t()){var e;return ey(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YL(){return zb()&&document.documentMode===10}function _A(t=_t()){return ey(t)||gA(t)||vA(t)||yA(t)||/windows phone/i.test(t)||mA(t)}/**
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
 */function wA(t,e=[]){let n;switch(t){case"Browser":n=Z_(_t());break;case"Worker":n=`${Z_(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${po}/${r}`}/**
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
 */class XL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function JL(t,e={}){return _o(t,"GET","/v2/passwordPolicy",Jg(t,e))}/**
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
 */const ZL=6;class eM{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ZL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class tM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new e1(this),this.idTokenSubscription=new e1(this),this.beforeStateQueue=new XL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await uA(this,{idToken:e}),r=await Zn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Vr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await kc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ML()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vr(this.app))return Promise.reject(Pi(this));const n=e?Je(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vr(this.app)?Promise.reject(Pi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vr(this.app)?Promise.reject(Pi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JL(this),n=new eM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&OL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ty(t){return Je(t)}class e1{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qb(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ny={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nM(t){ny=t}function rM(t){return ny.loadJS(t)}function iM(){return ny.gapiScript}function sM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function oM(t,e){const n=Zi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(za(s,e??{}))return i;cr(i,"already-initialized")}return n.initialize({options:e})}function aM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lM(t,e,n){const r=ty(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=EA(e),{host:o,port:a}=uM(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),cM()}function EA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uM(t){const e=EA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:t1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:t1(o)}}}function t1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class TA{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jn("not implemented")}_getIdTokenResponse(e){return Jn("not implemented")}_linkToIdToken(e,n){return Jn("not implemented")}_getReauthenticationResolver(e){return Jn("not implemented")}}/**
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
 */async function Us(t,e){return jL(t,"POST","/v1/accounts:signInWithIdp",Jg(t,e))}/**
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
 */const hM="http://localhost";class qi extends TA{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:hM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ul(n)}return e}}/**
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
 */class IA{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vl extends IA{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pr extends vl{constructor(){super("facebook.com")}static credential(e){return qi._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
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
 */class br extends vl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qi._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
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
 */class Nr extends vl{constructor(){super("github.com")}static credential(e){return qi._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
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
 */class Or extends vl{constructor(){super("twitter.com")}static credential(e,n){return qi._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Or.credential(n,r)}catch{return null}}}Or.TWITTER_SIGN_IN_METHOD="twitter.com";Or.PROVIDER_ID="twitter.com";/**
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
 */class no{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zn._fromIdTokenResponse(e,r,i),o=n1(r);return new no({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=n1(r);return new no({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function n1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Cc extends Sn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Cc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Cc(e,n,r,i)}}function SA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Cc._fromErrorAndOperation(t,s,e,r):s})}async function fM(t,e,n=!1){const r=await Za(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return no._forOperation(t,"link",r)}/**
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
 */async function dM(t,e,n=!1){const{auth:r}=t;if(Vr(r.app))return Promise.reject(Pi(r));const i="reauthenticate";try{const s=await Za(t,SA(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Zg(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),no._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&cr(r,"user-mismatch"),s}}/**
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
 */async function pM(t,e,n=!1){if(Vr(t.app))return Promise.reject(Pi(t));const r="signIn",i=await SA(t,r,e),s=await no._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function mM(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function gM(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}const Rc="__sak";/**
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
 */class AA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rc,"1"),this.storage.removeItem(Rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yM=1e3,vM=10;class kA extends AA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_A(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);YL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kA.type="LOCAL";const _M=kA;/**
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
 */class CA extends AA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}CA.type="SESSION";const RA=CA;/**
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
 */function wM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await wM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wh.receivers=[];/**
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
 */function ry(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class EM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=ry("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function jn(){return window}function TM(t){jn().location.href=t}/**
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
 */function xA(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function IM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AM(){return xA()?self:null}/**
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
 */const PA="firebaseLocalStorageDb",kM=1,xc="firebaseLocalStorage",bA="fbase_key";class _l{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Eh(t,e){return t.transaction([xc],e?"readwrite":"readonly").objectStore(xc)}function CM(){const t=indexedDB.deleteDatabase(PA);return new _l(t).toPromise()}function kp(){const t=indexedDB.open(PA,kM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xc,{keyPath:bA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xc)?e(r):(r.close(),await CM(),e(await kp()))})})}async function r1(t,e,n){const r=Eh(t,!0).put({[bA]:e,value:n});return new _l(r).toPromise()}async function RM(t,e){const n=Eh(t,!1).get(e),r=await new _l(n).toPromise();return r===void 0?null:r.value}function i1(t,e){const n=Eh(t,!0).delete(e);return new _l(n).toPromise()}const xM=800,PM=3;class NA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wh._getInstance(AM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IM(),!this.activeServiceWorker)return;this.sender=new EM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kp();return await r1(e,Rc,"1"),await i1(e,Rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>r1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>i1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Eh(i,!1).getAll();return new _l(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}NA.type="LOCAL";const bM=NA;new yl(3e4,6e4);/**
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
 */function NM(t,e){return e?er(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class iy extends TA{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OM(t){return pM(t.auth,new iy(t),t.bypassAuthState)}function DM(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),dM(n,new iy(t),t.bypassAuthState)}async function LM(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),fM(n,new iy(t),t.bypassAuthState)}/**
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
 */class OA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OM;case"linkViaPopup":case"linkViaRedirect":return LM;case"reauthViaPopup":case"reauthViaRedirect":return DM;default:cr(this.auth,"internal-error")}}resolve(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const MM=new yl(2e3,1e4);class Cs extends OA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){hr(this.filter.length===1,"Popup operations only handle one event");const e=ry();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MM.get())};e()}}Cs.currentPopupAction=null;/**
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
 */const VM="pendingRedirect",Nu=new Map;class FM extends OA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Nu.get(this.auth._key());if(!e){try{const r=await jM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Nu.set(this.auth._key(),e)}return this.bypassAuthState||Nu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jM(t,e){const n=zM(e),r=$M(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UM(t,e){Nu.set(t._key(),e)}function $M(t){return er(t._redirectPersistence)}function zM(t){return bu(VM,t.config.apiKey,t.name)}async function BM(t,e,n=!1){if(Vr(t.app))return Promise.reject(Pi(t));const r=ty(t),i=NM(r,e),o=await new FM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const WM=10*60*1e3;class HM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!DA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WM&&this.cachedEventUids.clear(),this.cachedEventUids.has(s1(e))}saveEventToCache(e){this.cachedEventUids.add(s1(e)),this.lastProcessedEventTime=Date.now()}}function s1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function DA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return DA(t);default:return!1}}/**
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
 */async function KM(t,e={}){return _o(t,"GET","/v1/projects",e)}/**
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
 */const GM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QM=/^https?/;async function YM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KM(t);for(const n of e)try{if(XM(n))return}catch{}cr(t,"unauthorized-domain")}function XM(t){const e=Sp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!QM.test(n))return!1;if(GM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const JM=new yl(3e4,6e4);function o1(){const t=jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZM(t){return new Promise((e,n)=>{var r,i,s;function o(){o1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{o1(),n(Fn(t,"network-request-failed"))},timeout:JM.get()})}if(!((i=(r=jn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=jn().gapi)===null||s===void 0)&&s.load)o();else{const a=sM("iframefcb");return jn()[a]=()=>{gapi.load?o():n(Fn(t,"network-request-failed"))},rM(`${iM()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Ou=null,e})}let Ou=null;function eV(t){return Ou=Ou||ZM(t),Ou}/**
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
 */const tV=new yl(5e3,15e3),nV="__/auth/iframe",rV="emulator/auth/iframe",iV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oV(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xg(e,rV):`https://${t.config.authDomain}/${nV}`,r={apiKey:e.apiKey,appName:t.name,v:po},i=sV.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ul(r).slice(1)}`}async function aV(t){const e=await eV(t),n=jn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:oV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iV,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Fn(t,"network-request-failed"),a=jn().setTimeout(()=>{s(o)},tV.get());function u(){jn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const lV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uV=500,cV=600,hV="_blank",fV="http://localhost";class a1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dV(t,e,n,r=uV,i=cV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},lV),{width:r.toString(),height:i.toString(),top:s,left:o}),c=_t().toLowerCase();n&&(a=pA(c)?hV:n),fA(c)&&(e=e||fV,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[v,E])=>`${m}${v}=${E},`,"");if(QL(c)&&a!=="_self")return pV(e||"",a),new a1(null);const p=window.open(e||"",a,f);X(p,t,"popup-blocked");try{p.focus()}catch{}return new a1(p)}function pV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const mV="__/auth/handler",gV="emulator/auth/handler",yV=encodeURIComponent("fac");async function l1(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:po,eventId:i};if(e instanceof IA){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof vl){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const u=await t._getAppCheckToken(),c=u?`#${yV}=${encodeURIComponent(u)}`:"";return`${vV(t)}?${ul(a).slice(1)}${c}`}function vV({config:t}){return t.emulator?Xg(t,gV):`https://${t.authDomain}/${mV}`}/**
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
 */const Wf="webStorageSupport";class _V{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=RA,this._completeRedirectFn=BM,this._overrideRedirectResult=UM}async _openPopup(e,n,r,i){var s;hr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await l1(e,n,r,Sp(),i);return dV(e,o,ry())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await l1(e,n,r,Sp(),i);return TM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(hr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aV(e),r=new HM(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wf,{type:Wf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wf];o!==void 0&&n(!!o),cr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _A()||dA()||ey()}}const wV=_V;var u1="@firebase/auth",c1="1.7.9";/**
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
 */class EV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function TV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IV(t){Un(new Tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wA(t)},c=new tM(r,i,s,u);return aM(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Un(new Tn("auth-internal",e=>{const n=ty(e.getProvider("auth").getImmediate());return(r=>new EV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(u1,c1,TV(t)),sn(u1,c1,"esm2017")}/**
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
 */const SV=5*60,AV=rI("authIdTokenMaxAge")||SV;let h1=null;const kV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AV)return;const i=n==null?void 0:n.token;h1!==i&&(h1=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function CV(t=rg()){const e=Zi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oM(t,{popupRedirectResolver:wV,persistence:[bM,_M,RA]}),r=rI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=kV(s.toString());gM(n,o,()=>o(n.currentUser)),mM(n,a=>o(a))}}const i=tI("auth");return i&&lM(n,`http://${i}`),n}function RV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}nM({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Fn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",RV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IV("Browser");const xV={apiKey:"AIzaSyB5QFjl6jvIKBCRn12esrOba58STMP9dM0",authDomain:"galeriazdjec-f4180.firebaseapp.com",projectId:"galeriazdjec-f4180",storageBucket:"galeriazdjec-f4180.appspot.com",messagingSenderId:"789024046392",appId:"1:789024046392:web:26d9e3195917ed28e515cd",measurementId:"G-WX9ZBHXLSD"},Th=cI(xV);AO(Th);console.log("Firebase App Initialized:",Th);const Dr=fL(Th);CV(Th);function LA(){const[t,e]=D.useState(""),n=async i=>{try{await Kg(Xa(Dr,"tasks"),{text:i,completed:!1,timestamp:new Date}),console.log("Task added to Firestore!")}catch(s){console.error("Error adding task: ",s)}},r=i=>{i.preventDefault(),t.trim()&&(n(t),e(""))};return C.jsxs("form",{className:"flex flex-col space-y-2  !important",onSubmit:r,children:[C.jsx("input",{type:"text",className:"mt-[1px] border border-gray-300 w-[165px] rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow shadow-sm hover:shadow-md",placeholder:"What is the task today?",value:t,onChange:i=>e(i.target.value)}),C.jsx("button",{type:"submit",className:"px-4 py-0.5 mb-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75",children:"Add Task"})]})}LA.propTypes={};const f1=()=>{};let sy={},MA={},VA=null,FA={mark:f1,measure:f1};try{typeof window<"u"&&(sy=window),typeof document<"u"&&(MA=document),typeof MutationObserver<"u"&&(VA=MutationObserver),typeof performance<"u"&&(FA=performance)}catch{}const{userAgent:d1=""}=sy.navigator||{},ri=sy,Se=MA,p1=VA,uu=FA;ri.document;const gr=!!Se.documentElement&&!!Se.head&&typeof Se.addEventListener=="function"&&typeof Se.createElement=="function",jA=~d1.indexOf("MSIE")||~d1.indexOf("Trident/");var Ce="classic",UA="duotone",qt="sharp",Kt="sharp-duotone",PV=[Ce,UA,qt,Kt],bV={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},m1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},NV=["kit"],OV=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,DV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,LV={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},MV={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},VV={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},FV={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},jV={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},UV={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},$A={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},$V=["solid","regular","light","thin","duotone","brands"],zA=[1,2,3,4,5,6,7,8,9,10],zV=zA.concat([11,12,13,14,15,16,17,18,19,20]),na={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},BV=[...Object.keys(FV),...$V,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",na.GROUP,na.SWAP_OPACITY,na.PRIMARY,na.SECONDARY].concat(zA.map(t=>"".concat(t,"x"))).concat(zV.map(t=>"w-".concat(t))),WV={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},HV={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},qV={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},g1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const fr="___FONT_AWESOME___",Cp=16,BA="fa",WA="svg-inline--fa",Ki="data-fa-i2svg",Rp="data-fa-pseudo-element",KV="data-fa-pseudo-element-pending",oy="data-prefix",ay="data-icon",y1="fontawesome-i2svg",GV="async",QV=["HTML","HEAD","STYLE","SCRIPT"],HA=(()=>{try{return!0}catch{return!1}})(),qA=[Ce,qt,Kt];function wl(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Ce]}})}const KA={...$A};KA[Ce]={...$A[Ce],...m1.kit,...m1["kit-duotone"]};const bi=wl(KA),xp={...UV};xp[Ce]={...xp[Ce],...g1.kit,...g1["kit-duotone"]};const el=wl(xp),Pp={...jV};Pp[Ce]={...Pp[Ce],...qV.kit};const Ni=wl(Pp),bp={...VV};bp[Ce]={...bp[Ce],...HV.kit};const YV=wl(bp),XV=OV,GA="fa-layers-text",JV=DV,ZV={...bV};wl(ZV);const e6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Hf=na,ro=new Set;Object.keys(el[Ce]).map(ro.add.bind(ro));Object.keys(el[qt]).map(ro.add.bind(ro));Object.keys(el[Kt]).map(ro.add.bind(ro));const t6=[...NV,...BV],Ea=ri.FontAwesomeConfig||{};function n6(t){var e=Se.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function r6(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Se&&typeof Se.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=r6(n6(n));i!=null&&(Ea[r]=i)});const QA={styleDefault:"solid",familyDefault:"classic",cssPrefix:BA,replacementClass:WA,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ea.familyPrefix&&(Ea.cssPrefix=Ea.familyPrefix);const io={...QA,...Ea};io.autoReplaceSvg||(io.observeMutations=!1);const q={};Object.keys(QA).forEach(t=>{Object.defineProperty(q,t,{enumerable:!0,set:function(e){io[t]=e,Ta.forEach(n=>n(q))},get:function(){return io[t]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(t){io.cssPrefix=t,Ta.forEach(e=>e(q))},get:function(){return io.cssPrefix}});ri.FontAwesomeConfig=q;const Ta=[];function i6(t){return Ta.push(t),()=>{Ta.splice(Ta.indexOf(t),1)}}const Ir=Cp,bn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function s6(t){if(!t||!gr)return;const e=Se.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Se.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Se.head.insertBefore(e,r),t}const o6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tl(){let t=12,e="";for(;t-- >0;)e+=o6[Math.random()*62|0];return e}function wo(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ly(t){return t.classList?wo(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function YA(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function a6(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(YA(t[n]),'" '),"").trim()}function Ih(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function uy(t){return t.size!==bn.size||t.x!==bn.x||t.y!==bn.y||t.rotate!==bn.rotate||t.flipX||t.flipY}function l6(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function u6(t){let{transform:e,width:n=Cp,height:r=Cp,startCentered:i=!1}=t,s="";return i&&jA?s+="translate(".concat(e.x/Ir-n/2,"em, ").concat(e.y/Ir-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/Ir,"em), calc(-50% + ").concat(e.y/Ir,"em)) "):s+="translate(".concat(e.x/Ir,"em, ").concat(e.y/Ir,"em) "),s+="scale(".concat(e.size/Ir*(e.flipX?-1:1),", ").concat(e.size/Ir*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var c6=`:root, :host {
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
}`;function XA(){const t=BA,e=WA,n=q.cssPrefix,r=q.replacementClass;let i=c6;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let v1=!1;function qf(){q.autoAddCss&&!v1&&(s6(XA()),v1=!0)}var h6={mixout(){return{dom:{css:XA,insertCss:qf}}},hooks(){return{beforeDOMElementCreation(){qf()},beforeI2svg(){qf()}}}};const dr=ri||{};dr[fr]||(dr[fr]={});dr[fr].styles||(dr[fr].styles={});dr[fr].hooks||(dr[fr].hooks={});dr[fr].shims||(dr[fr].shims=[]);var Nn=dr[fr];const JA=[],ZA=function(){Se.removeEventListener("DOMContentLoaded",ZA),Pc=1,JA.map(t=>t())};let Pc=!1;gr&&(Pc=(Se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Se.readyState),Pc||Se.addEventListener("DOMContentLoaded",ZA));function f6(t){gr&&(Pc?setTimeout(t,0):JA.push(t))}function El(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?YA(t):"<".concat(e," ").concat(a6(n),">").concat(r.map(El).join(""),"</").concat(e,">")}function _1(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Kf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,u,c,f;for(r===void 0?(u=1,f=e[s[0]]):(u=0,f=r);u<o;u++)c=s[u],f=a(f,e[c],c,e);return f};function d6(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Np(t){const e=d6(t);return e.length===1?e[0].toString(16):null}function p6(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function w1(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Op(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=w1(e);typeof Nn.hooks.addPack=="function"&&!r?Nn.hooks.addPack(t,w1(e)):Nn.styles[t]={...Nn.styles[t]||{},...i},t==="fas"&&Op("fa",e)}const{styles:wi,shims:m6}=Nn,g6={[Ce]:Object.values(Ni[Ce]),[qt]:Object.values(Ni[qt]),[Kt]:Object.values(Ni[Kt])};let cy=null,ek={},tk={},nk={},rk={},ik={};const y6={[Ce]:Object.keys(bi[Ce]),[qt]:Object.keys(bi[qt]),[Kt]:Object.keys(bi[Kt])};function v6(t){return~t6.indexOf(t)}function _6(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!v6(i)?i:null}const sk=()=>{const t=r=>Kf(wi,(i,s,o)=>(i[o]=Kf(s,r,{}),i),{});ek=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),tk=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),ik=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in wi||q.autoFetchSvg,n=Kf(m6,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});nk=n.names,rk=n.unicodes,cy=Sh(q.styleDefault,{family:q.familyDefault})};i6(t=>{cy=Sh(t.styleDefault,{family:q.familyDefault})});sk();function hy(t,e){return(ek[t]||{})[e]}function w6(t,e){return(tk[t]||{})[e]}function jr(t,e){return(ik[t]||{})[e]}function ok(t){return nk[t]||{prefix:null,iconName:null}}function E6(t){const e=rk[t],n=hy("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ii(){return cy}const fy=()=>({prefix:null,iconName:null,rest:[]});function Sh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ce}=e,r=bi[n][t],i=el[n][t]||el[n][r],s=t in Nn.styles?t:null;return i||s||null}const T6={[Ce]:Object.keys(Ni[Ce]),[qt]:Object.keys(Ni[qt]),[Kt]:Object.keys(Ni[Kt])};function Ah(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Ce]:"".concat(q.cssPrefix,"-").concat(Ce),[qt]:"".concat(q.cssPrefix,"-").concat(qt),[Kt]:"".concat(q.cssPrefix,"-").concat(Kt)};let i=null,s=Ce;const o=PV.filter(u=>u!==UA);o.forEach(u=>{(t.includes(r[u])||t.some(c=>T6[u].includes(c)))&&(s=u)});const a=t.reduce((u,c)=>{const f=_6(q.cssPrefix,c);if(wi[c]?(c=g6[s].includes(c)?YV[s][c]:c,i=c,u.prefix=c):y6[s].indexOf(c)>-1?(i=c,u.prefix=Sh(c,{family:s})):f?u.iconName=f:c!==q.replacementClass&&!o.some(p=>c===r[p])&&u.rest.push(c),!n&&u.prefix&&u.iconName){const p=i==="fa"?ok(u.iconName):{},m=jr(u.prefix,u.iconName);p.prefix&&(i=null),u.iconName=p.iconName||m||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!wi.far&&wi.fas&&!q.autoFetchSvg&&(u.prefix="fas")}return u},fy());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===qt&&(wi.fass||q.autoFetchSvg)&&(a.prefix="fass",a.iconName=jr(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===Kt&&(wi.fasds||q.autoFetchSvg)&&(a.prefix="fasds",a.iconName=jr(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=ii()||"fas"),a}class I6{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},Op(s,i[s]);const o=Ni[Ce][s];o&&Op(o,i[s]),sk()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],u=a[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let E1=[],Rs={};const $s={},S6=Object.keys($s);function A6(t,e){let{mixoutsTo:n}=e;return E1=t,Rs={},Object.keys($s).forEach(r=>{S6.indexOf(r)===-1&&delete $s[r]}),E1.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{Rs[o]||(Rs[o]=[]),Rs[o].push(s[o])})}r.provides&&r.provides($s)}),n}function Dp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(Rs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Gi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Rs[t]||[]).forEach(s=>{s.apply(null,n)})}function si(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return $s[t]?$s[t].apply(null,e):void 0}function Lp(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||ii();if(e)return e=jr(n,e)||e,_1(ak.definitions,n,e)||_1(Nn.styles,n,e)}const ak=new I6,k6=()=>{q.autoReplaceSvg=!1,q.observeMutations=!1,Gi("noAuto")},C6={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return gr?(Gi("beforeI2svg",t),si("pseudoElements2svg",t),si("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,f6(()=>{x6({autoReplaceSvgRoot:e}),Gi("watch",t)})}},R6={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:jr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Sh(t[0]);return{prefix:n,iconName:jr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(q.cssPrefix,"-"))>-1||t.match(XV))){const e=Ah(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||ii(),iconName:jr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=ii();return{prefix:e,iconName:jr(e,t)||t}}}},Xt={noAuto:k6,config:q,dom:C6,parse:R6,library:ak,findIconDefinition:Lp,toHtml:El},x6=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Se}=t;(Object.keys(Nn.styles).length>0||q.autoFetchSvg)&&gr&&q.autoReplaceSvg&&Xt.dom.i2svg({node:e})};function kh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>El(n))}}),Object.defineProperty(t,"node",{get:function(){if(!gr)return;const n=Se.createElement("div");return n.innerHTML=t.html,n.children}}),t}function P6(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(uy(o)&&n.found&&!r.found){const{width:a,height:u}=n,c={x:a/u/2,y:.5};i.style=Ih({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function b6(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(q.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function dy(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:u,titleId:c,extra:f,watchable:p=!1}=t,{width:m,height:v}=n.found?n:e,E=r==="fak",R=[q.replacementClass,i?"".concat(q.cssPrefix,"-").concat(i):""].filter(V=>f.classes.indexOf(V)===-1).filter(V=>V!==""||!!V).concat(f.classes).join(" ");let P={children:[],attributes:{...f.attributes,"data-prefix":r,"data-icon":i,class:R,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(v)}};const T=E&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/v*16*.0625,"em")}:{};p&&(P.attributes[Ki]=""),a&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(c||tl())},children:[a]}),delete P.attributes.title);const w={...P,prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:{...T,...f.styles}},{children:I,attributes:b}=n.found&&e.found?si("generateAbstractMask",w)||{children:[],attributes:{}}:si("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=I,w.attributes=b,o?b6(w):P6(w)}function T1(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,u={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(u[Ki]="");const c={...o.styles};uy(i)&&(c.transform=u6({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const f=Ih(c);f.length>0&&(u.style=f);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function N6(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Ih(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Gf}=Nn;function Mp(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(Hf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Hf.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Hf.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const O6={found:!1,width:512,height:512};function D6(t,e){!HA&&!q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Vp(t,e){let n=e;return e==="fa"&&q.styleDefault!==null&&(e=ii()),new Promise((r,i)=>{if(n==="fa"){const s=ok(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Gf[e]&&Gf[e][t]){const s=Gf[e][t];return r(Mp(s))}D6(t,e),r({...O6,icon:q.showMissingIcons&&t?si("missingIconAbstract")||{}:{}})})}const I1=()=>{},Fp=q.measurePerformance&&uu&&uu.mark&&uu.measure?uu:{mark:I1,measure:I1},ra='FA "6.6.0"',L6=t=>(Fp.mark("".concat(ra," ").concat(t," begins")),()=>lk(t)),lk=t=>{Fp.mark("".concat(ra," ").concat(t," ends")),Fp.measure("".concat(ra," ").concat(t),"".concat(ra," ").concat(t," begins"),"".concat(ra," ").concat(t," ends"))};var py={begin:L6,end:lk};const Du=()=>{};function S1(t){return typeof(t.getAttribute?t.getAttribute(Ki):null)=="string"}function M6(t){const e=t.getAttribute?t.getAttribute(oy):null,n=t.getAttribute?t.getAttribute(ay):null;return e&&n}function V6(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(q.replacementClass)}function F6(){return q.autoReplaceSvg===!0?Lu.replace:Lu[q.autoReplaceSvg]||Lu.replace}function j6(t){return Se.createElementNS("http://www.w3.org/2000/svg",t)}function U6(t){return Se.createElement(t)}function uk(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?j6:U6}=e;if(typeof t=="string")return Se.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(uk(s,{ceFn:n}))}),r}function $6(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Lu={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(uk(n),e)}),e.getAttribute(Ki)===null&&q.keepOriginalSource){let n=Se.createComment($6(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~ly(e).indexOf(q.replacementClass))return Lu.replace(t);const r=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===q.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>El(s)).join(`
`);e.setAttribute(Ki,""),e.innerHTML=i}};function A1(t){t()}function ck(t,e){const n=typeof e=="function"?e:Du;if(t.length===0)n();else{let r=A1;q.mutateApproach===GV&&(r=ri.requestAnimationFrame||A1),r(()=>{const i=F6(),s=py.begin("mutate");t.map(i),s(),n()})}}let my=!1;function hk(){my=!0}function jp(){my=!1}let bc=null;function k1(t){if(!p1||!q.observeMutations)return;const{treeCallback:e=Du,nodeCallback:n=Du,pseudoElementsCallback:r=Du,observeMutationsRoot:i=Se}=t;bc=new p1(s=>{if(my)return;const o=ii();wo(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!S1(a.addedNodes[0])&&(q.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&q.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&S1(a.target)&&~e6.indexOf(a.attributeName))if(a.attributeName==="class"&&M6(a.target)){const{prefix:u,iconName:c}=Ah(ly(a.target));a.target.setAttribute(oy,u||o),c&&a.target.setAttribute(ay,c)}else V6(a.target)&&n(a.target)})}),gr&&bc.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function z6(){bc&&bc.disconnect()}function B6(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function W6(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Ah(ly(t));return i.prefix||(i.prefix=ii()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=w6(i.prefix,t.innerText)||hy(i.prefix,Np(t.innerText))),!i.iconName&&q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function H6(t){const e=wo(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return q.autoA11y&&(n?e["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(r||tl()):(e["aria-hidden"]="true",e.focusable="false")),e}function q6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:bn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function C1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=W6(t),s=H6(t),o=Dp("parseNodeAttributes",{},t);let a=e.styleParser?B6(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:bn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:K6}=Nn;function fk(t){const e=q.autoReplaceSvg==="nest"?C1(t,{styleParser:!1}):C1(t);return~e.extra.classes.indexOf(GA)?si("generateLayersText",t,e):si("generateSvgReplacementMutation",t,e)}let zn=new Set;qA.map(t=>{zn.add("fa-".concat(t))});Object.keys(bi[Ce]).map(zn.add.bind(zn));Object.keys(bi[qt]).map(zn.add.bind(zn));Object.keys(bi[Kt]).map(zn.add.bind(zn));zn=[...zn];function R1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!gr)return Promise.resolve();const n=Se.documentElement.classList,r=f=>n.add("".concat(y1,"-").concat(f)),i=f=>n.remove("".concat(y1,"-").concat(f)),s=q.autoFetchSvg?zn:qA.map(f=>"fa-".concat(f)).concat(Object.keys(K6));s.includes("fa")||s.push("fa");const o=[".".concat(GA,":not([").concat(Ki,"])")].concat(s.map(f=>".".concat(f,":not([").concat(Ki,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=wo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const u=py.begin("onTree"),c=a.reduce((f,p)=>{try{const m=fk(p);m&&f.push(m)}catch(m){HA||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,p)=>{Promise.all(c).then(m=>{ck(m,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),f()})}).catch(m=>{u(),p(m)})})}function G6(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fk(t).then(n=>{n&&ck([n],e)})}function Q6(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Lp(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Lp(i||{})),t(r,{...n,mask:i})}}const Y6=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=bn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:u=[],attributes:c={},styles:f={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:v}=t;return kh({type:"icon",...t},()=>(Gi("beforeDOMElementCreation",{iconDefinition:t,params:e}),q.autoA11y&&(o?c["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(a||tl()):(c["aria-hidden"]="true",c.focusable="false")),dy({icons:{main:Mp(v),mask:i?Mp(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:{...bn,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:f,classes:u}})))};var X6={mixout(){return{icon:Q6(Y6)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=R1,t.nodeCallback=G6,t}}},provides(t){t.i2svg=function(e){const{node:n=Se,callback:r=()=>{}}=e;return R1(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:u,mask:c,maskId:f,extra:p}=n;return new Promise((m,v)=>{Promise.all([Vp(r,o),c.iconName?Vp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[R,P]=E;m([e,dy({icons:{main:R,mask:P},prefix:o,iconName:r,transform:a,symbol:u,maskId:f,title:i,titleId:s,extra:p,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=Ih(o);a.length>0&&(r.style=a);let u;return uy(s)&&(u=si("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},J6={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return kh({type:"layer"},()=>{Gi("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Z6={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return kh({type:"counter",content:t},()=>(Gi("beforeDOMElementCreation",{content:t,params:e}),N6({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(q.cssPrefix,"-layers-counter"),...r]}})))}}}},e3={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=bn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return kh({type:"text",content:t},()=>(Gi("beforeDOMElementCreation",{content:t,params:e}),T1({content:t,transform:{...bn,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(q.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(jA){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,a=c.height/u}return q.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,T1({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const t3=new RegExp('"',"ug"),x1=[1105920,1112319],P1={FontAwesome:{normal:"fas",400:"fas"},...MV,...LV,...WV},Up=Object.keys(P1).reduce((t,e)=>(t[e.toLowerCase()]=P1[e],t),{}),n3=Object.keys(Up).reduce((t,e)=>{const n=Up[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function r3(t){const e=t.replace(t3,""),n=p6(e,0),r=n>=x1[0]&&n<=x1[1],i=e.length===2?e[0]===e[1]:!1;return{value:Np(i?e[0]:e),isSecondary:r||i}}function i3(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Up[n]||{})[i]||n3[n]}function b1(t,e){const n="".concat(KV).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=wo(t.children).filter(m=>m.getAttribute(Rp)===e)[0],a=ri.getComputedStyle(t,e),u=a.getPropertyValue("font-family"),c=u.match(JV),f=a.getPropertyValue("font-weight"),p=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&p!=="none"&&p!==""){const m=a.getPropertyValue("content");let v=i3(u,f);const{value:E,isSecondary:R}=r3(m),P=c[0].startsWith("FontAwesome");let T=hy(v,E),w=T;if(P){const I=E6(E);I.iconName&&I.prefix&&(T=I.iconName,v=I.prefix)}if(T&&!R&&(!o||o.getAttribute(oy)!==v||o.getAttribute(ay)!==w)){t.setAttribute(n,w),o&&t.removeChild(o);const I=q6(),{extra:b}=I;b.attributes[Rp]=e,Vp(T,v).then(V=>{const L=dy({...I,icons:{main:V,mask:fy()},prefix:v,iconName:w,extra:b,watchable:!0}),_=Se.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(_,t.firstChild):t.appendChild(_),_.outerHTML=L.map(y=>El(y)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function s3(t){return Promise.all([b1(t,"::before"),b1(t,"::after")])}function o3(t){return t.parentNode!==document.head&&!~QV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Rp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function N1(t){if(gr)return new Promise((e,n)=>{const r=wo(t.querySelectorAll("*")).filter(o3).map(s3),i=py.begin("searchPseudoElements");hk(),Promise.all(r).then(()=>{i(),jp(),e()}).catch(()=>{i(),jp(),n()})})}var a3={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=N1,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Se}=e;q.searchPseudoElements&&N1(n)}}};let O1=!1;var l3={mixout(){return{dom:{unwatch(){hk(),O1=!0}}}},hooks(){return{bootstrap(){k1(Dp("mutationObserverCallbacks",{}))},noAuto(){z6()},watch(t){const{observeMutationsRoot:e}=t;O1?jp():k1(Dp("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const D1=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var u3={mixout(){return{parse:{transform:t=>D1(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=D1(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(a," ").concat(u," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:f,path:p};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const Qf={x:0,y:0,width:"100%",height:"100%"};function L1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function c3(t){return t.tag==="g"?t.children:[t]}var h3={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Ah(n.split(" ").map(i=>i.trim())):fy();return r.prefix||(r.prefix=ii()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:u,icon:c}=i,{width:f,icon:p}=s,m=l6({transform:a,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:{...Qf,fill:"white"}},E=c.children?{children:c.children.map(L1)}:{},R={tag:"g",attributes:{...m.inner},children:[L1({tag:c.tag,attributes:{...c.attributes,...m.path},...E})]},P={tag:"g",attributes:{...m.outer},children:[R]},T="mask-".concat(o||tl()),w="clip-".concat(o||tl()),I={tag:"mask",attributes:{...Qf,id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[v,P]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:c3(p)},I]};return n.push(b,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(T,")"),...Qf}}),{children:n,attributes:r}}}},f3={provides(t){let e=!1;ri.matchMedia&&(e=ri.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},d3={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},p3=[h6,X6,J6,Z6,e3,a3,l3,u3,h3,f3,d3];A6(p3,{mixoutsTo:Xt});Xt.noAuto;Xt.config;Xt.library;Xt.dom;const $p=Xt.parse;Xt.findIconDefinition;Xt.toHtml;const m3=Xt.icon;Xt.layer;Xt.text;Xt.counter;function M1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Rn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?M1(Object(n),!0).forEach(function(r){xs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Nc(t){"@babel/helpers - typeof";return Nc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nc(t)}function xs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function y3(t,e){if(t==null)return{};var n=g3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function zp(t){return v3(t)||_3(t)||w3(t)||E3()}function v3(t){if(Array.isArray(t))return Bp(t)}function _3(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function w3(t,e){if(t){if(typeof t=="string")return Bp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bp(t,e)}}function Bp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function E3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T3(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,f=t.spinReverse,p=t.pulse,m=t.fixedWidth,v=t.inverse,E=t.border,R=t.listItem,P=t.flip,T=t.size,w=t.rotation,I=t.pull,b=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":v,"fa-border":E,"fa-li":R,"fa-flip":P===!0,"fa-flip-horizontal":P==="horizontal"||P==="both","fa-flip-vertical":P==="vertical"||P==="both"},xs(e,"fa-".concat(T),typeof T<"u"&&T!==null),xs(e,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),xs(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),xs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(b).map(function(V){return b[V]?V:null}).filter(function(V){return V})}function I3(t){return t=t-0,t===t}function dk(t){return I3(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var S3=["style"];function A3(t){return t.charAt(0).toUpperCase()+t.slice(1)}function k3(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=dk(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[A3(i)]=s:e[i]=s,e},{})}function pk(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return pk(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var f=e.attributes[c];switch(c){case"class":u.attrs.className=f,delete e.attributes.class;break;case"style":u.attrs.style=k3(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=f:u.attrs[dk(c)]=f}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=y3(n,S3);return i.attrs.style=Rn(Rn({},i.attrs.style),o),t.apply(void 0,[e.tag,Rn(Rn({},i.attrs),a)].concat(zp(r)))}var mk=!1;try{mk=!0}catch{}function C3(){if(!mk&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function V1(t){if(t&&Nc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if($p.icon)return $p.icon(t);if(t===null)return null;if(t&&Nc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Yf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?xs({},t,e):{}}var F1={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},gy=ke.forwardRef(function(t,e){var n=Rn(Rn({},F1),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,u=n.titleId,c=n.maskId,f=V1(r),p=Yf("classes",[].concat(zp(T3(n)),zp((o||"").split(" ")))),m=Yf("transform",typeof n.transform=="string"?$p.transform(n.transform):n.transform),v=Yf("mask",V1(i)),E=m3(f,Rn(Rn(Rn(Rn({},p),m),v),{},{symbol:s,title:a,titleId:u,maskId:c}));if(!E)return C3("Could not find icon",f),null;var R=E.abstract,P={ref:e};return Object.keys(n).forEach(function(T){F1.hasOwnProperty(T)||(P[T]=n[T])}),R3(R[0],P)});gy.displayName="FontAwesomeIcon";gy.propTypes={beat:Y.bool,border:Y.bool,beatFade:Y.bool,bounce:Y.bool,className:Y.string,fade:Y.bool,flash:Y.bool,mask:Y.oneOfType([Y.object,Y.array,Y.string]),maskId:Y.string,fixedWidth:Y.bool,inverse:Y.bool,flip:Y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.oneOfType([Y.object,Y.array,Y.string]),listItem:Y.bool,pull:Y.oneOf(["right","left"]),pulse:Y.bool,rotation:Y.oneOf([0,90,180,270]),shake:Y.bool,size:Y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.bool,spinPulse:Y.bool,spinReverse:Y.bool,symbol:Y.oneOfType([Y.bool,Y.string]),title:Y.string,titleId:Y.string,transform:Y.oneOfType([Y.string,Y.object]),swapOpacity:Y.bool};var R3=pk.bind(null,ke.createElement);const x3={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]};var gk={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},j1=ke.createContext&&ke.createContext(gk),P3=["attr","size","title"];function b3(t,e){if(t==null)return{};var n=N3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function N3(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Oc(){return Oc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oc.apply(this,arguments)}function U1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Dc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?U1(Object(n),!0).forEach(function(r){O3(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function O3(t,e,n){return e=D3(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function D3(t){var e=L3(t,"string");return typeof e=="symbol"?e:e+""}function L3(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function yk(t){return t&&t.map((e,n)=>ke.createElement(e.tag,Dc({key:n},e.attr),yk(e.child)))}function Ch(t){return e=>ke.createElement(M3,Oc({attr:Dc({},t.attr)},e),yk(t.child))}function M3(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=b3(t,P3),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),ke.createElement("svg",Oc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Dc(Dc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ke.createElement("title",null,s),t.children)};return j1!==void 0?ke.createElement(j1.Consumer,null,n=>e(n)):e(gk)}function V3(t){return Ch({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M380.44 32H64a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32V131.56zM112 176v-64h192v64zm223.91 179.76a80 80 0 1 1-83.66-83.67 80.21 80.21 0 0 1 83.66 83.67z"},child:[]}]})(t)}function F3(t){return Ch({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"},child:[]}]})(t)}const vk=({task:t,toggleComplete:e,deleteTodo:n,editTodo:r})=>{const[i,s]=D.useState(!1),[o,a]=D.useState(t.text),u=()=>{s(!0)},c=()=>{s(!1),r(t.id,o)},f=p=>{p.key==="Enter"&&c()};return C.jsxs("div",{className:`Todo ${t.completed?"completed":""}`,children:[i?C.jsx("input",{type:"text",value:o,onChange:p=>a(p.target.value),onKeyPress:f,className:"edit-input"}):C.jsx("p",{onClick:()=>e(t.id,t.completed),children:t.text}),C.jsxs("div",{className:"icon-container",children:[i?C.jsx(V3,{"aria-label":"Save Task",role:"button",tabIndex:0,onClick:p=>{p.stopPropagation(),c()}}):C.jsx(F3,{"aria-label":"Edit Task",role:"button",tabIndex:0,onClick:p=>{p.stopPropagation(),u()}}),C.jsx(gy,{icon:x3,"aria-label":"Delete Task",role:"button",tabIndex:0,onClick:p=>{p.stopPropagation(),n(t.id)}})]})]})};vk.propTypes={task:Y.shape({id:Y.string.isRequired,text:Y.string.isRequired,completed:Y.bool.isRequired}).isRequired,toggleComplete:Y.func.isRequired,deleteTodo:Y.func.isRequired,editTodo:Y.func.isRequired};const j3=({tasks:t,toggleComplete:e,deleteTodo:n,editTodo:r})=>C.jsx("div",{className:"task-list",children:t.map(i=>C.jsx(vk,{task:i,toggleComplete:e,deleteTodo:n,editTodo:r},i.id))}),_k=({className:t})=>{const[e,n]=D.useState([]);D.useEffect(()=>{const a=Xa(Dr,"tasks"),u=IL(a,SL("timestamp","desc")),c=PL(u,f=>{const p=f.docs.map(m=>({id:m.id,...m.data()}));n(p)});return()=>c()},[]);const r=async a=>{const u={text:a,completed:!1,timestamp:new Date};try{await Kg(Xa(Dr,"tasks"),u),console.log("Task added:",u)}catch(c){console.error("Error adding task:",c)}},i=async(a,u)=>{try{const c=Ru(Dr,"tasks",a);await G_(c,{completed:!u}),console.log("Task updated:",a)}catch(c){console.error("Error updating task:",c)}},s=async a=>{try{const u=Ru(Dr,"tasks",a);await xL(u),console.log("Task deleted:",a)}catch(u){console.error("Error deleting task:",u)}},o=async(a,u)=>{try{const c=Ru(Dr,"tasks",a);await G_(c,{text:u}),console.log("Task edited:",a)}catch(c){console.error("Error editing task:",c)}};return C.jsxs("div",{className:`TodoWrapper ${t}`,children:[C.jsx("h1",{className:"mb-[9px] -mt-0.5",children:"Together We Achieve!"}),C.jsx(LA,{onSubmit:r}),C.jsx(j3,{tasks:e,toggleComplete:i,deleteTodo:s,editTodo:o})]})};_k.propTypes={className:Y.string};const U3=()=>{const[t,e]=D.useState({name:"",email:"",message:""}),n=r=>{const{name:i,value:s}=r.target;e(o=>({...o,[i]:s}))};return C.jsxs("div",{className:"p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto",children:[C.jsx("h2",{className:"text-2xl font-bold text-center mb-4 text-gray-800",children:"Get a free quote"}),C.jsx("p",{className:"text-center text-gray-600 mb-1",children:"For a price quote, simply fill out the following form with details about your query."}),C.jsxs("form",{action:"https://public.herotofu.com/v1/1f80fb50-9353-11ef-840d-9fdbf4f87a8b",method:"POST",acceptCharset:"UTF-8",className:"space-y-4",children:[C.jsxs("div",{children:[C.jsx("label",{htmlFor:"name",className:"block text-xs font-medium text-gray-700 text-left"}),C.jsx("input",{type:"text",name:"name",id:"name",value:t.name,onChange:n,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-500 focus:outline-none text-left",placeholder:"Wpisz swoje imię*"})]}),C.jsxs("div",{children:[C.jsx("label",{htmlFor:"email",className:"block text-xs font-medium text-gray-700 text-left"}),C.jsx("input",{type:"email",name:"email",id:"email",value:t.email,onChange:n,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-500 focus:outline-none",placeholder:"Wpisz swój email*"})]}),C.jsxs("div",{children:[C.jsx("label",{htmlFor:"message",className:"block text-xs font-medium text-gray-700"}),C.jsx("textarea",{name:"message",id:"message",value:t.message,onChange:n,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-500 focus:outline-none",placeholder:"Napisz swoją wiadomość",rows:"4"})]}),C.jsx("button",{type:"submit",className:"w-1/2 bg-blue-600 text-white font-bold py-1 rounded hover:bg-blue-700 transition duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none ml-auto block",children:"Wyślij"}),C.jsx("div",{style:{textIndent:"-99999px",whiteSpace:"nowrap",overflow:"hidden",position:"absolute"},"aria-hidden":"true",children:C.jsx("input",{type:"text",name:"_gotcha",tabIndex:"-1",autoComplete:"off"})})]})]})};function $3({as:t,bsPrefix:e,className:n,...r}){e=wt(e,"col");const i=gT(),s=yT(),o=[],a=[];return i.forEach(u=>{const c=r[u];delete r[u];let f,p,m;typeof c=="object"&&c!=null?{span:f,offset:p,order:m}=c:f=c;const v=u!==s?`-${u}`:"";f&&o.push(f===!0?`${e}${v}`:`${e}${v}-${f}`),m!=null&&a.push(`order${v}-${m}`),p!=null&&a.push(`offset${v}-${p}`)}),[{...r,className:Fe(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const ia=D.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=$3(t);return C.jsx(i,{...r,ref:e,className:Fe(n,!o.length&&s)})});ia.displayName="Col";const wk=D.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=wt(t,"row"),o=gT(),a=yT(),u=`${s}-cols`,c=[];return o.forEach(f=>{const p=r[f];delete r[f];let m;p!=null&&typeof p=="object"?{cols:m}=p:m=p;const v=f!==a?`-${f}`:"";m!=null&&c.push(`${u}${v}-${m}`)}),C.jsx(n,{ref:i,...r,className:Fe(e,s,...c)})});wk.displayName="Row";function z3(){return C.jsxs("footer",{className:"text-center text-lg-start text-white",style:{backgroundColor:""},children:[C.jsxs("section",{className:"d-flex justify-content-between p-4",style:{backgroundColor:"#6351ce"},children:[C.jsx("div",{className:"me-5",children:C.jsx("span",{children:"Get connected with me on social networks:"})}),C.jsxs("div",{children:[C.jsx("a",{href:"#",className:"text-white me-4",children:C.jsx("i",{className:"fab fa-facebook-f"})}),C.jsx("a",{href:"#",className:"text-white me-4",children:C.jsx("i",{className:"fab fa-twitter"})}),C.jsx("a",{href:"#",className:"text-white me-4",children:C.jsx("i",{className:"fab fa-google"})}),C.jsx("a",{href:"#",className:"text-white me-4",children:C.jsx("i",{className:"fab fa-instagram"})}),C.jsx("a",{href:"#",className:"text-white me-4",children:C.jsx("i",{className:"fab fa-linkedin"})}),C.jsx("a",{href:"#",className:"text-white me-4",children:C.jsx("i",{className:"fab fa-github"})})]})]}),C.jsx("section",{children:C.jsx(Km,{className:"text-center text-md-start mt-5",children:C.jsxs(wk,{className:"mt-3",children:[C.jsxs(ia,{md:3,lg:4,xl:3,className:"mx-auto mb-4",children:[C.jsx("h6",{className:"text-uppercase fw-bold",children:"Maciej Liberadzki Gallery"}),C.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),C.jsx("p",{children:"The family gallery is a collection of cherished photos and memories that capture the most important moments of family life."})]}),C.jsxs(ia,{md:2,lg:2,xl:2,className:"mx-auto mb-4",children:[C.jsx("h6",{className:"text-uppercase fw-bold",children:"Technologies used"}),C.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),C.jsx("p",{children:C.jsx("a",{href:"#!",className:"text-white",children:"CSS/Tailwind"})}),C.jsx("p",{children:C.jsx("a",{href:"#!",className:"text-white",children:"React"})}),C.jsx("p",{children:C.jsx("a",{href:"#!",className:"text-white",children:"Firebase"})}),C.jsx("p",{children:C.jsx("a",{href:"#!",className:"text-white",children:"Bootstrap"})}),C.jsx("p",{children:C.jsx("a",{href:"#!",className:"text-white",children:"Node.js"})})]}),C.jsxs(ia,{md:3,lg:2,xl:2,className:"mx-auto mb-4",children:[C.jsx("h6",{className:"text-uppercase fw-bold",children:"Services"}),C.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),C.jsx("p",{children:C.jsx("a",{href:"#!",className:"text-white",children:"Support"})}),C.jsx("p",{children:C.jsx("a",{href:"#!",className:"text-white",children:"Website Maintenence"})}),C.jsx("p",{children:C.jsx("a",{href:"#!",className:"text-white",children:"Responsive Design"})}),C.jsx("p",{children:C.jsx("a",{href:"#!",className:"text-white",children:"Web Hosting Service"})}),C.jsx("p",{children:C.jsx("a",{href:"#!",className:"text-white",children:"Tailor-made solutions"})})]}),C.jsxs(ia,{md:4,lg:3,xl:3,className:"mx-auto mb-md-0 mb-4",children:[C.jsx("h6",{className:"text-uppercase fw-bold",children:"Contact"}),C.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),C.jsxs("p",{children:[C.jsx("i",{className:"fas fa-home mr-3"})," Srebrzynska Park, Lodz, Poland"]}),C.jsxs("p",{children:[C.jsx("i",{className:"fas fa-envelope mr-3"})," LoremIpsum"]}),C.jsxs("p",{children:[C.jsx("i",{className:"fas fa-phone mr-3"})," + 01 234 567 88"]}),C.jsx("p",{children:C.jsx("i",{className:""})})]})]})})}),C.jsxs("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["© 2024 Designed by me",C.jsx("a",{className:"text-white",href:""})]})]})}function B3(){const[t,e]=D.useState(""),[n,r]=D.useState(window.innerWidth<=992);D.useEffect(()=>{const s=()=>{r(window.innerWidth<=992)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const i=s=>{if(s.preventDefault(),t.trim()==="")return;const o="https://www.google.com/search?q="+encodeURIComponent(t);window.open(o,"_blank"),e("")};return C.jsx("div",{className:"mx-auto",style:{width:"140px",marginBottom:n?"40px":"0px"},children:C.jsx("form",{onSubmit:i,children:C.jsx("input",{type:"text",placeholder:"Search anything...",className:"form-control","aria-label":"Search",value:t,onChange:s=>e(s.target.value),style:{height:"25px"}})})})}var Ee="-ms-",Ia="-moz-",fe="-webkit-",Ek="comm",Rh="rule",yy="decl",W3="@import",Tk="@keyframes",H3="@layer",Ik=Math.abs,vy=String.fromCharCode,Wp=Object.assign;function q3(t,e){return Ye(t,0)^45?(((e<<2^Ye(t,0))<<2^Ye(t,1))<<2^Ye(t,2))<<2^Ye(t,3):0}function Sk(t){return t.trim()}function Kn(t,e){return(t=e.exec(t))?t[0]:t}function ne(t,e,n){return t.replace(e,n)}function Mu(t,e,n){return t.indexOf(e,n)}function Ye(t,e){return t.charCodeAt(e)|0}function so(t,e,n){return t.slice(e,n)}function xn(t){return t.length}function Ak(t){return t.length}function sa(t,e){return e.push(t),t}function K3(t,e){return t.map(e).join("")}function $1(t,e){return t.filter(function(n){return!Kn(n,e)})}var xh=1,oo=1,kk=0,ln=0,Ue=0,Eo="";function Ph(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:xh,column:oo,length:o,return:"",siblings:a}}function Sr(t,e){return Wp(Ph("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function cs(t){for(;t.root;)t=Sr(t.root,{children:[t]});sa(t,t.siblings)}function G3(){return Ue}function Q3(){return Ue=ln>0?Ye(Eo,--ln):0,oo--,Ue===10&&(oo=1,xh--),Ue}function wn(){return Ue=ln<kk?Ye(Eo,ln++):0,oo++,Ue===10&&(oo=1,xh++),Ue}function Oi(){return Ye(Eo,ln)}function Vu(){return ln}function bh(t,e){return so(Eo,t,e)}function Hp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Y3(t){return xh=oo=1,kk=xn(Eo=t),ln=0,[]}function X3(t){return Eo="",t}function Xf(t){return Sk(bh(ln-1,qp(t===91?t+2:t===40?t+1:t)))}function J3(t){for(;(Ue=Oi())&&Ue<33;)wn();return Hp(t)>2||Hp(Ue)>3?"":" "}function Z3(t,e){for(;--e&&wn()&&!(Ue<48||Ue>102||Ue>57&&Ue<65||Ue>70&&Ue<97););return bh(t,Vu()+(e<6&&Oi()==32&&wn()==32))}function qp(t){for(;wn();)switch(Ue){case t:return ln;case 34:case 39:t!==34&&t!==39&&qp(Ue);break;case 40:t===41&&qp(t);break;case 92:wn();break}return ln}function eF(t,e){for(;wn()&&t+Ue!==57;)if(t+Ue===84&&Oi()===47)break;return"/*"+bh(e,ln-1)+"*"+vy(t===47?t:wn())}function tF(t){for(;!Hp(Oi());)wn();return bh(t,ln)}function nF(t){return X3(Fu("",null,null,null,[""],t=Y3(t),0,[0],t))}function Fu(t,e,n,r,i,s,o,a,u){for(var c=0,f=0,p=o,m=0,v=0,E=0,R=1,P=1,T=1,w=0,I="",b=i,V=s,L=r,_=I;P;)switch(E=w,w=wn()){case 40:if(E!=108&&Ye(_,p-1)==58){Mu(_+=ne(Xf(w),"&","&\f"),"&\f",Ik(c?a[c-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:_+=Xf(w);break;case 9:case 10:case 13:case 32:_+=J3(E);break;case 92:_+=Z3(Vu()-1,7);continue;case 47:switch(Oi()){case 42:case 47:sa(rF(eF(wn(),Vu()),e,n,u),u);break;default:_+="/"}break;case 123*R:a[c++]=xn(_)*T;case 125*R:case 59:case 0:switch(w){case 0:case 125:P=0;case 59+f:T==-1&&(_=ne(_,/\f/g,"")),v>0&&xn(_)-p&&sa(v>32?B1(_+";",r,n,p-1,u):B1(ne(_," ","")+";",r,n,p-2,u),u);break;case 59:_+=";";default:if(sa(L=z1(_,e,n,c,f,i,a,I,b=[],V=[],p,s),s),w===123)if(f===0)Fu(_,e,L,L,b,s,p,a,V);else switch(m===99&&Ye(_,3)===110?100:m){case 100:case 108:case 109:case 115:Fu(t,L,L,r&&sa(z1(t,L,L,0,0,i,a,I,i,b=[],p,V),V),i,V,p,a,r?b:V);break;default:Fu(_,L,L,L,[""],V,0,a,V)}}c=f=v=0,R=T=1,I=_="",p=o;break;case 58:p=1+xn(_),v=E;default:if(R<1){if(w==123)--R;else if(w==125&&R++==0&&Q3()==125)continue}switch(_+=vy(w),w*R){case 38:T=f>0?1:(_+="\f",-1);break;case 44:a[c++]=(xn(_)-1)*T,T=1;break;case 64:Oi()===45&&(_+=Xf(wn())),m=Oi(),f=p=xn(I=_+=tF(Vu())),w++;break;case 45:E===45&&xn(_)==2&&(R=0)}}return s}function z1(t,e,n,r,i,s,o,a,u,c,f,p){for(var m=i-1,v=i===0?s:[""],E=Ak(v),R=0,P=0,T=0;R<r;++R)for(var w=0,I=so(t,m+1,m=Ik(P=o[R])),b=t;w<E;++w)(b=Sk(P>0?v[w]+" "+I:ne(I,/&\f/g,v[w])))&&(u[T++]=b);return Ph(t,e,n,i===0?Rh:a,u,c,f,p)}function rF(t,e,n,r){return Ph(t,e,n,Ek,vy(G3()),so(t,2,-2),0,r)}function B1(t,e,n,r,i){return Ph(t,e,n,yy,so(t,0,r),so(t,r+1,-1),r,i)}function Ck(t,e,n){switch(q3(t,e)){case 5103:return fe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return fe+t+t;case 4789:return Ia+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+t+Ia+t+Ee+t+t;case 5936:switch(Ye(t,e+11)){case 114:return fe+t+Ee+ne(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return fe+t+Ee+ne(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return fe+t+Ee+ne(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return fe+t+Ee+t+t;case 6165:return fe+t+Ee+"flex-"+t+t;case 5187:return fe+t+ne(t,/(\w+).+(:[^]+)/,fe+"box-$1$2"+Ee+"flex-$1$2")+t;case 5443:return fe+t+Ee+"flex-item-"+ne(t,/flex-|-self/g,"")+(Kn(t,/flex-|baseline/)?"":Ee+"grid-row-"+ne(t,/flex-|-self/g,""))+t;case 4675:return fe+t+Ee+"flex-line-pack"+ne(t,/align-content|flex-|-self/g,"")+t;case 5548:return fe+t+Ee+ne(t,"shrink","negative")+t;case 5292:return fe+t+Ee+ne(t,"basis","preferred-size")+t;case 6060:return fe+"box-"+ne(t,"-grow","")+fe+t+Ee+ne(t,"grow","positive")+t;case 4554:return fe+ne(t,/([^-])(transform)/g,"$1"+fe+"$2")+t;case 6187:return ne(ne(ne(t,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),t,"")+t;case 5495:case 3959:return ne(t,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return ne(ne(t,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+Ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+fe+t+t;case 4200:if(!Kn(t,/flex-|baseline/))return Ee+"grid-column-align"+so(t,e)+t;break;case 2592:case 3360:return Ee+ne(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Kn(r.props,/grid-\w+-end/)})?~Mu(t+(n=n[e].value),"span",0)?t:Ee+ne(t,"-start","")+t+Ee+"grid-row-span:"+(~Mu(n,"span",0)?Kn(n,/\d+/):+Kn(n,/\d+/)-+Kn(t,/\d+/))+";":Ee+ne(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Kn(r.props,/grid-\w+-start/)})?t:Ee+ne(ne(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ne(t,/(.+)-inline(.+)/,fe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(t)-1-e>6)switch(Ye(t,e+1)){case 109:if(Ye(t,e+4)!==45)break;case 102:return ne(t,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+Ia+(Ye(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Mu(t,"stretch",0)?Ck(ne(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ne(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,u,c){return Ee+i+":"+s+c+(o?Ee+i+"-span:"+(a?u:+u-+s)+c:"")+t});case 4949:if(Ye(t,e+6)===121)return ne(t,":",":"+fe)+t;break;case 6444:switch(Ye(t,Ye(t,14)===45?18:11)){case 120:return ne(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(Ye(t,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+Ee+"$2box$3")+t;case 100:return ne(t,":",":"+Ee)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(t,"scroll-","scroll-snap-")+t}return t}function Lc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function iF(t,e,n,r){switch(t.type){case H3:if(t.children.length)break;case W3:case yy:return t.return=t.return||t.value;case Ek:return"";case Tk:return t.return=t.value+"{"+Lc(t.children,r)+"}";case Rh:if(!xn(t.value=t.props.join(",")))return""}return xn(n=Lc(t.children,r))?t.return=t.value+"{"+n+"}":""}function sF(t){var e=Ak(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function oF(t){return function(e){e.root||(e=e.return)&&t(e)}}function aF(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case yy:t.return=Ck(t.value,t.length,n);return;case Tk:return Lc([Sr(t,{value:ne(t.value,"@","@"+fe)})],r);case Rh:if(t.length)return K3(n=t.props,function(i){switch(Kn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cs(Sr(t,{props:[ne(i,/:(read-\w+)/,":"+Ia+"$1")]})),cs(Sr(t,{props:[i]})),Wp(t,{props:$1(n,r)});break;case"::placeholder":cs(Sr(t,{props:[ne(i,/:(plac\w+)/,":"+fe+"input-$1")]})),cs(Sr(t,{props:[ne(i,/:(plac\w+)/,":"+Ia+"$1")]})),cs(Sr(t,{props:[ne(i,/:(plac\w+)/,Ee+"input-$1")]})),cs(Sr(t,{props:[i]})),Wp(t,{props:$1(n,r)});break}return""})}}var lF={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ut={},ao=typeof process<"u"&&Ut!==void 0&&(Ut.REACT_APP_SC_ATTR||Ut.SC_ATTR)||"data-styled",Rk="active",xk="data-styled-version",Nh="6.1.13",_y=`/*!sc*/
`,Mc=typeof window<"u"&&"HTMLElement"in window,uF=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ut!==void 0&&Ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ut.REACT_APP_SC_DISABLE_SPEEDY!==""?Ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ut.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ut!==void 0&&Ut.SC_DISABLE_SPEEDY!==void 0&&Ut.SC_DISABLE_SPEEDY!==""&&Ut.SC_DISABLE_SPEEDY!=="false"&&Ut.SC_DISABLE_SPEEDY),Oh=Object.freeze([]),lo=Object.freeze({});function cF(t,e,n){return n===void 0&&(n=lo),t.theme!==n.theme&&t.theme||e||n.theme}var Pk=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hF=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,fF=/(^-|-$)/g;function W1(t){return t.replace(hF,"-").replace(fF,"")}var dF=/(a)(d)/gi,cu=52,H1=function(t){return String.fromCharCode(t+(t>25?39:97))};function Kp(t){var e,n="";for(e=Math.abs(t);e>cu;e=e/cu|0)n=H1(e%cu)+n;return(H1(e%cu)+n).replace(dF,"$1-$2")}var Jf,bk=5381,Ps=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Nk=function(t){return Ps(bk,t)};function Ok(t){return Kp(Nk(t)>>>0)}function pF(t){return t.displayName||t.name||"Component"}function Zf(t){return typeof t=="string"&&!0}var Dk=typeof Symbol=="function"&&Symbol.for,Lk=Dk?Symbol.for("react.memo"):60115,mF=Dk?Symbol.for("react.forward_ref"):60112,gF={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yF={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vF=((Jf={})[mF]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jf[Lk]=Mk,Jf);function q1(t){return("type"in(e=t)&&e.type.$$typeof)===Lk?Mk:"$$typeof"in t?vF[t.$$typeof]:gF;var e}var _F=Object.defineProperty,wF=Object.getOwnPropertyNames,K1=Object.getOwnPropertySymbols,EF=Object.getOwnPropertyDescriptor,TF=Object.getPrototypeOf,G1=Object.prototype;function Vk(t,e,n){if(typeof e!="string"){if(G1){var r=TF(e);r&&r!==G1&&Vk(t,r,n)}var i=wF(e);K1&&(i=i.concat(K1(e)));for(var s=q1(t),o=q1(e),a=0;a<i.length;++a){var u=i[a];if(!(u in yF||n&&n[u]||o&&u in o||s&&u in s)){var c=EF(e,u);try{_F(t,u,c)}catch{}}}}return t}function uo(t){return typeof t=="function"}function wy(t){return typeof t=="object"&&"styledComponentId"in t}function ki(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Gp(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function nl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Qp(t,e,n){if(n===void 0&&(n=!1),!n&&!nl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Qp(t[r],e[r]);else if(nl(e))for(var r in e)t[r]=Qp(t[r],e[r]);return t}function Ey(t,e){Object.defineProperty(t,"toString",{value:e})}function Tl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var IF=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Tl(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(_y);return n},t}(),ju=new Map,Vc=new Map,Uu=1,hu=function(t){if(ju.has(t))return ju.get(t);for(;Vc.has(Uu);)Uu++;var e=Uu++;return ju.set(t,e),Vc.set(e,t),e},SF=function(t,e){Uu=e+1,ju.set(t,e),Vc.set(e,t)},AF="style[".concat(ao,"][").concat(xk,'="').concat(Nh,'"]'),kF=new RegExp("^".concat(ao,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),CF=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},RF=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(_y),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var u=a.match(kF);if(u){var c=0|parseInt(u[1],10),f=u[2];c!==0&&(SF(f,c),CF(t,f,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Q1=function(t){for(var e=document.querySelectorAll(AF),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(ao)!==Rk&&(RF(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function xF(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Fk=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(ao,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ao,Rk),r.setAttribute(xk,Nh);var o=xF();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},PF=function(){function t(e){this.element=Fk(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Tl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),bF=function(){function t(e){this.element=Fk(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),NF=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Y1=Mc,OF={isServer:!Mc,useCSSOMInjection:!uF},jk=function(){function t(e,n,r){e===void 0&&(e=lo),n===void 0&&(n={});var i=this;this.options=Nt(Nt({},OF),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Mc&&Y1&&(Y1=!1,Q1(this)),Ey(this,function(){return function(s){for(var o=s.getTag(),a=o.length,u="",c=function(p){var m=function(T){return Vc.get(T)}(p);if(m===void 0)return"continue";var v=s.names.get(m),E=o.getGroup(p);if(v===void 0||!v.size||E.length===0)return"continue";var R="".concat(ao,".g").concat(p,'[id="').concat(m,'"]'),P="";v!==void 0&&v.forEach(function(T){T.length>0&&(P+="".concat(T,","))}),u+="".concat(E).concat(R,'{content:"').concat(P,'"}').concat(_y)},f=0;f<a;f++)c(f);return u}(i)})}return t.registerId=function(e){return hu(e)},t.prototype.rehydrate=function(){!this.server&&Mc&&Q1(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Nt(Nt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new NF(i):r?new PF(i):new bF(i)}(this.options),new IF(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(hu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(hu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(hu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),DF=/&/g,LF=/^\s*\/\/.*$/gm;function Uk(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Uk(n.children,e)),n})}function MF(t){var e,n,r,i=lo,s=i.options,o=s===void 0?lo:s,a=i.plugins,u=a===void 0?Oh:a,c=function(m,v,E){return E.startsWith(n)&&E.endsWith(n)&&E.replaceAll(n,"").length>0?".".concat(e):m},f=u.slice();f.push(function(m){m.type===Rh&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(DF,n).replace(r,c))}),o.prefix&&f.push(aF),f.push(iF);var p=function(m,v,E,R){v===void 0&&(v=""),E===void 0&&(E=""),R===void 0&&(R="&"),e=R,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var P=m.replace(LF,""),T=nF(E||v?"".concat(E," ").concat(v," { ").concat(P," }"):P);o.namespace&&(T=Uk(T,o.namespace));var w=[];return Lc(T,sF(f.concat(oF(function(I){return w.push(I)})))),w};return p.hash=u.length?u.reduce(function(m,v){return v.name||Tl(15),Ps(m,v.name)},bk).toString():"",p}var VF=new jk,Yp=MF(),$k=ke.createContext({shouldForwardProp:void 0,styleSheet:VF,stylis:Yp});$k.Consumer;ke.createContext(void 0);function X1(){return D.useContext($k)}var zk=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Yp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Ey(this,function(){throw Tl(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Yp),this.name+e.hash},t}(),FF=function(t){return t>="A"&&t<="Z"};function J1(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;FF(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Bk=function(t){return t==null||t===!1||t===""},Wk=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!Bk(s)&&(Array.isArray(s)&&s.isCss||uo(s)?r.push("".concat(J1(i),":"),s,";"):nl(s)?r.push.apply(r,Ja(Ja(["".concat(i," {")],Wk(s),!1),["}"],!1)):r.push("".concat(J1(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in lF||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Di(t,e,n,r){if(Bk(t))return[];if(wy(t))return[".".concat(t.styledComponentId)];if(uo(t)){if(!uo(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Di(i,e,n,r)}var s;return t instanceof zk?n?(t.inject(n,r),[t.getName(r)]):[t]:nl(t)?Wk(t):Array.isArray(t)?Array.prototype.concat.apply(Oh,t.map(function(o){return Di(o,e,n,r)})):[t.toString()]}function jF(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(uo(n)&&!wy(n))return!1}return!0}var UF=Nk(Nh),$F=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&jF(e),this.componentId=n,this.baseHash=Ps(UF,n),this.baseStyle=r,jk.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ki(i,this.staticRulesId);else{var s=Gp(Di(this.rules,e,n,r)),o=Kp(Ps(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ki(i,o),this.staticRulesId=o}else{for(var u=Ps(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var p=this.rules[f];if(typeof p=="string")c+=p;else if(p){var m=Gp(Di(p,e,n,r));u=Ps(u,m+f),c+=m}}if(c){var v=Kp(u>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),i=ki(i,v)}}return i},t}(),Hk=ke.createContext(void 0);Hk.Consumer;var ed={};function zF(t,e,n){var r=wy(t),i=t,s=!Zf(t),o=e.attrs,a=o===void 0?Oh:o,u=e.componentId,c=u===void 0?function(b,V){var L=typeof b!="string"?"sc":W1(b);ed[L]=(ed[L]||0)+1;var _="".concat(L,"-").concat(Ok(Nh+L+ed[L]));return V?"".concat(V,"-").concat(_):_}(e.displayName,e.parentComponentId):u,f=e.displayName,p=f===void 0?function(b){return Zf(b)?"styled.".concat(b):"Styled(".concat(pF(b),")")}(t):f,m=e.displayName&&e.componentId?"".concat(W1(e.displayName),"-").concat(e.componentId):e.componentId||c,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,E=e.shouldForwardProp;if(r&&i.shouldForwardProp){var R=i.shouldForwardProp;if(e.shouldForwardProp){var P=e.shouldForwardProp;E=function(b,V){return R(b,V)&&P(b,V)}}else E=R}var T=new $F(n,m,r?i.componentStyle:void 0);function w(b,V){return function(L,_,y){var S=L.attrs,k=L.componentStyle,x=L.defaultProps,N=L.foldedComponentIds,A=L.styledComponentId,Be=L.target,Rt=ke.useContext(Hk),at=X1(),De=L.shouldForwardProp||at.shouldForwardProp,U=cF(_,Rt,x)||lo,K=function(de,Le,lt){for(var Bn,Ft=Nt(Nt({},Le),{className:void 0,theme:lt}),Jt=0;Jt<de.length;Jt+=1){var un=uo(Bn=de[Jt])?Bn(Ft):Bn;for(var Et in un)Ft[Et]=Et==="className"?ki(Ft[Et],un[Et]):Et==="style"?Nt(Nt({},Ft[Et]),un[Et]):un[Et]}return Le.className&&(Ft.className=ki(Ft.className,Le.className)),Ft}(S,_,U),Q=K.as||Be,se={};for(var te in K)K[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&K.theme===U||(te==="forwardedAs"?se.as=K.forwardedAs:De&&!De(te,Q)||(se[te]=K[te]));var he=function(de,Le){var lt=X1(),Bn=de.generateAndInjectStyles(Le,lt.styleSheet,lt.stylis);return Bn}(k,K),We=ki(N,A);return he&&(We+=" "+he),K.className&&(We+=" "+K.className),se[Zf(Q)&&!Pk.has(Q)?"class":"className"]=We,se.ref=y,D.createElement(Q,se)}(I,b,V)}w.displayName=p;var I=ke.forwardRef(w);return I.attrs=v,I.componentStyle=T,I.displayName=p,I.shouldForwardProp=E,I.foldedComponentIds=r?ki(i.foldedComponentIds,i.styledComponentId):"",I.styledComponentId=m,I.target=r?i.target:t,Object.defineProperty(I,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(V){for(var L=[],_=1;_<arguments.length;_++)L[_-1]=arguments[_];for(var y=0,S=L;y<S.length;y++)Qp(V,S[y],!0);return V}({},i.defaultProps,b):b}}),Ey(I,function(){return".".concat(I.styledComponentId)}),s&&Vk(I,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),I}function Z1(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var ew=function(t){return Object.assign(t,{isCss:!0})};function qk(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(uo(t)||nl(t))return ew(Di(Z1(Oh,Ja([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Di(r):ew(Di(Z1(r,e)))}function Xp(t,e,n){if(n===void 0&&(n=lo),!e)throw Tl(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,qk.apply(void 0,Ja([i],s,!1)))};return r.attrs=function(i){return Xp(t,e,Nt(Nt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Xp(t,e,Nt(Nt({},n),i))},r}var Kk=function(t){return Xp(zF,t)},ns=Kk;Pk.forEach(function(t){ns[t]=Kk(t)});function Ty(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Gp(qk.apply(void 0,Ja([t],e,!1))),i=Ok(r);return new zk(i,r)}const BF="#4fa94d",WF={"aria-busy":!0,role:"progressbar"},HF=ns.div`
  display: ${t=>t.$visible?"flex":"none"};
`,qF="http://www.w3.org/2000/svg",KF=({height:t=80,width:e=80,color:n=BF,ariaLabel:r="circles-loading",wrapperStyle:i,wrapperClass:s,visible:o=!0})=>C.jsx(HF,{style:i,$visible:o,className:s,"aria-label":r,"data-testid":"circles-loading",...WF,children:C.jsxs("svg",{width:e,height:t,viewBox:"0 0 135 135",xmlns:qF,fill:n,"data-testid":"circles-svg",children:[C.jsx("title",{children:"circles-loading"}),C.jsx("desc",{children:"Animated representation of circles"}),C.jsx("path",{d:"M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z",children:C.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"-360 67 67",dur:"2.5s",repeatCount:"indefinite"})}),C.jsx("path",{d:"M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z",children:C.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"360 67 67",dur:"8s",repeatCount:"indefinite"})})]})}),fn=242.776657104492,GF=1.6,QF=Ty`
12.5% {
  stroke-dasharray: ${fn*.14}px, ${fn}px;
  stroke-dashoffset: -${fn*.11}px;
}
43.75% {
  stroke-dasharray: ${fn*.35}px, ${fn}px;
  stroke-dashoffset: -${fn*.35}px;
}
100% {
  stroke-dasharray: ${fn*.01}px, ${fn}px;
  stroke-dashoffset: -${fn*.99}px;
}
`;ns.path`
  stroke-dasharray: ${fn*.01}px, ${fn};
  stroke-dashoffset: 0;
  animation: ${QF} ${GF}s linear infinite;
`;const YF=Ty`
to {
   transform: rotate(360deg);
 }
`;ns.svg`
  animation: ${YF} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;ns.polyline`
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
`;const XF=Ty`
to {
   stroke-dashoffset: 136;
 }
`;ns.polygon`
  stroke-dasharray: 17;
  animation: ${XF} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;ns.svg`
  transform-origin: 50% 65%;
`;function JF(t){return Ch({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(t)}function ZF(t){return Ch({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(t)}function e5(){const[t,e]=D.useState([]),[n,r]=D.useState(""),[i,s]=D.useState(""),[o,a]=D.useState(!1);D.useEffect(()=>{(async()=>{try{const v=(await RL(Xa(Dr,"posts"))).docs.map(E=>({id:E.id,...E.data()}));e(v)}catch(m){console.error("Błąd podczas pobierania danych:",m)}})()},[]);const u=p=>{var m;try{if(p.includes("youtu.be"))return`https://img.youtube.com/vi/${(m=p.split("youtu.be/")[1])==null?void 0:m.split("?")[0]}/hqdefault.jpg`;if(p.includes("youtube.com")){const E=new URL(p).searchParams.get("v");if(E)return`https://img.youtube.com/vi/${E}/hqdefault.jpg`}return null}catch(v){return console.error("Błąd podczas generowania miniaturki YouTube:",v),null}},c=async p=>{if(p.includes("youtube.com")||p.includes("youtu.be"))return u(p);try{const v=await(await fetch(`https://opengraph.io/api/1.1/site/${encodeURIComponent(p)}?app_id=74430628-2023-4e90-9d59-a4ff6779d48e`)).json();return console.log("OpenGraph response:",v),v.hybridGraph.image||null}catch(m){return console.error("Błąd podczas pobierania miniaturki:",m),null}},f=async p=>{if(p.preventDefault(),!n||!i){alert("Proszę wypełnić oba pola!");return}a(!0);try{const m=await c(i),v=await Kg(Xa(Dr,"posts"),{title:n,link:i,thumbnail:m});e(E=>[...E,{id:v.id,title:n,link:i,thumbnail:m}]),r(""),s(""),alert("Post został dodany!")}catch(m){console.error("Błąd podczas dodawania posta:",m)}finally{a(!1)}};return C.jsxs("div",{className:"recent-posts",children:[C.jsx("h3",{children:"Dodaj nowy post"}),C.jsxs("form",{onSubmit:f,children:[C.jsx("input",{type:"text",placeholder:"Tytuł posta",value:n,onChange:p=>r(p.target.value),required:!0}),C.jsx("input",{type:"url",placeholder:"Link do posta",value:i,onChange:p=>s(p.target.value),required:!0}),C.jsx("button",{type:"submit",disabled:o,children:o?"Dodawanie...":"Dodaj post"})]}),C.jsx("h3",{children:"Ostatnie posty"}),C.jsx("ul",{children:t.map(p=>C.jsxs("li",{style:{display:"flex",alignItems:"center",marginBottom:"15px"},children:[p.thumbnail&&C.jsx("img",{src:p.thumbnail,alt:p.title,style:{width:"100px",height:"100px",objectFit:"cover",marginRight:"10px",borderRadius:"8px"}}),C.jsx("a",{href:p.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"black"},children:C.jsx("h4",{style:{margin:0},children:p.title})})]},p.id))})]})}const t5="/gallery/assets/video/api.json";function n5(){var m,v;const[t,e]=D.useState([]),[n,r]=D.useState(0),[i,s]=D.useState(!1),o=D.useRef(),[a,u]=D.useState(window.innerWidth<=992),[c,f]=D.useState(!0);D.useEffect(()=>{console.log("Fetching videos from API..."),fetch(t5).then(E=>E.json()).then(E=>e(E)).catch(E=>console.error("Failed to fetch videos:",E)).finally(()=>f(!1))},[]),D.useEffect(()=>{var E;t.length>0&&o.current&&(o.current.src=(E=t[n])==null?void 0:E.video,o.current.load(),s(!1))},[t,n]),D.useEffect(()=>{const E=()=>{u(window.innerWidth<=992)};return window.addEventListener("resize",E),()=>{window.removeEventListener("resize",E)}},[]);const p=()=>{s(E=>!E)};return t.length<1?C.jsx("div",{children:"Loading..."}):c?C.jsx("div",{className:"flex justify-center items-center min-h-screen",style:{backgroundColor:"black",color:"white"},children:C.jsx(KF,{color:"#00BFFF",height:80,width:80})}):C.jsx(C.Fragment,{children:C.jsxs("div",{style:{backgroundImage:'url("https://raw.githubusercontent.com/wolczan/gallery/main/public/back.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",minHeight:"100vh",width:"100%",backgroundAttachment:"fixed"},children:[C.jsx(ru,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0,className:"navbar-custom",style:{height:"40px",backgroundColor:"black"},children:C.jsxs(Km,{className:"justify-content-between d-flex custom-margin-top",style:{alignItems:"baseline",backgroundColor:""},children:[C.jsxs(ru.Brand,{href:"#home",style:{fontSize:"17px"},children:[C.jsx("img",{src:"https://raw.githubusercontent.com/wolczan/gallery/refs/heads/main/napis.webp",width:"35",height:"50",className:"d-inline-block",alt:""}),"Gallery"]}),C.jsx(B3,{}),C.jsx(ru.Toggle,{"aria-controls":"responsive-navbar-nav",style:{paddingBottom:"0px",alignItems:"center",backgroundColor:"black"}}),C.jsx(ru.Collapse,{id:"responsive-navbar-nav",style:{backgroundColor:"black",opacity:1,padding:"10px"},children:C.jsxs(kn,{className:"mx-auto",children:[C.jsx(kn.Link,{href:"#home",className:"nav-link-custom",children:"Home"}),C.jsx(kn.Link,{href:"#about",className:"nav-link-custom",children:"About"}),C.jsx(kn.Link,{href:"#pricing",className:"nav-link-custom",children:"Films"}),C.jsx(kn.Link,{href:"#features",className:"nav-link-custom",children:"Images"}),C.jsx(kn.Link,{href:"#pricing",className:"nav-link-custom",children:"My List"}),C.jsx(kn.Link,{href:"#pricing",className:"nav-link-custom",children:"Latest"}),C.jsx(kn.Link,{href:"#pricing",className:"nav-link-custom",children:"Contact"}),C.jsx(kn.Link,{href:"#signin",className:"nav-link-custom btn btn-custom",children:"Sign In"}),C.jsx(kn.Link,{href:"#signup",className:"nav-link-custom btn btn-custom",children:"Sign Up"})]})})]})}),C.jsx("div",{className:"min-h-screen text-white flex items-center justify-center border-2 ",children:C.jsxs("section",{className:"flex flex-row items-center space-x-2 p-1 w-full mt-4 mb-4 ",style:{justifyContent:"space-evenly"},children:[C.jsx(_k,{className:"flex-shrink-0 w-[25%] sm:w-[30%] lg:w-[25%] p-1 rounded-lg todo-wrapper-shadow relative z-10"}),C.jsx("div",{className:"flex-shrink-0 w-[15%] sm:w-[20%] lg:w-[11%] flex items-center justify-center border-1 rounded-lg shadow-2xl shadow-white bg-black",children:i&&t.length>0?C.jsx("video",{ref:o,src:(m=t[n])==null?void 0:m.video,className:"object-cover rounded-lg w-full h-full border-1",controls:!0,autoPlay:!0,style:{width:"150px",height:"260px"}}):C.jsx("img",{src:(v=t[n])==null?void 0:v.cover,alt:"Video cover",style:{width:"150px",height:"260px"},className:"hover-enlarge object-cover rounded-lg w-full h-full"})})]})}),C.jsxs("div",{className:"relative z-10 p-1 rounded bg-black text-white border-1 flex flex-col justify-between",style:{minHeight:"120px",maxWidth:"400px",width:"100%",margin:"auto",boxShadow:"10px 15px 80px -5px rgba(0, 0, 0, 0.7)"},children:[C.jsxs("div",{children:[C.jsx("h2",{style:{fontSize:"1rem",fontWeight:"bold",color:"white"},className:"text-2xl font-bold text-white",children:t[n].title}),C.jsx("p",{className:"text-white",children:t[n].description})]}),C.jsx("div",{className:"flex justify-end mt-auto",children:C.jsx("button",{onClick:p,className:"relative bg-gradient-to-r from-red-600 via-pink-500 to-red-600 hover:from-red-500 hover:via-orange-400 hover:to-red-500 active:from-red-700 active:via-pink-600 active:to-red-700 text-white py-1 px-4 rounded-full m-2 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95",style:{border:"2px solid rgba(255, 255, 255, 0.4)",boxShadow:"0 0 15px rgba(255, 0, 0, 0.8)",color:"white"},children:i?C.jsx(JF,{}):C.jsx(ZF,{})})})]}),C.jsxs("section",{className:"min-h-screen flex flex-col items-center",children:[C.jsx("h1",{className:"heading-reset text-4xl md:text-5xl font-extrabold text-center mt-12 text-white drop-shadow-lg tracking-wide",children:"Browse Library"}),C.jsx("div",{className:"flex flex-wrap justify-center items-center p-4 max-w-screen-lg mx-auto min-h-screen",children:t.map((E,R)=>C.jsx("div",{onClick:()=>r(R),className:`hover-enlarge border-1 m-2 rounded-lg overflow-hidden cursor-pointer ${n===R?"border-4 border-blue-500":""}`,style:{width:"129px",height:"170px",borderRadius:"6px"},children:C.jsx("img",{src:E.cover,className:"object-cover w-full h-full rounded-lg",alt:E.title})},E.id))})]}),C.jsxs("div",{className:"p-4 max-w-screen-sm mx-auto  sm:space-x-0 sm:space-y-2 custom-container",children:[C.jsxs("div",{className:"w-full mt-8 mx-auto",children:[" ",C.jsx(U3,{})]}),C.jsx("div",{className:"w-full map-container p-5 mx-auto",children:C.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.374953124007!2d19.395962676321443!3d51.75924867968213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a3460d27d2c89%3A0x4a2f25c77f622a88!2s%C5%81%C3%B3d%C5%BA%2094-203%2C%20Poland!5e0!3m2!1sen!2sus!4v1698609072847!5m2!1sen!2sus",width:"350",height:"250",style:{border:0},allowFullScreen:"",loading:"lazy",title:"Google Map - Łódź 94-203"})})]}),C.jsx(e5,{}),C.jsx(z3,{})]})})}console.log("Starting application...");td.createRoot(document.getElementById("root")).render(C.jsx(ke.StrictMode,{children:C.jsx(n5,{})}));console.log("Application started.");
