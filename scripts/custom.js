const width = document.querySelector('#width')
const height = document.querySelector('#height')
const numMines = document.querySelector('#num-mines')
const submit = document.querySelector('#start')
submit.addEventListener('click', () => {
    sessionStorage.setItem('width', width.value);
    sessionStorage.setItem('height', height.value);
    sessionStorage.setItem('numMines', numMines.value);
    window.open('mines.html');
})