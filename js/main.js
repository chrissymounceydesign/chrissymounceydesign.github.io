function askQuestions() {

	// what is their name//
	var firstName = prompt ('what is your first name?')
	var lastName = prompt ('what is your last name?')

	var fullName = firstName + ' ' +lastName;

	$('h2').text('Hello ' + fullName);

	var userAge = prompt ('how old are you?')

	userAge = parseInt(userAge);

	if (userAge >= 18) {
		console.log('user is an adult.');
		}	else if (userAge >= 13) {
		console.log('user is an teenager.');
		} else { //this would also give the response below if user puts in anything that isn't over 13, eg cat!//
		console.log('user is a child.');
		}	
		

	if (firstName === 'General' && lastName != 'Assembly') {
		console.log('Greetings General');
	}

	//or   if (firstName ==== 'General') && if (lastName !== 'Assembly') { console.log('Greetings, General!'); }
	//     case sensitive if(firstName.toLowerCase() === 'general' && lastName. toLowerCase() !== 'assembly') { console.log('Greetings, Genera!');}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'green' ||
		faveColour == 'yellow') {

		$('h2').css('color', faveColour);
	}
}

//When the page loads

$(function() {

	$('img').on('click', askQuestions);


// alert($); (for testing jquery has loaded into website)


	//when the page loads hide the sections
	$('h3').next().hide();

	// When the user clicks an h3 heading 

	$('h3').on('click', function() {

	
		// show or hide the next element
		$(this).next().slideToggle(1000);

		})

});