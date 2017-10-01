function Quiz(){
	this.questions = [];	
	this.currentQuestionIndex = 0;
	this.correct = 0;
}

Quiz.prototype.getCurrentQuestion = function(){
	return this.questions[this.currentQuestionIndex];
}

Quiz.prototype.check = function(guess){	
	if(this.getCurrentQuestion().check(guess))		
		this.correct += 1;
	// this.currentQuestionIndex += 1;
}

Quiz.prototype.next = function(){		
	this.currentQuestionIndex += 1;	
}

Quiz.prototype.hasEnded = function(){
	return this.currentQuestionIndex >= this.questions.length;
		
}



