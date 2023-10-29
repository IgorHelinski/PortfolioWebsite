var et=Object.defineProperty;var tt=(t,e,n)=>e in t?et(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ke=(t,e,n)=>(tt(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function k(){}function xe(t,e){for(const n in e)t[n]=e[n];return t}function Je(t){return t()}function Oe(){return Object.create(null)}function Z(t){t.forEach(Je)}function Ie(t){return typeof t=="function"}function R(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ge;function be(t,e){return t===e?!0:(ge||(ge=document.createElement("a")),ge.href=e,t===ge.href)}function nt(t){return Object.keys(t).length===0}function it(t,...e){if(t==null){for(const i of e)i(void 0);return k}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Be(t,e,n,i){if(t){const s=Ve(t,e,n,i);return t[0](s)}}function Ve(t,e,n,i){return t[1]&&i?xe(n.ctx.slice(),t[1](i(e))):n.ctx}function Pe(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],c=Math.max(e.dirty.length,s.length);for(let a=0;a<c;a+=1)l[a]=e.dirty[a]|s[a];return l}return e.dirty|s}return e.dirty}function Te(t,e,n,i,s,l){if(s){const c=Ve(e,n,i,l);t.p(c,s)}}function je(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const st=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function f(t,e){t.appendChild(e)}function B(t,e,n){t.insertBefore(e,n||null)}function I(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function V(t){return document.createTextNode(t)}function C(){return V(" ")}function Le(){return V("")}function Q(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ot(t){return Array.from(t.childNodes)}function Se(t,e){e=""+e,t.data!==e&&(t.data=e)}function W(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function rt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function ve(t,e){return new t(e)}let me;function pe(t){me=t}function Ae(){if(!me)throw new Error("Function called outside component initialization");return me}function lt(t){Ae().$$.on_mount.push(t)}function at(t){Ae().$$.after_update.push(t)}function ct(t){Ae().$$.on_destroy.push(t)}function ut(){const t=Ae();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=rt(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function Re(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const le=[],De=[];let ae=[];const Ue=[],Xe=Promise.resolve();let qe=!1;function Ze(){qe||(qe=!0,Xe.then(Ye))}function ft(){return Ze(),Xe}function we(t){ae.push(t)}const Ce=new Set;let se=0;function Ye(){if(se!==0)return;const t=me;do{try{for(;se<le.length;){const e=le[se];se++,pe(e),dt(e.$$)}}catch(e){throw le.length=0,se=0,e}for(pe(null),le.length=0,se=0;De.length;)De.pop()();for(let e=0;e<ae.length;e+=1){const n=ae[e];Ce.has(n)||(Ce.add(n),n())}ae.length=0}while(le.length);for(;Ue.length;)Ue.pop()();qe=!1,Ce.clear(),pe(t)}function dt(t){if(t.fragment!==null){t.update(),Z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(we)}}function pt(t){const e=[],n=[];ae.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),ae=e}const he=new Set;let ee;function Me(){ee={r:0,c:[],p:ee}}function ze(){ee.r||Z(ee.c),ee=ee.p}function E(t,e){t&&t.i&&(he.delete(t),t.i(e))}function x(t,e,n,i){if(t&&t.o){if(he.has(t))return;he.add(t),ee.c.push(()=>{he.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function $e(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const c=t[l],a=e[l];if(a){for(const o in c)o in a||(i[o]=1);for(const o in a)s[o]||(n[o]=a[o],s[o]=1);t[l]=a}else for(const o in c)s[o]=1}for(const c in i)c in n||(n[c]=void 0);return n}function ye(t){return typeof t=="object"&&t!==null?t:{}}function S(t){t&&t.c()}function j(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),we(()=>{const l=t.$$.on_mount.map(Je).filter(Ie);t.$$.on_destroy?t.$$.on_destroy.push(...l):Z(l),t.$$.on_mount=[]}),s.forEach(we)}function L(t,e){const n=t.$$;n.fragment!==null&&(pt(n.after_update),Z(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(le.push(t),Ze(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(t,e,n,i,s,l,c,a=[-1]){const o=me;pe(t);const r=t.$$={fragment:null,ctx:[],props:l,update:k,not_equal:s,bound:Oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Oe(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};c&&c(r.root);let u=!1;if(r.ctx=n?n(t,e.props||{},($,h,...p)=>{const m=p.length?p[0]:h;return r.ctx&&s(r.ctx[$],r.ctx[$]=m)&&(!r.skip_bound&&r.bound[$]&&r.bound[$](m),u&&mt(t,$)),h}):[],r.update(),u=!0,Z(r.before_update),r.fragment=i?i(r.ctx):!1,e.target){if(e.hydrate){const $=ot(e.target);r.fragment&&r.fragment.l($),$.forEach(I)}else r.fragment&&r.fragment.c();e.intro&&E(t.$$.fragment),j(t,e.target,e.anchor),Ye()}pe(o)}class G{constructor(){ke(this,"$$");ke(this,"$$set")}$destroy(){L(this,1),this.$destroy=k}$on(e,n){if(!Ie(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!nt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const gt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gt);const oe=[];function Ke(t,e){return{subscribe:He(t,e).subscribe}}function He(t,e=k){let n;const i=new Set;function s(a){if(R(t,a)&&(t=a,n)){const o=!oe.length;for(const r of i)r[1](),oe.push(r,t);if(o){for(let r=0;r<oe.length;r+=2)oe[r][0](oe[r+1]);oe.length=0}}}function l(a){s(a(t))}function c(a,o=k){const r=[a,o];return i.add(r),i.size===1&&(n=e(s,l)||k),a(t),()=>{i.delete(r),i.size===0&&n&&(n(),n=null)}}return{set:s,update:l,subscribe:c}}function Fe(t,e,n){const i=!Array.isArray(t),s=i?[t]:t;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=e.length<2;return Ke(n,(c,a)=>{let o=!1;const r=[];let u=0,$=k;const h=()=>{if(u)return;$();const m=e(i?r[0]:r,c,a);l?c(m):$=Ie(m)?m:k},p=s.map((m,w)=>it(m,v=>{r[w]=v,u&=~(1<<w),o&&h()},()=>{u|=1<<w}));return o=!0,h(),function(){Z(p),$(),o=!1}})}function ht(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,i,s,l,c=[],a="",o=t.split("/");for(o[0]||o.shift();s=o.shift();)n=s[0],n==="*"?(c.push("wild"),a+="/(.*)"):n===":"?(i=s.indexOf("?",1),l=s.indexOf(".",1),c.push(s.substring(1,~i?i:~l?l:s.length)),a+=~i&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(a+=(~i?"?":"")+"\\"+s.substring(l))):a+="/"+s;return{keys:c,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}function _t(t){let e,n,i;const s=[t[2]];var l=t[0];function c(a,o){let r={};if(o!==void 0&&o&4)r=$e(s,[ye(a[2])]);else for(let u=0;u<s.length;u+=1)r=xe(r,s[u]);return{props:r}}return l&&(e=ve(l,c(t)),e.$on("routeEvent",t[7])),{c(){e&&S(e.$$.fragment),n=Le()},m(a,o){e&&j(e,a,o),B(a,n,o),i=!0},p(a,o){if(o&1&&l!==(l=a[0])){if(e){Me();const r=e;x(r.$$.fragment,1,0,()=>{L(r,1)}),ze()}l?(e=ve(l,c(a,o)),e.$on("routeEvent",a[7]),S(e.$$.fragment),E(e.$$.fragment,1),j(e,n.parentNode,n)):e=null}else if(l){const r=o&4?$e(s,[ye(a[2])]):{};e.$set(r)}},i(a){i||(e&&E(e.$$.fragment,a),i=!0)},o(a){e&&x(e.$$.fragment,a),i=!1},d(a){a&&I(n),e&&L(e,a)}}}function bt(t){let e,n,i;const s=[{params:t[1]},t[2]];var l=t[0];function c(a,o){let r={};if(o!==void 0&&o&6)r=$e(s,[o&2&&{params:a[1]},o&4&&ye(a[2])]);else for(let u=0;u<s.length;u+=1)r=xe(r,s[u]);return{props:r}}return l&&(e=ve(l,c(t)),e.$on("routeEvent",t[6])),{c(){e&&S(e.$$.fragment),n=Le()},m(a,o){e&&j(e,a,o),B(a,n,o),i=!0},p(a,o){if(o&1&&l!==(l=a[0])){if(e){Me();const r=e;x(r.$$.fragment,1,0,()=>{L(r,1)}),ze()}l?(e=ve(l,c(a,o)),e.$on("routeEvent",a[6]),S(e.$$.fragment),E(e.$$.fragment,1),j(e,n.parentNode,n)):e=null}else if(l){const r=o&6?$e(s,[o&2&&{params:a[1]},o&4&&ye(a[2])]):{};e.$set(r)}},i(a){i||(e&&E(e.$$.fragment,a),i=!0)},o(a){e&&x(e.$$.fragment,a),i=!1},d(a){a&&I(n),e&&L(e,a)}}}function vt(t){let e,n,i,s;const l=[bt,_t],c=[];function a(o,r){return o[1]?0:1}return e=a(t),n=c[e]=l[e](t),{c(){n.c(),i=Le()},m(o,r){c[e].m(o,r),B(o,i,r),s=!0},p(o,[r]){let u=e;e=a(o),e===u?c[e].p(o,r):(Me(),x(c[u],1,1,()=>{c[u]=null}),ze(),n=c[e],n?n.p(o,r):(n=c[e]=l[e](o),n.c()),E(n,1),n.m(i.parentNode,i))},i(o){s||(E(n),s=!0)},o(o){x(n),s=!1},d(o){o&&I(i),c[e].d(o)}}}function Ge(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let i="";return n>-1&&(i=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:i}}const We=Ke(null,function(e){e(Ge());const n=()=>{e(Ge())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});Fe(We,t=>t.location);Fe(We,t=>t.querystring);const Ne=He(void 0);function wt(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function $t(t,e,n){let{routes:i={}}=e,{prefix:s=""}=e,{restoreScrollState:l=!1}=e;class c{constructor(b,A){if(!A||typeof A!="function"&&(typeof A!="object"||A._sveltesparouter!==!0))throw Error("Invalid component object");if(!b||typeof b=="string"&&(b.length<1||b.charAt(0)!="/"&&b.charAt(0)!="*")||typeof b=="object"&&!(b instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:M,keys:q}=ht(b);this.path=b,typeof A=="object"&&A._sveltesparouter===!0?(this.component=A.component,this.conditions=A.conditions||[],this.userData=A.userData,this.props=A.props||{}):(this.component=()=>Promise.resolve(A),this.conditions=[],this.props={}),this._pattern=M,this._keys=q}match(b){if(s){if(typeof s=="string")if(b.startsWith(s))b=b.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const H=b.match(s);if(H&&H[0])b=b.substr(H[0].length)||"/";else return null}}const A=this._pattern.exec(b);if(A===null)return null;if(this._keys===!1)return A;const M={};let q=0;for(;q<this._keys.length;){try{M[this._keys[q]]=decodeURIComponent(A[q+1]||"")||null}catch{M[this._keys[q]]=null}q++}return M}async checkConditions(b){for(let A=0;A<this.conditions.length;A++)if(!await this.conditions[A](b))return!1;return!0}}const a=[];i instanceof Map?i.forEach((_,b)=>{a.push(new c(b,_))}):Object.keys(i).forEach(_=>{a.push(new c(_,i[_]))});let o=null,r=null,u={};const $=ut();async function h(_,b){await ft(),$(_,b)}let p=null,m=null;l&&(m=_=>{_.state&&(_.state.__svelte_spa_router_scrollY||_.state.__svelte_spa_router_scrollX)?p=_.state:p=null},window.addEventListener("popstate",m),at(()=>{wt(p)}));let w=null,v=null;const T=We.subscribe(async _=>{w=_;let b=0;for(;b<a.length;){const A=a[b].match(_.location);if(!A){b++;continue}const M={route:a[b].path,location:_.location,querystring:_.querystring,userData:a[b].userData,params:A&&typeof A=="object"&&Object.keys(A).length?A:null};if(!await a[b].checkConditions(M)){n(0,o=null),v=null,h("conditionsFailed",M);return}h("routeLoading",Object.assign({},M));const q=a[b].component;if(v!=q){q.loading?(n(0,o=q.loading),v=q,n(1,r=q.loadingParams),n(2,u={}),h("routeLoaded",Object.assign({},M,{component:o,name:o.name,params:r}))):(n(0,o=null),v=null);const H=await q();if(_!=w)return;n(0,o=H&&H.default||H),v=q}A&&typeof A=="object"&&Object.keys(A).length?n(1,r=A):n(1,r=null),n(2,u=a[b].props),h("routeLoaded",Object.assign({},M,{component:o,name:o.name,params:r})).then(()=>{Ne.set(r)});return}n(0,o=null),v=null,Ne.set(void 0)});ct(()=>{T(),m&&window.removeEventListener("popstate",m)});function z(_){Re.call(this,t,_)}function O(_){Re.call(this,t,_)}return t.$$set=_=>{"routes"in _&&n(3,i=_.routes),"prefix"in _&&n(4,s=_.prefix),"restoreScrollState"in _&&n(5,l=_.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=l?"manual":"auto")},[o,r,u,i,s,l,z,O]}class yt extends G{constructor(e){super(),U(this,e,$t,vt,R,{routes:3,prefix:4,restoreScrollState:5})}}const{window:_e}=st;function At(t){let e=!1,n=()=>{e=!1},i,s,l,c,a,o,r,u,$,h,p,m,w,v,T,z,O,_,b,A,M,q,H,D,Y,y,P,K,ce,J,te,F,ue,ne,ie,fe;return we(t[6]),{c(){s=g("div"),l=g("section"),l.innerHTML='<div id="nav-bar"><h2>Igor Heliński Portfolio</h2> <a href="#/business/"><button>Business</button></a> <a href="#/"><button>Blog</button></a> <a href="#/cursegiver/"><button>Curse Giver Project</button></a> <div id="spacer"> </div> <a href="https://github.com/IgorHelinski" target="”_blank”"><button>Github</button></a> <a href="https://twitter.com/Zirael65" target="”_blank”"><button>Twitter</button></a> <a href="https://404dev.itch.io" target="”_blank”"><button>Itch.io</button></a> <a href="https://www.youtube.com/channel/UC17TM7Ttarn57Oz1zmENppw" target="”_blank”"><button>Youtube</button></a></div> <div id="nav-box" class="material-symbols-outlined"></div>',c=C(),a=g("div"),o=C(),r=g("section"),u=g("h1"),$=V("Welcome to my "),h=g("span"),h.textContent="awesome",p=V(" website "),m=V(t[0]),w=C(),v=g("section"),T=g("div"),z=g("h2"),z.textContent="Who am i?",O=C(),_=g("h3"),_.textContent=`Im Igor, im from Poland and i love programming. \r
        Im most familiar with languages like C# and C++ but i also do web dev like this website wich is made in svelte js.\r
        \r
        Mostly im into game development and im currently working on a game called "Curse Giver".\r
        I've been making games in Unity since 2020 and i want to do that for a living.\r
\r
        Besides game dev i played around with some IoT projects and image processing stuff\r
        I also make silly videos on my Youtube channel.`,b=C(),A=g("img"),q=C(),H=g("div"),D=g("h2"),D.textContent="Some of my projects:",Y=C(),y=g("div"),P=g("h3"),P.innerHTML=`Depozyto : <br/>
        This is a banking website i&#39;ve made with my friend at our one month internship.
        It&#39;s made in .NET
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, animi omnis alias asperiores culpa similique minima, earum numquam officia tenetur, dolor perspiciatis quidem ipsam voluptatum debitis nulla itaque. Temporibus, asperiores.
        Qui, suscipit libero quia eveniue, vero, tenetur velit distinctio quasi molestias explicabo architecto expedita corporis laborum repellat suscipit quas. Illo, iste? Quibusdam quas eos placeat autem repellendus at maiores.`,ce=C(),J=g("div"),te=g("h3"),te.innerHTML=`Technical Racing : <br/>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, animi omnis alias asperiores culpa similique minima, earum numquam officia tenetur, dolor perspiciatis quidem ipsam voluptatum debitis nulla itaque. Temporibus, asperiores.
        Qui, suscipit libero quia eveniue, vero, tenetur velit distinctio quasi molestias explicabo architecto expedita corporis laborum repellat suscipit quas. Illo, iste? Quibusdam quas eos placeat autem repellendus at maiores.`,ue=C(),ne=g("section"),d(l,"id","nav"),W(a,"background-color","red"),d(r,"id","title"),be(A.src,M="")||d(A,"src",M),d(A,"alt","me"),d(T,"id","about-me"),d(T,"class",t[1]),d(H,"id","projects"),d(H,"class",t[2]),d(y,"id","depozyto"),d(y,"class",K="project "+t[3]),d(J,"id","technical-racing"),d(J,"class",F="project "+t[4]),d(v,"id","main"),d(ne,"id","footer"),d(s,"id","page-wrapper")},m(N,X){B(N,s,X),f(s,l),f(s,c),f(s,a),f(s,o),f(s,r),f(r,u),f(u,$),f(u,h),f(u,p),f(u,m),f(s,w),f(s,v),f(v,T),f(T,z),f(T,O),f(T,_),f(T,b),f(T,A),f(v,q),f(v,H),f(H,D),f(v,Y),f(v,y),f(y,P),f(v,ce),f(v,J),f(J,te),f(s,ue),f(s,ne),ie||(fe=[Q(_e,"load",t[5]),Q(_e,"scroll",()=>{e=!0,clearTimeout(i),i=setTimeout(n,100),t[6]()}),Q(s,"scroll",t[7])],ie=!0)},p(N,[X]){X&1&&!e&&(e=!0,clearTimeout(i),scrollTo(_e.pageXOffset,N[0]),i=setTimeout(n,100)),X&1&&Se(m,N[0]),X&2&&d(T,"class",N[1]),X&4&&d(H,"class",N[2]),X&8&&K!==(K="project "+N[3])&&d(y,"class",K),X&16&&F!==(F="project "+N[4])&&d(J,"class",F)},i:k,o:k,d(N){N&&I(s),ie=!1,Z(fe)}}}function kt(t,e,n){let i=0,s="fadeout",l="fadeout-projects",c="fadeout",a="fadeout";function o(){i!=0&&window.scroll({top:0,left:0,behavior:"smooth"})}i=0,lt(async()=>{window.scroll({top:0,left:0,behavior:"smooth"})});function r(){n(0,i=_e.pageYOffset)}const u=()=>{alert("scrolled")};return t.$$.update=()=>{t.$$.dirty&1&&i&&(i>=200?n(1,s="fadein"):n(1,s="fadeout"),i>=400?n(2,l="fadein"):n(2,l="fadeout"),i>=500?n(3,c="fadein"):n(3,c="fadeout"),i>=600?n(4,a="fadein"):n(4,a="fadeout"))},[i,s,l,c,a,o,r,u]}class Ct extends G{constructor(e){super(),U(this,e,kt,At,R,{})}}const Et="/PortfolioWebsite/assets/brumhilde-8d05381e.jpg",qt="/PortfolioWebsite/assets/welbutterfly-b920c96f.gif",xt="/PortfolioWebsite/assets/blinkingstars_bg-ac66fd4a.gif",It="/PortfolioWebsite/assets/thisPC-1c874c90.ico",Bt="/PortfolioWebsite/assets/BinEmpty-029222ad.ico",Pt="/PortfolioWebsite/assets/folderStar-5f16d0a0.ico",Tt="/PortfolioWebsite/assets/folderBusiness-ce4d3d48.ico",jt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpUWqHewg4pChOlkQK+IoVSyChdJWaNXB5NIvaGJIUlwcBdeCgx+LVQcXZ10dXAVB8APE1cVJ0UVK/F9SaBHjwXE/3t173L0DhGaNqWbPBKBqlpFJJsR8YUUMvCKIAYQRR1Ripp7KLuTgOb7u4ePrXYxneZ/7c/QrRZMBPpF4lumGRbxOPL1p6Zz3iSOsIinE58TjBl2Q+JHrsstvnMsOCzwzYuQyc8QRYrHcxXIXs4qhEk8RRxVVo3wh77LCeYuzWquz9j35C0NFbTnLdZojSGIRKaQhQkYdVdRgIUarRoqJDO0nPPzDjj9NLplcVTByzGMDKiTHD/4Hv7s1S/FJNymUAHpfbPtjFAjsAq2GbX8f23brBPA/A1dax7/RBGY+SW90tOgREN4GLq47mrwHXO4AQ0+6ZEiO5KcplErA+xl9UwEYvAX6Vt3e2vs4fQBy1NXSDXBwCIyVKXvN493B7t7+PdPu7wfHh3LJOX5+iAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cIDg81Gdo8kCMAAAJRSURBVHja7VlBSgNBEKzI5ioICt4U9QXiGwz4EC9+IE/wA158iLBe/IDk4NkEj0IE8ZzAeEhadjozOzuTWTayVbfszM5uuqurqxOAIAiC6C8GGc8ykWebFt+lMfbIgEyZH12eAwAujg8AAA9Pr75nWPsF5WTaCRN6zwAGoO8BKHLpSDmZrlRd1bZWe6n9Ss2Haj+1uwzIgC0ZYGIiPtrMPADg7ubK+lzpDqHnGc/9pq67yP6afWSAjwHGlblKJBvVoPiAcv35/fPbuu5jhuwTLZH1yvVWfAIZ4Ks1rdoVx+asLe0A73EEAJi9/awyGXgRzRyHQ6zVCnnPGgdKBtRqgK5ViaSuRZ82LJ4/AAC3xeHqwtJ+0MmaCfp5mgEact7Z0k7oGHPnDFJSAxgABiDrLKCdW+mpzdlanHWt/q0XxrpvqGpeNEHWRVP0eQLdZbCpIabJDMNfhBweGnWefKPPF8aZaV/mQut6n2ZSaP/w+tTJLN1l5HuQARHTn9V3pa/7Mh/KoF6PzbRv38vlvs9BUgNCXaCRd5ZaWqwZoDMZYkIsI5pmXtZjp0YaIQaAAWAA6AMiYZyzQEDFQ04x5ChD5z8uv5K+E31AroOaZip0f+z6GPNt2EwGbPMbu5XqkCakaoDv/tSaJwMyasDAxYRYDUjVDPqAXesCseg682RA1wxI9RW51J8MyBlF14yQ6vhCPoEM2GEGNGJC7P8Fvm5BJ7jDDHDOCnpmCKGSYes+asA/YkCtNiRk2LTxznSCfWdr7xnQBYynQ/iucxokCIJoC7+cXyXf8l0WaQAAAABJRU5ErkJggg==";function Lt(t){let e,n,i,s,l;return{c(){e=g("button"),n=V("count is "),i=V(t[0])},m(c,a){B(c,e,a),f(e,n),f(e,i),s||(l=Q(e,"click",t[1]),s=!0)},p(c,[a]){a&1&&Se(i,c[0])},i:k,o:k,d(c){c&&I(e),s=!1,l()}}}function St(t,e,n){let i=0;return[i,()=>{n(0,i+=1)}]}class Mt extends G{constructor(e){super(),U(this,e,St,Lt,R,{})}}const Qe=He("About me!");function zt(t){let e;return{c(){e=g("h1"),e.textContent=`Damn, no content here huh? \r
                    Must have forgotten to add stuff to the slot,\r
                    dang it! ;D`},m(n,i){B(n,e,i)},p:k,d(n){n&&I(e)}}}function Ht(t){let e,n,i,s,l,c,a,o,r,u,$,h,p,m,w,v;const T=t[10].default,z=Be(T,t,t[9],null),O=z||zt();return{c(){e=g("section"),n=g("div"),i=g("div"),s=g("div"),l=g("div"),c=V(t[3]),a=C(),o=g("div"),r=g("button"),u=C(),$=g("button"),h=C(),O&&O.c(),d(l,"class","title-bar-text"),d(r,"aria-label","Minimize"),d($,"aria-label","Close"),d(o,"class","title-bar-controls"),d(s,"class","title-bar"),d(i,"class",p="window glass "+(t[4]===t[3]?"active onTop":"onBottom")+" svelte-1io5ec8"),d(n,"class","win7"),W(n,"width",t[2]+"px"),d(e,"class","draggable svelte-1io5ec8"),W(e,"left",t[0]+"px"),W(e,"top",t[1]+"px")},m(_,b){B(_,e,b),f(e,n),f(n,i),f(i,s),f(s,l),f(l,c),f(s,a),f(s,o),f(o,r),f(o,u),f(o,$),f(i,h),O&&O.m(i,null),m=!0,w||(v=[Q(window,"mouseup",t[6]),Q(window,"mousemove",t[7]),Q(r,"click",Wt),Q($,"click",Ot),Q(s,"mousedown",t[5]),Q(e,"mousedown",t[8])],w=!0)},p(_,[b]){(!m||b&8)&&Se(c,_[3]),z&&z.p&&(!m||b&512)&&Te(z,T,_,_[9],m?Pe(T,_[9],b,null):je(_[9]),null),(!m||b&24&&p!==(p="window glass "+(_[4]===_[3]?"active onTop":"onBottom")+" svelte-1io5ec8"))&&d(i,"class",p),(!m||b&4)&&W(n,"width",_[2]+"px"),(!m||b&1)&&W(e,"left",_[0]+"px"),(!m||b&2)&&W(e,"top",_[1]+"px")},i(_){m||(E(O,_),m=!0)},o(_){x(O,_),m=!1},d(_){_&&I(e),O&&O.d(_),w=!1,Z(v)}}}function Wt(){}function Ot(){}function Rt(t,e,n){let{$$slots:i={},$$scope:s}=e,{left:l=10}=e,{top:c=10}=e,{windowWidth:a=480}=e,{titleBarText:o="Default Text"}=e,r=!1,u;Qe.subscribe(w=>{n(4,u=w)});function $(){r=!0}function h(){r=!1}function p(w){r&&(n(0,l+=w.movementX),n(1,c+=w.movementY))}function m(){Qe.set(o)}return t.$$set=w=>{"left"in w&&n(0,l=w.left),"top"in w&&n(1,c=w.top),"windowWidth"in w&&n(2,a=w.windowWidth),"titleBarText"in w&&n(3,o=w.titleBarText),"$$scope"in w&&n(9,s=w.$$scope)},[l,c,a,o,u,$,h,p,m,s,i]}class Ee extends G{constructor(e){super(),U(this,e,Rt,Ht,R,{left:0,top:1,windowWidth:2,titleBarText:3})}}function Dt(t){let e,n,i,s,l,c,a,o,r,u;const $=t[5].default,h=Be($,t,t[4],null);return{c(){e=g("a"),n=g("button"),i=g("img"),a=C(),o=g("div"),h&&h.c(),be(i.src,s=t[0])||d(i,"src",s),d(i,"alt","icon"),d(i,"width",l=t[1]+"px"),d(i,"height",c=t[2]+"px"),d(o,"class","caption"),W(o,"width",t[1]+"px"),d(n,"style",r="width="+t[1]+"px;"),d(n,"class","iconThing svelte-fkzb3o"),d(e,"href",t[3])},m(p,m){B(p,e,m),f(e,n),f(n,i),f(n,a),f(n,o),h&&h.m(o,null),u=!0},p(p,[m]){(!u||m&1&&!be(i.src,s=p[0]))&&d(i,"src",s),(!u||m&2&&l!==(l=p[1]+"px"))&&d(i,"width",l),(!u||m&4&&c!==(c=p[2]+"px"))&&d(i,"height",c),h&&h.p&&(!u||m&16)&&Te(h,$,p,p[4],u?Pe($,p[4],m,null):je(p[4]),null),(!u||m&2)&&W(o,"width",p[1]+"px"),(!u||m&2&&r!==(r="width="+p[1]+"px;"))&&d(n,"style",r),(!u||m&8)&&d(e,"href",p[3])},i(p){u||(E(h,p),u=!0)},o(p){x(h,p),u=!1},d(p){p&&I(e),h&&h.d(p)}}}function Ut(t,e,n){let{$$slots:i={},$$scope:s}=e,{icon:l}=e,{width:c=60}=e,{height:a=60}=e,{link:o="#"}=e;return t.$$set=r=>{"icon"in r&&n(0,l=r.icon),"width"in r&&n(1,c=r.width),"height"in r&&n(2,a=r.height),"link"in r&&n(3,o=r.link),"$$scope"in r&&n(4,s=r.$$scope)},[l,c,a,o,s,i]}class de extends G{constructor(e){super(),U(this,e,Ut,Dt,R,{icon:0,width:1,height:2,link:3})}}function Gt(t){let e;return{c(){e=g("div"),d(e,"class","repo-card"),d(e,"data-repo",t[0]),W(e,"width",t[1]+"px"),W(e,"float","left")},m(n,i){B(n,e,i)},p(n,[i]){i&1&&d(e,"data-repo",n[0]),i&2&&W(e,"width",n[1]+"px")},i:k,o:k,d(n){n&&I(e)}}}function Nt(t,e,n){window.addEventListener("DOMContentLoaded",async function(){async function c(u){const $=new Date().getTime(),h=JSON.parse(localStorage.getItem(u));if(h&&Math.abs($-h.time)<6e4)return h.data;const m=await(await fetch(u)).json();return localStorage.setItem(u,JSON.stringify({time:$,data:m})),m}const a=await c("https://api.github.com/emojis"),o=await c("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"),r={"light-default":{background:"white",borderColor:"#e1e4e8",color:"#586069",linkColor:"#0366d6"},"dark-theme":{background:"rgb(13, 17, 23)",borderColor:"rgb(48, 54, 61)",color:"rgb(139, 148, 158)",linkColor:"rgb(88, 166, 255)"}};for(const u of document.querySelectorAll(".repo-card")){const $=u.getAttribute("data-repo"),h=r[u.getAttribute("data-theme")||"light-default"],p=await c(`https://api.github.com/repos/${$}`);p.description=(p.description||"").replace(/:\w+:/g,function(m){const w=m.substring(1,m.length-1),v=a[w];return v?`<span><img src="${v}" style="width: 1rem; height: 1rem; vertical-align: -0.2rem;" alt="${w}"></span>`:m}),u.innerHTML=`
    <div style="font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji; border: 1px solid ${h.borderColor}; border-radius: 6px; background: ${h.background}; padding: 16px; font-size: 14px; line-height: 1.5; color: #24292e;">
      <div style="display: flex; align-items: center;">
        <svg style="fill: ${h.color}; margin-right: 8px;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
        <span style="font-weight: 600; color: ${h.linkColor};">
          <a style="text-decoration: none; color: inherit;" href="${p.html_url}" target="_blank" rel="noopener noreferrer">${p.name}</a>
        </span>
      </div>
      <div style="display: ${p.fork?"block":"none"}; font-size: 12px; color: ${h.color};">Forked from <a style="color: inherit; text-decoration: none;" href="${p.fork?p.source.html_url:""}">${p.fork?p.source.full_name:""}</a></div>
      <div style="font-size: 12px; margin-bottom: 16px; margin-top: 8px; color: ${h.color};">${p.description}</div>
      <div style="font-size: 12px; color: ${h.color}; display: flex;">
        <div style="${p.language?"":"display: none;"} margin-right: 16px;">
          <span style="width: 12px; height: 12px; border-radius: 100%; background-color: ${p.language?o[p.language].color:""}; display: inline-block; top: 1px; position: relative;"></span>
          <span>${p.language}</span>
        </div>
        <div style="display: ${p.stargazers_count===0?"none":"flex"}; align-items: center; margin-right: 16px;">
          <svg style="fill: ${h.color};" aria-label="stars" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
          &nbsp; <span>${p.stargazers_count}</span>
        </div>
        <div style="display: ${p.forks===0?"none":"flex"}; align-items: center;">
          <svg style="fill: ${h.color};" aria-label="fork" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
          &nbsp; <span>${p.forks}</span>
        </div>
      </div>
    </div>
    `}});let{repoUrl:i="IgorHelinski/MyImageOperations"}=e,{cardWidth:s=400}=e;return t.$$set=l=>{"repoUrl"in l&&n(0,i=l.repoUrl),"cardWidth"in l&&n(1,s=l.cardWidth)},[i,s]}class re extends G{constructor(e){super(),U(this,e,Nt,Gt,R,{repoUrl:0,cardWidth:1})}}function Qt(t){let e;return{c(){e=V("silly CATS!!!")},m(n,i){B(n,e,i)},d(n){n&&I(e)}}}function Jt(t){let e,n,i,s,l;const c=t[1].default,a=Be(c,t,t[0],null),o=a||Qt();return{c(){e=g("div"),n=g("div"),o&&o.c(),i=C(),s=g("div"),d(s,"class","title-bar"),W(s,"height","40px"),d(n,"class","window glass active"),d(e,"class","win7 task-bar svelte-litd9f")},m(r,u){B(r,e,u),f(e,n),o&&o.m(n,null),f(n,i),f(n,s),l=!0},p(r,[u]){a&&a.p&&(!l||u&1)&&Te(a,c,r,r[0],l?Pe(c,r[0],u,null):je(r[0]),null)},i(r){l||(E(o,r),l=!0)},o(r){x(o,r),l=!1},d(r){r&&I(e),o&&o.d(r)}}}function Vt(t,e,n){let{$$slots:i={},$$scope:s}=e;return t.$$set=l=>{"$$scope"in l&&n(0,s=l.$$scope)},[s,i]}class Xt extends G{constructor(e){super(),U(this,e,Vt,Jt,R,{})}}function Zt(t){let e;return{c(){e=g("div"),e.textContent="Recycle Bin",d(e,"class","svelte-1rcaddo")},m(n,i){B(n,e,i)},p:k,d(n){n&&I(e)}}}function Yt(t){let e;return{c(){e=g("div"),e.textContent="About me!",d(e,"class","svelte-1rcaddo")},m(n,i){B(n,e,i)},p:k,d(n){n&&I(e)}}}function Kt(t){let e;return{c(){e=g("div"),e.textContent="Projects!",d(e,"class","svelte-1rcaddo")},m(n,i){B(n,e,i)},p:k,d(n){n&&I(e)}}}function Ft(t){let e;return{c(){e=g("div"),e.textContent="Business",d(e,"class","svelte-1rcaddo")},m(n,i){B(n,e,i)},p:k,d(n){n&&I(e)}}}function en(t){let e;return{c(){e=g("div"),e.textContent="Curse Giver",d(e,"class","svelte-1rcaddo")},m(n,i){B(n,e,i)},p:k,d(n){n&&I(e)}}}function tn(t){let e,n,i,s,l,c,a,o,r;return o=new Mt({}),{c(){e=g("div"),n=g("center"),i=g("img"),l=C(),c=g("p"),c.innerHTML='<strong style="color: purple">✨ Damn ✨</strong>',a=C(),S(o.$$.fragment),be(i.src,s=qt)||d(i,"src",s),d(i,"alt","welcome"),d(e,"class","window-body has-space content svelte-1rcaddo"),W(e,"height","auto"),W(e,"background-image","url"+xt)},m(u,$){B(u,e,$),f(e,n),f(n,i),f(n,l),f(n,c),f(n,a),j(o,n,null),r=!0},p:k,i(u){r||(E(o.$$.fragment,u),r=!0)},o(u){x(o.$$.fragment,u),r=!1},d(u){u&&I(e),L(o)}}}function nn(t){let e,n,i,s,l,c,a,o,r,u,$,h,p,m,w;return s=new re({props:{repoUrl:"IgorHelinski/PineLinks",cardWidth:400}}),c=new re({props:{repoUrl:"IgorHelinski/Depozyto",cardWidth:400}}),o=new re({props:{repoUrl:"IgorHelinski/PortfolioWebsite",cardWidth:400}}),u=new re({props:{repoUrl:"IgorHelinski/MyImageOperations",cardWidth:400}}),h=new re({props:{repoUrl:"IgorHelinski/TechnicalRacing",cardWidth:400}}),m=new re({props:{repoUrl:"IgorHelinski/ShopUiSystem-Unity",cardWidth:400}}),{c(){e=g("div"),n=g("center"),n.innerHTML='<p>Some of my <strong style="color:blueviolet">✨ Projects ✨</strong></p>',i=C(),S(s.$$.fragment),l=C(),S(c.$$.fragment),a=C(),S(o.$$.fragment),r=C(),S(u.$$.fragment),$=C(),S(h.$$.fragment),p=C(),S(m.$$.fragment),d(e,"class","window-body has-space content svelte-1rcaddo"),W(e,"height","420px")},m(v,T){B(v,e,T),f(e,n),f(e,i),j(s,e,null),f(e,l),j(c,e,null),f(e,a),j(o,e,null),f(e,r),j(u,e,null),f(e,$),j(h,e,null),f(e,p),j(m,e,null),w=!0},p:k,i(v){w||(E(s.$$.fragment,v),E(c.$$.fragment,v),E(o.$$.fragment,v),E(u.$$.fragment,v),E(h.$$.fragment,v),E(m.$$.fragment,v),w=!0)},o(v){x(s.$$.fragment,v),x(c.$$.fragment,v),x(o.$$.fragment,v),x(u.$$.fragment,v),x(h.$$.fragment,v),x(m.$$.fragment,v),w=!1},d(v){v&&I(e),L(s),L(c),L(o),L(u),L(h),L(m)}}}function sn(t){let e;return{c(){e=g("div"),e.innerHTML=`<center><p>Hi, im Igor and i like programming and game development!</p> <p>... btw that&#39;s a really<strong style="color: purple">✨ cool ✨ </strong>cat</p> <img src="${Et}" alt="funny cat"/></center>`,d(e,"class","window-body has-space content svelte-1rcaddo"),W(e,"max-height","auto")},m(n,i){B(n,e,i)},p:k,d(n){n&&I(e)}}}function on(t){let e,n,i;return{c(){e=g("div"),e.textContent="bruh",n=C(),i=g("div"),i.textContent="epic"},m(s,l){B(s,e,l),B(s,n,l),B(s,i,l)},p:k,d(s){s&&(I(e),I(n),I(i))}}}function rn(t){let e,n,i,s,l,c,a,o,r,u,$,h,p,m,w,v,T,z,O,_,b,A,M,q,H,D,Y;return i=new de({props:{icon:Bt,$$slots:{default:[Zt]},$$scope:{ctx:t}}}),c=new de({props:{icon:It,$$slots:{default:[Yt]},$$scope:{ctx:t}}}),r=new de({props:{icon:Pt,$$slots:{default:[Kt]},$$scope:{ctx:t}}}),h=new de({props:{icon:Tt,link:"/#/business",$$slots:{default:[Ft]},$$scope:{ctx:t}}}),w=new de({props:{icon:jt,link:"/#/cursegiver",$$slots:{default:[en]},$$scope:{ctx:t}}}),z=new Ee({props:{left:1300,top:100,titleBarText:"Random ass window",$$slots:{default:[tn]},$$scope:{ctx:t}}}),b=new Ee({props:{left:500,top:400,titleBarText:"My projects",windowWidth:830,$$slots:{default:[nn]},$$scope:{ctx:t}}}),q=new Ee({props:{left:200,top:50,titleBarText:"About me!",$$slots:{default:[sn]},$$scope:{ctx:t}}}),D=new Xt({props:{$$slots:{default:[on]},$$scope:{ctx:t}}}),{c(){e=g("body"),n=g("div"),S(i.$$.fragment),s=C(),l=g("div"),S(c.$$.fragment),a=C(),o=g("div"),S(r.$$.fragment),u=C(),$=g("div"),S(h.$$.fragment),p=C(),m=g("div"),S(w.$$.fragment),v=C(),T=g("div"),S(z.$$.fragment),O=C(),_=g("div"),S(b.$$.fragment),A=C(),M=g("div"),S(q.$$.fragment),H=C(),S(D.$$.fragment),d(n,"class","icon svelte-1rcaddo"),d(l,"class","icon svelte-1rcaddo"),d(o,"class","icon svelte-1rcaddo"),d($,"class","icon svelte-1rcaddo"),d(m,"class","icon svelte-1rcaddo"),d(T,"class","windowBox svelte-1rcaddo"),d(_,"class","windowBox svelte-1rcaddo"),d(M,"class","windowBox svelte-1rcaddo")},m(y,P){B(y,e,P),f(e,n),j(i,n,null),f(e,s),f(e,l),j(c,l,null),f(e,a),f(e,o),j(r,o,null),f(e,u),f(e,$),j(h,$,null),f(e,p),f(e,m),j(w,m,null),f(e,v),f(e,T),j(z,T,null),f(e,O),f(e,_),j(b,_,null),f(e,A),f(e,M),j(q,M,null),f(e,H),j(D,e,null),Y=!0},p(y,[P]){const K={};P&1&&(K.$$scope={dirty:P,ctx:y}),i.$set(K);const ce={};P&1&&(ce.$$scope={dirty:P,ctx:y}),c.$set(ce);const J={};P&1&&(J.$$scope={dirty:P,ctx:y}),r.$set(J);const te={};P&1&&(te.$$scope={dirty:P,ctx:y}),h.$set(te);const F={};P&1&&(F.$$scope={dirty:P,ctx:y}),w.$set(F);const ue={};P&1&&(ue.$$scope={dirty:P,ctx:y}),z.$set(ue);const ne={};P&1&&(ne.$$scope={dirty:P,ctx:y}),b.$set(ne);const ie={};P&1&&(ie.$$scope={dirty:P,ctx:y}),q.$set(ie);const fe={};P&1&&(fe.$$scope={dirty:P,ctx:y}),D.$set(fe)},i(y){Y||(E(i.$$.fragment,y),E(c.$$.fragment,y),E(r.$$.fragment,y),E(h.$$.fragment,y),E(w.$$.fragment,y),E(z.$$.fragment,y),E(b.$$.fragment,y),E(q.$$.fragment,y),E(D.$$.fragment,y),Y=!0)},o(y){x(i.$$.fragment,y),x(c.$$.fragment,y),x(r.$$.fragment,y),x(h.$$.fragment,y),x(w.$$.fragment,y),x(z.$$.fragment,y),x(b.$$.fragment,y),x(q.$$.fragment,y),x(D.$$.fragment,y),Y=!1},d(y){y&&I(e),L(i),L(c),L(r),L(h),L(w),L(z),L(b),L(q),L(D)}}}class ln extends G{constructor(e){super(),U(this,e,null,rn,R,{})}}function an(t){let e;return{c(){e=g("body"),e.innerHTML=`<div class="bg"><h1>Igor Heliński</h1> <ul class="chapters"><li>About me
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus officiis eveniet deserunt dicta beatae, minima aliquid iste fugit nostrum quia aperiam soluta maiores, cupiditate dignissimos distinctio. Accusantium, distinctio id!</p></li> <li>My Experience
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus officiis eveniet deserunt dicta beatae, minima aliquid iste fugit nostrum quia aperiam soluta maiores, cupiditate dignissimos distinctio. Accusantium, distinctio id!</p></li> <li>Skills
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus officiis eveniet deserunt dicta beatae, minima aliquid iste fugit nostrum quia aperiam soluta maiores, cupiditate dignissimos distinctio. Accusantium, distinctio id!</p></li> <li>Résumé
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae amet tempora modi, consequuntur explicabo quis quasi ex delectus iusto aliquid aliquam? Maiores aliquam ducimus suscipit assumenda animi, hic recusandae quaerat?</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut nobis officia soluta voluptas minus illo non dolor cupiditate repellendus, similique nisi blanditiis quae repudiandae obcaecati, voluptatem corrupti nam iste.</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea, voluptatum ab quis sequi asperiores. Quam repellendus earum ratione, eius, ab impedit debitis pariatur necessitatibus facere numquam harum porro laboriosam!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et corporis sit, ab molestiae commodi officia, consequatur libero blanditiis rem qui reiciendis incidunt maxime iste quo cupiditate assumenda soluta facere.</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nemo temporibus quae similique tenetur alias modi ullam fuga consequuntur eligendi quisquam praesentium, asperiores velit impedit cupiditate ipsa, architecto, exercitationem odit?</p></li> <li>Contact
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus officiis eveniet deserunt dicta beatae, minima aliquid iste fugit nostrum quia aperiam soluta maiores, cupiditate dignissimos distinctio. Accusantium, distinctio id!</p></li></ul></div>`},m(n,i){B(n,e,i)},p:k,i:k,o:k,d(n){n&&I(e)}}}class cn extends G{constructor(e){super(),U(this,e,null,an,R,{})}}function un(t){let e;return{c(){e=g("h1"),e.textContent="Page under construction"},m(n,i){B(n,e,i)},p:k,i:k,o:k,d(n){n&&I(e)}}}class fn extends G{constructor(e){super(),U(this,e,null,un,R,{})}}function dn(t){let e,n;return e=new yt({props:{routes:{"/":Ct,"/windows7":ln,"/business":cn,"/cursegiver":fn}}}),{c(){S(e.$$.fragment)},m(i,s){j(e,i,s),n=!0},p:k,i(i){n||(E(e.$$.fragment,i),n=!0)},o(i){x(e.$$.fragment,i),n=!1},d(i){L(e,i)}}}class pn extends G{constructor(e){super(),U(this,e,null,dn,R,{})}}new pn({target:document.getElementById("app")});
