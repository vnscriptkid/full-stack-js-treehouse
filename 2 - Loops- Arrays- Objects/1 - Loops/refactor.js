"use strict"

var red, green, blue, rgbColor, html;

for (var i = 1; i <= 10; i++){
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);

  rgbColor = red + ',' + green + ',' + blue;

  html = '<div style="width:30px;height:30px;background-color:rgb('+rgbColor+')"></div>'


  document.write(html);
}


