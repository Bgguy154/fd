import { renderPrincipalView } from './components/PrincipalView.js';
import { renderTeacherView } from './components/TeacherView.js';
import { renderStudentView } from './components/StudentView.js';
import { renderLoginView } from './components/Login.js';

// Basic Routing Logic
function loadView() {
  const userRole = localStorage.getItem('userRole');
  
  switch (userRole) {
    case 'Principal':
      renderPrincipalView();
      break;
    case 'Teacher':
      renderTeacherView();
      break;
    case 'Student':
      renderStudentView();
      break;
    default:
      renderLoginView();
      break;
  }
}

window.addEventListener('load', loadView);
