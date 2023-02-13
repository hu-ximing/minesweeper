const width = document.querySelector('#width')
const height = document.querySelector('#height')
const numMines = document.querySelector('#num-mines')
const submit = document.querySelector('#start')
const cancel = document.querySelector('#cancel')
const form = document.querySelector('form')

form.onsubmit = function (e) {
    e.preventDefault();
    sessionStorage.setItem('width', width.value);
    sessionStorage.setItem('height', height.value);
    sessionStorage.setItem('numMines', numMines.value);
    window.open('game.html', '_self').focus();
}

cancel.onclick = function () {
    window.open('index.html', '_self').focus();
}
