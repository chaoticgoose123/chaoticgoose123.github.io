import{i as ue,h as I,a as l,s as T,b as Ke,c,d,e as v,p as j,m as R,f as ce,o as g,_ as O,g as Ye,j as Je,k as qe,l as Me,n as Xe,q as Qe,r as Ze,t as et,u as tt,v as fe,w as z,x as E,y as nt,z as rt,A as st,B as C,C as de,D as it,E as ot,F as ge,G as at,H as pe,I as lt,J as he,K as me,L as W,M as ut,N as ct}from"./chunk-98365cd5.js";function w(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function X(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function L(e,t){const n=Object.getOwnPropertyDescriptor(e,t);return!!n&&!("value"in n)&&!!n.get}function ft(e,t){if(!w(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function dt(e){return typeof e=="object"&&e!==null&&"then"in e&&ue(e.then)}function gt(e,t){const s=t.filter(({filesystemRoot:i})=>e.startsWith(i)).sort(I(({filesystemRoot:i})=>i.length))[0];let r;if(s){const{filesystemRoot:i,routeRoot:o}=s,a={pageId:e,filesystemRoot:i,routeRoot:o};l(o.startsWith("/")&&e.startsWith("/")&&i.startsWith("/"),a),l(e.startsWith(i),a),i!=="/"?(l(!i.endsWith("/"),a),r=T(e,i.length,0)):r=e,l(r.startsWith("/"),a),r=o+(o.endsWith("/")?"":"/")+T(r,1,0)}else r=e;return l(r.startsWith("/")),r=r.split("/").filter(i=>i!=="pages"&&i!=="src"&&i!=="index").join("/"),l(!r.includes(".page.")),l(!r.endsWith(".")),r.endsWith("/index")&&(r=T(r,0,-6)),r===""&&(r="/"),l(r.startsWith("/")),l(!r.endsWith("/")||r==="/"),r}async function pt(e){await Promise.all(e._pageFilesAll.filter(r=>r.fileType===".page.route").map(r=>{var i;return(i=r.loadFile)===null||i===void 0?void 0:i.call(r)}));const{onBeforeRouteHook:t,filesystemRoots:n}=mt(e);return{pageRoutes:ht(n,e),onBeforeRouteHook:t}}function ht(e,t){const n=[];return t._allPageIds.filter(s=>!Ke(s)).forEach(s=>{const r=yt(s,t._pageFilesAll);if(r){const{filePath:i,fileExports:o}=r;if(l(o),c("default"in o,`${i} should have a default export.`),d(o,"default","string")){const a=o.default;c(a.startsWith("/"),`A Route String should start with a leading \`/\` but \`${i}\` has \`export default '${a}'\`. Make sure to \`export default '/${a}'\` instead.`),n.push({pageId:s,routeString:a,pageRouteFilePath:i,routeType:"STRING"});return}if(d(o,"default","function")){const a=o.default;let f=!1;const u="iKnowThePerformanceRisksOfAsyncRouteFunctions";u in o&&(c(d(o,u,"boolean"),`The export \`${u}\` of ${i} should be a boolean.`),f=o[u]),n.push({pageId:s,routeFunction:a,pageRouteFilePath:i,allowAsync:f,routeType:"FUNCTION"});return}c(!1,`The default export of ${i} should be a string or a function.`)}else{const i=gt(s,e);l(i.startsWith("/")),l(!i.endsWith("/")||i==="/"),n.push({pageId:s,routeString:i,pageRouteFilePath:null,routeType:"FILESYSTEM"})}}),n}function mt(e){let t=null;const n=[];return e._pageFilesAll.filter(s=>s.fileType===".page.route"&&s.isDefaultPageFile).forEach(({filePath:s,fileExports:r})=>{if(l(r),"onBeforeRoute"in r){c(d(r,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${s} should be a function.`);const{onBeforeRoute:i}=r;t={filePath:s,onBeforeRoute:i}}"filesystemRoutingRoot"in r&&(c(d(r,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} should be a string.`),c(d(r,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} is \`'${r.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),n.push({filesystemRoot:bt(s),routeRoot:r.filesystemRoutingRoot}))}),{onBeforeRouteHook:t,filesystemRoots:n}}function yt(e,t){return t.find(n=>n.pageId===e&&n.fileType===".page.route")}function bt(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=T(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}function K(e){l(e.urlOriginal),"urlPathname"in e?l(L(e,"urlPathname")):Object.defineProperty(e,"urlPathname",{get:be,enumerable:!0,configurable:!0}),"url"in e?l(L(e,"url")):Object.defineProperty(e,"url",{get:_t,enumerable:!1,configurable:!0}),"urlParsed"in e?l(L(e,"urlParsed")):Object.defineProperty(e,"urlParsed",{get:Pt,enumerable:!0,configurable:!0})}function ye(e){let t=e.urlOriginal;const{_baseUrl:n,_urlProcessor:s}=e;return l(n.startsWith("/")),l(s===null||ue(s)),s!==null&&(t=s(t)),j(t,n)}function be(){const{pathname:e}=ye(this),t=e;return l(t.startsWith("/")),t}function _t(){return v(!1,"`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)",{onlyOnce:!0,showStackTrace:!0}),be.call(this)}function Pt(){const e=ye(this),{origin:t,pathname:n,pathnameOriginal:s,search:r,searchAll:i,searchOriginal:o,hash:a,hashOriginal:f}=e,u={origin:t,pathname:n,pathnameOriginal:s,search:r,searchAll:i,searchOriginal:o,hash:a,hashOriginal:f,get hashString(){return v(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0,showStackTrace:!0}),f},get searchString(){return v(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0,showStackTrace:!0}),o}};return Q(u,"hashString"),Q(u,"searchString"),u}function Q(e,t){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(e,t,{...n,enumerable:!1})}function vt(e){l(typeof e.urlOriginal=="string"),l(typeof e.urlPathname=="string"),l(w(e.urlParsed)),l(e.urlPathname===e.urlParsed.pathname)}const _e="@",D=":";function V(e,t){c(e==="*"||e.startsWith("/"),`Invalid route string \`${e}\`${e===""?" (empty string)":""}: route strings should start with a leading slash \`/\` (or be \`*\`).`),l(t.startsWith("/"));const n=e.split("/"),s=t.split("/"),r={};wt(e),e==="*"&&(e="/*");for(let i=0;i<Math.max(n.length,s.length);i++){const o=n[i],a=s[i];if(o==="*")return r["*"]=s.slice(Math.max(1,i)).join("/"),{routeParams:r};if(o&&k(o)){if(v(!o.startsWith(D),`Outdated route string \`${e}\`, use \`${e.split(D).join(_e)}\` instead.`,{onlyOnce:!0}),!a)return null;r[o.slice(1)]=a}else if((o||"")!==(a||""))return null}return{routeParams:r}}function wt(e){const t=e.split("*").length-1;c(t<=1,`Invalid route string \`${e}\`: route strings are not allowed to contain more than one glob character \`*\`.`),c(t===0||t===1&&e.endsWith("*"),`Invalid route string \`${e}\`: make sure your route string ends with the glob character \`*\`.`)}function x(e){const t=e.split("/").filter(o=>o!==""&&o!=="*");let n=0;for(const o of t){if(k(o))break;n++}const s=t.filter(o=>!k(o)).length,r=t.filter(o=>k(o)).length,i=e.endsWith("*");return{numberOfParameterSegments:r,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:s,isCatchAll:i}}function k(e){return e.startsWith(_e)||e.startsWith(D)}function Z(e){const n=V(e,e);return l(n),Object.keys(n.routeParams).length===0}function St(e){e.sort(Rt).sort(R(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(R(t=>t.routeType==="STRING"&&Z(t.routeString)===!1)).sort(R(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(R(t=>t.routeType==="STRING"&&Z(t.routeString)===!0)).sort(R(t=>t.routeType==="FILESYSTEM")).sort(R(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function Rt(e,t){var n,s;{const r=(n=e.precedence)!==null&&n!==void 0?n:0,i=(s=t.precedence)!==null&&s!==void 0?s:0;if(r!==i)return r>i?-1:1}if(!t.routeString||!e.routeString)return 0;{const i=I(o=>x(o).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(i!==0)return i}{const i=I(o=>x(o).numberOfStaticSegements)(e.routeString,t.routeString);if(i!==0)return i}{const i=I(o=>x(o).numberOfParameterSegments)(e.routeString,t.routeString);if(i!==0)return i}{if(x(t.routeString).isCatchAll)return-1;if(x(e.routeString).isCatchAll)return 1}return 0}async function Ot(e,t,n,s){vt(n);let r=e(n);if(c(!dt(r)||t,`The Route Function ${s} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`),r=await r,r===!1)return null;if(r===!0&&(r={}),c(w(r),`The Route Function ${s} should return a boolean or a plain JavaScript object, instead it returns \`${d(r,"constructor")?r.constructor:r}\`.`),"match"in r){const{match:a}=r;if(c(typeof a=="boolean",`The \`match\` value returned by the Route Function ${s} should be a boolean.`),!a)return null}let i=null;"precedence"in r&&(i=r.precedence,c(typeof i=="number",`The \`precedence\` value returned by the Route Function ${s} should be a number.`)),Pe(r,`The \`routeParams\` object returned by the Route Function ${s} should`);const o=r.routeParams||{};return c(!("pageContext"in r),"Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#async"),l(w(o)),Object.keys(r).forEach(a=>{c(a==="match"||a==="routeParams"||a==="precedence",`The Route Function ${s} returned an object with an unknown key \`{ ${a} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:i,routeParams:o}}function Pe(e,t){l(t.endsWith(" should")),d(e,"routeParams")&&(c(w(e.routeParams),`${t} be a plain JavaScript object.`),c(Object.values(e.routeParams).every(n=>typeof n=="string"),`${t} only hold string values.`))}function ve(e,{hook:t,errorMessagePrefix:n}){if(!n){l(t);const{hookName:s,hookFilePath:r}=t;l(r.startsWith("/")),l(!s.endsWith(")")),n=`The \`pageContext\` provided by the \`export { ${s} }\` of ${r}`}c(ce(e),`${n} should be an object.`),c(!("_objectCreatedByVitePluginSsr"in e),`${n} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),v(!("_pageId"in e),"You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.",{onlyOnce:!0})}async function xt(e,t){const n=await e.onBeforeRoute(t),s=`The \`onBeforeRoute()\` hook exported by ${e.filePath}`;if(c(n==null||ft(n,["pageContext"])&&d(n,"pageContext"),`${s} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),n==null)return null;if(c(d(n,"pageContext","object"),`${s} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`),d(n.pageContext,"_pageId")&&!d(n.pageContext,"_pageId","null")){const i=`${s} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;c(d(n.pageContext,"_pageId","string"),`${i} a string or \`null\``),c(t._allPageIds.includes(n.pageContext._pageId),`${i} one of following values: \`[${t._allPageIds.map(o=>`'${o}'`).join(", ")}]\`.`)}d(n.pageContext,"routeParams")&&Pe(n.pageContext,`${s} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);const r={};return d(n.pageContext,"url")&&(v(!1,`${s} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,{onlyOnce:!0}),n.pageContext.urlOriginal=n.pageContext.url,delete n.pageContext.url),d(n.pageContext,"urlOriginal")&&(c(d(n.pageContext,"urlOriginal","string"),`${s} returned \`{ pageContext: { urlOriginal } }\` but \`urlOriginal\` should be a string`),g(r,{_urlPristine:t.urlOriginal})),ve(n.pageContext,{hook:{hookFilePath:e.filePath,hookName:"onBeforeRoute"}}),g(r,n.pageContext),r}var A;function ee(...e){var t,n;A||(A=(n=(t=globalThis).__brillout_debug_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),A&&A(...e)}async function we(e){K(e);const{pageRoutes:t,onBeforeRouteHook:n}=await pt(e);ee("Pages routes:",t);const s={};if(n){const f=await xt(n,e);if(f){if(g(s,f),d(s,"_pageId","string")||d(s,"_pageId","null"))return d(s,"routeParams")?l(d(s,"routeParams","object")):g(s,{routeParams:{}}),g(s,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:s};g(e,s)}}g(s,{_routingProvidedByOnBeforeRouteHook:!1});const r=e._allPageIds;l(r.length>=0),c(r.length>0,"No `*.page.js` file found. You must create a `*.page.js` file, e.g. `pages/index.page.js` (or `pages/index.page.{jsx, tsx, vue, ...}`).");const{urlPathname:i}=e;l(i.startsWith("/"));const o=[];await Promise.all(t.map(async f=>{const{pageId:u,routeType:m}=f;if(f.routeType==="FILESYSTEM"){const{routeString:p}=f,_=V(p,i);if(_){const{routeParams:y}=_;o.push({pageId:u,routeParams:y,routeString:p,routeType:m})}return}if(f.routeType==="STRING"){const{routeString:p}=f,_=V(p,i);if(_){const{routeParams:y}=_;l(m==="STRING"),o.push({pageId:u,routeString:p,routeParams:y,routeType:m})}return}if(f.routeType==="FUNCTION"){const{routeFunction:p,allowAsync:_,pageRouteFilePath:y}=f,S=await Ot(p,_,e,y);if(S){const{routeParams:P,precedence:b}=S;o.push({pageId:u,precedence:b,routeParams:P,routeType:m})}return}l(!1)})),St(o);const a=o[0];if(ee(`Route matches for URL \`${i}\` (in precedence order):`,o),g(s,{_routeMatches:o}),!a)return g(s,{_pageId:null,routeParams:{}}),{pageContextAddendum:s};{const{routeParams:f}=a;l(w(f)),g(s,{_pageId:a.pageId,routeParams:a.routeParams})}return{pageContextAddendum:s}}const Y={},Se={},Tt={},H={},Ft={},Ct=!0,Et=Object.assign({"/pages/index.page.mdx":()=>O(()=>import("./pages/index.page.fc1533cf.js"),["assets/pages/index.page.fc1533cf.js","assets/chunk-f4b53398.js"]),"/pages/me.page.mdx":()=>O(()=>import("./pages/me.page.47bfcbc5.js"),["assets/pages/me.page.47bfcbc5.js","assets/chunk-f4b53398.js"]),"/pages/personas-storyboarding.page.mdx":()=>O(()=>import("./pages/personas-storyboarding.page.e0af439d.js"),["assets/pages/personas-storyboarding.page.e0af439d.js","assets/chunk-f4b53398.js","assets/chunk-f2b8c439.js"]),"/pages/responsive-redesign.page.mdx":()=>O(()=>import("./pages/responsive-redesign.page.36323f1b.js"),["assets/pages/responsive-redesign.page.36323f1b.js","assets/chunk-f4b53398.js","assets/chunk-f2b8c439.js"]),"/pages/tri-state-camera/index.page.tsx":()=>O(()=>import("./pages/tri-state-camera/index.page.43047a6d.js"),["assets/pages/tri-state-camera/index.page.43047a6d.js","assets/index.page.b8140cbb.css","assets/chunk-f4b53398.js"])}),At={...Et};Y[".page"]=At;const It=Object.assign({}),kt={...It};Se[".page.route"]=kt;const $t=Object.assign({"/renderer/_default.page.client.tsx":()=>O(()=>import("./renderer/_default.page.client.ee4c0efa.js"),["assets/renderer/_default.page.client.ee4c0efa.js","assets/_default.page.client.3b3bae27.css","assets/chunk-f4b53398.js"])}),jt={...$t};Y[".page.client"]=jt;const Ht=Object.assign({"/renderer/_default.page.client.tsx":Ye}),Nt={...Ht};H[".page.client"]=Nt;const Wt=Object.assign({"/renderer/_default.page.server.tsx":Je}),Lt={...Wt};H[".page.server"]=Lt;const Ut=Object.assign({"/pages/index.page.mdx":qe,"/pages/me.page.mdx":Me,"/pages/personas-storyboarding.page.mdx":Xe,"/pages/responsive-redesign.page.mdx":Qe,"/pages/tri-state-camera/index.page.tsx":Ze}),Bt={...Ut};H[".page"]=Bt;const Dt=Object.freeze(Object.defineProperty({__proto__:null,pageFilesLazy:Y,pageFilesEager:Se,pageFilesExportNamesLazy:Tt,pageFilesExportNamesEager:H,neverLoaded:Ft,isGeneratedFile:Ct},Symbol.toStringTag,{value:"Module"}));et(Dt);function Vt(e){return!!e.startsWith("http")}function Re(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function Gt(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}function zt(e){return j(e,"/").pathname}function N(e){window.location.href=e}function Kt(){return!!Yt()}function Yt(){var e,t,n,s;const r=!!(!((t=(e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||e===void 0?void 0:e.renderers)===null||t===void 0)&&t.size),i=!!(!((s=(n=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||n===void 0?void 0:n.rendererInterfaces)===null||s===void 0)&&s.size),o=!!window.__vite_plugin_react_preamble_installed__,a=f=>{v(f,"An internal heuristic needs to be updated, see https://github.com/brillout/vite-plugin-ssr/issues/423",{onlyOnce:!0})};return r||i?(a(r&&o),!0):o?(l(r===!1&&i===!1),!0):!1}function Jt(e,t){return(e==null?void 0:e.message)===(t==null?void 0:t.message)}function qt(e){return new Promise(t=>setTimeout(t,e))}function te(e){const t=e/1e3;if(t<120)return`${ne(t)} seconds`;const n=t/60;return`${ne(n)} minutes`}function ne(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function G(e,t,n){const{timeoutErr:s,timeoutWarn:r}=Mt(t);let i,o;const a=new Promise((p,_)=>{i=y=>{f(),p(y)},o=y=>{f(),_(y)}}),f=()=>{clearTimeout(u),clearTimeout(m)},u=setTimeout(()=>{const p=`${tt}[Slow Hook] The ${t}() hook of ${n} is taking more than ${te(s)}`;console.warn(p)},s),m=setTimeout(()=>{const p=fe(`[Hook Timeout] The ${t}() hook of ${n} didn't finish after ${te(r)}`);o(p)},r);return(async()=>{try{const p=await e();i(p)}catch(p){o(p)}})(),a}function Mt(e){let t=2e4,n=4*1e3;return e==="onBeforeRoute"&&(t=5*1e3,n=1*1e3),e==="onBeforePrerender"&&(t=60*1e3,n=30*1e3),{timeoutErr:t,timeoutWarn:n}}const re=z("navigationState.ts",{}),Xt=E(),Oe={markNavigationChange(){re.navigationChanged=!0},get noNavigationChangeYet(){return!re.navigationChanged&&this.isFirstUrl(E())},isFirstUrl(e){return e===Xt}};function xe(e,t){return nt(e,t)}async function Qt(e,t){const s=xe(e,t).filter(i=>i.fileType===".page.server");return await Promise.all(s.map(async i=>{i.exportNames||(l(i.loadExportNames,t),await i.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:s.some(({exportNames:i})=>(l(i),i.includes("onBeforeRender")))}}function Zt(e,t,n,s){l(!t.endsWith(")"));const r=`The \`export { ${t} }\` of ${s}`;c(e==null||w(e),`${r} should return \`null\`, \`undefined\`, or a plain JavaScript object.`),e!=null&&(en(e,n,r),"pageContext"in e&&ve(e.pageContext,{hook:{hookName:t,hookFilePath:s}}))}function en(e,t,n){const s=[],r=Object.keys(e);for(const i of r)t.includes(i)||s.push(i);c(s.length===0,[n,"returned an object with unknown keys",X(s)+".","Only following keys are allowed:",X(t)+"."].join(" "))}function Te(e){return l([!0,!1].includes(e.isHydration)),l([!0,!1,null].includes(e.isBackwardNavigation)),rt(e)}const se=["urlPathname","urlParsed"],tn=["Page","pageExports","exports"];function Fe(e){[...tn,...se].forEach(n=>{n in e&&(se.includes(n)?(l(n.startsWith("url")),v(!1,`\`pageContext.${n}\` is already available in the browser when using Client Routing; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0})):v(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0}),delete e[n])})}const nn="/";function rn(e,t,n){const{pathnameOriginal:s,searchOriginal:r,hashOriginal:i}=j(e,nn);e.startsWith("/")&&l(e===`${s}${r||""}${i||""}`,{url:e});const o=s.endsWith("/");let a;return n&&s!=="/"?(o?a=T(s,0,-1):a=s,l(!a.endsWith("/"),{url:e}),l(a!=="")):a=s+(o?"":"/")+"index",l(a),a=a+t,`${a}${r||""}${i||""}`}const sn=".pageContext.json",on=!1;function an(e){return rn(e,sn,on)}async function ln(e){return e._isFirstRenderAttempt&&Oe.isFirstUrl(e.urlOriginal)?(l(d(e,"_isFirstRenderAttempt","true")),un(e)):(l(d(e,"_isFirstRenderAttempt","false")),fn(e))}async function un(e){const t=st();return Fe(t),g(t,{isHydration:!0,_comesDirectlyFromServer:!0}),g(t,await C(e._pageFilesAll,t._pageId)),t}async function cn(e){const t=de(e._allPageIds);if(!t)throw new Error("No error page");const n={isHydration:!1,_pageId:t,_pageContextRetrievedFromServer:null,_comesDirectlyFromServer:!1};return g(n,await C(e._pageFilesAll,n._pageId)),n}async function fn(e){let t={};g(t,{isHydration:!1}),g(t,await gn(e)),g(t,await C(e._pageFilesAll,t._pageId));const n=await dn({...e,...t});if(l([!0,!1].includes(n._comesDirectlyFromServer)),n._isError){t={},l(n._comesDirectlyFromServer===!0),l(d(n,"is404","boolean")),l(d(n,"pageProps","object")),l(d(n.pageProps,"is404","boolean")),l(!("serverSideError"in n));const s=de(e._allPageIds);return l(s),g(t,{isHydration:!1,_pageId:s}),g(t,n),g(t,await C(e._pageFilesAll,t._pageId)),t}else return g(t,n),t}async function dn(e){const t=it(e,"onBeforeRender");if(t){const s=t.hook,r={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},i=Te({...e,...r}),o=await G(()=>s(i),"onBeforeRender",t.filePath);Zt(o,"onBeforeRender",["pageContext"],t.filePath);const a=o==null?void 0:o.pageContext;return g(r,a),r}else if((await Qt(e._pageFilesAll,e._pageId)).hasOnBeforeRenderServerSideOnlyHook){const s=await pn(e),r={};return Object.assign(r,s),g(r,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:s}),r}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function gn(e){const n=(await we(e)).pageContextAddendum;if(!n._pageId)throw new Error("No routing match");return l(d(n,"_pageId","string")),n}async function pn(e){var t;const n=an((t=e._urlPristine)!==null&&t!==void 0?t:e.urlOriginal),s=await fetch(n);{const a=s.headers.get("content-type"),f=a&&a.includes("application/json");if(!f&&s.status===404){N(e.urlOriginal);const u=new Error("Page doesn't exist");throw Object.assign(u,{_abortRendering:!0}),u}c(f,`Wrong HTTP Response Header \`content-type\` value for URL ${n} (it should be \`application/json\` but we got \`${a}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const r=await s.text(),i=ot(r);if("serverSideError"in i)throw fe("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");l(d(i,"pageContext"));const o=i.pageContext;return l(w(o)),l(d(o,"_pageId","string")),Fe(o),o}function Ce(){const e="/";return Vt(e)?"/":e}const U=z("getGlobalContext.ts",{});async function Ee(){return U.globalContext||(U.globalContext=await hn()),U.globalContext}async function hn(){const e=Ce();ge(e);const t={_urlProcessor:null,_baseUrl:e,_objectCreatedByVitePluginSsr:!0,_isProduction:!0},{pageFilesAll:n,allPageIds:s}=await at(!0);return g(t,{_pageFilesAll:n,_allPageIds:s}),t}async function Ae(e){const t=await Ee(),n={urlOriginal:e,...t},s=t._pageFilesAll;K(n);const r=await we(n);if(!("pageContextAddendum"in r))return{pageId:null,pageFilesAll:s};const i=r.pageContextAddendum._pageId;return i?{pageId:i,pageFilesAll:s}:{pageId:null,pageFilesAll:s}}function F(e){return e.exportNames?e.exportNames:(l(e.fileExports,e.pageId),Object.keys(e.fileExports))}function mn({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:s(),isClientRouting:i()};function s(){return t.some(a=>a.pageId===n&&a.fileType===".page")?(r(),!1):!(!t.some(a=>a.pageId===n&&a.fileType===".page.server")||e.some(a=>a.pageId===n&&a.fileType===".page.client"&&F(a).includes("render")))}function r(){const o=e.some(a=>F(a).includes("render"));c(o,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,f)=>` (${f+1}): ${a.filePath}`)].join(`
`)].join(" "))}function i(){return e.some(a=>F(a).includes("clientRouting"))}}function yn({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:s}){let r=[];const i=t.filter(a=>!e.includes(a)),o=[];if(o.push(...e.map(a=>({id:a.filePath,onlyAssets:!1}))),o.push(...i.map(a=>({id:a.filePath,onlyAssets:!0}))),n)r=e.map(a=>a.filePath);else{const a=s?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js";o.push({id:a,onlyAssets:!1}),r=[a]}return{clientEntries:r,clientDependencies:o}}function bn(e,t){let n=pe(e,t);const s=xe(e,t),{isHtmlOnly:r,isClientRouting:i}=mn({pageFilesClientSide:n,pageFilesServerSide:s,pageId:t});r&&(n=n.filter(f=>f.fileType===".page.client"&&!F(f).includes("render")),n=Pn(n));const{clientEntries:o,clientDependencies:a}=yn({pageFilesClientSide:n,pageFilesServerSide:s,isHtmlOnly:r,isClientRouting:i});return{isHtmlOnly:r,isClientRouting:i,clientEntries:o,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:s}}async function _n(e,t,{sharedPageFilesAlreadyLoaded:n}){const s=pe(e,t);await Promise.all(s.map(async r=>{var i;l(r.fileType===".page"||r.fileType===".page.client"),!(n&&r.fileType===".page")&&await((i=r.loadExportNames)===null||i===void 0?void 0:i.call(r))}))}function Pn(e){const t=[];for(const n of e)if(t.push(n),F(n).includes("overrideDefaultPages"))break;return t}async function Ie(e){const{pageId:t,pageFilesAll:n}=await Ae(e);if(!t)return!1;await _n(n,t,{sharedPageFilesAlreadyLoaded:!1});const{isHtmlOnly:s,isClientRouting:r}=bn(n,t);return!s&&r}function ke(e){const t=e.getAttribute("href");return!!(t===null||t===""||Re(t)||vn(e)||wn(t)||!Sn(t)||!lt(t))}function vn(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function wn(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function Sn(e){const t=Ce();ge(t);const{hasBaseUrl:n}=j(e,t);return n}function Rn(e,t){const n=On(e,t);return{prefetchPageContext:!1,prefetchStaticAssets:n}}function On(e,t){let n=xn(t),s=(()=>{if(n!==null)return n===!0?{when:"VIEWPORT"}:{when:"HOVER"};if("prefetchLinks"in e.exports&&c(n===null,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:r}=e.exports;if(r===!1)return!1;const i="`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";c(w(r),i);const o=Object.keys(r);c(o.length===1&&o[0]==="when",i);const{when:a}=r;if(a==="HOVER"||a==="VIEWPORT")return{when:a};c(!1,i)}return{when:"HOVER"}})();return s&&s.when==="VIEWPORT"&&!e._isProduction&&(he(!1,"Viewport prefetching is disabled in development",{onlyOnce:!0}),s={when:"HOVER"}),s}function xn(e){let t=e.getAttribute("data-prefetch");if(v(t===null,"The `data-prefetch` attribute is outdated.",{onlyOnce:!0}),t===null)return null;if(l(typeof t=="string"),t==="true")return!0;if(t==="false")return!1;c(!1,`Wrong data-prefetch value: \`"${t}"\`; it should be \`"true"\` or \`"false"\`.`)}const $e=new Map;function je(e){const t=Ne(e);return $e.has(t)}function He(e){const t=Ne(e);$e.set(t,!0)}function Ne(e){return zt(e)}const ie=new Map;async function B(e){if(c(!Re(e),`You are trying to prefetch ${e} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`),je(e))return;He(e);const{pageId:t,pageFilesAll:n}=await Ae(e);if(t)try{await C(n,t)}catch(s){if(me(s))De();else throw s}}function Tn(e){He(e.urlOriginal),[...document.getElementsByTagName("A")].forEach(async n=>{if(ie.has(n))return;ie.set(n,!0);const s=n.getAttribute("href");if(ke(n)||(l(s),!await Ie(s))||je(s))return;const r=Rn(e,n);if(r.prefetchStaticAssets){if(r.prefetchStaticAssets.when==="HOVER")n.addEventListener("mouseover",()=>B(s)),n.addEventListener("touchstart",()=>B(s),{passive:!0});else if(r.prefetchStaticAssets.when==="VIEWPORT"){const i=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&(B(s),i.disconnect())})});i.observe(n)}}else return})}function We(){let e=window.history.state;e||(e={});let t=!1;"timestamp"in e||(t=!0,e.timestamp=Ue()),"scrollPosition"in e||(t=!0,e.scrollPosition=Le()),Be(e),t&&q(e)}function J(){const e=window.history.state||{};return Be(e),e}function Le(){return{x:window.scrollX,y:window.scrollY}}function Ue(){return new Date().getTime()}function oe(){const e=Le(),t=J();q({...t,scrollPosition:e})}function Fn(e,t){if(t)q(J(),e);else{const n=Ue();Cn({timestamp:n,scrollPosition:null},e)}}function Be(e){if(l(ce(e)),"timestamp"in e){const{timestamp:t}=e;l(typeof t=="number")}if("scrollPosition"in e){const{scrollPosition:t}=e;t!==null&&l(d(t,"x","number")&&d(t,"y","number"))}}function q(e,t){window.history.replaceState(e,"",t)}function Cn(e,t){window.history.pushState(e,"",t)}const h=z("useClientRouter.ts",{previousState:$()});Nn();We();function De(){h.clientRoutingIsDisabled=!0,he(!1,"New deployed frontend detected. The next page navigation will use Server Routing instead of Client Routing.",{onlyOnce:!0})}function En(){h.isUsingClientRouting=!0,jn(),An((r,{keepScrollPosition:i})=>{s({scrollTarget:i?"preserve-scroll":"scroll-to-top-or-hash",url:r,isBackwardNavigation:!1})}),In((r,i)=>{s({scrollTarget:r,isBackwardNavigation:i})}),globalThis.__vite_plugin_ssr__navigate=async(r,{keepScrollPosition:i,overwriteLastHistoryEntry:o})=>{await s({scrollTarget:i?"preserve-scroll":"scroll-to-top-or-hash",url:r,overwriteLastHistoryEntry:o,isBackwardNavigation:!1})};let e=0,t,n=!1;s({scrollTarget:"preserve-scroll",isBackwardNavigation:null});return;async function s({scrollTarget:r,url:i=E(),overwriteLastHistoryEntry:o=!1,isBackwardNavigation:a}){var f;if(h.clientRoutingIsDisabled){N(i);return}const u={urlOriginal:i,isBackwardNavigation:a},m=++e;l(m>=1),m>1&&n===!1&&((f=h.onPageTransitionStart)===null||f===void 0||f.call(h,u),n=!0);const p=()=>Kt()&&m===1?!1:m!==e,_=await Ee();if(p())return;const y=m===1;g(u,{_isFirstRenderAttempt:y}),g(u,_),K(u);let S;try{S=await ln(u)}catch(P){if(le(P,u))return;console.error(P);try{S=await cn(u)}catch(b){if(le(b,u)||(y||setTimeout(()=>{window.location.pathname=i},0),Jt(P,b)))return;throw b}}if(!p()&&(g(u,S),W(u,"onPageTransitionStart"),h.onPageTransitionStart=u.exports.onPageTransitionStart,t&&await t,!p())){if(kn(i,o),Oe.markNavigationChange(),l(t===void 0),t=(async()=>{const P=Te(u);ut(u);const b=u.exportsAll.render[0]._filePath;l(b);const ze=await G(()=>u.exports.render(P),"render",b);c(ze===void 0,`The render() hook of ${b} isn't allowed to return a value`),Tn(u)})(),await t,t=void 0,u._isFirstRenderAttempt){W(u,"onHydrationEnd");const{onHydrationEnd:P}=u.exports;if(P){const b=u.exportsAll.onHydrationEnd[0]._filePath;l(b),await G(()=>P(u),"onHydrationEnd",b)}}else m===e&&(u.exports.onPageTransitionEnd&&(W(u,"onPageTransitionEnd"),u.exports.onPageTransitionEnd(u)),n=!1);Ve(r),M(),h.initialRenderIsDone=!0}}}function An(e){document.addEventListener("click",t);return;async function t(r){if(!n(r))return;const i=s(r.target);if(!i)return;const o=i.getAttribute("href");if(ke(i))return;if(l(o),r.preventDefault(),!await Ie(o)){N(o);return}const a=![null,"false"].includes(i.getAttribute("keep-scroll-position"));e(o,{keepScrollPosition:a})}function n(r){return r.button===0&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey}function s(r){for(;r.tagName!=="A";){const{parentNode:i}=r;if(!i)return null;r=i}return r}}function In(e){window.addEventListener("popstate",()=>{const t=$(),n=t.historyState.scrollPosition||"scroll-to-top-or-hash",s=t.urlWithoutHash===h.previousState.urlWithoutHash,r=!t.historyState.timestamp||!h.previousState.historyState.timestamp?null:t.historyState.timestamp<h.previousState.historyState.timestamp;h.previousState=t,s?window.history.state===null?(We(),h.previousState=$()):Ve(n):e(n,r)})}function kn(e,t){E()!==e&&(M(),Fn(e,t),h.previousState=$())}function $(){return{urlWithoutHash:E({withoutHash:!0}),historyState:J()}}function Ve(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const n=Hn();if(n&&n!=="top"){const s=document.getElementById(n)||document.getElementsByName(n)[0];if(s){s.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;$n(t)}function $n(e){const t=()=>window.scrollTo(e.x,e.y),n=()=>window.scrollX===e.x&&window.scrollY===e.y;n()||(t(),!n()&&requestAnimationFrame(()=>{t(),!n()&&setTimeout(async()=>{if(t(),n())return;const s=new Date().getTime();for(;;)if(await qt(10),t(),n()||new Date().getTime()-s>100)return},0)}))}function jn(){window.addEventListener("scroll",Gt(oe,Math.ceil(1e3/3)),{passive:!0}),Ge(oe)}function Hn(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}function Nn(){ae(),Ge(ae),Wn(()=>h.initialRenderIsDone&&M())}function M(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function ae(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function Ge(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function Wn(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}function le(e,t){return!!(e!=null&&e._abortRendering||Ln(e,t))}function Ln(e,t){if(!me(e))return!1;if(De(),t._isFirstRenderAttempt)throw e;return N(t.urlOriginal),!0}ct();En();