let shidob = 0;
let shidow = 0;

function Shidob() {
    shidob = Math.min(shidob + 1,3);
    // document.getElementById('Shidob').innerHTML = shidob + ' Shido';
    img1b()
    img2b()
    img3b()
}

function Shidominusb() {
    shidob = Math.max(shidob - 1,0);
    // document.getElementById('Shidob').innerHTML = shidob + ' Shido';
    img1b()
    img2b()
    img3b()
}

function Shidoresetb() {
    shidob = 0;
    // document.getElementById('Shidob').innerHTML = shidob + ' Shido';
    img1b()
    img2b()
    img3b()
}

function Shidow() {
    shidow = Math.min(shidow + 1,3);
    // document.getElementById('Shidow').innerHTML = shidow + ' Shido';
    img1w()
    img2w()
    img3w()
}

function Shidominusw() {
    shidow = Math.max(shidow - 1,0);
    // document.getElementById('Shidow').innerHTML = shidow + ' Shido';
    img1w()
    img2w()
    img3w()
}

function Shidoresetw() {
    shidow = 0;
    // document.getElementById('Shidow').innerHTML = shidow + ' Shido';
    img1w()
    img2w()
    img3w()
}

function img1b() {
    if (shidob >= 1) {
        document.getElementById('img1b').style.visibility = "visible";
    } else {
        document.getElementById('img1b').style.visibility = "hidden";
    }
}
    
function img2b() {
    if (shidob >= 2) {
        document.getElementById('img2b').style.visibility = "visible";
    } else {
        document.getElementById('img2b').style.visibility = "hidden";
    }
}

function img3b() {
    if (shidob >= 3) {
        document.getElementById('img3b').style.visibility = "visible";
    } else {
        document.getElementById('img3b').style.visibility = "hidden";
    }
}
function img1w() {
    if (shidow >= 1) {
        document.getElementById('img1w').style.visibility = "visible";
    } else {
        document.getElementById('img1w').style.visibility = "hidden";
    }
}
    
function img2w() {
    if (shidow >= 2) {
        document.getElementById('img2w').style.visibility = "visible";
    } else {
        document.getElementById('img2w').style.visibility = "hidden";
    }
}

function img3w() {
    if (shidow >= 3) {
        document.getElementById('img3w').style.visibility = "visible";
    } else {
        document.getElementById('img3w').style.visibility = "hidden";
    }
}
