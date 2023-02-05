"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["code-menu"],{4722(a,b,c){c(41246)},87551(a,b,c){c.d(b,{X:()=>e});var d=c(36071);function e(){return/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null}(0,d.N7)(".js-remove-unless-platform",function(a){!function(a){let b=(a.getAttribute("data-platforms")||"").split(","),c=e();return Boolean(c&&b.includes(c))}(a)&&a.remove()})},41246(a,b,c){c.d(b,{b:()=>k});var d=c(76006),e=c(87551),f=c(86702),g=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let{getItem:h,setItem:i}=(0,f.Z)("localStorage"),j="code-button-default-tab",k=class GetRepoElement extends HTMLElement{showDownloadMessage(a){let b=this.findPlatform(a);b&&this.showPlatform(b)}showCodespaces(a){let b=this.findPlatform(a);b&&(this.showPlatform(b),this.loadAndUpdateContent())}showCodespaceSelector(a){let b=this.findPlatform(a);b&&(this.showPlatform(b),this.codespaceSelector&&(this.codespaceSelector.hidden=!1))}showOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&(this.openOrCreateInCodespace.hidden=!1)}removeOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&this.openOrCreateInCodespace.remove()}refreshList(){this.shouldRefreshList&&(this.shouldRefreshList=!1,this.loadAndUpdateContent())}trackDelete(){this.shouldRefreshList=!0}hideSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!0),this.codespaceList&&(this.codespaceList.hidden=!1)}showSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!1),this.codespaceList&&(this.codespaceList.hidden=!0)}onDetailsToggle(a){for(let b of(this.modal.hidden=!1,this.platforms))b.hidden=!0;let c=a.target;c&&c.open&&this.selectDefaultTab()}showPlatform(a){for(let b of(this.modal.hidden=!0,this.platforms))b.hidden=b.getAttribute("data-platform")!==a}findPlatform(a){return a.currentTarget.getAttribute("data-open-app")||(0,e.X)()}refreshOnError(){window.location.reload()}pollForVscode(a){this.showPlatform("vscode");let b=a.currentTarget.getAttribute("data-src");b&&this.vscodePoller.setAttribute("src",b)}backToCodespacesFromVscodePolling(){this.loadAndUpdateContent(),this.showPlatform("codespaces")}localTabSelected(){i(j,"local")}cloudTabSelected(){i(j,"cloud"),this.codespaceList?.id==="lazyLoadedCodespacesList"&&this.loadAndUpdateContent()}selectDefaultTab(){let a=h(j);if(!a)return;let b=this.querySelector(`button[data-tab="${a}"`);b&&b.click()}loadAndUpdateContent(){this.codespaceList?.setAttribute("src",this.codespaceList.getAttribute("data-src"))}constructor(...a){super(...a),this.shouldRefreshList=!1}};g([d.fA],k.prototype,"modal",void 0),g([d.fA],k.prototype,"codespaceForm",void 0),g([d.fA],k.prototype,"codespaceLoadingMenu",void 0),g([d.fA],k.prototype,"codespaceList",void 0),g([d.fA],k.prototype,"codespaceSelector",void 0),g([d.fA],k.prototype,"openOrCreateInCodespace",void 0),g([d.fA],k.prototype,"vscodePoller",void 0),g([d.GO],k.prototype,"platforms",void 0),k=g([d.Ih],k)},86702(a,b,c){c.d(b,{Z:()=>e,"_":()=>d._});var d=c(44544);let e=d.Z},4412(a,b,c){c.d(b,{C:()=>f,x:()=>e});var d=c(86283);let e=d.n4?.readyState==="interactive"||d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.n4?.addEventListener("DOMContentLoaded",()=>{a()})}),f=d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.iG?.addEventListener("load",a)})},53729(a,b,c){c.d(b,{A7:()=>i,ko:()=>h,q1:()=>g});var d=c(15205),e=c(86283);let f=(0,d.Z)(function(){return e.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),g=(0,d.Z)(function(){return e.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}),h=(0,d.Z)(function(){return"enterprise"===f()}),i="webpack"},44544(a,b,c){c.d(b,{Z:()=>g,"_":()=>h});var d=c(86283),e=c(71643);let f=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function g(a,b={throwQuotaErrorsOnSet:!1},c=d.iG,g=a=>a,h=a=>a){let i;try{if(!c)throw Error();i=c[a]||new f}catch{i=new f}let{throwQuotaErrorsOnSet:j}=b;function k(a){b.sendCacheStats&&(0,e.b)({incrementKey:a})}function l(a){try{if(i.removeItem(a),b.ttl){let c=`${a}:expiry`;i.removeItem(c)}}catch(d){}}return{getItem:function(a,b=new Date().getTime()){try{let c=i.getItem(a);if(!c)return null;let d=`${a}:expiry`,e=Number(i.getItem(d));if(e&&b>e)return l(a),l(d),k("SAFE_STORAGE_VALUE_EXPIRED"),null;return k("SAFE_STORAGE_VALUE_WITHIN_TTL"),g(c)}catch(f){return null}},setItem:function(a,c,d=new Date().getTime()){try{if(i.setItem(a,h(c)),b.ttl){let e=`${a}:expiry`,f=d+b.ttl;i.setItem(e,f.toString())}}catch(g){if(j&&g.message.toLowerCase().includes("quota"))throw g}},removeItem:l,clear:i.clear,key:i.key,get length(){return i.length}}}function h(a){return g(a,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},86283(a,b,c){c.d(b,{Qg:()=>d.Qg,W6:()=>d.W6,cF:()=>d.cF,iG:()=>e.iG,jX:()=>e.jX,n4:()=>e.n4});var d=c(35647),e=c(73614)},73614(a,b,c){c.d(b,{iG:()=>e,jX:()=>f,n4:()=>d});let d="undefined"==typeof document?void 0:document,e="undefined"==typeof window?void 0:window,f="undefined"==typeof location?{pathname:"",origin:"",search:""}:location},35647(a,b,c){c.d(b,{Qg:()=>f,W6:()=>e,cF:()=>g});var d=c(73614);let e=void 0===d.n4,f=!e;function g(){return!!e||Boolean(d.n4.querySelector('react-app[data-ssr="true"]'))}},71643(a,b,c){c.d(b,{B:()=>p,b:()=>h});var d=c(86283),e=c(4412),f=c(53729);let g=[];function h(a,b=!1){void 0===a.timestamp&&(a.timestamp=new Date().getTime()),a.loggedIn=o(),a.staff=p(),a.bundler=f.A7,g.push(a),b?k():j()}let i=null;async function j(){await e.C,null==i&&(i=window.requestIdleCallback(k))}function k(){if(i=null,!g.length)return;let a=d.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!a)return;let b=l(g);for(let c of b)n(a,`{"stats": [${c.join(",")}] }`);g=[]}function l(a){let b=[],c=a.map(a=>JSON.stringify(a));for(;c.length>0;)b.push(m(c));return b}function m(a){let b=a.shift(),c=[b],d=b.length;for(;a.length>0&&d<=65536;){let e=a[0].length;if(d+e<=65536){let f=a.shift();c.push(f),d+=e}else break}return c}function n(a,b){try{navigator.sendBeacon&&navigator.sendBeacon(a,b)}catch{}}function o(){return!!d.n4?.head?.querySelector('meta[name="user-login"]')?.content}function p(){return!!d.n4?.head?.querySelector('meta[name="user-staff"]')?.content}d.n4?.addEventListener("pagehide",k),d.n4?.addEventListener("visibilitychange",k)},76006(a,b,c){c.d(b,{Lj:()=>p,Ih:()=>w,P4:()=>l,nW:()=>E,fA:()=>u,GO:()=>v});let d=new WeakSet;function e(a){h(a),g(a)}let f=new WeakMap;function g(a=document){if(f.has(a))return f.get(a);let b=!1,c=new MutationObserver(a=>{for(let b of a)if("attributes"===b.type&&b.target instanceof Element)k(b.target);else if("childList"===b.type&&b.addedNodes.length)for(let c of b.addedNodes)c instanceof Element&&h(c)});c.observe(a,{childList:!0,subtree:!0,attributeFilter:["data-action"]});let d={get closed(){return b},unsubscribe(){b=!0,f.delete(a),c.disconnect()}};return f.set(a,d),d}function h(a){for(let b of a.querySelectorAll("[data-action]"))k(b);a instanceof Element&&a.hasAttribute("data-action")&&k(a)}function i(a){let b=a.currentTarget;for(let c of j(b))if(a.type===c.type){let e=b.closest(c.tag);d.has(e)&&"function"==typeof e[c.method]&&e[c.method](a);let f=b.getRootNode();if(f instanceof ShadowRoot&&d.has(f.host)&&f.host.matches(c.tag)){let g=f.host;"function"==typeof g[c.method]&&g[c.method](a)}}}function*j(a){for(let b of(a.getAttribute("data-action")||"").trim().split(/\s+/)){let c=b.lastIndexOf(":"),d=Math.max(0,b.lastIndexOf("#"))||b.length;yield{type:b.slice(0,c),tag:b.slice(c+1,d),method:b.slice(d+1)||"handleEvent"}}}function k(a){for(let b of j(a))a.addEventListener(b.type,i)}function l(a,b){let c=a.tagName.toLowerCase();if(a.shadowRoot){for(let d of a.shadowRoot.querySelectorAll(`[data-target~="${c}.${b}"]`))if(!d.closest(c))return d}for(let e of a.querySelectorAll(`[data-target~="${c}.${b}"]`))if(e.closest(c)===a)return e}let m=a=>String("symbol"==typeof a?a.description:a).replace(/([A-Z]($|[a-z]))/g,"-$1").replace(/--/g,"-").replace(/^-|-$/,"").toLowerCase(),n=(a,b="property")=>{let c=m(a);if(!c.includes("-"))throw new DOMException(`${b}: ${String(a)} is not a valid ${b} name`,"SyntaxError");return c},o="attr";function p(a,b){t(a,o).add(b)}let q=new WeakSet;function r(a,b){if(q.has(a))return;q.add(a);let c=Object.getPrototypeOf(a),d=c?.constructor?.attrPrefix??"data-";for(let e of(b||(b=t(c,o)),b)){let f=a[e],g=n(`${d}${e}`),h={configurable:!0,get(){return this.getAttribute(g)||""},set(a){this.setAttribute(g,a||"")}};"number"==typeof f?h={configurable:!0,get(){return Number(this.getAttribute(g)||0)},set(a){this.setAttribute(g,a)}}:"boolean"==typeof f&&(h={configurable:!0,get(){return this.hasAttribute(g)},set(a){this.toggleAttribute(g,a)}}),Object.defineProperty(a,e,h),e in a&&!a.hasAttribute(g)&&h.set.call(a,f)}}let s=Symbol.for("catalyst");class CatalystDelegate{constructor(a){let b=this,c=a.prototype.connectedCallback;a.prototype.connectedCallback=function(){b.connectedCallback(this,c)};let d=a.prototype.disconnectedCallback;a.prototype.disconnectedCallback=function(){b.disconnectedCallback(this,d)};let e=a.prototype.attributeChangedCallback;a.prototype.attributeChangedCallback=function(a,c,d){b.attributeChangedCallback(this,a,c,d,e)};let f=a.observedAttributes||[];Object.defineProperty(a,"observedAttributes",{configurable:!0,get(){return b.observedAttributes(this,f)},set(a){f=a}}),function(a){let b=a.observedAttributes||[],c=a.attrPrefix??"data-",d=a=>n(`${c}${a}`);Object.defineProperty(a,"observedAttributes",{configurable:!0,get:()=>[...t(a.prototype,o)].map(d).concat(b),set(a){b=a}})}(a),function(a){let b=m(a.name).replace(/-element$/,"");try{window.customElements.define(b,a),window[a.name]=customElements.get(b)}catch(c){if(!(c instanceof DOMException&&"NotSupportedError"===c.name))throw c}}(a)}observedAttributes(a,b){return b}connectedCallback(a,b){var c;a.toggleAttribute("data-catalyst",!0),customElements.upgrade(a),function(a){for(let b of a.querySelectorAll("template[data-shadowroot]"))b.parentElement===a&&a.attachShadow({mode:"closed"===b.getAttribute("data-shadowroot")?"closed":"open"}).append(b.content.cloneNode(!0))}(a),r(a),c=a,d.add(c),c.shadowRoot&&e(c.shadowRoot),h(c),g(c.ownerDocument),b?.call(a),a.shadowRoot&&e(a.shadowRoot)}disconnectedCallback(a,b){b?.call(a)}attributeChangedCallback(a,b,c,d,e){r(a),"data-catalyst"!==b&&e&&e.call(a,b,c,d)}}function t(a,b){if(!Object.prototype.hasOwnProperty.call(a,s)){let c=a[s],d=a[s]=new Map;if(c)for(let[e,f]of c)d.set(e,new Set(f))}let g=a[s];return g.has(b)||g.set(b,new Set),g.get(b)}function u(a,b){t(a,"target").add(b),Object.defineProperty(a,b,{configurable:!0,get(){return l(this,b)}})}function v(a,b){t(a,"targets").add(b),Object.defineProperty(a,b,{configurable:!0,get(){return function(a,b){let c=a.tagName.toLowerCase(),d=[];if(a.shadowRoot)for(let e of a.shadowRoot.querySelectorAll(`[data-targets~="${c}.${b}"]`))e.closest(c)||d.push(e);for(let f of a.querySelectorAll(`[data-targets~="${c}.${b}"]`))f.closest(c)===a&&d.push(f);return d}(this,b)}})}function w(a){new CatalystDelegate(a)}let x=new Map,y=new Promise(a=>{"loading"!==document.readyState?a():document.addEventListener("readystatechange",()=>a(),{once:!0})}),z=new Promise(a=>{let b=new AbortController;b.signal.addEventListener("abort",()=>a());let c={once:!0,passive:!0,signal:b.signal},d=()=>b.abort();document.addEventListener("mousedown",d,c),document.addEventListener("touchstart",d,c),document.addEventListener("keydown",d,c),document.addEventListener("pointerdown",d,c)}),A={ready:()=>y,firstInteraction:()=>z,visible:a=>new Promise(b=>{let c=new IntersectionObserver(a=>{for(let d of a)if(d.isIntersecting){b(),c.disconnect();return}},{rootMargin:"0px 0px 256px 0px",threshold:.01});for(let d of document.querySelectorAll(a))c.observe(d)})},B=new WeakMap;function C(a){cancelAnimationFrame(B.get(a)||0),B.set(a,requestAnimationFrame(()=>{for(let b of x.keys()){let c=a.matches(b)?a:a.querySelector(b);if(customElements.get(b)||c){let d=c?.getAttribute("data-load-on")||"ready",e=d in A?A[d]:A.ready;for(let f of x.get(b)||[])e(b).then(f);x.delete(b),B.delete(a)}}}))}let D;function E(a,b){x.has(a)||x.set(a,new Set),x.get(a).add(b),C(document.body),D||(D=new MutationObserver(a=>{if(x.size)for(let b of a)for(let c of b.addedNodes)c instanceof Element&&C(c)})).observe(document,{subtree:!0,childList:!0})}},15205(a,b,c){function d(...a){return JSON.stringify(a,(a,b)=>"object"==typeof b?b:String(b))}function e(a,b={}){let{hash:c=d,cache:e=new Map}=b;return function(...b){let d=c.apply(this,b);if(e.has(d))return e.get(d);let f=a.apply(this,b);return f instanceof Promise&&(f=f.catch(a=>{throw e.delete(d),a})),e.set(d,f),f}}c.d(b,{Z:()=>e})}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js"],()=>b(4722));var c=a.O()}])
//# sourceMappingURL=code-menu-55e898406107.js.map