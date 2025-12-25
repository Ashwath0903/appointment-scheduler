function getAppointments() {
    return JSON.parse(localStorage.getItem("appointments")) || [];
  }
  
  function saveAppointments(data) {
    localStorage.setItem("appointments", JSON.stringify(data));
  }
  