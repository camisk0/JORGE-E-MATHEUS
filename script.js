const increaseBtn = document.getElementById('increase-font');
const decreaseBtn = document.getElementById('decrease-font');
const darkModeToggle = document.getElementById('dark-mode-toggle');

let fontSize = 16;

increaseBtn.onclick = () => {
  fontSize += 1;
  document.body.style.fontSize = fontSize + 'px';
};

decreaseBtn.onclick = () => {
  fontSize -= 1;
  document.body.style.fontSize = fontSize + 'px';
};

darkModeToggle.onclick = () => {
  document.body.classList.toggle('dark-mode');
};
