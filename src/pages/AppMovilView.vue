<template>
  <div class="app-landing">
    <!-- Hero Section Simplificada -->
    <section class="hero">
      <div class="hero-content">
        <h1>App Voz Amiga</h1>
        <p class="tagline">Asistencia accesible y offline para personas con discapacidad visual</p>
        <a :href="apkLink" class="download-btn" target="_blank">
          <i class="fas fa-download"></i> Descargar APK
        </a>
      </div>
    </section>

    <!-- Carrusel Simplificado -->
    <section class="screenshots">
      <h2>Capturas de la app</h2>
      <div class="carousel">
        <button class="carousel-btn prev" @click="prevSlide">‹</button>
        <div class="carousel-inner">
          <img 
            v-for="(img, index) in screenshots" 
            :key="index"
            :src="img.src" 
            :alt="img.alt"
            class="carousel-item"
            :class="{ active: currentSlide === index }"
          />
        </div>
        <button class="carousel-btn next" @click="nextSlide">›</button>
      </div>
      <div class="carousel-dots">
        <span 
          v-for="(dot, index) in screenshots.length" 
          :key="index"
          :class="{ active: currentSlide === index }"
          @click="currentSlide = index"
        ></span>
      </div>
    </section>

    <!-- Tecnologías en Grid -->
    <section class="technologies">
      <h2>Tecnologías utilizadas</h2>
      <div class="tech-grid">
        <div class="tech-card" v-for="tech in technologies" :key="tech.name">
          <i :class="tech.icon"></i>
          <h3>{{ tech.name }}</h3>
          <p>{{ tech.description }}</p>
        </div>
      </div>
    </section>

    <!-- Repositorio y Contribuir -->
    <section class="repo-contribuye">
      <div class="repo-section">
        <h2>Código Fuente</h2>
        <a :href="githubRepo" class="github-btn" target="_blank">
          <i class="fab fa-github"></i> Ver en GitHub
        </a>
      </div>
      <div class="contribuye-section">
        <h2>¿Quieres contribuir?</h2>
        <a href="mailto:contacto@invisings.org" class="contact-btn">Contáctanos</a>
      </div>
    </section>

    <!-- FAQ Estilo Minimalista -->
    <section class="faq">
      <h2>Preguntas Frecuentes</h2>
      <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
        <div class="faq-question" @click="toggleFAQ(index)">
          <h3>{{ faq.question }}</h3>
          <i class="fas fa-chevron-down" :class="{ rotated: activeFAQ === index }"></i>
        </div>
        <transition name="slide">
          <div class="faq-answer" v-show="activeFAQ === index">
            <p>{{ faq.answer }}</p>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AppMovilView",
  data() {
    return {
      currentSlide: 0,
      activeFAQ: null,
      apkLink: "https://drive.google.com/uc?id=TUID&export=download",
      githubRepo: "https://github.com/tuusuario/voz-amiga",
      screenshots: [
        { src: "/src/assets/menu.png", alt: "Menú principal" },
        { src: "/src/assets/comandos_voz.png", alt: "Comandos de voz" },
        { src: "/src/assets/ubicacion_obtenida.png", alt: "Geolocalización" }
      ],
      technologies: [
        { 
          name: "Kotlin", 
          icon: "fab fa-android", 
          description: "Lenguaje principal para desarrollo Android" 
        },
        { 
          name: "Jetpack Compose", 
          icon: "fas fa-mobile-alt", 
          description: "Moderno toolkit de UI para Android" 
        },
        { 
          name: "MongoDB", 
          icon: "fas fa-database", 
          description: "Base de datos NoSQL escalable" 
        }
      ],
      faqs: [
        {
          question: "¿La app es completamente gratuita?",
          answer: "Sí, Voz Amiga es completamente gratuita y de código abierto."
        },
        {
          question: "¿Necesita conexión a internet?",
          answer: "Funciones principales operan sin conexión."
        }
      ]
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.screenshots.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.screenshots.length) % this.screenshots.length;
    },
    toggleFAQ(index) {
      this.activeFAQ = this.activeFAQ === index ? null : index;
    }
  }
};
</script>

<style scoped>
/* Colores principales usando tus variables */
.app-landing {
  --primary-color: #6F4E37;  /* Café principal */
  --secondary-color: #A38B7B; /* Café claro */
  --background: #F5F0E6;      /* Beige claro */
  --text-color: #4B3621;     /* Café oscuro */
  --accent-color: #0366D6;    /* Azul GitHub */
}

/* Estilos Base */
.app-landing {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--text-color);
  background: var(--background);
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(
    to right,
    var(--primary-color),
    var(--secondary-color)
  );
  border-radius: 12px;
  margin-bottom: 2rem;
}

.hero h1 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.tagline {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
}

/* Botones */
.download-btn {
  background: var(--primary-color);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s;
}

.download-btn:hover {
  background: var(--text-color);
}

.github-btn {
  background: var(--accent-color);
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
}

/* Carrusel */
.carousel {
  position: relative;
  margin: 2rem auto;
  max-width: 800px;
}

.carousel-inner {
  display: flex;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.carousel-item {
  min-width: 100%;
  transition: transform 0.5s ease;
  opacity: 0;
}

.carousel-item.active {
  opacity: 1;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50%;
  cursor: pointer;
}

.prev { left: 1rem; }
.next { right: 1rem; }

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.carousel-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--secondary-color);
  cursor: pointer;
}

.carousel-dots span.active {
  background: var(--primary-color);
}

/* Tecnologías */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.tech-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.tech-card i {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

/* FAQ */
.faq-item {
  background: white;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.faq-question {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.faq-answer {
  padding: 0 1rem 1rem;
  color: var(--secondary-color);
}

.rotated {
  transform: rotate(180deg);
}

.slide-enter-active, .slide-leave-active {
  transition: max-height 0.3s ease;
  max-height: 200px;
}

.slide-enter, .slide-leave-to {
  max-height: 0;
  overflow: hidden;
}

/* Sección Repo + Contribuir */
.repo-contribuye {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.repo-section, .contribuye-section {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .carousel {
    margin: 1rem -15px;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>