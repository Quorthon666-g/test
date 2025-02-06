function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Erika Vera" && password === "050423") {
        window.location.href = "valentine.html";
    } else {
        document.getElementById("error-message").innerText = "Usuario o contraseña incorrectos.";
    }
}
