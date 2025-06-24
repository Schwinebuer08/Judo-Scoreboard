let maxpunkte = 10;
let maxOseikomi = 20;

function saveConfig() {
  maxpunkte = document.getElementById("poi").value;
  maxOseikomi = document.getElementById("ose").value;
  startingMinutes = document.getElementById("tim").value;
  timeSave();
  yuko = document.getElementById("yuk").value;
  wazari = document.getElementById("waz").value;
  ippon = document.getElementById("ipp").value;
  closeConfig();
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
  document.getElementById("yuk").value = yuko;
  document.getElementById("waz").value = wazari;
  document.getElementById("ipp").value = ippon;
  document.getElementById("main").style.display = "none";
  document.getElementById("shido_time").style.display = "none";
  document.getElementById("Tunier").style.display = "none";
  document.getElementById("Gewichtsklasse").style.display = "none";
  document.getElementById("Mirror").style.display = "none";
}

function closeConfig() {
  document.getElementById("config").style.display = "none";
  document.getElementById("main").style.display = "flex";
  document.getElementById("shido_time").style.display = "flex";
  document.getElementById("Tunier").style.display = "flex";
  document.getElementById("Gewichtsklasse").style.display = "flex";
  isconfig = 0;
  document.getElementById("fileInput").value = "";
  document.getElementById("Mirror").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
  const fileInput = document.getElementById("fileInput");
  if (fileInput) {
    fileInput.addEventListener("change", () =>  {
      const fr = new FileReader();
      fr.readAsText(fileInput.files[0]);
      fr.addEventListener("load", () => {
        let configData = JSON.parse(fr.result);
        maxpunkte = configData.maxpunkte;
        maxOseikomi = configData.maxOseikomi;
        startingMinutes = configData.startingMinutes;
        yuko = configData.yuko;
        wazari = configData.wazari;
        ippon = configData.ippon;
        document.getElementById("Tunier").value = configData.Tunier;
        document.getElementById("Gewichtsklasse").value = configData.Gewichtsklasse;
        openConfig();
      });
    });
  }
});