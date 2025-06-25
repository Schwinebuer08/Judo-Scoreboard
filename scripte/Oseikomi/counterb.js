let counterb = 0;
let timer_onb = 0;
let timeoutb;

function timeCountb() {
  counterb = Math.min(counterb + 1, maxOseikomi);
  timeoutb = setTimeout(timeCountb, 1000);
  document.getElementById("counterb").innerHTML =
    "Oseikomi:   " + counterb + "   Sekunden";
  if (counterb == Math.round(maxOseikomi / 4)) {
    blauyuko();
  } else if (counterb == Math.round(maxOseikomi / 2)) {
    punkteb = punkteb - yuko;
    blauwaz();
  } else if (counterb == maxOseikomi) {
    punkteb = punkteb - wazari;
    blauipp();
    stopCountb();
    stopCountdown();
  }
}

function startCountb() {
  if (!timer_onb && counterb < maxOseikomi) {
    timer_onb = 1;
    startCountdown();
    setTimeout(timeCountb, 1000);
  }
}

function stopCountb() {
  clearTimeout(timeoutb);
  timer_onb = 0;
}

function resetCountb() {
  stopCountb();
  counterb = counterb - counterb;
  document.getElementById("counterb").innerHTML =
    "Oseikomi:   " + counterb + "   Sekunden";
}
