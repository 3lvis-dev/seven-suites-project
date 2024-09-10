// Mostrar el nombre del proyecto en la consola
let project = "Start project Seven Suites";
console.log(project);

// Seleccionar el ícono de la hamburguesa y el menú de navegación
const iconBurger = document.querySelector("#icon_burger");
const menu = document.querySelector("#menu");

// Añadir un evento de clic al ícono de la hamburguesa
iconBurger.addEventListener("click", () => {
    // Alternar la clase 'show_menu' en el menú de navegación para mostrar u ocultar
    menu.classList.toggle("show_menu");
});