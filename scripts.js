
// Seleccionar el botón y el menú
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

// Agregar evento al botón para mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
  console.log("Botón presionado, clase show: ", menu.classList.contains('show')); // Ayuda a verificar en consola
});

