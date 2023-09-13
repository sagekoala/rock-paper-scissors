// Storing array of button element nodes
const buttons = document.querySelectorAll('button');

// Calling function, handling button event that was clicked
// i.e. user choice
playRound(function(result) {
    
    const playerSelection = result.toLowerCase();
    console.log(`Player selection : ${playerSelection}`);
    const computerSelection = getComputerChoice().toLowerCase();
    console.log(`Computer selection : ${computerSelection}`);
    const roundWinner = getRoundWinner(playerSelection, computerSelection);
    console.log(`Round winner ${roundWinner}`);

});

// Function that will return value from eventListener i.e. event handler
function playRound(callback) {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            callback(e.srcElement.innerText);
        });
    });
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const rand_num = Math.floor(Math.random() * 3);

    return choices[rand_num];
}

function getRoundWinner(playerSelection, computerSelection) {

    // Compare computer and player choices, return results
    if (computerSelection === playerSelection) {
        return 'Tie';
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return 'Computer';
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return 'Player';
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return 'Computer';
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return 'Player';
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return 'Player';
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return 'Computer';
    }
}