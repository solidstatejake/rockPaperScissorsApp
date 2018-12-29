let user_score = 0;
let computer_score = 0;
let user_score_td = document.getElementById("user-score");
let computer_score_td = document.getElementById("computer-score");
let user_move = 0;
let computer_move = 0;
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
let game_outcome = 0;// 0: draw; 1: win; 2: loss;


rock_div.addEventListener('click', function(){
  console.log("You clicked rock, broh!");
  user_move = 0;
  decideComputerMove();
  determineWinner(user_move, computer_move);
  updateScore(game_outcome);
})

paper_div.addEventListener('click', function(){
  console.log("You clicked paper, dood.");
  user_move = 1;
  decideComputerMove();
  determineWinner(user_move, computer_move);
  updateScore(game_outcome);
})

scissors_div.addEventListener('click', function(){
  console.log("You clicked scissors, hoss");
  user_move = 2;
  decideComputerMove();
  determineWinner(user_move, computer_move);
  updateScore(game_outcome);
})

// Determine the computer's move: a number between 1 and 3;
function decideComputerMove(){
  computer_move = (Math.floor(Math.random() * 3));
  switch(computer_move){
    case 0:
      console.log("Computer chose rock!");
      break;
    case 1:
      console.log("Computer chose paper!");
      break;
    case 2:
      console.log("Compute chose scissors");
      break;
  }
}


function determineWinner(user_move, computer_move) {
  switch(user_move) {
    case 0: //user chooses rock
      if(computer_move == 0){//comp chooses rock
        console.log("Game is draw");
        game_outcome = 0; //game is draw
      }
      else if(computer_move == 1){//comp chooses paper
        console.log("Game is loss");
        game_outcome = 2; //game is loss
      }
      else{
        console.log("Game is won");
        game_outcome = 1; //comp chooses scissors; game is won
      }
      break;

    case 1: //user chooses paper
      if(computer_move == 0){ //comp chooses rock
        console.log("Game is won");
        game_outcome = 1; //game is won (paper >rock)
      }
      else if(computer_move == 1){ //comp chooses paper
        console.log("Game is draw");
        game_outcome = 0; //game is draw (paper = paper)
      }
      else{
        console.log("Game is loss");
        game_outcome = 2; //comp chooses scissors; game is loss
      }
      break;

    case 2: //user chooses scissors
      if(computer_move == 0){ //comp chooses rock
        console.log("Game is loss");
        game_outcome = 2; //game is loss (scissors < rock)
      }
      else if(computer_move == 1){ //comp chooses paper
        console.log("Game is won");
        game_outcome = 1; //game is won (scissors > paper)
      }
      else{
        game_outcome = 0; //comp chooses scissors; game is draw
        console.log("Game is draw");
      }
        break;
      
  }
}

function updateScore(game_outcome){
  if(game_outcome == 1){
    user_score ++;
    user_score_td.innerHTML = user_score;
  }
  else if(game_outcome == 2)
    computer_score ++;
    computer_score_td.innerHTML = computer_score;
}