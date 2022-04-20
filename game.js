class Game {
  constructor(playerOne, playerTwo){
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.board = ""
    this.turn = ""
  }
  alternateTurn(){
    if (this.playerOne.isTurn == true){
      this.playerOne.isTurn = false;
      this.playerTwo.isTurn = true;
    } else {
      this.playerOne.isTurn = true;
      this.playerTwo.isTurn = false;
    }
  }
  checkScore() {
    console.log(this.playerOne.score)
    console.log(this.playerTwo.score)
  }
  generateBoard() {
    for (let i=0; i < 9; i++) {
      let square = document.createElement("div");
      square.className = `square`;
      document.getElementById("gameboard").appendChild(square);
      console.log("made board!");
    }
  }
}


// Two player instances X
// Scorekeeper
// Turn tracker
// Check win conditions
// Game reset
