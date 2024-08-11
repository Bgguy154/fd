export function renderStudentView() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <h1>Welcome, Student</h1>
      <button id="viewTimetable">View Timetable</button>
      <button id="logout">Logout</button>
    `;
  
    document.getElementById('logout').addEventListener('click', () => {
      localStorage.removeItem('userRole');
      location.reload();
    });
  }
  