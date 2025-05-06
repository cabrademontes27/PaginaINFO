<template>
  <div class="container">
    <h1>Información de Emergencia</h1>
    <div v-if="loading">Cargando información...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <p><strong>Nombre completo:</strong> {{ userData.fullName }}</p>
    </div>
  </div>
</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const id = route.params.id;

const userData = ref({});
const loading = ref(true);
const error = ref(null);

console.log("📦 ID recibido:", id); // ✅ Esto sí puede ir aquí

onMounted(async () => {
  try {
    const res = await axios.get(`https://api-node-0kfj.onrender.com/api/user/public/${id}`);
    console.log("📦 Datos obtenidos:", res.data); // ✅ Esto debe ir aquí
    userData.value = res.data;
  } catch (err) {
    error.value = 'No se pudo obtener la información.';
  } finally {
    loading.value = false;
  }
});
</script>

  
  <style scoped>
  .container {
    padding: 1rem;
    max-width: 600px;
    margin: auto;
    font-family: sans-serif;
  }
  </style>
  