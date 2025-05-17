<template>
  <div class="profile-container">
    <!-- Cubo: Información del usuario -->
    <div class="profile-card">
      <h2>Tu Perfil</h2>
      <div class="info-row">
        <span class="info-label">Nombre:</span>
        <span class="info-value">{{ user.name || "—" }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Correo:</span>
        <span class="info-value">{{ user.email || "—" }}</span>
      </div>
      <button class="edit-btn">Editar datos</button>
    </div>

    <!-- Cubo: Familiar vinculado -->
    <div class="profile-card">
      <h2>Familiar Vinculado</h2>
      <div v-if="linkedFamily">
        <p>{{ linkedFamily.fullName }}</p>
        <router-link to="/familiar" class="edit-btn">Modificar datos del familiar</router-link>
        <button @click="desvincularFamiliar" class="edit-btn" style="background: crimson">
          Desvincular familiar
        </button>
      </div>
      <div v-else>
        <p>No hay familiar vinculado.</p>
        <input v-model="codigoToken" placeholder="Ingresa el código de 6 dígitos" maxlength="6" type="text" inputmode="numeric" />
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
      <div id="map" class="map-placeholder">Cargando mapa...</div>
    </div>

    <!-- Cubo: Medicamentos -->
    <div class="profile-card">
      <h2>Medicamentos</h2>

      <!-- Normales -->
      <ul v-if="medicamentos.length">
        <li v-for="(med, i) in medicamentos" :key="i">{{ med.name }}</li>
      </ul>
      <p v-else class="no-med">No hay medicamentos normales registrados.</p>

      <!-- Controlados -->
      <h3>Medicamentos de control</h3>
      <ul v-if="medicamentosControl.length">
        <li v-for="(med, i) in medicamentosControl" :key="i" class="control-med">
          <strong>{{ med.name }}</strong><br />
          <small>{{ med.description }}</small><br />
          <span>🕒 Desde: {{ formatTimestamp(med.startDateTime) }}</span><br />
          <span>📅 Hasta: {{ formatTimestamp(med.endDateTime) }}</span><br />
          <span>⏱️ Cada {{ med.intervalHours }} horas</span>
        </li>
      </ul>
      <p v-else class="no-med">No hay medicamentos de control registrados.</p>
    </div>

    <!-- Botón cerrar sesión -->
    <div class="profile-card" style="text-align: center">
      <button @click="cerrarSesion" class="edit-btn" style="background: #888">Cerrar sesión</button>
    </div>
  </div>
</template>



<script>
import L from "leaflet";
import api from "@/api"; // importa tu cliente Axios

export default {
  name: "ProfileView",
  data() {
    return {
      user: {},
      linkedFamily: null,
      medicamentos: [],
      medicamentosControl: [],
      codigoToken: "",
    };
  },
  mounted() {
    console.log("[ProfileView] 🟢 mounted!");
    const stored = localStorage.getItem("user");

    if (stored) {
      this.user = JSON.parse(stored);
      this.verificarFamiliarVinculado(); // 👈 Nueva función aquí
    } else {
      console.warn("⚠️ No se encontró 'user' en localStorage");
    }
  },

  methods: {
    async cargarFamiliar(id) {
  try {
    const res = await api.get(`/user/public/${id}`);
    this.linkedFamily = res.data;
    return res.data; // 👈 Aquí devuelves los datos
  } catch (err) {
    console.error("❌ [ProfileView] Error cargando familiar:", err);
    return null;
  }
},
 formatTimestamp(ts) {
    const d = new Date(ts);
    return d.toLocaleString(); // puedes personalizarlo más si gustas
  },
    async cargarFamiliar(id) {
  try {
    const res = await api.get(`/user/public/${id}`);
    this.linkedFamily = res.data;
    return res.data; // ✅ Devuelve el objeto del familiar
  } catch (err) {
    console.error("❌ [ProfileView] Error cargando familiar:", err);
    return null;
  }
},
     async cargarUbicacionDelFamiliar(id) {
      try {
        const res = await api.get(`/ubicacion/actual?userId=${id}`);
        const coords = res.data;

        if (coords.lat && coords.lon) {
          this.inicializarMapa(coords.lat, coords.lon);
        } else {
          console.warn("⚠️ Coordenadas no disponibles.");
        }
      } catch (err) {
        console.error("❌ Error al obtener ubicación del familiar:", err);
      }
    },
     inicializarMapa(lat, lon) {
    console.log("🗺️ Inicializando mapa con coords:", lat, lon);
      this.$nextTick(() => {
         console.log("🗺️ Inicializando mapa con coords:", lat, lon);
        if (this.mapa) {
          this.mapa.setView([lat, lon], 15);
          this.marcador.setLatLng([lat, lon]);
        } else {
          this.mapa = L.map("map").setView([lat, lon], 15);

          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
          }).addTo(this.mapa);

          this.marcador = L.marker([lat, lon]).addTo(this.mapa).bindPopup("Familiar aquí").openPopup();
        }
      });
    },


    async verificarFamiliarVinculado() {
  try {
    console.log("🔍 Buscando usuario web para:", this.user.email);
    const res = await api.get(`/getUserByEmailWeb?email=${this.user.email}`);

    const linkedId = res.data?.linkedUserId;
    if (!linkedId) {
      console.log("⚠️ No hay familiar vinculado aún.");
      this.linkedFamily = null;
      return;
    }

    console.log("🔗 ID de familiar vinculado:", linkedId);

    const familiarData = await this.cargarFamiliar(linkedId);
    await this.cargarUbicacionDelFamiliar(linkedId);

    if (familiarData?.email) {
      await this.cargarMedicamentosDelFamiliar(familiarData.email);
    } else {
      console.warn("⚠️ Email del familiar no disponible.");
    }

    localStorage.setItem("linkedUserId", linkedId);
  } catch (err) {
    console.error(
      "❌ Error al verificar familiar vinculado:",
      err.response?.data || err.message
    );
  }
},
async cargarMedicamentosDelFamiliar(email) {
  try {
    const medsRes = await api.get(`/medicamentos`, { params: { email } });
    const controlRes = await api.get(`/controlled-meds`, { params: { email } });

    this.medicamentosControl = controlRes.data || [];

    // Excluir los que ya están en medicamentos de control
    this.medicamentos = (medsRes.data || []).filter(
      (med) => !this.medicamentosControl.some(
        (controlMed) => controlMed.name === med.name
      )
    );

    console.log("[ProfileView] medicamentos normales:", this.medicamentos);
    console.log("[ProfileView] medicamentos de control:", this.medicamentosControl);
  } catch (err) {
    console.error("❌ Error al cargar medicamentos:", err);
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
          token: this.codigoToken,
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
          email: this.user.email,
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
    },
  },
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

.control-med {
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background: #f9f9f9;
  border-left: 4px solid var(--variant1);
  border-radius: 8px;
  font-size: 0.9rem;
  line-height: 1.5;
}

.no-med {
  font-style: italic;
  color: #666;
  margin-top: 0.5rem;
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

/* Contenedor visual mientras carga */
.map-placeholder {
  background-color: #f0f0f0;
  border-radius: 12px;
  overflow: hidden;
}

/* Estilo definitivo para el mapa con Leaflet */
#map {
  height: 300px;
  width: 100%;
  border-radius: 12px;
}
</style>

<style>
body {
  background-color: var(--strong-coffee);
}
</style>

