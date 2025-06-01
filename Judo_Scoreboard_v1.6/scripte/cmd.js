let isconfig = 0;
let istime = 0;
let iscountb = 0;
let iscountw = 0;
let isShift = 0;
let isStrg = 0;

document.addEventListener("keydown", function (e) {
  if (e.key == "Shift") {
    isShift = 1;
  } else {
    isShift = 0;
  }
  if (e.key == "Control") {
    isStrg = 1;
  } else {
    isStrg = 0;
  }

  //-------------------------Reset all-------------------------
  if (e.key == "#") {
    resetCountdown();
    // istime = 0;
    blaureset();
    weißreset();
    resetCountb();
    iscountb = 0;
    resetCountw();
    iscountw = 0;
    Shidoresetb();
    Shidoresetw();
  }

  //-------------------------Config-------------------------

  // Config toggle
  if (e.key == "'") {
    if (isconfig == 0) {
      openConfig();
      isconfig = 1;
    } else {
      closeConfig();
      isconfig = 0;
    }
  }
});

document.addEventListener("keyup", function (e) {
  isShift = 0;
  isStrg = 0;
});

function clickPunkteBlau() {
  if (isShift == 1) {
    blauminus();
  } else if (isStrg == 1) {
    blaureset();
  } else {
    blau();
  }
  updateMirroredWindow()
}

function clickPunkteWeiß() {
  if (isShift == 1) {
    weißminus();
  } else if (isStrg == 1) {
    weißreset();
  } else {
    weiß();
  }
}

function clickOseikomiBlau() {
  if (iscountb == 0 && isStrg == 0) {
    startCountb();
    iscountb = 1;
  } else if (iscountb == 1 && isStrg == 0) {
    stopCountb();
    iscountb = 0;
  } else if (isStrg == 1) {
    resetCountb();
  }
}

function clickOseikomiWeiß() {
  if (iscountw == 0 && isStrg == 0) {
    startCountw();
    iscountw = 1;
  } else if (iscountw == 1 && isStrg == 0) {
    stopCountw();
    iscountw = 0;
  } else if (isStrg == 1) {
    resetCountw();
  }
}

function clickShidoBlau() {
  if (isShift == 1) {
    Shidominusb();
  } else if (isStrg == 1) {
    Shidoresetb();
  } else {
    Shidob();
  }
}

function clickShidoWeiß() {
  if (isShift == 1) {
    Shidominusw();
  } else if (isStrg == 1) {
    Shidoresetw();
  } else {
    Shidow();
  }
}

function clickTime() {
  if (istime == 0 && isStrg == 0) {
    startCountdown();
    istime = 1;
  } else if (istime == 1 && isStrg == 0) {
    stopCountdown();
    istime = 0;
  } else if (isStrg == 1) {
    resetCountdown();
    istime = 0;
  }
}
