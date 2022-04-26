class Game {
  constructor(){
    this.playerOne = new Player ("assets/finn.svg", "One", true)
    this.playerTwo = new Player ("assets/jake.svg", "Two", false)
    this.playerOneScore = this.playerOne.score
    this.playerTwoScore = this.playerTwo.score
    this.board = ""
    this.nextTurn = this.playerTwo;
    this.currentPlayer = this.playerOne;
    this.turns = 0;
    this.round = 1;
    this.winner = "";
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
    if (this.turns == 9 && playerOne.moves.length == 5){
     console.log("draw")
     this.resetGame()
   } else {
     for (let i =0; i < winConditions.length; i++){
      if(this.currentPlayer.moves.includes(winConditions[i][0]) && finn.currentPlayer.moves.includes(winConditions[i][1]) && finn.currentPlayer.moves.includes(winConditions[i][2])){
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
  // generateBoard() {
  //   for (let i=0; i < 9; i++) {
  //     let square = document.createElement("div");
  //     square.className = `square num${i}`;
  //     square.id = i;
  //     document.getElementById("gameboard").appendChild(square);
  //   }
  // }
  resetGame(){
      this.playerOne.moves = []
      this.playerTwo.moves = []
      this.turns = 0;
  }
  clearWinner(){
    this.winner = ""
  }
}


// Two player instances X
// Scorekeeper
// Turn tracker
// Check win conditions
// Game reset
