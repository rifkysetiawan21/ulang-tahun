// Efek hati lembut di background
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  setInterval(() => {
    const heart = document.createElement("span");
    heart.textContent = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animation = "floatUp 4s linear forwards";
    body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 600);
});

const style = document.createElement("style");
style.textContent = `
@keyframes floatUp {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
// Fitur tombol "Buka Kado"
document.addEventListener("DOMContentLoaded", () => {
  const tombolKado = document.getElementById("bukaKado");
  const pesan = document.getElementById("pesanRahasia");

  if (tombolKado) {
    tombolKado.addEventListener("click", () => {
      pesan.style.display = "block";
      tombolKado.style.display = "none";

      // Efek animasi kecil: hati muncul dari bawah
      const body = document.body;
      for (let i = 0; i < 15; i++) {
        const heart = document.createElement("span");
        heart.textContent = "💖";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        heart.style.fontSize = Math.random() * 25 + 10 + "px";
        heart.style.animation = "floatUp 5s linear forwards";
        body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
      }
    });
  }
});
