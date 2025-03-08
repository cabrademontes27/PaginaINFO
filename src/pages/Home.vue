<template>
  <div class="home-container">
    <!-- Header Section -->
    <header class="header">
      <div class="logo">
        <span>INVISINGS.</span>
      </div>
      <nav class="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Acerca</a></li>
          <li><a href="#information">informacion</a></li>
          <li><a href="#">Buscame</a></li>
          <li><a href="#">Aprender a jugar</a></li>
          <li><a href="#team">Nosotros</a></li>
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
        <p>Queremos un mundo donde la tecnología sea una herramienta de inclusión, donde cada persona, sin importar sus limitaciones visuales, pueda vivir con autonomía, seguridad y conexión con su entorno.</p>
        <button class="btn">Learn More</button>
      </section>

     
    </div>
  </div>
  <div id="information" class="information-content">
    <section class="information">
      <h2>Nuestra Misión en Invisings</h2>
      <p class="subheading">Transformando vidas a través de la tecnología accesible</p>
      
      <div class="info-cards">
        <!-- Mission Card -->
        <div class="info-card">
          <div class="card-icon">👁️♿</div>
          <h3>Innovación para la Independencia</h3>
          <p>Desarrollamos soluciones tecnológicas que empoderan a personas con discapacidad visual para navegar el mundo con confianza.</p>
        </div>

        <!-- Technology Card -->
        <div class="info-card">
          <div class="card-icon">📱🌐</div>
          <h3>Tecnología Inclusiva</h3>
          <p>Nuestros productos utilizan sistemas de audio avanzados, vibración táctil y compatibilidad completa con lectores de pantalla.</p>
        </div>

        <!-- Community Card -->
        <div class="info-card">
          <div class="card-icon">🤝❤️</div>
          <h3>Compromiso con la Comunidad</h3>
          <p>Trabajamos directamente con usuarios finales para asegurar que cada solución cumple con sus necesidades reales.</p>
        </div>
      </div>

      <!-- Feature Section -->
      <div class="feature-section">
        <div class="feature-text">
          <h3>Nuestras Innovaciones</h3>
          <ul class="feature-list">
            <li>🦯 Funcionalidad para ubicacion en tiempo real</li>
            <li>📖 Lector de medicamentos por camara </li>
            <li>🎧 Asistente por comandos de voz</li>
            <li>📱 Aplicacion con asistente de voz</li>
          </ul>
        </div>
        <div class="feature-image">
          <!-- Add an accessible image here -->
          <div class="accessible-graphic" aria-label="Representación abstracta de tecnología accesible"></div>
        </div>
      </div>

      <!-- Team Section -->
      <div id="team" class="team-section">
        <h3>Conoce Nuestro Equipo</h3>
        <p class="team-description">Un grupo diverso de ingenieros, diseñadores inclusivos y especialistas en accesibilidad comprometidos con hacer la diferencia.</p>
        <div class="team-members">
  <div class="team-member" v-for="(member, index) in teamMembers" :key="index">
    <!-- Add the image here -->
    <img 
      :src="member.image" 
      :alt="`Foto de ${member.name}`" 
      class="member-image"
            />
            <div class="member-info">
              <p class="member-role">{{ member.role }}</p>
              <p class="member-name">{{ member.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        {
          name: "Alejandra Bautista Ortiz",
          role: "Estudiante de ingenieria de software",
          image: "/src/assets/braille.jpg", // Path to the image
        },
        {
          name: "Luis German Cabrera Monteros",
          role: "Estudiante de ingenieria de software",
          image: "/src/assets/Perfil_german.png", // Path to the image
        },
        {
          name: "Aurora",
          role: "Especialista en Braille",
          image: "/src/assets/team/juan.jpg", // Path to the image
        },
      ],
    };
  },
};
</script>

<style>
/* ------------------------------------------------------
   Remove "scoped" to ensure :root variables are global
------------------------------------------------------- */

/* Coffee Color Palette */
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html{
  scroll-behavior: smooth;
}

:root {
  --light-coffee: #ffffff; /* Cafe claro */
  --strong-coffee: #a4937f; /* Cafe fuerte */
  --variant1: #968877;      /* Variante 1 */
  --variant2: #6d6150;      /* Variante 2 */
}

/* General Styles */
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vb;
  font-family: 'Arial', sans-serif;
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
  padding: 20px 30px;
}

.logo {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--light-coffee);
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 15px;
}

.nav a {
  color: var(--light-coffee);
  text-decoration: none;
  font-weight: bold;
}

.nav a:hover {
  text-decoration: underline;
}

/* Hero Section */
.hero {
  background: url('/src/assets/braille.jpg') no-repeat center center/cover;
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
  margin: 4rem 0;
  align-items: center;
}

.feature-text {
  flex: 1;
}

.feature-image {
  flex: 1;
  height: 300px;
  background: var(--variant1);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
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
  padding: 1rem;
  margin: 0.5rem 0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.team-section {
  background: var(--strong-coffee);
  padding: 3rem 2rem;
  border-radius: 15px;
  margin-top: 4rem;
}

.team-members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.team-member {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  overflow: hidden;
}

.member-image {
  transition: transform 0.3s ease;
  width: 100%; /* Make the image fill the card width */
  height: 200px; /* Fixed height for consistency */
  object-fit: cover; /* Ensures the image covers the area without distortion */
  border-radius: 10px 10px 0 0; /* Rounded corners at the top */
}
.team-member:hover .member-image {
  transform: scale(1.05); /* Slightly enlarge the image on hover */
}

.member-info {
  padding: 1.5rem;
  color: var(--variant2);
}

.member-role {
  font-weight: bold;
  margin-bottom: 0.5rem;
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
