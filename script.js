//
// Cards creation
//
class card {
  constructor(name, fight, speed, intelligence, img) {
    this.name = name;
    this.fight = fight;
    this.speed = speed;
    this.intelligence = intelligence;
    this.img = img;
  }
}
const sTiger = new card("Baby Tiger", 6, 4, 2, "./images/baby.tiger.jpg");
const mTiger = new card("Young Tiger", 8, 6, 3, "./images/baby.tiger.jpg");
const xTiger = new card("Adult Tiger", 10, 7, 5, "./images/baby.tiger.jpg");
const sLion = new card("Baby Lion", 6, 3, 3, "./images/baby.tiger.jpg");
const mLion = new card("Young Lion", 8, 5, 5, "./images/baby.tiger.jpg");
const xLion = new card("Adult Lion", 10, 6, 6, "./images/baby.tiger.jpg");
const sLeopard = new card("Baby Leopard", 3, 6, 2, "./images/baby.tiger.jpg");
const mLeopard = new card("Young Leopard", 5, 8, 4, "./images/baby.tiger.jpg");
const xLeopard = new card("Adult Leopard", 7, 10, 6, "./images/baby.tiger.jpg");
const sFox = new card("Baby fox", 2, 5, 7, "./images/baby.tiger.jpg");
const xFox = new card("Fox", 3, 6, 10, "./images/baby.tiger.jpg");
const turtle = new card("Turtle", 2, 1, 7, "./images/baby.tiger.jpg");
const sHorse = new card("Baby Horse", 4, 6, 4, "./images/baby.tiger.jpg");
const xHorse = new card("Horse", 6, 9, 8, "./images/baby.tiger.jpg");
const sGiraffe = new card("Baby Giraffe", 5, 3, 5, "./images/baby.tiger.jpg");
const xGiraffe = new card("Giraffe", 8, 5, 7, "./images/baby.tiger.jpg");
const sRhino = new card("Baby Rhino", 5, 2, 3, "./images/baby.tiger.jpg");
const xRhino = new card("Rhino", 10, 4, 5, "./images/baby.tiger.jpg");
const hawk = new card("Hawk", 3, 8, 9, "./images/baby.tiger.jpg");
const dragon = new card("Dragon", 11, 7, 6, "./images/baby.tiger.jpg");
//
// Deck creation
//
class deck {
  constructor() {
    this.cards = [
      sTiger,
      mTiger,
      xTiger,
      sLion,
      mLion,
      xLion,
      sLeopard,
      mLeopard,
      xLeopard,
      sFox,
      xFox,
      turtle,
      sHorse,
      xHorse,
      sGiraffe,
      xGiraffe,
      sRhino,
      xRhino,
      hawk,
      dragon,
    ];
  }
  shuffleDeck() {
    let leftHand, rightHand, shuffleAction;
    for (let i = 0; i < 50; i++) {
      leftHand = Math.floor(Math.random() * this.cards.length);
      rightHand = Math.floor(Math.random() * this.cards.length);
      shuffleAction = this.cards[leftHand];
      this.cards[leftHand] = this.cards[rightHand];
      this.cards[rightHand] = shuffleAction;
    }
  }
}
// DOM Variables
const nameDiv = document.querySelector(".nameDiv");
const namePrompt = document.querySelector("#nameInput");
const nameButton = document.querySelector("#nameButton");
const playerName = document.querySelector("#playerName");
const introDiv = document.querySelector(".introDiv");
const welcomeMessage = document.querySelector("h1");
const startGame = document.querySelector("#startGame");
const gameDiv = document.querySelector(".gameDiv");
const pickCard = document.querySelector("#pickCard");
const fightChallenge = document.querySelector("#fightChallenge");
const runChallenge = document.querySelector("#runChallenge");
const playChallenge = document.querySelector("#playChallenge");
const computerRound = document.querySelector("#computerRound");
let playerStatus = document.querySelector("#playerStatus");
let computerStatus = document.querySelector("#computerStatus");
let limboStatus = document.querySelector("#limboStatus");
const gameStatus = document.querySelector("#gameStatus");
const gameOver = document.querySelector(".gameOver");
var gameResult = document.querySelector("#gameResult");
const playAgain = document.querySelector("#playAgain");
const coinFlip = document.querySelector("#flipCoin");
//
//players DOM variables
//
let playerDeck = document.querySelector("#bottomDeck");
let playerCard = document.querySelector("#p1Card");
let playerCardName = document.querySelector("#p1CardName");
let playerCardFight = document.querySelector("#p1CardFight");
let playerCardSpeed = document.querySelector("#p1CardSpeed");
let playerCardInt = document.querySelector("#p1CardInt");
let computerDeck = document.querySelector("#topDeck");
let computerCard = document.querySelector("#p2Card");
let computerCardName = document.querySelector("#p2CardName");
let computerCardFight = document.querySelector("#p2CardFight");
let computerCardSpeed = document.querySelector("#p2CardSpeed");
let computerCardInt = document.querySelector("#p2CardInt");

