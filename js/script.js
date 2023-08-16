// Program for the tradional game rock-paper-scissors
// Write function to get random selection by computer

function getComputerChoice() {
    // Create const array with available choices
    const choices = ["rock", "paper", "scissors"];
    // Create random variable with value between 0-2
    const rand_num = Math.floor(Math.random() * 3);

    // Return value at index of rand_num 
    return choices[rand_num];
}

// Write playRound function that takes userChoice and compChoice and returns winner
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
        console.log(`userChoice wins! ${results[2]} beats ${results[3]}`); 
    } else if (results[0] === "computer") {
        console.log(`compChoice wins! ${results[2]} beats ${results[3]}`);
    } else {
        console.log(`Tie! Computer Choice: ${results[1]} User Choice: ${results[2]}`);
    }
}

// Plays tournament of n rounds
function playTournament(n) {

    // Initialize results variable to serve as string array
    let results;
    
    // Initialize score variables
    let userScore = 0;
    let compScore = 0;

    for (let i = 0; i < n; i ++) {
        // Prompt user for a selection and store value in a variable
        const userChoice = prompt("Choose a value rock, paper or scissors: ");  
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