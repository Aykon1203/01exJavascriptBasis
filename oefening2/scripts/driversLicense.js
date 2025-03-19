"use strict";
const max = 70;
const kmPerPoint = 5;
let points;
let extra;

const snelheid = prompt("Hoe snel gaat u?");

if (snelheid <= max) console.log("OK");
if (snelheid > max) {
  extra = snelheid - max;
  points=Math.floor(extra / kmPerPoint);
  console.log(`points: ${points}`);
}
