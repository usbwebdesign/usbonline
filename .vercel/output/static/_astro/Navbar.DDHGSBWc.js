import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as i}from"./index.DYrVU9rO.js";import{s}from"./index.0b125e11.DRO1a8ns.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(...r)=>r.filter((a,l,o)=>!!a&&a.trim()!==""&&o.indexOf(a)===l).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,l,o)=>o?o.toUpperCase():l.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=r=>{const a=j(r);return a.charAt(0).toUpperCase()+a.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=r=>{for(const a in r)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=i.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:t="",children:n,iconNode:h,...c},u)=>i.createElement("svg",{ref:u,...b,width:a,height:a,stroke:r,strokeWidth:o?Number(l)*24/Number(a):l,className:m("lucide",t),...!n&&!C(c)&&{"aria-hidden":"true"},...c},[...h.map(([f,x])=>i.createElement(f,x)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(r,a)=>{const l=i.forwardRef(({className:o,...t},n)=>i.createElement(k,{ref:n,iconNode:a,className:m(`lucide-${p(d(r))}`,`lucide-${r}`,o),...t}));return l.displayName=d(r),l};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],v=g("circle-user",N),I=()=>{const[r,a]=i.useState(!1),[l,o]=i.useState(!1),t=()=>a(!r);return i.useEffect(()=>{if(l){const n=document.createElement("script");n.src="//js.hsforms.net/forms/embed/v2.js",n.charset="utf-8",n.type="text/javascript",n.onload=()=>{window.hbspt&&window.hbspt.forms.create({region:"na1",portalId:"TU_PORTAL_ID",formId:"TU_FORM_ID",target:"#hubspotFormContainer"})},document.body.appendChild(n)}},[l]),e.jsxs(e.Fragment,{children:[e.jsx("header",{className:s.header,children:e.jsxs("nav",{className:s.navContainer,children:[e.jsx("a",{href:"/",className:s.logoSection,children:e.jsx("img",{src:"/img/usbonlinelogo.svg",alt:"USB Online Logo",className:s.logoImage})}),e.jsxs("ul",{className:`${s.menuLinks} ${r?s.menuOpen:""}`,children:[e.jsx("li",{children:e.jsx("a",{href:"/#inicio",className:s.link,onClick:()=>a(!1),children:"Inicio"})}),e.jsx("li",{children:e.jsx("a",{href:"/#oferta",className:s.link,onClick:()=>a(!1),children:"Oferta"})}),e.jsx("li",{children:e.jsx("a",{href:"/#como-funciona",className:s.link,onClick:()=>a(!1),children:"¿Cómo funciona?"})}),e.jsx("li",{children:e.jsx("a",{href:"/#experiencias",className:s.link,onClick:()=>a(!1),children:"Experiencias"})}),e.jsx("li",{children:e.jsx("a",{href:"/blog",className:s.link,onClick:()=>a(!1),children:"Blog"})}),e.jsx("li",{className:s.mobileOnly,children:e.jsx("a",{href:"https://usbmexicoonline.neolms.com/",target:"_blank",className:s.link,onClick:()=>a(!1),children:"Iniciar Sesión"})})]}),e.jsxs("div",{className:s.actions,children:[e.jsx("a",{href:"https://usbmexicoonline.neolms.com/",target:"_blank",className:`${s.userLink} ${s.desktopOnly}`,"aria-label":"Ir al perfil",children:e.jsx(v,{size:32,strokeWidth:2,color:"white"})}),e.jsx("button",{onClick:()=>o(!0),className:s.btnAdmisiones,children:"Admisiones"}),e.jsxs("button",{className:s.hamburger,onClick:t,"aria-label":"Menu",children:[e.jsx("div",{className:`${s.bar} ${r?s.bar1:""}`}),e.jsx("div",{className:`${s.bar} ${r?s.bar2:""}`}),e.jsx("div",{className:`${s.bar} ${r?s.bar3:""}`})]})]})]})}),l&&e.jsx("div",{className:s.modalOverlay,onClick:()=>o(!1),children:e.jsxs("div",{className:s.modalContent,onClick:n=>n.stopPropagation(),children:[e.jsx("button",{className:s.closeModal,onClick:()=>o(!1),"aria-label":"Cerrar",children:"×"}),e.jsxs("div",{className:s.formHeader,children:[e.jsx("h3",{children:"Solicita Información"}),e.jsx("p",{children:"Déjanos tus datos y un asesor se contactará contigo a la brevedad."})]}),e.jsx("div",{id:"hubspotFormContainer",className:s.hubspotContainer})]})})]})};export{I as default};
