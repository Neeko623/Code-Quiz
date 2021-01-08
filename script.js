var timeremain = 75;
var penalty = 10;

var counter = document.getElementById("countdown");
var Btn = document.getElementById("Start-Quiz");
var questionContent = document.getElementById("firstquestion");
var introduction = document.getElementById("intro-page");
var checkAnswer = document.getElementById("answer");
var finalscore = document.getElementById("checkhighscore");
var nameofthequestion = document.getElementById("questions");
var scorenumber = document.getElementById("score1");

var answerBtn1 = document.getElementById("answer1");
var answerBtn2 = document.getElementById("answer2");
var answerBtn3 = document.getElementById("answer3");
var answerBtn4 = document.getElementById("answer4");

var submitscoreBtn = document.getElementById("save-score");
var gobackBtn = document.getElementById("back-btn");
var clearscoreBtn = document.getElementById("clear-score");

var initial = document.getElementById("display-name");

var progress = 0;
var currentQuestion;
var Title;
var Option;
var Answer;
var score;

var rightScore = 25;
var wrongScore = -0;

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

function countdown(){
    var startCountdown = setInterval(function(){
        timeremain--;
        counter.textContent = timeremain;
        if (timeremain === 0 || progress === questions.length) {
            getEndQuiz(); 
            clearInterval(startCountdown) 
        }
    },1000);
};

function getQuestionJudge(i){
    progress += 1;
    score += 25;
    if(Option[i - 1] === Answer){
        score += rightScore;
        checkAnswer.innerHTML = "Correct!";
    }else{
        score += wrongScore;
        checkAnswer.innerHTML = "Wrong!";
        timeremain -= penalty;
    }
}


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


function getEndQuiz(){
    document.getElementById("firstquestion").style.display = "none";
    document.getElementById("highscores").style.display = "block";
    document.getElementById("scorenumber").textContent = score;
}

submitscoreBtn.addEventListener("click", function() {
    document.getElementById("checkhighscore").style.display = "block";
    document.getElementById("highscores").style.display = "none";
    })


    var gobackBtn = document.querySelector("button.restartBtn"),
    clearBtn = document.querySelector("button.clearBtn"),
    // get the highScores list and turn it back into an object
    highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
    scoreList = document.getElementById("score-list");

// click handlers for restart and clearing scoreboard
clearscoreBtn.addEventListener("click", function () {
});
gobackBtn.addEventListener("click", function () {
});


    // alphabetWithUpper = "abcdefghijklmnopqrstuvwxyz" + "abcdefghijklmnopqrstuvwxyz".toUpperCase();

    // function submitscoreBtn (){
    //     if (initial[i] === alphabetWithUpper[i]) {
    //     alphabetWithUpper.length < 2;
    //     initial[i] = true;
    //     }
    //     else {
    //         initial[i] = false;
    //     alert("Initial must be atleast 2 charactrs long, Please Try Again");
    //     }
    
function gethighscore (){
    // document.getElementById("highscores").style.display = "none";
    // document.getElementById("checkhighscore").style.display = "none";
}

