var timeremain = 75;
var penalty = 10;

var scorenumber = document.getElementById("score1");
var finalscore = document.getElementById("display-score");
var scorenumber = 0;
var rightScore = 25;

var counter = document.getElementById("countdown");
var Btn = document.getElementById("Start-Quiz");
var questionContent = document.getElementById("firstquestion");
var introduction = document.getElementById("intro-page");
var checkAnswer = document.getElementById("answer");
var nameofthequestion = document.getElementById("questions");

var answerBtn1 = document.getElementById("answer1");
var answerBtn2 = document.getElementById("answer2");
var answerBtn3 = document.getElementById("answer3");
var answerBtn4 = document.getElementById("answer4");

var gobackBtn = document.getElementById("back-btn");
var submitscoreBtn = document.getElementById("save-score");
var usernameinitial = document.getElementById("display-name");

var progress = 0;
var currentQuestion;
var Title;
var Option;
var Answer;



// questions list
var questions = [{
    question: "The condition in an if/else statement is enclosed with ______.",
    options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "curly brackets"
}, {
    question: "A function within an object is call Arrays in JavaScript can be used to store ______.",
    options: ["numbers and stringsy", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
}, {
    question: "String values must be enclosed within______ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes"
}, {
    question: "A very useful tool used during development and debugging for printing content to the debuggers is:",
    options: ["JavaScript", "terminal/bash", "for loops", "console log"],
    answer: "console log"
}, {
    question: "What are all the types of Pop up boxes available in JavaScript?",
    options: ["alert", "confrim", "prompt", "all of the above"],
    answer: "all of the above"
},
];

//countdown timer setup

var startCountdown =null;
function countdown(){
    clearInterval(startCountdown);
    startCountdown = window.setInterval(function(){
        timeremain--;
        counter.textContent = timeremain;
        console.log("time: "+timeremain);
        console.log("progress"+progress);
        if (parseInt(timeremain) === 0 || progress === questions.length) {
            clearInterval(startCountdown);
        }
    },1000);
};

// generate questions
function getQuestion() {
    currentQuestion = questions[progress];
    Title = currentQuestion.question;
    Option = currentQuestion.options;
    Answer = currentQuestion.answer;

    nameofthequestion.textContent = Title;
    answerBtn1.textContent = Option[0];
    answerBtn2.textContent = Option[1];
    answerBtn3.textContent = Option[2];
    answerBtn4.textContent = Option[3];
    countdown();
}

// question progress with correct/wrong answer

function getQuestionJudge(i){
    progress += 1;
    scorenumber = 0;
    if(Option[i - 1] === Answer){
        checkAnswer.innerHTML = "Correct!";
        rightScore += 25;
    }else{
        checkAnswer.innerHTML = "Wrong!";
        timeremain -= penalty;
    }
};

// Start - Choice buttons

if (Btn) {
    Btn.addEventListener("click", function () {
        introduction.style.display = "none";
        questionContent.style.display = "block";
        console.log("trigger!")
        getQuestion();
    })
}

answerBtn1.addEventListener("click", function () {
     getQuestionJudge(1);
     if (progress == questions.length) {
       getEndQuiz();
       return;
     }
     getQuestion();
 })

answerBtn2.addEventListener("click", function () {
    getQuestionJudge(2);
    if (progress == questions.length) {
      getEndQuiz();
    } else {
      getQuestion();
    }
})

answerBtn3.addEventListener("click", function () {
    getQuestionJudge(3);
    if (progress == questions.length) {
      getEndQuiz();
      return;
    }
    getQuestion();
})

answerBtn4.addEventListener("click", function () {
    getQuestionJudge(4);
    if (progress == questions.length) {
      getEndQuiz();
      return;
    }
    getQuestion();
})

//create array to hold tasks for saving
var usernameinitial = function(event){
    event.preventDefault();
    var userNameInput = document.querySelector("display-name").value;

    if (!userNameInput) {
        alert("Enter Initials");
        return getEndQuiz();
      }
    var data = {
    name: userNameInput,
    score: ""
      };
}

// display end quiz pages
function getEndQuiz(){
    document.getElementById("firstquestion").style.display = "none";
    document.getElementById("highscores").style.display = "block";
}

submitscoreBtn.addEventListener("click", function() {
    document.getElementById("checkhighscore").style.display = "block";
    document.getElementById("firstquestion").style.display = "none";
    document.getElementById("highscores").style.display = "none";
    })


// click handlers for restart and clearing scoreboard
gobackBtn.addEventListener("click", function(){
    introduction.style.display = "block";
    document.getElementById("checkhighscore").style.display = "none";
    getQuestion();
});

document.getElementById("clear-score").onclick = function(){
    getQuestion();
};

