const boxes = Array.from(document.querySelectorAll('.box'));

boxes.forEach(box => box.addEventListener('click', toggleClass));
boxes.forEach(box => box.addEventListener('transitionend', toggleActive));


function toggleClass() {
  this.classList.toggle('grow');
}
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}