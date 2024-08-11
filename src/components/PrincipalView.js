export function renderPrincipalView() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <h1>Welcome, Principal</h1>
      <button id="createClassroom">Create Classroom</button>
      <button id="manageTeachers">Manage Teachers</button>
      <button id="manageStudents">Manage Students</button>
      <button id="logout">Logout</button>
    `;
  
    document.getElementById('createClassroom').addEventListener('click', () => {
      alert('Classroom created');
    });
  
    document.getElementById('logout').addEventListener('click', () => {
      localStorage.removeItem('userRole');
      location.reload();
    });
  }
  