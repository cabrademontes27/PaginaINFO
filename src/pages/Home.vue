<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  />
  <div class="home-container">
    <!-- Header Section -->
    <header :class="['header', { scrolled: isScrolled }]">
      <div class="logo">
        <span>INVISINGS.</span>
      </div>

      <div class="hamburger" @click="toggleNav">
        <i class="fas fa-bars"></i>
      </div>

      <nav class="nav">
        <ul>
          <li><a href="#home" @click="closeNav">Home</a></li>
          <li><a href="#about" @click="closeNav">Acerca</a></li>
          <li>
            <a href="#information" @click="closeNav">Información</a>
          </li>
          <li>
            <router-link to="/buscame" @click="closeNav">Buscame</router-link>
          </li>
          <li>
            <router-link to="/aprender-a-jugar" @click="closeNav"
              >Aprender a jugar</router-link
            >
          </li>
          <li><a href="#team" @click="closeNav">Nosotros</a></li>
        </ul>
      </nav>
    </header>

    <!-- Hero Section -->
    <div class="main-content">
      <!-- Hero Section -->
      <section id="home" class="hero">
        <div class="overlay">
          <h1>Innovación más allá de los límites</h1>
          <p>Empoderando tus decisiones</p>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="about">
        <h2>Nuestra Visión</h2>
        <p class="vision-text">
          En Invisings imaginamos un mundo donde la accesibilidad digital sea
          una realidad universal. Creemos firmemente que la tecnología debe
          romper barreras, no crearlas. Nuestra visión es ser pioneros en el
          desarrollo de soluciones que empoderen a las personas con discapacidad
          visual para vivir con plena autonomía y dignidad.
        </p>

        <!-- Vision Statistics -->
        <div class="vision-stats">
          <div class="stat-item">
            <div class="stat-number">285M</div>
            <div class="stat-label">
              Personas con discapacidad visual en el mundo (OMS)
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-number">80%</div>
            <div class="stat-label">
              De los casos de discapacidad visual son evitables
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <div class="information-content">
    <!-- Main section for mission and related content -->
    <section class="information" aria-label="Información general">
      <!-- New Section: Methodology and Research -->
      <!-- Methodology Section -->
