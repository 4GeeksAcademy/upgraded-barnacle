import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandom(anyArray){
  let max = anyArray.length;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray [random];
}

function generateExcuse() {
  return getRandom(who) + " " +getRandom(action) + " " + getRandom(what) + " " + getRandom(when);
}

window.onload = function() {
  console.log("Hello Rigo from the console!");
  document.querySelector('#excuse').innerHTML = generateExcuse();
};
