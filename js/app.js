$ (document).ready (function(){



//question objects
var questions = [
{
  qNum: 1,
  q: "Who is the all time Home Run Leader in Major League baseballJ",
  choices: ["Hank Aaron", "Barry Bonds", "Babe Ruth", "Mark McGuire"],
  correct: 2,
  definition: "Barry Bonds"
},

{
  qNum: 2,
  q: "What is a practitioner of labiomancy good at?", 
  choices: ["Finding water with a divining rod.", "Chemistry.", "Storm chasing.", "Reading lips"],
  correct: 4,
  definition: "n. Divination or interpretation by means of the motions of the lips; specifically, lip-reading."
},

 {
  qNum: 3,
  q: "When would you eat a mesonoxian feast?",
  choices: ["At sunset on the Vernal equinox.", "750 BC.", "At midnight.", " On your  fiesta de quinceañera"],
  correct: 3,
  definition: "adj. Pertaining to the hour of midnight."
},

{
  qNum: 4,
  q: "Your grandmother gave you spondulicks…what is it?",
  choices: ["Cash.", "A contagious disease.", "A delicious treat.", "Her homemade remedy for what ails you."],
  correct: 1,
  definition: "n. Money."
},

{
  qNum: 5,
  q: "Where would you wear your winklepickers?",
  choices: ["On the bridge of your nose.", "On your feet.", "On your hands.", "That's personal!."],
  correct: 2,
  definition: "n. A shoe with a long pointed toe, popular in the 1950s."
},

];

//global variables
var currentQuestion = 1;
var correctAnswers = 0;
var totalQuestions = questions.length;
var questionIndex = 0;
var correctText = "Correct!";
var wrongText = "That's incorrect";


// on clicking begin
  $(".begin").click(function() {
    //  hide instructions
    $(".instructions").fadeOut("fast");
    $(".quiz").show("slow", getQuestion);
  });
  
// starting new game function
 function startGame() {
    currentQuestion = 1;
    correctAnswers = 0;
    questionIndex = 0;
    $(".question").show();
    $(".choices").show();
    $(".submitAnswer").show();
    $(".playAgain").hide();
    $('input:radio[name=radios]').attr('checked',false);
    getQuestion();
 };

 //get question and choices, show question #
 function getQuestion() {
  // questionIndex++;
  $(".currentQ").text(questions[questionIndex].q);
  $(".choice0").text(questions[questionIndex].choices[0]);
  $(".choice1").text(questions[questionIndex].choices[1]);
  $(".choice2").text(questions[questionIndex].choices[2]);
  $(".choice3").text(questions[questionIndex].choices[3]);
  $(".count").text("Question " + currentQuestion + " of 6");
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
      $(".submitAnswer").html('<h2>' + correctText + '</h2>');
      // show definition
      $(".definition").show()
      $(".definition").text(questions[questionIndex].definition);
      correctAnswers++;

    } else {
      // if wrong answer show "wrong"
      $(".submitAnswer").html('<h2>' + wrongText + '</h2>');
      // show definition
      $(".definition").show()
      $(".definition").text(questions[questionIndex].definition);
    
    };
    //  show next button
    if (questions[questionIndex].qNum == 6) {

      if (radioValue == questions[questionIndex].correct) {
        // show "correct"
        $(".submitAnswer").html('<h2>' + correctText + '</h2>');
        // show definition
        $(".definition").show()
        $(".definition").text(questions[questionIndex].definition);

        } else {
      // if wrong answer show "wrong"
        $(".submitAnswer").html('<h2>' + wrongText + '</h2>');
      
        }

        $(".nextQ").hide(); 
        $(".count").text("Congrats! You got " + correctAnswers + " out of 6 correct!");
        // "play again" option
        $(".playAgain").show();
      
        // $("#choices").hide();
        $(".submitAnswer").hide();

    } else {
        $(".nextQ").show();
    };

    

  }; //end checkAnswer function

  $(".nextQ").click(function() {
      nextQuestion();
      $('input:radio[name=radios]').attr('checked',false);
    });

  //  click check answer
  $(".submitAnswer").click(function() {
      checkAnswer();
  });

   //next question function:

function nextQuestion() {

  // hide next button
  $(".nextQ").hide();
  //show check answer option
  $(".submitAnswer").html('<h2>Check Answer</h2>');
  $(".definition").hide();
  currentQuestion++;
  questionIndex++;
  getQuestion();

}; //end next Question function

    //play again function

    $(".playAgain").click(function() {
      $(".submitAnswer").html('<h2>Check Answer</h2>');
      $(".nextQ").show();
      $(".definition").hide();
      startGame();
    });

}); // end document ready function

