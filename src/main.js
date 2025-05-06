import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // ← CORREGIDO
  routes: [
    { 
      path: '/', 
      component: () => import('./pages/Home.vue'),
      meta: { title: 'Inicio | INVISINGS' }
    },
    { 
      path: '/aprender-a-jugar', 
      component: () => import('./pages/LearnToPlay.vue'),
      meta: { title: 'Aprender Braille' }
    },
    { 
      path: '/buscame', 
      component: () => import('./pages/FoundMe.vue'),
      meta: { title: 'Localización' }
    },
    {
      path: '/info/:id',
      name: 'InformationQR',
      component: () => import('./pages/InformationQR.vue'),
      meta: { title: 'Emergencia | Voz Amiga' }
    },
  ]
});

router.beforeEach((to) => {
  document.title = to.meta.title || 'INVISINGS - Tecnología Accesible';
});

createApp(App)
  .use(router)
  .mount('#app');
