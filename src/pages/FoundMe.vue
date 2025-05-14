<template>
  <div class="foundme-container">
    <!-- Header simplificado -->
    <header :class="['header', { scrolled: isScrolled }]">
      <div class="logo">
        <span>INVISINGS.</span>
      </div>
      <nav class="nav">
        <ul>
          <li><a href="#home" @click.prevent="goHome">Volver al inicio</a></li>
        </ul>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="construction-content">
      <section class="construction-message">
        <div class="hardhat">🚧</div>
        <h1>¡Ups! Esta sección está en el horno</h1>
        <p class="subtext">
          Estamos trabajando duro para preparar algo increíble. ¡Vuelve pronto
          para descubrir nuestra nueva funcionalidad de localización!
        </p>

        <div class="progress-container">
          <div class="progress-bar" :style="{ width: progress + '%' }"></div>
          <span class="progress-text">{{ progress }}% completado</span>
        </div>

        <div class="fun-message">
          <p>Mientras tanto, ¿por qué no echas un vistazo a nuestras otras funciones?</p>
          <button class="btn" @click="goHome">Descubrir más</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      progress: 72
    };
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
:root {
  --light-coffee: #ffffff;
  --strong-coffee: #a4937f;
  --variant1: #968877;
  --variant2: #6d6150;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Arial", sans-serif;
}

.foundme-container {
  min-height: 100vh;
  background-color: var(--light-coffee);
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  background-color: var(--variant1);
  color: var(--light-coffee);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header.scrolled {
  background-color: var(--variant2);
  transition: background-color 0.3s ease;
}

.logo span {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--light-coffee);
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav a {
  text-decoration: none;
  color: var(--light-coffee);
  font-weight: bold;
  transition: color 0.3s;
}

.nav a:hover {
  color: var(--strong-coffee);
}

.construction-content {
  flex: 1;
  padding: 100px 20px;
  text-align: center;
}

.construction-message {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.hardhat {
  font-size: 4rem;
  margin-bottom: 2rem;
  animation: bounce 2s infinite;
}

h1 {
  color: var(--variant2);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.subtext {
  color: var(--variant1);
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 3rem;
}

.progress-container {
  width: 80%;
  height: 15px;
  background: #eee;
  border-radius: 10px;
  margin: 2rem auto;
  position: relative;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--variant1), var(--strong-coffee));
  border-radius: 10px;
  transition: width 0.5s ease;
}

.progress-text {
  display: block;
  margin-top: 1rem;
  color: var(--variant2);
  font-weight: bold;
}

.fun-message {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px dashed var(--variant1);
  color: var(--variant2);
}

.btn {
  background-color: var(--variant2);
  color: var(--light-coffee);
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  margin-top: 1.5rem;
  transition: transform 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-3px);
  background-color: var(--strong-coffee);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .subtext {
    font-size: 1rem;
  }

  .progress-container {
    width: 100%;
  }

  .construction-message {
    padding: 30px 1rem;
  }
}
</style>
