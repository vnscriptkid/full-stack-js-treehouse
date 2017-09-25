"use strict"

var students = [
  {
    name : 'thanh',
    track: ['ios', 'design', 'java'],
    achievements: 3,
    points: 500
  },
  {
    name : 'thao',
    track: ['js', 'security'],
    achievements: 1,
    points: 200
  },
  {
    name : 'linh',
    track: ['python', 'security', 'react', 'nodejs'],
    achievements: 3,
    points: 700
  }
  
]
var name,track,achievements,points;

var html = '';
for (var i = 0; i < students.length; i++){
  name = students[i].name;
  track = students[i].track;
  achievements = students[i].achievements;
  points = students[i].points;
  
  html += '<p> Name : '+name+'</p>';
  html += '<p> Track : '+track+'</p>';
  html += '<p> Achievements : '+achievements+'</p>';
  html += '<p> Points : '+points+'</p>';
  html += '<hr>'
}

document.write(html);

