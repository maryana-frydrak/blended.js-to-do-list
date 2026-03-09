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
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark'.JSON.stringify(theme));
  } else {
    localStorage.setItem('theme', 'light'.JSON.stringify(theme));
  }
}

export function getTheme() {
  return JSON.parse(localStorage.getItem('theme'));
}

export function innitTheme() {
  const loadTheme = getTheme() || [];
  if (loadTheme === 'dark') {
    body.classList.add('dark', JSON.stringify(tasks));
  }
}
