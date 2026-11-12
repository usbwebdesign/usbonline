import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Estilos de Swiper con protección para TypeScript
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';

import s from './Testimonials.module.css';

interface VideoTestimonial {
  id: string;
  videoUrl: string; // Ruta al archivo .mp4
  name: string;
  poster?: string;  // Imagen de portada opcional antes de reproducir
}

const videos: VideoTestimonial[] = [
  { 
    id: '1', 
    videoUrl: '/videos/testimonio1.mp4', // <-- Cambia esto por la ruta de tu video .mp4
    name: 'Alejandro R.' 
  },
  { 
    id: '2', 
    videoUrl: '/videos/testimonio2.mp4', 
    name: 'Adelita I.' 
  },
  { 
    id: '3', 
    videoUrl: '/videos/testimonio3.mp4', 
    name: 'Diana M.' 
  },
];

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);

  const renderCard = (video: VideoTestimonial, index: number) => (
    <div 
      className={`${s.videoCard} ${index === 1 ? s.featured : ''}`}
      onClick={() => setSelectedVideo(video)}
    >
      {/* Reproductor en vista previa: en bucle, silenciado y autoejecutado */}
      <video 
        src={video.videoUrl} 
        poster={video.poster}
        className={s.thumb} 
        autoPlay 
        loop 
        muted 
        playsInline 
      />

      <div className={s.overlay}>
        <div className={s.playButtonContainer}>
          <div className={s.playIconWrapper}>
            <svg viewBox="0 0 24 24" fill="currentColor" className={s.playSvg}>
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <span className={s.studentName}>{video.name}</span>
      </div>
    </div>
  );

  return (
    <section className={s.container}>
      <h2 className={s.title}>Historias que <span>inspiran</span></h2>
      
      {/* Grid para Escritorio */}
      <div className={s.desktopGrid}>
        {videos.map((video, index) => (
          <motion.div 
            key={video.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {renderCard(video, index)}
          </motion.div>
        ))}
      </div>

      {/* Swiper para Móvil */}
      <div className={s.mobileCarousel}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          pagination={{ clickable: true }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id}>
              {renderCard(video, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal Dinámico para reproducir el video con audio */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            className={s.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
              <div className={s.videoWrapper}>
                <video 
                  src={selectedVideo.videoUrl} 
                  controls 
                  autoPlay 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <button className={s.closeBtn} onClick={() => setSelectedVideo(null)} aria-label="Cerrar video">
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
