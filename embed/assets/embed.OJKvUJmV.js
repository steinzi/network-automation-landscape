(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const Gt=(e,t)=>e===t,oe=Symbol("solid-proxy"),Ht=Symbol("solid-track"),ae={equals:Gt};let yt=St;const U=1,ce=2,pt={owned:null,cleanups:null,context:null,owner:null};var w=null;let be=null,Yt=null,p=null,v=null,j=null,ge=0;function se(e,t){const n=p,i=w,r=e.length===0,s=t===void 0?i:t,l=r?pt:{owned:null,cleanups:null,context:s?s.context:null,owner:s},o=r?e:()=>e(()=>$(()=>me(l)));w=l,p=null;try{return q(o,!0)}finally{p=n,w=i}}function y(e,t){t=t?Object.assign({},ae,t):ae;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),At(n,r));return[xt.bind(n),i]}function E(e,t,n){const i=ze(e,t,!1,U);te(i)}function Te(e,t,n){yt=Jt;const i=ze(e,t,!1,U);i.user=!0,j?j.push(i):te(i)}function _(e,t,n){n=n?Object.assign({},ae,n):ae;const i=ze(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,te(i),xt.bind(i)}function Wt(e){return q(e,!1)}function $(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function it(e,t,n){const i=Array.isArray(e);let r;return s=>{let l;if(i){l=Array(e.length);for(let a=0;a<e.length;a++)l[a]=e[a]()}else l=e();const o=$(()=>t(l,r,s));return r=l,o}}function Vt(e){Te(()=>$(e))}function Xt(e){return w===null||(w.cleanups===null?w.cleanups=[e]:w.cleanups.push(e)),e}function Zt(e,t){const n=Symbol("context");return{id:n,Provider:tn(n),defaultValue:e}}function Kt(e){let t;return w&&w.context&&(t=w.context[e.id])!==void 0?t:e.defaultValue}function bt(e){const t=_(e),n=_(()=>ke(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}function xt(){if(this.sources&&this.state)if(this.state===U)te(this);else{const e=v;v=null,q(()=>fe(this),!1),v=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function At(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&q(()=>{for(let r=0;r<e.observers.length;r+=1){const s=e.observers[r],l=be&&be.running;l&&be.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?v.push(s):j.push(s),s.observers&&vt(s)),l||(s.state=U)}if(v.length>1e6)throw v=[],new Error},!1)),t}function te(e){if(!e.fn)return;me(e);const t=ge;qt(e,e.value,t)}function qt(e,t,n){let i;const r=w,s=p;p=w=e;try{i=e.fn(t)}catch(l){return e.pure&&(e.state=U,e.owned&&e.owned.forEach(me),e.owned=null),e.updatedAt=n+1,Ct(l)}finally{p=s,w=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?At(e,i):e.value=i,e.updatedAt=n)}function ze(e,t,n,i=U,r){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:w?w.context:null,pure:n};return w===null||w!==pt&&(w.owned?w.owned.push(s):w.owned=[s]),s}function ue(e){if(e.state===0)return;if(e.state===ce)return fe(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ge);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===U)te(e);else if(e.state===ce){const i=v;v=null,q(()=>fe(e,t[0]),!1),v=i}}function q(e,t){if(v)return e();let n=!1;t||(v=[]),j?n=!0:j=[],ge++;try{const i=e();return Qt(n),i}catch(i){n||(j=null),v=null,Ct(i)}}function Qt(e){if(v&&(St(v),v=null),e)return;const t=j;j=null,t.length&&q(()=>yt(t),!1)}function St(e){for(let t=0;t<e.length;t++)ue(e[t])}function Jt(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:ue(i)}for(t=0;t<n;t++)ue(e[t])}function fe(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===U?i!==t&&(!i.updatedAt||i.updatedAt<ge)&&ue(i):r===ce&&fe(i,t)}}}function vt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ce,n.pure?v.push(n):j.push(n),n.observers&&vt(n))}}function me(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const s=r.pop(),l=n.observerSlots.pop();i<r.length&&(s.sourceSlots[l]=i,r[i]=s,n.observerSlots[i]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)me(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function en(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ct(e,t=w){throw en(e)}function ke(e){if(typeof e=="function"&&!e.length)return ke(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=ke(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function tn(e,t){return function(i){let r;return E(()=>r=$(()=>(w.context={...w.context,[e]:i.value},bt(()=>i.children))),void 0),r}}const nn=Symbol("fallback");function st(e){for(let t=0;t<e.length;t++)e[t]()}function rn(e,t,n={}){let i=[],r=[],s=[],l=0,o=t.length>1?[]:null;return Xt(()=>st(s)),()=>{let a=e()||[],d=a.length,u,c;return a[Ht],$(()=>{let x,L,N,G,Y,I,T,M,F;if(d===0)l!==0&&(st(s),s=[],i=[],r=[],l=0,o&&(o=[])),n.fallback&&(i=[nn],r[0]=se(ne=>(s[0]=ne,n.fallback())),l=1);else if(l===0){for(r=new Array(d),c=0;c<d;c++)i[c]=a[c],r[c]=se(g);l=d}else{for(N=new Array(d),G=new Array(d),o&&(Y=new Array(d)),I=0,T=Math.min(l,d);I<T&&i[I]===a[I];I++);for(T=l-1,M=d-1;T>=I&&M>=I&&i[T]===a[M];T--,M--)N[M]=r[T],G[M]=s[T],o&&(Y[M]=o[T]);for(x=new Map,L=new Array(M+1),c=M;c>=I;c--)F=a[c],u=x.get(F),L[c]=u===void 0?-1:u,x.set(F,c);for(u=I;u<=T;u++)F=i[u],c=x.get(F),c!==void 0&&c!==-1?(N[c]=r[u],G[c]=s[u],o&&(Y[c]=o[u]),c=L[c],x.set(F,c)):s[u]();for(c=I;c<d;c++)c in N?(r[c]=N[c],s[c]=G[c],o&&(o[c]=Y[c],o[c](c))):r[c]=se(g);r=r.slice(0,l=d),i=a.slice(0)}return r});function g(x){if(s[c]=x,o){const[L,N]=y(c);return o[c]=N,t(a[c],L)}return t(a[c])}}}let sn=!1;function f(e,t){return $(()=>e(t||{}))}function re(){return!0}const Pe={get(e,t,n){return t===oe?n:e.get(t)},has(e,t){return t===oe?!0:e.has(t)},set:re,deleteProperty:re,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:re,deleteProperty:re}},ownKeys(e){return e.keys()}};function xe(e){return(e=typeof e=="function"?e():e)?e:{}}function ln(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ae(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&oe in o,e[l]=typeof o=="function"?(t=!0,_(o)):o}if(t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const a=xe(e[o])[l];if(a!==void 0)return a}},has(l){for(let o=e.length-1;o>=0;o--)if(l in xe(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(xe(e[o])));return[...new Set(l)]}},Pe);const n={},i=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const a=Object.getOwnPropertyNames(o);for(let d=a.length-1;d>=0;d--){const u=a[d];if(u==="__proto__"||u==="constructor")continue;const c=Object.getOwnPropertyDescriptor(o,u);if(!i[u])i[u]=c.get?{enumerable:!0,configurable:!0,get:ln.bind(n[u]=[c.get.bind(o)])}:c.value!==void 0?c:void 0;else{const g=n[u];g&&(c.get?g.push(c.get.bind(o)):c.value!==void 0&&g.push(()=>c.value))}}}const r={},s=Object.keys(i);for(let l=s.length-1;l>=0;l--){const o=s[l],a=i[o];a&&a.get?Object.defineProperty(r,o,a):r[o]=a?a.value:void 0}return r}function _t(e,...t){if(oe in e){const r=new Set(t.length>1?t.flat():t[0]),s=t.map(l=>new Proxy({get(o){return l.includes(o)?e[o]:void 0},has(o){return l.includes(o)&&o in e},keys(){return l.filter(o=>o in e)}},Pe));return s.push(new Proxy({get(l){return r.has(l)?void 0:e[l]},has(l){return r.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!r.has(l))}},Pe)),s}const n={},i=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,r),l=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let o=!1,a=0;for(const d of t)d.includes(r)&&(o=!0,l?i[a][r]=s.value:Object.defineProperty(i[a],r,s)),++a;o||(l?n[r]=s.value:Object.defineProperty(n,r,s))}return[...i,n]}const Et=e=>`Stale read from <${e}>.`;function Q(e){const t="fallback"in e&&{fallback:()=>e.fallback};return _(rn(()=>e.each,e.children,t||void 0))}function C(e){const t=e.keyed,n=_(()=>e.when,void 0,{equals:(i,r)=>t?i===r:!i==!r});return _(()=>{const i=n();if(i){const r=e.children;return typeof r=="function"&&r.length>0?$(()=>r(t?i:()=>{if(!$(n))throw Et("Show");return e.when})):r}return e.fallback},void 0,void 0)}function on(e){let t=!1;const n=(s,l)=>(t?s[1]===l[1]:!s[1]==!l[1])&&s[2]===l[2],i=bt(()=>e.children),r=_(()=>{let s=i();Array.isArray(s)||(s=[s]);for(let l=0;l<s.length;l++){const o=s[l].when;if(o)return t=!!s[l].keyed,[l,o,s[l]]}return[-1]},void 0,{equals:n});return _(()=>{const[s,l,o]=r();if(s<0)return e.fallback;const a=o.children;return typeof a=="function"&&a.length>0?$(()=>a(t?l:()=>{if($(r)[0]!==s)throw Et("Match");return o.when})):a},void 0,void 0)}function ie(e){return e}const an=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],cn=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...an]),un=new Set(["innerHTML","textContent","innerText","children"]),fn=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),dn=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function gn(e,t){const n=dn[e];return typeof n=="object"?n[t]?n.$:void 0:n}const mn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),hn=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),wn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function yn(e,t,n){let i=n.length,r=t.length,s=i,l=0,o=0,a=t[r-1].nextSibling,d=null;for(;l<r||o<s;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[s-1];)r--,s--;if(r===l){const u=s<i?o?n[o-1].nextSibling:n[s-o]:a;for(;o<s;)e.insertBefore(n[o++],u)}else if(s===o)for(;l<r;)(!d||!d.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[o]===t[r-1]){const u=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--s],u),t[r]=n[s]}else{if(!d){d=new Map;let c=o;for(;c<s;)d.set(n[c],c++)}const u=d.get(t[l]);if(u!=null)if(o<u&&u<s){let c=l,g=1,x;for(;++c<r&&c<s&&!((x=d.get(t[c]))==null||x!==u+g);)g++;if(g>u-o){const L=t[l];for(;o<u;)e.insertBefore(n[o++],L)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const lt="_$DX_DELEGATE";function pn(e,t,n,i={}){let r;return se(s=>{r=s,t===document?e():b(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function P(e,t,n){let i;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},s=()=>(i||(i=r())).cloneNode(!0);return s.cloneNode=s,s}function $t(e,t=window.document){const n=t[lt]||(t[lt]=new Set);for(let i=0,r=e.length;i<r;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,En))}}function O(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function bn(e,t,n,i){i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i)}function A(e,t){t==null?e.removeAttribute("class"):e.className=t}function xn(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=s=>r.call(e,n[1],s))}else e.addEventListener(t,n)}function An(e,t,n={}){const i=Object.keys(t||{}),r=Object.keys(n);let s,l;for(s=0,l=r.length;s<l;s++){const o=r[s];!o||o==="undefined"||t[o]||(ot(e,o,!1),delete n[o])}for(s=0,l=i.length;s<l;s++){const o=i[s],a=!!t[o];!o||o==="undefined"||n[o]===a||!a||(ot(e,o,!0),n[o]=a)}return n}function Sn(e,t,n){if(!t)return n?O(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let r,s;for(s in n)t[s]==null&&i.removeProperty(s),delete n[s];for(s in t)r=t[s],r!==n[s]&&(i.setProperty(s,r),n[s]=r);return n}function It(e,t={},n,i){const r={};return E(()=>r.children=ee(e,t.children,r.children)),E(()=>typeof t.ref=="function"&&vn(t.ref,e)),E(()=>Cn(e,t,n,!0,r,!0)),r}function vn(e,t,n){return $(()=>e(t,n))}function b(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return ee(e,t,i,n);E(r=>ee(e,t(),r,n),i)}function Cn(e,t,n,i,r={},s=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=at(e,l,null,r[l],n,s)}for(const l in t){if(l==="children")continue;const o=t[l];r[l]=at(e,l,o,r[l],n,s)}}function _n(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ot(e,t,n){const i=t.trim().split(/\s+/);for(let r=0,s=i.length;r<s;r++)e.classList.toggle(i[r],n)}function at(e,t,n,i,r,s){let l,o,a,d,u;if(t==="style")return Sn(e,n,i);if(t==="classList")return An(e,n,i);if(n===i)return i;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);i&&e.removeEventListener(c,i),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);i&&e.removeEventListener(c,i,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),g=mn.has(c);if(!g&&i){const x=Array.isArray(i)?i[0]:i;e.removeEventListener(c,x)}(g||n)&&(xn(e,c,n,g),g&&$t([c]))}else if(t.slice(0,5)==="attr:")O(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(a=un.has(t))||!r&&((d=gn(t,e.tagName))||(o=cn.has(t)))||(l=e.nodeName.includes("-")))u&&(t=t.slice(5),o=!0),t==="class"||t==="className"?A(e,n):l&&!o&&!a?e[_n(t)]=n:e[d||t]=n;else{const c=r&&t.indexOf(":")>-1&&wn[t.split(":")[0]];c?bn(e,c,t,n):O(e,fn[t]||t,n)}return n}function En(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const i=n[t];if(i&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?i.call(n,r,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function ee(e,t,n,i,r){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(l){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=Z(e,n,i,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=Z(e,n,i);else{if(s==="function")return E(()=>{let o=t();for(;typeof o=="function";)o=o();n=ee(e,o,n,i)}),()=>n;if(Array.isArray(t)){const o=[],a=n&&Array.isArray(n);if(Le(o,t,n,r))return E(()=>n=ee(e,o,n,i,!0)),()=>n;if(o.length===0){if(n=Z(e,n,i),l)return n}else a?n.length===0?ct(e,o,i):yn(e,n,o):(n&&Z(e),ct(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=Z(e,n,i,t);Z(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Le(e,t,n,i){let r=!1;for(let s=0,l=t.length;s<l;s++){let o=t[s],a=n&&n[e.length],d;if(!(o==null||o===!0||o===!1))if((d=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=Le(e,o,a)||r;else if(d==="function")if(i){for(;typeof o=="function";)o=o();r=Le(e,Array.isArray(o)?o:[o],Array.isArray(a)?a:[a])||r}else e.push(o),r=!0;else{const u=String(o);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return r}function ct(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function Z(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const a=o.parentNode===e;!s&&!l?a?e.replaceChild(r,o):e.insertBefore(r,n):a&&o.remove()}else s=!0}}else e.insertBefore(r,n);return[r]}const $n="http://www.w3.org/2000/svg";function In(e,t=!1){return t?document.createElementNS($n,e):document.createElement(e)}function Tt(e){const[t,n]=_t(e,["component"]),i=_(()=>t.component);return _(()=>{const r=i();switch(typeof r){case"function":return $(()=>r(n));case"string":const s=hn.has(r),l=In(r,s);return It(l,n,s),l}})}let Tn={data:""},kn=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Tn,Pn=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ln=/\/\*[^]*?\*\/|  +/g,ut=/\n+/g,H=(e,t)=>{let n="",i="",r="";for(let s in e){let l=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+l+";":i+=s[1]=="f"?H(l,s):s+"{"+H(l,s[1]=="k"?"":t)+"}":typeof l=="object"?i+=H(l,t?t.replace(/([^,])+/g,o=>s.replace(/(^:.*)|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,o):o?o+" "+a:a)):s):l!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=H.p?H.p(s,l):s+":"+l+";")}return n+(t&&r?t+"{"+r+"}":r)+i},R={},kt=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+kt(e[n]);return t}return e},Nn=(e,t,n,i,r)=>{let s=kt(e),l=R[s]||(R[s]=(a=>{let d=0,u=11;for(;d<a.length;)u=101*u+a.charCodeAt(d++)>>>0;return"go"+u})(s));if(!R[l]){let a=s!==e?e:(d=>{let u,c,g=[{}];for(;u=Pn.exec(d.replace(Ln,""));)u[4]?g.shift():u[3]?(c=u[3].replace(ut," ").trim(),g.unshift(g[0][c]=g[0][c]||{})):g[0][u[1]]=u[2].replace(ut," ").trim();return g[0]})(e);R[l]=H(r?{["@keyframes "+l]:a}:a,n?"":"."+l)}let o=n&&R.g?R.g:null;return n&&(R.g=R[l]),((a,d,u,c)=>{c?d.data=d.data.replace(c,a):d.data.indexOf(a)===-1&&(d.data=u?a+d.data:d.data+a)})(R[l],t,i,o),l},Mn=(e,t,n)=>e.reduce((i,r,s)=>{let l=t[s];if(l&&l.call){let o=l(n),a=o&&o.props&&o.props.className||/^go/.test(o)&&o;l=a?"."+a:o&&typeof o=="object"?o.props?"":H(o,""):o===!1?"":o}return i+r+(l??"")},"");function h(e){let t=this||{},n=e.call?e(t.p):e;return Nn(n.unshift?n.raw?Mn(n,[].slice.call(arguments,1),t.p):n.reduce((i,r)=>Object.assign(i,r&&r.call?r(t.p):r),{}):n,kn(t.target),t.g,t.o,t.k)}h.bind({g:1});h.bind({k:1});const zn=Zt();function Pt(e){let t=this||{};return(...n)=>{const i=r=>{const s=Kt(zn),l=Ae(r,{theme:s}),o=Ae(l,{get class(){const x=l.class,L="class"in l&&/^go[0-9]+/.test(x);let N=h.apply({target:t.target,o:L,p:l,g:t.g},n);return[x,N].filter(Boolean).join(" ")}}),[a,d]=_t(o,["as","theme"]),u=d,c=a.as||e;let g;return typeof c=="function"?g=c(u):t.g==1?(g=document.createElement(c),It(g,u)):g=Tt(Ae({component:c},u)),g};return i.class=r=>$(()=>h.apply({target:t.target,p:r,g:t.g},n)),i}}const B=new Proxy(Pt,{get(e,t){return e(t)}});function On(){const e=Pt.call({g:1},"div").apply(null,arguments);return function(n){return e(n),null}}const Dn=B("a")`
  padding-bottom: ${e=>typeof e.paddingBottom<"u"?`${e.paddingBottom}px`:"0"};
`,Bn=h`
  color: inherit;
  text-decoration: underline;

  &:hover {
    color: inherit;
  }
`,J=e=>f(Dn,{get title(){return e.title},get class(){return`${Bn} ${e.class}`},get href(){return e.href},target:"_blank",rel:"noopener noreferrer",get"aria-label"(){return e.label||"Open external link"},tabIndex:0,get paddingBottom(){return e.paddingBottom},get children(){return e.children}});var Rn=P("<div>");const jn=B("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem;
  background-color: transparent;
  z-index: 100;
`,Fn=B("div")`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Un=B("div")`
  height: 50px;
  width: 50px;
  margin-left: -25px;
  margin-top: -25px;
  border-radius: 50%;
  display: inline-block;
  position: relative;

  &::before,
  &::after {
    content: '';
    border: 2px solid var(--color2);
    border: ${e=>e.bgColor==="transparent"?"2px solid rgba(0,0,0,0.25)":`2px solid ${e.bgColor}`};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0px;
    right: 0px;
  }

  &::before {
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1;
    -webkit-animation: spWaveBe 0.6s infinite linear;
    animation: spWaveBe 0.6s infinite linear;
  }

  &::after {
    -webkit-transform: scale(0, 0);
    -ms-transform: scale(0, 0);
    transform: scale(0, 0);
    opacity: 0;
    -webkit-animation: spWaveAf 0.6s infinite linear;
    animation: spWaveAf 0.6s infinite linear;
  }

  @-webkit-keyframes spWaveAf {
    from {
      -webkit-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
      opacity: 0;
    }
    to {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes spWaveAf {
    from {
      -webkit-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
      opacity: 0;
    }
    to {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
  }

  @-webkit-keyframes spWaveBe {
    from {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
    to {
      -webkit-transform: scale(1.5, 1.5);
      transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
  @keyframes spWaveBe {
    from {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
    to {
      -webkit-transform: scale(1.5, 1.5);
      transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
`,Gn=e=>f(jn,{get children(){return f(Fn,{get children(){var t=Rn();return b(t,f(Un,{get bgColor(){return e.bgColor},"aria-hidden":"true"})),t}})}});var Hn=P("<div role=alert><div>");const Yn=h`
  padding: 1.5rem;
  text-align: center;
  margin: 3rem auto;
  border: 1px solid #dee2e6;

  @media only screen and (min-width: 768px) {
    width: 75%;
    padding: 3rem;
  }
`,Wn=e=>(()=>{var t=Hn(),n=t.firstChild;return A(t,Yn),b(n,()=>e.children),t})(),Vn="key",Xn="headers",Zn="category-header",Kn="category-in-subcategory",qn="title-uppercase",Qn="title-alignment",Jn="title-font-size",er="title-font-family",tr="item-name",nr="item-name-font-size",rr="style",ir="size",sr="items-alignment",lr="items-spacing",or="bg-color",ar="fg-color",Lt="base-path",cr="item-modal";var K=(e=>(e.Basic="clean",e.BorderedBasic="bordered",e.ShadowedBasic="shadowed",e.Card="card",e))(K||{}),S=(e=>(e.XSmall="xs",e.Small="sm",e.Medium="md",e.Large="lg",e.XLarge="xl",e))(S||{}),le=(e=>(e.Serif="serif",e.SansSerif="sans-serif",e.Monospace="monospace",e))(le||{}),Ne=(e=>(e[e.GitHubCircle=0]="GitHubCircle",e[e.World=1]="World",e))(Ne||{});const ur=!0,fr=!0,dr=!1,gr=!1,mr="left",hr="sans-serif",wr=13,yr=!1,pr=11,br="shadowed",xr="md",Ar="left",Sr="#323437",vr="#ffffff",Cr=!1,de=()=>{const t=new URLSearchParams(location.search).get(Lt);return`${location.origin}${t||""}`};var _r=P("<img>"),Er=P('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M21.9 21.9l-6.1-6.1-2.69-2.69L5 5 3.59 3.59 2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31 1.42-1.41zM5 19V7.83l6.84 6.84-.84 1.05L9 13l-3 4h8.17l2 2H5zM7.83 5l-2-2H19c1.1 0 2 .9 2 2v13.17l-2-2V5H7.83z">');const Me=e=>{const[t,n]=y(!1);return f(C,{get when(){return!t()},get fallback(){return Er()},get children(){var i=_r();return i.addEventListener("error",()=>n(!0)),E(r=>{var s=`${e.name} logo`,l=e.class,o=`../${e.logo}`;return s!==r.e&&O(i,"alt",r.e=s),l!==r.t&&A(i,r.t=l),o!==r.a&&O(i,"src",r.a=o),r},{e:void 0,t:void 0,a:void 0}),i}})};var $r=P('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><title>Github icon</title><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z">'),Ir=P('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 512 512"height=1em width=1em xmlns=http://www.w3.org/2000/svg><title>World icon</title><path fill=none stroke-miterlimit=10 stroke-width=32 d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"></path><path fill=none stroke-miterlimit=10 stroke-width=32 d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"></path><path fill=none stroke-linecap=round stroke-linejoin=round stroke-width=32 d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"></path><path fill=none stroke-miterlimit=10 stroke-width=32 d="M256 48v416m208-208H48">');const Tr=e=>(()=>{var t=$r();return E(()=>O(t,"class",e.class)),t})(),kr=e=>(()=>{var t=Ir();return E(()=>O(t,"class",e.class)),t})(),Pr=[Tr,kr],ft=e=>f(Tt,{get component(){return Pr[e.kind]},get class(){return e.class}});var Se=P("<div>"),Lr=P("<div><div><div></div><div><div></div><div></div><div></div></div></div><div>"),Nr=P("<div> member");const Mr=h`
  flex: 0 0 auto;
  margin-top: 24px;
  padding: 0 12px;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 33.333333%;
  }

  @media (min-width: 1400px) {
    width: 25%;
  }

  @media (min-width: 1920px) {
    width: 20%;
  }
`,zr=h`
  text-decoration: none;
`,Or=h`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 192px;
  border: 1px solid #d2d2d2;
  padding: 1rem;
  font-size: 90%;

  &:hover {
    border-color: var(--bg-color);
    box-shadow: 0 0 5px 0 rgba(13, 110, 253, 0.25);
  }
`,Dr=h`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`,Br=h`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 90px;
  width: 70px;
  min-width: 70px;
`,Rr=h`
  margin: auto;
  font-size: calc(var(--card-size-height) / 1.5);
  width: 100%;
  max-height: 100%;
  height: auto;
`,jr=h`
  background-color: #f8f9fa;
  padding: 1rem;
  width: calc(100% - 70px - 1rem);
  height: 105px;
  margin-left: 1rem;
`,Fr=h`
  font-size: 1.15rem;
  line-height: 1.15;
  font-weight: 600;
  padding-bottom: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ur=h`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(33, 37, 41, 0.75);
  font-size: 0.875em;
  height: 15px;
`,Gr=h`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
  height: 26px;
`,ve=h`
  margin-top: 0.5rem;
  border: 1px solid transparent;
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 0.5rem;
  padding: 0.2rem 0.5rem;
  margin-right: 0.5rem;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Hr=h`
  border-color: rgb(73, 80, 87) !important;
  color: rgb(73, 80, 87);
`,Yr=h`
  border-color: rgb(108, 117, 125) !important;
  background-color: rgb(108, 117, 125);
  color: #fff;
  max-width: calc(50% - 0.5rem) !important;
`,Wr=h`
  border-color: var(--bg-color) !important;
  background-color: var(--bg-color);
  color: #fff;
  max-width: calc(50% - 0.5rem) !important;
`,dt=h`
  margin-top: 0.5rem;
  position: relative;
  color: inherit;
  height: 18px;
  line-height: 22px;
  width: auto;
  margin-right: 0.5rem;

  &:hover {
    color: var(--bg-color);
  }

  svg {
    height: 15px;
    width: 15px;
  }
`,Vr=h`
  font-size: 0.8rem;
  line-height: 1.5;
  color: rgba(33, 37, 41, 0.75);
  margin-top: 1rem;
  overflow: hidden;
  text-overflow: unset;
  white-space: inherit;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  word-wrap: normal;
  max-height: 36px;
`,Xr=e=>(()=>{var t=Se();return A(t,Mr),b(t,f(J,{get href(){return`${de()}?item=${e.item.id}`},class:zr,get children(){var n=Lr(),i=n.firstChild,r=i.firstChild,s=r.nextSibling,l=s.firstChild,o=l.nextSibling,a=o.nextSibling,d=i.nextSibling;return A(n,Or),A(i,Dr),A(r,Br),b(r,f(Me,{get name(){return e.item.name},class:Rr,get logo(){return e.item.logo}})),A(s,jr),A(l,Fr),b(l,()=>e.item.name),A(o,Ur),b(o,f(C,{get when(){return e.item.organization_name},get children(){return e.item.organization_name}})),A(a,Gr),b(a,f(C,{get when(){return e.item.maturity},get fallback(){return f(C,{get when(){return e.item.member_subcategory},get children(){var u=Nr(),c=u.firstChild;return A(u,`${ve} ${Hr}`),b(u,()=>e.item.member_subcategory,c),E(()=>O(u,"title",`${e.item.member_subcategory} member`)),u}})},get children(){return[(()=>{var u=Se();return A(u,`${ve} ${Wr}`),b(u,()=>e.foundation),E(()=>O(u,"title",e.item.maturity)),u})(),(()=>{var u=Se();return A(u,`${ve} ${Yr}`),b(u,()=>e.item.maturity),E(()=>O(u,"title",e.item.maturity)),u})()]}}),null),b(a,f(C,{get when(){return e.item.website},get children(){return f(J,{title:"Website",class:dt,get href(){return e.item.website},get children(){return f(ft,{get kind(){return Ne.World}})}})}}),null),b(a,f(C,{get when(){return e.item.primary_repository_url},get children(){return f(J,{title:"Repository",class:dt,get href(){return e.item.primary_repository_url},get children(){return f(ft,{get kind(){return Ne.GitHubCircle}})}})}}),null),A(d,Vr),b(d,()=>e.item.description||"This item does not have a description available yet"),n}})),t})();var Zr=P("<button>");const Kr={[S.XSmall]:"0.25rem",[S.Small]:"0.35rem",[S.Medium]:"0.5rem",[S.Large]:"0.75rem",[S.XLarge]:"1rem"},qr=B("div")`
  border: ${e=>e.borderless?"":"1px solid rgba(0, 0, 0, 0.175)"};
  box-shadow: ${e=>e.withShadow?"0 .125rem .25rem rgba(0,0,0,.075)":"none"};
  padding: ${e=>Kr[e.size]};
  background-color: ${e=>e.borderless?"transparent":"#fff"};
`,Qr=h`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`,gt=h`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`,Jr=h`
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
`,mt=h`
  margin: auto;
  font-size: calc(var(--card-size-height) / 1.5);
  max-width: 100%;
  max-height: 100%;
  height: auto;
`,ht=B("div")`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: ${e=>e.itemNameSize<40?`${e.itemNameSize}px`:"40px"};
  line-height: ${e=>e.itemNameSize<40?`${e.itemNameSize-2}px`:"38px"};
  padding: ${e=>e.borderless?"0.35rem 0":"0.35rem 0.25rem"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-top: ${e=>e.borderless?"":"1px solid rgba(0, 0, 0, 0.175)"};
`,Ce=e=>f(qr,{get class(){return`${Qr} ${e.class}`},get borderless(){return e.borderless},get withShadow(){return typeof e.withShadow<"u"&&e.withShadow},get size(){return e.size},get children(){return f(C,{get when(){return e.onClick!==void 0},get fallback(){return f(J,{get href(){return`${de()}?item=${e.item.id}`},get paddingBottom(){return e.withName?e.itemNameSize+8:0},class:gt,get children(){return[f(Me,{get name(){return e.item.name},class:mt,get logo(){return e.item.logo}}),f(C,{get when(){return e.withName},get children(){return f(ht,{get borderless(){return e.borderless},get itemNameSize(){return e.itemNameSize},get children(){return e.item.name}})}})]}})},get children(){var t=Zr();return t.$$click=()=>e.onClick(),A(t,`${gt} ${Jr}`),b(t,f(Me,{get name(){return e.item.name},class:mt,get logo(){return e.item.logo}}),null),b(t,f(C,{get when(){return e.withName},get children(){return f(ht,{get borderless(){return e.borderless},get itemNameSize(){return e.itemNameSize},get children(){return e.item.name}})}}),null),E(n=>{var i=`${e.withName?e.itemNameSize+8:0}px`,r=`${e.item.name} info`;return i!==n.e&&((n.e=i)!=null?t.style.setProperty("padding-bottom",i):t.style.removeProperty("padding-bottom")),r!==n.t&&O(t,"aria-label",n.t=r),n},{e:void 0,t:void 0}),t}})}});$t(["click"]);var ei=P("<div>");const _e={[S.XSmall]:{width:"55px",height:"50px",gap:"5px"},[S.Small]:{width:"77px",height:"70px",gap:"8px"},[S.Medium]:{width:"110px",height:"100px",gap:"10px"},[S.Large]:{width:"143px",height:"130px",gap:"12px"},[S.XLarge]:{width:"220px",height:"200px",gap:"15px"}},Ee={[S.XSmall]:{width:"40px",height:"36px",gap:"3px"},[S.Small]:{width:"50px",height:"45px",gap:"5px"},[S.Medium]:{width:"70px",height:"63px",gap:"7px"},[S.Large]:{width:"90px",height:"81px",gap:"10px"},[S.XLarge]:{width:"105px",height:"94px",gap:"12px"}},$e=B("div")`
  --card-size-width: ${e=>_e[e.size].width};
  --card-size-height: ${e=>_e[e.size].height};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${e=>typeof e.spacing<"u"?`${e.spacing}px`:_e[e.size].gap};
  justify-content: ${e=>e.alignment};

  @media only screen and (max-width: 767.98px) {
    --card-size-width: ${e=>Ee[e.size].width};
    --card-size-height: ${e=>Ee[e.size].height};
    gap: ${e=>typeof e.spacing<"u"?`${e.spacing}px`:Ee[e.size].gap};
  }
`,Ie=h`
  width: var(--card-size-width);
  height: var(--card-size-height);
`,ti=h`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
  margin-top: -24px;
  width: calc(100% + 24px);
  overflow: hidden;
`,wt=e=>f(on,{get children(){return[f(ie,{get when(){return e.style===K.Basic},get children(){return f($e,{get size(){return e.size},get alignment(){return e.alignment},get spacing(){return e.spacing},get children(){return f(Q,{get each(){return e.items},children:t=>f(Ce,{item:t,get size(){return e.size},class:Ie,get withName(){return e.displayName},get itemNameSize(){return e.itemNameSize},get onClick(){return e.displayItemModal?()=>e.setActiveItemId(t.id):void 0},borderless:!0})})}})}}),f(ie,{get when(){return e.style===K.BorderedBasic},get children(){return f($e,{get size(){return e.size},get alignment(){return e.alignment},get spacing(){return e.spacing},get children(){return f(Q,{get each(){return e.items},children:t=>f(Ce,{item:t,get size(){return e.size},class:Ie,get withName(){return e.displayName},get itemNameSize(){return e.itemNameSize},get onClick(){return e.displayItemModal?()=>e.setActiveItemId(t.id):void 0},borderless:!1})})}})}}),f(ie,{get when(){return e.style===K.ShadowedBasic},get children(){return f($e,{get size(){return e.size},get alignment(){return e.alignment},get spacing(){return e.spacing},get children(){return f(Q,{get each(){return e.items},children:t=>f(Ce,{item:t,get size(){return e.size},class:Ie,get withName(){return e.displayName},get itemNameSize(){return e.itemNameSize},borderless:!1,get onClick(){return e.displayItemModal?()=>e.setActiveItemId(t.id):void 0},withShadow:!0})})}})}}),f(ie,{get when(){return e.style===K.Card},get children(){var t=ei();return A(t,ti),b(t,f(Q,{get each(){return e.items},children:n=>f(Xr,{item:n,get foundation(){return e.foundation},get onClick(){return e.displayItemModal?()=>e.setActiveItemId(n.id):void 0}})})),t}})]}});var ni=P("<div><h4>Invalid embed url</h4><p>Please visit: ");const ri={[le.Serif]:'Times, "Times New Roman", Georgia, Palatino, serif',[le.SansSerif]:'"Clarity City", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, Roboto, Ubuntu, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',[le.Monospace]:'Courier, Consolas, "Andale Mono", monospace'},ii=B("div")`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;

  *,
  *::before,
  *::after {
    font-family: ${e=>ri[e.fontFamily]};
    box-sizing: border-box;
  }
`,si=B("div")`
  background-color: var(--bg-color);
  color: var(--fg-color);
  padding: ${e=>e.isBgTransparent?"0.5rem 0":"0.5rem 0.75rem"};
  font-size: ${e=>e.size?`${e.size}px`:"0.8rem"};
  text-align: ${e=>e.alignment};
  text-transform: ${e=>e.uppercase?"uppercase":"normal"};
  font-weight: 500;
  line-height: 1.5;
  overflow: hidden;
  margin-bottom: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
`,li=B("div")`
  background-color: var(--bg-color);
  color: var(--fg-color);
  padding: ${e=>e.isBgTransparent?"0.5rem 0":"0.5rem 0.75rem"};
  font-size: ${e=>e.size?`${e.size}px`:"0.8rem"};
  text-align: ${e=>e.alignment};
  text-transform: ${e=>e.uppercase?"uppercase":"normal"};
  font-weight: 500;
  line-height: 1.5;
  margin: ${e=>{const t=typeof e.spacing<"u"&&e.spacing>16?`${e.spacing}px`:"16px";return typeof e.firstTitle<"u"&&e.firstTitle?`0 0 ${t} 0`:`${t} 0 ${t} 0`}};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,oi=()=>{const[e,t]=y(""),[n,i]=y(),[r,s]=y(),[l,o]=y(ur),[a,d]=y(br),[u,c]=y(!1),[g,x]=y(Sr),[L,N]=y(vr),[G,Y]=y(xr),[I,T]=y(fr),[M,F]=y(dr),[ne,Nt]=y(gr),[Oe,Mt]=y(mr),[zt,Ot]=y(hr),[De,Dt]=y(wr),[Be,Bt]=y(yr),[Re,Rt]=y(pr),[je,jt]=y(Ar),[he,Ft]=y(),[Fe,Ut]=y(Cr),[we,ye]=y(null),Ue=()=>`${e()}`,Ge=m=>m.sort((k,D)=>k.name.toLowerCase().localeCompare(D.name.toLowerCase()));return Vt(()=>{const m=new URLSearchParams(window.location.search),k=m.get(Lt),D=m.get(Vn),W=m.get(Xn),V=m.get(rr),X=m.get(ir),pe=m.get(or),He=m.get(ar),Ye=m.get(Zn),We=m.get(Kn),Ve=m.get(Qn),Xe=m.get(er),Ze=m.get(Jn),Ke=m.get(tr),qe=m.get(nr),Qe=m.get(sr),Je=m.get(lr),et=m.get(qn),tt=m.get(cr);Wt(()=>{if(D!==null){let nt=!0,rt=!0;if(o(W==="true"),Ye!==null&&T(Ye==="true"),We!==null&&F(We==="true"),et!==null&&Nt(et==="true"),Ke!==null&&(Bt(Ke==="true"),qe!==null)){const z=parseInt(qe);z>=10&&z<=40&&Rt(z)}if(V!==null&&(Object.values(K).includes(V)?d(V):rt=!1),X!==null&&(Object.values(S).includes(X)?Y(X):nt=!1),pe!==null&&(x(pe),c(pe==="transparent")),He!==null&&N(He),Xe!==null&&Ot(Xe),Ve!==null&&Mt(Ve),Ze!==null){const z=parseInt(Ze);z>=10&&z<=60&&Dt(z)}if(Qe!==null&&jt(Qe),Je!==null){const z=parseInt(Je);z>=0&&Ft(z)}tt!==null&&Ut(tt==="true"),nt&&rt?(t(k||""),i(D)):s(null)}else s(null)})}),Te(it(n,()=>{async function m(){try{fetch(`${Ue()}/data/embed_${n()}.json`).then(k=>{if(k.ok)return k.json();throw new Error("Something went wrong")}).then(k=>{s(k)}).catch(()=>{s(null)})}catch{s(null)}}typeof n()<"u"&&m()})),Te(it(we,()=>{we()!==null&&(window.parent.postMessage({type:"showItemDetails",itemId:we(),key:n(),foundation:r().foundation,basePath:Ue()},"*"),ye(null))})),f(ii,{get fontFamily(){return zt()},get style(){return{all:"initial",isolation:"isolate",overflow:"hidden","--bg-color":g(),"--fg-color":L()}},get children(){return f(C,{get when(){return r()!==null},get fallback(){return f(Wn,{get children(){var m=ni(),k=m.firstChild,D=k.nextSibling;return D.firstChild,b(D,f(J,{get href(){return`${de()}/embed-setup`},get children(){return[_(()=>de()),"/embed-setup"]}}),null),m}})},get children(){return f(C,{get when(){return typeof r()<"u"},get fallback(){return f(Gn,{get bgColor(){return g()}})},get children(){return f(C,{get when(){return l()},get fallback(){return f(wt,{get items(){return Ge(r().items)},get foundation(){return r().foundation},get style(){return a()},get size(){return G()},get alignment(){return je()},get spacing(){return he()},get displayName(){return Be()},get itemNameSize(){return Re()},get displayItemModal(){return Fe()},setActiveItemId:ye})},get children(){return[f(C,{get when(){return I()},get children(){return f(si,{get isBgTransparent(){return u()},get size(){return De()},get alignment(){return Oe()},get uppercase(){return ne()},get children(){return r().category.name}})}}),f(Q,{get each(){return r().category.subcategories},children:(m,k)=>{const D=Ge(r().items.filter(W=>{let V=!1;return W.additional_categories&&(V=W.additional_categories.some(X=>X.category===r().category.name&&X.subcategory===m.name)),W.category===r().category.name&&W.subcategory===m.name||V}));return[f(li,{get isBgTransparent(){return u()},get size(){return De()},get alignment(){return Oe()},get uppercase(){return ne()},get firstTitle(){return k()===0},get spacing(){return he()},get children(){return[f(C,{get when(){return M()},get children(){return[_(()=>r().category.name)," - "]}}),_(()=>m.name)," (",_(()=>D.length),")"]}}),f(wt,{items:D,get foundation(){return r().foundation},get style(){return a()},get size(){return G()},get alignment(){return je()},get spacing(){return he()},get displayName(){return Be()},get itemNameSize(){return Re()},get displayItemModal(){return Fe()},setActiveItemId:ye})]}})]}})}})}})}})},ai={body:{"overflow-x":"hidden",margin:"0px"}},ci=On(ai),ui=document.getElementById("landscape-embeddable-view");pn(()=>[f(ci,{}),f(oi,{})],ui);
