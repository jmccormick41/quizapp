
$(document).ready (function() {


//question objects
var questions = [
{
  qNum: 1,
  q: "Who won the World Series in Major League Baseball in 2015?",
  choices: ["New York Mets", "Kansas City Royals", "Los Angeles Dodgers", "New York Yankees"],
  correct: 2,
},

{
  qNum: 2,
  q: "Which U.S. President served more than 2 terms?", 
  choices: ["Ronald Reagan", "George W Bush", "Abraham Lincoln", "Franklin Delano Roosevelt"],
  correct: 4,
  
},

 {
  qNum: 3,
  q: "Who won his first Oscar in 2015?",
  choices: ["Dustin Hoffman", "Robin Williams", "Leonardo Dicaprio", "Julia Roberts"],
  correct: 3,

},

{
  qNum: 4,
  q: "Who is the richest man in the United States?",
  choices: ["Bill Gates", "Warren Buffet", "Mark Zuckerburg", "Larry Ellison"],
  correct: 1,
  
},

{
  qNum: 5,
  q: "What is the Capital of New Mexico??",
  choices: ["Albuquerque", "Santa Fe", "Carlsbad", "Roswell"],
  correct: 2,
  
},

{
  qNum: 6,
  q: "YWho won the Super Bowl in 2016",
  choices: ["Carolina Panthers", "Green Bay Packers", "Arizona Cardinals", "Denver Broncos"],
  correct: 4,
  
}
];

//global variables
var currentQuestion = 1;
var correctAnswers = 0;
var totalQuestions = questions.length;
var questionIndex = 0;
var correctText = "Correct!";
var wrongText = "That's incorrect";


// on clicking begin
  $("#begin").click(function() {
    //  hide instructions
    $("#instructions").fadeOut("fast");
    $("#quiz").show("slow", getQuestion);
  });
  
// starting new game function
 function startGame() {
    currentQuestion = 1;
    correctAnswers = 0;
    questionIndex = 0;
    $("#question").show();
    $("#choices").show();
    $("#submitAnswer").show();
    $("#playAgain").hide();
    $('input:radio[name=radios]').attr('checked',false);
    getQuestion();
 };

 //get question and choices, show question #
 function getQuestion() {
  // questionIndex++;
  $("#currentQ").text(questions[questionIndex].q);
  $("#choice0").text(questions[questionIndex].choices[0]);
  $("#choice1").text(questions[questionIndex].choices[1]);
  $("#choice2").text(questions[questionIndex].choices[2]);
  $("#choice3").text(questions[questionIndex].choices[3]);
  $("#count").text("Question " + currentQuestion + " of 6");
 };


//check Answer function
  function checkAnswer() {
    // console.log("answer checked");
    var radioValue = false;
    var userChoice = document.getElementsByName('radios');
    for (var i = 0; i < userChoice.length; i++) {
      if(userChoice[i].checked) {
        radioValue = userChoice[i].value;
      };
    };

    //check that they selected a choice
    if (radioValue === false) {
      alert("Please pick an answer");
    }

    // if right answer
    else if (radioValue == questions[questionIndex].correct) {
      // show "correct"
      $("#submitAnswer").html('<h2>' + correctText + '</h2>');
      // show definition
      $("#definition").show()
      $("#definition").text(questions[questionIndex].definition);
      correctAnswers++;

    } else {
      // if wrong answer show "wrong"
      $("#submitAnswer").html('<h2>' + wrongText + '</h2>');
      // show definition
      $("#definition").show()
      $("#definition").text(questions[questionIndex].definition);
    
    };
    //  show next button
    if (questions[questionIndex].qNum == 6) {

      if (radioValue == questions[questionIndex].correct) {
        // show "correct"
        $("#submitAnswer").html('<h2>' + correctText + '</h2>');
        // show definition
        $("#definition").show()
        $("#definition").text(questions[questionIndex].definition);

        } else {
      // if wrong answer show "wrong"
        $("#submitAnswer").html('<h2>' + wrongText + '</h2>');
      
        }

        $("#nextQ").hide(); 
        $("#count").text("Congrats! You got " + correctAnswers + " out of 6 correct!");
        // "play again" option
        $("#playAgain").show();
      
        // $("#choices").hide();
        $("#submitAnswer").hide();

    } else {
        $("#nextQ").show();
    };

    

  }; //end checkAnswer function

  $("#nextQ").click(function() {
      nextQuestion();
      $('input:radio[name=radios]').attr('checked',false);
    });

  //  click check answer
  $("#submitAnswer").click(function() {
      checkAnswer();
  });

   //next question function:

function nextQuestion() {

  // hide next button
  $("#nextQ").hide();
  //show check answer option
  $("#submitAnswer").html('<h2>Check Answer</h2>');
  $("#definition").hide();
  currentQuestion++;
  questionIndex++;
  getQuestion();

}; //end next Question function

    //play again function

    $("#playAgain").click(function() {
      $("#submitAnswer").html('<h2>Check Answer</h2>');
      $("#nextQ").show();
      $("#definition").hide();
      startGame();
    });

}); // end document ready function