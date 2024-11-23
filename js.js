
const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_PUBLIC_KEY')
        .then(() => {
            alert("Mensaje enviado con éxito");
        }, (error) => {
            alert("Error al enviar el mensaje");
        });
});

