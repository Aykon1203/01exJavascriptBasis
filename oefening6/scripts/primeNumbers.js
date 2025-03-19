"use strict";

let priemgetal;
while (isNaN(priemgetal)) priemgetal = Number(prompt("Geef een priemgetal"));

for (let i = 2; i < priemgetal; i++) {
  let isPriem = true;
  for (let index = 2; index <= Math.sqrt(i); index++) {
    if (i % index === 0) {
      isPriem = false;
      break;
    }
  }
  if (isPriem) {
    console.log(i);
  }
}
