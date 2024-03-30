function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const magicBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const widget = document.querySelector('.widget');
magicBtn.addEventListener('click', () => {
  widget.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
});

