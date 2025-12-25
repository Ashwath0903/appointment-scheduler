# Appointment Scheduling Application

A responsive **Appointment Scheduling Web Application** built using **pure HTML, CSS, and JavaScript**.  
This project allows users to **create, view, edit, delete, search, and filter appointments** with both **calendar view** and **appointment list view**, following a clean and user-friendly UI.

---

## 🔹 Project Overview

This application is designed to help manage appointments efficiently without using any frameworks or backend services.

### Key Highlights:
- Pure **HTML, CSS, JavaScript** (No frameworks, libraries, or plugins)
- Data persistence using **localStorage**
- Fully **responsive** (Mobile, Tablet, Desktop)
- Clean modular file structure
- Calendar-based and List-based appointment management

---

## 🔹 Features

### 📅 Calendar View
- Monthly calendar with navigation (Previous / Next month)
- Appointments displayed inside respective date cells
- Each appointment shows:
  - Time  
  - Patient Name  
  - Doctor Name  
- Edit and Delete actions directly from the calendar

### 📋 Appointment List View
- Tabular view of all appointments
- Displays:
  - Patient Name
  - Doctor Name
  - Hospital
  - Specialty
  - Date
  - Time
- Edit and Delete options available

### 📝 Appointment Management
- Book new appointments using a modal popup
- Edit appointments using the same modal
- Delete appointments instantly
- Form validation for required fields

### 🔍 Search & Filter
- Search by Patient Name
- Search by Doctor Name
- Filter by Date Range (From Date – To Date)
- Filters dynamically update:
  - Appointment List
  - Calendar View

### 💾 Data Storage
- All data stored locally using **browser localStorage**
- No backend or API required

### 📱 Responsive Design
- Desktop
- Tablet
- Mobile
- Adaptive layout for forms, tables, calendar, and modal

---

## 🔹 Folder Structure
appointment-scheduler/
│
├── index.html # Calendar page
├── appointments.html # Appointment list page
├── README.md # Project documentation
│
├── css/
│ └── style.css # Complete styling & responsiveness
│
├── js/
│ ├── calendar.js # Calendar logic & rendering
│ ├── modal.js # Modal & form handling
│ ├── appointments.js # Appointment list, search & filters
│ └── storage.js # LocalStorage helper functions
│
└── assets/
└── logo.png # Application logo


---

## 🔹 Technologies Used

- **HTML5**
- **CSS3** (Flexbox, Grid, Media Queries)
- **JavaScript (ES6)**
- **LocalStorage**

❌ No frameworks  
❌ No libraries  
❌ No backend  

---

## 🔹 How to Run the Project

### Option 1: Run Locally
1. Download or clone the repository
2. Open `index.html` in your browser
3. Start booking appointments

### Option 2: Live Server (Recommended)
- Use VS Code extension **Live Server**
- Right click `index.html` → *Open with Live Server*

---

## 🔹 Deployment Options

You can deploy this project easily since it is a static application.

### 🌐 Netlify
1. Go to https://www.netlify.com
2. Drag and drop the project folder
3. Done ✅

### 🌐 GitHub Pages
1. Push project to GitHub repository
2. Go to **Settings → Pages**
3. Select branch → Save
4. Access via GitHub Pages URL

### 🌐 Vercel
1. Go to https://vercel.com
2. Import GitHub repository
3. Deploy

---

## 🔹 Screens / Pages

- **Calendar Page** – `index.html`
- **Appointment List Page** – `appointments.html`
- **Modal Popup** – Used for both Create & Edit actions

---

## 🔹 Validation & Error Handling

- Required field validation
- Safe handling for empty data
- Graceful UI behavior for no appointments

---

## 🔹 Limitations

- No backend (localStorage only)
- Data clears if browser storage is cleared
- Single-user usage

---

## 🔹 Future Enhancements (Optional)

- Backend integration
- Authentication
- Email notifications
- Drag & drop calendar events
- Export appointments to CSV/PDF

---

## 🔹 Author

**Developed by:**  
**Ashwath M**

---

## 🔹 License

This project is open for learning, evaluation, and demonstration purposes.

---

✅ **Fully completed with technical task guidelines**  
✅ **No frameworks or libraries used**  
✅ **Clean, readable, and structured code**
