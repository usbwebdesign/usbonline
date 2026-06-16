import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bs_M2F3H.mjs';
import 'piccolore';
import { $ as $$MainLayout, F as Footer } from '../chunks/Footer_y8ZuMoRx.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { s as styles, a as s, b as s$1, c as s$2, d as s$3, e as s$4, f as s$5, g as s$6 } from '../chunks/index.95d291e9_ll5-ivAb.mjs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { createClient } from '@supabase/supabase-js';
export { renderers } from '../renderers.mjs';

const Hero = () => {
  const handleOpenModal = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event("open-hubspot-modal"));
  };
  const handleScrollToOferta = () => {
    const ofertaSection = document.getElementById("oferta");
    if (ofertaSection) {
      ofertaSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0
      }
    }
  };
  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  const scrollIconVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 0.5 }
    },
    bounce: {
      y: [0, 8, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: styles.hero, children: [
    /* @__PURE__ */ jsxs(
      "video",
      {
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        className: styles.videoBackground,
        poster: "/videos/hero-img.jpg",
        preload: "metadata",
        children: [
          /* @__PURE__ */ jsx(
            "source",
            {
              src: "/videos/hero-vid3.mp4",
              type: "video/mp4",
              media: "(min-width: 768px)"
            }
          ),
          /* @__PURE__ */ jsx(
            "source",
            {
              src: "/videos/hero-vertical.mp4",
              type: "video/mp4",
              media: "(max-width: 767px)"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: styles.overlay }),
    /* @__PURE__ */ jsx("div", { className: styles.container, children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: styles.content,
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        children: [
          /* @__PURE__ */ jsx(motion.h1, { className: styles.title, variants: itemVariants, children: /* @__PURE__ */ jsx("span", { className: styles.highlight, children: "Estudiar así, te facilita la vida" }) }),
          /* @__PURE__ */ jsx(motion.p, { className: styles.subtitle, variants: itemVariants, children: "Modalidad 100% online" }),
          /* @__PURE__ */ jsxs(motion.div, { className: styles.actions, variants: itemVariants, children: [
            /* @__PURE__ */ jsx("a", { href: "#oferta", className: styles.btnPrimary, children: "Ver oferta educativa" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#contacto",
                className: styles.btnSecondary,
                onClick: handleOpenModal,
                children: "Admisiones"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: styles.scrollDown,
              variants: scrollIconVariants,
              initial: "hidden",
              animate: ["visible", "bounce"],
              onClick: handleScrollToOferta,
              style: { cursor: "pointer" },
              children: [
                /* @__PURE__ */ jsx("span", { className: styles.mouse, children: /* @__PURE__ */ jsx("span", { className: styles.wheel }) }),
                /* @__PURE__ */ jsx("div", { className: styles.arrow })
              ]
            }
          )
        ]
      }
    ) })
  ] });
};

const CATEGORIES_FILTER = ["Todo", "Especialidades", "Maestrías", "Doctorados"];
const PRIORITY_MAP = {
  "Especialidad": 1,
  "Maestría": 2,
  "Doctorado": 3
};
function Oferta({ initialPrograms }) {
  const [activeFilter, setActiveFilter] = useState("Todo");
  const filteredPrograms = useMemo(() => {
    if (!initialPrograms) return [];
    return initialPrograms.filter((p) => {
      if (activeFilter === "Todo") return true;
      const filterMap = {
        "Especialidades": "Especialidad",
        "Maestrías": "Maestría",
        "Doctorados": "Doctorado"
      };
      return p.category === filterMap[activeFilter];
    }).sort((a, b) => {
      const weightA = PRIORITY_MAP[a.category] || 99;
      const weightB = PRIORITY_MAP[b.category] || 99;
      if (weightA === weightB) {
        return a.title.localeCompare(b.title);
      }
      return weightA - weightB;
    });
  }, [initialPrograms, activeFilter]);
  return /* @__PURE__ */ jsxs("section", { id: "oferta", className: s.container, children: [
    /* @__PURE__ */ jsx("h2", { className: s.mainTitle, children: "Oferta Educativa" }),
    /* @__PURE__ */ jsx("div", { className: s.filterBar, children: CATEGORIES_FILTER.map((cat) => /* @__PURE__ */ jsx(
      "button",
      {
        className: `${s.filterBtn} ${activeFilter === cat ? s.active : ""}`,
        onClick: () => setActiveFilter(cat),
        children: cat
      },
      cat
    )) }),
    /* @__PURE__ */ jsx("div", { className: s.grid, children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: filteredPrograms.map((program) => /* @__PURE__ */ jsx(
      motion.article,
      {
        layout: true,
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, scale: 0.9 },
        whileHover: { y: -8 },
        transition: { duration: 0.3 },
        className: s.card,
        children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: program.oferta_id ? `/ofertas/${program.oferta_id}` : "#",
            className: s.cardLink,
            onClick: (e) => {
              if (!program.oferta_id) {
                e.preventDefault();
                console.warn(`⚠️ El programa "${program.title}" no tiene un oferta_id.`);
              }
            },
            children: [
              /* @__PURE__ */ jsx("div", { className: s.imageWrapper, children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: program.image_url,
                  alt: program.title,
                  className: s.image,
                  width: "380",
                  height: "210",
                  loading: "lazy",
                  decoding: "async"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: s.content, children: [
                /* @__PURE__ */ jsxs("div", { className: s.badges, children: [
                  /* @__PURE__ */ jsx("span", { className: s.categoryBadge, children: program.category }),
                  /* @__PURE__ */ jsx("span", { className: s.durationBadge, children: program.duration })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: s.cardTitle, children: program.title }),
                /* @__PURE__ */ jsx("p", { className: s.cardDesc, children: program.description })
              ] })
            ]
          }
        )
      },
      program.id
    )) }) })
  ] });
}

