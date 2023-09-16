// Storing array of button element nodes
const buttons = document.querySelectorAll('button');

// Declare scores dictionary
let scores = {
    "Player": 0,
    "Computer": 0
};


function getComputerChoice() {

    // Return random choice from choices array
    const choices = ['rock', 'paper', 'scissors'];
    const rand_num = Math.floor(Math.random() * 3);

    return choices[rand_num];
}

function getRoundWinner(playerSelection, computerSelection) {

    displaySelections(playerSelection, computerSelection);
    
    // Compare computer and player choices, return result
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

buttons.forEach((button) => {
    button.addEventListener('click', eventHandler);
});

// Pass player selection to playRound() function
function eventHandler(e) {
    playRound(e.srcElement.innerText);
}

function endMatch() {
    buttons.forEach((button) => {
        button.removeEventListener();
    });
}


function playRound(result) {
    
    const playerSelection = result.toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
    const roundWinner = getRoundWinner(playerSelection, computerSelection);
    console.log(`P ${playerSelection} | C ${computerSelection}`);
    updateScore(roundWinner);

}

function endMatch() {
    buttons.forEach((button) => {
        button.removeEventListener('click', eventHandler);
    });
}

function updateScore(roundWinner) {

    const scoreboardDiv = document.querySelector('#scoreboard');
    const roundWinnerDiv = document.querySelector('#roundWinner');

    // Update player scores except for tie
    if (`${roundWinner}` in scores) {
        scores[`${roundWinner}`] += 1;
    }

    // Update round winner and score divs
    scoreboardDiv.innerText = `Player ${scores['Player']} | Computer ${scores['Computer']}`;

    if (roundWinner !== 'Tie') {
        roundWinnerDiv.innerText = `${roundWinner} wins!`;
    } else {
        roundWinnerDiv.innerText = 'Tie!';
    }


    // Once an opponent reaches 5 points, end match
    if (scores["Player"] === 5 || scores["Computer"] === 5) {
        endMatch();
        displayGrandWinner();
    }
}

function displaySelections(playerSelection, computerSelection) {
    const selectionsDiv = document.querySelector('#selections');
    console.log(selectionsDiv);
    selectionsDiv.innerText = `Player - ${playerSelection} | Computer - ${computerSelection}`;
}

function displayGrandWinner() {

    const grandWinnerDiv = document.querySelector('#grandWinner');
    // Loop through dict, store key with value of 5
    for (let key in scores) {
        if (scores[key] === 5) {
            grandWinnerDiv.innerText = `${key} is the winner!`;
        }
    }
}