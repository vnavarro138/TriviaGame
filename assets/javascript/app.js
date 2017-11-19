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
var timeRemaining = 10 ; //120 seconds at start of timer
//TO DO: create an array with all the correct answers
var triviaGuesses = [];
var triviaAnswers = ["d","d","a","c","b","c","a","b","d","b","c","b","c","d","a"];
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
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
    if(timeRemaining <= 0) {
        clearInterval(downloadTimer);
        endGame();}
        },1000);

};
//not working - this happens when i click start   


//TO DO: when timer reaches 0: NOT WORKING
function endGame () {
	console.log("print results")
	timeRemaining = 0;
//results div has correct answers, incorrect answers, and unanswered 
	document.getElementById("results").style.display='block';
//DONE: states "All Done!"
	alert("Times Up!");	
	resultsDetermined();

}	
//DONE: create a function that compares the guessed answers to the correct trivia answers
function resultsDetermined () {
	for (var i = 0; i < triviaAnswers.length; i++) {
		if (triviaGuesses[i] === triviaAnswers[i]) {
		    	correctAnswers++;
    }
    //-TO DO: determine number of "incorrect answers:" diplayed (typeof not working) 
    //when i remove [i] is runs, doesn't work though
    else {
      if (typeof triviaGuesses[i] === "string") {
        incorrectAnswers++;

      }
      //-TO DO: determine number of "unanswered" : & display
      else {
        unanswered++;
      }
    }
  }

//DONE: number of "correct answers:" displayed  (USE SWITCH CASE)
		document.getElementById("correct-answers").textContent = correctAnswers;
		console.log("Correct Answers: " + correctAnswers);
    document.getElementById("incorrect-answers").textContent = incorrectAnswers;
    console.log("Incorrect Answers: " + incorrectAnswers);
    document.getElementById("unanswered").textContent = unanswered;
    console.log("Unanswered: " + unanswered);
}
 	
    
//DONE: create a button for them to select their answer
//DONE: capture the click and store their answers into an array
//DONE: Add an on click listener to all elements that have the class "number"
//DONE: only one answer per question is allowed to be selected
//DONE: allow user to select a different choice
      $(".answer-1").on("click", function(index,value) {
        triviaGuesses[0] = this.value;
        console.log(this.value);
        console.log(triviaGuesses);
        $(".answer-1").removeClass("selected");
        $(this).addClass("selected");       
      });
      $(".answer-2").on("click", function(index,value) {
        triviaGuesses[1] = this.value;
        console.log(this.value);
        console.log(triviaGuesses);
        $(".answer-2").removeClass("selected");
        $(this).addClass("selected"); 
      });
       $(".answer-3").on("click", function(index,value) {
        triviaGuesses[2] = this.value;
        console.log(this.value);
        console.log(triviaGuesses);
        $(".answer-3").removeClass("selected");
        $(this).addClass("selected"); 
      });
        $(".answer-4").on("click", function(index,value) {
        triviaGuesses[3] = this.value;
        console.log(this.value);
        console.log(triviaGuesses);
        $(".answer-4").removeClass("selected");
        $(this).addClass("selected"); 
      });
        $(".answer-5").on("click", function(index,value) {
        triviaGuesses[4] = this.value;
        console.log(this.value);
        console.log(triviaGuesses);
        $(".answer-5").removeClass("selected");
        $(this).addClass("selected"); 
      });
        $(".answer-6").on("click", function(index,value) {
        triviaGuesses[5] = this.value;
        console.log(this.value);
        console.log(triviaGuesses);
        $(".answer-6").removeClass("selected");
        $(this).addClass("selected"); 
      });
        $(".answer-7").on("click", function(index,value) {
        triviaGuesses[6] = this.value;
        console.log(this.value);
        console.log(triviaGuesses);
        $(".answer-7").removeClass("selected");
        $(this).addClass("selected"); 
      });
        $(".answer-8").on("click", function(index,value) {
        triviaGuesses[7] = this.value;
        console.log(this.value);
        console.log(triviaGuesses);
        $(".answer-8").removeClass("selected");
        $(this).addClass("selected"); 
      });
        $(".answer-9").on("click", function(index,value) {
        triviaGuesses[8] = this.value;
        console.log(this.value);
        console.log(triviaGuesses);
        $(".answer-9").removeClass("selected");
        $(this).addClass("selected"); 
      });
        $(".answer-10").on("click", function(index,value) {
        triviaGuesses[9] = this.value;
        console.log(this.value);
        console.log(triviaGuesses);
        $(".answer-10").removeClass("selected");
        $(this).addClass("selected"); 
      });
        $(".answer-11").on("click", function(index,value) {
        triviaGuesses[10] = this.value;
        console.log(this.value);
        console.log(triviaGuesses);
        $(".answer-11").removeClass("selected");
        $(this).addClass("selected"); 
      });
        $(".answer-12").on("click", function(index,value) {
        triviaGuesses[11] = this.value;
        console.log(this.value);
        console.log(triviaGuesses);
        $(".answer-12").removeClass("selected");
        $(this).addClass("selected"); 
      });
        $(".answer-13").on("click", function(index,value) {
        triviaGuesses[12] = this.value;
        console.log(this.value);
        console.log(triviaGuesses);
        $(".answer-13").removeClass("selected");
        $(this).addClass("selected"); 
      });
        $(".answer-14").on("click", function(index,value) {
        triviaGuesses[13] = this.value;
        console.log(this.value);
        console.log(triviaGuesses);
        $(".answer-14").removeClass("selected");
        $(this).addClass("selected"); 
      });