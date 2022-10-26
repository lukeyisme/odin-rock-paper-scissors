let compNum;
let compChoice;
let userChoice;

userChoice = prompt("Choose rock, paper, or scissors:");

function getComputerChoice(){
    compNum = Math.random();

    if(compNum <= 0.34){
        compChoice = 'rock';
    }

    else if (compNum >= 0.67){
        compChoice = 'scissors'
    }

    else {
        compChoice = 'paper'
    }

    return compChoice;
};

function playRound(userChoice){
    getComputerChoice();

    if(compChoice == 'rock' && userChoice.toLowerCase() == 'scissors'){
        console.log("Sorry, rock beats scissors!")
    }

    else if(compChoice == 'rock' && userChoice.toLowerCase() == 'paper'){
        console.log("Paper covers rock, you win!")
    }

    else if(compChoice == 'paper' && userChoice.toLowerCase() == 'rock'){
        console.log("Sorry, paper covers rock!")
    }

    else if(compChoice == 'paper' && userChoice.toLowerCase() == 'scissors'){
        console.log("Scissors cut paper, you win!")
    }

    else if(compChoice == 'scissors' && userChoice.toLowerCase() == 'paper'){
        console.log("Sorry, scissors cut paper!")
    }

    else if(compChoice == 'scissors' && userChoice.toLowerCase() == 'rock'){
        console.log("Rock beats scissors, you win!")
    }
};