document.addEventListener("keydown", function(event) {
    const caracter = event.key;
    document.getElementById("caracter").textContent = `Carácter [${caracter}]`;
    const codigo = event.keyCode || event.which;
    document.getElementById("codigo").textContent = `Código [${codigo}]`;
});