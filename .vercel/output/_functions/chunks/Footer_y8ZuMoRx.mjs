import { e as createComponent, r as renderTemplate, l as defineScriptVars, k as renderComponent, n as renderSlot, o as renderHead, g as addAttribute, h as createAstro } from './astro/server_Bs_M2F3H.mjs';
import 'piccolore';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { UserCircle } from 'lucide-react';
import { s as styles, a as s } from './_id_.5288bddb_BSmczQPg.mjs';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleOpenModal = () => {
    window.dispatchEvent(new Event("open-hubspot-modal"));
    setIsMenuOpen(false);
  };
  return /* @__PURE__ */ jsx("header", { className: styles.header, children: /* @__PURE__ */ jsxs("nav", { className: styles.navContainer, children: [
    /* @__PURE__ */ jsx("a", { href: "/", className: styles.logoSection, children: /* @__PURE__ */ jsx("img", { src: "/img/usbonlinelogo.svg", alt: "USB Online Logo", className: styles.logoImage }) }),
    /* @__PURE__ */ jsxs("ul", { className: `${styles.menuLinks} ${isMenuOpen ? styles.menuOpen : ""}`, children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#inicio", className: styles.link, onClick: () => setIsMenuOpen(false), children: "Inicio" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#oferta", className: styles.link, onClick: () => setIsMenuOpen(false), children: "Oferta" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#como-funciona", className: styles.link, onClick: () => setIsMenuOpen(false), children: "¿Cómo funciona?" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#experiencias", className: styles.link, onClick: () => setIsMenuOpen(false), children: "Experiencias" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/blog", className: styles.link, onClick: () => setIsMenuOpen(false), children: "Blog" }) }),
      /* @__PURE__ */ jsx("li", { className: styles.mobileOnly, children: /* @__PURE__ */ jsx("a", { href: "https://usbmexicoonline.neolms.com/", target: "_blank", rel: "noreferrer", className: styles.link, onClick: () => setIsMenuOpen(false), children: "Iniciar Sesión" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles.actions, children: [
      /* @__PURE__ */ jsx("a", { href: "https://usbmexicoonline.neolms.com/", target: "_blank", rel: "noreferrer", className: `${styles.userLink} ${styles.desktopOnly}`, "aria-label": "Ir al perfil", children: /* @__PURE__ */ jsx(UserCircle, { size: 32, strokeWidth: 2, color: "white" }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleOpenModal,
          className: styles.btnAdmisiones,
          children: "Admisiones"
        }
      ),
      /* @__PURE__ */ jsxs("button", { className: styles.hamburger, onClick: toggleMenu, "aria-label": "Menu", children: [
        /* @__PURE__ */ jsx("div", { className: `${styles.bar} ${isMenuOpen ? styles.bar1 : ""}` }),
        /* @__PURE__ */ jsx("div", { className: `${styles.bar} ${isMenuOpen ? styles.bar2 : ""}` }),
        /* @__PURE__ */ jsx("div", { className: `${styles.bar} ${isMenuOpen ? styles.bar3 : ""}` })
      ] })
    ] })
  ] }) });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description = "USB Online - Estudiar as\xED s\xED encaja. Educaci\xF3n 100% en l\xEDnea con calidad humana." } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', ">", "</head> <body> ", " <main> ", " </main> ", ' <a href="#" target="_blank" rel="noopener noreferrer" class="whatsapp-float-btn" id="dynamic-whatsapp-btn" aria-label="Contactar por WhatsApp"> <svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg"> <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </svg> </a> <script>(function(){', '\n      function updateWhatsappLink() {\n        // Seleccionamos como HTMLAnchorElement para corregir el log del \'href\'\n        const whatsappBtn = document.getElementById("dynamic-whatsapp-btn");\n        if (!whatsappBtn) return;\n\n        const phone = "5215510796673";\n        const currentPath = window.location.pathname;\n        \n        // Evitamos romper si por alguna raz\xF3n el t\xEDtulo viene vac\xEDo\n        const cleanTitle = pageTitleFromServer ? pageTitleFromServer.split(\'|\')[0].trim() : "USB Online";\n        let message = "Hola, quiero m\xE1s informaci\xF3n sobre USB Online.";\n\n        if (currentPath.includes("/oferta") || currentPath.includes("/programas")) {\n          message = `Hola, estoy en la p\xE1gina de "${cleanTitle}" y me gustar\xEDa recibir m\xE1s informaci\xF3n sobre el plan de estudios.`;\n        } else if (currentPath.includes("/blog") && currentPath !== "/blog" && currentPath !== "/blog/") {\n          message = `Hola, estuve leyendo el art\xEDculo "${cleanTitle}" en su blog y me interesa conocer m\xE1s sobre sus programas educativos.`;\n        } else {\n          message = "Hola, me gustar\xEDa recibir m\xE1s informaci\xF3n sobre la oferta educativa de USB Online.";\n        }\n\n        const encodedMessage = encodeURIComponent(message);\n        whatsappBtn.href = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedMessage}&type=phone_number&app_absent=0`;\n      }\n\n      // Ejecuci\xF3n inmediata\n      updateWhatsappLink();\n\n      // Compatibilidad por si usas transiciones de p\xE1gina de Astro\n      document.addEventListener(\'astro:after-swap\', updateWhatsappLink);\n    })();<\/script> </body> </html>'], ['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', ">", "</head> <body> ", " <main> ", " </main> ", ' <a href="#" target="_blank" rel="noopener noreferrer" class="whatsapp-float-btn" id="dynamic-whatsapp-btn" aria-label="Contactar por WhatsApp"> <svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg"> <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </svg> </a> <script>(function(){', '\n      function updateWhatsappLink() {\n        // Seleccionamos como HTMLAnchorElement para corregir el log del \'href\'\n        const whatsappBtn = document.getElementById("dynamic-whatsapp-btn");\n        if (!whatsappBtn) return;\n\n        const phone = "5215510796673";\n        const currentPath = window.location.pathname;\n        \n        // Evitamos romper si por alguna raz\xF3n el t\xEDtulo viene vac\xEDo\n        const cleanTitle = pageTitleFromServer ? pageTitleFromServer.split(\'|\')[0].trim() : "USB Online";\n        let message = "Hola, quiero m\xE1s informaci\xF3n sobre USB Online.";\n\n        if (currentPath.includes("/oferta") || currentPath.includes("/programas")) {\n          message = \\`Hola, estoy en la p\xE1gina de "\\${cleanTitle}" y me gustar\xEDa recibir m\xE1s informaci\xF3n sobre el plan de estudios.\\`;\n        } else if (currentPath.includes("/blog") && currentPath !== "/blog" && currentPath !== "/blog/") {\n          message = \\`Hola, estuve leyendo el art\xEDculo "\\${cleanTitle}" en su blog y me interesa conocer m\xE1s sobre sus programas educativos.\\`;\n        } else {\n          message = "Hola, me gustar\xEDa recibir m\xE1s informaci\xF3n sobre la oferta educativa de USB Online.";\n        }\n\n        const encodedMessage = encodeURIComponent(message);\n        whatsappBtn.href = \\`https://api.whatsapp.com/send/?phone=\\${phone}&text=\\${encodedMessage}&type=phone_number&app_absent=0\\`;\n      }\n\n      // Ejecuci\xF3n inmediata\n      updateWhatsappLink();\n\n      // Compatibilidad por si usas transiciones de p\xE1gina de Astro\n      document.addEventListener(\'astro:after-swap\', updateWhatsappLink);\n    })();<\/script> </body> </html>'])), title, addAttribute(description, "content"), renderHead(), renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/components/Navbar/Navbar", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "HubspotModal", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/components/HubspotModal/HubspotModal.tsx", "client:component-export": "default" }), defineScriptVars({ pageTitleFromServer: title }));
}, "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/layouts/MainLayout.astro", void 0);

function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: s.footer, children: /* @__PURE__ */ jsxs("div", { className: s.container, children: [
    /* @__PURE__ */ jsxs("div", { className: s.topSection, children: [
      /* @__PURE__ */ jsxs("div", { className: s.brandSection, children: [
        /* @__PURE__ */ jsxs("div", { className: s.logos, children: [
          /* @__PURE__ */ jsx("a", { href: "https://www.usb.edu.mx/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/img/universidadsimonbolivarlogo.png",
              alt: "Universidad Simón Bolívar",
              className: s.logoUsb
            }
          ) }),
          /* @__PURE__ */ jsx("a", { href: "#", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/img/usbonlinelogo.svg",
              alt: "USBOnline",
              className: s.logoOnline
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: s.mottoContainer, children: [
          /* @__PURE__ */ jsxs("h2", { className: s.motto, children: [
            "Per Scientiam",
            /* @__PURE__ */ jsx("br", {}),
            "ad Veritatem"
          ] }),
          /* @__PURE__ */ jsx("div", { className: s.underline }),
          /* @__PURE__ */ jsxs("div", { className: s.socials, children: [
            /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/USBMexico/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Facebook", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", width: "24", height: "24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.602 0 2.703.095 2.703.095v3.386s-1.142-.01-2.341-.01c-1.613 0-2.273.713-2.273 2.186v1.892h3.734l-.571 3.667h-3.163v7.987L9.101 23.69z" }) }) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/usbmexico/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", width: "24", height: "24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
              /* @__PURE__ */ jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
              /* @__PURE__ */ jsx("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
            ] }) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.tiktok.com/@usbmexico", target: "_blank", rel: "noopener noreferrer", "aria-label": "TikTok", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", width: "24", height: "24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.54-4.06-1.44-.22-.17-.43-.35-.63-.54V14.3c.03 2.22-.65 4.54-2.26 6.13-1.81 1.87-4.66 2.51-7.1 1.79-2.36-.66-4.32-2.67-4.88-5.06-.61-2.47-.13-5.32 1.63-7.18 1.5-1.66 3.75-2.52 5.95-2.27.01 1.39-.01 2.77-.01 4.15-1.29-.15-2.66.19-3.56 1.16-.92 1.05-1.02 2.66-.23 3.84.8 1.25 2.41 1.86 3.8 1.48 1.29-.31 2.26-1.52 2.39-2.84.05-3.04.02-6.08.02-9.12z" }) }) }),
            /* @__PURE__ */ jsx("a", { href: "https://mx.linkedin.com/school/universidad-sim%C3%B3n-bol%C3%ADvar-oficial/?trk=nav_type_overview", target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", width: "24", height: "24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }) }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: s.nav, children: /* @__PURE__ */ jsxs("ul", { className: s.navList, children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#inicio", children: "Inicio" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#oferta", children: "Oferta" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#como-funciona", children: "¿Cómo Funciona?" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#experiencias", children: "Experiencias" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#admisiones", children: "Admisiones" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/blog", children: "Blog" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: s.bottomSection, children: [
      /* @__PURE__ */ jsxs("div", { className: s.locationRow, children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://maps.app.goo.gl/9PNddR7C6CGeGZWp6",
            target: "_blank",
            rel: "noopener noreferrer",
            className: s.location,
            children: [
              /* @__PURE__ */ jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: s.icon,
                  children: [
                    /* @__PURE__ */ jsx("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }),
                    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "3" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("span", { children: "Av. Río Mixcoac 48, Insurgentes Mixcoac, CDMX." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: "tel:+52 55 5629 9750", className: s.location, children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "18",
              height: "18",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: s.icon,
              children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
            }
          ),
          /* @__PURE__ */ jsx("span", { children: "+52 (55) 5629 9700" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: s.legalRow, children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/public/docs/Aviso_de_Privacidad_para_Alumnos_y_Padres_de-Familia.pdf",
            target: "_blank",
            className: s.privacy,
            children: "Aviso de privacidad"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: s.separator, children: "|" }),
        /* @__PURE__ */ jsx("p", { className: s.copyright, children: "Universidad Simón Bolívar México ®" }),
        /* @__PURE__ */ jsx("span", { className: s.separator, children: "|" }),
        /* @__PURE__ */ jsxs("p", { className: s.copyright, children: [
          "Todos los derechos reservados ",
          currentYear
        ] })
      ] })
    ] })
  ] }) });
}

export { $$MainLayout as $, Footer as F };
