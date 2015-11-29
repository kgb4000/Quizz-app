// Questions

var qData = [

 question1 = new Question("What was the first year President Obama was elected?", ['2012', '2010', '2014', '2008', '2016'], '2008'),

 question2 = new Question("What state was President Obama born?",['California', 'Illinois','Idaho', 'Hawaii', 'Maryland'],"Hawaii"),

 question3 = new Question("What name of the Pesident's dog?",['Alabama', 'Illinois','Idaho', 'Mable', 'Maryland'],"Mable")
];

// First page
var $header = $('header');
var $start = $('.start-quizz-btn');

// Start Question page
var $question = $('.question');
var $choices = $('.choices');
var $results = $('.results').hide();;
var questionCounter = 0;
var Score = 0;

// Btns
var $nextBtn = $('#next-btn').hide();
var $reset = $('#reset-btn').hide();
var $submit = $('#submit-btn').hide().attr('disabled', 'disabled');
var $submitReset = $('submit-reset');

// Start the quiz
function startQuizz(){
	$start.on('click', function() {
		$header.hide();
		$start.hide();
		$question.empty();
		$choices.empty();
		renderQuestion(qData[0]);
		questionCounter = 1;
	});
}
startQuizz();

// Constructor function for question app
function Question(question, choices, answer) {
	this.question = question;
	this.choices = choices;
	this.answer = answer;
}

function renderQuestion(q) {

	$question.html('<h1>' + q.question + '</h1>'); 

	// Loop through choices to add radio buttons
	for(var i = 0; i < q.choices.length; i++){
		$choices.append('<li class="line-element"><input type="radio" id=' + q.choices[i] + ' name="choices" value=' + q.choices[i] + ' /><label for=' + q.choices[i] + '>' + q.choices[i] + '</label></li>');
	}

	//Add submit button
	$submit.show();

	// Add reset button
	$reset.show();

	var $correctAnswer = q.answer;

	$('input[type="radio"]').on('click', function() {
		$('input[type="radio"]:checked').each(function() {
			var userChoice = $(this).attr('value');
			console.log(userChoice);

			if($('input[type="radio"]:checked')){
				$submit.removeAttr('disabled');
			}

			$submit.on('click', function(e) {
				e.preventDefault();
				$('input[type="radio"]').attr('disabled', true);
				$(this).hide();
				$results.show();
				$nextBtn.show();

				if(userChoice === $correctAnswer){
					$results.text('That is correct');
					Score++;
				}
				else {
					$results.text('That is incorrect, the correct answer is ' + $correctAnswer);
				}
				$submitReset.append($nextBtn);
			});
		});
	});
}

function checkQuestions() {
	if(questionCounter === qData.length){
		console.log(questionCounter);
		console.log(qData.length);
		$nextBtn.hide();
		$submit.hide();
		$results.text('You finished the quiz');
		$results.after($reset);
		console.log(questionCounter);
	}
	else{
		nextQuestion();
	}
}
checkQuestions();

// Next question
function nextQuestion(){
	$nextBtn.on('click', function(e) {
		e.preventDefault();
		questionCounter++;
		$question.empty();
		$choices.empty();
		$results.text('');
		$(this).hide();
		$reset.hide();
		$submit.hide();
		$submit.attr('disabled', 'disabled');
		renderQuestion(qData[questionCounter]);
		console.log(questionCounter);
	});
}

// Reset 
function resetQuiz() {
	$reset.on ('click', function(e) {
		e.preventDefault();
		if(confirm('Are you sure?')){
			questionCounter = 0;
			Score = 0;
			$header.show();
			$start.show();
			$question.empty();
			$choices.empty();
			$question.empty();
			$choices.empty();
			$nextBtn.hide();
			$results.text('');
			$(this).hide();
			$submit.hide();
			$submit.attr('disabled', 'disabled');
		}
	});
}
resetQuiz();








