let result_h3 = document.getElementById("RESULT");
let user_score_p = document.getElementById("USER_SCORE");
let computer_score_p = document.getElementById("COMPUTER_SCORE");
let user_score = 0;
let computer_score = 0;

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
            if (computerSelection === "PAPER") {
                computer_score++;
                computer_score_p.innerHTML = computer_score;
                result_h3.innerHTML = "Computer chose PAPER. You lost!"
            }
            else {
                user_score++;
                user_score_p.innerHTML = user_score;                
                result_h3.innerHTML = "Computer chose SCISSORS. You won!"
            }
         }
    else if (userSelection === "PAPER"){
            if (computerSelection === "SCISSORS") {
                computer_score++;
                computer_score_p.innerHTML = computer_score;                
                result_h3.innerHTML = "Computer chose SCISSORS. You lost!"
            }
            else {
                user_score++;
                user_score_p.innerHTML = user_score;                  
                result_h3.innerHTML = "Computer chose ROCK. You won!"
            }
         }
    else if (userSelection === "SCISSORS"){
            if (computerSelection === "ROCK") {
                computer_score++;
                computer_score_p.innerHTML = computer_score;                    
                result_h3.innerHTML = "Computer chose ROCK. You lost!"
            }
            else {
                user_score++;
                user_score_p.innerHTML = user_score;                   
                result_h3.innerHTML = "Computer chose PAPER. You won!"
            }
         }          
}
document.getElementById("ROCK").addEventListener("click",function(){playRound("ROCK",getComputerChoice())});
document.getElementById("PAPER").addEventListener("click",function(){playRound("PAPER",getComputerChoice())});
document.getElementById("SCISSORS").addEventListener("click",function(){playRound("SCISSORS",getComputerChoice())});
