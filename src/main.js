import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';

// Import your components/pages
//import PrincipalPage from './components/PrincipalPage.vue'; // Ensure this path is correct
import Home from './pages/Home.vue';

// Define your routes
const routes = [
  { path: '/', component: Home },
  //{ path: '/informacion', component: Informacion },
  //{ path: '/aprender-a-jugar', component: AprenderAJugar },
  //{ path: '/buscame', component: Buscame },
  //{ path: '/revista', component: Revista },
  //{ path: '/contacto', component: Contacto },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create the Vue app and use the router
const app = createApp(App);
app.use(router);
app.mount('#app');