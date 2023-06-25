function getComputerChoice(){
    let choice = ['rock','paper','scissor'];
    let rand = Math.floor(Math.random()*choice.length);
    return choice[rand];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection) {
        console.log("Tie");
        return 0;
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'
            || playerSelection == 'paper' && computerSelection == 'scissor'
             || playerSelection == 'scissor' && computerSelection == 'rock'){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return 1;
    }
    else{
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 2;
    }
}


function game(){
    let count_player = 0, count_computer = 0;
    for(let i=0;i<5;i++){
        let playerSelection = prompt("Enter your choice: ");
        let computerSelection = getComputerChoice();
        let round_winner = playRound(playerSelection,computerSelection);
        if(round_winner==1){
            count_computer++;
        }
        else if(round_winner==2){
            count_player++;
        }
    }
    if(count_computer > count_player) console.log("You lost! Computer won");
    else if(count_computer == count_player) console.log("It's a tie");
    else console.log("You won! congratulations");
}

game();


