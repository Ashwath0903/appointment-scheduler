/* =========================
   Edit State
========================= */
let editingId = null;

/* =========================
   Storage Helpers
========================= */
function getAppointments() {
  return JSON.parse(localStorage.getItem("appointments")) || [];
}

function saveAppointments(data) {
  localStorage.setItem("appointments", JSON.stringify(data));
}

/* =========================
   Modal Logic
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("appointmentModal");
  const form = document.getElementById("appointmentForm");
  const deleteBtn = document.getElementById("deleteAppointment");

  /* Open modal (New Appointment) */
  document.getElementById("openModalBtn")?.addEventListener("click", () => {
    editingId = null;
    form.reset();
    deleteBtn.style.display = "none";
    modal.style.display = "flex";
  });

  /* Close modal */
  document.getElementById("closeModal").onclick = () => {
    modal.style.display = "none";
  };

  /* Open modal (Edit Appointment) */
  window.openEditModal = app => {
    editingId = app.id;

    patientName.value = app.patient;
    doctorName.value = app.doctor;
    hospitalName.value = app.hospital;
    specialty.value = app.specialty;
    appointmentDate.value = app.date;
    appointmentTime.value = app.time;
    reason.value = app.reason;

    deleteBtn.style.display = "none";
    modal.style.display = "flex";
  };

  /* Save (Create / Update) */
  form.onsubmit = e => {
    e.preventDefault();

    let data = getAppointments();

    const appointment = {
      id: editingId || Date.now(),
      patient: patientName.value,
      doctor: doctorName.value,
      hospital: hospitalName.value,
      specialty: specialty.value,
      date: appointmentDate.value,
      time: appointmentTime.value,
      reason: reason.value
    };

    if (editingId) {
      const index = data.findIndex(a => a.id === editingId);
      data[index] = appointment;
    } else {
      data.push(appointment);
    }

    saveAppointments(data);
    modal.style.display = "none";
    editingId = null;

    // Refresh views if available
    if (window.renderCalendar) renderCalendar();
    if (window.renderAppointments) renderAppointments();
  };
});
