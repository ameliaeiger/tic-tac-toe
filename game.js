class Game {
  constructor(playerOne, playerTwo){
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.board = ""
    this.turn = "Player One"
    this.currentPlayer = playerOne
  }
  alternateTurn(){
    if (this.playerOne.isTurn == true){
      this.playerOne.isTurn = false;
      this.playerTwo.isTurn = true;
      this.turn = "Player Two";
      this.currentPlayer = playerOne;
      displayTurn();
    } else {
      this.playerOne.isTurn = true;
      this.playerTwo.isTurn = false;
      this.turn = "Player One";
      this.currentPlayer = playerTwo;
      displayTurn();
    }
  }
  checkScore() {
    console.log(this.playerOne.score)
    console.log(this.playerTwo.score)
  }
  generateBoard() {
    for (let i=0; i < 9; i++) {
      let square = document.createElement("div");
      square.className = `square num${i}`;
      document.getElementById("gameboard").appendChild(square);
    }
  }
}


// Two player instances X
// Scorekeeper
// Turn tracker
// Check win conditions
// Game reset