<section class="research-section" aria-label="Investigación y metodología">
  <div class="research-container">
    <!-- Left Column - Text Content -->
    <div class="research-main">
      <h2>Metodología Científica</h2>
      <p class="section-subtitle">Conjunto de pasos para el llegar al desarrollo de la innovación</p>

      <!-- Interactive Tabs System -->
      <div class="research-tabs">
        <button 
          v-for="(tab, index) in researchTabs" 
          :key="index"
          @click="activeTab = index"
          :class="{ active: activeTab === index }"
        >
          {{ tab.title }}
        </button>
      </div>

      <!-- Tab Content -->
      <div class="tab-content">
        <div v-for="(tab, index) in researchTabs" 
             :key="index" 
             v-show="activeTab === index"
             class="fade-in">
          <h3>{{ tab.subtitle }}</h3>
          <p>{{ tab.content }}</p>
        </div>
      </div>
    </div>

    <!-- Right Column - Visual Elements -->
    <div class="research-sidebar">
      <!-- Key Statistics -->
      <div class="stats-card">
        <h4>Datos Clave</h4>
        <div class="stat-item">
          <i class="fas fa-users"></i>
          <div>
            <span>250</span>
            <p>Participantes en el estudio</p>
          </div>
        </div>
        
        <div class="stat-item">
          <i class="fas fa-chart-bar"></i>
          <div>
            <span>75.4%</span>
            <p>Mejora en autonomía reportada</p>
          </div>
        </div>

        <div class="stat-item">
          <i class="fas fa-check-circle"></i>
          <div>
            <span>0.91 </span>
            <p>Confianza en resultados</p>
          </div>
        </div>
      </div>

      <!-- Methodology Timeline -->
      <div class="timeline-card">
        <h4>Fases del Proyecto</h4>
        <div class="timeline">
          <div class="timeline-step" v-for="(step, index) in timelineSteps" :key="index">
            <div class="step-marker">{{ index + 1 }}</div>
            <p>{{ step }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <!-- End of .necessity-section -->

      <!-- Features / Innovations Section -->
      <section
        class="feature-section"
        aria-label="Características principales de Invisings"
      >
        <!-- Text about the app’s main features -->
        <div id="information" class="feature-text">
          <h3>Nuestras Innovaciones</h3>
          <p>
            En <strong>Invisings</strong>, estamos comprometidos con la creación
            de tecnología que transforma vidas. Nuestra aplicación está diseñada
            específicamente para empoderar a personas con discapacidad visual,
            ofreciendo herramientas innovadoras que promueven la independencia,
            la seguridad y la conexión con el mundo que les rodea.
          </p>

          <ul class="feature-list">
            <li>
              <strong>🦯 Funcionalidad para ubicación en tiempo real:</strong
              ><br />
              Navega con confianza gracias a nuestro sistema de guía en tiempo
              real. La app te proporciona indicaciones precisas y alertas sobre
              obstáculos, permitiéndote moverte de manera segura y autónoma.
            </li>
            <li>
              <strong>📖 Lector de medicamentos por cámara:</strong><br />
              Simplifica tu día a día con nuestro lector de medicamentos.
              Escanea el envase de tus medicamentos con la cámara y la app te
              leerá en voz alta la información importante, como la dosis y las
              instrucciones.
            </li>
            <li>
              <strong>🎧 Asistente por comandos de voz:</strong><br />
              Controla la aplicación con tu voz. Nuestro asistente de voz
              responde a tus comandos, permitiéndote acceder a todas las
              funciones de manera rápida y sin necesidad de tocar la pantalla.
            </li>
            <li>
              <strong>📱 Aplicación con asistente de voz:</strong><br />
              Una experiencia completamente accesible. Desde la navegación hasta
              la lectura de textos, nuestro asistente de voz está diseñado para
              adaptarse a tus necesidades y hacerte la vida más fácil.
            </li>
          </ul>

          <p>
            En <strong>Invisings</strong>, creemos que la tecnología debe ser
            inclusiva. Nuestra aplicación no solo es una herramienta, sino un
            puente hacia un mundo más accesible y conectado para todos.
          </p>
        </div>

        <!-- Feature image -->
        <div class="feature-image">
          <img
            src="/src/assets/PruebaEjemplo.jpg"
            alt="Representación visual de tecnología accesible para personas con discapacidad visual"
            class="accessible-image"
          />
        </div>
      </section>
      <!-- End of .feature-section -->

      <!-- Team Section -->
      <section
        id="team"
        class="team-section"
        aria-label="Conoce nuestro equipo"
      >
        <h3>Conoce Nuestro Equipo</h3>
        <p class="team-description">
          Un grupo diverso de ingenieros, diseñadores inclusivos y especialistas
          en accesibilidad comprometidos con hacer la diferencia.
        </p>
        <div class="team-members">
          <div
            class="team-member"
            v-for="(member, index) in teamMembers"
            :key="index"
          >
            <img
              :src="member.image"
              :alt="`Foto de ${member.name}`"
              class="member-image"
            />
            <div class="member-info">
              <p class="member-role">{{ member.role }}</p>
              <p class="member-name">{{ member.name }}</p>
              <div class="member-social">
                <a href="#" aria-label="LinkedIn"
                  ><i class="fab fa-linkedin"></i
                ></a>
                <a href="#" aria-label="Twitter"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#" aria-label="GitHub"
                  ><i class="fab fa-github"></i
                ></a>
                <a href="#" aria-label="Instagram"
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End of #team -->
    </section>
    <!-- End of .information -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isScrolled: false, // Used to handle scroll-based header style
      teamMembers: [
        {
          name: "Alejandra Bautista Ortiz",
          role: "Estudiante de ingeniería de software",
          image: "/src/assets/braille.jpg",
        },
        {
          name: "Luis German Cabrera Monteros",
          role: "Estudiante de ingeniería de software",
          image: "/src/assets/Perfil_german.png",
        },
        {
          name: "Aurora",
          role: "Especialista en Braille",
          image: "/src/assets/team/juan.jpg",
        },
      ],
      activeTab: 0,
      researchTabs: [
        {
          title: "Problema",
          subtitle: "Planteamiento del Problema",
          content: "El proyecto INVISIGNS surge debido a la falta de herramientas accesibles para personas con discapacidad visual . Se identificó que estas poblaciones enfrentan barreras en la educación, el trabajo y la vida diaria debido a la escasez de productos adaptados, lo que limita su autonomía. La falta de tecnologías accesibles y asequibles agrava el problema, haciendo necesario el desarrollo de soluciones innovadoras como KeySens y la aplicación Voz Amiga, que buscan facilitar la interacción con dispositivos tecnológicos​"
        },
        {
          title: "Literatura",
          subtitle: "Revisión de la Literatura", 
          content: "Se analizaron estudios previos sobre accesibilidad tecnológica y discapacidad visual/auditiva. Investigaciones como las de SAGE Journals (2017) y el Parlamento Europeo (2018) destacan la falta de estándares claros para la implementación de tecnologías inclusivas. Se identificaron avances en software basado en voz y dispositivos adaptativos como posibles soluciones​"
        },
        {
          title: "Diseño",
          subtitle: "Diseño de Investigación",
          content: "Se empleó un enfoque cuantitativo, de tipo descriptivo y de corte transversal. Se desarrollaron cuestionarios para analizar la percepción de usuarios sobre accesibilidad y funcionalidad de productos inclusivos. Se propuso la aplicación Voz Amiga como complemento de los productos físicos, siguiendo una metodología estructurada en fases: planeación, diseño, desarrollo y despliegue​."
        },
        {
          title:"Recopilación",
          subtitle:"Recopilación de Datos",
          content:"Se aplicaron dos cuestionarios de tipo Likert a 250 personas. Se midieron factores como adaptación, accesibilidad, utilidad y costo-beneficio. Los datos fueron recolectados a través de encuestas en línea y entrevistas directas​"
        },
        {
          title:"Análisis",
          subtitle:"Análisis de Datos",
          content:"Se calcularon estadísticos descriptivos sobre la aceptación y percepción de los productos. Se utilizó el coeficiente Alfa de Cronbach para medir la confiabilidad de los cuestionarios, obteniendo valores de 0.91 y 0.87. Los resultados indicaron que el 75.4% de los participantes consideró que un software de asistencia por voz mejoraría su autonomía​."
        },
        {
          title:"Conclusiones",
          subtitle:"Elaboración de conclusiones",
          content:"Se confirmó la necesidad de mejorar la accesibilidad digital. Se validó que la combinación de productos físicos (KeySens) con software de asistencia (Voz Amiga) representa una solución viable. Se concluyó que la educación y la sensibilización sobre inclusión tecnológica son clave para la adopción de estas herramientas​"
        },
        {
          title:"Divulgación científica",
          subtitle:"Divulgación",
          content:"El proyecto INVISIGNS fue presentado en la Universidad Veracruzana como parte de un reporte científico avanzado. Se publicaron los hallazgos en una página web y redes sociales para promover el conocimiento sobre accesibilidad. Se realizaron alianzas con instituciones educativas para la distribución de los productos y su implementación en programas de inclusión"},
        {
          title:"",
          subtitle:"",
          content:""
        },
        // Add more tabs as needed
      ],
      timelineSteps: [
        "Identificación de necesidades",
        "Revisión bibliográfica",
        "Diseño de solución",
        "Desarrollo tecnológico",
        "Validación con usuarios",
        "Implementación final"
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // Handle scroll effect on the header
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },

    // Toggle mobile navigation menu
    toggleNav() {
      const nav = document.querySelector(".nav");
      nav.classList.toggle("active");
    },

    // Close mobile navigation menu
    closeNav() {
      const nav = document.querySelector(".nav");
      nav.classList.remove("active");
    },

    toggleCard(index) {
      this.methodology[index].isOpen = !this.methodology[index].isOpen;
    },
  },
};
</script>

