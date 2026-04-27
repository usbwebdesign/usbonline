import React from 'react';
import { motion, type Variants } from 'framer-motion';
import s from './BannerCTA.module.css';

// Solo animamos el contenedor principal
const containerVariants: Variants = {
  hidden: { 
    scale: 0.7, 
    borderRadius: "100px",
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

export default function BannerCTA() {
  return (
    <section className={s.bannerWrapper}>
      <motion.div 
        className={s.animationContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* VIDEO DE FONDO */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={s.videoBg}
        >
          <source src="/videos/banner-cta2.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className={s.overlay}></div>

        {/* CONTENIDO PRINCIPAL (Sin animaciones internas) */}
        <div className={s.bannerMain}>
          <div className={s.content}>
            <h1 className={s.title}>
              Aprender con acompañamiento hace la diferencia
            </h1>
            <button className={s.ctaBtn}>
              Conocer más
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}