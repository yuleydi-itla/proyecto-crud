// feature/login-form: formulario de inicio de sesión con validación
const USUARIO_VALIDO = "admin";
const PASSWORD_VALIDO = "1234";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("login-error");

    if (username.trim() === "" || password.trim() === "") {
        error.textContent = "Por favor completa todos los campos.";
        return;
    }

    if (username !== USUARIO_VALIDO || password !== PASSWORD_VALIDO) {
        error.textContent = "Usuario o contraseña incorrectos.";
        return;
    }

    error.textContent = "";
    document.getElementById("login-section").style.display = "none";
    document.getElementById("dashboard-section").style.display = "block";
}

function logout() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("dashboard-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
}