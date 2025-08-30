import './style.css';
import "leaflet/dist/leaflet.css";
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import api from './api'                  // tu cliente Axios


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
    {
      path: "/register",
      name: "Register",
      component: () => import("@/pages/RegisterView.vue"),
      meta: { title: 'Registro de Usuario' }
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/pages/LoginView.vue"),
      meta: { title: "Iniciar Sesión | INVISINGS" },
    },
    {
      path: '/app-movil',
      name: 'AppMovil',
      component: () => import("@/pages/AppMovilView.vue"),
      meta: { title: 'App móvil | Voz Amiga' }
    },
    {
      path: "/perfil",
      name: "Perfil",
      component: () => import("@/pages/ProfileView.vue"),
      meta: { title: "Mi perfil | Voz Amiga" }
    },
    {
      path: "/familiar",
      name: "Familiar",
      component: () => import("@/pages/FamilyView.vue"),
      meta: { title: "Familiar | Voz Amiga" }
    },
    {
      path:"/PrivacyPolicy",
      name:"PrivacyPolicy",
      component: () => import("@/pages/PrivacyPolicy.vue"),
      meta: { title: "Privacidad | Voz Amiga" }
    }




  ]
});

router.beforeEach((to) => {
  document.title = to.meta.title || 'INVISINGS - Tecnología Accesible';
});

createApp(App)
  .use(router)
  .mount('#app');
