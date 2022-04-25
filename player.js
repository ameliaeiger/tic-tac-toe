class Player{
  constructor(id, name, turn){
    this.id = id
    this.displayIcon = document.getElementById(`visible${name}`)
    this.name = name
    this.score = 0;
    this.isTurn = turn
    this.moves = []
  }
  addPoint(){
    this.score += 1
  }
  selectIcon(){
    this.displayIcon.src = this.id
  }
}
