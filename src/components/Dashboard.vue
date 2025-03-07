<template>
    <div class="dashboard">
      <h1>Dashboard</h1>
      <!-- Add your dashboard content here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
  };
  </script>
  
  <style scoped>
  .dashboard {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px; /* Adjust height as needed */
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
    z-index: 1000; /* Ensure it stays on top */
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  </style>