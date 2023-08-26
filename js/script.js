// Program for the tradional game rock-paper-scissors

// Global variable of possible choices
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {

    // Random number between 0 and 2
    const rand_num = Math.floor(Math.random() * 3);

    // Return choice from choices array at the rand_num index
    return choices[rand_num];
}

function getUserChoice() {

    let userChoice = "random";

    // Limits user response to correct string values, eliminates case sensitivity
    while (!choices.includes(userChoice.toLowerCase())) {
        userChoice = prompt("Choose a value rock, paper or scissors: ").toLowerCase(); 
    }

    return userChoice;
}

function playRound(userChoice, getComputerChoice) {

    // Exectute function and store compChoice
    const compChoice = getComputerChoice();
    
    // Compare comp and user choices, return results
    if (compChoice === userChoice) {
        return ["tie", compChoice, userChoice];
    } else if (compChoice === "rock" && userChoice === "scissors") {
        return ["computer", "user", compChoice, userChoice];
    } else if (compChoice === "rock" && userChoice === "paper") {
        return ["user", "computer", userChoice, compChoice];
    } else if (compChoice === "paper" && userChoice === "rock") {
        return ["computer", "user", compChoice, userChoice];
    } else if (compChoice === "paper" && userChoice === "scissors") {
        return ["user", "computer", userChoice, compChoice];
    } else if (compChoice === "scissors" && userChoice === "rock") {
        return ["user", "computer", userChoice, compChoice];
    } else if (compChoice === "scissors" && userChoice === "paper") {
        return ["computer", "user", compChoice, userChoice];
    }
}

// Display results based on results returned by playRound()
function displayResults(results) {
    if (results[0] === "user") {
        console.log(`User wins! ${results[2]} beats ${results[3]}`); 
    } else if (results[0] === "computer") {
        console.log(`Computer wins! ${results[2]} beats ${results[3]}`);
    } else {
        console.log(`Tie! Computer Choice: ${results[1]} User Choice: ${results[2]}`);
    }
}

// Plays tournament of n rounds
function playTournament(n) {

    // Initialize results variable to serve as string array
    let results;
    let userChoice;
    
    // Initialize score variables
    let userScore = 0;
    let compScore = 0;

    for (let i = 0; i < n; i ++) {
        userChoice = getUserChoice();
        results = playRound(userChoice, getComputerChoice);
        displayResults(results);
        if (results[0] === "user") {
            userScore++;
        } else if (results[0] === "computer") {
            compScore++;
        }
        console.log(`User: ${userScore} - Computer: ${compScore}`);
    }
}

// Plays tournament of n rounds
playTournament(5);