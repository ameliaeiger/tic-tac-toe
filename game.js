class Game {
  constructor(playerOne, playerTwo){
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.board = ""
    this.nextTurn = playerTwo
    this.currentPlayer = playerOne
  }
  alternateTurn(){
    if (this.playerOne.isTurn == true){
      this.playerOne.isTurn = false;
      this.playerTwo.isTurn = true;
      this.nextTurn = "Player Two";
      this.currentPlayer = playerTwo;
      displayTurn();
    } else {
      this.playerOne.isTurn = true;
      this.playerTwo.isTurn = false;
      this.nextTurn = "Player One";
      this.currentPlayer = playerOne;
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
      square.id = i;
      document.getElementById("gameboard").appendChild(square);
    }
  }
  resetGame(){
    for (let i=0; i < squares.length; i++){
      squares[i].innerHTML = ""
      this.playerOne.moves = []
      this.playerTwo.moves = []
    }

  }
}


// Two player instances X
// Scorekeeper
// Turn tracker
// Check win conditions
// Game reset
