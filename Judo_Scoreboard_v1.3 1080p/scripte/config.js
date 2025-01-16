let maxpunkte = 10;
let maxOseikomi = 20;
let isopen = 0;

function saveConfig() {
  maxpunkte = document.getElementById("poi").value;
  maxOseikomi = document.getElementById("ose").value;
  startingMinutes = document.getElementById("tim").value;
  timeSave();
  wazari = document.getElementById("waz").value;
  ippon = document.getElementById("ipp").value;
}

function timeSave() {
  time = startingMinutes * 60;

  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("countdown").innerHTML = `${minutes}:${seconds}`;
}

function openConfig() {
  document.getElementById("config").style.display = "flex";
  document.getElementById("poi").value = maxpunkte;
  document.getElementById("ose").value = maxOseikomi;
  document.getElementById("tim").value = startingMinutes;
  document.getElementById("waz").value = wazari;
  document.getElementById("ipp").value = ippon;
}

function closeConfig() {
  document.getElementById("config").style.display = "none";
}
