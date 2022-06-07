
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var correct = 0;


	if (question1 == "service provider") {
		correct++;
}
if (question2 == "voice calls") {
	correct++;
}
if (question3 == "broadband pipe") {
	correct++;
}
if (question4 == "data centre") {
	correct++;
}
if (question5 == "disruptive technology") {
	correct++;
}
if (question6 == "internet access") {
	correct++;
}
if (question7 == "search engine") {
	correct++;
}
if (question8 == "digital camera") {
	correct++;
}
	
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 5) {
		score = 1;
	}

	if (correct == 8) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
