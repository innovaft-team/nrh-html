document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eyeIcon");
  const form = document.getElementById("loginForm");

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // 👁 Toggle Password
  togglePassword.addEventListener("click", function () {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";

    eyeIcon.src = isPassword
      ? "./assets/images/png/close-eye.png"
      : "./assets/images/png/open-eye.png";
  });

  // ✅ Validation
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Reset errors
    emailError.classList.add("hidden");
    passwordError.classList.add("hidden");

    // Email validation
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Bitte E-Mail eingeben";
      emailError.classList.remove("hidden");
      isValid = false;
    } else if (!validateEmail(emailInput.value)) {
      emailError.textContent = "Bitte gültige E-Mail eingeben";
      emailError.classList.remove("hidden");
      isValid = false;
    }

    // Password validation
    if (passwordInput.value.trim() === "") {
      passwordError.textContent = "Bitte Passwort eingeben";
      passwordError.classList.remove("hidden");
      isValid = false;
    } else if (passwordInput.value.length < 6) {
      passwordError.textContent = "Passwort muss mindestens 6 Zeichen haben";
      passwordError.classList.remove("hidden");
      isValid = false;
    }

    if (isValid) {
      alert("Login successful (Demo)");

      form.reset();
    }
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
