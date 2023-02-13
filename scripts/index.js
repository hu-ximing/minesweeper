function saveLevelParams(width, height, numMines) {
    sessionStorage.setItem('width', width);
    sessionStorage.setItem('height', height);
    sessionStorage.setItem('numMines', numMines);
}

function startNewGame() {
    window.open('game.html', '_self').focus();
}

document.getElementById('mines-10').onclick = function () {
    saveLevelParams(8, 8, 10);
    startNewGame();
}
document.getElementById('mines-40').onclick = function () {
    saveLevelParams(16, 16, 40);
    startNewGame();
}
document.getElementById('mines-99').onclick = function () {
    saveLevelParams(30, 16, 99);
    startNewGame();
}
document.getElementById('mines-custom').onclick = function () {
    window.open('custom.html', '_self').focus();
}
