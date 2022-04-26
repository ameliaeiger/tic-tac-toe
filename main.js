// GLOBALS
let game = new Game();
let gameBoard = document.getElementById("gameboard");
let turnTracker = document.getElementById("turn-tracker");
let winScreen = document.getElementById("win-screen");
let winText = document.getElementById("win-text");
let squares = document.querySelectorAll(".square")

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

let icons = [
  "assets/peebs.svg",
  "assets/marceline.svg",
  "assets/finn.svg",
  "assets/ice-king.svg",
  "assets/lumpy.svg",
];

let quotes = [
  "I'm killing you with ice cream!",
  "I'm not gonna spank your hams!",
  "Wands are for wimps!",
  "Die, you fire!",
  "The library of the undead!",
  "I'll just read this book about pigs.",
  "Jake, we're going to college!",
  "I can't help it, man! I'm all about stupid!",
  "Everything small is just a small version of something big! I understand everything!",
  "A 4-dimensional bubble casts a 3-dimensional shadow! It is beyond comprehension! Beyond space! Beyond time!",
  "You're beautiful on the inside like... your brain and stuff.",
  "Yes! And their brains are releasing adrenaline, dopamine, even dimethyltryptamine from the pineal gland! This has serious educational value! Thanatophobia and this N.D.E. is giving us euphoric altered awareness! Don't you see, Princess? We were all born to die!",
  "What? No way. I'm, like, the smartest guy in Ooo thanks to these glasses.",
  "Huh, knew what? I wrote that list when I was insane with smartness.",
  "Up, down, left, left, right, right, down, spin, down, up, left, right, left, down, spin, up, down, jump!",
  "If I were really in this game, I would crush Sam, breezily, with my mitts!",
  "I'm looking at my bits, dude. My leg is math!",
  "Let's go kick their digital bootays!",
  "Bouncy Bee, Hunny Bunny, they're all hard as butts.",
  "Your brain is stupid!",
  "You're going down or both of us are going down!",
  "Marceline, would you do me the honor of getting the plop outta here?",
  "I wish for... the Ancient Psychic Tandem War Elephant!",
  "Thirteen years old? That's how old I am.",
  "Uh, bleach, lighter fluid, ammonia, gasoline, I dunno. Lady stuff... Plutonium...",
  "This stink up's mega bamm-bamm to the J-Stop!",
  "But strength isn't your strength. Adorable cuteness is!",
  "I'm a buff baby who can dance like a man!",
  "Puncha yo buns, puncha yo buns!",
  "So spice! So spice!",
  "What the huh?",
  "That's bunk! Right, Pree-bos?",
  "Yeah, like pranking him up his face!",
  "Easy as childbirth.",
  "I'll get your kid back, toy.",
  "Aw, dude! I broke my stems!",
  "Yo! Is everyone in church? Worshiping Glob?",
  "Give it up, Me-Mow! You're only making my face look cooler!",
  "That idiot's about to walk into the sun.",
  "My way!",
  "Jake! You looted?! That's bad, man! You're supposed to be good cop.",
  "Gold darn you, tear ducts! Yah! Yah!",
  "Dude, I think I have a crush.",
  "She ain't evil. She's passionate. Help me track her down.",
  "No, man. I'll stunt you out!",
  "Marceline. No one... leaves the Nightosphere!",
  "We never went steady.",
  "Hey. What the jug is that?",
  "I'll hug your mom! ",
  "Oh, whoa so, that means Stormo is like... my son?",
  "You better get back in the Spirit Hole, dead one.",
  "Jake! Kerploop!",
  "Alvin's hot juice box! Alvin's hot juice box!",
  "Uh... Can my Cool Dog and Ancient Scholar defeat your Husker Knights?",
  "I floop the Pig!",
  "Well, for one, I think this house is a reflection of your sick brain.",
  "Your wavelengths are my weakness. Your emissions are what I've been missing.",
  "Get out of my house, King Worm!",
  "Princess, Ricardo's alive, he's in the black ice caves and he's peacocking hardcore!",
  "Let's crush this mess all accordingly!",
  "I want bionic legs!",
  "Naked babies! Naked babies! Naked babies!",
  "I call fire patrol!",
  "Shmow-tow, dude! That guy's gonna dingle our bones into tapioca pudding!",
  "I wish...The Lich... never, even ever existed!",
  "Oh, what a good boy am I!",
  "Do the splits, thou milk-livered maggot pie!",
  "Oh crab it to the butternuts, it's locked!",
  "Escape, Jake, escape!",
  "STOP TALKING LIKE A NERD AND GIVE IT TO US STRAIGHT!!",
  "Ahem... Hey, Bubs, where's the Ice King? I want to kick his boingloings!",
  "I guess I'm just thinking about Flame Princess. I told her a joke the other day and she didn't even laugh or anything. Guess it's over between us.",
  "Oh, well... I... have a girlfriend.",
  "Alphanumeric! Pillow sheep! You have more fluff than sense!",
  "I remember... back... when I was dad.",
  "I've been going foot nude in the shoe and now I got this turbo huge callous.",
  "Hey, it's okay BMO, look, Jake and I will make you a funny face.",
  "We're documenting our creative flow in case we make a break through.",
  "Yeah, its good, but if we want to be James Baxter good, we gotta go deeper.",
  "We know to figure out how to make our sound force happiness into the listener!",
  "Bringeth it on, sir!",
  "Oh, I win! You're so disappointed.",
  "That road you're on leads to nowhere.",
  "You wanna join my primitive noise band?",
  "Hello? Oh! Is that the machine part that I ordered?",
  "Jake. A crime has been committed. We must find the criminal.",
  "What the-?! Jake! What's with all the turning into stuff today?",
  "Roll the dice, you pay the price.",
  "Man, we didn't just crack that case, we crunched it! Crumbled it!",
  "Trespassers get killed mad quick, like zap-zap.",
  "Entanglement is a spell where you get trapped in tree roots, and sometimes they spike out and hook your flesh, and you got to be like, My body is clay, my spirit feels no pain. Then you chop your way out and kill the wizard!",
  "Is PB straight-up naked right now?",
  "I got traumatized by those underpanties.",
  "Your magicks are powerful, PB.",
  "Yeah, BMO, show me the stuff, keep it coming!",
  "C'mon bro, taking pain is easy. You just have to imagine that every bruise is a hickey from the Universe. And everyone wants to get with the Universe.",
  "Dude, I'm graceful. Mom raised me graceful.",
  "Dude, what the bjork?",
  "Jake, it's my special occasion phone! Someone's calling me to tell me about a special occasion.",
  "Bring it! Yeah, baby, feels good, love it, lovin' that heat on my skull!",
  "It was weird but I liked it.",
  "Come forth, wizard, and uncurse my mitt! Grassy Mountain Wizard!",
  "Jeez. Did I just get shown up by Cinnamon Bun?",
  "Off the dome, here we go. Uh! I'm a start it now. I'm a battle now. We gonna make a rhyme, so I can rap this time. I rap for millions... sesquipedalians.",
  "Thanks a lot, DAD!",
  "There's a cricket in here.",
  "A'ight, let's peep it.",
  "The power of l..liking someone a lot!",
  "Oh, yeah. The vault. That's where the stuff I can't handle goes. Kerplunk.",
  "The past was to be reckoned with.",
  "Weirdo.",
  "My vault feels lighter.",
  "Yeah, it's pretty math... you psychopath!",
];

