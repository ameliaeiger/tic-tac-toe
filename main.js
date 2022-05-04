// GLOBALS
let game = new Game();
let gameBoard = document.getElementById("gameboard");
let turnTracker = document.getElementById("turn-tracker");
let winScreen = document.getElementById("win-screen");
let winText = document.getElementById("win-text");
let squares = document.querySelectorAll(".square");

// Player One
let dropdownOne = document.getElementById("dropdown-one");
let playerOneIcon = document.getElementById("visibleOne");
let readyPlayerOne = document.getElementById("submit-one");
let playerOneChoices = document.querySelectorAll(".dropdown-content-one");
let chooseCharacterTextOne = document.getElementById("setup-text-one");
let playerOneText = document.getElementById("player-one-text");
let playerOneScoreBoard = document.getElementById("one-score");

//Player Two
let playerTwoIcon = document.getElementById("visibleTwo");
let dropdownTwo = document.getElementById("dropdown-two");
let playerTwoChoices = document.querySelectorAll(".dropdown-content-two");
let readyPlayerTwo = document.getElementById("submit-two");
let chooseCharacterTextTwo = document.getElementById("setup-text-two");
let playerTwoText = document.getElementById("player-two-text");
let playerTwoScoreBoard = document.getElementById("two-score");

// EVENT LISTENERS

gameBoard.addEventListener("click", handleClick);
readyPlayerOne.addEventListener("click", submitCharacterSelection);
readyPlayerTwo.addEventListener("click", submitCharacterSelection);
dropdownOne.addEventListener("click", changeIcon);
dropdownTwo.addEventListener("click", changeIcon);

// FUNCTIONS AND EVENT HANDLERS

function handleClick() {
  insertIconToDom();
  if (game.checkWinner()){
    renderDisplay();
    return;
  } else if (game.checkDraw()){
    return;
  } else {
  game.alternateTurn();
  renderDisplay();
  }
}

function insertIconToDom(){
    if (event.target.classList.contains("square")){
      let chosenSquare = event.target.closest("div");
      if (!chosenSquare.innerHTML){
        chosenSquare.innerHTML = `<img src=${game.currentPlayer.id}>`;
        game.currentPlayer.moves.push(parseInt(chosenSquare.id));
        game.turns += 1;
      }
    } else if (chosenSquare.innerHTML){
    console.log("seat's taken!");
  }
}

function renderDisplay(){
  playerOneScoreBoard.innerText = game.playerOne.score;
  playerTwoScoreBoard.innerText = game.playerTwo.score;
  if (game.winner){
    turnTracker.innerText = `WE HAVE A WINNER...`;
    setTimeout(toggleWinScreen, 1500);
    setTimeout(toggleWinScreen, 5000);
    setTimeout(clearBoard, 2000);
    setTimeout(game.resetGame, 2000);
  } else {
    turnTracker.innerText = `It's Player ${game.currentPlayer.name}'s turn!`;
  }
}

function renderDraw(){
  turnTracker.innerText = "IT'S A DRAW!";
  setTimeout(clearBoard, 2000);
  setTimeout(game.resetGame, 1000);
}

function toggleWinScreen(){
  if (winScreen.classList.contains("hidden")){
  toggleHidden(winScreen);
  toggleHidden(winText);
  winText.innerText = `Player ${game.winner} Wins!`;
  game.winner = "";
} else {
  toggleHidden(winScreen);
  toggleHidden(winText);
  }
}

function clearBoard(){
  for (let i=0; i < squares.length; i++){
    squares[i].innerHTML = "";
  }
  renderDisplay()
}

function submitCharacterSelection(){
  if (event.target.id == "submit-one"){
    for (let i=0; i<playerOneChoices.length; i++){
    toggleHidden(playerOneChoices[i]);
    }
    toggleHidden(readyPlayerOne);
    toggleHidden(chooseCharacterTextOne);
    toggleHidden(playerOneText);
    playerOneIcon.classList.add("chosen-icon");
  } else if (event.target.id == "submit-two"){
    for (let i=0; i<playerTwoChoices.length; i++){
      toggleHidden(playerTwoChoices[i], "hidden");
    }
    toggleHidden(readyPlayerTwo, "hidden");
    toggleHidden(chooseCharacterTextTwo, "hidden");
    toggleHidden(playerTwoText);
    playerTwoIcon.classList.add("chosen-icon");
  }
}

function changeIcon(){
  if (event.target.classList.contains("dropdown-content-one")){
    if (event.target.src != game.playerTwo.id){
    game.playerOne.id = event.target.src;
    event.target.src = game.playerOne.displayIcon.src;
    game.playerOne.selectIcon();
    }
  } else if (event.target.classList.contains("dropdown-content-two")){
    if (event.target.src != game.playerOne.id){
    game.playerTwo.id = event.target.src;
    event.target.src = game.playerTwo.displayIcon.src;
    game.playerTwo.selectIcon();
    }
  }
}

function toggleHidden(elementName){
  if (elementName.classList.contains("hidden")){
    elementName.classList.remove("hidden");
  } else {
    elementName.classList.add("hidden");
  }
}
