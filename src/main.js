/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/
import { getTasks, innitStore } from './js/local-storage-api';
import { createMarkupTasks } from './js/markup-tasks';
import refs from './js/refs';
import { renderTask } from './js/render-tasks';
import { handlerDelete, handlerForm } from './js/tasks';
import { handlerChangeTheme } from './js/theme-switcher';

innitStore();
renderTask(createMarkupTasks(getTasks()));
refs.form.addEventListener('submit', handlerForm);
refs.list.addEventListener('click', handlerDelete);
refs.btnTheme.addEventListener('click', handlerChangeTheme);
