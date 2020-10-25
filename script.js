
// lists questions to be answered
let questArr = [{ 
    question:"What does CSS stand for?",
    choices:["Complex Style Sheet","Cascading Style Sheet","Compact Style Sheet","Computer Screen Sheet"],
    response:"Cascading Style Sheet",
},
{ 
    question:"Which of the following functions of an array object adds one or more elements to the front of an array and pushes the rest of the items one slot back?",
    choices:["sort( )","toString( )","unshift()","join( )"],
    response:"unshift()",
},
{
    question:"Which of the following functions deletes an item from an array?",
    choices:["delete()","pop()", "remove()","banish()"],
    response:"pop()",
},
{
    question:"Which would you use to add an Event Listener in JQuery?",
    choices:[".addEventListener()", ".on()",".addEL()",".add()"],
    response:".on()",
},
{
    question:"Where does your javascript source go in HTML?",
    choices:["inside a footer", "inside the head","in a div","above the body closing tag"],
    response:"above the body closing tag",
}
]

// sets variables for use
let score = 0;
let currentQuestion = -1;
let timeLeft = 0;
let timer;


//starts the countdown timer once user clicks the 'start' button
function start() {

    timeLeft = 120;
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

    
    //stop the timer to end the game 
    function endGame() {
    clearInterval(timer);
    
    let quizContent = `
    <h2>Game over!</h2>
    <h3>You got a ` + score +  ` /100!</h3>
    <h3>That means you got ` + score / 20 +  ` questions correct!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;
    
    document.querySelector("#quizBody").innerHTML = quizContent;
    }
    
    //store the scores on local storage
    function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.querySelector('#name').value);
    getScore();
    }
    
    
    function getScore() {
    let quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
    
    `;
    
    document.querySelector("#quizBody").innerHTML = quizContent;
    }
    
    //clears the score name and value in the local storage if the user selects 'clear score'
    function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName",  "");
    
    resetGame();
    }
    
    //reset the game 
    function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;
    
    document.querySelector("#timeLeft").innerHTML = timeLeft;
    
    let quizContent = `
    <h1>
        JavaScript Quiz!
    </h1>
    <h3>
        Click to play!   
    </h3>
    <button onclick="start()">Start!</button>`;
    
    document.querySelector("#quizBody").innerHTML = quizContent;
    }
    
    //deduct 15seconds from the timer if user chooses an incorrect answer
    function incorrect() {
    timeLeft -= 20; 
    next();
    }
    
    //increases the score by 20points if the user chooses the correct answer
    function correct() {
    score += 20;
    next();
    }
    
    //loops through the questions 
    function next() {
    currentQuestion++;
    
    if (currentQuestion > questArr.length - 1) {
        endGame();
        return;
    }
    
    let quizContent = "<h2>" + questArr[currentQuestion].question + "</h2>"
    
    for (let buttonLoop = 0; buttonLoop < questArr[currentQuestion].choices.length; buttonLoop++) {
    let buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
    buttonCode = buttonCode.replace("[CHOICE]", questArr[currentQuestion].choices[buttonLoop]);
    if (questArr[currentQuestion].choices[buttonLoop] == questArr[currentQuestion].response) {
        buttonCode = buttonCode.replace("[ANS]", "correct()");
    } else {
        buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
    quizContent += buttonCode
    }
    
    
    document.querySelector("#quizBody").innerHTML = quizContent;
    }
