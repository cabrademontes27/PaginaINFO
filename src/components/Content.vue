<template>
    <div class="content">
      <p>This is the scrollable content.</p>
      <!-- Add more content here -->
      <p v-for="i in 50" :key="i">Line {{ i }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Content',
  };
  </script>
  
  <style scoped>
  .content {
    margin-top: 80px; /* Match the height of the dashboard */
    padding: 20px;
    height: calc(100vh - 80px); /* Adjust height to fit below the dashboard */
    overflow-y: auto; /* Make content scrollable */
  }
  </style>