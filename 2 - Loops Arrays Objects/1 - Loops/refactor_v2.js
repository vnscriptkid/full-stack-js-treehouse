"use strict"

var rgbColor, html ='';

function randomColor(){
  return Math.floor(Math.random() * 256);
}

function printColors(html){
  document.write(html);
}

for (var i = 1; i <= 10; i++){ 

  rgbColor = randomColor() + ',' + randomColor() + ',' + randomColor();

  html += '<div style="width:30px;height:30px;background-color:rgb('+rgbColor+')"></div>'
  
}

printColors(html);


