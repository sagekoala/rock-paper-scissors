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
    console.log(`P ${playerSelection} | C${computerSelection}`);
    updateScore(roundWinner);

}

function endMatch() {
    buttons.forEach((button) => {
        button.removeEventListener('click', eventHandler);
    });
}

function updateScore(roundWinner) {
    // Update player scores except for tie
    if (`${roundWinner}` in scores) {
        scores[`${roundWinner}`] += 1;
    }

    // Once an opponent reaches 5 points, end match
    if (scores["Player"] === 5 || scores["Computer"] === 5) {
        endMatch();
        displayWinner(); // function that displays text div with winner's name
    }

    console.log(scores);
}

function displayWinner() {

    // Loop through dict, store key with value of 5
    for (let key in scores) {
        if (scores[key] === 5) {
            console.log(`name of person with 5 ${key}`);
            console.log(scores);
        }
    }
}

// In order to remove event listener 
// you have to have used a named function
// for your eventHandler function
// that way you can "dereference it" with
// a removeEventListener() function that
// calls the exact same eventHandler function

/*
// Calling function, handling button event that was clicked
// i.e. user choice
playRound(function(result) {

    const playerSelection = result.toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
    let roundWinner = getRoundWinner(playerSelection, computerSelection);

    if (roundWinner === "Player") {
        scores["playerScore"] += 1;
    } else if (roundWinner === "Computer") {
        scores["computerScore"] += 1;
    }

    console.log(`Player selection : ${playerSelection}`);
    console.log(`Computer selection : ${computerSelection}`);
    console.log(`Round winner ${roundWinner}`);
    console.log(scores);

    if (scores["playerScore"] > 1) {
        console.log("RUNNING END MATCH");
        endMatch();
    }

    console.log("ANOTHER ROUND");

});

// Function that will return value from eventListener i.e. event handler
function playRound(callback) {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            callback(e.srcElement.innerText);
        });
    });
}

*/