<style>
/* ======================================
   1. GLOBAL RESET & ROOT VARIABLES
====================================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

:root {
  --light-coffee: #ffffff; /* Cafe claro */
  --strong-coffee: #a4937f; /* Cafe fuerte */
  --variant1: #968877; /* Variante 1 */
  --variant2: #6d6150; /* Variante 2 */
}

/* ======================================
   2. GLOBAL LAYOUT
====================================== */
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* changed from 100vb to 100vh */
  font-family: "Arial", sans-serif;
  color: var(--variant2);
  background-color: var(--light-coffee);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* ======================================
   3. HEADER
====================================== */
.header {
  background-color: var(--strong-coffee);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, padding 0.3s ease;
}

.header.scrolled {
  background-color: rgba(
    164,
    147,
    127,
    0.9
  ); /* Slightly transparent background */
  padding: 10px 30px; /* Reduce padding on scroll */
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--light-coffee);
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05); /* Slightly enlarge the logo on hover */
}

/* ======================================
   4. NAVIGATION
====================================== */
.nav ul {
  list-style: none;
  display: flex;
  gap: 25px; /* Increase gap between links */
}

.nav a {
  color: var(--light-coffee);
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--light-coffee);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.nav a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.nav a:hover {
  color: var(--variant2);
}

/* Mobile Menu Overlay */
.nav.active::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

