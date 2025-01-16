let counterw = 0;
let timer_onw = 0;
let timeoutw;

function timedCountw() {
  counterw = Math.min(counterw + 1,20);
  timeoutw = setTimeout(timedCountw, 1000);
  document.getElementById("counterw").innerHTML = 'Oseikomi:   ' + counterw + '   Sekunden';
  if (counterw>9) {
    if (counterw<11){
      weißwaz();
    }
  } 
  if (counterw>19){
    weißipp();
    clearTimeout(timeoutw);
  }
}

function startCountw() {
  if (!timer_onw) {
    timer_onw = 1;
    setTimeout(timedCountw, 1000);
  }
}

function stopCountw() {
  clearTimeout(timeoutw);
  timer_onw = 0;
}

function resetw() {
  stopCountw();
  counterw = counterw-counterw;
  document.getElementById("counterw").innerHTML = 'Oseikomi:   ' + counterw + '   Sekunden';
}