<template>
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
          <strong>🦯 Funcionalidad para ubicación en tiempo real:</strong><br />
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
</template>

<script>
export default {
  name: "InnovationSection",
};
</script>

<style scoped>
.feature-section {
  display: flex;
  gap: 3rem;
  align-items: center;
  margin: 4rem 0;
  padding: 0 2rem;
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
</style>