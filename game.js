class Game {
  constructor(playerOne, playerTwo){
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.board = ""
    this.nextTurn = playerTwo;
    this.currentPlayer = playerOne;
    this.turns = 0;
  }
  alternateTurn(){
    if (this.playerOne.isTurn == true){
      this.playerOne.isTurn = false;
      this.playerTwo.isTurn = true;
      this.nextTurn = "Player Two";
      this.currentPlayer = playerTwo;
      this.turns += 1;
      displayTurn();
    } else {
      this.playerOne.isTurn = true;
      this.playerTwo.isTurn = false;
      this.nextTurn = "Player One";
      this.currentPlayer = playerOne;
      this.turns += 1;
      displayTurn();
    }
  }
  checkWinner(){
    if (this.turns == 9 && playerOne.moves.length == 5){
     console.log("draw")
     this.resetGame()
   } else {
     for (let i =0; i < winConditions.length; i++){
      if(this.currentPlayer.moves.includes(winConditions[i][0]) && finn.currentPlayer.moves.includes(winConditions[i][1]) && finn.currentPlayer.moves.includes(winConditions[i][2])){
        this.currentPlayer.addPoint()
        console.log("win!")
        this.resetGame()
      }
    }
  }
}
checkScore() {
    console.log(this.playerOne.score)
    console.log(this.playerTwo.score)
  }
  // generateBoard() {
  //   for (let i=0; i < 9; i++) {
  //     let square = document.createElement("div");
  //     square.className = `square num${i}`;
  //     square.id = i;
  //     document.getElementById("gameboard").appendChild(square);
  //   }
  // }
  resetGame(){
    for (let i=0; i < squares.length; i++){
      squares[i].innerHTML = ""
      this.playerOne.moves = []
      this.playerTwo.moves = []
      this.turns = 0;
    }
  }
}


// Two player instances X
// Scorekeeper
// Turn tracker
// Check win conditions
// Game reset
