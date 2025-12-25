// ================================
// Calendar DOM Elements
// ================================
const calendarGrid   = document.getElementById("calendarGrid");
const currentMonthEl = document.getElementById("currentMonth");
const prevBtn        = document.getElementById("prevMonth");
const nextBtn        = document.getElementById("nextMonth");

let currentDate = new Date();

// ================================
// Local Storage Helpers
// ================================
function getAppointments() {
  return JSON.parse(localStorage.getItem("appointments")) || [];
}

function saveAppointments(data) {
  localStorage.setItem("appointments", JSON.stringify(data));
}

// ================================
// Render Calendar (GLOBAL)
// ================================
window.renderCalendar = function () {
  calendarGrid.innerHTML = "";

  const year  = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Month & Year title
  currentMonthEl.textContent = new Date(year, month).toLocaleString("default", {
    month: "long",
    year: "numeric"
  });

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  // ----------------------------
  // Empty cells before month start
  // ----------------------------
  for (let i = 0; i < firstDay; i++) {
    calendarGrid.appendChild(document.createElement("div"));
  }

  // ----------------------------
  // Render each day
  // ----------------------------
  for (let day = 1; day <= lastDate; day++) {
    const cell = document.createElement("div");
    cell.innerHTML = `<strong>${day}</strong>`;

    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    const todaysAppointments = getAppointments().filter(
      app => app.date === dateStr
    );

    // ----------------------------
    // Appointments for the day
    // ----------------------------
    todaysAppointments.forEach(app => {
      const bar = document.createElement("div");
      bar.className = "calendar-appointment";

      // ✅ Required display format
      bar.innerHTML = `
        <span class="text">
          ${app.time} | ${app.patient} (${app.doctor})
        </span>
        <span class="icons">
          <span class="edit">✏️</span>
          <span class="delete">🗑</span>
        </span>
      `;

      // ✏️ EDIT → open modal
      bar.querySelector(".edit").onclick = (e) => {
        e.stopPropagation();
        window.openEditModal(app);
      };

      // 🗑 DELETE → immediate
      bar.querySelector(".delete").onclick = (e) => {
        e.stopPropagation();
        saveAppointments(
          getAppointments().filter(a => a.id !== app.id)
        );
        renderCalendar();
      };

      cell.appendChild(bar);
    });

    calendarGrid.appendChild(cell);
  }
};

// ================================
// Month Navigation
// ================================
prevBtn.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
};

nextBtn.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
};

// Initial render
renderCalendar();
