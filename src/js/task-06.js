const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const dataLength = validationInput.getAttribute("data-length");
  const isValid = validationInput.value.length === parseInt(dataLength);

  if (isValid) {
    validationInput.classList.add("valid");  
  } else {
    validationInput.classList.add("invalid"); 
  }
});
