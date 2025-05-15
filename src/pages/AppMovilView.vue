<template>
  <div class="app-landing">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>App Voz Amiga</h1>
        <p class="tagline">Asistencia accesible y offline para personas con discapacidad visual</p>
        <div class="download-options">
          <a :href="apkLink" class="download-btn" target="_blank">
            <i class="fas fa-download"></i> Descargar APK
          </a>
          <a :href="githubRepo" class="github-link" target="_blank">
            <i class="fab fa-github"></i> Ver en GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Características Principales -->
    <section class="features">
      <div class="feature-card" v-for="(feature, index) in features" :key="index">
        <i :class="feature.icon"></i>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </section>

    <!-- Capturas -->
    <section class="screenshots">
      <h2>Interfaz intuitiva y accesible</h2>
      <div class="screenshot-grid">
        <img 
          v-for="(img, index) in screenshots" 
          :key="index"
          :src="img.src" 
          :alt="img.alt"
          class="screenshot-item"
          @click="openLightbox(index)"
        />
      </div>
    </section>

    <!-- Tecnologías -->
    <section class="technologies">
      <h2>Tecnologías implementadas</h2>
      <div class="tech-grid">
        <div 
          class="tech-card"
          v-for="tech in technologies"
          :key="tech.name"
        >
          <div class="tech-icon">
            <i :class="tech.icon"></i>
          </div>
          <div class="tech-info">
            <h3>{{ tech.name }}</h3>
            <p>{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
     <section class="faq">
    <h2>Preguntas frecuentes</h2>
    <div class="faq-container">
      <div 
        class="faq-item"
        v-for="(faq, index) in faqs"
        :key="index"
        :class="{ 'active': activeFAQ === index }"
      >
        <div class="faq-question" @click="toggleFAQ(index)">
          <h3>{{ faq.question }}</h3>
          <i class="fas" :class="activeFAQ === index ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
        </div>
        <div class="faq-answer">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>

    <!-- Lightbox -->
    <div class="lightbox" v-if="showLightbox" @click="closeLightbox">
      <img :src="screenshots[lightboxIndex].src" :alt="screenshots[lightboxIndex].alt" />
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; {{ new Date().getFullYear() }} Voz Amiga. Todos los derechos reservados.</p>
        <p>Desarrollado con ❤️ para una asistencia accesible.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import MenuImg from '@/assets/menu.png';
import VozImg from '@/assets/comandos_voz.png';
import UbiImg from '@/assets/ubicacion_obtenida.png';


export default {
  name: "AppMovilView",
  data() {
    return {
      activeFAQ: null,
      showLightbox: false,
      lightboxIndex: 0,
      apkLink: "https://drive.google.com/drive/folders/1Jp8aQE1R_V9VjM7rO0G2iCRRY-YzUrVN?usp=drive_link",
      githubRepo: "https://github.com/cabrademontes27/AppVozAmiga.git",
      screenshots: [
  { src: MenuImg, alt: "Menú principal" },
  { src: VozImg, alt: "Comandos de voz" },
  { src: UbiImg, alt: "Geolocalización" }
],
      features: [
        {
          icon: "fas fa-microphone-alt",
          title: "Control por voz",
          description: "Navegación  mediante comandos de voz"
        },
        {
          icon: "fas fa-map-marker-alt",
          title: "Geolocalización",
          description: "Ubicación en tiempo real "
        },
        {
          icon: "fas fa-universal-access",
          title: "Accesibilidad total",
          description: "Diseñada bajo estándares WCAG 2.1"
        }
      ],
      technologies: [
        { 
          name: "Kotlin", 
          icon: "fab fa-android", 
          description: "Lenguaje principal para desarrollo Android nativo" 
        },
        { 
          name: "Material Design", 
          icon: "fas fa-palette", 
          description: "Sistema de diseño accesible y consistente" 
        },
        { 
          name: "OpenStreetMap", 
          icon: "fas fa-map", 
          description: "Mapas libres y offline" 
        }
      ],
      faqs: [
        {
          question: "¿Funciona completamente sin internet?",
          answer: "Todas las funciones principales trabajan en modo offline"
        },
        {
          question: "¿Es compatible con lectores de pantalla?",
          answer: "Sí, totalmente compatible con TalkBack y VoiceOver"
        }
      ]
    };
  },
  methods: {
    toggleFAQ(index) {
      this.activeFAQ = this.activeFAQ === index ? null : index;
    },
    openLightbox(index) {
      this.lightboxIndex = index;
      this.showLightbox = true;
    },
    closeLightbox() {
      this.showLightbox = false;
    }
  }
};
</script>

<style scoped>
.app-landing {
  /* Nueva paleta de colores modernizada */
  --primary-color: #1E293B;       /* Azul oscuro moderno */
  --secondary-color: #7C3AED;     /* Púrpura vibrante */
  --accent-color: #3B82F6;        /* Azul brillante */
  --light-coffee: #F8FAFC;        /* Blanco suave */
  --text-color: #F1F5F9;          /* Texto claro */
  --background-dark: #0F172A;     /* Fondo oscuro rico */
  --card-background: #1E293B;     /* Tarjetas con tono azulado */
  --highlight-color: #10B981;     /* Verde esmeralda para acentos */
  
  background-color: var(--background-dark);
  color: var(--text-color);
  font-family: 'Inter', 'Segoe UI', sans-serif;
  min-height: 100vh;
}

/* Hero Section Modernizada */
.hero {
  text-align: center;
  padding: 5rem 1rem;
  background: linear-gradient(
    135deg,
    var(--secondary-color) 0%,
    var(--primary-color) 100%
  );
  border-radius: 16px;
  margin: 2rem auto;
  max-width: 1200px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hero h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 1.5rem;
  font-weight: 700;
  position: relative;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.tagline {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto 3rem;
  position: relative;
}

.download-options {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}

.download-btn {
  background-color: var(--highlight-color);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.download-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  background-color: #059669;
}

.github-link {
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 2.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.github-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

/* Sección de características mejorada */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  padding: 5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: var(--card-background);
  padding: 2.5rem 2rem;
  border-radius: 16px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--secondary-color);
  transition: width 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.feature-card:hover::before {
  width: 8px;
}

.feature-card i {
  font-size: 2.75rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

/* Capturas de pantalla modernas */
.screenshots {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem 1rem;
}

.screenshots h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  font-size: 2rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.screenshots h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
  border-radius: 3px;
}

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.screenshot-item {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.screenshot-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  border-color: var(--accent-color);
}

/* Tecnologías mejoradas */
.technologies {
  max-width: 1200px;
  margin: 6rem auto;
  padding: 2rem 1rem;
}

.technologies h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  font-size: 2rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.technologies h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
  border-radius: 3px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
}

.tech-card {
  background: var(--card-background);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border-color: var(--accent-color);
}

.tech-icon {
  background: rgba(59, 130, 246, 0.1);
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-icon i {
  font-size: 2rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tech-info h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: white;
}

.tech-info p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* FAQ mejorado */
.faq {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 1rem;
}

.faq h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: white;
  font-size: 2rem;
}

.faq-container {
  margin-top: 1.5rem;
}

.faq-item {
  background: var(--card-background);
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.faq-question {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease;
}

.faq-question:hover {
  background: rgba(255, 255, 255, 0.05);
}

.faq-question h3 {
  font-size: 1.1rem;
  margin: 0;
  color: white;
  font-weight: 500;
}

.faq-question i {
  color: var(--accent-color);
  transition: transform 0.3s ease;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  padding: 0 1.5rem;
  transition: all 0.3s ease;
  color: white;
  font-weight: 500;
}

.faq-item.active .faq-answer {
  max-height: 300px;
  padding: 0 1.5rem 1.5rem;
}

.faq-item.active .faq-question i {
  transform: rotate(180deg);
}

/* Footer mejorado */
.footer {
  background: var(--primary-color);
  color: var(--text-color);
  text-align: center;
  padding: 3rem 1rem;
  margin-top: 4rem;
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
}

.footer-content p {
  margin: 0.5rem 0;
  color: rgba(255, 255, 255, 0.8);
}

.footer-content p:first-child {
  font-weight: 600;
  color: white;
}

/* Lightbox mejorado */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.lightbox.active {
  opacity: 1;
  pointer-events: all;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  border: 2px solid var(--accent-color);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.25rem;
  }
  
  .hero {
    padding: 3rem 1rem;
  }
  
  .features,
  .screenshot-grid,
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .download-options {
    flex-direction: column;
    align-items: center;
  }
  
  .download-btn,
  .github-link {
    width: 100%;
    justify-content: center;
  }
}
</style>

