// ELEMENTOS FIXOS
const menuBtn = document.getElementById("menuBtn");
const sidebarContainer = document.getElementById("sidebarContainer");
const body = document.body;

// CARREGAR SIDEBAR
fetch("components/sidebar.html")
    .then(response => response.text())
    .then(html => {
        // Insere a sidebar no container
        sidebarContainer.innerHTML = html;

        // Agora os elementos existem no DOM
        const closeBtn = document.getElementById("closeSidebar");
        const sidebar = document.querySelector(".sidebar");

        // ABRIR SIDEBAR
        menuBtn.addEventListener("click", () => {
            sidebarContainer.classList.add("active");
            body.classList.add("sidebar-open"); // esconde o botão ☰
        });

        // FECHAR SIDEBAR PELO BOTÃO X
        closeBtn.addEventListener("click", () => {
            closeSidebar();
        });

        // FECHAR CLICANDO FORA DA SIDEBAR
        sidebarContainer.addEventListener("click", (event) => {
            if (!sidebar.contains(event.target)) {
                closeSidebar();
            }
        });

        // FUNÇÃO CENTRALIZADA DE FECHAMENTO
        function closeSidebar() {
            sidebarContainer.classList.remove("active");
            body.classList.remove("sidebar-open");
        }
    });

// FRASES SUAVES (continua igual)
const quotes = [
    "Você é suficiente.",
    "Não precisa se apressar.",
    "Eu estou aqui.",
    "Um dia de cada vez."
];

const quoteEl = document.getElementById("softQuote");
if (quoteEl) {
    quoteEl.innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

const circle = document.getElementById("secretCircle");
const secretContent = document.getElementById("secretContent");

let holdTimer;

circle.addEventListener("mousedown", startHold);
circle.addEventListener("touchstart", startHold);

circle.addEventListener("mouseup", cancelHold);
circle.addEventListener("mouseleave", cancelHold);
circle.addEventListener("touchend", cancelHold);

function startHold() {
    circle.classList.add("holding");

    holdTimer = setTimeout(() => {
        circle.classList.remove("holding");
        circle.classList.add("dissolve");

        setTimeout(() => {
            circle.style.display = "none";
            secretContent.classList.add("show");
        }, 1000);

    }, 3000);
}

function cancelHold() {
    clearTimeout(holdTimer);
    circle.classList.remove("holding");
}
