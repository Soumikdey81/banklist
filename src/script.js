"use strict";

const date = new Date().toLocaleDateString();
document.getElementById("curDate").innerHTML = date;

const currency = "€";
document.getElementById("curIcon").innerHTML = currency;

const deposite = document.getElementsByClassName("deposite");
for (let i = 0; i < deposite.length; i++) {
  deposite[i].innerHTML = "Deposite";
  deposite[i].classList.add("bg-green-500");
}
