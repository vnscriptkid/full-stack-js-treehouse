function randomNumber(a, b){
  //random a number between a and b (including a and b)
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

document.write('<p>' + randomNumber(2,4) + '</p>');
