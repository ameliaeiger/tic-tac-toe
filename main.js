// GLOBALS
let gameBoard = document.getElementById("gameboard");

let playerOne = new Player("X", true);
let playerTwo = new Player ("O", false);
let game = new Game(playerOne, playerTwo);


// EVENT LISTENERS

gameBoard.addEventListener("click", handleClick)




// FUNCTIONS AND EVENT HANDLERS


function newGame() {
  for (let i=0; i < 9; i++){
    let square = document.createElement("div");
    square.className = `square`;

    document.getElementById("gameboard").appendChild(square)
  }
}


function instantiateGame() {
  let playerOne = new Player("X", true);
  let playerTwo = new Player ("O", false);
  let game = new Game(playerOne, playerTwo);
}

function handleClick(){
  alert("yo")
}
