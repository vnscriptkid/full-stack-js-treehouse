"use strict"

for (var i = 1; i <= 10; i++){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var rgbColor = red + ',' + green + ',' + blue;

  var html = '<div style="width:30px;height:30px;background-color:rgb('+rgbColor+')"></div>'


  document.write(html);
}


