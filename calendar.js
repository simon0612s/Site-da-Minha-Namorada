const calendarGrid = document.getElementById("calendarGrid");
const monthYear = document.getElementById("monthYear");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

let currentDate = new Date();

// DATAS IMPORTANTES
const startDate = new Date(2024, 8, 28); // 28/09/2024
const blueHeartStartDate = new Date(2024, 4, 31); // 31/05/2024

const monthNames = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];

function renderCalendar(date) {
  calendarGrid.innerHTML = "";

  const year = date.getFullYear();
  const month = date.getMonth();

  monthYear.textContent = `${monthNames[month]} ${year}`;

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = new Date();

  // Espaços vazios antes do primeiro dia
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarGrid.appendChild(document.createElement("div"));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.textContent = day;

    const cellDate = new Date(year, month, day);

    // DIA ATUAL
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayDiv.classList.add("today");
    }

    // 💜 DIA 28 (a partir de 28/09/2024)
    if (cellDate >= startDate && day === 28) {
      const emoji = document.createElement("span");
      emoji.classList.add("emoji");

      // 💍 aniversário em setembro
      emoji.textContent = month === 8 ? "💍" : "💜";
      dayDiv.appendChild(emoji);
    }

    // 💙 DIAS 18 E 31 (a partir de 31/05/2024)
    if (
      cellDate >= blueHeartStartDate &&
      (day === 9 ||day === 11 ||day === 18 || day === 31 )
    ) {
      const emoji = document.createElement("span");
      emoji.classList.add("emoji");
      emoji.textContent = "💙";
      dayDiv.appendChild(emoji);
    }

    calendarGrid.appendChild(dayDiv);
  }
}

// Navegação
prevMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// Inicializa
renderCalendar(currentDate);



// DATA BASE DO RELACIONAMENTO


function calculateTimeTogether() {
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    let days = today.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const daysInLastMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();
        days += daysInLastMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("yearsTogether").innerText = years;
    document.getElementById("monthsTogether").innerText = months;
    document.getElementById("daysTogether").innerText = days;
}

// Atualiza ao carregar
calculateTimeTogether();

// Atualiza automaticamente a cada hora
setInterval(calculateTimeTogether, 1000 * 60 * 60);


const calendar = document.getElementById("calendar");
for (let i = 1; i <= 30; i++) {
    const day = document.createElement("div");
    if (i === today.getDate()) day.innerText = "💜";
    calendar.appendChild(day);
}
