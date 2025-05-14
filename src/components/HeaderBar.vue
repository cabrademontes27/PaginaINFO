<template>
  <header :class="['header', { scrolled: isScrolled }]">
    <div class="logo">
      <span>INVISINGS.</span>
    </div>

    <div class="hamburger" @click="toggleNav">
      <i class="fas fa-bars"></i>
    </div>

    <nav class="nav" :class="{ active: isNavActive }">
      <ul>
        <li><a @click.prevent="scrollTo('home')">Inicio</a></li>
        <li><a @click.prevent="scrollTo('Innovation')">Innovación</a></li>
        <li><a @click.prevent="scrollTo('investigation')">Investigaciones</a></li>
        <li><router-link to="/buscame" @click="closeNav">Búscame</router-link></li>
        <li><router-link to="/aprender-a-jugar" @click="closeNav">Aprende Braille</router-link></li>
        <li><a @click.prevent="scrollTo('team')">Nosotros</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      isScrolled: false,
      isNavActive: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleNav() {
      this.isNavActive = !this.isNavActive;
    },
    closeNav() {
      this.isNavActive = false;
    },
    scrollTo(id) {
      this.closeNav();
      this.$nextTick(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
  },
};
</script>

<style scoped>
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
}

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

.nav.active ul {
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: var(--strong-coffee);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .nav ul {
    display: none;
  }
  .nav.active ul {
    display: flex;
  }
}
</style>
