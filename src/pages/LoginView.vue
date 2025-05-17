<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Inicia Sesión</h2>
      <p class="subtitle">Accede a tu cuenta para continuar</p>

      <form @submit.prevent="handleLogin">
        <label>
          Correo electrónico
          <input type="email" v-model="form.email" required />
        </label>

        <label>
          Contraseña
          <input type="password" v-model="form.password" required />
        </label>

        <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>

        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? "Ingresando..." : "Entrar" }}
        </button>
      </form>

      <router-link to="/register" class="register-link">
        ¿No tienes cuenta? <strong>Regístrate aquí</strong>
      </router-link>

      <router-link to="/" class="home-link">
        <i class="fas fa-arrow-left"></i> Volver al inicio
      </router-link>
    </div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "LoginView",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      isSubmitting: false,
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      this.isSubmitting = true;
      this.errorMessage = "";

      try {
        const { email, password } = this.form;
        const response = await api.post("/web/login", { email, password });

        alert("Inicio de sesión exitoso");
        localStorage.setItem("user", JSON.stringify(response.data));
        this.$router.push("/");
      } catch (error) {
        const msg = error.response?.data?.error || "Ocurrió un error inesperado.";

        if (msg.includes("verificado")) {
          this.errorMessage = "Tu cuenta aún no ha sido verificada. Revisa tu correo.";
        } else if (msg.includes("Credenciales inválidas")) {
          this.errorMessage = "Correo o contraseña incorrectos.";
        } else if (msg.includes("Usuario no encontrado")) {
          this.errorMessage = "Este usuario no está registrado.";
        } else {
          this.errorMessage = msg;
        }
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  background: var(--light-coffee);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.login-card {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  width: 100%;
  text-align: center;
}

.login-card h2 {
  margin-bottom: 1rem;
  color: var(--variant2);
}

.subtitle {
  color: var(--variant1);
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

label {
  text-align: left;
  color: var(--variant2);
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
}

button {
  background: var(--variant2);
  color: white;
  padding: 0.9rem;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

button:hover:enabled {
  background: var(--strong-coffee);
}

.register-link {
  display: block;
  margin-top: 1.5rem;
  color: var(--variant1);
  font-size: 0.95rem;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}

.home-link {
  display: block;
  margin-top: 1.2rem;
  color: var(--variant1);
  text-decoration: none;
  font-size: 0.95rem;
}

.error-text {
  color: red;
  font-size: 0.95rem;
  text-align: left;
}
</style>
