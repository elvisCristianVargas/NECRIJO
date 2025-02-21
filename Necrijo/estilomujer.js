document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById("botonCesta");
    let mensaje = document.getElementById("mensaje");

    boton.addEventListener("click", function () {
        mensaje.style.display = "block"; // Muestra el mensaje

        // Ocultar el mensaje después de 2 segundos
        setTimeout(function () {
            mensaje.style.display = "none";
        }, 2000);
    });
});
