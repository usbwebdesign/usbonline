import React from 'react';
import { motion, type Variants } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  // 1. Ya NO necesitamos useEffect ni useState para el video. 
  // El navegador lo hará nativamente.

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reducido de 0.2 para mayor velocidad
        delayChildren: 0,     // Eliminado el delay de 0.3 para mejorar el LCP
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, // Reducido de 0.8 para que el "paint" sea más rápido
        ease: [0.22, 1, 0.36, 1] 
      },
    },
  };

  const scrollIconVariants: Variants = {
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

  return (
    <section className={styles.hero}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={styles.videoBackground}
        poster="/videos/hero-img.jpg"
        preload="metadata" // Ayuda a que el navegador no se sature bajando todo de golpe
      >
        {/* MOVIL PRIMERO: Ayuda a que Lighthouse Mobile identifique el recurso rápido */}
        <source 
          src="/videos/hero-vid3.mp4" 
          type="video/mp4" 
          media="(max-width: 767px)" 
        />
        <source 
          src="/videos/hero-vertical.mp4" 
          type="video/mp4" 
          media="(min-width: 768px)" 
        />
      </video>

      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* El H1 es tu LCP: debe aparecer LO ANTES POSIBLE */}
          <motion.h1 className={styles.title} variants={itemVariants}>
            <span className={styles.highlight}>Estudiar así sí encaja con tu vida</span>
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            Modalidad 100% online
          </motion.p>

          <motion.div className={styles.actions} variants={itemVariants}>
            <a href="#oferta" className={styles.btnPrimary}>
              Ver oferta educativa
            </a>
            <a href="#contacto" className={styles.btnSecondary}>
              Admisiones
            </a>
          </motion.div>

          <motion.div  
            className={styles.scrollDown}
            variants={scrollIconVariants}
            initial="hidden"
            animate={["visible", "bounce"]}
          >
            <span className={styles.mouse}>
              <span className={styles.wheel}></span>
            </span>
            <div className={styles.arrow}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;