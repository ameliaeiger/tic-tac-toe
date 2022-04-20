class Player{
  constructor(id, name, turn){
    this.id = id
    this.name = name
    this.score = 0;
    this.isTurn = turn
  }
  addPoint(){
    this.score += 1
  }
}
