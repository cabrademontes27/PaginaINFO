<template>
  <div class="register-container">
    <div class="register-card">
      <h2>Regístrate</h2>
      <p class="subtitle">Crea tu cuenta para comenzar a explorar Voz Amiga</p>

      <form @submit.prevent="handleRegister">
        <label>
          Nombre completo
          <input type="text" v-model="form.name" required />
        </label>

        <label>
          Correo electrónico
          <input type="email" v-model="form.email" required />
        </label>

        <label>
          Contraseña
          <input type="password" v-model="form.password" required />
        </label>

        <button type="submit">Crear cuenta</button>
      </form>

      <router-link to="/" class="back-link">
        <i class="fas fa-arrow-left"></i> Volver al inicio
      </router-link>
    </div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "RegisterView",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async handleRegister() {
      try {
        const { email, name, password } = this.form;

        // Solo una llamada de registro
        await api.post("/web/register", {
          name,
          email,
          password
        });

        alert("Registro exitoso. Revisa tu correo para verificar la cuenta.");
        this.$router.push("/login");

      } catch (error) {
        const msg = error.response?.data?.error || "Ocurrió un error inesperado.";
        alert(msg);
      }
    }
  }
};
</script>


<style scoped>
.register-container {
  background: var(--light-coffee);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.register-card {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.register-card h2 {
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

button:hover {
  background: var(--strong-coffee);
}

.back-link {
  margin-top: 2rem;
  display: inline-block;
  color: var(--variant1);
  text-decoration: none;
  font-size: 0.95rem;
}
</style>
