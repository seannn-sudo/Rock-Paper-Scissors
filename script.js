let result_h3 = document.getElementById("RESULT");

function getComputerChoice(){
    let random_num = Math.floor(Math.random() * 3);
    switch (random_num){
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"      
    }
}
function playRound(userSelection, computerSelection){
    if (userSelection === computerSelection){
        result_h3.innerHTML = `Computer chose ${computerSelection}. It's a tie!`;
    }
    else if (userSelection === "ROCK"){
            if (computerSelection === "PAPER") {result_h3.innerHTML = "Computer chose PAPER. You lost!"}
            else {result_h3.innerHTML = "Computer chose SCISSORS. You won!"}
         }
    else if (userSelection === "PAPER"){
            if (computerSelection === "SCISSORS") {result_h3.innerHTML = "Computer chose SCISSORS. You lost!"}
            else {result_h3.innerHTML = "Computer chose ROCK. You won!"}
         }
    else if (userSelection === "SCISSORS"){
            if (computerSelection === "ROCK") {result_h3.innerHTML = "Computer chose ROCK. You lost!"}
            else {result_h3.innerHTML = "Computer chose PAPER. You won!"}
         }          
}
document.getElementById("ROCK").addEventListener("click",function(){playRound("ROCK",getComputerChoice())});
document.getElementById("PAPER").addEventListener("click",function(){playRound("PAPER",getComputerChoice())});
document.getElementById("SCISSORS").addEventListener("click",function(){playRound("SCISSORS",getComputerChoice())});
