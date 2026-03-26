let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let editandoIndex = null;

function guardarEnStorage() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function agregarUsuario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const fecha = document.getElementById("fecha").value;
    const error = document.getElementById("form-error");

    const mensajeError = validarCamposUsuario(nombre, email, fecha);
    if (mensajeError) {
        error.textContent = mensajeError;
        return;
    }

    error.textContent = "";

    if (editandoIndex !== null) {
        usuarios[editandoIndex] = { nombre, email, fecha: formatearFecha(fecha) };
        editandoIndex = null;
        document.querySelector("button[onclick='agregarUsuario()']").textContent = "Agregar";
    } else {
        usuarios.push({ nombre, email, fecha: formatearFecha(fecha) });
    }

    guardarEnStorage();
    limpiarFormulario();
    renderTabla();
}

function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("fecha").value = "";
}

function renderTabla() {
    const tbody = document.getElementById("tabla-usuarios");
    tbody.innerHTML = "";

    usuarios.forEach((usuario, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.email}</td>
            <td>${usuario.fecha}</td>
            <td>
                <button class="btn-editar" onclick="editarUsuario(${index})">Editar</button>
                <button class="btn-eliminar" onclick="eliminarUsuario(${index})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(fila);
    });
    actualizarStats();
}

function editarUsuario(index) {
    const usuario = usuarios[index];
    document.getElementById("nombre").value = usuario.nombre;
    document.getElementById("email").value = usuario.email;
    editandoIndex = index;
    document.querySelector("button[onclick='agregarUsuario()']").textContent = "Actualizar";
}

function eliminarUsuario(index) {
    if (confirm("¿Estás seguro de eliminar este usuario?")) {
        usuarios.splice(index, 1);
        guardarEnStorage();
        renderTabla();
    }
}

function actualizarStats() {
    document.getElementById("total-usuarios").textContent = usuarios.length;
}

window.onload = function () {
    renderTabla();
};