const button = document.querySelector('#testButton');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
  result.textContent = '正常に動作しています。';
});
