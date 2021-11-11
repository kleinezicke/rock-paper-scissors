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

function playRound()
{
    const playerSelection = prompt("Rock Paper or Scissors?").toLocaleLowerCase();
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
    return result;
}

function game()
{
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        let roundResult = playRound();
        console.log(roundResult);

        roundResultsplit = roundResult.split("!");

        switch(roundResultsplit[0])
        {
            case "You win": 
                playerScore++;
                break;
            case "You lose":
                computerScore++;
                break;
        }                
    }

    if (playerScore > computerScore)
        console.log("You win the game!");
    else if (playerScore < computerScore)
        console.log("You lose the game!");
    else
        console.log("It's a tie!");
}
