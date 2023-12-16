const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

function setFontSize() {
  const fontSize = fontSizeControl.value + "px";
  textSpan.style.fontSize = fontSize;
}

setFontSize();
fontSizeControl.addEventListener("input", setFontSize);
