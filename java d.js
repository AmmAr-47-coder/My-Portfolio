let ht1 = document.getElementById("ht1");
let ht2 = document.getElementById("ht2");
let ht3 = document.getElementById("ht3");
let ht4 = document.getElementById("ht4");
let prt1 = document.getElementById("dds1");
let prt2 = document.getElementById("dds2");
let prt3 = document.getElementById("dds3");
let prt4 = document.getElementById("dds4");
let dds1 = document.getElementById("dd");

onscroll = function () {
  if (scrollY >= 1500) {
    prt1.style.animationName = "ltr";
    prt1.style.opacity = "1";
    prt2.style.animationName = "ttb";
    prt2.style.opacity = "1";
    prt3.style.animationName = "rtl";
    prt3.style.opacity = "1";
    prt4.style.animationName = "rtl";
    prt4.style.opacity = "1";
  }

  if (scrollY >= 1000) {
    ht1.style.animationName = "ltr";
    ht1.style.opacity = "1";
    ht2.style.animationName = "ttb";
    ht2.style.opacity = "1";
    ht3.style.animationName = "rtl";
    ht3.style.opacity = "1";
    ht4.style.animationName = "rtl";
    ht4.style.opacity = "1";
  }
}
function fgfg() {
  setTimeout(function fdf() {
    document.getElementById("ffdf").style.opacity = "1";
  }, 2200);

  setTimeout(function fdf() {
    document.getElementById("ffdf2").style.opacity = "1";
  }, 2700);
  setTimeout(function fdf() {
    document.getElementById("ffdf3").style.opacity = "1";
  }, 3200);
  setTimeout(function fdf() {
    document.getElementById("ffdf4").style.opacity = "1";
  }, 3700);
  setTimeout(function fdf() {
    document.getElementById("ffdf5").style.opacity = "1";
  }, 4200);
  setTimeout(function fdf() {
    document.getElementById("sfdf1").style.opacity = "1";
  }, 550);
  setTimeout(function fdf() {
    document.getElementById("sfdf2").style.opacity = "1";
  }, 1050);
  setTimeout(function fdf() {
    document.getElementById("sfdf3").style.opacity = "1";
  }, 1550);
  setTimeout(function fdf() {
    document.getElementById("sfdf4").style.opacity = "1";
  }, 2050);
}


const texte = document.querySelector("#inf")
function text(){
    setTimeout(() => {
      texte.textContent = "React.js";
    }, 0);
    setTimeout(() => {
      texte.textContent = "HTML ";
    }, 4000);
    setTimeout(() => {
      texte.textContent = "CSS ";
    }, 8000);
    setTimeout(() => {
      texte.textContent = "Java Script ";
    }, 12000);
  }
window.onload = fgfg();
window.onload = text();
setInterval(text, 16000);