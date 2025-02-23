// Función para expandir/colapsar el panel lateral
document.getElementById('toggle-sidebar').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
  });
  
  // Redirección a otras páginas (ya está incluido en los enlaces del HTML)