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
    name: taskName.value.trim(),
    description: taskDescription.value.trim(),
  };
  renderTask(createMarkup(data));
  //   console.log(data);
  e.currentTarget.reset();
}
