
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
    name : 'thanh',
    track: ['python', 'security', 'react', 'nodejs'],
    achievements: 3,
    points: 700
  }  
];

var userName;

function printResult(html){  
  var outputDiv = document.querySelector('#output');
  outputDiv.innerHTML = html;
}

function getStudentHtml(student){
  var report = '<p> Name : '+student.name+'</p>';
  report += '<p> Track : '+student.track+'</p>';
  report += '<p> Achievements : '+student.achievements+'</p>';
  report += '<p> Points : '+student.points+'</p>';
  report += '<hr>'
  return report;
}

function searchStudent(nameTarget){
  var final = '';
  var found = false;
  for (var i = 0; i < students.length; i++){
    name = students[i].name;
    if(name === nameTarget){
      final += getStudentHtml(students[i]);
      found = true;
    }   
  }
  if (found === false)
    final += '<p>Student not found</p>';
  
  printResult(final);
}

while (true){
	userName = prompt('Enter name to search or \'quit\' to exit: ');
	if(userName.toLowerCase() === 'quit')
		break;
	searchStudent(userName);
}






