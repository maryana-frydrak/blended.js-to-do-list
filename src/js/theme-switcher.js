export function handlerChangeTheme() {
  const theme = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('theme-dark');
}
