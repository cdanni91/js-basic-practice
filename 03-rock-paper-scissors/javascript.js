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




let humanScore = 0, computerScore = 0;

function playRound() {

    let humanChoice = '';
    let computerChoice = '';

    humanChoice = getHumanChoice();
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


    
    return;
}

function playGame () {

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



playGame();


