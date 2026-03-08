export function saveTask(task) {
  const tasks = [] || getTasks();
  tasks.push(task);
  const zip = JSON.stringify(tasks);
  localStorage.setItem('tasks', zip);
}

export function getTasks() {
  return JSON.parse(localStorage.getItem('tasks'));
}

export function innitStore() {
  const tasks = getTasks() || [];
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function deleteTaskStore(id) {
  const arr = getTasks();
  const newArr = arr.filter(el => el.id !== id);
  localStorage.setItem('tasks', JSON.stringify(newArr));
}

export function saveTheme(theme) {
  localStorage.setItem('user-theme', JSON.stringify(theme));
}
