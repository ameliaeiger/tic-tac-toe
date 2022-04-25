// GLOBALS
let gameBoard = document.getElementById("gameboard");
let turnTracker = document.getElementById("turn-tracker")

let playerOne = new Player("assets/finn.svg", "One", true);
let playerTwo = new Player ("assets/jake.svg", "Two", false);

let dropdownOne = document.getElementById("dropdown-one");
let playerOneIcon = document.getElementById("visibleOne");
// let game = new Game(playerOne, playerTwo);

let icons = [
  "assets/peebs.svg",
  "assets/marceline.svg",
  "assets/finn.svg",
  "assets/ice-king.svg",
  "assets/lumpy.svg",
]

// EVENT LISTENERS

// document.addEventListener("load", )
gameBoard.addEventListener("click", handleClick)

dropdownOne.addEventListener("mouseover", addSelectedClass);
dropdownOne.addEventListener("mouseout", removeSelectedClass);
dropdownOne.addEventListener("click", changeIconOne);



// FUNCTIONS AND EVENT HANDLERS

let finn = new Game(playerOne, playerTwo)

function instantiatePlayers() {
  let playerOne = new Player("assets/finn.svg", "One", true);
  let playerTwo = new Player ("O", "Two", false);
}


function handleClick(){
  if (event.target.classList.contains("square")){
    let chosenSquare = event.target.closest("div")
    if (!chosenSquare.innerHTML){
    if (playerOne.isTurn){
      // chosenSquare.innerHTML = playerOne.id
      chosenSquare.innerHTML = `<img src=${playerOne.id}>`
      finn.currentPlayer.moves.push(parseInt(chosenSquare.id))
      finn.checkWinner();
      finn.alternateTurn();
    } else {
      console.log("Player two")
      chosenSquare.innerHTML = `<img src=${playerTwo.id}>`
      finn.currentPlayer.moves.push(parseInt(chosenSquare.id))
      finn.checkWinner()
      finn.alternateTurn()
    }
    } else {
    console.log("seat's taken!")
    }
  }
}

let squares = document.querySelectorAll(".square")
//Put in game.js, playerMove goes in player.js
let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
]



// function checkWinner(){
//   for (let i =0; i < winConditions.length; i++){
//     if(finn.currentPlayer.moves.includes(winConditions[i][0]) && finn.currentPlayer.moves.includes(winConditions[i][1]) && finn.currentPlayer.moves.includes(winConditions[i][2])){
//       finn.currentPlayer.addPoint()
//       console.log("win!")
//       finn.resetGame()
//     }
//   }
// }



// MOve to class
// function checkWinner(){
//   if ((squares[0].innerHTML == finn.currentPlayer.id) && (squares[1].innerHTML == finn.currentPlayer.id) && (squares[2].innerHTML == finn.currentPlayer.id) ||
//       (squares[3].innerHTML == finn.currentPlayer.id) && (squares[4].innerHTML == finn.currentPlayer.id) && (squares[5].innerHTML == finn.currentPlayer.id) ||
//       (squares[6].innerHTML == finn.currentPlayer.id) && (squares[7].innerHTML == finn.currentPlayer.id) && (squares[8].innerHTML == finn.currentPlayer.id) ||
//       (squares[0].innerHTML == finn.currentPlayer.id) && (squares[3].innerHTML == finn.currentPlayer.id) && (squares[6].innerHTML == finn.currentPlayer.id) ||
//       (squares[1].innerHTML == finn.currentPlayer.id) && (squares[4].innerHTML == finn.currentPlayer.id) && (squares[7].innerHTML == finn.currentPlayer.id) ||
//       (squares[2].innerHTML == finn.currentPlayer.id) && (squares[5].innerHTML == finn.currentPlayer.id) && (squares[8].innerHTML == finn.currentPlayer.id) ||
//       (squares[0].innerHTML == finn.currentPlayer.id) && (squares[4].innerHTML == finn.currentPlayer.id) && (squares[8].innerHTML == finn.currentPlayer.id) ||
//       (squares[6].innerHTML == finn.currentPlayer.id) && (squares[4].innerHTML == finn.currentPlayer.id) && (squares[2].innerHTML == finn.currentPlayer.id)) {
//     console.log(finn.currentPlayer.id + " wins!")
//     finn.currentPlayer.addPoint()
//
//   } else {
//     console.log("draw!")
//   }
// }

function displayTurn(){
  turnTracker.innerText = `It's ${finn.nextTurn}'s turn!`
}

function addSelectedClass(){
  displayIconChoices()
  if (event.target.classList.contains("player-icon")){
    event.target.classList.add("selected")
  }
}

function removeSelectedClass(){
  if (event.target.classList.contains("player-icon")){
    event.target.classList.remove("selected")
  }
}

function changeIconOne(){
  if (event.target.classList.contains("player-icon")){
    finn.playerOne.id = event.target.src
    event.target.src = playerOneIcon.src
    finn.playerOne.selectIcon()
  }
}
let allChoices = document.querySelectorAll("player-icon")

function displayIconChoices(){
  for (let i=0; i < icons.length; i++){
    allChoices[i].src = icons[i]
  }
}
