let compNum;
let compChoice;
let userChoice;
let compScore;
let userScore;

const playGame = document.getElementById("playGameBtn");
playGame.addEventListener('click', game);

function game(){
    userScore = 0;
    compScore = 0;
    
    for(let i = 0; i < 5; i++){
        userChoice = prompt("Choose rock, paper, or scissors:");
        getComputerChoice()
        playRound()
    }

    console.log(`Your score: ${userScore}`);
    console.log(`Computer score: ${compScore}`);
    
    if(compScore > userScore){
        console.log("The Computer is the winner! Better luck next time!")
    }

    else if(compScore < userScore){
        console.log("You are the winner! Congratulations!")
    }
}

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

function playRound(userChoice, compChoice){
    //userChoice = prompt("Choose rock, paper, or scissors:");
    //getComputerChoice();

    if(compChoice == 'rock' && userChoice.toLowerCase() == 'scissors'){
        console.log("Sorry, rock beats scissors!")
        compScore++;
    }

    else if(compChoice == 'rock' && userChoice.toLowerCase() == 'paper'){
        console.log("Paper covers rock, you win!")
        userScore++;
    }

    else if(compChoice == 'paper' && userChoice.toLowerCase() == 'rock'){
        console.log("Sorry, paper covers rock!")
        compScore++;
    }

    else if(compChoice == 'paper' && userChoice.toLowerCase() == 'scissors'){
        console.log("Scissors cut paper, you win!")
        userScore++;
    }

    else if(compChoice == 'scissors' && userChoice.toLowerCase() == 'paper'){
        console.log("Sorry, scissors cut paper!")
        compScore++;
    }

    else if(compChoice == 'scissors' && userChoice.toLowerCase() == 'rock'){
        console.log("Rock beats scissors, you win!")
        userScore++;
    }

    else if(compChoice == userChoice.toLowerCase()){
        console.log("Draw! Try Again")
    }
};