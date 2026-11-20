import React from 'react';
import { motion } from 'framer-motion';
import s from './ReviewCards.module.css';

interface Review {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    text: "Tiene un programa muy completo y me gustaron mucho las clases.",
    author: "Andrea Flores",
    role: "Estudiante de Gestión Educativa y Talento Humano",
    avatar: "./img/resena1.png"
  },
  {
    id: 2,
    text: "Estudiar el doctorado en la Universidad Simón Bolívar fue una decisión que cambió mi vida. El nivel de profesionalismo y exigencia académica me motivó a ir más allá durante todo este camino, en el que siempre estuve acompañada. Sin duda, ha sido una experiencia transformadora; estoy feliz de haber elegido esta universidad.",
    author: "Karla Karina Tenorio",
    role: "Estudiante del Doctorado",
    avatar: "./img/resena2.png"
  },
  {
    id: 3,
    text: "La especialidad me ayudó muchísimo a fortalecer los conocimientos que vi en la carrera, y en mi trabajo, en la parte de posicionamiento de marca y análisis de mercado.",
    author: "Fernada Islas",
    role: "Estudiante de Mercadotecnia Estratégica",
    avatar: "./img/resena3.png"
  }
];

export default function ReviewCards() {
  return (
    <section className={s.container} aria-labelledby="reviews-title">
      {/* Título oculto para SEO si ya tienes uno arriba, o visible si lo necesitas */}
      <h2 id="reviews-title" className="sr-only">Testimonios de nuestros estudiantes</h2>
      
      <div className={s.grid}>
        {reviews.map((review, index) => (
          <motion.article 
            key={review.id}
            className={s.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Comilla tipográfica para máxima legibilidad visual */}
            <span className={s.quoteMark} aria-hidden="true">“</span>

            <blockquote className={s.textContent}>
              <p className={s.text}>{review.text}</p>
            </blockquote>

            <div className={s.footer}>
              <img 
                src={review.avatar} 
                alt={`Foto de perfil de ${review.author}`} 
                className={s.avatar} 
                loading="lazy"
              />
              <div className={s.info}>
                <cite className={s.author}>{review.author}</cite>
                <p className={s.role}>{review.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
