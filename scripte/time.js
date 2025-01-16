let startingMinutes = 2; // Kampfzeit
let time = startingMinutes * 60;
let myTimeout;
let countdown_on;
let audio = new Audio("sound/time_over.mp3");

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("countdown").innerHTML = `${minutes}:${seconds}`;
  time--;
  myTimeout = setTimeout(updateCountdown, 1000);

  if (minutes == 0) {
    if (seconds == 0) {
      resetCountdown();
      audio.play();
    }
  }

  if (punkteb == maxpunkte) {
    stopCountdown();
  }

  if (punktew == maxpunkte) {
    stopCountdown();
  }

  if (shidow == 3) {
    stopCountdown();
  }

  if (shidob == 3) {
    stopCountdown();
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
  stopCountdown();
  document.getElementById("countdown").innerHTML = startingMinutes + `:00`;
  timeSave();
}
