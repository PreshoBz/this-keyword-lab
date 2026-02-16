const swatches = document.querySelectorAll('.swatch');
// Define a function that reads this.dataset.color
// and applies it as this.style.backgroundColor
function changeSwatchColor() {
  this.style.backgroundColor = this.dataset.color;
}
// Then attach it to every swatch
swatches.forEach(function (swatch) {
  swatch.addEventListener("click", changeSwatchColor);
});