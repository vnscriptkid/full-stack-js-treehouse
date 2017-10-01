function Question(title, choices, answer){
	this.title = title;
	this.choices = choices;
	this.answer = answer;	
}

Question.prototype.check = function(guess){
	return guess === this.answer;
}



