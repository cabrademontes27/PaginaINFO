<script setup>
import ToolbarPages from './components/ToolbarPages.vue'
import Home from './pages/Home.vue';
</script>

<template>
  <router-view></router-view><!-- This will render the current route's component -->
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Add global styles here if needed */

</style>