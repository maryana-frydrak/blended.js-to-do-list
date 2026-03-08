import { nanoid } from 'nanoid';
import { deleteTaskStore, saveTask } from './local-storage-api';
import { createMarkup } from './markup-tasks';
import { renderTask } from './render-tasks';

export function handlerForm(e) {
  e.preventDefault();
  const { taskName, taskDescription } = e.target.elements;
  //   console.log(taskName.value);
  //   console.log(taskDescription.value);
  if (taskName.value.trim() === '' || taskDescription.value.trim() === '') {
    return alert('Поле не може бути пустим, введіть значення');
  }
  const data = {
    id: nanoid(),
    name: taskName.value.trim(),
    description: taskDescription.value.trim(),
  };
  renderTask(createMarkup(data));
  saveTask(data);
  //   console.log(data);
  e.currentTarget.reset();
}

export function handlerDelete(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const parent = e.target.parentElement;
  deleteTaskStore(parent.dataset.id);
  parent.remove();
}
