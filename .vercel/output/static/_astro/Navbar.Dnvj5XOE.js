import{j as s}from"./jsx-runtime.D_zvdyIk.js";import{r as o}from"./index.DYrVU9rO.js";import{s as a}from"./_id_.5288bddb.BNKNc60T.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(...r)=>r.filter((e,n,l)=>!!e&&e.trim()!==""&&l.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,l)=>l?l.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=r=>{const e=j(r);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=o.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:l,className:c="",children:i,iconNode:h,...t},u)=>o.createElement("svg",{ref:u,...k,width:e,height:e,stroke:r,strokeWidth:l?Number(n)*24/Number(e):n,className:d("lucide",c),...!i&&!b(t)&&{"aria-hidden":"true"},...t},[...h.map(([f,x])=>o.createElement(f,x)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(r,e)=>{const n=o.forwardRef(({className:l,...c},i)=>o.createElement(g,{ref:i,iconNode:e,className:d(`lucide-${p(m(r))}`,`lucide-${r}`,l),...c}));return n.displayName=m(r),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],w=C("circle-user",N),A=()=>{const[r,e]=o.useState(!1),n=()=>e(!r),l=()=>{window.dispatchEvent(new Event("open-hubspot-modal")),e(!1)};return s.jsx("header",{className:a.header,children:s.jsxs("nav",{className:a.navContainer,children:[s.jsx("a",{href:"/",className:a.logoSection,children:s.jsx("img",{src:"/img/usbonlinelogo.svg",alt:"USB Online Logo",className:a.logoImage})}),s.jsxs("ul",{className:`${a.menuLinks} ${r?a.menuOpen:""}`,children:[s.jsx("li",{children:s.jsx("a",{href:"/#inicio",className:a.link,onClick:()=>e(!1),children:"Inicio"})}),s.jsx("li",{children:s.jsx("a",{href:"/#oferta",className:a.link,onClick:()=>e(!1),children:"Oferta"})}),s.jsx("li",{children:s.jsx("a",{href:"/#como-funciona",className:a.link,onClick:()=>e(!1),children:"¿Cómo funciona?"})}),s.jsx("li",{children:s.jsx("a",{href:"/#experiencias",className:a.link,onClick:()=>e(!1),children:"Experiencias"})}),s.jsx("li",{children:s.jsx("a",{href:"/blog",className:a.link,onClick:()=>e(!1),children:"Blog"})}),s.jsx("li",{className:a.mobileOnly,children:s.jsx("a",{href:"https://usbmexicoonline.neolms.com/",target:"_blank",rel:"noreferrer",className:a.link,onClick:()=>e(!1),children:"Iniciar Sesión"})})]}),s.jsxs("div",{className:a.actions,children:[s.jsx("a",{href:"https://usbmexicoonline.neolms.com/",target:"_blank",rel:"noreferrer",className:`${a.userLink} ${a.desktopOnly}`,"aria-label":"Ir al perfil",children:s.jsx(w,{size:32,strokeWidth:2,color:"white"})}),s.jsx("button",{onClick:l,className:a.btnAdmisiones,children:"Admisiones"}),s.jsxs("button",{className:a.hamburger,onClick:n,"aria-label":"Menu",children:[s.jsx("div",{className:`${a.bar} ${r?a.bar1:""}`}),s.jsx("div",{className:`${a.bar} ${r?a.bar2:""}`}),s.jsx("div",{className:`${a.bar} ${r?a.bar3:""}`})]})]})]})})};export{A as default};
