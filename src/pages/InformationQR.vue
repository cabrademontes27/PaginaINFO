<template>
  <div class="profile-container">
    <div class="profile-card">
      <!-- Avatar -->
      <div class="avatar-container">
        <div class="avatar">
          <!-- …SVG… -->
        </div>
      </div>

      <!-- Contenido -->
      <div class="profile-content">
        <h1>Información de Contacto</h1>

        <div v-if="loading" class="loading-state">
          <div class="spinner"></div>
          <p>Cargando información...</p>
        </div>

        <div v-else-if="error" class="error-state">
          <!-- …icono de error… -->
          <p>{{ error }}</p>
        </div>

        <div v-else class="user-info">
          <!-- Campos generales -->
          <div
            class="info-row"
            v-for="(value, label) in fields"
            :key="label"
          >
            <span class="info-label">{{ label }}:</span>
            <span class="info-value">{{ value }}</span>
          </div>

          <!-- Lista de contactos de emergencia -->
          <div v-if="userData.emergencyContacts?.length" class="emergency-section">
            <h2>Contactos de Emergencia</h2>
            <div
              class="info-row"
              v-for="(c, idx) in userData.emergencyContacts"
              :key="idx"
            >
              <span class="info-label">{{ c.relation }}:</span>
              <span class="info-value">{{ c.name }} — {{ c.phone }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const id = route.params.id;

const userData = ref({});
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const res = await axios.get(`https://api-node-0kfj.onrender.com/api/user/public/${id}`);
    userData.value = res.data;
  } catch (err) {
    error.value = 'No se pudo obtener la información. Por favor, intente más tarde.';
  } finally {
    loading.value = false;
  }
});

const fields = computed(() => ({
  "Nombre completo": userData.value.fullName || '—',
  "Tipo de Sangre": userData.value.bloodType || 'No especificado',
  "Discapacidad": userData.value.disabilityDescription || 'No especificado',
  "Número de contactos": userData.value.emergencyContacts?.length || 0
}));
</script>

<style scoped>
/* …mantén tus estilos anteriores… */

.emergency-section {
  margin-top: 1.5rem;
}

.emergency-section h2 {
  font-size: 1.25rem;
  color: #c53030;
  margin-bottom: 0.5rem;
}
/* (mantén los estilos que ya tenías arriba) */

.emergency-section {
  margin-top: 1.5rem;
}

.emergency-section h2 {
  font-size: 1.25rem;
  color: #c53030;
  margin-bottom: 0.75rem;
} 
/* Estilos base */
.profile-container {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f7fa;
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.profile-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 420px;
  overflow: hidden;
}

/* Avatar */
.avatar-container {
  display: flex;
  justify-content: center;
  padding: 2rem 0 1rem;
  background-color: #f0f4f8;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e0e6ed;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.avatar svg {
  width: 60px;
  height: 60px;
}

/* Contenido */
.profile-content {
  padding: 1.5rem;
}

h1 {
  font-size: 1.5rem;
  color: #2d3748;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

/* Estados */
.loading-state, .error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
}

.loading-state p, .error-state p {
  color: #4a5568;
  text-align: center;
}

.error-state svg {
  width: 48px;
  height: 48px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e2e8f0;
  border-top: 4px solid #4299e1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Información del usuario */
.user-info {
  margin-top: 1rem;
}

.info-row {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #edf2f7;
}

.info-row:last-child {
  border-bottom: none;
}

.info-label {
  font-size: 0.875rem;
  color: #718096;
  font-weight: 500;
}

.info-value {
  font-size: 1rem;
  color: #2d3748;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 480px) {
  .profile-container {
    padding: 0.5rem;
  }
  
  .profile-content {
    padding: 1rem;
  }
  
  h1 {
    font-size: 1.25rem;
  }
}
</style>
