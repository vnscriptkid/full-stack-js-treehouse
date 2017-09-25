var count = 0;

var q1 = parseInt(prompt('1 + 1 = ?'));
var q2 = parseInt(prompt('1 + 2 = ?'));
var q3 = parseInt(prompt('2 + 2 = ?'));
var q4 = parseInt(prompt('3 - 1 = ?'));
var q5 = parseInt(prompt('5 + 1 = ?'));

var r1 = false, r2 = false, r3 = false, r4 = false,
    r5 = false;

if (q1 === 2){
  r1 = true;
  count++;
}

if (q2 === 3){
  r2 = true;
  count++;
}

if (q3 === 4){
  r3 = true;
  count++;
}

if (q4 === 2){
  r4 = true;
  count++;
}

if (q5 === 6){
  r5 = true;
  count++;
}

var good = '';
if(r1 === true)
  good += ' 1 ';
if(r2 === true)
  good += ' 2 ' ;
if(r3 === true)
  good += ' 3 ' ;
if(r4 === true)
  good += ' 4 ' ;
if(r5 === true)
  good += ' 5 ' ;
document.write('You\'re right at ' + count + ' questions.');
if (good !== '')
  document.write('<br>Right answers are : ' + good + '<br>');

if(count === 5)
  document.write('<strong>You earned a gold crown</strong>');
else if(count === 4)
  document.write('<strong>You earned a silver crown</strong>');
else if(count === 3)
  document.write('<strong>You earned a bronze crown</strong>');
else 
  document.write('<strong>You earned nothing</strong>');
  

  


  
