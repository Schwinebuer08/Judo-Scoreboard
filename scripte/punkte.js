let punktew = 0;
let punkteb = 0;

function weiß() {
  punktew = Math.min(punktew+1,10);
  document.getElementById('PunkteWeiß').innerHTML = punktew + '  Punkte';
}
function weißwaz() {
  punktew = Math.min(punktew+2,10);
  document.getElementById('PunkteWeiß').innerHTML = punktew + '  Punkte';
}

function weißipp() {
  punktew = Math.min(punktew+3,10);
  document.getElementById('PunkteWeiß').innerHTML = punktew + '  Punkte';
}

function weißminus() {
  punktew = Math.max(punktew-1,0);
  document.getElementById('PunkteWeiß').innerHTML = punktew + '  Punkte';
}

function weißreset() {
  punktew = 0
}

function blau() {
  punkteb = Math.min(punkteb+1,10);
  document.getElementById('PunkteBlau').innerHTML = punkteb + '  Punkte';
}

function blauwaz() {
  punkteb = Math.min(punkteb+2,10);
  document.getElementById('PunkteBlau').innerHTML = punkteb + '  Punkte';
}

function blauipp() {
  punkteb = Math.min(punkteb+3,10);
  document.getElementById('PunkteBlau').innerHTML = punkteb + '  Punkte';
}

function blauminus() {
  punkteb = Math.max(punkteb-1,0);
  document.getElementById('PunkteBlau').innerHTML = punkteb + '  Punkte';
}

function blaureset() {
  punkteb = 0;
}