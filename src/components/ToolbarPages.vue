<template>
  <div class="toolbar-container" :class="{ collapsed: isCollapsed }">
    <!-- Toolbar -->
    <div class="toolbar">
      <!-- Hamburger menu button -->
      <button class="toggle-button" @click="toggleCollapse">
        <span v-if="isCollapsed">☰</span>
        <span v-else>✕</span>
      </button>

      <!-- Toolbar links -->
      <ul class="toolbar-list">
        <li v-for="item in toolbarItems" :key="item.name" class="toolbar-item">
          <router-link :to="item.path" class="toolbar-link">
            <span class="icon">{{ item.icon }}</span>
            <span class="text">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Overlay (for mobile/click outside to close) -->
    <div v-if="!isCollapsed" class="overlay" @click="toggleCollapse"></div>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data() {
    return {
      isCollapsed: true, // Start collapsed by default
      toolbarItems: [
        { name: 'Información', path: '/informacion', icon: 'ℹ️' },
        { name: 'Aprender a Jugar', path: '/aprender-a-jugar', icon: '🎮' },
        { name: 'Buscame', path: '/buscame', icon: '🔍' },
        { name: 'Revista', path: '/revista', icon: '📰' },
        { name: 'Contacto', path: '/contacto', icon: '📞' },
      ],
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
      this.$emit('toggle-collapse', this.isCollapsed); // Emit event
    },
  },
};
</script>

<style scoped>
/* Toolbar container */
.toolbar-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1000; /* Ensure it's above other content */
}

/* Toolbar */
.toolbar {
  width: 250px; /* Expanded width */
  height: 100vh;
  background-color: #928373; /* Cafe fuerte */
  color: #e4eeff; /* Azul bajo */
  padding: 20px;
  transition: transform 0.3s ease; /* Smooth slide animation */
  transform: translateX(0); /* Start fully visible */
}

/* Collapsed state */
.toolbar-container.collapsed .toolbar {
  transform: translateX(-100%); /* Slide out of view */
}

/* Toggle button */
.toggle-button {
  background: none;
  border: none;
  color: #e4eeff; /* Azul bajo */
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 20px;
}

/* Toolbar list */
.toolbar-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Toolbar item */
.toolbar-item {
  margin: 15px 0;
}

/* Toolbar link */
.toolbar-link {
  display: flex;
  align-items: center;
  color: #e4eeff; /* Azul bajo */
  text-decoration: none;
  font-size: 18px;
  transition: opacity 0.3s ease;
}

.toolbar-link:hover {
  opacity: 0.8;
}

/* Icon */
.icon {
  margin-right: 10px;
  font-size: 24px;
}

/* Text */
.text {
  white-space: nowrap; /* Prevent text from wrapping */
}

/* Overlay (for mobile/click outside to close) */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  z-index: 999; /* Below the toolbar */
}
</style>