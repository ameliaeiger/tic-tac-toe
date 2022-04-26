class Game {
  constructor(){
    this.playerOne = new Player ("assets/finn.svg", "One", true);
    this.playerTwo = new Player ("assets/jake.svg", "Two", false);
    this.nextPlayer = this.playerTwo;
    this.currentPlayer = this.playerOne;
    this.turns = 0;
    this.rounds = 1;
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
  alternateTurn(){
    this.turns += 1
    if (this.turns == 9){
      this.rounds += 1
      renderDraw()
      this.findStartRound()
      this.resetGame()
    } else if (this.winner){
      this.resetGame()
    } else {
      this.currentPlayer.isTurn = false;
      this.nextPlayer.isTurn = true;
      this.findTurn()
      renderDisplay()
    }
  }
  checkWinner(){
     for (let i =0; i < this.winConditions.length; i++){
      if (this.currentPlayer.moves.includes(this.winConditions[i][0]) && this.currentPlayer.moves.includes(this.winConditions[i][1]) && this.currentPlayer.moves.includes(this.winConditions[i][2])){
        this.winner = this.currentPlayer.name
        this.currentPlayer.addPoint()
        this.rounds += 1
        return true;
    }
  }
}
  resetGame(){
      this.playerOne.moves = []
      this.playerTwo.moves = []
      this.turns = 0;
      renderDisplay();
  }
  findTurn(){
      if (this.playerOne.isTurn){
        this.currentPlayer = this.playerOne
        this.nextPlayer = this.playerTwo
      } else {
        this.currentPlayer = this.playerTwo
        this.nextPlayer = this.playerOne
    }
  }
  findStartRound(){
    if (this.rounds % 2 == 0){
      this.playerTwo.isTurn = true;
      this.playerOne.isTurn = false;
      this.findTurn();
    } else {
      this.playerOne.isTurn = true;
      this.playerTwo.isTurn = false;
    } this.findTurn();
  }
}
