/* ================================
   NAVEGAÇÃO ENTRE PÁGINAS
================================ */
function goToPage(page) {
    window.location.href = page;
}

/* ================================
   CONTROLE DE MÚSICA (GLOBAL)
================================ */
const music = document.getElementById("bg-music");

/*
    Recupera estado salvo da música
*/
if (music) {
    const isPlaying = localStorage.getItem("musicPlaying");
    const currentTime = localStorage.getItem("musicTime");

    if (currentTime) {
        music.currentTime = parseFloat(currentTime);
    }

    if (isPlaying === "true") {
        music.play().catch(() => {});
    }

    // Salva o tempo da música constantemente
    music.addEventListener("timeupdate", () => {
        localStorage.setItem("musicTime", music.currentTime);
    });
}

/*
    Liga / Desliga música
*/
function toggleMusic() {
    if (!music) return;

    if (music.paused) {
        music.play();
        localStorage.setItem("musicPlaying", "true");
    } else {
        music.pause();
        localStorage.setItem("musicPlaying", "false");
    }
}

/* ================================
   TEXTO DIGITANDO (TÍTULOS)
================================ */
const texts = {
    "index.html": "Oi, meu amor ❤️",
    "page2.html": "Nossos Momentos 💕",
    "page3.html": "Momentos Inesquecíveis ✨",
    "page4.html": "Meu Lugar Favorito 💖",
    "page5.html": "Você é Tudo 💘",
    "page6.html": "Nosso Tempo ❤️"
};


let typingIndex = 0;

function typeEffect() {
    const element = document.getElementById("typing-text");
    if (!element) return;

    const page = window.location.pathname.split("/").pop();
    const text = texts[page] || "";

    if (typingIndex < text.length) {
        element.innerHTML += text.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeEffect, 120);
    }
}

function calculateDaysTogether() {
    const startDate = new Date(2024, 8, 28);
    const today = new Date();

    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const daysElement = document.getElementById("daysTogether");
    if (daysElement) {
        daysElement.innerText = diffDays;
    }

    const todayElement = document.getElementById("todayDate");
    if (todayElement) {
        todayElement.innerText = today.toLocaleDateString("pt-BR");
    }
}


/* ================================
   INICIALIZAÇÃO
================================ */
window.onload = () => {
    typeEffect();
    calculateDaysTogether();
};
/* ================================
   PARTÍCULAS SUAVES
================================ */
const canvas = document.getElementById("particles");
if (canvas) {
    const ctx = canvas.getContext("2d");
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function createParticles() {
        for (let i = 0; i < 40; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 2 + 1,
                dx: (Math.random() - 0.5) * 0.3,
                dy: (Math.random() - 0.5) * 0.3
            });
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255,255,255,0.5)";

        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animateParticles);
    }

    createParticles();
    animateParticles();
}
/* ================================
   ANIMAÇÃO ALEATÓRIA HOME
================================ */
const homeCard = document.querySelector(".home-card");
if (homeCard) {
    const animations = ["fade", "slide", "zoom"];
    const chosen = animations[Math.floor(Math.random() * animations.length)];

    homeCard.classList.add(chosen);
}
/* ================================
   SURPRESA FINAL ❤️
================================ */
function showSurprise() {
    const text = document.getElementById("surpriseText");
    if (text) text.classList.add("show");
}