const fadeInHeader = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};
const fadeInLeft$1 = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};
const fadeInRight$1 = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};
function Grid() {
  return /* @__PURE__ */ jsxs("section", { className: s$1.container, "aria-labelledby": "grid-title", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: s$1.headerGroup,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: fadeInHeader,
        children: [
          /* @__PURE__ */ jsx("h2", { id: "grid-title", className: s$1.mainTitle, children: "Innovación y Aprendizaje" }),
          /* @__PURE__ */ jsx("p", { className: s$1.subTitle, children: "Descubre por qué nuestra metodología es la mejor opción para tu crecimiento profesional." })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: s$1.bento1,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
        variants: fadeInLeft$1,
        children: [
          /* @__PURE__ */ jsx("article", { className: `${s$1.card} ${s$1.imgCard}`, children: /* @__PURE__ */ jsx("img", { src: "/img/modalidad-sincrona.webp", alt: "Modalidad Síncrona", loading: "lazy" }) }),
          /* @__PURE__ */ jsxs("article", { className: `${s$1.card} ${s$1.textCard}`, children: [
            /* @__PURE__ */ jsx("h3", { children: "Modalidad Síncrona" }),
            /* @__PURE__ */ jsx("p", { children: "Metodología accesible que permite estudiar a tu ritmo, desde cualquier lugar, con contenidos prácticos actualizados constantemente." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: s$1.bento2,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
        variants: fadeInRight$1,
        children: [
          /* @__PURE__ */ jsxs("article", { className: `${s$1.card} ${s$1.textCard}`, children: [
            /* @__PURE__ */ jsx("h3", { children: "Tecnología Avanzada" }),
            /* @__PURE__ */ jsx("p", { children: "Plataforma interactiva con inteligencia integrada, recursos colaborativos y herramientas dinámicas que optimizan la experiencia educativa digital personalizada." })
          ] }),
          /* @__PURE__ */ jsx("article", { className: `${s$1.card} ${s$1.imgCard}`, children: /* @__PURE__ */ jsx("img", { src: "/img/tecnologia-avanzada-usbonline.webp", alt: "Tecnología Avanzada", loading: "lazy" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: s$1.bento1,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
        variants: fadeInLeft$1,
        children: [
          /* @__PURE__ */ jsx("article", { className: `${s$1.card} ${s$1.imgCard}`, children: /* @__PURE__ */ jsx("img", { src: "/img/tiempo-inteligente.webp", alt: "Tiempo Inteligente", loading: "lazy" }) }),
          /* @__PURE__ */ jsxs("article", { className: `${s$1.card} ${s$1.textCard}`, children: [
            /* @__PURE__ */ jsx("h3", { children: "Tiempo Inteligente" }),
            /* @__PURE__ */ jsx("p", { children: "Invierte aproximadamente 10 horas por semana y organiza tus sesiones cuando mejor te funcione. Todo completamente en línea." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: s$1.bento2,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
        variants: fadeInRight$1,
        children: [
          /* @__PURE__ */ jsxs("article", { className: `${s$1.card} ${s$1.textCard}`, children: [
            /* @__PURE__ */ jsx("h3", { children: "Inversión Flexible" }),
            /* @__PURE__ */ jsx("p", { children: "Diseñado para que avances en tu formación sin afectar tu equilibrio financiero. Modalidades organizadas y condiciones claras desde el inicio." })
          ] }),
          /* @__PURE__ */ jsx("article", { className: `${s$1.card} ${s$1.imgCard}`, children: /* @__PURE__ */ jsx("img", { src: "/img/inversion-flexible.webp", alt: "Inversión Flexible", loading: "lazy" }) })
        ]
      }
    )
  ] });
}

const containerVariants = {
  hidden: {
    scale: 0.7,
    borderRadius: "100px"
  },
  visible: {
    scale: 1,
    borderRadius: "0px",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
function BannerCTA() {
  const handleOpenModal = () => {
    window.dispatchEvent(new Event("open-hubspot-modal"));
  };
  return /* @__PURE__ */ jsx("section", { className: s$2.bannerWrapper, children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: s$2.animationContainer,
      variants: containerVariants,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.1 },
      children: [
        /* @__PURE__ */ jsx("video", { autoPlay: true, muted: true, loop: true, playsInline: true, className: s$2.videoBg, children: /* @__PURE__ */ jsx("source", { src: "/videos/banner-cta2.mp4", type: "video/mp4" }) }),
        /* @__PURE__ */ jsx("div", { className: s$2.overlay }),
        /* @__PURE__ */ jsx("div", { className: s$2.bannerMain, children: /* @__PURE__ */ jsxs("div", { className: s$2.content, children: [
          /* @__PURE__ */ jsx("h1", { className: s$2.title, children: "Aprender con acompañamiento hace la diferencia" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: s$2.ctaBtn,
              onClick: handleOpenModal,
              children: "Conocer más"
            }
          )
        ] }) })
      ]
    }
  ) });
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};
const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
  }
};
function ValidationGrid() {
  return /* @__PURE__ */ jsxs("section", { className: s$3.container, children: [
    /* @__PURE__ */ jsxs("h2", { className: s$3.mainTitle, children: [
      "Impulsa tu carrera con ",
      /* @__PURE__ */ jsx("span", { children: "reconocimiento oficial" })
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: s$3.imageWrapperCertificate,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: fadeInUp,
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/img/dummy-title.webp",
            alt: "Certificado oficial USB Online",
            className: s$3.mainImgCertificado,
            width: "1000",
            height: "800"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: s$3.topRow, children: [
      /* @__PURE__ */ jsxs(
        motion.article,
        {
          className: s$3.textCard,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: fadeInLeft,
          children: [
            /* @__PURE__ */ jsx("h3", { children: "Validez Oficial" }),
            /* @__PURE__ */ jsx("p", { children: "Programas con reconocimiento oficial RVOE, garantizando cumplimiento normativo, calidad académica certificada y respaldo institucional ante autoridades educativas." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.article,
        {
          className: s$3.textCard,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: fadeInRight,
          children: [
            /* @__PURE__ */ jsx("h3", { children: "Respaldo Académico" }),
            /* @__PURE__ */ jsx("p", { children: "Planes de estudio estructurados conforme lineamientos oficiales, con documentación válida y registro ante autoridades competentes correspondientes." })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: s$3.imageWrapper,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: fadeInUp,
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/img/academy.webp",
            alt: "Campus y respaldo USB",
            className: s$3.mainImg
          }
        )
      }
    )
  ] });
}

const videos = [
  { id: "1", thumbnail: "/img/testimonio1.webp", youtubeId: "VIDEO_ID_1", name: "Ricardo G." },
  { id: "2", thumbnail: "/img/testimonio2.webp", youtubeId: "VIDEO_ID_2", name: "Andrea M." },
  { id: "3", thumbnail: "/img/testimonio3.webp", youtubeId: "VIDEO_ID_3", name: "Luis P." }
];
function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const renderCard = (video, index) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${s$4.videoCard} ${index === 1 ? s$4.featured : ""}`,
      onClick: () => setSelectedVideo(video.youtubeId),
      children: [
        /* @__PURE__ */ jsx("img", { src: video.thumbnail, alt: `Testimonio de ${video.name}`, className: s$4.thumb }),
        /* @__PURE__ */ jsxs("div", { className: s$4.overlay, children: [
          /* @__PURE__ */ jsx("div", { className: s$4.playButtonContainer, children: /* @__PURE__ */ jsx("div", { className: s$4.playIconWrapper, children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: s$4.playSvg, children: /* @__PURE__ */ jsx("path", { d: "M8 5v14l11-7z" }) }) }) }),
          /* @__PURE__ */ jsx("span", { className: s$4.studentName, children: video.name })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ jsxs("section", { className: s$4.container, children: [
    /* @__PURE__ */ jsxs("h2", { className: s$4.title, children: [
      "Historias que ",
      /* @__PURE__ */ jsx("span", { children: "inspiran" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: s$4.desktopGrid, children: videos.map((video, index) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: index * 0.1 },
        children: renderCard(video, index)
      },
      video.id
    )) }),
    /* @__PURE__ */ jsx("div", { className: s$4.mobileCarousel, children: /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Pagination],
        spaceBetween: 20,
        slidesPerView: 1.2,
        centeredSlides: true,
        pagination: { clickable: true },
        children: videos.map((video, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: renderCard(video, index) }, video.id))
      }
    ) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: selectedVideo && /* @__PURE__ */ jsx(
      motion.div,
      {
        className: s$4.modal,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setSelectedVideo(null),
        children: /* @__PURE__ */ jsxs("div", { className: s$4.modalContent, onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsx("div", { className: s$4.videoWrapper, children: /* @__PURE__ */ jsx(
            "iframe",
            {
              width: "100%",
              height: "100%",
              src: `https://www.youtube.com/embed/${selectedVideo}?autoplay=1`,
              title: "YouTube video player",
              frameBorder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
              allowFullScreen: true
            }
          ) }),
          /* @__PURE__ */ jsx("button", { className: s$4.closeBtn, onClick: () => setSelectedVideo(null), "aria-label": "Cerrar video", children: "×" })
        ] })
      }
    ) })
  ] });
}

const reviews = [
  {
    id: 1,
    text: "Me conecto desde cualquier lugar y siempre encuentro material actualizado.",
    author: "Valentina Pérez",
    role: "Estudiante de Gestión Educativa y Talento Humano",
    avatar: "./img/resena-mujer-usbonline.webp"
  },
  {
    id: 2,
    text: "Me gustan los recursos, foros activos y materiales siempre actualizados.",
    author: "Javier Mendoza",
    role: "Estudiante de Logística",
    avatar: "./img/resena-adulto-posgrado-usbonline.webp"
  },
  {
    id: 3,
    text: "Los profesores responden rápido y explican todo de forma sencilla.",
    author: "Sofía Rojas",
    role: "Estudiante de Mercadotecnia Estratégica",
    avatar: "./img/resena-joven-usbonline.webp"
  }
];
function ReviewCards() {
  return /* @__PURE__ */ jsxs("section", { className: s$5.container, "aria-labelledby": "reviews-title", children: [
    /* @__PURE__ */ jsx("h2", { id: "reviews-title", className: "sr-only", children: "Testimonios de nuestros estudiantes" }),
    /* @__PURE__ */ jsx("div", { className: s$5.grid, children: reviews.map((review, index) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        className: s$5.card,
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: index * 0.1 },
        children: [
          /* @__PURE__ */ jsx("span", { className: s$5.quoteMark, "aria-hidden": "true", children: "“" }),
          /* @__PURE__ */ jsx("blockquote", { className: s$5.textContent, children: /* @__PURE__ */ jsx("p", { className: s$5.text, children: review.text }) }),
          /* @__PURE__ */ jsxs("div", { className: s$5.footer, children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: review.avatar,
                alt: `Foto de perfil de ${review.author}`,
                className: s$5.avatar,
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: s$5.info, children: [
              /* @__PURE__ */ jsx("cite", { className: s$5.author, children: review.author }),
              /* @__PURE__ */ jsx("p", { className: s$5.role, children: review.role })
            ] })
          ] })
        ]
      },
      review.id
    )) })
  ] });
}

