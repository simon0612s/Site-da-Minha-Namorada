function goToPage(page) {
    window.location.href = page;
}

const music = document.getElementById("bg-music");

/* Botão de play/pause */
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

/* SALVAR O TEMPO DA MÚSICA */
if (music) {
    music.addEventListener("timeupdate", () => {
        localStorage.setItem("musicTime", music.currentTime);
    });
}

/* RESTAURAR AO TROCAR DE PÁGINA */
window.addEventListener("load", () => {
    if (!music) return;

    const savedTime = localStorage.getItem("musicTime");
    const shouldPlay = localStorage.getItem("musicPlaying");

    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    if (shouldPlay === "true") {
        music.play().catch(() => {
            // navegador pode exigir interação
        });
    }
});




/* Texto digitando */
const texts = {
    "index.html": "Oi, meu amor.",
    "page2.html": "Não se preocupe tanto",
    "page3.html": "Nossos momentos",
    "page4.html": "Um lugar seguro",
    "page5.html": "Sempre com você",
    "page6.html": "Nosso tempo."
};

let i = 0;

function typeEffect() {
    const el = document.getElementById("typing-text");
    if (!el) return;

    const page = location.pathname.split("/").pop();
    const text = texts[page] || "";

    if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 120);
    }
}

function renderRelationshipCalendar() {
    const startDate = new Date(2024, 6, 28); // 28/07/2024
    const today = new Date();

    const monthNames = [
        "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
        "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
    ];

    const month = today.getMonth();
    const year = today.getFullYear();

    document.getElementById("calendar-month").innerText = monthNames[month];
    document.getElementById("calendar-year").innerText = year;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const grid = document.getElementById("calendar-grid");
    if (!grid) return;

    grid.innerHTML = "";

    // Espaços vazios antes do dia 1
    for (let i = 0; i < firstDay; i++) {
        grid.innerHTML += `<div></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const current = new Date(year, month, day);
        let classes = "calendar-day";

        if (current >= startDate && current <= today) {
            classes += " active";
        }

        if (
            current.getDate() === 28 &&
            current.getMonth() === 6 &&
            current.getFullYear() === 2024
        ) {
            classes += " start";
        }

        grid.innerHTML += `<div class="${classes}">${day}</div>`;
    }

    // Total de dias juntos
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

    document.getElementById("daysTogether").innerText = diffDays;
}

window.addEventListener("load", renderRelationshipCalendar);




window.onload = () => {
    typeEffect();
    calculateDaysTogether();
};
const softQuotes = [
    "Você é suficiente.",
    "Não precisa se apressar.",
    "Está tudo bem ir devagar.",
    "Eu estou aqui.",
    "Um passo de cada vez.",
    "Você não está sozinha.",
    "Respira. Você está segura."
];

function setRandomQuote() {
    const el = document.getElementById("soft-quote");
    if (!el) return;

    const randomIndex = Math.floor(Math.random() * softQuotes.length);
    el.innerText = softQuotes[randomIndex];
}

window.addEventListener("load", setRandomQuote);
