<template>
  <div class="profile-container">
    <!-- Cubo: Información del usuario -->
    <div class="profile-card">
      <h2>Tu Perfil</h2>
      <div class="info-row">
        <span class="info-label">Nombre:</span>
        <span class="info-value">{{ user.name || '—' }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Correo:</span>
        <span class="info-value">{{ user.email || '—' }}</span>
      </div>
      <button class="edit-btn">Editar datos</button>
    </div>

    <!-- Cubo: Familiar vinculado -->
    <div class="profile-card">
      <h2>Familiar Vinculado</h2>
      <div v-if="linkedFamily">
        <p>{{ linkedFamily.fullName }}</p>
        <router-link to="/familiar" class="edit-btn">Modificar datos del familiar</router-link>
        <button @click="desvincularFamiliar" class="edit-btn" style="background: crimson;">
          Desvincular familiar
        </button>
      </div>
      <div v-else>
        <p>No hay familiar vinculado.</p>
        <input
          v-model="codigoToken"
          placeholder="Ingresa el código de 6 dígitos"
          maxlength="6"
          type="text"
          inputmode="numeric"
        />
        <button @click="validarToken" class="edit-btn">Vincular familiar</button>
      </div>
    </div>

    <!-- Cubo: Contactos de emergencia -->
    <div class="profile-card">
      <h2>Contactos de Emergencia</h2>
      <div v-if="linkedFamily?.emergencyContacts?.length">
        <div class="info-row" v-for="(contact, i) in linkedFamily.emergencyContacts" :key="i">
          <span class="info-label">{{ contact.relation }}:</span>
          <span class="info-value">{{ contact.name }} — {{ contact.phone }}</span>
        </div>
      </div>
      <div v-else>
        <p>No hay contactos registrados.</p>
      </div>
    </div>

    <!-- Cubo: Ubicación actual -->
    <div class="profile-card">
      <h2>Ubicación actual</h2>
      <p>Próximamente se mostrará aquí un mapa con la ubicación del familiar.</p>
    </div>

    <!-- Cubo: Medicamentos -->
    <div class="profile-card">
      <h2>Medicamentos</h2>
      <ul>
        <li v-for="(med, i) in medicamentos" :key="i">{{ med.name }}</li>
      </ul>
      <h3>Medicamentos de control</h3>
      <ul>
        <li v-for="(med, i) in medicamentosControl" :key="i">{{ med.name }}</li>
      </ul>
    </div>

    <!-- Botón cerrar sesión -->
    <div class="profile-card" style="text-align: center;">
      <button @click="cerrarSesion" class="edit-btn" style="background: #888;">Cerrar sesión</button>
    </div>
  </div>
</template>

<script>
import api from "@/api";  // importa tu cliente Axios

export default {
  name: "ProfileView",
  data() {
    return {
      user: {},
      linkedFamily: null,
      medicamentos: [],
      medicamentosControl: [],
      codigoToken: ""
    };
  },
  mounted() {
    const stored = localStorage.getItem("user");
    if (stored) this.user = JSON.parse(stored);

    const linkedId = localStorage.getItem("linkedUserId");
    if (linkedId) this.cargarFamiliar(linkedId);
  },
  methods: {
    async cargarFamiliar(id) {
      console.log("👉 [ProfileView] cargando familiar con ID:", id);
      try {
        const res = await api.get(`/user/public/${id}`);
        console.log("✅ [ProfileView] datos de familiar:", res.data);
        this.linkedFamily = res.data;
      } catch (err) {
        console.error("❌ [ProfileView] Error cargando familiar:", err);
      }
    },

    async validarToken() {
      if (this.codigoToken.length !== 6) {
        return alert("El token debe tener 6 dígitos.");
      }

      console.log(
        "👉 [ProfileView] validando token:",
        this.codigoToken,
        "para",
        this.user.email
      );
      try {
        const res = await api.post(`/web/vincular`, {
          email: this.user.email,
          token: this.codigoToken
        });
        console.log("✅ [ProfileView] respuesta del servidor:", res.data);

        const id = res.data.id;
        await this.cargarFamiliar(id);
        localStorage.setItem("linkedUserId", id);

        alert("✅ Familiar vinculado correctamente.");
      } catch (err) {
        console.error(
          "❌ [ProfileView] error en /web/vincular:",
          err.response || err
        );
        alert("❌ Token inválido o expirado.");
      }
    },

    async desvincularFamiliar() {
      if (!confirm("¿Estás seguro de que deseas desvincular al familiar?"))
        return;

      console.log(
        "👉 [ProfileView] solicitando desvinculación para",
        this.user.email
      );
      try {
        const res = await api.post(`/web/desvincular`, {
          email: this.user.email
        });
        console.log("✅ [ProfileView] respuesta desvincular:", res.data);

        this.linkedFamily = null;
        localStorage.removeItem("linkedUserId");
        this.codigoToken = "";
        alert("✅ Familiar desvinculado.");
      } catch (err) {
        console.error(
          "❌ [ProfileView] error en /web/desvincular:",
          err.response || err
        );
        alert("❌ Ocurrió un error al desvincular.");
      }
    },

    cerrarSesion() {
      localStorage.removeItem("user");
      localStorage.removeItem("linkedUserId");
      this.$router.push("/login");
    }
  }
};
</script>



<style scoped>
.profile-container {
  background-color: var(--strong-coffee);
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.profile-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

h2 {
  color: var(--variant2);
  margin-bottom: 1rem;
}

h3 {
  margin-top: 1.5rem;
  color: var(--variant1);
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}

.info-label {
  font-weight: bold;
  color: var(--variant2);
}

.info-value {
  color: #333;
}

.edit-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: var(--variant2);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.edit-btn:hover {
  background: var(--strong-coffee);
}
</style>



<style> body { background-color: var(--strong-coffee); } </style>