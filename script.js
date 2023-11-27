/* Create a Rock, Paper, Scissors Game */


/*
Step 1: In html, build the page with neccesary elements for basic structure.
Step 2: In css, style the html page structure to be more visual appealing.
Step 3: In javascript, define functions that will determine the winner of each turn based on player or computer choices.


First thing I did in javascript is defined a function called 'game' which will be the main function that will run the other functions for the game.

Next, I declared some variables which will be assigned to a querySelector method that will select the corresponding elements from the html doc by their ID and classes, 
displaying the current round, the player/cpu scores, the buttons the player will choose, the reset button, and the cpu choices.

After that, I declared variables thst will initialize the player/cpu scores as well as the current round to 0.

I then defined another variable, called 'playGame' using playerChoice as the parameter. The game will start when the player selects a choice and determine
the winner of the current round.

I declared a variable called 'computerChoice' and assigned it to a Math.random and floor method to randomly select one of the three cpu's choices from 
the computerOptions array. I also used the increment operator to increase the round number and update the number on the html page using the textContent property.

To decide the winner of the current round, I defined another function called 'winner' with player and computer as parameters. 
Within that function I used several conditional statements. If the player and computer pick the same choice, it is a tie. Else, if the player and computer choices are
different, then the set of rules based on rock, paper, scissors will follow. The function will update the player/cpu scores using the ++ operator and a message displaying 
whether the player or cpu won the current round in the html doc.

To reset the game, I defined another function, called 'reset' withn the function, intialized the player/cpu scores and the round number to 0. 
I also clear the messages from the html doc when called.

To have the player choice buttons and reset button interact with the game, I added Event listeners which will call the playGame and resetGame function 
when the player clicks on the  choice buttons and reset button.


Finally, the function, 'game' is called to start the game.


*/





// Function with game logic //
const game = () => {

    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");
    const resetBtn = document.querySelector("#reset");
    const message = document.querySelector("#message");
    const roundEl = document.querySelector(".round");
    const playerScoreEl = document.querySelector(".p-count-score");
    const computerScoreEl = document.querySelector(".c-count-score");
    const computerOptions = ["rock", "paper", "scissors"];



    // Initailized starting point for game scores and round //
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;



    // Function to start playing game //
    const playGame = (playerChoice) => {

        const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
        winner(playerChoice, computerChoice);
        round++;
        roundEl.textContent = round;
    };



    // Function to decide winner of each turn//
    const winner = (player, computer) => {

        if (player === computer) {
            message.textContent = "Its a tie!!";
        } else if (
            (player === "rock" && computer === "scissors") ||
            (player === "scissors" && computer === "paper") ||
            (player === "paper" && computer === "rock")
        ) {
            message.textContent = "Player Won!!!";
            playerScore++;
            playerScoreEl.textContent = playerScore;
        } else {
            message.textContent = "Computer Won!!!";
            computerScore++;
            computerScoreEl.textContent = computerScore;
        }
    };



    // Function to reset game //
    const resetGame = () => {

        playerScore = 0;
        computerScore = 0;
        round = 0;
        playerScoreEl.textContent = "0";
        computerScoreEl.textContent = "0";
        roundEl.textContent = "0";
        message.textContent = "";
    };



    // Buttons from html used for player choice and game reset //
    rockBtn.addEventListener("click", () => playGame("rock"));
    paperBtn.addEventListener("click", () => playGame("paper"));
    scissorsBtn.addEventListener("click", () => playGame("scissors"));
    resetBtn.addEventListener("click", resetGame);
};



// Call game Function//
game();