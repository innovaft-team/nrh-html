const form = document.getElementById("signupForm");
const inputs = form.querySelectorAll("input");
const button = form.querySelector(".primary-button");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---- BUTTON STATE HANDLER ----
function setButtonState(isActive) {
  if (isActive) {
    button.classList.remove("is-disabled");
    button.classList.add("is-active");
  } else {
    button.classList.remove("is-active");
    button.classList.add("is-disabled");
  }
}

// ---- ERROR HANDLING ----
function showError(input, message) {
  const errorEl = document.querySelector(
    `[data-error="${input.type === "email" ? "email" : "name"}"]`
  );
  errorEl.textContent = message;
  errorEl.classList.remove("hidden");
}

function hideError(input) {
  const errorEl = document.querySelector(
    `[data-error="${input.type === "email" ? "email" : "name"}"]`
  );
  errorEl.classList.add("hidden");
}

// ---- VALIDATION ----
function validateInput(input) {
  const value = input.value.trim();

  if (!value) {
    showError(input, "This field is required");
    return false;
  }

  if (input.type === "email" && !emailRegex.test(value)) {
    showError(input, "Enter a valid email address");
    return false;
  }

  hideError(input);
  return true;
}

// ---- FORM CHECK ----
function validateForm() {
  let isFormValid = true;

  inputs.forEach((input) => {
    if (!validateInput(input)) {
      isFormValid = false;
    }
  });

  setButtonState(isFormValid);
}

// ---- EVENTS ----
inputs.forEach((input) => {
  input.addEventListener("input", validateForm);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();

  if (button.classList.contains("is-active")) {
    alert("Form submitted successfully ✅");
    form.reset();
    setButtonState(false);
  }
});

// ---- INITIAL STATE ----
setButtonState(false);
