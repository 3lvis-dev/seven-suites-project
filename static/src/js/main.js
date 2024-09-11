// Mostrar el nombre del proyecto en la consola
let project = "Start project Seven Suites";
console.log(project);

// Burger Menu...
const nav_menu = document.querySelector("#nav_menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav_menu.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav_menu.classList.remove("visible");
})

// Email Services...
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_6b9jmlg'; // Reemplaza TU_SERVICE_ID con el ID del servicio creado en EmailJS
    const templateID = 'template_6ag40jq'; // Reemplaza TU_TEMPLATE_ID con el ID de la plantilla creada en EmailJS

    emailjs.sendForm(serviceID, templateID, this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('formResponse').textContent = 'Mensaje enviado con éxito';
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('formResponse').textContent = 'Error al enviar el mensaje';
        });
});