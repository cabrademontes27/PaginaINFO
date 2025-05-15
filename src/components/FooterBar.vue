<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <h2>INVISINGS</h2>
        <p class="tagline">Innovando en accesibilidad para todos.</p>
      </div>

      <div class="footer-section">
        <h3>Enlaces Rápidos</h3>
        <ul>
          <li>
            <router-link :to="{ path: '/', hash: '#home' }" @click.native="handleHomeScroll">
              Inicio
            </router-link>
          </li>
          <li><router-link to="/aprender-a-jugar">Aprender Braille</router-link></li>
          <li><router-link to="/register">Registro</router-link></li>
          <li><router-link to="/buscame">Búscame</router-link></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contacto</h3>
        <ul>
          <li><a href="mailto:contacto@invisings.org">contacto@invisings.org</a></li>
          <li><a href="tel:+521234567890">+52 938 184 3392</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 <strong>INVISINGS</strong>. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>



<script>
export default {
  methods: {
    handleHomeScroll() {
      // Esperamos un poco para que la navegación se complete si cambia de ruta
      setTimeout(() => {
        const el = document.getElementById("home");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    }
  }
};
</script>




<style scoped>
.footer {
  background-color: var(--variant2);
  color: var(--light-coffee);
  padding: 3rem 2rem 1rem;
  font-size: 0.95rem;
  margin-top: 4rem;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-brand h2 {
  font-size: 1.8rem;
  color: var(--light-coffee);
  margin-bottom: 0.5rem;
}

.footer-brand .tagline {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

.footer-section h3 {
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  color: var(--light-coffee);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 0.4rem;
}

.footer-section a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: var(--light-coffee);
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  margin-top: 2.5rem;
  font-size: 0.85rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
  color: #ffffff !important;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.footer-bottom p {
  color: var(--light-coffee) !important;
  font-weight: 500;
}





@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .footer-section {
    margin-top: 1.5rem;
  }
}


</style>
