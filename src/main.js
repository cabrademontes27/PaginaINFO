import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory('#'),
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
  ]
});

router.beforeEach((to) => {
  document.title = to.meta.title || 'INVISINGS - Tecnología Accesible';
});

createApp(App)
  .use(router)
  .mount('#app');