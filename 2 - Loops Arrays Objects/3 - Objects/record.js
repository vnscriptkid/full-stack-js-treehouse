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

var html = '';

function printStudent(student){
  html += '<p> Name : '+student.name+'</p>';
  html += '<p> Track : '+student.track+'</p>';
  html += '<p> Achievements : '+student.achievements+'</p>';
  html += '<p> Points : '+student.points+'</p>';
  html += '<hr>'
  document.write(html);
}

function searchStudent(nameTarget, students){
  for (var i = 0; i < students.length; i++){
    name = students[i].name;
    if(name === nameTarget){
      printStudent(students[i]);
    }   
  }
}

var userName = prompt('Enter name to search: ');
searchStudent(userName, students);