//
//Players creation
//
class player {
  constructor() {
    this.name;
    this.Deck = [];
    this.Card;
  }
  fight() {
    if (player1.Card.fight > computer.Card.fight) {
      gameStatus.textContent = `They fighted! ${player1.name} wins the round!`;
      player1.Deck.push(player1.Card, computer.Card);
      if (limbo.length != 0) {
        player1.Deck.push(...limbo);
        limbo = [];
      }
      optionDisplayWin();
      playerTurn = true;
    } else if (player1.Card.fight < computer.Card.fight) {
      gameStatus.textContent = `They fighted! Traveller wins the round!`;
      computer.Deck.push(player1.Card, computer.Card);
      if (limbo.length != 0) {
        computer.Deck.push(...limbo);
        limbo = [];
      }
      optionDisplayLose();
      playerTurn = false;
    } else if (player1.Card.fight === computer.Card.fight) {
      limbo.push(player1.Card, computer.Card);
      gameStatus.textContent = `They fighted! Draw, cards in the limbo!`;
      if (playerTurn) {
        optionDisplayWin();
      } else {
        optionDisplayLose();
      }
    }
  }
  run() {
    if (player1.Card.speed > computer.Card.speed) {
      gameStatus.textContent = `They runned! ${player1.name} wins the round!`;
      player1.Deck.push(player1.Card, computer.Card);
      if (limbo.length != 0) {
        player1.Deck.push(...limbo);
        limbo = [];
      }
      optionDisplayWin();
      playerTurn = true;
    } else if (player1.Card.speed < computer.Card.speed) {
      gameStatus.textContent = `They runned! Traveller wins the round!`;
      computer.Deck.push(player1.Card, computer.Card);
      if (limbo.length != 0) {
        computer.Deck.push(...limbo);
        limbo = [];
      }
      optionDisplayLose();
      playerTurn = false;
    } else if (player1.Card.speed === computer.Card.speed) {
      limbo.push(player1.Card, computer.Card);
      gameStatus.textContent = `They runned! Draw, cards in the limbo!`;
      if (playerTurn) {
        optionDisplayWin();
      } else {
        optionDisplayLose();
      }
    }
  }
  trick() {
    if (player1.Card.intelligence > computer.Card.intelligence) {
      gameStatus.textContent = `A fantastic trick! ${player1.name} wins the round!`;
      player1.Deck.push(player1.Card, computer.Card);
      if (limbo.length != 0) {
        player1.Deck.push(...limbo);
        limbo = [];
      }
      optionDisplayWin();
      playerTurn = true;
    } else if (player1.Card.intelligence < computer.Card.intelligence) {
      gameStatus.textContent = `A fantastic trick! Traveller wins the round!`;
      computer.Deck.push(player1.Card, computer.Card);
      if (limbo.length != 0) {
        computer.Deck.push(...limbo);
        limbo = [];
      }
      optionDisplayLose();
      playerTurn = false;
    } else if (player1.Card.intelligence === computer.Card.intelligence) {
      limbo.push(player1.Card, computer.Card);
      gameStatus.textContent = `A trick! but it's a Draw! cards in the limbo!`;
      if ((playerTurn = true)) {
        optionDisplayWin();
      } else {
        optionDisplayLose();
      }
    }
  }
}
let computer = new player();
computer.name = "Traveller";
let player1 = new player();
let limbo = [];
let playerTurn = true;
var player1Deck;
var player2Deck;

