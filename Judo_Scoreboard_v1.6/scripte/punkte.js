let punktew = 0;
let punkteb = 0;
let wazari = 2;
let ippon = 3;
let yuko = 1;

function weiß() {
  punktew = Math.min(punktew + 1, maxpunkte);
  document.getElementById("PunkteWeiß").innerHTML = punktew + " Punkte";
}

function weißyuko() {
  punktew = Math.min(punktew + Number(yuko), maxpunkte);
  document.getElementById("PunkteWeiß").innerHTML = punktew + " Punkte";
}

function minusweißyuko() {
  punktew = Math.max(punktew - Number(yuko), 0);
  document.getElementById("PunkteWeiß").innerHTML = punktew + " Punkte";
}

function weißwaz() {
  punktew = Math.min(punktew + Number(wazari), maxpunkte);
  document.getElementById("PunkteWeiß").innerHTML = punktew + " Punkte";
}

function minusweißwaz() {
  punktew = Math.max(punktew - Number(wazari), 0);
  document.getElementById("PunkteWeiß").innerHTML = punktew + " Punkte";
}

function weißipp() {
  punktew = Math.min(punktew + Number(ippon), maxpunkte);
  document.getElementById("PunkteWeiß").innerHTML = punktew + " Punkte";
}

function minusweißipp() {
  punktew = Math.max(punktew - Number(ippon), 0);
  document.getElementById("PunkteWeiß").innerHTML = punktew + " Punkte";
}

function weißminus() {
  punktew = Math.max(punktew - 1, 0);
  document.getElementById("PunkteWeiß").innerHTML = punktew + " Punkte";
}

function weißreset() {
  punktew = 0;
  document.getElementById("PunkteWeiß").innerHTML = 0 + " Punkte";
}

function blau() {
  punkteb = Math.min(punkteb + 1, maxpunkte);
  document.getElementById("PunkteBlau").innerHTML = punkteb + " Punkte";
}

function blauyuko() {
  punkteb = Math.min(punkteb + Number(yuko), maxpunkte);
  document.getElementById("PunkteBlau").innerHTML = punkteb + " Punkte";
}

function minusblauyuko() {
  punkteb = Math.max(punkteb - Number(yuko), 0);
  document.getElementById("PunkteBlau").innerHTML = punkteb + " Punkte";
}

function blauwaz() {
  punkteb = Math.min(punkteb + Number(wazari), maxpunkte);
  document.getElementById("PunkteBlau").innerHTML = punkteb + " Punkte";
}

function minusblauwaz() {
  punkteb = Math.max(punkteb - Number(wazari), 0);
  document.getElementById("PunkteBlau").innerHTML = punkteb + " Punkte";
}

function blauipp() {
  punkteb = Math.min(punkteb + Number(ippon), maxpunkte);
  document.getElementById("PunkteBlau").innerHTML = punkteb + " Punkte";
}

function minusblauipp() {
  punkteb = Math.max(punkteb - Number(ippon), 0);
  document.getElementById("PunkteBlau").innerHTML = punkteb + " Punkte";
}

function blauminus() {
  punkteb = Math.max(punkteb - 1, 0);
  document.getElementById("PunkteBlau").innerHTML = punkteb + " Punkte";
}

function blaureset() {
  punkteb = 0;
  document.getElementById("PunkteBlau").innerHTML = 0 + " Punkte";
}
