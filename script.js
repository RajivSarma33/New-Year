const QUOTES = [
  "Small steps daily become big wins yearly.",
  "Start where you are. Use what you have. Do what you can.",
  "Discipline beats motivation when motivation fades.",
  "You are one decision away from a different year.",
  "Dream in years, plan in months, act in days.",
  "Progress over perfection — always forward.",
  "New year, new chances. Make them count.",
  "Courage grows with every honest try.",
  "Energy flows where focus goes.",
  "Consistency compounds. Keep showing up.",
  "Your future self is built today.",
  "A little braver, a little kinder, every day.",
  "Momentum is made, not found.",
  "Choose growth, even when it’s uncomfortable.",
  "Turn intentions into actions and actions into habits.",
];

function pickQuote() {
  const lastIndex = Number(localStorage.getItem("lastQuoteIndex"));
  let index = Math.floor(Math.random() * QUOTES.length);
  if (!Number.isNaN(lastIndex) && QUOTES.length > 1) {
    while (index === lastIndex) {
      index = Math.floor(Math.random() * QUOTES.length);
    }
  }
  localStorage.setItem("lastQuoteIndex", String(index));
  return QUOTES[index];
}

function setQuote() {
  const el = document.getElementById("quote-text");
  if (el) el.textContent = pickQuote();
}

function setCutePhoto() {
  const img = document.getElementById("cute-photo");
  if (!img) return;
  const seed = `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
  const url = `https://picsum.photos/seed/${seed}/520/325`;
  img.src = url;
  img.onerror = () => {
    const svg = encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='520' height='325'>
        <defs>
          <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
            <stop offset='0%' stop-color='#ff8ad8'/>
            <stop offset='100%' stop-color='#ffef9a'/>
          </linearGradient>
        </defs>
        <rect width='100%' height='100%' fill='#161a2b'/>
        <g fill='url(#g)' opacity='0.85'>
          <text x='50%' y='45%' font-size='28' text-anchor='middle' font-family='Poppins'>Stay Cute, Stay Kind 💖</text>
          <text x='50%' y='58%' font-size='16' text-anchor='middle' font-family='Poppins' fill='#a8b0c6'>Image fallback</text>
        </g>
      </svg>`
    );
    img.src = `data:image/svg+xml;charset=UTF-8,${svg}`;
  };
}

function generateConfetti(count = 120) {
  const container = document.getElementById("confetti-container");
  if (!container) return;
  const colors = ["#ff8ad8", "#7ef0ff", "#ffd166", "#9aff9a", "#b19cff"];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";

    const left = Math.random() * 100;
    const size = 6 + Math.random() * 8;
    const delay = Math.random() * 2.5;
    const duration = 5.5 + Math.random() * 4.5;
    const rotate = Math.floor(Math.random() * 360);
    const color = colors[Math.floor(Math.random() * colors.length)];

    piece.style.left = `${left}vw`;
    piece.style.width = `${size}px`;
    piece.style.height = `${size}px`;
    piece.style.background = color;
    piece.style.animationDuration = `${duration}s, ${duration * 0.9}s`;
    piece.style.animationDelay = `${delay}s, ${delay}s`;
    piece.style.transform = `translateY(-20px) rotate(${rotate}deg)`;

    container.appendChild(piece);
  }
}

function wireButton() {
  const btn = document.getElementById("open-camera");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const url = "http://unimportant-francesco-miry.ngrok-free.dev/templates/camera_temp/index.html";
    window.open(url, "_blank", "noopener,noreferrer");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setQuote();
  setCutePhoto();
  generateConfetti(140);
  wireButton();
});

