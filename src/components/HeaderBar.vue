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

        <li v-if="user">
          <div class="user-menu" @click.stop="toggleDropdown">
            <button class="user-name">{{ user.name }}</button>
            <div v-if="dropdownVisible" class="dropdown">
              <router-link to="/perfil" @click="closeDropdown">Mi perfil</router-link>
              <router-link to="/familiar" @click="closeDropdown">Familiar</router-link>
              <button @click="logout">Cerrar sesión</button>
            </div>
          </div>
        </li>

        <li v-else>
          <router-link to="/login" class="register-btn" @click="closeNav">Ingresar</router-link>
        </li>
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
      user: null,
      dropdownVisible: false,
    };
  },
  created() {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("click", this.onClickOutside);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("click", this.onClickOutside);
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
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    },
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    closeDropdown() {
      this.dropdownVisible = false;
    },
    onClickOutside(e) {
      const menu = this.$el.querySelector(".user-menu");
      if (this.dropdownVisible && menu && !menu.contains(e.target)) {
        this.dropdownVisible = false;
      }
    },
    logout() {
      this.closeDropdown();
      localStorage.removeItem("user");
      this.user = null;
      this.$router.push("/");
    }
  }
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
  top: 0; left: 0; width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: background-color 0.3s, padding 0.3s;
}
.header.scrolled {
  background-color: rgba(164,147,127,0.9);
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
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--light-coffee);
  text-decoration: none;
  font-weight: bold;
  position: relative;
  transition: color 0.3s;
}
.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -5px; left: 0;
  width: 100%; height: 2px;
  background: var(--light-coffee);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s;
}
.nav-links a:hover {
  color: var(--variant2);
}
.nav-links a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.register-btn {
  border: 2px solid var(--light-coffee);
  color: var(--light-coffee);
  padding: 8px 14px;
  border-radius: 25px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}
.register-btn:hover {
  background: var(--light-coffee);
  color: var(--variant2);
}

.nav.active .nav-links {
  flex-direction: column;
  position: absolute;
  top: 60px; right: 20px;
  background: var(--strong-coffee);
  padding: 10px; border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  display: flex;
}

@media (max-width: 768px) {
  .hamburger { display: block; }
  .nav-links { display: none; }
  .nav.active .nav-links { display: flex; }
}

/* ── User dropdown ────────────────────────────────────────────────────────── */
.user-menu {
  position: relative;
}
.user-name {
  background: var(--variant2);
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}
.user-name:hover {
  background: var(--variant1);
}
.dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: rgba(30,30,30,0.95);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  padding: 0.5rem 0;
  min-width: 160px;
  z-index: 2000;
}
.dropdown::before {
  content: "";
  position: absolute;
  top: -6px; right: 12px;
  border: 6px solid transparent;
  border-bottom-color: rgba(30,30,30,0.95);
}
.dropdown a,
.dropdown button {
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 16px;
  font-size: 0.95rem;
  color: #eee;
  background: none;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
.dropdown a:hover,
.dropdown button:hover {
  background: rgba(255,255,255,0.1);
}
</style>
