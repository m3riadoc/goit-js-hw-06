const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Wypełnij wszystkie pola!");
  } else {
    console.log("Email:", emailInput.value);
    console.log("Password:", passwordInput.value);
    loginForm.reset();
  }
});
