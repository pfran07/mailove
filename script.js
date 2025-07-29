const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.style.transition = "transform 0.2s ease";

yesBtn.addEventListener('click', () => {
  window.location.href = "yes_page.html";
});

let noTexts = [
  "Seguro mai love?",
  "Piénsalo bien 😢",
  "No seas malo puto 😭",
  "Te doy sushi 🍣",
  "Y flores 🌹",
  "Solo di que sí 😞",
  "Por favor... 😞😞😞",
  "Muajaja, ahora estás obligado 😈"
];

let count = 0;

noBtn.addEventListener('click', () => {
  noBtn.innerText = noTexts[count % noTexts.length];
  count++;
  yesBtn.style.transform = `scale(${1 + count * 0.2})`;
});

  
