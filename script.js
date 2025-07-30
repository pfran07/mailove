const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Activamos transición suave
yesBtn.style.transition = "transform 0.5s ease";

// Escala inicial
let scale = 1;

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

  // Aumentamos escala en saltos grandes
  scale += 1;

  // Aplicamos la transformación
  yesBtn.style.transform = `scale(${scale})`;
});
