let compNum;
let compChoice;
let userChoice;
let compScore = 0;
let userScore = 0;

const game = () => {
    // userScore = 0;
    // compScore = 0;
    
    for(let i = 0; i < 5; i++){
        userChoice = prompt("Choose rock, paper, or scissors:");
        getComputerChoice();
        playRound(userChoice, compChoice);
    }

    console.log(`Your score: ${userScore}`);
    console.log(`Computer score: ${compScore}`);
    
    if(compScore > userScore){
        console.log("The Computer is the winner! Better luck next time!")
    }

    else if(compScore < userScore){
        console.log("You are the winner! Congratulations!")
    }
};

function getComputerChoice(){
    compNum = Math.random();

    if(compNum <= 0.34){
        compChoice = 'rock';
    }

    else if (compNum >= 0.67){
        compChoice = 'scissors';
    }

    else {
        compChoice = 'paper';
    }

    return compChoice;
};

function playRound(userChoice, compChoice){
    // getComputerChoice();

    if(compChoice == 'rock' && userChoice == 'scissors'){
        console.log("Sorry, rock beats scissors!");
        compScore++;
    }

    else if(compChoice == 'rock' && userChoice == 'paper'){
        console.log("Paper covers rock, you win!");
        userScore++;
    }

    else if(compChoice == 'paper' && userChoice == 'rock'){
        console.log("Sorry, paper covers rock!");
        compScore++;
    }

    else if(compChoice == 'paper' && userChoice == 'scissors'){
        console.log("Scissors cut paper, you win!");
        userScore++;
    }

    else if(compChoice == 'scissors' && userChoice == 'paper'){
        console.log("Sorry, scissors cut paper!");
        compScore++;
    }

    else if(compChoice == 'scissors' && userChoice == 'rock'){
        console.log("Rock beats scissors, you win!");
        userScore++;
    }

    else if(compChoice == userChoice){
        console.log("Draw! Try Again");
    }

    return userScore, compScore
};

const changeUserChoice = (btnChoice) => {
    userChoice = btnChoice;
};

const playGame = document.getElementById("playGameBtn");
playGame.addEventListener('click', game);

const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener('click', changeUserChoice('rock'));

const paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener('click', changeUserChoice('paper'));

const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.addEventListener('click', changeUserChoice('scissors'));
