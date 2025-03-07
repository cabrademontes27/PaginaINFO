<template>
  <div class="home-container">
    <!-- Header Section -->
    <header class="header">
      <div class="logo">
        <span>INVISINGS.</span>
      </div>
      <nav class="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Acerca</a></li>
          <li><a href="#">informacion</a></li>
          <li><a href="#">Buscame</a></li>
          <li><a href="#">Aprender a jugar</a></li>
          <li><a href="#">Nosotros</a></li>
        </ul>
      </nav>
    </header>

    <!-- Hero Section -->
    <div class="main-content">
      <!-- Hero Section -->
      <section class="hero">
        <div class="overlay">
          <h1>Mas haya de tus limites</h1>
          <p>Empoderando tus decisiones</p>
        </div>
      </section>

      <!-- About Section -->
      <section class="about">
        <h2>¿Quienes somos?</h2>
        <p>Somos</p>
        <button class="btn">Learn More</button>
      </section>
    </div>
  </div>
</template>

<style>
/* ------------------------------------------------------
   Remove "scoped" to ensure :root variables are global
------------------------------------------------------- */

/* Coffee Color Palette */
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --light-coffee: #ffffff; /* Cafe claro */
  --strong-coffee: #a4937f; /* Cafe fuerte */
  --variant1: #968877;      /* Variante 1 */
  --variant2: #6d6150;      /* Variante 2 */
}

/* General Styles */
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vb;
  font-family: 'Arial', sans-serif;
  color: var(--variant2);
  background-color: var(--light-coffee);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  background-color: var(--strong-coffee);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
}

.logo {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--light-coffee);
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 15px;
}

.nav a {
  color: var(--light-coffee);
  text-decoration: none;
  font-weight: bold;
}

.nav a:hover {
  text-decoration: underline;
}

/* Hero Section */
.hero {
  background: url('/src/assets/braille.jpg') no-repeat center center/cover;
  height: 60vh;
  min-height: 350px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.overlay {
  background-color: rgba(254, 254, 254, 0.85);
  padding: 20px;
  text-align: center;
  border-radius: 10px;
}

.overlay h1 {
  font-size: 1.8rem;
  color: var(--variant1);
}

.overlay p {
  font-size: 1.2rem;
  color: var(--variant2);
}

/* About Section */
.about {
  flex: 1;
  background-color: var(--variant1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  width: 100;
  text-align: center;
  color: var(--light-coffee);
}

.about h2 {
  font-size: 1.5rem;
  color: var(--light-coffee);
}

.about p {
  font-size: 1rem;
  max-width: 600px;
  margin: 10px auto;
}

.btn {
  background-color: var(--variant2);
  color: var(--light-coffee);
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 15px;
}

.btn:hover {
  background-color: var(--strong-coffee);
}
</style>
