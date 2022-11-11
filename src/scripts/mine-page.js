// change dark/light theme
const themeSelect = document.getElementById('select-theme')
const html = document.querySelector('html');
const flagIcon = document.getElementById('flag-counter').children[0];
const timerIcon = document.getElementById('timer').children[0];

themeSelect.addEventListener('change', changeTheme);
changeTheme();

function changeTheme() {
    switch (themeSelect.value) {
        case 'light':
            timerIcon.src = 'icons/timer_black.svg';
            flagIcon.src = 'icons/flag_black.svg';
            localStorage.setItem('theme', 'light');
            break;
        case 'dark':
            flagIcon.src = 'icons/flag_white.svg';
            timerIcon.src = 'icons/timer_white.svg';
            localStorage.setItem('theme', 'dark');
            break;
    }
    html.setAttribute('class', localStorage.getItem('theme'));
}

//timer
let timer = document.getElementById('timer');
let totalSeconds = 0;
let paused = false;
setInterval(setTime, 1000);

function setTime() {
    if (!paused)
        totalSeconds++;
    timer.children[1].textContent =
        `${formatTime(totalSeconds / 60)}:${formatTime(totalSeconds % 60)}`;
}

function formatTime(n) {
    n = Math.floor(n);
    let str = n + '';
    return str.length < 2 ? '0' + str : str;
}

//buttons
startOver = document.getElementById('start-over');
changeDifficulty = document.getElementById('change-difficulty');
pauseBtn = document.getElementById('pause');

startOver.onclick = function () {
    if (window.confirm('Do you want to start a new game?')) {
        location.reload();
    }
}

changeDifficulty.onclick = function () {
    if (window.confirm('change difficulty')) {
        window.open('index.html', '_self').focus();
    }
}

pauseBtn.onclick = function () {
    paused = !paused;

}

// confirm quit
// window.addEventListener('beforeunload', (event) => {
//     // Cancel the event as stated by the standard.
//     event.preventDefault();
//     // Chrome requires returnValue to be set.
//     event.returnValue = '';
// });
