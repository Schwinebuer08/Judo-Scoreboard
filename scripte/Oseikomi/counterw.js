let counterw = 0;
let timer_onw = 0;
let timeoutw;

function timeCountw() {
  counterw = Math.min(counterw + 1, maxOseikomi);
  timeoutw = setTimeout(timeCountw, 1000);
  document.getElementById("counterw").innerHTML =
    "Oseikomi:   " + counterw + "   Sekunden";
  if (counterw == Math.round(maxOseikomi / 4)) {
    weißyuko();
  } else if (counterw == Math.round(maxOseikomi / 2)) {
    punktew = punktew - yuko;
    weißwaz();
  } else if (counterw == maxOseikomi) {
    punktew = punktew - wazari;
    weißipp();
    stopCountw();
    stopCountdown();
  }
}

function startCountw() {
  if (!timer_onw && counterw < maxOseikomi) {
    timer_onw = 1;
    startCountdown();
    setTimeout(timeCountw, 1000);
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
