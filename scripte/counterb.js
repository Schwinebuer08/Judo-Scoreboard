let counterb = 0;
let timer_onb = 0;
let timeoutb;

function timedCountb() {
  counterb = Math.min(counterb + 1,20);
  timeoutb = setTimeout(timedCountb, 1000);
  document.getElementById("counterb").innerHTML = 'Oseikomi:   ' + counterb + '   Sekunden';
    if (counterb == 10){
      blauwaz();
    }
  if (counterb == 20){
    blauipp();
    clearTimeout(timeoutb);
  }
}

function startCountb() {
  if (!timer_onb) {
    timer_onb = 1;
    setTimeout(timedCountb, 1000);
  }
}

function stopCountb() {
  clearTimeout(timeoutb);
  timer_onb = 0;
}

function resetb() {
  stopCountb();
  counterb = counterb-counterb;
  document.getElementById("counterb").innerHTML = 'Oseikomi:   ' + counterb + '   Sekunden';
}