.nav.active ul {
  z-index: 999;
}

/* ======================================
   5. HERO SECTION
====================================== */
.hero {
  background: url("/src/assets/braille.jpg") no-repeat center center/cover;
  height: 60vh;
  min-height: 350px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.overlay {
  background-color: rgba(254, 254, 254, 0.85);
  padding: 20px;
  text-align: center;
  border-radius: 10px;
}

.overlay h1 {
  font-size: 1.8rem;
  color: var(--variant1);
}

.overlay p {
  font-size: 1.2rem;
  color: var(--variant2);
}

/* ======================================
   6. ABOUT SECTION
====================================== */
.about {
  flex: 1;
  background-color: var(--variant1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  width: 100%; /* ensure % is specified */
  text-align: center;
  color: var(--light-coffee);
}

.about h2 {
  font-size: 2rem;
  color: var(--light-coffee);
}

.about p {
  color: #ffffff;
  font-size: 1.5rem;
  max-width: 600px;
  margin: 10px auto;
}

/* ======================================
   7. BUTTONS
====================================== */
.btn {
  background-color: var(--variant2);
  color: var(--light-coffee);
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 15px;
}

.btn:hover {
  background-color: var(--strong-coffee);
}

/* ======================================
   8. INFORMATION SECTION
====================================== */
.information-content {
  padding: 50px 20px;
  background-color: var(--light-coffee);
}

.information h2 {
  font-size: 2.5rem;
  color: var(--variant2);
  text-align: center;
  margin-bottom: 1rem;
}

.subheading {
  font-size: 1.2rem;
  color: var(--variant1);
  text-align: center;
  margin-bottom: 3rem;
}

/* Cards */
.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.info-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* ===== RESEARCH SECTION ===== */
.research-section {
  padding: 4rem 2rem;
  background: var(--light-coffee);
}

.research-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 3rem;
}

.research-main h2 {
  font-size: 2.2rem;
  color: var(--variant2);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: var(--variant1);
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

/* Tabs System */
.research-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.research-tabs button {
  background: none;
  border: 2px solid var(--strong-coffee);
  color: var(--variant2);
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.research-tabs button.active {
  background: var(--strong-coffee);
  color: white;
}

.research-tabs button:hover {
  transform: translateY(-2px);
}

/* Tab Content */
.tab-content {
  border-left: 3px solid var(--strong-coffee);
  padding-left: 2rem;
}

.tab-content h3 {
  font-size: 1.4rem;
  color: var(--variant2);
  margin-bottom: 1rem;
}

.tab-content p {
  line-height: 1.8;
  color: var(--variant2);
  opacity: 0.9;
}

/* Right Sidebar */
.research-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-card, .timeline-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.stats-card h4, .timeline-card h4 {
  color: var(--variant2);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-item i {
  font-size: 1.5rem;
  color: var(--strong-coffee);
  width: 40px;
  text-align: center;
}

.stat-item span {
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--variant2);
}

.stat-item p {
  color: var(--variant1);
  font-size: 0.9rem;
  margin-top: 0.3rem;
}

/* Timeline */
.timeline-step {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: center;
}

.step-marker {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--strong-coffee);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.timeline p {
  color: var(--variant2);
  line-height: 1.4;
}

/* Animations */
.fade-in {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 768px) {
  .research-container {
    grid-template-columns: 1fr;
  }
  
  .research-tabs button {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
  
  .tab-content {
    padding-left: 1rem;
  }
}

/* ======================================
   9. NECESSITY SECTION
====================================== */
.necessity-section {
  background: rgba(255, 255, 255, 0.9);
  padding: 4rem 2rem;
  margin: 3rem 0;
  border-radius: 15px;
}

.necessity-content {
  max-width: 1200px;
  margin: 0 auto;
}

.necessity-chart {
  display: grid;
  gap: 1.5rem;
  margin: 3rem 0;
}

.chart-bar {
  background: var(--variant1);
  height: 50px;
  border-radius: 25px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.chart-bar:hover {
  transform: scale(1.02);
}

.chart-label {
  color: white;
  font-weight: bold;
  z-index: 1;
}

.chart-bar::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--variant2);
  border-radius: 25px;
}

/* Match the bar widths */
.chart-bar:nth-child(1)::before {
  width: 70%;
}
.chart-bar:nth-child(2)::before {
  width: 85%;
}
.chart-bar:nth-child(3)::before {
  width: 60%;
}

.necessity-text {
  text-align: center;
  margin-top: 2rem;
}

.necessity-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.necessity-list li {
  background: var(--light-coffee);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon {
  font-size: 1.5rem;
}

.chart-source {
  font-size: 0.9rem;
  color: var(--variant1);
  margin-top: 1rem;
}

/* ======================================
   10. FEATURE SECTION
====================================== */
.feature-section {
  display: flex;
  gap: 3rem;
  align-items: center;
  margin: 4rem 0;
}

.feature-text {
  flex: 1;
  max-width: 60%; /* Adjust as needed */
}

.feature-text h3 {
  font-size: 2rem;
  color: var(--variant2);
  margin-bottom: 1.5rem;
}

.feature-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--variant2);
  margin-bottom: 1.5rem;
}

.feature-image {
  flex: 1;
  max-width: 40%; /* Adjust as needed */
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.accessible-image {
  width: 100%;
  height: auto;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.accessible-image:hover {
  transform: scale(1.05); /* Slight zoom effect on hover */
}

.accessible-graphic {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--variant1), var(--variant2));
  opacity: 0.8;
}

.feature-list {
  list-style: none;
  padding-left: 0;
}

.feature-list li {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-list li strong {
  font-size: 1.2rem;
  color: var(--variant2);
}

/* ======================================
   11. TEAM SECTION
====================================== */
.team-section {
  background: var(--strong-coffee);
  padding: 3rem 2rem;
  border-radius: 15px;
  margin-top: 4rem;
  text-align: center;
}

.team-members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.team-member {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  padding: 1rem;
}
.team-member:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.member-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--light-coffee);
  margin: 0 auto 1rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.team-member:hover .member-image {
  transform: scale(1.1);
  border-color: var(--variant2);
}

.member-info {
  padding: 1rem;
}

.member-role {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--variant2);
  font-size: 1.1rem;
}

.member-name {
  color: var(--variant2);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.member-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.member-social a {
  color: var(--variant2);
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.member-social a:hover {
  color: var(--strong-coffee);
}



/* ======================================
   15. METHODOLOGY SECTION
====================================== */
.methodology-section {
  background-color: var(--light-coffee);
  padding: 4rem 2rem;
  text-align: center;
}

.methodology-section h2 {
  font-size: 2.5rem;
  color: var(--variant2);
  margin-bottom: 1rem;
}

.subheading {
  font-size: 1.2rem;
  color: var(--variant1);
  margin-bottom: 3rem;
}

.methodology-cards {
  max-width: 800px;
  margin: 0 auto;
}

.methodology-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.methodology-card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  background-color: var(--strong-coffee);
  color: var(--light-coffee);
}

.card-header h3 {
  font-size: 1.2rem;
  margin: 0;
}

.card-header i {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.card-content {
  max-height: 0;
  overflow: hidden;
  padding: 0 1.5rem;
  transition: max-height 0.5s ease, padding 0.5s ease;
}

.card-content.open {
  max-height: 500px; /* Adjust based on content */
  padding: 1.5rem;
}

.card-content p {
  font-size: 1rem;
  color: var(--variant2);
  line-height: 1.6;
}
/* ======================================
   12. HAMBURGER MENU
====================================== */
.hamburger {
  display: none; /* Hide by default on larger screens */
  font-size: 1.5rem;
  color: var(--light-coffee);
  cursor: pointer;
}

/* ======================================
   13. RESPONSIVE STYLES (MEDIA QUERIES)
====================================== */

/* --- General Mobile Adjustments --- */
@media (max-width: 768px) {
  /* MOBILE CHART BARS */
  .chart-bar {
    height: 40px;
    font-size: 0.9rem;
  }

  .necessity-list {
    grid-template-columns: 1fr;
  }
}

/* --- Navigation for Mobile --- */
@media (max-width: 768px) {
  .hamburger {
    display: block; /* Show the hamburger icon on small screens */
  }

  .hamburger.active i::before {
    content: "\f00d"; /* Font Awesome "X" icon */
  }

  .nav ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: var(--strong-coffee);
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  .nav.active::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .nav.active ul {
    display: flex; /* Show the nav links when active */
  }
}

/* --- Feature Section Mobile Adjustments --- */
@media (max-width: 768px) {
  .feature-section {
    flex-direction: column;
  }

  .feature-text,
  .feature-image {
    max-width: 100%;
  }

  .feature-image {
    order: -1; /* Move the image above the text on small screens */
    margin-bottom: 2rem;
  }

  .information h2 {
    font-size: 2rem;
  }
}
</style>
