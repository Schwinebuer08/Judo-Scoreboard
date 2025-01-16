let counterb = 0;
let timer_onb = 0;
let timeoutb;

function timeCountb() {
  counterb = Math.min(counterb + 1, maxOseikomi);
  timeoutb = setTimeout(timeCountb, 1000);
  document.getElementById("counterb").innerHTML =
    "Oseikomi:   " + counterb + "   Sekunden";
  if (counterb == maxOseikomi / 2) {
    blauwaz();
  } else if (counterb == maxOseikomi / 2 + 0.5) {
    blauwaz();
  } else if (counterb == maxOseikomi) {
    blauipp();
    stopCountb();
    stopCountdown();
  }
}

function startCountb() {
  if (!timer_onb) {
    timer_onb = 1;
    setTimeout(timeCountb, 1000);
    startCountdown();
  }
}

function stopCountb() {
  clearTimeout(timeoutb);
  timer_onb = 0;
}

function resetb() {
  stopCountb();
  counterb = counterb - counterb;
  document.getElementById("counterb").innerHTML =
    "Oseikomi:   " + counterb + "   Sekunden";
}
