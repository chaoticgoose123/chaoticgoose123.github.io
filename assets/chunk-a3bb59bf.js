function I(e,t){let n;{var s=Error.stackTraceLimit;Error.stackTraceLimit=1/0,n=new Error(e),Error.stackTraceLimit=s}return n.stack=Q(n.stack,t),n}function Q(e,t){if(!e)return e;const n=Z(e);let s=0;return n.filter(o=>o.includes(" (internal/")||o.includes(" (node:internal")?!1:s<t&&X(o)?(s++,!1):!0).join(`
`)}function X(e){return e.startsWith("    at ")}function Z(e){return e.split(/\r?\n/)}function O(e,t){const n=globalThis.__vite_plugin_ssr=globalThis.__vite_plugin_ssr||{};return n[e]=n[e]||t}function B(e){return Array.from(new Set(e))}const $=O("assertPackageInstances.ts",{instances:[]});function ee(){const e=B($.instances);if(e.length>1)throw new Error(`Multiple versions \`vite-plugin-ssr@${e[0]}\` and \`vite-plugin-ssr@${e[1]}\` loaded. Make sure only one version is loaded.`)}function M(){if(!!$.checkBundle&&!($.instances.length<=1))throw new Error("vite-plugin-ssr is included twice in your bundle. Make sure it's inlcuded only once. (To reduce bundle size.)")}function et(){$.checkBundle=!0,M()}function te(e){$.instances.push(e),ee(),M()}const ne="0.4.39",y={projectName:"vite-plugin-ssr",projectVersion:ne,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr",discordInviteToolChannel:"https://discord.com/invite/qTq92FQzKb"};te(y.projectVersion);const P=`[${y.npmPackageName}@${y.projectVersion}]`,re=`${P}[Bug]`,se=`${P}[Wrong Usage]`,ie=`${P}[Warning]`,oe=`${P}[Info]`,L=2;function i(e,t){if(e)return;const n=(()=>{if(!t)return"";const r=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${y.projectName} maintainers; you can ignore this): ${r}.`})();throw I([`${re} You stumbled upon a bug in ${y.projectName}'s source code.`,`Reach out at ${y.githubRepository}/issues/new or ${y.discordInviteToolChannel} and include this error stack (the error stack is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Do not hesitate to reach out as it makes ${y.projectName} more robust.`,n].join(" "),L)}function h(e,t){if(e)return;const n=t.startsWith("[")?"":" ";throw I(`${se}${n}${t}`,L)}function ae(e){const t=e.startsWith("[")?"":" ";return I(`${P}${t}${e}`,L)}const U=O("assert.ts",{alreadyLogged:new Set});function le(e,t,{onlyOnce:n,showStackTrace:s}){if(e)return;const r=`${ie} ${t}`;if(n){const{alreadyLogged:o}=U,a=n===!0?r:n;if(o.has(a))return;o.add(a)}console.warn(s?new Error(r):r)}function tt(e,t,{onlyOnce:n}){if(e)return;const s=`${oe} ${t}`;if(n){const{alreadyLogged:r}=U,o=s;if(r.has(o))return;r.add(o)}console.log(s)}function j(e,t,n){return typeof e=="string"?k(e.split(""),t,n).join(""):k(e,t,n)}function k(e,t,n){const s=[];let r=t>=0?t:e.length+t;i(r>=0&&r<=e.length);let o=n>=0?n:e.length+n;for(i(o>=0&&o<=e.length);!(r===o||(r===e.length&&(r=0),r===o));){const a=e[r];i(a!==void 0),s.push(a),r++}return s}function ce(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function ue(e,t){i(ce(e),{url:e}),i(t.startsWith("/"),{url:e,baseUrl:t});const[n,...s]=e.split("#");i(n!==void 0);const r=["",...s].join("#")||null;i(r===null||r.startsWith("#"));const o=r===null?"":R(r.slice(1)),[a,...l]=n.split("?");i(a!==void 0);const c=["",...l].join("?")||null;i(c===null||c.startsWith("?"),{url:e,searchOriginal:c});const f={},w={};Array.from(new URLSearchParams(c||"")).forEach(([m,_])=>{f[m]=_,w[m]=[...w[m]||[],_]});const{origin:g,pathnameResolved:E}=de(e,t);i(g===null||g===R(g),{origin:g}),i(E.startsWith("/"),{url:e,pathnameResolved:E}),i(g===null||e.startsWith(g),{url:e,origin:g});const W=a.slice((g||"").length);{const m=`${g||""}${W}${c||""}${r||""}`;i(e===m,{url:e,urlRecreated:m})}let{pathname:u,hasBaseUrl:p}=pe(E,t);return u=fe(u),i(u.startsWith("/")),{origin:g,pathname:u,pathnameOriginal:W,hasBaseUrl:p,search:f,searchAll:w,searchOriginal:c,hash:o,hashOriginal:r}}function R(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function fe(e){return e.split("/").map(t=>R(t).split("/").join("%2F")).join("/")}function de(e,t){var n;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let s,r;try{const o=new URL(e);s=o.origin,r=o.pathname}catch{s=null;let a=typeof window<"u"&&((n=window==null?void 0:window.document)===null||n===void 0?void 0:n.baseURI);a=a||"http://fake.example.org"+t,r=new URL(e,a).pathname}return i(r.startsWith("/"),{url:e,pathnameResolved:r}),i(r===r.split("?")[0].split("#")[0]),{origin:s,pathnameResolved:r}}function ge(e){i(e.startsWith("/"))}function he(e){i(e.startsWith("/")),i(!e.includes("?")),i(!e.includes("#"))}function pe(e,t){he(e),ge(t);let n=e;if(i(n.startsWith("/")),i(t.startsWith("/")),t==="/")return{pathname:e,hasBaseUrl:!0};let s=t;return t.endsWith("/")&&n===j(t,0,-1)&&(s=j(t,0,-1),i(n===s)),n.startsWith(s)?(i(n.startsWith("/")||n.startsWith("http")),i(n.startsWith(s)),n=n.slice(s.length),n.startsWith("/")||(n="/"+n),i(n.startsWith("/")),{pathname:n,hasBaseUrl:!0}):{pathname:e,hasBaseUrl:!1}}function G(e,t){Object.assign(e,t)}function A(e){return e instanceof Function||typeof e=="function"}function S(e){return typeof e=="object"&&e!==null}function nt(e){return(t,n)=>{const s=e(t),r=e(n);return s===r?0:s>r?-1:1}}function me(e){return(t,n)=>{const s=e(t),r=e(n);if(i([!0,!1,null].includes(s)),i([!0,!1,null].includes(r)),s===r)return 0;if(s===!0||r===!1)return-1;if(r===!0||s===!1)return 1;i(!1)}}function ye(e){return me(t=>{const n=e(t);return n===null?null:!n})}function _e(){return typeof window<"u"&&typeof window.scrollY=="number"}function d(e,t,n="unknown"){if(!(typeof e=="object"&&e!==null&&t in e))return n==="undefined";if(n==="unknown")return!0;const r=e[t];return n==="array"?Array.isArray(r):n==="string[]"?Array.isArray(r)&&r.every(o=>typeof o=="string"):n==="function"?A(r):Array.isArray(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="undefined"?r===void 0:n==="true"?r===!0:n==="false"?r===!1:typeof r===n}function ve(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const be=e=>e!=null,we="\\";function b(e){i(e&&!e.includes(we),`Wrongly formatted path: ${e}`)}function Ee(e){return/\.(c|m)?(j|t)sx?$/.test(e)}const $e=["clientRouting"];function Se(e){$e.forEach(t=>{if(i(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;h(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is forbidden: remove \`export { ${t} }\` instead. (${n})`),h(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const V=["render","clientRouting","prerender","doNotPrerender"];function Pe(e,t){h(!V.includes(e),`${t} has \`export default { ${e} }\` which is forbidden, use \`export { ${e} }\` instead.`)}function Fe(e){const t={};e.forEach(r=>{je(r).forEach(({exportName:a,exportValue:l,isFromDefaultExport:c})=>{var f;i(a!=="default"),t[a]=(f=t[a])!==null&&f!==void 0?f:[],t[a].push({exportValue:l,_filePath:r.filePath,_fileType:r.fileType,_isFromDefaultExport:c})})});const n=We(),s={};return Object.entries(t).forEach(([r,o])=>{o.forEach(({exportValue:a,_fileType:l,_isFromDefaultExport:c})=>{var f;s[r]=(f=s[r])!==null&&f!==void 0?f:a,l===".page"&&!c&&(r in n||(n[r]=a))})}),i(!("default"in s)),i(!("default"in t)),{exports:s,exportsAll:t,pageExports:n}}function je(e){const{filePath:t,fileExports:n}=e;i(n);const s=[];return Object.entries(n).sort(ye(([r])=>r==="default")).forEach(([r,o])=>{let a=r==="default";if(a)if(!Ee(t))r="Page";else{h(S(o),`The \`export default\` of ${t} should be an object.`),Object.entries(o).forEach(([l,c])=>{Pe(l,t),s.push({exportName:l,exportValue:c,isFromDefaultExport:a})});return}s.push({exportName:r,exportValue:o,isFromDefaultExport:a})}),s.forEach(({exportName:r,isFromDefaultExport:o})=>{i(!(o&&V.includes(r)))}),s}function We(){return new Proxy({},{get(...e){return _e()||le(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function H(e){const t=".page.",n=j(e.split(t),0,-1).join(t);return i(!n.includes("\\")),n}function rt(e){const t=e.filter(n=>z(n));if(h(t.length<=1,`Only one \`_error.page.js\` is allowed. Found several: ${t.join(" ")}`),t.length>0){const n=t[0];return i(n),n}return null}function z(e){return i(!e.includes("\\")),e.includes("/_error")}function Te(e){const t=r=>s.pageId===r||s.isDefaultPageFile&&(s.isRendererPageFile||Ie(r,s.filePath)),n=Re(e),s={filePath:e,fileType:n,isRelevant:t,isDefaultPageFile:x(e),isRendererPageFile:x(e)&&xe(e),isErrorPageFile:z(e),pageId:H(e)};return s}function Re(e){b(e);const n=e.split("/").slice(-1)[0].split("."),s=n.slice(-3)[0],r=n.slice(-2)[0];if(r==="page")return".page";if(i(s==="page",{filePath:e}),r==="server")return".page.server";if(r==="client")return".page.client";if(r==="route")return".page.route";i(!1,{filePath:e})}function x(e){return b(e),i(e.startsWith("/")),z(e)?!1:e.includes("/_default")}function xe(e){return b(e),i(e.startsWith("/")),e.includes("/renderer/")}function Ie(e,t){b(e),b(t),i(e.startsWith("/")),i(t.startsWith("/")),i(!e.endsWith("/")),i(!t.endsWith("/")),i(x(t));const n=j(t.split("/"),0,-1).filter(s=>s!=="_default").join("/");return e.startsWith(n)}const Oe=[".page",".page.server",".page.route",".page.client"];function Le(e){i(d(e,"isGeneratedFile"),"Missing `isGeneratedFile`."),i(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),i(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),i(d(e,"pageFilesLazy","object")),i(d(e,"pageFilesEager","object")),i(d(e,"pageFilesExportNamesLazy","object")),i(d(e,"pageFilesExportNamesEager","object")),i(d(e.pageFilesLazy,".page")),i(d(e.pageFilesLazy,".page.client")||d(e.pageFilesLazy,".page.server"));const t={};F(e.pageFilesLazy).forEach(({filePath:s,pageFile:r,globValue:o})=>{var a;r=t[s]=(a=t[s])!==null&&a!==void 0?a:r;const l=o;C(l),r.loadFile=async()=>{"fileExports"in r||(r.fileExports=await l(),Se(r))}}),F(e.pageFilesExportNamesLazy).forEach(({filePath:s,pageFile:r,globValue:o})=>{var a;r=t[s]=(a=t[s])!==null&&a!==void 0?a:r;const l=o;C(l),r.loadExportNames=async()=>{if(!("exportNames"in r)){const c=await l();h("exportNames"in c,"You seem to be using Vite 2 but the latest vite-plugin-ssr versions only work with Vite 3"),i(d(c,"exportNames","string[]"),r.filePath),r.exportNames=c.exportNames}}}),F(e.pageFilesEager).forEach(({filePath:s,pageFile:r,globValue:o})=>{var a;r=t[s]=(a=t[s])!==null&&a!==void 0?a:r;const l=o;i(S(l)),r.fileExports=l}),F(e.pageFilesExportNamesEager).forEach(({filePath:s,pageFile:r,globValue:o})=>{var a;r=t[s]=(a=t[s])!==null&&a!==void 0?a:r;const l=o;i(S(l)),i(d(l,"exportNames","string[]"),r.filePath),r.exportNames=l.exportNames});const n=Object.values(t);return n.forEach(({filePath:s})=>{i(!s.includes("\\"))}),n}function F(e){const t=[];return Object.entries(e).forEach(([n,s])=>{i(Oe.includes(n)),i(S(s)),Object.entries(s).forEach(([r,o])=>{const a=Te(r);i(a.fileType===n),t.push({filePath:r,pageFile:a,globValue:o})})}),t}function C(e){i(A(e))}const v=globalThis.__vite_plugin_ssr__pageFiles=globalThis.__vite_plugin_ssr__pageFiles||{pageFilesAll:void 0,pageFilesGetter:void 0};function st(e){v.pageFilesAll=Le(e)}async function it(e,t){e?(i(!v.pageFilesGetter),i(t===void 0)):(i(v.pageFilesGetter),i(typeof t=="boolean"),(!v.pageFilesAll||!t)&&await v.pageFilesGetter()),i(v.pageFilesAll);const n=v.pageFilesAll,s=Ae(n);return{pageFilesAll:n,allPageIds:s}}function Ae(e){const t=e.filter(({isDefaultPageFile:s})=>!s).map(({filePath:s})=>s).map(H);return B(t)}function ze(e,t){return J(e,t,!0)}function ot(e,t){return J(e,t,!1)}function J(e,t,n){const s=n?".page.client":".page.server",r=ke(s,t),o=e.filter(u=>u.isRelevant(t)),a=u=>o.filter(p=>p.isRendererPageFile&&p.fileType===u).sort(r)[0],l=u=>{const p=o.filter(_=>_.pageId===t&&_.fileType===u);h(p.length<=1,`Merge the following files into a single file: ${p.map(_=>_.filePath).join(" ")}`);const m=p[0];return i(m===void 0||!m.isDefaultPageFile),p[0]},c=o.filter(u=>u.isDefaultPageFile&&!u.isRendererPageFile&&(u.fileType===s||u.fileType===".page"));c.sort(r);const f=a(s),w=a(".page"),g=l(s),E=l(".page");return[g,E,...c,f,w].filter(be)}function ke(e,t){return(o,a)=>{i(o.isDefaultPageFile&&a.isDefaultPageFile);{const l=o.isRendererPageFile,c=a.isRendererPageFile;if(!l&&c)return-1;if(!c&&l)return 1;i(l===c)}{const l=N(t,o.filePath),c=N(t,a.filePath);if(l<c)return-1;if(c<l)return 1;i(l===c)}{if(o.fileType===e&&a.fileType!==e)return-1;if(a.fileType===e&&o.fileType!==e)return 1}{if(o.fileType===".page"&&a.fileType!==".page")return 1;if(a.fileType===".page"&&o.fileType!==".page")return-1}return 0}}function N(e,t){b(e),b(t),i(e.startsWith("/")),i(t.startsWith("/"));let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const s=e.slice(n),r=t.slice(n),o=s.split("/").length,a=r.split("/").length;return o+a}function Ce(e,t){return ze(e,t)}const Ne="modulepreload",De=function(e){return"/"+e},D={},at=function(t,n,s){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=De(r),r in D)return;D[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Ne,o||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),o)return new Promise((c,f)=>{l.addEventListener("load",c),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},Be=["render","onHydrationEnd","onPageTransitionStart","onPageTransitionEnd","prefetchStaticAssets","clientRouting"],lt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Be},Symbol.toStringTag,{value:"Module"})),Me=["render","passToClient"],ct=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Me},Symbol.toStringTag,{value:"Module"})),Ue=["documentProps","default"],ut=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ue},Symbol.toStringTag,{value:"Module"}));function ft(e){const t=window.location.href,{origin:n,searchOriginal:s,hashOriginal:r,pathnameOriginal:o}=ue(t,"/");let a;if(e!=null&&e.withoutHash){a=`${o}${s||""}`;const l=`${n||""}${a}${r||""}`;i(t===l,{url:t,urlRecreated:l})}else{a=`${o}${s||""}${r||""}`;const l=`${n||""}${a}`;i(t===l,{url:t,urlRecreated:l})}return a}const Ge=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],s=t[2];return new RegExp(n,s)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function q(e){const t=JSON.parse(e);return Y(t)}function Y(e){return typeof e=="string"?Ve(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=Y(n)}),e)}function Ve(e){for(const{match:t,deserialize:n}of Ge)if(t(e))return n(e,q);return e}function dt(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;i(t);const n=q(t);i(d(n,"pageContext","object"));const{pageContext:s}=n;if(i(d(s,"_pageId","string")),"_serverSideErrorWhileStreaming"in s)throw ae("An error occurred on the server while rendering/streaming to HTML. Check your server logs.");return G(s,{_pageContextRetrievedFromServer:{...s},_comesDirectlyFromServer:!0}),s}function He(e,t){if(!(t in e.exports))return null;const n=e.exports[t],s=e.exportsAll[t][0];i(s.exportValue===n);const r=s._filePath;return i(r),i(!t.endsWith(")")),h(A(n),`\`export { ${t} }\` of ${r} should be a function`),{hook:n,filePath:r}}function Je(e,t){He(e,t)}function qe(e){const t=Object.entries(e);for(const n in e)delete e[n];t.sort(([n],[s])=>ve(n,s)).forEach(([n,s])=>{e[n]=s})}const T=O("releasePageContextCommon.ts",{});function gt(e){i("exports"in e),i("exportsAll"in e),i("pageExports"in e),i(S(e.pageExports));const t=e.exports.Page;return G(e,{Page:t}),Ze(e),qe(e),i([!0,!1].includes(e._comesDirectlyFromServer)),e._comesDirectlyFromServer?Qe(e):e}const Ye=["then","toJSON"],Ke=["_pageId","_serverSideErrorWhileStreaming"];function Qe(e){return new Proxy(e,{get:n});function t(s){return!(s in e||Ye.includes(s)||typeof s=="symbol"||typeof s!="string"||s.startsWith("__v_"))}function n(s,r){return T.disableAssertPassToClient!==r&&Xe(e._pageContextRetrievedFromServer,r,t(r)),T.disableAssertPassToClient=r,window.setTimeout(()=>{T.disableAssertPassToClient=void 0},0),e[r]}}function Xe(e,t,n){if(!n||e===null)return;const s=Object.keys(e).filter(r=>!Ke.includes(r));h(!1,[`\`pageContext.${t}\` is not available in the browser.`,`Make sure that \`passToClient.includes('${t}')\`.`,`(Currently \`passToClient\` is \`[${s.map(r=>`'${r}'`).join(", ")}]\`.)`,"See https://vite-plugin-ssr.com/passToClient"].join(" "))}function Ze(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}const K="__whileFetchingAssets";async function ht(e,t){const n=Ce(e,t);try{await Promise.all(n.map(l=>{var c;return(c=l.loadFile)===null||c===void 0?void 0:c.call(l)}))}catch(l){throw l&&Object.assign(l,{[K]:!0}),l}const{exports:s,exportsAll:r,pageExports:o}=Fe(n);return{exports:s,exportsAll:r,pageExports:o,_pageFilesLoaded:n}}function pt(e){return e?e[K]===!0:!1}function mt(e){var t;if(d(e.exports,"render"))Je(e,"render");else{const n=e._pageFilesLoaded.filter(r=>r.fileType===".page.client");let s;if(n.length===0){const r=(t=e.urlOriginal)!==null&&t!==void 0?t:window.location.href;s="No file `*.page.client.*` found for URL "+r}else s="One of the following files should export a `render()` hook: "+n.map(r=>r.filePath).join(" ");h(!1,s)}}export{q as A,ge as B,it as C,Ce as D,ce as E,tt as F,pt as G,Je as H,mt as I,et as J,at as _,i as a,z as b,h as c,d,le as e,S as f,lt as g,nt as h,A as i,ct as j,ut as k,st as l,me as m,P as n,G as o,ue as p,ae as q,O as r,j as s,ft as t,ot as u,gt as v,dt as w,ht as x,rt as y,He as z};
