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
          <li><a href="#home" @click="closeNav">Inicio</a></li>
          <li><a href="#Innovation" @click="closeNav">Innovacion</a></li>
          <li><a href="#investigation" @click="closeNav">Investigaciones</a></li>
          <li>
            <router-link to="/buscame" @click="closeNav">Buscame</router-link>
          </li>
          <li>
            <router-link to="/aprender-a-jugar" @click="closeNav"
              >Aprende Braille</router-link
            >
          </li>
          <li><a href="#team" @click="closeNav">Nosotros</a></li>
        </ul>
      </nav>
    </header>

    <!-- Hero Section -->
    <div class="main-content">
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
      <!-- Methodology / Research -->
      <section class="research-section" aria-label="Investigación y metodología">
        <div class="research-container">
          <!-- Left Column - Text Content -->
          <div id="investigation" class="research-main">
            <h2>Metodología Científica</h2>
            <p class="section-subtitle">
              Un enfoque estructurado para la innovación accesible
            </p>

            <!-- Interactive Tabs -->
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
              <div
                v-for="(tab, index) in researchTabs"
                :key="index"
                v-show="activeTab === index"
                class="fade-in"
              >
                <h3>{{ tab.subtitle }}</h3>
                <p>{{ tab.content }}</p>
              </div>
            </div>

            <!-- Document Folder Component -->
            <MiniaturaDePestañaDeDocumentos
              :documents="documents"
              @document-selected="handleDocumentSelect"
            />
          </div>

          <!-- Right Column - Datos Curiosos -->
          <div class="research-sidebar">
            <div class="curiosities-card">
              <h4>Datos Curiosos</h4>

              <div class="curiosity-item">
                <i class="fas fa-brain"></i>
                <div>
                  <span>30%</span>
                  <p>
                    del cerebro se activa al procesar información táctil en
                    personas con discapacidad visual.
                  </p>
                </div>
              </div>

              <div class="curiosity-item">
                <i class="fas fa-globe"></i>
                <div>
                  <span>285M</span>
                  <p>
                    de personas en el mundo tienen discapacidad visual, según la
                    OMS.
                  </p>
                </div>
              </div>

              <div class="curiosity-item">
                <i class="fas fa-book"></i>
                <div>
                  <span>1.5x</span>
                  <p>
                    más rápido es el aprendizaje del braille en niños que en
                    adultos.
                  </p>
                </div>
              </div>

              <div class="curiosity-item">
                <i class="fas fa-hand-holding-heart"></i>
                <div>
                  <span>80%</span>
                  <p>
                    de los casos de discapacidad visual son prevenibles o
                    tratables.
                  </p>
                </div>
              </div>

              <div class="curiosity-item">
                <i class="fas fa-lightbulb"></i>
                <div>
                  <span>90%</span>
                  <p>
                    de las personas con discapacidad visual usan un smartphone
                    como herramienta principal.
                  </p>
                </div>
              </div>

              <div class="curiosity-item">
                <i class="fas fa-users"></i>
                <div>
                  <span>2x</span>
                  <p>
                    más probabilidades tienen las personas con discapacidad
                    visual de vivir en pobreza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features / Innovations Section -->
      <section class="feature-section" aria-label="Características principales">
        <div id="Innovation" class="feature-text">
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

        <div class="feature-image">
          <img
            src="/src/assets/PruebaEjemplo.jpg"
            alt="Representación visual de tecnología accesible"
            class="accessible-image"
          />
        </div>
      </section>

      <!-- Team Section -->
      <section id="team" class="team-section" aria-label="Conoce nuestro equipo">
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
    </section>
  </div>
</template>
<script>
import MiniaturaDePestañaDeDocumentos from "../components/MiniaturaDePestañaDeDocumentos.vue";

