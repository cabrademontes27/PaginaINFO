<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  />
  <div class="home-container">
    <HeaderBar />

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

    <!-- Research, Innovation, Team -->
    <section class="information">
      <ResearchSection
        :researchTabs="researchTabs"
        :activeTab="activeTab"
        :documents="documents"
        :curiosities="curiosities"
        @document-selected="handleDocumentSelect"
      />

      <InnovationSection />
      <TeamSection :members="teamMembers" />
    </section>

    <!-- Footer -->
    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from "../components/HeaderBar.vue";
import ResearchSection from "../components/ResearchSection.vue";
import InnovationSection from "../components/Innovation.vue";
import TeamSection from "../components/TeamSection.vue";
import FooterBar from "../components/FooterBar.vue";

import AlejandraImg from '../assets/Alejandra.jpeg';
import GermanImg from '../assets/Perfil_german.png';
import AuroraImg from '../assets/Aurora.jpeg';

export default {
  name: "Home",
  components: {
    HeaderBar,
    ResearchSection,
    InnovationSection,
    TeamSection,
    FooterBar,
  },
  data() {
    return {
      teamMembers: [
        {
           name: "Alejandra Bautista Ortiz",
            role: "Estudiante de ingeniería de software",
            image: AlejandraImg,
        },
        {
          name: "Luis German Cabrera Monteros",
          role: "Estudiante de ingeniería de software",
          image: GermanImg,
        },
        {
          name: "Caamaño Orozco Esmeralda Aurora",
          role: "Estudiante de contaduría",
          image: AuroraImg,
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
            "Se aplicaron dos cuestionarios de tipo Likert a 250 personas. Se midieron factores como adaptación, accesibilidad, utilidad y costo-beneficio. Los datos fueron recolectados a través de encuestas en línea y entrevistas directas​.",
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
      ],
      documents: [
        {
          title: "Plan de Negocio.pdf",
          type: "pdf",
          url: "/Documents/PlanDeNegocios.pdf",
          thumbnail: "/documents/reporte-final.jpg",
        },
        {
          title: "Cuestionario de Evaluación.pdf",
          type: "pdf",
          url: "/Documents/CuestionarioEvalu.pdf",
        },
        {
          title: "Reporte Científico.pdf",
          type: "pdf",
          url: "/Documents/ReporteCientifico.pdf",
        },
      ],
      curiosities: [
        {
          icon: "fas fa-brain",
          stat: "30%",
          text: "del cerebro se activa al procesar información táctil en personas con discapacidad visual.",
        },
        {
          icon: "fas fa-globe",
          stat: "285M",
          text: "de personas en el mundo tienen discapacidad visual, según la OMS.",
        },
        {
          icon: "fas fa-book",
          stat: "1.5x",
          text: "más rápido es el aprendizaje del braille en niños que en adultos.",
        },
        {
          icon: "fas fa-hand-holding-heart",
          stat: "80%",
          text: "de los casos de discapacidad visual son prevenibles o tratables.",
        },
        {
          icon: "fas fa-lightbulb",
          stat: "90%",
          text: "de las personas con discapacidad visual usan un smartphone como herramienta principal.",
        },
        {
          icon: "fas fa-users",
          stat: "2x",
          text: "más probabilidades tienen las personas con discapacidad visual de vivir en pobreza.",
        },
      ],
    };
  },
  methods: {
    handleDocumentSelect(document) {
      console.log("Documento seleccionado:", document);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

:root {
  --light-coffee: #ffffff;
  --strong-coffee: #a4937f;
  --variant1: #968877;
  --variant2: #6d6150;
}

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
}

.vision-text {
  font-size: 1.5rem;
  max-width: 600px;
  margin: 10px auto;
  color: var(--light-coffee); /* ✅ Esto asegura que el texto sea blanco */
}


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

/* ===============================
   Curiosities Card actualizado
================================ */
.curiosities-card {
  background: linear-gradient(135deg, var(--variant1) 0%, var(--variant2) 100%);
  color: #ffffff;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
  opacity: 0.9;
  color: #ffffff;
}

.curiosity-item span {
  font-size: 1.6rem;
  font-weight: bold;
  color: #ffffff;
}

.curiosity-item p {
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 0;
  color: #ffffff !important;
}

.curiosity-item:hover {
  transform: translateX(10px);
  opacity: 0.9;
}

.information-content {
  padding: 0 2rem;
  box-sizing: border-box;
}

.information {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

</style>

