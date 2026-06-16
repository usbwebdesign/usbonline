import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_Bs_M2F3H.mjs';
import 'piccolore';
import { createClient } from '@supabase/supabase-js';
import { $ as $$MainLayout, F as Footer } from '../../chunks/Footer_y8ZuMoRx.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const supabase = createClient(
    "https://vtyvtacuwepklkiodupp.supabase.co",
    "sb_publishable_fyuyqY0Y_1Z5dv4aVvFSWQ_4uqDCS0v"
  );
  const { data: oferta } = await supabase.from("Ofertas").select("*").eq("id", id).single();
  if (!oferta) return Astro2.redirect("/404");
  const seoDescription = `Estudia la ${oferta.titulo} en USB Online. ${oferta.objetivo?.substring(0, 150)}...`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${oferta.titulo} | USB Online`, "description": seoDescription }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="od-hero-header"${addAttribute(`background-image: url('${oferta.imagen_hero}')`, "style")}> <div class="od-hero-overlay"></div> <div class="od-hero-container"> <span class="od-tag-specialty">${oferta.categoria}</span> <h1 class="od-main-title">${oferta.titulo}</h1> </div> </header> <div class="od-info-bar"> <div class="od-info-card"> <svg class="od-info-icon" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"> <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <div class="od-info-content"> <span class="od-info-label">Inicio</span> <span class="od-info-value">${oferta.fecha_inicio}</span> </div> </div> <div class="od-info-card"> <svg class="od-info-icon" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"> <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path> </svg> <div class="od-info-content"> <span class="od-info-label">Duración</span> <span class="od-info-value">${oferta.duracion}</span> </div> </div> <div class="od-info-card"> <svg class="od-info-icon" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"> <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><path d="M8 21h8M12 17v4"></path> </svg> <div class="od-info-content"> <span class="od-info-label">Modalidad</span> <span class="od-info-value">${oferta.modalidad}</span> </div> </div> </div> <main> <section class="od-section-objective"> <div class="od-obj-text"> <h2>Objetivo</h2> <p>${oferta.objetivo}</p> </div> <div class="od-obj-image"> <img${addAttribute(oferta.imagen_objetivo, "src")}${addAttribute(`Objetivo de ${oferta.titulo}`, "alt")}> </div> </section> <div class="od-white-container-wrapper"> <section class="od-section-why"> <div class="od-why-container"> <div class="od-why-visual"> <img${addAttribute(oferta.imagen_porque, "src")} alt="Por qué estudiar esta carrera"> </div> <div class="od-why-text"> <h2>¿Porqué estudiarla?</h2> <div class="od-why-item"> <h3>${oferta.razon_titulo_1}</h3> <p>${oferta.razon_desc_1}</p> </div> <div class="od-why-item"> <h3>${oferta.razon_titulo_2}</h3> <p>${oferta.razon_desc_2}</p> </div> <div class="od-why-item"> <h3>${oferta.razon_titulo_3}</h3> <p>${oferta.razon_desc_3}</p> </div> </div> </div> </section> <section class="bento-container"> <div class="bento-item step-header has-bg-overlay"${addAttribute(`background-image: url('/img/texture-background-programs-usbonline.webp')`, "style")}> <h2 class="bento-title-white">${oferta.bento_titulo_1}</h2> </div> <div class="bento-item step-content has-bg-overlay"${addAttribute(`background-image: url('/img/texture-background-programs-usbonline.webp')`, "style")}> <p class="bento-text-gray">${oferta.bento_desc_1}</p> </div> <div class="bento-item wide-image"> <img${addAttribute(oferta.imagen_bento_1, "src")} alt="Colaboración académica"> </div> <div class="bento-item tall-image"> <img${addAttribute(oferta.imagen_bento_2, "src")} alt="Perfil profesional"> </div> <div class="bento-item become-header has-bg-overlay"${addAttribute(`background-image: url('/img/texture-background-programs-usbonline.webp')`, "style")}> <h2 class="bento-title-white">${oferta.bento_titulo_2}</h2> </div> <div class="bento-item become-content has-bg-overlay"${addAttribute(`background-image: url('/img/texture-background-programs-usbonline.webp')`, "style")}> <p class="bento-text-gray">${oferta.bento_desc_2}</p> </div> </section> ${oferta.hubspot_form_id && renderTemplate(_a || (_a = __template(['<section class="od-section-form"> <div class="od-form-container"> <h2 class="od-ambitos-title" style="text-align: center;">Solicita Información</h2> <div class="hs-form-frame" data-region="na1"', "", '></div> <script src="https://js.hsforms.net/forms/embed/8283333.js"></script> </div> </section>'])), addAttribute(oferta.hubspot_form_id, "data-form-id"), addAttribute(oferta.hubspot_portal_id, "data-portal-id"))} <section class="od-section-ambitos"> <div class="od-ambitos-container"> <h2 class="od-ambitos-title">Campos de aplicación</h2> <div class="od-tags-wrapper"> ${(oferta.ambitos_aplicacion || []).map((ambito) => renderTemplate`<span class="od-ambito-tag">${ambito}</span>`)} </div> </div> </section> <section class="od-section-brochure"> <div class="od-brochure-banner"> <img src="../img/bg-banner-brochure.webp" alt="Fondo decorativo programa educativo" class="od-banner-bg" loading="lazy"> <div class="od-banner-overlay"></div> <div class="od-brochure-content"> <h2 class="od-brochure-title">${oferta.categoriamin} en ${oferta.titulo}</h2> <a${addAttribute(oferta.brochure ? oferta.brochure.trim() : "#", "href")} target="_blank" rel="noopener noreferrer" class="od-brochure-btn">
Ver programa
</a> </div> <div class="od-brochure-icon"> <svg viewBox="0 0 24 24" fill="white"> <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path> </svg> </div> </div> </section> </div> ${(oferta.video_id || "prSqD3qGjdI") && renderTemplate`<section class="od-video-integrated-section"> <div class="od-video-mini-container"> <div class="od-video-text"> <h2>Voces que enseñan</h2> <p>Historias reales de transformación online.</p> </div> <div class="od-video-player-box"> <iframe${addAttribute(`https://www.youtube.com/embed/${oferta.video_id || "prSqD3qGjdI"}`, "src")} title="Video testimonial" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div> </div> </section>`} </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/components/Footer/Footer.tsx", "client:component-export": "default" })} ` })}`;
}, "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/pages/ofertas/[id].astro", void 0);
const $$file = "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/pages/ofertas/[id].astro";
const $$url = "/ofertas/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
