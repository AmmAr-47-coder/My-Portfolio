let ht1 = document.getElementById("ht1");
let ht2 = document.getElementById("ht2");
let ht3 = document.getElementById("ht3");
let ht4 = document.getElementById("ht4");
let prt1 = document.getElementById("dds1");
let prt2 = document.getElementById("dds2");
let prt3 = document.getElementById("dds3");
let prt4 = document.getElementById("dds4");
let dds1 = document.getElementById("dd");

function fgfg() {
  setTimeout(() => {
    document.getElementById("ffdf").style.opacity = "1";
  }, 2200);
  setTimeout(() => {
    document.getElementById("ffdf2").style.opacity = "1";
  }, 2700);
  setTimeout(() => {
    document.getElementById("ffdf3").style.opacity = "1";
  }, 3200);
  setTimeout(() => {
    document.getElementById("ffdf4").style.opacity = "1";
  }, 3700);
  setTimeout(() => {
    document.getElementById("ffdf5").style.opacity = "1";
  }, 4200);
  setTimeout(() => {
    document.getElementById("sfdf1").style.opacity = "1";
  }, 550);
  setTimeout(() => {
    document.getElementById("sfdf2").style.opacity = "1";
  }, 1050);
  setTimeout(() => {
    document.getElementById("sfdf3").style.opacity = "1";
  }, 1550);
  setTimeout(() => {
    document.getElementById("sfdf4").style.opacity = "1";
  }, 2050);
}

const texte = document.querySelector("#inf");
function text() {
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
    texte.textContent = "JavaScript ";
  }, 12000);
}

window.onload = function () {
  fgfg();
  text();
  setInterval(text, 16000);
};
