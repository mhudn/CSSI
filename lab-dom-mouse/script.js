let button = document.querySelector('button');

button.addEventListener('mouseover', () => {
  button.innerHTML = 'Don\'t click!';
  button.classList.add('danger');
});

button.addEventListener('mouseout', () => {
  button.innerHTML = 'Click me!';
  button.classList.remove('danger');
});

let size = document.querySelector('size');

button.addEventListener('mousemove', () => {
  size = size + 1;
  button.style.width = size + 'px';
  button.style.height = size + 'px';
});
