const resultDiv = document.querySelector("#result");

let computerScore = 0;
let playerScore = 0;

function computerPlay() 
{
    let result = Math.floor((Math.random()*3) + 1);
    let answer = "?";

    switch(result) {            
        case 1:
            answer = "rock";
            break;
        case 2: 
            answer = "paper";
            break;
        case 3: 
            answer = "scissors";
            break;
    }
    return answer;
}

function playRound(playerSelection)
{
    const computerSelection = computerPlay();
    let result;
    console.log(computerSelection);

    if (playerSelection == computerSelection)
    {
        result = "Tie!"
    }
    else
    {
            switch(playerSelection)
        {
            case "rock": 
                if (computerSelection == "paper")
                    result = "You lose! Paper beats Rock";
                else
                    result = "You win! Rock beats Scissors";
                break;
            case "paper": 
                if (computerSelection == "scissors")
                    result = "You lose! Scissors beats Paper";
                else
                    result = "You win! Paper beats Rock";
                break;
            case "scissors": 
                if (computerSelection == "rock")
                    result = "You lose! Rock beats Scissors";
                else
                    result = "You win! Scissors beats Paper";
                break;
        }
    }
    resultDiv.textContent = result;
}

const rockBtn = document.querySelector("#rockbtn");
rockBtn.addEventListener('click', function(e) {
    playRound("rock");
})

const paperBtn = document.querySelector("#paperbtn");
paperBtn.addEventListener("click", function (e) {
    playRound("paper");
})

const scissorsBtn = document.querySelector("#scissorsbtn");
scissorsBtn.addEventListener("click", function(e) {
    playRound("scissors");
})