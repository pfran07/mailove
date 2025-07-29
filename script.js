const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', () => {
  window.location.href = "yes_page.html";
});

let noTexts = [
  "¿Estás seguro? 🥺",
  "Piénsalo bien 😢",
  "No seas malo 😭",
  "Te doy sushi 🍣",
  "Y flores 🌹",
  "Di que sí 😞",
  "Por favor... 😞😞😞",
  "OK, ahora estás obligado 😈"
];

let count = 0;

noBtn.addEventListener('click', () => {
  noBtn.innerText = noTexts[count % noTexts.length];
  count++;
  yesBtn.style.fontSize = `${20 + count * 5}px`;
});
