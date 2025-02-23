(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Fa(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const nt={},tr=[],fn=()=>{},_d=()=>!1,no=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Oa=n=>n.startsWith("onUpdate:"),vt=Object.assign,Ba=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},vd=Object.prototype.hasOwnProperty,Je=(n,e)=>vd.call(n,e),De=Array.isArray,nr=n=>es(n)==="[object Map]",vr=n=>es(n)==="[object Set]",cl=n=>es(n)==="[object Date]",Be=n=>typeof n=="function",dt=n=>typeof n=="string",bn=n=>typeof n=="symbol",rt=n=>n!==null&&typeof n=="object",Mu=n=>(rt(n)||Be(n))&&Be(n.then)&&Be(n.catch),yu=Object.prototype.toString,es=n=>yu.call(n),xd=n=>es(n).slice(8,-1),Su=n=>es(n)==="[object Object]",ka=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Dr=Fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),io=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Md=/-(\w)/g,ii=io(n=>n.replace(Md,(e,t)=>t?t.toUpperCase():"")),yd=/\B([A-Z])/g,Ui=io(n=>n.replace(yd,"-$1").toLowerCase()),Eu=io(n=>n.charAt(0).toUpperCase()+n.slice(1)),Eo=io(n=>n?`on${Eu(n)}`:""),ti=(n,e)=>!Object.is(n,e),Ns=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},bu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Gs=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ul;const ro=()=>ul||(ul=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Si(n){if(De(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=dt(i)?Td(i):Si(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(dt(n)||rt(n))return n}const Sd=/;(?![^(]*\))/g,Ed=/:([^]+)/,bd=/\/\*[^]*?\*\//g;function Td(n){const e={};return n.replace(bd,"").split(Sd).forEach(t=>{if(t){const i=t.split(Ed);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function dn(n){let e="";if(dt(n))e=n;else if(De(n))for(let t=0;t<n.length;t++){const i=dn(n[t]);i&&(e+=i+" ")}else if(rt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const wd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ad=Fa(wd);function Tu(n){return!!n||n===""}function Rd(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=ts(n[i],e[i]);return t}function ts(n,e){if(n===e)return!0;let t=cl(n),i=cl(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=bn(n),i=bn(e),t||i)return n===e;if(t=De(n),i=De(e),t||i)return t&&i?Rd(n,e):!1;if(t=rt(n),i=rt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!ts(n[a],e[a]))return!1}}return String(n)===String(e)}function za(n,e){return n.findIndex(t=>ts(t,e))}const wu=n=>!!(n&&n.__v_isRef===!0),je=n=>dt(n)?n:n==null?"":De(n)||rt(n)&&(n.toString===yu||!Be(n.toString))?wu(n)?je(n.value):JSON.stringify(n,Au,2):String(n),Au=(n,e)=>wu(e)?Au(n,e.value):nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[bo(i,s)+" =>"]=r,t),{})}:vr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>bo(t))}:bn(e)?bo(e):rt(e)&&!De(e)&&!Su(e)?String(e):e,bo=(n,e="")=>{var t;return bn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xt;class Ru{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xt,!e&&Xt&&(this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Xt;try{return Xt=this,e()}finally{Xt=t}}}on(){Xt=this}off(){Xt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Cd(n){return new Ru(n)}function Pd(){return Xt}let it;const To=new WeakSet;class Cu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xt&&Xt.active&&Xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,To.has(this)&&(To.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,fl(this),Uu(this);const e=it,t=hn;it=this,hn=!0;try{return this.fn()}finally{Du(this),it=e,hn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Va(e);this.deps=this.depsTail=void 0,fl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?To.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pa(this)&&this.run()}get dirty(){return pa(this)}}let Pu=0,Ir,Nr;function Lu(n,e=!1){if(n.flags|=8,e){n.next=Nr,Nr=n;return}n.next=Ir,Ir=n}function Ha(){Pu++}function Ga(){if(--Pu>0)return;if(Nr){let e=Nr;for(Nr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ir;){let e=Ir;for(Ir=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Uu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Du(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Va(i),Ld(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function pa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Iu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Iu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Gr))return;n.globalVersion=Gr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!pa(n)){n.flags&=-3;return}const t=it,i=hn;it=n,hn=!0;try{Uu(n);const r=n.fn(n._value);(e.version===0||ti(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{it=t,hn=i,Du(n),n.flags&=-3}}function Va(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Va(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ld(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let hn=!0;const Nu=[];function si(){Nu.push(hn),hn=!1}function oi(){const n=Nu.pop();hn=n===void 0?!0:n}function fl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=it;it=void 0;try{e()}finally{it=t}}}let Gr=0;class Ud{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!it||!hn||it===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==it)t=this.activeLink=new Ud(it,this),it.deps?(t.prevDep=it.depsTail,it.depsTail.nextDep=t,it.depsTail=t):it.deps=it.depsTail=t,Fu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=it.depsTail,t.nextDep=void 0,it.depsTail.nextDep=t,it.depsTail=t,it.deps===t&&(it.deps=i)}return t}trigger(e){this.version++,Gr++,this.notify(e)}notify(e){Ha();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ga()}}}function Fu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Fu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ma=new WeakMap,Ei=Symbol(""),ga=Symbol(""),Vr=Symbol("");function Tt(n,e,t){if(hn&&it){let i=ma.get(n);i||ma.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Wa),r.map=i,r.key=t),r.track()}}function Bn(n,e,t,i,r,s){const a=ma.get(n);if(!a){Gr++;return}const o=l=>{l&&l.trigger()};if(Ha(),e==="clear")a.forEach(o);else{const l=De(n),c=l&&ka(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===Vr||!bn(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Vr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Ei)),nr(n)&&o(a.get(ga)));break;case"delete":l||(o(a.get(Ei)),nr(n)&&o(a.get(ga)));break;case"set":nr(n)&&o(a.get(Ei));break}}Ga()}function Di(n){const e=Ze(n);return e===n?e:(Tt(e,"iterate",Vr),tn(n)?e:e.map(wt))}function so(n){return Tt(n=Ze(n),"iterate",Vr),n}const Dd={__proto__:null,[Symbol.iterator](){return wo(this,Symbol.iterator,wt)},concat(...n){return Di(this).concat(...n.map(e=>De(e)?Di(e):e))},entries(){return wo(this,"entries",n=>(n[1]=wt(n[1]),n))},every(n,e){return Rn(this,"every",n,e,void 0,arguments)},filter(n,e){return Rn(this,"filter",n,e,t=>t.map(wt),arguments)},find(n,e){return Rn(this,"find",n,e,wt,arguments)},findIndex(n,e){return Rn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Rn(this,"findLast",n,e,wt,arguments)},findLastIndex(n,e){return Rn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Rn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ao(this,"includes",n)},indexOf(...n){return Ao(this,"indexOf",n)},join(n){return Di(this).join(n)},lastIndexOf(...n){return Ao(this,"lastIndexOf",n)},map(n,e){return Rn(this,"map",n,e,void 0,arguments)},pop(){return Er(this,"pop")},push(...n){return Er(this,"push",n)},reduce(n,...e){return dl(this,"reduce",n,e)},reduceRight(n,...e){return dl(this,"reduceRight",n,e)},shift(){return Er(this,"shift")},some(n,e){return Rn(this,"some",n,e,void 0,arguments)},splice(...n){return Er(this,"splice",n)},toReversed(){return Di(this).toReversed()},toSorted(n){return Di(this).toSorted(n)},toSpliced(...n){return Di(this).toSpliced(...n)},unshift(...n){return Er(this,"unshift",n)},values(){return wo(this,"values",wt)}};function wo(n,e,t){const i=so(n),r=i[e]();return i!==n&&!tn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Id=Array.prototype;function Rn(n,e,t,i,r,s){const a=so(n),o=a!==n&&!tn(n),l=a[e];if(l!==Id[e]){const f=l.apply(n,s);return o?wt(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,wt(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function dl(n,e,t,i){const r=so(n);let s=t;return r!==n&&(tn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,wt(o),l,n)}),r[e](s,...i)}function Ao(n,e,t){const i=Ze(n);Tt(i,"iterate",Vr);const r=i[e](...t);return(r===-1||r===!1)&&ja(t[0])?(t[0]=Ze(t[0]),i[e](...t)):r}function Er(n,e,t=[]){si(),Ha();const i=Ze(n)[e].apply(n,t);return Ga(),oi(),i}const Nd=Fa("__proto__,__v_isRef,__isVue"),Ou=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(bn));function Fd(n){bn(n)||(n=String(n));const e=Ze(this);return Tt(e,"has",n),e.hasOwnProperty(n)}class Bu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?$d:Gu:s?Hu:zu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=De(e);if(!r){let l;if(a&&(l=Dd[t]))return l;if(t==="hasOwnProperty")return Fd}const o=Reflect.get(e,t,Rt(e)?e:i);return(bn(t)?Ou.has(t):Nd(t))||(r||Tt(e,"get",t),s)?o:Rt(o)?a&&ka(t)?o:o.value:rt(o)?r?Wu(o):oo(o):o}}class ku extends Bu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Ai(s);if(!tn(i)&&!Ai(i)&&(s=Ze(s),i=Ze(i)),!De(e)&&Rt(s)&&!Rt(i))return l?!1:(s.value=i,!0)}const a=De(e)&&ka(t)?Number(t)<e.length:Je(e,t),o=Reflect.set(e,t,i,Rt(e)?e:r);return e===Ze(r)&&(a?ti(i,s)&&Bn(e,"set",t,i):Bn(e,"add",t,i)),o}deleteProperty(e,t){const i=Je(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Bn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!bn(t)||!Ou.has(t))&&Tt(e,"has",t),i}ownKeys(e){return Tt(e,"iterate",De(e)?"length":Ei),Reflect.ownKeys(e)}}class Od extends Bu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Bd=new ku,kd=new Od,zd=new ku(!0);const _a=n=>n,us=n=>Reflect.getPrototypeOf(n);function Hd(n,e,t){return function(...i){const r=this.__v_raw,s=Ze(r),a=nr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?_a:e?va:wt;return!e&&Tt(s,"iterate",l?ga:Ei),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function fs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Gd(n,e){const t={get(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);n||(ti(r,o)&&Tt(a,"get",r),Tt(a,"get",o));const{has:l}=us(a),c=e?_a:n?va:wt;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Tt(Ze(r),"iterate",Ei),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);return n||(ti(r,o)&&Tt(a,"has",r),Tt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Ze(o),c=e?_a:n?va:wt;return!n&&Tt(l,"iterate",Ei),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return vt(t,n?{add:fs("add"),set:fs("set"),delete:fs("delete"),clear:fs("clear")}:{add(r){!e&&!tn(r)&&!Ai(r)&&(r=Ze(r));const s=Ze(this);return us(s).has.call(s,r)||(s.add(r),Bn(s,"add",r,r)),this},set(r,s){!e&&!tn(s)&&!Ai(s)&&(s=Ze(s));const a=Ze(this),{has:o,get:l}=us(a);let c=o.call(a,r);c||(r=Ze(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?ti(s,u)&&Bn(a,"set",r,s):Bn(a,"add",r,s),this},delete(r){const s=Ze(this),{has:a,get:o}=us(s);let l=a.call(s,r);l||(r=Ze(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Bn(s,"delete",r,void 0),c},clear(){const r=Ze(this),s=r.size!==0,a=r.clear();return s&&Bn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Hd(r,n,e)}),t}function Xa(n,e){const t=Gd(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Je(t,r)&&r in i?t:i,r,s)}const Vd={get:Xa(!1,!1)},Wd={get:Xa(!1,!0)},Xd={get:Xa(!0,!1)};const zu=new WeakMap,Hu=new WeakMap,Gu=new WeakMap,$d=new WeakMap;function jd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qd(n){return n.__v_skip||!Object.isExtensible(n)?0:jd(xd(n))}function oo(n){return Ai(n)?n:$a(n,!1,Bd,Vd,zu)}function Vu(n){return $a(n,!1,zd,Wd,Hu)}function Wu(n){return $a(n,!0,kd,Xd,Gu)}function $a(n,e,t,i,r){if(!rt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=qd(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function ir(n){return Ai(n)?ir(n.__v_raw):!!(n&&n.__v_isReactive)}function Ai(n){return!!(n&&n.__v_isReadonly)}function tn(n){return!!(n&&n.__v_isShallow)}function ja(n){return n?!!n.__v_raw:!1}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function Xu(n){return!Je(n,"__v_skip")&&Object.isExtensible(n)&&bu(n,"__v_skip",!0),n}const wt=n=>rt(n)?oo(n):n,va=n=>rt(n)?Wu(n):n;function Rt(n){return n?n.__v_isRef===!0:!1}function Ve(n){return $u(n,!1)}function Yd(n){return $u(n,!0)}function $u(n,e){return Rt(n)?n:new Kd(n,e)}class Kd{constructor(e,t){this.dep=new Wa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ze(e),this._value=t?e:wt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||tn(e)||Ai(e);e=i?e:Ze(e),ti(e,t)&&(this._rawValue=e,this._value=i?e:wt(e),this.dep.trigger())}}function rr(n){return Rt(n)?n.value:n}const Zd={get:(n,e,t)=>e==="__v_raw"?n:rr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Rt(r)&&!Rt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function ju(n){return ir(n)?n:new Proxy(n,Zd)}class Jd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Wa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&it!==this)return Lu(this,!0),!0}get value(){const e=this.dep.track();return Iu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qd(n,e,t=!1){let i,r;return Be(n)?i=n:(i=n.get,r=n.set),new Jd(i,r,t)}const ds={},Vs=new WeakMap;let gi;function eh(n,e=!1,t=gi){if(t){let i=Vs.get(t);i||Vs.set(t,i=[]),i.push(n)}}function th(n,e,t=nt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=w=>r?w:tn(w)||r===!1||r===0?kn(w,1):kn(w);let u,f,d,p,v=!1,g=!1;if(Rt(n)?(f=()=>n.value,v=tn(n)):ir(n)?(f=()=>c(n),v=!0):De(n)?(g=!0,v=n.some(w=>ir(w)||tn(w)),f=()=>n.map(w=>{if(Rt(w))return w.value;if(ir(w))return c(w);if(Be(w))return l?l(w,2):w()})):Be(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){si();try{d()}finally{oi()}}const w=gi;gi=u;try{return l?l(n,3,[p]):n(p)}finally{gi=w}}:f=fn,e&&r){const w=f,C=r===!0?1/0:r;f=()=>kn(w(),C)}const m=Pd(),h=()=>{u.stop(),m&&m.active&&Ba(m.effects,u)};if(s&&e){const w=e;e=(...C)=>{w(...C),h()}}let E=g?new Array(n.length).fill(ds):ds;const S=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(e){const C=u.run();if(r||v||(g?C.some((I,U)=>ti(I,E[U])):ti(C,E))){d&&d();const I=gi;gi=u;try{const U=[C,E===ds?void 0:g&&E[0]===ds?[]:E,p];l?l(e,3,U):e(...U),E=C}finally{gi=I}}}else u.run()};return o&&o(S),u=new Cu(f),u.scheduler=a?()=>a(S,!1):S,p=w=>eh(w,!1,u),d=u.onStop=()=>{const w=Vs.get(u);if(w){if(l)l(w,4);else for(const C of w)C();Vs.delete(u)}},e?i?S(!0):E=u.run():a?a(S.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function kn(n,e=1/0,t){if(e<=0||!rt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Rt(n))kn(n.value,e,t);else if(De(n))for(let i=0;i<n.length;i++)kn(n[i],e,t);else if(vr(n)||nr(n))n.forEach(i=>{kn(i,e,t)});else if(Su(n)){for(const i in n)kn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&kn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ns(n,e,t,i){try{return i?n(...i):n()}catch(r){ao(r,e,t)}}function Tn(n,e,t,i){if(Be(n)){const r=ns(n,e,t,i);return r&&Mu(r)&&r.catch(s=>{ao(s,e,t)}),r}if(De(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Tn(n[s],e,t,i));return r}}function ao(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||nt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){si(),ns(s,null,10,[n,l,c]),oi();return}}nh(n,t,r,i,a)}function nh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const It=[];let vn=-1;const sr=[];let Zn=null,Ki=0;const qu=Promise.resolve();let Ws=null;function Wr(n){const e=Ws||qu;return n?e.then(this?n.bind(this):n):e}function ih(n){let e=vn+1,t=It.length;for(;e<t;){const i=e+t>>>1,r=It[i],s=Xr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function qa(n){if(!(n.flags&1)){const e=Xr(n),t=It[It.length-1];!t||!(n.flags&2)&&e>=Xr(t)?It.push(n):It.splice(ih(e),0,n),n.flags|=1,Yu()}}function Yu(){Ws||(Ws=qu.then(Zu))}function rh(n){De(n)?sr.push(...n):Zn&&n.id===-1?Zn.splice(Ki+1,0,n):n.flags&1||(sr.push(n),n.flags|=1),Yu()}function hl(n,e,t=vn+1){for(;t<It.length;t++){const i=It[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;It.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ku(n){if(sr.length){const e=[...new Set(sr)].sort((t,i)=>Xr(t)-Xr(i));if(sr.length=0,Zn){Zn.push(...e);return}for(Zn=e,Ki=0;Ki<Zn.length;Ki++){const t=Zn[Ki];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Zn=null,Ki=0}}const Xr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Zu(n){const e=fn;try{for(vn=0;vn<It.length;vn++){const t=It[vn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ns(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;vn<It.length;vn++){const t=It[vn];t&&(t.flags&=-2)}vn=-1,It.length=0,Ku(),Ws=null,(It.length||sr.length)&&Zu()}}let en=null,Ju=null;function Xs(n){const e=en;return en=n,Ju=n&&n.type.__scopeId||null,e}function sh(n,e=en,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&yl(-1);const s=Xs(e);let a;try{a=n(...r)}finally{Xs(s),i._d&&yl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function _t(n,e){if(en===null)return n;const t=fo(en),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=nt]=e[r];s&&(Be(s)&&(s={mounted:s,updated:s}),s.deep&&kn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function fi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(si(),Tn(l,t,8,[n.el,o,n,e]),oi())}}const oh=Symbol("_vte"),ah=n=>n.__isTeleport;function Ya(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ya(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function An(n,e){return Be(n)?(()=>vt({name:n.name},e,{setup:n}))():n}function Qu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function $s(n,e,t,i,r=!1){if(De(n)){n.forEach((v,g)=>$s(v,e&&(De(e)?e[g]:e),t,i,r));return}if(Fr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&$s(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?fo(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===nt?o.refs={}:o.refs,f=o.setupState,d=Ze(f),p=f===nt?()=>!1:v=>Je(d,v);if(c!=null&&c!==l&&(dt(c)?(u[c]=null,p(c)&&(f[c]=null)):Rt(c)&&(c.value=null)),Be(l))ns(l,o,12,[a,u]);else{const v=dt(l),g=Rt(l);if(v||g){const m=()=>{if(n.f){const h=v?p(l)?f[l]:u[l]:l.value;r?De(h)&&Ba(h,s):De(h)?h.includes(s)||h.push(s):v?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else v?(u[l]=a,p(l)&&(f[l]=a)):g&&(l.value=a,n.k&&(u[n.k]=a))};a?(m.id=-1,Vt(m,t)):m()}}}ro().requestIdleCallback;ro().cancelIdleCallback;const Fr=n=>!!n.type.__asyncLoader,ef=n=>n.type.__isKeepAlive;function lh(n,e){tf(n,"a",e)}function ch(n,e){tf(n,"da",e)}function tf(n,e,t=Nt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(lo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ef(r.parent.vnode)&&uh(i,e,t,r),r=r.parent}}function uh(n,e,t,i){const r=lo(e,n,i,!0);js(()=>{Ba(i[e],r)},t)}function lo(n,e,t=Nt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{si();const o=is(t),l=Tn(e,t,n,a);return o(),oi(),l});return i?r.unshift(s):r.push(s),s}}const Wn=n=>(e,t=Nt)=>{(!qr||n==="sp")&&lo(n,(...i)=>e(...i),t)},fh=Wn("bm"),xr=Wn("m"),dh=Wn("bu"),hh=Wn("u"),ph=Wn("bum"),js=Wn("um"),mh=Wn("sp"),gh=Wn("rtg"),_h=Wn("rtc");function vh(n,e=Nt){lo("ec",n,e)}const xh=Symbol.for("v-ndc");function Ft(n,e,t,i){let r;const s=t&&t[i],a=De(n);if(a||dt(n)){const o=a&&ir(n);let l=!1;o&&(l=!tn(n),n=so(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?wt(n[c]):n[c],c,void 0,s&&s[c])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(rt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s&&s[l]));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s&&s[l])}}else r=[];return t&&(t[i]=r),r}const xa=n=>n?Sf(n)?fo(n):xa(n.parent):null,Or=vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>xa(n.parent),$root:n=>xa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ka(n),$forceUpdate:n=>n.f||(n.f=()=>{qa(n.update)}),$nextTick:n=>n.n||(n.n=Wr.bind(n.proxy)),$watch:n=>zh.bind(n)}),Ro=(n,e)=>n!==nt&&!n.__isScriptSetup&&Je(n,e),Mh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ro(i,e))return a[e]=1,i[e];if(r!==nt&&Je(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&Je(c,e))return a[e]=3,s[e];if(t!==nt&&Je(t,e))return a[e]=4,t[e];Ma&&(a[e]=0)}}const u=Or[e];let f,d;if(u)return e==="$attrs"&&Tt(n.attrs,"get",""),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==nt&&Je(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,Je(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ro(r,e)?(r[e]=t,!0):i!==nt&&Je(i,e)?(i[e]=t,!0):Je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==nt&&Je(n,a)||Ro(e,a)||(o=s[0])&&Je(o,a)||Je(i,a)||Je(Or,a)||Je(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function pl(n){return De(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ma=!0;function yh(n){const e=Ka(n),t=n.proxy,i=n.ctx;Ma=!1,e.beforeCreate&&ml(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:v,activated:g,deactivated:m,beforeDestroy:h,beforeUnmount:E,destroyed:S,unmounted:w,render:C,renderTracked:I,renderTriggered:U,errorCaptured:G,serverPrefetch:_,expose:T,inheritAttrs:O,components:D,directives:P,filters:B}=e;if(c&&Sh(c,i,null),a)for(const X in a){const $=a[X];Be($)&&(i[X]=$.bind(t))}if(r){const X=r.call(t,t);rt(X)&&(n.data=oo(X))}if(Ma=!0,s)for(const X in s){const $=s[X],ce=Be($)?$.bind(t,t):Be($.get)?$.get.bind(t,t):fn,ae=!Be($)&&Be($.set)?$.set.bind(t):fn,we=$t({get:ce,set:ae});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>we.value,set:he=>we.value=he})}if(o)for(const X in o)nf(o[X],i,t,X);if(l){const X=Be(l)?l.call(t):l;Reflect.ownKeys(X).forEach($=>{Fs($,X[$])})}u&&ml(u,n,"c");function te(X,$){De($)?$.forEach(ce=>X(ce.bind(t))):$&&X($.bind(t))}if(te(fh,f),te(xr,d),te(dh,p),te(hh,v),te(lh,g),te(ch,m),te(vh,G),te(_h,I),te(gh,U),te(ph,E),te(js,w),te(mh,_),De(T))if(T.length){const X=n.exposed||(n.exposed={});T.forEach($=>{Object.defineProperty(X,$,{get:()=>t[$],set:ce=>t[$]=ce})})}else n.exposed||(n.exposed={});C&&n.render===fn&&(n.render=C),O!=null&&(n.inheritAttrs=O),D&&(n.components=D),P&&(n.directives=P),_&&Qu(n)}function Sh(n,e,t=fn){De(n)&&(n=ya(n));for(const i in n){const r=n[i];let s;rt(r)?"default"in r?s=Hn(r.from||i,r.default,!0):s=Hn(r.from||i):s=Hn(r),Rt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function ml(n,e,t){Tn(De(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function nf(n,e,t,i){let r=i.includes(".")?_f(t,i):()=>t[i];if(dt(n)){const s=e[n];Be(s)&&Os(r,s)}else if(Be(n))Os(r,n.bind(t));else if(rt(n))if(De(n))n.forEach(s=>nf(s,e,t,i));else{const s=Be(n.handler)?n.handler.bind(t):e[n.handler];Be(s)&&Os(r,s,n)}}function Ka(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>qs(l,c,a,!0)),qs(l,e,a)),rt(e)&&s.set(e,l),l}function qs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&qs(n,s,t,!0),r&&r.forEach(a=>qs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Eh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Eh={data:gl,props:_l,emits:_l,methods:Lr,computed:Lr,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:Lr,directives:Lr,watch:Th,provide:gl,inject:bh};function gl(n,e){return e?n?function(){return vt(Be(n)?n.call(this,this):n,Be(e)?e.call(this,this):e)}:e:n}function bh(n,e){return Lr(ya(n),ya(e))}function ya(n){if(De(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Lt(n,e){return n?[...new Set([].concat(n,e))]:e}function Lr(n,e){return n?vt(Object.create(null),n,e):e}function _l(n,e){return n?De(n)&&De(e)?[...new Set([...n,...e])]:vt(Object.create(null),pl(n),pl(e??{})):e}function Th(n,e){if(!n)return e;if(!e)return n;const t=vt(Object.create(null),n);for(const i in e)t[i]=Lt(n[i],e[i]);return t}function rf(){return{app:null,config:{isNativeTag:_d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wh=0;function Ah(n,e){return function(i,r=null){Be(i)||(i=vt({},i)),r!=null&&!rt(r)&&(r=null);const s=rf(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:wh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ap,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Be(u.install)?(a.add(u),u.install(c,...f)):Be(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||xt(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(p,u):n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,fo(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Tn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=or;or=c;try{return u()}finally{or=f}}};return c}}let or=null;function Fs(n,e){if(Nt){let t=Nt.provides;const i=Nt.parent&&Nt.parent.provides;i===t&&(t=Nt.provides=Object.create(i)),t[n]=e}}function Hn(n,e,t=!1){const i=Nt||en;if(i||or){const r=or?or._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Be(e)?e.call(i&&i.proxy):e}}const sf={},of=()=>Object.create(sf),af=n=>Object.getPrototypeOf(n)===sf;function Rh(n,e,t,i=!1){const r={},s=of();n.propsDefaults=Object.create(null),lf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Vu(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Ch(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ze(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(co(n.emitsOptions,d))continue;const p=e[d];if(l)if(Je(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const v=ii(d);r[v]=Sa(l,o,v,p,n,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{lf(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Je(e,f)&&((u=Ui(f))===f||!Je(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Sa(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Je(e,f))&&(delete s[f],c=!0)}c&&Bn(n.attrs,"set","")}function lf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Dr(l))continue;const c=e[l];let u;r&&Je(r,u=ii(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:co(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ze(t),c=o||nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Sa(r,l,f,c[f],n,!Je(c,f))}}return a}function Sa(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Je(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Be(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=is(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ui(t))&&(i=!0))}return i}const Ph=new WeakMap;function cf(n,e,t=!1){const i=t?Ph:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Be(n)){const u=f=>{l=!0;const[d,p]=cf(f,e,!0);vt(a,d),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return rt(n)&&i.set(n,tr),tr;if(De(s))for(let u=0;u<s.length;u++){const f=ii(s[u]);vl(f)&&(a[f]=nt)}else if(s)for(const u in s){const f=ii(u);if(vl(f)){const d=s[u],p=a[f]=De(d)||Be(d)?{type:d}:vt({},d),v=p.type;let g=!1,m=!0;if(De(v))for(let h=0;h<v.length;++h){const E=v[h],S=Be(E)&&E.name;if(S==="Boolean"){g=!0;break}else S==="String"&&(m=!1)}else g=Be(v)&&v.name==="Boolean";p[0]=g,p[1]=m,(g||Je(p,"default"))&&o.push(f)}}const c=[a,o];return rt(n)&&i.set(n,c),c}function vl(n){return n[0]!=="$"&&!Dr(n)}const uf=n=>n[0]==="_"||n==="$stable",Za=n=>De(n)?n.map(xn):[xn(n)],Lh=(n,e,t)=>{if(e._n)return e;const i=sh((...r)=>Za(e(...r)),t);return i._c=!1,i},ff=(n,e,t)=>{const i=n._ctx;for(const r in n){if(uf(r))continue;const s=n[r];if(Be(s))e[r]=Lh(r,s,i);else if(s!=null){const a=Za(s);e[r]=()=>a}}},df=(n,e)=>{const t=Za(e);n.slots.default=()=>t},hf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Uh=(n,e,t)=>{const i=n.slots=of();if(n.vnode.shapeFlag&32){const r=e._;r?(hf(i,e,t),t&&bu(i,"_",r,!0)):ff(e,i)}else e&&df(n,e)},Dh=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=nt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:hf(r,e,t):(s=!e.$stable,ff(e,r)),a=e}else e&&(df(n,e),a={default:1});if(s)for(const o in r)!uf(o)&&a[o]==null&&delete r[o]},Vt=jh;function Ih(n){return Nh(n)}function Nh(n,e){const t=ro();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=fn,insertStaticContent:v}=n,g=(y,R,k,ie=null,Y=null,se=null,fe=void 0,de=null,pe=!!R.dynamicChildren)=>{if(y===R)return;y&&!br(y,R)&&(ie=b(y),he(y,Y,se,!0),y=null),R.patchFlag===-2&&(pe=!1,R.dynamicChildren=null);const{type:M,ref:x,shapeFlag:N}=R;switch(M){case uo:m(y,R,k,ie);break;case Ri:h(y,R,k,ie);break;case Bs:y==null&&E(R,k,ie,fe);break;case lt:D(y,R,k,ie,Y,se,fe,de,pe);break;default:N&1?C(y,R,k,ie,Y,se,fe,de,pe):N&6?P(y,R,k,ie,Y,se,fe,de,pe):(N&64||N&128)&&M.process(y,R,k,ie,Y,se,fe,de,pe,q)}x!=null&&Y&&$s(x,y&&y.ref,se,R||y,!R)},m=(y,R,k,ie)=>{if(y==null)i(R.el=o(R.children),k,ie);else{const Y=R.el=y.el;R.children!==y.children&&c(Y,R.children)}},h=(y,R,k,ie)=>{y==null?i(R.el=l(R.children||""),k,ie):R.el=y.el},E=(y,R,k,ie)=>{[y.el,y.anchor]=v(y.children,R,k,ie,y.el,y.anchor)},S=({el:y,anchor:R},k,ie)=>{let Y;for(;y&&y!==R;)Y=d(y),i(y,k,ie),y=Y;i(R,k,ie)},w=({el:y,anchor:R})=>{let k;for(;y&&y!==R;)k=d(y),r(y),y=k;r(R)},C=(y,R,k,ie,Y,se,fe,de,pe)=>{R.type==="svg"?fe="svg":R.type==="math"&&(fe="mathml"),y==null?I(R,k,ie,Y,se,fe,de,pe):_(y,R,Y,se,fe,de,pe)},I=(y,R,k,ie,Y,se,fe,de)=>{let pe,M;const{props:x,shapeFlag:N,transition:V,dirs:K}=y;if(pe=y.el=a(y.type,se,x&&x.is,x),N&8?u(pe,y.children):N&16&&G(y.children,pe,null,ie,Y,Co(y,se),fe,de),K&&fi(y,null,ie,"created"),U(pe,y,y.scopeId,fe,ie),x){for(const ye in x)ye!=="value"&&!Dr(ye)&&s(pe,ye,null,x[ye],se,ie);"value"in x&&s(pe,"value",null,x.value,se),(M=x.onVnodeBeforeMount)&&gn(M,ie,y)}K&&fi(y,null,ie,"beforeMount");const ue=Fh(Y,V);ue&&V.beforeEnter(pe),i(pe,R,k),((M=x&&x.onVnodeMounted)||ue||K)&&Vt(()=>{M&&gn(M,ie,y),ue&&V.enter(pe),K&&fi(y,null,ie,"mounted")},Y)},U=(y,R,k,ie,Y)=>{if(k&&p(y,k),ie)for(let se=0;se<ie.length;se++)p(y,ie[se]);if(Y){let se=Y.subTree;if(R===se||xf(se.type)&&(se.ssContent===R||se.ssFallback===R)){const fe=Y.vnode;U(y,fe,fe.scopeId,fe.slotScopeIds,Y.parent)}}},G=(y,R,k,ie,Y,se,fe,de,pe=0)=>{for(let M=pe;M<y.length;M++){const x=y[M]=de?Jn(y[M]):xn(y[M]);g(null,x,R,k,ie,Y,se,fe,de)}},_=(y,R,k,ie,Y,se,fe)=>{const de=R.el=y.el;let{patchFlag:pe,dynamicChildren:M,dirs:x}=R;pe|=y.patchFlag&16;const N=y.props||nt,V=R.props||nt;let K;if(k&&di(k,!1),(K=V.onVnodeBeforeUpdate)&&gn(K,k,R,y),x&&fi(R,y,k,"beforeUpdate"),k&&di(k,!0),(N.innerHTML&&V.innerHTML==null||N.textContent&&V.textContent==null)&&u(de,""),M?T(y.dynamicChildren,M,de,k,ie,Co(R,Y),se):fe||$(y,R,de,null,k,ie,Co(R,Y),se,!1),pe>0){if(pe&16)O(de,N,V,k,Y);else if(pe&2&&N.class!==V.class&&s(de,"class",null,V.class,Y),pe&4&&s(de,"style",N.style,V.style,Y),pe&8){const ue=R.dynamicProps;for(let ye=0;ye<ue.length;ye++){const ge=ue[ye],J=N[ge],Se=V[ge];(Se!==J||ge==="value")&&s(de,ge,J,Se,Y,k)}}pe&1&&y.children!==R.children&&u(de,R.children)}else!fe&&M==null&&O(de,N,V,k,Y);((K=V.onVnodeUpdated)||x)&&Vt(()=>{K&&gn(K,k,R,y),x&&fi(R,y,k,"updated")},ie)},T=(y,R,k,ie,Y,se,fe)=>{for(let de=0;de<R.length;de++){const pe=y[de],M=R[de],x=pe.el&&(pe.type===lt||!br(pe,M)||pe.shapeFlag&70)?f(pe.el):k;g(pe,M,x,null,ie,Y,se,fe,!0)}},O=(y,R,k,ie,Y)=>{if(R!==k){if(R!==nt)for(const se in R)!Dr(se)&&!(se in k)&&s(y,se,R[se],null,Y,ie);for(const se in k){if(Dr(se))continue;const fe=k[se],de=R[se];fe!==de&&se!=="value"&&s(y,se,de,fe,Y,ie)}"value"in k&&s(y,"value",R.value,k.value,Y)}},D=(y,R,k,ie,Y,se,fe,de,pe)=>{const M=R.el=y?y.el:o(""),x=R.anchor=y?y.anchor:o("");let{patchFlag:N,dynamicChildren:V,slotScopeIds:K}=R;K&&(de=de?de.concat(K):K),y==null?(i(M,k,ie),i(x,k,ie),G(R.children||[],k,x,Y,se,fe,de,pe)):N>0&&N&64&&V&&y.dynamicChildren?(T(y.dynamicChildren,V,k,Y,se,fe,de),(R.key!=null||Y&&R===Y.subTree)&&pf(y,R,!0)):$(y,R,k,x,Y,se,fe,de,pe)},P=(y,R,k,ie,Y,se,fe,de,pe)=>{R.slotScopeIds=de,y==null?R.shapeFlag&512?Y.ctx.activate(R,k,ie,fe,pe):B(R,k,ie,Y,se,fe,pe):H(y,R,pe)},B=(y,R,k,ie,Y,se,fe)=>{const de=y.component=tp(y,ie,Y);if(ef(y)&&(de.ctx.renderer=q),np(de,!1,fe),de.asyncDep){if(Y&&Y.registerDep(de,te,fe),!y.el){const pe=de.subTree=xt(Ri);h(null,pe,R,k)}}else te(de,y,R,k,Y,se,fe)},H=(y,R,k)=>{const ie=R.component=y.component;if(Xh(y,R,k))if(ie.asyncDep&&!ie.asyncResolved){X(ie,R,k);return}else ie.next=R,ie.update();else R.el=y.el,ie.vnode=R},te=(y,R,k,ie,Y,se,fe)=>{const de=()=>{if(y.isMounted){let{next:N,bu:V,u:K,parent:ue,vnode:ye}=y;{const Ae=mf(y);if(Ae){N&&(N.el=ye.el,X(y,N,fe)),Ae.asyncDep.then(()=>{y.isUnmounted||de()});return}}let ge=N,J;di(y,!1),N?(N.el=ye.el,X(y,N,fe)):N=ye,V&&Ns(V),(J=N.props&&N.props.onVnodeBeforeUpdate)&&gn(J,ue,N,ye),di(y,!0);const Se=Po(y),Te=y.subTree;y.subTree=Se,g(Te,Se,f(Te.el),b(Te),y,Y,se),N.el=Se.el,ge===null&&$h(y,Se.el),K&&Vt(K,Y),(J=N.props&&N.props.onVnodeUpdated)&&Vt(()=>gn(J,ue,N,ye),Y)}else{let N;const{el:V,props:K}=R,{bm:ue,m:ye,parent:ge,root:J,type:Se}=y,Te=Fr(R);if(di(y,!1),ue&&Ns(ue),!Te&&(N=K&&K.onVnodeBeforeMount)&&gn(N,ge,R),di(y,!0),V&&Pe){const Ae=()=>{y.subTree=Po(y),Pe(V,y.subTree,y,Y,null)};Te&&Se.__asyncHydrate?Se.__asyncHydrate(V,y,Ae):Ae()}else{J.ce&&J.ce._injectChildStyle(Se);const Ae=y.subTree=Po(y);g(null,Ae,k,ie,y,Y,se),R.el=Ae.el}if(ye&&Vt(ye,Y),!Te&&(N=K&&K.onVnodeMounted)){const Ae=R;Vt(()=>gn(N,ge,Ae),Y)}(R.shapeFlag&256||ge&&Fr(ge.vnode)&&ge.vnode.shapeFlag&256)&&y.a&&Vt(y.a,Y),y.isMounted=!0,R=k=ie=null}};y.scope.on();const pe=y.effect=new Cu(de);y.scope.off();const M=y.update=pe.run.bind(pe),x=y.job=pe.runIfDirty.bind(pe);x.i=y,x.id=y.uid,pe.scheduler=()=>qa(x),di(y,!0),M()},X=(y,R,k)=>{R.component=y;const ie=y.vnode.props;y.vnode=R,y.next=null,Ch(y,R.props,ie,k),Dh(y,R.children,k),si(),hl(y),oi()},$=(y,R,k,ie,Y,se,fe,de,pe=!1)=>{const M=y&&y.children,x=y?y.shapeFlag:0,N=R.children,{patchFlag:V,shapeFlag:K}=R;if(V>0){if(V&128){ae(M,N,k,ie,Y,se,fe,de,pe);return}else if(V&256){ce(M,N,k,ie,Y,se,fe,de,pe);return}}K&8?(x&16&&_e(M,Y,se),N!==M&&u(k,N)):x&16?K&16?ae(M,N,k,ie,Y,se,fe,de,pe):_e(M,Y,se,!0):(x&8&&u(k,""),K&16&&G(N,k,ie,Y,se,fe,de,pe))},ce=(y,R,k,ie,Y,se,fe,de,pe)=>{y=y||tr,R=R||tr;const M=y.length,x=R.length,N=Math.min(M,x);let V;for(V=0;V<N;V++){const K=R[V]=pe?Jn(R[V]):xn(R[V]);g(y[V],K,k,null,Y,se,fe,de,pe)}M>x?_e(y,Y,se,!0,!1,N):G(R,k,ie,Y,se,fe,de,pe,N)},ae=(y,R,k,ie,Y,se,fe,de,pe)=>{let M=0;const x=R.length;let N=y.length-1,V=x-1;for(;M<=N&&M<=V;){const K=y[M],ue=R[M]=pe?Jn(R[M]):xn(R[M]);if(br(K,ue))g(K,ue,k,null,Y,se,fe,de,pe);else break;M++}for(;M<=N&&M<=V;){const K=y[N],ue=R[V]=pe?Jn(R[V]):xn(R[V]);if(br(K,ue))g(K,ue,k,null,Y,se,fe,de,pe);else break;N--,V--}if(M>N){if(M<=V){const K=V+1,ue=K<x?R[K].el:ie;for(;M<=V;)g(null,R[M]=pe?Jn(R[M]):xn(R[M]),k,ue,Y,se,fe,de,pe),M++}}else if(M>V)for(;M<=N;)he(y[M],Y,se,!0),M++;else{const K=M,ue=M,ye=new Map;for(M=ue;M<=V;M++){const Ne=R[M]=pe?Jn(R[M]):xn(R[M]);Ne.key!=null&&ye.set(Ne.key,M)}let ge,J=0;const Se=V-ue+1;let Te=!1,Ae=0;const Ee=new Array(Se);for(M=0;M<Se;M++)Ee[M]=0;for(M=K;M<=N;M++){const Ne=y[M];if(J>=Se){he(Ne,Y,se,!0);continue}let ze;if(Ne.key!=null)ze=ye.get(Ne.key);else for(ge=ue;ge<=V;ge++)if(Ee[ge-ue]===0&&br(Ne,R[ge])){ze=ge;break}ze===void 0?he(Ne,Y,se,!0):(Ee[ze-ue]=M+1,ze>=Ae?Ae=ze:Te=!0,g(Ne,R[ze],k,null,Y,se,fe,de,pe),J++)}const Re=Te?Oh(Ee):tr;for(ge=Re.length-1,M=Se-1;M>=0;M--){const Ne=ue+M,ze=R[Ne],at=Ne+1<x?R[Ne+1].el:ie;Ee[M]===0?g(null,ze,k,at,Y,se,fe,de,pe):Te&&(ge<0||M!==Re[ge]?we(ze,k,at,2):ge--)}}},we=(y,R,k,ie,Y=null)=>{const{el:se,type:fe,transition:de,children:pe,shapeFlag:M}=y;if(M&6){we(y.component.subTree,R,k,ie);return}if(M&128){y.suspense.move(R,k,ie);return}if(M&64){fe.move(y,R,k,q);return}if(fe===lt){i(se,R,k);for(let N=0;N<pe.length;N++)we(pe[N],R,k,ie);i(y.anchor,R,k);return}if(fe===Bs){S(y,R,k);return}if(ie!==2&&M&1&&de)if(ie===0)de.beforeEnter(se),i(se,R,k),Vt(()=>de.enter(se),Y);else{const{leave:N,delayLeave:V,afterLeave:K}=de,ue=()=>i(se,R,k),ye=()=>{N(se,()=>{ue(),K&&K()})};V?V(se,ue,ye):ye()}else i(se,R,k)},he=(y,R,k,ie=!1,Y=!1)=>{const{type:se,props:fe,ref:de,children:pe,dynamicChildren:M,shapeFlag:x,patchFlag:N,dirs:V,cacheIndex:K}=y;if(N===-2&&(Y=!1),de!=null&&$s(de,null,k,y,!0),K!=null&&(R.renderCache[K]=void 0),x&256){R.ctx.deactivate(y);return}const ue=x&1&&V,ye=!Fr(y);let ge;if(ye&&(ge=fe&&fe.onVnodeBeforeUnmount)&&gn(ge,R,y),x&6)ve(y.component,k,ie);else{if(x&128){y.suspense.unmount(k,ie);return}ue&&fi(y,null,R,"beforeUnmount"),x&64?y.type.remove(y,R,k,q,ie):M&&!M.hasOnce&&(se!==lt||N>0&&N&64)?_e(M,R,k,!1,!0):(se===lt&&N&384||!Y&&x&16)&&_e(pe,R,k),ie&&Z(y)}(ye&&(ge=fe&&fe.onVnodeUnmounted)||ue)&&Vt(()=>{ge&&gn(ge,R,y),ue&&fi(y,null,R,"unmounted")},k)},Z=y=>{const{type:R,el:k,anchor:ie,transition:Y}=y;if(R===lt){oe(k,ie);return}if(R===Bs){w(y);return}const se=()=>{r(k),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(y.shapeFlag&1&&Y&&!Y.persisted){const{leave:fe,delayLeave:de}=Y,pe=()=>fe(k,se);de?de(y.el,se,pe):pe()}else se()},oe=(y,R)=>{let k;for(;y!==R;)k=d(y),r(y),y=k;r(R)},ve=(y,R,k)=>{const{bum:ie,scope:Y,job:se,subTree:fe,um:de,m:pe,a:M}=y;xl(pe),xl(M),ie&&Ns(ie),Y.stop(),se&&(se.flags|=8,he(fe,y,R,k)),de&&Vt(de,R),Vt(()=>{y.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},_e=(y,R,k,ie=!1,Y=!1,se=0)=>{for(let fe=se;fe<y.length;fe++)he(y[fe],R,k,ie,Y)},b=y=>{if(y.shapeFlag&6)return b(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const R=d(y.anchor||y.el),k=R&&R[oh];return k?d(k):R};let le=!1;const ne=(y,R,k)=>{y==null?R._vnode&&he(R._vnode,null,null,!0):g(R._vnode||null,y,R,null,null,null,k),R._vnode=y,le||(le=!0,hl(),Ku(),le=!1)},q={p:g,um:he,m:we,r:Z,mt:B,mc:G,pc:$,pbc:T,n:b,o:n};let xe,Pe;return e&&([xe,Pe]=e(q)),{render:ne,hydrate:xe,createApp:Ah(ne,xe)}}function Co({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function di({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Fh(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function pf(n,e,t=!1){const i=n.children,r=e.children;if(De(i)&&De(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Jn(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&pf(a,o)),o.type===uo&&(o.el=a.el)}}function Oh(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function mf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mf(e)}function xl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Bh=Symbol.for("v-scx"),kh=()=>Hn(Bh);function Os(n,e,t){return gf(n,e,t)}function gf(n,e,t=nt){const{immediate:i,deep:r,flush:s,once:a}=t,o=vt({},t),l=e&&i||!e&&s!=="post";let c;if(qr){if(s==="sync"){const p=kh();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=fn,p.resume=fn,p.pause=fn,p}}const u=Nt;o.call=(p,v,g)=>Tn(p,u,v,g);let f=!1;s==="post"?o.scheduler=p=>{Vt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,v)=>{v?p():qa(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=th(n,e,o);return qr&&(c?c.push(d):l&&d()),d}function zh(n,e,t){const i=this.proxy,r=dt(n)?n.includes(".")?_f(i,n):()=>i[n]:n.bind(i,i);let s;Be(e)?s=e:(s=e.handler,t=e);const a=is(this),o=gf(r,s.bind(i),t);return a(),o}function _f(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Hh=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ii(e)}Modifiers`]||n[`${Ui(e)}Modifiers`];function Gh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||nt;let r=t;const s=e.startsWith("update:"),a=s&&Hh(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>dt(u)?u.trim():u)),a.number&&(r=t.map(Gs)));let o,l=i[o=Eo(e)]||i[o=Eo(ii(e))];!l&&s&&(l=i[o=Eo(Ui(e))]),l&&Tn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Tn(c,n,6,r)}}function vf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Be(n)){const l=c=>{const u=vf(c,e,!0);u&&(o=!0,vt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(rt(n)&&i.set(n,null),null):(De(s)?s.forEach(l=>a[l]=null):vt(a,s),rt(n)&&i.set(n,a),a)}function co(n,e){return!n||!no(e)?!1:(e=e.slice(2).replace(/Once$/,""),Je(n,e[0].toLowerCase()+e.slice(1))||Je(n,Ui(e))||Je(n,e))}function Po(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:v,inheritAttrs:g}=n,m=Xs(n);let h,E;try{if(t.shapeFlag&4){const w=r||i,C=w;h=xn(c.call(C,w,u,f,p,d,v)),E=o}else{const w=e;h=xn(w.length>1?w(f,{attrs:o,slots:a,emit:l}):w(f,null)),E=e.props?o:Vh(o)}}catch(w){Br.length=0,ao(w,n,1),h=xt(Ri)}let S=h;if(E&&g!==!1){const w=Object.keys(E),{shapeFlag:C}=S;w.length&&C&7&&(s&&w.some(Oa)&&(E=Wh(E,s)),S=ur(S,E,!1,!0))}return t.dirs&&(S=ur(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&Ya(S,t.transition),h=S,Xs(m),h}const Vh=n=>{let e;for(const t in n)(t==="class"||t==="style"||no(t))&&((e||(e={}))[t]=n[t]);return e},Wh=(n,e)=>{const t={};for(const i in n)(!Oa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Xh(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ml(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!co(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Ml(i,a,c):!0:!!a;return!1}function Ml(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!co(t,s))return!0}return!1}function $h({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const xf=n=>n.__isSuspense;function jh(n,e){e&&e.pendingBranch?De(n)?e.effects.push(...n):e.effects.push(n):rh(n)}const lt=Symbol.for("v-fgt"),uo=Symbol.for("v-txt"),Ri=Symbol.for("v-cmt"),Bs=Symbol.for("v-stc"),Br=[];let jt=null;function Le(n=!1){Br.push(jt=n?null:[])}function qh(){Br.pop(),jt=Br[Br.length-1]||null}let $r=1;function yl(n,e=!1){$r+=n,n<0&&jt&&e&&(jt.hasOnce=!0)}function Mf(n){return n.dynamicChildren=$r>0?jt||tr:null,qh(),$r>0&&jt&&jt.push(n),n}function Fe(n,e,t,i,r,s){return Mf(L(n,e,t,i,r,s,!0))}function jr(n,e,t,i,r){return Mf(xt(n,e,t,i,r,!0))}function Ys(n){return n?n.__v_isVNode===!0:!1}function br(n,e){return n.type===e.type&&n.key===e.key}const yf=({key:n})=>n??null,ks=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?dt(n)||Rt(n)||Be(n)?{i:en,r:n,k:e,f:!!t}:n:null);function L(n,e=null,t=null,i=0,r=null,s=n===lt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&yf(e),ref:e&&ks(e),scopeId:Ju,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:en};return o?(Ja(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),$r>0&&!a&&jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&jt.push(l),l}const xt=Yh;function Yh(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===xh)&&(n=Ri),Ys(n)){const o=ur(n,e,!0);return t&&Ja(o,t),$r>0&&!s&&jt&&(o.shapeFlag&6?jt[jt.indexOf(n)]=o:jt.push(o)),o.patchFlag=-2,o}if(op(n)&&(n=n.__vccOpts),e){e=Kh(e);let{class:o,style:l}=e;o&&!dt(o)&&(e.class=dn(o)),rt(l)&&(ja(l)&&!De(l)&&(l=vt({},l)),e.style=Si(l))}const a=dt(n)?1:xf(n)?128:ah(n)?64:rt(n)?4:Be(n)?2:0;return L(n,e,t,i,r,a,s,!0)}function Kh(n){return n?ja(n)||af(n)?vt({},n):n:null}function ur(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Jh(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&yf(c),ref:e&&e.ref?t&&s?De(s)?s.concat(ks(e)):[s,ks(e)]:ks(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==lt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ur(n.ssContent),ssFallback:n.ssFallback&&ur(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ya(u,l.clone(u)),u}function Qi(n=" ",e=0){return xt(uo,null,n,e)}function Zh(n,e){const t=xt(Bs,null,n);return t.staticCount=e,t}function At(n="",e=!1){return e?(Le(),jr(Ri,null,n)):xt(Ri,null,n)}function xn(n){return n==null||typeof n=="boolean"?xt(Ri):De(n)?xt(lt,null,n.slice()):Ys(n)?Jn(n):xt(uo,null,String(n))}function Jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ur(n)}function Ja(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(De(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ja(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!af(e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:en},t=32):(e=String(e),i&64?(t=16,e=[Qi(e)]):t=8);n.children=e,n.shapeFlag|=t}function Jh(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=dn([e.class,i.class]));else if(r==="style")e.style=Si([e.style,i.style]);else if(no(r)){const s=e[r],a=i[r];a&&s!==a&&!(De(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function gn(n,e,t,i=null){Tn(n,e,7,[t,i])}const Qh=rf();let ep=0;function tp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Qh,s={uid:ep++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ru(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cf(i,r),emitsOptions:vf(i,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Gh.bind(null,s),n.ce&&n.ce(s),s}let Nt=null,Ks,Ea;{const n=ro(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Ks=e("__VUE_INSTANCE_SETTERS__",t=>Nt=t),Ea=e("__VUE_SSR_SETTERS__",t=>qr=t)}const is=n=>{const e=Nt;return Ks(n),n.scope.on(),()=>{n.scope.off(),Ks(e)}},Sl=()=>{Nt&&Nt.scope.off(),Ks(null)};function Sf(n){return n.vnode.shapeFlag&4}let qr=!1;function np(n,e=!1,t=!1){e&&Ea(e);const{props:i,children:r}=n.vnode,s=Sf(n);Rh(n,i,s,e),Uh(n,r,t);const a=s?ip(n,e):void 0;return e&&Ea(!1),a}function ip(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Mh);const{setup:i}=t;if(i){si();const r=n.setupContext=i.length>1?sp(n):null,s=is(n),a=ns(i,n,0,[n.props,r]),o=Mu(a);if(oi(),s(),(o||n.sp)&&!Fr(n)&&Qu(n),o){if(a.then(Sl,Sl),e)return a.then(l=>{El(n,l,e)}).catch(l=>{ao(l,n,0)});n.asyncDep=a}else El(n,a,e)}else Ef(n,e)}function El(n,e,t){Be(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:rt(e)&&(n.setupState=ju(e)),Ef(n,t)}let bl;function Ef(n,e,t){const i=n.type;if(!n.render){if(!e&&bl&&!i.render){const r=i.template||Ka(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=vt(vt({isCustomElement:s,delimiters:o},a),l);i.render=bl(r,c)}}n.render=i.render||fn}{const r=is(n);si();try{yh(n)}finally{oi(),r()}}}const rp={get(n,e){return Tt(n,"get",""),n[e]}};function sp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,rp),slots:n.slots,emit:n.emit,expose:e}}function fo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ju(Xu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Or)return Or[t](n)},has(e,t){return t in e||t in Or}})):n.proxy}function op(n){return Be(n)&&"__vccOpts"in n}const $t=(n,e)=>Qd(n,e,qr);function bf(n,e,t){const i=arguments.length;return i===2?rt(e)&&!De(e)?Ys(e)?xt(n,null,[e]):xt(n,e):xt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ys(t)&&(t=[t]),xt(n,e,t))}const ap="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ba;const Tl=typeof window<"u"&&window.trustedTypes;if(Tl)try{ba=Tl.createPolicy("vue",{createHTML:n=>n})}catch{}const Tf=ba?n=>ba.createHTML(n):n=>n,lp="http://www.w3.org/2000/svg",cp="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,wl=On&&On.createElement("template"),up={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?On.createElementNS(lp,n):e==="mathml"?On.createElementNS(cp,n):t?On.createElement(n,{is:t}):On.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>On.createTextNode(n),createComment:n=>On.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>On.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{wl.innerHTML=Tf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=wl.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},fp=Symbol("_vtc");function dp(n,e,t){const i=n[fp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Zs=Symbol("_vod"),wf=Symbol("_vsh"),hp={beforeMount(n,{value:e},{transition:t}){n[Zs]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Tr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Tr(n,!0),i.enter(n)):i.leave(n,()=>{Tr(n,!1)}):Tr(n,e))},beforeUnmount(n,{value:e}){Tr(n,e)}};function Tr(n,e){n.style.display=e?n[Zs]:"none",n[wf]=!e}const pp=Symbol(""),mp=/(^|;)\s*display\s*:/;function gp(n,e,t){const i=n.style,r=dt(t);let s=!1;if(t&&!r){if(e)if(dt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&zs(i,o,"")}else for(const a in e)t[a]==null&&zs(i,a,"");for(const a in t)a==="display"&&(s=!0),zs(i,a,t[a])}else if(r){if(e!==t){const a=i[pp];a&&(t+=";"+a),i.cssText=t,s=mp.test(t)}}else e&&n.removeAttribute("style");Zs in n&&(n[Zs]=s?i.display:"",n[wf]&&(i.display="none"))}const Al=/\s*!important$/;function zs(n,e,t){if(De(t))t.forEach(i=>zs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=_p(n,e);Al.test(t)?n.setProperty(Ui(i),t.replace(Al,""),"important"):n[i]=t}}const Rl=["Webkit","Moz","ms"],Lo={};function _p(n,e){const t=Lo[e];if(t)return t;let i=ii(e);if(i!=="filter"&&i in n)return Lo[e]=i;i=Eu(i);for(let r=0;r<Rl.length;r++){const s=Rl[r]+i;if(s in n)return Lo[e]=s}return e}const Cl="http://www.w3.org/1999/xlink";function Pl(n,e,t,i,r,s=Ad(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Cl,e.slice(6,e.length)):n.setAttributeNS(Cl,e,t):t==null||s&&!Tu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":bn(t)?String(t):t)}function Ll(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Tf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Tu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function ei(n,e,t,i){n.addEventListener(e,t,i)}function vp(n,e,t,i){n.removeEventListener(e,t,i)}const Ul=Symbol("_vei");function xp(n,e,t,i,r=null){const s=n[Ul]||(n[Ul]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Mp(e);if(i){const c=s[e]=Ep(i,r);ei(n,o,c,l)}else a&&(vp(n,o,a,l),s[e]=void 0)}}const Dl=/(?:Once|Passive|Capture)$/;function Mp(n){let e;if(Dl.test(n)){e={};let i;for(;i=n.match(Dl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ui(n.slice(2)),e]}let Uo=0;const yp=Promise.resolve(),Sp=()=>Uo||(yp.then(()=>Uo=0),Uo=Date.now());function Ep(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Tn(bp(i,t.value),e,5,[i])};return t.value=n,t.attached=Sp(),t}function bp(n,e){if(De(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Il=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Tp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?dp(n,i,a):e==="style"?gp(n,t,i):no(e)?Oa(e)||xp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wp(n,e,i,a))?(Ll(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pl(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!dt(i))?Ll(n,ii(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Pl(n,e,i,a))};function wp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Il(e)&&Be(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Il(e)&&dt(t)?!1:e in n}const fr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return De(e)?t=>Ns(e,t):e};function Ap(n){n.target.composing=!0}function Nl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gn=Symbol("_assign"),Wt={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Gn]=fr(r);const s=i||r.props&&r.props.type==="number";ei(n,e?"change":"input",a=>{if(a.target.composing)return;let o=n.value;t&&(o=o.trim()),s&&(o=Gs(o)),n[Gn](o)}),t&&ei(n,"change",()=>{n.value=n.value.trim()}),e||(ei(n,"compositionstart",Ap),ei(n,"compositionend",Nl),ei(n,"change",Nl))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[Gn]=fr(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?Gs(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Rp={deep:!0,created(n,e,t){n[Gn]=fr(t),ei(n,"change",()=>{const i=n._modelValue,r=Yr(n),s=n.checked,a=n[Gn];if(De(i)){const o=za(i,r),l=o!==-1;if(s&&!l)a(i.concat(r));else if(!s&&l){const c=[...i];c.splice(o,1),a(c)}}else if(vr(i)){const o=new Set(i);s?o.add(r):o.delete(r),a(o)}else a(Af(n,s))})},mounted:Fl,beforeUpdate(n,e,t){n[Gn]=fr(t),Fl(n,e,t)}};function Fl(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(De(e))r=za(e,i.props.value)>-1;else if(vr(e))r=e.has(i.props.value);else{if(e===t)return;r=ts(e,Af(n,!0))}n.checked!==r&&(n.checked=r)}const Do={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=vr(e);ei(n,"change",()=>{const s=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>t?Gs(Yr(a)):Yr(a));n[Gn](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,Wr(()=>{n._assigning=!1})}),n[Gn]=fr(i)},mounted(n,{value:e}){Ol(n,e)},beforeUpdate(n,e,t){n[Gn]=fr(t)},updated(n,{value:e}){n._assigning||Ol(n,e)}};function Ol(n,e){const t=n.multiple,i=De(e);if(!(t&&!i&&!vr(e))){for(let r=0,s=n.options.length;r<s;r++){const a=n.options[r],o=Yr(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=za(e,o)>-1}else a.selected=e.has(o);else if(ts(Yr(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Yr(n){return"_value"in n?n._value:n.value}function Af(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Cp=["ctrl","shift","alt","meta"],Pp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Cp.some(t=>n[`${t}Key`]&&!e.includes(t))},Js=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=Pp[e[a]];if(o&&o(r,e))return}return n(r,...s)})},Lp=vt({patchProp:Tp},up);let Bl;function Up(){return Bl||(Bl=Ih(Lp))}const Dp=(...n)=>{const e=Up().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Np(i);if(!r)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Ip(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Ip(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Np(n){return dt(n)?document.querySelector(n):n}var Fp=!1;/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Op=Symbol();var kl;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(kl||(kl={}));function Bp(){const n=Cd(!0),e=n.run(()=>Ve({}));let t=[],i=[];const r=Xu({install(s){r._a=s,s.provide(Op,r),s.config.globalProperties.$pinia=r,i.forEach(a=>t.push(a)),i=[]},use(s){return!this._a&&!Fp?i.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="152",kp=0,zl=1,zp=2,Rf=1,Hp=2,Fn=3,ri=0,Bt=1,zn=2,ni=0,ar=1,Hl=2,Gl=3,Vl=4,Gp=5,Zi=100,Vp=101,Wp=102,Wl=103,Xl=104,Xp=200,$p=201,jp=202,qp=203,Cf=204,Pf=205,Yp=206,Kp=207,Zp=208,Jp=209,Qp=210,em=0,tm=1,nm=2,Ta=3,im=4,rm=5,sm=6,om=7,Lf=0,am=1,lm=2,Vn=0,cm=1,um=2,fm=3,dm=4,hm=5,Uf=300,dr=301,hr=302,wa=303,Aa=304,ho=306,Ra=1e3,cn=1001,Ca=1002,Dt=1003,$l=1004,Io=1005,Jt=1006,pm=1007,Kr=1008,Ci=1009,mm=1010,gm=1011,Df=1012,_m=1013,Mi=1014,yi=1015,Zr=1016,vm=1017,xm=1018,lr=1020,Mm=1021,un=1023,ym=1024,Sm=1025,bi=1026,pr=1027,Em=1028,bm=1029,Tm=1030,wm=1031,Am=1033,No=33776,Fo=33777,Oo=33778,Bo=33779,jl=35840,ql=35841,Yl=35842,Kl=35843,Rm=36196,Zl=37492,Jl=37496,Ql=37808,ec=37809,tc=37810,nc=37811,ic=37812,rc=37813,sc=37814,oc=37815,ac=37816,lc=37817,cc=37818,uc=37819,fc=37820,dc=37821,ko=36492,Cm=36283,hc=36284,pc=36285,mc=36286,If=3e3,Ti=3001,Pm=3200,Lm=3201,Um=0,Dm=1,wi="",ke="srgb",wn="srgb-linear",Nf="display-p3",zo=7680,Im=519,gc=35044,_c="300 es",Pa=1035;class Mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ho=Math.PI/180,La=180/Math.PI;function rs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Ot(n,e,t){return Math.max(e,Math.min(t,n))}function Nm(n,e){return(n%e+e)%e}function Go(n,e,t){return(1-t)*n+t*e}function vc(n){return(n&n-1)===0&&n!==0}function Fm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hs(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],v=i[8],g=r[0],m=r[3],h=r[6],E=r[1],S=r[4],w=r[7],C=r[2],I=r[5],U=r[8];return s[0]=a*g+o*E+l*C,s[3]=a*m+o*S+l*I,s[6]=a*h+o*w+l*U,s[1]=c*g+u*E+f*C,s[4]=c*m+u*S+f*I,s[7]=c*h+u*w+f*U,s[2]=d*g+p*E+v*C,s[5]=d*m+p*S+v*I,s[8]=d*h+p*w+v*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,p=c*s-a*l,v=t*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new qe;function Ff(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const xc={};function kr(n){n in xc||(xc[n]=!0,console.warn(n))}function cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Om=new qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Bm=new qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function km(n){return n.convertSRGBToLinear().applyMatrix3(Bm)}function zm(n){return n.applyMatrix3(Om).convertLinearToSRGB()}const Hm={[wn]:n=>n,[ke]:n=>n.convertSRGBToLinear(),[Nf]:km},Gm={[wn]:n=>n,[ke]:n=>n.convertLinearToSRGB(),[Nf]:zm},rn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return wn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Hm[e],r=Gm[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ii;class Of{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=Qs("canvas")),Ii.width=e.width,Ii.height=e.height;const i=Ii.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=cr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cr(t[i]/255)*255):t[i]=cr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Bf{constructor(e=null){this.isSource=!0,this.uuid=rs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xo(r[a].image)):s.push(Xo(r[a]))}else s=Xo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Xo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Of.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vm=0;class qt extends Mr{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=cn,r=cn,s=Jt,a=Kr,o=un,l=Ci,c=qt.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=rs(),this.name="",this.source=new Bf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ti?ke:wi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ra:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ra:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ke?Ti:If}set encoding(e){kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ti?ke:wi}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Uf;qt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],v=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,w=(p+1)/2,C=(h+1)/2,I=(u+d)/4,U=(f+g)/4,G=(v+m)/4;return S>w&&S>C?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=I/i,s=U/i):w>C?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=I/r,s=G/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=U/s,r=G/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(f-g)/E,this.z=(d-u)/E,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pi extends Mr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(kr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ti?ke:wi),this.texture=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Jt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kf extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wm extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],p=s[a+1],v=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==d||c!==p||u!==v){let m=1-o;const h=l*d+c*p+u*v+f*g,E=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const C=Math.sqrt(S),I=Math.atan2(C,h*E);m=Math.sin(m*I)/C,o=Math.sin(o*I)/C}const w=o*E;if(l=l*m+d*w,c=c*m+p*w,u=u*m+v*w,f=f*m+g*w,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*p-c*d,e[t+1]=l*v+u*d+c*f-o*p,e[t+2]=c*v+u*p+o*d-l*f,e[t+3]=u*v-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"YXZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"ZXY":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"ZYX":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"YZX":this._x=d*u*f+c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f-d*p*v;break;case"XZY":this._x=d*u*f-c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,d=-s*t-a*i-o*r;return this.x=c*l+d*-s+u*-o-f*-a,this.y=u*l+d*-a+f*-s-c*-o,this.z=f*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $o=new j,Mc=new ss;class os{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ni.copy(e.boundingBox),Ni.applyMatrix4(e.matrixWorld),this.union(Ni);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Pn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Pn)}else r.boundingBox===null&&r.computeBoundingBox(),Ni.copy(r.boundingBox),Ni.applyMatrix4(e.matrixWorld),this.union(Ni)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),ps.subVectors(this.max,wr),Fi.subVectors(e.a,wr),Oi.subVectors(e.b,wr),Bi.subVectors(e.c,wr),$n.subVectors(Oi,Fi),jn.subVectors(Bi,Oi),hi.subVectors(Fi,Bi);let t=[0,-$n.z,$n.y,0,-jn.z,jn.y,0,-hi.z,hi.y,$n.z,0,-$n.x,jn.z,0,-jn.x,hi.z,0,-hi.x,-$n.y,$n.x,0,-jn.y,jn.x,0,-hi.y,hi.x,0];return!jo(t,Fi,Oi,Bi,ps)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,Fi,Oi,Bi,ps))?!1:(ms.crossVectors($n,jn),t=[ms.x,ms.y,ms.z],jo(t,Fi,Oi,Bi,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new j,new j,new j,new j,new j,new j,new j,new j],Pn=new j,Ni=new os,Fi=new j,Oi=new j,Bi=new j,$n=new j,jn=new j,hi=new j,wr=new j,ps=new j,ms=new j,pi=new j;function jo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){pi.fromArray(n,s);const o=r.x*Math.abs(pi.x)+r.y*Math.abs(pi.y)+r.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),u=i.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Xm=new os,Ar=new j,qo=new j;class el{constructor(e=new j,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(qo)),this.expandByPoint(Ar.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new j,Yo=new j,gs=new j,qn=new j,Ko=new j,_s=new j,Zo=new j;class $m{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Yo.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Yo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(gs),o=qn.dot(this.direction),l=-qn.dot(gs),c=qn.lengthSq(),u=Math.abs(1-a*a);let f,d,p,v;if(u>0)if(f=a*l-o,d=a*o-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const g=1/u;f*=g,d*=g,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Yo).addScaledVector(gs,d),p}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,r,s){Ko.subVectors(t,e),_s.subVectors(i,e),Zo.crossVectors(Ko,_s);let a=this.direction.dot(Zo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);const l=o*this.direction.dot(_s.crossVectors(qn,_s));if(l<0)return null;const c=o*this.direction.dot(Ko.cross(qn));if(c<0||l+c>a)return null;const u=-o*qn.dot(Zo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,d,p,v,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=v,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ki.setFromMatrixColumn(e,0).length(),s=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,v=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,v=c*u,g=c*f;t[0]=d+g*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,v=c*u,g=c*f;t[0]=d-g*o,t[4]=-a*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,v=o*u,g=o*f;t[0]=l*u,t[4]=v*c-p,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=g-d*f,t[8]=v*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+v,t[10]=d-g*f}else if(e.order==="XZY"){const d=a*l,p=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=a*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jm,e,qm)}lookAt(e,t,i){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Yn.crossVectors(i,Ht),Yn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Yn.crossVectors(i,Ht)),Yn.normalize(),vs.crossVectors(Ht,Yn),r[0]=Yn.x,r[4]=vs.x,r[8]=Ht.x,r[1]=Yn.y,r[5]=vs.y,r[9]=Ht.y,r[2]=Yn.z,r[6]=vs.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],v=i[2],g=i[6],m=i[10],h=i[14],E=i[3],S=i[7],w=i[11],C=i[15],I=r[0],U=r[4],G=r[8],_=r[12],T=r[1],O=r[5],D=r[9],P=r[13],B=r[2],H=r[6],te=r[10],X=r[14],$=r[3],ce=r[7],ae=r[11],we=r[15];return s[0]=a*I+o*T+l*B+c*$,s[4]=a*U+o*O+l*H+c*ce,s[8]=a*G+o*D+l*te+c*ae,s[12]=a*_+o*P+l*X+c*we,s[1]=u*I+f*T+d*B+p*$,s[5]=u*U+f*O+d*H+p*ce,s[9]=u*G+f*D+d*te+p*ae,s[13]=u*_+f*P+d*X+p*we,s[2]=v*I+g*T+m*B+h*$,s[6]=v*U+g*O+m*H+h*ce,s[10]=v*G+g*D+m*te+h*ae,s[14]=v*_+g*P+m*X+h*we,s[3]=E*I+S*T+w*B+C*$,s[7]=E*U+S*O+w*H+C*ce,s[11]=E*G+S*D+w*te+C*ae,s[15]=E*_+S*P+w*X+C*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],v=e[3],g=e[7],m=e[11],h=e[15];return v*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*p-i*l*p)+g*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+m*(+t*c*f-t*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],v=e[12],g=e[13],m=e[14],h=e[15],E=f*m*c-g*d*c+g*l*p-o*m*p-f*l*h+o*d*h,S=v*d*c-u*m*c-v*l*p+a*m*p+u*l*h-a*d*h,w=u*g*c-v*f*c+v*o*p-a*g*p-u*o*h+a*f*h,C=v*f*l-u*g*l-v*o*d+a*g*d+u*o*m-a*f*m,I=t*E+i*S+r*w+s*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/I;return e[0]=E*U,e[1]=(g*d*s-f*m*s-g*r*p+i*m*p+f*r*h-i*d*h)*U,e[2]=(o*m*s-g*l*s+g*r*c-i*m*c-o*r*h+i*l*h)*U,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*p-i*l*p)*U,e[4]=S*U,e[5]=(u*m*s-v*d*s+v*r*p-t*m*p-u*r*h+t*d*h)*U,e[6]=(v*l*s-a*m*s-v*r*c+t*m*c+a*r*h-t*l*h)*U,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*p+t*l*p)*U,e[8]=w*U,e[9]=(v*f*s-u*g*s-v*i*p+t*g*p+u*i*h-t*f*h)*U,e[10]=(a*g*s-v*o*s+v*i*c-t*g*c-a*i*h+t*o*h)*U,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*p-t*o*p)*U,e[12]=C*U,e[13]=(u*g*r-v*f*r+v*i*d-t*g*d-u*i*m+t*f*m)*U,e[14]=(v*o*r-a*g*r-v*i*l+t*g*l+a*i*m-t*o*m)*U,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*U,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,p=s*u,v=s*f,g=a*u,m=a*f,h=o*f,E=l*c,S=l*u,w=l*f,C=i.x,I=i.y,U=i.z;return r[0]=(1-(g+h))*C,r[1]=(p+w)*C,r[2]=(v-S)*C,r[3]=0,r[4]=(p-w)*I,r[5]=(1-(d+h))*I,r[6]=(m+E)*I,r[7]=0,r[8]=(v+S)*U,r[9]=(m-E)*U,r[10]=(1-(d+g))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ki.set(r[0],r[1],r[2]).length();const a=ki.set(r[4],r[5],r[6]).length(),o=ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const c=1/s,u=1/a,f=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,t.setFromRotationMatrix(sn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,d=(i+r)*c,p=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ki=new j,sn=new yt,jm=new j(0,0,0),qm=new j(1,1,1),Yn=new j,vs=new j,Ht=new j,yc=new yt,Sc=new ss;class po{constructor(e=0,t=0,i=0,r=po.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}po.DEFAULT_ORDER="XYZ";class zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ym=0;const Ec=new j,zi=new ss,Un=new yt,xs=new j,Rr=new j,Km=new j,Zm=new ss,bc=new j(1,0,0),Tc=new j(0,1,0),wc=new j(0,0,1),Jm={type:"added"},Ac={type:"removed"};class Yt extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new j,t=new po,i=new ss,r=new j(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new qe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(bc,e)}rotateY(e){return this.rotateOnAxis(Tc,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return Ec.copy(e).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bc,e)}translateY(e){return this.translateOnAxis(Tc,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xs.copy(e):xs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Rr,xs,this.up):Un.lookAt(xs,Rr,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),zi.setFromRotationMatrix(Un),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ac)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ac)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,Km),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new j(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new j,Dn=new j,Jo=new j,In=new j,Hi=new j,Gi=new j,Rc=new j,Qo=new j,ea=new j,ta=new j;let Ms=!1;class ln{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){on.subVectors(r,t),Dn.subVectors(i,t),Jo.subVectors(e,t);const a=on.dot(on),o=on.dot(Dn),l=on.dot(Jo),c=Dn.dot(Dn),u=Dn.dot(Jo),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,In),In.x>=0&&In.y>=0&&In.x+In.y<=1}static getUV(e,t,i,r,s,a,o,l){return Ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ms=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,In),l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),Dn.subVectors(e,t),on.cross(Dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),on.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ms=!0),ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Hi.subVectors(r,i),Gi.subVectors(s,i),Qo.subVectors(e,i);const l=Hi.dot(Qo),c=Gi.dot(Qo);if(l<=0&&c<=0)return t.copy(i);ea.subVectors(e,r);const u=Hi.dot(ea),f=Gi.dot(ea);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Hi,a);ta.subVectors(e,s);const p=Hi.dot(ta),v=Gi.dot(ta);if(v>=0&&p<=v)return t.copy(s);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Gi,o);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return Rc.subVectors(s,r),o=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(Rc,o);const h=1/(m+g+d);return a=g*h,o=d*h,t.copy(i).addScaledVector(Hi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Qm=0;class mo extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=ar,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Cf,this.blendDst=Pf,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},ys={h:0,s:0,l:0};function na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rn.workingColorSpace){return this.r=e,this.g=t,this.b=i,rn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rn.workingColorSpace){if(e=Nm(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=na(a,s,e+1/3),this.g=na(a,s,e),this.b=na(a,s,e-1/3)}return rn.toWorkingColorSpace(this,r),this}setStyle(e,t=ke){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ke){const i=Hf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=Wo(e.r),this.g=Wo(e.g),this.b=Wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ke){return rn.fromWorkingColorSpace(bt.copy(this),e),Math.round(Ot(bt.r*255,0,255))*65536+Math.round(Ot(bt.g*255,0,255))*256+Math.round(Ot(bt.b*255,0,255))}getHexString(e=ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rn.workingColorSpace){rn.fromWorkingColorSpace(bt.copy(this),t);const i=bt.r,r=bt.g,s=bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rn.workingColorSpace){return rn.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=ke){rn.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,i=bt.g,r=bt.b;return e!==ke?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=i,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(ys);const i=Go(an.h,ys.h,t),r=Go(an.s,ys.s,t),s=Go(an.l,ys.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new st;st.NAMES=Hf;class eo extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new j,Ss=new ot;class Sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Gf extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vf extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class En extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let eg=0;const Zt=new yt,ia=new Yt,Vi=new j,Gt=new os,Cr=new os,gt=new j;class ai extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ff(e)?Vf:Gf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new En(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new el);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Gt.min,Cr.min),Gt.expandByPoint(gt),gt.addVectors(Gt.max,Cr.max),Gt.expandByPoint(gt)):(Gt.expandByPoint(Cr.min),Gt.expandByPoint(Cr.max))}Gt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gt.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),gt.add(Vi)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new j,u[T]=new j;const f=new j,d=new j,p=new j,v=new ot,g=new ot,m=new ot,h=new j,E=new j;function S(T,O,D){f.fromArray(r,T*3),d.fromArray(r,O*3),p.fromArray(r,D*3),v.fromArray(a,T*2),g.fromArray(a,O*2),m.fromArray(a,D*2),d.sub(f),p.sub(f),g.sub(v),m.sub(v);const P=1/(g.x*m.y-m.x*g.y);isFinite(P)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(P),E.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(P),c[T].add(h),c[O].add(h),c[D].add(h),u[T].add(E),u[O].add(E),u[D].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let T=0,O=w.length;T<O;++T){const D=w[T],P=D.start,B=D.count;for(let H=P,te=P+B;H<te;H+=3)S(i[H+0],i[H+1],i[H+2])}const C=new j,I=new j,U=new j,G=new j;function _(T){U.fromArray(s,T*3),G.copy(U);const O=c[T];C.copy(O),C.sub(U.multiplyScalar(U.dot(O))).normalize(),I.crossVectors(G,O);const P=I.dot(u[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=P}for(let T=0,O=w.length;T<O;++T){const D=w[T],P=D.start,B=D.count;for(let H=P,te=P+B;H<te;H+=3)_(i[H+0]),_(i[H+1]),_(i[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let h=0;h<u;h++)d[v++]=c[p++]}return new Sn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ai,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new yt,_n=new $m,Es=new el,Pc=new j,Wi=new j,Xi=new j,$i=new j,ra=new j,bs=new j,Ts=new ot,ws=new ot,As=new ot,Lc=new j,Uc=new j,Dc=new j,Rs=new j,Cs=new j;class yn extends Yt{constructor(e=new ai,t=new eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){bs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ra.fromBufferAttribute(f,e),a?bs.addScaledVector(ra,u):bs.addScaledVector(ra.sub(t),u))}t.add(bs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(s),_n.copy(e.ray).recast(e.near),!(Es.containsPoint(_n.origin)===!1&&(_n.intersectSphere(Es,Pc)===null||_n.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Cc.copy(s).invert(),_n.copy(e.ray).applyMatrix4(Cc),!(i.boundingBox!==null&&_n.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,v=f.length;p<v;p++){const g=f[p],m=s[g.materialIndex],h=Math.max(g.start,d.start),E=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let S=h,w=E;S<w;S+=3){const C=a.getX(S),I=a.getX(S+1),U=a.getX(S+2);i=Ps(this,m,e,_n,l,c,u,C,I,U),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){const h=a.getX(g),E=a.getX(g+1),S=a.getX(g+2);i=Ps(this,s,e,_n,l,c,u,h,E,S),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,v=f.length;p<v;p++){const g=f[p],m=s[g.materialIndex],h=Math.max(g.start,d.start),E=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=h,w=E;S<w;S+=3){const C=S,I=S+1,U=S+2;i=Ps(this,m,e,_n,l,c,u,C,I,U),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){const h=g,E=g+1,S=g+2;i=Ps(this,s,e,_n,l,c,u,h,E,S),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function tg(n,e,t,i,r,s,a,o){let l;if(e.side===Bt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ri,o),l===null)return null;Cs.copy(o),Cs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Cs);return c<t.near||c>t.far?null:{distance:c,point:Cs.clone(),object:n}}function Ps(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Wi),n.getVertexPosition(l,Xi),n.getVertexPosition(c,$i);const u=tg(n,e,t,i,Wi,Xi,$i,Rs);if(u){r&&(Ts.fromBufferAttribute(r,o),ws.fromBufferAttribute(r,l),As.fromBufferAttribute(r,c),u.uv=ln.getInterpolation(Rs,Wi,Xi,$i,Ts,ws,As,new ot)),s&&(Ts.fromBufferAttribute(s,o),ws.fromBufferAttribute(s,l),As.fromBufferAttribute(s,c),u.uv1=ln.getInterpolation(Rs,Wi,Xi,$i,Ts,ws,As,new ot),u.uv2=u.uv1),a&&(Lc.fromBufferAttribute(a,o),Uc.fromBufferAttribute(a,l),Dc.fromBufferAttribute(a,c),u.normal=ln.getInterpolation(Rs,Wi,Xi,$i,Lc,Uc,Dc,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new j,materialIndex:0};ln.getNormal(Wi,Xi,$i,f.normal),u.face=f}return u}class as extends ai{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(f,2));function v(g,m,h,E,S,w,C,I,U,G,_){const T=w/U,O=C/G,D=w/2,P=C/2,B=I/2,H=U+1,te=G+1;let X=0,$=0;const ce=new j;for(let ae=0;ae<te;ae++){const we=ae*O-P;for(let he=0;he<H;he++){const Z=he*T-D;ce[g]=Z*E,ce[m]=we*S,ce[h]=B,c.push(ce.x,ce.y,ce.z),ce[g]=0,ce[m]=0,ce[h]=I>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(he/U),f.push(1-ae/G),X+=1}}for(let ae=0;ae<G;ae++)for(let we=0;we<U;we++){const he=d+we+H*ae,Z=d+we+H*(ae+1),oe=d+(we+1)+H*(ae+1),ve=d+(we+1)+H*ae;l.push(he,Z,ve),l.push(Z,oe,ve),$+=6}o.addGroup(p,$,_),p+=$,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=mr(n[t]);for(const r in i)e[r]=i[r]}return e}function ng(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wf(n){return n.getRenderTarget()===null?n.outputColorSpace:wn}const ig={clone:mr,merge:Ut};var rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rg,this.fragmentShader=sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xf extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qt extends Xf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ho*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,qi=1;class og extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Qt(ji,qi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Qt(ji,qi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Qt(ji,qi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Qt(ji,qi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Qt(ji,qi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Qt(ji,qi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Vn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class $f extends qt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ag extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(kr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ti?ke:wi),this.texture=new $f(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new as(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:ni});s.uniforms.tEquirect.value=t;const a=new yn(r,s),o=t.minFilter;return t.minFilter===Kr&&(t.minFilter=Jt),new og(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const sa=new j,lg=new j,cg=new qe;class _i{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=sa.subVectors(i,t).cross(lg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(sa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cg.getNormalMatrix(e),r=this.coplanarPoint(sa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new el,Ls=new j;class jf{constructor(e=new _i,t=new _i,i=new _i,r=new _i,s=new _i,a=new _i){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],d=i[8],p=i[9],v=i[10],g=i[11],m=i[12],h=i[13],E=i[14],S=i[15];return t[0].setComponents(o-r,f-l,g-d,S-m).normalize(),t[1].setComponents(o+r,f+l,g+d,S+m).normalize(),t[2].setComponents(o+s,f+c,g+p,S+h).normalize(),t[3].setComponents(o-s,f-c,g-p,S-h).normalize(),t[4].setComponents(o-a,f-u,g-v,S-E).normalize(),t[5].setComponents(o+a,f+u,g+v,S+E).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ls.x=r.normal.x>0?e.max.x:e.min.x,Ls.y=r.normal.y>0?e.max.y:e.min.y,Ls.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ug(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,p=u.updateRange;n.bindBuffer(f,c),p.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class tl extends ai{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,p=[],v=[],g=[],m=[];for(let h=0;h<u;h++){const E=h*d-a;for(let S=0;S<c;S++){const w=S*f-s;v.push(w,-E,0),g.push(0,0,1),m.push(S/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<o;E++){const S=E+c*h,w=E+c*(h+1),C=E+1+c*(h+1),I=E+1+c*h;p.push(S,w,I),p.push(w,C,I)}this.setIndex(p),this.setAttribute("position",new En(v,3)),this.setAttribute("normal",new En(g,3)),this.setAttribute("uv",new En(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.widthSegments,e.heightSegments)}}var fg=`#ifdef USE_ALPHAMAP
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
#endif`,yg=`#ifdef USE_BUMPMAP
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
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
}`,kg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_MORPHNORMALS
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
#endif`,S_=`#ifdef USE_MORPHTARGETS
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
#endif`,k_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z_=`float roughnessFactor = roughness;
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
}`,yv=`uniform vec3 diffuse;
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
}`,Sv=`#define LAMBERT
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
}`,kv=`uniform vec3 diffuse;
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
}`,Ge={alphamap_fragment:fg,alphamap_pars_fragment:dg,alphatest_fragment:hg,alphatest_pars_fragment:pg,aomap_fragment:mg,aomap_pars_fragment:gg,begin_vertex:_g,beginnormal_vertex:vg,bsdfs:xg,iridescence_fragment:Mg,bumpmap_pars_fragment:yg,clipping_planes_fragment:Sg,clipping_planes_pars_fragment:Eg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:Tg,color_fragment:wg,color_pars_fragment:Ag,color_pars_vertex:Rg,color_vertex:Cg,common:Pg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Ug,displacementmap_pars_vertex:Dg,displacementmap_vertex:Ig,emissivemap_fragment:Ng,emissivemap_pars_fragment:Fg,encodings_fragment:Og,encodings_pars_fragment:Bg,envmap_fragment:kg,envmap_common_pars_fragment:zg,envmap_pars_fragment:Hg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:e_,envmap_vertex:Vg,fog_vertex:Wg,fog_pars_vertex:Xg,fog_fragment:$g,fog_pars_fragment:jg,gradientmap_pars_fragment:qg,lightmap_fragment:Yg,lightmap_pars_fragment:Kg,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:Qg,lights_toon_fragment:t_,lights_toon_pars_fragment:n_,lights_phong_fragment:i_,lights_phong_pars_fragment:r_,lights_physical_fragment:s_,lights_physical_pars_fragment:o_,lights_fragment_begin:a_,lights_fragment_maps:l_,lights_fragment_end:c_,logdepthbuf_fragment:u_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:h_,map_fragment:p_,map_pars_fragment:m_,map_particle_fragment:g_,map_particle_pars_fragment:__,metalnessmap_fragment:v_,metalnessmap_pars_fragment:x_,morphcolor_vertex:M_,morphnormal_vertex:y_,morphtarget_pars_vertex:S_,morphtarget_vertex:E_,normal_fragment_begin:b_,normal_fragment_maps:T_,normal_pars_fragment:w_,normal_pars_vertex:A_,normal_vertex:R_,normalmap_pars_fragment:C_,clearcoat_normal_fragment_begin:P_,clearcoat_normal_fragment_maps:L_,clearcoat_pars_fragment:U_,iridescence_pars_fragment:D_,output_fragment:I_,packing:N_,premultiplied_alpha_fragment:F_,project_vertex:O_,dithering_fragment:B_,dithering_pars_fragment:k_,roughnessmap_fragment:z_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:V_,shadowmap_vertex:W_,shadowmask_pars_fragment:X_,skinbase_vertex:$_,skinning_pars_vertex:j_,skinning_vertex:q_,skinnormal_vertex:Y_,specularmap_fragment:K_,specularmap_pars_fragment:Z_,tonemapping_fragment:J_,tonemapping_pars_fragment:Q_,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:rv,worldpos_vertex:sv,background_vert:ov,background_frag:av,backgroundCube_vert:lv,backgroundCube_frag:cv,cube_vert:uv,cube_frag:fv,depth_vert:dv,depth_frag:hv,distanceRGBA_vert:pv,distanceRGBA_frag:mv,equirect_vert:gv,equirect_frag:_v,linedashed_vert:vv,linedashed_frag:xv,meshbasic_vert:Mv,meshbasic_frag:yv,meshlambert_vert:Sv,meshlambert_frag:Ev,meshmatcap_vert:bv,meshmatcap_frag:Tv,meshnormal_vert:wv,meshnormal_frag:Av,meshphong_vert:Rv,meshphong_frag:Cv,meshphysical_vert:Pv,meshphysical_frag:Lv,meshtoon_vert:Uv,meshtoon_frag:Dv,points_vert:Iv,points_frag:Nv,shadow_vert:Fv,shadow_frag:Ov,sprite_vert:Bv,sprite_frag:kv},Me={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaTest:{value:0}}},Mn={basic:{uniforms:Ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new st(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ut([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ut([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new st(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ut([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ut([Me.points,Me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ut([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ut([Me.common,Me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ut([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ut([Me.sprite,Me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ut([Me.common,Me.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ut([Me.lights,Me.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Mn.physical={uniforms:Ut([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Us={r:0,b:0,g:0};function zv(n,e,t,i,r,s,a){const o=new st(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function v(m,h){let E=!1,S=h.isScene===!0?h.background:null;switch(S&&S.isTexture&&(S=(h.backgroundBlurriness>0?t:e).get(S)),S===null?g(o,l):S&&S.isColor&&(g(S,1),E=!0),n.xr.getEnvironmentBlendMode()){case"opaque":E=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),E=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),E=!0;break}(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===ho)?(u===void 0&&(u=new yn(new as(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:mr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,U,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=S.colorSpace!==ke,(f!==S||d!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new yn(new tl(2,2),new Li({name:"BackgroundMaterial",uniforms:mr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=S.colorSpace!==ke,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,h){m.getRGB(Us,Wf(n)),i.buffers.color.setClear(Us.r,Us.g,Us.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),l=h,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:v}}function Hv(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(B,H,te,X,$){let ce=!1;if(a){const ae=g(X,te,H);c!==ae&&(c=ae,p(c.object)),ce=h(B,X,te,$),ce&&E(B,X,te,$)}else{const ae=H.wireframe===!0;(c.geometry!==X.id||c.program!==te.id||c.wireframe!==ae)&&(c.geometry=X.id,c.program=te.id,c.wireframe=ae,ce=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,G(B,H,te,X),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(B){return i.isWebGL2?n.bindVertexArray(B):s.bindVertexArrayOES(B)}function v(B){return i.isWebGL2?n.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function g(B,H,te){const X=te.wireframe===!0;let $=o[B.id];$===void 0&&($={},o[B.id]=$);let ce=$[H.id];ce===void 0&&(ce={},$[H.id]=ce);let ae=ce[X];return ae===void 0&&(ae=m(d()),ce[X]=ae),ae}function m(B){const H=[],te=[],X=[];for(let $=0;$<r;$++)H[$]=0,te[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:te,attributeDivisors:X,object:B,attributes:{},index:null}}function h(B,H,te,X){const $=c.attributes,ce=H.attributes;let ae=0;const we=te.getAttributes();for(const he in we)if(we[he].location>=0){const oe=$[he];let ve=ce[he];if(ve===void 0&&(he==="instanceMatrix"&&B.instanceMatrix&&(ve=B.instanceMatrix),he==="instanceColor"&&B.instanceColor&&(ve=B.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;ae++}return c.attributesNum!==ae||c.index!==X}function E(B,H,te,X){const $={},ce=H.attributes;let ae=0;const we=te.getAttributes();for(const he in we)if(we[he].location>=0){let oe=ce[he];oe===void 0&&(he==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),he==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor));const ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),$[he]=ve,ae++}c.attributes=$,c.attributesNum=ae,c.index=X}function S(){const B=c.newAttributes;for(let H=0,te=B.length;H<te;H++)B[H]=0}function w(B){C(B,0)}function C(B,H){const te=c.newAttributes,X=c.enabledAttributes,$=c.attributeDivisors;te[B]=1,X[B]===0&&(n.enableVertexAttribArray(B),X[B]=1),$[B]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,H),$[B]=H)}function I(){const B=c.newAttributes,H=c.enabledAttributes;for(let te=0,X=H.length;te<X;te++)H[te]!==B[te]&&(n.disableVertexAttribArray(te),H[te]=0)}function U(B,H,te,X,$,ce){i.isWebGL2===!0&&(te===n.INT||te===n.UNSIGNED_INT)?n.vertexAttribIPointer(B,H,te,$,ce):n.vertexAttribPointer(B,H,te,X,$,ce)}function G(B,H,te,X){if(i.isWebGL2===!1&&(B.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const $=X.attributes,ce=te.getAttributes(),ae=H.defaultAttributeValues;for(const we in ce){const he=ce[we];if(he.location>=0){let Z=$[we];if(Z===void 0&&(we==="instanceMatrix"&&B.instanceMatrix&&(Z=B.instanceMatrix),we==="instanceColor"&&B.instanceColor&&(Z=B.instanceColor)),Z!==void 0){const oe=Z.normalized,ve=Z.itemSize,_e=t.get(Z);if(_e===void 0)continue;const b=_e.buffer,le=_e.type,ne=_e.bytesPerElement;if(Z.isInterleavedBufferAttribute){const q=Z.data,xe=q.stride,Pe=Z.offset;if(q.isInstancedInterleavedBuffer){for(let y=0;y<he.locationSize;y++)C(he.location+y,q.meshPerAttribute);B.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let y=0;y<he.locationSize;y++)w(he.location+y);n.bindBuffer(n.ARRAY_BUFFER,b);for(let y=0;y<he.locationSize;y++)U(he.location+y,ve/he.locationSize,le,oe,xe*ne,(Pe+ve/he.locationSize*y)*ne)}else{if(Z.isInstancedBufferAttribute){for(let q=0;q<he.locationSize;q++)C(he.location+q,Z.meshPerAttribute);B.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let q=0;q<he.locationSize;q++)w(he.location+q);n.bindBuffer(n.ARRAY_BUFFER,b);for(let q=0;q<he.locationSize;q++)U(he.location+q,ve/he.locationSize,le,oe,ve*ne,ve/he.locationSize*q*ne)}}else if(ae!==void 0){const oe=ae[we];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(he.location,oe);break;case 3:n.vertexAttrib3fv(he.location,oe);break;case 4:n.vertexAttrib4fv(he.location,oe);break;default:n.vertexAttrib1fv(he.location,oe)}}}}I()}function _(){D();for(const B in o){const H=o[B];for(const te in H){const X=H[te];for(const $ in X)v(X[$].object),delete X[$];delete H[te]}delete o[B]}}function T(B){if(o[B.id]===void 0)return;const H=o[B.id];for(const te in H){const X=H[te];for(const $ in X)v(X[$].object),delete X[$];delete H[te]}delete o[B.id]}function O(B){for(const H in o){const te=o[H];if(te[B.id]===void 0)continue;const X=te[B.id];for(const $ in X)v(X[$].object),delete X[$];delete te[B.id]}}function D(){P(),u=!0,c!==l&&(c=l,p(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:D,resetDefaultState:P,dispose:_,releaseStatesOfGeometry:T,releaseStatesOfProgram:O,initAttributes:S,enableAttribute:w,disableUnusedAttributes:I}}function Gv(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,p;if(r)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Vv(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,w=a||e.has("OES_texture_float"),C=S&&w,I=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:E,vertexTextures:S,floatFragmentTextures:w,floatVertexTextures:C,maxSamples:I}}function Wv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new _i,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,S=E*4;let w=h.clippingState||null;l.value=w,w=u(v,d,S,p);for(let C=0;C!==S;++C)w[C]=t[C];h.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const h=p+g*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,w=p;S!==g;++S,w+=4)a.copy(f[S]).applyMatrix4(E,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Xv(n){let e=new WeakMap;function t(a,o){return o===wa?a.mapping=dr:o===Aa&&(a.mapping=hr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===wa||o===Aa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ag(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $v extends Xf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const er=4,Ic=[.125,.215,.35,.446,.526,.582],xi=20,oa=new $v,Nc=new st;let aa=null;const vi=(1+Math.sqrt(5))/2,Yi=1/vi,Fc=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,vi,Yi),new j(0,vi,-Yi),new j(Yi,0,vi),new j(-Yi,0,vi),new j(vi,Yi,0),new j(-vi,Yi,0)];class Oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){aa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa),e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Zr,format:un,colorSpace:wn,depthBuffer:!1},r=Bc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jv(s)),this._blurMaterial=qv(s,e,t)}return r}_compileMaterial(e){const t=new yn(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,i,r){const o=new Qt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Nc),u.toneMapping=Vn,u.autoClear=!1;const p=new eo({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),v=new yn(new as,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Nc),g=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):E===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const S=this._cubeSize;Ds(r,E*S,h>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===dr||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new yn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ds(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,oa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fc[(r-1)%Fc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new yn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xi-1),g=s/v,m=isFinite(s)?1+Math.floor(u*g):xi;m>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const h=[];let E=0;for(let U=0;U<xi;++U){const G=U/g,_=Math.exp(-G*G/2);h.push(_),U===0?E+=_:U<m&&(E+=2*_)}for(let U=0;U<h.length;U++)h[U]=h[U]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=v,d.mipInt.value=S-i;const w=this._sizeLods[r],C=3*w*(r>S-er?r-S+er:0),I=4*(this._cubeSize-w);Ds(t,C,I,3*w,2*w),l.setRenderTarget(t),l.render(f,oa)}}function jv(n){const e=[],t=[],i=[];let r=n;const s=n-er+1+Ic.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-er?l=Ic[a-n+er-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,g=3,m=2,h=1,E=new Float32Array(g*v*p),S=new Float32Array(m*v*p),w=new Float32Array(h*v*p);for(let I=0;I<p;I++){const U=I%3*2/3-1,G=I>2?0:-1,_=[U,G,0,U+2/3,G,0,U+2/3,G+1,0,U,G,0,U+2/3,G+1,0,U,G+1,0];E.set(_,g*v*I),S.set(d,m*v*I);const T=[I,I,I,I,I,I];w.set(T,h*v*I)}const C=new ai;C.setAttribute("position",new Sn(E,g)),C.setAttribute("uv",new Sn(S,m)),C.setAttribute("faceIndex",new Sn(w,h)),e.push(C),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bc(n,e,t){const i=new Pi(n,e,t);return i.texture.mapping=ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function qv(n,e,t){const i=new Float32Array(xi),r=new j(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function kc(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function zc(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function nl(){return`

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
	`}function Yv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===wa||l===Aa,u=l===dr||l===hr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Oc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Oc(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Kv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Zv(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const g=p[v];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,v=f.attributes.position;let g=0;if(p!==null){const E=p.array;g=p.version;for(let S=0,w=E.length;S<w;S+=3){const C=E[S+0],I=E[S+1],U=E[S+2];d.push(C,I,I,U,U,C)}}else{const E=v.array;g=v.version;for(let S=0,w=E.length/3-1;S<w;S+=3){const C=S+0,I=S+1,U=S+2;d.push(C,I,I,U,U,C)}}const m=new(Ff(d)?Vf:Gf)(d,1);m.version=g;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Jv(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){n.drawElements(s,p,o,d*l),t.update(p,s,1)}function f(d,p,v){if(v===0)return;let g,m;if(r)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,o,d*l,v),t.update(p,s,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Qv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function e0(n,e){return n[0]-e[0]}function t0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function n0(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let H=function(){P.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const S=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],U=u.morphAttributes.normal||[],G=u.morphAttributes.color||[];let _=0;S===!0&&(_=1),w===!0&&(_=2),C===!0&&(_=3);let T=u.attributes.position.count*_,O=1;T>e.maxTextureSize&&(O=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const D=new Float32Array(T*O*4*g),P=new kf(D,T,O,g);P.type=yi,P.needsUpdate=!0;const B=_*4;for(let te=0;te<g;te++){const X=I[te],$=U[te],ce=G[te],ae=T*O*4*te;for(let we=0;we<X.count;we++){const he=we*B;S===!0&&(a.fromBufferAttribute(X,we),D[ae+he+0]=a.x,D[ae+he+1]=a.y,D[ae+he+2]=a.z,D[ae+he+3]=0),w===!0&&(a.fromBufferAttribute($,we),D[ae+he+4]=a.x,D[ae+he+5]=a.y,D[ae+he+6]=a.z,D[ae+he+7]=0),C===!0&&(a.fromBufferAttribute(ce,we),D[ae+he+8]=a.x,D[ae+he+9]=a.y,D[ae+he+10]=a.z,D[ae+he+11]=ce.itemSize===4?a.w:1)}}m={count:g,texture:P,size:new ot(T,O)},s.set(u,m),u.addEventListener("dispose",H)}let h=0;for(let S=0;S<d.length;S++)h+=d[S];const E=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==v){g=[];for(let w=0;w<v;w++)g[w]=[w,0];i[u.id]=g}for(let w=0;w<v;w++){const C=g[w];C[0]=w,C[1]=d[w]}g.sort(t0);for(let w=0;w<8;w++)w<v&&g[w][1]?(o[w][0]=g[w][0],o[w][1]=g[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(e0);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let E=0;for(let w=0;w<8;w++){const C=o[w],I=C[0],U=C[1];I!==Number.MAX_SAFE_INTEGER&&U?(m&&u.getAttribute("morphTarget"+w)!==m[I]&&u.setAttribute("morphTarget"+w,m[I]),h&&u.getAttribute("morphNormal"+w)!==h[I]&&u.setAttribute("morphNormal"+w,h[I]),r[w]=U,E+=U):(m&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),h&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}const S=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function i0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Yf=new qt,Kf=new kf,Zf=new Wm,Jf=new $f,Hc=[],Gc=[],Vc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function yr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Hc[r];if(s===void 0&&(s=new Float32Array(r),Hc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function go(n,e){let t=Gc[e];t===void 0&&(t=new Int32Array(e),Gc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function r0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function o0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function a0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function l0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;Xc.set(i),n.uniformMatrix2fv(this.addr,!1,Xc),pt(t,i)}}function c0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;Wc.set(i),n.uniformMatrix3fv(this.addr,!1,Wc),pt(t,i)}}function u0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;Vc.set(i),n.uniformMatrix4fv(this.addr,!1,Vc),pt(t,i)}}function f0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function d0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function h0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function p0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function m0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function v0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function x0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Yf,r)}function M0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Zf,r)}function y0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Jf,r)}function S0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Kf,r)}function E0(n){switch(n){case 5126:return r0;case 35664:return s0;case 35665:return o0;case 35666:return a0;case 35674:return l0;case 35675:return c0;case 35676:return u0;case 5124:case 35670:return f0;case 35667:case 35671:return d0;case 35668:case 35672:return h0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return S0}}function b0(n,e){n.uniform1fv(this.addr,e)}function T0(n,e){const t=yr(e,this.size,2);n.uniform2fv(this.addr,t)}function w0(n,e){const t=yr(e,this.size,3);n.uniform3fv(this.addr,t)}function A0(n,e){const t=yr(e,this.size,4);n.uniform4fv(this.addr,t)}function R0(n,e){const t=yr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function C0(n,e){const t=yr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function P0(n,e){const t=yr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function L0(n,e){n.uniform1iv(this.addr,e)}function U0(n,e){n.uniform2iv(this.addr,e)}function D0(n,e){n.uniform3iv(this.addr,e)}function I0(n,e){n.uniform4iv(this.addr,e)}function N0(n,e){n.uniform1uiv(this.addr,e)}function F0(n,e){n.uniform2uiv(this.addr,e)}function O0(n,e){n.uniform3uiv(this.addr,e)}function B0(n,e){n.uniform4uiv(this.addr,e)}function k0(n,e,t){const i=this.cache,r=e.length,s=go(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Yf,s[a])}function z0(n,e,t){const i=this.cache,r=e.length,s=go(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Zf,s[a])}function H0(n,e,t){const i=this.cache,r=e.length,s=go(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Jf,s[a])}function G0(n,e,t){const i=this.cache,r=e.length,s=go(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Kf,s[a])}function V0(n){switch(n){case 5126:return b0;case 35664:return T0;case 35665:return w0;case 35666:return A0;case 35674:return R0;case 35675:return C0;case 35676:return P0;case 5124:case 35670:return L0;case 35667:case 35671:return U0;case 35668:case 35672:return D0;case 35669:case 35673:return I0;case 5125:return N0;case 36294:return F0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return G0}}class W0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=E0(t.type)}}class X0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=V0(t.type)}}class $0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const la=/(\w+)(\])?(\[|\.)?/g;function $c(n,e){n.seq.push(e),n.map[e.id]=e}function j0(n,e,t){const i=n.name,r=i.length;for(la.lastIndex=0;;){const s=la.exec(i),a=la.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){$c(t,c===void 0?new W0(o,n,e):new X0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new $0(o),$c(t,f)),t=f}}}class Hs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);j0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function jc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let q0=0;function Y0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function K0(n){switch(n){case wn:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function qc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Y0(n.getShaderSource(e),a)}else return r}function Z0(n,e){const t=K0(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function J0(n,e){let t;switch(e){case cm:t="Linear";break;case um:t="Reinhard";break;case fm:t="OptimizedCineon";break;case dm:t="ACESFilmic";break;case hm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Q0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ur).join(`
`)}function ex(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ur(n){return n!==""}function Yc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(n){return n.replace(nx,ix)}function ix(n,e){const t=Ge[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ua(t)}const rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(n){return n.replace(rx,sx)}function sx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ox(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Hp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function ax(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case hr:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function cx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lf:e="ENVMAP_BLENDING_MULTIPLY";break;case am:e="ENVMAP_BLENDING_MIX";break;case lm:e="ENVMAP_BLENDING_ADD";break}return e}function ux(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fx(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ox(t),c=ax(t),u=lx(t),f=cx(t),d=ux(t),p=t.isWebGL2?"":Q0(t),v=ex(s),g=r.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[v].filter(Ur).join(`
`),m.length>0&&(m+=`
`),h=[p,v].filter(Ur).join(`
`),h.length>0&&(h+=`
`)):(m=[Jc(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),h=[p,Jc(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Vn?J0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,Z0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),a=Ua(a),a=Yc(a,t),a=Kc(a,t),o=Ua(o),o=Yc(o,t),o=Kc(o,t),a=Zc(a),o=Zc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=E+m+a,w=E+h+o,C=jc(r,r.VERTEX_SHADER,S),I=jc(r,r.FRAGMENT_SHADER,w);if(r.attachShader(g,C),r.attachShader(g,I),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const _=r.getProgramInfoLog(g).trim(),T=r.getShaderInfoLog(C).trim(),O=r.getShaderInfoLog(I).trim();let D=!0,P=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,I);else{const B=qc(r,C,"vertex"),H=qc(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+_+`
`+B+`
`+H)}else _!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_):(T===""||O==="")&&(P=!1);P&&(this.diagnostics={runnable:D,programLog:_,vertexShader:{log:T,prefix:m},fragmentShader:{log:O,prefix:h}})}r.deleteShader(C),r.deleteShader(I);let U;this.getUniforms=function(){return U===void 0&&(U=new Hs(r,g)),U};let G;return this.getAttributes=function(){return G===void 0&&(G=tx(r,g)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=q0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=I,this}let dx=0;class hx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new px(e),t.set(e,i)),i}}class px{constructor(e){this.id=dx++,this.code=e,this.usedTimes=0}}function mx(n,e,t,i,r,s,a){const o=new zf,l=new hx,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return _===1?"uv1":_===2?"uv2":_===3?"uv3":"uv"}function m(_,T,O,D,P){const B=D.fog,H=P.geometry,te=_.isMeshStandardMaterial?D.environment:null,X=(_.isMeshStandardMaterial?t:e).get(_.envMap||te),$=X&&X.mapping===ho?X.image.height:null,ce=v[_.type];_.precision!==null&&(p=r.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,we=ae!==void 0?ae.length:0;let he=0;H.morphAttributes.position!==void 0&&(he=1),H.morphAttributes.normal!==void 0&&(he=2),H.morphAttributes.color!==void 0&&(he=3);let Z,oe,ve,_e;if(ce){const et=Mn[ce];Z=et.vertexShader,oe=et.fragmentShader}else Z=_.vertexShader,oe=_.fragmentShader,l.update(_),ve=l.getVertexShaderID(_),_e=l.getFragmentShaderID(_);const b=n.getRenderTarget(),le=P.isInstancedMesh===!0,ne=!!_.map,q=!!_.matcap,xe=!!X,Pe=!!_.aoMap,y=!!_.lightMap,R=!!_.bumpMap,k=!!_.normalMap,ie=!!_.displacementMap,Y=!!_.emissiveMap,se=!!_.metalnessMap,fe=!!_.roughnessMap,de=_.clearcoat>0,pe=_.iridescence>0,M=_.sheen>0,x=_.transmission>0,N=de&&!!_.clearcoatMap,V=de&&!!_.clearcoatNormalMap,K=de&&!!_.clearcoatRoughnessMap,ue=pe&&!!_.iridescenceMap,ye=pe&&!!_.iridescenceThicknessMap,ge=M&&!!_.sheenColorMap,J=M&&!!_.sheenRoughnessMap,Se=!!_.specularMap,Te=!!_.specularColorMap,Ae=!!_.specularIntensityMap,Ee=x&&!!_.transmissionMap,Re=x&&!!_.thicknessMap,Ne=!!_.gradientMap,ze=!!_.alphaMap,at=_.alphaTest>0,F=!!_.extensions,Q=!!H.attributes.uv1,me=!!H.attributes.uv2,be=!!H.attributes.uv3;return{isWebGL2:u,shaderID:ce,shaderName:_.type,vertexShader:Z,fragmentShader:oe,defines:_.defines,customVertexShaderID:ve,customFragmentShaderID:_e,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,instancing:le,instancingColor:le&&P.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:b===null?n.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:wn,map:ne,matcap:q,envMap:xe,envMapMode:xe&&X.mapping,envMapCubeUVHeight:$,aoMap:Pe,lightMap:y,bumpMap:R,normalMap:k,displacementMap:d&&ie,emissiveMap:Y,normalMapObjectSpace:k&&_.normalMapType===Dm,normalMapTangentSpace:k&&_.normalMapType===Um,metalnessMap:se,roughnessMap:fe,clearcoat:de,clearcoatMap:N,clearcoatNormalMap:V,clearcoatRoughnessMap:K,iridescence:pe,iridescenceMap:ue,iridescenceThicknessMap:ye,sheen:M,sheenColorMap:ge,sheenRoughnessMap:J,specularMap:Se,specularColorMap:Te,specularIntensityMap:Ae,transmission:x,transmissionMap:Ee,thicknessMap:Re,gradientMap:Ne,opaque:_.transparent===!1&&_.blending===ar,alphaMap:ze,alphaTest:at,combine:_.combine,mapUv:ne&&g(_.map.channel),aoMapUv:Pe&&g(_.aoMap.channel),lightMapUv:y&&g(_.lightMap.channel),bumpMapUv:R&&g(_.bumpMap.channel),normalMapUv:k&&g(_.normalMap.channel),displacementMapUv:ie&&g(_.displacementMap.channel),emissiveMapUv:Y&&g(_.emissiveMap.channel),metalnessMapUv:se&&g(_.metalnessMap.channel),roughnessMapUv:fe&&g(_.roughnessMap.channel),clearcoatMapUv:N&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:V&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&g(_.sheenRoughnessMap.channel),specularMapUv:Se&&g(_.specularMap.channel),specularColorMapUv:Te&&g(_.specularColorMap.channel),specularIntensityMapUv:Ae&&g(_.specularIntensityMap.channel),transmissionMapUv:Ee&&g(_.transmissionMap.channel),thicknessMapUv:Re&&g(_.thicknessMap.channel),alphaMapUv:ze&&g(_.alphaMap.channel),vertexTangents:k&&!!H.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Q,vertexUv2s:me,vertexUv3s:be,pointsUvs:P.isPoints===!0&&!!H.attributes.uv&&(ne||ze),fog:!!B,useFog:_.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:P.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:he,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:_.toneMapped?n.toneMapping:Vn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===zn,flipSided:_.side===Bt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:F&&_.extensions.derivatives===!0,extensionFragDepth:F&&_.extensions.fragDepth===!0,extensionDrawBuffers:F&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:F&&_.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function h(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const O in _.defines)T.push(O),T.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(E(T,_),S(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function E(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function S(_,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),_.push(o.mask)}function w(_){const T=v[_.type];let O;if(T){const D=Mn[T];O=ig.clone(D.uniforms)}else O=_.uniforms;return O}function C(_,T){let O;for(let D=0,P=c.length;D<P;D++){const B=c[D];if(B.cacheKey===T){O=B,++O.usedTimes;break}}return O===void 0&&(O=new fx(n,T,_,s),c.push(O)),O}function I(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),_.destroy()}}function U(_){l.remove(_)}function G(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:w,acquireProgram:C,releaseProgram:I,releaseShaderCache:U,programs:c,dispose:G}}function gx(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function _x(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function eu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,p,v,g,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=g,h.group=m),e++,h}function o(f,d,p,v,g,m){const h=a(f,d,p,v,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,v,g,m){const h=a(f,d,p,v,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||_x),i.length>1&&i.sort(d||Qc),r.length>1&&r.sort(d||Qc)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function vx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new eu,n.set(i,[a])):r>=s.length?(a=new eu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function xx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new st};break;case"SpotLight":t={position:new j,direction:new j,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function Mx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yx=0;function Sx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ex(n,e){const t=new xx,i=Mx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new j);const s=new j,a=new yt,o=new yt;function l(u,f){let d=0,p=0,v=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let g=0,m=0,h=0,E=0,S=0,w=0,C=0,I=0,U=0,G=0;u.sort(Sx);const _=f===!0?Math.PI:1;for(let O=0,D=u.length;O<D;O++){const P=u[O],B=P.color,H=P.intensity,te=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=B.r*H*_,p+=B.g*H*_,v+=B.b*H*_;else if(P.isLightProbe)for(let $=0;$<9;$++)r.probe[$].addScaledVector(P.sh.coefficients[$],H);else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*_),P.castShadow){const ce=P.shadow,ae=i.get(P);ae.shadowBias=ce.bias,ae.shadowNormalBias=ce.normalBias,ae.shadowRadius=ce.radius,ae.shadowMapSize=ce.mapSize,r.directionalShadow[g]=ae,r.directionalShadowMap[g]=X,r.directionalShadowMatrix[g]=P.shadow.matrix,w++}r.directional[g]=$,g++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(B).multiplyScalar(H*_),$.distance=te,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,r.spot[h]=$;const ce=P.shadow;if(P.map&&(r.spotLightMap[U]=P.map,U++,ce.updateMatrices(P),P.castShadow&&G++),r.spotLightMatrix[h]=ce.matrix,P.castShadow){const ae=i.get(P);ae.shadowBias=ce.bias,ae.shadowNormalBias=ce.normalBias,ae.shadowRadius=ce.radius,ae.shadowMapSize=ce.mapSize,r.spotShadow[h]=ae,r.spotShadowMap[h]=X,I++}h++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(B).multiplyScalar(H),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),r.rectArea[E]=$,E++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*_),$.distance=P.distance,$.decay=P.decay,P.castShadow){const ce=P.shadow,ae=i.get(P);ae.shadowBias=ce.bias,ae.shadowNormalBias=ce.normalBias,ae.shadowRadius=ce.radius,ae.shadowMapSize=ce.mapSize,ae.shadowCameraNear=ce.camera.near,ae.shadowCameraFar=ce.camera.far,r.pointShadow[m]=ae,r.pointShadowMap[m]=X,r.pointShadowMatrix[m]=P.shadow.matrix,C++}r.point[m]=$,m++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(H*_),$.groundColor.copy(P.groundColor).multiplyScalar(H*_),r.hemi[S]=$,S++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==h||T.rectAreaLength!==E||T.hemiLength!==S||T.numDirectionalShadows!==w||T.numPointShadows!==C||T.numSpotShadows!==I||T.numSpotMaps!==U)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=E,r.point.length=m,r.hemi.length=S,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=I+U-G,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=G,T.directionalLength=g,T.pointLength=m,T.spotLength=h,T.rectAreaLength=E,T.hemiLength=S,T.numDirectionalShadows=w,T.numPointShadows=C,T.numSpotShadows=I,T.numSpotMaps=U,r.version=yx++)}function c(u,f){let d=0,p=0,v=0,g=0,m=0;const h=f.matrixWorldInverse;for(let E=0,S=u.length;E<S;E++){const w=u[E];if(w.isDirectionalLight){const C=r.directional[d];C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),d++}else if(w.isSpotLight){const C=r.spot[v];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(h),C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),v++}else if(w.isRectAreaLight){const C=r.rectArea[g];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(h),o.identity(),a.copy(w.matrixWorld),a.premultiply(h),o.extractRotation(a),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(h),p++}else if(w.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function tu(n,e){const t=new Ex(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function bx(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new tu(n,e),t.set(s,[l])):a>=o.length?(l=new tu(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Tx extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wx extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ax=`void main() {
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
}`;function Cx(n,e,t){let i=new jf;const r=new ot,s=new ot,a=new Mt,o=new Tx({depthPacking:Lm}),l=new wx,c={},u=t.maxTextureSize,f={[ri]:Bt,[Bt]:ri,[zn]:zn},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Ax,fragmentShader:Rx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new ai;v.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new yn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rf;let h=this.type;this.render=function(C,I,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const G=n.getRenderTarget(),_=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),O=n.state;O.setBlending(ni),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const D=h!==Fn&&this.type===Fn,P=h===Fn&&this.type!==Fn;for(let B=0,H=C.length;B<H;B++){const te=C[B],X=te.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const $=X.getFrameExtents();if(r.multiply($),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,X.mapSize.y=s.y)),X.map===null||D===!0||P===!0){const ae=this.type!==Fn?{minFilter:Dt,magFilter:Dt}:{};X.map!==null&&X.map.dispose(),X.map=new Pi(r.x,r.y,ae),X.map.texture.name=te.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const ce=X.getViewportCount();for(let ae=0;ae<ce;ae++){const we=X.getViewport(ae);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),O.viewport(a),X.updateMatrices(te,ae),i=X.getFrustum(),w(I,U,X.camera,te,this.type)}X.isPointLightShadow!==!0&&this.type===Fn&&E(X,U),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(G,_,T)};function E(C,I){const U=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(I,null,U,d,g,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(I,null,U,p,g,null)}function S(C,I,U,G){let _=null;const T=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)_=T;else if(_=U.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const O=_.uuid,D=I.uuid;let P=c[O];P===void 0&&(P={},c[O]=P);let B=P[D];B===void 0&&(B=_.clone(),P[D]=B),_=B}if(_.visible=I.visible,_.wireframe=I.wireframe,G===Fn?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:f[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=n.properties.get(_);O.light=U}return _}function w(C,I,U,G,_){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Fn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const D=e.update(C),P=C.material;if(Array.isArray(P)){const B=D.groups;for(let H=0,te=B.length;H<te;H++){const X=B[H],$=P[X.materialIndex];if($&&$.visible){const ce=S(C,$,G,_);n.renderBufferDirect(U,null,D,ce,C,X)}}}else if(P.visible){const B=S(C,P,G,_);n.renderBufferDirect(U,null,D,B,C,null)}}const O=C.children;for(let D=0,P=O.length;D<P;D++)w(O[D],I,U,G,_)}}function Px(n,e,t){const i=t.isWebGL2;function r(){let F=!1;const Q=new Mt;let me=null;const be=new Mt(0,0,0,0);return{setMask:function(Ce){me!==Ce&&!F&&(n.colorMask(Ce,Ce,Ce,Ce),me=Ce)},setLocked:function(Ce){F=Ce},setClear:function(Ce,et,tt,St,Xn){Xn===!0&&(Ce*=St,et*=St,tt*=St),Q.set(Ce,et,tt,St),be.equals(Q)===!1&&(n.clearColor(Ce,et,tt,St),be.copy(Q))},reset:function(){F=!1,me=null,be.set(-1,0,0,0)}}}function s(){let F=!1,Q=null,me=null,be=null;return{setTest:function(Ce){Ce?b(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(Ce){Q!==Ce&&!F&&(n.depthMask(Ce),Q=Ce)},setFunc:function(Ce){if(me!==Ce){switch(Ce){case em:n.depthFunc(n.NEVER);break;case tm:n.depthFunc(n.ALWAYS);break;case nm:n.depthFunc(n.LESS);break;case Ta:n.depthFunc(n.LEQUAL);break;case im:n.depthFunc(n.EQUAL);break;case rm:n.depthFunc(n.GEQUAL);break;case sm:n.depthFunc(n.GREATER);break;case om:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=Ce}},setLocked:function(Ce){F=Ce},setClear:function(Ce){be!==Ce&&(n.clearDepth(Ce),be=Ce)},reset:function(){F=!1,Q=null,me=null,be=null}}}function a(){let F=!1,Q=null,me=null,be=null,Ce=null,et=null,tt=null,St=null,Xn=null;return{setTest:function(ct){F||(ct?b(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(ct){Q!==ct&&!F&&(n.stencilMask(ct),Q=ct)},setFunc:function(ct,Kt,mn){(me!==ct||be!==Kt||Ce!==mn)&&(n.stencilFunc(ct,Kt,mn),me=ct,be=Kt,Ce=mn)},setOp:function(ct,Kt,mn){(et!==ct||tt!==Kt||St!==mn)&&(n.stencilOp(ct,Kt,mn),et=ct,tt=Kt,St=mn)},setLocked:function(ct){F=ct},setClear:function(ct){Xn!==ct&&(n.clearStencil(ct),Xn=ct)},reset:function(){F=!1,Q=null,me=null,be=null,Ce=null,et=null,tt=null,St=null,Xn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},p={},v=new WeakMap,g=[],m=null,h=!1,E=null,S=null,w=null,C=null,I=null,U=null,G=null,_=!1,T=null,O=null,D=null,P=null,B=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,X=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),te=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),te=X>=2);let ce=null,ae={};const we=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),Z=new Mt().fromArray(we),oe=new Mt().fromArray(he);function ve(F,Q,me,be){const Ce=new Uint8Array(4),et=n.createTexture();n.bindTexture(F,et),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<me;tt++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(Q,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Q+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return et}const _e={};_e[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_e[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),b(n.DEPTH_TEST),l.setFunc(Ta),ie(!1),Y(zl),b(n.CULL_FACE),R(ni);function b(F){d[F]!==!0&&(n.enable(F),d[F]=!0)}function le(F){d[F]!==!1&&(n.disable(F),d[F]=!1)}function ne(F,Q){return p[F]!==Q?(n.bindFramebuffer(F,Q),p[F]=Q,i&&(F===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Q),F===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Q)),!0):!1}function q(F,Q){let me=g,be=!1;if(F)if(me=v.get(Q),me===void 0&&(me=[],v.set(Q,me)),F.isWebGLMultipleRenderTargets){const Ce=F.texture;if(me.length!==Ce.length||me[0]!==n.COLOR_ATTACHMENT0){for(let et=0,tt=Ce.length;et<tt;et++)me[et]=n.COLOR_ATTACHMENT0+et;me.length=Ce.length,be=!0}}else me[0]!==n.COLOR_ATTACHMENT0&&(me[0]=n.COLOR_ATTACHMENT0,be=!0);else me[0]!==n.BACK&&(me[0]=n.BACK,be=!0);be&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function xe(F){return m!==F?(n.useProgram(F),m=F,!0):!1}const Pe={[Zi]:n.FUNC_ADD,[Vp]:n.FUNC_SUBTRACT,[Wp]:n.FUNC_REVERSE_SUBTRACT};if(i)Pe[Wl]=n.MIN,Pe[Xl]=n.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Pe[Wl]=F.MIN_EXT,Pe[Xl]=F.MAX_EXT)}const y={[Xp]:n.ZERO,[$p]:n.ONE,[jp]:n.SRC_COLOR,[Cf]:n.SRC_ALPHA,[Qp]:n.SRC_ALPHA_SATURATE,[Zp]:n.DST_COLOR,[Yp]:n.DST_ALPHA,[qp]:n.ONE_MINUS_SRC_COLOR,[Pf]:n.ONE_MINUS_SRC_ALPHA,[Jp]:n.ONE_MINUS_DST_COLOR,[Kp]:n.ONE_MINUS_DST_ALPHA};function R(F,Q,me,be,Ce,et,tt,St){if(F===ni){h===!0&&(le(n.BLEND),h=!1);return}if(h===!1&&(b(n.BLEND),h=!0),F!==Gp){if(F!==E||St!==_){if((S!==Zi||I!==Zi)&&(n.blendEquation(n.FUNC_ADD),S=Zi,I=Zi),St)switch(F){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hl:n.blendFunc(n.ONE,n.ONE);break;case Gl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,C=null,U=null,G=null,E=F,_=St}return}Ce=Ce||Q,et=et||me,tt=tt||be,(Q!==S||Ce!==I)&&(n.blendEquationSeparate(Pe[Q],Pe[Ce]),S=Q,I=Ce),(me!==w||be!==C||et!==U||tt!==G)&&(n.blendFuncSeparate(y[me],y[be],y[et],y[tt]),w=me,C=be,U=et,G=tt),E=F,_=!1}function k(F,Q){F.side===zn?le(n.CULL_FACE):b(n.CULL_FACE);let me=F.side===Bt;Q&&(me=!me),ie(me),F.blending===ar&&F.transparent===!1?R(ni):R(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const be=F.stencilWrite;c.setTest(be),be&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?b(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(F){T!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),T=F)}function Y(F){F!==kp?(b(n.CULL_FACE),F!==O&&(F===zl?n.cullFace(n.BACK):F===zp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),O=F}function se(F){F!==D&&(te&&n.lineWidth(F),D=F)}function fe(F,Q,me){F?(b(n.POLYGON_OFFSET_FILL),(P!==Q||B!==me)&&(n.polygonOffset(Q,me),P=Q,B=me)):le(n.POLYGON_OFFSET_FILL)}function de(F){F?b(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function pe(F){F===void 0&&(F=n.TEXTURE0+H-1),ce!==F&&(n.activeTexture(F),ce=F)}function M(F,Q,me){me===void 0&&(ce===null?me=n.TEXTURE0+H-1:me=ce);let be=ae[me];be===void 0&&(be={type:void 0,texture:void 0},ae[me]=be),(be.type!==F||be.texture!==Q)&&(ce!==me&&(n.activeTexture(me),ce=me),n.bindTexture(F,Q||_e[F]),be.type=F,be.texture=Q)}function x(){const F=ae[ce];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(F){Z.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Z.copy(F))}function Re(F){oe.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),oe.copy(F))}function Ne(F,Q){let me=f.get(Q);me===void 0&&(me=new WeakMap,f.set(Q,me));let be=me.get(F);be===void 0&&(be=n.getUniformBlockIndex(Q,F.name),me.set(F,be))}function ze(F,Q){const be=f.get(Q).get(F);u.get(Q)!==be&&(n.uniformBlockBinding(Q,be,F.__bindingPointIndex),u.set(Q,be))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ce=null,ae={},p={},v=new WeakMap,g=[],m=null,h=!1,E=null,S=null,w=null,C=null,I=null,U=null,G=null,_=!1,T=null,O=null,D=null,P=null,B=null,Z.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:b,disable:le,bindFramebuffer:ne,drawBuffers:q,useProgram:xe,setBlending:R,setMaterial:k,setFlipSided:ie,setCullFace:Y,setLineWidth:se,setPolygonOffset:fe,setScissorTest:de,activeTexture:pe,bindTexture:M,unbindTexture:x,compressedTexImage2D:N,compressedTexImage3D:V,texImage2D:Te,texImage3D:Ae,updateUBOMapping:Ne,uniformBlockBinding:ze,texStorage2D:J,texStorage3D:Se,texSubImage2D:K,texSubImage3D:ue,compressedTexSubImage2D:ye,compressedTexSubImage3D:ge,scissor:Ee,viewport:Re,reset:at}}function Lx(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,x){return h?new OffscreenCanvas(M,x):Qs("canvas")}function S(M,x,N,V){let K=1;if((M.width>V||M.height>V)&&(K=V/Math.max(M.width,M.height)),K<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ue=x?Fm:Math.floor,ye=ue(K*M.width),ge=ue(K*M.height);g===void 0&&(g=E(ye,ge));const J=N?E(ye,ge):g;return J.width=ye,J.height=ge,J.getContext("2d").drawImage(M,0,0,ye,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ye+"x"+ge+")."),J}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function w(M){return vc(M.width)&&vc(M.height)}function C(M){return o?!1:M.wrapS!==cn||M.wrapT!==cn||M.minFilter!==Dt&&M.minFilter!==Jt}function I(M,x){return M.generateMipmaps&&x&&M.minFilter!==Dt&&M.minFilter!==Jt}function U(M){n.generateMipmap(M)}function G(M,x,N,V,K=!1){if(o===!1)return x;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ue=x;return x===n.RED&&(N===n.FLOAT&&(ue=n.R32F),N===n.HALF_FLOAT&&(ue=n.R16F),N===n.UNSIGNED_BYTE&&(ue=n.R8)),x===n.RG&&(N===n.FLOAT&&(ue=n.RG32F),N===n.HALF_FLOAT&&(ue=n.RG16F),N===n.UNSIGNED_BYTE&&(ue=n.RG8)),x===n.RGBA&&(N===n.FLOAT&&(ue=n.RGBA32F),N===n.HALF_FLOAT&&(ue=n.RGBA16F),N===n.UNSIGNED_BYTE&&(ue=V===ke&&K===!1?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)),(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function _(M,x,N){return I(M,N)===!0||M.isFramebufferTexture&&M.minFilter!==Dt&&M.minFilter!==Jt?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function T(M){return M===Dt||M===$l||M===Io?n.NEAREST:n.LINEAR}function O(M){const x=M.target;x.removeEventListener("dispose",O),P(x),x.isVideoTexture&&v.delete(x)}function D(M){const x=M.target;x.removeEventListener("dispose",D),H(x)}function P(M){const x=i.get(M);if(x.__webglInit===void 0)return;const N=M.source,V=m.get(N);if(V){const K=V[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&B(M),Object.keys(V).length===0&&m.delete(N)}i.remove(M)}function B(M){const x=i.get(M);n.deleteTexture(x.__webglTexture);const N=M.source,V=m.get(N);delete V[x.__cacheKey],a.memory.textures--}function H(M){const x=M.texture,N=i.get(M),V=i.get(x);if(V.__webglTexture!==void 0&&(n.deleteTexture(V.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)n.deleteFramebuffer(N.__webglFramebuffer[K]),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[K]);else{if(n.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let K=0;K<N.__webglColorRenderbuffer.length;K++)N.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[K]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let K=0,ue=x.length;K<ue;K++){const ye=i.get(x[K]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),a.memory.textures--),i.remove(x[K])}i.remove(x),i.remove(M)}let te=0;function X(){te=0}function $(){const M=te;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),te+=1,M}function ce(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function ae(M,x){const N=i.get(M);if(M.isVideoTexture&&de(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){const V=M.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(N,M,x);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function we(M,x){const N=i.get(M);if(M.version>0&&N.__version!==M.version){le(N,M,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function he(M,x){const N=i.get(M);if(M.version>0&&N.__version!==M.version){le(N,M,x);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function Z(M,x){const N=i.get(M);if(M.version>0&&N.__version!==M.version){ne(N,M,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}const oe={[Ra]:n.REPEAT,[cn]:n.CLAMP_TO_EDGE,[Ca]:n.MIRRORED_REPEAT},ve={[Dt]:n.NEAREST,[$l]:n.NEAREST_MIPMAP_NEAREST,[Io]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[pm]:n.LINEAR_MIPMAP_NEAREST,[Kr]:n.LINEAR_MIPMAP_LINEAR};function _e(M,x,N){if(N?(n.texParameteri(M,n.TEXTURE_WRAP_S,oe[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,oe[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,oe[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ve[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ve[x.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==cn||x.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,T(x.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==Dt&&x.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Dt||x.minFilter!==Io&&x.minFilter!==Kr||x.type===yi&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Zr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(M,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function b(M,x){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",O));const V=x.source;let K=m.get(V);K===void 0&&(K={},m.set(V,K));const ue=ce(x);if(ue!==M.__cacheKey){K[ue]===void 0&&(K[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[ue].usedTimes++;const ye=K[M.__cacheKey];ye!==void 0&&(K[M.__cacheKey].usedTimes--,ye.usedTimes===0&&B(x)),M.__cacheKey=ue,M.__webglTexture=K[ue].texture}return N}function le(M,x,N){let V=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=n.TEXTURE_3D);const K=b(M,x),ue=x.source;t.bindTexture(V,M.__webglTexture,n.TEXTURE0+N);const ye=i.get(ue);if(ue.version!==ye.__version||K===!0){t.activeTexture(n.TEXTURE0+N),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ge=C(x)&&w(x.image)===!1;let J=S(x.image,ge,!1,u);J=pe(x,J);const Se=w(J)||o,Te=s.convert(x.format,x.colorSpace);let Ae=s.convert(x.type),Ee=G(x.internalFormat,Te,Ae,x.colorSpace);_e(V,x,Se);let Re;const Ne=x.mipmaps,ze=o&&x.isVideoTexture!==!0,at=ye.__version===void 0||K===!0,F=_(x,J,Se);if(x.isDepthTexture)Ee=n.DEPTH_COMPONENT,o?x.type===yi?Ee=n.DEPTH_COMPONENT32F:x.type===Mi?Ee=n.DEPTH_COMPONENT24:x.type===lr?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:x.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===bi&&Ee===n.DEPTH_COMPONENT&&x.type!==Df&&x.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Mi,Ae=s.convert(x.type)),x.format===pr&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,x.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=lr,Ae=s.convert(x.type))),at&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ee,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ee,J.width,J.height,0,Te,Ae,null));else if(x.isDataTexture)if(Ne.length>0&&Se){ze&&at&&t.texStorage2D(n.TEXTURE_2D,F,Ee,Ne[0].width,Ne[0].height);for(let Q=0,me=Ne.length;Q<me;Q++)Re=Ne[Q],ze?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Re.width,Re.height,Te,Ae,Re.data):t.texImage2D(n.TEXTURE_2D,Q,Ee,Re.width,Re.height,0,Te,Ae,Re.data);x.generateMipmaps=!1}else ze?(at&&t.texStorage2D(n.TEXTURE_2D,F,Ee,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Te,Ae,J.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,J.width,J.height,0,Te,Ae,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ze&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,F,Ee,Ne[0].width,Ne[0].height,J.depth);for(let Q=0,me=Ne.length;Q<me;Q++)Re=Ne[Q],x.format!==un?Te!==null?ze?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Re.width,Re.height,J.depth,Te,Re.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ee,Re.width,Re.height,J.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Re.width,Re.height,J.depth,Te,Ae,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ee,Re.width,Re.height,J.depth,0,Te,Ae,Re.data)}else{ze&&at&&t.texStorage2D(n.TEXTURE_2D,F,Ee,Ne[0].width,Ne[0].height);for(let Q=0,me=Ne.length;Q<me;Q++)Re=Ne[Q],x.format!==un?Te!==null?ze?t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Re.width,Re.height,Te,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Ee,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Re.width,Re.height,Te,Ae,Re.data):t.texImage2D(n.TEXTURE_2D,Q,Ee,Re.width,Re.height,0,Te,Ae,Re.data)}else if(x.isDataArrayTexture)ze?(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,F,Ee,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Te,Ae,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,J.width,J.height,J.depth,0,Te,Ae,J.data);else if(x.isData3DTexture)ze?(at&&t.texStorage3D(n.TEXTURE_3D,F,Ee,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Te,Ae,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,J.width,J.height,J.depth,0,Te,Ae,J.data);else if(x.isFramebufferTexture){if(at)if(ze)t.texStorage2D(n.TEXTURE_2D,F,Ee,J.width,J.height);else{let Q=J.width,me=J.height;for(let be=0;be<F;be++)t.texImage2D(n.TEXTURE_2D,be,Ee,Q,me,0,Te,Ae,null),Q>>=1,me>>=1}}else if(Ne.length>0&&Se){ze&&at&&t.texStorage2D(n.TEXTURE_2D,F,Ee,Ne[0].width,Ne[0].height);for(let Q=0,me=Ne.length;Q<me;Q++)Re=Ne[Q],ze?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Te,Ae,Re):t.texImage2D(n.TEXTURE_2D,Q,Ee,Te,Ae,Re);x.generateMipmaps=!1}else ze?(at&&t.texStorage2D(n.TEXTURE_2D,F,Ee,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Ae,J)):t.texImage2D(n.TEXTURE_2D,0,Ee,Te,Ae,J);I(x,Se)&&U(V),ye.__version=ue.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function ne(M,x,N){if(x.image.length!==6)return;const V=b(M,x),K=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+N);const ue=i.get(K);if(K.version!==ue.__version||V===!0){t.activeTexture(n.TEXTURE0+N),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ye=x.isCompressedTexture||x.image[0].isCompressedTexture,ge=x.image[0]&&x.image[0].isDataTexture,J=[];for(let Q=0;Q<6;Q++)!ye&&!ge?J[Q]=S(x.image[Q],!1,!0,c):J[Q]=ge?x.image[Q].image:x.image[Q],J[Q]=pe(x,J[Q]);const Se=J[0],Te=w(Se)||o,Ae=s.convert(x.format,x.colorSpace),Ee=s.convert(x.type),Re=G(x.internalFormat,Ae,Ee,x.colorSpace),Ne=o&&x.isVideoTexture!==!0,ze=ue.__version===void 0||V===!0;let at=_(x,Se,Te);_e(n.TEXTURE_CUBE_MAP,x,Te);let F;if(ye){Ne&&ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,at,Re,Se.width,Se.height);for(let Q=0;Q<6;Q++){F=J[Q].mipmaps;for(let me=0;me<F.length;me++){const be=F[me];x.format!==un?Ae!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,be.width,be.height,Ae,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,Re,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,be.width,be.height,Ae,Ee,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,Re,be.width,be.height,0,Ae,Ee,be.data)}}}else{F=x.mipmaps,Ne&&ze&&(F.length>0&&at++,t.texStorage2D(n.TEXTURE_CUBE_MAP,at,Re,J[0].width,J[0].height));for(let Q=0;Q<6;Q++)if(ge){Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,J[Q].width,J[Q].height,Ae,Ee,J[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Re,J[Q].width,J[Q].height,0,Ae,Ee,J[Q].data);for(let me=0;me<F.length;me++){const Ce=F[me].image[Q].image;Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Ce.width,Ce.height,Ae,Ee,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,Re,Ce.width,Ce.height,0,Ae,Ee,Ce.data)}}else{Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae,Ee,J[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Re,Ae,Ee,J[Q]);for(let me=0;me<F.length;me++){const be=F[me];Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Ae,Ee,be.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,Re,Ae,Ee,be.image[Q])}}}I(x,Te)&&U(n.TEXTURE_CUBE_MAP),ue.__version=K.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function q(M,x,N,V,K){const ue=s.convert(N.format,N.colorSpace),ye=s.convert(N.type),ge=G(N.internalFormat,ue,ye,N.colorSpace);i.get(x).__hasExternalTextures||(K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,0,ge,x.width,x.height,x.depth,0,ue,ye,null):t.texImage2D(K,0,ge,x.width,x.height,0,ue,ye,null)),t.bindFramebuffer(n.FRAMEBUFFER,M),fe(x)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,K,i.get(N).__webglTexture,0,se(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,K,i.get(N).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(M,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let V=n.DEPTH_COMPONENT16;if(N||fe(x)){const K=x.depthTexture;K&&K.isDepthTexture&&(K.type===yi?V=n.DEPTH_COMPONENT32F:K.type===Mi&&(V=n.DEPTH_COMPONENT24));const ue=se(x);fe(x)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,V,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,V,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,V,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){const V=se(x);N&&fe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,x.width,x.height):fe(x)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const V=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let K=0;K<V.length;K++){const ue=V[K],ye=s.convert(ue.format,ue.colorSpace),ge=s.convert(ue.type),J=G(ue.internalFormat,ye,ge,ue.colorSpace),Se=se(x);N&&fe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,J,x.width,x.height):fe(x)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,J,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,J,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ae(x.depthTexture,0);const V=i.get(x.depthTexture).__webglTexture,K=se(x);if(x.depthTexture.format===bi)fe(x)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(x.depthTexture.format===pr)fe(x)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function y(M){const x=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Pe(x.__webglFramebuffer,M)}else if(N){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]=n.createRenderbuffer(),xe(x.__webglDepthbuffer[V],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),xe(x.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(M,x,N){const V=i.get(M);x!==void 0&&q(V.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),N!==void 0&&y(M)}function k(M){const x=M.texture,N=i.get(M),V=i.get(x);M.addEventListener("dispose",D),M.isWebGLMultipleRenderTargets!==!0&&(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=x.version,a.memory.textures++);const K=M.isWebGLCubeRenderTarget===!0,ue=M.isWebGLMultipleRenderTargets===!0,ye=w(M)||o;if(K){N.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)N.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(N.__webglFramebuffer=n.createFramebuffer(),ue)if(r.drawBuffers){const ge=M.texture;for(let J=0,Se=ge.length;J<Se;J++){const Te=i.get(ge[J]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&fe(M)===!1){const ge=ue?x:[x];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let J=0;J<ge.length;J++){const Se=ge[J];N.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[J]);const Te=s.convert(Se.format,Se.colorSpace),Ae=s.convert(Se.type),Ee=G(Se.internalFormat,Te,Ae,Se.colorSpace,M.isXRRenderTarget===!0),Re=se(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Ee,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,N.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),_e(n.TEXTURE_CUBE_MAP,x,ye);for(let ge=0;ge<6;ge++)q(N.__webglFramebuffer[ge],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge);I(x,ye)&&U(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const ge=M.texture;for(let J=0,Se=ge.length;J<Se;J++){const Te=ge[J],Ae=i.get(Te);t.bindTexture(n.TEXTURE_2D,Ae.__webglTexture),_e(n.TEXTURE_2D,Te,ye),q(N.__webglFramebuffer,M,Te,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D),I(Te,ye)&&U(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?ge=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,V.__webglTexture),_e(ge,x,ye),q(N.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,ge),I(x,ye)&&U(ge),t.unbindTexture()}M.depthBuffer&&y(M)}function ie(M){const x=w(M)||o,N=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let V=0,K=N.length;V<K;V++){const ue=N[V];if(I(ue,x)){const ye=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ge=i.get(ue).__webglTexture;t.bindTexture(ye,ge),U(ye),t.unbindTexture()}}}function Y(M){if(o&&M.samples>0&&fe(M)===!1){const x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],N=M.width,V=M.height;let K=n.COLOR_BUFFER_BIT;const ue=[],ye=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(M),J=M.isWebGLMultipleRenderTargets===!0;if(J)for(let Se=0;Se<x.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Se=0;Se<x.length;Se++){ue.push(n.COLOR_ATTACHMENT0+Se),M.depthBuffer&&ue.push(ye);const Te=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Te===!1&&(M.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),J&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Se]),Te===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ye]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ye])),J){const Ae=i.get(x[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,N,V,0,0,N,V,K,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let Se=0;Se<x.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Se]);const Te=i.get(x[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function se(M){return Math.min(f,M.samples)}function fe(M){const x=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function de(M){const x=a.render.frame;v.get(M)!==x&&(v.set(M,x),M.update())}function pe(M,x){const N=M.colorSpace,V=M.format,K=M.type;return M.isCompressedTexture===!0||M.format===Pa||N!==wn&&N!==wi&&(N===ke?o===!1?e.has("EXT_sRGB")===!0&&V===un?(M.format=Pa,M.minFilter=Jt,M.generateMipmaps=!1):x=Of.sRGBToLinear(x):(V!==un||K!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}this.allocateTextureUnit=$,this.resetTextureUnits=X,this.setTexture2D=ae,this.setTexture2DArray=we,this.setTexture3D=he,this.setTextureCube=Z,this.rebindTextures=R,this.setupRenderTarget=k,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=q,this.useMultisampledRTT=fe}function Ux(n,e,t){const i=t.isWebGL2;function r(s,a=wi){let o;if(s===Ci)return n.UNSIGNED_BYTE;if(s===vm)return n.UNSIGNED_SHORT_4_4_4_4;if(s===xm)return n.UNSIGNED_SHORT_5_5_5_1;if(s===mm)return n.BYTE;if(s===gm)return n.SHORT;if(s===Df)return n.UNSIGNED_SHORT;if(s===_m)return n.INT;if(s===Mi)return n.UNSIGNED_INT;if(s===yi)return n.FLOAT;if(s===Zr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Mm)return n.ALPHA;if(s===un)return n.RGBA;if(s===ym)return n.LUMINANCE;if(s===Sm)return n.LUMINANCE_ALPHA;if(s===bi)return n.DEPTH_COMPONENT;if(s===pr)return n.DEPTH_STENCIL;if(s===Pa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Em)return n.RED;if(s===bm)return n.RED_INTEGER;if(s===Tm)return n.RG;if(s===wm)return n.RG_INTEGER;if(s===Am)return n.RGBA_INTEGER;if(s===No||s===Fo||s===Oo||s===Bo)if(a===ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===No)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===No)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jl||s===ql||s===Yl||s===Kl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===jl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ql)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zl||s===Jl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Zl)return a===ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Jl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ql||s===ec||s===tc||s===nc||s===ic||s===rc||s===sc||s===oc||s===ac||s===lc||s===cc||s===uc||s===fc||s===dc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ql)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ec)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ic)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===oc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ac)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===uc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ko)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ko)return a===ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Cm||s===hc||s===pc||s===mc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ko)return o.COMPRESSED_RED_RGTC1_EXT;if(s===hc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===lr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Dx extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Is extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ix={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ix)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Is;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Nx extends qt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:bi,u!==bi&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===bi&&(i=Mi),i===void 0&&u===pr&&(i=lr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1}}class Fx extends Mr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,v=null;const g=t.getContextAttributes();let m=null,h=null;const E=[],S=[],w=new Set,C=new Map,I=new Qt;I.layers.enable(1),I.viewport=new Mt;const U=new Qt;U.layers.enable(2),U.viewport=new Mt;const G=[I,U],_=new Dx;_.layers.enable(1),_.layers.enable(2);let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=E[Z];return oe===void 0&&(oe=new ca,E[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=E[Z];return oe===void 0&&(oe=new ca,E[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=E[Z];return oe===void 0&&(oe=new ca,E[Z]=oe),oe.getHandSpace()};function D(Z){const oe=S.indexOf(Z.inputSource);if(oe===-1)return;const ve=E[oe];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function P(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",B);for(let Z=0;Z<E.length;Z++){const oe=S[Z];oe!==null&&(S[Z]=null,E[Z].disconnect(oe))}T=null,O=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,he.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",P),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:p}),h=new Pi(p.framebufferWidth,p.framebufferHeight,{format:un,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let oe=null,ve=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=g.stencil?pr:bi,ve=g.stencil?lr:Mi);const b={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(b),r.updateRenderState({layers:[d]}),h=new Pi(d.textureWidth,d.textureHeight,{format:un,type:Ci,depthTexture:new Nx(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const le=e.properties.get(h);le.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(Z){for(let oe=0;oe<Z.removed.length;oe++){const ve=Z.removed[oe],_e=S.indexOf(ve);_e>=0&&(S[_e]=null,E[_e].disconnect(ve))}for(let oe=0;oe<Z.added.length;oe++){const ve=Z.added[oe];let _e=S.indexOf(ve);if(_e===-1){for(let le=0;le<E.length;le++)if(le>=S.length){S.push(ve),_e=le;break}else if(S[le]===null){S[le]=ve,_e=le;break}if(_e===-1)break}const b=E[_e];b&&b.connect(ve)}}const H=new j,te=new j;function X(Z,oe,ve){H.setFromMatrixPosition(oe.matrixWorld),te.setFromMatrixPosition(ve.matrixWorld);const _e=H.distanceTo(te),b=oe.projectionMatrix.elements,le=ve.projectionMatrix.elements,ne=b[14]/(b[10]-1),q=b[14]/(b[10]+1),xe=(b[9]+1)/b[5],Pe=(b[9]-1)/b[5],y=(b[8]-1)/b[0],R=(le[8]+1)/le[0],k=ne*y,ie=ne*R,Y=_e/(-y+R),se=Y*-y;oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(se),Z.translateZ(Y),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const fe=ne+Y,de=q+Y,pe=k-se,M=ie+(_e-se),x=xe*q/de*fe,N=Pe*q/de*fe;Z.projectionMatrix.makePerspective(pe,M,x,N,fe,de),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function $(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;_.near=U.near=I.near=Z.near,_.far=U.far=I.far=Z.far,(T!==_.near||O!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,O=_.far);const oe=Z.parent,ve=_.cameras;$(_,oe);for(let _e=0;_e<ve.length;_e++)$(ve[_e],oe);ve.length===2?X(_,I,U):_.projectionMatrix.copy(I.projectionMatrix),ce(Z,_,oe)};function ce(Z,oe,ve){ve===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0);const _e=Z.children;for(let b=0,le=_e.length;b<le;b++)_e[b].updateMatrixWorld(!0);Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=La*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.getPlanes=function(){return w};let ae=null;function we(Z,oe){if(u=oe.getViewerPose(c||a),v=oe,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let _e=!1;ve.length!==_.cameras.length&&(_.cameras.length=0,_e=!0);for(let b=0;b<ve.length;b++){const le=ve[b];let ne=null;if(p!==null)ne=p.getViewport(le);else{const xe=f.getViewSubImage(d,le);ne=xe.viewport,b===0&&(e.setRenderTargetTextures(h,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(h))}let q=G[b];q===void 0&&(q=new Qt,q.layers.enable(b),q.viewport=new Mt,G[b]=q),q.matrix.fromArray(le.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(le.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(ne.x,ne.y,ne.width,ne.height),b===0&&(_.matrix.copy(q.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),_e===!0&&_.cameras.push(q)}}for(let ve=0;ve<E.length;ve++){const _e=S[ve],b=E[ve];_e!==null&&b!==void 0&&b.update(_e,oe,c||a)}if(ae&&ae(Z,oe),oe.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:oe.detectedPlanes});let ve=null;for(const _e of w)oe.detectedPlanes.has(_e)||(ve===null&&(ve=[]),ve.push(_e));if(ve!==null)for(const _e of ve)w.delete(_e),C.delete(_e),i.dispatchEvent({type:"planeremoved",data:_e});for(const _e of oe.detectedPlanes)if(!w.has(_e))w.add(_e),C.set(_e,oe.lastChangedTime),i.dispatchEvent({type:"planeadded",data:_e});else{const b=C.get(_e);_e.lastChangedTime>b&&(C.set(_e,_e.lastChangedTime),i.dispatchEvent({type:"planechanged",data:_e}))}}v=null}const he=new qf;he.setAnimationLoop(we),this.setAnimationLoop=function(Z){ae=Z},this.dispose=function(){}}}function Ox(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Wf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,S,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,w)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,E,S):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Bt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Bt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const S=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*S,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,E,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=S*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Bt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Bx(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,S){const w=S.program;i.uniformBlockBinding(E,w)}function c(E,S){let w=r[E.id];w===void 0&&(v(E),w=u(E),r[E.id]=w,E.addEventListener("dispose",m));const C=S.program;i.updateUBOMapping(E,C);const I=e.render.frame;s[E.id]!==I&&(d(E),s[E.id]=I)}function u(E){const S=f();E.__bindingPointIndex=S;const w=n.createBuffer(),C=E.__size,I=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,C,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,w),w}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const S=r[E.id],w=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let I=0,U=w.length;I<U;I++){const G=w[I];if(p(G,I,C)===!0){const _=G.__offset,T=Array.isArray(G.value)?G.value:[G.value];let O=0;for(let D=0;D<T.length;D++){const P=T[D],B=g(P);typeof P=="number"?(G.__data[0]=P,n.bufferSubData(n.UNIFORM_BUFFER,_+O,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=P.elements[0],G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=P.elements[0],G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=P.elements[0]):(P.toArray(G.__data,O),O+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,_,G.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,S,w){const C=E.value;if(w[S]===void 0){if(typeof C=="number")w[S]=C;else{const I=Array.isArray(C)?C:[C],U=[];for(let G=0;G<I.length;G++)U.push(I[G].clone());w[S]=U}return!0}else if(typeof C=="number"){if(w[S]!==C)return w[S]=C,!0}else{const I=Array.isArray(w[S])?w[S]:[w[S]],U=Array.isArray(C)?C:[C];for(let G=0;G<I.length;G++){const _=I[G];if(_.equals(U[G])===!1)return _.copy(U[G]),!0}}return!1}function v(E){const S=E.uniforms;let w=0;const C=16;let I=0;for(let U=0,G=S.length;U<G;U++){const _=S[U],T={boundary:0,storage:0},O=Array.isArray(_.value)?_.value:[_.value];for(let D=0,P=O.length;D<P;D++){const B=O[D],H=g(B);T.boundary+=H.boundary,T.storage+=H.storage}if(_.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),_.__offset=w,U>0){I=w%C;const D=C-I;I!==0&&D-T.boundary<0&&(w+=C-I,_.__offset=w)}w+=T.storage}return I=w%C,I>0&&(w+=C-I),E.__size=w,E.__cache={},this}function g(E){const S={boundary:0,storage:0};return typeof E=="number"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}function kx(){const n=Qs("canvas");return n.style.display="block",n}class Qf{constructor(e={}){const{canvas:t=kx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let p=null,v=null;const g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ke,this.useLegacyLights=!0,this.toneMapping=Vn,this.toneMappingExposure=1;const h=this;let E=!1,S=0,w=0,C=null,I=-1,U=null;const G=new Mt,_=new Mt;let T=null,O=t.width,D=t.height,P=1,B=null,H=null;const te=new Mt(0,0,O,D),X=new Mt(0,0,O,D);let $=!1;const ce=new jf;let ae=!1,we=!1,he=null;const Z=new yt,oe=new j,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return C===null?P:1}let b=i;function le(A,W){for(let ee=0;ee<A.length;ee++){const z=A[ee],re=t.getContext(z,W);if(re!==null)return re}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ze,!1),b===null){const W=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&W.shift(),b=le(W,A),b===null)throw le(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}b.getShaderPrecisionFormat===void 0&&(b.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ne,q,xe,Pe,y,R,k,ie,Y,se,fe,de,pe,M,x,N,V,K,ue,ye,ge,J,Se,Te;function Ae(){ne=new Kv(b),q=new Vv(b,ne,e),ne.init(q),J=new Ux(b,ne,q),xe=new Px(b,ne,q),Pe=new Qv(b),y=new gx,R=new Lx(b,ne,xe,y,q,J,Pe),k=new Xv(h),ie=new Yv(h),Y=new ug(b,q),Se=new Hv(b,ne,Y,q),se=new Zv(b,Y,Pe,Se),fe=new i0(b,se,Y,Pe),ue=new n0(b,q,R),N=new Wv(y),de=new mx(h,k,ie,ne,q,Se,N),pe=new Ox(h,y),M=new vx,x=new bx(ne,q),K=new zv(h,k,ie,xe,fe,d,l),V=new Cx(h,fe,q),Te=new Bx(b,Pe,q,xe),ye=new Gv(b,ne,Pe,q),ge=new Jv(b,ne,Pe,q),Pe.programs=de.programs,h.capabilities=q,h.extensions=ne,h.properties=y,h.renderLists=M,h.shadowMap=V,h.state=xe,h.info=Pe}Ae();const Ee=new Fx(h,b);this.xr=Ee,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const A=ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(A){A!==void 0&&(P=A,this.setSize(O,D,!1))},this.getSize=function(A){return A.set(O,D)},this.setSize=function(A,W,ee=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,D=W,t.width=Math.floor(A*P),t.height=Math.floor(W*P),ee===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(O*P,D*P).floor()},this.setDrawingBufferSize=function(A,W,ee){O=A,D=W,P=ee,t.width=Math.floor(A*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,W,ee,z){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,W,ee,z),xe.viewport(G.copy(te).multiplyScalar(P).floor())},this.getScissor=function(A){return A.copy(X)},this.setScissor=function(A,W,ee,z){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,W,ee,z),xe.scissor(_.copy(X).multiplyScalar(P).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(A){xe.setScissorTest($=A)},this.setOpaqueSort=function(A){B=A},this.setTransparentSort=function(A){H=A},this.getClearColor=function(A){return A.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(A=!0,W=!0,ee=!0){let z=0;A&&(z|=b.COLOR_BUFFER_BIT),W&&(z|=b.DEPTH_BUFFER_BIT),ee&&(z|=b.STENCIL_BUFFER_BIT),b.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),M.dispose(),x.dispose(),y.dispose(),k.dispose(),ie.dispose(),fe.dispose(),Se.dispose(),Te.dispose(),de.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ce),Ee.removeEventListener("sessionend",et),he&&(he.dispose(),he=null),tt.stop()};function Re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=Pe.autoReset,W=V.enabled,ee=V.autoUpdate,z=V.needsUpdate,re=V.type;Ae(),Pe.autoReset=A,V.enabled=W,V.autoUpdate=ee,V.needsUpdate=z,V.type=re}function ze(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function at(A){const W=A.target;W.removeEventListener("dispose",at),F(W)}function F(A){Q(A),y.remove(A)}function Q(A){const W=y.get(A).programs;W!==void 0&&(W.forEach(function(ee){de.releaseProgram(ee)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ee,z,re,Ue){W===null&&(W=ve);const Ie=re.isMesh&&re.matrixWorld.determinant()<0,Oe=hd(A,W,ee,z,re);xe.setMaterial(z,Ie);let He=ee.index,We=1;z.wireframe===!0&&(He=se.getWireframeAttribute(ee),We=2);const Xe=ee.drawRange,$e=ee.attributes.position;let Qe=Xe.start*We,Ct=(Xe.start+Xe.count)*We;Ue!==null&&(Qe=Math.max(Qe,Ue.start*We),Ct=Math.min(Ct,(Ue.start+Ue.count)*We)),He!==null?(Qe=Math.max(Qe,0),Ct=Math.min(Ct,He.count)):$e!=null&&(Qe=Math.max(Qe,0),Ct=Math.min(Ct,$e.count));const nn=Ct-Qe;if(nn<0||nn===1/0)return;Se.setup(re,z,Oe,ee,He);let li,ut=ye;if(He!==null&&(li=Y.get(He),ut=ge,ut.setIndex(li)),re.isMesh)z.wireframe===!0?(xe.setLineWidth(z.wireframeLinewidth*_e()),ut.setMode(b.LINES)):ut.setMode(b.TRIANGLES);else if(re.isLine){let Ye=z.linewidth;Ye===void 0&&(Ye=1),xe.setLineWidth(Ye*_e()),re.isLineSegments?ut.setMode(b.LINES):re.isLineLoop?ut.setMode(b.LINE_LOOP):ut.setMode(b.LINE_STRIP)}else re.isPoints?ut.setMode(b.POINTS):re.isSprite&&ut.setMode(b.TRIANGLES);if(re.isInstancedMesh)ut.renderInstances(Qe,nn,re.count);else if(ee.isInstancedBufferGeometry){const Ye=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,xo=Math.min(ee.instanceCount,Ye);ut.renderInstances(Qe,nn,xo)}else ut.render(Qe,nn)},this.compile=function(A,W){function ee(z,re,Ue){z.transparent===!0&&z.side===zn&&z.forceSinglePass===!1?(z.side=Bt,z.needsUpdate=!0,cs(z,re,Ue),z.side=ri,z.needsUpdate=!0,cs(z,re,Ue),z.side=zn):cs(z,re,Ue)}v=x.get(A),v.init(),m.push(v),A.traverseVisible(function(z){z.isLight&&z.layers.test(W.layers)&&(v.pushLight(z),z.castShadow&&v.pushShadow(z))}),v.setupLights(h.useLegacyLights),A.traverse(function(z){const re=z.material;if(re)if(Array.isArray(re))for(let Ue=0;Ue<re.length;Ue++){const Ie=re[Ue];ee(Ie,A,z)}else ee(re,A,z)}),m.pop(),v=null};let me=null;function be(A){me&&me(A)}function Ce(){tt.stop()}function et(){tt.start()}const tt=new qf;tt.setAnimationLoop(be),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(A){me=A,Ee.setAnimationLoop(A),A===null?tt.stop():tt.start()},Ee.addEventListener("sessionstart",Ce),Ee.addEventListener("sessionend",et),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(W),W=Ee.getCamera()),A.isScene===!0&&A.onBeforeRender(h,A,W,C),v=x.get(A,m.length),v.init(),m.push(v),Z.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ce.setFromProjectionMatrix(Z),we=this.localClippingEnabled,ae=N.init(this.clippingPlanes,we),p=M.get(A,g.length),p.init(),g.push(p),St(A,W,0,h.sortObjects),p.finish(),h.sortObjects===!0&&p.sort(B,H),ae===!0&&N.beginShadows();const ee=v.state.shadowsArray;if(V.render(ee,A,W),ae===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(p,A),v.setupLights(h.useLegacyLights),W.isArrayCamera){const z=W.cameras;for(let re=0,Ue=z.length;re<Ue;re++){const Ie=z[re];Xn(p,A,Ie,Ie.viewport)}}else Xn(p,A,W);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(h,A,W),Se.resetDefaultState(),I=-1,U=null,m.pop(),m.length>0?v=m[m.length-1]:v=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function St(A,W,ee,z){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ce.intersectsSprite(A)){z&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Z);const Ie=fe.update(A),Oe=A.material;Oe.visible&&p.push(A,Ie,Oe,ee,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ce.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==Pe.render.frame&&(A.skeleton.update(),A.skeleton.frame=Pe.render.frame);const Ie=fe.update(A),Oe=A.material;if(z&&(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),oe.copy(Ie.boundingSphere.center).applyMatrix4(A.matrixWorld).applyMatrix4(Z)),Array.isArray(Oe)){const He=Ie.groups;for(let We=0,Xe=He.length;We<Xe;We++){const $e=He[We],Qe=Oe[$e.materialIndex];Qe&&Qe.visible&&p.push(A,Ie,Qe,ee,oe.z,$e)}}else Oe.visible&&p.push(A,Ie,Oe,ee,oe.z,null)}}const Ue=A.children;for(let Ie=0,Oe=Ue.length;Ie<Oe;Ie++)St(Ue[Ie],W,ee,z)}function Xn(A,W,ee,z){const re=A.opaque,Ue=A.transmissive,Ie=A.transparent;v.setupLightsView(ee),ae===!0&&N.setGlobalState(h.clippingPlanes,ee),Ue.length>0&&ct(re,Ue,W,ee),z&&xe.viewport(G.copy(z)),re.length>0&&Kt(re,W,ee),Ue.length>0&&Kt(Ue,W,ee),Ie.length>0&&Kt(Ie,W,ee),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ct(A,W,ee,z){if(he===null){const Oe=q.isWebGL2;he=new Pi(1024,1024,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?Zr:Ci,minFilter:Kr,samples:Oe&&o===!0?4:0})}const re=h.getRenderTarget();h.setRenderTarget(he),h.clear();const Ue=h.toneMapping;h.toneMapping=Vn,Kt(A,ee,z),R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he);let Ie=!1;for(let Oe=0,He=W.length;Oe<He;Oe++){const We=W[Oe],Xe=We.object,$e=We.geometry,Qe=We.material,Ct=We.group;if(Qe.side===zn&&Xe.layers.test(z.layers)){const nn=Qe.side;Qe.side=Bt,Qe.needsUpdate=!0,mn(Xe,ee,z,$e,Qe,Ct),Qe.side=nn,Qe.needsUpdate=!0,Ie=!0}}Ie===!0&&(R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he)),h.setRenderTarget(re),h.toneMapping=Ue}function Kt(A,W,ee){const z=W.isScene===!0?W.overrideMaterial:null;for(let re=0,Ue=A.length;re<Ue;re++){const Ie=A[re],Oe=Ie.object,He=Ie.geometry,We=z===null?Ie.material:z,Xe=Ie.group;Oe.layers.test(ee.layers)&&mn(Oe,W,ee,He,We,Xe)}}function mn(A,W,ee,z,re,Ue){A.onBeforeRender(h,W,ee,z,re,Ue),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(h,W,ee,z,A,Ue),re.transparent===!0&&re.side===zn&&re.forceSinglePass===!1?(re.side=Bt,re.needsUpdate=!0,h.renderBufferDirect(ee,W,z,re,A,Ue),re.side=ri,re.needsUpdate=!0,h.renderBufferDirect(ee,W,z,re,A,Ue),re.side=zn):h.renderBufferDirect(ee,W,z,re,A,Ue),A.onAfterRender(h,W,ee,z,re,Ue)}function cs(A,W,ee){W.isScene!==!0&&(W=ve);const z=y.get(A),re=v.state.lights,Ue=v.state.shadowsArray,Ie=re.state.version,Oe=de.getParameters(A,re.state,Ue,W,ee),He=de.getProgramCacheKey(Oe);let We=z.programs;z.environment=A.isMeshStandardMaterial?W.environment:null,z.fog=W.fog,z.envMap=(A.isMeshStandardMaterial?ie:k).get(A.envMap||z.environment),We===void 0&&(A.addEventListener("dispose",at),We=new Map,z.programs=We);let Xe=We.get(He);if(Xe!==void 0){if(z.currentProgram===Xe&&z.lightsStateVersion===Ie)return ol(A,Oe),Xe}else Oe.uniforms=de.getUniforms(A),A.onBuild(ee,Oe,h),A.onBeforeCompile(Oe,h),Xe=de.acquireProgram(Oe,He),We.set(He,Xe),z.uniforms=Oe.uniforms;const $e=z.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=N.uniform),ol(A,Oe),z.needsLights=md(A),z.lightsStateVersion=Ie,z.needsLights&&($e.ambientLightColor.value=re.state.ambient,$e.lightProbe.value=re.state.probe,$e.directionalLights.value=re.state.directional,$e.directionalLightShadows.value=re.state.directionalShadow,$e.spotLights.value=re.state.spot,$e.spotLightShadows.value=re.state.spotShadow,$e.rectAreaLights.value=re.state.rectArea,$e.ltc_1.value=re.state.rectAreaLTC1,$e.ltc_2.value=re.state.rectAreaLTC2,$e.pointLights.value=re.state.point,$e.pointLightShadows.value=re.state.pointShadow,$e.hemisphereLights.value=re.state.hemi,$e.directionalShadowMap.value=re.state.directionalShadowMap,$e.directionalShadowMatrix.value=re.state.directionalShadowMatrix,$e.spotShadowMap.value=re.state.spotShadowMap,$e.spotLightMatrix.value=re.state.spotLightMatrix,$e.spotLightMap.value=re.state.spotLightMap,$e.pointShadowMap.value=re.state.pointShadowMap,$e.pointShadowMatrix.value=re.state.pointShadowMatrix);const Qe=Xe.getUniforms(),Ct=Hs.seqWithValue(Qe.seq,$e);return z.currentProgram=Xe,z.uniformsList=Ct,Xe}function ol(A,W){const ee=y.get(A);ee.outputColorSpace=W.outputColorSpace,ee.instancing=W.instancing,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function hd(A,W,ee,z,re){W.isScene!==!0&&(W=ve),R.resetTextureUnits();const Ue=W.fog,Ie=z.isMeshStandardMaterial?W.environment:null,Oe=C===null?h.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:wn,He=(z.isMeshStandardMaterial?ie:k).get(z.envMap||Ie),We=z.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Xe=!!z.normalMap&&!!ee.attributes.tangent,$e=!!ee.morphAttributes.position,Qe=!!ee.morphAttributes.normal,Ct=!!ee.morphAttributes.color,nn=z.toneMapped?h.toneMapping:Vn,li=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ut=li!==void 0?li.length:0,Ye=y.get(z),xo=v.state.lights;if(ae===!0&&(we===!0||A!==U)){const kt=A===U&&z.id===I;N.setState(z,A,kt)}let mt=!1;z.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==xo.state.version||Ye.outputColorSpace!==Oe||re.isInstancedMesh&&Ye.instancing===!1||!re.isInstancedMesh&&Ye.instancing===!0||re.isSkinnedMesh&&Ye.skinning===!1||!re.isSkinnedMesh&&Ye.skinning===!0||Ye.envMap!==He||z.fog===!0&&Ye.fog!==Ue||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==N.numPlanes||Ye.numIntersection!==N.numIntersection)||Ye.vertexAlphas!==We||Ye.vertexTangents!==Xe||Ye.morphTargets!==$e||Ye.morphNormals!==Qe||Ye.morphColors!==Ct||Ye.toneMapping!==nn||q.isWebGL2===!0&&Ye.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,Ye.__version=z.version);let ci=Ye.currentProgram;mt===!0&&(ci=cs(z,W,re));let al=!1,Sr=!1,Mo=!1;const Pt=ci.getUniforms(),ui=Ye.uniforms;if(xe.useProgram(ci.program)&&(al=!0,Sr=!0,Mo=!0),z.id!==I&&(I=z.id,Sr=!0),al||U!==A){if(Pt.setValue(b,"projectionMatrix",A.projectionMatrix),q.logarithmicDepthBuffer&&Pt.setValue(b,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),U!==A&&(U=A,Sr=!0,Mo=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const kt=Pt.map.cameraPosition;kt!==void 0&&kt.setValue(b,oe.setFromMatrixPosition(A.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Pt.setValue(b,"isOrthographic",A.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||re.isSkinnedMesh)&&Pt.setValue(b,"viewMatrix",A.matrixWorldInverse)}if(re.isSkinnedMesh){Pt.setOptional(b,re,"bindMatrix"),Pt.setOptional(b,re,"bindMatrixInverse");const kt=re.skeleton;kt&&(q.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),Pt.setValue(b,"boneTexture",kt.boneTexture,R),Pt.setValue(b,"boneTextureSize",kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yo=ee.morphAttributes;if((yo.position!==void 0||yo.normal!==void 0||yo.color!==void 0&&q.isWebGL2===!0)&&ue.update(re,ee,ci),(Sr||Ye.receiveShadow!==re.receiveShadow)&&(Ye.receiveShadow=re.receiveShadow,Pt.setValue(b,"receiveShadow",re.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(ui.envMap.value=He,ui.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Sr&&(Pt.setValue(b,"toneMappingExposure",h.toneMappingExposure),Ye.needsLights&&pd(ui,Mo),Ue&&z.fog===!0&&pe.refreshFogUniforms(ui,Ue),pe.refreshMaterialUniforms(ui,z,P,D,he),Hs.upload(b,Ye.uniformsList,ui,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Hs.upload(b,Ye.uniformsList,ui,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Pt.setValue(b,"center",re.center),Pt.setValue(b,"modelViewMatrix",re.modelViewMatrix),Pt.setValue(b,"normalMatrix",re.normalMatrix),Pt.setValue(b,"modelMatrix",re.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const kt=z.uniformsGroups;for(let So=0,gd=kt.length;So<gd;So++)if(q.isWebGL2){const ll=kt[So];Te.update(ll,ci),Te.bind(ll,ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ci}function pd(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function md(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,W,ee){y.get(A.texture).__webglTexture=W,y.get(A.depthTexture).__webglTexture=ee;const z=y.get(A);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=ee===void 0,z.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,W){const ee=y.get(A);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,ee=0){C=A,S=W,w=ee;let z=!0,re=null,Ue=!1,Ie=!1;if(A){const He=y.get(A);He.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(b.FRAMEBUFFER,null),z=!1):He.__webglFramebuffer===void 0?R.setupRenderTarget(A):He.__hasExternalTextures&&R.rebindTextures(A,y.get(A.texture).__webglTexture,y.get(A.depthTexture).__webglTexture);const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const Xe=y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(re=Xe[W],Ue=!0):q.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?re=y.get(A).__webglMultisampledFramebuffer:re=Xe,G.copy(A.viewport),_.copy(A.scissor),T=A.scissorTest}else G.copy(te).multiplyScalar(P).floor(),_.copy(X).multiplyScalar(P).floor(),T=$;if(xe.bindFramebuffer(b.FRAMEBUFFER,re)&&q.drawBuffers&&z&&xe.drawBuffers(A,re),xe.viewport(G),xe.scissor(_),xe.setScissorTest(T),Ue){const He=y.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+W,He.__webglTexture,ee)}else if(Ie){const He=y.get(A.texture),We=W||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,He.__webglTexture,ee||0,We)}I=-1},this.readRenderTargetPixels=function(A,W,ee,z,re,Ue,Ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){xe.bindFramebuffer(b.FRAMEBUFFER,Oe);try{const He=A.texture,We=He.format,Xe=He.type;if(We!==un&&J.convert(We)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Xe===Zr&&(ne.has("EXT_color_buffer_half_float")||q.isWebGL2&&ne.has("EXT_color_buffer_float"));if(Xe!==Ci&&J.convert(Xe)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===yi&&(q.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-z&&ee>=0&&ee<=A.height-re&&b.readPixels(W,ee,z,re,J.convert(We),J.convert(Xe),Ue)}finally{const He=C!==null?y.get(C).__webglFramebuffer:null;xe.bindFramebuffer(b.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(A,W,ee=0){const z=Math.pow(2,-ee),re=Math.floor(W.image.width*z),Ue=Math.floor(W.image.height*z);R.setTexture2D(W,0),b.copyTexSubImage2D(b.TEXTURE_2D,ee,0,0,A.x,A.y,re,Ue),xe.unbindTexture()},this.copyTextureToTexture=function(A,W,ee,z=0){const re=W.image.width,Ue=W.image.height,Ie=J.convert(ee.format),Oe=J.convert(ee.type);R.setTexture2D(ee,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,ee.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,ee.unpackAlignment),W.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,z,A.x,A.y,re,Ue,Ie,Oe,W.image.data):W.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,z,A.x,A.y,W.mipmaps[0].width,W.mipmaps[0].height,Ie,W.mipmaps[0].data):b.texSubImage2D(b.TEXTURE_2D,z,A.x,A.y,Ie,Oe,W.image),z===0&&ee.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(A,W,ee,z,re=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=A.max.x-A.min.x+1,Ie=A.max.y-A.min.y+1,Oe=A.max.z-A.min.z+1,He=J.convert(z.format),We=J.convert(z.type);let Xe;if(z.isData3DTexture)R.setTexture3D(z,0),Xe=b.TEXTURE_3D;else if(z.isDataArrayTexture)R.setTexture2DArray(z,0),Xe=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,z.unpackAlignment);const $e=b.getParameter(b.UNPACK_ROW_LENGTH),Qe=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Ct=b.getParameter(b.UNPACK_SKIP_PIXELS),nn=b.getParameter(b.UNPACK_SKIP_ROWS),li=b.getParameter(b.UNPACK_SKIP_IMAGES),ut=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,ut.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ut.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,A.min.x),b.pixelStorei(b.UNPACK_SKIP_ROWS,A.min.y),b.pixelStorei(b.UNPACK_SKIP_IMAGES,A.min.z),ee.isDataTexture||ee.isData3DTexture?b.texSubImage3D(Xe,re,W.x,W.y,W.z,Ue,Ie,Oe,He,We,ut.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),b.compressedTexSubImage3D(Xe,re,W.x,W.y,W.z,Ue,Ie,Oe,He,ut.data)):b.texSubImage3D(Xe,re,W.x,W.y,W.z,Ue,Ie,Oe,He,We,ut),b.pixelStorei(b.UNPACK_ROW_LENGTH,$e),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Qe),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ct),b.pixelStorei(b.UNPACK_SKIP_ROWS,nn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,li),re===0&&z.generateMipmaps&&b.generateMipmap(Xe),xe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),xe.unbindTexture()},this.resetState=function(){S=0,w=0,C=null,xe.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ke?Ti:If}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ti?ke:wn}}class zx extends Qf{}zx.prototype.isWebGL1Renderer=!0;class Hx extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class to extends ai{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new j,f=new j,d=new j;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const g=v/r*s,m=p/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(g),f.y=(e+t*Math.cos(m))*Math.sin(g),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const g=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,h=(r+1)*(p-1)+v,E=(r+1)*p+v;a.push(g,m,E),a.push(m,h,E)}this.setIndex(a),this.setAttribute("position",new En(o,3)),this.setAttribute("normal",new En(l,3)),this.setAttribute("uv",new En(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);const Gx=An({__name:"Background3D",setup(n){const e=Ve(null);return xr(()=>{if(!e.value)return;const t=new Hx;t.background=new st("#111827");const i=new Qt(75,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=6,i.position.y=1;const r=new Qf({canvas:e.value,antialias:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new to(2,.3,16,100),a=new eo({color:6514417,wireframe:!0,transparent:!0,opacity:.5}),o=new yn(s,a);o.rotation.x=Math.PI/4,t.add(o);const l=new to(1.5,.3,16,100),c=new eo({color:9133302,wireframe:!0,transparent:!0,opacity:.5}),u=new yn(l,c);u.rotation.x=Math.PI/2,u.rotation.y=Math.PI/4,t.add(u);function f(){requestAnimationFrame(f),o.rotation.x+=.002,o.rotation.y+=.003,u.rotation.x-=.003,u.rotation.y+=.002,r.render(t,i)}f(),window.addEventListener("resize",()=>{const d=window.innerWidth,p=window.innerHeight;i.aspect=d/p,i.updateProjectionMatrix(),r.setSize(d,p)})}),(t,i)=>(Le(),Fe("canvas",{ref_key:"canvas",ref:e,class:"fixed inset-0 w-screen h-screen"},null,512))}});const ls=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Vx=ls(Gx,[["__scopeId","data-v-0cc05879"]]),Wx={class:"text-xl"},Xx={class:"flex-1"},$x={class:"font-medium"},jx={key:0,class:"mt-2 w-full bg-gray-200 rounded-full h-1.5"},qx=An({__name:"Notification",props:{show:{type:Boolean},message:{},type:{},loading:{type:Boolean,default:!1}},setup(n){const e={success:"bg-green-500/90 text-white backdrop-blur-sm",error:"bg-red-500/90 text-white backdrop-blur-sm",loading:"bg-blue-500/90 text-white backdrop-blur-sm"},t={success:"✅",error:"❌",loading:"⏳"};return(i,r)=>i.show?(Le(),Fe("div",{key:0,class:dn(["fixed top-4 right-4 p-4 rounded-lg shadow-lg transition-all duration-300 z-50 flex items-center space-x-3",e[i.type]])},[L("span",Wx,je(t[i.type]),1),L("div",Xx,[L("p",$x,je(i.message),1),i.loading?(Le(),Fe("div",jx,r[0]||(r[0]=[L("div",{class:"bg-blue-500 h-1.5 rounded-full animate-pulse"},null,-1)]))):At("",!0)])],2)):At("",!0)}}),Yx={class:"fixed inset-0 bg-gray-900/90 backdrop-blur-md z-50"},Kx={class:"container mx-auto p-4 h-full max-w-7xl"},Zx={class:"bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 h-full flex flex-col border border-gray-700/50"},Jx={key:0,class:"bg-red-500/10 border border-red-500 rounded-lg p-4 mb-6"},Qx={class:"text-red-400"},eM={key:1,class:"flex items-center justify-center py-12"},tM={class:"flex flex-wrap gap-4 mb-8 justify-center"},nM=["onClick"],iM={class:"absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-700 text-white rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"},rM={class:"flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"},sM={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},oM={class:"flex items-start space-x-4 mb-6"},aM={class:"container-logo"},lM=["src","alt","onError","onLoad"],cM={class:"fallback-emoji"},uM={class:"flex-1"},fM={class:"flex items-center mb-2"},dM={class:"text-xl font-bold text-white"},hM={key:0,class:"ml-2 text-blue-400 text-sm"},pM={class:"text-gray-300 text-sm leading-relaxed"},mM={class:"flex items-center justify-between pt-4 border-t border-gray-600/20"},gM={class:"flex items-center space-x-2"},_M={class:"text-xl"},vM={class:"text-gray-300 text-sm"},xM=["onClick"],MM=5*60*1e3,yM=An({__name:"Marketplace",emits:["close"],setup(n,{emit:e}){const t=U=>{if(!U)return"";if(U.startsWith("http://")||U.startsWith("https://"))return U;const G=window.location.hostname,_="8080",T=U.replace(/^logos\//,"");return`http://${G}:${_}/logos/${T}`},r=(()=>`http://${window.location.hostname}:8080/api/marketplace`)(),s={All:"🌐","Media Servers":"🎬",Development:"💻",Monitoring:"📊",Database:"🗄️",Productivity:"📝",Gaming:"🎮",Networking:"🌐","Network Tools":"🔧",VPN:"🔒","Arr Stack":"🏴‍☠️","Home Automation":"🏠","Container Management":"📦",Security:"🛡️",Analytics:"📈",Torrents:"📥"},a=Ve([]),o=Ve([]),l=Ve("All"),c=Ve(!1),u=Ve(null),f=Ve(null),d=Ve({}),p=$t(()=>(o.value.includes("All")?o.value:["All",...o.value]).map(G=>({name:G,emoji:s[G]||"📦"}))),v=$t(()=>l.value==="All"?a.value:a.value.filter(U=>U.category===l.value)),g=()=>{const U=localStorage.getItem("marketplace-data");if(!U)return null;const G=JSON.parse(U);return Date.now()-G.timestamp>MM?(localStorage.removeItem("marketplace-data"),null):G},m=async()=>{u.value=null,c.value=!0;try{const U=g();if(U){a.value=U.data.containers,o.value=["All",...U.data.categories],c.value=!1;return}const G=await fetch(r);if(!G.ok)throw new Error(`Failed to fetch marketplace data: ${G.statusText}`);const _=await G.json();a.value=_.containers,o.value=["All",..._.categories],localStorage.setItem("marketplace-data",JSON.stringify({timestamp:Date.now(),data:{containers:_.containers,categories:_.categories}}))}catch(U){u.value=U instanceof Error?U.message:"Failed to load marketplace data",console.error("Error fetching marketplace data:",U)}finally{c.value=!1}},h=async U=>{var G;c.value=!0,f.value={message:`Starting installation of ${U.name}...`,type:"loading",loading:!0};try{f.value={message:`Pulling image for ${U.name}...`,type:"loading",loading:!0};const _=await fetch(`${r}/install`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:U.id,image:U.image,config:{ports:U.ports,volumes:U.volumes,env:U.env}})}),T=await _.text();if(console.log("Raw server response:",T),!_.ok)throw new Error(`Installation failed: ${T||_.statusText}`);let O;try{O=JSON.parse(T)}catch(D){throw console.error("Failed to parse server response:",D),new Error("Invalid server response")}f.value={message:`Successfully installed ${U.name}!`,type:"success"}}catch(_){console.error("Detailed installation error:",_),f.value={message:_ instanceof Error?_.message:"Failed to install container",type:"error"}}finally{c.value=!1,((G=f.value)==null?void 0:G.type)==="success"&&setTimeout(()=>{f.value=null},3e3)}},E=(U,G)=>{const _=U.target;d.value[G]=!0,_.style.display="none"},S=(U,G)=>{const _=U.target;console.log(`Successfully loaded image for ${G}:`,_.src),d.value[G]=!1},w=U=>({"Media Servers":"🎬",Development:"👨‍💻",Monitoring:"📊",Database:"💾",Productivity:"✅",Gaming:"🎮",Networking:"🌐","Network Tools":"🔧",VPN:"🔒","Arr Stack":"🏴‍☠️","Home Automation":"🏠","Container Management":"📦",Security:"🛡️",Analytics:"📈",Torrents:"📥"})[U]||"📦",C=e,I=()=>{C("close")};return xr(()=>{m()}),(U,G)=>{var _,T,O;return Le(),Fe("div",Yx,[xt(qx,{show:!!f.value,message:((_=f.value)==null?void 0:_.message)||"",type:((T=f.value)==null?void 0:T.type)||"loading",loading:(O=f.value)==null?void 0:O.loading},null,8,["show","message","type","loading"]),L("div",Kx,[L("div",Zx,[L("div",{class:"flex justify-between items-center mb-6"},[G[1]||(G[1]=L("h2",{class:"text-2xl font-bold text-white"},"Docker Marketplace 🐳",-1)),L("button",{onClick:I,class:"text-gray-400 hover:text-white"},G[0]||(G[0]=[L("span",{class:"text-2xl"},"✕",-1)]))]),u.value?(Le(),Fe("div",Jx,[L("p",Qx,je(u.value),1),L("button",{onClick:m,class:"text-red-400 hover:text-red-300 text-sm mt-2"}," Try again ")])):At("",!0),c.value?(Le(),Fe("div",eM,G[2]||(G[2]=[L("div",{class:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"},null,-1)]))):u.value?At("",!0):(Le(),Fe(lt,{key:2},[L("div",tM,[(Le(!0),Fe(lt,null,Ft(p.value,D=>(Le(),Fe("button",{key:D.name,onClick:P=>l.value=D.name,class:"relative group"},[L("div",{class:dn(["w-12 h-12 flex items-center justify-center text-2xl rounded-xl transition-all duration-200",l.value===D.name?"bg-blue-600/90 scale-110 shadow-lg shadow-blue-500/20":"bg-gray-700/40 hover:bg-gray-600/60 hover:scale-105"])},je(D.emoji),3),L("div",iM,je(D.name),1)],8,nM))),128))]),L("div",rM,[L("div",sM,[(Le(!0),Fe(lt,null,Ft(v.value,D=>(Le(),Fe("div",{key:D.id,class:"group bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg cursor-pointer hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"},[L("div",oM,[L("div",aM,[D.logo?(Le(),Fe("img",{key:0,src:t(D.logo),alt:`${D.name} logo`,onError:P=>E(P,D.id),onLoad:P=>S(P,D.id),class:"h-12 w-12 object-contain",loading:"lazy"},null,40,lM)):At("",!0),_t(L("span",cM,"📦",512),[[hp,d.value[D.id]]])]),L("div",uM,[L("div",fM,[L("h3",dM,je(D.name),1),D.verified?(Le(),Fe("span",hM,"✓")):At("",!0)]),L("p",pM,je(D.description),1)])]),L("div",mM,[L("div",gM,[L("span",_M,je(w(D.category)),1),L("span",vM,je(D.category),1)]),L("button",{onClick:P=>h(D),class:"bg-blue-600/90 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 font-medium"},G[3]||(G[3]=[L("span",null,"Install",-1),L("span",{class:"group-hover:translate-x-1 transition-transform duration-200"},"→",-1)]),8,xM)])]))),128))])])],64))])])])}}});const SM=ls(yM,[["__scopeId","data-v-c05893dd"]]),EM=()=>`http://${window.location.hostname}:8080/api`,_o=EM(),bM=`${_o}/chat`,TM=`${_o}/metrics`,wM=`${_o}/containers`,AM={class:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[9999]"},RM={class:"bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-2xl h-[90vh] flex flex-col m-4"},CM={class:"flex-none p-6 border-b border-gray-700"},PM={class:"flex justify-between items-center"},LM={class:"text-xl font-semibold text-white"},UM={class:"flex items-center gap-2"},DM=["value"],IM={class:"flex-1 overflow-y-auto min-h-0"},NM={class:"p-6 space-y-6"},FM={class:"space-y-2"},OM=["onUpdate:modelValue"],BM=["onUpdate:modelValue"],kM=["onUpdate:modelValue"],zM=["onClick"],HM={class:"space-y-2"},GM=["onUpdate:modelValue"],VM=["onUpdate:modelValue"],WM=["onClick"],XM={class:"space-y-2"},$M=["onUpdate:modelValue"],jM=["onUpdate:modelValue"],qM=["onClick"],YM={class:"space-y-4"},KM={class:"flex items-center gap-2"},ZM={class:"space-y-2"},JM={class:"flex gap-2"},QM={class:"flex flex-wrap gap-2"},ey=["onClick"],ty={class:"mt-2 space-y-2"},ny=["onUpdate:modelValue"],iy=["onClick"],ry={class:"flex-none p-6 border-t border-gray-700"},sy={class:"flex justify-between items-center"},oy={class:"flex gap-2"},ay=["disabled"],ly=An({__name:"ContainerModal",props:{onClose:{},onCreated:{},isEdit:{type:Boolean,default:!1}},emits:["close","created"],setup(n,{emit:e}){const t=e,i=Ve(!1),r=Ve(!1),s=Ve(""),a=Ve(""),o=Ve({name:"",image:"",ports:[],volumes:[],env:[],privileged:!1,network:"",capabilities:[],devices:[]}),l=Ve(""),c=()=>{o.value.ports.push({host:"",container:"",protocol:"tcp"})},u=O=>{o.value.ports.splice(O,1)},f=()=>{o.value.volumes.push({host:"",container:""})},d=O=>{o.value.volumes.splice(O,1)},p=()=>{o.value.env.push({key:"",value:""})},v=O=>{o.value.env.splice(O,1)},g=async()=>{if(o.value.image){r.value=!0,s.value=`Pulling image ${o.value.image}...`;try{console.log("Pulling image:",o.value.image);const O=await fetch(`${_o}/pull`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:o.value.image})}),D=await O.text();if(console.log("Pull response:",D),!O.ok)throw new Error(D||"Failed to pull image");s.value=`Successfully pulled ${o.value.image}`,a.value="success"}catch(O){console.error("Error pulling image:",O),s.value=O instanceof Error?O.message:"Failed to pull image",a.value="error"}finally{r.value=!1}}},m=async()=>{try{console.log("Submitting form with data:",o.value),i.value=!0,s.value="Pulling image...",a.value="info",await g(),s.value="Creating container...";const O={...o.value,ports:o.value.ports.filter(P=>P.host&&P.container),volumes:o.value.volumes.filter(P=>P.host&&P.container),env:o.value.env.filter(P=>P.key&&P.value)};console.log("Sending create request with data:",O);const D=await fetch(`${wM}/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)});if(console.log("Create response status:",D.status),!D.ok){const P=await D.text();throw console.error("Error response:",P),new Error(`Failed to create container: ${P||D.status}`)}s.value="Container created successfully!",a.value="success",t("created"),setTimeout(()=>{_()},1500)}catch(O){console.error("Error creating container:",O),s.value=O instanceof Error?O.message:"Failed to create container",a.value="error"}finally{i.value=!1}},h=Ve(""),E=()=>{h.value&&!o.value.capabilities.includes(h.value)&&(o.value.capabilities.push(h.value),h.value="")},S=O=>{o.value.capabilities=o.value.capabilities.filter(D=>D!==O)},w=Ve([]);xr(async()=>{await C()});const C=async()=>{try{const O=`http://${window.location.hostname}:8080/api/containers/templates`;console.log("Fetching templates from:",O);const D=await fetch(O);if(!D.ok)throw new Error(`Failed to fetch templates: ${D.status}`);const P=await D.json();console.log("Fetched templates:",P),w.value=P.map(B=>({name:B.name||B.Name,displayName:(B.name||B.Name).replace(".json","")}))}catch(O){console.error("Error fetching templates:",O)}},I=async()=>{if(console.log("Template selected:",l.value),l.value)try{const O=l.value.endsWith(".json")?l.value:`${l.value}.json`,D=`http://${window.location.hostname}:8080/api/containers/templates/${encodeURIComponent(O)}`;console.log("Loading template from:",D);const P=await fetch(D);if(!P.ok)throw new Error(`Failed to load template: ${P.status}`);const B=await P.json();console.log("Loaded template data:",B),o.value={name:B.name||"",image:B.image||"",ports:Array.isArray(B.ports)?B.ports.map(H=>({host:H.host||"",container:H.container||"",protocol:H.protocol||"tcp"})):[{host:"",container:"",protocol:"tcp"}],volumes:Array.isArray(B.volumes)?B.volumes.map(H=>({host:H.host||"",container:H.container||""})):[{host:"",container:""}],env:Array.isArray(B.env)?B.env.map(H=>({key:H.key||"",value:H.value||""})):[{key:"",value:""}],privileged:!!B.privileged,network:B.network||"",capabilities:Array.isArray(B.capabilities)?[...B.capabilities]:[],devices:Array.isArray(B.devices)?[...B.devices]:[]},s.value="Template loaded successfully",a.value="success"}catch(O){console.error("Error loading template:",O),s.value=O instanceof Error?O.message:"Failed to load template",a.value="error"}else o.value={name:"",image:"",ports:[{host:"",container:"",protocol:"tcp"}],volumes:[{host:"",container:""}],env:[{key:"",value:""}],privileged:!1,network:"",capabilities:[],devices:[]}},U=()=>{o.value.devices.push("")},G=O=>{o.value.devices.splice(O,1)},_=()=>{t("close")},T=async()=>{try{console.log("Attempting to save template...");const D={name:o.value.name.endsWith(".json")?o.value.name:`${o.value.name}.json`,image:o.value.image,ports:o.value.ports.filter(te=>te.host&&te.container),volumes:o.value.volumes.filter(te=>te.host&&te.container),env:o.value.env.filter(te=>te.key&&te.value),privileged:o.value.privileged,network:o.value.network,capabilities:o.value.capabilities,devices:o.value.devices},P=`http://${window.location.hostname}:8080/api/containers/templates`;console.log("Template data to save:",D),s.value="Saving template...",a.value="info";const B=await fetch(P,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)});console.log("Template save response status:",B.status);const H=await B.text();if(console.log("Server response:",H),!B.ok)throw new Error(H||`Server returned ${B.status}`);s.value="Template saved successfully",a.value="success",await C()}catch(O){console.error("Error saving template:",O),s.value=O instanceof Error?O.message:"Failed to save template",a.value="error"}};return(O,D)=>(Le(),Fe("div",AM,[L("div",RM,[L("div",CM,[L("div",PM,[L("h3",LM,je(O.isEdit?"Edit":"New")+" Container",1),L("div",UM,[_t(L("select",{"onUpdate:modelValue":D[0]||(D[0]=P=>l.value=P),onChange:I,class:"bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},[D[6]||(D[6]=L("option",{value:""},"Select Template",-1)),(Le(!0),Fe(lt,null,Ft(w.value,P=>(Le(),Fe("option",{key:P.name,value:P.name},je(P.displayName),9,DM))),128))],544),[[Do,l.value]])])]),s.value?(Le(),Fe("div",{key:0,class:dn([{"text-green-400":a.value==="success","text-blue-400":a.value==="info","text-red-400":a.value==="error"},"text-sm mt-2"])},je(s.value),3)):At("",!0)]),L("form",{onSubmit:Js(m,["prevent"]),class:"flex flex-col flex-1 min-h-0"},[L("div",IM,[L("div",NM,[L("div",null,[D[7]||(D[7]=L("label",{class:"block text-sm font-medium text-gray-300"},"Container Name",-1)),_t(L("input",{"onUpdate:modelValue":D[1]||(D[1]=P=>o.value.name=P),type:"text",class:"mt-1 w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white",placeholder:"e.g., my-container",required:""},null,512),[[Wt,o.value.name]])]),L("div",null,[D[8]||(D[8]=L("label",{class:"block text-sm font-medium text-gray-300"},"Image",-1)),_t(L("input",{"onUpdate:modelValue":D[2]||(D[2]=P=>o.value.image=P),type:"text",class:"mt-1 w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white",placeholder:"e.g., nginx:latest",required:""},null,512),[[Wt,o.value.image]])]),L("div",null,[D[11]||(D[11]=L("label",{class:"block text-sm font-medium text-gray-300"},"Port Mappings",-1)),L("div",FM,[(Le(!0),Fe(lt,null,Ft(o.value.ports,(P,B)=>(Le(),Fe("div",{key:B,class:"flex gap-2"},[_t(L("input",{"onUpdate:modelValue":H=>P.host=H,type:"text",placeholder:"Host Port (e.g., 8888)",class:"w-1/3 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,8,OM),[[Wt,P.host]]),_t(L("input",{"onUpdate:modelValue":H=>P.container=H,type:"text",placeholder:"Container Port (e.g., 8888)",class:"w-1/3 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,8,BM),[[Wt,P.container]]),_t(L("select",{"onUpdate:modelValue":H=>P.protocol=H,class:"w-1/4 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},D[9]||(D[9]=[L("option",{value:"tcp"},"TCP",-1),L("option",{value:"udp"},"UDP",-1),L("option",{value:"both"},"TCP/UDP",-1)]),8,kM),[[Do,P.protocol]]),L("button",{type:"button",onClick:H=>u(B),class:"text-red-400 hover:text-red-300"},"✕",8,zM)]))),128)),L("button",{type:"button",onClick:c,class:"text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"},D[10]||(D[10]=[L("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1),Qi(" Add Port Mapping ")]))])]),L("div",null,[D[13]||(D[13]=L("label",{class:"block text-sm font-medium text-gray-300"},"Volume Mappings",-1)),L("div",HM,[(Le(!0),Fe(lt,null,Ft(o.value.volumes,(P,B)=>(Le(),Fe("div",{key:B,class:"flex gap-2"},[_t(L("input",{"onUpdate:modelValue":H=>P.host=H,type:"text",placeholder:"Host Path (e.g., /data)",class:"w-1/2 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,8,GM),[[Wt,P.host]]),_t(L("input",{"onUpdate:modelValue":H=>P.container=H,type:"text",placeholder:"Container Path (e.g., /app/data)",class:"w-1/2 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,8,VM),[[Wt,P.container]]),L("button",{type:"button",onClick:H=>d(B),class:"text-red-400 hover:text-red-300"},"✕",8,WM)]))),128)),L("button",{type:"button",onClick:f,class:"text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"},D[12]||(D[12]=[L("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1),Qi(" Add Volume Mapping ")]))])]),L("div",null,[D[15]||(D[15]=L("label",{class:"block text-sm font-medium text-gray-300"},"Environment Variables",-1)),L("div",XM,[(Le(!0),Fe(lt,null,Ft(o.value.env,(P,B)=>(Le(),Fe("div",{key:B,class:"flex gap-2"},[_t(L("input",{"onUpdate:modelValue":H=>P.key=H,type:"text",placeholder:"Key",class:"w-1/2 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,8,$M),[[Wt,P.key]]),_t(L("input",{"onUpdate:modelValue":H=>P.value=H,type:"text",placeholder:"Value",class:"w-1/2 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,8,jM),[[Wt,P.value]]),L("button",{type:"button",onClick:H=>v(B),class:"text-red-400 hover:text-red-300"},"✕",8,qM)]))),128)),L("button",{type:"button",onClick:p,class:"text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"},D[14]||(D[14]=[L("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1),Qi(" Add Environment Variable ")]))])]),L("div",YM,[L("div",KM,[_t(L("input",{type:"checkbox","onUpdate:modelValue":D[3]||(D[3]=P=>o.value.privileged=P),id:"privileged",class:"w-4 h-4 bg-gray-700 border-gray-600 rounded"},null,512),[[Rp,o.value.privileged]]),D[16]||(D[16]=L("label",{for:"privileged",class:"text-sm font-medium text-gray-300"}," Privileged Mode ",-1))]),L("div",null,[D[17]||(D[17]=L("label",{class:"block text-sm font-medium text-gray-300"},"Network Mode",-1)),_t(L("input",{"onUpdate:modelValue":D[4]||(D[4]=P=>o.value.network=P),type:"text",placeholder:"e.g., container:gluetun",class:"mt-1 w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,512),[[Wt,o.value.network]])]),L("div",null,[D[19]||(D[19]=L("label",{class:"block text-sm font-medium text-gray-300"},"Capabilities",-1)),L("div",ZM,[L("div",JM,[_t(L("select",{"onUpdate:modelValue":D[5]||(D[5]=P=>h.value=P),class:"w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},D[18]||(D[18]=[L("option",{value:""},"Select capability",-1),L("option",{value:"NET_ADMIN"},"NET_ADMIN",-1),L("option",{value:"NET_RAW"},"NET_RAW",-1),L("option",{value:"SYS_ADMIN"},"SYS_ADMIN",-1)]),512),[[Do,h.value]]),L("button",{type:"button",onClick:E,class:"px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"}," Add ")]),L("div",QM,[(Le(!0),Fe(lt,null,Ft(o.value.capabilities,P=>(Le(),Fe("div",{key:P,class:"px-3 py-1 bg-gray-600 text-white rounded-lg flex items-center gap-2"},[Qi(je(P)+" ",1),L("button",{onClick:B=>S(P),class:"text-red-400 hover:text-red-300"},"✕",8,ey)]))),128))])])]),L("div",null,[D[20]||(D[20]=L("label",{class:"block text-sm font-medium text-gray-300"},"Devices",-1)),L("div",ty,[(Le(!0),Fe(lt,null,Ft(o.value.devices,(P,B)=>(Le(),Fe("div",{key:B,class:"flex gap-2"},[_t(L("input",{"onUpdate:modelValue":H=>o.value.devices[B]=H,type:"text",placeholder:"e.g., /dev/net/tun",class:"flex-1 bg-gray-700 border border-gray-600 rounded-xl px-4 py-2 text-white"},null,8,ny),[[Wt,o.value.devices[B]]]),L("button",{type:"button",onClick:H=>G(B),class:"px-2 py-1 bg-red-500 text-white rounded-xl hover:bg-red-600"}," ✕ ",8,iy)]))),128)),L("button",{type:"button",onClick:U,class:"px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-500"}," Add Device ")])])])])]),L("div",ry,[L("div",sy,[L("button",{type:"button",onClick:T,class:"px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-500"}," Save as Template "),L("div",oy,[L("button",{type:"button",onClick:_,class:"px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-500"}," Cancel "),L("button",{type:"submit",class:"px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600",disabled:i.value},je(i.value?"Creating...":O.isEdit?"Update":"Create"),9,ay)])])])],32)])]))}});const nu=ls(ly,[["__scopeId","data-v-93004182"]]),cy={class:"fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50"},uy={class:"bg-gray-800 w-full max-w-7xl h-[90vh] rounded-xl flex flex-col overflow-hidden"},fy={class:"flex justify-between items-center p-6 flex-none border-b border-gray-700"},dy={class:"flex items-center gap-4"},hy={class:"flex gap-3"},py={class:"flex-1 overflow-y-auto p-6"},my={key:0,class:"text-white"},gy={key:1,class:"text-white"},_y={key:2,class:"grid gap-4"},vy={class:"flex items-center gap-4"},xy={class:"text-white"},My={class:"font-semibold"},yy={class:"text-sm text-gray-400"},Sy={class:"flex items-center gap-2"},Ey=["onClick"],by={class:"flex gap-1"},Ty=["onClick"],wy=["onClick"],Ay=["onClick"],Ry=["onClick"],Cy=An({__name:"Containers",emits:["close","showModal"],setup(n,{emit:e}){const t=Ve(!1),i=Ve([]),r=Ve(!1),s=Ve(!1),a=Ve(null),o=Ve(!1),c=(()=>`http://${window.location.hostname}:8080/api/containers`)(),u=async()=>{try{console.log("Using API URL:",c),t.value=!0;const h=await fetch(c,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors",credentials:"omit"});if(console.log("Full response:",{status:h.status,statusText:h.statusText,headers:Object.fromEntries(h.headers.entries()),url:h.url}),!h.ok){const S=await h.text();throw console.error("Error response:",S),new Error(`Failed to fetch containers: ${h.status}`)}const E=await h.json();console.log("Raw container data:",E),i.value=E,console.log("Containers updated:",i.value)}catch(h){console.error("Error in fetchContainers:",h)}finally{t.value=!1}},f=h=>{a.value=h,s.value=!0},d=()=>{r.value=!1,s.value=!1,a.value=null},p=async h=>{var E;try{const S=s.value?`/api/containers/${(E=a.value)==null?void 0:E.ID}/update`:"/api/containers/create";if(!(await fetch(S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)})).ok)throw new Error("Failed to save container");await u(),d()}catch(S){console.error("Error saving container:",S)}},v=async(h,E)=>{try{console.log(`${E} container ${h}`);const S=await fetch(`${c}/${h}/${E}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"}});if(!S.ok){const w=await S.text();throw console.error(`Error response for ${E}:`,w),new Error(`Failed to ${E} container: ${S.status}`)}await u()}catch(S){console.error(`Error ${E}ing container:`,S)}};xr(()=>{console.log("Containers component mounted"),u()});const g=()=>{o.value=!1},m=()=>{o.value=!1};return(h,E)=>(Le(),Fe("div",cy,[L("div",uy,[L("div",fy,[L("div",dy,[L("button",{onClick:E[0]||(E[0]=S=>h.$emit("close")),class:"p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700/50"}," ← Back "),E[2]||(E[2]=L("h1",{class:"text-2xl font-bold text-white"},"Containers",-1))]),L("div",hy,[L("button",{onClick:u,class:"p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl text-gray-400 hover:text-white transition-colors",title:"Refresh containers"},E[3]||(E[3]=[L("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)])),L("button",{onClick:E[1]||(E[1]=S=>o.value=!0),class:"px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center gap-2 transition-colors"},E[4]||(E[4]=[L("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1),Qi(" Add Container ")]))])]),L("div",py,[t.value?(Le(),Fe("div",my,"Loading containers...")):i.value.length===0?(Le(),Fe("div",gy," No containers found. Add a container or visit the Marketplace to install containers. ")):(Le(),Fe("div",_y,[(Le(!0),Fe(lt,null,Ft(i.value,S=>(Le(),Fe("div",{key:S.ID,class:"bg-gray-700/50 p-4 rounded-xl flex items-center justify-between"},[L("div",vy,[L("div",xy,[L("h3",My,je(S.name),1),L("p",yy,je(S.image),1),L("p",{class:dn(["text-sm",{"text-green-400":S.status.includes("Up"),"text-red-400":!S.status.includes("Up")}])},je(S.status),3)])]),L("div",Sy,[L("button",{onClick:w=>f(S),class:"p-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg",title:"Edit Container"},E[5]||(E[5]=[L("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1)]),8,Ey),L("div",by,[S.status.includes("Up")?At("",!0):(Le(),Fe("button",{key:0,onClick:w=>v(S.ID,"start"),class:"p-2 bg-gray-600 hover:bg-gray-500 text-green-400 rounded-lg",title:"Start Container"},E[6]||(E[6]=[L("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)]),8,Ty)),S.status.includes("Up")?(Le(),Fe("button",{key:1,onClick:w=>v(S.ID,"stop"),class:"p-2 bg-gray-600 hover:bg-gray-500 text-yellow-400 rounded-lg",title:"Stop Container"},E[7]||(E[7]=[L("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}),L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"})],-1)]),8,wy)):At("",!0),L("button",{onClick:w=>v(S.ID,"restart"),class:"p-2 bg-gray-600 hover:bg-gray-500 text-blue-400 rounded-lg",title:"Restart Container"},E[8]||(E[8]=[L("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)]),8,Ay),L("button",{onClick:w=>v(S.ID,"delete"),class:"p-2 bg-gray-600 hover:bg-gray-500 text-red-400 rounded-lg",title:"Delete Container"},E[9]||(E[9]=[L("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)]),8,Ry)])])]))),128))]))])]),r.value||s.value?(Le(),jr(nu,{key:0,"is-edit":s.value,container:a.value,onClose:d,onSubmit:p},null,8,["is-edit","container"])):At("",!0),o.value?(Le(),jr(nu,{key:1,onClose:g,onCreated:m})):At("",!0)]))}});const Py=ls(Cy,[["__scopeId","data-v-e0c433b4"]]),Ly={class:"flex space-x-1.5"},Uy={class:"flex-none p-4 border-t border-gray-700/50"},Dy=An({__name:"WillowChat",setup(n){const e=Ve(!1),t=Ve(""),i=Ve([{type:"assistant",content:"Hello! I am W.I.L.L.O.W, how can I help you today?"}]),r=Ve(null),s=Ve(!1),a=Math.random().toString(36).substring(7),o="anonymous-"+Math.random().toString(36).substring(7),l=()=>{e.value=!e.value,e.value&&Wr(()=>{c()})},c=()=>{r.value&&(r.value.scrollTop=r.value.scrollHeight)},u=async()=>{if(!t.value.trim()||s.value)return;const f=t.value;i.value.push({type:"user",content:f}),t.value="",s.value=!0;try{const d=await fetch(bM,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:f,sessionId:a,userId:o})});if(!d.ok){const m=await d.text();throw console.error("Server response:",m),new Error("Failed to send message")}const p=await d.json();console.log("Raw Willow response:",p);let v=Array.isArray(p)?p[0]:p;const g=v.output||v.response||v.message||v.text||v.content;if(!g)throw console.error("Unexpected response format:",v),new Error("Invalid response format");i.value.push({type:"assistant",content:g})}catch(d){console.error("Error sending message:",d),i.value.push({type:"assistant",content:"Sorry, I encountered an error processing your message."})}finally{s.value=!1,await Wr(),c()}};return(f,d)=>(Le(),Fe("div",null,[L("button",{onClick:l,class:"fixed bottom-8 right-8 z-50 w-14 h-14 bg-gray-800/50 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:bg-gray-800/70 transition-all duration-300 shadow-lg hover:scale-105 border border-gray-700/50"},[L("div",Ly,[(Le(),Fe(lt,null,Ft(3,p=>L("div",{key:p,class:"w-1 bg-purple-400/80 rounded-full transform transition-all duration-500 audio-wave glow-effect",style:Si({height:"24px",animationDelay:`${p*.15}s`})},null,4)),64))])]),e.value?(Le(),Fe("div",{key:0,class:dn(["fixed bottom-24 right-8 w-96 h-[32rem] bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-700/50 transition-all duration-300 ease-out transform",e.value?"scale-100 opacity-100":"scale-95 opacity-0"])},[L("div",{class:"flex-none p-4 border-b border-gray-700/50"},[L("div",{class:"flex items-center justify-between"},[d[1]||(d[1]=L("div",{class:"flex items-center space-x-3"},[L("div",{class:"w-2 h-2 bg-purple-500 rounded-full animate-pulse"}),L("h3",{class:"text-white font-medium"},"W.I.L.L.O.W")],-1)),L("button",{onClick:l,class:"text-gray-400 hover:text-white transition-colors"}," ✕ ")])]),L("div",{class:"flex-1 overflow-y-auto p-4 space-y-4",ref_key:"chatContainer",ref:r},[(Le(!0),Fe(lt,null,Ft(i.value,(p,v)=>(Le(),Fe("div",{key:v,class:dn(["flex items-start space-x-3",p.type==="user"?"justify-end":""])},[L("div",{class:dn(["max-w-[80%] rounded-xl p-3",p.type==="user"?"bg-purple-600/50 text-white ml-auto":"bg-gray-700/50 text-gray-100"])},je(p.content),3)],2))),128))],512),L("div",Uy,[L("form",{onSubmit:Js(u,["prevent"]),class:"flex space-x-2"},[_t(L("input",{"onUpdate:modelValue":d[0]||(d[0]=p=>t.value=p),type:"text",placeholder:"Ask W.I.L.L.O.W something...",class:"flex-1 bg-gray-700/50 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"},null,512),[[Wt,t.value]]),d[2]||(d[2]=L("button",{type:"submit",class:"bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-4 py-2 transition-colors"}," Send ",-1))],32)])],2)):At("",!0)]))}});const Iy=ls(Dy,[["__scopeId","data-v-d41ca882"]]),Ny={class:"min-h-screen bg-gray-900 text-white"},Fy={class:"container mx-auto px-4 py-12"},Oy={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"},By={class:"bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg"},ky={class:"text-3xl font-bold text-white mb-2"},zy={class:"w-full bg-gray-700 rounded-full h-2"},Hy={class:"bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg"},Gy={class:"flex justify-between items-center mb-4"},Vy={class:"text-xs text-green-400"},Wy={class:"text-3xl font-bold text-white mb-2"},Xy={class:"text-sm text-gray-400 mb-2"},$y={class:"w-full bg-gray-700 rounded-full h-2"},jy={class:"bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg"},qy={class:"flex justify-between items-center mb-4"},Yy={class:"text-xs text-purple-400"},Ky={class:"text-3xl font-bold text-white mb-2"},Zy={class:"text-sm text-gray-400 mb-2"},Jy={class:"w-full bg-gray-700 rounded-full h-2"},Qy={class:"bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg"},eS={class:"text-3xl font-bold mb-2"},tS={class:"gradient-text"},nS={class:"text-sm text-gray-400"},iS={class:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"},rS=["onClick"],sS=["onClick"],oS={class:"flex items-center justify-center space-x-4"},aS={class:"text-4xl"},lS={class:"text-xl font-bold text-white"},cS={class:"text-center mt-4 text-gray-400"},uS={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},fS={class:"bg-gray-800 rounded-xl p-6 w-96 shadow-2xl emoji-picker"},dS={class:"mb-4"},hS={class:"relative"},pS={class:"text-2xl"},mS={key:0,class:"absolute top-full left-0 mt-2 w-full bg-gray-700 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto"},gS={class:"grid grid-cols-6 gap-2 p-3"},_S=["onClick"],vS={class:"mb-4"},xS={class:"mb-6"},MS={class:"fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"},yS={class:"flex items-end gap-2 px-6 py-4 bg-gray-800/20 backdrop-blur-xl rounded-2xl shadow-2xl"},SS=["onMouseenter","onClick"],ES={class:"absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-700 text-white rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"},ua="wagmios_custom_links",bS=An({__name:"App",setup(n){const e=Ve({cpu:0,memory:{used:0,total:0},disk:{used:0,total:0},uptime:0,elizaStatus:!1,elizaVersion:"",currentTime:""}),t=Ve(-1),i=Ve(!1),r=Ve(!1),s=[{emoji:"🐳",label:"Marketplace"},{emoji:"📦",label:"Containers"}],a=_=>{switch(console.log("Clicked dock item:",_.label),_.label){case"Marketplace":i.value=!0;break;case"Containers":r.value=!0;break}},o=Ve(new Map),l=_=>{const T=document.createElement("style");T.textContent=`
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
  `;const O=document.createElement("div");O.id="custom-controls",O.innerHTML=`
    <button id="close-btn" class="control-btn"></button>
    <button id="minimize-btn" class="control-btn"></button>
    <button id="maximize-btn" class="control-btn"></button>
  `,_.document.head.appendChild(T),_.document.body.insertBefore(O,_.document.body.firstChild);const D=_.document.getElementById("close-btn"),P=_.document.getElementById("maximize-btn"),B=_.document.getElementById("minimize-btn");D==null||D.addEventListener("click",()=>_.close()),P==null||P.addEventListener("click",()=>window.postMessage("maximize","*")),B==null||B.addEventListener("click",()=>window.postMessage("minimize","*"))},c=(_,T,O,D)=>{const P=(window.screen.width-O)/2,B=(window.screen.height-D)/2,H={width:O,height:D,left:P,top:B},te=`
    width=${O},
    height=${D},
    left=${P},
    top=${B},
    menubar=no,
    toolbar=no,
    location=no,
    status=no,
    resizable=yes,
    scrollbars=yes
  `,X=window.open(_,T,te);X&&(X.addEventListener("load",()=>{l(X)}),o.value.set(T,{window:X,originalSize:H}),window.addEventListener("message",$=>{const ce=o.value.get(T);if(ce!=null&&ce.window)switch($.data){case"maximize":const ae=window.screen.width*.9,we=window.screen.height*.9,he=(window.screen.width-ae)/2,Z=(window.screen.height-we)/2;ce.window.resizeTo(ae,we),ce.window.moveTo(he,Z);break;case"minimize":const{width:oe,height:ve,left:_e,top:b}=ce.originalSize;ce.window.resizeTo(oe,ve),ce.window.moveTo(_e,b);break}}),X.addEventListener("beforeunload",()=>{o.value.delete(T)}))},u=_=>{if(_===0)return"0 B";const T=1024,O=["B","KB","MB","GB","TB"],D=Math.floor(Math.log(_)/Math.log(T));return`${parseFloat((_/Math.pow(T,D)).toFixed(2))} ${O[D]}`},f=async()=>{try{const _=await fetch(TM,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors"});if(!_.ok)throw new Error(`HTTP error! status: ${_.status}`);const T=await _.json();e.value={...e.value,...T}}catch(_){console.error("Error fetching metrics:",_)}},d=Ve(!1),p=Ve([]),v=Ve(!1),g=Ve({title:"",url:"",emoji:"🔗"}),m=["🌐","🔗","📱","💻","⭐","🎮","📺","🎵","📚","📰","💬","📝","📈","🎨","🛠️","⚙️","📦","🔍","🎯","📊","🏢","🎬","📷","🎥","💡","🔔","📫","🗂️","📁","🔐","🌟","💼","🎪","🎭","🎧","📡","🔧","📌","🎲","🎯","🚀","⚡","🔥","💎","🎪","🎨","🎬","🎮","📱","💻"],h=_=>{g.value.emoji=_,d.value=!1},E=()=>{v.value=!1,d.value=!1,g.value={title:"",url:"",emoji:"🔗"}},S=()=>{try{const _=localStorage.getItem(ua);_&&(p.value=JSON.parse(_))}catch(_){console.error("Error loading custom links:",_),p.value=[]}},w=()=>{try{localStorage.setItem(ua,JSON.stringify(p.value))}catch(_){console.error("Error saving custom links:",_)}},C=()=>{let _=g.value.url;!_.startsWith("http://")&&!_.startsWith("https://")&&(_="https://"+_),p.value.push({title:g.value.title,url:_,emoji:g.value.emoji}),w(),E()},I=_=>{p.value.splice(_,1),w()};xr(()=>{document.addEventListener("click",T=>{!T.target.closest(".emoji-picker")&&d.value&&(d.value=!1)}),S(),f();const _=setInterval(f,5e3);js(()=>{clearInterval(_)}),window.addEventListener("storage",T=>{T.key===ua&&S()})}),js(()=>{o.value.forEach(_=>{var T;(T=_.window)==null||T.close()})});const U=_=>_?new Date(_).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}):"--:--:--",G=_=>_?new Date(_).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}):"--/--/----";return(_,T)=>(Le(),Fe("div",Ny,[xt(Vx),L("div",Fy,[L("div",Oy,[L("div",By,[T[7]||(T[7]=L("div",{class:"flex justify-between items-center mb-4"},[L("h3",{class:"text-gray-400 text-sm"},"CPU Usage"),L("span",{class:"text-xs text-blue-400"},"Real-time")],-1)),L("div",ky,je(e.value.cpu.toFixed(1))+"% ",1),L("div",zy,[L("div",{class:"bg-blue-600 h-2 rounded-full transition-all duration-300",style:Si({width:`${Math.min(e.value.cpu,100)}%`})},null,4)])]),L("div",Hy,[L("div",Gy,[T[8]||(T[8]=L("h3",{class:"text-gray-400 text-sm"},"Memory Usage",-1)),L("span",Vy,je(u(e.value.memory.total)),1)]),L("div",Wy,je((e.value.memory.used/e.value.memory.total*100).toFixed(1))+"% ",1),L("div",Xy,je(u(e.value.memory.used))+" used ",1),L("div",$y,[L("div",{class:"bg-green-600 h-2 rounded-full transition-all duration-300",style:Si({width:`${e.value.memory.used/e.value.memory.total*100}%`})},null,4)])]),L("div",jy,[L("div",qy,[T[9]||(T[9]=L("h3",{class:"text-gray-400 text-sm"},"Disk Usage",-1)),L("span",Yy,je(u(e.value.disk.total)),1)]),L("div",Ky,je((e.value.disk.used/e.value.disk.total*100).toFixed(1))+"% ",1),L("div",Zy,je(u(e.value.disk.used))+" used ",1),L("div",Jy,[L("div",{class:"bg-purple-600 h-2 rounded-full transition-all duration-300",style:Si({width:`${e.value.disk.used/e.value.disk.total*100}%`})},null,4)])]),L("div",Qy,[T[10]||(T[10]=L("div",{class:"flex justify-between items-center mb-4"},[L("h3",{class:"text-gray-400 text-sm"},"System Time"),L("span",{class:"text-xs text-purple-400"},"Live")],-1)),L("div",eS,[L("span",tS,je(U(e.value.currentTime)),1)]),L("div",nS,je(G(e.value.currentTime)),1)])]),L("div",iS,[(Le(!0),Fe(lt,null,Ft(p.value,(O,D)=>(Le(),Fe("div",{key:D,class:"bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg cursor-pointer hover:bg-gray-800/70 transition-all duration-300 relative"},[L("button",{onClick:Js(P=>I(D),["stop"]),class:"absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"}," ✕ ",8,rS),L("div",{onClick:P=>c(O.url,O.title,800,600),class:"w-full h-full"},[L("div",oS,[L("div",aS,je(O.emoji||"🔗"),1),L("div",lS,je(O.title),1)]),L("div",cS," Click to open "+je(O.title),1)],8,sS)]))),128)),L("div",{class:"bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 shadow-lg cursor-pointer hover:bg-gray-800/70 transition-all duration-300",onClick:T[0]||(T[0]=O=>v.value=!0)},T[11]||(T[11]=[L("div",{class:"flex items-center justify-center h-full"},[L("div",{class:"text-4xl text-gray-400 hover:text-white transition-colors"},"➕")],-1)]))]),v.value?(Le(),Fe("div",uS,[L("div",fS,[T[17]||(T[17]=L("h3",{class:"text-xl font-bold text-white mb-4"},"Add New Link",-1)),L("form",{onSubmit:Js(C,["prevent"])},[L("div",dS,[T[13]||(T[13]=L("label",{class:"block text-gray-400 mb-2"},"Icon",-1)),L("div",hS,[L("button",{type:"button",onClick:T[1]||(T[1]=O=>d.value=!d.value),class:"w-full bg-gray-700 text-white rounded-lg px-4 py-2 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"},[L("span",pS,je(g.value.emoji||"🔗"),1),T[12]||(T[12]=L("span",{class:"text-gray-400"},"▼",-1))]),d.value?(Le(),Fe("div",mS,[L("div",gS,[(Le(),Fe(lt,null,Ft(m,O=>L("button",{key:O,type:"button",onClick:D=>h(O),class:"text-2xl hover:bg-gray-600 p-2 rounded transition-colors cursor-pointer"},je(O),9,_S)),64))])])):At("",!0)])]),L("div",vS,[T[14]||(T[14]=L("label",{class:"block text-gray-400 mb-2"},"Title",-1)),_t(L("input",{"onUpdate:modelValue":T[2]||(T[2]=O=>g.value.title=O),type:"text",class:"w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter website title",required:""},null,512),[[Wt,g.value.title]])]),L("div",xS,[T[15]||(T[15]=L("label",{class:"block text-gray-400 mb-2"},"URL",-1)),_t(L("input",{"onUpdate:modelValue":T[3]||(T[3]=O=>g.value.url=O),type:"url",class:"w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"https://example.com",required:""},null,512),[[Wt,g.value.url]])]),L("div",{class:"flex justify-end space-x-4"},[L("button",{type:"button",onClick:E,class:"px-4 py-2 text-gray-400 hover:text-white transition-colors"}," Cancel "),T[16]||(T[16]=L("button",{type:"submit",class:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"}," Add Link ",-1))])],32)])])):At("",!0),T[18]||(T[18]=Zh('<div class="fixed bottom-4 left-4 flex items-center gap-4 text-gray-400"><a href="https://wagmilabs.fun" target="_blank" class="hover:text-white transition-colors flex items-center gap-2"><span class="text-xl">👷</span><span>Labs</span></a><a href="https://github.com/mentholmike/" target="_blank" class="hover:text-white transition-colors flex items-center gap-2"><span class="text-xl">🐙</span><span>Github</span></a></div>',1)),L("div",MS,[L("div",yS,[(Le(),Fe(lt,null,Ft(s,(O,D)=>L("div",{key:D,class:"relative group cursor-pointer",onMouseenter:P=>t.value=D,onMouseleave:T[4]||(T[4]=P=>t.value=-1),onClick:P=>a(O)},[L("div",{class:dn(["w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-200 text-4xl hover:bg-gray-700/20",{"scale-125":t.value===D}])},je(O.emoji),3),L("div",ES,je(O.label),1)],40,SS)),64))])]),i.value?(Le(),jr(SM,{key:1,onClose:T[5]||(T[5]=O=>i.value=!1)})):At("",!0),r.value?(Le(),jr(Py,{key:2,onClose:T[6]||(T[6]=O=>r.value=!1)})):At("",!0),xt(Iy)])]))}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ji=typeof document<"u";function ed(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function TS(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&ed(n.default)}const Ke=Object.assign;function fa(n,e){const t={};for(const i in e){const r=e[i];t[i]=pn(r)?r.map(n):n(r)}return t}const zr=()=>{},pn=Array.isArray,td=/#/g,wS=/&/g,AS=/\//g,RS=/=/g,CS=/\?/g,nd=/\+/g,PS=/%5B/g,LS=/%5D/g,id=/%5E/g,US=/%60/g,rd=/%7B/g,DS=/%7C/g,sd=/%7D/g,IS=/%20/g;function il(n){return encodeURI(""+n).replace(DS,"|").replace(PS,"[").replace(LS,"]")}function NS(n){return il(n).replace(rd,"{").replace(sd,"}").replace(id,"^")}function Da(n){return il(n).replace(nd,"%2B").replace(IS,"+").replace(td,"%23").replace(wS,"%26").replace(US,"`").replace(rd,"{").replace(sd,"}").replace(id,"^")}function FS(n){return Da(n).replace(RS,"%3D")}function OS(n){return il(n).replace(td,"%23").replace(CS,"%3F")}function BS(n){return n==null?"":OS(n).replace(AS,"%2F")}function Jr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const kS=/\/$/,zS=n=>n.replace(kS,"");function da(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=WS(i??e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:Jr(a)}}function HS(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function iu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function GS(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&gr(e.matched[i],t.matched[r])&&od(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function gr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function od(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!VS(n[t],e[t]))return!1;return!0}function VS(n,e){return pn(n)?ru(n,e):pn(e)?ru(e,n):n===e}function ru(n,e){return pn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function WS(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Qr;(function(n){n.pop="pop",n.push="push"})(Qr||(Qr={}));var Hr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Hr||(Hr={}));function XS(n){if(!n)if(Ji){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),zS(n)}const $S=/^[^#]+#/;function jS(n,e){return n.replace($S,"#")+e}function qS(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const vo=()=>({left:window.scrollX,top:window.scrollY});function YS(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=qS(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function su(n,e){return(history.state?history.state.position-e:-1)+n}const Ia=new Map;function KS(n,e){Ia.set(n,e)}function ZS(n){const e=Ia.get(n);return Ia.delete(n),e}let JS=()=>location.protocol+"//"+location.host;function ad(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),iu(l,"")}return iu(t,n)+i+r}function QS(n,e,t,i){let r=[],s=[],a=null;const o=({state:d})=>{const p=ad(n,location),v=t.value,g=e.value;let m=0;if(d){if(t.value=p,e.value=d,a&&a===v){a=null;return}m=g?d.position-g.position:0}else i(p);r.forEach(h=>{h(t.value,v,{delta:m,type:Qr.pop,direction:m?m>0?Hr.forward:Hr.back:Hr.unknown})})};function l(){a=t.value}function c(d){r.push(d);const p=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return s.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(Ke({},d.state,{scroll:vo()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function ou(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?vo():null}}function eE(n){const{history:e,location:t}=window,i={value:ad(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:JS()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](d)}}function a(l,c){const u=Ke({},e.state,ou(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=Ke({},r.value,e.state,{forward:l,scroll:vo()});s(u.current,u,!0);const f=Ke({},ou(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function tE(n){n=XS(n);const e=eE(n),t=QS(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Ke({location:"",base:n,go:i,createHref:jS.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function nE(n){return typeof n=="string"||n&&typeof n=="object"}function ld(n){return typeof n=="string"||typeof n=="symbol"}const cd=Symbol("");var au;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(au||(au={}));function _r(n,e){return Ke(new Error,{type:n,[cd]:!0},e)}function Nn(n,e){return n instanceof Error&&cd in n&&(e==null||!!(n.type&e))}const lu="[^/]+?",iE={sensitive:!1,strict:!1,start:!0,end:!0},rE=/[.+*?^${}()[\]/\\]/g;function sE(n,e){const t=Ke({},iE,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(t.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(rE,"\\$&"),p+=40;else if(d.type===1){const{value:v,repeatable:g,optional:m,regexp:h}=d;s.push({name:v,repeatable:g,optional:m});const E=h||lu;if(E!==lu){p+=10;try{new RegExp(`(${E})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${v}" (${E}): `+w.message)}}let S=g?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(S=m&&c.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),r+=S,p+=20,m&&(p+=-8),g&&(p+=-20),E===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",v=s[d-1];f[v.name]=p&&v.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:g,optional:m}=p,h=v in c?c[v]:"";if(pn(h)&&!g)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const E=pn(h)?h.join("/"):h;if(!E)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=E}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function oE(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ud(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=oE(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(cu(i))return 1;if(cu(r))return-1}return r.length-i.length}function cu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const aE={type:0,value:""},lE=/[a-zA-Z0-9_]/;function cE(n){if(!n)return[[]];if(n==="/")return[[aE]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:lE.test(l)?d():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function uE(n,e,t){const i=sE(cE(n.path),t),r=Ke(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function fE(n,e){const t=[],i=new Map;e=hu({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,p){const v=!p,g=fu(f);g.aliasOf=p&&p.record;const m=hu(e,f),h=[g];if("alias"in f){const w=typeof f.alias=="string"?[f.alias]:f.alias;for(const C of w)h.push(fu(Ke({},g,{components:p?p.record.components:g.components,path:C,aliasOf:p?p.record:g})))}let E,S;for(const w of h){const{path:C}=w;if(d&&C[0]!=="/"){const I=d.record.path,U=I[I.length-1]==="/"?"":"/";w.path=d.record.path+(C&&U+C)}if(E=uE(w,d,m),p?p.alias.push(E):(S=S||E,S!==E&&S.alias.push(E),v&&f.name&&!du(E)&&a(f.name)),fd(E)&&l(E),g.children){const I=g.children;for(let U=0;U<I.length;U++)s(I[U],E,p&&p.children[U])}p=p||E}return S?()=>{a(S)}:zr}function a(f){if(ld(f)){const d=i.get(f);d&&(i.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const d=pE(f,t);t.splice(d,0,f),f.record.name&&!du(f)&&i.set(f.record.name,f)}function c(f,d){let p,v={},g,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw _r(1,{location:f});m=p.record.name,v=Ke(uu(d.params,p.keys.filter(S=>!S.optional).concat(p.parent?p.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),f.params&&uu(f.params,p.keys.map(S=>S.name))),g=p.stringify(v)}else if(f.path!=null)g=f.path,p=t.find(S=>S.re.test(g)),p&&(v=p.parse(g),m=p.record.name);else{if(p=d.name?i.get(d.name):t.find(S=>S.re.test(d.path)),!p)throw _r(1,{location:f,currentLocation:d});m=p.record.name,v=Ke({},d.params,f.params),g=p.stringify(v)}const h=[];let E=p;for(;E;)h.unshift(E.record),E=E.parent;return{name:m,path:g,params:v,matched:h,meta:hE(h)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function uu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function fu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:dE(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function dE(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function du(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function hE(n){return n.reduce((e,t)=>Ke(e,t.meta),{})}function hu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function pE(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;ud(n,e[s])<0?i=s:t=s+1}const r=mE(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function mE(n){let e=n;for(;e=e.parent;)if(fd(e)&&ud(n,e)===0)return e}function fd({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function gE(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(nd," "),a=s.indexOf("="),o=Jr(a<0?s:s.slice(0,a)),l=a<0?null:Jr(s.slice(a+1));if(o in e){let c=e[o];pn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function pu(n){let e="";for(let t in n){const i=n[t];if(t=FS(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(pn(i)?i.map(s=>s&&Da(s)):[i&&Da(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function _E(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=pn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const vE=Symbol(""),mu=Symbol(""),rl=Symbol(""),dd=Symbol(""),Na=Symbol("");function Pr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Qn(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=d=>{d===!1?l(_r(4,{from:t,to:e})):d instanceof Error?l(d):nE(d)?l(_r(2,{from:e,to:d})):(a&&i.enterCallbacks[r]===a&&typeof d=="function"&&a.push(d),o())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function ha(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(ed(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Qn(u,t,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=TS(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&Qn(p,t,i,a,o,r)()}))}}return s}function gu(n){const e=Hn(rl),t=Hn(dd),i=$t(()=>{const l=rr(n.to);return e.resolve(l)}),r=$t(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(gr.bind(null,u));if(d>-1)return d;const p=_u(l[c-2]);return c>1&&_u(u)===p&&f[f.length-1].path!==p?f.findIndex(gr.bind(null,l[c-2])):d}),s=$t(()=>r.value>-1&&EE(t.params,i.value.params)),a=$t(()=>r.value>-1&&r.value===t.matched.length-1&&od(t.params,i.value.params));function o(l={}){if(SE(l)){const c=e[rr(n.replace)?"replace":"push"](rr(n.to)).catch(zr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:$t(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function xE(n){return n.length===1?n[0]:n}const ME=An({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gu,setup(n,{slots:e}){const t=oo(gu(n)),{options:i}=Hn(rl),r=$t(()=>({[vu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[vu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&xE(e.default(t));return n.custom?s:bf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),yE=ME;function SE(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function EE(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!pn(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function _u(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const vu=(n,e,t)=>n??e??t,bE=An({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Hn(Na),r=$t(()=>n.route||i.value),s=Hn(mu,0),a=$t(()=>{let c=rr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=$t(()=>r.value.matched[a.value]);Fs(mu,$t(()=>a.value+1)),Fs(vE,o),Fs(Na,r);const l=Ve();return Os(()=>[l.value,o.value,n.name],([c,u,f],[d,p,v])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!gr(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,d=f&&f.components[u];if(!d)return xu(t.default,{Component:d,route:c});const p=f.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=bf(d,Ke({},v,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return xu(t.default,{Component:m,route:c})||m}}});function xu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const TE=bE;function wE(n){const e=fE(n.routes,n),t=n.parseQuery||gE,i=n.stringifyQuery||pu,r=n.history,s=Pr(),a=Pr(),o=Pr(),l=Yd(Kn);let c=Kn;Ji&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=fa.bind(null,b=>""+b),f=fa.bind(null,BS),d=fa.bind(null,Jr);function p(b,le){let ne,q;return ld(b)?(ne=e.getRecordMatcher(b),q=le):q=b,e.addRoute(q,ne)}function v(b){const le=e.getRecordMatcher(b);le&&e.removeRoute(le)}function g(){return e.getRoutes().map(b=>b.record)}function m(b){return!!e.getRecordMatcher(b)}function h(b,le){if(le=Ke({},le||l.value),typeof b=="string"){const R=da(t,b,le.path),k=e.resolve({path:R.path},le),ie=r.createHref(R.fullPath);return Ke(R,k,{params:d(k.params),hash:Jr(R.hash),redirectedFrom:void 0,href:ie})}let ne;if(b.path!=null)ne=Ke({},b,{path:da(t,b.path,le.path).path});else{const R=Ke({},b.params);for(const k in R)R[k]==null&&delete R[k];ne=Ke({},b,{params:f(R)}),le.params=f(le.params)}const q=e.resolve(ne,le),xe=b.hash||"";q.params=u(d(q.params));const Pe=HS(i,Ke({},b,{hash:NS(xe),path:q.path})),y=r.createHref(Pe);return Ke({fullPath:Pe,hash:xe,query:i===pu?_E(b.query):b.query||{}},q,{redirectedFrom:void 0,href:y})}function E(b){return typeof b=="string"?da(t,b,l.value.path):Ke({},b)}function S(b,le){if(c!==b)return _r(8,{from:le,to:b})}function w(b){return U(b)}function C(b){return w(Ke(E(b),{replace:!0}))}function I(b){const le=b.matched[b.matched.length-1];if(le&&le.redirect){const{redirect:ne}=le;let q=typeof ne=="function"?ne(b):ne;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=E(q):{path:q},q.params={}),Ke({query:b.query,hash:b.hash,params:q.path!=null?{}:b.params},q)}}function U(b,le){const ne=c=h(b),q=l.value,xe=b.state,Pe=b.force,y=b.replace===!0,R=I(ne);if(R)return U(Ke(E(R),{state:typeof R=="object"?Ke({},xe,R.state):xe,force:Pe,replace:y}),le||ne);const k=ne;k.redirectedFrom=le;let ie;return!Pe&&GS(i,q,ne)&&(ie=_r(16,{to:k,from:q}),we(q,q,!0,!1)),(ie?Promise.resolve(ie):T(k,q)).catch(Y=>Nn(Y)?Nn(Y,2)?Y:ae(Y):$(Y,k,q)).then(Y=>{if(Y){if(Nn(Y,2))return U(Ke({replace:y},E(Y.to),{state:typeof Y.to=="object"?Ke({},xe,Y.to.state):xe,force:Pe}),le||k)}else Y=D(k,q,!0,y,xe);return O(k,q,Y),Y})}function G(b,le){const ne=S(b,le);return ne?Promise.reject(ne):Promise.resolve()}function _(b){const le=oe.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(b):b()}function T(b,le){let ne;const[q,xe,Pe]=AE(b,le);ne=ha(q.reverse(),"beforeRouteLeave",b,le);for(const R of q)R.leaveGuards.forEach(k=>{ne.push(Qn(k,b,le))});const y=G.bind(null,b,le);return ne.push(y),_e(ne).then(()=>{ne=[];for(const R of s.list())ne.push(Qn(R,b,le));return ne.push(y),_e(ne)}).then(()=>{ne=ha(xe,"beforeRouteUpdate",b,le);for(const R of xe)R.updateGuards.forEach(k=>{ne.push(Qn(k,b,le))});return ne.push(y),_e(ne)}).then(()=>{ne=[];for(const R of Pe)if(R.beforeEnter)if(pn(R.beforeEnter))for(const k of R.beforeEnter)ne.push(Qn(k,b,le));else ne.push(Qn(R.beforeEnter,b,le));return ne.push(y),_e(ne)}).then(()=>(b.matched.forEach(R=>R.enterCallbacks={}),ne=ha(Pe,"beforeRouteEnter",b,le,_),ne.push(y),_e(ne))).then(()=>{ne=[];for(const R of a.list())ne.push(Qn(R,b,le));return ne.push(y),_e(ne)}).catch(R=>Nn(R,8)?R:Promise.reject(R))}function O(b,le,ne){o.list().forEach(q=>_(()=>q(b,le,ne)))}function D(b,le,ne,q,xe){const Pe=S(b,le);if(Pe)return Pe;const y=le===Kn,R=Ji?history.state:{};ne&&(q||y?r.replace(b.fullPath,Ke({scroll:y&&R&&R.scroll},xe)):r.push(b.fullPath,xe)),l.value=b,we(b,le,ne,y),ae()}let P;function B(){P||(P=r.listen((b,le,ne)=>{if(!ve.listening)return;const q=h(b),xe=I(q);if(xe){U(Ke(xe,{replace:!0,force:!0}),q).catch(zr);return}c=q;const Pe=l.value;Ji&&KS(su(Pe.fullPath,ne.delta),vo()),T(q,Pe).catch(y=>Nn(y,12)?y:Nn(y,2)?(U(Ke(E(y.to),{force:!0}),q).then(R=>{Nn(R,20)&&!ne.delta&&ne.type===Qr.pop&&r.go(-1,!1)}).catch(zr),Promise.reject()):(ne.delta&&r.go(-ne.delta,!1),$(y,q,Pe))).then(y=>{y=y||D(q,Pe,!1),y&&(ne.delta&&!Nn(y,8)?r.go(-ne.delta,!1):ne.type===Qr.pop&&Nn(y,20)&&r.go(-1,!1)),O(q,Pe,y)}).catch(zr)}))}let H=Pr(),te=Pr(),X;function $(b,le,ne){ae(b);const q=te.list();return q.length?q.forEach(xe=>xe(b,le,ne)):console.error(b),Promise.reject(b)}function ce(){return X&&l.value!==Kn?Promise.resolve():new Promise((b,le)=>{H.add([b,le])})}function ae(b){return X||(X=!b,B(),H.list().forEach(([le,ne])=>b?ne(b):le()),H.reset()),b}function we(b,le,ne,q){const{scrollBehavior:xe}=n;if(!Ji||!xe)return Promise.resolve();const Pe=!ne&&ZS(su(b.fullPath,0))||(q||!ne)&&history.state&&history.state.scroll||null;return Wr().then(()=>xe(b,le,Pe)).then(y=>y&&YS(y)).catch(y=>$(y,b,le))}const he=b=>r.go(b);let Z;const oe=new Set,ve={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:g,resolve:h,options:n,push:w,replace:C,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:te.add,isReady:ce,install(b){const le=this;b.component("RouterLink",yE),b.component("RouterView",TE),b.config.globalProperties.$router=le,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>rr(l)}),Ji&&!Z&&l.value===Kn&&(Z=!0,w(r.location).catch(xe=>{}));const ne={};for(const xe in Kn)Object.defineProperty(ne,xe,{get:()=>l.value[xe],enumerable:!0});b.provide(rl,le),b.provide(dd,Vu(ne)),b.provide(Na,l);const q=b.unmount;oe.add(b),b.unmount=function(){oe.delete(b),oe.size<1&&(c=Kn,P&&P(),P=null,l.value=Kn,Z=!1,X=!1),q()}}};function _e(b){return b.reduce((le,ne)=>le.then(()=>_(ne)),Promise.resolve())}return ve}function AE(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>gr(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>gr(c,l))||r.push(l))}return[t,i,r]}const RE={class:"relative z-10"},CE=An({__name:"Dashboard",setup(n){return(e,t)=>(Le(),Fe("div",RE,t[0]||(t[0]=[L("div",{class:"container mx-auto px-4 py-8"},null,-1)])))}}),PE=wE({history:tE(),routes:[{path:"/",name:"dashboard",component:CE}]}),sl=Dp(bS),LE=Bp();sl.use(LE);sl.use(PE);sl.mount("#app");
