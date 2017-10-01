var QuizUI = {
	displayNext : function(quiz){
		if(quiz.hasEnded()){
			this.showScore(quiz);
		} else {			
			this.showQuestion(quiz);
			this.showChoices(quiz);
			this.showProgress(quiz);
		}		
	},
	showScore : function(quiz){
		var html = 'You have ' + quiz.correct + ' answers';
		this.populateIdWithHtml('quiz', html);
	},
	showQuestion : function(quiz){
		var html = quiz.getCurrentQuestion().title;
		this.populateIdWithHtml('question', html);
	},
	showChoices : function(quiz){
		var that = this;
		quiz.getCurrentQuestion().choices.forEach(function(choice, index){
			that.populateIdWithHtml('choice_' + index, choice);
		});
	},
	showProgress : function(quiz){
		var html = 'Question ' + (quiz.currentQuestionIndex + 1) + ' of ' + quiz.questions.length;
		this.populateIdWithHtml('progress', html)
	}, 
	populateIdWithHtml : function(id, html){
		var ele = document.getElementById(id);
		ele.innerHTML = html;
	},
	attachClickHandler : function(quiz){
		var buttons = document.getElementById('quiz').getElementsByTagName('button');
		var that = this;
		for (let i = 0; i < buttons.length; i++){
			buttons[i].addEventListener('click', function(){				
				quiz.check(document.getElementById('choice_' + i).textContent);	
				quiz.next();											
				that.displayNext(quiz);								
			});
		} 
	}

}
