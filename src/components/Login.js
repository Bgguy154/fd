export function renderLoginView() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <h1>Login</h1>
      <label for="role">Select Role:</label>
      <select id="role">
        <option value="Principal">Principal</option>
        <option value="Teacher">Teacher</option>
        <option value="Student">Student</option>
      </select>
      <button id="login">Login</button>
    `;
  
    document.getElementById('login').addEventListener('click', () => {
      const role = document.getElementById('role').value;
      localStorage.setItem('userRole', role);
      location.reload();
    });
  }
  