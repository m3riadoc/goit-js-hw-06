let counterValue = 0;
const valueSpan = document.getElementById("value");
const buttonPlus = document.querySelector("[data-action='increment']");
const buttonMinus = document.querySelector("[data-action='decrement']");

buttonPlus.addEventListener("click", () => {
  counterValue++;
  valueSpan.textContent = counterValue;
});

buttonMinus.addEventListener("click", () => {
  counterValue--;
  valueSpan.textContent = counterValue;
});
