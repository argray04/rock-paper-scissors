
//Write a function that randomly returns rock, paper, or scissors

function ComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    
    let index = Math.floor(Math.random()*3);
    console.log(index);
    let computer = choices[index];

    return computer;

}
console.log(ComputerChoice());

function playerSelection(){
        playerChoice = String(prompt("enter a choice")).toLowerCase();
        return playerChoice;
}

playerSelection();
console.log(playerSelection());
function rockPaperScissors(){

  let computer = ComputerChoice();
  let playerChoice = playerSelection();      
  if (computer == playerChoice){
        alert("That's a draw!");
  }
  if(computer == "rock" & playerChoice=="paper"){
        alert("You win!");
  }
  if(computer == "rock" & playerChoice=="scissors"){
        alert("You lose!");
  }
  if(computer == "paper" & playerChoice=="rock"){
        alert("You lose!");
  }
  if(computer == "paper" & playerChoice=="scissors"){
        alert("You win!");
  }
  if(computer == "scissors" & playerChoice=="paper"){
        alert("You lose!");
  }
  if(computer == "scissors" & playerChoice=="rock"){
        alert("You win!");
  }
}
rockPaperScissors();

//write a function that plays a single round of Rock, Paper, Scissors. 
//Should take playerSelection and computer Selection, then return
// You win or lose!


//pseudocode

//ComputerChoice function
        //Calls random string "rock", "paper", or "scissors" from a list
        //That choice goes into a new variable for the next function
//RockPaperScissors function
        //Ask for case-sensitive player choice
        //puts that into the player choice variable
        //must have conditions for all the outcomes of rps

        //r*r = draw
        //p*p = draw
        //s*s = draw
        //r*p = p wins
        //p*s = s wins
        //r*s = r wins
