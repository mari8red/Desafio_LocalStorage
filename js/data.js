document.addEventListener("DOMContentLoaded", function() {
    const datoAlmacenado = localStorage.getItem("dato");
    if (datoAlmacenado) {
        const dataElement = document.getElementById("data");
        dataElement.textContent = datoAlmacenado;
    }
});