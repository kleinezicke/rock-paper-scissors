const resultDiv = document.querySelector("#result");
const compouterDiv = document.querySelector("#computer")

let computerScore = 0;
let playerScore = 0;

function computerPlay() 
{
    let result = Math.floor((Math.random()*3) + 1);
    let answer = "?";

    switch(result) {            
        case 1:
            answer = "Rock";
            break;
        case 2: 
            answer = "Paper";
            break;
        case 3: 
            answer = "Scissors";
            break;
    }
    compouterDiv.textContent = answer;
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
            case "Rock": 
                if (computerSelection == "Paper")
                        result = loss(playerSelection);
                else
                    result = win(playerSelection);

                break;
            case "Paper": 
                if (computerSelection == "Scissors")
                    result = loss(playerSelection);
                else
                    result = win(playerSelection);
                break;
            case "Scissors": 
                if (computerSelection == "Rock")
                    result = loss(playerSelection);
                else
                    result = win(playerSelection);
                break;
        }
    }
    resultDiv.textContent = result;

    if (playerScore == 5) {
        resultDiv.textContent = "Congratulations! You win the game!"
    }
    else if (computerScore == 5) {
        resultDiv.textContent = "You lost the game! :( Better Luck next time"
    }

    function loss(playerSelection) {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        return result;
    }

    function win(playerSelection) {
        result = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore ++;
        return result;
    }
}

    const rockBtn = document.querySelector("#rockbtn");
    rockBtn.addEventListener('click', function(e) {
        playRound("Rock");
    })
    
    const paperBtn = document.querySelector("#paperbtn");
    paperBtn.addEventListener("click", function (e) {
        playRound("Paper");
    })
    
    const scissorsBtn = document.querySelector("#scissorsbtn");
    scissorsBtn.addEventListener("click", function(e) {
        playRound("Scissors");
    })