export default {
  name: "Home",
  components: {
    MiniaturaDePestañaDeDocumentos,
  },
  data() {
    return {
      isScrolled: false, // Used to handle scroll-based header style
      teamMembers: [
        {
          name: "Alejandra Bautista Ortiz",
          role: "Estudiante de ingeniería de software",
          image: "/src/assets/Alejandra.jpeg",
        },
        {
          name: "Luis German Cabrera Monteros",
          role: "Estudiante de ingeniería de software",
          image: "/src/assets/Perfil_german.png",
        },
        {
          name: "Caamaño Orozco Esmeralda Aurora",
          role: "Estudiantes de contaduria",
          image: "/src/assets/Aurora.jpeg",
        },
      ],
      activeTab: 0,
      researchTabs: [
        {
          title: "Problema",
          subtitle: "Planteamiento del Problema",
          content:
            "El proyecto INVISIGNS surge debido a la falta de herramientas accesibles para personas con discapacidad visual . Se identificó que estas poblaciones enfrentan barreras en la educación, el trabajo y la vida diaria debido a la escasez de productos adaptados, lo que limita su autonomía. La falta de tecnologías accesibles y asequibles agrava el problema, haciendo necesario el desarrollo de soluciones innovadoras como KeySens y la aplicación Voz Amiga, que buscan facilitar la interacción con dispositivos tecnológicos​",
        },
        {
          title: "Literatura",
          subtitle: "Revisión de la Literatura",
          content:
            "Se analizaron estudios previos sobre accesibilidad tecnológica y discapacidad visual/auditiva. Investigaciones como las de SAGE Journals (2017) y el Parlamento Europeo (2018) destacan la falta de estándares claros para la implementación de tecnologías inclusivas. Se identificaron avances en software basado en voz y dispositivos adaptativos como posibles soluciones​",
        },
        {
          title: "Diseño",
          subtitle: "Diseño de Investigación",
          content:
            "Se empleó un enfoque cuantitativo, de tipo descriptivo y de corte transversal. Se desarrollaron cuestionarios para analizar la percepción de usuarios sobre accesibilidad y funcionalidad de productos inclusivos. Se propuso la aplicación Voz Amiga como complemento de los productos físicos, siguiendo una metodología estructurada en fases: planeación, diseño, desarrollo y despliegue​.",
        },
        {
          title: "Recopilación",
          subtitle: "Recopilación de Datos",
          content:
            "Se aplicaron dos cuestionarios de tipo Likert a 250 personas. Se midieron factores como adaptación, accesibilidad, utilidad y costo-beneficio. Los datos fueron recolectados a través de encuestas en línea y entrevistas directas​",
        },
        {
          title: "Análisis",
          subtitle: "Análisis de Datos",
          content:
            "Se calcularon estadísticos descriptivos sobre la aceptación y percepción de los productos. Se utilizó el coeficiente Alfa de Cronbach para medir la confiabilidad de los cuestionarios, obteniendo valores de 0.91 y 0.87. Los resultados indicaron que el 75.4% de los participantes consideró que un software de asistencia por voz mejoraría su autonomía​.",
        },
        {
          title: "Conclusiones",
          subtitle: "Elaboración de conclusiones",
          content:
            "Se confirmó la necesidad de mejorar la accesibilidad digital. Se validó que la combinación de productos físicos (KeySens) con software de asistencia (Voz Amiga) representa una solución viable. Se concluyó que la educación y la sensibilización sobre inclusión tecnológica son clave para la adopción de estas herramientas​",
        },
        {
          title: "Divulgación científica",
          subtitle: "Divulgación",
          content:
            "El proyecto INVISIGNS fue presentado en la Universidad Veracruzana como parte de un reporte científico avanzado. Se publicaron los hallazgos en una página web y redes sociales para promover el conocimiento sobre accesibilidad. Se realizaron alianzas con instituciones educativas para la distribución de los productos y su implementación en programas de inclusión",
        },

        // Add more tabs as needed
      ],
      timelineSteps: [
        "Identificación de necesidades",
        "Revisión bibliográfica",
        "Diseño de solución",
        "Desarrollo tecnológico",
        "Validación con usuarios",
        "Implementación final",
      ],
      documents: [
  {
    title: "Plan de Negocio.pdf",
    type: "pdf",
    url: "/Documents/PlanDeNegocios.pdf", // Correct path to the file
    thumbnail: "/documents/reporte-final.jpg", // Optional: Add a thumbnail if needed
  },
  {
    title: "Cuestionario de Evaluación.pdf",
    type: "pdf",
    url: "/Documents/CuestionarioEvalu.pdf", // Correct path to the file
  },
  {
    title: "Reporte Científico.pdf",
    type: "pdf",
    url: "/Documents/ReporteCientifico.pdf", // Correct path to the file
  },
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

    handleDocumentSelect(document) {
      // Handle document selection
      console.log("Selected document:", document);
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
  min-height: 100vh;
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
  background-color: rgba(164, 147, 127, 0.9);
  padding: 10px 30px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--light-coffee);
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

/* ======================================
   4. NAVIGATION
====================================== */
.hamburger {
  display: none;
  font-size: 1.5rem;
  color: var(--light-coffee);
  cursor: pointer;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 25px;
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
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: var(--strong-coffee);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
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
  width: 100%;
  text-align: center;
  color: var(--light-coffee);
}

.about h2 {
  font-size: 2rem;
  color: var(--light-coffee);
}

.vision-text {
  color: var(--light-coffee);
  font-size: 1.5rem;
  max-width: 600px;
  margin: 10px auto;
}

/* Vision Stats */
.vision-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: var(--light-coffee);
}

.stat-label {
  font-size: 1rem;
  color: #ffffff;
}

/* ======================================
   7. INFORMATION SECTION
====================================== */
.information-content {
  padding: 50px 20px;
  background-color: var(--light-coffee);
}

.information {
  aria-label: Información general;
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

.curiosities-card {
  background: linear-gradient(135deg, var(--variant1) 0%, var(--variant2) 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.curiosities-card h4 {
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.curiosity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.curiosity-item i {
  font-size: 1.8rem;
  width: 40px;
  text-align: center;
  color: white;
  opacity: 0.9;
}

.curiosity-item span {
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
}

.curiosity-item p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 0;
}

.curiosity-item:hover {
  transform: translateX(10px);
  opacity: 0.9;
}

/* Animations */
.fade-in {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive (Research Section) */
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
   8. FEATURE SECTION
====================================== */
.feature-section {
  display: flex;
  gap: 3rem;
  align-items: center;
  margin: 4rem 0;
}

.feature-text {
  flex: 1;
  max-width: 60%;
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
  max-width: 40%;
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
  transform: scale(1.05);
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

/* Mobile Adjustments for Feature Section */
@media (max-width: 768px) {
  .feature-section {
    flex-direction: column;
  }
  .feature-text,
  .feature-image {
    max-width: 100%;
  }
  .feature-image {
    order: -1;
    margin-bottom: 2rem;
  }
}

/* ======================================
   9. TEAM SECTION
====================================== */
.team-section {
  background: var(--strong-coffee);
  padding: 3rem 2rem;
  border-radius: 15px;
  margin-top: 4rem;
  text-align: center;
}

.team-description {
  color: var(--light-coffee);
  max-width: 700px;
  margin: 0.5rem auto 2rem auto;
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
  color: var(--light-coffee);
}

/* ======================================
   10. RESPONSIVE NAVIGATION
====================================== */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
}
</style>