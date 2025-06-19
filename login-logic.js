document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("errorMsg");

  if (!email || !password) {
    error.textContent = "Tous les champs sont requis.";
    return;
  }

  // Simulation de login
  if (email === "test@example.com" && password === "123456") {
    alert("Connexion réussie !");
  } else {
    error.textContent = "Email ou mot de passe incorrect.";
  }
});
