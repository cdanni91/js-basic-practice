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
    console.log(humanChoice)

});
scissorSelectionButton.addEventListener("click", () => {
    humanChoice = "scissor",
    console.log(humanChoice)

});



playButtonsContainerElement.appendChild(rockSelectionButton);
playButtonsContainerElement.appendChild(paperSelectionButton);
playButtonsContainerElement.appendChild(scissorSelectionButton);



