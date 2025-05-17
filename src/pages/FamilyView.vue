<template>
  <div class="family-container">
    <!-- Cubo: Datos del familiar -->
    <div class="family-card">
      <h2>Datos del Familiar</h2>
      <div v-if="family">
        <div class="info-row">
          <span class="info-label">Nombre completo:</span>
          <span class="info-value">{{ fullName }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Correo:</span>
          <span class="info-value">{{ family.email }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Teléfono:</span>
          <span class="info-value">{{ family.telephone }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Fecha de nacimiento:</span>
          <span class="info-value">{{ family.birthDay }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Tipo de sangre:</span>
          <span class="info-value">{{ family.bloodType }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Discapacidad:</span>
          <span class="info-value">{{ family.disabilityDescription || "—" }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Dirección:</span>
          <span class="info-value">{{ direccion }}</span>
        </div>
      </div>
      <div v-else>
        <p>Cargando datos del familiar...</p>
      </div>
    </div>

    <!-- Cubo: Contactos de emergencia -->
    <div class="family-card">
      <h2>Contactos de Emergencia</h2>
      <div v-if="family?.emergencyContacts?.length">
        <div class="info-row" v-for="(c, i) in family.emergencyContacts" :key="i">
          <span class="info-label">{{ c.relation }}:</span>
          <span class="info-value">{{ c.name }} — {{ c.phone }}</span>
        </div>
      </div>
      <div v-else>
        <p>No hay contactos registrados.</p>
      </div>
    </div>

    <!-- Cubo: Medicamentos -->
    <div class="family-card">
      <h2>Medicamentos</h2>
      <div class="med-list">
        <span 
          v-if="!medicamentos.length" 
          class="no-med"
        >
          No hay medicamentos registrados.
        </span>
        <span 
          v-for="(med, i) in medicamentos" 
          :key="i" 
          class="med-badge"
        >
          {{ med.name }}
        </span>
      </div>

      <h3>Medicamentos de control</h3>
      <div class="med-list">
        <span 
          v-if="!medicamentosControl.length" 
          class="no-med"
        >
          No hay medicamentos de control.
        </span>
        <span 
          v-else 
          v-for="(med, i) in medicamentosControl" 
          :key="i" 
          class="med-badge control"
        >
          {{ med.name }}
        </span>
      </div>
    </div>
  </div>
</template>


<script>
import api from "@/api";

export default {
  name: "FamilyView",
  data() {
    return {
      family: null,
      medicamentos: [],
      medicamentosControl: []
    };
  },
  computed: {
    // Nombre completo
    fullName() {
      const f = this.family;
      return f
        ? `${f.name} ${f.lastName} ${f.secondLastName}`.trim()
        : "";
    },
    // Dirección formateada
    direccion() {
      const loc = this.family?.location;
      if (!loc) return "—";
      return `${loc.street}, ${loc.colony}, ${loc.municipality}, ${loc.state}`;
    }
  },
  async mounted() {
    const linkedId = localStorage.getItem("linkedUserId");
    if (!linkedId) {
      alert("⚠️ No hay familiar vinculado.");
      return;
    }

    try {
      // 1. Obtener datos completos del familiar
      console.log(`[FamilyView] GET /web/userDetails/${linkedId}`);
      const res = await api.get(`/web/userDetails/${linkedId}`);
      this.family = res.data;
      console.log("[FamilyView] familiar:", this.family);

      // 2. Obtener medicamentos del familiar por correo
      const email = this.family.email;
      if (email) {
        console.log(`[FamilyView] GET /medicamentos?email=${email}`);
        const medsRes = await api.get(`/medicamentos`, { params: { email } });
        this.medicamentos = medsRes.data || [];
        console.log("[FamilyView] medicamentos:", this.medicamentos);

        // 3. Filtrar los de "control" por texto en descripción
        this.medicamentosControl = this.medicamentos.filter(m =>
          m.description?.toLowerCase().includes("control")
        );
        console.log("[FamilyView] medicamentosControl:", this.medicamentosControl);
      }
    } catch (err) {
      console.error("❌ Error al cargar datos del familiar:", err);
      alert("Ocurrió un error al obtener la información del familiar.");
    }
  }
};
</script>


<style scoped>
.family-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.family-card {
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

/* Información general */
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

/* Lista de medicamentos como "badges" */
.med-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.med-badge {
  padding: 0.4rem 0.8rem;
  background-color: var(--variant2);
  color: white;
  border-radius: 12px;
  font-size: 0.9rem;
  white-space: nowrap;
}

.med-badge.control {
  background-color: var(--variant1);
}

/* Texto cuando no hay datos */
.no-med {
  font-style: italic;
  color: #666;
}
</style>
