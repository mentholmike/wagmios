(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ia(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const nt={},er=[],fn=()=>{},_d=()=>!1,eo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Na=n=>n.startsWith("onUpdate:"),_t=Object.assign,Fa=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},vd=Object.prototype.hasOwnProperty,Je=(n,e)=>vd.call(n,e),Ue=Array.isArray,tr=n=>es(n)==="[object Map]",vr=n=>es(n)==="[object Set]",cl=n=>es(n)==="[object Date]",Be=n=>typeof n=="function",dt=n=>typeof n=="string",bn=n=>typeof n=="symbol",rt=n=>n!==null&&typeof n=="object",Mu=n=>(rt(n)||Be(n))&&Be(n.then)&&Be(n.catch),Su=Object.prototype.toString,es=n=>Su.call(n),xd=n=>es(n).slice(8,-1),yu=n=>es(n)==="[object Object]",Oa=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ir=Ia(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),to=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Md=/-(\w)/g,ii=to(n=>n.replace(Md,(e,t)=>t?t.toUpperCase():"")),Sd=/\B([A-Z])/g,Ui=to(n=>n.replace(Sd,"-$1").toLowerCase()),Eu=to(n=>n.charAt(0).toUpperCase()+n.slice(1)),So=to(n=>n?`on${Eu(n)}`:""),ti=(n,e)=>!Object.is(n,e),Is=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},bu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Hs=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ul;const no=()=>ul||(ul=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nr(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=dt(i)?Td(i):nr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(dt(n)||rt(n))return n}const yd=/;(?![^(]*\))/g,Ed=/:([^]+)/,bd=/\/\*[^]*?\*\//g;function Td(n){const e={};return n.replace(bd,"").split(yd).forEach(t=>{if(t){const i=t.split(Ed);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Sn(n){let e="";if(dt(n))e=n;else if(Ue(n))for(let t=0;t<n.length;t++){const i=Sn(n[t]);i&&(e+=i+" ")}else if(rt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const wd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ad=Ia(wd);function Tu(n){return!!n||n===""}function Rd(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=ts(n[i],e[i]);return t}function ts(n,e){if(n===e)return!0;let t=cl(n),i=cl(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=bn(n),i=bn(e),t||i)return n===e;if(t=Ue(n),i=Ue(e),t||i)return t&&i?Rd(n,e):!1;if(t=rt(n),i=rt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!ts(n[a],e[a]))return!1}}return String(n)===String(e)}function Ba(n,e){return n.findIndex(t=>ts(t,e))}const wu=n=>!!(n&&n.__v_isRef===!0),$e=n=>dt(n)?n:n==null?"":Ue(n)||rt(n)&&(n.toString===Su||!Be(n.toString))?wu(n)?$e(n.value):JSON.stringify(n,Au,2):String(n),Au=(n,e)=>wu(e)?Au(n,e.value):tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[yo(i,s)+" =>"]=r,t),{})}:vr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>yo(t))}:bn(e)?yo(e):rt(e)&&!Ue(e)&&!yu(e)?String(e):e,yo=(n,e="")=>{var t;return bn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vt;class Ru{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Vt,!e&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Vt;try{return Vt=this,e()}finally{Vt=t}}}on(){Vt=this}off(){Vt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Cd(n){return new Ru(n)}function Pd(){return Vt}let it;const Eo=new WeakSet;class Cu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Vt&&Vt.active&&Vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Eo.has(this)&&(Eo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,fl(this),Uu(this);const e=it,t=dn;it=this,dn=!0;try{return this.fn()}finally{Du(this),it=e,dn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ha(e);this.deps=this.depsTail=void 0,fl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Eo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fa(this)&&this.run()}get dirty(){return fa(this)}}let Pu=0,Nr,Fr;function Lu(n,e=!1){if(n.flags|=8,e){n.next=Fr,Fr=n;return}n.next=Nr,Nr=n}function za(){Pu++}function ka(){if(--Pu>0)return;if(Fr){let e=Fr;for(Fr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Nr;){let e=Nr;for(Nr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Uu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Du(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ha(i),Ld(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function fa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Iu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Iu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Vr))return;n.globalVersion=Vr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!fa(n)){n.flags&=-3;return}const t=it,i=dn;it=n,dn=!0;try{Uu(n);const r=n.fn(n._value);(e.version===0||ti(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{it=t,dn=i,Du(n),n.flags&=-3}}function Ha(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ha(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ld(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let dn=!0;const Nu=[];function si(){Nu.push(dn),dn=!1}function oi(){const n=Nu.pop();dn=n===void 0?!0:n}function fl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=it;it=void 0;try{e()}finally{it=t}}}let Vr=0;class Ud{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ga{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!it||!dn||it===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==it)t=this.activeLink=new Ud(it,this),it.deps?(t.prevDep=it.depsTail,it.depsTail.nextDep=t,it.depsTail=t):it.deps=it.depsTail=t,Fu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=it.depsTail,t.nextDep=void 0,it.depsTail.nextDep=t,it.depsTail=t,it.deps===t&&(it.deps=i)}return t}trigger(e){this.version++,Vr++,this.notify(e)}notify(e){za();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ka()}}}function Fu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Fu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const da=new WeakMap,Ei=Symbol(""),ha=Symbol(""),Wr=Symbol("");function bt(n,e,t){if(dn&&it){let i=da.get(n);i||da.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ga),r.map=i,r.key=t),r.track()}}function On(n,e,t,i,r,s){const a=da.get(n);if(!a){Vr++;return}const o=l=>{l&&l.trigger()};if(za(),e==="clear")a.forEach(o);else{const l=Ue(n),c=l&&Oa(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===Wr||!bn(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Wr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Ei)),tr(n)&&o(a.get(ha)));break;case"delete":l||(o(a.get(Ei)),tr(n)&&o(a.get(ha)));break;case"set":tr(n)&&o(a.get(Ei));break}}ka()}function Di(n){const e=Ze(n);return e===n?e:(bt(e,"iterate",Wr),tn(n)?e:e.map(Tt))}function io(n){return bt(n=Ze(n),"iterate",Wr),n}const Dd={__proto__:null,[Symbol.iterator](){return bo(this,Symbol.iterator,Tt)},concat(...n){return Di(this).concat(...n.map(e=>Ue(e)?Di(e):e))},entries(){return bo(this,"entries",n=>(n[1]=Tt(n[1]),n))},every(n,e){return An(this,"every",n,e,void 0,arguments)},filter(n,e){return An(this,"filter",n,e,t=>t.map(Tt),arguments)},find(n,e){return An(this,"find",n,e,Tt,arguments)},findIndex(n,e){return An(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return An(this,"findLast",n,e,Tt,arguments)},findLastIndex(n,e){return An(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return An(this,"forEach",n,e,void 0,arguments)},includes(...n){return To(this,"includes",n)},indexOf(...n){return To(this,"indexOf",n)},join(n){return Di(this).join(n)},lastIndexOf(...n){return To(this,"lastIndexOf",n)},map(n,e){return An(this,"map",n,e,void 0,arguments)},pop(){return Er(this,"pop")},push(...n){return Er(this,"push",n)},reduce(n,...e){return dl(this,"reduce",n,e)},reduceRight(n,...e){return dl(this,"reduceRight",n,e)},shift(){return Er(this,"shift")},some(n,e){return An(this,"some",n,e,void 0,arguments)},splice(...n){return Er(this,"splice",n)},toReversed(){return Di(this).toReversed()},toSorted(n){return Di(this).toSorted(n)},toSpliced(...n){return Di(this).toSpliced(...n)},unshift(...n){return Er(this,"unshift",n)},values(){return bo(this,"values",Tt)}};function bo(n,e,t){const i=io(n),r=i[e]();return i!==n&&!tn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Id=Array.prototype;function An(n,e,t,i,r,s){const a=io(n),o=a!==n&&!tn(n),l=a[e];if(l!==Id[e]){const f=l.apply(n,s);return o?Tt(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,Tt(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function dl(n,e,t,i){const r=io(n);let s=t;return r!==n&&(tn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,Tt(o),l,n)}),r[e](s,...i)}function To(n,e,t){const i=Ze(n);bt(i,"iterate",Wr);const r=i[e](...t);return(r===-1||r===!1)&&Xa(t[0])?(t[0]=Ze(t[0]),i[e](...t)):r}function Er(n,e,t=[]){si(),za();const i=Ze(n)[e].apply(n,t);return ka(),oi(),i}const Nd=Ia("__proto__,__v_isRef,__isVue"),Ou=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(bn));function Fd(n){bn(n)||(n=String(n));const e=Ze(this);return bt(e,"has",n),e.hasOwnProperty(n)}class Bu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?$d:Gu:s?Hu:ku).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ue(e);if(!r){let l;if(a&&(l=Dd[t]))return l;if(t==="hasOwnProperty")return Fd}const o=Reflect.get(e,t,Rt(e)?e:i);return(bn(t)?Ou.has(t):Nd(t))||(r||bt(e,"get",t),s)?o:Rt(o)?a&&Oa(t)?o:o.value:rt(o)?r?Wu(o):ro(o):o}}class zu extends Bu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Ai(s);if(!tn(i)&&!Ai(i)&&(s=Ze(s),i=Ze(i)),!Ue(e)&&Rt(s)&&!Rt(i))return l?!1:(s.value=i,!0)}const a=Ue(e)&&Oa(t)?Number(t)<e.length:Je(e,t),o=Reflect.set(e,t,i,Rt(e)?e:r);return e===Ze(r)&&(a?ti(i,s)&&On(e,"set",t,i):On(e,"add",t,i)),o}deleteProperty(e,t){const i=Je(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&On(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!bn(t)||!Ou.has(t))&&bt(e,"has",t),i}ownKeys(e){return bt(e,"iterate",Ue(e)?"length":Ei),Reflect.ownKeys(e)}}class Od extends Bu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Bd=new zu,zd=new Od,kd=new zu(!0);const pa=n=>n,cs=n=>Reflect.getPrototypeOf(n);function Hd(n,e,t){return function(...i){const r=this.__v_raw,s=Ze(r),a=tr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?pa:e?ma:Tt;return!e&&bt(s,"iterate",l?ha:Ei),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function us(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Gd(n,e){const t={get(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);n||(ti(r,o)&&bt(a,"get",r),bt(a,"get",o));const{has:l}=cs(a),c=e?pa:n?ma:Tt;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&bt(Ze(r),"iterate",Ei),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);return n||(ti(r,o)&&bt(a,"has",r),bt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Ze(o),c=e?pa:n?ma:Tt;return!n&&bt(l,"iterate",Ei),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return _t(t,n?{add:us("add"),set:us("set"),delete:us("delete"),clear:us("clear")}:{add(r){!e&&!tn(r)&&!Ai(r)&&(r=Ze(r));const s=Ze(this);return cs(s).has.call(s,r)||(s.add(r),On(s,"add",r,r)),this},set(r,s){!e&&!tn(s)&&!Ai(s)&&(s=Ze(s));const a=Ze(this),{has:o,get:l}=cs(a);let c=o.call(a,r);c||(r=Ze(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?ti(s,u)&&On(a,"set",r,s):On(a,"add",r,s),this},delete(r){const s=Ze(this),{has:a,get:o}=cs(s);let l=a.call(s,r);l||(r=Ze(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&On(s,"delete",r,void 0),c},clear(){const r=Ze(this),s=r.size!==0,a=r.clear();return s&&On(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Hd(r,n,e)}),t}function Va(n,e){const t=Gd(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Je(t,r)&&r in i?t:i,r,s)}const Vd={get:Va(!1,!1)},Wd={get:Va(!1,!0)},Xd={get:Va(!0,!1)};const ku=new WeakMap,Hu=new WeakMap,Gu=new WeakMap,$d=new WeakMap;function jd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qd(n){return n.__v_skip||!Object.isExtensible(n)?0:jd(xd(n))}function ro(n){return Ai(n)?n:Wa(n,!1,Bd,Vd,ku)}function Vu(n){return Wa(n,!1,kd,Wd,Hu)}function Wu(n){return Wa(n,!0,zd,Xd,Gu)}function Wa(n,e,t,i,r){if(!rt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=qd(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function ir(n){return Ai(n)?ir(n.__v_raw):!!(n&&n.__v_isReactive)}function Ai(n){return!!(n&&n.__v_isReadonly)}function tn(n){return!!(n&&n.__v_isShallow)}function Xa(n){return n?!!n.__v_raw:!1}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function Xu(n){return!Je(n,"__v_skip")&&Object.isExtensible(n)&&bu(n,"__v_skip",!0),n}const Tt=n=>rt(n)?ro(n):n,ma=n=>rt(n)?Wu(n):n;function Rt(n){return n?n.__v_isRef===!0:!1}function Ye(n){return $u(n,!1)}function Yd(n){return $u(n,!0)}function $u(n,e){return Rt(n)?n:new Kd(n,e)}class Kd{constructor(e,t){this.dep=new Ga,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ze(e),this._value=t?e:Tt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||tn(e)||Ai(e);e=i?e:Ze(e),ti(e,t)&&(this._rawValue=e,this._value=i?e:Tt(e),this.dep.trigger())}}function rr(n){return Rt(n)?n.value:n}const Zd={get:(n,e,t)=>e==="__v_raw"?n:rr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Rt(r)&&!Rt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function ju(n){return ir(n)?n:new Proxy(n,Zd)}class Jd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ga(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&it!==this)return Lu(this,!0),!0}get value(){const e=this.dep.track();return Iu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qd(n,e,t=!1){let i,r;return Be(n)?i=n:(i=n.get,r=n.set),new Jd(i,r,t)}const fs={},Gs=new WeakMap;let gi;function eh(n,e=!1,t=gi){if(t){let i=Gs.get(t);i||Gs.set(t,i=[]),i.push(n)}}function th(n,e,t=nt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=w=>r?w:tn(w)||r===!1||r===0?Bn(w,1):Bn(w);let u,f,d,p,_=!1,g=!1;if(Rt(n)?(f=()=>n.value,_=tn(n)):ir(n)?(f=()=>c(n),_=!0):Ue(n)?(g=!0,_=n.some(w=>ir(w)||tn(w)),f=()=>n.map(w=>{if(Rt(w))return w.value;if(ir(w))return c(w);if(Be(w))return l?l(w,2):w()})):Be(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){si();try{d()}finally{oi()}}const w=gi;gi=u;try{return l?l(n,3,[p]):n(p)}finally{gi=w}}:f=fn,e&&r){const w=f,T=r===!0?1/0:r;f=()=>Bn(w(),T)}const m=Pd(),h=()=>{u.stop(),m&&m.active&&Fa(m.effects,u)};if(s&&e){const w=e;e=(...T)=>{w(...T),h()}}let E=g?new Array(n.length).fill(fs):fs;const y=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(e){const T=u.run();if(r||_||(g?T.some((C,P)=>ti(C,E[P])):ti(T,E))){d&&d();const C=gi;gi=u;try{const P=[T,E===fs?void 0:g&&E[0]===fs?[]:E,p];l?l(e,3,P):e(...P),E=T}finally{gi=C}}}else u.run()};return o&&o(y),u=new Cu(f),u.scheduler=a?()=>a(y,!1):y,p=w=>eh(w,!1,u),d=u.onStop=()=>{const w=Gs.get(u);if(w){if(l)l(w,4);else for(const T of w)T();Gs.delete(u)}},e?i?y(!0):E=u.run():a?a(y.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Bn(n,e=1/0,t){if(e<=0||!rt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Rt(n))Bn(n.value,e,t);else if(Ue(n))for(let i=0;i<n.length;i++)Bn(n[i],e,t);else if(vr(n)||tr(n))n.forEach(i=>{Bn(i,e,t)});else if(yu(n)){for(const i in n)Bn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Bn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ns(n,e,t,i){try{return i?n(...i):n()}catch(r){so(r,e,t)}}function Tn(n,e,t,i){if(Be(n)){const r=ns(n,e,t,i);return r&&Mu(r)&&r.catch(s=>{so(s,e,t)}),r}if(Ue(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Tn(n[s],e,t,i));return r}}function so(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||nt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){si(),ns(s,null,10,[n,l,c]),oi();return}}nh(n,t,r,i,a)}function nh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const It=[];let _n=-1;const sr=[];let Zn=null,Ki=0;const qu=Promise.resolve();let Vs=null;function $a(n){const e=Vs||qu;return n?e.then(this?n.bind(this):n):e}function ih(n){let e=_n+1,t=It.length;for(;e<t;){const i=e+t>>>1,r=It[i],s=Xr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function ja(n){if(!(n.flags&1)){const e=Xr(n),t=It[It.length-1];!t||!(n.flags&2)&&e>=Xr(t)?It.push(n):It.splice(ih(e),0,n),n.flags|=1,Yu()}}function Yu(){Vs||(Vs=qu.then(Zu))}function rh(n){Ue(n)?sr.push(...n):Zn&&n.id===-1?Zn.splice(Ki+1,0,n):n.flags&1||(sr.push(n),n.flags|=1),Yu()}function hl(n,e,t=_n+1){for(;t<It.length;t++){const i=It[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;It.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ku(n){if(sr.length){const e=[...new Set(sr)].sort((t,i)=>Xr(t)-Xr(i));if(sr.length=0,Zn){Zn.push(...e);return}for(Zn=e,Ki=0;Ki<Zn.length;Ki++){const t=Zn[Ki];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Zn=null,Ki=0}}const Xr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Zu(n){const e=fn;try{for(_n=0;_n<It.length;_n++){const t=It[_n];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ns(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;_n<It.length;_n++){const t=It[_n];t&&(t.flags&=-2)}_n=-1,It.length=0,Ku(),Vs=null,(It.length||sr.length)&&Zu()}}let en=null,Ju=null;function Ws(n){const e=en;return en=n,Ju=n&&n.type.__scopeId||null,e}function sh(n,e=en,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Sl(-1);const s=Ws(e);let a;try{a=n(...r)}finally{Ws(s),i._d&&Sl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function vt(n,e){if(en===null)return n;const t=co(en),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=nt]=e[r];s&&(Be(s)&&(s={mounted:s,updated:s}),s.deep&&Bn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function fi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(si(),Tn(l,t,8,[n.el,o,n,e]),oi())}}const oh=Symbol("_vte"),ah=n=>n.__isTeleport;function qa(n,e){n.shapeFlag&6&&n.component?(n.transition=e,qa(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Vn(n,e){return Be(n)?(()=>_t({name:n.name},e,{setup:n}))():n}function Qu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Xs(n,e,t,i,r=!1){if(Ue(n)){n.forEach((_,g)=>Xs(_,e&&(Ue(e)?e[g]:e),t,i,r));return}if(Or(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Xs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?co(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===nt?o.refs={}:o.refs,f=o.setupState,d=Ze(f),p=f===nt?()=>!1:_=>Je(d,_);if(c!=null&&c!==l&&(dt(c)?(u[c]=null,p(c)&&(f[c]=null)):Rt(c)&&(c.value=null)),Be(l))ns(l,o,12,[a,u]);else{const _=dt(l),g=Rt(l);if(_||g){const m=()=>{if(n.f){const h=_?p(l)?f[l]:u[l]:l.value;r?Ue(h)&&Fa(h,s):Ue(h)?h.includes(s)||h.push(s):_?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else _?(u[l]=a,p(l)&&(f[l]=a)):g&&(l.value=a,n.k&&(u[n.k]=a))};a?(m.id=-1,Gt(m,t)):m()}}}no().requestIdleCallback;no().cancelIdleCallback;const Or=n=>!!n.type.__asyncLoader,ef=n=>n.type.__isKeepAlive;function lh(n,e){tf(n,"a",e)}function ch(n,e){tf(n,"da",e)}function tf(n,e,t=Nt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(oo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ef(r.parent.vnode)&&uh(i,e,t,r),r=r.parent}}function uh(n,e,t,i){const r=oo(e,n,i,!0);$s(()=>{Fa(i[e],r)},t)}function oo(n,e,t=Nt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{si();const o=is(t),l=Tn(e,t,n,a);return o(),oi(),l});return i?r.unshift(s):r.push(s),s}}const Wn=n=>(e,t=Nt)=>{(!qr||n==="sp")&&oo(n,(...i)=>e(...i),t)},fh=Wn("bm"),xr=Wn("m"),dh=Wn("bu"),hh=Wn("u"),ph=Wn("bum"),$s=Wn("um"),mh=Wn("sp"),gh=Wn("rtg"),_h=Wn("rtc");function vh(n,e=Nt){oo("ec",n,e)}const xh=Symbol.for("v-ndc");function Zt(n,e,t,i){let r;const s=t&&t[i],a=Ue(n);if(a||dt(n)){const o=a&&ir(n);let l=!1;o&&(l=!tn(n),n=io(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?Tt(n[c]):n[c],c,void 0,s&&s[c])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(rt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s&&s[l]));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s&&s[l])}}else r=[];return t&&(t[i]=r),r}const ga=n=>n?yf(n)?co(n):ga(n.parent):null,Br=_t(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ga(n.parent),$root:n=>ga(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ya(n),$forceUpdate:n=>n.f||(n.f=()=>{ja(n.update)}),$nextTick:n=>n.n||(n.n=$a.bind(n.proxy)),$watch:n=>kh.bind(n)}),wo=(n,e)=>n!==nt&&!n.__isScriptSetup&&Je(n,e),Mh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(wo(i,e))return a[e]=1,i[e];if(r!==nt&&Je(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&Je(c,e))return a[e]=3,s[e];if(t!==nt&&Je(t,e))return a[e]=4,t[e];_a&&(a[e]=0)}}const u=Br[e];let f,d;if(u)return e==="$attrs"&&bt(n.attrs,"get",""),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==nt&&Je(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,Je(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return wo(r,e)?(r[e]=t,!0):i!==nt&&Je(i,e)?(i[e]=t,!0):Je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==nt&&Je(n,a)||wo(e,a)||(o=s[0])&&Je(o,a)||Je(i,a)||Je(Br,a)||Je(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function pl(n){return Ue(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let _a=!0;function Sh(n){const e=Ya(n),t=n.proxy,i=n.ctx;_a=!1,e.beforeCreate&&ml(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:g,deactivated:m,beforeDestroy:h,beforeUnmount:E,destroyed:y,unmounted:w,render:T,renderTracked:C,renderTriggered:P,errorCaptured:B,serverPrefetch:M,expose:L,inheritAttrs:se,components:O,directives:U,filters:I}=e;if(c&&yh(c,i,null),a)for(const $ in a){const X=a[$];Be(X)&&(i[$]=X.bind(t))}if(r){const $=r.call(t,t);rt($)&&(n.data=ro($))}if(_a=!0,s)for(const $ in s){const X=s[$],de=Be(X)?X.bind(t,t):Be(X.get)?X.get.bind(t,t):fn,le=!Be(X)&&Be(X.set)?X.set.bind(t):fn,Ae=Wt({get:de,set:le});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:he=>Ae.value=he})}if(o)for(const $ in o)nf(o[$],i,t,$);if(l){const $=Be(l)?l.call(t):l;Reflect.ownKeys($).forEach(X=>{Ns(X,$[X])})}u&&ml(u,n,"c");function W($,X){Ue(X)?X.forEach(de=>$(de.bind(t))):X&&$(X.bind(t))}if(W(fh,f),W(xr,d),W(dh,p),W(hh,_),W(lh,g),W(ch,m),W(vh,B),W(_h,C),W(gh,P),W(ph,E),W($s,w),W(mh,M),Ue(L))if(L.length){const $=n.exposed||(n.exposed={});L.forEach(X=>{Object.defineProperty($,X,{get:()=>t[X],set:de=>t[X]=de})})}else n.exposed||(n.exposed={});T&&n.render===fn&&(n.render=T),se!=null&&(n.inheritAttrs=se),O&&(n.components=O),U&&(n.directives=U),M&&Qu(n)}function yh(n,e,t=fn){Ue(n)&&(n=va(n));for(const i in n){const r=n[i];let s;rt(r)?"default"in r?s=kn(r.from||i,r.default,!0):s=kn(r.from||i):s=kn(r),Rt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function ml(n,e,t){Tn(Ue(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function nf(n,e,t,i){let r=i.includes(".")?_f(t,i):()=>t[i];if(dt(n)){const s=e[n];Be(s)&&Fs(r,s)}else if(Be(n))Fs(r,n.bind(t));else if(rt(n))if(Ue(n))n.forEach(s=>nf(s,e,t,i));else{const s=Be(n.handler)?n.handler.bind(t):e[n.handler];Be(s)&&Fs(r,s,n)}}function Ya(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>js(l,c,a,!0)),js(l,e,a)),rt(e)&&s.set(e,l),l}function js(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&js(n,s,t,!0),r&&r.forEach(a=>js(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Eh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Eh={data:gl,props:_l,emits:_l,methods:Ur,computed:Ur,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:Ur,directives:Ur,watch:Th,provide:gl,inject:bh};function gl(n,e){return e?n?function(){return _t(Be(n)?n.call(this,this):n,Be(e)?e.call(this,this):e)}:e:n}function bh(n,e){return Ur(va(n),va(e))}function va(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Lt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ur(n,e){return n?_t(Object.create(null),n,e):e}function _l(n,e){return n?Ue(n)&&Ue(e)?[...new Set([...n,...e])]:_t(Object.create(null),pl(n),pl(e??{})):e}function Th(n,e){if(!n)return e;if(!e)return n;const t=_t(Object.create(null),n);for(const i in e)t[i]=Lt(n[i],e[i]);return t}function rf(){return{app:null,config:{isNativeTag:_d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wh=0;function Ah(n,e){return function(i,r=null){Be(i)||(i=_t({},i)),r!=null&&!rt(r)&&(r=null);const s=rf(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:wh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ap,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Be(u.install)?(a.add(u),u.install(c,...f)):Be(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||At(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(p,u):n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,co(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Tn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=or;or=c;try{return u()}finally{or=f}}};return c}}let or=null;function Ns(n,e){if(Nt){let t=Nt.provides;const i=Nt.parent&&Nt.parent.provides;i===t&&(t=Nt.provides=Object.create(i)),t[n]=e}}function kn(n,e,t=!1){const i=Nt||en;if(i||or){const r=or?or._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Be(e)?e.call(i&&i.proxy):e}}const sf={},of=()=>Object.create(sf),af=n=>Object.getPrototypeOf(n)===sf;function Rh(n,e,t,i=!1){const r={},s=of();n.propsDefaults=Object.create(null),lf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Vu(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Ch(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ze(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ao(n.emitsOptions,d))continue;const p=e[d];if(l)if(Je(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const _=ii(d);r[_]=xa(l,o,_,p,n,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{lf(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Je(e,f)&&((u=Ui(f))===f||!Je(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=xa(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Je(e,f))&&(delete s[f],c=!0)}c&&On(n.attrs,"set","")}function lf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ir(l))continue;const c=e[l];let u;r&&Je(r,u=ii(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:ao(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ze(t),c=o||nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=xa(r,l,f,c[f],n,!Je(c,f))}}return a}function xa(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Je(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Be(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=is(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ui(t))&&(i=!0))}return i}const Ph=new WeakMap;function cf(n,e,t=!1){const i=t?Ph:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Be(n)){const u=f=>{l=!0;const[d,p]=cf(f,e,!0);_t(a,d),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return rt(n)&&i.set(n,er),er;if(Ue(s))for(let u=0;u<s.length;u++){const f=ii(s[u]);vl(f)&&(a[f]=nt)}else if(s)for(const u in s){const f=ii(u);if(vl(f)){const d=s[u],p=a[f]=Ue(d)||Be(d)?{type:d}:_t({},d),_=p.type;let g=!1,m=!0;if(Ue(_))for(let h=0;h<_.length;++h){const E=_[h],y=Be(E)&&E.name;if(y==="Boolean"){g=!0;break}else y==="String"&&(m=!1)}else g=Be(_)&&_.name==="Boolean";p[0]=g,p[1]=m,(g||Je(p,"default"))&&o.push(f)}}const c=[a,o];return rt(n)&&i.set(n,c),c}function vl(n){return n[0]!=="$"&&!Ir(n)}const uf=n=>n[0]==="_"||n==="$stable",Ka=n=>Ue(n)?n.map(vn):[vn(n)],Lh=(n,e,t)=>{if(e._n)return e;const i=sh((...r)=>Ka(e(...r)),t);return i._c=!1,i},ff=(n,e,t)=>{const i=n._ctx;for(const r in n){if(uf(r))continue;const s=n[r];if(Be(s))e[r]=Lh(r,s,i);else if(s!=null){const a=Ka(s);e[r]=()=>a}}},df=(n,e)=>{const t=Ka(e);n.slots.default=()=>t},hf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Uh=(n,e,t)=>{const i=n.slots=of();if(n.vnode.shapeFlag&32){const r=e._;r?(hf(i,e,t),t&&bu(i,"_",r,!0)):ff(e,i)}else e&&df(n,e)},Dh=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=nt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:hf(r,e,t):(s=!e.$stable,ff(e,r)),a=e}else e&&(df(n,e),a={default:1});if(s)for(const o in r)!uf(o)&&a[o]==null&&delete r[o]},Gt=jh;function Ih(n){return Nh(n)}function Nh(n,e){const t=no();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=fn,insertStaticContent:_}=n,g=(S,R,z,ne=null,Y=null,re=null,ue=void 0,fe=null,pe=!!R.dynamicChildren)=>{if(S===R)return;S&&!br(S,R)&&(ne=b(S),he(S,Y,re,!0),S=null),R.patchFlag===-2&&(pe=!1,R.dynamicChildren=null);const{type:x,ref:v,shapeFlag:N}=R;switch(x){case lo:m(S,R,z,ne);break;case Ri:h(S,R,z,ne);break;case Os:S==null&&E(R,z,ne,ue);break;case lt:O(S,R,z,ne,Y,re,ue,fe,pe);break;default:N&1?T(S,R,z,ne,Y,re,ue,fe,pe):N&6?U(S,R,z,ne,Y,re,ue,fe,pe):(N&64||N&128)&&x.process(S,R,z,ne,Y,re,ue,fe,pe,q)}v!=null&&Y&&Xs(v,S&&S.ref,re,R||S,!R)},m=(S,R,z,ne)=>{if(S==null)i(R.el=o(R.children),z,ne);else{const Y=R.el=S.el;R.children!==S.children&&c(Y,R.children)}},h=(S,R,z,ne)=>{S==null?i(R.el=l(R.children||""),z,ne):R.el=S.el},E=(S,R,z,ne)=>{[S.el,S.anchor]=_(S.children,R,z,ne,S.el,S.anchor)},y=({el:S,anchor:R},z,ne)=>{let Y;for(;S&&S!==R;)Y=d(S),i(S,z,ne),S=Y;i(R,z,ne)},w=({el:S,anchor:R})=>{let z;for(;S&&S!==R;)z=d(S),r(S),S=z;r(R)},T=(S,R,z,ne,Y,re,ue,fe,pe)=>{R.type==="svg"?ue="svg":R.type==="math"&&(ue="mathml"),S==null?C(R,z,ne,Y,re,ue,fe,pe):M(S,R,Y,re,ue,fe,pe)},C=(S,R,z,ne,Y,re,ue,fe)=>{let pe,x;const{props:v,shapeFlag:N,transition:G,dirs:K}=S;if(pe=S.el=a(S.type,re,v&&v.is,v),N&8?u(pe,S.children):N&16&&B(S.children,pe,null,ne,Y,Ao(S,re),ue,fe),K&&fi(S,null,ne,"created"),P(pe,S,S.scopeId,ue,ne),v){for(const Se in v)Se!=="value"&&!Ir(Se)&&s(pe,Se,null,v[Se],re,ne);"value"in v&&s(pe,"value",null,v.value,re),(x=v.onVnodeBeforeMount)&&mn(x,ne,S)}K&&fi(S,null,ne,"beforeMount");const ce=Fh(Y,G);ce&&G.beforeEnter(pe),i(pe,R,z),((x=v&&v.onVnodeMounted)||ce||K)&&Gt(()=>{x&&mn(x,ne,S),ce&&G.enter(pe),K&&fi(S,null,ne,"mounted")},Y)},P=(S,R,z,ne,Y)=>{if(z&&p(S,z),ne)for(let re=0;re<ne.length;re++)p(S,ne[re]);if(Y){let re=Y.subTree;if(R===re||xf(re.type)&&(re.ssContent===R||re.ssFallback===R)){const ue=Y.vnode;P(S,ue,ue.scopeId,ue.slotScopeIds,Y.parent)}}},B=(S,R,z,ne,Y,re,ue,fe,pe=0)=>{for(let x=pe;x<S.length;x++){const v=S[x]=fe?Jn(S[x]):vn(S[x]);g(null,v,R,z,ne,Y,re,ue,fe)}},M=(S,R,z,ne,Y,re,ue)=>{const fe=R.el=S.el;let{patchFlag:pe,dynamicChildren:x,dirs:v}=R;pe|=S.patchFlag&16;const N=S.props||nt,G=R.props||nt;let K;if(z&&di(z,!1),(K=G.onVnodeBeforeUpdate)&&mn(K,z,R,S),v&&fi(R,S,z,"beforeUpdate"),z&&di(z,!0),(N.innerHTML&&G.innerHTML==null||N.textContent&&G.textContent==null)&&u(fe,""),x?L(S.dynamicChildren,x,fe,z,ne,Ao(R,Y),re):ue||X(S,R,fe,null,z,ne,Ao(R,Y),re,!1),pe>0){if(pe&16)se(fe,N,G,z,Y);else if(pe&2&&N.class!==G.class&&s(fe,"class",null,G.class,Y),pe&4&&s(fe,"style",N.style,G.style,Y),pe&8){const ce=R.dynamicProps;for(let Se=0;Se<ce.length;Se++){const ge=ce[Se],J=N[ge],ye=G[ge];(ye!==J||ge==="value")&&s(fe,ge,J,ye,Y,z)}}pe&1&&S.children!==R.children&&u(fe,R.children)}else!ue&&x==null&&se(fe,N,G,z,Y);((K=G.onVnodeUpdated)||v)&&Gt(()=>{K&&mn(K,z,R,S),v&&fi(R,S,z,"updated")},ne)},L=(S,R,z,ne,Y,re,ue)=>{for(let fe=0;fe<R.length;fe++){const pe=S[fe],x=R[fe],v=pe.el&&(pe.type===lt||!br(pe,x)||pe.shapeFlag&70)?f(pe.el):z;g(pe,x,v,null,ne,Y,re,ue,!0)}},se=(S,R,z,ne,Y)=>{if(R!==z){if(R!==nt)for(const re in R)!Ir(re)&&!(re in z)&&s(S,re,R[re],null,Y,ne);for(const re in z){if(Ir(re))continue;const ue=z[re],fe=R[re];ue!==fe&&re!=="value"&&s(S,re,fe,ue,Y,ne)}"value"in z&&s(S,"value",R.value,z.value,Y)}},O=(S,R,z,ne,Y,re,ue,fe,pe)=>{const x=R.el=S?S.el:o(""),v=R.anchor=S?S.anchor:o("");let{patchFlag:N,dynamicChildren:G,slotScopeIds:K}=R;K&&(fe=fe?fe.concat(K):K),S==null?(i(x,z,ne),i(v,z,ne),B(R.children||[],z,v,Y,re,ue,fe,pe)):N>0&&N&64&&G&&S.dynamicChildren?(L(S.dynamicChildren,G,z,Y,re,ue,fe),(R.key!=null||Y&&R===Y.subTree)&&pf(S,R,!0)):X(S,R,z,v,Y,re,ue,fe,pe)},U=(S,R,z,ne,Y,re,ue,fe,pe)=>{R.slotScopeIds=fe,S==null?R.shapeFlag&512?Y.ctx.activate(R,z,ne,ue,pe):I(R,z,ne,Y,re,ue,pe):k(S,R,pe)},I=(S,R,z,ne,Y,re,ue)=>{const fe=S.component=tp(S,ne,Y);if(ef(S)&&(fe.ctx.renderer=q),np(fe,!1,ue),fe.asyncDep){if(Y&&Y.registerDep(fe,W,ue),!S.el){const pe=fe.subTree=At(Ri);h(null,pe,R,z)}}else W(fe,S,R,z,Y,re,ue)},k=(S,R,z)=>{const ne=R.component=S.component;if(Xh(S,R,z))if(ne.asyncDep&&!ne.asyncResolved){$(ne,R,z);return}else ne.next=R,ne.update();else R.el=S.el,ne.vnode=R},W=(S,R,z,ne,Y,re,ue)=>{const fe=()=>{if(S.isMounted){let{next:N,bu:G,u:K,parent:ce,vnode:Se}=S;{const we=mf(S);if(we){N&&(N.el=Se.el,$(S,N,ue)),we.asyncDep.then(()=>{S.isUnmounted||fe()});return}}let ge=N,J;di(S,!1),N?(N.el=Se.el,$(S,N,ue)):N=Se,G&&Is(G),(J=N.props&&N.props.onVnodeBeforeUpdate)&&mn(J,ce,N,Se),di(S,!0);const ye=Ro(S),Te=S.subTree;S.subTree=ye,g(Te,ye,f(Te.el),b(Te),S,Y,re),N.el=ye.el,ge===null&&$h(S,ye.el),K&&Gt(K,Y),(J=N.props&&N.props.onVnodeUpdated)&&Gt(()=>mn(J,ce,N,Se),Y)}else{let N;const{el:G,props:K}=R,{bm:ce,m:Se,parent:ge,root:J,type:ye}=S,Te=Or(R);if(di(S,!1),ce&&Is(ce),!Te&&(N=K&&K.onVnodeBeforeMount)&&mn(N,ge,R),di(S,!0),G&&Pe){const we=()=>{S.subTree=Ro(S),Pe(G,S.subTree,S,Y,null)};Te&&ye.__asyncHydrate?ye.__asyncHydrate(G,S,we):we()}else{J.ce&&J.ce._injectChildStyle(ye);const we=S.subTree=Ro(S);g(null,we,z,ne,S,Y,re),R.el=we.el}if(Se&&Gt(Se,Y),!Te&&(N=K&&K.onVnodeMounted)){const we=R;Gt(()=>mn(N,ge,we),Y)}(R.shapeFlag&256||ge&&Or(ge.vnode)&&ge.vnode.shapeFlag&256)&&S.a&&Gt(S.a,Y),S.isMounted=!0,R=z=ne=null}};S.scope.on();const pe=S.effect=new Cu(fe);S.scope.off();const x=S.update=pe.run.bind(pe),v=S.job=pe.runIfDirty.bind(pe);v.i=S,v.id=S.uid,pe.scheduler=()=>ja(v),di(S,!0),x()},$=(S,R,z)=>{R.component=S;const ne=S.vnode.props;S.vnode=R,S.next=null,Ch(S,R.props,ne,z),Dh(S,R.children,z),si(),hl(S),oi()},X=(S,R,z,ne,Y,re,ue,fe,pe=!1)=>{const x=S&&S.children,v=S?S.shapeFlag:0,N=R.children,{patchFlag:G,shapeFlag:K}=R;if(G>0){if(G&128){le(x,N,z,ne,Y,re,ue,fe,pe);return}else if(G&256){de(x,N,z,ne,Y,re,ue,fe,pe);return}}K&8?(v&16&&_e(x,Y,re),N!==x&&u(z,N)):v&16?K&16?le(x,N,z,ne,Y,re,ue,fe,pe):_e(x,Y,re,!0):(v&8&&u(z,""),K&16&&B(N,z,ne,Y,re,ue,fe,pe))},de=(S,R,z,ne,Y,re,ue,fe,pe)=>{S=S||er,R=R||er;const x=S.length,v=R.length,N=Math.min(x,v);let G;for(G=0;G<N;G++){const K=R[G]=pe?Jn(R[G]):vn(R[G]);g(S[G],K,z,null,Y,re,ue,fe,pe)}x>v?_e(S,Y,re,!0,!1,N):B(R,z,ne,Y,re,ue,fe,pe,N)},le=(S,R,z,ne,Y,re,ue,fe,pe)=>{let x=0;const v=R.length;let N=S.length-1,G=v-1;for(;x<=N&&x<=G;){const K=S[x],ce=R[x]=pe?Jn(R[x]):vn(R[x]);if(br(K,ce))g(K,ce,z,null,Y,re,ue,fe,pe);else break;x++}for(;x<=N&&x<=G;){const K=S[N],ce=R[G]=pe?Jn(R[G]):vn(R[G]);if(br(K,ce))g(K,ce,z,null,Y,re,ue,fe,pe);else break;N--,G--}if(x>N){if(x<=G){const K=G+1,ce=K<v?R[K].el:ne;for(;x<=G;)g(null,R[x]=pe?Jn(R[x]):vn(R[x]),z,ce,Y,re,ue,fe,pe),x++}}else if(x>G)for(;x<=N;)he(S[x],Y,re,!0),x++;else{const K=x,ce=x,Se=new Map;for(x=ce;x<=G;x++){const Ne=R[x]=pe?Jn(R[x]):vn(R[x]);Ne.key!=null&&Se.set(Ne.key,x)}let ge,J=0;const ye=G-ce+1;let Te=!1,we=0;const Ee=new Array(ye);for(x=0;x<ye;x++)Ee[x]=0;for(x=K;x<=N;x++){const Ne=S[x];if(J>=ye){he(Ne,Y,re,!0);continue}let ke;if(Ne.key!=null)ke=Se.get(Ne.key);else for(ge=ce;ge<=G;ge++)if(Ee[ge-ce]===0&&br(Ne,R[ge])){ke=ge;break}ke===void 0?he(Ne,Y,re,!0):(Ee[ke-ce]=x+1,ke>=we?we=ke:Te=!0,g(Ne,R[ke],z,null,Y,re,ue,fe,pe),J++)}const Re=Te?Oh(Ee):er;for(ge=Re.length-1,x=ye-1;x>=0;x--){const Ne=ce+x,ke=R[Ne],at=Ne+1<v?R[Ne+1].el:ne;Ee[x]===0?g(null,ke,z,at,Y,re,ue,fe,pe):Te&&(ge<0||x!==Re[ge]?Ae(ke,z,at,2):ge--)}}},Ae=(S,R,z,ne,Y=null)=>{const{el:re,type:ue,transition:fe,children:pe,shapeFlag:x}=S;if(x&6){Ae(S.component.subTree,R,z,ne);return}if(x&128){S.suspense.move(R,z,ne);return}if(x&64){ue.move(S,R,z,q);return}if(ue===lt){i(re,R,z);for(let N=0;N<pe.length;N++)Ae(pe[N],R,z,ne);i(S.anchor,R,z);return}if(ue===Os){y(S,R,z);return}if(ne!==2&&x&1&&fe)if(ne===0)fe.beforeEnter(re),i(re,R,z),Gt(()=>fe.enter(re),Y);else{const{leave:N,delayLeave:G,afterLeave:K}=fe,ce=()=>i(re,R,z),Se=()=>{N(re,()=>{ce(),K&&K()})};G?G(re,ce,Se):Se()}else i(re,R,z)},he=(S,R,z,ne=!1,Y=!1)=>{const{type:re,props:ue,ref:fe,children:pe,dynamicChildren:x,shapeFlag:v,patchFlag:N,dirs:G,cacheIndex:K}=S;if(N===-2&&(Y=!1),fe!=null&&Xs(fe,null,z,S,!0),K!=null&&(R.renderCache[K]=void 0),v&256){R.ctx.deactivate(S);return}const ce=v&1&&G,Se=!Or(S);let ge;if(Se&&(ge=ue&&ue.onVnodeBeforeUnmount)&&mn(ge,R,S),v&6)ve(S.component,z,ne);else{if(v&128){S.suspense.unmount(z,ne);return}ce&&fi(S,null,R,"beforeUnmount"),v&64?S.type.remove(S,R,z,q,ne):x&&!x.hasOnce&&(re!==lt||N>0&&N&64)?_e(x,R,z,!1,!0):(re===lt&&N&384||!Y&&v&16)&&_e(pe,R,z),ne&&Z(S)}(Se&&(ge=ue&&ue.onVnodeUnmounted)||ce)&&Gt(()=>{ge&&mn(ge,R,S),ce&&fi(S,null,R,"unmounted")},z)},Z=S=>{const{type:R,el:z,anchor:ne,transition:Y}=S;if(R===lt){oe(z,ne);return}if(R===Os){w(S);return}const re=()=>{r(z),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(S.shapeFlag&1&&Y&&!Y.persisted){const{leave:ue,delayLeave:fe}=Y,pe=()=>ue(z,re);fe?fe(S.el,re,pe):pe()}else re()},oe=(S,R)=>{let z;for(;S!==R;)z=d(S),r(S),S=z;r(R)},ve=(S,R,z)=>{const{bum:ne,scope:Y,job:re,subTree:ue,um:fe,m:pe,a:x}=S;xl(pe),xl(x),ne&&Is(ne),Y.stop(),re&&(re.flags|=8,he(ue,S,R,z)),fe&&Gt(fe,R),Gt(()=>{S.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},_e=(S,R,z,ne=!1,Y=!1,re=0)=>{for(let ue=re;ue<S.length;ue++)he(S[ue],R,z,ne,Y)},b=S=>{if(S.shapeFlag&6)return b(S.component.subTree);if(S.shapeFlag&128)return S.suspense.next();const R=d(S.anchor||S.el),z=R&&R[oh];return z?d(z):R};let ae=!1;const te=(S,R,z)=>{S==null?R._vnode&&he(R._vnode,null,null,!0):g(R._vnode||null,S,R,null,null,null,z),R._vnode=S,ae||(ae=!0,hl(),Ku(),ae=!1)},q={p:g,um:he,m:Ae,r:Z,mt:I,mc:B,pc:X,pbc:L,n:b,o:n};let xe,Pe;return e&&([xe,Pe]=e(q)),{render:te,hydrate:xe,createApp:Ah(te,xe)}}function Ao({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function di({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Fh(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function pf(n,e,t=!1){const i=n.children,r=e.children;if(Ue(i)&&Ue(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Jn(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&pf(a,o)),o.type===lo&&(o.el=a.el)}}function Oh(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function mf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mf(e)}function xl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Bh=Symbol.for("v-scx"),zh=()=>kn(Bh);function Fs(n,e,t){return gf(n,e,t)}function gf(n,e,t=nt){const{immediate:i,deep:r,flush:s,once:a}=t,o=_t({},t),l=e&&i||!e&&s!=="post";let c;if(qr){if(s==="sync"){const p=zh();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=fn,p.resume=fn,p.pause=fn,p}}const u=Nt;o.call=(p,_,g)=>Tn(p,u,_,g);let f=!1;s==="post"?o.scheduler=p=>{Gt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,_)=>{_?p():ja(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=th(n,e,o);return qr&&(c?c.push(d):l&&d()),d}function kh(n,e,t){const i=this.proxy,r=dt(n)?n.includes(".")?_f(i,n):()=>i[n]:n.bind(i,i);let s;Be(e)?s=e:(s=e.handler,t=e);const a=is(this),o=gf(r,s.bind(i),t);return a(),o}function _f(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Hh=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ii(e)}Modifiers`]||n[`${Ui(e)}Modifiers`];function Gh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||nt;let r=t;const s=e.startsWith("update:"),a=s&&Hh(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>dt(u)?u.trim():u)),a.number&&(r=t.map(Hs)));let o,l=i[o=So(e)]||i[o=So(ii(e))];!l&&s&&(l=i[o=So(Ui(e))]),l&&Tn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Tn(c,n,6,r)}}function vf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Be(n)){const l=c=>{const u=vf(c,e,!0);u&&(o=!0,_t(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(rt(n)&&i.set(n,null),null):(Ue(s)?s.forEach(l=>a[l]=null):_t(a,s),rt(n)&&i.set(n,a),a)}function ao(n,e){return!n||!eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Je(n,e[0].toLowerCase()+e.slice(1))||Je(n,Ui(e))||Je(n,e))}function Ro(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:_,inheritAttrs:g}=n,m=Ws(n);let h,E;try{if(t.shapeFlag&4){const w=r||i,T=w;h=vn(c.call(T,w,u,f,p,d,_)),E=o}else{const w=e;h=vn(w.length>1?w(f,{attrs:o,slots:a,emit:l}):w(f,null)),E=e.props?o:Vh(o)}}catch(w){zr.length=0,so(w,n,1),h=At(Ri)}let y=h;if(E&&g!==!1){const w=Object.keys(E),{shapeFlag:T}=y;w.length&&T&7&&(s&&w.some(Na)&&(E=Wh(E,s)),y=ur(y,E,!1,!0))}return t.dirs&&(y=ur(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&qa(y,t.transition),h=y,Ws(m),h}const Vh=n=>{let e;for(const t in n)(t==="class"||t==="style"||eo(t))&&((e||(e={}))[t]=n[t]);return e},Wh=(n,e)=>{const t={};for(const i in n)(!Na(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Xh(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ml(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!ao(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Ml(i,a,c):!0:!!a;return!1}function Ml(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ao(t,s))return!0}return!1}function $h({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const xf=n=>n.__isSuspense;function jh(n,e){e&&e.pendingBranch?Ue(n)?e.effects.push(...n):e.effects.push(n):rh(n)}const lt=Symbol.for("v-fgt"),lo=Symbol.for("v-txt"),Ri=Symbol.for("v-cmt"),Os=Symbol.for("v-stc"),zr=[];let Xt=null;function Ie(n=!1){zr.push(Xt=n?null:[])}function qh(){zr.pop(),Xt=zr[zr.length-1]||null}let $r=1;function Sl(n,e=!1){$r+=n,n<0&&Xt&&e&&(Xt.hasOnce=!0)}function Mf(n){return n.dynamicChildren=$r>0?Xt||er:null,qh(),$r>0&&Xt&&Xt.push(n),n}function Oe(n,e,t,i,r,s){return Mf(D(n,e,t,i,r,s,!0))}function jr(n,e,t,i,r){return Mf(At(n,e,t,i,r,!0))}function qs(n){return n?n.__v_isVNode===!0:!1}function br(n,e){return n.type===e.type&&n.key===e.key}const Sf=({key:n})=>n??null,Bs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?dt(n)||Rt(n)||Be(n)?{i:en,r:n,k:e,f:!!t}:n:null);function D(n,e=null,t=null,i=0,r=null,s=n===lt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Sf(e),ref:e&&Bs(e),scopeId:Ju,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:en};return o?(Za(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),$r>0&&!a&&Xt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Xt.push(l),l}const At=Yh;function Yh(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===xh)&&(n=Ri),qs(n)){const o=ur(n,e,!0);return t&&Za(o,t),$r>0&&!s&&Xt&&(o.shapeFlag&6?Xt[Xt.indexOf(n)]=o:Xt.push(o)),o.patchFlag=-2,o}if(op(n)&&(n=n.__vccOpts),e){e=Kh(e);let{class:o,style:l}=e;o&&!dt(o)&&(e.class=Sn(o)),rt(l)&&(Xa(l)&&!Ue(l)&&(l=_t({},l)),e.style=nr(l))}const a=dt(n)?1:xf(n)?128:ah(n)?64:rt(n)?4:Be(n)?2:0;return D(n,e,t,i,r,a,s,!0)}function Kh(n){return n?Xa(n)||af(n)?_t({},n):n:null}function ur(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Jh(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Sf(c),ref:e&&e.ref?t&&s?Ue(s)?s.concat(Bs(e)):[s,Bs(e)]:Bs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==lt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ur(n.ssContent),ssFallback:n.ssFallback&&ur(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&qa(u,l.clone(u)),u}function Mi(n=" ",e=0){return At(lo,null,n,e)}function Zh(n,e){const t=At(Os,null,n);return t.staticCount=e,t}function wt(n="",e=!1){return e?(Ie(),jr(Ri,null,n)):At(Ri,null,n)}function vn(n){return n==null||typeof n=="boolean"?At(Ri):Ue(n)?At(lt,null,n.slice()):qs(n)?Jn(n):At(lo,null,String(n))}function Jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ur(n)}function Za(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ue(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Za(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!af(e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:en},t=32):(e=String(e),i&64?(t=16,e=[Mi(e)]):t=8);n.children=e,n.shapeFlag|=t}function Jh(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Sn([e.class,i.class]));else if(r==="style")e.style=nr([e.style,i.style]);else if(eo(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ue(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function mn(n,e,t,i=null){Tn(n,e,7,[t,i])}const Qh=rf();let ep=0;function tp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Qh,s={uid:ep++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ru(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cf(i,r),emitsOptions:vf(i,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Gh.bind(null,s),n.ce&&n.ce(s),s}let Nt=null,Ys,Ma;{const n=no(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Ys=e("__VUE_INSTANCE_SETTERS__",t=>Nt=t),Ma=e("__VUE_SSR_SETTERS__",t=>qr=t)}const is=n=>{const e=Nt;return Ys(n),n.scope.on(),()=>{n.scope.off(),Ys(e)}},yl=()=>{Nt&&Nt.scope.off(),Ys(null)};function yf(n){return n.vnode.shapeFlag&4}let qr=!1;function np(n,e=!1,t=!1){e&&Ma(e);const{props:i,children:r}=n.vnode,s=yf(n);Rh(n,i,s,e),Uh(n,r,t);const a=s?ip(n,e):void 0;return e&&Ma(!1),a}function ip(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Mh);const{setup:i}=t;if(i){si();const r=n.setupContext=i.length>1?sp(n):null,s=is(n),a=ns(i,n,0,[n.props,r]),o=Mu(a);if(oi(),s(),(o||n.sp)&&!Or(n)&&Qu(n),o){if(a.then(yl,yl),e)return a.then(l=>{El(n,l,e)}).catch(l=>{so(l,n,0)});n.asyncDep=a}else El(n,a,e)}else Ef(n,e)}function El(n,e,t){Be(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:rt(e)&&(n.setupState=ju(e)),Ef(n,t)}let bl;function Ef(n,e,t){const i=n.type;if(!n.render){if(!e&&bl&&!i.render){const r=i.template||Ya(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=_t(_t({isCustomElement:s,delimiters:o},a),l);i.render=bl(r,c)}}n.render=i.render||fn}{const r=is(n);si();try{Sh(n)}finally{oi(),r()}}}const rp={get(n,e){return bt(n,"get",""),n[e]}};function sp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,rp),slots:n.slots,emit:n.emit,expose:e}}function co(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ju(Xu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Br)return Br[t](n)},has(e,t){return t in e||t in Br}})):n.proxy}function op(n){return Be(n)&&"__vccOpts"in n}const Wt=(n,e)=>Qd(n,e,qr);function bf(n,e,t){const i=arguments.length;return i===2?rt(e)&&!Ue(e)?qs(e)?At(n,null,[e]):At(n,e):At(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&qs(t)&&(t=[t]),At(n,e,t))}const ap="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sa;const Tl=typeof window<"u"&&window.trustedTypes;if(Tl)try{Sa=Tl.createPolicy("vue",{createHTML:n=>n})}catch{}const Tf=Sa?n=>Sa.createHTML(n):n=>n,lp="http://www.w3.org/2000/svg",cp="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,wl=Fn&&Fn.createElement("template"),up={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Fn.createElementNS(lp,n):e==="mathml"?Fn.createElementNS(cp,n):t?Fn.createElement(n,{is:t}):Fn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Fn.createTextNode(n),createComment:n=>Fn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Fn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{wl.innerHTML=Tf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=wl.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},fp=Symbol("_vtc");function dp(n,e,t){const i=n[fp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ks=Symbol("_vod"),wf=Symbol("_vsh"),hp={beforeMount(n,{value:e},{transition:t}){n[Ks]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Tr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Tr(n,!0),i.enter(n)):i.leave(n,()=>{Tr(n,!1)}):Tr(n,e))},beforeUnmount(n,{value:e}){Tr(n,e)}};function Tr(n,e){n.style.display=e?n[Ks]:"none",n[wf]=!e}const pp=Symbol(""),mp=/(^|;)\s*display\s*:/;function gp(n,e,t){const i=n.style,r=dt(t);let s=!1;if(t&&!r){if(e)if(dt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&zs(i,o,"")}else for(const a in e)t[a]==null&&zs(i,a,"");for(const a in t)a==="display"&&(s=!0),zs(i,a,t[a])}else if(r){if(e!==t){const a=i[pp];a&&(t+=";"+a),i.cssText=t,s=mp.test(t)}}else e&&n.removeAttribute("style");Ks in n&&(n[Ks]=s?i.display:"",n[wf]&&(i.display="none"))}const Al=/\s*!important$/;function zs(n,e,t){if(Ue(t))t.forEach(i=>zs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=_p(n,e);Al.test(t)?n.setProperty(Ui(i),t.replace(Al,""),"important"):n[i]=t}}const Rl=["Webkit","Moz","ms"],Co={};function _p(n,e){const t=Co[e];if(t)return t;let i=ii(e);if(i!=="filter"&&i in n)return Co[e]=i;i=Eu(i);for(let r=0;r<Rl.length;r++){const s=Rl[r]+i;if(s in n)return Co[e]=s}return e}const Cl="http://www.w3.org/1999/xlink";function Pl(n,e,t,i,r,s=Ad(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Cl,e.slice(6,e.length)):n.setAttributeNS(Cl,e,t):t==null||s&&!Tu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":bn(t)?String(t):t)}function Ll(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Tf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Tu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function ei(n,e,t,i){n.addEventListener(e,t,i)}function vp(n,e,t,i){n.removeEventListener(e,t,i)}const Ul=Symbol("_vei");function xp(n,e,t,i,r=null){const s=n[Ul]||(n[Ul]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Mp(e);if(i){const c=s[e]=Ep(i,r);ei(n,o,c,l)}else a&&(vp(n,o,a,l),s[e]=void 0)}}const Dl=/(?:Once|Passive|Capture)$/;function Mp(n){let e;if(Dl.test(n)){e={};let i;for(;i=n.match(Dl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ui(n.slice(2)),e]}let Po=0;const Sp=Promise.resolve(),yp=()=>Po||(Sp.then(()=>Po=0),Po=Date.now());function Ep(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Tn(bp(i,t.value),e,5,[i])};return t.value=n,t.attached=yp(),t}function bp(n,e){if(Ue(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Il=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Tp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?dp(n,i,a):e==="style"?gp(n,t,i):eo(e)?Na(e)||xp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wp(n,e,i,a))?(Ll(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pl(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!dt(i))?Ll(n,ii(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Pl(n,e,i,a))};function wp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Il(e)&&Be(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Il(e)&&dt(t)?!1:e in n}const fr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ue(e)?t=>Is(e,t):e};function Ap(n){n.target.composing=!0}function Nl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hn=Symbol("_assign"),Kt={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Hn]=fr(r);const s=i||r.props&&r.props.type==="number";ei(n,e?"change":"input",a=>{if(a.target.composing)return;let o=n.value;t&&(o=o.trim()),s&&(o=Hs(o)),n[Hn](o)}),t&&ei(n,"change",()=>{n.value=n.value.trim()}),e||(ei(n,"compositionstart",Ap),ei(n,"compositionend",Nl),ei(n,"change",Nl))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[Hn]=fr(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?Hs(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Rp={deep:!0,created(n,e,t){n[Hn]=fr(t),ei(n,"change",()=>{const i=n._modelValue,r=Yr(n),s=n.checked,a=n[Hn];if(Ue(i)){const o=Ba(i,r),l=o!==-1;if(s&&!l)a(i.concat(r));else if(!s&&l){const c=[...i];c.splice(o,1),a(c)}}else if(vr(i)){const o=new Set(i);s?o.add(r):o.delete(r),a(o)}else a(Af(n,s))})},mounted:Fl,beforeUpdate(n,e,t){n[Hn]=fr(t),Fl(n,e,t)}};function Fl(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(Ue(e))r=Ba(e,i.props.value)>-1;else if(vr(e))r=e.has(i.props.value);else{if(e===t)return;r=ts(e,Af(n,!0))}n.checked!==r&&(n.checked=r)}const Lo={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=vr(e);ei(n,"change",()=>{const s=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>t?Hs(Yr(a)):Yr(a));n[Hn](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,$a(()=>{n._assigning=!1})}),n[Hn]=fr(i)},mounted(n,{value:e}){Ol(n,e)},beforeUpdate(n,e,t){n[Hn]=fr(t)},updated(n,{value:e}){n._assigning||Ol(n,e)}};function Ol(n,e){const t=n.multiple,i=Ue(e);if(!(t&&!i&&!vr(e))){for(let r=0,s=n.options.length;r<s;r++){const a=n.options[r],o=Yr(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=Ba(e,o)>-1}else a.selected=e.has(o);else if(ts(Yr(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Yr(n){return"_value"in n?n._value:n.value}function Af(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Cp=["ctrl","shift","alt","meta"],Pp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Cp.some(t=>n[`${t}Key`]&&!e.includes(t))},ya=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=Pp[e[a]];if(o&&o(r,e))return}return n(r,...s)})},Lp=_t({patchProp:Tp},up);let Bl;function Up(){return Bl||(Bl=Ih(Lp))}const Dp=(...n)=>{const e=Up().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Np(i);if(!r)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Ip(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Ip(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Np(n){return dt(n)?document.querySelector(n):n}var Fp=!1;/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Op=Symbol();var zl;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(zl||(zl={}));function Bp(){const n=Cd(!0),e=n.run(()=>Ye({}));let t=[],i=[];const r=Xu({install(s){r._a=s,s.provide(Op,r),s.config.globalProperties.$pinia=r,i.forEach(a=>t.push(a)),i=[]},use(s){return!this._a&&!Fp?i.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ja="152",zp=0,kl=1,kp=2,Rf=1,Hp=2,Nn=3,ri=0,Ot=1,zn=2,ni=0,ar=1,Hl=2,Gl=3,Vl=4,Gp=5,Zi=100,Vp=101,Wp=102,Wl=103,Xl=104,Xp=200,$p=201,jp=202,qp=203,Cf=204,Pf=205,Yp=206,Kp=207,Zp=208,Jp=209,Qp=210,em=0,tm=1,nm=2,Ea=3,im=4,rm=5,sm=6,om=7,Lf=0,am=1,lm=2,Gn=0,cm=1,um=2,fm=3,dm=4,hm=5,Uf=300,dr=301,hr=302,ba=303,Ta=304,uo=306,wa=1e3,cn=1001,Aa=1002,Dt=1003,$l=1004,Uo=1005,Jt=1006,pm=1007,Kr=1008,Ci=1009,mm=1010,gm=1011,Df=1012,_m=1013,Si=1014,yi=1015,Zr=1016,vm=1017,xm=1018,lr=1020,Mm=1021,un=1023,Sm=1024,ym=1025,bi=1026,pr=1027,Em=1028,bm=1029,Tm=1030,wm=1031,Am=1033,Do=33776,Io=33777,No=33778,Fo=33779,jl=35840,ql=35841,Yl=35842,Kl=35843,Rm=36196,Zl=37492,Jl=37496,Ql=37808,ec=37809,tc=37810,nc=37811,ic=37812,rc=37813,sc=37814,oc=37815,ac=37816,lc=37817,cc=37818,uc=37819,fc=37820,dc=37821,Oo=36492,Cm=36283,hc=36284,pc=36285,mc=36286,If=3e3,Ti=3001,Pm=3200,Lm=3201,Um=0,Dm=1,wi="",ze="srgb",wn="srgb-linear",Nf="display-p3",Bo=7680,Im=519,gc=35044,_c="300 es",Ra=1035;class Mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zo=Math.PI/180,Ca=180/Math.PI;function rs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function Nm(n,e){return(n%e+e)%e}function ko(n,e,t){return(1-t)*n+t*e}function vc(n){return(n&n-1)===0&&n!==0}function Fm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ds(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],g=r[0],m=r[3],h=r[6],E=r[1],y=r[4],w=r[7],T=r[2],C=r[5],P=r[8];return s[0]=a*g+o*E+l*T,s[3]=a*m+o*y+l*C,s[6]=a*h+o*w+l*P,s[1]=c*g+u*E+f*T,s[4]=c*m+u*y+f*C,s[7]=c*h+u*w+f*P,s[2]=d*g+p*E+_*T,s[5]=d*m+p*y+_*C,s[8]=d*h+p*w+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,p=c*s-a*l,_=t*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ho.makeScale(e,t)),this}rotate(e){return this.premultiply(Ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ho.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ho=new je;function Ff(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const xc={};function kr(n){n in xc||(xc[n]=!0,console.warn(n))}function cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Go(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Om=new je().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Bm=new je().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function zm(n){return n.convertSRGBToLinear().applyMatrix3(Bm)}function km(n){return n.applyMatrix3(Om).convertLinearToSRGB()}const Hm={[wn]:n=>n,[ze]:n=>n.convertSRGBToLinear(),[Nf]:zm},Gm={[wn]:n=>n,[ze]:n=>n.convertLinearToSRGB(),[Nf]:km},rn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return wn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Hm[e],r=Gm[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ii;class Of{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=Zs("canvas")),Ii.width=e.width,Ii.height=e.height;const i=Ii.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=cr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cr(t[i]/255)*255):t[i]=cr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Bf{constructor(e=null){this.isSource=!0,this.uuid=rs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vo(r[a].image)):s.push(Vo(r[a]))}else s=Vo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Vo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Of.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vm=0;class $t extends Mr{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=cn,r=cn,s=Jt,a=Kr,o=un,l=Ci,c=$t.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=rs(),this.name="",this.source=new Bf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ti?ze:wi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?Ti:If}set encoding(e){kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ti?ze:wi}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Uf;$t.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,w=(p+1)/2,T=(h+1)/2,C=(u+d)/4,P=(f+g)/4,B=(_+m)/4;return y>w&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=P/i):w>T?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=C/r,s=B/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=P/s,r=B/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(f-g)/E,this.z=(d-u)/E,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pi extends Mr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(kr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ti?ze:wi),this.texture=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Jt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zf extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wm extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==d||c!==p||u!==_){let m=1-o;const h=l*d+c*p+u*_+f*g,E=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const T=Math.sqrt(y),C=Math.atan2(T,h*E);m=Math.sin(m*C)/T,o=Math.sin(o*C)/T}const w=o*E;if(l=l*m+d*w,c=c*m+p*w,u=u*m+_*w,f=f*m+g*w,m===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*p-c*d,e[t+1]=l*_+u*d+c*f-o*p,e[t+2]=c*_+u*p+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,d=-s*t-a*i-o*r;return this.x=c*l+d*-s+u*-o-f*-a,this.y=u*l+d*-a+f*-s-c*-o,this.z=f*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new j,Mc=new ss;class os{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ni.copy(e.boundingBox),Ni.applyMatrix4(e.matrixWorld),this.union(Ni);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Cn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Cn)}else r.boundingBox===null&&r.computeBoundingBox(),Ni.copy(r.boundingBox),Ni.applyMatrix4(e.matrixWorld),this.union(Ni)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),hs.subVectors(this.max,wr),Fi.subVectors(e.a,wr),Oi.subVectors(e.b,wr),Bi.subVectors(e.c,wr),$n.subVectors(Oi,Fi),jn.subVectors(Bi,Oi),hi.subVectors(Fi,Bi);let t=[0,-$n.z,$n.y,0,-jn.z,jn.y,0,-hi.z,hi.y,$n.z,0,-$n.x,jn.z,0,-jn.x,hi.z,0,-hi.x,-$n.y,$n.x,0,-jn.y,jn.x,0,-hi.y,hi.x,0];return!Xo(t,Fi,Oi,Bi,hs)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Fi,Oi,Bi,hs))?!1:(ps.crossVectors($n,jn),t=[ps.x,ps.y,ps.z],Xo(t,Fi,Oi,Bi,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new j,new j,new j,new j,new j,new j,new j,new j],Cn=new j,Ni=new os,Fi=new j,Oi=new j,Bi=new j,$n=new j,jn=new j,hi=new j,wr=new j,hs=new j,ps=new j,pi=new j;function Xo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){pi.fromArray(n,s);const o=r.x*Math.abs(pi.x)+r.y*Math.abs(pi.y)+r.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),u=i.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Xm=new os,Ar=new j,$o=new j;class Qa{constructor(e=new j,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add($o)),this.expandByPoint(Ar.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new j,jo=new j,ms=new j,qn=new j,qo=new j,gs=new j,Yo=new j;class $m{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){jo.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(jo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ms),o=qn.dot(this.direction),l=-qn.dot(ms),c=qn.lengthSq(),u=Math.abs(1-a*a);let f,d,p,_;if(u>0)if(f=a*l-o,d=a*o-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(jo).addScaledVector(ms,d),p}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,r,s){qo.subVectors(t,e),gs.subVectors(i,e),Yo.crossVectors(qo,gs);let a=this.direction.dot(Yo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);const l=o*this.direction.dot(gs.crossVectors(qn,gs));if(l<0)return null;const c=o*this.direction.dot(qo.cross(qn));if(c<0||l+c>a)return null;const u=-o*qn.dot(Yo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,d,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/zi.setFromMatrixColumn(e,0).length(),s=1/zi.setFromMatrixColumn(e,1).length(),a=1/zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,g=c*f;t[0]=d+g*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,g=c*f;t[0]=d-g*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*f,t[8]=_*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=a*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jm,e,qm)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Yn.crossVectors(i,kt),Yn.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Yn.crossVectors(i,kt)),Yn.normalize(),_s.crossVectors(kt,Yn),r[0]=Yn.x,r[4]=_s.x,r[8]=kt.x,r[1]=Yn.y,r[5]=_s.y,r[9]=kt.y,r[2]=Yn.z,r[6]=_s.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],E=i[3],y=i[7],w=i[11],T=i[15],C=r[0],P=r[4],B=r[8],M=r[12],L=r[1],se=r[5],O=r[9],U=r[13],I=r[2],k=r[6],W=r[10],$=r[14],X=r[3],de=r[7],le=r[11],Ae=r[15];return s[0]=a*C+o*L+l*I+c*X,s[4]=a*P+o*se+l*k+c*de,s[8]=a*B+o*O+l*W+c*le,s[12]=a*M+o*U+l*$+c*Ae,s[1]=u*C+f*L+d*I+p*X,s[5]=u*P+f*se+d*k+p*de,s[9]=u*B+f*O+d*W+p*le,s[13]=u*M+f*U+d*$+p*Ae,s[2]=_*C+g*L+m*I+h*X,s[6]=_*P+g*se+m*k+h*de,s[10]=_*B+g*O+m*W+h*le,s[14]=_*M+g*U+m*$+h*Ae,s[3]=E*C+y*L+w*I+T*X,s[7]=E*P+y*se+w*k+T*de,s[11]=E*B+y*O+w*W+T*le,s[15]=E*M+y*U+w*$+T*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*p-i*l*p)+g*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+m*(+t*c*f-t*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],E=f*m*c-g*d*c+g*l*p-o*m*p-f*l*h+o*d*h,y=_*d*c-u*m*c-_*l*p+a*m*p+u*l*h-a*d*h,w=u*g*c-_*f*c+_*o*p-a*g*p-u*o*h+a*f*h,T=_*f*l-u*g*l-_*o*d+a*g*d+u*o*m-a*f*m,C=t*E+i*y+r*w+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=E*P,e[1]=(g*d*s-f*m*s-g*r*p+i*m*p+f*r*h-i*d*h)*P,e[2]=(o*m*s-g*l*s+g*r*c-i*m*c-o*r*h+i*l*h)*P,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*p-i*l*p)*P,e[4]=y*P,e[5]=(u*m*s-_*d*s+_*r*p-t*m*p-u*r*h+t*d*h)*P,e[6]=(_*l*s-a*m*s-_*r*c+t*m*c+a*r*h-t*l*h)*P,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*p+t*l*p)*P,e[8]=w*P,e[9]=(_*f*s-u*g*s-_*i*p+t*g*p+u*i*h-t*f*h)*P,e[10]=(a*g*s-_*o*s+_*i*c-t*g*c-a*i*h+t*o*h)*P,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*p-t*o*p)*P,e[12]=T*P,e[13]=(u*g*r-_*f*r+_*i*d-t*g*d-u*i*m+t*f*m)*P,e[14]=(_*o*r-a*g*r-_*i*l+t*g*l+a*i*m-t*o*m)*P,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,p=s*u,_=s*f,g=a*u,m=a*f,h=o*f,E=l*c,y=l*u,w=l*f,T=i.x,C=i.y,P=i.z;return r[0]=(1-(g+h))*T,r[1]=(p+w)*T,r[2]=(_-y)*T,r[3]=0,r[4]=(p-w)*C,r[5]=(1-(d+h))*C,r[6]=(m+E)*C,r[7]=0,r[8]=(_+y)*P,r[9]=(m-E)*P,r[10]=(1-(d+g))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=zi.set(r[0],r[1],r[2]).length();const a=zi.set(r[4],r[5],r[6]).length(),o=zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const c=1/s,u=1/a,f=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,t.setFromRotationMatrix(sn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,d=(i+r)*c,p=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zi=new j,sn=new Mt,jm=new j(0,0,0),qm=new j(1,1,1),Yn=new j,_s=new j,kt=new j,Sc=new Mt,yc=new ss;class fo{constructor(e=0,t=0,i=0,r=fo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yc.setFromEuler(this),this.setFromQuaternion(yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fo.DEFAULT_ORDER="XYZ";class kf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ym=0;const Ec=new j,ki=new ss,Ln=new Mt,vs=new j,Rr=new j,Km=new j,Zm=new ss,bc=new j(1,0,0),Tc=new j(0,1,0),wc=new j(0,0,1),Jm={type:"added"},Ac={type:"removed"};class jt extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new j,t=new fo,i=new ss,r=new j(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(bc,e)}rotateY(e){return this.rotateOnAxis(Tc,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return Ec.copy(e).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bc,e)}translateY(e){return this.translateOnAxis(Tc,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vs.copy(e):vs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Rr,vs,this.up):Ln.lookAt(vs,Rr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(Ln),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ac)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ac)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,Km),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new j(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new j,Un=new j,Ko=new j,Dn=new j,Hi=new j,Gi=new j,Rc=new j,Zo=new j,Jo=new j,Qo=new j;let xs=!1;class ln{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){on.subVectors(r,t),Un.subVectors(i,t),Ko.subVectors(e,t);const a=on.dot(on),o=on.dot(Un),l=on.dot(Ko),c=Un.dot(Un),u=Un.dot(Ko),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,i,r,s,a,o,l){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Dn),l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),Un.subVectors(e,t),on.cross(Un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),on.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Hi.subVectors(r,i),Gi.subVectors(s,i),Zo.subVectors(e,i);const l=Hi.dot(Zo),c=Gi.dot(Zo);if(l<=0&&c<=0)return t.copy(i);Jo.subVectors(e,r);const u=Hi.dot(Jo),f=Gi.dot(Jo);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Hi,a);Qo.subVectors(e,s);const p=Hi.dot(Qo),_=Gi.dot(Qo);if(_>=0&&p<=_)return t.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Gi,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Rc.subVectors(s,r),o=(f-u)/(f-u+(p-_)),t.copy(r).addScaledVector(Rc,o);const h=1/(m+g+d);return a=g*h,o=d*h,t.copy(i).addScaledVector(Hi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Qm=0;class ho extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=ar,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Cf,this.blendDst=Pf,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function ea(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rn.workingColorSpace){return this.r=e,this.g=t,this.b=i,rn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rn.workingColorSpace){if(e=Nm(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ea(a,s,e+1/3),this.g=ea(a,s,e),this.b=ea(a,s,e-1/3)}return rn.toWorkingColorSpace(this,r),this}setStyle(e,t=ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){const i=Hf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return rn.fromWorkingColorSpace(Et.copy(this),e),Math.round(Ft(Et.r*255,0,255))*65536+Math.round(Ft(Et.g*255,0,255))*256+Math.round(Ft(Et.b*255,0,255))}getHexString(e=ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rn.workingColorSpace){rn.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,r=Et.g,s=Et.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rn.workingColorSpace){return rn.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=ze){rn.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,r=Et.b;return e!==ze?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=i,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(Ms);const i=ko(an.h,Ms.h,t),r=ko(an.s,Ms.s,t),s=ko(an.l,Ms.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new st;st.NAMES=Hf;class Js extends ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new j,Ss=new ot;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Gf extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vf extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class En extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let eg=0;const Yt=new Mt,ta=new jt,Vi=new j,Ht=new os,Cr=new os,gt=new j;class ai extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ff(e)?Vf:Gf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return ta.lookAt(e),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new En(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Ht.min,Cr.min),Ht.expandByPoint(gt),gt.addVectors(Ht.max,Cr.max),Ht.expandByPoint(gt)):(Ht.expandByPoint(Cr.min),Ht.expandByPoint(Cr.max))}Ht.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gt.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),gt.add(Vi)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<o;L++)c[L]=new j,u[L]=new j;const f=new j,d=new j,p=new j,_=new ot,g=new ot,m=new ot,h=new j,E=new j;function y(L,se,O){f.fromArray(r,L*3),d.fromArray(r,se*3),p.fromArray(r,O*3),_.fromArray(a,L*2),g.fromArray(a,se*2),m.fromArray(a,O*2),d.sub(f),p.sub(f),g.sub(_),m.sub(_);const U=1/(g.x*m.y-m.x*g.y);isFinite(U)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(U),E.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(U),c[L].add(h),c[se].add(h),c[O].add(h),u[L].add(E),u[se].add(E),u[O].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let L=0,se=w.length;L<se;++L){const O=w[L],U=O.start,I=O.count;for(let k=U,W=U+I;k<W;k+=3)y(i[k+0],i[k+1],i[k+2])}const T=new j,C=new j,P=new j,B=new j;function M(L){P.fromArray(s,L*3),B.copy(P);const se=c[L];T.copy(se),T.sub(P.multiplyScalar(P.dot(se))).normalize(),C.crossVectors(B,se);const U=C.dot(u[L])<0?-1:1;l[L*4]=T.x,l[L*4+1]=T.y,l[L*4+2]=T.z,l[L*4+3]=U}for(let L=0,se=w.length;L<se;++L){const O=w[L],U=O.start,I=O.count;for(let k=U,W=U+I;k<W;k+=3)M(i[k+0]),M(i[k+1]),M(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new yn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ai,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new Mt,gn=new $m,ys=new Qa,Pc=new j,Wi=new j,Xi=new j,$i=new j,na=new j,Es=new j,bs=new ot,Ts=new ot,ws=new ot,Lc=new j,Uc=new j,Dc=new j,As=new j,Rs=new j;class Mn extends jt{constructor(e=new ai,t=new Js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Es.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(na.fromBufferAttribute(f,e),a?Es.addScaledVector(na,u):Es.addScaledVector(na.sub(t),u))}t.add(Es)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(s),gn.copy(e.ray).recast(e.near),!(ys.containsPoint(gn.origin)===!1&&(gn.intersectSphere(ys,Pc)===null||gn.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Cc.copy(s).invert(),gn.copy(e.ray).applyMatrix4(Cc),!(i.boundingBox!==null&&gn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=s[g.materialIndex],h=Math.max(g.start,d.start),E=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=h,w=E;y<w;y+=3){const T=a.getX(y),C=a.getX(y+1),P=a.getX(y+2);i=Cs(this,m,e,gn,l,c,u,T,C,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const h=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);i=Cs(this,s,e,gn,l,c,u,h,E,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=s[g.materialIndex],h=Math.max(g.start,d.start),E=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=h,w=E;y<w;y+=3){const T=y,C=y+1,P=y+2;i=Cs(this,m,e,gn,l,c,u,T,C,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const h=g,E=g+1,y=g+2;i=Cs(this,s,e,gn,l,c,u,h,E,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function tg(n,e,t,i,r,s,a,o){let l;if(e.side===Ot?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ri,o),l===null)return null;Rs.copy(o),Rs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Rs);return c<t.near||c>t.far?null:{distance:c,point:Rs.clone(),object:n}}function Cs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Wi),n.getVertexPosition(l,Xi),n.getVertexPosition(c,$i);const u=tg(n,e,t,i,Wi,Xi,$i,As);if(u){r&&(bs.fromBufferAttribute(r,o),Ts.fromBufferAttribute(r,l),ws.fromBufferAttribute(r,c),u.uv=ln.getInterpolation(As,Wi,Xi,$i,bs,Ts,ws,new ot)),s&&(bs.fromBufferAttribute(s,o),Ts.fromBufferAttribute(s,l),ws.fromBufferAttribute(s,c),u.uv1=ln.getInterpolation(As,Wi,Xi,$i,bs,Ts,ws,new ot),u.uv2=u.uv1),a&&(Lc.fromBufferAttribute(a,o),Uc.fromBufferAttribute(a,l),Dc.fromBufferAttribute(a,c),u.normal=ln.getInterpolation(As,Wi,Xi,$i,Lc,Uc,Dc,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new j,materialIndex:0};ln.getNormal(Wi,Xi,$i,f.normal),u.face=f}return u}class as extends ai{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(f,2));function _(g,m,h,E,y,w,T,C,P,B,M){const L=w/P,se=T/B,O=w/2,U=T/2,I=C/2,k=P+1,W=B+1;let $=0,X=0;const de=new j;for(let le=0;le<W;le++){const Ae=le*se-U;for(let he=0;he<k;he++){const Z=he*L-O;de[g]=Z*E,de[m]=Ae*y,de[h]=I,c.push(de.x,de.y,de.z),de[g]=0,de[m]=0,de[h]=C>0?1:-1,u.push(de.x,de.y,de.z),f.push(he/P),f.push(1-le/B),$+=1}}for(let le=0;le<B;le++)for(let Ae=0;Ae<P;Ae++){const he=d+Ae+k*le,Z=d+Ae+k*(le+1),oe=d+(Ae+1)+k*(le+1),ve=d+(Ae+1)+k*le;l.push(he,Z,ve),l.push(Z,oe,ve),X+=6}o.addGroup(p,X,M),p+=X,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=mr(n[t]);for(const r in i)e[r]=i[r]}return e}function ng(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wf(n){return n.getRenderTarget()===null?n.outputColorSpace:wn}const ig={clone:mr,merge:Ut};var rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rg,this.fragmentShader=sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xf extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qt extends Xf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,qi=1;class og extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Qt(ji,qi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Qt(ji,qi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Qt(ji,qi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Qt(ji,qi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Qt(ji,qi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Qt(ji,qi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Gn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class $f extends $t{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ag extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(kr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ti?ze:wi),this.texture=new $f(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new as(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:ni});s.uniforms.tEquirect.value=t;const a=new Mn(r,s),o=t.minFilter;return t.minFilter===Kr&&(t.minFilter=Jt),new og(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const ia=new j,lg=new j,cg=new je;class _i{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ia.subVectors(i,t).cross(lg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ia),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cg.getNormalMatrix(e),r=this.coplanarPoint(ia).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Qa,Ps=new j;class jf{constructor(e=new _i,t=new _i,i=new _i,r=new _i,s=new _i,a=new _i){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],d=i[8],p=i[9],_=i[10],g=i[11],m=i[12],h=i[13],E=i[14],y=i[15];return t[0].setComponents(o-r,f-l,g-d,y-m).normalize(),t[1].setComponents(o+r,f+l,g+d,y+m).normalize(),t[2].setComponents(o+s,f+c,g+p,y+h).normalize(),t[3].setComponents(o-s,f-c,g-p,y-h).normalize(),t[4].setComponents(o-a,f-u,g-_,y-E).normalize(),t[5].setComponents(o+a,f+u,g+_,y+E).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ps.x=r.normal.x>0?e.max.x:e.min.x,Ps.y=r.normal.y>0?e.max.y:e.min.y,Ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ug(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,p=u.updateRange;n.bindBuffer(f,c),p.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class el extends ai{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<u;h++){const E=h*d-a;for(let y=0;y<c;y++){const w=y*f-s;_.push(w,-E,0),g.push(0,0,1),m.push(y/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<o;E++){const y=E+c*h,w=E+c*(h+1),T=E+1+c*(h+1),C=E+1+c*h;p.push(y,w,C),p.push(w,T,C)}this.setIndex(p),this.setAttribute("position",new En(_,3)),this.setAttribute("normal",new En(g,3)),this.setAttribute("uv",new En(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.widthSegments,e.heightSegments)}}var fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_g="vec3 transformed = vec3( position );",vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ug=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,e_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,t_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,o_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,a_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,u_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,p_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,m_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,__=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,y_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,b_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,L_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,q_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,K_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,tv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,nv=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iv=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rv=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,av=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mv=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ev=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ge={alphamap_fragment:fg,alphamap_pars_fragment:dg,alphatest_fragment:hg,alphatest_pars_fragment:pg,aomap_fragment:mg,aomap_pars_fragment:gg,begin_vertex:_g,beginnormal_vertex:vg,bsdfs:xg,iridescence_fragment:Mg,bumpmap_pars_fragment:Sg,clipping_planes_fragment:yg,clipping_planes_pars_fragment:Eg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:Tg,color_fragment:wg,color_pars_fragment:Ag,color_pars_vertex:Rg,color_vertex:Cg,common:Pg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Ug,displacementmap_pars_vertex:Dg,displacementmap_vertex:Ig,emissivemap_fragment:Ng,emissivemap_pars_fragment:Fg,encodings_fragment:Og,encodings_pars_fragment:Bg,envmap_fragment:zg,envmap_common_pars_fragment:kg,envmap_pars_fragment:Hg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:e_,envmap_vertex:Vg,fog_vertex:Wg,fog_pars_vertex:Xg,fog_fragment:$g,fog_pars_fragment:jg,gradientmap_pars_fragment:qg,lightmap_fragment:Yg,lightmap_pars_fragment:Kg,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:Qg,lights_toon_fragment:t_,lights_toon_pars_fragment:n_,lights_phong_fragment:i_,lights_phong_pars_fragment:r_,lights_physical_fragment:s_,lights_physical_pars_fragment:o_,lights_fragment_begin:a_,lights_fragment_maps:l_,lights_fragment_end:c_,logdepthbuf_fragment:u_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:h_,map_fragment:p_,map_pars_fragment:m_,map_particle_fragment:g_,map_particle_pars_fragment:__,metalnessmap_fragment:v_,metalnessmap_pars_fragment:x_,morphcolor_vertex:M_,morphnormal_vertex:S_,morphtarget_pars_vertex:y_,morphtarget_vertex:E_,normal_fragment_begin:b_,normal_fragment_maps:T_,normal_pars_fragment:w_,normal_pars_vertex:A_,normal_vertex:R_,normalmap_pars_fragment:C_,clearcoat_normal_fragment_begin:P_,clearcoat_normal_fragment_maps:L_,clearcoat_pars_fragment:U_,iridescence_pars_fragment:D_,output_fragment:I_,packing:N_,premultiplied_alpha_fragment:F_,project_vertex:O_,dithering_fragment:B_,dithering_pars_fragment:z_,roughnessmap_fragment:k_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:V_,shadowmap_vertex:W_,shadowmask_pars_fragment:X_,skinbase_vertex:$_,skinning_pars_vertex:j_,skinning_vertex:q_,skinnormal_vertex:Y_,specularmap_fragment:K_,specularmap_pars_fragment:Z_,tonemapping_fragment:J_,tonemapping_pars_fragment:Q_,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:rv,worldpos_vertex:sv,background_vert:ov,background_frag:av,backgroundCube_vert:lv,backgroundCube_frag:cv,cube_vert:uv,cube_frag:fv,depth_vert:dv,depth_frag:hv,distanceRGBA_vert:pv,distanceRGBA_frag:mv,equirect_vert:gv,equirect_frag:_v,linedashed_vert:vv,linedashed_frag:xv,meshbasic_vert:Mv,meshbasic_frag:Sv,meshlambert_vert:yv,meshlambert_frag:Ev,meshmatcap_vert:bv,meshmatcap_frag:Tv,meshnormal_vert:wv,meshnormal_frag:Av,meshphong_vert:Rv,meshphong_frag:Cv,meshphysical_vert:Pv,meshphysical_frag:Lv,meshtoon_vert:Uv,meshtoon_frag:Dv,points_vert:Iv,points_frag:Nv,shadow_vert:Fv,shadow_frag:Ov,sprite_vert:Bv,sprite_frag:zv},Me={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaTest:{value:0}}},xn={basic:{uniforms:Ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new st(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ut([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ut([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new st(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ut([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ut([Me.points,Me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ut([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ut([Me.common,Me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ut([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ut([Me.sprite,Me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ut([Me.common,Me.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ut([Me.lights,Me.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};xn.physical={uniforms:Ut([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ls={r:0,b:0,g:0};function kv(n,e,t,i,r,s,a){const o=new st(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function _(m,h){let E=!1,y=h.isScene===!0?h.background:null;switch(y&&y.isTexture&&(y=(h.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),E=!0),n.xr.getEnvironmentBlendMode()){case"opaque":E=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),E=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),E=!0;break}(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===uo)?(u===void 0&&(u=new Mn(new as(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:mr(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=y.colorSpace!==ze,(f!==y||d!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Mn(new el(2,2),new Li({name:"BackgroundMaterial",uniforms:mr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=y.colorSpace!==ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,h){m.getRGB(Ls,Wf(n)),i.buffers.color.setClear(Ls.r,Ls.g,Ls.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),l=h,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function Hv(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(I,k,W,$,X){let de=!1;if(a){const le=g($,W,k);c!==le&&(c=le,p(c.object)),de=h(I,$,W,X),de&&E(I,$,W,X)}else{const le=k.wireframe===!0;(c.geometry!==$.id||c.program!==W.id||c.wireframe!==le)&&(c.geometry=$.id,c.program=W.id,c.wireframe=le,de=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,B(I,k,W,$),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function g(I,k,W){const $=W.wireframe===!0;let X=o[I.id];X===void 0&&(X={},o[I.id]=X);let de=X[k.id];de===void 0&&(de={},X[k.id]=de);let le=de[$];return le===void 0&&(le=m(d()),de[$]=le),le}function m(I){const k=[],W=[],$=[];for(let X=0;X<r;X++)k[X]=0,W[X]=0,$[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:W,attributeDivisors:$,object:I,attributes:{},index:null}}function h(I,k,W,$){const X=c.attributes,de=k.attributes;let le=0;const Ae=W.getAttributes();for(const he in Ae)if(Ae[he].location>=0){const oe=X[he];let ve=de[he];if(ve===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(ve=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(ve=I.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;le++}return c.attributesNum!==le||c.index!==$}function E(I,k,W,$){const X={},de=k.attributes;let le=0;const Ae=W.getAttributes();for(const he in Ae)if(Ae[he].location>=0){let oe=de[he];oe===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor));const ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),X[he]=ve,le++}c.attributes=X,c.attributesNum=le,c.index=$}function y(){const I=c.newAttributes;for(let k=0,W=I.length;k<W;k++)I[k]=0}function w(I){T(I,0)}function T(I,k){const W=c.newAttributes,$=c.enabledAttributes,X=c.attributeDivisors;W[I]=1,$[I]===0&&(n.enableVertexAttribArray(I),$[I]=1),X[I]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),X[I]=k)}function C(){const I=c.newAttributes,k=c.enabledAttributes;for(let W=0,$=k.length;W<$;W++)k[W]!==I[W]&&(n.disableVertexAttribArray(W),k[W]=0)}function P(I,k,W,$,X,de){i.isWebGL2===!0&&(W===n.INT||W===n.UNSIGNED_INT)?n.vertexAttribIPointer(I,k,W,X,de):n.vertexAttribPointer(I,k,W,$,X,de)}function B(I,k,W,$){if(i.isWebGL2===!1&&(I.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const X=$.attributes,de=W.getAttributes(),le=k.defaultAttributeValues;for(const Ae in de){const he=de[Ae];if(he.location>=0){let Z=X[Ae];if(Z===void 0&&(Ae==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),Ae==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){const oe=Z.normalized,ve=Z.itemSize,_e=t.get(Z);if(_e===void 0)continue;const b=_e.buffer,ae=_e.type,te=_e.bytesPerElement;if(Z.isInterleavedBufferAttribute){const q=Z.data,xe=q.stride,Pe=Z.offset;if(q.isInstancedInterleavedBuffer){for(let S=0;S<he.locationSize;S++)T(he.location+S,q.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let S=0;S<he.locationSize;S++)w(he.location+S);n.bindBuffer(n.ARRAY_BUFFER,b);for(let S=0;S<he.locationSize;S++)P(he.location+S,ve/he.locationSize,ae,oe,xe*te,(Pe+ve/he.locationSize*S)*te)}else{if(Z.isInstancedBufferAttribute){for(let q=0;q<he.locationSize;q++)T(he.location+q,Z.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let q=0;q<he.locationSize;q++)w(he.location+q);n.bindBuffer(n.ARRAY_BUFFER,b);for(let q=0;q<he.locationSize;q++)P(he.location+q,ve/he.locationSize,ae,oe,ve*te,ve/he.locationSize*q*te)}}else if(le!==void 0){const oe=le[Ae];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(he.location,oe);break;case 3:n.vertexAttrib3fv(he.location,oe);break;case 4:n.vertexAttrib4fv(he.location,oe);break;default:n.vertexAttrib1fv(he.location,oe)}}}}C()}function M(){O();for(const I in o){const k=o[I];for(const W in k){const $=k[W];for(const X in $)_($[X].object),delete $[X];delete k[W]}delete o[I]}}function L(I){if(o[I.id]===void 0)return;const k=o[I.id];for(const W in k){const $=k[W];for(const X in $)_($[X].object),delete $[X];delete k[W]}delete o[I.id]}function se(I){for(const k in o){const W=o[k];if(W[I.id]===void 0)continue;const $=W[I.id];for(const X in $)_($[X].object),delete $[X];delete W[I.id]}}function O(){U(),u=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:O,resetDefaultState:U,dispose:M,releaseStatesOfGeometry:L,releaseStatesOfProgram:se,initAttributes:y,enableAttribute:w,disableUnusedAttributes:C}}function Gv(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,p;if(r)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Vv(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,w=a||e.has("OES_texture_float"),T=y&&w,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:T,maxSamples:C}}function Wv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new _i,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,y=E*4;let w=h.clippingState||null;l.value=w,w=u(_,d,y,p);for(let T=0;T!==y;++T)w[T]=t[T];h.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,w=p;y!==g;++y,w+=4)a.copy(f[y]).applyMatrix4(E,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Xv(n){let e=new WeakMap;function t(a,o){return o===ba?a.mapping=dr:o===Ta&&(a.mapping=hr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ba||o===Ta)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ag(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $v extends Xf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qi=4,Ic=[.125,.215,.35,.446,.526,.582],xi=20,ra=new $v,Nc=new st;let sa=null;const vi=(1+Math.sqrt(5))/2,Yi=1/vi,Fc=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,vi,Yi),new j(0,vi,-Yi),new j(Yi,0,vi),new j(-Yi,0,vi),new j(vi,Yi,0),new j(-vi,Yi,0)];class Oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){sa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sa),e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sa=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Zr,format:un,colorSpace:wn,depthBuffer:!1},r=Bc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jv(s)),this._blurMaterial=qv(s,e,t)}return r}_compileMaterial(e){const t=new Mn(this._lodPlanes[0],e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,i,r){const o=new Qt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Nc),u.toneMapping=Gn,u.autoClear=!1;const p=new Js({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),_=new Mn(new as,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Nc),g=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):E===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const y=this._cubeSize;Us(r,E*y,h>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===dr||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Mn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Us(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ra)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fc[(r-1)%Fc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Mn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xi-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):xi;m>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const h=[];let E=0;for(let P=0;P<xi;++P){const B=P/g,M=Math.exp(-B*B/2);h.push(M),P===0?E+=M:P<m&&(E+=2*M)}for(let P=0;P<h.length;P++)h[P]=h[P]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const w=this._sizeLods[r],T=3*w*(r>y-Qi?r-y+Qi:0),C=4*(this._cubeSize-w);Us(t,T,C,3*w,2*w),l.setRenderTarget(t),l.render(f,ra)}}function jv(n){const e=[],t=[],i=[];let r=n;const s=n-Qi+1+Ic.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Qi?l=Ic[a-n+Qi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,g=3,m=2,h=1,E=new Float32Array(g*_*p),y=new Float32Array(m*_*p),w=new Float32Array(h*_*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,B=C>2?0:-1,M=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];E.set(M,g*_*C),y.set(d,m*_*C);const L=[C,C,C,C,C,C];w.set(L,h*_*C)}const T=new ai;T.setAttribute("position",new yn(E,g)),T.setAttribute("uv",new yn(y,m)),T.setAttribute("faceIndex",new yn(w,h)),e.push(T),r>Qi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bc(n,e,t){const i=new Pi(n,e,t);return i.texture.mapping=uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function qv(n,e,t){const i=new Float32Array(xi),r=new j(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function zc(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function kc(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function tl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ba||l===Ta,u=l===dr||l===hr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Oc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Oc(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Kv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Zv(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let g=0;if(p!==null){const E=p.array;g=p.version;for(let y=0,w=E.length;y<w;y+=3){const T=E[y+0],C=E[y+1],P=E[y+2];d.push(T,C,C,P,P,T)}}else{const E=_.array;g=_.version;for(let y=0,w=E.length/3-1;y<w;y+=3){const T=y+0,C=y+1,P=y+2;d.push(T,C,C,P,P,T)}}const m=new(Ff(d)?Vf:Gf)(d,1);m.version=g;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Jv(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){n.drawElements(s,p,o,d*l),t.update(p,s,1)}function f(d,p,_){if(_===0)return;let g,m;if(r)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,o,d*l,_),t.update(p,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Qv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function e0(n,e){return n[0]-e[0]}function t0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function n0(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new xt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let k=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",k)};var p=k;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],B=u.morphAttributes.color||[];let M=0;y===!0&&(M=1),w===!0&&(M=2),T===!0&&(M=3);let L=u.attributes.position.count*M,se=1;L>e.maxTextureSize&&(se=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const O=new Float32Array(L*se*4*g),U=new zf(O,L,se,g);U.type=yi,U.needsUpdate=!0;const I=M*4;for(let W=0;W<g;W++){const $=C[W],X=P[W],de=B[W],le=L*se*4*W;for(let Ae=0;Ae<$.count;Ae++){const he=Ae*I;y===!0&&(a.fromBufferAttribute($,Ae),O[le+he+0]=a.x,O[le+he+1]=a.y,O[le+he+2]=a.z,O[le+he+3]=0),w===!0&&(a.fromBufferAttribute(X,Ae),O[le+he+4]=a.x,O[le+he+5]=a.y,O[le+he+6]=a.z,O[le+he+7]=0),T===!0&&(a.fromBufferAttribute(de,Ae),O[le+he+8]=a.x,O[le+he+9]=a.y,O[le+he+10]=a.z,O[le+he+11]=de.itemSize===4?a.w:1)}}m={count:g,texture:U,size:new ot(L,se)},s.set(u,m),u.addEventListener("dispose",k)}let h=0;for(let y=0;y<d.length;y++)h+=d[y];const E=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let w=0;w<_;w++)g[w]=[w,0];i[u.id]=g}for(let w=0;w<_;w++){const T=g[w];T[0]=w,T[1]=d[w]}g.sort(t0);for(let w=0;w<8;w++)w<_&&g[w][1]?(o[w][0]=g[w][0],o[w][1]=g[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(e0);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let E=0;for(let w=0;w<8;w++){const T=o[w],C=T[0],P=T[1];C!==Number.MAX_SAFE_INTEGER&&P?(m&&u.getAttribute("morphTarget"+w)!==m[C]&&u.setAttribute("morphTarget"+w,m[C]),h&&u.getAttribute("morphNormal"+w)!==h[C]&&u.setAttribute("morphNormal"+w,h[C]),r[w]=P,E+=P):(m&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),h&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}const y=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function i0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Yf=new $t,Kf=new zf,Zf=new Wm,Jf=new $f,Hc=[],Gc=[],Vc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function Sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Hc[r];if(s===void 0&&(s=new Float32Array(r),Hc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function po(n,e){let t=Gc[e];t===void 0&&(t=new Int32Array(e),Gc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function r0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function o0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function a0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function l0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;Xc.set(i),n.uniformMatrix2fv(this.addr,!1,Xc),pt(t,i)}}function c0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;Wc.set(i),n.uniformMatrix3fv(this.addr,!1,Wc),pt(t,i)}}function u0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;Vc.set(i),n.uniformMatrix4fv(this.addr,!1,Vc),pt(t,i)}}function f0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function d0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function h0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function p0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function m0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function v0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function x0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Yf,r)}function M0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Zf,r)}function S0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Jf,r)}function y0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Kf,r)}function E0(n){switch(n){case 5126:return r0;case 35664:return s0;case 35665:return o0;case 35666:return a0;case 35674:return l0;case 35675:return c0;case 35676:return u0;case 5124:case 35670:return f0;case 35667:case 35671:return d0;case 35668:case 35672:return h0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return y0}}function b0(n,e){n.uniform1fv(this.addr,e)}function T0(n,e){const t=Sr(e,this.size,2);n.uniform2fv(this.addr,t)}function w0(n,e){const t=Sr(e,this.size,3);n.uniform3fv(this.addr,t)}function A0(n,e){const t=Sr(e,this.size,4);n.uniform4fv(this.addr,t)}function R0(n,e){const t=Sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function C0(n,e){const t=Sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function P0(n,e){const t=Sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function L0(n,e){n.uniform1iv(this.addr,e)}function U0(n,e){n.uniform2iv(this.addr,e)}function D0(n,e){n.uniform3iv(this.addr,e)}function I0(n,e){n.uniform4iv(this.addr,e)}function N0(n,e){n.uniform1uiv(this.addr,e)}function F0(n,e){n.uniform2uiv(this.addr,e)}function O0(n,e){n.uniform3uiv(this.addr,e)}function B0(n,e){n.uniform4uiv(this.addr,e)}function z0(n,e,t){const i=this.cache,r=e.length,s=po(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Yf,s[a])}function k0(n,e,t){const i=this.cache,r=e.length,s=po(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Zf,s[a])}function H0(n,e,t){const i=this.cache,r=e.length,s=po(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Jf,s[a])}function G0(n,e,t){const i=this.cache,r=e.length,s=po(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Kf,s[a])}function V0(n){switch(n){case 5126:return b0;case 35664:return T0;case 35665:return w0;case 35666:return A0;case 35674:return R0;case 35675:return C0;case 35676:return P0;case 5124:case 35670:return L0;case 35667:case 35671:return U0;case 35668:case 35672:return D0;case 35669:case 35673:return I0;case 5125:return N0;case 36294:return F0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return G0}}class W0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=E0(t.type)}}class X0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=V0(t.type)}}class $0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function $c(n,e){n.seq.push(e),n.map[e.id]=e}function j0(n,e,t){const i=n.name,r=i.length;for(oa.lastIndex=0;;){const s=oa.exec(i),a=oa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){$c(t,c===void 0?new W0(o,n,e):new X0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new $0(o),$c(t,f)),t=f}}}class ks{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);j0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function jc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let q0=0;function Y0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function K0(n){switch(n){case wn:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function qc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Y0(n.getShaderSource(e),a)}else return r}function Z0(n,e){const t=K0(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function J0(n,e){let t;switch(e){case cm:t="Linear";break;case um:t="Reinhard";break;case fm:t="OptimizedCineon";break;case dm:t="ACESFilmic";break;case hm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Q0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Dr).join(`
`)}function ex(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Dr(n){return n!==""}function Yc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pa(n){return n.replace(nx,ix)}function ix(n,e){const t=Ge[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Pa(t)}const rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(n){return n.replace(rx,sx)}function sx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ox(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Hp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function ax(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case hr:e="ENVMAP_TYPE_CUBE";break;case uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function cx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lf:e="ENVMAP_BLENDING_MULTIPLY";break;case am:e="ENVMAP_BLENDING_MIX";break;case lm:e="ENVMAP_BLENDING_ADD";break}return e}function ux(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fx(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ox(t),c=ax(t),u=lx(t),f=cx(t),d=ux(t),p=t.isWebGL2?"":Q0(t),_=ex(s),g=r.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[_].filter(Dr).join(`
`),m.length>0&&(m+=`
`),h=[p,_].filter(Dr).join(`
`),h.length>0&&(h+=`
`)):(m=[Jc(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),h=[p,Jc(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Gn?J0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,Z0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),a=Pa(a),a=Yc(a,t),a=Kc(a,t),o=Pa(o),o=Yc(o,t),o=Kc(o,t),a=Zc(a),o=Zc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=E+m+a,w=E+h+o,T=jc(r,r.VERTEX_SHADER,y),C=jc(r,r.FRAGMENT_SHADER,w);if(r.attachShader(g,T),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(g).trim(),L=r.getShaderInfoLog(T).trim(),se=r.getShaderInfoLog(C).trim();let O=!0,U=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,T,C);else{const I=qc(r,T,"vertex"),k=qc(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+I+`
`+k)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(L===""||se==="")&&(U=!1);U&&(this.diagnostics={runnable:O,programLog:M,vertexShader:{log:L,prefix:m},fragmentShader:{log:se,prefix:h}})}r.deleteShader(T),r.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new ks(r,g)),P};let B;return this.getAttributes=function(){return B===void 0&&(B=tx(r,g)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=q0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=C,this}let dx=0;class hx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new px(e),t.set(e,i)),i}}class px{constructor(e){this.id=dx++,this.code=e,this.usedTimes=0}}function mx(n,e,t,i,r,s,a){const o=new kf,l=new hx,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===1?"uv1":M===2?"uv2":M===3?"uv3":"uv"}function m(M,L,se,O,U){const I=O.fog,k=U.geometry,W=M.isMeshStandardMaterial?O.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),X=$&&$.mapping===uo?$.image.height:null,de=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const le=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ae=le!==void 0?le.length:0;let he=0;k.morphAttributes.position!==void 0&&(he=1),k.morphAttributes.normal!==void 0&&(he=2),k.morphAttributes.color!==void 0&&(he=3);let Z,oe,ve,_e;if(de){const et=xn[de];Z=et.vertexShader,oe=et.fragmentShader}else Z=M.vertexShader,oe=M.fragmentShader,l.update(M),ve=l.getVertexShaderID(M),_e=l.getFragmentShaderID(M);const b=n.getRenderTarget(),ae=U.isInstancedMesh===!0,te=!!M.map,q=!!M.matcap,xe=!!$,Pe=!!M.aoMap,S=!!M.lightMap,R=!!M.bumpMap,z=!!M.normalMap,ne=!!M.displacementMap,Y=!!M.emissiveMap,re=!!M.metalnessMap,ue=!!M.roughnessMap,fe=M.clearcoat>0,pe=M.iridescence>0,x=M.sheen>0,v=M.transmission>0,N=fe&&!!M.clearcoatMap,G=fe&&!!M.clearcoatNormalMap,K=fe&&!!M.clearcoatRoughnessMap,ce=pe&&!!M.iridescenceMap,Se=pe&&!!M.iridescenceThicknessMap,ge=x&&!!M.sheenColorMap,J=x&&!!M.sheenRoughnessMap,ye=!!M.specularMap,Te=!!M.specularColorMap,we=!!M.specularIntensityMap,Ee=v&&!!M.transmissionMap,Re=v&&!!M.thicknessMap,Ne=!!M.gradientMap,ke=!!M.alphaMap,at=M.alphaTest>0,F=!!M.extensions,Q=!!k.attributes.uv1,me=!!k.attributes.uv2,be=!!k.attributes.uv3;return{isWebGL2:u,shaderID:de,shaderName:M.type,vertexShader:Z,fragmentShader:oe,defines:M.defines,customVertexShaderID:ve,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:ae,instancingColor:ae&&U.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:b===null?n.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:wn,map:te,matcap:q,envMap:xe,envMapMode:xe&&$.mapping,envMapCubeUVHeight:X,aoMap:Pe,lightMap:S,bumpMap:R,normalMap:z,displacementMap:d&&ne,emissiveMap:Y,normalMapObjectSpace:z&&M.normalMapType===Dm,normalMapTangentSpace:z&&M.normalMapType===Um,metalnessMap:re,roughnessMap:ue,clearcoat:fe,clearcoatMap:N,clearcoatNormalMap:G,clearcoatRoughnessMap:K,iridescence:pe,iridescenceMap:ce,iridescenceThicknessMap:Se,sheen:x,sheenColorMap:ge,sheenRoughnessMap:J,specularMap:ye,specularColorMap:Te,specularIntensityMap:we,transmission:v,transmissionMap:Ee,thicknessMap:Re,gradientMap:Ne,opaque:M.transparent===!1&&M.blending===ar,alphaMap:ke,alphaTest:at,combine:M.combine,mapUv:te&&g(M.map.channel),aoMapUv:Pe&&g(M.aoMap.channel),lightMapUv:S&&g(M.lightMap.channel),bumpMapUv:R&&g(M.bumpMap.channel),normalMapUv:z&&g(M.normalMap.channel),displacementMapUv:ne&&g(M.displacementMap.channel),emissiveMapUv:Y&&g(M.emissiveMap.channel),metalnessMapUv:re&&g(M.metalnessMap.channel),roughnessMapUv:ue&&g(M.roughnessMap.channel),clearcoatMapUv:N&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:G&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:J&&g(M.sheenRoughnessMap.channel),specularMapUv:ye&&g(M.specularMap.channel),specularColorMapUv:Te&&g(M.specularColorMap.channel),specularIntensityMapUv:we&&g(M.specularIntensityMap.channel),transmissionMapUv:Ee&&g(M.transmissionMap.channel),thicknessMapUv:Re&&g(M.thicknessMap.channel),alphaMapUv:ke&&g(M.alphaMap.channel),vertexTangents:z&&!!k.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Q,vertexUv2s:me,vertexUv3s:be,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(te||ke),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:he,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&se.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:Gn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zn,flipSided:M.side===Ot,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:F&&M.extensions.derivatives===!0,extensionFragDepth:F&&M.extensions.fragDepth===!0,extensionDrawBuffers:F&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:F&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const se in M.defines)L.push(se),L.push(M.defines[se]);return M.isRawShaderMaterial===!1&&(E(L,M),y(L,M),L.push(n.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function E(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function y(M,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.matcap&&o.enable(4),L.envMap&&o.enable(5),L.normalMapObjectSpace&&o.enable(6),L.normalMapTangentSpace&&o.enable(7),L.clearcoat&&o.enable(8),L.iridescence&&o.enable(9),L.alphaTest&&o.enable(10),L.vertexColors&&o.enable(11),L.vertexAlphas&&o.enable(12),L.vertexUv1s&&o.enable(13),L.vertexUv2s&&o.enable(14),L.vertexUv3s&&o.enable(15),L.vertexTangents&&o.enable(16),M.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.skinning&&o.enable(4),L.morphTargets&&o.enable(5),L.morphNormals&&o.enable(6),L.morphColors&&o.enable(7),L.premultipliedAlpha&&o.enable(8),L.shadowMapEnabled&&o.enable(9),L.useLegacyLights&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),M.push(o.mask)}function w(M){const L=_[M.type];let se;if(L){const O=xn[L];se=ig.clone(O.uniforms)}else se=M.uniforms;return se}function T(M,L){let se;for(let O=0,U=c.length;O<U;O++){const I=c[O];if(I.cacheKey===L){se=I,++se.usedTimes;break}}return se===void 0&&(se=new fx(n,L,M,s),c.push(se)),se}function C(M){if(--M.usedTimes===0){const L=c.indexOf(M);c[L]=c[c.length-1],c.pop(),M.destroy()}}function P(M){l.remove(M)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:w,acquireProgram:T,releaseProgram:C,releaseShaderCache:P,programs:c,dispose:B}}function gx(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function _x(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function eu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,p,_,g,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=m),e++,h}function o(f,d,p,_,g,m){const h=a(f,d,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,_,g,m){const h=a(f,d,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||_x),i.length>1&&i.sort(d||Qc),r.length>1&&r.sort(d||Qc)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function vx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new eu,n.set(i,[a])):r>=s.length?(a=new eu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function xx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new st};break;case"SpotLight":t={position:new j,direction:new j,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function Mx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Sx=0;function yx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ex(n,e){const t=new xx,i=Mx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new j);const s=new j,a=new Mt,o=new Mt;function l(u,f){let d=0,p=0,_=0;for(let se=0;se<9;se++)r.probe[se].set(0,0,0);let g=0,m=0,h=0,E=0,y=0,w=0,T=0,C=0,P=0,B=0;u.sort(yx);const M=f===!0?Math.PI:1;for(let se=0,O=u.length;se<O;se++){const U=u[se],I=U.color,k=U.intensity,W=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=I.r*k*M,p+=I.g*k*M,_+=I.b*k*M;else if(U.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector(U.sh.coefficients[X],k);else if(U.isDirectionalLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*M),U.castShadow){const de=U.shadow,le=i.get(U);le.shadowBias=de.bias,le.shadowNormalBias=de.normalBias,le.shadowRadius=de.radius,le.shadowMapSize=de.mapSize,r.directionalShadow[g]=le,r.directionalShadowMap[g]=$,r.directionalShadowMatrix[g]=U.shadow.matrix,w++}r.directional[g]=X,g++}else if(U.isSpotLight){const X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(I).multiplyScalar(k*M),X.distance=W,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,r.spot[h]=X;const de=U.shadow;if(U.map&&(r.spotLightMap[P]=U.map,P++,de.updateMatrices(U),U.castShadow&&B++),r.spotLightMatrix[h]=de.matrix,U.castShadow){const le=i.get(U);le.shadowBias=de.bias,le.shadowNormalBias=de.normalBias,le.shadowRadius=de.radius,le.shadowMapSize=de.mapSize,r.spotShadow[h]=le,r.spotShadowMap[h]=$,C++}h++}else if(U.isRectAreaLight){const X=t.get(U);X.color.copy(I).multiplyScalar(k),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),r.rectArea[E]=X,E++}else if(U.isPointLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*M),X.distance=U.distance,X.decay=U.decay,U.castShadow){const de=U.shadow,le=i.get(U);le.shadowBias=de.bias,le.shadowNormalBias=de.normalBias,le.shadowRadius=de.radius,le.shadowMapSize=de.mapSize,le.shadowCameraNear=de.camera.near,le.shadowCameraFar=de.camera.far,r.pointShadow[m]=le,r.pointShadowMap[m]=$,r.pointShadowMatrix[m]=U.shadow.matrix,T++}r.point[m]=X,m++}else if(U.isHemisphereLight){const X=t.get(U);X.skyColor.copy(U.color).multiplyScalar(k*M),X.groundColor.copy(U.groundColor).multiplyScalar(k*M),r.hemi[y]=X,y++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const L=r.hash;(L.directionalLength!==g||L.pointLength!==m||L.spotLength!==h||L.rectAreaLength!==E||L.hemiLength!==y||L.numDirectionalShadows!==w||L.numPointShadows!==T||L.numSpotShadows!==C||L.numSpotMaps!==P)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=E,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=C+P-B,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=B,L.directionalLength=g,L.pointLength=m,L.spotLength=h,L.rectAreaLength=E,L.hemiLength=y,L.numDirectionalShadows=w,L.numPointShadows=T,L.numSpotShadows=C,L.numSpotMaps=P,r.version=Sx++)}function c(u,f){let d=0,p=0,_=0,g=0,m=0;const h=f.matrixWorldInverse;for(let E=0,y=u.length;E<y;E++){const w=u[E];if(w.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),d++}else if(w.isSpotLight){const T=r.spot[_];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),_++}else if(w.isRectAreaLight){const T=r.rectArea[g];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(h),o.identity(),a.copy(w.matrixWorld),a.premultiply(h),o.extractRotation(a),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(h),p++}else if(w.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function tu(n,e){const t=new Ex(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function bx(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new tu(n,e),t.set(s,[l])):a>=o.length?(l=new tu(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Tx extends ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wx extends ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cx(n,e,t){let i=new jf;const r=new ot,s=new ot,a=new xt,o=new Tx({depthPacking:Lm}),l=new wx,c={},u=t.maxTextureSize,f={[ri]:Ot,[Ot]:ri,[zn]:zn},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Ax,fragmentShader:Rx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ai;_.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rf;let h=this.type;this.render=function(T,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const B=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),se=n.state;se.setBlending(ni),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const O=h!==Nn&&this.type===Nn,U=h===Nn&&this.type!==Nn;for(let I=0,k=T.length;I<k;I++){const W=T[I],$=W.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const X=$.getFrameExtents();if(r.multiply(X),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,$.mapSize.y=s.y)),$.map===null||O===!0||U===!0){const le=this.type!==Nn?{minFilter:Dt,magFilter:Dt}:{};$.map!==null&&$.map.dispose(),$.map=new Pi(r.x,r.y,le),$.map.texture.name=W.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const de=$.getViewportCount();for(let le=0;le<de;le++){const Ae=$.getViewport(le);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),se.viewport(a),$.updateMatrices(W,le),i=$.getFrustum(),w(C,P,$.camera,W,this.type)}$.isPointLightShadow!==!0&&this.type===Nn&&E($,P),$.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(B,M,L)};function E(T,C){const P=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Pi(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,P,d,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,P,p,g,null)}function y(T,C,P,B){let M=null;const L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const se=M.uuid,O=C.uuid;let U=c[se];U===void 0&&(U={},c[se]=U);let I=U[O];I===void 0&&(I=M.clone(),U[O]=I),M=I}if(M.visible=C.visible,M.wireframe=C.wireframe,B===Nn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const se=n.properties.get(M);se.light=P}return M}function w(T,C,P,B,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Nn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const O=e.update(T),U=T.material;if(Array.isArray(U)){const I=O.groups;for(let k=0,W=I.length;k<W;k++){const $=I[k],X=U[$.materialIndex];if(X&&X.visible){const de=y(T,X,B,M);n.renderBufferDirect(P,null,O,de,T,$)}}}else if(U.visible){const I=y(T,U,B,M);n.renderBufferDirect(P,null,O,I,T,null)}}const se=T.children;for(let O=0,U=se.length;O<U;O++)w(se[O],C,P,B,M)}}function Px(n,e,t){const i=t.isWebGL2;function r(){let F=!1;const Q=new xt;let me=null;const be=new xt(0,0,0,0);return{setMask:function(Ce){me!==Ce&&!F&&(n.colorMask(Ce,Ce,Ce,Ce),me=Ce)},setLocked:function(Ce){F=Ce},setClear:function(Ce,et,tt,St,Xn){Xn===!0&&(Ce*=St,et*=St,tt*=St),Q.set(Ce,et,tt,St),be.equals(Q)===!1&&(n.clearColor(Ce,et,tt,St),be.copy(Q))},reset:function(){F=!1,me=null,be.set(-1,0,0,0)}}}function s(){let F=!1,Q=null,me=null,be=null;return{setTest:function(Ce){Ce?b(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(Ce){Q!==Ce&&!F&&(n.depthMask(Ce),Q=Ce)},setFunc:function(Ce){if(me!==Ce){switch(Ce){case em:n.depthFunc(n.NEVER);break;case tm:n.depthFunc(n.ALWAYS);break;case nm:n.depthFunc(n.LESS);break;case Ea:n.depthFunc(n.LEQUAL);break;case im:n.depthFunc(n.EQUAL);break;case rm:n.depthFunc(n.GEQUAL);break;case sm:n.depthFunc(n.GREATER);break;case om:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=Ce}},setLocked:function(Ce){F=Ce},setClear:function(Ce){be!==Ce&&(n.clearDepth(Ce),be=Ce)},reset:function(){F=!1,Q=null,me=null,be=null}}}function a(){let F=!1,Q=null,me=null,be=null,Ce=null,et=null,tt=null,St=null,Xn=null;return{setTest:function(ct){F||(ct?b(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(ct){Q!==ct&&!F&&(n.stencilMask(ct),Q=ct)},setFunc:function(ct,qt,pn){(me!==ct||be!==qt||Ce!==pn)&&(n.stencilFunc(ct,qt,pn),me=ct,be=qt,Ce=pn)},setOp:function(ct,qt,pn){(et!==ct||tt!==qt||St!==pn)&&(n.stencilOp(ct,qt,pn),et=ct,tt=qt,St=pn)},setLocked:function(ct){F=ct},setClear:function(ct){Xn!==ct&&(n.clearStencil(ct),Xn=ct)},reset:function(){F=!1,Q=null,me=null,be=null,Ce=null,et=null,tt=null,St=null,Xn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,g=[],m=null,h=!1,E=null,y=null,w=null,T=null,C=null,P=null,B=null,M=!1,L=null,se=null,O=null,U=null,I=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=$>=2);let de=null,le={};const Ae=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),Z=new xt().fromArray(Ae),oe=new xt().fromArray(he);function ve(F,Q,me,be){const Ce=new Uint8Array(4),et=n.createTexture();n.bindTexture(F,et),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<me;tt++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(Q,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Q+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return et}const _e={};_e[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_e[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),b(n.DEPTH_TEST),l.setFunc(Ea),ne(!1),Y(kl),b(n.CULL_FACE),R(ni);function b(F){d[F]!==!0&&(n.enable(F),d[F]=!0)}function ae(F){d[F]!==!1&&(n.disable(F),d[F]=!1)}function te(F,Q){return p[F]!==Q?(n.bindFramebuffer(F,Q),p[F]=Q,i&&(F===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Q),F===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Q)),!0):!1}function q(F,Q){let me=g,be=!1;if(F)if(me=_.get(Q),me===void 0&&(me=[],_.set(Q,me)),F.isWebGLMultipleRenderTargets){const Ce=F.texture;if(me.length!==Ce.length||me[0]!==n.COLOR_ATTACHMENT0){for(let et=0,tt=Ce.length;et<tt;et++)me[et]=n.COLOR_ATTACHMENT0+et;me.length=Ce.length,be=!0}}else me[0]!==n.COLOR_ATTACHMENT0&&(me[0]=n.COLOR_ATTACHMENT0,be=!0);else me[0]!==n.BACK&&(me[0]=n.BACK,be=!0);be&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function xe(F){return m!==F?(n.useProgram(F),m=F,!0):!1}const Pe={[Zi]:n.FUNC_ADD,[Vp]:n.FUNC_SUBTRACT,[Wp]:n.FUNC_REVERSE_SUBTRACT};if(i)Pe[Wl]=n.MIN,Pe[Xl]=n.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Pe[Wl]=F.MIN_EXT,Pe[Xl]=F.MAX_EXT)}const S={[Xp]:n.ZERO,[$p]:n.ONE,[jp]:n.SRC_COLOR,[Cf]:n.SRC_ALPHA,[Qp]:n.SRC_ALPHA_SATURATE,[Zp]:n.DST_COLOR,[Yp]:n.DST_ALPHA,[qp]:n.ONE_MINUS_SRC_COLOR,[Pf]:n.ONE_MINUS_SRC_ALPHA,[Jp]:n.ONE_MINUS_DST_COLOR,[Kp]:n.ONE_MINUS_DST_ALPHA};function R(F,Q,me,be,Ce,et,tt,St){if(F===ni){h===!0&&(ae(n.BLEND),h=!1);return}if(h===!1&&(b(n.BLEND),h=!0),F!==Gp){if(F!==E||St!==M){if((y!==Zi||C!==Zi)&&(n.blendEquation(n.FUNC_ADD),y=Zi,C=Zi),St)switch(F){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hl:n.blendFunc(n.ONE,n.ONE);break;case Gl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,T=null,P=null,B=null,E=F,M=St}return}Ce=Ce||Q,et=et||me,tt=tt||be,(Q!==y||Ce!==C)&&(n.blendEquationSeparate(Pe[Q],Pe[Ce]),y=Q,C=Ce),(me!==w||be!==T||et!==P||tt!==B)&&(n.blendFuncSeparate(S[me],S[be],S[et],S[tt]),w=me,T=be,P=et,B=tt),E=F,M=!1}function z(F,Q){F.side===zn?ae(n.CULL_FACE):b(n.CULL_FACE);let me=F.side===Ot;Q&&(me=!me),ne(me),F.blending===ar&&F.transparent===!1?R(ni):R(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const be=F.stencilWrite;c.setTest(be),be&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ue(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?b(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(F){L!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),L=F)}function Y(F){F!==zp?(b(n.CULL_FACE),F!==se&&(F===kl?n.cullFace(n.BACK):F===kp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),se=F}function re(F){F!==O&&(W&&n.lineWidth(F),O=F)}function ue(F,Q,me){F?(b(n.POLYGON_OFFSET_FILL),(U!==Q||I!==me)&&(n.polygonOffset(Q,me),U=Q,I=me)):ae(n.POLYGON_OFFSET_FILL)}function fe(F){F?b(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function pe(F){F===void 0&&(F=n.TEXTURE0+k-1),de!==F&&(n.activeTexture(F),de=F)}function x(F,Q,me){me===void 0&&(de===null?me=n.TEXTURE0+k-1:me=de);let be=le[me];be===void 0&&(be={type:void 0,texture:void 0},le[me]=be),(be.type!==F||be.texture!==Q)&&(de!==me&&(n.activeTexture(me),de=me),n.bindTexture(F,Q||_e[F]),be.type=F,be.texture=Q)}function v(){const F=le[de];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(F){Z.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Z.copy(F))}function Re(F){oe.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),oe.copy(F))}function Ne(F,Q){let me=f.get(Q);me===void 0&&(me=new WeakMap,f.set(Q,me));let be=me.get(F);be===void 0&&(be=n.getUniformBlockIndex(Q,F.name),me.set(F,be))}function ke(F,Q){const be=f.get(Q).get(F);u.get(Q)!==be&&(n.uniformBlockBinding(Q,be,F.__bindingPointIndex),u.set(Q,be))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},de=null,le={},p={},_=new WeakMap,g=[],m=null,h=!1,E=null,y=null,w=null,T=null,C=null,P=null,B=null,M=!1,L=null,se=null,O=null,U=null,I=null,Z.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:b,disable:ae,bindFramebuffer:te,drawBuffers:q,useProgram:xe,setBlending:R,setMaterial:z,setFlipSided:ne,setCullFace:Y,setLineWidth:re,setPolygonOffset:ue,setScissorTest:fe,activeTexture:pe,bindTexture:x,unbindTexture:v,compressedTexImage2D:N,compressedTexImage3D:G,texImage2D:Te,texImage3D:we,updateUBOMapping:Ne,uniformBlockBinding:ke,texStorage2D:J,texStorage3D:ye,texSubImage2D:K,texSubImage3D:ce,compressedTexSubImage2D:Se,compressedTexSubImage3D:ge,scissor:Ee,viewport:Re,reset:at}}function Lx(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(x,v){return h?new OffscreenCanvas(x,v):Zs("canvas")}function y(x,v,N,G){let K=1;if((x.width>G||x.height>G)&&(K=G/Math.max(x.width,x.height)),K<1||v===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const ce=v?Fm:Math.floor,Se=ce(K*x.width),ge=ce(K*x.height);g===void 0&&(g=E(Se,ge));const J=N?E(Se,ge):g;return J.width=Se,J.height=ge,J.getContext("2d").drawImage(x,0,0,Se,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+Se+"x"+ge+")."),J}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function w(x){return vc(x.width)&&vc(x.height)}function T(x){return o?!1:x.wrapS!==cn||x.wrapT!==cn||x.minFilter!==Dt&&x.minFilter!==Jt}function C(x,v){return x.generateMipmaps&&v&&x.minFilter!==Dt&&x.minFilter!==Jt}function P(x){n.generateMipmap(x)}function B(x,v,N,G,K=!1){if(o===!1)return v;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let ce=v;return v===n.RED&&(N===n.FLOAT&&(ce=n.R32F),N===n.HALF_FLOAT&&(ce=n.R16F),N===n.UNSIGNED_BYTE&&(ce=n.R8)),v===n.RG&&(N===n.FLOAT&&(ce=n.RG32F),N===n.HALF_FLOAT&&(ce=n.RG16F),N===n.UNSIGNED_BYTE&&(ce=n.RG8)),v===n.RGBA&&(N===n.FLOAT&&(ce=n.RGBA32F),N===n.HALF_FLOAT&&(ce=n.RGBA16F),N===n.UNSIGNED_BYTE&&(ce=G===ze&&K===!1?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)),(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function M(x,v,N){return C(x,N)===!0||x.isFramebufferTexture&&x.minFilter!==Dt&&x.minFilter!==Jt?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function L(x){return x===Dt||x===$l||x===Uo?n.NEAREST:n.LINEAR}function se(x){const v=x.target;v.removeEventListener("dispose",se),U(v),v.isVideoTexture&&_.delete(v)}function O(x){const v=x.target;v.removeEventListener("dispose",O),k(v)}function U(x){const v=i.get(x);if(v.__webglInit===void 0)return;const N=x.source,G=m.get(N);if(G){const K=G[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(x),Object.keys(G).length===0&&m.delete(N)}i.remove(x)}function I(x){const v=i.get(x);n.deleteTexture(v.__webglTexture);const N=x.source,G=m.get(N);delete G[v.__cacheKey],a.memory.textures--}function k(x){const v=x.texture,N=i.get(x),G=i.get(v);if(G.__webglTexture!==void 0&&(n.deleteTexture(G.__webglTexture),a.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)n.deleteFramebuffer(N.__webglFramebuffer[K]),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[K]);else{if(n.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let K=0;K<N.__webglColorRenderbuffer.length;K++)N.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[K]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let K=0,ce=v.length;K<ce;K++){const Se=i.get(v[K]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),a.memory.textures--),i.remove(v[K])}i.remove(v),i.remove(x)}let W=0;function $(){W=0}function X(){const x=W;return x>=l&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+l),W+=1,x}function de(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function le(x,v){const N=i.get(x);if(x.isVideoTexture&&fe(x),x.isRenderTargetTexture===!1&&x.version>0&&N.__version!==x.version){const G=x.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(N,x,v);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+v)}function Ae(x,v){const N=i.get(x);if(x.version>0&&N.__version!==x.version){ae(N,x,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+v)}function he(x,v){const N=i.get(x);if(x.version>0&&N.__version!==x.version){ae(N,x,v);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+v)}function Z(x,v){const N=i.get(x);if(x.version>0&&N.__version!==x.version){te(N,x,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+v)}const oe={[wa]:n.REPEAT,[cn]:n.CLAMP_TO_EDGE,[Aa]:n.MIRRORED_REPEAT},ve={[Dt]:n.NEAREST,[$l]:n.NEAREST_MIPMAP_NEAREST,[Uo]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[pm]:n.LINEAR_MIPMAP_NEAREST,[Kr]:n.LINEAR_MIPMAP_LINEAR};function _e(x,v,N){if(N?(n.texParameteri(x,n.TEXTURE_WRAP_S,oe[v.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,oe[v.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,oe[v.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ve[v.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ve[v.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==cn||v.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,L(v.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,L(v.minFilter)),v.minFilter!==Dt&&v.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Dt||v.minFilter!==Uo&&v.minFilter!==Kr||v.type===yi&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Zr&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(x,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function b(x,v){let N=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",se));const G=v.source;let K=m.get(G);K===void 0&&(K={},m.set(G,K));const ce=de(v);if(ce!==x.__cacheKey){K[ce]===void 0&&(K[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[ce].usedTimes++;const Se=K[x.__cacheKey];Se!==void 0&&(K[x.__cacheKey].usedTimes--,Se.usedTimes===0&&I(v)),x.__cacheKey=ce,x.__webglTexture=K[ce].texture}return N}function ae(x,v,N){let G=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=n.TEXTURE_3D);const K=b(x,v),ce=v.source;t.bindTexture(G,x.__webglTexture,n.TEXTURE0+N);const Se=i.get(ce);if(ce.version!==Se.__version||K===!0){t.activeTexture(n.TEXTURE0+N),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ge=T(v)&&w(v.image)===!1;let J=y(v.image,ge,!1,u);J=pe(v,J);const ye=w(J)||o,Te=s.convert(v.format,v.colorSpace);let we=s.convert(v.type),Ee=B(v.internalFormat,Te,we,v.colorSpace);_e(G,v,ye);let Re;const Ne=v.mipmaps,ke=o&&v.isVideoTexture!==!0,at=Se.__version===void 0||K===!0,F=M(v,J,ye);if(v.isDepthTexture)Ee=n.DEPTH_COMPONENT,o?v.type===yi?Ee=n.DEPTH_COMPONENT32F:v.type===Si?Ee=n.DEPTH_COMPONENT24:v.type===lr?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:v.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===bi&&Ee===n.DEPTH_COMPONENT&&v.type!==Df&&v.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Si,we=s.convert(v.type)),v.format===pr&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,v.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=lr,we=s.convert(v.type))),at&&(ke?t.texStorage2D(n.TEXTURE_2D,1,Ee,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ee,J.width,J.height,0,Te,we,null));else if(v.isDataTexture)if(Ne.length>0&&ye){ke&&at&&t.texStorage2D(n.TEXTURE_2D,F,Ee,Ne[0].width,Ne[0].height);for(let Q=0,me=Ne.length;Q<me;Q++)Re=Ne[Q],ke?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Re.width,Re.height,Te,we,Re.data):t.texImage2D(n.TEXTURE_2D,Q,Ee,Re.width,Re.height,0,Te,we,Re.data);v.generateMipmaps=!1}else ke?(at&&t.texStorage2D(n.TEXTURE_2D,F,Ee,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Te,we,J.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,J.width,J.height,0,Te,we,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ke&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,F,Ee,Ne[0].width,Ne[0].height,J.depth);for(let Q=0,me=Ne.length;Q<me;Q++)Re=Ne[Q],v.format!==un?Te!==null?ke?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Re.width,Re.height,J.depth,Te,Re.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ee,Re.width,Re.height,J.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Re.width,Re.height,J.depth,Te,we,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ee,Re.width,Re.height,J.depth,0,Te,we,Re.data)}else{ke&&at&&t.texStorage2D(n.TEXTURE_2D,F,Ee,Ne[0].width,Ne[0].height);for(let Q=0,me=Ne.length;Q<me;Q++)Re=Ne[Q],v.format!==un?Te!==null?ke?t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Re.width,Re.height,Te,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Ee,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Re.width,Re.height,Te,we,Re.data):t.texImage2D(n.TEXTURE_2D,Q,Ee,Re.width,Re.height,0,Te,we,Re.data)}else if(v.isDataArrayTexture)ke?(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,F,Ee,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Te,we,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,J.width,J.height,J.depth,0,Te,we,J.data);else if(v.isData3DTexture)ke?(at&&t.texStorage3D(n.TEXTURE_3D,F,Ee,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Te,we,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,J.width,J.height,J.depth,0,Te,we,J.data);else if(v.isFramebufferTexture){if(at)if(ke)t.texStorage2D(n.TEXTURE_2D,F,Ee,J.width,J.height);else{let Q=J.width,me=J.height;for(let be=0;be<F;be++)t.texImage2D(n.TEXTURE_2D,be,Ee,Q,me,0,Te,we,null),Q>>=1,me>>=1}}else if(Ne.length>0&&ye){ke&&at&&t.texStorage2D(n.TEXTURE_2D,F,Ee,Ne[0].width,Ne[0].height);for(let Q=0,me=Ne.length;Q<me;Q++)Re=Ne[Q],ke?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Te,we,Re):t.texImage2D(n.TEXTURE_2D,Q,Ee,Te,we,Re);v.generateMipmaps=!1}else ke?(at&&t.texStorage2D(n.TEXTURE_2D,F,Ee,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,we,J)):t.texImage2D(n.TEXTURE_2D,0,Ee,Te,we,J);C(v,ye)&&P(G),Se.__version=ce.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function te(x,v,N){if(v.image.length!==6)return;const G=b(x,v),K=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+N);const ce=i.get(K);if(K.version!==ce.__version||G===!0){t.activeTexture(n.TEXTURE0+N),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Se=v.isCompressedTexture||v.image[0].isCompressedTexture,ge=v.image[0]&&v.image[0].isDataTexture,J=[];for(let Q=0;Q<6;Q++)!Se&&!ge?J[Q]=y(v.image[Q],!1,!0,c):J[Q]=ge?v.image[Q].image:v.image[Q],J[Q]=pe(v,J[Q]);const ye=J[0],Te=w(ye)||o,we=s.convert(v.format,v.colorSpace),Ee=s.convert(v.type),Re=B(v.internalFormat,we,Ee,v.colorSpace),Ne=o&&v.isVideoTexture!==!0,ke=ce.__version===void 0||G===!0;let at=M(v,ye,Te);_e(n.TEXTURE_CUBE_MAP,v,Te);let F;if(Se){Ne&&ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,at,Re,ye.width,ye.height);for(let Q=0;Q<6;Q++){F=J[Q].mipmaps;for(let me=0;me<F.length;me++){const be=F[me];v.format!==un?we!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,be.width,be.height,we,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,Re,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,be.width,be.height,we,Ee,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,Re,be.width,be.height,0,we,Ee,be.data)}}}else{F=v.mipmaps,Ne&&ke&&(F.length>0&&at++,t.texStorage2D(n.TEXTURE_CUBE_MAP,at,Re,J[0].width,J[0].height));for(let Q=0;Q<6;Q++)if(ge){Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,J[Q].width,J[Q].height,we,Ee,J[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Re,J[Q].width,J[Q].height,0,we,Ee,J[Q].data);for(let me=0;me<F.length;me++){const Ce=F[me].image[Q].image;Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Ce.width,Ce.height,we,Ee,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,Re,Ce.width,Ce.height,0,we,Ee,Ce.data)}}else{Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,we,Ee,J[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Re,we,Ee,J[Q]);for(let me=0;me<F.length;me++){const be=F[me];Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,we,Ee,be.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,Re,we,Ee,be.image[Q])}}}C(v,Te)&&P(n.TEXTURE_CUBE_MAP),ce.__version=K.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function q(x,v,N,G,K){const ce=s.convert(N.format,N.colorSpace),Se=s.convert(N.type),ge=B(N.internalFormat,ce,Se,N.colorSpace);i.get(v).__hasExternalTextures||(K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,0,ge,v.width,v.height,v.depth,0,ce,Se,null):t.texImage2D(K,0,ge,v.width,v.height,0,ce,Se,null)),t.bindFramebuffer(n.FRAMEBUFFER,x),ue(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,K,i.get(N).__webglTexture,0,re(v)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,K,i.get(N).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(x,v,N){if(n.bindRenderbuffer(n.RENDERBUFFER,x),v.depthBuffer&&!v.stencilBuffer){let G=n.DEPTH_COMPONENT16;if(N||ue(v)){const K=v.depthTexture;K&&K.isDepthTexture&&(K.type===yi?G=n.DEPTH_COMPONENT32F:K.type===Si&&(G=n.DEPTH_COMPONENT24));const ce=re(v);ue(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,G,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,G,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,G,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(v.depthBuffer&&v.stencilBuffer){const G=re(v);N&&ue(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,G,n.DEPTH24_STENCIL8,v.width,v.height):ue(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,G,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const G=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let K=0;K<G.length;K++){const ce=G[K],Se=s.convert(ce.format,ce.colorSpace),ge=s.convert(ce.type),J=B(ce.internalFormat,Se,ge,ce.colorSpace),ye=re(v);N&&ue(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,J,v.width,v.height):ue(v)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),le(v.depthTexture,0);const G=i.get(v.depthTexture).__webglTexture,K=re(v);if(v.depthTexture.format===bi)ue(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(v.depthTexture.format===pr)ue(v)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function S(x){const v=i.get(x),N=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Pe(v.__webglFramebuffer,x)}else if(N){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]=n.createRenderbuffer(),xe(v.__webglDepthbuffer[G],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),xe(v.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(x,v,N){const G=i.get(x);v!==void 0&&q(G.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),N!==void 0&&S(x)}function z(x){const v=x.texture,N=i.get(x),G=i.get(v);x.addEventListener("dispose",O),x.isWebGLMultipleRenderTargets!==!0&&(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=v.version,a.memory.textures++);const K=x.isWebGLCubeRenderTarget===!0,ce=x.isWebGLMultipleRenderTargets===!0,Se=w(x)||o;if(K){N.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)N.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(N.__webglFramebuffer=n.createFramebuffer(),ce)if(r.drawBuffers){const ge=x.texture;for(let J=0,ye=ge.length;J<ye;J++){const Te=i.get(ge[J]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&x.samples>0&&ue(x)===!1){const ge=ce?v:[v];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let J=0;J<ge.length;J++){const ye=ge[J];N.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[J]);const Te=s.convert(ye.format,ye.colorSpace),we=s.convert(ye.type),Ee=B(ye.internalFormat,Te,we,ye.colorSpace,x.isXRRenderTarget===!0),Re=re(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Ee,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,N.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(N.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),_e(n.TEXTURE_CUBE_MAP,v,Se);for(let ge=0;ge<6;ge++)q(N.__webglFramebuffer[ge],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge);C(v,Se)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const ge=x.texture;for(let J=0,ye=ge.length;J<ye;J++){const Te=ge[J],we=i.get(Te);t.bindTexture(n.TEXTURE_2D,we.__webglTexture),_e(n.TEXTURE_2D,Te,Se),q(N.__webglFramebuffer,x,Te,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D),C(Te,Se)&&P(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(o?ge=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,G.__webglTexture),_e(ge,v,Se),q(N.__webglFramebuffer,x,v,n.COLOR_ATTACHMENT0,ge),C(v,Se)&&P(ge),t.unbindTexture()}x.depthBuffer&&S(x)}function ne(x){const v=w(x)||o,N=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let G=0,K=N.length;G<K;G++){const ce=N[G];if(C(ce,v)){const Se=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ge=i.get(ce).__webglTexture;t.bindTexture(Se,ge),P(Se),t.unbindTexture()}}}function Y(x){if(o&&x.samples>0&&ue(x)===!1){const v=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],N=x.width,G=x.height;let K=n.COLOR_BUFFER_BIT;const ce=[],Se=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(x),J=x.isWebGLMultipleRenderTargets===!0;if(J)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){ce.push(n.COLOR_ATTACHMENT0+ye),x.depthBuffer&&ce.push(Se);const Te=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Te===!1&&(x.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),J&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]),Te===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Se]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Se])),J){const we=i.get(v[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,N,G,0,0,N,G,K,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);const Te=i.get(v[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function re(x){return Math.min(f,x.samples)}function ue(x){const v=i.get(x);return o&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function fe(x){const v=a.render.frame;_.get(x)!==v&&(_.set(x,v),x.update())}function pe(x,v){const N=x.colorSpace,G=x.format,K=x.type;return x.isCompressedTexture===!0||x.format===Ra||N!==wn&&N!==wi&&(N===ze?o===!1?e.has("EXT_sRGB")===!0&&G===un?(x.format=Ra,x.minFilter=Jt,x.generateMipmaps=!1):v=Of.sRGBToLinear(v):(G!==un||K!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=X,this.resetTextureUnits=$,this.setTexture2D=le,this.setTexture2DArray=Ae,this.setTexture3D=he,this.setTextureCube=Z,this.rebindTextures=R,this.setupRenderTarget=z,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=S,this.setupFrameBufferTexture=q,this.useMultisampledRTT=ue}function Ux(n,e,t){const i=t.isWebGL2;function r(s,a=wi){let o;if(s===Ci)return n.UNSIGNED_BYTE;if(s===vm)return n.UNSIGNED_SHORT_4_4_4_4;if(s===xm)return n.UNSIGNED_SHORT_5_5_5_1;if(s===mm)return n.BYTE;if(s===gm)return n.SHORT;if(s===Df)return n.UNSIGNED_SHORT;if(s===_m)return n.INT;if(s===Si)return n.UNSIGNED_INT;if(s===yi)return n.FLOAT;if(s===Zr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Mm)return n.ALPHA;if(s===un)return n.RGBA;if(s===Sm)return n.LUMINANCE;if(s===ym)return n.LUMINANCE_ALPHA;if(s===bi)return n.DEPTH_COMPONENT;if(s===pr)return n.DEPTH_STENCIL;if(s===Ra)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Em)return n.RED;if(s===bm)return n.RED_INTEGER;if(s===Tm)return n.RG;if(s===wm)return n.RG_INTEGER;if(s===Am)return n.RGBA_INTEGER;if(s===Do||s===Io||s===No||s===Fo)if(a===ze)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Do)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Io)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===No)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Do)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Io)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===No)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jl||s===ql||s===Yl||s===Kl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===jl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ql)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zl||s===Jl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Zl)return a===ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Jl)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ql||s===ec||s===tc||s===nc||s===ic||s===rc||s===sc||s===oc||s===ac||s===lc||s===cc||s===uc||s===fc||s===dc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ql)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ec)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tc)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nc)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ic)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rc)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sc)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===oc)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ac)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lc)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cc)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===uc)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fc)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dc)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Oo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Oo)return a===ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Cm||s===hc||s===pc||s===mc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Oo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===hc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===lr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Dx extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ds extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ix={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ix)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Nx extends $t{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:bi,u!==bi&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===bi&&(i=Si),i===void 0&&u===pr&&(i=lr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1}}class Fx extends Mr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const g=t.getContextAttributes();let m=null,h=null;const E=[],y=[],w=new Set,T=new Map,C=new Qt;C.layers.enable(1),C.viewport=new xt;const P=new Qt;P.layers.enable(2),P.viewport=new xt;const B=[C,P],M=new Dx;M.layers.enable(1),M.layers.enable(2);let L=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=E[Z];return oe===void 0&&(oe=new aa,E[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=E[Z];return oe===void 0&&(oe=new aa,E[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=E[Z];return oe===void 0&&(oe=new aa,E[Z]=oe),oe.getHandSpace()};function O(Z){const oe=y.indexOf(Z.inputSource);if(oe===-1)return;const ve=E[oe];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",I);for(let Z=0;Z<E.length;Z++){const oe=y[Z];oe!==null&&(y[Z]=null,E[Z].disconnect(oe))}L=null,se=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,he.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",U),r.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:p}),h=new Pi(p.framebufferWidth,p.framebufferHeight,{format:un,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let oe=null,ve=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=g.stencil?pr:bi,ve=g.stencil?lr:Si);const b={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(b),r.updateRenderState({layers:[d]}),h=new Pi(d.textureWidth,d.textureHeight,{format:un,type:Ci,depthTexture:new Nx(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ae=e.properties.get(h);ae.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(Z){for(let oe=0;oe<Z.removed.length;oe++){const ve=Z.removed[oe],_e=y.indexOf(ve);_e>=0&&(y[_e]=null,E[_e].disconnect(ve))}for(let oe=0;oe<Z.added.length;oe++){const ve=Z.added[oe];let _e=y.indexOf(ve);if(_e===-1){for(let ae=0;ae<E.length;ae++)if(ae>=y.length){y.push(ve),_e=ae;break}else if(y[ae]===null){y[ae]=ve,_e=ae;break}if(_e===-1)break}const b=E[_e];b&&b.connect(ve)}}const k=new j,W=new j;function $(Z,oe,ve){k.setFromMatrixPosition(oe.matrixWorld),W.setFromMatrixPosition(ve.matrixWorld);const _e=k.distanceTo(W),b=oe.projectionMatrix.elements,ae=ve.projectionMatrix.elements,te=b[14]/(b[10]-1),q=b[14]/(b[10]+1),xe=(b[9]+1)/b[5],Pe=(b[9]-1)/b[5],S=(b[8]-1)/b[0],R=(ae[8]+1)/ae[0],z=te*S,ne=te*R,Y=_e/(-S+R),re=Y*-S;oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(re),Z.translateZ(Y),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const ue=te+Y,fe=q+Y,pe=z-re,x=ne+(_e-re),v=xe*q/fe*ue,N=Pe*q/fe*ue;Z.projectionMatrix.makePerspective(pe,x,v,N,ue,fe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function X(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;M.near=P.near=C.near=Z.near,M.far=P.far=C.far=Z.far,(L!==M.near||se!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,se=M.far);const oe=Z.parent,ve=M.cameras;X(M,oe);for(let _e=0;_e<ve.length;_e++)X(ve[_e],oe);ve.length===2?$(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),de(Z,M,oe)};function de(Z,oe,ve){ve===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0);const _e=Z.children;for(let b=0,ae=_e.length;b<ae;b++)_e[b].updateMatrixWorld(!0);Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ca*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.getPlanes=function(){return w};let le=null;function Ae(Z,oe){if(u=oe.getViewerPose(c||a),_=oe,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let _e=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,_e=!0);for(let b=0;b<ve.length;b++){const ae=ve[b];let te=null;if(p!==null)te=p.getViewport(ae);else{const xe=f.getViewSubImage(d,ae);te=xe.viewport,b===0&&(e.setRenderTargetTextures(h,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(h))}let q=B[b];q===void 0&&(q=new Qt,q.layers.enable(b),q.viewport=new xt,B[b]=q),q.matrix.fromArray(ae.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(ae.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(te.x,te.y,te.width,te.height),b===0&&(M.matrix.copy(q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_e===!0&&M.cameras.push(q)}}for(let ve=0;ve<E.length;ve++){const _e=y[ve],b=E[ve];_e!==null&&b!==void 0&&b.update(_e,oe,c||a)}if(le&&le(Z,oe),oe.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:oe.detectedPlanes});let ve=null;for(const _e of w)oe.detectedPlanes.has(_e)||(ve===null&&(ve=[]),ve.push(_e));if(ve!==null)for(const _e of ve)w.delete(_e),T.delete(_e),i.dispatchEvent({type:"planeremoved",data:_e});for(const _e of oe.detectedPlanes)if(!w.has(_e))w.add(_e),T.set(_e,oe.lastChangedTime),i.dispatchEvent({type:"planeadded",data:_e});else{const b=T.get(_e);_e.lastChangedTime>b&&(T.set(_e,_e.lastChangedTime),i.dispatchEvent({type:"planechanged",data:_e}))}}_=null}const he=new qf;he.setAnimationLoop(Ae),this.setAnimationLoop=function(Z){le=Z},this.dispose=function(){}}}function Ox(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Wf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,y,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,w)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,E,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ot&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ot&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const y=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*y,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,E,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=y*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ot&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Bx(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,y){const w=y.program;i.uniformBlockBinding(E,w)}function c(E,y){let w=r[E.id];w===void 0&&(_(E),w=u(E),r[E.id]=w,E.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(E,T);const C=e.render.frame;s[E.id]!==C&&(d(E),s[E.id]=C)}function u(E){const y=f();E.__bindingPointIndex=y;const w=n.createBuffer(),T=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,T,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,w),w}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=r[E.id],w=E.uniforms,T=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,P=w.length;C<P;C++){const B=w[C];if(p(B,C,T)===!0){const M=B.__offset,L=Array.isArray(B.value)?B.value:[B.value];let se=0;for(let O=0;O<L.length;O++){const U=L[O],I=g(U);typeof U=="number"?(B.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,M+se,B.__data)):U.isMatrix3?(B.__data[0]=U.elements[0],B.__data[1]=U.elements[1],B.__data[2]=U.elements[2],B.__data[3]=U.elements[0],B.__data[4]=U.elements[3],B.__data[5]=U.elements[4],B.__data[6]=U.elements[5],B.__data[7]=U.elements[0],B.__data[8]=U.elements[6],B.__data[9]=U.elements[7],B.__data[10]=U.elements[8],B.__data[11]=U.elements[0]):(U.toArray(B.__data,se),se+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,B.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,y,w){const T=E.value;if(w[y]===void 0){if(typeof T=="number")w[y]=T;else{const C=Array.isArray(T)?T:[T],P=[];for(let B=0;B<C.length;B++)P.push(C[B].clone());w[y]=P}return!0}else if(typeof T=="number"){if(w[y]!==T)return w[y]=T,!0}else{const C=Array.isArray(w[y])?w[y]:[w[y]],P=Array.isArray(T)?T:[T];for(let B=0;B<C.length;B++){const M=C[B];if(M.equals(P[B])===!1)return M.copy(P[B]),!0}}return!1}function _(E){const y=E.uniforms;let w=0;const T=16;let C=0;for(let P=0,B=y.length;P<B;P++){const M=y[P],L={boundary:0,storage:0},se=Array.isArray(M.value)?M.value:[M.value];for(let O=0,U=se.length;O<U;O++){const I=se[O],k=g(I);L.boundary+=k.boundary,L.storage+=k.storage}if(M.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=w,P>0){C=w%T;const O=T-C;C!==0&&O-L.boundary<0&&(w+=T-C,M.__offset=w)}w+=L.storage}return C=w%T,C>0&&(w+=T-C),E.__size=w,E.__cache={},this}function g(E){const y={boundary:0,storage:0};return typeof E=="number"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}function zx(){const n=Zs("canvas");return n.style.display="block",n}class Qf{constructor(e={}){const{canvas:t=zx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let p=null,_=null;const g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ze,this.useLegacyLights=!0,this.toneMapping=Gn,this.toneMappingExposure=1;const h=this;let E=!1,y=0,w=0,T=null,C=-1,P=null;const B=new xt,M=new xt;let L=null,se=t.width,O=t.height,U=1,I=null,k=null;const W=new xt(0,0,se,O),$=new xt(0,0,se,O);let X=!1;const de=new jf;let le=!1,Ae=!1,he=null;const Z=new Mt,oe=new j,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return T===null?U:1}let b=i;function ae(A,V){for(let ee=0;ee<A.length;ee++){const H=A[ee],ie=t.getContext(H,V);if(ie!==null)return ie}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ja}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ke,!1),b===null){const V=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&V.shift(),b=ae(V,A),b===null)throw ae(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}b.getShaderPrecisionFormat===void 0&&(b.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let te,q,xe,Pe,S,R,z,ne,Y,re,ue,fe,pe,x,v,N,G,K,ce,Se,ge,J,ye,Te;function we(){te=new Kv(b),q=new Vv(b,te,e),te.init(q),J=new Ux(b,te,q),xe=new Px(b,te,q),Pe=new Qv(b),S=new gx,R=new Lx(b,te,xe,S,q,J,Pe),z=new Xv(h),ne=new Yv(h),Y=new ug(b,q),ye=new Hv(b,te,Y,q),re=new Zv(b,Y,Pe,ye),ue=new i0(b,re,Y,Pe),ce=new n0(b,q,R),N=new Wv(S),fe=new mx(h,z,ne,te,q,ye,N),pe=new Ox(h,S),x=new vx,v=new bx(te,q),K=new kv(h,z,ne,xe,ue,d,l),G=new Cx(h,ue,q),Te=new Bx(b,Pe,q,xe),Se=new Gv(b,te,Pe,q),ge=new Jv(b,te,Pe,q),Pe.programs=fe.programs,h.capabilities=q,h.extensions=te,h.properties=S,h.renderLists=x,h.shadowMap=G,h.state=xe,h.info=Pe}we();const Ee=new Fx(h,b);this.xr=Ee,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(A){A!==void 0&&(U=A,this.setSize(se,O,!1))},this.getSize=function(A){return A.set(se,O)},this.setSize=function(A,V,ee=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,O=V,t.width=Math.floor(A*U),t.height=Math.floor(V*U),ee===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(se*U,O*U).floor()},this.setDrawingBufferSize=function(A,V,ee){se=A,O=V,U=ee,t.width=Math.floor(A*ee),t.height=Math.floor(V*ee),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(W)},this.setViewport=function(A,V,ee,H){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,V,ee,H),xe.viewport(B.copy(W).multiplyScalar(U).floor())},this.getScissor=function(A){return A.copy($)},this.setScissor=function(A,V,ee,H){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,V,ee,H),xe.scissor(M.copy($).multiplyScalar(U).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(A){xe.setScissorTest(X=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){k=A},this.getClearColor=function(A){return A.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(A=!0,V=!0,ee=!0){let H=0;A&&(H|=b.COLOR_BUFFER_BIT),V&&(H|=b.DEPTH_BUFFER_BIT),ee&&(H|=b.STENCIL_BUFFER_BIT),b.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),x.dispose(),v.dispose(),S.dispose(),z.dispose(),ne.dispose(),ue.dispose(),ye.dispose(),Te.dispose(),fe.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ce),Ee.removeEventListener("sessionend",et),he&&(he.dispose(),he=null),tt.stop()};function Re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=Pe.autoReset,V=G.enabled,ee=G.autoUpdate,H=G.needsUpdate,ie=G.type;we(),Pe.autoReset=A,G.enabled=V,G.autoUpdate=ee,G.needsUpdate=H,G.type=ie}function ke(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function at(A){const V=A.target;V.removeEventListener("dispose",at),F(V)}function F(A){Q(A),S.remove(A)}function Q(A){const V=S.get(A).programs;V!==void 0&&(V.forEach(function(ee){fe.releaseProgram(ee)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,ee,H,ie,Le){V===null&&(V=ve);const De=ie.isMesh&&ie.matrixWorld.determinant()<0,Fe=hd(A,V,ee,H,ie);xe.setMaterial(H,De);let He=ee.index,Ve=1;H.wireframe===!0&&(He=re.getWireframeAttribute(ee),Ve=2);const We=ee.drawRange,Xe=ee.attributes.position;let Qe=We.start*Ve,Ct=(We.start+We.count)*Ve;Le!==null&&(Qe=Math.max(Qe,Le.start*Ve),Ct=Math.min(Ct,(Le.start+Le.count)*Ve)),He!==null?(Qe=Math.max(Qe,0),Ct=Math.min(Ct,He.count)):Xe!=null&&(Qe=Math.max(Qe,0),Ct=Math.min(Ct,Xe.count));const nn=Ct-Qe;if(nn<0||nn===1/0)return;ye.setup(ie,H,Fe,ee,He);let li,ut=Se;if(He!==null&&(li=Y.get(He),ut=ge,ut.setIndex(li)),ie.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*_e()),ut.setMode(b.LINES)):ut.setMode(b.TRIANGLES);else if(ie.isLine){let qe=H.linewidth;qe===void 0&&(qe=1),xe.setLineWidth(qe*_e()),ie.isLineSegments?ut.setMode(b.LINES):ie.isLineLoop?ut.setMode(b.LINE_LOOP):ut.setMode(b.LINE_STRIP)}else ie.isPoints?ut.setMode(b.POINTS):ie.isSprite&&ut.setMode(b.TRIANGLES);if(ie.isInstancedMesh)ut.renderInstances(Qe,nn,ie.count);else if(ee.isInstancedBufferGeometry){const qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,_o=Math.min(ee.instanceCount,qe);ut.renderInstances(Qe,nn,_o)}else ut.render(Qe,nn)},this.compile=function(A,V){function ee(H,ie,Le){H.transparent===!0&&H.side===zn&&H.forceSinglePass===!1?(H.side=Ot,H.needsUpdate=!0,ls(H,ie,Le),H.side=ri,H.needsUpdate=!0,ls(H,ie,Le),H.side=zn):ls(H,ie,Le)}_=v.get(A),_.init(),m.push(_),A.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(_.pushLight(H),H.castShadow&&_.pushShadow(H))}),_.setupLights(h.useLegacyLights),A.traverse(function(H){const ie=H.material;if(ie)if(Array.isArray(ie))for(let Le=0;Le<ie.length;Le++){const De=ie[Le];ee(De,A,H)}else ee(ie,A,H)}),m.pop(),_=null};let me=null;function be(A){me&&me(A)}function Ce(){tt.stop()}function et(){tt.start()}const tt=new qf;tt.setAnimationLoop(be),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(A){me=A,Ee.setAnimationLoop(A),A===null?tt.stop():tt.start()},Ee.addEventListener("sessionstart",Ce),Ee.addEventListener("sessionend",et),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(V),V=Ee.getCamera()),A.isScene===!0&&A.onBeforeRender(h,A,V,T),_=v.get(A,m.length),_.init(),m.push(_),Z.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),de.setFromProjectionMatrix(Z),Ae=this.localClippingEnabled,le=N.init(this.clippingPlanes,Ae),p=x.get(A,g.length),p.init(),g.push(p),St(A,V,0,h.sortObjects),p.finish(),h.sortObjects===!0&&p.sort(I,k),le===!0&&N.beginShadows();const ee=_.state.shadowsArray;if(G.render(ee,A,V),le===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(p,A),_.setupLights(h.useLegacyLights),V.isArrayCamera){const H=V.cameras;for(let ie=0,Le=H.length;ie<Le;ie++){const De=H[ie];Xn(p,A,De,De.viewport)}}else Xn(p,A,V);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(h,A,V),ye.resetDefaultState(),C=-1,P=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function St(A,V,ee,H){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||de.intersectsSprite(A)){H&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Z);const De=ue.update(A),Fe=A.material;Fe.visible&&p.push(A,De,Fe,ee,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||de.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==Pe.render.frame&&(A.skeleton.update(),A.skeleton.frame=Pe.render.frame);const De=ue.update(A),Fe=A.material;if(H&&(De.boundingSphere===null&&De.computeBoundingSphere(),oe.copy(De.boundingSphere.center).applyMatrix4(A.matrixWorld).applyMatrix4(Z)),Array.isArray(Fe)){const He=De.groups;for(let Ve=0,We=He.length;Ve<We;Ve++){const Xe=He[Ve],Qe=Fe[Xe.materialIndex];Qe&&Qe.visible&&p.push(A,De,Qe,ee,oe.z,Xe)}}else Fe.visible&&p.push(A,De,Fe,ee,oe.z,null)}}const Le=A.children;for(let De=0,Fe=Le.length;De<Fe;De++)St(Le[De],V,ee,H)}function Xn(A,V,ee,H){const ie=A.opaque,Le=A.transmissive,De=A.transparent;_.setupLightsView(ee),le===!0&&N.setGlobalState(h.clippingPlanes,ee),Le.length>0&&ct(ie,Le,V,ee),H&&xe.viewport(B.copy(H)),ie.length>0&&qt(ie,V,ee),Le.length>0&&qt(Le,V,ee),De.length>0&&qt(De,V,ee),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ct(A,V,ee,H){if(he===null){const Fe=q.isWebGL2;he=new Pi(1024,1024,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?Zr:Ci,minFilter:Kr,samples:Fe&&o===!0?4:0})}const ie=h.getRenderTarget();h.setRenderTarget(he),h.clear();const Le=h.toneMapping;h.toneMapping=Gn,qt(A,ee,H),R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he);let De=!1;for(let Fe=0,He=V.length;Fe<He;Fe++){const Ve=V[Fe],We=Ve.object,Xe=Ve.geometry,Qe=Ve.material,Ct=Ve.group;if(Qe.side===zn&&We.layers.test(H.layers)){const nn=Qe.side;Qe.side=Ot,Qe.needsUpdate=!0,pn(We,ee,H,Xe,Qe,Ct),Qe.side=nn,Qe.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he)),h.setRenderTarget(ie),h.toneMapping=Le}function qt(A,V,ee){const H=V.isScene===!0?V.overrideMaterial:null;for(let ie=0,Le=A.length;ie<Le;ie++){const De=A[ie],Fe=De.object,He=De.geometry,Ve=H===null?De.material:H,We=De.group;Fe.layers.test(ee.layers)&&pn(Fe,V,ee,He,Ve,We)}}function pn(A,V,ee,H,ie,Le){A.onBeforeRender(h,V,ee,H,ie,Le),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(h,V,ee,H,A,Le),ie.transparent===!0&&ie.side===zn&&ie.forceSinglePass===!1?(ie.side=Ot,ie.needsUpdate=!0,h.renderBufferDirect(ee,V,H,ie,A,Le),ie.side=ri,ie.needsUpdate=!0,h.renderBufferDirect(ee,V,H,ie,A,Le),ie.side=zn):h.renderBufferDirect(ee,V,H,ie,A,Le),A.onAfterRender(h,V,ee,H,ie,Le)}function ls(A,V,ee){V.isScene!==!0&&(V=ve);const H=S.get(A),ie=_.state.lights,Le=_.state.shadowsArray,De=ie.state.version,Fe=fe.getParameters(A,ie.state,Le,V,ee),He=fe.getProgramCacheKey(Fe);let Ve=H.programs;H.environment=A.isMeshStandardMaterial?V.environment:null,H.fog=V.fog,H.envMap=(A.isMeshStandardMaterial?ne:z).get(A.envMap||H.environment),Ve===void 0&&(A.addEventListener("dispose",at),Ve=new Map,H.programs=Ve);let We=Ve.get(He);if(We!==void 0){if(H.currentProgram===We&&H.lightsStateVersion===De)return ol(A,Fe),We}else Fe.uniforms=fe.getUniforms(A),A.onBuild(ee,Fe,h),A.onBeforeCompile(Fe,h),We=fe.acquireProgram(Fe,He),Ve.set(He,We),H.uniforms=Fe.uniforms;const Xe=H.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=N.uniform),ol(A,Fe),H.needsLights=md(A),H.lightsStateVersion=De,H.needsLights&&(Xe.ambientLightColor.value=ie.state.ambient,Xe.lightProbe.value=ie.state.probe,Xe.directionalLights.value=ie.state.directional,Xe.directionalLightShadows.value=ie.state.directionalShadow,Xe.spotLights.value=ie.state.spot,Xe.spotLightShadows.value=ie.state.spotShadow,Xe.rectAreaLights.value=ie.state.rectArea,Xe.ltc_1.value=ie.state.rectAreaLTC1,Xe.ltc_2.value=ie.state.rectAreaLTC2,Xe.pointLights.value=ie.state.point,Xe.pointLightShadows.value=ie.state.pointShadow,Xe.hemisphereLights.value=ie.state.hemi,Xe.directionalShadowMap.value=ie.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Xe.spotShadowMap.value=ie.state.spotShadowMap,Xe.spotLightMatrix.value=ie.state.spotLightMatrix,Xe.spotLightMap.value=ie.state.spotLightMap,Xe.pointShadowMap.value=ie.state.pointShadowMap,Xe.pointShadowMatrix.value=ie.state.pointShadowMatrix);const Qe=We.getUniforms(),Ct=ks.seqWithValue(Qe.seq,Xe);return H.currentProgram=We,H.uniformsList=Ct,We}function ol(A,V){const ee=S.get(A);ee.outputColorSpace=V.outputColorSpace,ee.instancing=V.instancing,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function hd(A,V,ee,H,ie){V.isScene!==!0&&(V=ve),R.resetTextureUnits();const Le=V.fog,De=H.isMeshStandardMaterial?V.environment:null,Fe=T===null?h.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:wn,He=(H.isMeshStandardMaterial?ne:z).get(H.envMap||De),Ve=H.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,We=!!H.normalMap&&!!ee.attributes.tangent,Xe=!!ee.morphAttributes.position,Qe=!!ee.morphAttributes.normal,Ct=!!ee.morphAttributes.color,nn=H.toneMapped?h.toneMapping:Gn,li=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ut=li!==void 0?li.length:0,qe=S.get(H),_o=_.state.lights;if(le===!0&&(Ae===!0||A!==P)){const Bt=A===P&&H.id===C;N.setState(H,A,Bt)}let mt=!1;H.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==_o.state.version||qe.outputColorSpace!==Fe||ie.isInstancedMesh&&qe.instancing===!1||!ie.isInstancedMesh&&qe.instancing===!0||ie.isSkinnedMesh&&qe.skinning===!1||!ie.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==He||H.fog===!0&&qe.fog!==Le||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==N.numPlanes||qe.numIntersection!==N.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==We||qe.morphTargets!==Xe||qe.morphNormals!==Qe||qe.morphColors!==Ct||qe.toneMapping!==nn||q.isWebGL2===!0&&qe.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,qe.__version=H.version);let ci=qe.currentProgram;mt===!0&&(ci=ls(H,V,ie));let al=!1,yr=!1,vo=!1;const Pt=ci.getUniforms(),ui=qe.uniforms;if(xe.useProgram(ci.program)&&(al=!0,yr=!0,vo=!0),H.id!==C&&(C=H.id,yr=!0),al||P!==A){if(Pt.setValue(b,"projectionMatrix",A.projectionMatrix),q.logarithmicDepthBuffer&&Pt.setValue(b,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),P!==A&&(P=A,yr=!0,vo=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const Bt=Pt.map.cameraPosition;Bt!==void 0&&Bt.setValue(b,oe.setFromMatrixPosition(A.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Pt.setValue(b,"isOrthographic",A.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||ie.isSkinnedMesh)&&Pt.setValue(b,"viewMatrix",A.matrixWorldInverse)}if(ie.isSkinnedMesh){Pt.setOptional(b,ie,"bindMatrix"),Pt.setOptional(b,ie,"bindMatrixInverse");const Bt=ie.skeleton;Bt&&(q.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Pt.setValue(b,"boneTexture",Bt.boneTexture,R),Pt.setValue(b,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xo=ee.morphAttributes;if((xo.position!==void 0||xo.normal!==void 0||xo.color!==void 0&&q.isWebGL2===!0)&&ce.update(ie,ee,ci),(yr||qe.receiveShadow!==ie.receiveShadow)&&(qe.receiveShadow=ie.receiveShadow,Pt.setValue(b,"receiveShadow",ie.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ui.envMap.value=He,ui.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),yr&&(Pt.setValue(b,"toneMappingExposure",h.toneMappingExposure),qe.needsLights&&pd(ui,vo),Le&&H.fog===!0&&pe.refreshFogUniforms(ui,Le),pe.refreshMaterialUniforms(ui,H,U,O,he),ks.upload(b,qe.uniformsList,ui,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ks.upload(b,qe.uniformsList,ui,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Pt.setValue(b,"center",ie.center),Pt.setValue(b,"modelViewMatrix",ie.modelViewMatrix),Pt.setValue(b,"normalMatrix",ie.normalMatrix),Pt.setValue(b,"modelMatrix",ie.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Bt=H.uniformsGroups;for(let Mo=0,gd=Bt.length;Mo<gd;Mo++)if(q.isWebGL2){const ll=Bt[Mo];Te.update(ll,ci),Te.bind(ll,ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ci}function pd(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function md(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,V,ee){S.get(A.texture).__webglTexture=V,S.get(A.depthTexture).__webglTexture=ee;const H=S.get(A);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=ee===void 0,H.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,V){const ee=S.get(A);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,ee=0){T=A,y=V,w=ee;let H=!0,ie=null,Le=!1,De=!1;if(A){const He=S.get(A);He.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(b.FRAMEBUFFER,null),H=!1):He.__webglFramebuffer===void 0?R.setupRenderTarget(A):He.__hasExternalTextures&&R.rebindTextures(A,S.get(A.texture).__webglTexture,S.get(A.depthTexture).__webglTexture);const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(De=!0);const We=S.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ie=We[V],Le=!0):q.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?ie=S.get(A).__webglMultisampledFramebuffer:ie=We,B.copy(A.viewport),M.copy(A.scissor),L=A.scissorTest}else B.copy(W).multiplyScalar(U).floor(),M.copy($).multiplyScalar(U).floor(),L=X;if(xe.bindFramebuffer(b.FRAMEBUFFER,ie)&&q.drawBuffers&&H&&xe.drawBuffers(A,ie),xe.viewport(B),xe.scissor(M),xe.setScissorTest(L),Le){const He=S.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+V,He.__webglTexture,ee)}else if(De){const He=S.get(A.texture),Ve=V||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,He.__webglTexture,ee||0,Ve)}C=-1},this.readRenderTargetPixels=function(A,V,ee,H,ie,Le,De){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=S.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){xe.bindFramebuffer(b.FRAMEBUFFER,Fe);try{const He=A.texture,Ve=He.format,We=He.type;if(Ve!==un&&J.convert(Ve)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=We===Zr&&(te.has("EXT_color_buffer_half_float")||q.isWebGL2&&te.has("EXT_color_buffer_float"));if(We!==Ci&&J.convert(We)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===yi&&(q.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-H&&ee>=0&&ee<=A.height-ie&&b.readPixels(V,ee,H,ie,J.convert(Ve),J.convert(We),Le)}finally{const He=T!==null?S.get(T).__webglFramebuffer:null;xe.bindFramebuffer(b.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(A,V,ee=0){const H=Math.pow(2,-ee),ie=Math.floor(V.image.width*H),Le=Math.floor(V.image.height*H);R.setTexture2D(V,0),b.copyTexSubImage2D(b.TEXTURE_2D,ee,0,0,A.x,A.y,ie,Le),xe.unbindTexture()},this.copyTextureToTexture=function(A,V,ee,H=0){const ie=V.image.width,Le=V.image.height,De=J.convert(ee.format),Fe=J.convert(ee.type);R.setTexture2D(ee,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,ee.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,ee.unpackAlignment),V.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,H,A.x,A.y,ie,Le,De,Fe,V.image.data):V.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,H,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,De,V.mipmaps[0].data):b.texSubImage2D(b.TEXTURE_2D,H,A.x,A.y,De,Fe,V.image),H===0&&ee.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(A,V,ee,H,ie=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=A.max.x-A.min.x+1,De=A.max.y-A.min.y+1,Fe=A.max.z-A.min.z+1,He=J.convert(H.format),Ve=J.convert(H.type);let We;if(H.isData3DTexture)R.setTexture3D(H,0),We=b.TEXTURE_3D;else if(H.isDataArrayTexture)R.setTexture2DArray(H,0),We=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,H.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,H.unpackAlignment);const Xe=b.getParameter(b.UNPACK_ROW_LENGTH),Qe=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Ct=b.getParameter(b.UNPACK_SKIP_PIXELS),nn=b.getParameter(b.UNPACK_SKIP_ROWS),li=b.getParameter(b.UNPACK_SKIP_IMAGES),ut=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,ut.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ut.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,A.min.x),b.pixelStorei(b.UNPACK_SKIP_ROWS,A.min.y),b.pixelStorei(b.UNPACK_SKIP_IMAGES,A.min.z),ee.isDataTexture||ee.isData3DTexture?b.texSubImage3D(We,ie,V.x,V.y,V.z,Le,De,Fe,He,Ve,ut.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),b.compressedTexSubImage3D(We,ie,V.x,V.y,V.z,Le,De,Fe,He,ut.data)):b.texSubImage3D(We,ie,V.x,V.y,V.z,Le,De,Fe,He,Ve,ut),b.pixelStorei(b.UNPACK_ROW_LENGTH,Xe),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Qe),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ct),b.pixelStorei(b.UNPACK_SKIP_ROWS,nn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,li),ie===0&&H.generateMipmaps&&b.generateMipmap(We),xe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),xe.unbindTexture()},this.resetState=function(){y=0,w=0,T=null,xe.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?Ti:If}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ti?ze:wn}}class kx extends Qf{}kx.prototype.isWebGL1Renderer=!0;class Hx extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Qs extends ai{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new j,f=new j,d=new j;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const g=_/r*s,m=p/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(g),f.y=(e+t*Math.cos(m))*Math.sin(g),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const g=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,h=(r+1)*(p-1)+_,E=(r+1)*p+_;a.push(g,m,E),a.push(m,h,E)}this.setIndex(a),this.setAttribute("position",new En(o,3)),this.setAttribute("normal",new En(l,3)),this.setAttribute("uv",new En(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);const Gx=Vn({__name:"Background3D",setup(n){const e=Ye(null);return xr(()=>{if(!e.value)return;const t=new Hx;t.background=new st("#111827");const i=new Qt(75,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=6,i.position.y=1;const r=new Qf({canvas:e.value,antialias:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new Qs(2,.3,16,100),a=new Js({color:6514417,wireframe:!0,transparent:!0,opacity:.5}),o=new Mn(s,a);o.rotation.x=Math.PI/4,t.add(o);const l=new Qs(1.5,.3,16,100),c=new Js({color:9133302,wireframe:!0,transparent:!0,opacity:.5}),u=new Mn(l,c);u.rotation.x=Math.PI/2,u.rotation.y=Math.PI/4,t.add(u);function f(){requestAnimationFrame(f),o.rotation.x+=.002,o.rotation.y+=.003,u.rotation.x-=.003,u.rotation.y+=.002,r.render(t,i)}f(),window.addEventListener("resize",()=>{const d=window.innerWidth,p=window.innerHeight;i.aspect=d/p,i.updateProjectionMatrix(),r.setSize(d,p)})}),(t,i)=>(Ie(),Oe("canvas",{ref_key:"canvas",ref:e,class:"fixed inset-0 w-screen h-screen"},null,512))}});const mo=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Vx=mo(Gx,[["__scopeId","data-v-0cc05879"]]),Wx={class:"text-xl"},Xx={class:"flex-1"},$x={class:"font-medium"},jx={key:0,class:"mt-2 w-full bg-gray-200 rounded-full h-1.5"},qx=Vn({__name:"Notification",props:{show:{type:Boolean},message:{},type:{},loading:{type:Boolean,default:!1}},setup(n){const e={success:"bg-green-500/90 text-white backdrop-blur-sm",error:"bg-red-500/90 text-white backdrop-blur-sm",loading:"bg-blue-500/90 text-white backdrop-blur-sm"},t={success:"✅",error:"❌",loading:"⏳"};return(i,r)=>i.show?(Ie(),Oe("div",{key:0,class:Sn(["fixed top-4 right-4 p-4 rounded-lg shadow-lg transition-all duration-300 z-50 flex items-center space-x-3",e[i.type]])},[D("span",Wx,$e(t[i.type]),1),D("div",Xx,[D("p",$x,$e(i.message),1),i.loading?(Ie(),Oe("div",jx,r[0]||(r[0]=[D("div",{class:"bg-blue-500 h-1.5 rounded-full animate-pulse"},null,-1)]))):wt("",!0)])],2)):wt("",!0)}}),Yx={class:"fixed inset-0 bg-gray-900/90 backdrop-blur-md z-50"},Kx={class:"container mx-auto p-4 h-full max-w-7xl"},Zx={class:"bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 h-full flex flex-col border border-gray-700/50"},Jx={key:0,class:"bg-red-500/10 border border-red-500 rounded-lg p-4 mb-6"},Qx={class:"text-red-400"},eM={key:1,class:"flex items-center justify-center py-12"},tM={class:"flex flex-wrap gap-4 mb-8 justify-center"},nM=["onClick"],iM={class:"absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-700 text-white rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"},rM={class:"flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"},sM={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},oM={class:"flex items-start space-x-4 mb-6"},aM={class:"container-logo"},lM=["src","alt","onError","onLoad"],cM={class:"fallback-emoji"},uM={class:"flex-1"},fM={class:"flex items-center mb-2"},dM={class:"text-xl font-bold text-white"},hM={key:0,class:"ml-2 text-blue-400 text-sm"},pM={class:"text-gray-300 text-sm leading-relaxed"},mM={class:"flex items-center justify-between pt-4 border-t border-gray-600/20"},gM={class:"flex items-center space-x-2"},_M={class:"text-xl"},vM={class:"text-gray-300 text-sm"},xM=["onClick"],MM=5*60*1e3,SM=Vn({__name:"Marketplace",emits:["close"],setup(n,{emit:e}){const t=P=>{if(!P)return"";if(P.startsWith("http://")||P.startsWith("https://"))return P;const B=window.location.hostname,M="8080",L=P.replace(/^logos\//,"");return`http://${B}:${M}/logos/${L}`},r=(()=>`http://${window.location.hostname}:8080/api/marketplace`)(),s={All:"🌐","Media Servers":"🎬",Development:"💻",Monitoring:"📊",Database:"🗄️",Productivity:"📝",Gaming:"🎮",Networking:"🌐","Network Tools":"🔧",VPN:"🔒","Arr Stack":"🏴‍☠️","Home Automation":"🏠","Container Management":"📦",Security:"🛡️",Analytics:"📈",Torrents:"📥"},a=Ye([]),o=Ye([]),l=Ye("All"),c=Ye(!1),u=Ye(null),f=Ye(null),d=Ye({}),p=Wt(()=>(o.value.includes("All")?o.value:["All",...o.value]).map(B=>({name:B,emoji:s[B]||"📦"}))),_=Wt(()=>l.value==="All"?a.value:a.value.filter(P=>P.category===l.value)),g=()=>{const P=localStorage.getItem("marketplace-data");if(!P)return null;const B=JSON.parse(P);return Date.now()-B.timestamp>MM?(localStorage.removeItem("marketplace-data"),null):B},m=async()=>{u.value=null,c.value=!0;try{const P=g();if(P){a.value=P.data.containers,o.value=["All",...P.data.categories],c.value=!1;return}const B=await fetch(r);if(!B.ok)throw new Error(`Failed to fetch marketplace data: ${B.statusText}`);const M=await B.json();a.value=M.containers,o.value=["All",...M.categories],localStorage.setItem("marketplace-data",JSON.stringify({timestamp:Date.now(),data:{containers:M.containers,categories:M.categories}}))}catch(P){u.value=P instanceof Error?P.message:"Failed to load marketplace data",console.error("Error fetching marketplace data:",P)}finally{c.value=!1}},h=async P=>{var B;c.value=!0,f.value={message:`Starting installation of ${P.name}...`,type:"loading",loading:!0};try{f.value={message:`Pulling image for ${P.name}...`,type:"loading",loading:!0};const M=await fetch(`${r}/install`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:P.id,image:P.image,config:{ports:P.ports,volumes:P.volumes,env:P.env}})}),L=await M.text();if(console.log("Raw server response:",L),!M.ok)throw new Error(`Installation failed: ${L||M.statusText}`);let se;try{se=JSON.parse(L)}catch(O){throw console.error("Failed to parse server response:",O),new Error("Invalid server response")}f.value={message:`Successfully installed ${P.name}!`,type:"success"}}catch(M){console.error("Detailed installation error:",M),f.value={message:M instanceof Error?M.message:"Failed to install container",type:"error"}}finally{c.value=!1,((B=f.value)==null?void 0:B.type)==="success"&&setTimeout(()=>{f.value=null},3e3)}},E=(P,B)=>{const M=P.target;d.value[B]=!0,M.style.display="none"},y=(P,B)=>{const M=P.target;console.log(`Successfully loaded image for ${B}:`,M.src),d.value[B]=!1},w=P=>({"Media Servers":"🎬",Development:"👨‍💻",Monitoring:"📊",Database:"💾",Productivity:"✅",Gaming:"🎮",Networking:"🌐","Network Tools":"🔧",VPN:"🔒","Arr Stack":"🏴‍☠️","Home Automation":"🏠","Container Management":"📦",Security:"🛡️",Analytics:"📈",Torrents:"📥"})[P]||"📦",T=e,C=()=>{T("close")};return xr(()=>{m()}),(P,B)=>{var M,L,se;return Ie(),Oe("div",Yx,[At(qx,{show:!!f.value,message:((M=f.value)==null?void 0:M.message)||"",type:((L=f.value)==null?void 0:L.type)||"loading",loading:(se=f.value)==null?void 0:se.loading},null,8,["show","message","type","loading"]),D("div",Kx,[D("div",Zx,[D("div",{class:"flex justify-between items-center mb-6"},[B[1]||(B[1]=D("h2",{class:"text-2xl font-bold text-white"},"Docker Marketplace 🐳",-1)),D("button",{onClick:C,class:"text-gray-400 hover:text-white"},B[0]||(B[0]=[D("span",{class:"text-2xl"},"✕",-1)]))]),u.value?(Ie(),Oe("div",Jx,[D("p",Qx,$e(u.value),1),D("button",{onClick:m,class:"text-red-400 hover:text-red-300 text-sm mt-2"}," Try again ")])):wt("",!0),c.value?(Ie(),Oe("div",eM,B[2]||(B[2]=[D("div",{class:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"},null,-1)]))):u.value?wt("",!0):(Ie(),Oe(lt,{key:2},[D("div",tM,[(Ie(!0),Oe(lt,null,Zt(p.value,O=>(Ie(),Oe("button",{key:O.name,onClick:U=>l.value=O.name,class:"relative group"},[D("div",{class:Sn(["w-12 h-12 flex items-center justify-center text-2xl rounded-xl transition-all duration-200",l.value===O.name?"bg-blue-600/90 scale-110 shadow-lg shadow-blue-500/20":"bg-gray-700/40 hover:bg-gray-600/60 hover:scale-105"])},$e(O.emoji),3),D("div",iM,$e(O.name),1)],8,nM))),128))]),D("div",rM,[D("div",sM,[(Ie(!0),Oe(lt,null,Zt(_.value,O=>(Ie(),Oe("div",{key:O.id,class:"group bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg cursor-pointer hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"},[D("div",oM,[D("div",aM,[O.logo?(Ie(),Oe("img",{key:0,src:t(O.logo),alt:`${O.name} logo`,onError:U=>E(U,O.id),onLoad:U=>y(U,O.id),class:"h-12 w-12 object-contain",loading:"lazy"},null,40,lM)):wt("",!0),vt(D("span",cM,"📦",512),[[hp,d.value[O.id]]])]),D("div",uM,[D("div",fM,[D("h3",dM,$e(O.name),1),O.verified?(Ie(),Oe("span",hM,"✓")):wt("",!0)]),D("p",pM,$e(O.description),1)])]),D("div",mM,[D("div",gM,[D("span",_M,$e(w(O.category)),1),D("span",vM,$e(O.category),1)]),D("button",{onClick:U=>h(O),class:"bg-blue-600/90 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 font-medium"},B[3]||(B[3]=[D("span",null,"Install",-1),D("span",{class:"group-hover:translate-x-1 transition-transform duration-200"},"→",-1)]),8,xM)])]))),128))])])],64))])])])}}});const yM=mo(SM,[["__scopeId","data-v-c05893dd"]]),EM=window.location.hostname,bM="8080",nl=`http://${EM}:${bM}/api`,TM=nl,wM=`${nl}/containers`,Pr=`${nl}/containers/templates`,AM={class:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[9999]"},RM={class:"bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-2xl h-[90vh] flex flex-col m-4"},CM={class:"flex-none p-6 border-b border-gray-700"},PM={class:"flex justify-between items-center"},LM={class:"text-xl font-semibold text-white"},UM={class:"flex items-center gap-2"},DM=["value"],IM={class:"flex-1 overflow-y-auto min-h-0"},NM={class:"p-6 space-y-6"},FM={class:"space-y-2"},OM=["onUpdate:modelValue"],BM=["onUpdate:modelValue"],zM=["onUpdate:modelValue"],kM=["onClick"],HM={class:"space-y-2"},GM=["onUpdate:modelValue"],VM=["onUpdate:modelValue"],WM=["onClick"],XM={class:"space-y-2"},$M=["onUpdate:modelValue"],jM=["onUpdate:modelValue"],qM=["onClick"],YM={class:"space-y-4"},KM={class:"flex items-center gap-2"},ZM={class:"space-y-2"},JM={class:"flex gap-2"},QM={class:"flex flex-wrap gap-2"},eS=["onClick"],tS={class:"mt-2 space-y-2"},nS=["onUpdate:modelValue"],iS=["onClick"],rS={class:"flex-none p-6 border-t border-gray-700"},sS={class:"flex justify-between items-center"},oS={class:"flex gap-2"},aS=["disabled"],lS=Vn({__name:"ContainerModal",props:{onClose:{},onCreated:{},isEdit:{type:Boolean,default:!1}},emits:["close","created"],setup(n,{emit:e}){const t=e,i=Ye(!1),r=Ye(!1),s=Ye(""),a=Ye(""),o=Ye({name:"",image:"",ports:[],volumes:[],env:[],privileged:!1,network:"",capabilities:[],devices:[]}),l=Ye(""),c=()=>{o.value.ports.push({host:"",container:"",protocol:"tcp"})},u=O=>{o.value.ports.splice(O,1)},f=()=>{o.value.volumes.push({host:"",container:""})},d=O=>{o.value.volumes.splice(O,1)},p=()=>{o.value.env.push({key:"",value:""})},_=O=>{o.value.env.splice(O,1)},g=async()=>{if(o.value.image){r.value=!0,s.value=`Pulling image ${o.value.image}...`;try{console.log("Pulling image:",o.value.image);const O=await fetch(`${TM}/pull`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:o.value.image})}),U=await O.text();if(console.log("Pull response:",U),!O.ok)throw new Error(U||"Failed to pull image");s.value=`Successfully pulled ${o.value.image}`,a.value="success"}catch(O){console.error("Error pulling image:",O),s.value=O instanceof Error?O.message:"Failed to pull image",a.value="error"}finally{r.value=!1}}},m=async()=>{try{console.log("Submitting form with data:",o.value),i.value=!0,s.value="Pulling image...",a.value="info",await g(),s.value="Creating container...";const O={...o.value,ports:o.value.ports.filter(I=>I.host&&I.container),volumes:o.value.volumes.filter(I=>I.host&&I.container),env:o.value.env.filter(I=>I.key&&I.value)};console.log("Sending create request with data:",O);const U=await fetch(`${wM}/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)});if(console.log("Create response status:",U.status),!U.ok){const I=await U.text();throw console.error("Error response:",I),new Error(`Failed to create container: ${I||U.status}`)}s.value="Container created successfully!",a.value="success",t("created"),setTimeout(()=>{se()},1500)}catch(O){console.error("Error creating container:",O),s.value=O instanceof Error?O.message:"Failed to create container",a.value="error"}finally{i.value=!1}},h=Ye(""),E=()=>{h.value&&!o.value.capabilities.includes(h.value)&&(o.value.capabilities.push(h.value),h.value="")},y=O=>{o.value.capabilities=o.value.capabilities.filter(U=>U!==O)},w=async()=>{try{console.log("Attempting to save template...");const O={name:o.value.name+".json",image:o.value.image,ports:o.value.ports.filter(k=>k.host&&k.container),volumes:o.value.volumes.filter(k=>k.host&&k.container),env:o.value.env.filter(k=>k.key&&k.value),privileged:o.value.privileged,network:o.value.network,capabilities:o.value.capabilities,devices:o.value.devices};console.log("Template data to save:",O),s.value="Saving template...",a.value="info";const U=await fetch(Pr,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)});console.log("Template save URL:",Pr);const I=await U.text();if(console.log("Server response:",I),!U.ok)throw new Error(I||`Server returned ${U.status}`);s.value="Template saved successfully",a.value="success"}catch(O){console.error("Error saving template:",O),s.value=O instanceof Error?O.message:"Failed to save template",a.value="error"}},T=Ye([]);xr(async()=>{await C()});const C=async()=>{try{console.log("Fetching templates from:",`${Pr}`);const O=await fetch(`${Pr}`);if(!O.ok)throw new Error("Failed to fetch templates");const U=await O.json();console.log("Fetched templates:",U),T.value=U.map(I=>({name:I.name,displayName:I.name.replace(".json","")}))}catch(O){console.error("Error fetching templates:",O)}},P=async()=>{if(l.value)try{console.log("Loading template:",l.value),s.value="Loading template...",a.value="info";const O=l.value.endsWith(".json")?l.value:`${l.value}.json`,U=await fetch(`${Pr}/${encodeURIComponent(O)}`);if(!U.ok)throw new Error(`Failed to load template: ${U.status}`);const I=await U.json(),k=I.name.toLowerCase().includes("gluetun");o.value={name:I.name,image:I.image,ports:Array.isArray(I.ports)?I.ports.map(W=>k?{host:W.host,container:W.container,protocol:W.protocol||"tcp"}:{host:String(parseInt(W.host)+Math.floor(Math.random()*100)),container:W.container,protocol:W.protocol||"tcp"}):[],volumes:Array.isArray(I.volumes)?I.volumes.map(W=>({host:W.host,container:W.container})):[],env:Array.isArray(I.env)?I.env.map(W=>({key:W.key,value:W.value})):[],privileged:!!I.privileged,network:I.network||"",capabilities:Array.isArray(I.capabilities)?[...I.capabilities]:[],devices:I.devices||["/dev/net/tun"]},k&&[{host:"8388",container:"8388"},{host:"8888",container:"8888"}].forEach($=>{o.value.ports.some(X=>X.container===$.container)||o.value.ports.push({host:$.host,container:$.container,protocol:"tcp"})}),console.log("Updated form with template data:",o.value),s.value="Template loaded successfully",a.value="success"}catch(O){console.error("Error loading template:",O),s.value=O instanceof Error?O.message:"Failed to load template",a.value="error"}},B=async()=>{console.log("Template selected:",l.value),l.value?await P():o.value={name:"",image:"",ports:[{host:"",container:"",protocol:"tcp"}],volumes:[{host:"",container:""}],env:[{key:"",value:""}],privileged:!1,network:"",capabilities:[],devices:["/dev/net/tun"]}},M=()=>{o.value.devices.push("")},L=O=>{o.value.devices.splice(O,1)},se=()=>{t("close")};return(O,U)=>(Ie(),Oe("div",AM,[D("div",RM,[D("div",CM,[D("div",PM,[D("h3",LM,$e(O.isEdit?"Edit":"New")+" Container",1),D("div",UM,[vt(D("select",{"onUpdate:modelValue":U[0]||(U[0]=I=>l.value=I),onChange:B,class:"bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},[U[6]||(U[6]=D("option",{value:""},"Select Template",-1)),(Ie(!0),Oe(lt,null,Zt(T.value,I=>(Ie(),Oe("option",{key:I.name,value:I.name},$e(I.displayName),9,DM))),128))],544),[[Lo,l.value]])])]),s.value?(Ie(),Oe("div",{key:0,class:Sn([{"text-green-400":a.value==="success","text-blue-400":a.value==="info","text-red-400":a.value==="error"},"text-sm mt-2"])},$e(s.value),3)):wt("",!0)]),D("form",{onSubmit:ya(m,["prevent"]),class:"flex flex-col flex-1 min-h-0"},[D("div",IM,[D("div",NM,[D("div",null,[U[7]||(U[7]=D("label",{class:"block text-sm font-medium text-gray-300"},"Container Name",-1)),vt(D("input",{"onUpdate:modelValue":U[1]||(U[1]=I=>o.value.name=I),type:"text",class:"mt-1 w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white",placeholder:"e.g., my-container",required:""},null,512),[[Kt,o.value.name]])]),D("div",null,[U[8]||(U[8]=D("label",{class:"block text-sm font-medium text-gray-300"},"Image",-1)),vt(D("input",{"onUpdate:modelValue":U[2]||(U[2]=I=>o.value.image=I),type:"text",class:"mt-1 w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white",placeholder:"e.g., nginx:latest",required:""},null,512),[[Kt,o.value.image]])]),D("div",null,[U[11]||(U[11]=D("label",{class:"block text-sm font-medium text-gray-300"},"Port Mappings",-1)),D("div",FM,[(Ie(!0),Oe(lt,null,Zt(o.value.ports,(I,k)=>(Ie(),Oe("div",{key:k,class:"flex gap-2"},[vt(D("input",{"onUpdate:modelValue":W=>I.host=W,type:"text",placeholder:"Host Port (e.g., 8888)",class:"w-1/3 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,8,OM),[[Kt,I.host]]),vt(D("input",{"onUpdate:modelValue":W=>I.container=W,type:"text",placeholder:"Container Port (e.g., 8888)",class:"w-1/3 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,8,BM),[[Kt,I.container]]),vt(D("select",{"onUpdate:modelValue":W=>I.protocol=W,class:"w-1/4 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},U[9]||(U[9]=[D("option",{value:"tcp"},"TCP",-1),D("option",{value:"udp"},"UDP",-1),D("option",{value:"both"},"TCP/UDP",-1)]),8,zM),[[Lo,I.protocol]]),D("button",{type:"button",onClick:W=>u(k),class:"text-red-400 hover:text-red-300"},"✕",8,kM)]))),128)),D("button",{type:"button",onClick:c,class:"text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"},U[10]||(U[10]=[D("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1),Mi(" Add Port Mapping ")]))])]),D("div",null,[U[13]||(U[13]=D("label",{class:"block text-sm font-medium text-gray-300"},"Volume Mappings",-1)),D("div",HM,[(Ie(!0),Oe(lt,null,Zt(o.value.volumes,(I,k)=>(Ie(),Oe("div",{key:k,class:"flex gap-2"},[vt(D("input",{"onUpdate:modelValue":W=>I.host=W,type:"text",placeholder:"Host Path (e.g., /data)",class:"w-1/2 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,8,GM),[[Kt,I.host]]),vt(D("input",{"onUpdate:modelValue":W=>I.container=W,type:"text",placeholder:"Container Path (e.g., /app/data)",class:"w-1/2 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,8,VM),[[Kt,I.container]]),D("button",{type:"button",onClick:W=>d(k),class:"text-red-400 hover:text-red-300"},"✕",8,WM)]))),128)),D("button",{type:"button",onClick:f,class:"text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"},U[12]||(U[12]=[D("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1),Mi(" Add Volume Mapping ")]))])]),D("div",null,[U[15]||(U[15]=D("label",{class:"block text-sm font-medium text-gray-300"},"Environment Variables",-1)),D("div",XM,[(Ie(!0),Oe(lt,null,Zt(o.value.env,(I,k)=>(Ie(),Oe("div",{key:k,class:"flex gap-2"},[vt(D("input",{"onUpdate:modelValue":W=>I.key=W,type:"text",placeholder:"Key",class:"w-1/2 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,8,$M),[[Kt,I.key]]),vt(D("input",{"onUpdate:modelValue":W=>I.value=W,type:"text",placeholder:"Value",class:"w-1/2 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,8,jM),[[Kt,I.value]]),D("button",{type:"button",onClick:W=>_(k),class:"text-red-400 hover:text-red-300"},"✕",8,qM)]))),128)),D("button",{type:"button",onClick:p,class:"text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"},U[14]||(U[14]=[D("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1),Mi(" Add Environment Variable ")]))])]),D("div",YM,[D("div",KM,[vt(D("input",{type:"checkbox","onUpdate:modelValue":U[3]||(U[3]=I=>o.value.privileged=I),id:"privileged",class:"w-4 h-4 bg-gray-700 border-gray-600 rounded"},null,512),[[Rp,o.value.privileged]]),U[16]||(U[16]=D("label",{for:"privileged",class:"text-sm font-medium text-gray-300"}," Privileged Mode ",-1))]),D("div",null,[U[17]||(U[17]=D("label",{class:"block text-sm font-medium text-gray-300"},"Network Mode",-1)),vt(D("input",{"onUpdate:modelValue":U[4]||(U[4]=I=>o.value.network=I),type:"text",placeholder:"e.g., container:gluetun",class:"mt-1 w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,512),[[Kt,o.value.network]])]),D("div",null,[U[19]||(U[19]=D("label",{class:"block text-sm font-medium text-gray-300"},"Capabilities",-1)),D("div",ZM,[D("div",JM,[vt(D("select",{"onUpdate:modelValue":U[5]||(U[5]=I=>h.value=I),class:"w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},U[18]||(U[18]=[D("option",{value:""},"Select capability",-1),D("option",{value:"NET_ADMIN"},"NET_ADMIN",-1),D("option",{value:"NET_RAW"},"NET_RAW",-1),D("option",{value:"SYS_ADMIN"},"SYS_ADMIN",-1)]),512),[[Lo,h.value]]),D("button",{type:"button",onClick:E,class:"px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"}," Add ")]),D("div",QM,[(Ie(!0),Oe(lt,null,Zt(o.value.capabilities,I=>(Ie(),Oe("div",{key:I,class:"px-3 py-1 bg-gray-600 text-white rounded-lg flex items-center gap-2"},[Mi($e(I)+" ",1),D("button",{onClick:k=>y(I),class:"text-red-400 hover:text-red-300"},"✕",8,eS)]))),128))])])]),D("div",null,[U[20]||(U[20]=D("label",{class:"block text-sm font-medium text-gray-300"},"Devices",-1)),D("div",tS,[(Ie(!0),Oe(lt,null,Zt(o.value.devices,(I,k)=>(Ie(),Oe("div",{key:k,class:"flex gap-2"},[vt(D("input",{"onUpdate:modelValue":W=>o.value.devices[k]=W,type:"text",placeholder:"e.g., /dev/net/tun",class:"flex-1 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,8,nS),[[Kt,o.value.devices[k]]]),D("button",{type:"button",onClick:W=>L(k),class:"px-2 py-1 bg-red-500 text-white rounded-xl hover:bg-red-600"}," ✕ ",8,iS)]))),128)),D("button",{type:"button",onClick:M,class:"px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-500"}," Add Device ")])])])])]),D("div",rS,[D("div",sS,[D("button",{type:"button",onClick:w,class:"px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-500"}," Save as Template "),D("div",oS,[D("button",{type:"button",onClick:se,class:"px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-500"}," Cancel "),D("button",{type:"submit",class:"px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600",disabled:i.value},$e(i.value?"Creating...":O.isEdit?"Update":"Create"),9,aS)])])])],32)])]))}});const nu=mo(lS,[["__scopeId","data-v-f8c9fe7e"]]),cS={class:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[8888] p-4"},uS={class:"bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full h-[90vh] max-w-7xl overflow-hidden border border-gray-700/50"},fS={class:"p-8 border-b border-gray-700 flex justify-between items-center"},dS={class:"flex items-center gap-6"},hS={class:"flex gap-3"},pS={class:"p-8"},mS={key:0,class:"text-white"},gS={key:1,class:"text-white"},_S={key:2,class:"grid gap-4"},vS={class:"flex items-center gap-4"},xS={class:"text-white"},MS={class:"font-semibold"},SS={class:"text-sm text-gray-400"},yS={class:"flex items-center gap-2"},ES=["onClick"],bS={class:"flex gap-1"},TS=["onClick"],wS=["onClick"],AS=["onClick"],RS=["onClick"],CS=Vn({__name:"Containers",emits:["close","showModal"],setup(n,{emit:e}){const t=Ye(!1),i=Ye([]),r=Ye(!1),s=Ye(!1),a=Ye(null),o=Ye(!1),c=(()=>`http://${window.location.hostname}:8080/api/containers`)(),u=async()=>{try{console.log("Using API URL:",c),t.value=!0;const h=await fetch(c,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors",credentials:"omit"});if(console.log("Full response:",{status:h.status,statusText:h.statusText,headers:Object.fromEntries(h.headers.entries()),url:h.url}),!h.ok){const y=await h.text();throw console.error("Error response:",y),new Error(`Failed to fetch containers: ${h.status}`)}const E=await h.json();console.log("Raw container data:",E),i.value=E,console.log("Containers updated:",i.value)}catch(h){console.error("Error in fetchContainers:",h)}finally{t.value=!1}},f=h=>{a.value=h,s.value=!0},d=()=>{r.value=!1,s.value=!1,a.value=null},p=async h=>{var E;try{const y=s.value?`/api/containers/${(E=a.value)==null?void 0:E.ID}/update`:"/api/containers/create";if(!(await fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)})).ok)throw new Error("Failed to save container");await u(),d()}catch(y){console.error("Error saving container:",y)}},_=async(h,E)=>{try{console.log(`${E} container ${h}`);const y=await fetch(`${c}/${h}/${E}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"}});if(!y.ok){const w=await y.text();throw console.error(`Error response for ${E}:`,w),new Error(`Failed to ${E} container: ${y.status}`)}await u()}catch(y){console.error(`Error ${E}ing container:`,y)}};xr(()=>{console.log("Containers component mounted"),u()});const g=()=>{o.value=!1},m=()=>{o.value=!1};return(h,E)=>(Ie(),Oe("div",cS,[D("div",uS,[D("div",fS,[D("div",dS,[D("button",{onClick:E[0]||(E[0]=y=>h.$emit("close")),class:"p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl text-gray-400 hover:text-white transition-colors",title:"Back to Dashboard"},E[2]||(E[2]=[D("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1)])),E[3]||(E[3]=D("div",null,[D("h2",{class:"text-3xl font-bold text-white"},"Docker Containers"),D("p",{class:"text-gray-400 mt-2"},"Manage your running containers")],-1))]),D("div",hS,[D("button",{onClick:u,class:"p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl text-gray-400 hover:text-white transition-colors",title:"Refresh containers"},E[4]||(E[4]=[D("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)])),D("button",{onClick:E[1]||(E[1]=y=>o.value=!0),class:"px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center gap-2 transition-colors"},E[5]||(E[5]=[D("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1),Mi(" Add Container ")]))])]),D("div",pS,[t.value?(Ie(),Oe("div",mS,"Loading containers...")):i.value.length===0?(Ie(),Oe("div",gS," No containers found. Add a container or visit the Marketplace to install containers. ")):(Ie(),Oe("div",_S,[(Ie(!0),Oe(lt,null,Zt(i.value,y=>(Ie(),Oe("div",{key:y.ID,class:"bg-gray-700/50 p-4 rounded-xl flex items-center justify-between"},[D("div",vS,[D("div",xS,[D("h3",MS,$e(y.name),1),D("p",SS,$e(y.image),1),D("p",{class:Sn(["text-sm",{"text-green-400":y.status.includes("Up"),"text-red-400":!y.status.includes("Up")}])},$e(y.status),3)])]),D("div",yS,[D("button",{onClick:w=>f(y),class:"p-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg",title:"Edit Container"},E[6]||(E[6]=[D("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1)]),8,ES),D("div",bS,[y.status.includes("Up")?wt("",!0):(Ie(),Oe("button",{key:0,onClick:w=>_(y.ID,"start"),class:"p-2 bg-gray-600 hover:bg-gray-500 text-green-400 rounded-lg",title:"Start Container"},E[7]||(E[7]=[D("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)]),8,TS)),y.status.includes("Up")?(Ie(),Oe("button",{key:1,onClick:w=>_(y.ID,"stop"),class:"p-2 bg-gray-600 hover:bg-gray-500 text-yellow-400 rounded-lg",title:"Stop Container"},E[8]||(E[8]=[D("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}),D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"})],-1)]),8,wS)):wt("",!0),D("button",{onClick:w=>_(y.ID,"restart"),class:"p-2 bg-gray-600 hover:bg-gray-500 text-blue-400 rounded-lg",title:"Restart Container"},E[9]||(E[9]=[D("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)]),8,AS),D("button",{onClick:w=>_(y.ID,"delete"),class:"p-2 bg-gray-600 hover:bg-gray-500 text-red-400 rounded-lg",title:"Delete Container"},E[10]||(E[10]=[D("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)]),8,RS)])])]))),128))]))])]),r.value||s.value?(Ie(),jr(nu,{key:0,"is-edit":s.value,container:a.value,onClose:d,onSubmit:p},null,8,["is-edit","container"])):wt("",!0),o.value?(Ie(),jr(nu,{key:1,onClose:g,onCreated:m})):wt("",!0)]))}});const PS=mo(CS,[["__scopeId","data-v-34ffe7d0"]]),LS={class:"min-h-screen bg-gray-900 text-white"},US={class:"container mx-auto px-4 py-12"},DS={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"},IS={class:"bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg"},NS={class:"text-3xl font-bold text-white mb-2"},FS={class:"w-full bg-gray-700 rounded-full h-2"},OS={class:"bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg"},BS={class:"flex justify-between items-center mb-4"},zS={class:"text-xs text-green-400"},kS={class:"text-3xl font-bold text-white mb-2"},HS={class:"text-sm text-gray-400 mb-2"},GS={class:"w-full bg-gray-700 rounded-full h-2"},VS={class:"bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg"},WS={class:"flex justify-between items-center mb-4"},XS={class:"text-xs text-purple-400"},$S={class:"text-3xl font-bold text-white mb-2"},jS={class:"text-sm text-gray-400 mb-2"},qS={class:"w-full bg-gray-700 rounded-full h-2"},YS={class:"bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg"},KS={class:"flex justify-between items-center mb-4"},ZS={class:"flex items-center space-x-3"},JS={class:"text-white"},QS={key:0,class:"text-gray-400 text-sm ml-2"},ey={class:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"},ty=["onClick"],ny=["onClick"],iy={class:"flex items-center justify-center space-x-4"},ry={class:"text-4xl"},sy={class:"text-xl font-bold text-white"},oy={class:"text-center mt-4 text-gray-400"},ay={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},ly={class:"bg-gray-800 rounded-xl p-6 w-96 shadow-2xl emoji-picker"},cy={class:"mb-4"},uy={class:"relative"},fy={class:"text-2xl"},dy={key:0,class:"absolute top-full left-0 mt-2 w-full bg-gray-700 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto"},hy={class:"grid grid-cols-6 gap-2 p-3"},py=["onClick"],my={class:"mb-4"},gy={class:"mb-6"},_y={class:"fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"},vy={class:"flex items-end gap-2 px-6 py-4 bg-gray-800/20 backdrop-blur-xl rounded-2xl shadow-2xl"},xy=["onMouseenter","onClick"],My={class:"absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-700 text-white rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"},Sy=Vn({__name:"App",setup(n){const e=Ye({cpu:0,memory:{used:0,total:0},disk:{used:0,total:0},uptime:0,elizaStatus:!1,elizaVersion:""}),t=Ye(-1),i=Ye(!1),r=Ye(!1),s=[{emoji:"🐳",label:"Marketplace"},{emoji:"📦",label:"Containers"}],a=T=>{switch(console.log("Clicked dock item:",T.label),T.label){case"Marketplace":i.value=!0;break;case"Containers":r.value=!0;break}},o=Ye(new Map),l=T=>{const C=document.createElement("style");C.textContent=`
    #custom-controls {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 30px;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 10px;
      z-index: 9999;
    }
    .control-btn {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-right: 8px;
      cursor: pointer;
      border: none;
    }
    #close-btn { background: #ff5f56; }
    #minimize-btn { background: #ffbd2e; }
    #maximize-btn { background: #27c93f; }
    .control-btn:hover { opacity: 0.8; }
    body { margin-top: 30px; }
  `;const P=document.createElement("div");P.id="custom-controls",P.innerHTML=`
    <button id="close-btn" class="control-btn"></button>
    <button id="minimize-btn" class="control-btn"></button>
    <button id="maximize-btn" class="control-btn"></button>
  `,T.document.head.appendChild(C),T.document.body.insertBefore(P,T.document.body.firstChild);const B=T.document.getElementById("close-btn"),M=T.document.getElementById("maximize-btn"),L=T.document.getElementById("minimize-btn");B==null||B.addEventListener("click",()=>T.close()),M==null||M.addEventListener("click",()=>window.postMessage("maximize","*")),L==null||L.addEventListener("click",()=>window.postMessage("minimize","*"))},c=(T,C,P,B)=>{const M=(window.screen.width-P)/2,L=(window.screen.height-B)/2,se={width:P,height:B,left:M,top:L},O=`
    width=${P},
    height=${B},
    left=${M},
    top=${L},
    menubar=no,
    toolbar=no,
    location=no,
    status=no,
    resizable=yes,
    scrollbars=yes
  `,U=window.open(T,C,O);U&&(U.addEventListener("load",()=>{l(U)}),o.value.set(C,{window:U,originalSize:se}),window.addEventListener("message",I=>{const k=o.value.get(C);if(k!=null&&k.window)switch(I.data){case"maximize":const W=window.screen.width*.9,$=window.screen.height*.9,X=(window.screen.width-W)/2,de=(window.screen.height-$)/2;k.window.resizeTo(W,$),k.window.moveTo(X,de);break;case"minimize":const{width:le,height:Ae,left:he,top:Z}=k.originalSize;k.window.resizeTo(le,Ae),k.window.moveTo(he,Z);break}}),U.addEventListener("beforeunload",()=>{o.value.delete(C)}))},u=T=>{if(T===0)return"0 B";const C=1024,P=["B","KB","MB","GB","TB"],B=Math.floor(Math.log(T)/Math.log(C));return`${parseFloat((T/Math.pow(C,B)).toFixed(2))} ${P[B]}`},f=async()=>{try{const C=await(await fetch("/api/system/metrics")).json();e.value=C}catch(T){console.error("Error fetching metrics:",T)}},d=Ye(!1),p=Ye([]),_=Ye(!1),g=Ye({title:"",url:"",emoji:"🔗"}),m=["🌐","🔗","📱","💻","⭐","🎮","📺","🎵","📚","📰","💬","📝","📈","🎨","🛠️","⚙️","📦","🔍","🎯","📊","🏢","🎬","📷","🎥","💡","🔔","📫","🗂️","📁","🔐","🌟","💼","🎪","🎭","🎧","📡","🔧","📌","🎲","🎯","🚀","⚡","🔥","💎","🎪","🎨","🎬","🎮","📱","💻"],h=T=>{g.value.emoji=T,d.value=!1},E=()=>{_.value=!1,d.value=!1,g.value={title:"",url:"",emoji:"🔗"}};xr(()=>{document.addEventListener("click",P=>{!P.target.closest(".emoji-picker")&&d.value&&(d.value=!1)});const T=localStorage.getItem("customLinks");T&&(p.value=JSON.parse(T)),f();const C=setInterval(f,2e3);$s(()=>{clearInterval(C)})});const y=()=>{let T=g.value.url;!T.startsWith("http://")&&!T.startsWith("https://")&&(T="https://"+T),p.value.push({title:g.value.title,url:T,emoji:g.value.emoji}),localStorage.setItem("customLinks",JSON.stringify(p.value)),E()};$s(()=>{o.value.forEach(T=>{var C;(C=T.window)==null||C.close()})});const w=T=>{p.value.splice(T,1),localStorage.setItem("customLinks",JSON.stringify(p.value))};return(T,C)=>(Ie(),Oe("div",LS,[At(Vx),D("div",US,[D("div",DS,[D("div",IS,[C[7]||(C[7]=D("div",{class:"flex justify-between items-center mb-4"},[D("h3",{class:"text-gray-400 text-sm"},"CPU Usage"),D("span",{class:"text-xs text-blue-400"},"Real-time")],-1)),D("div",NS,$e(e.value.cpu.toFixed(1))+"% ",1),D("div",FS,[D("div",{class:"bg-blue-600 h-2 rounded-full transition-all duration-300",style:nr({width:`${Math.min(e.value.cpu,100)}%`})},null,4)])]),D("div",OS,[D("div",BS,[C[8]||(C[8]=D("h3",{class:"text-gray-400 text-sm"},"Memory Usage",-1)),D("span",zS,$e(u(e.value.memory.total)),1)]),D("div",kS,$e((e.value.memory.used/e.value.memory.total*100).toFixed(1))+"% ",1),D("div",HS,$e(u(e.value.memory.used))+" used ",1),D("div",GS,[D("div",{class:"bg-green-600 h-2 rounded-full transition-all duration-300",style:nr({width:`${e.value.memory.used/e.value.memory.total*100}%`})},null,4)])]),D("div",VS,[D("div",WS,[C[9]||(C[9]=D("h3",{class:"text-gray-400 text-sm"},"Disk Usage",-1)),D("span",XS,$e(u(e.value.disk.total)),1)]),D("div",$S,$e((e.value.disk.used/e.value.disk.total*100).toFixed(1))+"% ",1),D("div",jS,$e(u(e.value.disk.used))+" used ",1),D("div",qS,[D("div",{class:"bg-purple-600 h-2 rounded-full transition-all duration-300",style:nr({width:`${e.value.disk.used/e.value.disk.total*100}%`})},null,4)])]),D("div",YS,[D("div",KS,[C[10]||(C[10]=D("h3",{class:"text-gray-400 text-sm"},"Eliza Status",-1)),D("span",{class:Sn(["text-xs",e.value.elizaStatus?"text-green-400":"text-red-400"])},$e(e.value.elizaStatus?"Connected":"Disconnected"),3)]),D("div",ZS,[D("div",{class:Sn(["w-3 h-3 rounded-full transition-colors duration-300",e.value.elizaStatus?"bg-green-500":"bg-red-500"])},null,2),D("div",JS,[Mi($e(e.value.elizaStatus?"Online":"Offline")+" ",1),e.value.elizaVersion?(Ie(),Oe("span",QS," (v"+$e(e.value.elizaVersion)+") ",1)):wt("",!0)])])])]),D("div",ey,[(Ie(!0),Oe(lt,null,Zt(p.value,(P,B)=>(Ie(),Oe("div",{key:B,class:"bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg cursor-pointer hover:bg-gray-800/70 transition-all duration-300 relative"},[D("button",{onClick:ya(M=>w(B),["stop"]),class:"absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"}," ✕ ",8,ty),D("div",{onClick:M=>c(P.url,P.title,800,600),class:"w-full h-full"},[D("div",iy,[D("div",ry,$e(P.emoji||"🔗"),1),D("div",sy,$e(P.title),1)]),D("div",oy," Click to open "+$e(P.title),1)],8,ny)]))),128)),D("div",{class:"bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg cursor-pointer hover:bg-gray-800/70 transition-all duration-300",onClick:C[0]||(C[0]=P=>_.value=!0)},C[11]||(C[11]=[D("div",{class:"flex items-center justify-center h-full"},[D("div",{class:"text-4xl text-gray-400 hover:text-white transition-colors"},"➕")],-1)]))]),_.value?(Ie(),Oe("div",ay,[D("div",ly,[C[17]||(C[17]=D("h3",{class:"text-xl font-bold text-white mb-4"},"Add New Link",-1)),D("form",{onSubmit:ya(y,["prevent"])},[D("div",cy,[C[13]||(C[13]=D("label",{class:"block text-gray-400 mb-2"},"Icon",-1)),D("div",uy,[D("button",{type:"button",onClick:C[1]||(C[1]=P=>d.value=!d.value),class:"w-full bg-gray-700 text-white rounded-lg px-4 py-2 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"},[D("span",fy,$e(g.value.emoji||"🔗"),1),C[12]||(C[12]=D("span",{class:"text-gray-400"},"▼",-1))]),d.value?(Ie(),Oe("div",dy,[D("div",hy,[(Ie(),Oe(lt,null,Zt(m,P=>D("button",{key:P,type:"button",onClick:B=>h(P),class:"text-2xl hover:bg-gray-600 p-2 rounded transition-colors cursor-pointer"},$e(P),9,py)),64))])])):wt("",!0)])]),D("div",my,[C[14]||(C[14]=D("label",{class:"block text-gray-400 mb-2"},"Title",-1)),vt(D("input",{"onUpdate:modelValue":C[2]||(C[2]=P=>g.value.title=P),type:"text",class:"w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter website title",required:""},null,512),[[Kt,g.value.title]])]),D("div",gy,[C[15]||(C[15]=D("label",{class:"block text-gray-400 mb-2"},"URL",-1)),vt(D("input",{"onUpdate:modelValue":C[3]||(C[3]=P=>g.value.url=P),type:"url",class:"w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://example.com",required:""},null,512),[[Kt,g.value.url]])]),D("div",{class:"flex justify-end space-x-4"},[D("button",{type:"button",onClick:E,class:"px-4 py-2 text-gray-400 hover:text-white transition-colors"}," Cancel "),C[16]||(C[16]=D("button",{type:"submit",class:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"}," Add Link ",-1))])],32)])])):wt("",!0),C[18]||(C[18]=Zh('<div class="fixed bottom-8 left-8 z-20 flex flex-col items-start"><div class="text-2xl mb-2 glow-text"> 💾 WagmiOS </div><div class="flex items-center space-x-4"><a href="https://x.com/itzmizzle" target="_blank" class="text-sm text-gray-400 hover:text-gray-300 transition-colors"> Created by @ITZMIZZLE </a><a href="https://wagmilabs.fun" target="_blank" class="text-sm text-gray-400 hover:text-gray-300 transition-colors"> 👷 Labs </a><a href="https://github.com/mentholmike/wagmios" target="_blank" class="text-sm text-gray-400 hover:text-gray-300 transition-colors"><span class="text-xl">🐙</span> GitHub </a></div></div>',1)),D("div",_y,[D("div",vy,[(Ie(),Oe(lt,null,Zt(s,(P,B)=>D("div",{key:B,class:"relative group cursor-pointer",onMouseenter:M=>t.value=B,onMouseleave:C[4]||(C[4]=M=>t.value=-1),onClick:M=>a(P)},[D("div",{class:Sn(["w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-200 text-4xl hover:bg-gray-700/20",{"scale-125":t.value===B}])},$e(P.emoji),3),D("div",My,$e(P.label),1)],40,xy)),64))])]),i.value?(Ie(),jr(yM,{key:1,onClose:C[5]||(C[5]=P=>i.value=!1)})):wt("",!0),r.value?(Ie(),jr(PS,{key:2,onClose:C[6]||(C[6]=P=>r.value=!1)})):wt("",!0)])]))}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ji=typeof document<"u";function ed(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function yy(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&ed(n.default)}const Ke=Object.assign;function la(n,e){const t={};for(const i in e){const r=e[i];t[i]=hn(r)?r.map(n):n(r)}return t}const Hr=()=>{},hn=Array.isArray,td=/#/g,Ey=/&/g,by=/\//g,Ty=/=/g,wy=/\?/g,nd=/\+/g,Ay=/%5B/g,Ry=/%5D/g,id=/%5E/g,Cy=/%60/g,rd=/%7B/g,Py=/%7C/g,sd=/%7D/g,Ly=/%20/g;function il(n){return encodeURI(""+n).replace(Py,"|").replace(Ay,"[").replace(Ry,"]")}function Uy(n){return il(n).replace(rd,"{").replace(sd,"}").replace(id,"^")}function La(n){return il(n).replace(nd,"%2B").replace(Ly,"+").replace(td,"%23").replace(Ey,"%26").replace(Cy,"`").replace(rd,"{").replace(sd,"}").replace(id,"^")}function Dy(n){return La(n).replace(Ty,"%3D")}function Iy(n){return il(n).replace(td,"%23").replace(wy,"%3F")}function Ny(n){return n==null?"":Iy(n).replace(by,"%2F")}function Jr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Fy=/\/$/,Oy=n=>n.replace(Fy,"");function ca(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Hy(i??e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:Jr(a)}}function By(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function iu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function zy(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&gr(e.matched[i],t.matched[r])&&od(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function gr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function od(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!ky(n[t],e[t]))return!1;return!0}function ky(n,e){return hn(n)?ru(n,e):hn(e)?ru(e,n):n===e}function ru(n,e){return hn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Hy(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Qr;(function(n){n.pop="pop",n.push="push"})(Qr||(Qr={}));var Gr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Gr||(Gr={}));function Gy(n){if(!n)if(Ji){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Oy(n)}const Vy=/^[^#]+#/;function Wy(n,e){return n.replace(Vy,"#")+e}function Xy(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const go=()=>({left:window.scrollX,top:window.scrollY});function $y(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Xy(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function su(n,e){return(history.state?history.state.position-e:-1)+n}const Ua=new Map;function jy(n,e){Ua.set(n,e)}function qy(n){const e=Ua.get(n);return Ua.delete(n),e}let Yy=()=>location.protocol+"//"+location.host;function ad(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),iu(l,"")}return iu(t,n)+i+r}function Ky(n,e,t,i){let r=[],s=[],a=null;const o=({state:d})=>{const p=ad(n,location),_=t.value,g=e.value;let m=0;if(d){if(t.value=p,e.value=d,a&&a===_){a=null;return}m=g?d.position-g.position:0}else i(p);r.forEach(h=>{h(t.value,_,{delta:m,type:Qr.pop,direction:m?m>0?Gr.forward:Gr.back:Gr.unknown})})};function l(){a=t.value}function c(d){r.push(d);const p=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return s.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(Ke({},d.state,{scroll:go()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function ou(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?go():null}}function Zy(n){const{history:e,location:t}=window,i={value:ad(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Yy()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](d)}}function a(l,c){const u=Ke({},e.state,ou(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=Ke({},r.value,e.state,{forward:l,scroll:go()});s(u.current,u,!0);const f=Ke({},ou(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function Jy(n){n=Gy(n);const e=Zy(n),t=Ky(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Ke({location:"",base:n,go:i,createHref:Wy.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Qy(n){return typeof n=="string"||n&&typeof n=="object"}function ld(n){return typeof n=="string"||typeof n=="symbol"}const cd=Symbol("");var au;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(au||(au={}));function _r(n,e){return Ke(new Error,{type:n,[cd]:!0},e)}function In(n,e){return n instanceof Error&&cd in n&&(e==null||!!(n.type&e))}const lu="[^/]+?",eE={sensitive:!1,strict:!1,start:!0,end:!0},tE=/[.+*?^${}()[\]/\\]/g;function nE(n,e){const t=Ke({},eE,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(t.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(tE,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:g,optional:m,regexp:h}=d;s.push({name:_,repeatable:g,optional:m});const E=h||lu;if(E!==lu){p+=10;try{new RegExp(`(${E})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${_}" (${E}): `+w.message)}}let y=g?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,p+=20,m&&(p+=-8),g&&(p+=-20),E===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=s[d-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:g,optional:m}=p,h=_ in c?c[_]:"";if(hn(h)&&!g)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const E=hn(h)?h.join("/"):h;if(!E)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=E}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function iE(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ud(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=iE(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(cu(i))return 1;if(cu(r))return-1}return r.length-i.length}function cu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const rE={type:0,value:""},sE=/[a-zA-Z0-9_]/;function oE(n){if(!n)return[[]];if(n==="/")return[[rE]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:sE.test(l)?d():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function aE(n,e,t){const i=nE(oE(n.path),t),r=Ke(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function lE(n,e){const t=[],i=new Map;e=hu({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,p){const _=!p,g=fu(f);g.aliasOf=p&&p.record;const m=hu(e,f),h=[g];if("alias"in f){const w=typeof f.alias=="string"?[f.alias]:f.alias;for(const T of w)h.push(fu(Ke({},g,{components:p?p.record.components:g.components,path:T,aliasOf:p?p.record:g})))}let E,y;for(const w of h){const{path:T}=w;if(d&&T[0]!=="/"){const C=d.record.path,P=C[C.length-1]==="/"?"":"/";w.path=d.record.path+(T&&P+T)}if(E=aE(w,d,m),p?p.alias.push(E):(y=y||E,y!==E&&y.alias.push(E),_&&f.name&&!du(E)&&a(f.name)),fd(E)&&l(E),g.children){const C=g.children;for(let P=0;P<C.length;P++)s(C[P],E,p&&p.children[P])}p=p||E}return y?()=>{a(y)}:Hr}function a(f){if(ld(f)){const d=i.get(f);d&&(i.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const d=fE(f,t);t.splice(d,0,f),f.record.name&&!du(f)&&i.set(f.record.name,f)}function c(f,d){let p,_={},g,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw _r(1,{location:f});m=p.record.name,_=Ke(uu(d.params,p.keys.filter(y=>!y.optional).concat(p.parent?p.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&uu(f.params,p.keys.map(y=>y.name))),g=p.stringify(_)}else if(f.path!=null)g=f.path,p=t.find(y=>y.re.test(g)),p&&(_=p.parse(g),m=p.record.name);else{if(p=d.name?i.get(d.name):t.find(y=>y.re.test(d.path)),!p)throw _r(1,{location:f,currentLocation:d});m=p.record.name,_=Ke({},d.params,f.params),g=p.stringify(_)}const h=[];let E=p;for(;E;)h.unshift(E.record),E=E.parent;return{name:m,path:g,params:_,matched:h,meta:uE(h)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function uu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function fu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:cE(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function cE(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function du(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function uE(n){return n.reduce((e,t)=>Ke(e,t.meta),{})}function hu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function fE(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;ud(n,e[s])<0?i=s:t=s+1}const r=dE(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function dE(n){let e=n;for(;e=e.parent;)if(fd(e)&&ud(n,e)===0)return e}function fd({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function hE(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(nd," "),a=s.indexOf("="),o=Jr(a<0?s:s.slice(0,a)),l=a<0?null:Jr(s.slice(a+1));if(o in e){let c=e[o];hn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function pu(n){let e="";for(let t in n){const i=n[t];if(t=Dy(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(hn(i)?i.map(s=>s&&La(s)):[i&&La(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function pE(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=hn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const mE=Symbol(""),mu=Symbol(""),rl=Symbol(""),dd=Symbol(""),Da=Symbol("");function Lr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Qn(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=d=>{d===!1?l(_r(4,{from:t,to:e})):d instanceof Error?l(d):Qy(d)?l(_r(2,{from:e,to:d})):(a&&i.enterCallbacks[r]===a&&typeof d=="function"&&a.push(d),o())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function ua(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(ed(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Qn(u,t,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=yy(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&Qn(p,t,i,a,o,r)()}))}}return s}function gu(n){const e=kn(rl),t=kn(dd),i=Wt(()=>{const l=rr(n.to);return e.resolve(l)}),r=Wt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(gr.bind(null,u));if(d>-1)return d;const p=_u(l[c-2]);return c>1&&_u(u)===p&&f[f.length-1].path!==p?f.findIndex(gr.bind(null,l[c-2])):d}),s=Wt(()=>r.value>-1&&ME(t.params,i.value.params)),a=Wt(()=>r.value>-1&&r.value===t.matched.length-1&&od(t.params,i.value.params));function o(l={}){if(xE(l)){const c=e[rr(n.replace)?"replace":"push"](rr(n.to)).catch(Hr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Wt(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function gE(n){return n.length===1?n[0]:n}const _E=Vn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gu,setup(n,{slots:e}){const t=ro(gu(n)),{options:i}=kn(rl),r=Wt(()=>({[vu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[vu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&gE(e.default(t));return n.custom?s:bf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),vE=_E;function xE(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function ME(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!hn(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function _u(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const vu=(n,e,t)=>n??e??t,SE=Vn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=kn(Da),r=Wt(()=>n.route||i.value),s=kn(mu,0),a=Wt(()=>{let c=rr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=Wt(()=>r.value.matched[a.value]);Ns(mu,Wt(()=>a.value+1)),Ns(mE,o),Ns(Da,r);const l=Ye();return Fs(()=>[l.value,o.value,n.name],([c,u,f],[d,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!gr(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,d=f&&f.components[u];if(!d)return xu(t.default,{Component:d,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=bf(d,Ke({},_,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return xu(t.default,{Component:m,route:c})||m}}});function xu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const yE=SE;function EE(n){const e=lE(n.routes,n),t=n.parseQuery||hE,i=n.stringifyQuery||pu,r=n.history,s=Lr(),a=Lr(),o=Lr(),l=Yd(Kn);let c=Kn;Ji&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=la.bind(null,b=>""+b),f=la.bind(null,Ny),d=la.bind(null,Jr);function p(b,ae){let te,q;return ld(b)?(te=e.getRecordMatcher(b),q=ae):q=b,e.addRoute(q,te)}function _(b){const ae=e.getRecordMatcher(b);ae&&e.removeRoute(ae)}function g(){return e.getRoutes().map(b=>b.record)}function m(b){return!!e.getRecordMatcher(b)}function h(b,ae){if(ae=Ke({},ae||l.value),typeof b=="string"){const R=ca(t,b,ae.path),z=e.resolve({path:R.path},ae),ne=r.createHref(R.fullPath);return Ke(R,z,{params:d(z.params),hash:Jr(R.hash),redirectedFrom:void 0,href:ne})}let te;if(b.path!=null)te=Ke({},b,{path:ca(t,b.path,ae.path).path});else{const R=Ke({},b.params);for(const z in R)R[z]==null&&delete R[z];te=Ke({},b,{params:f(R)}),ae.params=f(ae.params)}const q=e.resolve(te,ae),xe=b.hash||"";q.params=u(d(q.params));const Pe=By(i,Ke({},b,{hash:Uy(xe),path:q.path})),S=r.createHref(Pe);return Ke({fullPath:Pe,hash:xe,query:i===pu?pE(b.query):b.query||{}},q,{redirectedFrom:void 0,href:S})}function E(b){return typeof b=="string"?ca(t,b,l.value.path):Ke({},b)}function y(b,ae){if(c!==b)return _r(8,{from:ae,to:b})}function w(b){return P(b)}function T(b){return w(Ke(E(b),{replace:!0}))}function C(b){const ae=b.matched[b.matched.length-1];if(ae&&ae.redirect){const{redirect:te}=ae;let q=typeof te=="function"?te(b):te;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=E(q):{path:q},q.params={}),Ke({query:b.query,hash:b.hash,params:q.path!=null?{}:b.params},q)}}function P(b,ae){const te=c=h(b),q=l.value,xe=b.state,Pe=b.force,S=b.replace===!0,R=C(te);if(R)return P(Ke(E(R),{state:typeof R=="object"?Ke({},xe,R.state):xe,force:Pe,replace:S}),ae||te);const z=te;z.redirectedFrom=ae;let ne;return!Pe&&zy(i,q,te)&&(ne=_r(16,{to:z,from:q}),Ae(q,q,!0,!1)),(ne?Promise.resolve(ne):L(z,q)).catch(Y=>In(Y)?In(Y,2)?Y:le(Y):X(Y,z,q)).then(Y=>{if(Y){if(In(Y,2))return P(Ke({replace:S},E(Y.to),{state:typeof Y.to=="object"?Ke({},xe,Y.to.state):xe,force:Pe}),ae||z)}else Y=O(z,q,!0,S,xe);return se(z,q,Y),Y})}function B(b,ae){const te=y(b,ae);return te?Promise.reject(te):Promise.resolve()}function M(b){const ae=oe.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(b):b()}function L(b,ae){let te;const[q,xe,Pe]=bE(b,ae);te=ua(q.reverse(),"beforeRouteLeave",b,ae);for(const R of q)R.leaveGuards.forEach(z=>{te.push(Qn(z,b,ae))});const S=B.bind(null,b,ae);return te.push(S),_e(te).then(()=>{te=[];for(const R of s.list())te.push(Qn(R,b,ae));return te.push(S),_e(te)}).then(()=>{te=ua(xe,"beforeRouteUpdate",b,ae);for(const R of xe)R.updateGuards.forEach(z=>{te.push(Qn(z,b,ae))});return te.push(S),_e(te)}).then(()=>{te=[];for(const R of Pe)if(R.beforeEnter)if(hn(R.beforeEnter))for(const z of R.beforeEnter)te.push(Qn(z,b,ae));else te.push(Qn(R.beforeEnter,b,ae));return te.push(S),_e(te)}).then(()=>(b.matched.forEach(R=>R.enterCallbacks={}),te=ua(Pe,"beforeRouteEnter",b,ae,M),te.push(S),_e(te))).then(()=>{te=[];for(const R of a.list())te.push(Qn(R,b,ae));return te.push(S),_e(te)}).catch(R=>In(R,8)?R:Promise.reject(R))}function se(b,ae,te){o.list().forEach(q=>M(()=>q(b,ae,te)))}function O(b,ae,te,q,xe){const Pe=y(b,ae);if(Pe)return Pe;const S=ae===Kn,R=Ji?history.state:{};te&&(q||S?r.replace(b.fullPath,Ke({scroll:S&&R&&R.scroll},xe)):r.push(b.fullPath,xe)),l.value=b,Ae(b,ae,te,S),le()}let U;function I(){U||(U=r.listen((b,ae,te)=>{if(!ve.listening)return;const q=h(b),xe=C(q);if(xe){P(Ke(xe,{replace:!0,force:!0}),q).catch(Hr);return}c=q;const Pe=l.value;Ji&&jy(su(Pe.fullPath,te.delta),go()),L(q,Pe).catch(S=>In(S,12)?S:In(S,2)?(P(Ke(E(S.to),{force:!0}),q).then(R=>{In(R,20)&&!te.delta&&te.type===Qr.pop&&r.go(-1,!1)}).catch(Hr),Promise.reject()):(te.delta&&r.go(-te.delta,!1),X(S,q,Pe))).then(S=>{S=S||O(q,Pe,!1),S&&(te.delta&&!In(S,8)?r.go(-te.delta,!1):te.type===Qr.pop&&In(S,20)&&r.go(-1,!1)),se(q,Pe,S)}).catch(Hr)}))}let k=Lr(),W=Lr(),$;function X(b,ae,te){le(b);const q=W.list();return q.length?q.forEach(xe=>xe(b,ae,te)):console.error(b),Promise.reject(b)}function de(){return $&&l.value!==Kn?Promise.resolve():new Promise((b,ae)=>{k.add([b,ae])})}function le(b){return $||($=!b,I(),k.list().forEach(([ae,te])=>b?te(b):ae()),k.reset()),b}function Ae(b,ae,te,q){const{scrollBehavior:xe}=n;if(!Ji||!xe)return Promise.resolve();const Pe=!te&&qy(su(b.fullPath,0))||(q||!te)&&history.state&&history.state.scroll||null;return $a().then(()=>xe(b,ae,Pe)).then(S=>S&&$y(S)).catch(S=>X(S,b,ae))}const he=b=>r.go(b);let Z;const oe=new Set,ve={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:g,resolve:h,options:n,push:w,replace:T,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:W.add,isReady:de,install(b){const ae=this;b.component("RouterLink",vE),b.component("RouterView",yE),b.config.globalProperties.$router=ae,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>rr(l)}),Ji&&!Z&&l.value===Kn&&(Z=!0,w(r.location).catch(xe=>{}));const te={};for(const xe in Kn)Object.defineProperty(te,xe,{get:()=>l.value[xe],enumerable:!0});b.provide(rl,ae),b.provide(dd,Vu(te)),b.provide(Da,l);const q=b.unmount;oe.add(b),b.unmount=function(){oe.delete(b),oe.size<1&&(c=Kn,U&&U(),U=null,l.value=Kn,Z=!1,$=!1),q()}}};function _e(b){return b.reduce((ae,te)=>ae.then(()=>M(te)),Promise.resolve())}return ve}function bE(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>gr(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>gr(c,l))||r.push(l))}return[t,i,r]}const TE={class:"relative z-10"},wE=Vn({__name:"Dashboard",setup(n){return(e,t)=>(Ie(),Oe("div",TE,t[0]||(t[0]=[D("div",{class:"container mx-auto px-4 py-8"},null,-1)])))}}),AE=EE({history:Jy(),routes:[{path:"/",name:"dashboard",component:wE}]}),sl=Dp(Sy),RE=Bp();sl.use(RE);sl.use(AE);sl.mount("#app");
