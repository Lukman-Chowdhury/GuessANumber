"use strict";

//const str = document.querySelector(".status").textContent;
//console.log(str);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(secretNumber);
let currentScore = 100;
let bstScore = Number(document.querySelector(".bs-scre").textContent);

let cnt = 1;
document.querySelector(".chck").addEventListener("click", function () {
  const str = Number(document.querySelector(".number").value);
  console.log(str);
  console.log(typeof str);
  console.log(document.querySelector(".status").textContent);
  if (!str || str < 0 || str > 20) {
    document.querySelector(".status").textContent = "Wrong Guess";
  } 
  else if (cnt > 5) {
    document.querySelector(".status").textContent = "You Lose.";
    document.querySelector(".reload").style.visibility = "visible";
    document.querySelector(".number").style.visibility = "hidden";
    document.querySelector(".chck").style.visibility = "hidden";
  } 
  else if (str == secretNumber) {
    document.querySelector(".status").textContent = "Correct Answer";
    cnt++;
    if (currentScore > bstScore) {
      bstScore = currentScore;
      document.querySelector(".bs-scre").textContent = currentScore;
    }
    document.querySelector(".reload").style.visibility = "visible";
    document.querySelector(".number").style.visibility = "hidden";
    document.querySelector(".chck").style.visibility = "hidden";
  } 
  else if (str > secretNumber) {
    document.querySelector(".status").textContent = "High";
    cnt++;
    currentScore -= 20;
    document.querySelector(".scre").textContent = currentScore;
  } 
  else {
    document.querySelector(".status").textContent = "Low";
    cnt++;
    currentScore -= 20;
    document.querySelector(".scre").textContent = currentScore;
  }
  document.querySelector(".number").value = null;
});


document.querySelector(".reload").addEventListener("click", function (){
  document.querySelector(".status").textContent = "Guessing!";
  document.querySelector(".scre").textContent = "100";
  cnt = 1;
  currentScore = 100;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".reload").style.visibility = "hidden";
    document.querySelector(".number").style.visibility = "visible";
    document.querySelector(".chck").style.visibility = "visible";
});