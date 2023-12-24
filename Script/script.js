import confetti from "https://esm.sh/canvas-confetti@1.6.0";

let btn = document.getElementById("btn");
let input = document.getElementById("thala");
let music = document.getElementById("bole-koyal");
let moye = document.getElementById("moye");

let params = new URLSearchParams(location.search);

// implement share
window.addEventListener("load", () => {
  let query = params.get("q");
  if (!query) return;
  console.log(query);
  input.value = query;
  btn.click();
});



btn.addEventListener("click", (e) => {
  music.currentTime = 0;
  moye.currentTime = 0;
  let value = input.value;
  console.log(isThala(value));
  if (isThala(value)) {
    document.body.style.backgroundImage =
      "url('https://media1.tenor.com/m/xKeJyC9B4IkAAAAd/bole-jo-koyal.gif')";
    confetti({
      particleCount: 200,
    });
    music.play();
    setTimeout(() => {
      music.pause();
      music.currentTime = 0;
    }, 10000);
  } else {
    document.body.style.backgroundImage =
      "url('https://media1.tenor.com/m/BYZf0mMHcY4AAAAC/%E7%9A%849.gif')";
    moye.play();
    setTimeout(() => {
      moye.pause();
      moye.currentTime = 0;
    }, 10000);
  }
});

function isThala(string) {
  let isNumber = !!parseInt(string);
  let arrayOfValue = string.split("");
  if (isNumber) {
    let sum = 0;
    arrayOfValue.forEach((e) => {
      sum += parseInt(e);
    });
    return sum == 7;
  } else {
    return arrayOfValue.length == 7;
  }
}
