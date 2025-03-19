'use strict';

const getal = Number(prompt("Geef een geheel getal: "));

if(getal %3==0 && getal%5==0)
    console.log("FizzBuzz");
else if(getal%3==0)
    console.log("Fizz");
else if (getal%5==0)
    console.log("Buzz");
else if(getal %3!=0 && getal%5!=0 && getal%1==0)
    console.log(getal);
else
    console.log("is not a number")



