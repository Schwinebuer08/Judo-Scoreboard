let counterw = 0;
let timer_onw = 0;
let timeoutw;

function timeCountw() {
  counterw = Math.min(counterw + 1, maxOseikomi);
  timeoutw = setTimeout(timeCountw, 1000);
  document.getElementById("counterw").innerHTML =
    "Oseikomi:   " + counterw + "   Sekunden";
  if (counterw == maxOseikomi / 2) {
    weißwaz();
  } else if (counterw == maxOseikomi / 2 + 0.5) {
    weißwaz();
  } else if (counterw == maxOseikomi) {
    weißipp();
    stopCountw();
    stopCountdown();
  }
}

function startCountw() {
  if (!timer_onw) {
    timer_onw = 1;
    setTimeout(timeCountw, 1000);
    startCountdown();
  }
}

function stopCountw() {
  clearTimeout(timeoutw);
  timer_onw = 0;
}

function resetw() {
  stopCountw();
  counterw = counterw - counterw;
  document.getElementById("counterw").innerHTML =
    "Oseikomi:   " + counterw + "   Sekunden";
}
