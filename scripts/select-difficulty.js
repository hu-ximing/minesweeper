function storeGameOptions(width, height, numMines) {
    sessionStorage.setItem('width', width);
    sessionStorage.setItem('height', height);
    sessionStorage.setItem('numMines', numMines);
}

function startNewGame() {
    window.open('mines.html', '_self').focus();
}

document.getElementById('10mines').onclick = function () {
    storeGameOptions(8, 8, 10);
    startNewGame();
}
document.getElementById('40mines').onclick = function () {
    storeGameOptions(16, 16, 40);
    startNewGame();
}
document.getElementById('99mines').onclick = function () {
    storeGameOptions(30, 16, 99);
    startNewGame();
}
document.getElementById('custom').onclick = function () {
    window.open('custom.html', '_self').focus();
}