//
//Functions
//
function coinToss() {
  const coinSides = ["head", "cross"];
  let coinSide = coinSides[Math.floor(Math.random() * coinSides.length)];
  if (coinSide == "head") {
    pickCard.classList.remove("noDisplay");
    gameStatus.textContent = `Head! ${player1.Name} goes first!`;
  } else {
    computerRound.classList.remove("noDisplay");
    gameStatus.textContent = `Cross! Traveller goes first!`;
  }
  console.log(coinSide);
  coinFlip.classList.add("noDisplay");
}
function updateStatus() {
  playerStatus.textContent =
    `${player1.name} ` + `Cards: ${player1.Deck.length}`;
  computerStatus.textContent = `Traveller ` + `Cards: ${computer.Deck.length}`;
  limboStatus.textContent = `Limbo Cards: ${limbo.length}`;
}
function optionDisplayWin() {
  computerCard.classList.remove("hideDisplay");
  pickCard.classList.remove("noDisplay");
  fightChallenge.classList.add("noDisplay");
  runChallenge.classList.add("noDisplay");
  playChallenge.classList.add("noDisplay");
  computerRound.classList.add("noDisplay");
}
function optionDisplayLose() {
  computerCard.classList.remove("hideDisplay");
  pickCard.classList.add("noDisplay");
  fightChallenge.classList.add("noDisplay");
  runChallenge.classList.add("noDisplay");
  playChallenge.classList.add("noDisplay");
  computerRound.classList.remove("noDisplay");
}
function playerDisplayDeck(user1Deck) {
  user1Deck.forEach(() => {
    let newP = document.createElement("p");
    newP.classList.add("backSide");
    playerDeck.append(newP);
  });
}
function computerDisplayDeck(user2Deck) {
  user2Deck.forEach(() => {
    let newP = document.createElement("p");
    newP.classList.add("backSide");
    computerDeck.append(newP);
  });
}
function playersPickCard() {
  playerCard.classList.remove("noClick");
  player1.Card = player1.Deck.shift();
  computer.Card = computer.Deck.shift();
  playerCard.classList.remove("hideDisplay");
  playerCardName.innerHTML = `${player1.Card.name}`;
  playerCardFight.innerHTML = `Fight: ${player1.Card.fight}`;
  playerCardSpeed.innerHTML = `Speed: ${player1.Card.speed}`;
  playerCardInt.innerHTML = `Int: ${player1.Card.intelligence}`;
  document.getElementById("p1CardImg").src = `${player1.Card.img}`;
  computerCardName.innerHTML = `${computer.Card.name}`;
  computerCardFight.innerHTML = `Fight: ${computer.Card.fight}`;
  computerCardSpeed.innerHTML = `Speed: ${computer.Card.speed}`;
  computerCardInt.innerHTML = `Int: ${computer.Card.intelligence}`;
  document.getElementById("p2CardImg").src = computer.Card.img;
  pickCard.classList.add("noDisplay");
  fightChallenge.classList.remove("noDisplay");
  runChallenge.classList.remove("noDisplay");
  playChallenge.classList.remove("noDisplay");
  computerCard.classList.add("hideDisplay");
  gameStatus.textContent = `Fight, run against or trick your enemy!`;
  updateStatus();
  let user1Deck = player1.Deck;
  let user2Deck = computer.Deck;
  playerDeck.innerHTML = "";
  playerDisplayDeck(user1Deck);
  computerDeck.innerHTML = "";
  computerDisplayDeck(user2Deck);
}
function computerTurn() {
  playersPickCard();
  user1Deck = player1.Deck;
  user2Deck = computer.Deck;
  let computerFight = computer.Card.fight;
  let computerRun = computer.Card.speed;
  let computerTrick = computer.Card.intelligence;
  const playOptions = [computerFight, computerRun, computerTrick];
  let randomOption =
    playOptions[Math.floor(Math.random() * playOptions.length)];
  console.log(randomOption);
  if (randomOption === computerFight) {
    player1.fight();
    console.log("fighted");
  } else if (randomOption === computerRun) {
    player1.run();
    console.log("runned");
  } else if (randomOption === computerTrick) {
    player1.trick();
    console.log("tricked");
  }
  updateStatus();
  checkGameOver();
}
function checkGameOver() {
  if (player1.Deck.length === 0) {
    console.log("Player 2 wins");
    gameOver.classList.remove("noDisplay");
    gameDiv.classList.add("noDisplay");
    gameResult.textContent = "You Lost, got to practice a bit!";
  }
  if (computer.Deck.length === 0) {
    console.log("Player 1 wins");
    gameOver.classList.remove("noDisplay");
    gameDiv.classList.add("noDisplay");
    gameResult.textContent = "You won!.. but don't get too high on yourself. ";
  }
}
function update() {
  updateStatus();
  user1Deck = player1.Deck;
  user2Deck = computer.Deck;
  playerDeck.innerHTML = "";
  playerDisplayDeck(user1Deck);
  computerDeck.innerHTML = "";
  computerDisplayDeck(user2Deck);
  player1.Card = undefined;
  computer.Card = undefined;
  checkGameOver();
}
//
//Event listeners
//
let currentplayer = nameButton.addEventListener("click", () => {
  player1.name = namePrompt.value;
  playerName.textContent = `${player1.name}`;
  nameDiv.classList.add("noDisplay");
  introDiv.classList.remove("noDisplay");
  welcomeMessage.innerHTML = ` ${player1.name}... Let's play a <br /> Cards game!!`;
});
startGame.addEventListener("click", () => {
  var freshDeck = new deck();
  freshDeck.shuffleDeck();
  player1.Deck = freshDeck.cards.slice(0, 10);
  computer.Deck = freshDeck.cards.slice(10, 20);
  introDiv.classList.add("noDisplay");
  gameDiv.classList.remove("noDisplay");
  playerCard.classList.add("hideDisplay");
  computerCard.classList.add("hideDisplay");
  coinFlip.classList.remove("noDisplay");
  pickCard.classList.add("noDisplay");
  updateStatus();
  user1Deck = player1.Deck;
  playerDisplayDeck(user1Deck);
  user2Deck = computer.Deck;
  computerDisplayDeck(user2Deck);
  player1.Card = undefined;
  computer.Card = undefined;
});
coinFlip.addEventListener("click", () => {
  coinToss();
});
pickCard.addEventListener("click", () => {
  playersPickCard();
});
fightChallenge.addEventListener("click", () => {
  player1.fight();
  update();
});
runChallenge.addEventListener("click", () => {
  player1.run();
  update();
});
playChallenge.addEventListener("click", () => {
  player1.trick();
  update();
});
computerRound.addEventListener("click", () => {
  computerTurn();
  updateStatus();
  player1.Card = undefined;
  computer.Card = undefined;
  checkGameOver();
});
playAgain.addEventListener("click", () => {
  gameOver.classList.add("noDisplay");
  introDiv.classList.remove("noDisplay");
  welcomeMessage.innerHTML = `${player1.name}, Let's play again!!`;
  freshDeck = undefined;
  computerDeck.innerHTML = "";
  playerDeck.innerHTML = "";
});
