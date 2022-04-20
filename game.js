class Game {
  constructor(playerOne, playerTwo){
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.turn = playerOne.isTurn;
  }
  checkScore() {
    console.log(this.playerOne.score)
    console.log(this.playerTwo.score)
  }
}


// Two player instances X
// Scorekeeper
// Turn tracker
// Check win conditions
// Game reset
