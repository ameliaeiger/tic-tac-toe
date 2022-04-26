class Game {
  constructor(){
    this.playerOne = new Player ("assets/finn.svg", "One", true);
    this.playerTwo = new Player ("assets/jake.svg", "Two", false);
    this.playerOneScore = this.playerOne.score;
    this.playerTwoScore = this.playerTwo.score;
    this.nextTurn = this.playerTwo;
    this.currentPlayer = this.playerOne;
    this.turns = 0;
    this.round = 1;
    this.winner = "";
    this.winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
  }
  instantiatePlayer(){
    let playerOne = new Player("assets/finn.svg", "Player One", true);
    let playerTwo = new Player ("assets/jake.svg", "Player Two", false);
  }
  alternateTurn(){
    if (this.winner){
      toggleDisplayBanner()
    } else if (this.playerOne.isTurn == true){
      this.playerOne.isTurn = false;
      this.playerTwo.isTurn = true;
      this.nextTurn = "Player Two";
      this.currentPlayer = this.playerTwo;
      this.turns += 1;
      displayTurn();
    } else {
      this.playerOne.isTurn = true;
      this.playerTwo.isTurn = false;
      this.nextTurn = "Player One";
      this.currentPlayer = this.playerOne;
      this.turns += 1;
      displayTurn();
    }
  }
  checkWinner(){
    if (this.turns == 9 && game.playerOne.moves.length == 5){
     console.log("draw")
     this.resetGame()
   } else {
     for (let i =0; i < this.winConditions.length; i++){
      if(this.currentPlayer.moves.includes(this.winConditions[i][0]) && this.currentPlayer.moves.includes(this.winConditions[i][1]) && this.currentPlayer.moves.includes(this.winConditions[i][2])){
        this.winner = this.currentPlayer.name
        this.round += 1
        this.currentPlayer.addPoint()
        displayPoint(this.currentPlayer.name)
        this.resetGame()
        setTimeout(toggleShowWinner, 1500)
        setTimeout(toggleShowWinner, 5000)
        setTimeout(clearBoard, 2000)
        displayTurn()
      }
    }
  }
}
checkScore() {
    console.log(this.playerOne.score)
    console.log(this.playerTwo.score)
  }
  resetGame(){
      this.playerOne.moves = []
      this.playerTwo.moves = []
      this.turns = 0;
  }
  clearWinner(){
    this.winner = ""
  }
}
