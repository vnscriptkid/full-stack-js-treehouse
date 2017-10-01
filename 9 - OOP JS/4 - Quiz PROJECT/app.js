const ques = document.getElementById('question');
const ans_0 = document.getElementById('choice_0');
const ans_1 = document.getElementById('choice_1');
const guess_0 = document.getElementById('guess_0');
const guess_1 = document.getElementById('guess_1');
const grid = document.getElementById('grid');

var ques_0 = new Question('best football team?', ['liverpool', 'mu'], 'liverpool');
var ques_1 = new Question('capital of vietnam?', ['hanoi', 'saigon'], 'hanoi');
var ques_2 = new Question('name of a movie?', ['amazing race', 'matrix'], 'matrix');
var myQuiz = new Quiz();

myQuiz.questions.push(ques_0);
myQuiz.questions.push(ques_1);
myQuiz.questions.push(ques_2);

QuizUI.attachClickHandler(myQuiz);
QuizUI.displayNext(myQuiz);





