
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("activo");
});


document.querySelectorAll(".menu a").forEach(enlace => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("activo");
    });
});


const busqueda = document.getElementById("busqueda");
const categoriaFiltro = document.getElementById("categoriaFiltro");
const productos = document.querySelectorAll(".producto");
const sinResultados = document.getElementById("sinResultados");

function filtrarProductos() {
    const texto = busqueda.value.toLowerCase().trim();
    const categoria = categoriaFiltro.value;

    let encontrados = 0;

    productos.forEach(producto => {
        const nombre = producto.querySelector("h3").textContent.toLowerCase();
        const descripcion = producto.querySelector("p").textContent.toLowerCase();
        const categoriaProducto = producto.dataset.categoria;

        const coincideTexto =
            nombre.includes(texto) || descripcion.includes(texto);

        const coincideCategoria =
            categoria === "todos" || categoria === categoriaProducto;

        if (coincideTexto && coincideCategoria) {
            producto.style.display = "block";
            encontrados++;
        } else {
            producto.style.display = "none";
        }
    });

    sinResultados.style.display = encontrados === 0 ? "block" : "none";
}

busqueda.addEventListener("input", filtrarProductos);
categoriaFiltro.addEventListener("change", filtrarProductos);

document.getElementById("buscarBtn").addEventListener("click", filtrarProductos);


const formulario = document.getElementById("formularioContacto");
const respuesta = document.getElementById("respuestaFormulario");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
        respuesta.textContent = "Completa todos los campos.";
        return;
    }

    respuesta.textContent =
        "Gracias por contactarnos, " + nombre +
        ". Tu formulario fue revisado correctamente.";

    formulario.reset();
});