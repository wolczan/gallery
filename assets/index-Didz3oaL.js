(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function rd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var iI={exports:{}},id={},sI={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lu=Symbol.for("react.element"),uk=Symbol.for("react.portal"),ck=Symbol.for("react.fragment"),hk=Symbol.for("react.strict_mode"),dk=Symbol.for("react.profiler"),fk=Symbol.for("react.provider"),pk=Symbol.for("react.context"),mk=Symbol.for("react.forward_ref"),gk=Symbol.for("react.suspense"),yk=Symbol.for("react.memo"),_k=Symbol.for("react.lazy"),e0=Symbol.iterator;function vk(t){return t===null||typeof t!="object"?null:(t=e0&&t[e0]||t["@@iterator"],typeof t=="function"?t:null)}var oI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aI=Object.assign,lI={};function na(t,e,n){this.props=t,this.context=e,this.refs=lI,this.updater=n||oI}na.prototype.isReactComponent={};na.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};na.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uI(){}uI.prototype=na.prototype;function Pg(t,e,n){this.props=t,this.context=e,this.refs=lI,this.updater=n||oI}var kg=Pg.prototype=new uI;kg.constructor=Pg;aI(kg,na.prototype);kg.isPureReactComponent=!0;var t0=Array.isArray,cI=Object.prototype.hasOwnProperty,Cg={current:null},hI={key:!0,ref:!0,__self:!0,__source:!0};function dI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cI.call(e,r)&&!hI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:lu,type:t,key:s,ref:o,props:i,_owner:Cg.current}}function wk(t,e){return{$$typeof:lu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ng(t){return typeof t=="object"&&t!==null&&t.$$typeof===lu}function Ek(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var n0=/\/+/g;function xf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ek(""+t.key):e.toString(36)}function xc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case lu:case uk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xf(o,0):r,t0(i)?(n="",t!=null&&(n=t.replace(n0,"$&/")+"/"),xc(i,e,n,"",function(c){return c})):i!=null&&(Ng(i)&&(i=wk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(n0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",t0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+xf(s,a);o+=xc(s,e,n,l,i)}else if(l=vk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+xf(s,a++),o+=xc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Hu(t,e,n){if(t==null)return t;var r=[],i=0;return xc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Ik(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},Ac={transition:null},Tk={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:Ac,ReactCurrentOwner:Cg};le.Children={map:Hu,forEach:function(t,e,n){Hu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Hu(t,function(){e++}),e},toArray:function(t){return Hu(t,function(e){return e})||[]},only:function(t){if(!Ng(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=na;le.Fragment=ck;le.Profiler=dk;le.PureComponent=Pg;le.StrictMode=hk;le.Suspense=gk;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tk;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=aI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)cI.call(e,l)&&!hI.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:lu,type:t.type,key:i,ref:s,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:pk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fk,_context:t},t.Consumer=t};le.createElement=dI;le.createFactory=function(t){var e=dI.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:mk,render:t}};le.isValidElement=Ng;le.lazy=function(t){return{$$typeof:_k,_payload:{_status:-1,_result:t},_init:Ik}};le.memo=function(t,e){return{$$typeof:yk,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=Ac.transition;Ac.transition={};try{t()}finally{Ac.transition=e}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(t,e){return Mt.current.useCallback(t,e)};le.useContext=function(t){return Mt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};le.useEffect=function(t,e){return Mt.current.useEffect(t,e)};le.useId=function(){return Mt.current.useId()};le.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Mt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};le.useRef=function(t){return Mt.current.useRef(t)};le.useState=function(t){return Mt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Mt.current.useTransition()};le.version="18.2.0";sI.exports=le;var N=sI.exports;const Ce=rd(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sk=N,xk=Symbol.for("react.element"),Ak=Symbol.for("react.fragment"),bk=Object.prototype.hasOwnProperty,Rk=Sk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pk={key:!0,ref:!0,__self:!0,__source:!0};function fI(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bk.call(e,r)&&!Pk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xk,type:t,key:s,ref:o,props:i,_owner:Rk.current}}id.Fragment=Ak;id.jsx=fI;id.jsxs=fI;iI.exports=id;var x=iI.exports,bp={},pI={exports:{}},cn={},mI={exports:{}},gI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var J=z.length;z.push(Q);e:for(;0<J;){var ue=J-1>>>1,re=z[ue];if(0<i(re,Q))z[ue]=Q,z[J]=re,J=ue;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],J=z.pop();if(J!==Q){z[0]=J;e:for(var ue=0,re=z.length,fe=re>>>1;ue<fe;){var Ze=2*(ue+1)-1,ge=z[Ze],Ke=Ze+1,mt=z[Ke];if(0>i(ge,J))Ke<re&&0>i(mt,ge)?(z[ue]=mt,z[Ke]=J,ue=Ke):(z[ue]=ge,z[Ze]=J,ue=Ze);else if(Ke<re&&0>i(mt,J))z[ue]=mt,z[Ke]=J,ue=Ke;else break e}}return Q}function i(z,Q){var J=z.sortIndex-Q.sortIndex;return J!==0?J:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,p=3,g=!1,I=!1,A=!1,P=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=z)r(c),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(c)}}function k(z){if(A=!1,E(z),!I)if(n(l)!==null)I=!0,pt(M);else{var Q=n(c);Q!==null&&qe(k,Q.startTime-z)}}function M(z,Q){I=!1,A&&(A=!1,T(y),y=-1),g=!0;var J=p;try{for(E(Q),f=n(l);f!==null&&(!(f.expirationTime>Q)||z&&!C());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,p=f.priorityLevel;var re=ue(f.expirationTime<=Q);Q=t.unstable_now(),typeof re=="function"?f.callback=re:f===n(l)&&r(l),E(Q)}else r(l);f=n(l)}if(f!==null)var fe=!0;else{var Ze=n(c);Ze!==null&&qe(k,Ze.startTime-Q),fe=!1}return fe}finally{f=null,p=J,g=!1}}var O=!1,w=null,y=-1,S=5,R=-1;function C(){return!(t.unstable_now()-R<S)}function D(){if(w!==null){var z=t.unstable_now();R=z;var Q=!0;try{Q=w(!0,z)}finally{Q?b():(O=!1,w=null)}}else O=!1}var b;if(typeof v=="function")b=function(){v(D)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,jt=Je.port2;Je.port1.onmessage=D,b=function(){jt.postMessage(null)}}else b=function(){P(D,0)};function pt(z){w=z,O||(O=!0,b())}function qe(z,Q){y=P(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){I||g||(I=!0,pt(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(p){case 1:case 2:case 3:var Q=3;break;default:Q=p}var J=p;p=Q;try{return z()}finally{p=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=p;p=z;try{return Q()}finally{p=J}},t.unstable_scheduleCallback=function(z,Q,J){var ue=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ue+J:ue):J=ue,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=J+re,z={id:h++,callback:Q,priorityLevel:z,startTime:J,expirationTime:re,sortIndex:-1},J>ue?(z.sortIndex=J,e(c,z),n(l)===null&&z===n(c)&&(A?(T(y),y=-1):A=!0,qe(k,J-ue))):(z.sortIndex=re,e(l,z),I||g||(I=!0,pt(M))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var Q=p;return function(){var J=p;p=Q;try{return z.apply(this,arguments)}finally{p=J}}}})(gI);mI.exports=gI;var kk=mI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yI=N,ln=kk;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _I=new Set,xl={};function Rs(t,e){Co(t,e),Co(t+"Capture",e)}function Co(t,e){for(xl[t]=e,t=0;t<e.length;t++)_I.add(e[t])}var Er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rp=Object.prototype.hasOwnProperty,Ck=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,r0={},i0={};function Nk(t){return Rp.call(i0,t)?!0:Rp.call(r0,t)?!1:Ck.test(t)?i0[t]=!0:(r0[t]=!0,!1)}function Dk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ok(t,e,n,r){if(e===null||typeof e>"u"||Dk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new Ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new Ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new Ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new Ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new Ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new Ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new Ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new Ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new Ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dg=/[\-:]([a-z])/g;function Og(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dg,Og);ft[e]=new Ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dg,Og);ft[e]=new Ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dg,Og);ft[e]=new Ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new Ft(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new Ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vg(t,e,n,r){var i=ft.hasOwnProperty(e)?ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ok(e,n,i,r)&&(n=null),r||i===null?Nk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kr=yI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qu=Symbol.for("react.element"),no=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),Lg=Symbol.for("react.strict_mode"),Pp=Symbol.for("react.profiler"),vI=Symbol.for("react.provider"),wI=Symbol.for("react.context"),Mg=Symbol.for("react.forward_ref"),kp=Symbol.for("react.suspense"),Cp=Symbol.for("react.suspense_list"),Fg=Symbol.for("react.memo"),qr=Symbol.for("react.lazy"),EI=Symbol.for("react.offscreen"),s0=Symbol.iterator;function Pa(t){return t===null||typeof t!="object"?null:(t=s0&&t[s0]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Object.assign,Af;function qa(t){if(Af===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Af=e&&e[1]||""}return`
`+Af+t}var bf=!1;function Rf(t,e){if(!t||bf)return"";bf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qa(t):""}function Vk(t){switch(t.tag){case 5:return qa(t.type);case 16:return qa("Lazy");case 13:return qa("Suspense");case 19:return qa("SuspenseList");case 0:case 2:case 15:return t=Rf(t.type,!1),t;case 11:return t=Rf(t.type.render,!1),t;case 1:return t=Rf(t.type,!0),t;default:return""}}function Np(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ro:return"Fragment";case no:return"Portal";case Pp:return"Profiler";case Lg:return"StrictMode";case kp:return"Suspense";case Cp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wI:return(t.displayName||"Context")+".Consumer";case vI:return(t._context.displayName||"Context")+".Provider";case Mg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fg:return e=t.displayName||null,e!==null?e:Np(t.type)||"Memo";case qr:e=t._payload,t=t._init;try{return Np(t(e))}catch{}}return null}function Lk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Np(e);case 8:return e===Lg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function II(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mk(t){var e=II(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yu(t){t._valueTracker||(t._valueTracker=Mk(t))}function TI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=II(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ih(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dp(t,e){var n=e.checked;return Fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function o0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_i(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function SI(t,e){e=e.checked,e!=null&&Vg(t,"checked",e,!1)}function Op(t,e){SI(t,e);var n=_i(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vp(t,e.type,_i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function a0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vp(t,e,n){(e!=="number"||ih(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ka=Array.isArray;function wo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_i(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Lp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function l0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Ka(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_i(n)}}function xI(t,e){var n=_i(e.value),r=_i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function u0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function AI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?AI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xu,bI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xu=Xu||document.createElement("div"),Xu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Al(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ol={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fk=["Webkit","ms","Moz","O"];Object.keys(ol).forEach(function(t){Fk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ol[e]=ol[t]})});function RI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ol.hasOwnProperty(t)&&ol[t]?(""+e).trim():e+"px"}function PI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=RI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var jk=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fp(t,e){if(e){if(jk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function jp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Up=null;function jg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zp=null,Eo=null,Io=null;function c0(t){if(t=hu(t)){if(typeof zp!="function")throw Error(B(280));var e=t.stateNode;e&&(e=ud(e),zp(t.stateNode,t.type,e))}}function kI(t){Eo?Io?Io.push(t):Io=[t]:Eo=t}function CI(){if(Eo){var t=Eo,e=Io;if(Io=Eo=null,c0(t),e)for(t=0;t<e.length;t++)c0(e[t])}}function NI(t,e){return t(e)}function DI(){}var Pf=!1;function OI(t,e,n){if(Pf)return t(e,n);Pf=!0;try{return NI(t,e,n)}finally{Pf=!1,(Eo!==null||Io!==null)&&(DI(),CI())}}function bl(t,e){var n=t.stateNode;if(n===null)return null;var r=ud(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Bp=!1;if(Er)try{var ka={};Object.defineProperty(ka,"passive",{get:function(){Bp=!0}}),window.addEventListener("test",ka,ka),window.removeEventListener("test",ka,ka)}catch{Bp=!1}function Uk(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var al=!1,sh=null,oh=!1,$p=null,zk={onError:function(t){al=!0,sh=t}};function Bk(t,e,n,r,i,s,o,a,l){al=!1,sh=null,Uk.apply(zk,arguments)}function $k(t,e,n,r,i,s,o,a,l){if(Bk.apply(this,arguments),al){if(al){var c=sh;al=!1,sh=null}else throw Error(B(198));oh||(oh=!0,$p=c)}}function Ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function VI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function h0(t){if(Ps(t)!==t)throw Error(B(188))}function qk(t){var e=t.alternate;if(!e){if(e=Ps(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return h0(i),t;if(s===r)return h0(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function LI(t){return t=qk(t),t!==null?MI(t):null}function MI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=MI(t);if(e!==null)return e;t=t.sibling}return null}var FI=ln.unstable_scheduleCallback,d0=ln.unstable_cancelCallback,Kk=ln.unstable_shouldYield,Gk=ln.unstable_requestPaint,Ge=ln.unstable_now,Wk=ln.unstable_getCurrentPriorityLevel,Ug=ln.unstable_ImmediatePriority,jI=ln.unstable_UserBlockingPriority,ah=ln.unstable_NormalPriority,Hk=ln.unstable_LowPriority,UI=ln.unstable_IdlePriority,sd=null,Hn=null;function Qk(t){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(sd,t,void 0,(t.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:Jk,Yk=Math.log,Xk=Math.LN2;function Jk(t){return t>>>=0,t===0?32:31-(Yk(t)/Xk|0)|0}var Ju=64,Zu=4194304;function Ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ga(a):(s&=o,s!==0&&(r=Ga(s)))}else o=n&~i,o!==0?r=Ga(o):s!==0&&(r=Ga(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nn(e),i=1<<n,r|=t[n],e&=~i;return r}function Zk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Nn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Zk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function qp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zI(){var t=Ju;return Ju<<=1,!(Ju&4194240)&&(Ju=64),t}function kf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nn(e),t[e]=n}function tC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function BI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $I,Bg,qI,KI,GI,Kp=!1,ec=[],si=null,oi=null,ai=null,Rl=new Map,Pl=new Map,Wr=[],nC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function f0(t,e){switch(t){case"focusin":case"focusout":si=null;break;case"dragenter":case"dragleave":oi=null;break;case"mouseover":case"mouseout":ai=null;break;case"pointerover":case"pointerout":Rl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(e.pointerId)}}function Ca(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=hu(e),e!==null&&Bg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function rC(t,e,n,r,i){switch(e){case"focusin":return si=Ca(si,t,e,n,r,i),!0;case"dragenter":return oi=Ca(oi,t,e,n,r,i),!0;case"mouseover":return ai=Ca(ai,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Rl.set(s,Ca(Rl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Pl.set(s,Ca(Pl.get(s)||null,t,e,n,r,i)),!0}return!1}function WI(t){var e=Ji(t.target);if(e!==null){var n=Ps(e);if(n!==null){if(e=n.tag,e===13){if(e=VI(n),e!==null){t.blockedOn=e,GI(t.priority,function(){qI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Up=r,n.target.dispatchEvent(r),Up=null}else return e=hu(n),e!==null&&Bg(e),t.blockedOn=n,!1;e.shift()}return!0}function p0(t,e,n){bc(t)&&n.delete(e)}function iC(){Kp=!1,si!==null&&bc(si)&&(si=null),oi!==null&&bc(oi)&&(oi=null),ai!==null&&bc(ai)&&(ai=null),Rl.forEach(p0),Pl.forEach(p0)}function Na(t,e){t.blockedOn===e&&(t.blockedOn=null,Kp||(Kp=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,iC)))}function kl(t){function e(i){return Na(i,t)}if(0<ec.length){Na(ec[0],t);for(var n=1;n<ec.length;n++){var r=ec[n];r.blockedOn===t&&(r.blockedOn=null)}}for(si!==null&&Na(si,t),oi!==null&&Na(oi,t),ai!==null&&Na(ai,t),Rl.forEach(e),Pl.forEach(e),n=0;n<Wr.length;n++)r=Wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wr.length&&(n=Wr[0],n.blockedOn===null);)WI(n),n.blockedOn===null&&Wr.shift()}var To=kr.ReactCurrentBatchConfig,uh=!0;function sC(t,e,n,r){var i=_e,s=To.transition;To.transition=null;try{_e=1,$g(t,e,n,r)}finally{_e=i,To.transition=s}}function oC(t,e,n,r){var i=_e,s=To.transition;To.transition=null;try{_e=4,$g(t,e,n,r)}finally{_e=i,To.transition=s}}function $g(t,e,n,r){if(uh){var i=Gp(t,e,n,r);if(i===null)Uf(t,e,r,ch,n),f0(t,r);else if(rC(i,t,e,n,r))r.stopPropagation();else if(f0(t,r),e&4&&-1<nC.indexOf(t)){for(;i!==null;){var s=hu(i);if(s!==null&&$I(s),s=Gp(t,e,n,r),s===null&&Uf(t,e,r,ch,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Uf(t,e,r,null,n)}}var ch=null;function Gp(t,e,n,r){if(ch=null,t=jg(r),t=Ji(t),t!==null)if(e=Ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=VI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ch=t,null}function HI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wk()){case Ug:return 1;case jI:return 4;case ah:case Hk:return 16;case UI:return 536870912;default:return 16}default:return 16}}var ti=null,qg=null,Rc=null;function QI(){if(Rc)return Rc;var t,e=qg,n=e.length,r,i="value"in ti?ti.value:ti.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Rc=i.slice(t,1<r?1-r:void 0)}function Pc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tc(){return!0}function m0(){return!1}function hn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tc:m0,this.isPropagationStopped=m0,this}return Fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tc)},persist:function(){},isPersistent:tc}),e}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kg=hn(ra),cu=Fe({},ra,{view:0,detail:0}),aC=hn(cu),Cf,Nf,Da,od=Fe({},cu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Da&&(Da&&t.type==="mousemove"?(Cf=t.screenX-Da.screenX,Nf=t.screenY-Da.screenY):Nf=Cf=0,Da=t),Cf)},movementY:function(t){return"movementY"in t?t.movementY:Nf}}),g0=hn(od),lC=Fe({},od,{dataTransfer:0}),uC=hn(lC),cC=Fe({},cu,{relatedTarget:0}),Df=hn(cC),hC=Fe({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),dC=hn(hC),fC=Fe({},ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pC=hn(fC),mC=Fe({},ra,{data:0}),y0=hn(mC),gC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_C={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_C[t])?!!e[t]:!1}function Gg(){return vC}var wC=Fe({},cu,{key:function(t){if(t.key){var e=gC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gg,charCode:function(t){return t.type==="keypress"?Pc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),EC=hn(wC),IC=Fe({},od,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_0=hn(IC),TC=Fe({},cu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gg}),SC=hn(TC),xC=Fe({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),AC=hn(xC),bC=Fe({},od,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RC=hn(bC),PC=[9,13,27,32],Wg=Er&&"CompositionEvent"in window,ll=null;Er&&"documentMode"in document&&(ll=document.documentMode);var kC=Er&&"TextEvent"in window&&!ll,YI=Er&&(!Wg||ll&&8<ll&&11>=ll),v0=" ",w0=!1;function XI(t,e){switch(t){case"keyup":return PC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function JI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var io=!1;function CC(t,e){switch(t){case"compositionend":return JI(e);case"keypress":return e.which!==32?null:(w0=!0,v0);case"textInput":return t=e.data,t===v0&&w0?null:t;default:return null}}function NC(t,e){if(io)return t==="compositionend"||!Wg&&XI(t,e)?(t=QI(),Rc=qg=ti=null,io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return YI&&e.locale!=="ko"?null:e.data;default:return null}}var DC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function E0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!DC[t.type]:e==="textarea"}function ZI(t,e,n,r){kI(r),e=hh(e,"onChange"),0<e.length&&(n=new Kg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ul=null,Cl=null;function OC(t){cT(t,0)}function ad(t){var e=ao(t);if(TI(e))return t}function VC(t,e){if(t==="change")return e}var eT=!1;if(Er){var Of;if(Er){var Vf="oninput"in document;if(!Vf){var I0=document.createElement("div");I0.setAttribute("oninput","return;"),Vf=typeof I0.oninput=="function"}Of=Vf}else Of=!1;eT=Of&&(!document.documentMode||9<document.documentMode)}function T0(){ul&&(ul.detachEvent("onpropertychange",tT),Cl=ul=null)}function tT(t){if(t.propertyName==="value"&&ad(Cl)){var e=[];ZI(e,Cl,t,jg(t)),OI(OC,e)}}function LC(t,e,n){t==="focusin"?(T0(),ul=e,Cl=n,ul.attachEvent("onpropertychange",tT)):t==="focusout"&&T0()}function MC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ad(Cl)}function FC(t,e){if(t==="click")return ad(e)}function jC(t,e){if(t==="input"||t==="change")return ad(e)}function UC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:UC;function Nl(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rp.call(e,i)||!Vn(t[i],e[i]))return!1}return!0}function S0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function x0(t,e){var n=S0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=S0(n)}}function nT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?nT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rT(){for(var t=window,e=ih();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ih(t.document)}return e}function Hg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zC(t){var e=rT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&nT(n.ownerDocument.documentElement,n)){if(r!==null&&Hg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=x0(n,s);var o=x0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var BC=Er&&"documentMode"in document&&11>=document.documentMode,so=null,Wp=null,cl=null,Hp=!1;function A0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hp||so==null||so!==ih(r)||(r=so,"selectionStart"in r&&Hg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cl&&Nl(cl,r)||(cl=r,r=hh(Wp,"onSelect"),0<r.length&&(e=new Kg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=so)))}function nc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oo={animationend:nc("Animation","AnimationEnd"),animationiteration:nc("Animation","AnimationIteration"),animationstart:nc("Animation","AnimationStart"),transitionend:nc("Transition","TransitionEnd")},Lf={},iT={};Er&&(iT=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function ld(t){if(Lf[t])return Lf[t];if(!oo[t])return t;var e=oo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iT)return Lf[t]=e[n];return t}var sT=ld("animationend"),oT=ld("animationiteration"),aT=ld("animationstart"),lT=ld("transitionend"),uT=new Map,b0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pi(t,e){uT.set(t,e),Rs(e,[t])}for(var Mf=0;Mf<b0.length;Mf++){var Ff=b0[Mf],$C=Ff.toLowerCase(),qC=Ff[0].toUpperCase()+Ff.slice(1);Pi($C,"on"+qC)}Pi(sT,"onAnimationEnd");Pi(oT,"onAnimationIteration");Pi(aT,"onAnimationStart");Pi("dblclick","onDoubleClick");Pi("focusin","onFocus");Pi("focusout","onBlur");Pi(lT,"onTransitionEnd");Co("onMouseEnter",["mouseout","mouseover"]);Co("onMouseLeave",["mouseout","mouseover"]);Co("onPointerEnter",["pointerout","pointerover"]);Co("onPointerLeave",["pointerout","pointerover"]);Rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));function R0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$k(r,e,void 0,t),t.currentTarget=null}function cT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;R0(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;R0(i,a,c),s=l}}}if(oh)throw t=$p,oh=!1,$p=null,t}function Se(t,e){var n=e[Zp];n===void 0&&(n=e[Zp]=new Set);var r=t+"__bubble";n.has(r)||(hT(e,t,2,!1),n.add(r))}function jf(t,e,n){var r=0;e&&(r|=4),hT(n,t,r,e)}var rc="_reactListening"+Math.random().toString(36).slice(2);function Dl(t){if(!t[rc]){t[rc]=!0,_I.forEach(function(n){n!=="selectionchange"&&(KC.has(n)||jf(n,!1,t),jf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rc]||(e[rc]=!0,jf("selectionchange",!1,e))}}function hT(t,e,n,r){switch(HI(e)){case 1:var i=sC;break;case 4:i=oC;break;default:i=$g}n=i.bind(null,e,n,t),i=void 0,!Bp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Uf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ji(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}OI(function(){var c=s,h=jg(n),f=[];e:{var p=uT.get(t);if(p!==void 0){var g=Kg,I=t;switch(t){case"keypress":if(Pc(n)===0)break e;case"keydown":case"keyup":g=EC;break;case"focusin":I="focus",g=Df;break;case"focusout":I="blur",g=Df;break;case"beforeblur":case"afterblur":g=Df;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=g0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=uC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=SC;break;case sT:case oT:case aT:g=dC;break;case lT:g=AC;break;case"scroll":g=aC;break;case"wheel":g=RC;break;case"copy":case"cut":case"paste":g=pC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=_0}var A=(e&4)!==0,P=!A&&t==="scroll",T=A?p!==null?p+"Capture":null:p;A=[];for(var v=c,E;v!==null;){E=v;var k=E.stateNode;if(E.tag===5&&k!==null&&(E=k,T!==null&&(k=bl(v,T),k!=null&&A.push(Ol(v,k,E)))),P)break;v=v.return}0<A.length&&(p=new g(p,I,null,n,h),f.push({event:p,listeners:A}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Up&&(I=n.relatedTarget||n.fromElement)&&(Ji(I)||I[Ir]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(I=n.relatedTarget||n.toElement,g=c,I=I?Ji(I):null,I!==null&&(P=Ps(I),I!==P||I.tag!==5&&I.tag!==6)&&(I=null)):(g=null,I=c),g!==I)){if(A=g0,k="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(A=_0,k="onPointerLeave",T="onPointerEnter",v="pointer"),P=g==null?p:ao(g),E=I==null?p:ao(I),p=new A(k,v+"leave",g,n,h),p.target=P,p.relatedTarget=E,k=null,Ji(h)===c&&(A=new A(T,v+"enter",I,n,h),A.target=E,A.relatedTarget=P,k=A),P=k,g&&I)t:{for(A=g,T=I,v=0,E=A;E;E=zs(E))v++;for(E=0,k=T;k;k=zs(k))E++;for(;0<v-E;)A=zs(A),v--;for(;0<E-v;)T=zs(T),E--;for(;v--;){if(A===T||T!==null&&A===T.alternate)break t;A=zs(A),T=zs(T)}A=null}else A=null;g!==null&&P0(f,p,g,A,!1),I!==null&&P!==null&&P0(f,P,I,A,!0)}}e:{if(p=c?ao(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var M=VC;else if(E0(p))if(eT)M=jC;else{M=MC;var O=LC}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(M=FC);if(M&&(M=M(t,c))){ZI(f,M,n,h);break e}O&&O(t,p,c),t==="focusout"&&(O=p._wrapperState)&&O.controlled&&p.type==="number"&&Vp(p,"number",p.value)}switch(O=c?ao(c):window,t){case"focusin":(E0(O)||O.contentEditable==="true")&&(so=O,Wp=c,cl=null);break;case"focusout":cl=Wp=so=null;break;case"mousedown":Hp=!0;break;case"contextmenu":case"mouseup":case"dragend":Hp=!1,A0(f,n,h);break;case"selectionchange":if(BC)break;case"keydown":case"keyup":A0(f,n,h)}var w;if(Wg)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else io?XI(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(YI&&n.locale!=="ko"&&(io||y!=="onCompositionStart"?y==="onCompositionEnd"&&io&&(w=QI()):(ti=h,qg="value"in ti?ti.value:ti.textContent,io=!0)),O=hh(c,y),0<O.length&&(y=new y0(y,t,null,n,h),f.push({event:y,listeners:O}),w?y.data=w:(w=JI(n),w!==null&&(y.data=w)))),(w=kC?CC(t,n):NC(t,n))&&(c=hh(c,"onBeforeInput"),0<c.length&&(h=new y0("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=w))}cT(f,e)})}function Ol(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bl(t,n),s!=null&&r.unshift(Ol(t,s,i)),s=bl(t,e),s!=null&&r.push(Ol(t,s,i))),t=t.return}return r}function zs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function P0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=bl(n,s),l!=null&&o.unshift(Ol(n,l,a))):i||(l=bl(n,s),l!=null&&o.push(Ol(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var GC=/\r\n?/g,WC=/\u0000|\uFFFD/g;function k0(t){return(typeof t=="string"?t:""+t).replace(GC,`
`).replace(WC,"")}function ic(t,e,n){if(e=k0(e),k0(t)!==e&&n)throw Error(B(425))}function dh(){}var Qp=null,Yp=null;function Xp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jp=typeof setTimeout=="function"?setTimeout:void 0,HC=typeof clearTimeout=="function"?clearTimeout:void 0,C0=typeof Promise=="function"?Promise:void 0,QC=typeof queueMicrotask=="function"?queueMicrotask:typeof C0<"u"?function(t){return C0.resolve(null).then(t).catch(YC)}:Jp;function YC(t){setTimeout(function(){throw t})}function zf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),kl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);kl(e)}function li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function N0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ia=Math.random().toString(36).slice(2),Bn="__reactFiber$"+ia,Vl="__reactProps$"+ia,Ir="__reactContainer$"+ia,Zp="__reactEvents$"+ia,XC="__reactListeners$"+ia,JC="__reactHandles$"+ia;function Ji(t){var e=t[Bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ir]||n[Bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=N0(t);t!==null;){if(n=t[Bn])return n;t=N0(t)}return e}t=n,n=t.parentNode}return null}function hu(t){return t=t[Bn]||t[Ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function ud(t){return t[Vl]||null}var em=[],lo=-1;function ki(t){return{current:t}}function Ae(t){0>lo||(t.current=em[lo],em[lo]=null,lo--)}function Ee(t,e){lo++,em[lo]=t.current,t.current=e}var vi={},St=ki(vi),Gt=ki(!1),hs=vi;function No(t,e){var n=t.type.contextTypes;if(!n)return vi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Wt(t){return t=t.childContextTypes,t!=null}function fh(){Ae(Gt),Ae(St)}function D0(t,e,n){if(St.current!==vi)throw Error(B(168));Ee(St,e),Ee(Gt,n)}function dT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,Lk(t)||"Unknown",i));return Fe({},n,r)}function ph(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vi,hs=St.current,Ee(St,t),Ee(Gt,Gt.current),!0}function O0(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=dT(t,e,hs),r.__reactInternalMemoizedMergedChildContext=t,Ae(Gt),Ae(St),Ee(St,t)):Ae(Gt),Ee(Gt,n)}var lr=null,cd=!1,Bf=!1;function fT(t){lr===null?lr=[t]:lr.push(t)}function ZC(t){cd=!0,fT(t)}function Ci(){if(!Bf&&lr!==null){Bf=!0;var t=0,e=_e;try{var n=lr;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}lr=null,cd=!1}catch(i){throw lr!==null&&(lr=lr.slice(t+1)),FI(Ug,Ci),i}finally{_e=e,Bf=!1}}return null}var uo=[],co=0,mh=null,gh=0,pn=[],mn=0,ds=null,cr=1,hr="";function Bi(t,e){uo[co++]=gh,uo[co++]=mh,mh=t,gh=e}function pT(t,e,n){pn[mn++]=cr,pn[mn++]=hr,pn[mn++]=ds,ds=t;var r=cr;t=hr;var i=32-Nn(r)-1;r&=~(1<<i),n+=1;var s=32-Nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cr=1<<32-Nn(e)+i|n<<i|r,hr=s+t}else cr=1<<s|n<<i|r,hr=t}function Qg(t){t.return!==null&&(Bi(t,1),pT(t,1,0))}function Yg(t){for(;t===mh;)mh=uo[--co],uo[co]=null,gh=uo[--co],uo[co]=null;for(;t===ds;)ds=pn[--mn],pn[mn]=null,hr=pn[--mn],pn[mn]=null,cr=pn[--mn],pn[mn]=null}var sn=null,tn=null,ke=!1,kn=null;function mT(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function V0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,sn=t,tn=li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,sn=t,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ds!==null?{id:cr,overflow:hr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,sn=t,tn=null,!0):!1;default:return!1}}function tm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nm(t){if(ke){var e=tn;if(e){var n=e;if(!V0(t,e)){if(tm(t))throw Error(B(418));e=li(n.nextSibling);var r=sn;e&&V0(t,e)?mT(r,n):(t.flags=t.flags&-4097|2,ke=!1,sn=t)}}else{if(tm(t))throw Error(B(418));t.flags=t.flags&-4097|2,ke=!1,sn=t}}}function L0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function sc(t){if(t!==sn)return!1;if(!ke)return L0(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xp(t.type,t.memoizedProps)),e&&(e=tn)){if(tm(t))throw gT(),Error(B(418));for(;e;)mT(t,e),e=li(e.nextSibling)}if(L0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=sn?li(t.stateNode.nextSibling):null;return!0}function gT(){for(var t=tn;t;)t=li(t.nextSibling)}function Do(){tn=sn=null,ke=!1}function Xg(t){kn===null?kn=[t]:kn.push(t)}var eN=kr.ReactCurrentBatchConfig;function Rn(t,e){if(t&&t.defaultProps){e=Fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var yh=ki(null),_h=null,ho=null,Jg=null;function Zg(){Jg=ho=_h=null}function ey(t){var e=yh.current;Ae(yh),t._currentValue=e}function rm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function So(t,e){_h=t,Jg=ho=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(Jg!==t)if(t={context:t,memoizedValue:e,next:null},ho===null){if(_h===null)throw Error(B(308));ho=t,_h.dependencies={lanes:0,firstContext:t}}else ho=ho.next=t;return e}var Zi=null;function ty(t){Zi===null?Zi=[t]:Zi.push(t)}function yT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ty(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tr(t,r)}function Tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kr=!1;function ny(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _T(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ui(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tr(t,n)}return i=r.interleaved,i===null?(e.next=e,ty(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tr(t,n)}function kc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zg(t,n)}}function M0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vh(t,e,n,r){var i=t.updateQueue;Kr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,A=a;switch(p=e,g=n,A.tag){case 1:if(I=A.payload,typeof I=="function"){f=I.call(g,f,p);break e}f=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=A.payload,p=typeof I=="function"?I.call(g,f,p):I,p==null)break e;f=Fe({},f,p);break e;case 2:Kr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=f):h=h.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ps|=o,t.lanes=o,t.memoizedState=f}}function F0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var vT=new yI.Component().refs;function im(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hd={isMounted:function(t){return(t=t._reactInternals)?Ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=hi(t),s=yr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ui(t,s,i),e!==null&&(Dn(e,t,i,r),kc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=hi(t),s=yr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ui(t,s,i),e!==null&&(Dn(e,t,i,r),kc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=hi(t),i=yr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ui(t,i,r),e!==null&&(Dn(e,t,r,n),kc(e,t,r))}};function j0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Nl(n,r)||!Nl(i,s):!0}function wT(t,e,n){var r=!1,i=vi,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(i=Wt(e)?hs:St.current,r=e.contextTypes,s=(r=r!=null)?No(t,i):vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function U0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hd.enqueueReplaceState(e,e.state,null)}function sm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=vT,ny(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=En(s):(s=Wt(e)?hs:St.current,i.context=No(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(im(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hd.enqueueReplaceState(i,i.state,null),vh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===vT&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function oc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function z0(t){var e=t._init;return e(t._payload)}function ET(t){function e(T,v){if(t){var E=T.deletions;E===null?(T.deletions=[v],T.flags|=16):E.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function i(T,v){return T=di(T,v),T.index=0,T.sibling=null,T}function s(T,v,E){return T.index=E,t?(E=T.alternate,E!==null?(E=E.index,E<v?(T.flags|=2,v):E):(T.flags|=2,v)):(T.flags|=1048576,v)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,v,E,k){return v===null||v.tag!==6?(v=Qf(E,T.mode,k),v.return=T,v):(v=i(v,E),v.return=T,v)}function l(T,v,E,k){var M=E.type;return M===ro?h(T,v,E.props.children,k,E.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===qr&&z0(M)===v.type)?(k=i(v,E.props),k.ref=Oa(T,v,E),k.return=T,k):(k=Lc(E.type,E.key,E.props,null,T.mode,k),k.ref=Oa(T,v,E),k.return=T,k)}function c(T,v,E,k){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=Yf(E,T.mode,k),v.return=T,v):(v=i(v,E.children||[]),v.return=T,v)}function h(T,v,E,k,M){return v===null||v.tag!==7?(v=rs(E,T.mode,k,M),v.return=T,v):(v=i(v,E),v.return=T,v)}function f(T,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Qf(""+v,T.mode,E),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qu:return E=Lc(v.type,v.key,v.props,null,T.mode,E),E.ref=Oa(T,null,v),E.return=T,E;case no:return v=Yf(v,T.mode,E),v.return=T,v;case qr:var k=v._init;return f(T,k(v._payload),E)}if(Ka(v)||Pa(v))return v=rs(v,T.mode,E,null),v.return=T,v;oc(T,v)}return null}function p(T,v,E,k){var M=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return M!==null?null:a(T,v,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Qu:return E.key===M?l(T,v,E,k):null;case no:return E.key===M?c(T,v,E,k):null;case qr:return M=E._init,p(T,v,M(E._payload),k)}if(Ka(E)||Pa(E))return M!==null?null:h(T,v,E,k,null);oc(T,E)}return null}function g(T,v,E,k,M){if(typeof k=="string"&&k!==""||typeof k=="number")return T=T.get(E)||null,a(v,T,""+k,M);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Qu:return T=T.get(k.key===null?E:k.key)||null,l(v,T,k,M);case no:return T=T.get(k.key===null?E:k.key)||null,c(v,T,k,M);case qr:var O=k._init;return g(T,v,E,O(k._payload),M)}if(Ka(k)||Pa(k))return T=T.get(E)||null,h(v,T,k,M,null);oc(v,k)}return null}function I(T,v,E,k){for(var M=null,O=null,w=v,y=v=0,S=null;w!==null&&y<E.length;y++){w.index>y?(S=w,w=null):S=w.sibling;var R=p(T,w,E[y],k);if(R===null){w===null&&(w=S);break}t&&w&&R.alternate===null&&e(T,w),v=s(R,v,y),O===null?M=R:O.sibling=R,O=R,w=S}if(y===E.length)return n(T,w),ke&&Bi(T,y),M;if(w===null){for(;y<E.length;y++)w=f(T,E[y],k),w!==null&&(v=s(w,v,y),O===null?M=w:O.sibling=w,O=w);return ke&&Bi(T,y),M}for(w=r(T,w);y<E.length;y++)S=g(w,T,y,E[y],k),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?y:S.key),v=s(S,v,y),O===null?M=S:O.sibling=S,O=S);return t&&w.forEach(function(C){return e(T,C)}),ke&&Bi(T,y),M}function A(T,v,E,k){var M=Pa(E);if(typeof M!="function")throw Error(B(150));if(E=M.call(E),E==null)throw Error(B(151));for(var O=M=null,w=v,y=v=0,S=null,R=E.next();w!==null&&!R.done;y++,R=E.next()){w.index>y?(S=w,w=null):S=w.sibling;var C=p(T,w,R.value,k);if(C===null){w===null&&(w=S);break}t&&w&&C.alternate===null&&e(T,w),v=s(C,v,y),O===null?M=C:O.sibling=C,O=C,w=S}if(R.done)return n(T,w),ke&&Bi(T,y),M;if(w===null){for(;!R.done;y++,R=E.next())R=f(T,R.value,k),R!==null&&(v=s(R,v,y),O===null?M=R:O.sibling=R,O=R);return ke&&Bi(T,y),M}for(w=r(T,w);!R.done;y++,R=E.next())R=g(w,T,y,R.value,k),R!==null&&(t&&R.alternate!==null&&w.delete(R.key===null?y:R.key),v=s(R,v,y),O===null?M=R:O.sibling=R,O=R);return t&&w.forEach(function(D){return e(T,D)}),ke&&Bi(T,y),M}function P(T,v,E,k){if(typeof E=="object"&&E!==null&&E.type===ro&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Qu:e:{for(var M=E.key,O=v;O!==null;){if(O.key===M){if(M=E.type,M===ro){if(O.tag===7){n(T,O.sibling),v=i(O,E.props.children),v.return=T,T=v;break e}}else if(O.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===qr&&z0(M)===O.type){n(T,O.sibling),v=i(O,E.props),v.ref=Oa(T,O,E),v.return=T,T=v;break e}n(T,O);break}else e(T,O);O=O.sibling}E.type===ro?(v=rs(E.props.children,T.mode,k,E.key),v.return=T,T=v):(k=Lc(E.type,E.key,E.props,null,T.mode,k),k.ref=Oa(T,v,E),k.return=T,T=k)}return o(T);case no:e:{for(O=E.key;v!==null;){if(v.key===O)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(T,v.sibling),v=i(v,E.children||[]),v.return=T,T=v;break e}else{n(T,v);break}else e(T,v);v=v.sibling}v=Yf(E,T.mode,k),v.return=T,T=v}return o(T);case qr:return O=E._init,P(T,v,O(E._payload),k)}if(Ka(E))return I(T,v,E,k);if(Pa(E))return A(T,v,E,k);oc(T,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(n(T,v.sibling),v=i(v,E),v.return=T,T=v):(n(T,v),v=Qf(E,T.mode,k),v.return=T,T=v),o(T)):n(T,v)}return P}var Oo=ET(!0),IT=ET(!1),du={},Qn=ki(du),Ll=ki(du),Ml=ki(du);function es(t){if(t===du)throw Error(B(174));return t}function ry(t,e){switch(Ee(Ml,e),Ee(Ll,t),Ee(Qn,du),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mp(e,t)}Ae(Qn),Ee(Qn,e)}function Vo(){Ae(Qn),Ae(Ll),Ae(Ml)}function TT(t){es(Ml.current);var e=es(Qn.current),n=Mp(e,t.type);e!==n&&(Ee(Ll,t),Ee(Qn,n))}function iy(t){Ll.current===t&&(Ae(Qn),Ae(Ll))}var Oe=ki(0);function wh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $f=[];function sy(){for(var t=0;t<$f.length;t++)$f[t]._workInProgressVersionPrimary=null;$f.length=0}var Cc=kr.ReactCurrentDispatcher,qf=kr.ReactCurrentBatchConfig,fs=0,Le=null,et=null,st=null,Eh=!1,hl=!1,Fl=0,tN=0;function vt(){throw Error(B(321))}function oy(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function ay(t,e,n,r,i,s){if(fs=s,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cc.current=t===null||t.memoizedState===null?sN:oN,t=n(r,i),hl){s=0;do{if(hl=!1,Fl=0,25<=s)throw Error(B(301));s+=1,st=et=null,e.updateQueue=null,Cc.current=aN,t=n(r,i)}while(hl)}if(Cc.current=Ih,e=et!==null&&et.next!==null,fs=0,st=et=Le=null,Eh=!1,e)throw Error(B(300));return t}function ly(){var t=Fl!==0;return Fl=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Le.memoizedState=st=t:st=st.next=t,st}function In(){if(et===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=st===null?Le.memoizedState:st.next;if(e!==null)st=e,et=t;else{if(t===null)throw Error(B(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},st===null?Le.memoizedState=st=t:st=st.next=t}return st}function jl(t,e){return typeof e=="function"?e(t):e}function Kf(t){var e=In(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((fs&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Le.lanes|=h,ps|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Vn(r,e.memoizedState)||($t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Le.lanes|=s,ps|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gf(t){var e=In(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Vn(s,e.memoizedState)||($t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ST(){}function xT(t,e){var n=Le,r=In(),i=e(),s=!Vn(r.memoizedState,i);if(s&&(r.memoizedState=i,$t=!0),r=r.queue,uy(RT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,Ul(9,bT.bind(null,n,r,i,e),void 0,null),at===null)throw Error(B(349));fs&30||AT(n,e,i)}return i}function AT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function bT(t,e,n,r){e.value=n,e.getSnapshot=r,PT(e)&&kT(t)}function RT(t,e,n){return n(function(){PT(e)&&kT(t)})}function PT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function kT(t){var e=Tr(t,1);e!==null&&Dn(e,t,1,-1)}function B0(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jl,lastRenderedState:t},e.queue=t,t=t.dispatch=iN.bind(null,Le,t),[e.memoizedState,t]}function Ul(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function CT(){return In().memoizedState}function Nc(t,e,n,r){var i=jn();Le.flags|=t,i.memoizedState=Ul(1|e,n,void 0,r===void 0?null:r)}function dd(t,e,n,r){var i=In();r=r===void 0?null:r;var s=void 0;if(et!==null){var o=et.memoizedState;if(s=o.destroy,r!==null&&oy(r,o.deps)){i.memoizedState=Ul(e,n,s,r);return}}Le.flags|=t,i.memoizedState=Ul(1|e,n,s,r)}function $0(t,e){return Nc(8390656,8,t,e)}function uy(t,e){return dd(2048,8,t,e)}function NT(t,e){return dd(4,2,t,e)}function DT(t,e){return dd(4,4,t,e)}function OT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function VT(t,e,n){return n=n!=null?n.concat([t]):null,dd(4,4,OT.bind(null,e,t),n)}function cy(){}function LT(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&oy(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function MT(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&oy(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function FT(t,e,n){return fs&21?(Vn(n,e)||(n=zI(),Le.lanes|=n,ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function nN(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=qf.transition;qf.transition={};try{t(!1),e()}finally{_e=n,qf.transition=r}}function jT(){return In().memoizedState}function rN(t,e,n){var r=hi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},UT(t))zT(e,n);else if(n=yT(t,e,n,r),n!==null){var i=Ot();Dn(n,t,r,i),BT(n,e,r)}}function iN(t,e,n){var r=hi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(UT(t))zT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Vn(a,o)){var l=e.interleaved;l===null?(i.next=i,ty(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=yT(t,e,i,r),n!==null&&(i=Ot(),Dn(n,t,r,i),BT(n,e,r))}}function UT(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function zT(t,e){hl=Eh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function BT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zg(t,n)}}var Ih={readContext:En,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},sN={readContext:En,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:$0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4194308,4,OT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nc(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=jn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=rN.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:B0,useDebugValue:cy,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=B0(!1),e=t[0];return t=nN.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,i=jn();if(ke){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),at===null)throw Error(B(349));fs&30||AT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$0(RT.bind(null,r,s,t),[t]),r.flags|=2048,Ul(9,bT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=at.identifierPrefix;if(ke){var n=hr,r=cr;n=(r&~(1<<32-Nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},oN={readContext:En,useCallback:LT,useContext:En,useEffect:uy,useImperativeHandle:VT,useInsertionEffect:NT,useLayoutEffect:DT,useMemo:MT,useReducer:Kf,useRef:CT,useState:function(){return Kf(jl)},useDebugValue:cy,useDeferredValue:function(t){var e=In();return FT(e,et.memoizedState,t)},useTransition:function(){var t=Kf(jl)[0],e=In().memoizedState;return[t,e]},useMutableSource:ST,useSyncExternalStore:xT,useId:jT,unstable_isNewReconciler:!1},aN={readContext:En,useCallback:LT,useContext:En,useEffect:uy,useImperativeHandle:VT,useInsertionEffect:NT,useLayoutEffect:DT,useMemo:MT,useReducer:Gf,useRef:CT,useState:function(){return Gf(jl)},useDebugValue:cy,useDeferredValue:function(t){var e=In();return et===null?e.memoizedState=t:FT(e,et.memoizedState,t)},useTransition:function(){var t=Gf(jl)[0],e=In().memoizedState;return[t,e]},useMutableSource:ST,useSyncExternalStore:xT,useId:jT,unstable_isNewReconciler:!1};function Lo(t,e){try{var n="",r=e;do n+=Vk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function om(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lN=typeof WeakMap=="function"?WeakMap:Map;function $T(t,e,n){n=yr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sh||(Sh=!0,gm=r),om(t,e)},n}function qT(t,e,n){n=yr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){om(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){om(t,e),typeof r!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function q0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new lN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=IN.bind(null,t,e,n),e.then(t,t))}function K0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function G0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yr(-1,1),e.tag=2,ui(n,e,1))),n.lanes|=1),t)}var uN=kr.ReactCurrentOwner,$t=!1;function kt(t,e,n,r){e.child=t===null?IT(e,null,n,r):Oo(e,t.child,n,r)}function W0(t,e,n,r,i){n=n.render;var s=e.ref;return So(e,i),r=ay(t,e,n,r,s,i),n=ly(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sr(t,e,i)):(ke&&n&&Qg(e),e.flags|=1,kt(t,e,r,i),e.child)}function H0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_y(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,KT(t,e,s,r,i)):(t=Lc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Nl,n(o,r)&&t.ref===e.ref)return Sr(t,e,i)}return e.flags|=1,t=di(s,r),t.ref=e.ref,t.return=e,e.child=t}function KT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Nl(s,r)&&t.ref===e.ref)if($t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,Sr(t,e,i)}return am(t,e,n,r,i)}function GT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(po,Zt),Zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(po,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(po,Zt),Zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(po,Zt),Zt|=r;return kt(t,e,i,n),e.child}function WT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function am(t,e,n,r,i){var s=Wt(n)?hs:St.current;return s=No(e,s),So(e,i),n=ay(t,e,n,r,s,i),r=ly(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sr(t,e,i)):(ke&&r&&Qg(e),e.flags|=1,kt(t,e,n,i),e.child)}function Q0(t,e,n,r,i){if(Wt(n)){var s=!0;ph(e)}else s=!1;if(So(e,i),e.stateNode===null)Dc(t,e),wT(e,n,r),sm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=En(c):(c=Wt(n)?hs:St.current,c=No(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&U0(e,o,r,c),Kr=!1;var p=e.memoizedState;o.state=p,vh(e,r,o,i),l=e.memoizedState,a!==r||p!==l||Gt.current||Kr?(typeof h=="function"&&(im(e,n,h,r),l=e.memoizedState),(a=Kr||j0(e,n,a,r,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,_T(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Rn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=Wt(n)?hs:St.current,l=No(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&U0(e,o,r,l),Kr=!1,p=e.memoizedState,o.state=p,vh(e,r,o,i);var I=e.memoizedState;a!==f||p!==I||Gt.current||Kr?(typeof g=="function"&&(im(e,n,g,r),I=e.memoizedState),(c=Kr||j0(e,n,c,r,p,I,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return lm(t,e,n,r,s,i)}function lm(t,e,n,r,i,s){WT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&O0(e,n,!1),Sr(t,e,s);r=e.stateNode,uN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Oo(e,t.child,null,s),e.child=Oo(e,null,a,s)):kt(t,e,a,s),e.memoizedState=r.state,i&&O0(e,n,!0),e.child}function HT(t){var e=t.stateNode;e.pendingContext?D0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&D0(t,e.context,!1),ry(t,e.containerInfo)}function Y0(t,e,n,r,i){return Do(),Xg(i),e.flags|=256,kt(t,e,n,r),e.child}var um={dehydrated:null,treeContext:null,retryLane:0};function cm(t){return{baseLanes:t,cachePool:null,transitions:null}}function QT(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(Oe,i&1),t===null)return nm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=md(o,r,0,null),t=rs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cm(n),e.memoizedState=um,t):hy(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return cN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=di(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=di(a,s):(s=rs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?cm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=um,r}return s=t.child,t=s.sibling,r=di(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hy(t,e){return e=md({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ac(t,e,n,r){return r!==null&&Xg(r),Oo(e,t.child,null,n),t=hy(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wf(Error(B(422))),ac(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=md({mode:"visible",children:r.children},i,0,null),s=rs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Oo(e,t.child,null,o),e.child.memoizedState=cm(o),e.memoizedState=um,s);if(!(e.mode&1))return ac(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Wf(s,r,void 0),ac(t,e,o,r)}if(a=(o&t.childLanes)!==0,$t||a){if(r=at,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tr(t,i),Dn(r,t,i,-1))}return yy(),r=Wf(Error(B(421))),ac(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=TN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tn=li(i.nextSibling),sn=e,ke=!0,kn=null,t!==null&&(pn[mn++]=cr,pn[mn++]=hr,pn[mn++]=ds,cr=t.id,hr=t.overflow,ds=e),e=hy(e,r.children),e.flags|=4096,e)}function X0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rm(t.return,e,n)}function Hf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function YT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&X0(t,n,e);else if(t.tag===19)X0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Hf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Hf(e,!0,n,null,s);break;case"together":Hf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=di(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=di(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hN(t,e,n){switch(e.tag){case 3:HT(e),Do();break;case 5:TT(e);break;case 1:Wt(e.type)&&ph(e);break;case 4:ry(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(yh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?QT(t,e,n):(Ee(Oe,Oe.current&1),t=Sr(t,e,n),t!==null?t.sibling:null);Ee(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return YT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,GT(t,e,n)}return Sr(t,e,n)}var XT,hm,JT,ZT;XT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hm=function(){};JT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,es(Qn.current);var s=null;switch(n){case"input":i=Dp(t,i),r=Dp(t,r),s=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),s=[];break;case"textarea":i=Lp(t,i),r=Lp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=dh)}Fp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ZT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Va(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dN(t,e,n){var r=e.pendingProps;switch(Yg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return Wt(e.type)&&fh(),wt(e),null;case 3:return r=e.stateNode,Vo(),Ae(Gt),Ae(St),sy(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(vm(kn),kn=null))),hm(t,e),wt(e),null;case 5:iy(e);var i=es(Ml.current);if(n=e.type,t!==null&&e.stateNode!=null)JT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return wt(e),null}if(t=es(Qn.current),sc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Bn]=e,r[Vl]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<Wa.length;i++)Se(Wa[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":o0(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":l0(r,s),Se("invalid",r)}Fp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ic(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ic(r.textContent,a,t),i=["children",""+a]):xl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":Yu(r),a0(r,s,!0);break;case"textarea":Yu(r),u0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=dh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=AI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Bn]=e,t[Vl]=r,XT(t,e,!1,!1),e.stateNode=t;e:{switch(o=jp(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wa.length;i++)Se(Wa[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":o0(t,r),i=Dp(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Se("invalid",t);break;case"textarea":l0(t,r),i=Lp(t,r),Se("invalid",t);break;default:i=r}Fp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?PI(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bI(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Al(t,l):typeof l=="number"&&Al(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Se("scroll",t):l!=null&&Vg(t,s,l,o))}switch(n){case"input":Yu(t),a0(t,r,!1);break;case"textarea":Yu(t),u0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_i(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?wo(t,!!r.multiple,s,!1):r.defaultValue!=null&&wo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=dh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wt(e),null;case 6:if(t&&e.stateNode!=null)ZT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=es(Ml.current),es(Qn.current),sc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Bn]=e,(s=r.nodeValue!==n)&&(t=sn,t!==null))switch(t.tag){case 3:ic(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ic(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bn]=e,e.stateNode=r}return wt(e),null;case 13:if(Ae(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&tn!==null&&e.mode&1&&!(e.flags&128))gT(),Do(),e.flags|=98560,s=!1;else if(s=sc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Bn]=e}else Do(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),s=!1}else kn!==null&&(vm(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?tt===0&&(tt=3):yy())),e.updateQueue!==null&&(e.flags|=4),wt(e),null);case 4:return Vo(),hm(t,e),t===null&&Dl(e.stateNode.containerInfo),wt(e),null;case 10:return ey(e.type._context),wt(e),null;case 17:return Wt(e.type)&&fh(),wt(e),null;case 19:if(Ae(Oe),s=e.memoizedState,s===null)return wt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Va(s,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wh(t),o!==null){for(e.flags|=128,Va(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ge()>Mo&&(e.flags|=128,r=!0,Va(s,!1),e.lanes=4194304)}else{if(!r)if(t=wh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ke)return wt(e),null}else 2*Ge()-s.renderingStartTime>Mo&&n!==1073741824&&(e.flags|=128,r=!0,Va(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ge(),e.sibling=null,n=Oe.current,Ee(Oe,r?n&1|2:n&1),e):(wt(e),null);case 22:case 23:return gy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function fN(t,e){switch(Yg(e),e.tag){case 1:return Wt(e.type)&&fh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vo(),Ae(Gt),Ae(St),sy(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return iy(e),null;case 13:if(Ae(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Do()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(Oe),null;case 4:return Vo(),null;case 10:return ey(e.type._context),null;case 22:case 23:return gy(),null;case 24:return null;default:return null}}var lc=!1,It=!1,pN=typeof WeakSet=="function"?WeakSet:Set,G=null;function fo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(t,e,r)}else n.current=null}function dm(t,e,n){try{n()}catch(r){Be(t,e,r)}}var J0=!1;function mN(t,e){if(Qp=uh,t=rT(),Hg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(l=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yp={focusedElem:t,selectionRange:n},uh=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var A=I.memoizedProps,P=I.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?A:Rn(e.type,A),P);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(k){Be(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return I=J0,J0=!1,I}function dl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&dm(e,n,s)}i=i.next}while(i!==r)}}function fd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function eS(t){var e=t.alternate;e!==null&&(t.alternate=null,eS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bn],delete e[Vl],delete e[Zp],delete e[XC],delete e[JC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tS(t){return t.tag===5||t.tag===3||t.tag===4}function Z0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dh));else if(r!==4&&(t=t.child,t!==null))for(pm(t,e,n),t=t.sibling;t!==null;)pm(t,e,n),t=t.sibling}function mm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(mm(t,e,n),t=t.sibling;t!==null;)mm(t,e,n),t=t.sibling}var ct=null,Pn=!1;function Fr(t,e,n){for(n=n.child;n!==null;)nS(t,e,n),n=n.sibling}function nS(t,e,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(sd,n)}catch{}switch(n.tag){case 5:It||fo(n,e);case 6:var r=ct,i=Pn;ct=null,Fr(t,e,n),ct=r,Pn=i,ct!==null&&(Pn?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(Pn?(t=ct,n=n.stateNode,t.nodeType===8?zf(t.parentNode,n):t.nodeType===1&&zf(t,n),kl(t)):zf(ct,n.stateNode));break;case 4:r=ct,i=Pn,ct=n.stateNode.containerInfo,Pn=!0,Fr(t,e,n),ct=r,Pn=i;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dm(n,e,o),i=i.next}while(i!==r)}Fr(t,e,n);break;case 1:if(!It&&(fo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Be(n,e,a)}Fr(t,e,n);break;case 21:Fr(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,Fr(t,e,n),It=r):Fr(t,e,n);break;default:Fr(t,e,n)}}function ew(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pN),e.forEach(function(r){var i=SN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,Pn=!1;break e;case 3:ct=a.stateNode.containerInfo,Pn=!0;break e;case 4:ct=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(ct===null)throw Error(B(160));nS(s,o,i),ct=null,Pn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Be(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rS(e,t),e=e.sibling}function rS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),Mn(t),r&4){try{dl(3,t,t.return),fd(3,t)}catch(A){Be(t,t.return,A)}try{dl(5,t,t.return)}catch(A){Be(t,t.return,A)}}break;case 1:An(e,t),Mn(t),r&512&&n!==null&&fo(n,n.return);break;case 5:if(An(e,t),Mn(t),r&512&&n!==null&&fo(n,n.return),t.flags&32){var i=t.stateNode;try{Al(i,"")}catch(A){Be(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&SI(i,s),jp(a,o);var c=jp(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?PI(i,f):h==="dangerouslySetInnerHTML"?bI(i,f):h==="children"?Al(i,f):Vg(i,h,f,c)}switch(a){case"input":Op(i,s);break;case"textarea":xI(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?wo(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?wo(i,!!s.multiple,s.defaultValue,!0):wo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Vl]=s}catch(A){Be(t,t.return,A)}}break;case 6:if(An(e,t),Mn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){Be(t,t.return,A)}}break;case 3:if(An(e,t),Mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{kl(e.containerInfo)}catch(A){Be(t,t.return,A)}break;case 4:An(e,t),Mn(t);break;case 13:An(e,t),Mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(py=Ge())),r&4&&ew(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(It=(c=It)||h,An(e,t),It=c):An(e,t),Mn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(G=t,h=t.child;h!==null;){for(f=G=h;G!==null;){switch(p=G,g=p.child,p.tag){case 0:case 11:case 14:case 15:dl(4,p,p.return);break;case 1:fo(p,p.return);var I=p.stateNode;if(typeof I.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(A){Be(r,n,A)}}break;case 5:fo(p,p.return);break;case 22:if(p.memoizedState!==null){nw(f);continue}}g!==null?(g.return=p,G=g):nw(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=RI("display",o))}catch(A){Be(t,t.return,A)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){Be(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:An(e,t),Mn(t),r&4&&ew(t);break;case 21:break;default:An(e,t),Mn(t)}}function Mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tS(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Al(i,""),r.flags&=-33);var s=Z0(t);mm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Z0(t);pm(t,a,o);break;default:throw Error(B(161))}}catch(l){Be(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gN(t,e,n){G=t,iS(t)}function iS(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||lc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||It;a=lc;var c=It;if(lc=o,(It=l)&&!c)for(G=i;G!==null;)o=G,l=o.child,o.tag===22&&o.memoizedState!==null?rw(i):l!==null?(l.return=o,G=l):rw(i);for(;s!==null;)G=s,iS(s),s=s.sibling;G=i,lc=a,It=c}tw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):tw(t)}}function tw(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||fd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&F0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}F0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&kl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}It||e.flags&512&&fm(e)}catch(p){Be(e,e.return,p)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function nw(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function rw(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fd(4,e)}catch(l){Be(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Be(e,i,l)}}var s=e.return;try{fm(e)}catch(l){Be(e,s,l)}break;case 5:var o=e.return;try{fm(e)}catch(l){Be(e,o,l)}}}catch(l){Be(e,e.return,l)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var yN=Math.ceil,Th=kr.ReactCurrentDispatcher,dy=kr.ReactCurrentOwner,vn=kr.ReactCurrentBatchConfig,he=0,at=null,Ye=null,dt=0,Zt=0,po=ki(0),tt=0,zl=null,ps=0,pd=0,fy=0,fl=null,Bt=null,py=0,Mo=1/0,or=null,Sh=!1,gm=null,ci=null,uc=!1,ni=null,xh=0,pl=0,ym=null,Oc=-1,Vc=0;function Ot(){return he&6?Ge():Oc!==-1?Oc:Oc=Ge()}function hi(t){return t.mode&1?he&2&&dt!==0?dt&-dt:eN.transition!==null?(Vc===0&&(Vc=zI()),Vc):(t=_e,t!==0||(t=window.event,t=t===void 0?16:HI(t.type)),t):1}function Dn(t,e,n,r){if(50<pl)throw pl=0,ym=null,Error(B(185));uu(t,n,r),(!(he&2)||t!==at)&&(t===at&&(!(he&2)&&(pd|=n),tt===4&&Hr(t,dt)),Ht(t,r),n===1&&he===0&&!(e.mode&1)&&(Mo=Ge()+500,cd&&Ci()))}function Ht(t,e){var n=t.callbackNode;eC(t,e);var r=lh(t,t===at?dt:0);if(r===0)n!==null&&d0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&d0(n),e===1)t.tag===0?ZC(iw.bind(null,t)):fT(iw.bind(null,t)),QC(function(){!(he&6)&&Ci()}),n=null;else{switch(BI(r)){case 1:n=Ug;break;case 4:n=jI;break;case 16:n=ah;break;case 536870912:n=UI;break;default:n=ah}n=dS(n,sS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sS(t,e){if(Oc=-1,Vc=0,he&6)throw Error(B(327));var n=t.callbackNode;if(xo()&&t.callbackNode!==n)return null;var r=lh(t,t===at?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ah(t,r);else{e=r;var i=he;he|=2;var s=aS();(at!==t||dt!==e)&&(or=null,Mo=Ge()+500,ns(t,e));do try{wN();break}catch(a){oS(t,a)}while(!0);Zg(),Th.current=s,he=i,Ye!==null?e=0:(at=null,dt=0,e=tt)}if(e!==0){if(e===2&&(i=qp(t),i!==0&&(r=i,e=_m(t,i))),e===1)throw n=zl,ns(t,0),Hr(t,r),Ht(t,Ge()),n;if(e===6)Hr(t,r);else{if(i=t.current.alternate,!(r&30)&&!_N(i)&&(e=Ah(t,r),e===2&&(s=qp(t),s!==0&&(r=s,e=_m(t,s))),e===1))throw n=zl,ns(t,0),Hr(t,r),Ht(t,Ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:$i(t,Bt,or);break;case 3:if(Hr(t,r),(r&130023424)===r&&(e=py+500-Ge(),10<e)){if(lh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Jp($i.bind(null,t,Bt,or),e);break}$i(t,Bt,or);break;case 4:if(Hr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yN(r/1960))-r,10<r){t.timeoutHandle=Jp($i.bind(null,t,Bt,or),r);break}$i(t,Bt,or);break;case 5:$i(t,Bt,or);break;default:throw Error(B(329))}}}return Ht(t,Ge()),t.callbackNode===n?sS.bind(null,t):null}function _m(t,e){var n=fl;return t.current.memoizedState.isDehydrated&&(ns(t,e).flags|=256),t=Ah(t,e),t!==2&&(e=Bt,Bt=n,e!==null&&vm(e)),t}function vm(t){Bt===null?Bt=t:Bt.push.apply(Bt,t)}function _N(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Vn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hr(t,e){for(e&=~fy,e&=~pd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nn(e),r=1<<n;t[n]=-1,e&=~r}}function iw(t){if(he&6)throw Error(B(327));xo();var e=lh(t,0);if(!(e&1))return Ht(t,Ge()),null;var n=Ah(t,e);if(t.tag!==0&&n===2){var r=qp(t);r!==0&&(e=r,n=_m(t,r))}if(n===1)throw n=zl,ns(t,0),Hr(t,e),Ht(t,Ge()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$i(t,Bt,or),Ht(t,Ge()),null}function my(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Mo=Ge()+500,cd&&Ci())}}function ms(t){ni!==null&&ni.tag===0&&!(he&6)&&xo();var e=he;he|=1;var n=vn.transition,r=_e;try{if(vn.transition=null,_e=1,t)return t()}finally{_e=r,vn.transition=n,he=e,!(he&6)&&Ci()}}function gy(){Zt=po.current,Ae(po)}function ns(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HC(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(Yg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fh();break;case 3:Vo(),Ae(Gt),Ae(St),sy();break;case 5:iy(r);break;case 4:Vo();break;case 13:Ae(Oe);break;case 19:Ae(Oe);break;case 10:ey(r.type._context);break;case 22:case 23:gy()}n=n.return}if(at=t,Ye=t=di(t.current,null),dt=Zt=e,tt=0,zl=null,fy=pd=ps=0,Bt=fl=null,Zi!==null){for(e=0;e<Zi.length;e++)if(n=Zi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zi=null}return t}function oS(t,e){do{var n=Ye;try{if(Zg(),Cc.current=Ih,Eh){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eh=!1}if(fs=0,st=et=Le=null,hl=!1,Fl=0,dy.current=null,n===null||n.return===null){tt=1,zl=e,Ye=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=K0(o);if(g!==null){g.flags&=-257,G0(g,o,a,s,e),g.mode&1&&q0(s,c,e),e=g,l=c;var I=e.updateQueue;if(I===null){var A=new Set;A.add(l),e.updateQueue=A}else I.add(l);break e}else{if(!(e&1)){q0(s,c,e),yy();break e}l=Error(B(426))}}else if(ke&&a.mode&1){var P=K0(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),G0(P,o,a,s,e),Xg(Lo(l,a));break e}}s=l=Lo(l,a),tt!==4&&(tt=2),fl===null?fl=[s]:fl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=$T(s,l,e);M0(s,T);break e;case 1:a=l;var v=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(ci===null||!ci.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var k=qT(s,a,e);M0(s,k);break e}}s=s.return}while(s!==null)}uS(n)}catch(M){e=M,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(!0)}function aS(){var t=Th.current;return Th.current=Ih,t===null?Ih:t}function yy(){(tt===0||tt===3||tt===2)&&(tt=4),at===null||!(ps&268435455)&&!(pd&268435455)||Hr(at,dt)}function Ah(t,e){var n=he;he|=2;var r=aS();(at!==t||dt!==e)&&(or=null,ns(t,e));do try{vN();break}catch(i){oS(t,i)}while(!0);if(Zg(),he=n,Th.current=r,Ye!==null)throw Error(B(261));return at=null,dt=0,tt}function vN(){for(;Ye!==null;)lS(Ye)}function wN(){for(;Ye!==null&&!Kk();)lS(Ye)}function lS(t){var e=hS(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?uS(t):Ye=e,dy.current=null}function uS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fN(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Ye=null;return}}else if(n=dN(n,e,Zt),n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);tt===0&&(tt=5)}function $i(t,e,n){var r=_e,i=vn.transition;try{vn.transition=null,_e=1,EN(t,e,n,r)}finally{vn.transition=i,_e=r}return null}function EN(t,e,n,r){do xo();while(ni!==null);if(he&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(tC(t,s),t===at&&(Ye=at=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uc||(uc=!0,dS(ah,function(){return xo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vn.transition,vn.transition=null;var o=_e;_e=1;var a=he;he|=4,dy.current=null,mN(t,n),rS(n,t),zC(Yp),uh=!!Qp,Yp=Qp=null,t.current=n,gN(n),Gk(),he=a,_e=o,vn.transition=s}else t.current=n;if(uc&&(uc=!1,ni=t,xh=i),s=t.pendingLanes,s===0&&(ci=null),Qk(n.stateNode),Ht(t,Ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sh)throw Sh=!1,t=gm,gm=null,t;return xh&1&&t.tag!==0&&xo(),s=t.pendingLanes,s&1?t===ym?pl++:(pl=0,ym=t):pl=0,Ci(),null}function xo(){if(ni!==null){var t=BI(xh),e=vn.transition,n=_e;try{if(vn.transition=null,_e=16>t?16:t,ni===null)var r=!1;else{if(t=ni,ni=null,xh=0,he&6)throw Error(B(331));var i=he;for(he|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(G=c;G!==null;){var h=G;switch(h.tag){case 0:case 11:case 15:dl(8,h,s)}var f=h.child;if(f!==null)f.return=h,G=f;else for(;G!==null;){h=G;var p=h.sibling,g=h.return;if(eS(h),h===c){G=null;break}if(p!==null){p.return=g,G=p;break}G=g}}}var I=s.alternate;if(I!==null){var A=I.child;if(A!==null){I.child=null;do{var P=A.sibling;A.sibling=null,A=P}while(A!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:dl(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,G=T;break e}G=s.return}}var v=t.current;for(G=v;G!==null;){o=G;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,G=E;else e:for(o=v;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fd(9,a)}}catch(M){Be(a,a.return,M)}if(a===o){G=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,G=k;break e}G=a.return}}if(he=i,Ci(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(sd,t)}catch{}r=!0}return r}finally{_e=n,vn.transition=e}}return!1}function sw(t,e,n){e=Lo(n,e),e=$T(t,e,1),t=ui(t,e,1),e=Ot(),t!==null&&(uu(t,1,e),Ht(t,e))}function Be(t,e,n){if(t.tag===3)sw(t,t,n);else for(;e!==null;){if(e.tag===3){sw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ci===null||!ci.has(r))){t=Lo(n,t),t=qT(e,t,1),e=ui(e,t,1),t=Ot(),e!==null&&(uu(e,1,t),Ht(e,t));break}}e=e.return}}function IN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,at===t&&(dt&n)===n&&(tt===4||tt===3&&(dt&130023424)===dt&&500>Ge()-py?ns(t,0):fy|=n),Ht(t,e)}function cS(t,e){e===0&&(t.mode&1?(e=Zu,Zu<<=1,!(Zu&130023424)&&(Zu=4194304)):e=1);var n=Ot();t=Tr(t,e),t!==null&&(uu(t,e,n),Ht(t,n))}function TN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cS(t,n)}function SN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),cS(t,n)}var hS;hS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gt.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,hN(t,e,n);$t=!!(t.flags&131072)}else $t=!1,ke&&e.flags&1048576&&pT(e,gh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Dc(t,e),t=e.pendingProps;var i=No(e,St.current);So(e,n),i=ay(null,e,r,t,i,n);var s=ly();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(r)?(s=!0,ph(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ny(e),i.updater=hd,e.stateNode=i,i._reactInternals=e,sm(e,r,t,n),e=lm(null,e,r,!0,s,n)):(e.tag=0,ke&&s&&Qg(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Dc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=AN(r),t=Rn(r,t),i){case 0:e=am(null,e,r,t,n);break e;case 1:e=Q0(null,e,r,t,n);break e;case 11:e=W0(null,e,r,t,n);break e;case 14:e=H0(null,e,r,Rn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),am(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),Q0(t,e,r,i,n);case 3:e:{if(HT(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,_T(t,e),vh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Lo(Error(B(423)),e),e=Y0(t,e,r,n,i);break e}else if(r!==i){i=Lo(Error(B(424)),e),e=Y0(t,e,r,n,i);break e}else for(tn=li(e.stateNode.containerInfo.firstChild),sn=e,ke=!0,kn=null,n=IT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Do(),r===i){e=Sr(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return TT(e),t===null&&nm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Xp(r,i)?o=null:s!==null&&Xp(r,s)&&(e.flags|=32),WT(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&nm(e),null;case 13:return QT(t,e,n);case 4:return ry(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Oo(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),W0(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(yh,r._currentValue),r._currentValue=o,s!==null)if(Vn(s.value,o)){if(s.children===i.children&&!Gt.current){e=Sr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=yr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,So(e,n),i=En(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=Rn(r,e.pendingProps),i=Rn(r.type,i),H0(t,e,r,i,n);case 15:return KT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),Dc(t,e),e.tag=1,Wt(r)?(t=!0,ph(e)):t=!1,So(e,n),wT(e,r,i),sm(e,r,i,n),lm(null,e,r,!0,t,n);case 19:return YT(t,e,n);case 22:return GT(t,e,n)}throw Error(B(156,e.tag))};function dS(t,e){return FI(t,e)}function xN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,r){return new xN(t,e,n,r)}function _y(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AN(t){if(typeof t=="function")return _y(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mg)return 11;if(t===Fg)return 14}return 2}function di(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Lc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_y(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ro:return rs(n.children,i,s,e);case Lg:o=8,i|=8;break;case Pp:return t=yn(12,n,e,i|2),t.elementType=Pp,t.lanes=s,t;case kp:return t=yn(13,n,e,i),t.elementType=kp,t.lanes=s,t;case Cp:return t=yn(19,n,e,i),t.elementType=Cp,t.lanes=s,t;case EI:return md(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case vI:o=10;break e;case wI:o=9;break e;case Mg:o=11;break e;case Fg:o=14;break e;case qr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=yn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function rs(t,e,n,r){return t=yn(7,t,r,e),t.lanes=n,t}function md(t,e,n,r){return t=yn(22,t,r,e),t.elementType=EI,t.lanes=n,t.stateNode={isHidden:!1},t}function Qf(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function Yf(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kf(0),this.expirationTimes=kf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vy(t,e,n,r,i,s,o,a,l){return t=new bN(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ny(s),t}function RN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:no,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fS(t){if(!t)return vi;t=t._reactInternals;e:{if(Ps(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Wt(n))return dT(t,n,e)}return e}function pS(t,e,n,r,i,s,o,a,l){return t=vy(n,r,!0,t,i,s,o,a,l),t.context=fS(null),n=t.current,r=Ot(),i=hi(n),s=yr(r,i),s.callback=e??null,ui(n,s,i),t.current.lanes=i,uu(t,i,r),Ht(t,r),t}function gd(t,e,n,r){var i=e.current,s=Ot(),o=hi(i);return n=fS(n),e.context===null?e.context=n:e.pendingContext=n,e=yr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ui(i,e,o),t!==null&&(Dn(t,i,o,s),kc(t,i,o)),o}function bh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ow(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wy(t,e){ow(t,e),(t=t.alternate)&&ow(t,e)}function PN(){return null}var mS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ey(t){this._internalRoot=t}yd.prototype.render=Ey.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));gd(t,e,null,null)};yd.prototype.unmount=Ey.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ms(function(){gd(null,t,null,null)}),e[Ir]=null}};function yd(t){this._internalRoot=t}yd.prototype.unstable_scheduleHydration=function(t){if(t){var e=KI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wr.length&&e!==0&&e<Wr[n].priority;n++);Wr.splice(n,0,t),n===0&&WI(t)}};function Iy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function aw(){}function kN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=bh(o);s.call(c)}}var o=pS(e,r,t,0,null,!1,!1,"",aw);return t._reactRootContainer=o,t[Ir]=o.current,Dl(t.nodeType===8?t.parentNode:t),ms(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=bh(l);a.call(c)}}var l=vy(t,0,!1,null,null,!1,!1,"",aw);return t._reactRootContainer=l,t[Ir]=l.current,Dl(t.nodeType===8?t.parentNode:t),ms(function(){gd(e,l,n,r)}),l}function vd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=bh(o);a.call(l)}}gd(e,o,t,i)}else o=kN(n,e,t,i,r);return bh(o)}$I=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ga(e.pendingLanes);n!==0&&(zg(e,n|1),Ht(e,Ge()),!(he&6)&&(Mo=Ge()+500,Ci()))}break;case 13:ms(function(){var r=Tr(t,1);if(r!==null){var i=Ot();Dn(r,t,1,i)}}),wy(t,1)}};Bg=function(t){if(t.tag===13){var e=Tr(t,134217728);if(e!==null){var n=Ot();Dn(e,t,134217728,n)}wy(t,134217728)}};qI=function(t){if(t.tag===13){var e=hi(t),n=Tr(t,e);if(n!==null){var r=Ot();Dn(n,t,e,r)}wy(t,e)}};KI=function(){return _e};GI=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};zp=function(t,e,n){switch(e){case"input":if(Op(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ud(r);if(!i)throw Error(B(90));TI(r),Op(r,i)}}}break;case"textarea":xI(t,n);break;case"select":e=n.value,e!=null&&wo(t,!!n.multiple,e,!1)}};NI=my;DI=ms;var CN={usingClientEntryPoint:!1,Events:[hu,ao,ud,kI,CI,my]},La={findFiberByHostInstance:Ji,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},NN={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=LI(t),t===null?null:t.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||PN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{sd=cc.inject(NN),Hn=cc}catch{}}cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CN;cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Iy(e))throw Error(B(200));return RN(t,e,null,n)};cn.createRoot=function(t,e){if(!Iy(t))throw Error(B(299));var n=!1,r="",i=mS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vy(t,1,!1,null,null,n,!1,r,i),t[Ir]=e.current,Dl(t.nodeType===8?t.parentNode:t),new Ey(e)};cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=LI(e),t=t===null?null:t.stateNode,t};cn.flushSync=function(t){return ms(t)};cn.hydrate=function(t,e,n){if(!_d(e))throw Error(B(200));return vd(null,t,e,!0,n)};cn.hydrateRoot=function(t,e,n){if(!Iy(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pS(e,null,t,1,n??null,i,!1,s,o),t[Ir]=e.current,Dl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yd(e)};cn.render=function(t,e,n){if(!_d(e))throw Error(B(200));return vd(null,t,e,!1,n)};cn.unmountComponentAtNode=function(t){if(!_d(t))throw Error(B(40));return t._reactRootContainer?(ms(function(){vd(null,null,t,!1,function(){t._reactRootContainer=null,t[Ir]=null})}),!0):!1};cn.unstable_batchedUpdates=my;cn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_d(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return vd(t,e,n,!1,r)};cn.version="18.2.0-next-9e3b772b8-20220608";function gS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gS)}catch(t){console.error(t)}}gS(),pI.exports=cn;var yS=pI.exports;const mo=rd(yS);var lw=yS;bp.createRoot=lw.createRoot,bp.hydrateRoot=lw.hydrateRoot;var _S={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(_S);var DN=_S.exports;const We=rd(DN),ON=["xxl","xl","lg","md","sm","xs"],VN="xs",Ty=N.createContext({prefixes:{},breakpoints:ON,minBreakpoint:VN});function xt(t,e){const{prefixes:n}=N.useContext(Ty);return t||n[e]||e}function vS(){const{breakpoints:t}=N.useContext(Ty);return t}function wS(){const{minBreakpoint:t}=N.useContext(Ty);return t}const Sy=N.forwardRef(({bsPrefix:t,fluid:e=!1,as:n="div",className:r,...i},s)=>{const o=xt(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return x.jsx(n,{ref:s,...i,className:We(r,e?`${o}${a}`:o)})});Sy.displayName="Container";var uw={exports:{}},wm={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){function i(o,a,l,c,h,f){var p=c||"<<anonymous>>",g=f||l;if(a[l]==null)return o?new Error("Required "+h+" `"+g+"` was not specified "+("in `"+p+"`.")):null;for(var I=arguments.length,A=Array(I>6?I-6:0),P=6;P<I;P++)A[P-6]=arguments[P];return r.apply(void 0,[a,l,p,h,g].concat(A))}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}t.exports=e.default})(wm,wm.exports);var LN=wm.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=LN,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];function c(){for(var h=arguments.length,f=Array(h),p=0;p<h;p++)f[p]=arguments[p];var g=null;return a.forEach(function(I){if(g==null){var A=I.apply(void 0,f);A!=null&&(g=A)}}),g}return(0,r.default)(c)}t.exports=e.default})(uw,uw.exports);function Em(){return Em=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Em.apply(null,arguments)}function ES(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function cw(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function MN(t){var e=FN(t,"string");return typeof e=="symbol"?e:String(e)}function FN(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function jN(t,e,n){var r=N.useRef(t!==void 0),i=N.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,N.useCallback(function(c){for(var h=arguments.length,f=new Array(h>1?h-1:0),p=1;p<h;p++)f[p-1]=arguments[p];n&&n.apply(void 0,[c].concat(f)),o(c)},[n])]}function IS(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[cw(r)],a=s[r],l=ES(s,[cw(r),r].map(MN)),c=e[r],h=jN(a,o,t[c]),f=h[0],p=h[1];return Em({},l,(i={},i[r]=f,i[c]=p,i))},t)}function Im(t,e){return Im=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Im(t,e)}function UN(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Im(t,e)}var zN=Function.prototype.bind.call(Function.prototype.call,[].slice);function qi(t,e){return zN(t.querySelectorAll(e))}function BN(){const[,t]=N.useReducer(e=>!e,!1);return t}const hw=t=>!t||typeof t=="function"?t:e=>{t.current=e};function $N(t,e){const n=hw(t),r=hw(e);return i=>{n&&n(i),r&&r(i)}}function fu(t,e){return N.useMemo(()=>$N(t,e),[t,e])}const xy=N.createContext(null);xy.displayName="NavContext";const Rh=N.createContext(null),Ay=(t,e=null)=>t!=null?String(t):e||null,TS=N.createContext(null),qN="data-rr-ui-",KN="rrUi";function wd(t){return`${qN}${t}`}function GN(t){return`${KN}${t}`}function WN(t){const e=N.useRef(t);return N.useEffect(()=>{e.current=t},[t]),e}function gn(t){const e=WN(t);return N.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const HN=["as","disabled"];function QN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function YN(t){return!t||t.trim()==="#"}function SS({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const c={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},c];const h=p=>{if((e||t==="a"&&YN(n))&&p.preventDefault(),e){p.stopPropagation();return}o==null||o(p)},f=p=>{p.key===" "&&(p.preventDefault(),h(p))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:h,onKeyDown:f},c]}const xS=N.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=QN(t,HN);const[s,{tagName:o}]=SS(Object.assign({tagName:n,disabled:r},i));return x.jsx(o,Object.assign({},i,s,{ref:e}))});xS.displayName="Button";const XN=["as","active","eventKey"];function JN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function AS({key:t,onClick:e,active:n,id:r,role:i,disabled:s}){const o=N.useContext(Rh),a=N.useContext(xy),l=N.useContext(TS);let c=n;const h={role:i};if(a){!i&&a.role==="tablist"&&(h.role="tab");const f=a.getControllerId(t??null),p=a.getControlledId(t??null);h[wd("event-key")]=t,h.id=f||r,c=n==null&&t!=null?a.activeKey===t:n,(c||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(h["aria-controls"]=p)}return h.role==="tab"&&(h["aria-selected"]=c,c||(h.tabIndex=-1),s&&(h.tabIndex=-1,h["aria-disabled"]=!0)),h.onClick=gn(f=>{s||(e==null||e(f),t!=null&&o&&!f.isPropagationStopped()&&o(t,f))}),[h,{isActive:c}]}const bS=N.forwardRef((t,e)=>{let{as:n=xS,active:r,eventKey:i}=t,s=JN(t,XN);const[o,a]=AS(Object.assign({key:Ay(i,s.href),active:r},s));return o[wd("active")]=a.isActive,x.jsx(n,Object.assign({},s,o,{ref:e}))});bS.displayName="NavItem";const ZN=["as","onSelect","activeKey","role","onKeyDown"];function e2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const dw=()=>{},fw=wd("event-key"),RS=N.forwardRef((t,e)=>{let{as:n="div",onSelect:r,activeKey:i,role:s,onKeyDown:o}=t,a=e2(t,ZN);const l=BN(),c=N.useRef(!1),h=N.useContext(Rh),f=N.useContext(TS);let p,g;f&&(s=s||"tablist",i=f.activeKey,p=f.getControlledId,g=f.getControllerId);const I=N.useRef(null),A=E=>{const k=I.current;if(!k)return null;const M=qi(k,`[${fw}]:not([aria-disabled=true])`),O=k.querySelector("[aria-selected=true]");if(!O||O!==document.activeElement)return null;const w=M.indexOf(O);if(w===-1)return null;let y=w+E;return y>=M.length&&(y=0),y<0&&(y=M.length-1),M[y]},P=(E,k)=>{E!=null&&(r==null||r(E,k),h==null||h(E,k))},T=E=>{if(o==null||o(E),!f)return;let k;switch(E.key){case"ArrowLeft":case"ArrowUp":k=A(-1);break;case"ArrowRight":case"ArrowDown":k=A(1);break;default:return}k&&(E.preventDefault(),P(k.dataset[GN("EventKey")]||null,E),c.current=!0,l())};N.useEffect(()=>{if(I.current&&c.current){const E=I.current.querySelector(`[${fw}][aria-selected=true]`);E==null||E.focus()}c.current=!1});const v=fu(e,I);return x.jsx(Rh.Provider,{value:P,children:x.jsx(xy.Provider,{value:{role:s,activeKey:Ay(i),getControlledId:p||dw,getControllerId:g||dw},children:x.jsx(n,Object.assign({},a,{onKeyDown:T,ref:v,role:s}))})})});RS.displayName="Nav";const t2=Object.assign(RS,{Item:bS}),ks=N.createContext(null);ks.displayName="NavbarContext";const PS=N.createContext(null);PS.displayName="CardHeaderContext";const kS=N.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=xt(e,"nav-item"),x.jsx(n,{ref:i,className:We(t,e),...r})));kS.displayName="NavItem";function n2(){const t=N.useRef(!0),e=N.useRef(()=>t.current);return N.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function r2(t){const e=N.useRef(null);return N.useEffect(()=>{e.current=t}),e.current}const i2=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",s2=typeof document<"u",Tm=s2||i2?N.useLayoutEffect:N.useEffect,o2=["onKeyDown"];function a2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function l2(t){return!t||t.trim()==="#"}const CS=N.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=a2(t,o2);const[i]=SS(Object.assign({tagName:"a"},r)),s=gn(o=>{i.onKeyDown(o),n==null||n(o)});return l2(r.href)||r.role==="button"?x.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):x.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});CS.displayName="Anchor";const NS=N.forwardRef(({bsPrefix:t,className:e,as:n=CS,active:r,eventKey:i,disabled:s=!1,...o},a)=>{t=xt(t,"nav-link");const[l,c]=AS({key:Ay(i,o.href),active:r,disabled:s,...o});return x.jsx(n,{...o,...l,ref:a,disabled:s,className:We(e,t,s&&"disabled",c.isActive&&"active")})});NS.displayName="NavLink";const DS=N.forwardRef((t,e)=>{const{as:n="div",bsPrefix:r,variant:i,fill:s=!1,justify:o=!1,navbar:a,navbarScroll:l,className:c,activeKey:h,...f}=IS(t,{activeKey:"onSelect"}),p=xt(r,"nav");let g,I,A=!1;const P=N.useContext(ks),T=N.useContext(PS);return P?(g=P.bsPrefix,A=a??!0):T&&({cardHeaderBsPrefix:I}=T),x.jsx(t2,{as:n,ref:e,activeKey:h,className:We(c,{[p]:!A,[`${g}-nav`]:A,[`${g}-nav-scroll`]:A&&l,[`${I}-${i}`]:!!I,[`${p}-${i}`]:!!i,[`${p}-fill`]:s,[`${p}-justified`]:o}),...f})});DS.displayName="Nav";const Fn=Object.assign(DS,{Item:kS,Link:NS}),OS=N.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=xt(t,"navbar-brand");const s=n||(r.href?"a":"span");return x.jsx(s,{...r,ref:i,className:We(e,t)})});OS.displayName="NavbarBrand";function by(t){return t&&t.ownerDocument||document}function u2(t){var e=by(t);return e&&e.defaultView||window}function c2(t,e){return u2(t).getComputedStyle(t,e)}var h2=/([A-Z])/g;function d2(t){return t.replace(h2,"-$1").toLowerCase()}var f2=/^ms-/;function hc(t){return d2(t).replace(f2,"-ms-")}var p2=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function m2(t){return!!(t&&p2.test(t))}function _r(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(hc(e))||c2(t).getPropertyValue(hc(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(hc(i)):m2(i)?r+=i+"("+s+") ":n+=hc(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var VS={exports:{}},g2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",y2=g2,_2=y2;function LS(){}function MS(){}MS.resetWarningCache=LS;var v2=function(){function t(r,i,s,o,a,l){if(l!==_2){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:MS,resetWarningCache:LS};return n.PropTypes=n,n};VS.exports=v2();var w2=VS.exports;const Z=rd(w2),pw={disabled:!1},FS=Ce.createContext(null);var E2=function(e){return e.scrollTop},Ha="unmounted",Gr="exited",Cn="entering",ur="entered",Bl="exiting",Cr=function(t){UN(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=Gr,s.appearStatus=Cn):l=ur:r.unmountOnExit||r.mountOnEnter?l=Ha:l=Gr,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Ha?{status:Gr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==Cn&&o!==ur&&(s=Cn):(o===Cn||o===ur)&&(s=Bl)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===Cn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:mo.findDOMNode(this);o&&E2(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Gr&&this.setState({status:Ha})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[mo.findDOMNode(this),a],c=l[0],h=l[1],f=this.getTimeouts(),p=a?f.appear:f.enter;if(!i&&!o||pw.disabled){this.safeSetState({status:ur},function(){s.props.onEntered(c)});return}this.props.onEnter(c,h),this.safeSetState({status:Cn},function(){s.props.onEntering(c,h),s.onTransitionEnd(p,function(){s.safeSetState({status:ur},function(){s.props.onEntered(c,h)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:mo.findDOMNode(this);if(!s||pw.disabled){this.safeSetState({status:Gr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Bl},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Gr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:mo.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=l[0],h=l[1];this.props.addEndListener(c,h)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Ha)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=ES(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ce.createElement(FS.Provider,{value:null},typeof o=="function"?o(i,a):Ce.cloneElement(Ce.Children.only(o),a))},e}(Ce.Component);Cr.contextType=FS;Cr.propTypes={};function Bs(){}Cr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Bs,onEntering:Bs,onEntered:Bs,onExit:Bs,onExiting:Bs,onExited:Bs};Cr.UNMOUNTED=Ha;Cr.EXITED=Gr;Cr.ENTERING=Cn;Cr.ENTERED=ur;Cr.EXITING=Bl;const Ed=!!(typeof window<"u"&&window.document&&window.document.createElement);var Sm=!1,xm=!1;try{var Xf={get passive(){return Sm=!0},get once(){return xm=Sm=!0}};Ed&&(window.addEventListener("test",Xf,Xf),window.removeEventListener("test",Xf,!0))}catch{}function I2(t,e,n,r){if(r&&typeof r!="boolean"&&!xm){var i=r.once,s=r.capture,o=n;!xm&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,Sm?r:s)}t.addEventListener(e,n,r)}function T2(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Ph(t,e,n,r){return I2(t,e,n,r),function(){T2(t,e,n,r)}}function S2(t,e,n,r){if(r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function x2(t){var e=_r(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function A2(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||S2(t,"transitionend",!0)},e+n),s=Ph(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function b2(t,e,n,r){n==null&&(n=x2(t)||0);var i=A2(t,n,r),s=Ph(t,"transitionend",e);return function(){i(),s()}}function mw(t,e){const n=_r(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function Ry(t,e){const n=mw(t,"transitionDuration"),r=mw(t,"transitionDelay"),i=b2(t,s=>{s.target===t&&(i(),e(s))},n+r)}function Ma(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}function jS(t){t.offsetHeight}function R2(t){return t&&"setState"in t?mo.findDOMNode(t):t??null}const Py=Ce.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...c},h)=>{const f=N.useRef(null),p=fu(f,l),g=O=>{p(R2(O))},I=O=>w=>{O&&f.current&&O(f.current,w)},A=N.useCallback(I(t),[t]),P=N.useCallback(I(e),[e]),T=N.useCallback(I(n),[n]),v=N.useCallback(I(r),[r]),E=N.useCallback(I(i),[i]),k=N.useCallback(I(s),[s]),M=N.useCallback(I(o),[o]);return x.jsx(Cr,{ref:h,...c,onEnter:A,onEntered:T,onEntering:P,onExit:v,onExited:k,onExiting:E,addEndListener:M,nodeRef:f,children:typeof a=="function"?(O,w)=>a(O,{...w,ref:g}):Ce.cloneElement(a,{ref:g})})}),P2={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function k2(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=P2[t];return r+parseInt(_r(e,i[0]),10)+parseInt(_r(e,i[1]),10)}const C2={[Gr]:"collapse",[Bl]:"collapsing",[Cn]:"collapsing",[ur]:"collapse show"},N2=Ce.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",in:l=!1,timeout:c=300,mountOnEnter:h=!1,unmountOnExit:f=!1,appear:p=!1,getDimensionValue:g=k2,...I},A)=>{const P=typeof a=="function"?a():a,T=N.useMemo(()=>Ma(O=>{O.style[P]="0"},t),[P,t]),v=N.useMemo(()=>Ma(O=>{const w=`scroll${P[0].toUpperCase()}${P.slice(1)}`;O.style[P]=`${O[w]}px`},e),[P,e]),E=N.useMemo(()=>Ma(O=>{O.style[P]=null},n),[P,n]),k=N.useMemo(()=>Ma(O=>{O.style[P]=`${g(P,O)}px`,jS(O)},r),[r,g,P]),M=N.useMemo(()=>Ma(O=>{O.style[P]=null},i),[P,i]);return x.jsx(Py,{ref:A,addEndListener:Ry,...I,"aria-expanded":I.role?l:null,onEnter:T,onEntering:v,onEntered:E,onExit:k,onExiting:M,childRef:o.ref,in:l,timeout:c,mountOnEnter:h,unmountOnExit:f,appear:p,children:(O,w)=>Ce.cloneElement(o,{...w,className:We(s,o.props.className,C2[O],P==="width"&&"collapse-horizontal")})})}),US=N.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=xt(e,"navbar-collapse");const i=N.useContext(ks);return x.jsx(N2,{in:!!(i&&i.expanded),...n,children:x.jsx("div",{ref:r,className:e,children:t})})});US.displayName="NavbarCollapse";const zS=N.forwardRef(({bsPrefix:t,className:e,children:n,label:r="Toggle navigation",as:i="button",onClick:s,...o},a)=>{t=xt(t,"navbar-toggler");const{onToggle:l,expanded:c}=N.useContext(ks)||{},h=gn(f=>{s&&s(f),l&&l()});return i==="button"&&(o.type="button"),x.jsx(i,{...o,ref:a,onClick:h,"aria-label":r,className:We(e,t,!c&&"collapsed"),children:n||x.jsx("span",{className:`${t}-icon`})})});zS.displayName="NavbarToggle";const Am=new WeakMap,gw=(t,e)=>{if(!t||!e)return;const n=Am.get(e)||new Map;Am.set(e,n);let r=n.get(t);return r||(r=e.matchMedia(t),r.refCount=0,n.set(r.media,r)),r};function D2(t,e=typeof window>"u"?void 0:window){const n=gw(t,e),[r,i]=N.useState(()=>n?n.matches:!1);return Tm(()=>{let s=gw(t,e);if(!s)return i(!1);let o=Am.get(e);const a=()=>{i(s.matches)};return s.refCount++,s.addListener(a),a(),()=>{s.removeListener(a),s.refCount--,s.refCount<=0&&(o==null||o.delete(s.media)),s=void 0}},[t]),r}function O2(t){const e=Object.keys(t);function n(a,l){return a===l?l:a?`${a} and ${l}`:l}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){const l=r(a);let c=t[l];return typeof c=="number"?c=`${c-.2}px`:c=`calc(${c} - 0.2px)`,`(max-width: ${c})`}function s(a){let l=t[a];return typeof l=="number"&&(l=`${l}px`),`(min-width: ${l})`}function o(a,l,c){let h;typeof a=="object"?(h=a,c=l,l=!0):(l=l||!0,h={[a]:l});let f=N.useMemo(()=>Object.entries(h).reduce((p,[g,I])=>((I==="up"||I===!0)&&(p=n(p,s(g))),(I==="down"||I===!0)&&(p=n(p,i(g))),p),""),[JSON.stringify(h)]);return D2(f,c)}return o}const V2=O2({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function Jf(t){t===void 0&&(t=by());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function yw(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function L2(t){const e=N.useRef(t);return e.current=t,e}function M2(t){const e=L2(t);N.useEffect(()=>()=>e.current(),[])}function F2(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const _w=wd("modal-open");class ky{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return F2(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(_r(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(_w,""),_r(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(_w),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const BS=N.createContext(Ed?window:void 0);BS.Provider;function Cy(){return N.useContext(BS)}const Zf=(t,e)=>Ed?t==null?(e||by()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function j2(t,e){const n=Cy(),[r,i]=N.useState(()=>Zf(t,n==null?void 0:n.document));if(!r){const s=Zf(t);s&&i(s)}return N.useEffect(()=>{},[e,r]),N.useEffect(()=>{const s=Zf(t);s!==r&&i(s)},[t,r]),r}function U2({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=N.useRef(null),o=N.useRef(e),a=gn(n);N.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const l=fu(s,t.ref),c=N.cloneElement(t,{ref:l});return e?c:i||!o.current&&r?null:c}function z2(t){return t.code==="Escape"||t.keyCode===27}function B2(){const t=N.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const $2=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function q2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function K2(t){let{onEnter:e,onEntering:n,onEntered:r,onExit:i,onExiting:s,onExited:o,addEndListener:a,children:l}=t,c=q2(t,$2);const{major:h}=B2(),f=h>=19?l.props.ref:l.ref,p=N.useRef(null),g=fu(p,typeof l=="function"?null:f),I=O=>w=>{O&&p.current&&O(p.current,w)},A=N.useCallback(I(e),[e]),P=N.useCallback(I(n),[n]),T=N.useCallback(I(r),[r]),v=N.useCallback(I(i),[i]),E=N.useCallback(I(s),[s]),k=N.useCallback(I(o),[o]),M=N.useCallback(I(a),[a]);return Object.assign({},c,{nodeRef:p},e&&{onEnter:A},n&&{onEntering:P},r&&{onEntered:T},i&&{onExit:v},s&&{onExiting:E},o&&{onExited:k},a&&{addEndListener:M},{children:typeof l=="function"?(O,w)=>l(O,Object.assign({},w,{ref:g})):N.cloneElement(l,{ref:g})})}const G2=["component"];function W2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const H2=N.forwardRef((t,e)=>{let{component:n}=t,r=W2(t,G2);const i=K2(r);return x.jsx(n,Object.assign({ref:e},i))});function Q2({in:t,onTransition:e}){const n=N.useRef(null),r=N.useRef(!0),i=gn(e);return Tm(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),Tm(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function Y2({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=N.useState(!e);e&&s&&o(!1);const a=Q2({in:!!e,onTransition:c=>{const h=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(o(!0),n==null||n(c.element)))};Promise.resolve(i(c)).then(h,f=>{throw c.in||o(!0),f})}}),l=fu(a,t.ref);return s&&!e?null:N.cloneElement(t,{ref:l})}function vw(t,e,n){return t?x.jsx(H2,Object.assign({},n,{component:t})):e?x.jsx(Y2,Object.assign({},n,{transition:e})):x.jsx(U2,Object.assign({},n))}const X2=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function J2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let ep;function Z2(t){return ep||(ep=new ky({ownerDocument:t==null?void 0:t.document})),ep}function eD(t){const e=Cy(),n=t||Z2(e),r=N.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:N.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:N.useCallback(i=>{r.current.backdrop=i},[])})}const $S=N.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:c,onEscapeKeyDown:h,transition:f,runTransition:p,backdropTransition:g,runBackdropTransition:I,autoFocus:A=!0,enforceFocus:P=!0,restoreFocus:T=!0,restoreFocusOptions:v,renderDialog:E,renderBackdrop:k=Ie=>x.jsx("div",Object.assign({},Ie)),manager:M,container:O,onShow:w,onHide:y=()=>{},onExit:S,onExited:R,onExiting:C,onEnter:D,onEntering:b,onEntered:Je}=t,jt=J2(t,X2);const pt=Cy(),qe=j2(O),z=eD(M),Q=n2(),J=r2(n),[ue,re]=N.useState(!n),fe=N.useRef(null);N.useImperativeHandle(e,()=>z,[z]),Ed&&!J&&n&&(fe.current=Jf(pt==null?void 0:pt.document)),n&&ue&&re(!1);const Ze=gn(()=>{if(z.add(),fn.current=Ph(document,"keydown",rr),Yt.current=Ph(document,"focus",()=>setTimeout(Ke),!0),w&&w(),A){var Ie,pa;const ma=Jf((Ie=(pa=z.dialog)==null?void 0:pa.ownerDocument)!=null?Ie:pt==null?void 0:pt.document);z.dialog&&ma&&!yw(z.dialog,ma)&&(fe.current=ma,z.dialog.focus())}}),ge=gn(()=>{if(z.remove(),fn.current==null||fn.current(),Yt.current==null||Yt.current(),T){var Ie;(Ie=fe.current)==null||Ie.focus==null||Ie.focus(v),fe.current=null}});N.useEffect(()=>{!n||!qe||Ze()},[n,qe,Ze]),N.useEffect(()=>{ue&&ge()},[ue,ge]),M2(()=>{ge()});const Ke=gn(()=>{if(!P||!Q()||!z.isTopModal())return;const Ie=Jf(pt==null?void 0:pt.document);z.dialog&&Ie&&!yw(z.dialog,Ie)&&z.dialog.focus()}),mt=gn(Ie=>{Ie.target===Ie.currentTarget&&(c==null||c(Ie),a===!0&&y())}),rr=gn(Ie=>{l&&z2(Ie)&&z.isTopModal()&&(h==null||h(Ie),Ie.defaultPrevented||y())}),Yt=N.useRef(),fn=N.useRef(),Sn=(...Ie)=>{re(!0),R==null||R(...Ie)};if(!qe)return null;const At=Object.assign({role:r,ref:z.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},jt,{style:s,className:i,tabIndex:-1});let Li=E?E(At):x.jsx("div",Object.assign({},At,{children:N.cloneElement(o,{role:"document"})}));Li=vw(f,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:S,onExiting:C,onExited:Sn,onEnter:D,onEntering:b,onEntered:Je,children:Li});let Or=null;return a&&(Or=k({ref:z.setBackdropRef,onClick:mt}),Or=vw(g,I,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Or})),x.jsx(x.Fragment,{children:mo.createPortal(x.jsxs(x.Fragment,{children:[Or,Li]}),qe)})});$S.displayName="Modal";const tD=Object.assign($S,{Manager:ky}),nD={[Cn]:"show",[ur]:"show"},qS=N.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=N.useCallback((l,c)=>{jS(l),r==null||r(l,c)},[r]);return x.jsx(Py,{ref:s,addEndListener:Ry,...o,onEnter:a,childRef:e.ref,children:(l,c)=>N.cloneElement(e,{...c,className:We("fade",t,e.props.className,nD[l],n[l])})})});qS.displayName="Fade";const KS=N.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=xt(e,"offcanvas-body"),x.jsx(n,{ref:i,className:We(t,e),...r})));KS.displayName="OffcanvasBody";const rD={[Cn]:"show",[ur]:"show"},GS=N.forwardRef(({bsPrefix:t,className:e,children:n,in:r=!1,mountOnEnter:i=!1,unmountOnExit:s=!1,appear:o=!1,...a},l)=>(t=xt(t,"offcanvas"),x.jsx(Py,{ref:l,addEndListener:Ry,in:r,mountOnEnter:i,unmountOnExit:s,appear:o,...a,childRef:n.ref,children:(c,h)=>N.cloneElement(n,{...h,className:We(e,n.props.className,(c===Cn||c===Bl)&&`${t}-toggling`,rD[c])})})));GS.displayName="OffcanvasToggling";const WS=N.createContext({onHide(){}}),iD={"aria-label":Z.string,onClick:Z.func,variant:Z.oneOf(["white"])},Ny=N.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>x.jsx("button",{ref:i,type:"button",className:We("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));Ny.displayName="CloseButton";Ny.propTypes=iD;const sD=N.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const a=N.useContext(WS),l=gn(()=>{a==null||a.onHide(),r==null||r()});return x.jsxs("div",{ref:o,...s,children:[i,n&&x.jsx(Ny,{"aria-label":t,variant:e,onClick:l})]})}),HS=N.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=xt(t,"offcanvas-header"),x.jsx(sD,{ref:s,...i,className:We(e,t),closeLabel:n,closeButton:r})));HS.displayName="OffcanvasHeader";const oD=t=>N.forwardRef((e,n)=>x.jsx("div",{...e,ref:n,className:We(e.className,t)})),aD=oD("h5"),QS=N.forwardRef(({className:t,bsPrefix:e,as:n=aD,...r},i)=>(e=xt(e,"offcanvas-title"),x.jsx(n,{ref:i,className:We(t,e),...r})));QS.displayName="OffcanvasTitle";function lD(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function uD(t,e){t.classList?t.classList.add(e):lD(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function ww(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function cD(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=ww(t.className,e):t.setAttribute("class",ww(t.className&&t.className.baseVal||"",e))}const $s={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class YS extends ky{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,_r(n,{[e]:`${parseFloat(_r(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],_r(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(uD(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";qi(n,$s.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),qi(n,$s.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),qi(n,$s.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();cD(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";qi(n,$s.FIXED_CONTENT).forEach(s=>this.restore(r,s)),qi(n,$s.STICKY_CONTENT).forEach(s=>this.restore(i,s)),qi(n,$s.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let tp;function hD(t){return tp||(tp=new YS(t)),tp}function dD(t){return x.jsx(GS,{...t})}function fD(t){return x.jsx(qS,{...t})}const XS=N.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i="start",responsive:s,show:o=!1,backdrop:a=!0,keyboard:l=!0,scroll:c=!1,onEscapeKeyDown:h,onShow:f,onHide:p,container:g,autoFocus:I=!0,enforceFocus:A=!0,restoreFocus:P=!0,restoreFocusOptions:T,onEntered:v,onExit:E,onExiting:k,onEnter:M,onEntering:O,onExited:w,backdropClassName:y,manager:S,renderStaticNode:R=!1,...C},D)=>{const b=N.useRef();t=xt(t,"offcanvas");const{onToggle:Je}=N.useContext(ks)||{},[jt,pt]=N.useState(!1),qe=V2(s||"xs","up");N.useEffect(()=>{pt(s?o&&!qe:o)},[o,s,qe]);const z=gn(()=>{Je==null||Je(),p==null||p()}),Q=N.useMemo(()=>({onHide:z}),[z]);function J(){return S||(c?(b.current||(b.current=new YS({handleContainerOverflow:!1})),b.current):hD())}const ue=(ge,...Ke)=>{ge&&(ge.style.visibility="visible"),M==null||M(ge,...Ke)},re=(ge,...Ke)=>{ge&&(ge.style.visibility=""),w==null||w(...Ke)},fe=N.useCallback(ge=>x.jsx("div",{...ge,className:We(`${t}-backdrop`,y)}),[y,t]),Ze=ge=>x.jsx("div",{...ge,...C,className:We(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return x.jsxs(x.Fragment,{children:[!jt&&(s||R)&&Ze({}),x.jsx(WS.Provider,{value:Q,children:x.jsx(tD,{show:jt,ref:D,backdrop:a,container:g,keyboard:l,autoFocus:I,enforceFocus:A&&!c,restoreFocus:P,restoreFocusOptions:T,onEscapeKeyDown:h,onShow:f,onHide:z,onEnter:ue,onEntering:O,onEntered:v,onExit:E,onExiting:k,onExited:re,manager:J(),transition:dD,backdropTransition:fD,renderBackdrop:fe,renderDialog:Ze})})]})});XS.displayName="Offcanvas";const pD=Object.assign(XS,{Body:KS,Header:HS,Title:QS}),JS=N.forwardRef((t,e)=>{const n=N.useContext(ks);return x.jsx(pD,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});JS.displayName="NavbarOffcanvas";const ZS=N.forwardRef(({className:t,bsPrefix:e,as:n="span",...r},i)=>(e=xt(e,"navbar-text"),x.jsx(n,{ref:i,className:We(t,e),...r})));ZS.displayName="NavbarText";const ex=N.forwardRef((t,e)=>{const{bsPrefix:n,expand:r=!0,variant:i="light",bg:s,fixed:o,sticky:a,className:l,as:c="nav",expanded:h,onToggle:f,onSelect:p,collapseOnSelect:g=!1,...I}=IS(t,{expanded:"onToggle"}),A=xt(n,"navbar"),P=N.useCallback((...E)=>{p==null||p(...E),g&&h&&(f==null||f(!1))},[p,g,h,f]);I.role===void 0&&c!=="nav"&&(I.role="navigation");let T=`${A}-expand`;typeof r=="string"&&(T=`${T}-${r}`);const v=N.useMemo(()=>({onToggle:()=>f==null?void 0:f(!h),bsPrefix:A,expanded:!!h,expand:r}),[A,h,r,f]);return x.jsx(ks.Provider,{value:v,children:x.jsx(Rh.Provider,{value:P,children:x.jsx(c,{ref:e,...I,className:We(l,A,r&&T,i&&`${A}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});ex.displayName="Navbar";const dc=Object.assign(ex,{Brand:OS,Collapse:US,Offcanvas:JS,Text:ZS,Toggle:zS});var Ew={};/**
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
 */const tx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},nx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new gD;const p=s<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const I=c<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yD=function(t){const e=tx(t);return nx.encodeByteArray(e,!0)},kh=function(t){return yD(t).replace(/\./g,"")},rx=function(t){try{return nx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _D(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vD=()=>_D().__FIREBASE_DEFAULTS__,wD=()=>{if(typeof process>"u"||typeof Ew>"u")return;const t=Ew.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ED=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rx(t[1]);return e&&JSON.parse(e)},Id=()=>{try{return vD()||wD()||ED()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ix=t=>{var e,n;return(n=(e=Id())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ID=t=>{const e=ix(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sx=()=>{var t;return(t=Id())===null||t===void 0?void 0:t.config},ox=t=>{var e;return(e=Id())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class TD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function SD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[kh(JSON.stringify(n)),kh(JSON.stringify(o)),""].join(".")}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function AD(){var t;const e=(t=Id())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kD(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ax(){return!AD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lx(){try{return typeof indexedDB=="object"}catch{return!1}}function CD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const ND="FirebaseError";class nr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ND,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pu.prototype.create)}}class pu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?DD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nr(i,a,r)}}function DD(t,e){return t.replace(OD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const OD=/\{\$([^}]+)}/g;function VD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $l(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Iw(s)&&Iw(o)){if(!$l(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Iw(t){return t!==null&&typeof t=="object"}/**
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
 */function mu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ya(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function LD(t,e){const n=new MD(t,e);return n.subscribe.bind(n)}class MD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=np),i.error===void 0&&(i.error=np),i.complete===void 0&&(i.complete=np);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function np(){}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class wi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ki="[DEFAULT]";/**
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
 */class jD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new TD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zD(e))try{this.getOrInitializeService({instanceIdentifier:Ki})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ki){return this.instances.has(e)}getOptions(e=Ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ki){return this.component?this.component.multipleInstances?e:Ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UD(t){return t===Ki?void 0:t}function zD(t){return t.instantiationMode==="EAGER"}/**
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
 */class BD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const $D={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},qD=oe.INFO,KD={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},GD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=KD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dy{constructor(e){this.name=e,this._logLevel=qD,this._logHandler=GD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$D[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const WD=(t,e)=>e.some(n=>t instanceof n);let Tw,Sw;function HD(){return Tw||(Tw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QD(){return Sw||(Sw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ux=new WeakMap,bm=new WeakMap,cx=new WeakMap,rp=new WeakMap,Oy=new WeakMap;function YD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ux.set(n,t)}).catch(()=>{}),Oy.set(e,t),e}function XD(t){if(bm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bm.set(t,e)}let Rm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function JD(t){Rm=t(Rm)}function ZD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ip(this),e,...n);return cx.set(r,e.sort?e.sort():[e]),fi(r)}:QD().includes(t)?function(...e){return t.apply(ip(this),e),fi(ux.get(this))}:function(...e){return fi(t.apply(ip(this),e))}}function eO(t){return typeof t=="function"?ZD(t):(t instanceof IDBTransaction&&XD(t),WD(t,HD())?new Proxy(t,Rm):t)}function fi(t){if(t instanceof IDBRequest)return YD(t);if(rp.has(t))return rp.get(t);const e=eO(t);return e!==t&&(rp.set(t,e),Oy.set(e,t)),e}const ip=t=>Oy.get(t);function tO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=fi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fi(o.result),l.oldVersion,l.newVersion,fi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const nO=["get","getKey","getAll","getAllKeys","count"],rO=["put","add","delete","clear"],sp=new Map;function xw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sp.get(e))return sp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=rO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return sp.set(e,s),s}JD(t=>({...t,get:(e,n,r)=>xw(e,n)||t.get(e,n,r),has:(e,n)=>!!xw(e,n)||t.has(e,n)}));/**
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
 */class iO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pm="@firebase/app",Aw="0.10.13";/**
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
 */const xr=new Dy("@firebase/app"),oO="@firebase/app-compat",aO="@firebase/analytics-compat",lO="@firebase/analytics",uO="@firebase/app-check-compat",cO="@firebase/app-check",hO="@firebase/auth",dO="@firebase/auth-compat",fO="@firebase/database",pO="@firebase/data-connect",mO="@firebase/database-compat",gO="@firebase/functions",yO="@firebase/functions-compat",_O="@firebase/installations",vO="@firebase/installations-compat",wO="@firebase/messaging",EO="@firebase/messaging-compat",IO="@firebase/performance",TO="@firebase/performance-compat",SO="@firebase/remote-config",xO="@firebase/remote-config-compat",AO="@firebase/storage",bO="@firebase/storage-compat",RO="@firebase/firestore",PO="@firebase/vertexai-preview",kO="@firebase/firestore-compat",CO="firebase",NO="10.14.1";/**
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
 */const km="[DEFAULT]",DO={[Pm]:"fire-core",[oO]:"fire-core-compat",[lO]:"fire-analytics",[aO]:"fire-analytics-compat",[cO]:"fire-app-check",[uO]:"fire-app-check-compat",[hO]:"fire-auth",[dO]:"fire-auth-compat",[fO]:"fire-rtdb",[pO]:"fire-data-connect",[mO]:"fire-rtdb-compat",[gO]:"fire-fn",[yO]:"fire-fn-compat",[_O]:"fire-iid",[vO]:"fire-iid-compat",[wO]:"fire-fcm",[EO]:"fire-fcm-compat",[IO]:"fire-perf",[TO]:"fire-perf-compat",[SO]:"fire-rc",[xO]:"fire-rc-compat",[AO]:"fire-gcs",[bO]:"fire-gcs-compat",[RO]:"fire-fst",[kO]:"fire-fst-compat",[PO]:"fire-vertex","fire-js":"fire-js",[CO]:"fire-js-all"};/**
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
 */const Ch=new Map,OO=new Map,Cm=new Map;function bw(t,e){try{t.container.addComponent(e)}catch(n){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gs(t){const e=t.name;if(Cm.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;Cm.set(e,t);for(const n of Ch.values())bw(n,t);for(const n of OO.values())bw(n,t);return!0}function Td(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dr(t){return t.settings!==void 0}/**
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
 */const VO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new pu("app","Firebase",VO);/**
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
 */class LO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
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
 */const Cs=NO;function hx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:km,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pi.create("bad-app-name",{appName:String(i)});if(n||(n=sx()),!n)throw pi.create("no-options");const s=Ch.get(i);if(s){if($l(n,s.options)&&$l(r,s.config))return s;throw pi.create("duplicate-app",{appName:i})}const o=new BD(i);for(const l of Cm.values())o.addComponent(l);const a=new LO(n,r,o);return Ch.set(i,a),a}function dx(t=km){const e=Ch.get(t);if(!e&&t===km&&sx())return hx();if(!e)throw pi.create("no-app",{appName:t});return e}function Yn(t,e,n){var r;let i=(r=DO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(a.join(" "));return}gs(new wi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const MO="firebase-heartbeat-database",FO=1,ql="firebase-heartbeat-store";let op=null;function fx(){return op||(op=tO(MO,FO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ql)}catch(n){console.warn(n)}}}}).catch(t=>{throw pi.create("idb-open",{originalErrorMessage:t.message})})),op}async function jO(t){try{const n=(await fx()).transaction(ql),r=await n.objectStore(ql).get(px(t));return await n.done,r}catch(e){if(e instanceof nr)xr.warn(e.message);else{const n=pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xr.warn(n.message)}}}async function Rw(t,e){try{const r=(await fx()).transaction(ql,"readwrite");await r.objectStore(ql).put(e,px(t)),await r.done}catch(n){if(n instanceof nr)xr.warn(n.message);else{const r=pi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xr.warn(r.message)}}}function px(t){return`${t.name}!${t.options.appId}`}/**
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
 */const UO=1024,zO=30*24*60*60*1e3;class BO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=zO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){xr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pw(),{heartbeatsToSend:r,unsentEntries:i}=$O(this._heartbeatsCache.heartbeats),s=kh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return xr.warn(n),""}}}function Pw(){return new Date().toISOString().substring(0,10)}function $O(t,e=UO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),kw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lx()?CD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function kw(t){return kh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function KO(t){gs(new wi("platform-logger",e=>new iO(e),"PRIVATE")),gs(new wi("heartbeat",e=>new BO(e),"PRIVATE")),Yn(Pm,Aw,t),Yn(Pm,Aw,"esm2017"),Yn("fire-js","")}KO("");var GO="firebase",WO="10.14.1";/**
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
 */Yn(GO,WO,"app");var Cw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is,mx;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function S(){}S.prototype=y.prototype,w.D=y.prototype,w.prototype=new S,w.prototype.constructor=w,w.C=function(R,C,D){for(var b=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)b[Je-2]=arguments[Je];return y.prototype[C].apply(R,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,S){S||(S=0);var R=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)R[C]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(C=0;16>C;++C)R[C]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=w.g[0],S=w.g[1],C=w.g[2];var D=w.g[3],b=y+(D^S&(C^D))+R[0]+3614090360&4294967295;y=S+(b<<7&4294967295|b>>>25),b=D+(C^y&(S^C))+R[1]+3905402710&4294967295,D=y+(b<<12&4294967295|b>>>20),b=C+(S^D&(y^S))+R[2]+606105819&4294967295,C=D+(b<<17&4294967295|b>>>15),b=S+(y^C&(D^y))+R[3]+3250441966&4294967295,S=C+(b<<22&4294967295|b>>>10),b=y+(D^S&(C^D))+R[4]+4118548399&4294967295,y=S+(b<<7&4294967295|b>>>25),b=D+(C^y&(S^C))+R[5]+1200080426&4294967295,D=y+(b<<12&4294967295|b>>>20),b=C+(S^D&(y^S))+R[6]+2821735955&4294967295,C=D+(b<<17&4294967295|b>>>15),b=S+(y^C&(D^y))+R[7]+4249261313&4294967295,S=C+(b<<22&4294967295|b>>>10),b=y+(D^S&(C^D))+R[8]+1770035416&4294967295,y=S+(b<<7&4294967295|b>>>25),b=D+(C^y&(S^C))+R[9]+2336552879&4294967295,D=y+(b<<12&4294967295|b>>>20),b=C+(S^D&(y^S))+R[10]+4294925233&4294967295,C=D+(b<<17&4294967295|b>>>15),b=S+(y^C&(D^y))+R[11]+2304563134&4294967295,S=C+(b<<22&4294967295|b>>>10),b=y+(D^S&(C^D))+R[12]+1804603682&4294967295,y=S+(b<<7&4294967295|b>>>25),b=D+(C^y&(S^C))+R[13]+4254626195&4294967295,D=y+(b<<12&4294967295|b>>>20),b=C+(S^D&(y^S))+R[14]+2792965006&4294967295,C=D+(b<<17&4294967295|b>>>15),b=S+(y^C&(D^y))+R[15]+1236535329&4294967295,S=C+(b<<22&4294967295|b>>>10),b=y+(C^D&(S^C))+R[1]+4129170786&4294967295,y=S+(b<<5&4294967295|b>>>27),b=D+(S^C&(y^S))+R[6]+3225465664&4294967295,D=y+(b<<9&4294967295|b>>>23),b=C+(y^S&(D^y))+R[11]+643717713&4294967295,C=D+(b<<14&4294967295|b>>>18),b=S+(D^y&(C^D))+R[0]+3921069994&4294967295,S=C+(b<<20&4294967295|b>>>12),b=y+(C^D&(S^C))+R[5]+3593408605&4294967295,y=S+(b<<5&4294967295|b>>>27),b=D+(S^C&(y^S))+R[10]+38016083&4294967295,D=y+(b<<9&4294967295|b>>>23),b=C+(y^S&(D^y))+R[15]+3634488961&4294967295,C=D+(b<<14&4294967295|b>>>18),b=S+(D^y&(C^D))+R[4]+3889429448&4294967295,S=C+(b<<20&4294967295|b>>>12),b=y+(C^D&(S^C))+R[9]+568446438&4294967295,y=S+(b<<5&4294967295|b>>>27),b=D+(S^C&(y^S))+R[14]+3275163606&4294967295,D=y+(b<<9&4294967295|b>>>23),b=C+(y^S&(D^y))+R[3]+4107603335&4294967295,C=D+(b<<14&4294967295|b>>>18),b=S+(D^y&(C^D))+R[8]+1163531501&4294967295,S=C+(b<<20&4294967295|b>>>12),b=y+(C^D&(S^C))+R[13]+2850285829&4294967295,y=S+(b<<5&4294967295|b>>>27),b=D+(S^C&(y^S))+R[2]+4243563512&4294967295,D=y+(b<<9&4294967295|b>>>23),b=C+(y^S&(D^y))+R[7]+1735328473&4294967295,C=D+(b<<14&4294967295|b>>>18),b=S+(D^y&(C^D))+R[12]+2368359562&4294967295,S=C+(b<<20&4294967295|b>>>12),b=y+(S^C^D)+R[5]+4294588738&4294967295,y=S+(b<<4&4294967295|b>>>28),b=D+(y^S^C)+R[8]+2272392833&4294967295,D=y+(b<<11&4294967295|b>>>21),b=C+(D^y^S)+R[11]+1839030562&4294967295,C=D+(b<<16&4294967295|b>>>16),b=S+(C^D^y)+R[14]+4259657740&4294967295,S=C+(b<<23&4294967295|b>>>9),b=y+(S^C^D)+R[1]+2763975236&4294967295,y=S+(b<<4&4294967295|b>>>28),b=D+(y^S^C)+R[4]+1272893353&4294967295,D=y+(b<<11&4294967295|b>>>21),b=C+(D^y^S)+R[7]+4139469664&4294967295,C=D+(b<<16&4294967295|b>>>16),b=S+(C^D^y)+R[10]+3200236656&4294967295,S=C+(b<<23&4294967295|b>>>9),b=y+(S^C^D)+R[13]+681279174&4294967295,y=S+(b<<4&4294967295|b>>>28),b=D+(y^S^C)+R[0]+3936430074&4294967295,D=y+(b<<11&4294967295|b>>>21),b=C+(D^y^S)+R[3]+3572445317&4294967295,C=D+(b<<16&4294967295|b>>>16),b=S+(C^D^y)+R[6]+76029189&4294967295,S=C+(b<<23&4294967295|b>>>9),b=y+(S^C^D)+R[9]+3654602809&4294967295,y=S+(b<<4&4294967295|b>>>28),b=D+(y^S^C)+R[12]+3873151461&4294967295,D=y+(b<<11&4294967295|b>>>21),b=C+(D^y^S)+R[15]+530742520&4294967295,C=D+(b<<16&4294967295|b>>>16),b=S+(C^D^y)+R[2]+3299628645&4294967295,S=C+(b<<23&4294967295|b>>>9),b=y+(C^(S|~D))+R[0]+4096336452&4294967295,y=S+(b<<6&4294967295|b>>>26),b=D+(S^(y|~C))+R[7]+1126891415&4294967295,D=y+(b<<10&4294967295|b>>>22),b=C+(y^(D|~S))+R[14]+2878612391&4294967295,C=D+(b<<15&4294967295|b>>>17),b=S+(D^(C|~y))+R[5]+4237533241&4294967295,S=C+(b<<21&4294967295|b>>>11),b=y+(C^(S|~D))+R[12]+1700485571&4294967295,y=S+(b<<6&4294967295|b>>>26),b=D+(S^(y|~C))+R[3]+2399980690&4294967295,D=y+(b<<10&4294967295|b>>>22),b=C+(y^(D|~S))+R[10]+4293915773&4294967295,C=D+(b<<15&4294967295|b>>>17),b=S+(D^(C|~y))+R[1]+2240044497&4294967295,S=C+(b<<21&4294967295|b>>>11),b=y+(C^(S|~D))+R[8]+1873313359&4294967295,y=S+(b<<6&4294967295|b>>>26),b=D+(S^(y|~C))+R[15]+4264355552&4294967295,D=y+(b<<10&4294967295|b>>>22),b=C+(y^(D|~S))+R[6]+2734768916&4294967295,C=D+(b<<15&4294967295|b>>>17),b=S+(D^(C|~y))+R[13]+1309151649&4294967295,S=C+(b<<21&4294967295|b>>>11),b=y+(C^(S|~D))+R[4]+4149444226&4294967295,y=S+(b<<6&4294967295|b>>>26),b=D+(S^(y|~C))+R[11]+3174756917&4294967295,D=y+(b<<10&4294967295|b>>>22),b=C+(y^(D|~S))+R[2]+718787259&4294967295,C=D+(b<<15&4294967295|b>>>17),b=S+(D^(C|~y))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(C+(b<<21&4294967295|b>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+D&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var S=y-this.blockSize,R=this.B,C=this.h,D=0;D<y;){if(C==0)for(;D<=S;)i(this,w,D),D+=this.blockSize;if(typeof w=="string"){for(;D<y;)if(R[C++]=w.charCodeAt(D++),C==this.blockSize){i(this,R),C=0;break}}else for(;D<y;)if(R[C++]=w[D++],C==this.blockSize){i(this,R),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var S=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=S&255,S/=256;for(this.u(w),w=Array(16),y=S=0;4>y;++y)for(var R=0;32>R;R+=8)w[S++]=this.g[y]>>>R&255;return w};function s(w,y){var S=a;return Object.prototype.hasOwnProperty.call(S,w)?S[w]:S[w]=y(w)}function o(w,y){this.h=y;for(var S=[],R=!0,C=w.length-1;0<=C;C--){var D=w[C]|0;R&&D==y||(S[C]=D,R=!1)}this.g=S}var a={};function l(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return P(c(-w));for(var y=[],S=1,R=0;w>=S;R++)y[R]=w/S|0,S*=4294967296;return new o(y,0)}function h(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return P(h(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(y,8)),R=f,C=0;C<w.length;C+=8){var D=Math.min(8,w.length-C),b=parseInt(w.substring(C,C+D),y);8>D?(D=c(Math.pow(y,D)),R=R.j(D).add(c(b))):(R=R.j(S),R=R.add(c(b)))}return R}var f=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(A(this))return-P(this).m();for(var w=0,y=1,S=0;S<this.g.length;S++){var R=this.i(S);w+=(0<=R?R:4294967296+R)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(I(this))return"0";if(A(this))return"-"+P(this).toString(w);for(var y=c(Math.pow(w,6)),S=this,R="";;){var C=k(S,y).g;S=T(S,C.j(y));var D=((0<S.g.length?S.g[0]:S.h)>>>0).toString(w);if(S=C,I(S))return D+R;for(;6>D.length;)D="0"+D;R=D+R}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function I(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function A(w){return w.h==-1}t.l=function(w){return w=T(this,w),A(w)?-1:I(w)?0:1};function P(w){for(var y=w.g.length,S=[],R=0;R<y;R++)S[R]=~w.g[R];return new o(S,~w.h).add(p)}t.abs=function(){return A(this)?P(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),S=[],R=0,C=0;C<=y;C++){var D=R+(this.i(C)&65535)+(w.i(C)&65535),b=(D>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);R=b>>>16,D&=65535,b&=65535,S[C]=b<<16|D}return new o(S,S[S.length-1]&-2147483648?-1:0)};function T(w,y){return w.add(P(y))}t.j=function(w){if(I(this)||I(w))return f;if(A(this))return A(w)?P(this).j(P(w)):P(P(this).j(w));if(A(w))return P(this.j(P(w)));if(0>this.l(g)&&0>w.l(g))return c(this.m()*w.m());for(var y=this.g.length+w.g.length,S=[],R=0;R<2*y;R++)S[R]=0;for(R=0;R<this.g.length;R++)for(var C=0;C<w.g.length;C++){var D=this.i(R)>>>16,b=this.i(R)&65535,Je=w.i(C)>>>16,jt=w.i(C)&65535;S[2*R+2*C]+=b*jt,v(S,2*R+2*C),S[2*R+2*C+1]+=D*jt,v(S,2*R+2*C+1),S[2*R+2*C+1]+=b*Je,v(S,2*R+2*C+1),S[2*R+2*C+2]+=D*Je,v(S,2*R+2*C+2)}for(R=0;R<y;R++)S[R]=S[2*R+1]<<16|S[2*R];for(R=y;R<2*y;R++)S[R]=0;return new o(S,0)};function v(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function E(w,y){this.g=w,this.h=y}function k(w,y){if(I(y))throw Error("division by zero");if(I(w))return new E(f,f);if(A(w))return y=k(P(w),y),new E(P(y.g),P(y.h));if(A(y))return y=k(w,P(y)),new E(P(y.g),y.h);if(30<w.g.length){if(A(w)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var S=p,R=y;0>=R.l(w);)S=M(S),R=M(R);var C=O(S,1),D=O(R,1);for(R=O(R,2),S=O(S,2);!I(R);){var b=D.add(R);0>=b.l(w)&&(C=C.add(S),D=b),R=O(R,1),S=O(S,1)}return y=T(w,C.j(y)),new E(C,y)}for(C=f;0<=w.l(y);){for(S=Math.max(1,Math.floor(w.m()/y.m())),R=Math.ceil(Math.log(S)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),D=c(S),b=D.j(y);A(b)||0<b.l(w);)S-=R,D=c(S),b=D.j(y);I(D)&&(D=p),C=C.add(D),w=T(w,b)}return new E(C,w)}t.A=function(w){return k(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),S=[],R=0;R<y;R++)S[R]=this.i(R)&w.i(R);return new o(S,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),S=[],R=0;R<y;R++)S[R]=this.i(R)|w.i(R);return new o(S,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),S=[],R=0;R<y;R++)S[R]=this.i(R)^w.i(R);return new o(S,this.h^w.h)};function M(w){for(var y=w.g.length+1,S=[],R=0;R<y;R++)S[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(S,w.h)}function O(w,y){var S=y>>5;y%=32;for(var R=w.g.length-S,C=[],D=0;D<R;D++)C[D]=0<y?w.i(D+S)>>>y|w.i(D+S+1)<<32-y:w.i(D+S);return new o(C,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,mx=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,is=o}).apply(typeof Cw<"u"?Cw:typeof self<"u"?self:typeof window<"u"?window:{});var fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gx,Xa,yx,Mc,Nm,_x,vx,wx;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,m){return u==Array.prototype||u==Object.prototype||(u[d]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof fc=="object"&&fc];for(var d=0;d<u.length;++d){var m=u[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var m=r;u=u.split(".");for(var _=0;_<u.length-1;_++){var V=u[_];if(!(V in m))break e;m=m[V]}u=u[u.length-1],_=m[u],d=d(_),d!=_&&d!=null&&e(m,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var m=0,_=!1,V={next:function(){if(!_&&m<u.length){var F=m++;return{value:d(F,u[F]),done:!1}}return _=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,m){return u.call.apply(u.bind,arguments)}function f(u,d,m){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,_),u.apply(d,V)}}return function(){return u.apply(d,arguments)}}function p(u,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function g(u,d){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function I(u,d){function m(){}m.prototype=d.prototype,u.aa=d.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(_,V,F){for(var $=Array(arguments.length-2),we=2;we<arguments.length;we++)$[we-2]=arguments[we];return d.prototype[V].apply(_,$)}}function A(u){const d=u.length;if(0<d){const m=Array(d);for(let _=0;_<d;_++)m[_]=u[_];return m}return[]}function P(u,d){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(l(_)){const V=u.length||0,F=_.length||0;u.length=V+F;for(let $=0;$<F;$++)u[V+$]=_[$]}else u.push(_)}}class T{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function v(u){return/^[\s\xa0]*$/.test(u)}function E(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function k(u){return k[" "](u),u}k[" "]=function(){};var M=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function O(u,d,m){for(const _ in u)d.call(m,u[_],_,u)}function w(u,d){for(const m in u)d.call(void 0,u[m],m,u)}function y(u){const d={};for(const m in u)d[m]=u[m];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(u,d){let m,_;for(let V=1;V<arguments.length;V++){_=arguments[V];for(m in _)u[m]=_[m];for(let F=0;F<S.length;F++)m=S[F],Object.prototype.hasOwnProperty.call(_,m)&&(u[m]=_[m])}}function C(u){var d=1;u=u.split(":");const m=[];for(;0<d&&u.length;)m.push(u.shift()),d--;return u.length&&m.push(u.join(":")),m}function D(u){a.setTimeout(()=>{throw u},0)}function b(){var u=Q;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class Je{constructor(){this.h=this.g=null}add(d,m){const _=jt.get();_.set(d,m),this.h?this.h.next=_:this.g=_,this.h=_}}var jt=new T(()=>new pt,u=>u.reset());class pt{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let qe,z=!1,Q=new Je,J=()=>{const u=a.Promise.resolve(void 0);qe=()=>{u.then(ue)}};var ue=()=>{for(var u;u=b();){try{u.h.call(u.g)}catch(m){D(m)}var d=jt;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}z=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ze=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return u}();function ge(u,d){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(M){e:{try{k(d.nodeName);var V=!0;break e}catch{}V=!1}V||(d=null)}}else m=="mouseover"?d=u.fromElement:m=="mouseout"&&(d=u.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ke[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ge.aa.h.call(this)}}I(ge,fe);var Ke={2:"touch",3:"pen",4:"mouse"};ge.prototype.h=function(){ge.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var mt="closure_listenable_"+(1e6*Math.random()|0),rr=0;function Yt(u,d,m,_,V){this.listener=u,this.proxy=null,this.src=d,this.type=m,this.capture=!!_,this.ha=V,this.key=++rr,this.da=this.fa=!1}function fn(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Sn(u){this.src=u,this.g={},this.h=0}Sn.prototype.add=function(u,d,m,_,V){var F=u.toString();u=this.g[F],u||(u=this.g[F]=[],this.h++);var $=Li(u,d,_,V);return-1<$?(d=u[$],m||(d.fa=!1)):(d=new Yt(d,this.src,F,!!_,V),d.fa=m,u.push(d)),d};function At(u,d){var m=d.type;if(m in u.g){var _=u.g[m],V=Array.prototype.indexOf.call(_,d,void 0),F;(F=0<=V)&&Array.prototype.splice.call(_,V,1),F&&(fn(d),u.g[m].length==0&&(delete u.g[m],u.h--))}}function Li(u,d,m,_){for(var V=0;V<u.length;++V){var F=u[V];if(!F.da&&F.listener==d&&F.capture==!!m&&F.ha==_)return V}return-1}var Or="closure_lm_"+(1e6*Math.random()|0),Ie={};function pa(u,d,m,_,V){if(Array.isArray(d)){for(var F=0;F<d.length;F++)pa(u,d[F],m,_,V);return null}return m=iv(m),u&&u[mt]?u.K(d,m,c(_)?!!_.capture:!!_,V):ma(u,d,m,!1,_,V)}function ma(u,d,m,_,V,F){if(!d)throw Error("Invalid event type");var $=c(V)?!!V.capture:!!V,we=af(u);if(we||(u[Or]=we=new Sn(u)),m=we.add(d,m,_,$,F),m.proxy)return m;if(_=VP(),m.proxy=_,_.src=u,_.listener=m,u.addEventListener)Ze||(V=$),V===void 0&&(V=!1),u.addEventListener(d.toString(),_,V);else if(u.attachEvent)u.attachEvent(rv(d.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function VP(){function u(m){return d.call(u.src,u.listener,m)}const d=LP;return u}function nv(u,d,m,_,V){if(Array.isArray(d))for(var F=0;F<d.length;F++)nv(u,d[F],m,_,V);else _=c(_)?!!_.capture:!!_,m=iv(m),u&&u[mt]?(u=u.i,d=String(d).toString(),d in u.g&&(F=u.g[d],m=Li(F,m,_,V),-1<m&&(fn(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete u.g[d],u.h--)))):u&&(u=af(u))&&(d=u.g[d.toString()],u=-1,d&&(u=Li(d,m,_,V)),(m=-1<u?d[u]:null)&&of(m))}function of(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[mt])At(d.i,u);else{var m=u.type,_=u.proxy;d.removeEventListener?d.removeEventListener(m,_,u.capture):d.detachEvent?d.detachEvent(rv(m),_):d.addListener&&d.removeListener&&d.removeListener(_),(m=af(d))?(At(m,u),m.h==0&&(m.src=null,d[Or]=null)):fn(u)}}}function rv(u){return u in Ie?Ie[u]:Ie[u]="on"+u}function LP(u,d){if(u.da)u=!0;else{d=new ge(d,this);var m=u.listener,_=u.ha||u.src;u.fa&&of(u),u=m.call(_,d)}return u}function af(u){return u=u[Or],u instanceof Sn?u:null}var lf="__closure_events_fn_"+(1e9*Math.random()>>>0);function iv(u){return typeof u=="function"?u:(u[lf]||(u[lf]=function(d){return u.handleEvent(d)}),u[lf])}function gt(){re.call(this),this.i=new Sn(this),this.M=this,this.F=null}I(gt,re),gt.prototype[mt]=!0,gt.prototype.removeEventListener=function(u,d,m,_){nv(this,u,d,m,_)};function bt(u,d){var m,_=u.F;if(_)for(m=[];_;_=_.F)m.push(_);if(u=u.M,_=d.type||d,typeof d=="string")d=new fe(d,u);else if(d instanceof fe)d.target=d.target||u;else{var V=d;d=new fe(_,u),R(d,V)}if(V=!0,m)for(var F=m.length-1;0<=F;F--){var $=d.g=m[F];V=Nu($,_,!0,d)&&V}if($=d.g=u,V=Nu($,_,!0,d)&&V,V=Nu($,_,!1,d)&&V,m)for(F=0;F<m.length;F++)$=d.g=m[F],V=Nu($,_,!1,d)&&V}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var m=u.g[d],_=0;_<m.length;_++)fn(m[_]);delete u.g[d],u.h--}}this.F=null},gt.prototype.K=function(u,d,m,_){return this.i.add(String(u),d,!1,m,_)},gt.prototype.L=function(u,d,m,_){return this.i.add(String(u),d,!0,m,_)};function Nu(u,d,m,_){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var V=!0,F=0;F<d.length;++F){var $=d[F];if($&&!$.da&&$.capture==m){var we=$.listener,lt=$.ha||$.src;$.fa&&At(u.i,$),V=we.call(lt,_)!==!1&&V}}return V&&!_.defaultPrevented}function sv(u,d,m){if(typeof u=="function")m&&(u=p(u,m));else if(u&&typeof u.handleEvent=="function")u=p(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function ov(u){u.g=sv(()=>{u.g=null,u.i&&(u.i=!1,ov(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class MP extends re{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ov(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ga(u){re.call(this),this.h=u,this.g={}}I(ga,re);var av=[];function lv(u){O(u.g,function(d,m){this.g.hasOwnProperty(m)&&of(d)},u),u.g={}}ga.prototype.N=function(){ga.aa.N.call(this),lv(this)},ga.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var uf=a.JSON.stringify,FP=a.JSON.parse,jP=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function cf(){}cf.prototype.h=null;function uv(u){return u.h||(u.h=u.i())}function cv(){}var ya={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hf(){fe.call(this,"d")}I(hf,fe);function df(){fe.call(this,"c")}I(df,fe);var Mi={},hv=null;function Du(){return hv=hv||new gt}Mi.La="serverreachability";function dv(u){fe.call(this,Mi.La,u)}I(dv,fe);function _a(u){const d=Du();bt(d,new dv(d))}Mi.STAT_EVENT="statevent";function fv(u,d){fe.call(this,Mi.STAT_EVENT,u),this.stat=d}I(fv,fe);function Rt(u){const d=Du();bt(d,new fv(d,u))}Mi.Ma="timingevent";function pv(u,d){fe.call(this,Mi.Ma,u),this.size=d}I(pv,fe);function va(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function wa(){this.g=!0}wa.prototype.xa=function(){this.g=!1};function UP(u,d,m,_,V,F){u.info(function(){if(u.g)if(F)for(var $="",we=F.split("&"),lt=0;lt<we.length;lt++){var de=we[lt].split("=");if(1<de.length){var yt=de[0];de=de[1];var _t=yt.split("_");$=2<=_t.length&&_t[1]=="type"?$+(yt+"="+de+"&"):$+(yt+"=redacted&")}}else $=null;else $=F;return"XMLHTTP REQ ("+_+") [attempt "+V+"]: "+d+`
`+m+`
`+$})}function zP(u,d,m,_,V,F,$){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+V+"]: "+d+`
`+m+`
`+F+" "+$})}function Ms(u,d,m,_){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+$P(u,m)+(_?" "+_:"")})}function BP(u,d){u.info(function(){return"TIMEOUT: "+d})}wa.prototype.info=function(){};function $P(u,d){if(!u.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var _=m[u];if(!(2>_.length)){var V=_[1];if(Array.isArray(V)&&!(1>V.length)){var F=V[0];if(F!="noop"&&F!="stop"&&F!="close")for(var $=1;$<V.length;$++)V[$]=""}}}}return uf(m)}catch{return d}}var Ou={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ff;function Vu(){}I(Vu,cf),Vu.prototype.g=function(){return new XMLHttpRequest},Vu.prototype.i=function(){return{}},ff=new Vu;function Vr(u,d,m,_){this.j=u,this.i=d,this.l=m,this.R=_||1,this.U=new ga(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gv}function gv(){this.i=null,this.g="",this.h=!1}var yv={},pf={};function mf(u,d,m){u.L=1,u.v=ju(ir(d)),u.m=m,u.P=!0,_v(u,null)}function _v(u,d){u.F=Date.now(),Lu(u),u.A=ir(u.v);var m=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),Nv(m.i,"t",_),u.C=0,m=u.j.J,u.h=new gv,u.g=Yv(u.j,m?d:null,!u.m),0<u.O&&(u.M=new MP(p(u.Y,u,u.g),u.O)),d=u.U,m=u.g,_=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(av[0]=V.toString()),V=av);for(var F=0;F<V.length;F++){var $=pa(m,V[F],_||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),_a(),UP(u.i,u.u,u.A,u.l,u.R,u.m)}Vr.prototype.ca=function(u){u=u.target;const d=this.M;d&&sr(u)==3?d.j():this.Y(u)},Vr.prototype.Y=function(u){try{if(u==this.g)e:{const _t=sr(this.g);var d=this.g.Ba();const Us=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||jv(this.g)))){this.J||_t!=4||d==7||(d==8||0>=Us?_a(3):_a(2)),gf(this);var m=this.g.Z();this.X=m;t:if(vv(this)){var _=jv(this.g);u="";var V=_.length,F=sr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fi(this),Ea(this);var $="";break t}this.h.i=new a.TextDecoder}for(d=0;d<V;d++)this.h.h=!0,u+=this.h.i.decode(_[d],{stream:!(F&&d==V-1)});_.length=0,this.h.g+=u,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=m==200,zP(this.i,this.u,this.A,this.l,this.R,_t,m),this.o){if(this.T&&!this.K){t:{if(this.g){var we,lt=this.g;if((we=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(we)){var de=we;break t}}de=null}if(m=de)Ms(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yf(this,m);else{this.o=!1,this.s=3,Rt(12),Fi(this),Ea(this);break e}}if(this.P){m=!0;let xn;for(;!this.J&&this.C<$.length;)if(xn=qP(this,$),xn==pf){_t==4&&(this.s=4,Rt(14),m=!1),Ms(this.i,this.l,null,"[Incomplete Response]");break}else if(xn==yv){this.s=4,Rt(15),Ms(this.i,this.l,$,"[Invalid Chunk]"),m=!1;break}else Ms(this.i,this.l,xn,null),yf(this,xn);if(vv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||$.length!=0||this.h.h||(this.s=1,Rt(16),m=!1),this.o=this.o&&m,!m)Ms(this.i,this.l,$,"[Invalid Chunked Response]"),Fi(this),Ea(this);else if(0<$.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Tf(yt),yt.M=!0,Rt(11))}}else Ms(this.i,this.l,$,null),yf(this,$);_t==4&&Fi(this),this.o&&!this.J&&(_t==4?Gv(this.j,this):(this.o=!1,Lu(this)))}else ak(this.g),m==400&&0<$.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Fi(this),Ea(this)}}}catch{}finally{}};function vv(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function qP(u,d){var m=u.C,_=d.indexOf(`
`,m);return _==-1?pf:(m=Number(d.substring(m,_)),isNaN(m)?yv:(_+=1,_+m>d.length?pf:(d=d.slice(_,_+m),u.C=_+m,d)))}Vr.prototype.cancel=function(){this.J=!0,Fi(this)};function Lu(u){u.S=Date.now()+u.I,wv(u,u.I)}function wv(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=va(p(u.ba,u),d)}function gf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Vr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(BP(this.i,this.A),this.L!=2&&(_a(),Rt(17)),Fi(this),this.s=2,Ea(this)):wv(this,this.S-u)};function Ea(u){u.j.G==0||u.J||Gv(u.j,u)}function Fi(u){gf(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,lv(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function yf(u,d){try{var m=u.j;if(m.G!=0&&(m.g==u||_f(m.h,u))){if(!u.K&&_f(m.h,u)&&m.G==3){try{var _=m.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var V=_;if(V[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)Ku(m),$u(m);else break e;If(m),Rt(18)}}else m.za=V[1],0<m.za-m.T&&37500>V[2]&&m.F&&m.v==0&&!m.C&&(m.C=va(p(m.Za,m),6e3));if(1>=Tv(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Ui(m,11)}else if((u.K||m.g==u)&&Ku(m),!v(d))for(V=m.Da.g.parse(d),d=0;d<V.length;d++){let de=V[d];if(m.T=de[0],de=de[1],m.G==2)if(de[0]=="c"){m.K=de[1],m.ia=de[2];const yt=de[3];yt!=null&&(m.la=yt,m.j.info("VER="+m.la));const _t=de[4];_t!=null&&(m.Aa=_t,m.j.info("SVER="+m.Aa));const Us=de[5];Us!=null&&typeof Us=="number"&&0<Us&&(_=1.5*Us,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const xn=u.g;if(xn){const Wu=xn.g?xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wu){var F=_.h;F.g||Wu.indexOf("spdy")==-1&&Wu.indexOf("quic")==-1&&Wu.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(vf(F,F.h),F.h=null))}if(_.D){const Sf=xn.g?xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Sf&&(_.ya=Sf,Te(_.I,_.D,Sf))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var $=u;if(_.qa=Qv(_,_.J?_.ia:null,_.W),$.K){Sv(_.h,$);var we=$,lt=_.L;lt&&(we.I=lt),we.B&&(gf(we),Lu(we)),_.g=$}else qv(_);0<m.i.length&&qu(m)}else de[0]!="stop"&&de[0]!="close"||Ui(m,7);else m.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Ui(m,7):Ef(m):de[0]!="noop"&&m.l&&m.l.ta(de),m.v=0)}}_a(4)}catch{}}var KP=class{constructor(u,d){this.g=u,this.map=d}};function Ev(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Iv(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Tv(u){return u.h?1:u.g?u.g.size:0}function _f(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function vf(u,d){u.g?u.g.add(d):u.h=d}function Sv(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}Ev.prototype.cancel=function(){if(this.i=xv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function xv(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const m of u.g.values())d=d.concat(m.D);return d}return A(u.i)}function GP(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],m=u.length,_=0;_<m;_++)d.push(u[_]);return d}d=[],m=0;for(_ in u)d[m++]=u[_];return d}function WP(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var m=0;m<u;m++)d.push(m);return d}d=[],m=0;for(const _ in u)d[m++]=_;return d}}}function Av(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var m=WP(u),_=GP(u),V=_.length,F=0;F<V;F++)d.call(void 0,_[F],m&&m[F],u)}var bv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function HP(u,d){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var _=u[m].indexOf("="),V=null;if(0<=_){var F=u[m].substring(0,_);V=u[m].substring(_+1)}else F=u[m];d(F,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function ji(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ji){this.h=u.h,Mu(this,u.j),this.o=u.o,this.g=u.g,Fu(this,u.s),this.l=u.l;var d=u.i,m=new Sa;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Rv(this,m),this.m=u.m}else u&&(d=String(u).match(bv))?(this.h=!1,Mu(this,d[1]||"",!0),this.o=Ia(d[2]||""),this.g=Ia(d[3]||"",!0),Fu(this,d[4]),this.l=Ia(d[5]||"",!0),Rv(this,d[6]||"",!0),this.m=Ia(d[7]||"")):(this.h=!1,this.i=new Sa(null,this.h))}ji.prototype.toString=function(){var u=[],d=this.j;d&&u.push(Ta(d,Pv,!0),":");var m=this.g;return(m||d=="file")&&(u.push("//"),(d=this.o)&&u.push(Ta(d,Pv,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(Ta(m,m.charAt(0)=="/"?XP:YP,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",Ta(m,ZP)),u.join("")};function ir(u){return new ji(u)}function Mu(u,d,m){u.j=m?Ia(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Fu(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function Rv(u,d,m){d instanceof Sa?(u.i=d,ek(u.i,u.h)):(m||(d=Ta(d,JP)),u.i=new Sa(d,u.h))}function Te(u,d,m){u.i.set(d,m)}function ju(u){return Te(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ia(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ta(u,d,m){return typeof u=="string"?(u=encodeURI(u).replace(d,QP),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function QP(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Pv=/[#\/\?@]/g,YP=/[#\?:]/g,XP=/[#\?]/g,JP=/[#\?@]/g,ZP=/#/g;function Sa(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function Lr(u){u.g||(u.g=new Map,u.h=0,u.i&&HP(u.i,function(d,m){u.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Sa.prototype,t.add=function(u,d){Lr(this),this.i=null,u=Fs(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(d),this.h+=1,this};function kv(u,d){Lr(u),d=Fs(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function Cv(u,d){return Lr(u),d=Fs(u,d),u.g.has(d)}t.forEach=function(u,d){Lr(this),this.g.forEach(function(m,_){m.forEach(function(V){u.call(d,V,_,this)},this)},this)},t.na=function(){Lr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let _=0;_<d.length;_++){const V=u[_];for(let F=0;F<V.length;F++)m.push(d[_])}return m},t.V=function(u){Lr(this);let d=[];if(typeof u=="string")Cv(this,u)&&(d=d.concat(this.g.get(Fs(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)d=d.concat(u[m])}return d},t.set=function(u,d){return Lr(this),this.i=null,u=Fs(this,u),Cv(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function Nv(u,d,m){kv(u,d),0<m.length&&(u.i=null,u.g.set(Fs(u,d),A(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var _=d[m];const F=encodeURIComponent(String(_)),$=this.V(_);for(_=0;_<$.length;_++){var V=F;$[_]!==""&&(V+="="+encodeURIComponent(String($[_]))),u.push(V)}}return this.i=u.join("&")};function Fs(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function ek(u,d){d&&!u.j&&(Lr(u),u.i=null,u.g.forEach(function(m,_){var V=_.toLowerCase();_!=V&&(kv(this,_),Nv(this,V,m))},u)),u.j=d}function tk(u,d){const m=new wa;if(a.Image){const _=new Image;_.onload=g(Mr,m,"TestLoadImage: loaded",!0,d,_),_.onerror=g(Mr,m,"TestLoadImage: error",!1,d,_),_.onabort=g(Mr,m,"TestLoadImage: abort",!1,d,_),_.ontimeout=g(Mr,m,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else d(!1)}function nk(u,d){const m=new wa,_=new AbortController,V=setTimeout(()=>{_.abort(),Mr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:_.signal}).then(F=>{clearTimeout(V),F.ok?Mr(m,"TestPingServer: ok",!0,d):Mr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(V),Mr(m,"TestPingServer: error",!1,d)})}function Mr(u,d,m,_,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),_(m)}catch{}}function rk(){this.g=new jP}function ik(u,d,m){const _=m||"";try{Av(u,function(V,F){let $=V;c(V)&&($=uf(V)),d.push(_+F+"="+encodeURIComponent($))})}catch(V){throw d.push(_+"type="+encodeURIComponent("_badmap")),V}}function Uu(u){this.l=u.Ub||null,this.j=u.eb||!1}I(Uu,cf),Uu.prototype.g=function(){return new zu(this.l,this.j)},Uu.prototype.i=function(u){return function(){return u}}({});function zu(u,d){gt.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(zu,gt),t=zu.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Aa(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xa(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Aa(this)),this.g&&(this.readyState=3,Aa(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dv(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dv(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?xa(this):Aa(this),this.readyState==3&&Dv(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,xa(this))},t.Qa=function(u){this.g&&(this.response=u,xa(this))},t.ga=function(){this.g&&xa(this)};function xa(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Aa(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=d.next();return u.join(`\r
`)};function Aa(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(zu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ov(u){let d="";return O(u,function(m,_){d+=_,d+=":",d+=m,d+=`\r
`}),d}function wf(u,d,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=Ov(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):Te(u,d,m))}function ze(u){gt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(ze,gt);var sk=/^https?$/i,ok=["POST","PUT"];t=ze.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ff.g(),this.v=this.o?uv(this.o):uv(ff),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(F){Vv(this,F);return}if(u=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var V in _)m.set(V,_[V]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const F of _.keys())m.set(F,_.get(F));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),V=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ok,d,void 0))||_||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,$]of m)this.g.setRequestHeader(F,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fv(this),this.u=!0,this.g.send(u),this.u=!1}catch(F){Vv(this,F)}};function Vv(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,Lv(u),Bu(u)}function Lv(u){u.A||(u.A=!0,bt(u,"complete"),bt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,bt(this,"complete"),bt(this,"abort"),Bu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bu(this,!0)),ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Mv(this):this.bb())},t.bb=function(){Mv(this)};function Mv(u){if(u.h&&typeof o<"u"&&(!u.v[1]||sr(u)!=4||u.Z()!=2)){if(u.u&&sr(u)==4)sv(u.Ea,0,u);else if(bt(u,"readystatechange"),sr(u)==4){u.h=!1;try{const $=u.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var _;if(_=$===0){var V=String(u.D).match(bv)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),_=!sk.test(V?V.toLowerCase():"")}m=_}if(m)bt(u,"complete"),bt(u,"success");else{u.m=6;try{var F=2<sr(u)?u.g.statusText:""}catch{F=""}u.l=F+" ["+u.Z()+"]",Lv(u)}}finally{Bu(u)}}}}function Bu(u,d){if(u.g){Fv(u);const m=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||bt(u,"ready");try{m.onreadystatechange=_}catch{}}}function Fv(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function sr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<sr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),FP(d)}};function jv(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ak(u){const d={};u=(u.g&&2<=sr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(v(u[_]))continue;var m=C(u[_]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=d[V]||[];d[V]=F,F.push(m)}w(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ba(u,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||d}function Uv(u){this.Aa=0,this.i=[],this.j=new wa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ba("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ba("baseRetryDelayMs",5e3,u),this.cb=ba("retryDelaySeedMs",1e4,u),this.Wa=ba("forwardChannelMaxRetries",2,u),this.wa=ba("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ev(u&&u.concurrentRequestLimit),this.Da=new rk,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Uv.prototype,t.la=8,t.G=1,t.connect=function(u,d,m,_){Rt(0),this.W=u,this.H=d||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=Qv(this,null,this.W),qu(this)};function Ef(u){if(zv(u),u.G==3){var d=u.U++,m=ir(u.I);if(Te(m,"SID",u.K),Te(m,"RID",d),Te(m,"TYPE","terminate"),Ra(u,m),d=new Vr(u,u.j,d),d.L=2,d.v=ju(ir(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=Yv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Lu(d)}Hv(u)}function $u(u){u.g&&(Tf(u),u.g.cancel(),u.g=null)}function zv(u){$u(u),u.u&&(a.clearTimeout(u.u),u.u=null),Ku(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function qu(u){if(!Iv(u.h)&&!u.s){u.s=!0;var d=u.Ga;qe||J(),z||(qe(),z=!0),Q.add(d,u),u.B=0}}function lk(u,d){return Tv(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=va(p(u.Ga,u,d),Wv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const V=new Vr(this,this.j,u);let F=this.o;if(this.S&&(F?(F=y(F),R(F,this.S)):F=this.S),this.m!==null||this.O||(V.H=F,F=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=$v(this,V,d),m=ir(this.I),Te(m,"RID",u),Te(m,"CVER",22),this.D&&Te(m,"X-HTTP-Session-Id",this.D),Ra(this,m),F&&(this.O?d="headers="+encodeURIComponent(String(Ov(F)))+"&"+d:this.m&&wf(m,this.m,F)),vf(this.h,V),this.Ua&&Te(m,"TYPE","init"),this.P?(Te(m,"$req",d),Te(m,"SID","null"),V.T=!0,mf(V,m,null)):mf(V,m,d),this.G=2}}else this.G==3&&(u?Bv(this,u):this.i.length==0||Iv(this.h)||Bv(this))};function Bv(u,d){var m;d?m=d.l:m=u.U++;const _=ir(u.I);Te(_,"SID",u.K),Te(_,"RID",m),Te(_,"AID",u.T),Ra(u,_),u.m&&u.o&&wf(_,u.m,u.o),m=new Vr(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),d&&(u.i=d.D.concat(u.i)),d=$v(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),vf(u.h,m),mf(m,_,d)}function Ra(u,d){u.H&&O(u.H,function(m,_){Te(d,_,m)}),u.l&&Av({},function(m,_){Te(d,_,m)})}function $v(u,d,m){m=Math.min(u.i.length,m);var _=u.l?p(u.l.Na,u.l,u):null;e:{var V=u.i;let F=-1;for(;;){const $=["count="+m];F==-1?0<m?(F=V[0].g,$.push("ofs="+F)):F=0:$.push("ofs="+F);let we=!0;for(let lt=0;lt<m;lt++){let de=V[lt].g;const yt=V[lt].map;if(de-=F,0>de)F=Math.max(0,V[lt].g-100),we=!1;else try{ik(yt,$,"req"+de+"_")}catch{_&&_(yt)}}if(we){_=$.join("&");break e}}}return u=u.i.splice(0,m),d.D=u,_}function qv(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;qe||J(),z||(qe(),z=!0),Q.add(d,u),u.v=0}}function If(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=va(p(u.Fa,u),Wv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,Kv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=va(p(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),$u(this),Kv(this))};function Tf(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Kv(u){u.g=new Vr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=ir(u.qa);Te(d,"RID","rpc"),Te(d,"SID",u.K),Te(d,"AID",u.T),Te(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&Te(d,"TO",u.ja),Te(d,"TYPE","xmlhttp"),Ra(u,d),u.m&&u.o&&wf(d,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=ju(ir(d)),m.m=null,m.P=!0,_v(m,u)}t.Za=function(){this.C!=null&&(this.C=null,$u(this),If(this),Rt(19))};function Ku(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Gv(u,d){var m=null;if(u.g==d){Ku(u),Tf(u),u.g=null;var _=2}else if(_f(u.h,d))m=d.D,Sv(u.h,d),_=1;else return;if(u.G!=0){if(d.o)if(_==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var V=u.B;_=Du(),bt(_,new pv(_,m)),qu(u)}else qv(u);else if(V=d.s,V==3||V==0&&0<d.X||!(_==1&&lk(u,d)||_==2&&If(u)))switch(m&&0<m.length&&(d=u.h,d.i=d.i.concat(m)),V){case 1:Ui(u,5);break;case 4:Ui(u,10);break;case 3:Ui(u,6);break;default:Ui(u,2)}}}function Wv(u,d){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*d}function Ui(u,d){if(u.j.info("Error code "+d),d==2){var m=p(u.fb,u),_=u.Xa;const V=!_;_=new ji(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Mu(_,"https"),ju(_),V?tk(_.toString(),m):nk(_.toString(),m)}else Rt(2);u.G=0,u.l&&u.l.sa(d),Hv(u),zv(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function Hv(u){if(u.G=0,u.ka=[],u.l){const d=xv(u.h);(d.length!=0||u.i.length!=0)&&(P(u.ka,d),P(u.ka,u.i),u.h.i.length=0,A(u.i),u.i.length=0),u.l.ra()}}function Qv(u,d,m){var _=m instanceof ji?ir(m):new ji(m);if(_.g!="")d&&(_.g=d+"."+_.g),Fu(_,_.s);else{var V=a.location;_=V.protocol,d=d?d+"."+V.hostname:V.hostname,V=+V.port;var F=new ji(null);_&&Mu(F,_),d&&(F.g=d),V&&Fu(F,V),m&&(F.l=m),_=F}return m=u.D,d=u.ya,m&&d&&Te(_,m,d),Te(_,"VER",u.la),Ra(u,_),_}function Yv(u,d,m){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new ze(new Uu({eb:m})):new ze(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xv(){}t=Xv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Gu(){}Gu.prototype.g=function(u,d){return new Xt(u,d)};function Xt(u,d){gt.call(this),this.g=new Uv(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!v(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!v(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new js(this)}I(Xt,gt),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){Ef(this.g)},Xt.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=uf(u),u=m);d.i.push(new KP(d.Ya++,u)),d.G==3&&qu(d)},Xt.prototype.N=function(){this.g.l=null,delete this.j,Ef(this.g),delete this.g,Xt.aa.N.call(this)};function Jv(u){hf.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const m in d){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}I(Jv,hf);function Zv(){df.call(this),this.status=1}I(Zv,df);function js(u){this.g=u}I(js,Xv),js.prototype.ua=function(){bt(this.g,"a")},js.prototype.ta=function(u){bt(this.g,new Jv(u))},js.prototype.sa=function(u){bt(this.g,new Zv)},js.prototype.ra=function(){bt(this.g,"b")},Gu.prototype.createWebChannel=Gu.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,wx=function(){return new Gu},vx=function(){return Du()},_x=Mi,Nm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ou.NO_ERROR=0,Ou.TIMEOUT=8,Ou.HTTP_ERROR=6,Mc=Ou,mv.COMPLETE="complete",yx=mv,cv.EventType=ya,ya.OPEN="a",ya.CLOSE="b",ya.ERROR="c",ya.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Xa=cv,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,gx=ze}).apply(typeof fc<"u"?fc:typeof self<"u"?self:typeof window<"u"?window:{});const Nw="@firebase/firestore";/**
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
 */let sa="10.14.0";/**
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
 */const ys=new Dy("@firebase/firestore");function Ys(){return ys.logLevel}function U(t,...e){if(ys.logLevel<=oe.DEBUG){const n=e.map(Vy);ys.debug(`Firestore (${sa}): ${t}`,...n)}}function Nt(t,...e){if(ys.logLevel<=oe.ERROR){const n=e.map(Vy);ys.error(`Firestore (${sa}): ${t}`,...n)}}function Fo(t,...e){if(ys.logLevel<=oe.WARN){const n=e.map(Vy);ys.warn(`Firestore (${sa}): ${t}`,...n)}}function Vy(t){if(typeof t=="string")return t;try{/**
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${sa}) INTERNAL ASSERTION FAILED: `+t;throw Nt(e),new Error(e)}function Y(t,e){t||H()}function te(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends nr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class HO{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class YO{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Y(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new HO(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new Ct(e)}}class XO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class JO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new XO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Y(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Y(typeof n.token=="string"),this.R=n.token,new ZO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function tV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ex{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=tV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function jo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function Ix(t){return t+"\0"}/**
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
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Me(0,0))}static max(){return new X(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Kl{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Kl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Kl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends Kl{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const nV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Kl{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return nV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new q(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
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
 */class Nh{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Dm(t){return t.fields.find(e=>e.kind===2)}function Gi(t){return t.fields.filter(e=>e.kind!==2)}Nh.UNKNOWN_ID=-1;class Fc{constructor(e,n){this.fieldPath=e,this.kind=n}}class Gl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Gl(0,un.min())}}function rV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new un(i,K.empty(),e)}function Tx(t){return new un(t.readTime,t.key,-1)}class un{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new un(X.min(),K.empty(),-1)}static max(){return new un(X.max(),K.empty(),-1)}}function Ly(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const Sx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ns(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==Sx)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Sd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new vr,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ml(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=My(r.target.error);this.V.reject(new ml(e,i))}}static open(e,n,r,i){try{return new Sd(n,e.transaction(i,r))}catch(s){throw new ml(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new sV(n)}}class mi{constructor(e,n,r){this.name=e,this.version=n,this.p=r,mi.S(nt())===12.2&&Nt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),Wi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!lx())return!1;if(mi.v())return!0;const e=nt(),n=mi.S(e),r=0<n&&n<10,i=Ax(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ml(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new q(j.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new q(j.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ml(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Sd.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),L.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Ax(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class iV{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Wi(this.B.delete())}}class ml extends q{constructor(e,n){super(j.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ni(t){return t.name==="IndexedDbTransactionError"}class sV{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Wi(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),Wi(this.store.add(e))}get(e){return Wi(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),Wi(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),Wi(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new L((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new L((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new L((r,i)=>{n.onerror=s=>{const o=My(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new L((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new iV(a),c=n(a.primaryKey,a.value,l);if(c instanceof L){const h=c.catch(f=>(l.done(),L.reject(f)));r.push(h)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>L.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Wi(t){return new L((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=My(r.target.error);n(i)}})}let Dw=!1;function My(t){const e=mi.S(nt());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new q("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Dw||(Dw=!0,setTimeout(()=>{throw r},0)),r}}return t}class oV{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){Ni(n)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Ns(n)}await this.X(6e4)})}}class aV{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return L.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=Tx(s);Ly(o,r)>0&&(r=o)}),new un(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class _n{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}_n.oe=-1;function xd(t){return t==null}function Wl(t){return t===0&&1/t==-1/0}function lV(t){return typeof t=="number"&&Number.isInteger(t)&&!Wl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Vt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ow(e)),e=uV(t.get(n),e);return Ow(e)}function uV(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Ow(t){return t+""}function $n(t){const e=t.length;if(Y(e>=2),e===2)return Y(t.charAt(0)===""&&t.charAt(1)===""),me.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&H(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:H()}s=o+2}return new me(r)}/**
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
 */const Vw=["userId","batchId"];/**
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
 */function jc(t,e){return[t,Vt(e)]}function bx(t,e,n){return[t,Vt(e),n]}const cV={},hV=["prefixPath","collectionGroup","readTime","documentId"],dV=["prefixPath","collectionGroup","documentId"],fV=["collectionGroup","readTime","prefixPath","documentId"],pV=["canonicalId","targetId"],mV=["targetId","path"],gV=["path","targetId"],yV=["collectionId","parent"],_V=["indexId","uid"],vV=["uid","sequenceNumber"],wV=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],EV=["indexId","uid","orderedDocumentKey"],IV=["userId","collectionPath","documentId"],TV=["userId","collectionPath","largestBatchId"],SV=["userId","collectionGroup","largestBatchId"],Rx=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xV=[...Rx,"documentOverlays"],Px=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],kx=Px,Fy=[...kx,"indexConfiguration","indexState","indexEntries"],AV=Fy,bV=[...Fy,"globals"];/**
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
 */class Om extends xx{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function rt(t,e){const n=te(t);return mi.F(n._e,e)}/**
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
 */function Lw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class De{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pc(this.root,e,this.comparator,!1)}getReverseIterator(){return new pc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pc(this.root,e,this.comparator,!0)}}class pc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=s??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ht(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ve{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mw(this.data.getIterator())}getIteratorFrom(e){return new Mw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class Mw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function qs(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class qt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new qt([])}unionWith(e){let n=new ve(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return jo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Nx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Nx("Invalid base64 string: "+s):s}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const RV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(Y(!!t),typeof t=="string"){let e=0;const n=RV.exec(t);if(Y(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ei(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
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
 */function jy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Uy(t){const e=t.mapValue.fields.__previous_value__;return jy(e)?Uy(e):e}function Hl(t){const e=Ar(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class PV{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class _s{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _s&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ri={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Uc={nullValue:"NULL_VALUE"};function vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jy(t)?4:Dx(t)?9007199254740991:Ad(t)?10:11:H()}function er(t,e){if(t===e)return!0;const n=vs(t);if(n!==vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hl(t).isEqual(Hl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ar(i.timestampValue),a=Ar(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ei(i.bytesValue).isEqual(Ei(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Pe(i.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(i.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Pe(i.integerValue)===Pe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Pe(i.doubleValue),a=Pe(s.doubleValue);return o===a?Wl(o)===Wl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return jo(t.arrayValue.values||[],e.arrayValue.values||[],er);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Lw(o)!==Lw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!er(o[l],a[l])))return!1;return!0}(t,e);default:return H()}}function Ql(t,e){return(t.values||[]).find(n=>er(n,e))!==void 0}function Ii(t,e){if(t===e)return 0;const n=vs(t),r=vs(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Pe(s.integerValue||s.doubleValue),l=Pe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Fw(t.timestampValue,e.timestampValue);case 4:return Fw(Hl(t),Hl(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ei(s),l=Ei(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=ne(a[c],l[c]);if(h!==0)return h}return ne(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ne(Pe(s.latitude),Pe(o.latitude));return a!==0?a:ne(Pe(s.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return jw(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const f=s.fields||{},p=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,I=(l=p.value)===null||l===void 0?void 0:l.arrayValue,A=ne(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return A!==0?A:jw(g,I)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ri.mapValue&&o===ri.mapValue)return 0;if(s===ri.mapValue)return 1;if(o===ri.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=ne(l[f],h[f]);if(p!==0)return p;const g=Ii(a[l[f]],c[h[f]]);if(g!==0)return g}return ne(l.length,h.length)}(t.mapValue,e.mapValue);default:throw H()}}function Fw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Ar(t),r=Ar(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function jw(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ii(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function Uo(t){return Vm(t)}function Vm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ei(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Vm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Vm(n.fields[o])}`;return i+"}"}(t.mapValue):H()}function Yl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Lm(t){return!!t&&"integerValue"in t}function Xl(t){return!!t&&"arrayValue"in t}function Uw(t){return!!t&&"nullValue"in t}function zw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zc(t){return!!t&&"mapValue"in t}function Ad(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function gl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ds(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Dx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Ox={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function kV(t){return"nullValue"in t?Uc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Yl(_s.empty(),K.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?Ad(t)?Ox:{mapValue:{}}:H()}function CV(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Yl(_s.empty(),K.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?Ox:"mapValue"in t?Ad(t)?{mapValue:{}}:ri:H()}function Bw(t,e){const n=Ii(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function $w(t,e){const n=Ii(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gl(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=gl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());zc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];zc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ds(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Tt(gl(this.value))}}function Vx(t){const e=[];return Ds(t.fields,(n,r)=>{const i=new Ve([n]);if(zc(r)){const s=Vx(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qt(e)}/**
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
 */class $e{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $e(e,0,X.min(),X.min(),X.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,i){return new $e(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new $e(e,2,n,X.min(),X.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,X.min(),X.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zo{constructor(e,n){this.position=e,this.inclusive=n}}function qw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Ii(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!er(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Jl{constructor(e,n="asc"){this.field=e,this.dir=n}}function NV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Lx{}class ae extends Lx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new DV(e,n,r):n==="array-contains"?new LV(e,r):n==="in"?new Bx(e,r):n==="not-in"?new MV(e,r):n==="array-contains-any"?new FV(e,r):new ae(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new OV(e,r):new VV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ii(n,this.value)):n!==null&&vs(this.value)===vs(n)&&this.matchesComparison(Ii(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ye extends Lx{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ye(e,n)}matches(e){return Bo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Bo(t){return t.op==="and"}function Mm(t){return t.op==="or"}function zy(t){return Mx(t)&&Bo(t)}function Mx(t){for(const e of t.filters)if(e instanceof ye)return!1;return!0}function Fm(t){if(t instanceof ae)return t.field.canonicalString()+t.op.toString()+Uo(t.value);if(zy(t))return t.filters.map(e=>Fm(e)).join(",");{const e=t.filters.map(n=>Fm(n)).join(",");return`${t.op}(${e})`}}function Fx(t,e){return t instanceof ae?function(r,i){return i instanceof ae&&r.op===i.op&&r.field.isEqual(i.field)&&er(r.value,i.value)}(t,e):t instanceof ye?function(r,i){return i instanceof ye&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Fx(o,i.filters[a]),!0):!1}(t,e):void H()}function jx(t,e){const n=t.filters.concat(e);return ye.create(n,t.op)}function Ux(t){return t instanceof ae?function(n){return`${n.field.canonicalString()} ${n.op} ${Uo(n.value)}`}(t):t instanceof ye?function(n){return n.op.toString()+" {"+n.getFilters().map(Ux).join(" ,")+"}"}(t):"Filter"}class DV extends ae{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class OV extends ae{constructor(e,n){super(e,"in",n),this.keys=zx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VV extends ae{constructor(e,n){super(e,"not-in",n),this.keys=zx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class LV extends ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xl(n)&&Ql(n.arrayValue,this.value)}}class Bx extends ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ql(this.value.arrayValue,n)}}class MV extends ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ql(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ql(this.value.arrayValue,n)}}class FV extends ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ql(this.value.arrayValue,r))}}/**
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
 */class jV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function jm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new jV(t,e,n,r,i,s,o)}function ws(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),xd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Uo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Uo(r)).join(",")),e.ue=n}return e.ue}function gu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kw(t.startAt,e.startAt)&&Kw(t.endAt,e.endAt)}function Dh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Oh(t,e){return t.filters.filter(n=>n instanceof ae&&n.field.isEqual(e))}function Gw(t,e,n){let r=Uc,i=!0;for(const s of Oh(t,e)){let o=Uc,a=!0;switch(s.op){case"<":case"<=":o=kV(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Uc}Bw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Bw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Ww(t,e,n){let r=ri,i=!0;for(const s of Oh(t,e)){let o=ri,a=!0;switch(s.op){case">=":case">":o=CV(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=ri}$w({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];$w({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class oa{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function UV(t,e,n,r,i,s,o,a){return new oa(t,e,n,r,i,s,o,a)}function bd(t){return new oa(t)}function Hw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $x(t){return t.collectionGroup!==null}function yl(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ve(Ve.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Jl(s,r))}),n.has(Ve.keyField().canonicalString())||e.ce.push(new Jl(Ve.keyField(),r))}return e.ce}function wn(t){const e=te(t);return e.le||(e.le=zV(e,yl(t))),e.le}function zV(t,e){if(t.limitType==="F")return jm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Jl(i.field,s)});const n=t.endAt?new zo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zo(t.startAt.position,t.startAt.inclusive):null;return jm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Um(t,e){const n=t.filters.concat([e]);return new oa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function zm(t,e,n){return new oa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rd(t,e){return gu(wn(t),wn(e))&&t.limitType===e.limitType}function qx(t){return`${ws(wn(t))}|lt:${t.limitType}`}function Xs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Ux(i)).join(", ")}]`),xd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Uo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Uo(i)).join(",")),`Target(${r})`}(wn(t))}; limitType=${t.limitType})`}function yu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of yl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=qw(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,yl(r),i)||r.endAt&&!function(o,a,l){const c=qw(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,yl(r),i))}(t,e)}function BV(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Kx(t){return(e,n)=>{let r=!1;for(const i of yl(t)){const s=$V(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $V(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Ii(l,c):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
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
 */class Di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ds(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Cx(this.inner)}size(){return this.innerSize}}/**
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
 */const qV=new De(K.comparator);function nn(){return qV}const Gx=new De(K.comparator);function Ja(...t){let e=Gx;for(const n of t)e=e.insert(n.key,n);return e}function Wx(t){let e=Gx;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qn(){return _l()}function Hx(){return _l()}function _l(){return new Di(t=>t.toString(),(t,e)=>t.isEqual(e))}const KV=new De(K.comparator),GV=new ve(K.comparator);function se(...t){let e=GV;for(const n of t)e=e.add(n);return e}const WV=new ve(ne);function HV(){return WV}/**
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
 */function By(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wl(e)?"-0":e}}function Qx(t){return{integerValue:""+t}}function QV(t,e){return lV(e)?Qx(e):By(t,e)}/**
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
 */class Pd{constructor(){this._=void 0}}function YV(t,e,n){return t instanceof Zl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&jy(s)&&(s=Uy(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof $o?Xx(t,e):t instanceof qo?Jx(t,e):function(i,s){const o=Yx(i,s),a=Qw(o)+Qw(i.Pe);return Lm(o)&&Lm(i.Pe)?Qx(a):By(i.serializer,a)}(t,e)}function XV(t,e,n){return t instanceof $o?Xx(t,e):t instanceof qo?Jx(t,e):n}function Yx(t,e){return t instanceof eu?function(r){return Lm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Zl extends Pd{}class $o extends Pd{constructor(e){super(),this.elements=e}}function Xx(t,e){const n=Zx(e);for(const r of t.elements)n.some(i=>er(i,r))||n.push(r);return{arrayValue:{values:n}}}class qo extends Pd{constructor(e){super(),this.elements=e}}function Jx(t,e){let n=Zx(e);for(const r of t.elements)n=n.filter(i=>!er(i,r));return{arrayValue:{values:n}}}class eu extends Pd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Qw(t){return Pe(t.integerValue||t.doubleValue)}function Zx(t){return Xl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class JV{constructor(e,n){this.field=e,this.transform=n}}function ZV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof $o&&i instanceof $o||r instanceof qo&&i instanceof qo?jo(r.elements,i.elements,er):r instanceof eu&&i instanceof eu?er(r.Pe,i.Pe):r instanceof Zl&&i instanceof Zl}(t.transform,e.transform)}class e4{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class kd{}function eA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cd(t.key,Dt.none()):new aa(t.key,t.data,Dt.none());{const n=t.data,r=Tt.empty();let i=new ve(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Nr(t.key,r,new qt(i.toArray()),Dt.none())}}function t4(t,e,n){t instanceof aa?function(i,s,o){const a=i.value.clone(),l=Xw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(i,s,o){if(!Bc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Xw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(tA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vl(t,e,n,r){return t instanceof aa?function(s,o,a,l){if(!Bc(s.precondition,o))return a;const c=s.value.clone(),h=Jw(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(s,o,a,l){if(!Bc(s.precondition,o))return a;const c=Jw(s.fieldTransforms,l,o),h=o.data;return h.setAll(tA(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Bc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function n4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Yx(r.transform,i||null);s!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,s))}return n||null}function Yw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&jo(r,i,(s,o)=>ZV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class aa extends kd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nr extends kd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xw(t,e,n){const r=new Map;Y(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,XV(o,a,n[i]))}return r}function Jw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,YV(s,o,e))}return r}class Cd extends kd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nA extends kd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $y{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&t4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Hx();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=eA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&jo(this.mutations,e.mutations,(n,r)=>Yw(n,r))&&jo(this.baseMutations,e.baseMutations,(n,r)=>Yw(n,r))}}class qy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Y(e.mutations.length===r.length);let i=function(){return KV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qy(e,n,r,i)}}/**
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
 */class Ky{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class r4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,ce;function i4(t){switch(t){default:return H();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function rA(t){if(t===void 0)return Nt("GRPC error has no .code"),j.UNKNOWN;switch(t){case He.OK:return j.OK;case He.CANCELLED:return j.CANCELLED;case He.UNKNOWN:return j.UNKNOWN;case He.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case He.INTERNAL:return j.INTERNAL;case He.UNAVAILABLE:return j.UNAVAILABLE;case He.UNAUTHENTICATED:return j.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case He.NOT_FOUND:return j.NOT_FOUND;case He.ALREADY_EXISTS:return j.ALREADY_EXISTS;case He.PERMISSION_DENIED:return j.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case He.ABORTED:return j.ABORTED;case He.OUT_OF_RANGE:return j.OUT_OF_RANGE;case He.UNIMPLEMENTED:return j.UNIMPLEMENTED;case He.DATA_LOSS:return j.DATA_LOSS;default:return H()}}(ce=He||(He={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function s4(){return new TextEncoder}/**
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
 */const o4=new is([4294967295,4294967295],0);function Zw(t){const e=s4().encode(t),n=new mx;return n.update(e),new Uint8Array(n.digest())}function eE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new is([n,r],0),new is([i,s],0)]}class Gy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Za(`Invalid padding: ${n}`);if(r<0)throw new Za(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Za(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Za(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=is.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(is.fromNumber(r)));return i.compare(o4)===1&&(i=new is([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Zw(e),[r,i]=eE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Gy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Zw(e),[r,i]=eE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Za extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Nd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,_u.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Nd(X.min(),i,new De(ne),nn(),se())}}class _u{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _u(r,n,se(),se(),se())}}/**
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
 */class $c{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class iA{constructor(e,n){this.targetId=e,this.me=n}}class sA{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class tE{constructor(){this.fe=0,this.ge=rE(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H()}}),new _u(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=rE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class a4{constructor(e){this.Le=e,this.Be=new Map,this.ke=nn(),this.qe=nE(),this.Qe=new De(ne)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Dh(s))if(r===0){const o=new K(s.path);this.Ue(n,o,$e.newNoDocument(o,X.min()))}else Y(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ei(r).toUint8Array()}catch(l){if(l instanceof Nx)return Fo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Gy(o,i,s)}catch(l){return Fo(l instanceof Za?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Dh(a.target)){const l=new K(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,$e.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=se();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Nd(e,n,this.Qe,this.ke,r);return this.ke=nn(),this.qe=nE(),this.Qe=new De(ne),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new tE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ve(ne),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new tE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function nE(){return new De(K.comparator)}function rE(){return new De(K.comparator)}const l4={asc:"ASCENDING",desc:"DESCENDING"},u4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},c4={and:"AND",or:"OR"};class h4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bm(t,e){return t.useProto3Json||xd(e)?e:{value:e}}function Ko(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function d4(t,e){return Ko(t,e.toTimestamp())}function Lt(t){return Y(!!t),X.fromTimestamp(function(n){const r=Ar(n);return new Me(r.seconds,r.nanos)}(t))}function Wy(t,e){return $m(t,e).canonicalString()}function $m(t,e){const n=function(i){return new me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function aA(t){const e=me.fromString(t);return Y(gA(e)),e}function Vh(t,e){return Wy(t.databaseId,e.path)}function ss(t,e){const n=aA(e);if(n.get(1)!==t.databaseId.projectId)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(cA(n))}function lA(t,e){return Wy(t.databaseId,e)}function uA(t){const e=aA(t);return e.length===4?me.emptyPath():cA(e)}function qm(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cA(t){return Y(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function iE(t,e,n){return{name:Vh(t,e),fields:n.value.mapValue.fields}}function f4(t,e,n){const r=ss(t,e.name),i=Lt(e.updateTime),s=e.createTime?Lt(e.createTime):X.min(),o=new Tt({mapValue:{fields:e.fields}}),a=$e.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function p4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Y(h===void 0||typeof h=="string"),Xe.fromBase64String(h||"")):(Y(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Xe.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?j.UNKNOWN:rA(c.code);return new q(h,c.message||"")}(o);n=new sA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ss(t,r.document.name),s=Lt(r.document.updateTime),o=r.document.createTime?Lt(r.document.createTime):X.min(),a=new Tt({mapValue:{fields:r.document.fields}}),l=$e.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new $c(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ss(t,r.document),s=r.readTime?Lt(r.readTime):X.min(),o=$e.newNoDocument(i,s),a=r.removedTargetIds||[];n=new $c([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ss(t,r.document),s=r.removedTargetIds||[];n=new $c([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new r4(i,s),a=r.targetId;n=new iA(a,o)}}return n}function Lh(t,e){let n;if(e instanceof aa)n={update:iE(t,e.key,e.value)};else if(e instanceof Cd)n={delete:Vh(t,e.key)};else if(e instanceof Nr)n={update:iE(t,e.key,e.data),updateMask:w4(e.fieldMask)};else{if(!(e instanceof nA))return H();n={verify:Vh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Zl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $o)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof eu)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:d4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(t,e.precondition)),n}function Km(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Dt.updateTime(Lt(s.updateTime)):s.exists!==void 0?Dt.exists(s.exists):Dt.none()}(e.currentDocument):Dt.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)Y(a.setToServerValue==="REQUEST_TIME"),l=new Zl;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new $o(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new qo(h)}else"increment"in a?l=new eu(o,a.increment):H();const c=Ve.fromServerFormat(a.fieldPath);return new JV(c,l)}(t,i)):[];if(e.update){e.update.name;const i=ss(t,e.update.name),s=new Tt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new qt(c.map(h=>Ve.fromServerFormat(h)))}(e.updateMask);return new Nr(i,s,o,n,r)}return new aa(i,s,n,r)}if(e.delete){const i=ss(t,e.delete);return new Cd(i,n)}if(e.verify){const i=ss(t,e.verify);return new nA(i,n)}return H()}function m4(t,e){return t&&t.length>0?(Y(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Lt(i.updateTime):Lt(s);return o.isEqual(X.min())&&(o=Lt(s)),new e4(o,i.transformResults||[])}(n,e))):[]}function hA(t,e){return{documents:[lA(t,e.path)]}}function dA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=lA(t,i);const s=function(c){if(c.length!==0)return mA(ye.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Js(p.field),direction:y4(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Bm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function fA(t){let e=uA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Y(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=pA(f);return p instanceof ye&&zy(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(I){return new Jl(Zs(I.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,xd(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,g=f.values||[];return new zo(g,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,g=f.values||[];return new zo(g,p)}(n.endAt)),UV(e,i,o,s,a,"F",l,c)}function g4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zs(n.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Zs(n.unaryFilter.field);return ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zs(n.unaryFilter.field);return ae.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zs(n.unaryFilter.field);return ae.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(n){return ae.create(Zs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ye.create(n.compositeFilter.filters.map(r=>pA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H()}}(n.compositeFilter.op))}(t):H()}function y4(t){return l4[t]}function _4(t){return u4[t]}function v4(t){return c4[t]}function Js(t){return{fieldPath:t.canonicalString()}}function Zs(t){return Ve.fromServerFormat(t.fieldPath)}function mA(t){return t instanceof ae?function(n){if(n.op==="=="){if(zw(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NAN"}};if(Uw(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(zw(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NOT_NAN"}};if(Uw(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Js(n.field),op:_4(n.op),value:n.value}}}(t):t instanceof ye?function(n){const r=n.getFilters().map(i=>mA(i));return r.length===1?r[0]:{compositeFilter:{op:v4(n.op),filters:r}}}(t):H()}function w4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class fr{constructor(e,n,r,i,s=X.min(),o=X.min(),a=Xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yA{constructor(e){this.ct=e}}function E4(t,e){let n;if(e.document)n=f4(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=K.fromSegments(e.noDocument.path),i=Is(e.noDocument.readTime);n=$e.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return H();{const r=K.fromSegments(e.unknownDocument.path),i=Is(e.unknownDocument.version);n=$e.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Me(i[0],i[1]);return X.fromTimestamp(s)}(e.readTime)),n}function sE(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Mh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Vh(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ko(s,o.version.toTimestamp()),createTime:Ko(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Es(e.version)};else{if(!e.isUnknownDocument())return H();r.unknownDocument={path:n.path.toArray(),version:Es(e.version)}}return r}function Mh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Es(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Is(t){const e=new Me(t.seconds,t.nanoseconds);return X.fromTimestamp(e)}function Hi(t,e){const n=(e.baseMutations||[]).map(s=>Km(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Km(t.ct,s)),i=Me.fromMillis(e.localWriteTimeMs);return new $y(e.batchId,i,n,r)}function el(t){const e=Is(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Is(t.lastLimboFreeSnapshotVersion):X.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return Y(s.documents.length===1),wn(bd(uA(s.documents[0])))}(t.query):function(s){return wn(fA(s))}(t.query),new fr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Xe.fromBase64String(t.resumeToken))}function _A(t,e){const n=Es(e.snapshotVersion),r=Es(e.lastLimboFreeSnapshotVersion);let i;i=Dh(e.target)?hA(t.ct,e.target):dA(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ws(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function vA(t){const e=fA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zm(e,e.limit,"L"):e}function ap(t,e){return new Ky(e.largestBatchId,Km(t.ct,e.overlayMutation))}function oE(t,e){const n=e.path.lastSegment();return[t,Vt(e.path.popLast()),n]}function aE(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Es(r.readTime),documentKey:Vt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class I4{getBundleMetadata(e,n){return lE(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Is(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return lE(e).put(function(i){return{bundleId:i.id,createTime:Es(Lt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return uE(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:vA(s.bundledQuery),readTime:Is(s.readTime)}}(r)})}saveNamedQuery(e,n){return uE(e).put(function(i){return{name:i.name,readTime:Es(Lt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function lE(t){return rt(t,"bundles")}function uE(t){return rt(t,"namedQueries")}/**
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
 */class Dd{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Dd(e,r)}getOverlay(e,n){return Fa(e).get(oE(this.userId,n)).next(r=>r?ap(this.serializer,r):null)}getOverlays(e,n){const r=qn();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Ky(n,o);i.push(this.ht(e,a))}),L.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Vt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Fa(e).j("collectionPathOverlayIndex",a))}),L.waitFor(s)}getOverlaysForCollection(e,n,r){const i=qn(),s=Vt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Fa(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=ap(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=qn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Fa(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,h)=>{const f=ap(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):h.done()}).next(()=>s)}ht(e,n){return Fa(e).put(function(i,s,o){const[a,l,c]=oE(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Lh(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Fa(t){return rt(t,"documentOverlays")}/**
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
 */class T4{Pt(e){return rt(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Xe.fromUint8Array(r):Xe.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
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
 */class Qi{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(Pe(e.integerValue));else if("doubleValue"in e){const r=Pe(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),Wl(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=Ar(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(Ei(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?Dx(e)?this.dt(n,Number.MAX_SAFE_INTEGER):Ad(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):H()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(Pe(a)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),K.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}Qi.vt=new Qi;function S4(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function cE(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=S4(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class x4{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=cE(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=cE(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class A4{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class b4{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ja{constructor(){this.jt=new x4,this.Ht=new A4(this.jt),this.Jt=new b4(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class Yi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Yi(this.indexId,this.documentKey,this.arrayValue,r)}}function jr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=hE(t.arrayValue,e.arrayValue),n!==0?n:(n=hE(t.directionalValue,e.directionalValue),n!==0?n:K.comparator(t.documentKey,e.documentKey)))}function hE(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class dE{constructor(e){this.Xt=new ve((n,r)=>Ve.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Y(e.collectionGroup===this.collectionId),this.nn)return!1;const n=Dm(e);if(n!==void 0&&!this.sn(n))return!1;const r=Gi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.on(a,l)||!this._n(this.en[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new ve(Ve.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Fc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Fc(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Fc(r.field,r.dir==="asc"?0:1)));return new Nh(Nh.UNKNOWN_ID,this.collectionId,n,Gl.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function wA(t){var e,n;if(Y(t instanceof ae||t instanceof ye),t instanceof ae){if(t instanceof Bx){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ae.create(t.field,"==",s)))||[];return ye.create(i,"or")}return t}const r=t.filters.map(i=>wA(i));return ye.create(r,t.op)}function R4(t){if(t.getFilters().length===0)return[];const e=Hm(wA(t));return Y(EA(e)),Gm(e)||Wm(e)?[e]:e.getFilters()}function Gm(t){return t instanceof ae}function Wm(t){return t instanceof ye&&zy(t)}function EA(t){return Gm(t)||Wm(t)||function(n){if(n instanceof ye&&Mm(n)){for(const r of n.getFilters())if(!Gm(r)&&!Wm(r))return!1;return!0}return!1}(t)}function Hm(t){if(Y(t instanceof ae||t instanceof ye),t instanceof ae)return t;if(t.filters.length===1)return Hm(t.filters[0]);const e=t.filters.map(r=>Hm(r));let n=ye.create(e,t.op);return n=Fh(n),EA(n)?n:(Y(n instanceof ye),Y(Bo(n)),Y(n.filters.length>1),n.filters.reduce((r,i)=>Hy(r,i)))}function Hy(t,e){let n;return Y(t instanceof ae||t instanceof ye),Y(e instanceof ae||e instanceof ye),n=t instanceof ae?e instanceof ae?function(i,s){return ye.create([i,s],"and")}(t,e):fE(t,e):e instanceof ae?fE(e,t):function(i,s){if(Y(i.filters.length>0&&s.filters.length>0),Bo(i)&&Bo(s))return jx(i,s.getFilters());const o=Mm(i)?i:s,a=Mm(i)?s:i,l=o.filters.map(c=>Hy(c,a));return ye.create(l,"or")}(t,e),Fh(n)}function fE(t,e){if(Bo(e))return jx(e,t.getFilters());{const n=e.filters.map(r=>Hy(t,r));return ye.create(n,"or")}}function Fh(t){if(Y(t instanceof ae||t instanceof ye),t instanceof ae)return t;const e=t.getFilters();if(e.length===1)return Fh(e[0]);if(Mx(t))return t;const n=e.map(i=>Fh(i)),r=[];return n.forEach(i=>{i instanceof ae?r.push(i):i instanceof ye&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ye.create(r,t.op)}/**
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
 */class P4{constructor(){this.un=new Qy}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(un.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(un.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Qy{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ve(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ve(me.comparator)).toArray()}}/**
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
 */const mc=new Uint8Array(0);class k4{constructor(e,n){this.databaseId=n,this.cn=new Qy,this.ln=new Di(r=>ws(r),(r,i)=>gu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:Vt(i)};return pE(e).put(s)}return L.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[Ix(n),""],!1,!0);return pE(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push($n(o.parent))}return r})}addFieldIndex(e,n){const r=Ua(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Gs(e);return s.next(a=>{o.put(aE(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Ua(e),i=Gs(e),s=Ks(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Ua(e),r=Ks(e),i=Gs(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return L.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new dE(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Ks(e);let i=!0;const s=new Map;return L.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=se();const a=[];return L.forEach(s,(l,c)=>{U("IndexedDbIndexManager",`Using index ${function(E){return`id=${E.indexId}|cg=${E.collectionGroup}|f=${E.fields.map(k=>`${k.fieldPath}:${k.kind}`).join(",")}`}(l)} to execute ${ws(n)}`);const h=function(E,k){const M=Dm(k);if(M===void 0)return null;for(const O of Oh(E,M.fieldPath))switch(O.op){case"array-contains-any":return O.value.arrayValue.values||[];case"array-contains":return[O.value]}return null}(c,l),f=function(E,k){const M=new Map;for(const O of Gi(k))for(const w of Oh(E,O.fieldPath))switch(w.op){case"==":case"in":M.set(O.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return M.set(O.fieldPath.canonicalString(),w.value),Array.from(M.values())}return null}(c,l),p=function(E,k){const M=[];let O=!0;for(const w of Gi(k)){const y=w.kind===0?Gw(E,w.fieldPath,E.startAt):Ww(E,w.fieldPath,E.startAt);M.push(y.value),O&&(O=y.inclusive)}return new zo(M,O)}(c,l),g=function(E,k){const M=[];let O=!0;for(const w of Gi(k)){const y=w.kind===0?Ww(E,w.fieldPath,E.endAt):Gw(E,w.fieldPath,E.endAt);M.push(y.value),O&&(O=y.inclusive)}return new zo(M,O)}(c,l),I=this.In(l,c,p),A=this.In(l,c,g),P=this.Tn(l,c,f),T=this.En(l.indexId,h,I,p.inclusive,A,g.inclusive,P);return L.forEach(T,v=>r.G(v,n.limit).next(E=>{E.forEach(k=>{const M=K.fromSegments(k.documentKey);o.has(M)||(o=o.add(M),a.push(M))})}))}).next(()=>a)}return L.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=R4(ye.create(e.filters,"and")).map(r=>jm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),h=[];for(let f=0;f<l;++f){const p=n?this.dn(n[f/c]):mc,g=this.An(e,p,r[f%c],i),I=this.Rn(e,p,s[f%c],o),A=a.map(P=>this.An(e,p,P,!0));h.push(...this.createRange(g,I,A))}return h}An(e,n,r,i){const s=new Yi(e,K.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new Yi(e,K.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new dE(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return L.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new ve(Ve.comparator),h=!1;for(const f of l.filters)for(const p of f.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?h=!0:c=c.add(p.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new ja;for(const i of Gi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);Qi.vt.It(s,o)}return r.zt()}dn(e){const n=new ja;return Qi.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new ja;return Qi.vt.It(Yl(this.databaseId,n),r.Yt(function(s){const o=Gi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new ja);let s=0;for(const o of Gi(e)){const a=r[s++];for(const l of i)if(this.fn(n,o.fieldPath)&&Xl(a))i=this.gn(i,o,a);else{const c=l.Yt(o.kind);Qi.vt.It(a,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new ja;l.seed(a.zt()),Qi.vt.It(o,l.Yt(n.kind)),s.push(l)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof ae&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Ua(e),i=Gs(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return L.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(h,f){const p=f?new Gl(f.sequenceNumber,new un(Is(f.readTime),new K($n(f.documentKey)),f.largestBatchId)):Gl.empty(),g=h.fields.map(([I,A])=>new Fc(Ve.fromServerFormat(I),A));return new Nh(h.indexId,h.collectionGroup,g,p)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ne(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Ua(e),s=Gs(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>L.forEach(a,l=>s.put(aE(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return L.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?L.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),L.forEach(a,l=>this.wn(e,i,l).next(c=>{const h=this.Sn(s,l);return c.isEqual(h)?L.resolve():this.bn(e,s,l,c,h)}))))})}Dn(e,n,r,i){return Ks(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return Ks(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=Ks(e);let s=new ve(jr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new Yi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,n){let r=new ve(jr);const i=this.Vn(n,e);if(i==null)return r;const s=Dm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Xl(o))for(const a of o.arrayValue.values||[])r=r.add(new Yi(n.indexId,e.key,this.dn(a),i))}else r=r.add(new Yi(n.indexId,e.key,mc,i));return r}bn(e,n,r,i,s){U("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,h,f,p){const g=l.getIterator(),I=c.getIterator();let A=qs(g),P=qs(I);for(;A||P;){let T=!1,v=!1;if(A&&P){const E=h(A,P);E<0?v=!0:E>0&&(T=!0)}else A!=null?v=!0:T=!0;T?(f(P),P=qs(I)):v?(p(A),A=qs(g)):(A=qs(g),P=qs(I))}}(i,s,jr,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),L.waitFor(o)}yn(e){let n=1;return Gs(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>jr(o,a)).filter((o,a,l)=>!a||jr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=jr(o,e),l=jr(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,mc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,mc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Cn(e,n){return jr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(mE)}getMinOffset(e,n){return L.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||H())).next(mE)}}function pE(t){return rt(t,"collectionParents")}function Ks(t){return rt(t,"indexEntries")}function Ua(t){return rt(t,"indexConfiguration")}function Gs(t){return rt(t,"indexState")}function mE(t){Y(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Ly(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new un(e.readTime,e.documentKey,n)}/**
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
 */const gE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ut{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ut(e,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function IA(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(h,f,p)=>(a++,p.delete()));s.push(l.next(()=>{Y(a===1)}));const c=[];for(const h of n.mutations){const f=bx(e,h.key.path,n.batchId);s.push(i.delete(f)),c.push(h.key)}return L.waitFor(s).next(()=>c)}function jh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw H();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Ut.DEFAULT_COLLECTION_PERCENTILE=10,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ut.DEFAULT=new Ut(41943040,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ut.DISABLED=new Ut(-1,0,0);class Od{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){Y(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Od(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ur(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=eo(e),o=Ur(e);return o.add({}).next(a=>{Y(typeof a=="number");const l=new $y(a,n,r,i),c=function(g,I,A){const P=A.baseMutations.map(v=>Lh(g.ct,v)),T=A.mutations.map(v=>Lh(g.ct,v));return{userId:I,batchId:A.batchId,localWriteTimeMs:A.localWriteTime.toMillis(),baseMutations:P,mutations:T}}(this.serializer,this.userId,l),h=[];let f=new ve((p,g)=>ne(p.canonicalString(),g.canonicalString()));for(const p of i){const g=bx(this.userId,p.key.path,a);f=f.add(p.key.path.popLast()),h.push(o.put(c)),h.push(s.put(g,cV))}return f.forEach(p=>{h.push(this.indexManager.addToCollectionParentIndex(e,p))}),e.addOnCommittedListener(()=>{this.Fn[a]=l.keys()}),L.waitFor(h).next(()=>l)})}lookupMutationBatch(e,n){return Ur(e).get(n).next(r=>r?(Y(r.userId===this.userId),Hi(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?L.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ur(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(Y(a.batchId>=r),s=Hi(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ur(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ur(e).U("userMutationsIndex",n).next(r=>r.map(i=>Hi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=jc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return eo(e).J({range:i},(o,a,l)=>{const[c,h,f]=o,p=$n(h);if(c===this.userId&&n.path.isEqual(p))return Ur(e).get(f).next(g=>{if(!g)throw H();Y(g.userId===this.userId),s.push(Hi(this.serializer,g))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ve(ne);const i=[];return n.forEach(s=>{const o=jc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=eo(e).J({range:a},(c,h,f)=>{const[p,g,I]=c,A=$n(g);p===this.userId&&s.path.isEqual(A)?r=r.add(I):f.done()});i.push(l)}),L.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=jc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ve(ne);return eo(e).J({range:o},(l,c,h)=>{const[f,p,g]=l,I=$n(p);f===this.userId&&r.isPrefixOf(I)?I.length===i&&(a=a.add(g)):h.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Ur(e).get(s).next(o=>{if(o===null)throw H();Y(o.userId===this.userId),r.push(Hi(this.serializer,o))}))}),L.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return IA(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),L.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return L.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return eo(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=$n(s[1]);i.push(l)}else a.done()}).next(()=>{Y(i.length===0)})})}containsKey(e,n){return TA(e,this.userId,n)}Nn(e){return SA(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function TA(t,e,n){const r=jc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return eo(t).J({range:s,H:!0},(a,l,c)=>{const[h,f,p]=a;h===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Ur(t){return rt(t,"mutations")}function eo(t){return rt(t,"documentMutations")}function SA(t){return rt(t,"mutationQueues")}/**
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
 */class Ts{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ts(0)}static kn(){return new Ts(-1)}}/**
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
 */class C4{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new Ts(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>X.fromTimestamp(new Me(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ws(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(Y(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ws(e).J((o,a)=>{const l=el(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>L.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ws(e).J((r,i)=>{const s=el(i);n(s)})}qn(e){return yE(e).get("targetGlobalKey").next(n=>(Y(n!==null),n))}Qn(e,n){return yE(e).put("targetGlobalKey",n)}Kn(e,n){return Ws(e).put(_A(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ws(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ws(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=el(a);gu(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Qr(e);return n.forEach(o=>{const a=Vt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),L.waitFor(i)}removeMatchingKeys(e,n,r){const i=Qr(e);return L.forEach(n,s=>{const o=Vt(s.path);return L.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Qr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Qr(e);let s=se();return i.J({range:r,H:!0},(o,a,l)=>{const c=$n(o[1]),h=new K(c);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=Vt(n.path),i=IDBKeyRange.bound([r],[Ix(r)],!1,!0);let s=0;return Qr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return Ws(e).get(n).next(r=>r?el(r):null)}}function Ws(t){return rt(t,"targets")}function yE(t){return rt(t,"targetGlobal")}function Qr(t){return rt(t,"targetDocuments")}/**
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
 */function _E([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class N4{constructor(e){this.Un=e,this.buffer=new ve(_E),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();_E(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class D4{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ni(n)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ns(n)}await this.Hn(3e5)})}}class O4{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(_n.oe);const r=new N4(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(gE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gE):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Ys()<=oe.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function V4(t,e){return new O4(t,e)}/**
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
 */class L4{constructor(e,n){this.db=e,this.garbageCollector=V4(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return gc(e,r)}removeReference(e,n,r){return gc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return gc(e,n)}nr(e,n){return function(i,s){let o=!1;return SA(i).Y(a=>TA(i,a,s).next(l=>(l&&(o=!0),L.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=n){const l=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,X.min()),Qr(e).delete(function(f){return[0,Vt(f.path)]}(o))))});i.push(l)}}).next(()=>L.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return gc(e,n)}tr(e,n){const r=Qr(e);let i,s=_n.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==_n.oe&&n(new K($n(i)),s),s=c,i=l):s=_n.oe}).next(()=>{s!==_n.oe&&n(new K($n(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function gc(t,e){return Qr(t).put(function(r,i){return{targetId:0,path:Vt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class xA{constructor(){this.changes=new Di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class M4{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return zi(e).put(r)}removeEntry(e,n,r){return zi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Mh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=$e.newInvalidDocument(n);return zi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(za(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:$e.newInvalidDocument(n)};return zi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(za(n))},(i,s)=>{r={document:this.ir(n,s),size:jh(s)}}).next(()=>r)}getEntries(e,n){let r=nn();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=nn(),i=new De(K.comparator);return this._r(e,n,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,jh(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return L.resolve();let i=new ve(EE);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(za(i.first()),za(i.last())),o=i.getIterator();let a=o.getNext();return zi(e).J({index:"documentKeyIndex",range:s},(l,c,h)=>{const f=K.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&EE(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(za(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Mh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return zi(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=nn();for(const f of c){const p=this.ir(K.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);p.isFoundDocument()&&(yu(n,p)||i.has(p.key))&&(h=h.insert(p.key,p))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=nn();const o=wE(n,r),a=wE(n,un.max());return zi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,h)=>{const f=this.ir(K.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new F4(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return vE(e).get("remoteDocumentGlobalKey").next(n=>(Y(!!n),n))}rr(e,n){return vE(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=E4(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(X.min())))return r}return $e.newInvalidDocument(e)}}function AA(t){return new M4(t)}class F4 extends xA{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new Di(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ve((s,o)=>ne(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=sE(this.cr.serializer,o);i=i.add(s.path.popLast());const c=jh(l);r+=c-a.size,n.push(this.cr.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=sE(this.cr.serializer,o.convertToNoDocument(X.min()));n.push(this.cr.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),L.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function vE(t){return rt(t,"remoteDocumentGlobal")}function zi(t){return rt(t,"remoteDocumentsV14")}function za(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function wE(t,e){const n=e.documentKey.path.toArray();return[t,Mh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function EE(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ne(n[s],r[s]),i)return i;return i=ne(n.length,r.length),i||(i=ne(n[n.length-2],r[r.length-2]),i||ne(n[n.length-1],r[r.length-1]))}/**
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
 */class j4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class bA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&vl(r.mutation,i,qt.empty(),Me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=qn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ja();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=nn();const o=_l(),a=function(){return _l()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Nr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),vl(h.mutation,c,h.mutation.getFieldMask(),Me.now())):o.set(c.key,qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new j4(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=_l();let i=new De((o,a)=>o-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||qt.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||se()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=Hx();h.forEach(p=>{if(!s.has(p)){const g=eA(n.get(p),r.get(p));g!==null&&f.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$x(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(qn());let a=-1,l=s;return o.next(c=>L.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?L.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,se())).next(h=>({batchId:a,changes:Wx(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Ja();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ja();return this.indexManager.getCollectionParents(e,s).next(a=>L.forEach(a,l=>{const c=function(f,p){return new oa(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,$e.newInvalidDocument(h)))});let a=Ja();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&vl(h.mutation,c,qt.empty(),Me.now()),yu(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class U4{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Lt(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:vA(i.bundledQuery),readTime:Lt(i.readTime)}}(n)),L.resolve()}}/**
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
 */class z4{constructor(){this.overlays=new De(K.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qn();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=qn(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new De((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=qn(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=qn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return L.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ky(n,r));let s=this.Ir.get(n);s===void 0&&(s=se(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class B4{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class Yy{constructor(){this.Tr=new ve(it.Er),this.dr=new ve(it.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new it(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new me([])),r=new it(n,e),i=new it(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new me([])),r=new it(n,e),i=new it(n,e+1);let s=se();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ne(e.wr,n.wr)}static Ar(e,n){return ne(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class $4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ve(it.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $y(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ve(ne);return n.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new it(new K(s),0);let a=new ve(ne);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),L.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Y(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new it(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new it(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class q4{constructor(e){this.Mr=e,this.docs=function(){return new De(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(e,n){let r=nn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$e.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=nn();const o=n.path,a=new K(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ly(Tx(h),r)<=0||(i.has(h.key)||yu(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){H()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new K4(this)}getSize(e){return L.resolve(this.size)}}class K4 extends xA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class G4{constructor(e){this.persistence=e,this.Nr=new Di(n=>ws(n),gu),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Yy,this.targetCount=0,this.kr=Ts.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
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
 */class RA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new _n(0),this.Kr=!1,this.Kr=!0,this.$r=new B4,this.referenceDelegate=e(this),this.Ur=new G4(this),this.indexManager=new P4,this.remoteDocumentCache=function(i){return new q4(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new yA(n),this.Gr=new U4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new z4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new $4(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new W4(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class W4 extends xx{constructor(e){super(),this.currentSequenceNumber=e}}class Vd{constructor(e){this.persistence=e,this.Jr=new Yy,this.Yr=null}static Zr(e){return new Vd(e)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class H4{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Sd("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Vw,{unique:!0}),l.createObjectStore("documentMutations")}(e),IE(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=L.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),IE(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:X.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Vw,{unique:!0});const f=c.store("mutations"),p=h.map(g=>f.put(g));return L.waitFor(p)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:IV});c.createIndex("collectionPathOverlayIndex",TV,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",SV,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:hV});c.createIndex("documentKeyIndex",dV),c.createIndex("collectionGroupIndex",fV)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:_V}).createIndex("sequenceNumberIndex",vV,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:wV}).createIndex("documentKeyIndex",EV,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=jh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>L.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>L.forEach(a,l=>{Y(l.userId===s.userId);const c=Hi(this.serializer,l);return IA(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new me(o),c=function(f){return[0,Vt(f)]}(l);s.push(n.get(c).next(h=>h?L.resolve():(f=>n.put({targetId:0,path:Vt(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>L.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:yV});const r=n.store("collectionParents"),i=new Qy,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Vt(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new me(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const h=$n(a);return s(h.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=el(i),o=_A(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(f){return f.document?new K(me.fromString(f.document.name).popFirst(5)):f.noDocument?K.fromSegments(f.noDocument.path):f.unknownDocument?K.fromSegments(f.unknownDocument.path):H()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>L.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=AA(this.serializer),s=new RA(Vd.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let h=(c=a.get(l.userId))!==null&&c!==void 0?c:se();Hi(this.serializer,l).keys().forEach(f=>h=h.add(f)),a.set(l.userId,h)}),L.forEach(a,(l,c)=>{const h=new Ct(c),f=Dd.lt(this.serializer,h),p=s.getIndexManager(h),g=Od.lt(h,this.serializer,p,s.referenceDelegate);return new bA(i,g,f,p).recalculateAndSaveOverlaysForDocumentKeys(new Om(n,_n.oe),l).next()})})}}function IE(t){t.createObjectStore("targetDocuments",{keyPath:mV}).createIndex("documentTargetsIndex",gV,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",pV,{unique:!0}),t.createObjectStore("targetGlobal")}const lp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Xy{constructor(e,n,r,i,s,o,a,l,c,h,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=h,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=p=>Promise.resolve(),!Xy.D())throw new q(j.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new L4(this,i),this.Ai=n+"main",this.serializer=new yA(l),this.Ri=new mi(this.Ai,this.hi,new H4(this.serializer)),this.$r=new T4,this.Ur=new C4(this.referenceDelegate,this.serializer),this.remoteDocumentCache=AA(this.serializer),this.Gr=new I4,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&Nt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new q(j.FAILED_PRECONDITION,lp);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new _n(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>yc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(Ni(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Ba(e).get("owner").next(n=>L.resolve(this.vi(n)))}Ci(e){return yc(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=rt(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return L.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?L.resolve(!0):Ba(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new q(j.FAILED_PRECONDITION,lp);return!1}}return!(!this.networkEnabled||!this.inForeground)||yc(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Om(e,_n.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>yc(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return Od.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new k4(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Dd.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===17?bV:l===16?AV:l===15?Fy:l===14?kx:l===13?Px:l===12?xV:l===11?Rx:void H()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new Om(a,this.Qr?this.Qr.next():_n.oe),n==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Nt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new q(j.FAILED_PRECONDITION,Sx);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return Ba(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new q(j.FAILED_PRECONDITION,lp)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ba(e).put("owner",n)}static D(){return mi.D()}bi(e){const n=Ba(e);return n.get("owner").next(r=>this.vi(r)?(U("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):L.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Nt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;ax()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Nt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Nt("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ba(t){return rt(t,"owner")}function yc(t){return rt(t,"clientMetadata")}function Q4(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Jy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jy(e,n.fromCache,r,i)}}/**
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
 */class Y4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class PA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ax()?8:Ax(nt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Y4;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ys()<=oe.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Xs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Ys()<=oe.DEBUG&&U("QueryEngine","Query:",Xs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ys()<=oe.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Xs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wn(n))):L.resolve())}Yi(e,n){if(Hw(n))return L.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zm(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,zm(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return Hw(n)||i.isEqual(X.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(Ys()<=oe.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xs(n)),this.rs(e,o,n,rV(i,-1)).next(a=>a))})}ts(e,n){let r=new ve(Kx(e));return n.forEach((i,s)=>{yu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ys()<=oe.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Xs(n)),this.Ji.getDocumentsMatchingQuery(e,n,un.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class X4{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new De(ne),this._s=new Di(s=>ws(s),gu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function kA(t,e,n,r){return new X4(t,e,n,r)}async function CA(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=se();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function J4(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,p=f.keys();let g=L.resolve();return p.forEach(I=>{g=g.next(()=>h.getEntry(l,I)).next(A=>{const P=c.docVersions.get(I);Y(P!==null),A.version.compareTo(P)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),h.addEntry(A)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=se();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function NA(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Z4(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Xe.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(f,g),function(A,P,T){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(p,g,h)&&a.push(n.Ur.updateTargetData(s,g))});let l=nn(),c=se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(eL(s,o,e.documentUpdates).next(h=>{l=h.Ps,c=h.Is})),!r.isEqual(X.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return L.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function eL(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=nn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function tL(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nL(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Qm(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ni(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function TE(t,e,n){const r=te(t);let i=X.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=te(l),p=f._s.get(h);return p!==void 0?L.resolve(f.os.get(p)):f.Ur.getTargetData(c,h)}(r,o,wn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:se())).next(a=>(rL(r,BV(e),a),{documents:a,Ts:s})))}function rL(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class SE{constructor(){this.activeTargetIds=HV()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DA{constructor(){this.so=new SE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new SE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class iL{_o(e){}shutdown(){}}/**
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
 */class xE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _c=null;function up(){return _c===null?_c=function(){return 268435456+Math.round(2147483648*Math.random())}():_c++,"0x"+_c.toString(16)}/**
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
 */const sL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class oL{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Et="WebChannelConnection";class aL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=up(),l=this.xo(n,r.toUriEncodedString());U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(h=>(U("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Fo("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+sa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=sL[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=up();return new Promise((o,a)=>{const l=new gx;l.setWithCredentials(!0),l.listenOnce(yx.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Mc.NO_ERROR:const h=l.getResponseJson();U(Et,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Mc.TIMEOUT:U(Et,`RPC '${e}' ${s} timed out`),a(new q(j.DEADLINE_EXCEEDED,"Request time out"));break;case Mc.HTTP_ERROR:const f=l.getStatus();if(U(Et,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const I=function(P){const T=P.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(T)>=0?T:j.UNKNOWN}(g.status);a(new q(I,g.message))}else a(new q(j.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(j.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{U(Et,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);U(Et,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=up(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=wx(),a=vx(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");U(Et,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let p=!1,g=!1;const I=new oL({Io:P=>{g?U(Et,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(p||(U(Et,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),U(Et,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},To:()=>f.close()}),A=(P,T,v)=>{P.listen(T,E=>{try{v(E)}catch(k){setTimeout(()=>{throw k},0)}})};return A(f,Xa.EventType.OPEN,()=>{g||(U(Et,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),A(f,Xa.EventType.CLOSE,()=>{g||(g=!0,U(Et,`RPC '${e}' stream ${i} transport closed`),I.So())}),A(f,Xa.EventType.ERROR,P=>{g||(g=!0,Fo(Et,`RPC '${e}' stream ${i} transport errored:`,P),I.So(new q(j.UNAVAILABLE,"The operation could not be completed")))}),A(f,Xa.EventType.MESSAGE,P=>{var T;if(!g){const v=P.data[0];Y(!!v);const E=v,k=E.error||((T=E[0])===null||T===void 0?void 0:T.error);if(k){U(Et,`RPC '${e}' stream ${i} received error:`,k);const M=k.status;let O=function(S){const R=He[S];if(R!==void 0)return rA(R)}(M),w=k.message;O===void 0&&(O=j.INTERNAL,w="Unknown error status: "+M+" with message "+k.message),g=!0,I.So(new q(O,w)),f.close()}else U(Et,`RPC '${e}' stream ${i} received:`,v),I.bo(v)}}),A(a,_x.STAT_EVENT,P=>{P.stat===Nm.PROXY?U(Et,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Nm.NOPROXY&&U(Et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}/**
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
 */function lL(){return typeof window<"u"?window:null}function qc(){return typeof document<"u"?document:null}/**
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
 */function Ld(t){return new h4(t,!0)}/**
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
 */class OA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class VA{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new OA(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Nt(n.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uL extends VA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=p4(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Lt(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=qm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Dh(l)?{documents:hA(s,l)}:{query:dA(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=oA(s,o.resumeToken);const c=Bm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Ko(s,o.snapshotVersion.toTimestamp());const c=Bm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=g4(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=qm(this.serializer),n.removeTarget=e,this.a_(n)}}class cL extends VA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Y(!!e.streamToken),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=m4(e.writeResults,e.commitTime),r=Lt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=qm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Lh(this.serializer,r))};this.a_(n)}}/**
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
 */class hL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,$m(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,$m(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class dL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nt(n),this.D_=!1):U("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class fL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Os(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=te(l);c.L_.add(4),await vu(c),c.q_.set("Unknown"),c.L_.delete(4),await Md(c)}(this))})}),this.q_=new dL(r,i)}}async function Md(t){if(Os(t))for(const e of t.B_)await e(!0)}async function vu(t){for(const e of t.B_)await e(!1)}function LA(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),n_(n)?t_(n):la(n).r_()&&e_(n,e))}function Zy(t,e){const n=te(t),r=la(n);n.N_.delete(e),r.r_()&&MA(n,e),n.N_.size===0&&(r.r_()?r.o_():Os(n)&&n.q_.set("Unknown"))}function e_(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}la(t).A_(e)}function MA(t,e){t.Q_.xe(e),la(t).R_(e)}function t_(t){t.Q_=new a4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),la(t).start(),t.q_.v_()}function n_(t){return Os(t)&&!la(t).n_()&&t.N_.size>0}function Os(t){return te(t).L_.size===0}function FA(t){t.Q_=void 0}async function pL(t){t.q_.set("Online")}async function mL(t){t.N_.forEach((e,n)=>{e_(t,e)})}async function gL(t,e){FA(t),n_(t)?(t.q_.M_(e),t_(t)):t.q_.set("Unknown")}async function yL(t,e,n){if(t.q_.set("Online"),e instanceof sA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uh(t,r)}else if(e instanceof $c?t.Q_.Ke(e):e instanceof iA?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await NA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.N_.get(l);if(!h)return;s.N_.set(l,h.withResumeToken(Xe.EMPTY_BYTE_STRING,h.snapshotVersion)),MA(s,l);const f=new fr(h.target,l,c,h.sequenceNumber);e_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Uh(t,r)}}async function Uh(t,e,n){if(!Ni(e))throw e;t.L_.add(1),await vu(t),t.q_.set("Offline"),n||(n=()=>NA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Md(t)})}function jA(t,e){return e().catch(n=>Uh(t,n,e))}async function wu(t){const e=te(t),n=Ti(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;_L(e);)try{const i=await tL(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,vL(e,i)}catch(i){await Uh(e,i)}UA(e)&&zA(e)}function _L(t){return Os(t)&&t.O_.length<10}function vL(t,e){t.O_.push(e);const n=Ti(t);n.r_()&&n.V_&&n.m_(e.mutations)}function UA(t){return Os(t)&&!Ti(t).n_()&&t.O_.length>0}function zA(t){Ti(t).start()}async function wL(t){Ti(t).p_()}async function EL(t){const e=Ti(t);for(const n of t.O_)e.m_(n.mutations)}async function IL(t,e,n){const r=t.O_.shift(),i=qy.from(r,e,n);await jA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wu(t)}async function TL(t,e){e&&Ti(t).V_&&await async function(r,i){if(function(o){return i4(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();Ti(r).s_(),await jA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await wu(r)}}(t,e),UA(t)&&zA(t)}async function AE(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Os(n);n.L_.add(3),await vu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Md(n)}async function SL(t,e){const n=te(t);e?(n.L_.delete(2),await Md(n)):e||(n.L_.add(2),await vu(n),n.q_.set("Unknown"))}function la(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new uL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:pL.bind(null,t),Ro:mL.bind(null,t),mo:gL.bind(null,t),d_:yL.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),n_(t)?t_(t):t.q_.set("Unknown")):(await t.K_.stop(),FA(t))})),t.K_}function Ti(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new cL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:wL.bind(null,t),mo:TL.bind(null,t),f_:EL.bind(null,t),g_:IL.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await wu(t)):(await t.U_.stop(),t.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class r_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new r_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function i_(t,e){if(Nt("AsyncQueue",`${e}: ${t}`),Ni(t))return new q(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ao{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ja(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new Ao(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ao;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class bE{constructor(){this.W_=new De(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):H():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Go{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Go(e,n,Ao.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class xL{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class AL{constructor(){this.queries=RE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=RE(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new q(j.ABORTED,"Firestore shutting down"))}}function RE(){return new Di(t=>qx(t),Rd)}async function BA(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new xL,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=i_(o,`Initialization of query '${Xs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&s_(n)}async function $A(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bL(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&s_(n)}function RL(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function s_(t){t.Y_.forEach(e=>{e.next()})}var Ym,PE;(PE=Ym||(Ym={})).ea="default",PE.Cache="cache";class qA{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Go(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ym.Cache}}/**
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
 */class KA{constructor(e){this.key=e}}class GA{constructor(e){this.key=e}}class PL{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=Kx(e),this.Ra=new Ao(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new bE,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),g=yu(this.query,f)?f:null,I=!!p&&this.mutatedKeys.has(p.key),A=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;p&&g?p.data.isEqual(g.data)?I!==A&&(r.track({type:3,doc:g}),P=!0):this.ga(p,g)||(r.track({type:2,doc:g}),P=!0,(l&&this.Aa(g,l)>0||c&&this.Aa(g,c)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),P=!0):p&&!g&&(r.track({type:1,doc:p}),P=!0,(l||c)&&(a=!0)),P&&(g?(o=o.add(g),s=A?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(g,I){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return A(g)-A(I)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new Go(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new bE,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new GA(r))}),this.da.forEach(r=>{e.has(r)||n.push(new KA(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Go.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class kL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CL{constructor(e){this.key=e,this.va=!1}}class NL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Di(a=>qx(a),Rd),this.Ma=new Map,this.xa=new Set,this.Oa=new De(K.comparator),this.Na=new Map,this.La=new Yy,this.Ba={},this.ka=new Map,this.qa=Ts.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function DL(t,e,n=!0){const r=JA(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await WA(r,e,n,!0),i}async function OL(t,e){const n=JA(t);await WA(n,e,!0,!1)}async function WA(t,e,n,r){const i=await nL(t.localStore,wn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await VL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&LA(t.remoteStore,i),a}async function VL(t,e,n,r,i){t.Ka=(f,p,g)=>async function(A,P,T,v){let E=P.view.ma(T);E.ns&&(E=await TE(A.localStore,P.query,!1).then(({documents:w})=>P.view.ma(w,E)));const k=v&&v.targetChanges.get(P.targetId),M=v&&v.targetMismatches.get(P.targetId)!=null,O=P.view.applyChanges(E,A.isPrimaryClient,k,M);return CE(A,P.targetId,O.wa),O.snapshot}(t,f,p,g);const s=await TE(t.localStore,e,!0),o=new PL(e,s.Ts),a=o.ma(s.documents),l=_u.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);CE(t,n,c.wa);const h=new kL(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function LL(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Rd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Zy(r.remoteStore,i.targetId),Xm(r,i.targetId)}).catch(Ns)):(Xm(r,i.targetId),await Qm(r.localStore,i.targetId,!0))}async function ML(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zy(n.remoteStore,r.targetId))}async function FL(t,e,n){const r=ZA(t);try{const i=await function(o,a){const l=te(o),c=Me.now(),h=a.reduce((g,I)=>g.add(I.key),se());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let I=nn(),A=se();return l.cs.getEntries(g,h).next(P=>{I=P,I.forEach((T,v)=>{v.isValidDocument()||(A=A.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,I)).next(P=>{f=P;const T=[];for(const v of a){const E=n4(v,f.get(v.key).overlayedDocument);E!=null&&T.push(new Nr(v.key,E,Vx(E.value.mapValue),Dt.exists(!0)))}return l.mutationQueue.addMutationBatch(g,c,T,a)}).next(P=>{p=P;const T=P.applyToLocalDocumentSet(f,A);return l.documentOverlayCache.saveOverlays(g,P.batchId,T)})}).then(()=>({batchId:p.batchId,changes:Wx(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new De(ne)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Eu(r,i.changes),await wu(r.remoteStore)}catch(i){const s=i_(i,"Failed to persist write");n.reject(s)}}async function HA(t,e){const n=te(t);try{const r=await Z4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Y(o.va):i.removedDocuments.size>0&&(Y(o.va),o.va=!1))}),await Eu(n,r,e)}catch(r){await Ns(r)}}function kE(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&s_(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jL(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new De(K.comparator);o=o.insert(s,$e.newNoDocument(s,X.min()));const a=se().add(s),l=new Nd(X.min(),new Map,new De(ne),o,a);await HA(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),o_(r)}else await Qm(r.localStore,e,!1).then(()=>Xm(r,e,n)).catch(Ns)}async function UL(t,e){const n=te(t),r=e.batch.batchId;try{const i=await J4(n.localStore,e);YA(n,r,null),QA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Eu(n,i)}catch(i){await Ns(i)}}async function zL(t,e,n){const r=te(t);try{const i=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Y(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);YA(r,e,n),QA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Eu(r,i)}catch(i){await Ns(i)}}function QA(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function YA(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Xm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||XA(t,r)})}function XA(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Zy(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),o_(t))}function CE(t,e,n){for(const r of n)r instanceof KA?(t.La.addReference(r.key,e),BL(t,r)):r instanceof GA?(U("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||XA(t,r.key)):H()}function BL(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(U("SyncEngine","New document in limbo: "+n),t.xa.add(r),o_(t))}function o_(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(me.fromString(e)),r=t.qa.next();t.Na.set(r,new CL(n)),t.Oa=t.Oa.insert(n,r),LA(t.remoteStore,new fr(wn(bd(n.path)),r,"TargetPurposeLimboResolution",_n.oe))}}async function Eu(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Jy.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const h=te(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>L.forEach(c,p=>L.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>L.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!Ni(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const g=h.os.get(p),I=g.snapshotVersion,A=g.withLastLimboFreeSnapshotVersion(I);h.os=h.os.insert(p,A)}}}(r.localStore,s))}async function $L(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await CA(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new q(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Eu(n,r.hs)}}function qL(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let i=se();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function JA(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=HA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jL.bind(null,e),e.Ca.d_=bL.bind(null,e.eventManager),e.Ca.$a=RL.bind(null,e.eventManager),e}function ZA(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zL.bind(null,e),e}class tu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ld(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return kA(this.persistence,new PA,e.initialUser,this.serializer)}Ga(e){return new RA(Vd.Zr,this.serializer)}Wa(e){return new DA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tu.provider={build:()=>new tu};class KL extends tu{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await ZA(this.Ja.syncEngine),await wu(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return kA(this.persistence,new PA,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new D4(r,e.asyncQueue,n)}Ha(e,n){const r=new aV(n,this.persistence);return new oV(e.asyncQueue,r)}Ga(e){const n=Q4(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ut.withCacheSize(this.cacheSizeBytes):Ut.DEFAULT;return new Xy(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,lL(),qc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new DA}}class zh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$L.bind(null,this.syncEngine),await SL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new AL}()}createDatastore(e){const n=Ld(e.databaseInfo.databaseId),r=function(s){return new aL(s)}(e.databaseInfo);return function(s,o,a,l){return new hL(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new fL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>kE(this.syncEngine,n,0),function(){return xE.D()?new xE:new iL}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new NL(i,s,o,a,l,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await vu(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}zh.provider={build:()=>new zh};/**
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
 */class eb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Nt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class GL{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ct.UNAUTHENTICATED,this.clientId=Ex.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=i_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cp(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await CA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function NE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WL(t);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>AE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>AE(e.remoteStore,i)),t._onlineComponents=e}async function WL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await cp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Fo("Error using user provided cache. Falling back to memory cache: "+n),await cp(t,new tu)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await cp(t,new tu);return t._offlineComponents}async function tb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await NE(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await NE(t,new zh))),t._onlineComponents}function HL(t){return tb(t).then(e=>e.syncEngine)}async function Jm(t){const e=await tb(t),n=e.eventManager;return n.onListen=DL.bind(null,e.syncEngine),n.onUnlisten=LL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=OL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ML.bind(null,e.syncEngine),n}function QL(t,e,n={}){const r=new vr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new eb({next:p=>{h.Za(),o.enqueueAndForget(()=>$A(s,f)),p.fromCache&&l.source==="server"?c.reject(new q(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new qA(a,h,{includeMetadataChanges:!0,_a:!0});return BA(s,f)}(await Jm(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function nb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const DE=new Map;/**
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
 */function rb(t,e,n){if(!n)throw new q(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YL(t,e,n,r){if(e===!0&&r===!0)throw new q(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function OE(t){if(!K.isDocumentKey(t))throw new q(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function VE(t){if(K.isDocumentKey(t))throw new q(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function Xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fd(t);throw new q(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class LE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nb((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class a_{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new LE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new LE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new QO;switch(r.type){case"firstParty":return new JO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=DE.get(n);r&&(U("ComponentProvider","Removing Datastore"),DE.delete(n),r.terminate())}(this),Promise.resolve()}}/**
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
 */class Oi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Oi(this.firestore,e,this._query)}}class Qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qt(this.firestore,e,this._key)}}class gi extends Oi{constructor(e,n,r){super(e,n,bd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qt(this.firestore,null,new K(e))}withConverter(e){return new gi(this.firestore,e,this._path)}}function Si(t,e,...n){if(t=je(t),rb("collection","path",e),t instanceof a_){const r=me.fromString(e,...n);return VE(r),new gi(t,null,r)}{if(!(t instanceof Qt||t instanceof gi))throw new q(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return VE(r),new gi(t.firestore,null,r)}}function Kc(t,e,...n){if(t=je(t),arguments.length===1&&(e=Ex.newId()),rb("doc","path",e),t instanceof a_){const r=me.fromString(e,...n);return OE(r),new Qt(t,null,new K(r))}{if(!(t instanceof Qt||t instanceof gi))throw new q(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return OE(r),new Qt(t.firestore,t instanceof gi?t.converter:null,new K(r))}}/**
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
 */class ME{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new OA(this,"async_queue_retry"),this.Vu=()=>{const r=qc();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new vr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ni(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Nt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=r_.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function FE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class xi extends a_{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ME,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ME(e),this._firestoreClient=void 0,await e}}}function XL(t,e,n){n||(n="(default)");const r=Td(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if($l(s,e))return i;throw new q(j.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new q(j.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function l_(t){if(t._terminated)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ib(t),t._firestoreClient}function ib(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new PV(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,nb(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new GL(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}function JL(t,e){Fo("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return ZL(t,zh.provider,{build:r=>new KL(r,n.cacheSizeBytes,void 0)}),Promise.resolve()}function ZL(t,e,n){if((t=Xn(t,xi))._firestoreClient||t._terminated)throw new q(j.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new q(j.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},ib(t)}/**
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
 */class Wo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wo(Xe.fromBase64String(e))}catch(n){throw new q(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wo(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class jd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class u_{constructor(e){this._methodName=e}}/**
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
 */class c_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */class h_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const eM=/^__.*__$/;class tM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new aa(e,this.data,n,this.fieldTransforms)}}class sb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ob(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class d_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new d_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Bh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ob(this.Cu)&&eM.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class nM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ld(e)}Qu(e,n,r,i=!1){return new d_({Cu:e,methodName:n,qu:r,path:Ve.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function f_(t){const e=t._freezeSettings(),n=Ld(t._databaseId);return new nM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rM(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);p_("Data must be an object, but it was:",o,r);const a=ab(r,o);let l,c;if(s.merge)l=new qt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=Zm(e,f,n);if(!o.contains(p))throw new q(j.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);ub(h,p)||h.push(p)}l=new qt(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new tM(new Tt(a),l,c)}class Ud extends u_{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ud}}function iM(t,e,n,r){const i=t.Qu(1,e,n);p_("Data must be an object, but it was:",i,r);const s=[],o=Tt.empty();Ds(r,(l,c)=>{const h=m_(e,l,n);c=je(c);const f=i.Nu(h);if(c instanceof Ud)s.push(h);else{const p=Iu(c,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new qt(s);return new sb(o,a,i.fieldTransforms)}function sM(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Zm(e,r,n)],l=[i];if(s.length%2!=0)throw new q(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Zm(e,s[p])),l.push(s[p+1]);const c=[],h=Tt.empty();for(let p=a.length-1;p>=0;--p)if(!ub(c,a[p])){const g=a[p];let I=l[p];I=je(I);const A=o.Nu(g);if(I instanceof Ud)c.push(g);else{const P=Iu(I,A);P!=null&&(c.push(g),h.set(g,P))}}const f=new qt(c);return new sb(h,f,o.fieldTransforms)}function oM(t,e,n,r=!1){return Iu(n,t.Qu(r?4:3,e))}function Iu(t,e){if(lb(t=je(t)))return p_("Unsupported field value:",e,t),ab(t,e);if(t instanceof u_)return function(r,i){if(!ob(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Iu(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return QV(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Me.fromDate(r);return{timestampValue:Ko(i.serializer,s)}}if(r instanceof Me){const s=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ko(i.serializer,s)}}if(r instanceof c_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wo)return{bytesValue:oA(i.serializer,r._byteString)};if(r instanceof Qt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Wy(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof h_)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return By(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Fd(r)}`)}(t,e)}function ab(t,e){const n={};return Cx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ds(t,(r,i)=>{const s=Iu(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function lb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof c_||t instanceof Wo||t instanceof Qt||t instanceof u_||t instanceof h_)}function p_(t,e,n){if(!lb(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Fd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Zm(t,e,n){if((e=je(e))instanceof jd)return e._internalPath;if(typeof e=="string")return m_(t,e);throw Bh("Field path arguments must be of type string or ",t,!1,void 0,n)}const aM=new RegExp("[~\\*/\\[\\]]");function m_(t,e,n){if(e.search(aM)>=0)throw Bh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jd(...e.split("."))._internalPath}catch{throw Bh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new q(j.INVALID_ARGUMENT,a+t+l)}function ub(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class cb{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(g_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lM extends cb{data(){return super.data()}}function g_(t,e){return typeof e=="string"?m_(t,e):e instanceof jd?e._internalPath:e._delegate._internalPath}/**
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
 */function hb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class y_{}class db extends y_{}function uM(t,e,...n){let r=[];e instanceof y_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof v_).length,a=s.filter(l=>l instanceof __).length;if(o>1||o>0&&a>0)throw new q(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class __ extends db{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new __(e,n,r)}_apply(e){const n=this._parse(e);return fb(e._query,n),new Oi(e.firestore,e.converter,Um(e._query,n))}_parse(e){const n=f_(e.firestore);return function(s,o,a,l,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new q(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){UE(f,h);const g=[];for(const I of f)g.push(jE(l,s,I));p={arrayValue:{values:g}}}else p=jE(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||UE(f,h),p=oM(a,o,f,h==="in"||h==="not-in");return ae.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class v_ extends y_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new v_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ye.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)fb(o,l),o=Um(o,l)}(e._query,n),new Oi(e.firestore,e.converter,Um(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class w_ extends db{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new w_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new q(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Jl(s,o)}(e._query,this._field,this._direction);return new Oi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new oa(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function cM(t,e="asc"){const n=e,r=g_("orderBy",t);return w_._create(r,n)}function jE(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new q(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$x(e)&&n.indexOf("/")!==-1)throw new q(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!K.isDocumentKey(r))throw new q(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yl(t,new K(r))}if(n instanceof Qt)return Yl(t,n._key);throw new q(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fd(n)}.`)}function UE(t,e){if(!Array.isArray(t)||t.length===0)throw new q(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fb(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class hM{convertValue(e,n="none"){switch(vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ds(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Pe(o.doubleValue));return new h_(s)}convertGeoPoint(e){return new c_(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Uy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hl(e));default:return null}}convertTimestamp(e){const n=Ar(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);Y(gA(r));const i=new _s(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Nt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function dM(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class tl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pb extends cb{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(g_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Gc extends pb{data(e={}){return super.data(e)}}class mb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new tl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Gc(this._firestore,this._userDataWriter,r.key,r,new tl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Gc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new tl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Gc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new tl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:fM(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class E_ extends hM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qt(this.firestore,null,n)}}function gb(t){t=Xn(t,Oi);const e=Xn(t.firestore,xi),n=l_(e),r=new E_(e);return hb(t._query),QL(n,t._query).then(i=>new mb(e,r,t,i))}function zE(t,e,n,...r){t=Xn(t,Qt);const i=Xn(t.firestore,xi),s=f_(i);let o;return o=typeof(e=je(e))=="string"||e instanceof jd?sM(s,"updateDoc",t._key,e,n,r):iM(s,"updateDoc",t._key,e),I_(i,[o.toMutation(t._key,Dt.exists(!0))])}function pM(t){return I_(Xn(t.firestore,xi),[new Cd(t._key,Dt.none())])}function zd(t,e){const n=Xn(t.firestore,xi),r=Kc(t),i=dM(t.converter,e);return I_(n,[rM(f_(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then(()=>r)}function mM(t,...e){var n,r,i;t=je(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||FE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(FE(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof Qt)c=Xn(t.firestore,xi),h=bd(t._key.path),l={next:f=>{e[o]&&e[o](gM(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Xn(t,Oi);c=Xn(f.firestore,xi),h=f._query;const p=new E_(c);l={next:g=>{e[o]&&e[o](new mb(c,p,f,g))},error:e[o+1],complete:e[o+2]},hb(t._query)}return function(p,g,I,A){const P=new eb(A),T=new qA(g,P,I);return p.asyncQueue.enqueueAndForget(async()=>BA(await Jm(p),T)),()=>{P.Za(),p.asyncQueue.enqueueAndForget(async()=>$A(await Jm(p),T))}}(l_(c),h,a,l)}function I_(t,e){return function(r,i){const s=new vr;return r.asyncQueue.enqueueAndForget(async()=>FL(await HL(r),i,s)),s.promise}(l_(t),e)}function gM(t,e,n){const r=n.docs.get(e._key),i=new E_(t);return new pb(t,i,e._key,r,new tl(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){sa=i})(Cs),gs(new wi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new xi(new YO(r.getProvider("auth-internal")),new eV(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _s(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Yn(Nw,"4.7.3",e),Yn(Nw,"4.7.3","esm2017")})();var Kt=function(){return Kt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Kt.apply(this,arguments)};function T_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nu(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function yb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yM=yb,_b=new pu("auth","Firebase",yb());/**
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
 */const $h=new Dy("@firebase/auth");function _M(t,...e){$h.logLevel<=oe.WARN&&$h.warn(`Auth (${Cs}): ${t}`,...e)}function Wc(t,...e){$h.logLevel<=oe.ERROR&&$h.error(`Auth (${Cs}): ${t}`,...e)}/**
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
 */function Ln(t,...e){throw S_(t,...e)}function Jn(t,...e){return S_(t,...e)}function vb(t,e,n){const r=Object.assign(Object.assign({},yM()),{[e]:n});return new pu("auth","Firebase",r).create(e,{appName:t.name})}function yi(t){return vb(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function S_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _b.create(t,...e)}function ee(t,e,...n){if(!t)throw S_(e,...n)}function pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wc(e),new Error(e)}function br(t,e){t||pr(e)}/**
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
 */function eg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vM(){return BE()==="http:"||BE()==="https:"}function BE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function wM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vM()||RD()||"connection"in navigator)?navigator.onLine:!0}function EM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Tu{constructor(e,n){this.shortDelay=e,this.longDelay=n,br(n>e,"Short delay should be less than long delay!"),this.isMobile=xD()||PD()}get(){return wM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function x_(t,e){br(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const IM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const TM=new Tu(3e4,6e4);function Vs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vi(t,e,n,r,i={}){return Eb(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=mu(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return bD()||(c.referrerPolicy="no-referrer"),wb.fetch()(Ib(t,t.config.apiHost,n,a),c)})}async function Eb(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},IM),e);try{const i=new xM(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw vc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw vb(t,h,c);Ln(t,h)}}catch(i){if(i instanceof nr)throw i;Ln(t,"network-request-failed",{message:String(i)})}}async function Bd(t,e,n,r,i={}){const s=await Vi(t,e,n,r,i);return"mfaPendingCredential"in s&&Ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ib(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?x_(t.config,i):`${t.config.apiScheme}://${i}`}function SM(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jn(this.auth,"network-request-failed")),TM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Jn(t,e,r);return i.customData._tokenResponse=n,i}function $E(t){return t!==void 0&&t.enterprise!==void 0}class AM{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SM(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function bM(t,e){return Vi(t,"GET","/v2/recaptchaConfig",Vs(t,e))}/**
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
 */async function RM(t,e){return Vi(t,"POST","/v1/accounts:delete",e)}async function Tb(t,e){return Vi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PM(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=A_(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wl(hp(i.auth_time)),issuedAtTime:wl(hp(i.iat)),expirationTime:wl(hp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hp(t){return Number(t)*1e3}function A_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wc("JWT malformed, contained fewer than 3 sections"),null;try{const i=rx(n);return i?JSON.parse(i):(Wc("Failed to decode base64 JWT payload"),null)}catch(i){return Wc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qE(t){const e=A_(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ru(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nr&&kM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class CM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wl(this.lastLoginAt),this.creationTime=wl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qh(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ru(t,Tb(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Sb(s.providerUserInfo):[],a=DM(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tg(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function NM(t){const e=je(t);await qh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Sb(t){return t.map(e=>{var{providerId:n}=e,r=T_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function OM(t,e){const n=await Eb(t,{},async()=>{const r=mu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ib(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VM(t,e){return Vi(t,"POST","/v2/accounts:revokeToken",Vs(t,e))}/**
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
 */class bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=qE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await OM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bo;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bo,this.toJSON())}_performRefresh(){return pr("not implemented")}}/**
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
 */function zr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=T_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ru(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PM(this,e)}reload(){return NM(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dr(this.auth.app))return Promise.reject(yi(this.auth));const e=await this.getIdToken();return await ru(this,RM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:E,emailVerified:k,isAnonymous:M,providerData:O,stsTokenManager:w}=n;ee(E&&w,e,"internal-error");const y=bo.fromJSON(this.name,w);ee(typeof E=="string",e,"internal-error"),zr(f,e.name),zr(p,e.name),ee(typeof k=="boolean",e,"internal-error"),ee(typeof M=="boolean",e,"internal-error"),zr(g,e.name),zr(I,e.name),zr(A,e.name),zr(P,e.name),zr(T,e.name),zr(v,e.name);const S=new mr({uid:E,auth:e,email:p,emailVerified:k,displayName:f,isAnonymous:M,photoURL:I,phoneNumber:g,tenantId:A,stsTokenManager:y,createdAt:T,lastLoginAt:v});return O&&Array.isArray(O)&&(S.providerData=O.map(R=>Object.assign({},R))),P&&(S._redirectEventId=P),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new bo;i.updateFromServerResponse(n);const s=new mr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qh(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Sb(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new bo;a.updateFromIdToken(r);const l=new mr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new tg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const KE=new Map;function gr(t){br(t instanceof Function,"Expected a class definition");let e=KE.get(t);return e?(br(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,KE.set(t,e),e)}/**
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
 */class xb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xb.type="NONE";const GE=xb;/**
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
 */function Hc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ro{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ro(gr(GE),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||gr(GE);const o=Hc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=mr._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ro(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ro(s,e,r))}}/**
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
 */function WE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ab(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cb(e))return"Blackberry";if(Nb(e))return"Webos";if(bb(e))return"Safari";if((e.includes("chrome/")||Rb(e))&&!e.includes("edge/"))return"Chrome";if(kb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ab(t=nt()){return/firefox\//i.test(t)}function bb(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rb(t=nt()){return/crios\//i.test(t)}function Pb(t=nt()){return/iemobile/i.test(t)}function kb(t=nt()){return/android/i.test(t)}function Cb(t=nt()){return/blackberry/i.test(t)}function Nb(t=nt()){return/webos/i.test(t)}function b_(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LM(t=nt()){var e;return b_(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MM(){return kD()&&document.documentMode===10}function Db(t=nt()){return b_(t)||kb(t)||Nb(t)||Cb(t)||/windows phone/i.test(t)||Pb(t)}/**
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
 */function Ob(t,e=[]){let n;switch(t){case"Browser":n=WE(nt());break;case"Worker":n=`${WE(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cs}/${r}`}/**
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
 */class FM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function jM(t,e={}){return Vi(t,"GET","/v2/passwordPolicy",Vs(t,e))}/**
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
 */const UM=6;class zM{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:UM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class BM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new HE(this),this.idTokenSubscription=new HE(this),this.beforeStateQueue=new FM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_b,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ro.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Tb(this,{idToken:e}),r=await mr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(dr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dr(this.app))return Promise.reject(yi(this));const n=e?je(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dr(this.app)?Promise.reject(yi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dr(this.app)?Promise.reject(yi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jM(this),n=new zM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gr(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Ro.create(this,[gr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ob(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_M(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ua(t){return je(t)}class HE{constructor(e){this.auth=e,this.observer=null,this.addObserver=LD(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $d={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $M(t){$d=t}function Vb(t){return $d.loadJS(t)}function qM(){return $d.recaptchaEnterpriseScript}function KM(){return $d.gapiScript}function GM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const WM="recaptcha-enterprise",HM="NO_RECAPTCHA";class QM{constructor(e){this.type=WM,this.auth=ua(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{bM(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new AM(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;$E(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(HM)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&$E(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=qM();l.length!==0&&(l+=a),Vb(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function QE(t,e,n,r=!1){const i=new QM(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function YE(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await QE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await QE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function YM(t,e){const n=Td(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($l(s,e??{}))return i;Ln(i,"already-initialized")}return n.initialize({options:e})}function XM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JM(t,e,n){const r=ua(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Lb(e),{host:o,port:a}=ZM(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),eF()}function Lb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZM(t){const e=Lb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:XE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:XE(o)}}}function XE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eF(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class R_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pr("not implemented")}_getIdTokenResponse(e){return pr("not implemented")}_linkToIdToken(e,n){return pr("not implemented")}_getReauthenticationResolver(e){return pr("not implemented")}}async function tF(t,e){return Vi(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function nF(t,e){return Bd(t,"POST","/v1/accounts:signInWithPassword",Vs(t,e))}/**
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
 */async function rF(t,e){return Bd(t,"POST","/v1/accounts:signInWithEmailLink",Vs(t,e))}async function iF(t,e){return Bd(t,"POST","/v1/accounts:signInWithEmailLink",Vs(t,e))}/**
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
 */class iu extends R_{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new iu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new iu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return YE(e,n,"signInWithPassword",nF);case"emailLink":return rF(e,{email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return YE(e,r,"signUpPassword",tF);case"emailLink":return iF(e,{idToken:n,email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Po(t,e){return Bd(t,"POST","/v1/accounts:signInWithIdp",Vs(t,e))}/**
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
 */const sF="http://localhost";class Ss extends R_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=T_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ss(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Po(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Po(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Po(e,n)}buildRequest(){const e={requestUri:sF,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mu(n)}return e}}/**
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
 */function oF(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aF(t){const e=Qa(Ya(t)).link,n=e?Qa(Ya(e)).deep_link_id:null,r=Qa(Ya(t)).deep_link_id;return(r?Qa(Ya(r)).link:null)||r||n||e||t}class P_{constructor(e){var n,r,i,s,o,a;const l=Qa(Ya(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=oF((i=l.mode)!==null&&i!==void 0?i:null);ee(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=aF(e);try{return new P_(n)}catch{return null}}}/**
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
 */class ca{constructor(){this.providerId=ca.PROVIDER_ID}static credential(e,n){return iu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=P_.parseLink(n);return ee(r,"argument-error"),iu._fromEmailAndCode(e,r.code,r.tenantId)}}ca.PROVIDER_ID="password";ca.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ca.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Su extends Mb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yr extends Su{constructor(){super("facebook.com")}static credential(e){return Ss._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yr.PROVIDER_ID="facebook.com";/**
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
 */class Xr extends Su{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ss._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xr.credential(n,r)}catch{return null}}}Xr.GOOGLE_SIGN_IN_METHOD="google.com";Xr.PROVIDER_ID="google.com";/**
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
 */class Jr extends Su{constructor(){super("github.com")}static credential(e){return Ss._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
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
 */class Zr extends Su{constructor(){super("twitter.com")}static credential(e,n){return Ss._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zr.credential(n,r)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
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
 */class Ho{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mr._fromIdTokenResponse(e,r,i),o=JE(r);return new Ho({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=JE(r);return new Ho({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function JE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Kh extends nr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kh(e,n,r,i)}}function Fb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kh._fromErrorAndOperation(t,s,e,r):s})}async function lF(t,e,n=!1){const r=await ru(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ho._forOperation(t,"link",r)}/**
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
 */async function uF(t,e,n=!1){const{auth:r}=t;if(dr(r.app))return Promise.reject(yi(r));const i="reauthenticate";try{const s=await ru(t,Fb(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=A_(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),Ho._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ln(r,"user-mismatch"),s}}/**
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
 */async function jb(t,e,n=!1){if(dr(t.app))return Promise.reject(yi(t));const r="signIn",i=await Fb(t,r,e),s=await Ho._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function cF(t,e){return jb(ua(t),e)}/**
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
 */async function hF(t){const e=ua(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function dF(t,e,n){return dr(t.app)?Promise.reject(yi(t)):cF(je(t),ca.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hF(t),r})}function fF(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function pF(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function mF(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function gF(t){return je(t).signOut()}const Gh="__sak";/**
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
 */class Ub{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gh,"1"),this.storage.removeItem(Gh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yF=1e3,_F=10;class zb extends Ub{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Db(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);MM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_F):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zb.type="LOCAL";const vF=zb;/**
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
 */class Bb extends Ub{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bb.type="SESSION";const $b=Bb;/**
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
 */function wF(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await wF(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qd.receivers=[];/**
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
 */function k_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class EF{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=k_("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Zn(){return window}function IF(t){Zn().location.href=t}/**
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
 */function qb(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function TF(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SF(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xF(){return qb()?self:null}/**
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
 */const Kb="firebaseLocalStorageDb",AF=1,Wh="firebaseLocalStorage",Gb="fbase_key";class xu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kd(t,e){return t.transaction([Wh],e?"readwrite":"readonly").objectStore(Wh)}function bF(){const t=indexedDB.deleteDatabase(Kb);return new xu(t).toPromise()}function ng(){const t=indexedDB.open(Kb,AF);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wh,{keyPath:Gb})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wh)?e(r):(r.close(),await bF(),e(await ng()))})})}async function ZE(t,e,n){const r=Kd(t,!0).put({[Gb]:e,value:n});return new xu(r).toPromise()}async function RF(t,e){const n=Kd(t,!1).get(e),r=await new xu(n).toPromise();return r===void 0?null:r.value}function e1(t,e){const n=Kd(t,!0).delete(e);return new xu(n).toPromise()}const PF=800,kF=3;class Wb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ng(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kF)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qd._getInstance(xF()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TF(),!this.activeServiceWorker)return;this.sender=new EF(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SF()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ng();return await ZE(e,Gh,"1"),await e1(e,Gh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ZE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RF(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>e1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kd(i,!1).getAll();return new xu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wb.type="LOCAL";const CF=Wb;new Tu(3e4,6e4);/**
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
 */function NF(t,e){return e?gr(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class C_ extends R_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Po(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Po(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Po(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DF(t){return jb(t.auth,new C_(t),t.bypassAuthState)}function OF(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),uF(n,new C_(t),t.bypassAuthState)}async function VF(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),lF(n,new C_(t),t.bypassAuthState)}/**
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
 */class Hb{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DF;case"linkViaPopup":case"linkViaRedirect":return VF;case"reauthViaPopup":case"reauthViaRedirect":return OF;default:Ln(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LF=new Tu(2e3,1e4);class go extends Hb{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,go.currentPopupAction&&go.currentPopupAction.cancel(),go.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=k_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,go.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LF.get())};e()}}go.currentPopupAction=null;/**
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
 */const MF="pendingRedirect",Qc=new Map;class FF extends Hb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qc.get(this.auth._key());if(!e){try{const r=await jF(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qc.set(this.auth._key(),e)}return this.bypassAuthState||Qc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jF(t,e){const n=BF(e),r=zF(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UF(t,e){Qc.set(t._key(),e)}function zF(t){return gr(t._redirectPersistence)}function BF(t){return Hc(MF,t.config.apiKey,t.name)}async function $F(t,e,n=!1){if(dr(t.app))return Promise.reject(yi(t));const r=ua(t),i=NF(r,e),o=await new FF(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const qF=10*60*1e3;class KF{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GF(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qb(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qF&&this.cachedEventUids.clear(),this.cachedEventUids.has(t1(e))}saveEventToCache(e){this.cachedEventUids.add(t1(e)),this.lastProcessedEventTime=Date.now()}}function t1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GF(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qb(t);default:return!1}}/**
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
 */async function WF(t,e={}){return Vi(t,"GET","/v1/projects",e)}/**
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
 */const HF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QF=/^https?/;async function YF(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WF(t);for(const n of e)try{if(XF(n))return}catch{}Ln(t,"unauthorized-domain")}function XF(t){const e=eg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!QF.test(n))return!1;if(HF.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const JF=new Tu(3e4,6e4);function n1(){const t=Zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZF(t){return new Promise((e,n)=>{var r,i,s;function o(){n1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{n1(),n(Jn(t,"network-request-failed"))},timeout:JF.get()})}if(!((i=(r=Zn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Zn().gapi)===null||s===void 0)&&s.load)o();else{const a=GM("iframefcb");return Zn()[a]=()=>{gapi.load?o():n(Jn(t,"network-request-failed"))},Vb(`${KM()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Yc=null,e})}let Yc=null;function e6(t){return Yc=Yc||ZF(t),Yc}/**
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
 */const t6=new Tu(5e3,15e3),n6="__/auth/iframe",r6="emulator/auth/iframe",i6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},s6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function o6(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?x_(e,r6):`https://${t.config.authDomain}/${n6}`,r={apiKey:e.apiKey,appName:t.name,v:Cs},i=s6.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${mu(r).slice(1)}`}async function a6(t){const e=await e6(t),n=Zn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:o6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:i6,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Jn(t,"network-request-failed"),a=Zn().setTimeout(()=>{s(o)},t6.get());function l(){Zn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const l6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},u6=500,c6=600,h6="_blank",d6="http://localhost";class r1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function f6(t,e,n,r=u6,i=c6){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},l6),{width:r.toString(),height:i.toString(),top:s,left:o}),c=nt().toLowerCase();n&&(a=Rb(c)?h6:n),Ab(c)&&(e=e||d6,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,I])=>`${p}${g}=${I},`,"");if(LM(c)&&a!=="_self")return p6(e||"",a),new r1(null);const f=window.open(e||"",a,h);ee(f,t,"popup-blocked");try{f.focus()}catch{}return new r1(f)}function p6(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const m6="__/auth/handler",g6="emulator/auth/handler",y6=encodeURIComponent("fac");async function i1(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cs,eventId:i};if(e instanceof Mb){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VD(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Su){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${y6}=${encodeURIComponent(l)}`:"";return`${_6(t)}?${mu(a).slice(1)}${c}`}function _6({config:t}){return t.emulator?x_(t,g6):`https://${t.authDomain}/${m6}`}/**
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
 */const dp="webStorageSupport";class v6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$b,this._completeRedirectFn=$F,this._overrideRedirectResult=UF}async _openPopup(e,n,r,i){var s;br((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await i1(e,n,r,eg(),i);return f6(e,o,k_())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await i1(e,n,r,eg(),i);return IF(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(br(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await a6(e),r=new KF(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dp,{type:dp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[dp];o!==void 0&&n(!!o),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YF(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Db()||bb()||b_()}}const w6=v6;var s1="@firebase/auth",o1="1.7.9";/**
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
 */class E6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function I6(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function T6(t){gs(new wi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ob(t)},c=new BM(r,i,s,l);return XM(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gs(new wi("auth-internal",e=>{const n=ua(e.getProvider("auth").getImmediate());return(r=>new E6(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(s1,o1,I6(t)),Yn(s1,o1,"esm2017")}/**
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
 */const S6=5*60,x6=ox("authIdTokenMaxAge")||S6;let a1=null;const A6=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>x6)return;const i=n==null?void 0:n.token;a1!==i&&(a1=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Au(t=dx()){const e=Td(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YM(t,{popupRedirectResolver:w6,persistence:[CF,vF,$b]}),r=ox("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=A6(s.toString());pF(n,o,()=>o(n.currentUser)),fF(n,a=>o(a))}}const i=ix("auth");return i&&JM(n,`http://${i}`),n}function b6(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$M({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Jn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",b6().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});T6("Browser");/**
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
 */const Yb="firebasestorage.googleapis.com",Xb="storageBucket",R6=2*60*1e3,P6=10*60*1e3,k6=1e3;/**
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
 */class Ue extends nr{constructor(e,n,r=0){super(fp(e),`Firebase Storage: ${n} (${fp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Re;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Re||(Re={}));function fp(t){return"storage/"+t}function N_(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(Re.UNKNOWN,t)}function C6(t){return new Ue(Re.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function N6(t){return new Ue(Re.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function D6(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(Re.UNAUTHENTICATED,t)}function O6(){return new Ue(Re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function V6(t){return new Ue(Re.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Jb(){return new Ue(Re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Zb(){return new Ue(Re.CANCELED,"User canceled the upload/download.")}function L6(t){return new Ue(Re.INVALID_URL,"Invalid URL '"+t+"'.")}function M6(t){return new Ue(Re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function F6(){return new Ue(Re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Xb+"' property when initializing the app?")}function eR(){return new Ue(Re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function j6(){return new Ue(Re.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function U6(){return new Ue(Re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function z6(t){return new Ue(Re.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function rg(t){return new Ue(Re.INVALID_ARGUMENT,t)}function tR(){return new Ue(Re.APP_DELETED,"The Firebase app was deleted.")}function B6(t){return new Ue(Re.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function El(t,e){return new Ue(Re.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function $a(t){throw new Ue(Re.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rn.makeFromUrl(e,n)}catch{return new rn(e,"")}if(r.path==="")return r;throw M6(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(k){k.path_=decodeURIComponent(k.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${i}/o${p}`,"i"),I={bucket:1,path:3},A=n===Yb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",T=new RegExp(`^https?://${A}/${i}/${P}`,"i"),E=[{regex:a,indices:l,postModify:s},{regex:g,indices:I,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let k=0;k<E.length;k++){const M=E[k],O=M.regex.exec(e);if(O){const w=O[M.indices.bucket];let y=O[M.indices.path];y||(y=""),r=new rn(w,y),M.postModify(r);break}}if(r==null)throw L6(e);return r}}class $6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function q6(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...P){c||(c=!0,e.apply(null,P))}function f(P){i=setTimeout(()=>{i=null,t(g,l())},P)}function p(){s&&clearTimeout(s)}function g(P,...T){if(c){p();return}if(P){p(),h.call(null,P,...T);return}if(l()||o){p(),h.call(null,P,...T);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,f(E)}let I=!1;function A(P){I||(I=!0,p(),!c&&(i!==null?(P||(a=2),clearTimeout(i),f(0)):P||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,A(!0)},n),A}function K6(t){t(!1)}/**
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
 */function G6(t){return t!==void 0}function W6(t){return typeof t=="function"}function H6(t){return typeof t=="object"&&!Array.isArray(t)}function Gd(t){return typeof t=="string"||t instanceof String}function l1(t){return D_()&&t instanceof Blob}function D_(){return typeof Blob<"u"}function u1(t,e,n,r){if(r<e)throw rg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw rg(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function bu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function nR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var os;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(os||(os={}));/**
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
 */function rR(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class Q6{constructor(e,n,r,i,s,o,a,l,c,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,I)=>{this.resolve_=g,this.reject_=I,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new wc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===os.NO_ERROR,l=s.getStatus();if(!a||rR(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===os.ABORT;r(!1,new wc(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new wc(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());G6(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=N_();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?tR():Zb();o(l)}else{const l=Jb();o(l)}};this.canceled_?n(!1,new wc(!1,null,!0)):this.backoffId_=q6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&K6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Y6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function X6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function J6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Z6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ej(t,e,n,r,i,s,o=!0){const a=nR(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return J6(c,e),Y6(c,n),X6(c,s),Z6(c,r),new Q6(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function tj(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nj(...t){const e=tj();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(D_())return new Blob(t);throw new Ue(Re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rj(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function ij(t){if(typeof atob>"u")throw z6("base-64");return atob(t)}/**
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
 */const Kn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class pp{constructor(e,n){this.data=e,this.contentType=n||null}}function sj(t,e){switch(t){case Kn.RAW:return new pp(iR(e));case Kn.BASE64:case Kn.BASE64URL:return new pp(sR(t,e));case Kn.DATA_URL:return new pp(aj(e),lj(e))}throw N_()}function iR(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function oj(t){let e;try{e=decodeURIComponent(t)}catch{throw El(Kn.DATA_URL,"Malformed data URL.")}return iR(e)}function sR(t,e){switch(t){case Kn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw El(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Kn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw El(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ij(e)}catch(i){throw i.message.includes("polyfill")?i:El(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class oR{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw El(Kn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=uj(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function aj(t){const e=new oR(t);return e.base64?sR(Kn.BASE64,e.rest):oj(e.rest)}function lj(t){return new oR(t).contentType}function uj(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ei{constructor(e,n){let r=0,i="";l1(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(l1(this.data_)){const r=this.data_,i=rj(r,e,n);return i===null?null:new ei(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ei(r,!0)}}static getBlob(...e){if(D_()){const n=e.map(r=>r instanceof ei?r.data_:r);return new ei(nj.apply(null,n))}else{const n=e.map(o=>Gd(o)?sj(Kn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new ei(i,!0)}}uploadData(){return this.data_}}/**
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
 */function aR(t){let e;try{e=JSON.parse(t)}catch{return null}return H6(e)?e:null}/**
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
 */function cj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function hj(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function lR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function dj(t,e){return e}class Pt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||dj}}let Ec=null;function fj(t){return!Gd(t)||t.length<2?t:lR(t)}function uR(){if(Ec)return Ec;const t=[];t.push(new Pt("bucket")),t.push(new Pt("generation")),t.push(new Pt("metageneration")),t.push(new Pt("name","fullPath",!0));function e(s,o){return fj(o)}const n=new Pt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Pt("size");return i.xform=r,t.push(i),t.push(new Pt("timeCreated")),t.push(new Pt("updated")),t.push(new Pt("md5Hash",null,!0)),t.push(new Pt("cacheControl",null,!0)),t.push(new Pt("contentDisposition",null,!0)),t.push(new Pt("contentEncoding",null,!0)),t.push(new Pt("contentLanguage",null,!0)),t.push(new Pt("contentType",null,!0)),t.push(new Pt("metadata","customMetadata",!0)),Ec=t,Ec}function pj(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new rn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function mj(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return pj(r,t),r}function cR(t,e,n){const r=aR(e);return r===null?null:mj(t,r,n)}function gj(t,e,n,r){const i=aR(e);if(i===null||!Gd(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,f=t.fullPath,p="/b/"+o(h)+"/o/"+o(f),g=bu(p,n,r),I=nR({alt:"media",token:c});return g+I})[0]}function hR(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ha{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function wr(t){if(!t)throw N_()}function O_(t,e){function n(r,i){const s=cR(t,i,e);return wr(s!==null),s}return n}function yj(t,e){function n(r,i){const s=cR(t,i,e);return wr(s!==null),gj(s,i,t.host,t._protocol)}return n}function Ru(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=O6():i=D6():n.getStatus()===402?i=N6(t.bucket):n.getStatus()===403?i=V6(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function dR(t){const e=Ru(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=C6(t.path)),s.serverResponse=i.serverResponse,s}return n}function _j(t,e,n){const r=e.fullServerUrl(),i=bu(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ha(i,s,O_(t,n),o);return a.errorHandler=dR(e),a}function vj(t,e,n){const r=e.fullServerUrl(),i=bu(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ha(i,s,yj(t,n),o);return a.errorHandler=dR(e),a}function wj(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function fR(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=wj(null,e)),r}function Ej(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let k=0;k<2;k++)E=E+Math.random().toString().slice(2);return E}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=fR(e,r,i),h=hR(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=ei.getBlob(f,r,p);if(g===null)throw eR();const I={name:c.fullPath},A=bu(s,t.host,t._protocol),P="POST",T=t.maxUploadRetryTime,v=new ha(A,P,O_(t,n),T);return v.urlParams=I,v.headers=o,v.body=g.uploadData(),v.errorHandler=Ru(e),v}class Hh{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function V_(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{wr(!1)}return wr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Ij(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=fR(e,r,i),a={name:o.fullPath},l=bu(s,t.host,t._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=hR(o,n),p=t.maxUploadRetryTime;function g(A){V_(A);let P;try{P=A.getResponseHeader("X-Goog-Upload-URL")}catch{wr(!1)}return wr(Gd(P)),P}const I=new ha(l,c,g,p);return I.urlParams=a,I.headers=h,I.body=f,I.errorHandler=Ru(e),I}function Tj(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const h=V_(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{wr(!1)}f||wr(!1);const p=Number(f);return wr(!isNaN(p)),new Hh(p,r.size(),h==="final")}const o="POST",a=t.maxUploadRetryTime,l=new ha(n,o,s,a);return l.headers=i,l.errorHandler=Ru(e),l}const c1=256*1024;function Sj(t,e,n,r,i,s,o,a){const l=new Hh(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw j6();const c=l.total-l.current;let h=c;i>0&&(h=Math.min(h,i));const f=l.current,p=f+h;let g="";h===0?g="finalize":c===h?g="upload, finalize":g="upload";const I={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${l.current}`},A=r.slice(f,p);if(A===null)throw eR();function P(k,M){const O=V_(k,["active","final"]),w=l.current+h,y=r.size();let S;return O==="final"?S=O_(e,s)(k,M):S=null,new Hh(w,y,O==="final",S)}const T="POST",v=e.maxUploadRetryTime,E=new ha(n,T,P,v);return E.headers=I,E.body=A.uploadData(),E.progressCallback=a||null,E.errorHandler=Ru(t),E}const zt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function mp(t){switch(t){case"running":case"pausing":case"canceling":return zt.RUNNING;case"paused":return zt.PAUSED;case"success":return zt.SUCCESS;case"canceled":return zt.CANCELED;case"error":return zt.ERROR;default:return zt.ERROR}}/**
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
 */class xj{constructor(e,n,r){if(W6(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Hs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Aj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=os.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=os.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=os.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw $a("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $a("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $a("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $a("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $a("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class bj extends Aj{initXhr(){this.xhr_.responseType="text"}}function to(){return new bj}/**
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
 */class Rj{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=uR(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Re.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(rR(i.status,[]))if(s)i=Jb();else{this.sleepTime=Math.max(this.sleepTime*2,k6),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Re.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=Ij(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,to,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=Tj(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,to,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=c1*this._chunkMultiplier,n=new Hh(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=Sj(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,to,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){c1*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=_j(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,to,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=Ej(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,to,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Zb(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=mp(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new xj(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(mp(this._state)){case zt.SUCCESS:Hs(this._resolve.bind(null,this.snapshot))();break;case zt.CANCELED:case zt.ERROR:const n=this._reject;Hs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(mp(this._state)){case zt.RUNNING:case zt.PAUSED:e.next&&Hs(e.next.bind(e,this.snapshot))();break;case zt.SUCCESS:e.complete&&Hs(e.complete.bind(e))();break;case zt.CANCELED:case zt.ERROR:e.error&&Hs(e.error.bind(e,this._error))();break;default:e.error&&Hs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class xs{constructor(e,n){this._service=e,n instanceof rn?this._location=n:this._location=rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xs(e,n)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lR(this._location.path)}get storage(){return this._service}get parent(){const e=cj(this._location.path);if(e===null)return null;const n=new rn(this._location.bucket,e);return new xs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw B6(e)}}function Pj(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Rj(t,new ei(e),n)}function kj(t){t._throwIfRoot("getDownloadURL");const e=vj(t.storage,t._location,uR());return t.storage.makeRequestWithTokens(e,to).then(n=>{if(n===null)throw U6();return n})}function Cj(t,e){const n=hj(t._location.path,e),r=new rn(t._location.bucket,n);return new xs(t.storage,r)}/**
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
 */function Nj(t){return/^[A-Za-z]+:\/\//.test(t)}function Dj(t,e){return new xs(t,e)}function pR(t,e){if(t instanceof L_){const n=t;if(n._bucket==null)throw F6();const r=new xs(n,n._bucket);return e!=null?pR(r,e):r}else return e!==void 0?Cj(t,e):t}function Oj(t,e){if(e&&Nj(e)){if(t instanceof L_)return Dj(t,e);throw rg("To use ref(service, url), the first argument must be a Storage instance.")}else return pR(t,e)}function h1(t,e){const n=e==null?void 0:e[Xb];return n==null?null:rn.makeFromBucketSpec(n,t)}function Vj(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:SD(i,t.app.options.projectId))}class L_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Yb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=R6,this._maxUploadRetryTime=P6,this._requests=new Set,i!=null?this._bucket=rn.makeFromBucketSpec(i,this._host):this._bucket=h1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=h1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){u1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){u1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new $6(tR());{const o=ej(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const d1="@firebase/storage",f1="0.13.2";/**
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
 */const mR="storage";function Lj(t,e,n){return t=je(t),Pj(t,e,n)}function Mj(t){return t=je(t),kj(t)}function Fj(t,e){return t=je(t),Oj(t,e)}function gR(t=dx(),e){t=je(t);const r=Td(t,mR).getImmediate({identifier:e}),i=ID("storage");return i&&jj(r,...i),r}function jj(t,e,n,r={}){Vj(t,e,n,r)}function Uj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new L_(n,r,i,e,Cs)}function zj(){gs(new wi(mR,Uj,"PUBLIC").setMultipleInstances(!0)),Yn(d1,f1,""),Yn(d1,f1,"esm2017")}zj();const Wd={apiKey:"AIzaSyB5QFjl6jvIKBCRn12esrOba58STMP9dM0",authDomain:"galeriazdjec-f4180.firebaseapp.com",projectId:"galeriazdjec-f4180",storageBucket:"galeriazdjec-f4180.firebasestorage.app",messagingSenderId:"789024046392",appId:"1:789024046392:web:26d9e3195917ed28e515cd"},M_=hx(Wd),en=XL(M_,{experimentalForceLongPolling:!0});JL(en).catch(t=>{t.code==="failed-precondition"?console.warn("⚠ Firestore Persistence nie może być aktywowane (może działać w innej zakładce)."):t.code==="unimplemented"&&console.warn("⚠ Przeglądarka nie obsługuje IndexedDB.")});Si(en,"images");gR(M_,{experimentalForceLongPolling:!0});Au(M_);console.log("✅ Firebase Project ID:",Wd.projectId);console.log("✅ Firebase Config:",Wd);console.log("✅ Firebase Storage Bucket:",Wd.storageBucket);console.log("✅ Firestore Persistence włączone:",en);function yR(){const[t,e]=N.useState(""),n=async i=>{try{await zd(Si(en,"tasks"),{text:i,completed:!1,timestamp:new Date}),console.log("Task added to Firestore!")}catch(s){console.error("Error adding task: ",s)}},r=i=>{i.preventDefault(),t.trim()&&(n(t),e(""))};return x.jsxs("form",{className:"flex flex-col space-y-2  !important",onSubmit:r,children:[x.jsx("input",{type:"text",className:"mt-[1px] border border-gray-300 w-[165px] rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow shadow-sm hover:shadow-md",placeholder:"What is the task today?",value:t,onChange:i=>e(i.target.value)}),x.jsx("button",{type:"submit",className:"px-4 py-0.5 mb-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75",children:"Add Task"})]})}yR.propTypes={};const p1=()=>{};let F_={},_R={},vR=null,wR={mark:p1,measure:p1};try{typeof window<"u"&&(F_=window),typeof document<"u"&&(_R=document),typeof MutationObserver<"u"&&(vR=MutationObserver),typeof performance<"u"&&(wR=performance)}catch{}const{userAgent:m1=""}=F_.navigator||{},Ai=F_,be=_R,g1=vR,Ic=wR;Ai.document;const Dr=!!be.documentElement&&!!be.head&&typeof be.addEventListener=="function"&&typeof be.createElement=="function",ER=~m1.indexOf("MSIE")||~m1.indexOf("Trident/");var Ne="classic",IR="duotone",on="sharp",an="sharp-duotone",Bj=[Ne,IR,on,an],$j={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},y1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},qj=["kit"],Kj=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Gj=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Wj={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Hj={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Qj={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Yj={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Xj={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Jj={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},TR={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Zj=["solid","regular","light","thin","duotone","brands"],SR=[1,2,3,4,5,6,7,8,9,10],e5=SR.concat([11,12,13,14,15,16,17,18,19,20]),nl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},t5=[...Object.keys(Yj),...Zj,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",nl.GROUP,nl.SWAP_OPACITY,nl.PRIMARY,nl.SECONDARY].concat(SR.map(t=>"".concat(t,"x"))).concat(e5.map(t=>"w-".concat(t))),n5={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},r5={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},i5={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},_1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Rr="___FONT_AWESOME___",ig=16,xR="fa",AR="svg-inline--fa",As="data-fa-i2svg",sg="data-fa-pseudo-element",s5="data-fa-pseudo-element-pending",j_="data-prefix",U_="data-icon",v1="fontawesome-i2svg",o5="async",a5=["HTML","HEAD","STYLE","SCRIPT"],bR=(()=>{try{return!0}catch{return!1}})(),RR=[Ne,on,an];function Pu(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Ne]}})}const PR={...TR};PR[Ne]={...TR[Ne],...y1.kit,...y1["kit-duotone"]};const as=Pu(PR),og={...Jj};og[Ne]={...og[Ne],..._1.kit,..._1["kit-duotone"]};const su=Pu(og),ag={...Xj};ag[Ne]={...ag[Ne],...i5.kit};const ls=Pu(ag),lg={...Qj};lg[Ne]={...lg[Ne],...r5.kit};const l5=Pu(lg),u5=Kj,kR="fa-layers-text",c5=Gj,h5={...$j};Pu(h5);const d5=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gp=nl,Qo=new Set;Object.keys(su[Ne]).map(Qo.add.bind(Qo));Object.keys(su[on]).map(Qo.add.bind(Qo));Object.keys(su[an]).map(Qo.add.bind(Qo));const f5=[...qj,...t5],Il=Ai.FontAwesomeConfig||{};function p5(t){var e=be.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function m5(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}be&&typeof be.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=m5(p5(n));i!=null&&(Il[r]=i)});const CR={styleDefault:"solid",familyDefault:"classic",cssPrefix:xR,replacementClass:AR,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Il.familyPrefix&&(Il.cssPrefix=Il.familyPrefix);const Yo={...CR,...Il};Yo.autoReplaceSvg||(Yo.observeMutations=!1);const W={};Object.keys(CR).forEach(t=>{Object.defineProperty(W,t,{enumerable:!0,set:function(e){Yo[t]=e,Tl.forEach(n=>n(W))},get:function(){return Yo[t]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(t){Yo.cssPrefix=t,Tl.forEach(e=>e(W))},get:function(){return Yo.cssPrefix}});Ai.FontAwesomeConfig=W;const Tl=[];function g5(t){return Tl.push(t),()=>{Tl.splice(Tl.indexOf(t),1)}}const Br=ig,Gn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function y5(t){if(!t||!Dr)return;const e=be.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=be.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return be.head.insertBefore(e,r),t}const _5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ou(){let t=12,e="";for(;t-- >0;)e+=_5[Math.random()*62|0];return e}function da(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function z_(t){return t.classList?da(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function NR(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function v5(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(NR(t[n]),'" '),"").trim()}function Hd(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function B_(t){return t.size!==Gn.size||t.x!==Gn.x||t.y!==Gn.y||t.rotate!==Gn.rotate||t.flipX||t.flipY}function w5(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function E5(t){let{transform:e,width:n=ig,height:r=ig,startCentered:i=!1}=t,s="";return i&&ER?s+="translate(".concat(e.x/Br-n/2,"em, ").concat(e.y/Br-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/Br,"em), calc(-50% + ").concat(e.y/Br,"em)) "):s+="translate(".concat(e.x/Br,"em, ").concat(e.y/Br,"em) "),s+="scale(".concat(e.size/Br*(e.flipX?-1:1),", ").concat(e.size/Br*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var I5=`:root, :host {
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
}`;function DR(){const t=xR,e=AR,n=W.cssPrefix,r=W.replacementClass;let i=I5;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let w1=!1;function yp(){W.autoAddCss&&!w1&&(y5(DR()),w1=!0)}var T5={mixout(){return{dom:{css:DR,insertCss:yp}}},hooks(){return{beforeDOMElementCreation(){yp()},beforeI2svg(){yp()}}}};const Pr=Ai||{};Pr[Rr]||(Pr[Rr]={});Pr[Rr].styles||(Pr[Rr].styles={});Pr[Rr].hooks||(Pr[Rr].hooks={});Pr[Rr].shims||(Pr[Rr].shims=[]);var Wn=Pr[Rr];const OR=[],VR=function(){be.removeEventListener("DOMContentLoaded",VR),Qh=1,OR.map(t=>t())};let Qh=!1;Dr&&(Qh=(be.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(be.readyState),Qh||be.addEventListener("DOMContentLoaded",VR));function S5(t){Dr&&(Qh?setTimeout(t,0):OR.push(t))}function ku(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?NR(t):"<".concat(e," ").concat(v5(n),">").concat(r.map(ku).join(""),"</").concat(e,">")}function E1(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var _p=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,l,c,h;for(r===void 0?(l=1,h=e[s[0]]):(l=0,h=r);l<o;l++)c=s[l],h=a(h,e[c],c,e);return h};function x5(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ug(t){const e=x5(t);return e.length===1?e[0].toString(16):null}function A5(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function I1(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function cg(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=I1(e);typeof Wn.hooks.addPack=="function"&&!r?Wn.hooks.addPack(t,I1(e)):Wn.styles[t]={...Wn.styles[t]||{},...i},t==="fas"&&cg("fa",e)}const{styles:Xi,shims:b5}=Wn,R5={[Ne]:Object.values(ls[Ne]),[on]:Object.values(ls[on]),[an]:Object.values(ls[an])};let $_=null,LR={},MR={},FR={},jR={},UR={};const P5={[Ne]:Object.keys(as[Ne]),[on]:Object.keys(as[on]),[an]:Object.keys(as[an])};function k5(t){return~f5.indexOf(t)}function C5(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!k5(i)?i:null}const zR=()=>{const t=r=>_p(Xi,(i,s,o)=>(i[o]=_p(s,r,{}),i),{});LR=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),MR=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),UR=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in Xi||W.autoFetchSvg,n=_p(b5,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});FR=n.names,jR=n.unicodes,$_=Qd(W.styleDefault,{family:W.familyDefault})};g5(t=>{$_=Qd(t.styleDefault,{family:W.familyDefault})});zR();function q_(t,e){return(LR[t]||{})[e]}function N5(t,e){return(MR[t]||{})[e]}function ii(t,e){return(UR[t]||{})[e]}function BR(t){return FR[t]||{prefix:null,iconName:null}}function D5(t){const e=jR[t],n=q_("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function bi(){return $_}const K_=()=>({prefix:null,iconName:null,rest:[]});function Qd(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ne}=e,r=as[n][t],i=su[n][t]||su[n][r],s=t in Wn.styles?t:null;return i||s||null}const O5={[Ne]:Object.keys(ls[Ne]),[on]:Object.keys(ls[on]),[an]:Object.keys(ls[an])};function Yd(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Ne]:"".concat(W.cssPrefix,"-").concat(Ne),[on]:"".concat(W.cssPrefix,"-").concat(on),[an]:"".concat(W.cssPrefix,"-").concat(an)};let i=null,s=Ne;const o=Bj.filter(l=>l!==IR);o.forEach(l=>{(t.includes(r[l])||t.some(c=>O5[l].includes(c)))&&(s=l)});const a=t.reduce((l,c)=>{const h=C5(W.cssPrefix,c);if(Xi[c]?(c=R5[s].includes(c)?l5[s][c]:c,i=c,l.prefix=c):P5[s].indexOf(c)>-1?(i=c,l.prefix=Qd(c,{family:s})):h?l.iconName=h:c!==W.replacementClass&&!o.some(f=>c===r[f])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const f=i==="fa"?BR(l.iconName):{},p=ii(l.prefix,l.iconName);f.prefix&&(i=null),l.iconName=f.iconName||p||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!Xi.far&&Xi.fas&&!W.autoFetchSvg&&(l.prefix="fas")}return l},K_());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===on&&(Xi.fass||W.autoFetchSvg)&&(a.prefix="fass",a.iconName=ii(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===an&&(Xi.fasds||W.autoFetchSvg)&&(a.prefix="fasds",a.iconName=ii(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=bi()||"fas"),a}class V5{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},cg(s,i[s]);const o=ls[Ne][s];o&&cg(o,i[s]),zR()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let T1=[],yo={};const ko={},L5=Object.keys(ko);function M5(t,e){let{mixoutsTo:n}=e;return T1=t,yo={},Object.keys(ko).forEach(r=>{L5.indexOf(r)===-1&&delete ko[r]}),T1.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{yo[o]||(yo[o]=[]),yo[o].push(s[o])})}r.provides&&r.provides(ko)}),n}function hg(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(yo[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function bs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(yo[t]||[]).forEach(s=>{s.apply(null,n)})}function Ri(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ko[t]?ko[t].apply(null,e):void 0}function dg(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||bi();if(e)return e=ii(n,e)||e,E1($R.definitions,n,e)||E1(Wn.styles,n,e)}const $R=new V5,F5=()=>{W.autoReplaceSvg=!1,W.observeMutations=!1,bs("noAuto")},j5={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Dr?(bs("beforeI2svg",t),Ri("pseudoElements2svg",t),Ri("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,S5(()=>{z5({autoReplaceSvgRoot:e}),bs("watch",t)})}},U5={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ii(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Qd(t[0]);return{prefix:n,iconName:ii(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(W.cssPrefix,"-"))>-1||t.match(u5))){const e=Yd(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||bi(),iconName:ii(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=bi();return{prefix:e,iconName:ii(e,t)||t}}}},dn={noAuto:F5,config:W,dom:j5,parse:U5,library:$R,findIconDefinition:dg,toHtml:ku},z5=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=be}=t;(Object.keys(Wn.styles).length>0||W.autoFetchSvg)&&Dr&&W.autoReplaceSvg&&dn.dom.i2svg({node:e})};function Xd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ku(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Dr)return;const n=be.createElement("div");return n.innerHTML=t.html,n.children}}),t}function B5(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(B_(o)&&n.found&&!r.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=Hd({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function $5(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(W.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function G_(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:l,titleId:c,extra:h,watchable:f=!1}=t,{width:p,height:g}=n.found?n:e,I=r==="fak",A=[W.replacementClass,i?"".concat(W.cssPrefix,"-").concat(i):""].filter(M=>h.classes.indexOf(M)===-1).filter(M=>M!==""||!!M).concat(h.classes).join(" ");let P={children:[],attributes:{...h.attributes,"data-prefix":r,"data-icon":i,class:A,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)}};const T=I&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};f&&(P.attributes[As]=""),a&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(c||ou())},children:[a]}),delete P.attributes.title);const v={...P,prefix:r,iconName:i,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...T,...h.styles}},{children:E,attributes:k}=n.found&&e.found?Ri("generateAbstractMask",v)||{children:[],attributes:{}}:Ri("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=E,v.attributes=k,o?$5(v):B5(v)}function S1(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[As]="");const c={...o.styles};B_(i)&&(c.transform=E5({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const h=Hd(c);h.length>0&&(l.style=h);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function q5(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Hd(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:vp}=Wn;function fg(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat(gp.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(gp.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(gp.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const K5={found:!1,width:512,height:512};function G5(t,e){!bR&&!W.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function pg(t,e){let n=e;return e==="fa"&&W.styleDefault!==null&&(e=bi()),new Promise((r,i)=>{if(n==="fa"){const s=BR(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&vp[e]&&vp[e][t]){const s=vp[e][t];return r(fg(s))}G5(t,e),r({...K5,icon:W.showMissingIcons&&t?Ri("missingIconAbstract")||{}:{}})})}const x1=()=>{},mg=W.measurePerformance&&Ic&&Ic.mark&&Ic.measure?Ic:{mark:x1,measure:x1},rl='FA "6.6.0"',W5=t=>(mg.mark("".concat(rl," ").concat(t," begins")),()=>qR(t)),qR=t=>{mg.mark("".concat(rl," ").concat(t," ends")),mg.measure("".concat(rl," ").concat(t),"".concat(rl," ").concat(t," begins"),"".concat(rl," ").concat(t," ends"))};var W_={begin:W5,end:qR};const Xc=()=>{};function A1(t){return typeof(t.getAttribute?t.getAttribute(As):null)=="string"}function H5(t){const e=t.getAttribute?t.getAttribute(j_):null,n=t.getAttribute?t.getAttribute(U_):null;return e&&n}function Q5(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(W.replacementClass)}function Y5(){return W.autoReplaceSvg===!0?Jc.replace:Jc[W.autoReplaceSvg]||Jc.replace}function X5(t){return be.createElementNS("http://www.w3.org/2000/svg",t)}function J5(t){return be.createElement(t)}function KR(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?X5:J5}=e;if(typeof t=="string")return be.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(KR(s,{ceFn:n}))}),r}function Z5(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Jc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(KR(n),e)}),e.getAttribute(As)===null&&W.keepOriginalSource){let n=be.createComment(Z5(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~z_(e).indexOf(W.replacementClass))return Jc.replace(t);const r=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===W.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>ku(s)).join(`
`);e.setAttribute(As,""),e.innerHTML=i}};function b1(t){t()}function GR(t,e){const n=typeof e=="function"?e:Xc;if(t.length===0)n();else{let r=b1;W.mutateApproach===o5&&(r=Ai.requestAnimationFrame||b1),r(()=>{const i=Y5(),s=W_.begin("mutate");t.map(i),s(),n()})}}let H_=!1;function WR(){H_=!0}function gg(){H_=!1}let Yh=null;function R1(t){if(!g1||!W.observeMutations)return;const{treeCallback:e=Xc,nodeCallback:n=Xc,pseudoElementsCallback:r=Xc,observeMutationsRoot:i=be}=t;Yh=new g1(s=>{if(H_)return;const o=bi();da(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!A1(a.addedNodes[0])&&(W.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&W.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&A1(a.target)&&~d5.indexOf(a.attributeName))if(a.attributeName==="class"&&H5(a.target)){const{prefix:l,iconName:c}=Yd(z_(a.target));a.target.setAttribute(j_,l||o),c&&a.target.setAttribute(U_,c)}else Q5(a.target)&&n(a.target)})}),Dr&&Yh.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function e3(){Yh&&Yh.disconnect()}function t3(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function n3(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Yd(z_(t));return i.prefix||(i.prefix=bi()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=N5(i.prefix,t.innerText)||q_(i.prefix,ug(t.innerText))),!i.iconName&&W.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function r3(t){const e=da(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return W.autoA11y&&(n?e["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(r||ou()):(e["aria-hidden"]="true",e.focusable="false")),e}function i3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Gn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function P1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=n3(t),s=r3(t),o=hg("parseNodeAttributes",{},t);let a=e.styleParser?t3(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Gn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s},...o}}const{styles:s3}=Wn;function HR(t){const e=W.autoReplaceSvg==="nest"?P1(t,{styleParser:!1}):P1(t);return~e.extra.classes.indexOf(kR)?Ri("generateLayersText",t,e):Ri("generateSvgReplacementMutation",t,e)}let tr=new Set;RR.map(t=>{tr.add("fa-".concat(t))});Object.keys(as[Ne]).map(tr.add.bind(tr));Object.keys(as[on]).map(tr.add.bind(tr));Object.keys(as[an]).map(tr.add.bind(tr));tr=[...tr];function k1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Dr)return Promise.resolve();const n=be.documentElement.classList,r=h=>n.add("".concat(v1,"-").concat(h)),i=h=>n.remove("".concat(v1,"-").concat(h)),s=W.autoFetchSvg?tr:RR.map(h=>"fa-".concat(h)).concat(Object.keys(s3));s.includes("fa")||s.push("fa");const o=[".".concat(kR,":not([").concat(As,"])")].concat(s.map(h=>".".concat(h,":not([").concat(As,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=da(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=W_.begin("onTree"),c=a.reduce((h,f)=>{try{const p=HR(f);p&&h.push(p)}catch(p){bR||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,f)=>{Promise.all(c).then(p=>{GR(p,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),h()})}).catch(p=>{l(),f(p)})})}function o3(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;HR(t).then(n=>{n&&GR([n],e)})}function a3(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:dg(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:dg(i||{})),t(r,{...n,mask:i})}}const l3=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Gn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:h={}}=e;if(!t)return;const{prefix:f,iconName:p,icon:g}=t;return Xd({type:"icon",...t},()=>(bs("beforeDOMElementCreation",{iconDefinition:t,params:e}),W.autoA11y&&(o?c["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(a||ou()):(c["aria-hidden"]="true",c.focusable="false")),G_({icons:{main:fg(g),mask:i?fg(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:p,transform:{...Gn,...n},symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:h,classes:l}})))};var u3={mixout(){return{icon:a3(l3)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=k1,t.nodeCallback=o3,t}}},provides(t){t.i2svg=function(e){const{node:n=be,callback:r=()=>{}}=e;return k1(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:l,mask:c,maskId:h,extra:f}=n;return new Promise((p,g)=>{Promise.all([pg(r,o),c.iconName?pg(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[A,P]=I;p([e,G_({icons:{main:A,mask:P},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:i,titleId:s,extra:f,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=Hd(o);a.length>0&&(r.style=a);let l;return B_(s)&&(l=Ri("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},c3={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Xd({type:"layer"},()=>{bs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},h3={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Xd({type:"counter",content:t},()=>(bs("beforeDOMElementCreation",{content:t,params:e}),q5({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(W.cssPrefix,"-layers-counter"),...r]}})))}}}},d3={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Gn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Xd({type:"text",content:t},()=>(bs("beforeDOMElementCreation",{content:t,params:e}),S1({content:t,transform:{...Gn,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(W.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(ER){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return W.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,S1({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const f3=new RegExp('"',"ug"),C1=[1105920,1112319],N1={FontAwesome:{normal:"fas",400:"fas"},...Hj,...Wj,...n5},yg=Object.keys(N1).reduce((t,e)=>(t[e.toLowerCase()]=N1[e],t),{}),p3=Object.keys(yg).reduce((t,e)=>{const n=yg[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function m3(t){const e=t.replace(f3,""),n=A5(e,0),r=n>=C1[0]&&n<=C1[1],i=e.length===2?e[0]===e[1]:!1;return{value:ug(i?e[0]:e),isSecondary:r||i}}function g3(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(yg[n]||{})[i]||p3[n]}function D1(t,e){const n="".concat(s5).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=da(t.children).filter(p=>p.getAttribute(sg)===e)[0],a=Ai.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(c5),h=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&f!=="none"&&f!==""){const p=a.getPropertyValue("content");let g=g3(l,h);const{value:I,isSecondary:A}=m3(p),P=c[0].startsWith("FontAwesome");let T=q_(g,I),v=T;if(P){const E=D5(I);E.iconName&&E.prefix&&(T=E.iconName,g=E.prefix)}if(T&&!A&&(!o||o.getAttribute(j_)!==g||o.getAttribute(U_)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);const E=i3(),{extra:k}=E;k.attributes[sg]=e,pg(T,g).then(M=>{const O=G_({...E,icons:{main:M,mask:K_()},prefix:g,iconName:v,extra:k,watchable:!0}),w=be.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=O.map(y=>ku(y)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function y3(t){return Promise.all([D1(t,"::before"),D1(t,"::after")])}function _3(t){return t.parentNode!==document.head&&!~a5.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(sg)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function O1(t){if(Dr)return new Promise((e,n)=>{const r=da(t.querySelectorAll("*")).filter(_3).map(y3),i=W_.begin("searchPseudoElements");WR(),Promise.all(r).then(()=>{i(),gg(),e()}).catch(()=>{i(),gg(),n()})})}var v3={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=O1,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=be}=e;W.searchPseudoElements&&O1(n)}}};let V1=!1;var w3={mixout(){return{dom:{unwatch(){WR(),V1=!0}}}},hooks(){return{bootstrap(){R1(hg("mutationObserverCallbacks",{}))},noAuto(){e3()},watch(t){const{observeMutationsRoot:e}=t;V1?gg():R1(hg("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const L1=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var E3={mixout(){return{parse:{transform:t=>L1(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=L1(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(c)},f={transform:"translate(".concat(s/2*-1," -256)")},p={outer:o,inner:h,path:f};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const wp={x:0,y:0,width:"100%",height:"100%"};function M1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function I3(t){return t.tag==="g"?t.children:[t]}var T3={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Yd(n.split(" ").map(i=>i.trim())):K_();return r.prefix||(r.prefix=bi()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:l,icon:c}=i,{width:h,icon:f}=s,p=w5({transform:a,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:{...wp,fill:"white"}},I=c.children?{children:c.children.map(M1)}:{},A={tag:"g",attributes:{...p.inner},children:[M1({tag:c.tag,attributes:{...c.attributes,...p.path},...I})]},P={tag:"g",attributes:{...p.outer},children:[A]},T="mask-".concat(o||ou()),v="clip-".concat(o||ou()),E={tag:"mask",attributes:{...wp,id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,P]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:I3(f)},E]};return n.push(k,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(T,")"),...wp}}),{children:n,attributes:r}}}},S3={provides(t){let e=!1;Ai.matchMedia&&(e=Ai.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},x3={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},A3=[T5,u3,c3,h3,d3,v3,w3,E3,T3,S3,x3];M5(A3,{mixoutsTo:dn});dn.noAuto;dn.config;dn.library;dn.dom;const _g=dn.parse;dn.findIconDefinition;dn.toHtml;const b3=dn.icon;dn.layer;dn.text;dn.counter;function F1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Un(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?F1(Object(n),!0).forEach(function(r){_o(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Xh(t){"@babel/helpers - typeof";return Xh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xh(t)}function _o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function P3(t,e){if(t==null)return{};var n=R3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function vg(t){return k3(t)||C3(t)||N3(t)||D3()}function k3(t){if(Array.isArray(t))return wg(t)}function C3(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function N3(t,e){if(t){if(typeof t=="string")return wg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wg(t,e)}}function wg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function D3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O3(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,h=t.spinReverse,f=t.pulse,p=t.fixedWidth,g=t.inverse,I=t.border,A=t.listItem,P=t.flip,T=t.size,v=t.rotation,E=t.pull,k=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":h,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":p,"fa-inverse":g,"fa-border":I,"fa-li":A,"fa-flip":P===!0,"fa-flip-horizontal":P==="horizontal"||P==="both","fa-flip-vertical":P==="vertical"||P==="both"},_o(e,"fa-".concat(T),typeof T<"u"&&T!==null),_o(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),_o(e,"fa-pull-".concat(E),typeof E<"u"&&E!==null),_o(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(k).map(function(M){return k[M]?M:null}).filter(function(M){return M})}function V3(t){return t=t-0,t===t}function QR(t){return V3(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var L3=["style"];function M3(t){return t.charAt(0).toUpperCase()+t.slice(1)}function F3(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=QR(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[M3(i)]=s:e[i]=s,e},{})}function YR(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return YR(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var h=e.attributes[c];switch(c){case"class":l.attrs.className=h,delete e.attributes.class;break;case"style":l.attrs.style=F3(h);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=h:l.attrs[QR(c)]=h}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=P3(n,L3);return i.attrs.style=Un(Un({},i.attrs.style),o),t.apply(void 0,[e.tag,Un(Un({},i.attrs),a)].concat(vg(r)))}var XR=!1;try{XR=!0}catch{}function j3(){if(!XR&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function j1(t){if(t&&Xh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(_g.icon)return _g.icon(t);if(t===null)return null;if(t&&Xh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ep(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?_o({},t,e):{}}var U1={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Q_=Ce.forwardRef(function(t,e){var n=Un(Un({},U1),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,c=n.maskId,h=j1(r),f=Ep("classes",[].concat(vg(O3(n)),vg((o||"").split(" ")))),p=Ep("transform",typeof n.transform=="string"?_g.transform(n.transform):n.transform),g=Ep("mask",j1(i)),I=b3(h,Un(Un(Un(Un({},f),p),g),{},{symbol:s,title:a,titleId:l,maskId:c}));if(!I)return j3("Could not find icon",h),null;var A=I.abstract,P={ref:e};return Object.keys(n).forEach(function(T){U1.hasOwnProperty(T)||(P[T]=n[T])}),U3(A[0],P)});Q_.displayName="FontAwesomeIcon";Q_.propTypes={beat:Z.bool,border:Z.bool,beatFade:Z.bool,bounce:Z.bool,className:Z.string,fade:Z.bool,flash:Z.bool,mask:Z.oneOfType([Z.object,Z.array,Z.string]),maskId:Z.string,fixedWidth:Z.bool,inverse:Z.bool,flip:Z.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Z.oneOfType([Z.object,Z.array,Z.string]),listItem:Z.bool,pull:Z.oneOf(["right","left"]),pulse:Z.bool,rotation:Z.oneOf([0,90,180,270]),shake:Z.bool,size:Z.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Z.bool,spinPulse:Z.bool,spinReverse:Z.bool,symbol:Z.oneOfType([Z.bool,Z.string]),title:Z.string,titleId:Z.string,transform:Z.oneOfType([Z.string,Z.object]),swapOpacity:Z.bool};var U3=YR.bind(null,Ce.createElement);const z3={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]};var JR={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},z1=Ce.createContext&&Ce.createContext(JR),B3=["attr","size","title"];function $3(t,e){if(t==null)return{};var n=q3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function q3(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Jh(){return Jh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jh.apply(this,arguments)}function B1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Zh(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?B1(Object(n),!0).forEach(function(r){K3(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function K3(t,e,n){return e=G3(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function G3(t){var e=W3(t,"string");return typeof e=="symbol"?e:e+""}function W3(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ZR(t){return t&&t.map((e,n)=>Ce.createElement(e.tag,Zh({key:n},e.attr),ZR(e.child)))}function Jd(t){return e=>Ce.createElement(H3,Jh({attr:Zh({},t.attr)},e),ZR(t.child))}function H3(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=$3(t,B3),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Ce.createElement("svg",Jh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Zh(Zh({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Ce.createElement("title",null,s),t.children)};return z1!==void 0?Ce.createElement(z1.Consumer,null,n=>e(n)):e(JR)}function Q3(t){return Jd({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M380.44 32H64a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32V131.56zM112 176v-64h192v64zm223.91 179.76a80 80 0 1 1-83.66-83.67 80.21 80.21 0 0 1 83.66 83.67z"},child:[]}]})(t)}function Y3(t){return Jd({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"},child:[]}]})(t)}const eP=({task:t,toggleComplete:e,deleteTodo:n,editTodo:r})=>{const[i,s]=N.useState(!1),[o,a]=N.useState(t.text),l=()=>{s(!0)},c=()=>{s(!1),r(t.id,o)},h=f=>{f.key==="Enter"&&c()};return x.jsxs("div",{className:`Todo ${t.completed?"completed":""}`,children:[i?x.jsx("input",{type:"text",value:o,onChange:f=>a(f.target.value),onKeyPress:h,className:"edit-input"}):x.jsx("p",{onClick:()=>e(t.id,t.completed),children:t.text}),x.jsxs("div",{className:"icon-container",children:[i?x.jsx(Q3,{"aria-label":"Save Task",role:"button",tabIndex:0,onClick:f=>{f.stopPropagation(),c()}}):x.jsx(Y3,{"aria-label":"Edit Task",role:"button",tabIndex:0,onClick:f=>{f.stopPropagation(),l()}}),x.jsx(Q_,{icon:z3,"aria-label":"Delete Task",role:"button",tabIndex:0,onClick:f=>{f.stopPropagation(),n(t.id)}})]})]})};eP.propTypes={task:Z.shape({id:Z.string.isRequired,text:Z.string.isRequired,completed:Z.bool.isRequired}).isRequired,toggleComplete:Z.func.isRequired,deleteTodo:Z.func.isRequired,editTodo:Z.func.isRequired};const X3=({tasks:t,toggleComplete:e,deleteTodo:n,editTodo:r})=>x.jsx("div",{className:"task-list",children:t.map(i=>x.jsx(eP,{task:i,toggleComplete:e,deleteTodo:n,editTodo:r},i.id))}),tP=({className:t})=>{const[e,n]=N.useState([]);N.useEffect(()=>{const a=Si(en,"tasks"),l=uM(a,cM("timestamp","desc")),c=mM(l,h=>{const f=h.docs.map(p=>({id:p.id,...p.data()}));n(f)});return()=>c()},[]);const r=async a=>{const l={text:a,completed:!1,timestamp:new Date};try{await zd(Si(en,"tasks"),l),console.log("Task added:",l)}catch(c){console.error("Error adding task:",c)}},i=async(a,l)=>{try{const c=Kc(en,"tasks",a);await zE(c,{completed:!l}),console.log("Task updated:",a)}catch(c){console.error("Error updating task:",c)}},s=async a=>{try{const l=Kc(en,"tasks",a);await pM(l),console.log("Task deleted:",a)}catch(l){console.error("Error deleting task:",l)}},o=async(a,l)=>{try{const c=Kc(en,"tasks",a);await zE(c,{text:l}),console.log("Task edited:",a)}catch(c){console.error("Error editing task:",c)}};return x.jsxs("div",{className:`TodoWrapper ${t}`,children:[x.jsx("h1",{className:"mb-[9px] -mt-0.5",children:"Together We Achieve!"}),x.jsx(yR,{onSubmit:r}),x.jsx(X3,{tasks:e,toggleComplete:i,deleteTodo:s,editTodo:o})]})};tP.propTypes={className:Z.string};const J3=()=>{const[t,e]=N.useState({name:"",email:"",message:""}),n=r=>{const{name:i,value:s}=r.target;e(o=>({...o,[i]:s}))};return x.jsxs("div",{className:"p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto",children:[x.jsx("h2",{className:"text-2xl font-bold text-center mb-4 text-gray-800",children:"Get a free quote"}),x.jsx("p",{className:"text-center text-gray-600 mb-1",children:"For a price quote, simply fill out the following form with details about your query."}),x.jsxs("form",{action:"https://public.herotofu.com/v1/1f80fb50-9353-11ef-840d-9fdbf4f87a8b",method:"POST",acceptCharset:"UTF-8",className:"space-y-4",children:[x.jsxs("div",{children:[x.jsx("label",{htmlFor:"name",className:"block text-xs font-medium text-gray-700 text-left"}),x.jsx("input",{type:"text",name:"name",id:"name",value:t.name,onChange:n,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-500 focus:outline-none text-left",placeholder:"Wpisz swoje imię*"})]}),x.jsxs("div",{children:[x.jsx("label",{htmlFor:"email",className:"block text-xs font-medium text-gray-700 text-left"}),x.jsx("input",{type:"email",name:"email",id:"email",value:t.email,onChange:n,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-500 focus:outline-none",placeholder:"Wpisz swój email*"})]}),x.jsxs("div",{children:[x.jsx("label",{htmlFor:"message",className:"block text-xs font-medium text-gray-700"}),x.jsx("textarea",{name:"message",id:"message",value:t.message,onChange:n,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-1 focus:ring-2 focus:ring-blue-500 focus:outline-none",placeholder:"Napisz swoją wiadomość",rows:"4"})]}),x.jsx("button",{type:"submit",className:"w-1/2 bg-blue-600 text-white font-bold py-1 rounded hover:bg-blue-700 transition duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none ml-auto block",children:"Wyślij"}),x.jsx("div",{style:{textIndent:"-99999px",whiteSpace:"nowrap",overflow:"hidden",position:"absolute"},"aria-hidden":"true",children:x.jsx("input",{type:"text",name:"_gotcha",tabIndex:"-1",autoComplete:"off"})})]})]})};function Z3({as:t,bsPrefix:e,className:n,...r}){e=xt(e,"col");const i=vS(),s=wS(),o=[],a=[];return i.forEach(l=>{const c=r[l];delete r[l];let h,f,p;typeof c=="object"&&c!=null?{span:h,offset:f,order:p}=c:h=c;const g=l!==s?`-${l}`:"";h&&o.push(h===!0?`${e}${g}`:`${e}${g}-${h}`),p!=null&&a.push(`order${g}-${p}`),f!=null&&a.push(`offset${g}-${f}`)}),[{...r,className:We(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const il=N.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=Z3(t);return x.jsx(i,{...r,ref:e,className:We(n,!o.length&&s)})});il.displayName="Col";const nP=N.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=xt(t,"row"),o=vS(),a=wS(),l=`${s}-cols`,c=[];return o.forEach(h=>{const f=r[h];delete r[h];let p;f!=null&&typeof f=="object"?{cols:p}=f:p=f;const g=h!==a?`-${h}`:"";p!=null&&c.push(`${l}${g}-${p}`)}),x.jsx(n,{ref:i,...r,className:We(e,s,...c)})});nP.displayName="Row";function eU(){return x.jsxs("footer",{className:"text-center text-lg-start text-white",style:{backgroundColor:""},children:[x.jsxs("section",{className:"d-flex justify-content-between p-4",style:{backgroundColor:"#6351ce"},children:[x.jsx("div",{className:"me-5",children:x.jsx("span",{children:"Get connected with me on social networks:"})}),x.jsxs("div",{children:[x.jsx("a",{href:"#",className:"text-white me-4",children:x.jsx("i",{className:"fab fa-facebook-f"})}),x.jsx("a",{href:"#",className:"text-white me-4",children:x.jsx("i",{className:"fab fa-twitter"})}),x.jsx("a",{href:"#",className:"text-white me-4",children:x.jsx("i",{className:"fab fa-google"})}),x.jsx("a",{href:"#",className:"text-white me-4",children:x.jsx("i",{className:"fab fa-instagram"})}),x.jsx("a",{href:"#",className:"text-white me-4",children:x.jsx("i",{className:"fab fa-linkedin"})}),x.jsx("a",{href:"#",className:"text-white me-4",children:x.jsx("i",{className:"fab fa-github"})})]})]}),x.jsx("section",{children:x.jsx(Sy,{className:"text-center text-md-start mt-5",children:x.jsxs(nP,{className:"mt-3",children:[x.jsxs(il,{md:3,lg:4,xl:3,className:"mx-auto mb-4",children:[x.jsx("h6",{className:"text-uppercase fw-bold",children:"Maciej Liberadzki Gallery"}),x.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),x.jsx("p",{children:"The family gallery is a collection of cherished photos and memories that capture the most important moments of family life."})]}),x.jsxs(il,{md:2,lg:2,xl:2,className:"mx-auto mb-4",children:[x.jsx("h6",{className:"text-uppercase fw-bold",children:"Technologies used"}),x.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),x.jsx("p",{children:x.jsx("a",{href:"#!",className:"text-white",children:"CSS/Tailwind"})}),x.jsx("p",{children:x.jsx("a",{href:"#!",className:"text-white",children:"React"})}),x.jsx("p",{children:x.jsx("a",{href:"#!",className:"text-white",children:"Firebase"})}),x.jsx("p",{children:x.jsx("a",{href:"#!",className:"text-white",children:"Bootstrap"})}),x.jsx("p",{children:x.jsx("a",{href:"#!",className:"text-white",children:"Node.js"})})]}),x.jsxs(il,{md:3,lg:2,xl:2,className:"mx-auto mb-4",children:[x.jsx("h6",{className:"text-uppercase fw-bold",children:"Services"}),x.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),x.jsx("p",{children:x.jsx("a",{href:"#!",className:"text-white",children:"Support"})}),x.jsx("p",{children:x.jsx("a",{href:"#!",className:"text-white",children:"Website Maintenence"})}),x.jsx("p",{children:x.jsx("a",{href:"#!",className:"text-white",children:"Responsive Design"})}),x.jsx("p",{children:x.jsx("a",{href:"#!",className:"text-white",children:"Web Hosting Service"})}),x.jsx("p",{children:x.jsx("a",{href:"#!",className:"text-white",children:"Tailor-made solutions"})})]}),x.jsxs(il,{md:4,lg:3,xl:3,className:"mx-auto mb-md-0 mb-4",children:[x.jsx("h6",{className:"text-uppercase fw-bold",children:"Contact"}),x.jsx("hr",{className:"mb-4 mt-0 d-inline-block mx-auto",style:{width:"60px",backgroundColor:"#7c4dff",height:"2px"}}),x.jsxs("p",{children:[x.jsx("i",{className:"fas fa-home mr-3"})," Srebrzynska Park, Lodz, Poland"]}),x.jsxs("p",{children:[x.jsx("i",{className:"fas fa-envelope mr-3"})," LoremIpsum"]}),x.jsxs("p",{children:[x.jsx("i",{className:"fas fa-phone mr-3"})," + 01 234 567 88"]}),x.jsx("p",{children:x.jsx("i",{className:""})})]})]})})}),x.jsxs("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["© 2024 Designed by me",x.jsx("a",{className:"text-white",href:""})]})]})}function tU(){const[t,e]=N.useState(""),[n,r]=N.useState(window.innerWidth<=992);N.useEffect(()=>{const s=()=>{r(window.innerWidth<=992)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const i=s=>{if(s.preventDefault(),t.trim()==="")return;const o="https://www.google.com/search?q="+encodeURIComponent(t);window.open(o,"_blank"),e("")};return x.jsx("div",{className:"mx-auto",style:{width:"140px",marginBottom:n?"40px":"0px"},children:x.jsx("form",{onSubmit:i,children:x.jsx("input",{type:"text",placeholder:"Search anything...",className:"form-control","aria-label":"Search",value:t,onChange:s=>e(s.target.value),style:{height:"25px"}})})})}var xe="-ms-",Sl="-moz-",pe="-webkit-",rP="comm",Zd="rule",Y_="decl",nU="@import",iP="@keyframes",rU="@layer",sP=Math.abs,X_=String.fromCharCode,Eg=Object.assign;function iU(t,e){return ot(t,0)^45?(((e<<2^ot(t,0))<<2^ot(t,1))<<2^ot(t,2))<<2^ot(t,3):0}function oP(t){return t.trim()}function ar(t,e){return(t=e.exec(t))?t[0]:t}function ie(t,e,n){return t.replace(e,n)}function Zc(t,e,n){return t.indexOf(e,n)}function ot(t,e){return t.charCodeAt(e)|0}function Xo(t,e,n){return t.slice(e,n)}function zn(t){return t.length}function aP(t){return t.length}function sl(t,e){return e.push(t),t}function sU(t,e){return t.map(e).join("")}function $1(t,e){return t.filter(function(n){return!ar(n,e)})}var ef=1,Jo=1,lP=0,Tn=0,Qe=0,fa="";function tf(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:ef,column:Jo,length:o,return:"",siblings:a}}function $r(t,e){return Eg(tf("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Qs(t){for(;t.root;)t=$r(t.root,{children:[t]});sl(t,t.siblings)}function oU(){return Qe}function aU(){return Qe=Tn>0?ot(fa,--Tn):0,Jo--,Qe===10&&(Jo=1,ef--),Qe}function On(){return Qe=Tn<lP?ot(fa,Tn++):0,Jo++,Qe===10&&(Jo=1,ef++),Qe}function us(){return ot(fa,Tn)}function eh(){return Tn}function nf(t,e){return Xo(fa,t,e)}function Ig(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function lU(t){return ef=Jo=1,lP=zn(fa=t),Tn=0,[]}function uU(t){return fa="",t}function Ip(t){return oP(nf(Tn-1,Tg(t===91?t+2:t===40?t+1:t)))}function cU(t){for(;(Qe=us())&&Qe<33;)On();return Ig(t)>2||Ig(Qe)>3?"":" "}function hU(t,e){for(;--e&&On()&&!(Qe<48||Qe>102||Qe>57&&Qe<65||Qe>70&&Qe<97););return nf(t,eh()+(e<6&&us()==32&&On()==32))}function Tg(t){for(;On();)switch(Qe){case t:return Tn;case 34:case 39:t!==34&&t!==39&&Tg(Qe);break;case 40:t===41&&Tg(t);break;case 92:On();break}return Tn}function dU(t,e){for(;On()&&t+Qe!==57;)if(t+Qe===84&&us()===47)break;return"/*"+nf(e,Tn-1)+"*"+X_(t===47?t:On())}function fU(t){for(;!Ig(us());)On();return nf(t,Tn)}function pU(t){return uU(th("",null,null,null,[""],t=lU(t),0,[0],t))}function th(t,e,n,r,i,s,o,a,l){for(var c=0,h=0,f=o,p=0,g=0,I=0,A=1,P=1,T=1,v=0,E="",k=i,M=s,O=r,w=E;P;)switch(I=v,v=On()){case 40:if(I!=108&&ot(w,f-1)==58){Zc(w+=ie(Ip(v),"&","&\f"),"&\f",sP(c?a[c-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:w+=Ip(v);break;case 9:case 10:case 13:case 32:w+=cU(I);break;case 92:w+=hU(eh()-1,7);continue;case 47:switch(us()){case 42:case 47:sl(mU(dU(On(),eh()),e,n,l),l);break;default:w+="/"}break;case 123*A:a[c++]=zn(w)*T;case 125*A:case 59:case 0:switch(v){case 0:case 125:P=0;case 59+h:T==-1&&(w=ie(w,/\f/g,"")),g>0&&zn(w)-f&&sl(g>32?K1(w+";",r,n,f-1,l):K1(ie(w," ","")+";",r,n,f-2,l),l);break;case 59:w+=";";default:if(sl(O=q1(w,e,n,c,h,i,a,E,k=[],M=[],f,s),s),v===123)if(h===0)th(w,e,O,O,k,s,f,a,M);else switch(p===99&&ot(w,3)===110?100:p){case 100:case 108:case 109:case 115:th(t,O,O,r&&sl(q1(t,O,O,0,0,i,a,E,i,k=[],f,M),M),i,M,f,a,r?k:M);break;default:th(w,O,O,O,[""],M,0,a,M)}}c=h=g=0,A=T=1,E=w="",f=o;break;case 58:f=1+zn(w),g=I;default:if(A<1){if(v==123)--A;else if(v==125&&A++==0&&aU()==125)continue}switch(w+=X_(v),v*A){case 38:T=h>0?1:(w+="\f",-1);break;case 44:a[c++]=(zn(w)-1)*T,T=1;break;case 64:us()===45&&(w+=Ip(On())),p=us(),h=f=zn(E=w+=fU(eh())),v++;break;case 45:I===45&&zn(w)==2&&(A=0)}}return s}function q1(t,e,n,r,i,s,o,a,l,c,h,f){for(var p=i-1,g=i===0?s:[""],I=aP(g),A=0,P=0,T=0;A<r;++A)for(var v=0,E=Xo(t,p+1,p=sP(P=o[A])),k=t;v<I;++v)(k=oP(P>0?g[v]+" "+E:ie(E,/&\f/g,g[v])))&&(l[T++]=k);return tf(t,e,n,i===0?Zd:a,l,c,h,f)}function mU(t,e,n,r){return tf(t,e,n,rP,X_(oU()),Xo(t,2,-2),0,r)}function K1(t,e,n,r,i){return tf(t,e,n,Y_,Xo(t,0,r),Xo(t,r+1,-1),r,i)}function uP(t,e,n){switch(iU(t,e)){case 5103:return pe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+t+t;case 4789:return Sl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+t+Sl+t+xe+t+t;case 5936:switch(ot(t,e+11)){case 114:return pe+t+xe+ie(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return pe+t+xe+ie(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return pe+t+xe+ie(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return pe+t+xe+t+t;case 6165:return pe+t+xe+"flex-"+t+t;case 5187:return pe+t+ie(t,/(\w+).+(:[^]+)/,pe+"box-$1$2"+xe+"flex-$1$2")+t;case 5443:return pe+t+xe+"flex-item-"+ie(t,/flex-|-self/g,"")+(ar(t,/flex-|baseline/)?"":xe+"grid-row-"+ie(t,/flex-|-self/g,""))+t;case 4675:return pe+t+xe+"flex-line-pack"+ie(t,/align-content|flex-|-self/g,"")+t;case 5548:return pe+t+xe+ie(t,"shrink","negative")+t;case 5292:return pe+t+xe+ie(t,"basis","preferred-size")+t;case 6060:return pe+"box-"+ie(t,"-grow","")+pe+t+xe+ie(t,"grow","positive")+t;case 4554:return pe+ie(t,/([^-])(transform)/g,"$1"+pe+"$2")+t;case 6187:return ie(ie(ie(t,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),t,"")+t;case 5495:case 3959:return ie(t,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return ie(ie(t,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+t+t;case 4200:if(!ar(t,/flex-|baseline/))return xe+"grid-column-align"+Xo(t,e)+t;break;case 2592:case 3360:return xe+ie(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,ar(r.props,/grid-\w+-end/)})?~Zc(t+(n=n[e].value),"span",0)?t:xe+ie(t,"-start","")+t+xe+"grid-row-span:"+(~Zc(n,"span",0)?ar(n,/\d+/):+ar(n,/\d+/)-+ar(t,/\d+/))+";":xe+ie(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return ar(r.props,/grid-\w+-start/)})?t:xe+ie(ie(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ie(t,/(.+)-inline(.+)/,pe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zn(t)-1-e>6)switch(ot(t,e+1)){case 109:if(ot(t,e+4)!==45)break;case 102:return ie(t,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+Sl+(ot(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Zc(t,"stretch",0)?uP(ie(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ie(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return xe+i+":"+s+c+(o?xe+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(ot(t,e+6)===121)return ie(t,":",":"+pe)+t;break;case 6444:switch(ot(t,ot(t,14)===45?18:11)){case 120:return ie(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(ot(t,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+xe+"$2box$3")+t;case 100:return ie(t,":",":"+xe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(t,"scroll-","scroll-snap-")+t}return t}function ed(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function gU(t,e,n,r){switch(t.type){case rU:if(t.children.length)break;case nU:case Y_:return t.return=t.return||t.value;case rP:return"";case iP:return t.return=t.value+"{"+ed(t.children,r)+"}";case Zd:if(!zn(t.value=t.props.join(",")))return""}return zn(n=ed(t.children,r))?t.return=t.value+"{"+n+"}":""}function yU(t){var e=aP(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function _U(t){return function(e){e.root||(e=e.return)&&t(e)}}function vU(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Y_:t.return=uP(t.value,t.length,n);return;case iP:return ed([$r(t,{value:ie(t.value,"@","@"+pe)})],r);case Zd:if(t.length)return sU(n=t.props,function(i){switch(ar(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Qs($r(t,{props:[ie(i,/:(read-\w+)/,":"+Sl+"$1")]})),Qs($r(t,{props:[i]})),Eg(t,{props:$1(n,r)});break;case"::placeholder":Qs($r(t,{props:[ie(i,/:(plac\w+)/,":"+pe+"input-$1")]})),Qs($r(t,{props:[ie(i,/:(plac\w+)/,":"+Sl+"$1")]})),Qs($r(t,{props:[ie(i,/:(plac\w+)/,xe+"input-$1")]})),Qs($r(t,{props:[i]})),Eg(t,{props:$1(n,r)});break}return""})}}var wU={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jt={},Zo=typeof process<"u"&&Jt!==void 0&&(Jt.REACT_APP_SC_ATTR||Jt.SC_ATTR)||"data-styled",cP="active",hP="data-styled-version",rf="6.1.13",J_=`/*!sc*/
`,td=typeof window<"u"&&"HTMLElement"in window,EU=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==""?Jt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Jt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.SC_DISABLE_SPEEDY!==void 0&&Jt.SC_DISABLE_SPEEDY!==""&&Jt.SC_DISABLE_SPEEDY!=="false"&&Jt.SC_DISABLE_SPEEDY),sf=Object.freeze([]),ea=Object.freeze({});function IU(t,e,n){return n===void 0&&(n=ea),t.theme!==n.theme&&t.theme||e||n.theme}var dP=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),TU=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,SU=/(^-|-$)/g;function G1(t){return t.replace(TU,"-").replace(SU,"")}var xU=/(a)(d)/gi,Tc=52,W1=function(t){return String.fromCharCode(t+(t>25?39:97))};function Sg(t){var e,n="";for(e=Math.abs(t);e>Tc;e=e/Tc|0)n=W1(e%Tc)+n;return(W1(e%Tc)+n).replace(xU,"$1-$2")}var Tp,fP=5381,vo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},pP=function(t){return vo(fP,t)};function mP(t){return Sg(pP(t)>>>0)}function AU(t){return t.displayName||t.name||"Component"}function Sp(t){return typeof t=="string"&&!0}var gP=typeof Symbol=="function"&&Symbol.for,yP=gP?Symbol.for("react.memo"):60115,bU=gP?Symbol.for("react.forward_ref"):60112,RU={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},PU={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_P={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kU=((Tp={})[bU]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tp[yP]=_P,Tp);function H1(t){return("type"in(e=t)&&e.type.$$typeof)===yP?_P:"$$typeof"in t?kU[t.$$typeof]:RU;var e}var CU=Object.defineProperty,NU=Object.getOwnPropertyNames,Q1=Object.getOwnPropertySymbols,DU=Object.getOwnPropertyDescriptor,OU=Object.getPrototypeOf,Y1=Object.prototype;function vP(t,e,n){if(typeof e!="string"){if(Y1){var r=OU(e);r&&r!==Y1&&vP(t,r,n)}var i=NU(e);Q1&&(i=i.concat(Q1(e)));for(var s=H1(t),o=H1(e),a=0;a<i.length;++a){var l=i[a];if(!(l in PU||n&&n[l]||o&&l in o||s&&l in s)){var c=DU(e,l);try{CU(t,l,c)}catch{}}}}return t}function ta(t){return typeof t=="function"}function Z_(t){return typeof t=="object"&&"styledComponentId"in t}function ts(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function xg(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function au(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Ag(t,e,n){if(n===void 0&&(n=!1),!n&&!au(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Ag(t[r],e[r]);else if(au(e))for(var r in e)t[r]=Ag(t[r],e[r]);return t}function ev(t,e){Object.defineProperty(t,"toString",{value:e})}function Cu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var VU=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Cu(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(J_);return n},t}(),nh=new Map,nd=new Map,rh=1,Sc=function(t){if(nh.has(t))return nh.get(t);for(;nd.has(rh);)rh++;var e=rh++;return nh.set(t,e),nd.set(e,t),e},LU=function(t,e){rh=e+1,nh.set(t,e),nd.set(e,t)},MU="style[".concat(Zo,"][").concat(hP,'="').concat(rf,'"]'),FU=new RegExp("^".concat(Zo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jU=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},UU=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(J_),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(FU);if(l){var c=0|parseInt(l[1],10),h=l[2];c!==0&&(LU(h,c),jU(t,h,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},X1=function(t){for(var e=document.querySelectorAll(MU),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Zo)!==cP&&(UU(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function zU(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var wP=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Zo,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Zo,cP),r.setAttribute(hP,rf);var o=zU();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},BU=function(){function t(e){this.element=wP(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Cu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),$U=function(){function t(e){this.element=wP(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),qU=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),J1=td,KU={isServer:!td,useCSSOMInjection:!EU},EP=function(){function t(e,n,r){e===void 0&&(e=ea),n===void 0&&(n={});var i=this;this.options=Kt(Kt({},KU),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&td&&J1&&(J1=!1,X1(this)),ev(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(f){var p=function(T){return nd.get(T)}(f);if(p===void 0)return"continue";var g=s.names.get(p),I=o.getGroup(f);if(g===void 0||!g.size||I.length===0)return"continue";var A="".concat(Zo,".g").concat(f,'[id="').concat(p,'"]'),P="";g!==void 0&&g.forEach(function(T){T.length>0&&(P+="".concat(T,","))}),l+="".concat(I).concat(A,'{content:"').concat(P,'"}').concat(J_)},h=0;h<a;h++)c(h);return l}(i)})}return t.registerId=function(e){return Sc(e)},t.prototype.rehydrate=function(){!this.server&&td&&X1(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Kt(Kt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new qU(i):r?new BU(i):new $U(i)}(this.options),new VU(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Sc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Sc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Sc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),GU=/&/g,WU=/^\s*\/\/.*$/gm;function IP(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=IP(n.children,e)),n})}function HU(t){var e,n,r,i=ea,s=i.options,o=s===void 0?ea:s,a=i.plugins,l=a===void 0?sf:a,c=function(p,g,I){return I.startsWith(n)&&I.endsWith(n)&&I.replaceAll(n,"").length>0?".".concat(e):p},h=l.slice();h.push(function(p){p.type===Zd&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(GU,n).replace(r,c))}),o.prefix&&h.push(vU),h.push(gU);var f=function(p,g,I,A){g===void 0&&(g=""),I===void 0&&(I=""),A===void 0&&(A="&"),e=A,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var P=p.replace(WU,""),T=pU(I||g?"".concat(I," ").concat(g," { ").concat(P," }"):P);o.namespace&&(T=IP(T,o.namespace));var v=[];return ed(T,yU(h.concat(_U(function(E){return v.push(E)})))),v};return f.hash=l.length?l.reduce(function(p,g){return g.name||Cu(15),vo(p,g.name)},fP).toString():"",f}var QU=new EP,bg=HU(),TP=Ce.createContext({shouldForwardProp:void 0,styleSheet:QU,stylis:bg});TP.Consumer;Ce.createContext(void 0);function Z1(){return N.useContext(TP)}var SP=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=bg);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,ev(this,function(){throw Cu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=bg),this.name+e.hash},t}(),YU=function(t){return t>="A"&&t<="Z"};function eI(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;YU(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var xP=function(t){return t==null||t===!1||t===""},AP=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!xP(s)&&(Array.isArray(s)&&s.isCss||ta(s)?r.push("".concat(eI(i),":"),s,";"):au(s)?r.push.apply(r,nu(nu(["".concat(i," {")],AP(s),!1),["}"],!1)):r.push("".concat(eI(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in wU||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function cs(t,e,n,r){if(xP(t))return[];if(Z_(t))return[".".concat(t.styledComponentId)];if(ta(t)){if(!ta(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return cs(i,e,n,r)}var s;return t instanceof SP?n?(t.inject(n,r),[t.getName(r)]):[t]:au(t)?AP(t):Array.isArray(t)?Array.prototype.concat.apply(sf,t.map(function(o){return cs(o,e,n,r)})):[t.toString()]}function XU(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ta(n)&&!Z_(n))return!1}return!0}var JU=pP(rf),ZU=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&XU(e),this.componentId=n,this.baseHash=vo(JU,n),this.baseStyle=r,EP.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ts(i,this.staticRulesId);else{var s=xg(cs(this.rules,e,n,r)),o=Sg(vo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ts(i,o),this.staticRulesId=o}else{for(var l=vo(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")c+=f;else if(f){var p=xg(cs(f,e,n,r));l=vo(l,p+h),c+=p}}if(c){var g=Sg(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=ts(i,g)}}return i},t}(),bP=Ce.createContext(void 0);bP.Consumer;var xp={};function e9(t,e,n){var r=Z_(t),i=t,s=!Sp(t),o=e.attrs,a=o===void 0?sf:o,l=e.componentId,c=l===void 0?function(k,M){var O=typeof k!="string"?"sc":G1(k);xp[O]=(xp[O]||0)+1;var w="".concat(O,"-").concat(mP(rf+O+xp[O]));return M?"".concat(M,"-").concat(w):w}(e.displayName,e.parentComponentId):l,h=e.displayName,f=h===void 0?function(k){return Sp(k)?"styled.".concat(k):"Styled(".concat(AU(k),")")}(t):h,p=e.displayName&&e.componentId?"".concat(G1(e.displayName),"-").concat(e.componentId):e.componentId||c,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,I=e.shouldForwardProp;if(r&&i.shouldForwardProp){var A=i.shouldForwardProp;if(e.shouldForwardProp){var P=e.shouldForwardProp;I=function(k,M){return A(k,M)&&P(k,M)}}else I=A}var T=new ZU(n,p,r?i.componentStyle:void 0);function v(k,M){return function(O,w,y){var S=O.attrs,R=O.componentStyle,C=O.defaultProps,D=O.foldedComponentIds,b=O.styledComponentId,Je=O.target,jt=Ce.useContext(bP),pt=Z1(),qe=O.shouldForwardProp||pt.shouldForwardProp,z=IU(w,jt,C)||ea,Q=function(ge,Ke,mt){for(var rr,Yt=Kt(Kt({},Ke),{className:void 0,theme:mt}),fn=0;fn<ge.length;fn+=1){var Sn=ta(rr=ge[fn])?rr(Yt):rr;for(var At in Sn)Yt[At]=At==="className"?ts(Yt[At],Sn[At]):At==="style"?Kt(Kt({},Yt[At]),Sn[At]):Sn[At]}return Ke.className&&(Yt.className=ts(Yt.className,Ke.className)),Yt}(S,w,z),J=Q.as||Je,ue={};for(var re in Q)Q[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&Q.theme===z||(re==="forwardedAs"?ue.as=Q.forwardedAs:qe&&!qe(re,J)||(ue[re]=Q[re]));var fe=function(ge,Ke){var mt=Z1(),rr=ge.generateAndInjectStyles(Ke,mt.styleSheet,mt.stylis);return rr}(R,Q),Ze=ts(D,b);return fe&&(Ze+=" "+fe),Q.className&&(Ze+=" "+Q.className),ue[Sp(J)&&!dP.has(J)?"class":"className"]=Ze,ue.ref=y,N.createElement(J,ue)}(E,k,M)}v.displayName=f;var E=Ce.forwardRef(v);return E.attrs=g,E.componentStyle=T,E.displayName=f,E.shouldForwardProp=I,E.foldedComponentIds=r?ts(i.foldedComponentIds,i.styledComponentId):"",E.styledComponentId=p,E.target=r?i.target:t,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(M){for(var O=[],w=1;w<arguments.length;w++)O[w-1]=arguments[w];for(var y=0,S=O;y<S.length;y++)Ag(M,S[y],!0);return M}({},i.defaultProps,k):k}}),ev(E,function(){return".".concat(E.styledComponentId)}),s&&vP(E,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function tI(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var nI=function(t){return Object.assign(t,{isCss:!0})};function RP(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ta(t)||au(t))return nI(cs(tI(sf,nu([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?cs(r):nI(cs(tI(r,e)))}function Rg(t,e,n){if(n===void 0&&(n=ea),!e)throw Cu(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,RP.apply(void 0,nu([i],s,!1)))};return r.attrs=function(i){return Rg(t,e,Kt(Kt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Rg(t,e,Kt(Kt({},n),i))},r}var PP=function(t){return Rg(e9,t)},Ls=PP;dP.forEach(function(t){Ls[t]=PP(t)});function tv(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=xg(RP.apply(void 0,nu([t],e,!1))),i=mP(r);return new SP(i,r)}const t9="#4fa94d",n9={"aria-busy":!0,role:"progressbar"},r9=Ls.div`
  display: ${t=>t.$visible?"flex":"none"};
`,i9="http://www.w3.org/2000/svg",s9=({height:t=80,width:e=80,color:n=t9,ariaLabel:r="circles-loading",wrapperStyle:i,wrapperClass:s,visible:o=!0})=>x.jsx(r9,{style:i,$visible:o,className:s,"aria-label":r,"data-testid":"circles-loading",...n9,children:x.jsxs("svg",{width:e,height:t,viewBox:"0 0 135 135",xmlns:i9,fill:n,"data-testid":"circles-svg",children:[x.jsx("title",{children:"circles-loading"}),x.jsx("desc",{children:"Animated representation of circles"}),x.jsx("path",{d:"M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z",children:x.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"-360 67 67",dur:"2.5s",repeatCount:"indefinite"})}),x.jsx("path",{d:"M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z",children:x.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"360 67 67",dur:"8s",repeatCount:"indefinite"})})]})}),bn=242.776657104492,o9=1.6,a9=tv`
12.5% {
  stroke-dasharray: ${bn*.14}px, ${bn}px;
  stroke-dashoffset: -${bn*.11}px;
}
43.75% {
  stroke-dasharray: ${bn*.35}px, ${bn}px;
  stroke-dashoffset: -${bn*.35}px;
}
100% {
  stroke-dasharray: ${bn*.01}px, ${bn}px;
  stroke-dashoffset: -${bn*.99}px;
}
`;Ls.path`
  stroke-dasharray: ${bn*.01}px, ${bn};
  stroke-dashoffset: 0;
  animation: ${a9} ${o9}s linear infinite;
`;const l9=tv`
to {
   transform: rotate(360deg);
 }
`;Ls.svg`
  animation: ${l9} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;Ls.polyline`
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
`;const u9=tv`
to {
   stroke-dashoffset: 136;
 }
`;Ls.polygon`
  stroke-dasharray: 17;
  animation: ${u9} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;Ls.svg`
  transform-origin: 50% 65%;
`;function c9(t){return Jd({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(t)}function h9(t){return Jd({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(t)}function d9(){const[t,e]=N.useState([]),[n,r]=N.useState(""),[i,s]=N.useState(""),[o,a]=N.useState(!1);N.useEffect(()=>{(async()=>{try{const g=(await gb(Si(en,"posts"))).docs.map(I=>({id:I.id,...I.data()}));e(g)}catch(p){console.error("Błąd podczas pobierania danych:",p)}})()},[]);const l=f=>{var p;try{if(f.includes("youtu.be"))return`https://img.youtube.com/vi/${(p=f.split("youtu.be/")[1])==null?void 0:p.split("?")[0]}/hqdefault.jpg`;if(f.includes("youtube.com")){const I=new URL(f).searchParams.get("v");if(I)return`https://img.youtube.com/vi/${I}/hqdefault.jpg`}return null}catch(g){return console.error("Błąd podczas generowania miniaturki YouTube:",g),null}},c=async f=>{if(f.includes("youtube.com")||f.includes("youtu.be"))return l(f);try{const g=await(await fetch(`https://opengraph.io/api/1.1/site/${encodeURIComponent(f)}?app_id=74430628-2023-4e90-9d59-a4ff6779d48e`)).json();return console.log("OpenGraph response:",g),g.hybridGraph.image||null}catch(p){return console.error("Błąd podczas pobierania miniaturki:",p),null}},h=async f=>{if(f.preventDefault(),!n||!i){alert("Proszę wypełnić oba pola!");return}a(!0);try{const p=await c(i),g=await zd(Si(en,"posts"),{title:n,link:i,thumbnail:p});e(I=>[...I,{id:g.id,title:n,link:i,thumbnail:p}]),r(""),s(""),alert("Post został dodany!")}catch(p){console.error("Błąd podczas dodawania posta:",p)}finally{a(!1)}};return x.jsxs("div",{className:"recent-posts",children:[x.jsx("h3",{children:"Dodaj nowy post"}),x.jsxs("form",{onSubmit:h,children:[x.jsx("input",{type:"text",placeholder:"Tytuł posta",value:n,onChange:f=>r(f.target.value),required:!0}),x.jsx("input",{type:"url",placeholder:"Link do posta",value:i,onChange:f=>s(f.target.value),required:!0}),x.jsx("button",{type:"submit",disabled:o,children:o?"Dodawanie...":"Dodaj post"})]}),x.jsx("h3",{children:"Ostatnie posty"}),x.jsx("ul",{children:t.map(f=>x.jsxs("li",{style:{display:"flex",alignItems:"center",marginBottom:"15px"},children:[f.thumbnail&&x.jsx("img",{src:f.thumbnail,alt:f.title,style:{width:"100px",height:"100px",objectFit:"cover",marginRight:"10px",borderRadius:"8px"}}),x.jsx("a",{href:f.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"black"},children:x.jsx("h4",{style:{margin:0},children:f.title})})]},f.id))})]})}const ut=[];for(let t=0;t<256;++t)ut.push((t+256).toString(16).slice(1));function f9(t,e=0){return(ut[t[e+0]]+ut[t[e+1]]+ut[t[e+2]]+ut[t[e+3]]+"-"+ut[t[e+4]]+ut[t[e+5]]+"-"+ut[t[e+6]]+ut[t[e+7]]+"-"+ut[t[e+8]]+ut[t[e+9]]+"-"+ut[t[e+10]]+ut[t[e+11]]+ut[t[e+12]]+ut[t[e+13]]+ut[t[e+14]]+ut[t[e+15]]).toLowerCase()}let Ap;const p9=new Uint8Array(16);function m9(){if(!Ap){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Ap=crypto.getRandomValues.bind(crypto)}return Ap(p9)}const g9=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),rI={randomUUID:g9};function y9(t,e,n){var i;if(rI.randomUUID&&!e&&!t)return rI.randomUUID();t=t||{};const r=t.random??((i=t.rng)==null?void 0:i.call(t))??m9();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,f9(r)}async function kP(){try{const e=Au().currentUser;if(!e)return console.warn("⚠ Użytkownik nie jest zalogowany, zwracam pustą listę."),[];const r=(await gb(Si(en,"images"))).docs.filter(i=>i.data().userId===e.uid).map(i=>({id:i.id,...i.data()}));return console.log("📸 Zdjęcia pobrane z Firestore:",r),r}catch(t){return console.error("❌ Błąd pobierania obrazów:",t),[]}}async function CP(t){if(!t)throw new Error("❌ Brak pliku!");const n=Au().currentUser;if(!n)throw new Error("❌ Użytkownik niezalogowany!");const r=gR(),i=`${n.uid}-${y9()}-${t.name}`,s=Fj(r,`images/${n.uid}/${i}`),o=Lj(s,t);return new Promise((a,l)=>{o.on("state_changed",c=>{const h=c.bytesTransferred/c.totalBytes*100;console.log(`🚀 Upload ${h.toFixed(2)}% done`)},c=>{console.error("❌ Błąd przesyłania obrazu:",c),l(c)},async()=>{try{const c=await Mj(o.snapshot.ref);console.log("✅ URL obrazu:",c),await zd(Si(en,"images"),{userId:n.uid,imageUrl:c,createdAt:new Date}),a(c)}catch(c){console.error("❌ Błąd zapisu do Firestore:",c),l(c)}})})}const NP=N.createContext(null);function DP(){const t=N.useContext(NP);return console.log("useAuth() zwróciło:",t),t}const _9=()=>{const{user:t}=DP(),[e,n]=N.useState(null),[r,i]=N.useState([]),[s,o]=N.useState(!1);N.useEffect(()=>{a()},[]);const a=async()=>{try{const h=await kP();console.log("📸 Pobranie obrazów:",h),i(h)}catch(h){console.error("❌ Błąd pobierania obrazów:",h)}},l=h=>{h.target.files[0]&&n(h.target.files[0])},c=async()=>{if(!t){alert("Musisz być zalogowany, aby przesłać obraz!");return}if(!e){alert("Wybierz plik do przesłania!");return}o(!0);try{const h=await CP(e);alert("🎉 Obraz przesłany! URL: "+h),i(f=>[...f,{id:Date.now(),imageUrl:h}]),n(null),await a()}catch(h){console.error("❌ Błąd przesyłania obrazu:",h)}finally{o(!1)}};return x.jsxs("div",{className:"flex flex-col items-center justify-center p-6 bg-cover bg-center border-2 w-full max-w-lg mx-auto rounded-lg shadow-xl",children:[x.jsx("h1",{className:"text-3xl font-bold text-white mb-4",children:"📸 Prześlij zdjęcie"}),t?x.jsxs("div",{className:"flex flex-col items-center gap-3 bg-black/40 p-6 rounded-lg w-full",children:[x.jsx("input",{type:"file",onChange:l,className:"mb-2 border border-white p-2 rounded text-white bg-black w-full max-w-xs"}),x.jsx("button",{onClick:c,className:"bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition w-full max-w-xs",disabled:s,children:s?"⏳ Przesyłanie...":"🚀 Prześlij"})]}):x.jsx("p",{className:"text-yellow-400 text-lg font-bold flex items-center",children:"🔒 Musisz być zalogowany, aby przesyłać obrazy!"}),x.jsx("h2",{className:"text-xl font-bold text-white mt-4",children:"🖼 Zapisane obrazy:"}),x.jsx("div",{className:"flex flex-wrap gap-3 mt-4 justify-center w-full max-w-sm",children:r.length===0?x.jsx("p",{className:"text-gray-300",children:"Brak zapisanych obrazów."}):r.map(h=>x.jsx("img",{src:h.imageUrl,alt:"Zapisany obraz",className:"w-24 h-24 object-cover rounded-md border border-white shadow-lg"},h.id))})]})};function v9(){const{user:t,signIn:e}=DP()||{};console.log("🔍 useAuth() w Login.jsx zwróciło:",{user:t,signIn:e});const[n,r]=N.useState(""),[i,s]=N.useState("");N.useEffect(()=>{t&&(console.log("🔄 user został zaktualizowany:",t),setTimeout(()=>{window.user=t,console.log("✅ window.user ustawiony:",window.user)},500))},[t]);const o=async a=>{if(a.preventDefault(),!e){console.error("❌ Błąd: signIn nie istnieje w useAuth()");return}console.log("🔍 Próba logowania...");try{const l=await e(n,i);console.log("✅ Użytkownik zalogowany:",l==null?void 0:l.user)}catch(l){console.error("❌ Błąd logowania:",l.message)}};return x.jsxs("div",{className:"flex flex-col items-center justify-center",children:[x.jsx("h2",{className:"text-xl mb-4",children:"Zaloguj się"}),x.jsxs("form",{onSubmit:o,className:"flex flex-col gap-2",children:[x.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:a=>r(a.target.value),className:"border p-2 rounded"}),x.jsx("input",{type:"password",placeholder:"Hasło",value:i,onChange:a=>s(a.target.value),className:"border p-2 rounded"}),x.jsx("button",{type:"submit",className:"bg-blue-500 text-white p-2 rounded",children:"Zaloguj"})]})]})}function OP({children:t}){const[e,n]=N.useState(null),r=Au();N.useEffect(()=>{console.log("✅ AuthProvider zamontowany!");const o=mF(r,a=>{n(a)});return()=>o()},[r]);const i=async(o,a)=>{try{const l=await dF(r,o,a);console.log("✅ Zalogowano:",l.user),n(l.user)}catch(l){console.error("❌ Błąd logowania:",l.message)}},s=async()=>{console.log("🔍 Wylogowanie użytkownika...");try{await gF(r),console.log("🚪 Wylogowano!")}catch(o){console.error("❌ Błąd wylogowania:",o.message)}};return console.log("✅ Przekazywane wartości w AuthProvider:",{user:e,signIn:i,signOutUser:s}),console.log("✅ AuthProvider renderuje się! user:",e),console.log("✅ AuthProvider przekazuje: ",{user:e,signIn:i,signOutUser:s}),x.jsx(NP.Provider,{value:{user:e,signIn:i,signOutUser:s},children:t})}OP.propTypes={children:Z.node.isRequired};const w9=()=>{const[t,e]=N.useState([]);N.useEffect(()=>{async function r(){const i=await kP();e(i)}r()},[]);const n=async r=>{const i=r.target.files[0];if(i)try{const s=await CP(i);e(o=>[...o,{id:s,imageUrl:s}])}catch(s){console.error("❌ Błąd przesyłania pliku:",s)}};return x.jsxs("div",{children:[x.jsx("h2",{children:"📷 Moja Galeria"}),x.jsx("input",{type:"file",onChange:n,accept:"image/*"}),t.length>0?t.map(r=>x.jsx("img",{src:r.imageUrl,alt:"Obraz",width:"200"},r.id)):x.jsx("p",{children:"Brak obrazów do wyświetlenia."})]})},E9={BASE_URL:"/gallery/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyB5QFjl6jvIKBCRn12esrOba58STMP9dM0",VITE_FIREBASE_APP_ID:"1:789024046392:web:26d9e3195917ed28e515cd",VITE_FIREBASE_AUTH_DOMAIN:"galeriazdjec-f4180.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-WX9ZBHXLSD",VITE_FIREBASE_MESSAGING_SENDER_ID:"789024046392",VITE_FIREBASE_PROJECT_ID:"galeriazdjec-f4180",VITE_FIREBASE_STORAGE_BUCKET:"galeriazdjec-f4180.appspot.com"},I9="/gallery/assets/video/api.json";function T9(){var I,A;const[t,e]=N.useState([]),[n,r]=N.useState(0),[i,s]=N.useState(!1),o=N.useRef(),[a,l]=N.useState(window.innerWidth<=992),[c,h]=N.useState(!0),[f,p]=N.useState(!1);N.useState(null),Au(),N.useEffect(()=>{console.log("Fetching videos from API..."),fetch(I9).then(P=>P.json()).then(P=>e(P)).catch(P=>console.error("Failed to fetch videos:",P)).finally(()=>h(!1)),console.log("Firebase API Key:","AIzaSyB5QFjl6jvIKBCRn12esrOba58STMP9dM0"),console.log("All env variables:",E9)},[]),N.useEffect(()=>{var P;t.length>0&&o.current&&(o.current.src=(P=t[n])==null?void 0:P.video,o.current.load(),s(!1))},[t,n]),N.useEffect(()=>{const P=()=>{l(window.innerWidth<=992)};return window.addEventListener("resize",P),()=>{window.removeEventListener("resize",P)}},[]);const g=()=>{s(P=>!P)};return t.length<1?x.jsx("div",{children:"Loading..."}):c?x.jsx("div",{className:"flex justify-center items-center min-h-screen",style:{backgroundColor:"black",color:"white"},children:x.jsx(s9,{color:"#00BFFF",height:80,width:80})}):(console.log("Firebase API Key:","AIzaSyB5QFjl6jvIKBCRn12esrOba58STMP9dM0"),console.log("Firebase Config:",{apiKey:"AIzaSyB5QFjl6jvIKBCRn12esrOba58STMP9dM0",authDomain:"galeriazdjec-f4180.firebaseapp.com",projectId:"galeriazdjec-f4180"}),x.jsx(OP,{children:x.jsxs("div",{style:{backgroundImage:'url("https://raw.githubusercontent.com/wolczan/gallery/main/public/back.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",backgroundAttachment:"fixed"},children:[x.jsx(dc,{expand:"lg",collapseOnSelect:!0,className:"navbar-custom",style:{height:"40px",backgroundColor:"black",color:"white"},children:x.jsxs(Sy,{className:"justify-content-between d-flex custom-margin-top",style:{alignItems:"baseline",backgroundColor:""},children:[x.jsxs(dc.Brand,{href:"#home",style:{fontSize:"17px",color:"white"},children:[x.jsx("img",{src:"https://raw.githubusercontent.com/wolczan/gallery/refs/heads/main/napis.webp",width:"35",height:"50",className:"d-inline-block",alt:""}),"Gallery"]}),x.jsx(tU,{}),x.jsx(dc.Toggle,{"aria-controls":"responsive-navbar-nav",style:{paddingBottom:"0px",alignItems:"center",backgroundColor:"white"}}),x.jsx(dc.Collapse,{id:"responsive-navbar-nav",style:{backgroundColor:"black",opacity:1,padding:"0px"},children:x.jsxs(Fn,{className:"mx-auto",children:[x.jsx(Fn.Link,{href:"#home",className:"nav-link-custom",children:"Home"}),x.jsx(Fn.Link,{href:"#about",className:"nav-link-custom",children:"About"}),x.jsx(Fn.Link,{href:"#pricing",className:"nav-link-custom",children:"Films"}),x.jsx(Fn.Link,{href:"#features",className:"nav-link-custom",children:"Images"}),x.jsx(Fn.Link,{href:"#pricing",className:"nav-link-custom",children:"My List"}),x.jsx(Fn.Link,{href:"#pricing",className:"nav-link-custom",children:"Latest"}),x.jsx(Fn.Link,{href:"#pricing",className:"nav-link-custom",children:"Contact"}),x.jsx(Fn.Link,{onClick:()=>p(!0),className:"nav-link-custom btn btn-custom",children:"Sign In"}),x.jsx(Fn.Link,{href:"#signup",className:"nav-link-custom btn btn-custom",children:"Sign Up"})]})})]})}),f&&x.jsx(v9,{onClose:()=>p(!1)}),x.jsx("div",{className:"text-white flex items-center justify-center",children:x.jsxs("section",{className:"flex flex-row items-center space-x-2 p-1 w-full mt-4 mb-4 ",style:{justifyContent:"space-evenly"},children:[x.jsx(tP,{className:"flex-shrink-0 w-[25%] sm:w-[30%] lg:w-[25%] p-1 rounded-lg todo-wrapper-shadow relative z-10"}),x.jsx("div",{className:"flex-shrink-0 w-[15%] sm:w-[20%] lg:w-[11%] flex items-center justify-center border-1 rounded-lg shadow-2xl shadow-white bg-black",children:i&&t.length>0?x.jsx("video",{ref:o,src:(I=t[n])==null?void 0:I.video,className:"object-cover rounded-lg w-full h-full border-1",controls:!0,autoPlay:!0,style:{width:"150px",height:"260px"}}):x.jsx("img",{src:(A=t[n])==null?void 0:A.cover,alt:"Video cover",style:{width:"150px",height:"260px"},className:"hover-enlarge object-cover rounded-lg w-full h-full"})})]})}),x.jsxs("div",{className:"relative z-10 p-1 rounded bg-black text-white border-1 flex flex-col justify-between",style:{minHeight:"120px",maxWidth:"400px",width:"100%",margin:"auto",boxShadow:"10px 15px 80px -5px rgba(0, 0, 0, 0.7)"},children:[x.jsxs("div",{children:[x.jsx("h2",{style:{fontSize:"1rem",fontWeight:"bold",color:"white"},className:"text-2xl font-bold text-white",children:t[n].title}),x.jsx("p",{className:"text-white",children:t[n].description})]}),x.jsx("div",{className:"flex justify-end mt-auto",children:x.jsx("button",{onClick:g,className:"relative bg-gradient-to-r from-red-600 via-pink-500 to-red-600 hover:from-red-500 hover:via-orange-400 hover:to-red-500 active:from-red-700 active:via-pink-600 active:to-red-700 text-white py-1 px-4 rounded-full m-2 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95",style:{border:"2px solid rgba(255, 255, 255, 0.4)",boxShadow:"0 0 15px rgba(255, 0, 0, 0.8)",color:"white"},children:i?x.jsx(c9,{}):x.jsx(h9,{})})})]}),x.jsxs("section",{className:"flex flex-col items-center",children:[x.jsx("h1",{className:"heading-reset text-4xl md:text-5xl font-extrabold text-center mt-12 text-white drop-shadow-lg tracking-wide",children:"Browse Library"}),x.jsx("div",{className:"flex flex-wrap justify-center items-center p-4 max-w-screen-lg mx-auto ",children:t.map((P,T)=>x.jsx("div",{onClick:()=>r(T),className:`hover-enlarge border-1 m-2 rounded-lg overflow-hidden cursor-pointer ${n===T?"border-4 border-blue-500":""}`,style:{width:"129px",height:"170px",borderRadius:"6px"},children:x.jsx("img",{src:P.cover,className:"object-cover w-full h-full rounded-lg",alt:P.title})},P.id))})]}),x.jsxs("div",{className:"p-4 max-w-screen-sm mx-auto  sm:space-x-0 sm:space-y-1 custom-container",children:[x.jsxs("div",{className:"w-full mt-4 mx-auto",children:[" ",x.jsx(J3,{})]}),x.jsx("div",{className:"w-full map-container  mx-auto",children:x.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.374953124007!2d19.395962676321443!3d51.75924867968213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a3460d27d2c89%3A0x4a2f25c77f622a88!2s%C5%81%C3%B3d%C5%BA%2094-203%2C%20Poland!5e0!3m2!1sen!2sus!4v1698609072847!5m2!1sen!2sus",width:"450",height:"380",style:{border:0},allowFullScreen:"",loading:"lazy",title:"Google Map - Łódź 94-203"})})]}),x.jsx(_9,{}),x.jsx(w9,{}),x.jsx(d9,{}),x.jsx(eU,{})]})}))}console.log("Starting application...");bp.createRoot(document.getElementById("root")).render(x.jsx(Ce.StrictMode,{children:x.jsx(T9,{})}));console.log("Application started.");