// EVENT LISTENERS

gameBoard.addEventListener("click", handleClick);
readyPlayerOne.addEventListener("click", submitCharacterSelection);
readyPlayerTwo.addEventListener("click", submitCharacterSelection);
dropdownOne.addEventListener("click", changeIcon);
dropdownTwo.addEventListener("click", changeIcon);

// FUNCTIONS AND EVENT HANDLERS

function handleClick() {
  if (insertIconToDom()) {
    renderDisplay()
  } else {
  game.alternateTurn();
  }
}

function insertIconToDom(){
    if (event.target.classList.contains("square")){
      let chosenSquare = event.target.closest("div")
      if (!chosenSquare.innerHTML){
        chosenSquare.innerHTML = `<img src=${game.currentPlayer.id}>`
        game.currentPlayer.moves.push(parseInt(chosenSquare.id))
        if (game.checkWinner()) {
          return true
        }
      }
  }
}

function renderDisplay(){
  playerOneScoreBoard.innerText = game.playerOne.score;
  playerTwoScoreBoard.innerText = game.playerTwo.score;
  if (game.winner){
    turnTracker.innerText = `WE HAVE A WINNER...`
    setTimeout(toggleWinScreen, 1500)
    setTimeout(toggleWinScreen, 5000)
    setTimeout(clearBoard, 2000)
    game.findStartRound();
  } else {
    turnTracker.innerText = `It's Player ${game.currentPlayer.name}'s turn!`;
  }
}

function renderDraw(){
  turnTracker.innerText = "IT'S A DRAW!"
  setTimeout(renderDisplay, 2000)
  setTimeout(clearBoard, 1000)
}

function toggleWinScreen(){
  if (winScreen.classList.contains("hidden")){
  toggleHidden(winScreen)
  toggleHidden(winText)
  winText.innerText = `Player ${game.winner} Wins!`
  game.winner = ""
} else {
  game.resetGame();
  toggleHidden(winScreen);
  toggleHidden(winText);
  }
}


function clearBoard(){
  for (let i=0; i < squares.length; i++){
    squares[i].innerHTML = ""
  }
  renderDisplay()
}

function submitCharacterSelection(){
  if (event.target.id == "submit-one"){
    for (let i=0; i<playerOneChoices.length; i++){
    toggleHidden(playerOneChoices[i])
    }
    toggleHidden(readyPlayerOne)
    toggleHidden(chooseCharacterTextOne)
    toggleHidden(playerOneText)
    playerOneIcon.classList.add("chosen-icon")
  } else if (event.target.id == "submit-two"){
    for (let i=0; i<playerTwoChoices.length; i++){
      toggleHidden(playerTwoChoices[i], "hidden")
    }
    toggleHidden(readyPlayerTwo, "hidden")
    toggleHidden(chooseCharacterTextTwo, "hidden")
    toggleHidden(playerTwoText)
    playerTwoIcon.classList.add("chosen-icon")
  }
}

function changeIcon(){
  if (event.target.classList.contains("dropdown-content-one")){
    if (event.target.src != game.playerTwo.id){
    game.playerOne.id = event.target.src
    event.target.src = game.playerOne.displayIcon.src
    game.playerOne.selectIcon()
    }
  } else if (event.target.classList.contains("dropdown-content-two")){
    if (event.target.src != game.playerOne.id){
    game.playerTwo.id = event.target.src
    event.target.src = game.playerTwo.displayIcon.src
    game.playerTwo.selectIcon()
    }
  }
}

function toggleHidden(elementName){
  if (elementName.classList.contains("hidden")){
    elementName.classList.remove("hidden")
  } else {
    elementName.classList.add("hidden")
  }
}
