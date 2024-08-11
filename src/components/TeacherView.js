export function renderTeacherView() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <h1>Welcome, Teacher</h1>
      <button id="viewClassroom">View Classroom</button>
      <button id="createTimetable">Create Timetable</button>
      <button id="logout">Logout</button>
    `;
  
    document.getElementById('logout').addEventListener('click', () => {
      localStorage.removeItem('userRole');
      location.reload();
    });
  }
  