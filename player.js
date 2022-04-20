class Player{
  constructor(id, turn){
    this.id = id
    this.score = 0;
    this.isTurn = turn
  }
  addPoint(){
    this.score += 1
  }
}
