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

// Write playRound function that takes in userSelection and a callback
// to compSelection and returns statement listed winner and loser
function playRound(userChoice, getComputerChoice) {

    // Exectute function and store compChoice
    const compChoice = getComputerChoice();
    let winner = "";
    let loser = "";
    
    // Compare comp and user choices
    if (compChoice === userChoice) {
        console.log("TIE");
        return ["tie"];
    } else if (compChoice === "rock" && userChoice === "scissors") {
        console.log(`compChoice wins! ${compChoice} beats ${userChoice}`);
        winner = "computer";
        loser = "user";
        return [winner, loser];
    } else if (compChoice === "rock" && userChoice === "paper") {
        console.log(`userChoice wins! ${userChoice} beats ${compChoice}`);
        winner = "user";
        loser = "computer";
        return [winner, loser];
    } else if (compChoice === "paper" && userChoice === "rock") {
        console.log(`compChoice wins! ${compChoice} beats ${userChoice}`);
        winner = "computer";
        loser = "user";
        return [winner, loser];
    } else if (compChoice === "paper" && userChoice === "scissors") {
        console.log(`userChoice wins! ${userChoice} beats ${compChoice}`);
        winner = "user";
        loser = "computer";
        return [winner, loser];
    } else if (compChoice === "scissors" && userChoice === "rock") {
        console.log(`userChoice wins! ${userChoice} beats ${compChoice}`); 
        winner = "user";
        loser = "computer";
        return [winner, loser];
    } else if (compChoice === "scissors" && userChoice === "paper") {
        console.log(`compChoice wins! ${compChoice} beats ${userChoice}`);
        winner = "computer";
        loser = "user";
        return [winner, loser];
    }
}

// Write loop that calls playRound function n times
// prints winner and keeps track of score

// Initialize score variables
let userScore = 0;
let compScore = 0;
let tally;
for (let i = 0; i < 5; i ++) {
    
    // Prompt user for a selection and store value in a variable
    const userChoice = prompt("Choose a value rock, paper or scissors: ");  
    tally = playRound(userChoice, getComputerChoice);

    if (tally[0] === "user") {
        userScore++;
    } else if (tally[0] === "computer") {
        compScore++;
    } 

    console.log(`User: ${userScore}, Computer: ${compScore}`);
}

