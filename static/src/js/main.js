// Mostrar el nombre del proyecto en la consola
let project = "Start project Seven Suites";
console.log(project);

// document.addEventListener('DOMContentLoaded', function() {
//     const iconMenu = document.getElementById('icon_burger');
//     const navMenu = document.querySelector('.nav-menu');
    
//     iconMenu.addEventListener('click', function() {
//         navMenu.classList.toggle('show_menu'); /* Alterna la clase 'show' para mostrar/ocultar el menú */
//     });
// });

const nav_menu = document.querySelector("#nav_menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav_menu.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav_menu.classList.remove("visible");
})

// document.addEventListener('DOMContentLoaded', function() {
//     const iconMenu = document.getElementById('icon_burger');
//     const navMenu = document.querySelector('.nav-menu');
    
//     iconMenu.addEventListener('click', function() {
//         navMenu.classList.toggle('show'); /* Alterna la clase 'show' para mostrar/ocultar el menú */
//     });
// });

// // Seleccionar el ícono de la hamburguesa y el menú de navegación
// const iconBurger = document.querySelector("#icon_burger");
// const menu = document.querySelector("#menu");

// // Añadir un evento de clic al ícono de la hamburguesa
// iconBurger.addEventListener("click", () => {
//     // Alternar la clase 'show_menu' en el menú de navegación para mostrar u ocultar
//     menu.classList.toggle("show_menu");
// });