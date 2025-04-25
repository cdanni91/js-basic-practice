console.log ("Hello world !");

/* Aux function */

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

/*  First game - vs computer without using arrays */


/* Choices (0: Rock, 1: Paper, 2: Scissor) -> using getRandomInt(3) */


function getComputerChoice () {

    let computerChoice = getRandomInt(3)


    /* console.log(computerChoice); */

    switch (computerChoice) {
        case (0):

            computerChoice = "rock";
            
            break;

        case (1):

            computerChoice = 'paper';
            
            break;

        case (2):

            computerChoice = 'scissor';
            
            break;

    
        default:

            break;
    }

    console.log(computerChoice);

    return computerChoice;
}



function getHumanChoice () {

    let humanChoice = '';

    humanChoice = prompt("Choose:  Rock,  Paper,  Scissors ").toLowerCase();

    console.log (humanChoice);

    return (humanChoice);
}


/* Refactor UI */

let humanScore = 0, computerScore = 0, gameRounds = 0;
let message = "";


let scoreContainer = document.querySelector(".score");
let scoreElement = document.createElement("h1");
scoreContainer.appendChild(scoreElement);
scoreElement.textContent = humanScore + " " + computerScore;



function playRound() {

    /* let humanChoice = ''; */
    let computerChoice = '';

    /* humanChoice = getHumanChoice(); */
    computerChoice = getComputerChoice();


    // Same answer (tie)
    if (humanChoice === computerChoice) {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, it's a tie!`);
    }
    // Computer wins scenarios
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, you lose because ${computerChoice} beats ${humanChoice}!`);
        computerScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissor") {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, you lose because ${computerChoice} beats ${humanChoice}!`);
        computerScore += 1;
    }
    else if (humanChoice === "scissor" && computerChoice === "rock") {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, you lose because ${computerChoice} beats ${humanChoice}!`);
        computerScore += 1;
    }
    // User wins scenarios
    else if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, you win because ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, you win because ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, you win because ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
    }
    
    console.log(humanScore, computerScore);

    /* Refactor UI */
    scoreElement.textContent = humanScore + " " + computerScore;

    
    gameRounds += 1;

    console.log(gameRounds);

    evaluateScore(gameRounds);

    return;

}

















/* function playGame () {

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore > computerScore) {
        console.log ("Humanity wins!");
    } else if (computerScore > humanScore) {
        console.log ("Welcome our new overlords, the machines!")
    } else if (humanScore === computerScore) {
        console.log ("It's a tie !")
    };

    return (
        console.log(" Game finished ")
    );
}
 */


/* playGame(); */




/* Refactor UI */


let humanChoice = "";

let playButtonsContainerElement = document.querySelector(".play-buttons-container");
let rockSelectionButton = document.createElement("button");
rockSelectionButton.textContent = ("ROCK");
let paperSelectionButton = document.createElement("button");
paperSelectionButton.textContent = ("PAPER");
let scissorSelectionButton = document.createElement("button");
scissorSelectionButton.textContent = ("SCISSOR");



rockSelectionButton.addEventListener("click", () => {
                                    humanChoice = "rock",
                                    console.log(humanChoice),
                                    playRound();

});
paperSelectionButton.addEventListener("click", () => {
    humanChoice = "paper",
    console.log(humanChoice),
    playRound();

});
scissorSelectionButton.addEventListener("click", () => {
    humanChoice = "scissor",
    console.log(humanChoice),
    playRound();

});



playButtonsContainerElement.appendChild(rockSelectionButton);
playButtonsContainerElement.appendChild(paperSelectionButton);
playButtonsContainerElement.appendChild(scissorSelectionButton);

let messageContainer = document.querySelector(".message");
let messageElement = document.createElement("h1")
messageElement.style.color = "red";
messageElement.textContent = message;
messageContainer.appendChild(messageElement);


function evaluateScore() {
    if (gameRounds === 5) {
  
      if (humanScore > computerScore) {
        console.log("Humanity wins!");
        message = "Humanity wins!";
      } else if (computerScore > humanScore) {
        console.log("Welcome our new overlords, the machines!");
        message = "Welcome our new overlords, the machines!";
      } else {
        console.log("It's a tie !");
        message = "It's a tie !";
      }
  
      // **Actualizar el DOM** con el mensaje
      messageElement.textContent = message;
  
      console.log("Game finished");
  
      // Reset de puntuaciones y rondas
      humanScore = 0;
      computerScore = 0;
      gameRounds = 0;
  
      console.log("Scores and rounds have been reset.");
    }
  }

