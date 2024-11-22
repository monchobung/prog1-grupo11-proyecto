document.getElementById("loginForm").addEventListener("submit", function (event) {
    // Obtener los inputs de email y contraseña
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    let valid = true;

    // Validar el campo de email
    if (emailInput.value.trim() === "") {
        alert("Por favor complete el campo email");
        valid = false; // Marcar como no válido
    }

    // Validar el campo de contraseña
    if (passwordInput.value.trim() === "") {
        alert("Por favor complete el campo contraseña");
        valid = false; // Marcar como no válido
    }

    // Evitar que el formulario se envíe si no es válido
    if (!valid) {
        event.preventDefault();
    }
});

