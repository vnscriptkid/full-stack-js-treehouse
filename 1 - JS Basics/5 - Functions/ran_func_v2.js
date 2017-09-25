"use strict"

function randomNumber(a, b){
  //if a or b is not a number throw an error 
  if(isNaN(a) || isNaN(b))
    throw new Error('2 args must be numbers');
  
  //convert a or b to number if they are string
  if(typeof a === "string")
    a = parseInt(a);
  if(typeof b === "string")
    b = parseInt(b);
  
  //random a number between a and b (including a and b)
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

console.log(randomNumber('1', 4));
console.log(randomNumber(3, 4));
console.log(randomNumber('5', 8));
console.log(randomNumber(10, 20));
console.log(randomNumber(1, 'e'));
