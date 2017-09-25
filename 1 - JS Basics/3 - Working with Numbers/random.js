var a = parseInt(prompt('Enter smaller number : '));
var b = parseInt(prompt('Enter bigger number : ')); 

var ranNum = Math.floor(Math.random() * (b - a + 1)) + a;

alert('A random number from ' + a + ' to ' 
      + b + ' : ' + ranNum);
