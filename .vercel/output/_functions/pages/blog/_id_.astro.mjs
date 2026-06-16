import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_Bs_M2F3H.mjs';
import 'piccolore';
import { createClient } from '@supabase/supabase-js';
import { $ as $$MainLayout, F as Footer } from '../../chunks/Footer_y8ZuMoRx.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const supabase = createClient("https://vtyvtacuwepklkiodupp.supabase.co", "sb_publishable_fyuyqY0Y_1Z5dv4aVvFSWQ_4uqDCS0v");
  const { data: noticia } = await supabase.from("Noticias").select("*").eq("id", id).single();
  if (!noticia) return Astro2.redirect("/404");
  const seoTitle = `${noticia.titulo} | Blog USBOnline`;
  const seoDesc = noticia.descripcion?.substring(0, 160);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": seoTitle, "description": seoDesc }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="BannerNoticia"${addAttribute(`background-image: url('${noticia.img_banner}')`, "style")}> <p>${noticia.subtitulo}</p> </header> <main class="contenido"> <article> <header class="cont-imagen-titulo"> <img${addAttribute(noticia.imagenportada, "src")}${addAttribute(`Portada: ${noticia.titulo}`, "alt")}> <h1>${noticia.titulo}</h1> </header> <section class="meta-info"> <h2 class="subtema">${noticia.descripcion}</h2> <p class="Autor">
Publicado por <strong>USBOnline</strong> el
<time${addAttribute(noticia.fecha, "datetime")}>${noticia.fecha}</time> </p> </section> <div class="parrafos"> <p>${noticia.parrafo1}</p> <p>${noticia.parrafo2}</p> <p>${noticia.parrafo3}</p> </div> ${noticia.imagen_contenido && renderTemplate`<figure class="cont-imagen-adicional"> <img${addAttribute(noticia.imagen_contenido, "src")} class="imagen-contenido" alt="Contenido visual de apoyo"> </figure>`} <nav aria-label="Volver al listado"> <a href="/blog" class="btn-volver">Volver al blog</a> </nav> </article> </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/components/Footer/Footer.tsx", "client:component-export": "default" })} ` })}`;
}, "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/pages/blog/[id].astro", void 0);
const $$file = "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
