"use strict";

const date = new Date().toLocaleDateString();
document.getElementById("curDate").innerHTML = date;

// const currency = "€";
// document.getElementById("curIcon").innerHTML = currency;

// const deposite = document.getElementsByClassName("deposite");
// for (let i = 0; i < deposite.length; i++) {
//   deposite[i].innerHTML = "Deposite";
//   deposite[i].classList.add("bg-green-500");
// }

// Data
const account1 = {
  owner: "James Schmedtmann",
  movement: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};
const account2 = {
  owner: "Jessica Davis",
  movement: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};
const account3 = {
  owner: "Steven Thomas Williams",
  movement: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};
const account4 = {
  owner: "Sarah Smith",
  movement: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
