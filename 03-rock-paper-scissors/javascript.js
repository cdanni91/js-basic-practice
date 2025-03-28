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

    humanChoice = prompt("Choose:  Rock,  Paper,  Scissors ").toLowerCase();

    console.log (humanChoice);

    return (humanChoice);
}




let humanScore, computerScore = 0;

function playRound (humanChoice, computerChoice) {

    /* Same answer */
    if (humanChoice === computerChoice) {

        console.log (`You chose ${humanChoice} and the computer chose ${computerChoice}, it's a tie!`)

    /* First all the possibilities when the computer wins */

    /* User choose rock and computer chooses paper */
    } else if (humanChoice === 0 && computerChoice === 1) {
        console.log (`You chose ${humanChoice} and the computer chose ${computerChoice}, you lose becuse ${computerChoice} beats ${humanChoice}!`)
    /* User choose paper and computer chooses scissor */
    } else if (humanChoice === 1 && computerChoice === 2) {
        console.log (`You chose ${humanChoice} and the computer chose ${computerChoice}, you lose becuse ${computerChoice} beats ${humanChoice}!`)
    /* User choose scissor and computer chooses rock */
    } else if (humanChoice === 2 && computerChoice === 0) {
        console.log (`You chose ${humanChoice} and the computer chose ${computerChoice}, you lose becuse ${computerChoice} beats ${humanChoice}!`)
    
    /* Now all the possibilities when the user wins */

    /* User choose rock and the computer chooses scissor */
    } else if (humanChoice === 0 && computerChoice === 2) {
        console.log (`You chose ${humanChoice} and the computer chose ${computerChoice}, you win becuse ${humanChoice} beats ${computerChoice}!`)
    /* User choose paper and the computer chooses rock */
    } else if (humanChoice === 1 && computerChoice === 0) {
        console.log (`You chose ${humanChoice} and the computer chose ${computerChoice}, you win becuse ${humanChoice} beats ${computerChoice}!`)
    /* User choose scissor and the computer chooses paper */
    } else (humanChoice === 2 && computerChoice === 1); {
        console.log (`You chose ${humanChoice} and the computer chose ${computerChoice}, you win becuse ${humanChoice} beats ${computerChoice}!`)
    }


    return;
}


computerChoice = getComputerChoice();
humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice);

