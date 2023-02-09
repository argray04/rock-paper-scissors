
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
console.log(playerChoice);
function rockPaperScissors(){
  if (computer == playerChoice){
        alert("That's a draw!");
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