function Voices({ videoId = "prSqD3qGjdI" }) {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("section", { className: s$6.container, children: [
    /* @__PURE__ */ jsxs("div", { className: s$6.header, children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          className: s$6.title,
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          children: "Voces que enseñan"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          className: s$6.subtitle,
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: 0.2 },
          children: "Historias reales de quienes transforman el aprendizaje en modalidad online."
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: s$6.videoWrapper,
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        onClick: () => setIsOpen(true),
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
              alt: "Testimonial USBOnline",
              className: s$6.thumbnail
            }
          ),
          /* @__PURE__ */ jsx("div", { className: s$6.playOverlay, children: /* @__PURE__ */ jsx("div", { className: s$6.playCircle, children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M8 5v14l11-7z" }) }) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        className: s$6.modal,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setIsOpen(false),
        children: /* @__PURE__ */ jsxs("div", { className: s$6.modalContent, onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsx(
            "iframe",
            {
              src: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
              title: "Reproductor de video",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            }
          ),
          /* @__PURE__ */ jsx("button", { className: s$6.closeBtn, onClick: () => setIsOpen(false), "aria-label": "Cerrar video", children: "×" })
        ] })
      }
    ) })
  ] });
}

const supabaseUrl = "https://vtyvtacuwepklkiodupp.supabase.co";
const supabaseAnonKey = "sb_publishable_fyuyqY0Y_1Z5dv4aVvFSWQ_4uqDCS0v";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: programs, error } = await supabase.from("programs").select("*");
  if (error) {
    console.error("\u274C Error de Supabase:", error.message);
  } else {
    console.log("\u2705 Programas cargados correctamente:", programs?.length);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "USB Online | Estudiar as\xED s\xED encaja", "description": "Explora nuestra oferta acad\xE9mica 100% en l\xEDnea. Carreras y especialidades dise\xF1adas para profesionales que buscan flexibilidad y excelencia acad\xE9mica.", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="inicio" class="hero-container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/components/Hero/Hero", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> <section id="oferta" class="content-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Oferta", Oferta, { "initialPrograms": programs || [], "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/components/Oferta/Oferta", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </section> <section class="content-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ValidationGrid", ValidationGrid, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/components/ValidationGrid/ValidationGrid", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </section> <section class="content-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Banner", BannerCTA, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/components/BannerCTA/BannerCTA", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </section> <section id="como-funciona" class="content-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", Grid, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/components/Grid/Grid", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </section> <section id="experiencias" class="content-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Testimonials", Testimonials, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/components/Testimonials/Testimonials", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ReviewCards", ReviewCards, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/components/ReviewCards/ReviewCards", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </section> <section id="innovacion" class="content-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "VoicesVideo", Voices, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/components/VoicesVideo/VoicesVideo", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </section> <section class="content-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/components/Footer/Footer", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </section> ` })} <!-- Un solo cierre limpio al final --> `;
}, "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/pages/index.astro", void 0);

const $$file = "/Users/disenowebmultimedia/Desktop/usbonline-1.0/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
