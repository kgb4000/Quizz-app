/*********************************

Construtor Notation for Quiz App

*********************************/

$(function() {

	var $content = $(".content");
	var $questions = $('#questions');
	var $choices = $('#choices');
	var $results = $('#results');
	var Score = 0;
	var $nextButton = $('<a id="next-button" href="#">Next question</a>').fadeIn(3000);

	$questions.hide().fadeIn(1000);
	$choices.hide().fadeIn(3000);

	// Constructor function for questions

	function Questions(question, choices, correctAnswer) {
		this.question = question;
		this.choices = choices;
		this.correctAnswer = correctAnswer;
	}

	var question1 = new Questions('What was the first year President Obama was elected?',['1989', '2001', '2006', '2010', '2012'], '2012');

	var question2 = new Questions('What is the color of the White House?', ['White', 'Red', 'Pink', 'Black', 'Purple'], 'White');

	// Insert questions into page
	$questions.text(question1.question);

	var $correctAnswer = question1.correctAnswer;

	// Loop through possible answers and insert into page
	for(var i = 0; i < question1.choices.length; i++){
		$choices.append('<div class="line-elements"><input type="radio" value=' +question1.choices[i] +' name="choices" /><label id="choice">' + question1.choices[i] + '</label></div>');
	}
	// Add submit button
	$('div:last').after('<input type="submit" id="button" value="Submit" />');

	// Get value of input checked by user for attribute value, WOW.
	$('input[type="radio"]').on('click', function() {
		$("input[type='radio']:checked").each(function() {
        var userChoice = $(this).attr("value");
        console.log(userChoice);
    
	    $('#button').on('click', function(e) {
	    	e.preventDefault();
	    	$(this).attr('disabled', 'disabled');
	    	console.log('What');

	    	if(userChoice == $correctAnswer){
	        	console.log('Yes');
	        	$results.html($correctAnswer + ' is correctamundo');
	        	Score++;
	        	console.log(Score);
	        }
	        else {
	        	$results.html('That is incorrect');
	        }

	      $results.after($nextButton);

	    });

	  });  
        
	});

	// Click next button to go to next question

	$nextButton.on('click', function() {
		console.log('next Question');

		$questions.text(question1.question).fadeOut(1000);
		$question1.choices.fadeOut(1000);

	});

});


























