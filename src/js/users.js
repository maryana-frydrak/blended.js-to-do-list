import {
  getStudentsList,
  createStudent,
  updateStudent,
  replaceStudent,
  deleteStudent,
} from './students-api';

const refs = {
  userListElem: document.querySelector('.js-user-list'),
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
};

document.addEventListener('DOMContentLoaded', () => {
  getStudentsList().then(res => {
    const arr = res.items;
    const markup = studentsTemplate(arr);
    refs.userListElem.innerHTML = markup;
  });
});

function studentTemplate(student) {
  return ` <li class="card user-item" data-id="${id}">
      <img
      src="https://source.unsplash.com/1200×720/?random=431&book"
      alt="#
      class="user-avatar"
      />
      <h3 class="user-title">${student.firstName} ${student.lastName}</h3>
      <p>major: ${student.major}</p>
      <p>cohortYear: ${student.cohortYear}</p>
      <button class="btn button">DELETE</button>
  </li>`;
}

function studentsTemplate(arr) {
  return arr.map(studentTemplate).join('');
}
