function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarCamposUsuario(nombre, email, fecha) {
    if (nombre.trim() === "") {
        return "El nombre es obligatorio.";
    }
    if (email.trim() === "") {
        return "El email es obligatorio.";
    }
    if (!validarEmail(email)) {
        return "El email no tiene un formato válido.";
    }
    if (fecha.trim() === "") {
        return "La fecha es obligatoria.";
    }
    return null;
}

function formatearFecha(fecha) {
    const partes = fecha.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}