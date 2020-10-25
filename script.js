// sets variables for use
let choiceOne = document.querySelector("#answerOne");
let choiceTwo = document.querySelector("#answerTwo");
let choiceThree = document.querySelector("#answerThree");
let choiceFour = document.querySelector("#answerFour");
let question = document.querySelector("#question");
let response = document.querySelector(".response");
let Score = 0;
let timer = 0;
let currentQuestion = -1;

// lists questions to be answered
let questArr = [{ 
    question:"What does CSS stand for?",
    choice1:"Complex Style Sheet",
    choice2:"Cascading Style Sheet",
    choice3:"Compact Style Sheet",
    choice4:"Computer Screen Sheet",
    response:"Cascading Style Sheet",
},
{ 
    question:"Which of the following function of an array object adds one or more elements to the front of an array and pushes the rest of the items one slot back?",
    choice1:"unshift()",
    choice2:"sort( )",
    choice3:"toString( )",
    choice4:"join( )",
    response:"unshift()",
},

]
// starts timer when start button clicked
function start() {

    timeLeft = 75;
    document.querySelector("#timeLeft").innerHTML = timeLeft;
    
    timer = setInterval(function() {
        timeLeft--;
        document.querySelector("#timeLeft").innerHTML = timeLeft;
        //proceed to end the game function when timer is below 0 at any time
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000);
    
    next();
    }
    // stops timer and ends game
    function endGame() {
        clearInterval(timer);
    }

