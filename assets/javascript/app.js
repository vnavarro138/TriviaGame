//create large start button
// click start 
/// - displays all questions
// - counter counts "Time Remaining" down from 120 seconds
//list all questions on the page
//create an array with all the correct answers
//create a button for them to select their answer
//store their answers into an array
//only one answer per question is allowed to be selected
//allow user to select a different choice
//create a function that compares the guessed answers to the correct trivia answers
//when timer reaches 0:
//-Repeats header (ie. trivia game)
//-states "All Done!"
//-number of "correct answers:" displayed 
//-number of "incorrect answers:" diplayed 
//-number of "unanswered" : displayed 
//------------------------------------------
//DONE: create large start button in HTML
//global variables
var clockRunning = false;
var timeRemaining = 120 ; //120 seconds at start of timer
//TO DO: create an array with all the correct answers
var triviaGuesses = [];
var triviaAnswers = ["d","d"];
//TO DO: click start & counter counts down from 120 seconds
$("#start").click(startGame);

function startGame() {
	console.log("started game");
    var downloadTimer = setInterval(function(){
    timeRemaining--;
    console.log(timeRemaining);
    document.getElementById("time-left").textContent = timeRemaining;
//DONE: list all questions on the page
	document.getElementById("quiz").style.display='block';
    if(timeRemaining <= 0)
        clearInterval(downloadTimer);
    },1000);
};


//TO DO: create a button for them to select their answer
//TO DO: capture the click and store their answers into an array
//Add an on click listener to all elements that have the class "number"
      $(".answer").on("click", function() {
        triviaGuesses.push(this.value);
        console.log(this.value);
      });
//TO DO: only one answer per question is allowed to be selected
//TO DO: allow user to select a different choice
//TO DO: create a function that compares the guessed answers to the correct trivia answers
//TO DO: when timer reaches 0:
//-TO DO: Repeats header (ie. trivia game)
//-TO DO: states "All Done!"
//-TO DO: number of "correct answers:" displayed 
//-TO DO: number of "incorrect answers:" diplayed 
//-TO DO: number of "unanswered" : displayed 