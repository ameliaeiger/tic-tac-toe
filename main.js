// GLOBALS
let gameBoard = document.getElementById("gameboard");

let playerOne = new Player("X", true);
let playerTwo = new Player ("O", false);
// let game = new Game(playerOne, playerTwo);


// EVENT LISTENERS

document.addEventListener("load", instantiatePlayers)
gameBoard.addEventListener("click", handleClick)




// FUNCTIONS AND EVENT HANDLERS


// function newGame() {
//   for (let i=0; i < 9; i++){
//     let square = document.createElement("div");
//     square.className = `square num${i}`;
//     document.getElementById("gameboard").appendChild(square)
//   }
// }


function instantiatePlayers() {
  let playerOne = new Player("X", true);
  let playerTwo = new Player ("O", false);
}


function handleClick(){

  //When I click, I want to insert ID t

  if (event.target.className === "square"){
    event.target.closest("div")
    console.log(event.target.closest("div"))
  }
}
