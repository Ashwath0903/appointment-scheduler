const tableBody = document.getElementById("appointmentTableBody");

const patientSearch = document.getElementById("patientSearch");
const doctorSearch = document.getElementById("doctorSearch");
const fromDate = document.getElementById("fromDate");
const toDate = document.getElementById("toDate");
const clearBtn = document.getElementById("clearFilters");

/* ======================
   STORAGE HELPER
====================== */
function getAppointments() {
  return JSON.parse(localStorage.getItem("appointments")) || [];
}

/* ======================
   RENDER APPOINTMENTS
====================== */
window.renderAppointments = function () {
  tableBody.innerHTML = "";

  const patientText = patientSearch.value.toLowerCase();
  const doctorText = doctorSearch.value.toLowerCase();
  const from = fromDate.value;
  const to = toDate.value;

  let data = getAppointments();

  // APPLY FILTERS
  data = data.filter(app => {
    const matchPatient = app.patient.toLowerCase().includes(patientText);
    const matchDoctor = app.doctor.toLowerCase().includes(doctorText);

    let matchDate = true;
    if (from && to) {
      matchDate = app.date >= from && app.date <= to;
    } else if (from) {
      matchDate = app.date >= from;
    } else if (to) {
      matchDate = app.date <= to;
    }

    return matchPatient && matchDoctor && matchDate;
  });

  data.forEach(app => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${app.patient}</td>
      <td>${app.doctor}</td>
      <td>${app.hospital || "-"}</td>
      <td>${app.specialty || "-"}</td>
      <td>${app.date}</td>
      <td>${app.time}</td>
      <td class="action-icons">
        <span class="edit">✏️</span>
        <span class="delete">🗑</span>
      </td>
    `;

    // EDIT
    row.querySelector(".edit").onclick = () => {
      window.openEditModal(app);
    };

    // DELETE
    row.querySelector(".delete").onclick = () => {
      const updated = getAppointments().filter(a => a.id !== app.id);
      localStorage.setItem("appointments", JSON.stringify(updated));
      renderAppointments();
    };

    tableBody.appendChild(row);
  });
};

/* ======================
   FILTER EVENTS
====================== */
patientSearch.addEventListener("input", renderAppointments);
doctorSearch.addEventListener("input", renderAppointments);
fromDate.addEventListener("change", renderAppointments);
toDate.addEventListener("change", renderAppointments);

// CLEAR FILTERS
clearBtn.addEventListener("click", () => {
  patientSearch.value = "";
  doctorSearch.value = "";
  fromDate.value = "";
  toDate.value = "";
  renderAppointments();
});

// Initial load
renderAppointments();
