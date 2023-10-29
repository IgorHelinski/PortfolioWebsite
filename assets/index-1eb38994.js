var Ye=Object.defineProperty;var Fe=(t,e,n)=>e in t?Ye(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var he=(t,e,n)=>(Fe(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function k(){}function we(t,e){for(const n in e)t[n]=e[n];return t}function Ne(t){return t()}function Oe(){return Object.create(null)}function X(t){t.forEach(Ne)}function $e(t){return typeof t=="function"}function W(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let le;function ue(t,e){return t===e?!0:(le||(le=document.createElement("a")),le.href=e,t===le.href)}function et(t){return Object.keys(t).length===0}function tt(t,...e){if(t==null){for(const i of e)i(void 0);return k}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ye(t,e,n,i){if(t){const s=Je(t,e,n,i);return t[0](s)}}function Je(t,e,n,i){return t[1]&&i?we(n.ctx.slice(),t[1](i(e))):n.ctx}function Ae(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],c=Math.max(e.dirty.length,s.length);for(let a=0;a<c;a+=1)l[a]=e.dirty[a]|s[a];return l}return e.dirty|s}return e.dirty}function ke(t,e,n,i,s,l){if(s){const c=Je(e,n,i,l);t.p(c,s)}}function Ce(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const nt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function f(t,e){t.appendChild(e)}function q(t,e,n){t.insertBefore(e,n||null)}function I(t){t.parentNode&&t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function Q(t){return document.createTextNode(t)}function C(){return Q(" ")}function Ee(){return Q("")}function J(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function it(t){return Array.from(t.childNodes)}function xe(t,e){e=""+e,t.data!==e&&(t.data=e)}function z(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function st(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function fe(t,e){return new t(e)}let re;function oe(t){re=t}function ge(){if(!re)throw new Error("Function called outside component initialization");return re}function ot(t){ge().$$.on_mount.push(t)}function rt(t){ge().$$.after_update.push(t)}function lt(t){ge().$$.on_destroy.push(t)}function at(){const t=ge();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=st(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function ze(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const te=[],Re=[];let ne=[];const We=[],Ve=Promise.resolve();let be=!1;function Qe(){be||(be=!0,Ve.then(Xe))}function ct(){return Qe(),Ve}function de(t){ne.push(t)}const _e=new Set;let Y=0;function Xe(){if(Y!==0)return;const t=re;do{try{for(;Y<te.length;){const e=te[Y];Y++,oe(e),ut(e.$$)}}catch(e){throw te.length=0,Y=0,e}for(oe(null),te.length=0,Y=0;Re.length;)Re.pop()();for(let e=0;e<ne.length;e+=1){const n=ne[e];_e.has(n)||(_e.add(n),n())}ne.length=0}while(te.length);for(;We.length;)We.pop()();be=!1,_e.clear(),oe(t)}function ut(t){if(t.fragment!==null){t.update(),X(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(de)}}function ft(t){const e=[],n=[];ne.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),ne=e}const ae=new Set;let K;function Be(){K={r:0,c:[],p:K}}function Ie(){K.r||X(K.c),K=K.p}function E(t,e){t&&t.i&&(ae.delete(t),t.i(e))}function B(t,e,n,i){if(t&&t.o){if(ae.has(t))return;ae.add(t),K.c.push(()=>{ae.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function pe(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const c=t[l],a=e[l];if(a){for(const o in c)o in a||(i[o]=1);for(const o in a)s[o]||(n[o]=a[o],s[o]=1);t[l]=a}else for(const o in c)s[o]=1}for(const c in i)c in n||(n[c]=void 0);return n}function me(t){return typeof t=="object"&&t!==null?t:{}}function T(t){t&&t.c()}function j(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),de(()=>{const l=t.$$.on_mount.map(Ne).filter($e);t.$$.on_destroy?t.$$.on_destroy.push(...l):X(l),t.$$.on_mount=[]}),s.forEach(de)}function P(t,e){const n=t.$$;n.fragment!==null&&(ft(n.after_update),X(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){t.$$.dirty[0]===-1&&(te.push(t),Qe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,i,s,l,c,a=[-1]){const o=re;oe(t);const r=t.$$={fragment:null,ctx:[],props:l,update:k,not_equal:s,bound:Oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Oe(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};c&&c(r.root);let u=!1;if(r.ctx=n?n(t,e.props||{},(w,g,...d)=>{const p=d.length?d[0]:g;return r.ctx&&s(r.ctx[w],r.ctx[w]=p)&&(!r.skip_bound&&r.bound[w]&&r.bound[w](p),u&&dt(t,w)),g}):[],r.update(),u=!0,X(r.before_update),r.fragment=i?i(r.ctx):!1,e.target){if(e.hydrate){const w=it(e.target);r.fragment&&r.fragment.l(w),w.forEach(I)}else r.fragment&&r.fragment.c();e.intro&&E(t.$$.fragment),j(t,e.target,e.anchor),Xe()}oe(o)}class N{constructor(){he(this,"$$");he(this,"$$set")}$destroy(){P(this,1),this.$destroy=k}$on(e,n){if(!$e(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const pt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(pt);const F=[];function Ze(t,e){return{subscribe:qe(t,e).subscribe}}function qe(t,e=k){let n;const i=new Set;function s(a){if(W(t,a)&&(t=a,n)){const o=!F.length;for(const r of i)r[1](),F.push(r,t);if(o){for(let r=0;r<F.length;r+=2)F[r][0](F[r+1]);F.length=0}}}function l(a){s(a(t))}function c(a,o=k){const r=[a,o];return i.add(r),i.size===1&&(n=e(s,l)||k),a(t),()=>{i.delete(r),i.size===0&&n&&(n(),n=null)}}return{set:s,update:l,subscribe:c}}function Ke(t,e,n){const i=!Array.isArray(t),s=i?[t]:t;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=e.length<2;return Ze(n,(c,a)=>{let o=!1;const r=[];let u=0,w=k;const g=()=>{if(u)return;w();const p=e(i?r[0]:r,c,a);l?c(p):w=$e(p)?p:k},d=s.map((p,b)=>tt(p,$=>{r[b]=$,u&=~(1<<b),o&&g()},()=>{u|=1<<b}));return o=!0,g(),function(){X(d),w(),o=!1}})}function mt(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,i,s,l,c=[],a="",o=t.split("/");for(o[0]||o.shift();s=o.shift();)n=s[0],n==="*"?(c.push("wild"),a+="/(.*)"):n===":"?(i=s.indexOf("?",1),l=s.indexOf(".",1),c.push(s.substring(1,~i?i:~l?l:s.length)),a+=~i&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(a+=(~i?"?":"")+"\\"+s.substring(l))):a+="/"+s;return{keys:c,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}function gt(t){let e,n,i;const s=[t[2]];var l=t[0];function c(a,o){let r={};if(o!==void 0&&o&4)r=pe(s,[me(a[2])]);else for(let u=0;u<s.length;u+=1)r=we(r,s[u]);return{props:r}}return l&&(e=fe(l,c(t)),e.$on("routeEvent",t[7])),{c(){e&&T(e.$$.fragment),n=Ee()},m(a,o){e&&j(e,a,o),q(a,n,o),i=!0},p(a,o){if(o&1&&l!==(l=a[0])){if(e){Be();const r=e;B(r.$$.fragment,1,0,()=>{P(r,1)}),Ie()}l?(e=fe(l,c(a,o)),e.$on("routeEvent",a[7]),T(e.$$.fragment),E(e.$$.fragment,1),j(e,n.parentNode,n)):e=null}else if(l){const r=o&4?pe(s,[me(a[2])]):{};e.$set(r)}},i(a){i||(e&&E(e.$$.fragment,a),i=!0)},o(a){e&&B(e.$$.fragment,a),i=!1},d(a){a&&I(n),e&&P(e,a)}}}function ht(t){let e,n,i;const s=[{params:t[1]},t[2]];var l=t[0];function c(a,o){let r={};if(o!==void 0&&o&6)r=pe(s,[o&2&&{params:a[1]},o&4&&me(a[2])]);else for(let u=0;u<s.length;u+=1)r=we(r,s[u]);return{props:r}}return l&&(e=fe(l,c(t)),e.$on("routeEvent",t[6])),{c(){e&&T(e.$$.fragment),n=Ee()},m(a,o){e&&j(e,a,o),q(a,n,o),i=!0},p(a,o){if(o&1&&l!==(l=a[0])){if(e){Be();const r=e;B(r.$$.fragment,1,0,()=>{P(r,1)}),Ie()}l?(e=fe(l,c(a,o)),e.$on("routeEvent",a[6]),T(e.$$.fragment),E(e.$$.fragment,1),j(e,n.parentNode,n)):e=null}else if(l){const r=o&6?pe(s,[o&2&&{params:a[1]},o&4&&me(a[2])]):{};e.$set(r)}},i(a){i||(e&&E(e.$$.fragment,a),i=!0)},o(a){e&&B(e.$$.fragment,a),i=!1},d(a){a&&I(n),e&&P(e,a)}}}function _t(t){let e,n,i,s;const l=[ht,gt],c=[];function a(o,r){return o[1]?0:1}return e=a(t),n=c[e]=l[e](t),{c(){n.c(),i=Ee()},m(o,r){c[e].m(o,r),q(o,i,r),s=!0},p(o,[r]){let u=e;e=a(o),e===u?c[e].p(o,r):(Be(),B(c[u],1,1,()=>{c[u]=null}),Ie(),n=c[e],n?n.p(o,r):(n=c[e]=l[e](o),n.c()),E(n,1),n.m(i.parentNode,i))},i(o){s||(E(n),s=!0)},o(o){B(n),s=!1},d(o){o&&I(i),c[e].d(o)}}}function De(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let i="";return n>-1&&(i=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:i}}const Se=Ze(null,function(e){e(De());const n=()=>{e(De())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});Ke(Se,t=>t.location);Ke(Se,t=>t.querystring);const Ue=qe(void 0);function vt(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function bt(t,e,n){let{routes:i={}}=e,{prefix:s=""}=e,{restoreScrollState:l=!1}=e;class c{constructor(v,y){if(!y||typeof y!="function"&&(typeof y!="object"||y._sveltesparouter!==!0))throw Error("Invalid component object");if(!v||typeof v=="string"&&(v.length<1||v.charAt(0)!="/"&&v.charAt(0)!="*")||typeof v=="object"&&!(v instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:M,keys:x}=mt(v);this.path=v,typeof y=="object"&&y._sveltesparouter===!0?(this.component=y.component,this.conditions=y.conditions||[],this.userData=y.userData,this.props=y.props||{}):(this.component=()=>Promise.resolve(y),this.conditions=[],this.props={}),this._pattern=M,this._keys=x}match(v){if(s){if(typeof s=="string")if(v.startsWith(s))v=v.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const O=v.match(s);if(O&&O[0])v=v.substr(O[0].length)||"/";else return null}}const y=this._pattern.exec(v);if(y===null)return null;if(this._keys===!1)return y;const M={};let x=0;for(;x<this._keys.length;){try{M[this._keys[x]]=decodeURIComponent(y[x+1]||"")||null}catch{M[this._keys[x]]=null}x++}return M}async checkConditions(v){for(let y=0;y<this.conditions.length;y++)if(!await this.conditions[y](v))return!1;return!0}}const a=[];i instanceof Map?i.forEach((h,v)=>{a.push(new c(v,h))}):Object.keys(i).forEach(h=>{a.push(new c(h,i[h]))});let o=null,r=null,u={};const w=at();async function g(h,v){await ct(),w(h,v)}let d=null,p=null;l&&(p=h=>{h.state&&(h.state.__svelte_spa_router_scrollY||h.state.__svelte_spa_router_scrollX)?d=h.state:d=null},window.addEventListener("popstate",p),rt(()=>{vt(d)}));let b=null,$=null;const L=Se.subscribe(async h=>{b=h;let v=0;for(;v<a.length;){const y=a[v].match(h.location);if(!y){v++;continue}const M={route:a[v].path,location:h.location,querystring:h.querystring,userData:a[v].userData,params:y&&typeof y=="object"&&Object.keys(y).length?y:null};if(!await a[v].checkConditions(M)){n(0,o=null),$=null,g("conditionsFailed",M);return}g("routeLoading",Object.assign({},M));const x=a[v].component;if($!=x){x.loading?(n(0,o=x.loading),$=x,n(1,r=x.loadingParams),n(2,u={}),g("routeLoaded",Object.assign({},M,{component:o,name:o.name,params:r}))):(n(0,o=null),$=null);const O=await x();if(h!=b)return;n(0,o=O&&O.default||O),$=x}y&&typeof y=="object"&&Object.keys(y).length?n(1,r=y):n(1,r=null),n(2,u=a[v].props),g("routeLoaded",Object.assign({},M,{component:o,name:o.name,params:r})).then(()=>{Ue.set(r)});return}n(0,o=null),$=null,Ue.set(void 0)});lt(()=>{L(),p&&window.removeEventListener("popstate",p)});function H(h){ze.call(this,t,h)}function R(h){ze.call(this,t,h)}return t.$$set=h=>{"routes"in h&&n(3,i=h.routes),"prefix"in h&&n(4,s=h.prefix),"restoreScrollState"in h&&n(5,l=h.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=l?"manual":"auto")},[o,r,u,i,s,l,H,R]}class wt extends N{constructor(e){super(),G(this,e,bt,_t,W,{routes:3,prefix:4,restoreScrollState:5})}}const{window:ce}=nt;function $t(t){let e=!1,n=()=>{e=!1},i,s,l,c,a,o,r,u,w,g,d,p,b,$,L,H,R,h,v,y,M,x,O,D,Z,A,S,ie;return de(t[4]),{c(){s=_("div"),l=_("section"),l.innerHTML='<div id="nav-bar"><h2>Igor Heliński Portfolio</h2> <a href="#/business/"><button>Business</button></a> <a href="#/cursegiver/"><button>Curse Giver Project</button></a> <a href="#/windows7/"><button>Windows 7</button></a></div> <div id="nav-box" class="material-symbols-outlined"></div>',c=C(),a=_("div"),o=C(),r=_("section"),u=_("h1"),w=Q("Welcome to my "),g=_("span"),g.textContent="awesome",d=Q(" website "),p=Q(t[0]),b=C(),$=_("section"),L=_("div"),H=_("h2"),H.textContent="Who am i?",R=C(),h=_("h3"),h.textContent=`Im Igor, im from Poland and i love programming. \r
        Im most familiar with languages like C# and C++ but i also do web dev like this website wich is made in svelte js.\r
        \r
        Mostly im into game development and im currently working on a game called "Curse Giver".\r
        I've been making games in Unity since 2020 and i want to do that for a living.\r
\r
        Besides game dev i played around with some IoT projects and image processing stuff\r
        I also make silly videos on my Youtube channel.`,v=C(),y=_("img"),x=C(),O=_("div"),D=_("h2"),D.textContent="Some of my projects:",Z=C(),A=_("section"),m(l,"id","nav"),z(a,"background-color","red"),m(r,"id","title"),ue(y.src,M="")||m(y,"src",M),m(y,"alt","me"),m(L,"id","about-me"),m(L,"class",t[1]),m(O,"id","projects"),m(O,"class",t[2]),m($,"id","main"),m(A,"id","footer"),m(s,"id","page-wrapper")},m(U,V){q(U,s,V),f(s,l),f(s,c),f(s,a),f(s,o),f(s,r),f(r,u),f(u,w),f(u,g),f(u,d),f(u,p),f(s,b),f(s,$),f($,L),f(L,H),f(L,R),f(L,h),f(L,v),f(L,y),f($,x),f($,O),f(O,D),f(s,Z),f(s,A),S||(ie=[J(ce,"load",t[3]),J(ce,"scroll",()=>{e=!0,clearTimeout(i),i=setTimeout(n,100),t[4]()}),J(s,"scroll",t[5])],S=!0)},p(U,[V]){V&1&&!e&&(e=!0,clearTimeout(i),scrollTo(ce.pageXOffset,U[0]),i=setTimeout(n,100)),V&1&&xe(p,U[0]),V&2&&m(L,"class",U[1]),V&4&&m(O,"class",U[2])},i:k,o:k,d(U){U&&I(s),S=!1,X(ie)}}}function yt(t,e,n){let i=0,s="fadeout",l="fadeout";function c(){i!=0&&window.scroll({top:0,left:0,behavior:"smooth"})}i=0,ot(async()=>{window.scroll({top:0,left:0,behavior:"smooth"})});function a(){n(0,i=ce.pageYOffset)}const o=()=>{alert("scrolled")};return t.$$.update=()=>{t.$$.dirty&1&&i&&(i>=200?n(1,s="fadein"):n(1,s="fadeout"),i>=400?n(2,l="fadein"):n(2,l="fadeout"))},[i,s,l,c,a,o]}class At extends N{constructor(e){super(),G(this,e,yt,$t,W,{})}}const kt="/deploy/assets/brumhilde-8d05381e.jpg",Ct="/deploy/assets/welbutterfly-b920c96f.gif",Et="/deploy/assets/blinkingstars_bg-ac66fd4a.gif",xt="/deploy/assets/thisPC-1c874c90.ico",Bt="/deploy/assets/BinEmpty-029222ad.ico",It="/deploy/assets/folderStar-5f16d0a0.ico",qt="/deploy/assets/folderBusiness-ce4d3d48.ico",St="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpUWqHewg4pChOlkQK+IoVSyChdJWaNXB5NIvaGJIUlwcBdeCgx+LVQcXZ10dXAVB8APE1cVJ0UVK/F9SaBHjwXE/3t173L0DhGaNqWbPBKBqlpFJJsR8YUUMvCKIAYQRR1Ripp7KLuTgOb7u4ePrXYxneZ/7c/QrRZMBPpF4lumGRbxOPL1p6Zz3iSOsIinE58TjBl2Q+JHrsstvnMsOCzwzYuQyc8QRYrHcxXIXs4qhEk8RRxVVo3wh77LCeYuzWquz9j35C0NFbTnLdZojSGIRKaQhQkYdVdRgIUarRoqJDO0nPPzDjj9NLplcVTByzGMDKiTHD/4Hv7s1S/FJNymUAHpfbPtjFAjsAq2GbX8f23brBPA/A1dax7/RBGY+SW90tOgREN4GLq47mrwHXO4AQ0+6ZEiO5KcplErA+xl9UwEYvAX6Vt3e2vs4fQBy1NXSDXBwCIyVKXvN493B7t7+PdPu7wfHh3LJOX5+iAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cIDg81Gdo8kCMAAAJRSURBVHja7VlBSgNBEKzI5ioICt4U9QXiGwz4EC9+IE/wA158iLBe/IDk4NkEj0IE8ZzAeEhadjozOzuTWTayVbfszM5uuqurqxOAIAiC6C8GGc8ykWebFt+lMfbIgEyZH12eAwAujg8AAA9Pr75nWPsF5WTaCRN6zwAGoO8BKHLpSDmZrlRd1bZWe6n9Ss2Haj+1uwzIgC0ZYGIiPtrMPADg7ubK+lzpDqHnGc/9pq67yP6afWSAjwHGlblKJBvVoPiAcv35/fPbuu5jhuwTLZH1yvVWfAIZ4Ks1rdoVx+asLe0A73EEAJi9/awyGXgRzRyHQ6zVCnnPGgdKBtRqgK5ViaSuRZ82LJ4/AAC3xeHqwtJ+0MmaCfp5mgEact7Z0k7oGHPnDFJSAxgABiDrLKCdW+mpzdlanHWt/q0XxrpvqGpeNEHWRVP0eQLdZbCpIabJDMNfhBweGnWefKPPF8aZaV/mQut6n2ZSaP/w+tTJLN1l5HuQARHTn9V3pa/7Mh/KoF6PzbRv38vlvs9BUgNCXaCRd5ZaWqwZoDMZYkIsI5pmXtZjp0YaIQaAAWAA6AMiYZyzQEDFQ04x5ChD5z8uv5K+E31AroOaZip0f+z6GPNt2EwGbPMbu5XqkCakaoDv/tSaJwMyasDAxYRYDUjVDPqAXesCseg682RA1wxI9RW51J8MyBlF14yQ6vhCPoEM2GEGNGJC7P8Fvm5BJ7jDDHDOCnpmCKGSYes+asA/YkCtNiRk2LTxznSCfWdr7xnQBYynQ/iucxokCIJoC7+cXyXf8l0WaQAAAABJRU5ErkJggg==";function Lt(t){let e,n,i,s,l;return{c(){e=_("button"),n=Q("count is "),i=Q(t[0])},m(c,a){q(c,e,a),f(e,n),f(e,i),s||(l=J(e,"click",t[1]),s=!0)},p(c,[a]){a&1&&xe(i,c[0])},i:k,o:k,d(c){c&&I(e),s=!1,l()}}}function jt(t,e,n){let i=0;return[i,()=>{n(0,i+=1)}]}class Pt extends N{constructor(e){super(),G(this,e,jt,Lt,W,{})}}const Ge=qe("About me!");function Tt(t){let e;return{c(){e=_("h1"),e.textContent=`Damn, no content here huh? \r
                    Must have forgotten to add stuff to the slot,\r
                    dang it! ;D`},m(n,i){q(n,e,i)},p:k,d(n){n&&I(e)}}}function Mt(t){let e,n,i,s,l,c,a,o,r,u,w,g,d,p,b,$;const L=t[10].default,H=ye(L,t,t[9],null),R=H||Tt();return{c(){e=_("section"),n=_("div"),i=_("div"),s=_("div"),l=_("div"),c=Q(t[3]),a=C(),o=_("div"),r=_("button"),u=C(),w=_("button"),g=C(),R&&R.c(),m(l,"class","title-bar-text"),m(r,"aria-label","Minimize"),m(w,"aria-label","Close"),m(o,"class","title-bar-controls"),m(s,"class","title-bar"),m(i,"class",d="window glass "+(t[4]===t[3]?"active onTop":"onBottom")+" svelte-1io5ec8"),m(n,"class","win7"),z(n,"width",t[2]+"px"),m(e,"class","draggable svelte-1io5ec8"),z(e,"left",t[0]+"px"),z(e,"top",t[1]+"px")},m(h,v){q(h,e,v),f(e,n),f(n,i),f(i,s),f(s,l),f(l,c),f(s,a),f(s,o),f(o,r),f(o,u),f(o,w),f(i,g),R&&R.m(i,null),p=!0,b||($=[J(window,"mouseup",t[6]),J(window,"mousemove",t[7]),J(r,"click",Ht),J(w,"click",Ot),J(s,"mousedown",t[5]),J(e,"mousedown",t[8])],b=!0)},p(h,[v]){(!p||v&8)&&xe(c,h[3]),H&&H.p&&(!p||v&512)&&ke(H,L,h,h[9],p?Ae(L,h[9],v,null):Ce(h[9]),null),(!p||v&24&&d!==(d="window glass "+(h[4]===h[3]?"active onTop":"onBottom")+" svelte-1io5ec8"))&&m(i,"class",d),(!p||v&4)&&z(n,"width",h[2]+"px"),(!p||v&1)&&z(e,"left",h[0]+"px"),(!p||v&2)&&z(e,"top",h[1]+"px")},i(h){p||(E(R,h),p=!0)},o(h){B(R,h),p=!1},d(h){h&&I(e),R&&R.d(h),b=!1,X($)}}}function Ht(){}function Ot(){}function zt(t,e,n){let{$$slots:i={},$$scope:s}=e,{left:l=10}=e,{top:c=10}=e,{windowWidth:a=480}=e,{titleBarText:o="Default Text"}=e,r=!1,u;Ge.subscribe(b=>{n(4,u=b)});function w(){r=!0}function g(){r=!1}function d(b){r&&(n(0,l+=b.movementX),n(1,c+=b.movementY))}function p(){Ge.set(o)}return t.$$set=b=>{"left"in b&&n(0,l=b.left),"top"in b&&n(1,c=b.top),"windowWidth"in b&&n(2,a=b.windowWidth),"titleBarText"in b&&n(3,o=b.titleBarText),"$$scope"in b&&n(9,s=b.$$scope)},[l,c,a,o,u,w,g,d,p,s,i]}class ve extends N{constructor(e){super(),G(this,e,zt,Mt,W,{left:0,top:1,windowWidth:2,titleBarText:3})}}function Rt(t){let e,n,i,s,l,c,a,o,r,u;const w=t[5].default,g=ye(w,t,t[4],null);return{c(){e=_("a"),n=_("button"),i=_("img"),a=C(),o=_("div"),g&&g.c(),ue(i.src,s=t[0])||m(i,"src",s),m(i,"alt","icon"),m(i,"width",l=t[1]+"px"),m(i,"height",c=t[2]+"px"),m(o,"class","caption"),z(o,"width",t[1]+"px"),m(n,"style",r="width="+t[1]+"px;"),m(n,"class","iconThing svelte-fkzb3o"),m(e,"href",t[3])},m(d,p){q(d,e,p),f(e,n),f(n,i),f(n,a),f(n,o),g&&g.m(o,null),u=!0},p(d,[p]){(!u||p&1&&!ue(i.src,s=d[0]))&&m(i,"src",s),(!u||p&2&&l!==(l=d[1]+"px"))&&m(i,"width",l),(!u||p&4&&c!==(c=d[2]+"px"))&&m(i,"height",c),g&&g.p&&(!u||p&16)&&ke(g,w,d,d[4],u?Ae(w,d[4],p,null):Ce(d[4]),null),(!u||p&2)&&z(o,"width",d[1]+"px"),(!u||p&2&&r!==(r="width="+d[1]+"px;"))&&m(n,"style",r),(!u||p&8)&&m(e,"href",d[3])},i(d){u||(E(g,d),u=!0)},o(d){B(g,d),u=!1},d(d){d&&I(e),g&&g.d(d)}}}function Wt(t,e,n){let{$$slots:i={},$$scope:s}=e,{icon:l}=e,{width:c=60}=e,{height:a=60}=e,{link:o="#"}=e;return t.$$set=r=>{"icon"in r&&n(0,l=r.icon),"width"in r&&n(1,c=r.width),"height"in r&&n(2,a=r.height),"link"in r&&n(3,o=r.link),"$$scope"in r&&n(4,s=r.$$scope)},[l,c,a,o,s,i]}class se extends N{constructor(e){super(),G(this,e,Wt,Rt,W,{icon:0,width:1,height:2,link:3})}}function Dt(t){let e;return{c(){e=_("div"),m(e,"class","repo-card"),m(e,"data-repo",t[0]),z(e,"width",t[1]+"px"),z(e,"float","left")},m(n,i){q(n,e,i)},p(n,[i]){i&1&&m(e,"data-repo",n[0]),i&2&&z(e,"width",n[1]+"px")},i:k,o:k,d(n){n&&I(e)}}}function Ut(t,e,n){window.addEventListener("DOMContentLoaded",async function(){async function c(u){const w=new Date().getTime(),g=JSON.parse(localStorage.getItem(u));if(g&&Math.abs(w-g.time)<6e4)return g.data;const p=await(await fetch(u)).json();return localStorage.setItem(u,JSON.stringify({time:w,data:p})),p}const a=await c("https://api.github.com/emojis"),o=await c("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"),r={"light-default":{background:"white",borderColor:"#e1e4e8",color:"#586069",linkColor:"#0366d6"},"dark-theme":{background:"rgb(13, 17, 23)",borderColor:"rgb(48, 54, 61)",color:"rgb(139, 148, 158)",linkColor:"rgb(88, 166, 255)"}};for(const u of document.querySelectorAll(".repo-card")){const w=u.getAttribute("data-repo"),g=r[u.getAttribute("data-theme")||"light-default"],d=await c(`https://api.github.com/repos/${w}`);d.description=(d.description||"").replace(/:\w+:/g,function(p){const b=p.substring(1,p.length-1),$=a[b];return $?`<span><img src="${$}" style="width: 1rem; height: 1rem; vertical-align: -0.2rem;" alt="${b}"></span>`:p}),u.innerHTML=`
    <div style="font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji; border: 1px solid ${g.borderColor}; border-radius: 6px; background: ${g.background}; padding: 16px; font-size: 14px; line-height: 1.5; color: #24292e;">
      <div style="display: flex; align-items: center;">
        <svg style="fill: ${g.color}; margin-right: 8px;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
        <span style="font-weight: 600; color: ${g.linkColor};">
          <a style="text-decoration: none; color: inherit;" href="${d.html_url}" target="_blank" rel="noopener noreferrer">${d.name}</a>
        </span>
      </div>
      <div style="display: ${d.fork?"block":"none"}; font-size: 12px; color: ${g.color};">Forked from <a style="color: inherit; text-decoration: none;" href="${d.fork?d.source.html_url:""}">${d.fork?d.source.full_name:""}</a></div>
      <div style="font-size: 12px; margin-bottom: 16px; margin-top: 8px; color: ${g.color};">${d.description}</div>
      <div style="font-size: 12px; color: ${g.color}; display: flex;">
        <div style="${d.language?"":"display: none;"} margin-right: 16px;">
          <span style="width: 12px; height: 12px; border-radius: 100%; background-color: ${d.language?o[d.language].color:""}; display: inline-block; top: 1px; position: relative;"></span>
          <span>${d.language}</span>
        </div>
        <div style="display: ${d.stargazers_count===0?"none":"flex"}; align-items: center; margin-right: 16px;">
          <svg style="fill: ${g.color};" aria-label="stars" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
          &nbsp; <span>${d.stargazers_count}</span>
        </div>
        <div style="display: ${d.forks===0?"none":"flex"}; align-items: center;">
          <svg style="fill: ${g.color};" aria-label="fork" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
          &nbsp; <span>${d.forks}</span>
        </div>
      </div>
    </div>
    `}});let{repoUrl:i="IgorHelinski/MyImageOperations"}=e,{cardWidth:s=400}=e;return t.$$set=l=>{"repoUrl"in l&&n(0,i=l.repoUrl),"cardWidth"in l&&n(1,s=l.cardWidth)},[i,s]}class ee extends N{constructor(e){super(),G(this,e,Ut,Dt,W,{repoUrl:0,cardWidth:1})}}function Gt(t){let e;return{c(){e=Q("silly CATS!!!")},m(n,i){q(n,e,i)},d(n){n&&I(e)}}}function Nt(t){let e,n,i,s,l;const c=t[1].default,a=ye(c,t,t[0],null),o=a||Gt();return{c(){e=_("div"),n=_("div"),o&&o.c(),i=C(),s=_("div"),m(s,"class","title-bar"),z(s,"height","40px"),m(n,"class","window glass active"),m(e,"class","win7 task-bar svelte-litd9f")},m(r,u){q(r,e,u),f(e,n),o&&o.m(n,null),f(n,i),f(n,s),l=!0},p(r,[u]){a&&a.p&&(!l||u&1)&&ke(a,c,r,r[0],l?Ae(c,r[0],u,null):Ce(r[0]),null)},i(r){l||(E(o,r),l=!0)},o(r){B(o,r),l=!1},d(r){r&&I(e),o&&o.d(r)}}}function Jt(t,e,n){let{$$slots:i={},$$scope:s}=e;return t.$$set=l=>{"$$scope"in l&&n(0,s=l.$$scope)},[s,i]}class Vt extends N{constructor(e){super(),G(this,e,Jt,Nt,W,{})}}function Qt(t){let e;return{c(){e=_("div"),e.textContent="Recycle Bin",m(e,"class","svelte-1rcaddo")},m(n,i){q(n,e,i)},p:k,d(n){n&&I(e)}}}function Xt(t){let e;return{c(){e=_("div"),e.textContent="About me!",m(e,"class","svelte-1rcaddo")},m(n,i){q(n,e,i)},p:k,d(n){n&&I(e)}}}function Zt(t){let e;return{c(){e=_("div"),e.textContent="Projects!",m(e,"class","svelte-1rcaddo")},m(n,i){q(n,e,i)},p:k,d(n){n&&I(e)}}}function Kt(t){let e;return{c(){e=_("div"),e.textContent="Business",m(e,"class","svelte-1rcaddo")},m(n,i){q(n,e,i)},p:k,d(n){n&&I(e)}}}function Yt(t){let e;return{c(){e=_("div"),e.textContent="Curse Giver",m(e,"class","svelte-1rcaddo")},m(n,i){q(n,e,i)},p:k,d(n){n&&I(e)}}}function Ft(t){let e,n,i,s,l,c,a,o,r;return o=new Pt({}),{c(){e=_("div"),n=_("center"),i=_("img"),l=C(),c=_("p"),c.innerHTML='<strong style="color: purple">✨ Damn ✨</strong>',a=C(),T(o.$$.fragment),ue(i.src,s=Ct)||m(i,"src",s),m(i,"alt","welcome"),m(e,"class","window-body has-space content svelte-1rcaddo"),z(e,"height","auto"),z(e,"background-image","url"+Et)},m(u,w){q(u,e,w),f(e,n),f(n,i),f(n,l),f(n,c),f(n,a),j(o,n,null),r=!0},p:k,i(u){r||(E(o.$$.fragment,u),r=!0)},o(u){B(o.$$.fragment,u),r=!1},d(u){u&&I(e),P(o)}}}function en(t){let e,n,i,s,l,c,a,o,r,u,w,g,d,p,b;return s=new ee({props:{repoUrl:"IgorHelinski/PineLinks",cardWidth:400}}),c=new ee({props:{repoUrl:"IgorHelinski/Depozyto",cardWidth:400}}),o=new ee({props:{repoUrl:"IgorHelinski/PortfolioWebsite",cardWidth:400}}),u=new ee({props:{repoUrl:"IgorHelinski/MyImageOperations",cardWidth:400}}),g=new ee({props:{repoUrl:"IgorHelinski/TechnicalRacing",cardWidth:400}}),p=new ee({props:{repoUrl:"IgorHelinski/ShopUiSystem-Unity",cardWidth:400}}),{c(){e=_("div"),n=_("center"),n.innerHTML='<p>Some of my <strong style="color:blueviolet">✨ Projects ✨</strong></p>',i=C(),T(s.$$.fragment),l=C(),T(c.$$.fragment),a=C(),T(o.$$.fragment),r=C(),T(u.$$.fragment),w=C(),T(g.$$.fragment),d=C(),T(p.$$.fragment),m(e,"class","window-body has-space content svelte-1rcaddo"),z(e,"height","420px")},m($,L){q($,e,L),f(e,n),f(e,i),j(s,e,null),f(e,l),j(c,e,null),f(e,a),j(o,e,null),f(e,r),j(u,e,null),f(e,w),j(g,e,null),f(e,d),j(p,e,null),b=!0},p:k,i($){b||(E(s.$$.fragment,$),E(c.$$.fragment,$),E(o.$$.fragment,$),E(u.$$.fragment,$),E(g.$$.fragment,$),E(p.$$.fragment,$),b=!0)},o($){B(s.$$.fragment,$),B(c.$$.fragment,$),B(o.$$.fragment,$),B(u.$$.fragment,$),B(g.$$.fragment,$),B(p.$$.fragment,$),b=!1},d($){$&&I(e),P(s),P(c),P(o),P(u),P(g),P(p)}}}function tn(t){let e;return{c(){e=_("div"),e.innerHTML=`<center><p>Hi, im Igor and i like programming and game development!</p> <p>... btw that&#39;s a really<strong style="color: purple">✨ cool ✨ </strong>cat</p> <img src="${kt}" alt="funny cat"/></center>`,m(e,"class","window-body has-space content svelte-1rcaddo"),z(e,"max-height","auto")},m(n,i){q(n,e,i)},p:k,d(n){n&&I(e)}}}function nn(t){let e,n,i;return{c(){e=_("div"),e.textContent="bruh",n=C(),i=_("div"),i.textContent="epic"},m(s,l){q(s,e,l),q(s,n,l),q(s,i,l)},p:k,d(s){s&&(I(e),I(n),I(i))}}}function sn(t){let e,n,i,s,l,c,a,o,r,u,w,g,d,p,b,$,L,H,R,h,v,y,M,x,O,D,Z;return i=new se({props:{icon:Bt,$$slots:{default:[Qt]},$$scope:{ctx:t}}}),c=new se({props:{icon:xt,$$slots:{default:[Xt]},$$scope:{ctx:t}}}),r=new se({props:{icon:It,$$slots:{default:[Zt]},$$scope:{ctx:t}}}),g=new se({props:{icon:qt,link:"/#/business",$$slots:{default:[Kt]},$$scope:{ctx:t}}}),b=new se({props:{icon:St,link:"/#/cursegiver",$$slots:{default:[Yt]},$$scope:{ctx:t}}}),H=new ve({props:{left:1300,top:100,titleBarText:"Random ass window",$$slots:{default:[Ft]},$$scope:{ctx:t}}}),v=new ve({props:{left:500,top:400,titleBarText:"My projects",windowWidth:830,$$slots:{default:[en]},$$scope:{ctx:t}}}),x=new ve({props:{left:200,top:50,titleBarText:"About me!",$$slots:{default:[tn]},$$scope:{ctx:t}}}),D=new Vt({props:{$$slots:{default:[nn]},$$scope:{ctx:t}}}),{c(){e=_("body"),n=_("div"),T(i.$$.fragment),s=C(),l=_("div"),T(c.$$.fragment),a=C(),o=_("div"),T(r.$$.fragment),u=C(),w=_("div"),T(g.$$.fragment),d=C(),p=_("div"),T(b.$$.fragment),$=C(),L=_("div"),T(H.$$.fragment),R=C(),h=_("div"),T(v.$$.fragment),y=C(),M=_("div"),T(x.$$.fragment),O=C(),T(D.$$.fragment),m(n,"class","icon svelte-1rcaddo"),m(l,"class","icon svelte-1rcaddo"),m(o,"class","icon svelte-1rcaddo"),m(w,"class","icon svelte-1rcaddo"),m(p,"class","icon svelte-1rcaddo"),m(L,"class","windowBox svelte-1rcaddo"),m(h,"class","windowBox svelte-1rcaddo"),m(M,"class","windowBox svelte-1rcaddo")},m(A,S){q(A,e,S),f(e,n),j(i,n,null),f(e,s),f(e,l),j(c,l,null),f(e,a),f(e,o),j(r,o,null),f(e,u),f(e,w),j(g,w,null),f(e,d),f(e,p),j(b,p,null),f(e,$),f(e,L),j(H,L,null),f(e,R),f(e,h),j(v,h,null),f(e,y),f(e,M),j(x,M,null),f(e,O),j(D,e,null),Z=!0},p(A,[S]){const ie={};S&1&&(ie.$$scope={dirty:S,ctx:A}),i.$set(ie);const U={};S&1&&(U.$$scope={dirty:S,ctx:A}),c.$set(U);const V={};S&1&&(V.$$scope={dirty:S,ctx:A}),r.$set(V);const Le={};S&1&&(Le.$$scope={dirty:S,ctx:A}),g.$set(Le);const je={};S&1&&(je.$$scope={dirty:S,ctx:A}),b.$set(je);const Pe={};S&1&&(Pe.$$scope={dirty:S,ctx:A}),H.$set(Pe);const Te={};S&1&&(Te.$$scope={dirty:S,ctx:A}),v.$set(Te);const Me={};S&1&&(Me.$$scope={dirty:S,ctx:A}),x.$set(Me);const He={};S&1&&(He.$$scope={dirty:S,ctx:A}),D.$set(He)},i(A){Z||(E(i.$$.fragment,A),E(c.$$.fragment,A),E(r.$$.fragment,A),E(g.$$.fragment,A),E(b.$$.fragment,A),E(H.$$.fragment,A),E(v.$$.fragment,A),E(x.$$.fragment,A),E(D.$$.fragment,A),Z=!0)},o(A){B(i.$$.fragment,A),B(c.$$.fragment,A),B(r.$$.fragment,A),B(g.$$.fragment,A),B(b.$$.fragment,A),B(H.$$.fragment,A),B(v.$$.fragment,A),B(x.$$.fragment,A),B(D.$$.fragment,A),Z=!1},d(A){A&&I(e),P(i),P(c),P(r),P(g),P(b),P(H),P(v),P(x),P(D)}}}class on extends N{constructor(e){super(),G(this,e,null,sn,W,{})}}function rn(t){let e;return{c(){e=_("body"),e.innerHTML=`<div class="bg svelte-d0edaa"><h1 class="svelte-d0edaa">Igor Heliński</h1> <ul class="chapters svelte-d0edaa"><li class="svelte-d0edaa">About me
                <p class="svelte-d0edaa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus officiis eveniet deserunt dicta beatae, minima aliquid iste fugit nostrum quia aperiam soluta maiores, cupiditate dignissimos distinctio. Accusantium, distinctio id!</p></li> <li class="svelte-d0edaa">My Experience
                <p class="svelte-d0edaa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus officiis eveniet deserunt dicta beatae, minima aliquid iste fugit nostrum quia aperiam soluta maiores, cupiditate dignissimos distinctio. Accusantium, distinctio id!</p></li> <li class="svelte-d0edaa">Skills
                <p class="svelte-d0edaa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus officiis eveniet deserunt dicta beatae, minima aliquid iste fugit nostrum quia aperiam soluta maiores, cupiditate dignissimos distinctio. Accusantium, distinctio id!</p></li> <li class="svelte-d0edaa">Résumé
                <p class="svelte-d0edaa">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae amet tempora modi, consequuntur explicabo quis quasi ex delectus iusto aliquid aliquam? Maiores aliquam ducimus suscipit assumenda animi, hic recusandae quaerat?</p> <p class="svelte-d0edaa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut nobis officia soluta voluptas minus illo non dolor cupiditate repellendus, similique nisi blanditiis quae repudiandae obcaecati, voluptatem corrupti nam iste.</p> <p class="svelte-d0edaa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea, voluptatum ab quis sequi asperiores. Quam repellendus earum ratione, eius, ab impedit debitis pariatur necessitatibus facere numquam harum porro laboriosam!</p> <p class="svelte-d0edaa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et corporis sit, ab molestiae commodi officia, consequatur libero blanditiis rem qui reiciendis incidunt maxime iste quo cupiditate assumenda soluta facere.</p> <p class="svelte-d0edaa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nemo temporibus quae similique tenetur alias modi ullam fuga consequuntur eligendi quisquam praesentium, asperiores velit impedit cupiditate ipsa, architecto, exercitationem odit?</p></li> <li class="svelte-d0edaa">Contact
                <p class="svelte-d0edaa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus officiis eveniet deserunt dicta beatae, minima aliquid iste fugit nostrum quia aperiam soluta maiores, cupiditate dignissimos distinctio. Accusantium, distinctio id!</p></li></ul></div>`,m(e,"class","svelte-d0edaa")},m(n,i){q(n,e,i)},p:k,i:k,o:k,d(n){n&&I(e)}}}class ln extends N{constructor(e){super(),G(this,e,null,rn,W,{})}}function an(t){let e;return{c(){e=_("body"),e.innerHTML='<h1 class="svelte-1cf72yf">This is a page for curse giver project!</h1>',z(e,"height","2137px"),m(e,"class","svelte-1cf72yf")},m(n,i){q(n,e,i)},p:k,i:k,o:k,d(n){n&&I(e)}}}class cn extends N{constructor(e){super(),G(this,e,null,an,W,{})}}function un(t){let e,n;return e=new wt({props:{routes:{"/":At,"/windows7":on,"/business":ln,"/cursegiver":cn}}}),{c(){T(e.$$.fragment)},m(i,s){j(e,i,s),n=!0},p:k,i(i){n||(E(e.$$.fragment,i),n=!0)},o(i){B(e.$$.fragment,i),n=!1},d(i){P(e,i)}}}class fn extends N{constructor(e){super(),G(this,e,null,un,W,{})}}new fn({target:document.getElementById("app")});
