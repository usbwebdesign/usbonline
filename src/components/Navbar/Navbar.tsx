import React, { useState, useEffect } from 'react';
import { UserCircle } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Lógica para inyectar HubSpot cuando se abre el modal
  useEffect(() => {
    if (isModalOpen) {
      // Verificamos si el script de HubSpot ya cargó en la ventana
      const script = document.createElement('script');
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.charset = "utf-8";
      script.type = "text/javascript";
      
      script.onload = () => {
        if ((window as any).hbspt) {
          (window as any).hbspt.forms.create({
            region: "na1",
            portalId: "TU_PORTAL_ID", // REEMPLAZA CON TU PORTAL ID
            formId: "TU_FORM_ID",     // REEMPLAZA CON TU FORM ID
            target: "#hubspotFormContainer"
          });
        }
      };
      document.body.appendChild(script);
    }
  }, [isModalOpen]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navContainer}>
          
          {/* LADO IZQUIERDO: Logo */}
          <a href="/" className={styles.logoSection}>
            <img src="/img/usbonlinelogo.svg" alt="USB Online Logo" className={styles.logoImage} />
          </a>

          {/* CENTRO: Menú de navegación */}
          <ul className={`${styles.menuLinks} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <li><a href="/#inicio" className={styles.link} onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
            <li><a href="/#oferta" className={styles.link} onClick={() => setIsMenuOpen(false)}>Oferta</a></li>
            <li><a href="/#como-funciona" className={styles.link} onClick={() => setIsMenuOpen(false)}>¿Cómo funciona?</a></li>
            <li><a href="/#experiencias" className={styles.link} onClick={() => setIsMenuOpen(false)}>Experiencias</a></li>
            <li><a href="/blog" className={styles.link} onClick={() => setIsMenuOpen(false)}>Blog</a></li>
            
            <li className={styles.mobileOnly}>
              <a href="https://usbmexicoonline.neolms.com/" target='_blank' className={styles.link} onClick={() => setIsMenuOpen(false)}>
                Iniciar Sesión
              </a>
            </li>
          </ul>

          {/* LADO DERECHO: Acciones */}
          <div className={styles.actions}>
            <a href="https://usbmexicoonline.neolms.com/" target='_blank' className={`${styles.userLink} ${styles.desktopOnly}`} aria-label="Ir al perfil">
              <UserCircle size={32} strokeWidth={2} color="white" />
            </a>

            {/* BOTÓN DE ADMISIONES: Ahora abre el modal */}
            <button 
              onClick={() => setIsModalOpen(true)} 
              className={styles.btnAdmisiones}
            >
              Admisiones
            </button>

            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
              <div className={`${styles.bar} ${isMenuOpen ? styles.bar1 : ''}`}></div>
              <div className={`${styles.bar} ${isMenuOpen ? styles.bar2 : ''}`}></div>
              <div className={`${styles.bar} ${isMenuOpen ? styles.bar3 : ''}`}></div>
            </button>
          </div>
        </nav>
      </header>

      {/* MODAL DE HUBSPOT */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={() => setIsModalOpen(false)} aria-label="Cerrar">
              &times;
            </button>
            <div className={styles.formHeader}>
              <h3>Solicita Información</h3>
              <p>Déjanos tus datos y un asesor se contactará contigo a la brevedad.</p>
            </div>
            {/* Aquí se inyecta el formulario */}
            <div id="hubspotFormContainer" className={styles.hubspotContainer}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;