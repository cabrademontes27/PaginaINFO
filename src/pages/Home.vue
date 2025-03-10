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
          <li><a href="#information" @click="closeNav">Información</a></li>
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

  <div id="" class="information-content">
    <section class="information">
      <h2>Nuestra Misión en Invisings</h2>
      <p class="subheading">
        Transformando vidas a través de la tecnología accesible
      </p>

      <div class="info-cards">
        <!-- Mission Card -->
        <div class="info-card">
          <div class="card-icon">👁️♿</div>
          <h3>Innovación para la Independencia</h3>
          <p>
            Desarrollamos soluciones tecnológicas que empoderan a personas con
            discapacidad visual para navegar el mundo con confianza.
          </p>
        </div>

        <!-- Technology Card -->
        <div class="info-card">
          <div class="card-icon">📱🌐</div>
          <h3>Tecnología Inclusiva</h3>
          <p>
            Nuestros productos utilizan sistemas de audio avanzados, vibración
            táctil y compatibilidad completa con lectores de pantalla.
          </p>
        </div>

        <!-- Community Card -->
        <div class="info-card">
          <div class="card-icon">🤝❤️</div>
          <h3>Compromiso con la Comunidad</h3>
          <p>
            Trabajamos directamente con usuarios finales para asegurar que cada
            solución cumple con sus necesidades reales.
          </p>
        </div>
      </div>

      <div class="necessity-section">
        <div class="necessity-content">
          <h3>¿Por qué es esencial nuestra innovación?</h3>

          <!-- Graphic Chart -->
          <div class="necessity-chart">
            <div class="chart-bar" style="width: 70%">
              <div class="chart-label">
                70% Mayor riesgo de aislamiento social
              </div>
            </div>
            <div class="chart-bar" style="width: 85%">
              <div class="chart-label">
                85% Dificultad en transporte público
              </div>
            </div>
            <div class="chart-bar" style="width: 60%">
              <div class="chart-label">
                60% Limitado acceso a información médica
              </div>
            </div>
          </div>

          <!-- Necessity Text -->
          <div class="necessity-text">
            <p>
              Las estadísticas muestran que las personas con discapacidad visual
              enfrentan:
            </p>
            <ul class="necessity-list">
              <li><span class="icon">⚠️</span>Barreras diarias en movilidad</li>
              <li>
                <span class="icon">📉</span>Limitadas oportunidades laborales
              </li>
              <li>
                <span class="icon">💊</span>Dificultad en gestión médica
                independiente
              </li>
            </ul>
            <p class="chart-source">
              Fuente: Estudio de Accesibilidad Global 2023
            </p>
          </div>
        </div>
      </div>

      <!-- Feature Section -->
      <div class="feature-section">
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

        <!-- Feature Image -->
        <div class="feature-image">
          <img
            src="/src/assets/PruebaEjemplo.jpg"
            alt="Representación visual de tecnología accesible para personas con discapacidad visual"
            class="accessible-image"
          />
        </div>
      </div>

      <!-- Team Section -->
      <div id="team" class="team-section">
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
      </div>
    </section>
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
  },
};
</script>

<style>
/* ------------------------------------------------------
   Remove "scoped" to ensure :root variables are global
------------------------------------------------------- */

/* Coffee Color Palette */
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

/* General Styles */
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vb;
  font-family: "Arial", sans-serif;
  color: var(--variant2);
  background-color: var(--light-coffee);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  background-color: var(--strong-coffee);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  position: fixed; /* Make the navbar fixed */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure it stays on top */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  transition: background-color 0.3s ease, padding 0.3s ease; /* Smooth transitions */
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
  transform: scaleX(0); /* Start with no underline */
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.nav a:hover::after {
  transform: scaleX(1); /* Show underline on hover */
  transform-origin: bottom left;
}

.nav a:hover {
  color: var(--variant2); /* Change text color on hover */
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
  z-index: 998; /* Ensure it's below the nav but above other content */
}

.nav.active ul {
  z-index: 999; /* Ensure the menu is above the overlay */
}

/* Hero Section */
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

/* About Section */
.about {
  flex: 1;
  background-color: var(--variant1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  width: 100;
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
}

.feature-list li strong {
  font-size: 1.2rem;
  color: var(--variant2);
}

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
  width: 150px; /* Fixed size for consistency */
  height: 150px; /* Fixed size for consistency */
  object-fit: cover; /* Ensures the image covers the area without distortion */
  border-radius: 50%; /* Makes the image circular */
  border: 4px solid var(--light-coffee); /* Adds a border */
  margin: 0 auto 1rem; /* Centers the image and adds space below */
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.team-member:hover .member-image {
  transform: scale(1.1); /* Slightly enlarges the image on hover */
  border-color: var(--variant2); /* Changes border color on hover */
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
  gap: 1rem; /* Space between icons */
  margin-top: 1rem; /* Space above the icons */
}

.member-social a {
  color: var(--variant2); /* Icon color */
  font-size: 1.2rem; /* Icon size */
  transition: color 0.3s ease;
}

.member-social a:hover {
  color: var(--strong-coffee); /* Icon color on hover */
}

/* Hamburger Menu */
.hamburger {
  display: none; /* Hide by default on larger screens */
  font-size: 1.5rem;
  color: var(--light-coffee);
  cursor: pointer;
}

/* Necessity Section */
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

/* Responsive Adjustments */
@media (max-width: 768px) {
  .chart-bar {
    height: 40px;
    font-size: 0.9rem;
  }

  .necessity-list {
    grid-template-columns: 1fr;
  }
}

/* Responsive Styles */
@media (max-width: 768px) {
  .hamburger {
    display: block; /* Show the hamburger icon on small screens */
  }

  .hamburger.active i::before {
    content: "\f00d"; /* Font Awesome "X" icon */
  }

  .nav ul {
    display: none; /* Hide the nav links by default on small screens */
    flex-direction: column;
    position: absolute;
    top: 60px; /* Adjust based on header height */
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

@media (max-width: 768px) {
  .feature-section {
    flex-direction: column;
  }

  .information h2 {
    font-size: 2rem;
  }
}
</style>
