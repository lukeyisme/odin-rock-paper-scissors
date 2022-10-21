let compNum;
let compChoice;

function getComputerChoice(){
    compNum = Math.random();

    if(compNum <= 0.34){
        compChoice = 'Rock';
    }

    else if (compNum >= 0.67){
        compChoice = 'Scissors'
    }

    else {
        compChoice = 'Paper'
    }

    console.log(compChoice);
};