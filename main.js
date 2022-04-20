// GLOBALS
let gameBoard = document.getElementById("gameboard");
let turnTracker = document.getElementById("turn-tracker")

let playerOne = new Player("X", true);
let playerTwo = new Player ("O", false);
// let game = new Game(playerOne, playerTwo);


// EVENT LISTENERS

document.addEventListener("load", instantiatePlayers)
gameBoard.addEventListener("click", handleClick)




// FUNCTIONS AND EVENT HANDLERS

let finn = new Game(playerOne, playerTwo)
finn.generateBoard()

function instantiatePlayers() {
  let playerOne = new Player("X", true);
  let playerTwo = new Player ("O", false);
}


function handleClick(){
  if (event.target.classList.contains("square")){
    let chosenSquare = event.target.closest("div")
    if(playerOne.isTurn == true){
      chosenSquare.innerHTML = playerOne.id
      finn.alternateTurn()
    } else {
      chosenSquare.innerHTML = playerTwo.id
      finn.alternateTurn()
    }
  }
}

let squares = document.querySelectorAll(".square")

function checkWinner(){
  if ((squares[0].innerHTML == finn.currentPlayer.id) && (squares[1].innerHTML == finn.currentPlayer.id) && (squares[2].innerHTML == finn.currentPlayer.id) ||
      (squares[3].innerHTML == finn.currentPlayer.id) && (squares[4].innerHTML == finn.currentPlayer.id) && (squares[5].innerHTML == finn.currentPlayer.id) ||
      (squares[6].innerHTML == finn.currentPlayer.id) && (squares[7].innerHTML == finn.currentPlayer.id) && (squares[8].innerHTML == finn.currentPlayer.id) ||
      (squares[0].innerHTML == finn.currentPlayer.id) && (squares[3].innerHTML == finn.currentPlayer.id) && (squares[6].innerHTML == finn.currentPlayer.id) ||
      (squares[1].innerHTML == finn.currentPlayer.id) && (squares[4].innerHTML == finn.currentPlayer.id) && (squares[7].innerHTML == finn.currentPlayer.id) ||
      (squares[2].innerHTML == finn.currentPlayer.id) && (squares[5].innerHTML == finn.currentPlayer.id) && (squares[8].innerHTML == finn.currentPlayer.id) ||
      (squares[0].innerHTML == finn.currentPlayer.id) && (squares[4].innerHTML == finn.currentPlayer.id) && (squares[8].innerHTML == finn.currentPlayer.id) ||
      (squares[8].innerHTML == finn.currentPlayer.id) && (squares[4].innerHTML == finn.currentPlayer.id) && (squares[0].innerHTML == finn.currentPlayer.id)) {
    console.log(finn.currentPlayer.id + " wins!")
  }
}

function displayTurn(){
  turnTracker.innerText = `It's ${finn.turn}'s turn!`
}

// function checkWinner(){
//   // Rows
// if (num0 num1 num2 || num3 num4 num5 || num6 num7 num8 ||
//   // Columns
//   num0 num3 num6 || num1 num4 num7 || num2 num5 num8 ||
//   // Diagonals
//   num0 num4 num8 || num2 num4 num6) {
//
//   }
// }
