let isconfig = 0;
let istime = 0;
let countb = 0;
let countw = 0;

document.addEventListener("keydown", function (key) {
  //-------------------------Kampfzeit-------------------------

  // Kampfzeit toggle
  if (key.key == "t") {
    if (istime == 0) {
      startCountdown();
      istime = 1;
    } else {
      stopCountdown();
      istime = 0;
      stopCountb();
      countb = 0;
      stopCountw();
      countw = 0;
    }
  }

  // Kampfzeit reset
  if (key.key == "T") {
    resetCountdown();
    istime = 0;
    countb = 0;
    countw = 0;
  }

  //-------------------------Punkte-------------------------

  // Punkt + Blau
  if (key.key == "f") {
    blau();
  }

  // Punkt - Blau
  if (key.key == "d") {
    blauminus();
  }

  // Punkt reset Blau
  if (key.key == "D") {
    blaureset();
  }

  // Punkt + Weiß
  if (key.key == "k") {
    weiß();
  }

  // Punkt - Weiß
  if (key.key == "j") {
    weißminus();
  }

  // Punkt reset Weiß
  if (key.key == "J") {
    weißreset();
  }

  //-------------------------Oseikomi-------------------------

  // Oseikomi Blau toggle
  if (key.key == "w") {
    if (countb == 0) {
      startCountb();
      countb = 1;
    } else {
      stopCountb();
      countb = 0;
    }
  }

  // Oseikomi Blau reset
  if (key.key == "W") {
    resetb();
    countb = 0;
  }

  // Oseikomi Weiß toggle
  if (key.key == "o") {
    if (countw == 0) {
      startCountw();
      countw = 1;
    } else {
      stopCountw();
      countw = 0;
    }
  }

  // Oseikomi Weiß reset
  if (key.key == "O") {
    resetw();
    countw = 0;
  }

  //-------------------------Shidos-------------------------

  // Shido + Blau
  if (key.key == "c") {
    Shidob();
  }

  // Shido - Blau
  if (key.key == "x") {
    Shidominusb();
  }

  // Shido reset Blau
  if (key.key == "X") {
    Shidoresetb();
  }

  // Shido + Weiß
  if (key.key == "m") {
    Shidow();
  }

  // Shido - Weiß
  if (key.key == ",") {
    Shidominusw();
  }

  // Shido reset Weiß
  if (key.key == ";") {
    Shidoresetw();
  }

  //-------------------------Reset all-------------------------
  if (key.key == "#") {
    resetCountdown();
    istime = 0;
    blaureset();
    weißreset();
    resetb();
    countb = 0;
    resetw();
    countw = 0;
    Shidoresetb();
    Shidoresetw();
  }

  //-------------------------Config-------------------------

  // Config toggle
  if (key.key == "'") {
    if (isconfig == 0) {
      openConfig();
      isconfig = 1;
    } else {
      closeConfig();
      isconfig = 0;
    }
  }

  //--------------
});
