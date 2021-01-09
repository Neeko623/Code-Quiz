// variables for page elements
// time and score
var timeremain = 75;
var penalty = 10;
var scorenumber = document.getElementById("score1");
var finalscore = document.getElementById("display-score");
var scorenumber = 0;
var rightScore = 0;

// sections
// section intro
var counter = document.getElementById("countdown");
var Btn = document.getElementById("Start-Quiz");
var questionContent = document.getElementById("firstquestion");
var introduction = document.getElementById("intro-page");
var nameofthequestion = document.getElementById("questions");
var checkAnswer = document.getElementById("answer");
// answer1
var answerBtn1 = document.getElementById("answer1");
// answer2
var answerBtn2 = document.getElementById("answer2");
// answer3
var answerBtn3 = document.getElementById("answer3");
// answer4
var answerBtn4 = document.getElementById("answer4");

// goback
var gobackBtn = document.getElementById("back-btn");
// submit-scores
var submitscoreBtn = document.getElementById("save-score");
// display username
var usernameinitial = document.getElementById("display-name");

//question progress begin
var progress = 0;
var currentQuestion;
var Title;
var Option;
var Answer;

// Object for question and answer
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
var startCountdown = null;
function countdown(){
    clearInterval(startCountdown);
    startCountdown = window.setInterval(function(){
        timeremain--;
        counter.textContent = timeremain;
        if (parseInt(timeremain) === 0 || progress === questions.length) {
            clearInterval(startCountdown);
            getEndQuiz();
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

// question progress with correct/wrong answer, time penalty
function getQuestionJudge(i){
    progress += 1;
    scorenumber = 0;
    if(Option[i - 1] === Answer) {
        checkAnswer.innerHTML = "Correct!";
        rightScore += 25;
        console.log(rightScore);
    }else{
        checkAnswer.innerHTML = "Wrong!";
        timeremain -= penalty;
    }
};

// EventListeners
// Start timer and display first question when click start quiz
if (Btn) {
    Btn.addEventListener("click", function () {
        introduction.style.display = "none";
        questionContent.style.display = "block";
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
      return;
    }
    getQuestion();
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

// display end quiz pages
function getEndQuiz(){
    document.getElementById("firstquestion").style.display = "none";
    document.getElementById("highscores").style.display = "block";
    document.getElementById("score1").textContent = " " + rightScore;
}

// Add to localstorage
var UserRecord = [];
localStorage.setItem("UserRecord", JSON.stringify(UserRecord));

// submit score to display user initials and scores list
submitscoreBtn.addEventListener("click", function() {
    let userInput = JSON.parse(localStorage.getItem("UserRecord"))
        document.getElementById("checkhighscore").style.display = "block";
        document.getElementById("firstquestion").style.display = "none";
        document.getElementById("highscores").style.display = "none";

    let initial = document.getElementById("display-name").value;
        userInput.push({"initial": initial, "score": rightScore});

// localstorage to setItem
localStorage.setItem("UserRecord", JSON.stringify(userInput));
    let userList = document.getElementById("usernameandscore");
    userList.innerHTML = "";
    
    userInput.forEach(function(item, i) {
        let textNodeContent = item["initial"] + " " + "-" + " " + item["score"];
        let eachLi = document.createElement("LI");
        let textNode = document.createTextNode(textNodeContent);
    
    eachLi.appendChild(textNode);
        let userList = document.getElementById("usernameandscore");

    userList.appendChild(eachLi);
    });
})

// View high score page 
var showscorepage = document.getElementById('viewscorepage');
    showscorepage.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("checkhighscore").style.display = "block";
    introduction.style.display = "none";
});

// Go Back Button
gobackBtn.addEventListener("click", function(){
    introduction.style.display = "block";
    document.getElementById("checkhighscore").style.display = "none";
    progress = 0;
    counter.textContent = "75";
    timeremain = 75;
});

// Clear the scores
document.getElementById("clear-score").onclick = function(){
    localStorage.setItem("UserRecord", JSON.stringify([]));
    let userList = document.getElementById("usernameandscore");
    userList.innerHTML = "";
};
