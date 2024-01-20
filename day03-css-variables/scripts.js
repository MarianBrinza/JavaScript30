document.querySelectorAll("input").forEach(input => {
  input.addEventListener("change", updateValues);
});

function updateValues() {
  const input = this;
  const value = input.value;

  if (input.id !== "textAndBgColor") {
    document.documentElement.style.setProperty(`--${input.id}`, value + "px");
  } else {
    document.documentElement.style.setProperty(`--${input.id}`, value);
  }
}
