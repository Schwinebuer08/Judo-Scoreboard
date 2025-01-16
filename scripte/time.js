const startingMinutes = 2; // Kampfzeit
let time = startingMinutes * 60;
let myTimeout;
let countdown_on = 0;
let audio = new Audio('sound/time_over.mp3');

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('countdown').innerHTML = `${minutes}:${seconds}`;
    time--;
    myTimeout = setTimeout(updateCountdown, 1000);

    if (minutes == 0) {
        if (seconds == 0) {
            resetCountdown();
            audio.play();
        }
    }

    if (punkteb == 10) {
        stopCountdown()
    }

    if (punktew == 10) {
        stopCountdown()
    }
}

function startCountdown() {
    if (!countdown_on) {
        countdown_on = 1;
        updateCountdown();
    }
}

function stopCountdown() {
    clearTimeout(myTimeout);
    countdown_on = 0;
}

function resetCountdown() {
    stopCountdown()
    document.getElementById('countdown').innerHTML = startingMinutes + `:00`;
    time = startingMinutes * 60;
}
