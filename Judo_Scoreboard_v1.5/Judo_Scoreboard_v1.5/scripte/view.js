let mirroredWindow = null;

function openMirroredWindow() {
  if (!mirroredWindow || mirroredWindow.closed) {
    mirroredWindow = window.open("", "MirroredWindow");
    mirroredWindow.document.write(`
<!DOCTYPE html>
<html lang="de">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Judo Scoreboard</title>
  <link rel="icon" type="image/x-icon" href="img/logo_tsv.png" />
  <link href="style.css" rel="stylesheet" />
</head>

<body  style="background-image: linear-gradient(to right, blue 50%, white 50%);">
  <nav>
      <input type="text" class="links title" id="ViewTunier" name="Tunier" placeholder="Tunier" />
      <input type="text" class="rechts title" id="ViewGewichtsklasse" name="Masse" placeholder="Gewichtsklasse" />
    </div>
  </nav>

  <main id="main">
    <div class="kämpfer">
      <div class="links" style="color: white;">
        <input class="inb" type="text" id="ViewKampferB" value="___" /><br />
        <p id="ViewPunkteBlau">0 Punkte</p>
        <br />
        <p id="Viewcounterb">Oseikomi: 0 Sekunden</p>
        <br />
        <p id="ViewShidob">Shido</p>
      </div>
      <div class="rechts" style="color: black;">
        <input class="inw" type="text" id="ViewKampferA" value="___" /><br />
        <p id="ViewPunkteWeiß">0 Punkte</p>
        <br />
        <p id="Viewcounterw">Oseikomi: 0 Sekunden</p>
        <br />
        <p id="ViewShidow">Shido</p>
      </div>
    </div>
  </main>
  <footer class="shido_time" id="shido_time">
    <img class="red_dot" id="Viewimg1b" src="img/red_dot.png" style="visibility: hidden" />
    <img class="red_dot" id="Viewimg2b" src="img/red_dot.png" style="visibility: hidden" />
    <img class="red_dot" id="Viewimg3b" src="img/red_dot.png" style="visibility: hidden" />
    <p class="countdown" id="Viewcountdown">2:00</p>
    <img class="red_dot" id="Viewimg3w" src="img/red_dot.png" style="visibility: hidden" />
    <img class="red_dot" id="Viewimg2w" src="img/red_dot.png" style="visibility: hidden" />
    <img class="red_dot" id="Viewimg1w" src="img/red_dot.png" style="visibility: hidden" />
  </footer>

</body>
  <script src="scripte/view.js"></script>
</html>    `);
  }
}

const broadcast = new BroadcastChannel("judo_scoreboard_channel");

setInterval(updateMirroredWindow, 50); // Update countdown 20 times per second
  broadcast.onmessage = function (event) {
    const data = event.data;
    if (data.ViewTunier) {
      document.getElementById("ViewTunier").value = data.ViewTunier;
    }
    if (data.ViewGewichtsklasse) {
      document.getElementById("ViewGewichtsklasse").value =
        data.ViewGewichtsklasse;
    }

    if (data.ViewKämpferA) {
      document.getElementById("ViewKampferA").value = data.ViewKämpferA;
    }
    if (data.ViewKämpferB) {
      document.getElementById("ViewKampferB").value = data.ViewKämpferB;
    }

    if (data.ViewPunkteBlau) {
      document.getElementById("ViewPunkteBlau").innerHTML = data.ViewPunkteBlau;
    }
    if (data.Viewcounterb) {
      document.getElementById("Viewcounterb").innerHTML = data.Viewcounterb;
    }

    if (data.ViewPunkteWeiß) {
      document.getElementById("ViewPunkteWeiß").innerHTML = data.ViewPunkteWeiß;
    }
    if (data.Viewcounterw) {
      document.getElementById("Viewcounterw").innerHTML = data.Viewcounterw;
    }

    if (data.Viewcountdown) {
      document.getElementById("Viewcountdown").innerHTML = data.Viewcountdown;
    }

    if (data.Viewimg1b) {
      document.getElementById("Viewimg1b").style.visibility = data.Viewimg1b;
    }
    if (data.Viewimg2b) {
      document.getElementById("Viewimg2b").style.visibility = data.Viewimg2b;
    }
    if (data.Viewimg3b) {
      document.getElementById("Viewimg3b").style.visibility = data.Viewimg3b;
    }
    if (data.Viewimg1w) {
      document.getElementById("Viewimg1w").style.visibility = data.Viewimg1w;
    }
    if (data.Viewimg2w) {
      document.getElementById("Viewimg2w").style.visibility = data.Viewimg2w;
    }
    if (data.Viewimg3w) {
      document.getElementById("Viewimg3w").style.visibility = data.Viewimg3w;
    }

    console.clear();
  };

  function updateMirroredWindow() {
  broadcast.postMessage({
    ViewTunier: document.getElementById("Tunier")?.value,
    ViewGewichtsklasse: document.getElementById("Gewichtsklasse")?.value,

    ViewKämpferA: document.getElementById("KampferA")?.value,
    ViewKämpferB: document.getElementById("KampferB")?.value,

    ViewPunkteBlau: document.getElementById("PunkteBlau")?.innerHTML,
    Viewcounterb: document.getElementById("counterb")?.innerHTML,

    ViewPunkteWeiß: document.getElementById("PunkteWeiß")?.innerHTML,
    Viewcounterw: document.getElementById("counterw")?.innerHTML,

    Viewcountdown: document.getElementById("countdown")?.innerHTML,

    Viewimg1b: document.getElementById("img1b")?.style.visibility,
    Viewimg2b: document.getElementById("img2b")?.style.visibility,
    Viewimg3b: document.getElementById("img3b")?.style.visibility,

    Viewimg1w: document.getElementById("img1w")?.style.visibility,
    Viewimg2w: document.getElementById("img2w")?.style.visibility,
    Viewimg3w: document.getElementById("img3w")?.style.visibility,
  });
  }
