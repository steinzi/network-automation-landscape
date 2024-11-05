(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const Yt=(e,t)=>e===t,ae=Symbol("solid-proxy"),yt=typeof Proxy=="function",Ht=Symbol("solid-track"),ce={equals:Yt};let pt=vt;const U=1,ue=2,bt={owned:null,cleanups:null,context:null,owner:null};var w=null;let be=null,Wt=null,b=null,v=null,j=null,me=0;function le(e,t){const n=b,i=w,r=e.length===0,s=t===void 0?i:t,l=r?bt:{owned:null,cleanups:null,context:s?s.context:null,owner:s},o=r?e:()=>e(()=>E(()=>ee(l)));w=l,b=null;try{return q(o,!0)}finally{b=n,w=i}}function y(e,t){t=t?Object.assign({},ce,t):ce;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),St(n,r));return[At.bind(n),i]}function $(e,t,n){const i=ze(e,t,!1,U);ne(i)}function Te(e,t,n){pt=en;const i=ze(e,t,!1,U);i.user=!0,j?j.push(i):ne(i)}function C(e,t,n){n=n?Object.assign({},ce,n):ce;const i=ze(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,ne(i),At.bind(i)}function Vt(e){return q(e,!1)}function E(e){if(b===null)return e();const t=b;b=null;try{return e()}finally{b=t}}function it(e,t,n){const i=Array.isArray(e);let r;return s=>{let l;if(i){l=Array(e.length);for(let a=0;a<e.length;a++)l[a]=e[a]()}else l=e();const o=E(()=>t(l,r,s));return r=l,o}}function Xt(e){Te(()=>E(e))}function Zt(e){return w===null||(w.cleanups===null?w.cleanups=[e]:w.cleanups.push(e)),e}function Kt(e,t){const n=Symbol("context");return{id:n,Provider:nn(n),defaultValue:e}}function qt(e){let t;return w&&w.context&&(t=w.context[e.id])!==void 0?t:e.defaultValue}function xt(e){const t=C(e),n=C(()=>ke(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}function At(){if(this.sources&&this.state)if(this.state===U)ne(this);else{const e=v;v=null,q(()=>de(this),!1),v=e}if(b){const e=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(e)):(b.sources=[this],b.sourceSlots=[e]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function St(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&q(()=>{for(let r=0;r<e.observers.length;r+=1){const s=e.observers[r],l=be&&be.running;l&&be.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?v.push(s):j.push(s),s.observers&&_t(s)),l||(s.state=U)}if(v.length>1e6)throw v=[],new Error},!1)),t}function ne(e){if(!e.fn)return;ee(e);const t=me;Qt(e,e.value,t)}function Qt(e,t,n){let i;const r=w,s=b;b=w=e;try{i=e.fn(t)}catch(l){return e.pure&&(e.state=U,e.owned&&e.owned.forEach(ee),e.owned=null),e.updatedAt=n+1,Ct(l)}finally{b=s,w=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?St(e,i):e.value=i,e.updatedAt=n)}function ze(e,t,n,i=U,r){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:w?w.context:null,pure:n};return w===null||w!==bt&&(w.owned?w.owned.push(s):w.owned=[s]),s}function fe(e){if(e.state===0)return;if(e.state===ue)return de(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<me);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===U)ne(e);else if(e.state===ue){const i=v;v=null,q(()=>de(e,t[0]),!1),v=i}}function q(e,t){if(v)return e();let n=!1;t||(v=[]),j?n=!0:j=[],me++;try{const i=e();return Jt(n),i}catch(i){n||(j=null),v=null,Ct(i)}}function Jt(e){if(v&&(vt(v),v=null),e)return;const t=j;j=null,t.length&&q(()=>pt(t),!1)}function vt(e){for(let t=0;t<e.length;t++)fe(e[t])}function en(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:fe(i)}for(t=0;t<n;t++)fe(e[t])}function de(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===U?i!==t&&(!i.updatedAt||i.updatedAt<me)&&fe(i):r===ue&&de(i,t)}}}function _t(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ue,n.pure?v.push(n):j.push(n),n.observers&&_t(n))}}function ee(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const s=r.pop(),l=n.observerSlots.pop();i<r.length&&(s.sourceSlots[l]=i,r[i]=s,n.observerSlots[i]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)ee(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ee(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function tn(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ct(e,t=w){throw tn(e)}function ke(e){if(typeof e=="function"&&!e.length)return ke(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=ke(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function nn(e,t){return function(i){let r;return $(()=>r=E(()=>(w.context={...w.context,[e]:i.value},xt(()=>i.children))),void 0),r}}const rn=Symbol("fallback");function st(e){for(let t=0;t<e.length;t++)e[t]()}function sn(e,t,n={}){let i=[],r=[],s=[],l=0,o=t.length>1?[]:null;return Zt(()=>st(s)),()=>{let a=e()||[],f=a.length,u,c;return a[Ht],E(()=>{let p,I,N,G,H,T,k,M,F;if(f===0)l!==0&&(st(s),s=[],i=[],r=[],l=0,o&&(o=[])),n.fallback&&(i=[rn],r[0]=le(re=>(s[0]=re,n.fallback())),l=1);else if(l===0){for(r=new Array(f),c=0;c<f;c++)i[c]=a[c],r[c]=le(g);l=f}else{for(N=new Array(f),G=new Array(f),o&&(H=new Array(f)),T=0,k=Math.min(l,f);T<k&&i[T]===a[T];T++);for(k=l-1,M=f-1;k>=T&&M>=T&&i[k]===a[M];k--,M--)N[M]=r[k],G[M]=s[k],o&&(H[M]=o[k]);for(p=new Map,I=new Array(M+1),c=M;c>=T;c--)F=a[c],u=p.get(F),I[c]=u===void 0?-1:u,p.set(F,c);for(u=T;u<=k;u++)F=i[u],c=p.get(F),c!==void 0&&c!==-1?(N[c]=r[u],G[c]=s[u],o&&(H[c]=o[u]),c=I[c],p.set(F,c)):s[u]();for(c=T;c<f;c++)c in N?(r[c]=N[c],s[c]=G[c],o&&(o[c]=H[c],o[c](c))):r[c]=le(g);r=r.slice(0,l=f),i=a.slice(0)}return r});function g(p){if(s[c]=p,o){const[I,N]=y(c);return o[c]=N,t(a[c],I)}return t(a[c])}}}function d(e,t){return E(()=>e(t||{}))}function ie(){return!0}const Pe={get(e,t,n){return t===ae?n:e.get(t)},has(e,t){return t===ae?!0:e.has(t)},set:ie,deleteProperty:ie,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ie,deleteProperty:ie}},ownKeys(e){return e.keys()}};function xe(e){return(e=typeof e=="function"?e():e)?e:{}}function ln(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ae(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&ae in o,e[l]=typeof o=="function"?(t=!0,C(o)):o}if(yt&&t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const a=xe(e[o])[l];if(a!==void 0)return a}},has(l){for(let o=e.length-1;o>=0;o--)if(l in xe(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(xe(e[o])));return[...new Set(l)]}},Pe);const n={},i=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const a=Object.getOwnPropertyNames(o);for(let f=a.length-1;f>=0;f--){const u=a[f];if(u==="__proto__"||u==="constructor")continue;const c=Object.getOwnPropertyDescriptor(o,u);if(!i[u])i[u]=c.get?{enumerable:!0,configurable:!0,get:ln.bind(n[u]=[c.get.bind(o)])}:c.value!==void 0?c:void 0;else{const g=n[u];g&&(c.get?g.push(c.get.bind(o)):c.value!==void 0&&g.push(()=>c.value))}}}const r={},s=Object.keys(i);for(let l=s.length-1;l>=0;l--){const o=s[l],a=i[o];a&&a.get?Object.defineProperty(r,o,a):r[o]=a?a.value:void 0}return r}function $t(e,...t){if(yt&&ae in e){const r=new Set(t.length>1?t.flat():t[0]),s=t.map(l=>new Proxy({get(o){return l.includes(o)?e[o]:void 0},has(o){return l.includes(o)&&o in e},keys(){return l.filter(o=>o in e)}},Pe));return s.push(new Proxy({get(l){return r.has(l)?void 0:e[l]},has(l){return r.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!r.has(l))}},Pe)),s}const n={},i=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,r),l=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let o=!1,a=0;for(const f of t)f.includes(r)&&(o=!0,l?i[a][r]=s.value:Object.defineProperty(i[a],r,s)),++a;o||(l?n[r]=s.value:Object.defineProperty(n,r,s))}return[...i,n]}const Et=e=>`Stale read from <${e}>.`;function Q(e){const t="fallback"in e&&{fallback:()=>e.fallback};return C(sn(()=>e.each,e.children,t||void 0))}function _(e){const t=e.keyed,n=C(()=>e.when,void 0,{equals:(i,r)=>t?i===r:!i==!r});return C(()=>{const i=n();if(i){const r=e.children;return typeof r=="function"&&r.length>0?E(()=>r(t?i:()=>{if(!E(n))throw Et("Show");return e.when})):r}return e.fallback},void 0,void 0)}function on(e){let t=!1;const n=(s,l)=>(t?s[1]===l[1]:!s[1]==!l[1])&&s[2]===l[2],i=xt(()=>e.children),r=C(()=>{let s=i();Array.isArray(s)||(s=[s]);for(let l=0;l<s.length;l++){const o=s[l].when;if(o)return t=!!s[l].keyed,[l,o,s[l]]}return[-1]},void 0,{equals:n});return C(()=>{const[s,l,o]=r();if(s<0)return e.fallback;const a=o.children;return typeof a=="function"&&a.length>0?E(()=>a(t?l:()=>{if(E(r)[0]!==s)throw Et("Match");return o.when})):a},void 0,void 0)}function se(e){return e}const an=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],cn=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...an]),un=new Set(["innerHTML","textContent","innerText","children"]),fn=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),dn=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function gn(e,t){const n=dn[e];return typeof n=="object"?n[t]?n.$:void 0:n}const mn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),hn=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),wn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function yn(e,t,n){let i=n.length,r=t.length,s=i,l=0,o=0,a=t[r-1].nextSibling,f=null;for(;l<r||o<s;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[s-1];)r--,s--;if(r===l){const u=s<i?o?n[o-1].nextSibling:n[s-o]:a;for(;o<s;)e.insertBefore(n[o++],u)}else if(s===o)for(;l<r;)(!f||!f.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[o]===t[r-1]){const u=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--s],u),t[r]=n[s]}else{if(!f){f=new Map;let c=o;for(;c<s;)f.set(n[c],c++)}const u=f.get(t[l]);if(u!=null)if(o<u&&u<s){let c=l,g=1,p;for(;++c<r&&c<s&&!((p=f.get(t[c]))==null||p!==u+g);)g++;if(g>u-o){const I=t[l];for(;o<u;)e.insertBefore(n[o++],I)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const lt="_$DX_DELEGATE";function pn(e,t,n,i={}){let r;return le(s=>{r=s,t===document?e():x(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function L(e,t,n){let i;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},s=()=>(i||(i=r())).cloneNode(!0);return s.cloneNode=s,s}function It(e,t=window.document){const n=t[lt]||(t[lt]=new Set);for(let i=0,r=e.length;i<r;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,En))}}function O(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function bn(e,t,n,i){i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i)}function xn(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)}function A(e,t){t==null?e.removeAttribute("class"):e.className=t}function An(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=s=>r.call(e,n[1],s))}else e.addEventListener(t,n,typeof n!="function"&&n)}function Sn(e,t,n={}){const i=Object.keys(t||{}),r=Object.keys(n);let s,l;for(s=0,l=r.length;s<l;s++){const o=r[s];!o||o==="undefined"||t[o]||(ot(e,o,!1),delete n[o])}for(s=0,l=i.length;s<l;s++){const o=i[s],a=!!t[o];!o||o==="undefined"||n[o]===a||!a||(ot(e,o,!0),n[o]=a)}return n}function vn(e,t,n){if(!t)return n?O(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let r,s;for(s in n)t[s]==null&&i.removeProperty(s),delete n[s];for(s in t)r=t[s],r!==n[s]&&(i.setProperty(s,r),n[s]=r);return n}function Tt(e,t={},n,i){const r={};return $(()=>r.children=te(e,t.children,r.children)),$(()=>typeof t.ref=="function"&&_n(t.ref,e)),$(()=>Cn(e,t,n,!0,r,!0)),r}function _n(e,t,n){return E(()=>e(t,n))}function x(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return te(e,t,i,n);$(r=>te(e,t(),r,n),i)}function Cn(e,t,n,i,r={},s=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=at(e,l,null,r[l],n,s,t)}for(const l in t){if(l==="children")continue;const o=t[l];r[l]=at(e,l,o,r[l],n,s,t)}}function $n(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ot(e,t,n){const i=t.trim().split(/\s+/);for(let r=0,s=i.length;r<s;r++)e.classList.toggle(i[r],n)}function at(e,t,n,i,r,s,l){let o,a,f,u,c;if(t==="style")return vn(e,n,i);if(t==="classList")return Sn(e,n,i);if(n===i)return i;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const g=t.slice(3);i&&e.removeEventListener(g,i,typeof i!="function"&&i),n&&e.addEventListener(g,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const g=t.slice(10);i&&e.removeEventListener(g,i,!0),n&&e.addEventListener(g,n,!0)}else if(t.slice(0,2)==="on"){const g=t.slice(2).toLowerCase(),p=mn.has(g);if(!p&&i){const I=Array.isArray(i)?i[0]:i;e.removeEventListener(g,I)}(p||n)&&(An(e,g,n,p),p&&It([g]))}else if(t.slice(0,5)==="attr:")O(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")xn(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(f=un.has(t))||!r&&((u=gn(t,e.tagName))||(a=cn.has(t)))||(o=e.nodeName.includes("-")||"is"in l))c&&(t=t.slice(5),a=!0),t==="class"||t==="className"?A(e,n):o&&!a&&!f?e[$n(t)]=n:e[u||t]=n;else{const g=r&&t.indexOf(":")>-1&&wn[t.split(":")[0]];g?bn(e,g,t,n):O(e,fn[t]||t,n)}return n}function En(e){let t=e.target;const n=`$$${e.type}`,i=e.target,r=e.currentTarget,s=a=>Object.defineProperty(e,"target",{configurable:!0,value:a}),l=()=>{const a=t[n];if(a&&!t.disabled){const f=t[`${n}Data`];if(f!==void 0?a.call(t,f,e):a.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&s(t.host),!0},o=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const a=e.composedPath();s(a[0]);for(let f=0;f<a.length-2&&(t=a[f],!!l());f++){if(t._$host){t=t._$host,o();break}if(t.parentNode===r)break}}else o();s(i)}function te(e,t,n,i,r){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(l){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=Z(e,n,i,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=Z(e,n,i);else{if(s==="function")return $(()=>{let o=t();for(;typeof o=="function";)o=o();n=te(e,o,n,i)}),()=>n;if(Array.isArray(t)){const o=[],a=n&&Array.isArray(n);if(Le(o,t,n,r))return $(()=>n=te(e,o,n,i,!0)),()=>n;if(o.length===0){if(n=Z(e,n,i),l)return n}else a?n.length===0?ct(e,o,i):yn(e,n,o):(n&&Z(e),ct(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=Z(e,n,i,t);Z(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Le(e,t,n,i){let r=!1;for(let s=0,l=t.length;s<l;s++){let o=t[s],a=n&&n[e.length],f;if(!(o==null||o===!0||o===!1))if((f=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=Le(e,o,a)||r;else if(f==="function")if(i){for(;typeof o=="function";)o=o();r=Le(e,Array.isArray(o)?o:[o],Array.isArray(a)?a:[a])||r}else e.push(o),r=!0;else{const u=String(o);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return r}function ct(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function Z(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const a=o.parentNode===e;!s&&!l?a?e.replaceChild(r,o):e.insertBefore(r,n):a&&o.remove()}else s=!0}}else e.insertBefore(r,n);return[r]}const In="http://www.w3.org/2000/svg";function Tn(e,t=!1){return t?document.createElementNS(In,e):document.createElement(e)}function kt(e){const[t,n]=$t(e,["component"]),i=C(()=>t.component);return C(()=>{const r=i();switch(typeof r){case"function":return E(()=>r(n));case"string":const s=hn.has(r),l=Tn(r,s);return Tt(l,n,s),l}})}let kn={data:""},Pn=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||kn,Ln=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Nn=/\/\*[^]*?\*\/|  +/g,ut=/\n+/g,Y=(e,t)=>{let n="",i="",r="";for(let s in e){let l=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+l+";":i+=s[1]=="f"?Y(l,s):s+"{"+Y(l,s[1]=="k"?"":t)+"}":typeof l=="object"?i+=Y(l,t?t.replace(/([^,])+/g,o=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,o):o?o+" "+a:a)):s):l!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=Y.p?Y.p(s,l):s+":"+l+";")}return n+(t&&r?t+"{"+r+"}":r)+i},R={},Pt=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Pt(e[n]);return t}return e},Mn=(e,t,n,i,r)=>{let s=Pt(e),l=R[s]||(R[s]=(a=>{let f=0,u=11;for(;f<a.length;)u=101*u+a.charCodeAt(f++)>>>0;return"go"+u})(s));if(!R[l]){let a=s!==e?e:(f=>{let u,c,g=[{}];for(;u=Ln.exec(f.replace(Nn,""));)u[4]?g.shift():u[3]?(c=u[3].replace(ut," ").trim(),g.unshift(g[0][c]=g[0][c]||{})):g[0][u[1]]=u[2].replace(ut," ").trim();return g[0]})(e);R[l]=Y(r?{["@keyframes "+l]:a}:a,n?"":"."+l)}let o=n&&R.g?R.g:null;return n&&(R.g=R[l]),((a,f,u,c)=>{c?f.data=f.data.replace(c,a):f.data.indexOf(a)===-1&&(f.data=u?a+f.data:f.data+a)})(R[l],t,i,o),l},zn=(e,t,n)=>e.reduce((i,r,s)=>{let l=t[s];if(l&&l.call){let o=l(n),a=o&&o.props&&o.props.className||/^go/.test(o)&&o;l=a?"."+a:o&&typeof o=="object"?o.props?"":Y(o,""):o===!1?"":o}return i+r+(l??"")},"");function h(e){let t=this||{},n=e.call?e(t.p):e;return Mn(n.unshift?n.raw?zn(n,[].slice.call(arguments,1),t.p):n.reduce((i,r)=>Object.assign(i,r&&r.call?r(t.p):r),{}):n,Pn(t.target),t.g,t.o,t.k)}h.bind({g:1});h.bind({k:1});const On=Kt();function Lt(e){let t=this||{};return(...n)=>{const i=r=>{const s=qt(On),l=Ae(r,{theme:s}),o=Ae(l,{get class(){const p=l.class,I="class"in l&&/^go[0-9]+/.test(p);let N=h.apply({target:t.target,o:I,p:l,g:t.g},n);return[p,N].filter(Boolean).join(" ")}}),[a,f]=$t(o,["as","theme"]),u=f,c=a.as||e;let g;return typeof c=="function"?g=c(u):t.g==1?(g=document.createElement(c),Tt(g,u)):g=kt(Ae({component:c},u)),g};return i.class=r=>E(()=>h.apply({target:t.target,p:r,g:t.g},n)),i}}const B=new Proxy(Lt,{get(e,t){return e(t)}});function Dn(){const e=Lt.call({g:1},"div").apply(null,arguments);return function(n){return e(n),null}}const Bn=B("a")`
  padding-bottom: ${e=>typeof e.paddingBottom<"u"?`${e.paddingBottom}px`:"0"};
`,Rn=h`
  color: inherit;
  text-decoration: underline;

  &:hover {
    color: inherit;
  }
`,J=e=>d(Bn,{get title(){return e.title},get class(){return`${Rn} ${e.class}`},get href(){return e.href},target:"_blank",rel:"noopener noreferrer",get"aria-label"(){return e.label||"Open external link"},tabIndex:0,get paddingBottom(){return e.paddingBottom},get children(){return e.children}});var jn=L("<div>");const Fn=B("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem;
  background-color: transparent;
  z-index: 100;
`,Un=B("div")`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Gn=B("div")`
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
`,Yn=e=>d(Fn,{get children(){return d(Un,{get children(){var t=jn();return x(t,d(Gn,{get bgColor(){return e.bgColor},"aria-hidden":"true"})),t}})}});var Hn=L("<div role=alert><div>");const Wn=h`
  padding: 1.5rem;
  text-align: center;
  margin: 3rem auto;
  border: 1px solid #dee2e6;

  @media only screen and (min-width: 768px) {
    width: 75%;
    padding: 3rem;
  }
`,Vn=e=>(()=>{var t=Hn(),n=t.firstChild;return A(t,Wn),x(n,()=>e.children),t})(),Xn="key",Zn="headers",Kn="category-header",qn="category-in-subcategory",Qn="title-uppercase",Jn="title-alignment",er="title-font-size",tr="title-font-family",nr="item-name",rr="item-name-font-size",ir="style",sr="size",lr="items-alignment",or="items-spacing",ar="bg-color",cr="fg-color",Nt="base-path",ur="item-modal";var K=(e=>(e.Basic="clean",e.BorderedBasic="bordered",e.ShadowedBasic="shadowed",e.Card="card",e))(K||{}),S=(e=>(e.XSmall="xs",e.Small="sm",e.Medium="md",e.Large="lg",e.XLarge="xl",e))(S||{}),oe=(e=>(e.Serif="serif",e.SansSerif="sans-serif",e.Monospace="monospace",e))(oe||{}),Ne=(e=>(e[e.GitHubCircle=0]="GitHubCircle",e[e.World=1]="World",e))(Ne||{});const fr=!0,dr=!0,gr=!1,mr=!1,hr="left",wr="sans-serif",yr=13,pr=!1,br=11,xr="shadowed",Ar="md",Sr="left",vr="#323437",_r="#ffffff",Cr=!1,ge=()=>{const t=new URLSearchParams(location.search).get(Nt);return`${location.origin}${t||""}`};var $r=L("<img>"),Er=L('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M21.9 21.9l-6.1-6.1-2.69-2.69L5 5 3.59 3.59 2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31 1.42-1.41zM5 19V7.83l6.84 6.84-.84 1.05L9 13l-3 4h8.17l2 2H5zM7.83 5l-2-2H19c1.1 0 2 .9 2 2v13.17l-2-2V5H7.83z">');const Me=e=>{const[t,n]=y(!1);return d(_,{get when(){return!t()},get fallback(){return Er()},get children(){var i=$r();return i.addEventListener("error",()=>n(!0)),$(r=>{var s=`${e.name} logo`,l=e.class,o=`../${e.logo}`;return s!==r.e&&O(i,"alt",r.e=s),l!==r.t&&A(i,r.t=l),o!==r.a&&O(i,"src",r.a=o),r},{e:void 0,t:void 0,a:void 0}),i}})};var Ir=L('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><title>Github icon</title><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z">'),Tr=L('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 512 512"height=1em width=1em xmlns=http://www.w3.org/2000/svg><title>World icon</title><path fill=none stroke-miterlimit=10 stroke-width=32 d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"></path><path fill=none stroke-miterlimit=10 stroke-width=32 d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"></path><path fill=none stroke-linecap=round stroke-linejoin=round stroke-width=32 d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"></path><path fill=none stroke-miterlimit=10 stroke-width=32 d="M256 48v416m208-208H48">');const kr=e=>(()=>{var t=Ir();return $(()=>O(t,"class",e.class)),t})(),Pr=e=>(()=>{var t=Tr();return $(()=>O(t,"class",e.class)),t})(),Lr=[kr,Pr],ft=e=>d(kt,{get component(){return Lr[e.kind]},get class(){return e.class}});var Se=L("<div>"),Nr=L("<div><div><div></div><div><div></div><div></div><div></div></div></div><div>"),Mr=L("<div> member");const zr=h`
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
`,Or=h`
  text-decoration: none;
`,Dr=h`
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
`,Br=h`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`,Rr=h`
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
`,jr=h`
  margin: auto;
  font-size: calc(var(--card-size-height) / 1.5);
  width: 100%;
  max-height: 100%;
  height: auto;
`,Fr=h`
  background-color: #f8f9fa;
  padding: 1rem;
  width: calc(100% - 70px - 1rem);
  height: 105px;
  margin-left: 1rem;
`,Ur=h`
  font-size: 1.15rem;
  line-height: 1.15;
  font-weight: 600;
  padding-bottom: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Gr=h`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(33, 37, 41, 0.75);
  font-size: 0.875em;
  height: 15px;
`,Yr=h`
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
`,Wr=h`
  border-color: rgb(108, 117, 125) !important;
  background-color: rgb(108, 117, 125);
  color: #fff;
  max-width: calc(50% - 0.5rem) !important;
`,Vr=h`
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
`,Xr=h`
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
`,Zr=e=>(()=>{var t=Se();return A(t,zr),x(t,d(J,{get href(){return`${ge()}?item=${e.item.id}`},class:Or,get children(){var n=Nr(),i=n.firstChild,r=i.firstChild,s=r.nextSibling,l=s.firstChild,o=l.nextSibling,a=o.nextSibling,f=i.nextSibling;return A(n,Dr),A(i,Br),A(r,Rr),x(r,d(Me,{get name(){return e.item.name},class:jr,get logo(){return e.item.logo}})),A(s,Fr),A(l,Ur),x(l,()=>e.item.name),A(o,Gr),x(o,d(_,{get when(){return e.item.organization_name},get children(){return e.item.organization_name}})),A(a,Yr),x(a,d(_,{get when(){return e.item.maturity},get fallback(){return d(_,{get when(){return e.item.member_subcategory},get children(){var u=Mr(),c=u.firstChild;return A(u,`${ve} ${Hr}`),x(u,()=>e.item.member_subcategory,c),$(()=>O(u,"title",`${e.item.member_subcategory} member`)),u}})},get children(){return[(()=>{var u=Se();return A(u,`${ve} ${Vr}`),x(u,()=>e.foundation),$(()=>O(u,"title",e.item.maturity)),u})(),(()=>{var u=Se();return A(u,`${ve} ${Wr}`),x(u,()=>e.item.maturity),$(()=>O(u,"title",e.item.maturity)),u})()]}}),null),x(a,d(_,{get when(){return e.item.website},get children(){return d(J,{title:"Website",class:dt,get href(){return e.item.website},get children(){return d(ft,{get kind(){return Ne.World}})}})}}),null),x(a,d(_,{get when(){return e.item.primary_repository_url},get children(){return d(J,{title:"Repository",class:dt,get href(){return e.item.primary_repository_url},get children(){return d(ft,{get kind(){return Ne.GitHubCircle}})}})}}),null),A(f,Xr),x(f,()=>e.item.description||"This item does not have a description available yet"),n}})),t})();var Kr=L("<button>");const qr={[S.XSmall]:"0.25rem",[S.Small]:"0.35rem",[S.Medium]:"0.5rem",[S.Large]:"0.75rem",[S.XLarge]:"1rem"},Qr=B("div")`
  border: ${e=>e.borderless?"":"1px solid rgba(0, 0, 0, 0.175)"};
  box-shadow: ${e=>e.withShadow?"0 .125rem .25rem rgba(0,0,0,.075)":"none"};
  padding: ${e=>qr[e.size]};
  background-color: ${e=>e.borderless?"transparent":"#fff"};
`,Jr=h`
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
`,ei=h`
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
`,_e=e=>d(Qr,{get class(){return`${Jr} ${e.class}`},get borderless(){return e.borderless},get withShadow(){return typeof e.withShadow<"u"&&e.withShadow},get size(){return e.size},get children(){return d(_,{get when(){return e.onClick!==void 0},get fallback(){return d(J,{get href(){return`${ge()}?item=${e.item.id}`},get paddingBottom(){return e.withName?e.itemNameSize+8:0},class:gt,get children(){return[d(Me,{get name(){return e.item.name},class:mt,get logo(){return e.item.logo}}),d(_,{get when(){return e.withName},get children(){return d(ht,{get borderless(){return e.borderless},get itemNameSize(){return e.itemNameSize},get children(){return e.item.name}})}})]}})},get children(){var t=Kr();return t.$$click=()=>e.onClick(),A(t,`${gt} ${ei}`),x(t,d(Me,{get name(){return e.item.name},class:mt,get logo(){return e.item.logo}}),null),x(t,d(_,{get when(){return e.withName},get children(){return d(ht,{get borderless(){return e.borderless},get itemNameSize(){return e.itemNameSize},get children(){return e.item.name}})}}),null),$(n=>{var i=`${e.withName?e.itemNameSize+8:0}px`,r=`${e.item.name} info`;return i!==n.e&&((n.e=i)!=null?t.style.setProperty("padding-bottom",i):t.style.removeProperty("padding-bottom")),r!==n.t&&O(t,"aria-label",n.t=r),n},{e:void 0,t:void 0}),t}})}});It(["click"]);var ti=L("<div>");const Ce={[S.XSmall]:{width:"55px",height:"50px",gap:"5px"},[S.Small]:{width:"77px",height:"70px",gap:"8px"},[S.Medium]:{width:"110px",height:"100px",gap:"10px"},[S.Large]:{width:"143px",height:"130px",gap:"12px"},[S.XLarge]:{width:"220px",height:"200px",gap:"15px"}},$e={[S.XSmall]:{width:"40px",height:"36px",gap:"3px"},[S.Small]:{width:"50px",height:"45px",gap:"5px"},[S.Medium]:{width:"70px",height:"63px",gap:"7px"},[S.Large]:{width:"90px",height:"81px",gap:"10px"},[S.XLarge]:{width:"105px",height:"94px",gap:"12px"}},Ee=B("div")`
  --card-size-width: ${e=>Ce[e.size].width};
  --card-size-height: ${e=>Ce[e.size].height};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${e=>typeof e.spacing<"u"?`${e.spacing}px`:Ce[e.size].gap};
  justify-content: ${e=>e.alignment};

  @media only screen and (max-width: 767.98px) {
    --card-size-width: ${e=>$e[e.size].width};
    --card-size-height: ${e=>$e[e.size].height};
    gap: ${e=>typeof e.spacing<"u"?`${e.spacing}px`:$e[e.size].gap};
  }
`,Ie=h`
  width: var(--card-size-width);
  height: var(--card-size-height);
`,ni=h`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
  margin-top: -24px;
  width: calc(100% + 24px);
  overflow: hidden;
`,wt=e=>d(on,{get children(){return[d(se,{get when(){return e.style===K.Basic},get children(){return d(Ee,{get size(){return e.size},get alignment(){return e.alignment},get spacing(){return e.spacing},get children(){return d(Q,{get each(){return e.items},children:t=>d(_e,{item:t,get size(){return e.size},class:Ie,get withName(){return e.displayName},get itemNameSize(){return e.itemNameSize},get onClick(){return e.displayItemModal?()=>e.setActiveItemId(t.id):void 0},borderless:!0})})}})}}),d(se,{get when(){return e.style===K.BorderedBasic},get children(){return d(Ee,{get size(){return e.size},get alignment(){return e.alignment},get spacing(){return e.spacing},get children(){return d(Q,{get each(){return e.items},children:t=>d(_e,{item:t,get size(){return e.size},class:Ie,get withName(){return e.displayName},get itemNameSize(){return e.itemNameSize},get onClick(){return e.displayItemModal?()=>e.setActiveItemId(t.id):void 0},borderless:!1})})}})}}),d(se,{get when(){return e.style===K.ShadowedBasic},get children(){return d(Ee,{get size(){return e.size},get alignment(){return e.alignment},get spacing(){return e.spacing},get children(){return d(Q,{get each(){return e.items},children:t=>d(_e,{item:t,get size(){return e.size},class:Ie,get withName(){return e.displayName},get itemNameSize(){return e.itemNameSize},borderless:!1,get onClick(){return e.displayItemModal?()=>e.setActiveItemId(t.id):void 0},withShadow:!0})})}})}}),d(se,{get when(){return e.style===K.Card},get children(){var t=ti();return A(t,ni),x(t,d(Q,{get each(){return e.items},children:n=>d(Zr,{item:n,get foundation(){return e.foundation},get onClick(){return e.displayItemModal?()=>e.setActiveItemId(n.id):void 0}})})),t}})]}});var ri=L("<div><h4>Invalid embed url</h4><p>Please visit: ");const ii={[oe.Serif]:'Times, "Times New Roman", Georgia, Palatino, serif',[oe.SansSerif]:'"Clarity City", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, Roboto, Ubuntu, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',[oe.Monospace]:'Courier, Consolas, "Andale Mono", monospace'},si=B("div")`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;

  *,
  *::before,
  *::after {
    font-family: ${e=>ii[e.fontFamily]};
    box-sizing: border-box;
  }
`,li=B("div")`
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
`,oi=B("div")`
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
`,ai=()=>{const[e,t]=y(""),[n,i]=y(),[r,s]=y(),[l,o]=y(fr),[a,f]=y(xr),[u,c]=y(!1),[g,p]=y(vr),[I,N]=y(_r),[G,H]=y(Ar),[T,k]=y(dr),[M,F]=y(gr),[re,Mt]=y(mr),[Oe,zt]=y(hr),[Ot,Dt]=y(wr),[De,Bt]=y(yr),[Be,Rt]=y(pr),[Re,jt]=y(br),[je,Ft]=y(Sr),[he,Ut]=y(),[Fe,Gt]=y(Cr),[we,ye]=y(null),Ue=()=>`${e()}`,Ge=m=>m.sort((P,D)=>P.name.toLowerCase().localeCompare(D.name.toLowerCase()));return Xt(()=>{const m=new URLSearchParams(window.location.search),P=m.get(Nt),D=m.get(Xn),W=m.get(Zn),V=m.get(ir),X=m.get(sr),pe=m.get(ar),Ye=m.get(cr),He=m.get(Kn),We=m.get(qn),Ve=m.get(Jn),Xe=m.get(tr),Ze=m.get(er),Ke=m.get(nr),qe=m.get(rr),Qe=m.get(lr),Je=m.get(or),et=m.get(Qn),tt=m.get(ur);Vt(()=>{if(D!==null){let nt=!0,rt=!0;if(o(W==="true"),He!==null&&k(He==="true"),We!==null&&F(We==="true"),et!==null&&Mt(et==="true"),Ke!==null&&(Rt(Ke==="true"),qe!==null)){const z=parseInt(qe);z>=10&&z<=40&&jt(z)}if(V!==null&&(Object.values(K).includes(V)?f(V):rt=!1),X!==null&&(Object.values(S).includes(X)?H(X):nt=!1),pe!==null&&(p(pe),c(pe==="transparent")),Ye!==null&&N(Ye),Xe!==null&&Dt(Xe),Ve!==null&&zt(Ve),Ze!==null){const z=parseInt(Ze);z>=10&&z<=60&&Bt(z)}if(Qe!==null&&Ft(Qe),Je!==null){const z=parseInt(Je);z>=0&&Ut(z)}tt!==null&&Gt(tt==="true"),nt&&rt?(t(P||""),i(D)):s(null)}else s(null)})}),Te(it(n,()=>{async function m(){try{fetch(`${Ue()}/data/embed_${n()}.json`).then(P=>{if(P.ok)return P.json();throw new Error("Something went wrong")}).then(P=>{s(P)}).catch(()=>{s(null)})}catch{s(null)}}typeof n()<"u"&&m()})),Te(it(we,()=>{we()!==null&&(window.parent.postMessage({type:"showItemDetails",itemId:we(),key:n(),foundation:r().foundation,basePath:Ue()},"*"),ye(null))})),d(si,{get fontFamily(){return Ot()},get style(){return{all:"initial",isolation:"isolate",overflow:"hidden","--bg-color":g(),"--fg-color":I()}},get children(){return d(_,{get when(){return r()!==null},get fallback(){return d(Vn,{get children(){var m=ri(),P=m.firstChild,D=P.nextSibling;return D.firstChild,x(D,d(J,{get href(){return`${ge()}/embed-setup`},get children(){return[C(()=>ge()),"/embed-setup"]}}),null),m}})},get children(){return d(_,{get when(){return typeof r()<"u"},get fallback(){return d(Yn,{get bgColor(){return g()}})},get children(){return d(_,{get when(){return l()},get fallback(){return d(wt,{get items(){return Ge(r().items)},get foundation(){return r().foundation},get style(){return a()},get size(){return G()},get alignment(){return je()},get spacing(){return he()},get displayName(){return Be()},get itemNameSize(){return Re()},get displayItemModal(){return Fe()},setActiveItemId:ye})},get children(){return[d(_,{get when(){return T()},get children(){return d(li,{get isBgTransparent(){return u()},get size(){return De()},get alignment(){return Oe()},get uppercase(){return re()},get children(){return r().category.name}})}}),d(Q,{get each(){return r().category.subcategories},children:(m,P)=>{const D=Ge(r().items.filter(W=>{let V=!1;return W.additional_categories&&(V=W.additional_categories.some(X=>X.category===r().category.name&&X.subcategory===m.name)),W.category===r().category.name&&W.subcategory===m.name||V}));return[d(oi,{get isBgTransparent(){return u()},get size(){return De()},get alignment(){return Oe()},get uppercase(){return re()},get firstTitle(){return P()===0},get spacing(){return he()},get children(){return[d(_,{get when(){return M()},get children(){return[C(()=>r().category.name)," - "]}}),C(()=>m.name)," (",C(()=>D.length),")"]}}),d(wt,{items:D,get foundation(){return r().foundation},get style(){return a()},get size(){return G()},get alignment(){return je()},get spacing(){return he()},get displayName(){return Be()},get itemNameSize(){return Re()},get displayItemModal(){return Fe()},setActiveItemId:ye})]}})]}})}})}})}})},ci={body:{"overflow-x":"hidden",margin:"0px"}},ui=Dn(ci),fi=document.getElementById("landscape-embeddable-view");pn(()=>[d(ui,{}),d(ai,{})],fi);
