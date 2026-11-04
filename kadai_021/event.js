const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
setTimeout(() => {
  //どこのIDを取得して、→textCotentを指定する
  text.textContent ='クリックされました';
}, 2000);
});