<template>
  <header :class="['header', { scrolled: isScrolled }]">
    <div class="logo">
      <span>INVISINGS.</span>
    </div>

    <div class="hamburger" @click="toggleNav">
      <i class="fas fa-bars"></i>
    </div>

    <nav class="nav" :class="{ active: isNavActive }">
      <ul class="nav-links">
        <li><a @click.prevent="scrollTo('home')">Inicio</a></li>
        <li><a @click.prevent="scrollTo('investigation')">Investigaciones</a></li>
        
        <li><router-link to="/aprender-a-jugar" @click="closeNav">Aprende Braille</router-link></li>
        <li><a @click.prevent="scrollTo('team')">Nosotros</a></li>
        <li><router-link to="/app-movil" @click="closeNav">App móvil</router-link></li>
      </ul>
      <router-link to="/login" class="register-btn" @click="closeNav">
        Ingresar
      </router-link>
    </nav>
  </header>
</template>

<!-- Script y estilos permanecen igual salvo el botón -->


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

.nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin-right: 1rem;
}

.nav a,
.nav-links a,
.nav-links router-link {
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

.register-btn {
  border: 2px solid var(--light-coffee);
  color: var(--light-coffee);
  padding: 8px 14px;
  border-radius: 25px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.register-btn:hover {
  background-color: var(--light-coffee);
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
  .nav-links {
    display: none;
  }
  .nav.active .nav-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--strong-coffee);
    padding: 10px;
    border-radius: 8px;
  }
  .nav {
    flex-direction: column;
    align-items: flex-end;
  }
  .register-btn {
    margin-top: 10px;
    width: 100%;
    text-align: center;
  }
}
</style>
