"use strict";

let input = prompt("Geef een een palindroom: ");
input = input.toLowerCase();
const length = Math.floor(input.length);

for (let i = 0; i < length; i++) {
  let isPalindroom = true;
  if (input.charAt(i) !== input.charAt(length - 1 - i)) {
    isPalindroom = false;
    break;
  }
}

console.log(`${input} is${isPalindroom ? " wel een" : " geen"} palindroom`);
