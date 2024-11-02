function converUsdACop() {

    var USD = document.getElementById("dolar").value
    var dollar = parseFloat(USD)
    var valorUSD = 4415.0
    var cover = dollar * valorUSD
    document.getElementById("COP").value = cover
}

function cambioCAF() {

    var gC = document.getElementById("celcius").value
    var c = parseFloat(gC)
    var converCAF = c * 9 / 5 + 32
    document.getElementById("fahrenheit").value = converCAF
}

function adicionarEmp() {

    const id = document.getElementById("idEmpleado").value
    const nombreEmpleado = document.getElementById("nombre").value

    if (id && nombreEmpleado) {

        const table = document.getElementById("tabEmpleado")
        const newRow = table.insertRow()

        const cellCodigo = newRow.insertCell(0)
        const cellNombre = newRow.insertCell(1)

        cellCodigo.textContent = id
        cellNombre.textContent = nombreEmpleado


    } else {
        alert("No ha completado los campos, Por favor completelos.")
    }
}
function verOQuitarTxt(txt) {
    
    const parrafos = txt.previousElementSibling

    if (parrafos.style.display === "none") {

        parrafos.style.display = "block"
        txt.textContent = "Ocultar contenido"
    }
    else
    {
        parrafos.style.display = "none"
        txt.textContent = "Mostrar contenido"
    }
}
function CoordMouse(mouse) {
    const x = mouse.clientX
    const y = mouse.clientY
    document.getElementById("coord").textContent = `Posición del puntero: X: ${x}, Y: ${y}`
}

document.addEventListener("mousemove", CoordMouse)

const materias = ["modelamiento", "calculo",
    "programacion", "textos academicos", "ingles",
    "mecanica", "constitucion", "base de datos",
    "electromagnetismo", "introduccion"]

document.getElementById("agregarElemento").addEventListener("click", function () {
    const materiaAleatoria = materias[Math.floor(Math.random() * materias.length)]
    const nuevoElemento = document.createElement("li");    
    nuevoElemento.textContent = materiaAleatoria
    document.getElementById("lista").appendChild(nuevoElemento)
})

function crearNodo(nodo) {
    var nodo = document.createElement(nodo)
    return nodo
}
function crearNodoEn(nodo,txt,url,target){
    var nodo = crearNodo(nodo)
    var nodoTxt = document.createTextNode(txt)
    nodo.href = url
    nodo.target = target
    nodo.appendChild(nodoTxt)
    return nodo
}
function adicionarNodoABody(nodo) {
    document.body.appendChild(nodo)

}
function adicionarNodoAContenedor(nodo, contenedor) {

    contenedor.appendChild(nodo)

}
