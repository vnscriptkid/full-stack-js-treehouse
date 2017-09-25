"use strict"

var questions = [
  ["best team football?", "liverpool"],
  ["fastest football player?", "mane"],
  ["most skillful player?", "coutinho"]
];

var html = '';
html += '<h1>JavaScript Quiz</h1>';
var answer;
var question;
var response;
var correct = 0;
var correctAnswer = [];
var wrongAnswer = [];


function checkAnswers(questions){
	for (var i = 0; i < questions.length; i += 1){  
	    question = questions[i][0];
	    answer = questions[i][1];
	    response = prompt(question);
	    if(answer === response){	    	
	      correct++;
	      correctAnswer.push(questions[i][0]);
	    } else {
	      wrongAnswer.push(questions[i][0]);
	    }
	}
	html += '<br>You got ' + correct + ' question(s) right';
}


function addDetail(questionArray){
	html += '<h2>You got these questions wrong</h2>';
		html += '<ol>';
		for(var i = 0; i < questionArray.length; i++){
			html += '<li>' + questionArray[i] + '</li>';
		}
	html += '</ol>'
}

function printAll(html){
	document.write(html);
}

checkAnswers(questions);
addDetail(correctAnswer);
addDetail(wrongAnswer);
printAll(html);
