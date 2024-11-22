document.getElementById("loginForm").addEventListener("submit", function (event) {

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    let valid = true;

    if (emailInput.value.trim() === "") {
        alert("Por favor ingrese su usuario");
        valid = false;
    }

    if (passwordInput.value.trim() === "") {
        alert("Por favor ingrese su contraseña");
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});

