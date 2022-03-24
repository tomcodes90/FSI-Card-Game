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
//
// DOM Global Scoped Variables
//
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
let playerStatus = document.querySelector("#playerStatus");
let computerStatus = document.querySelector("#computerStatus");
let limboStatus = document.querySelector("#limboStatus");
let playerDeck = document.querySelector(".playerDeck");
let computerDeck = document.querySelector(".computerDeck");

const gameStatus = document.querySelector("#gameStatus");
//
// DOM Player Cards Variables
//
const playerCard = document.querySelector("#p1Card");
let playerCardName = document.querySelector("#p1CardName");
let playerCardFight = document.querySelector("#p1CardFight");
let playerCardSpeed = document.querySelector("#p1CardSpeed");
let playerCardInt = document.querySelector("#p1CardInt");

const computerCard = document.querySelector("#p2Card");
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
    this.Deck;
    this.Card;
  }
}
let computer = new player();
computer.name = "Traveller";
let player1 = new player();
let limbo = [];

let currentplayer = nameButton.addEventListener("click", () => {
  player1.name = namePrompt.value;
  playerName.textContent = `${player1.name}`;
  nameDiv.classList.add("noDisplay");
  introDiv.classList.remove("noDisplay");
  welcomeMessage.innerHTML = ` ${player1.name}... Let's play a <br /> Cards game!!`;
});

//
//Function to start the game
//
startGame.addEventListener("click", () => {
  var freshDeck = new deck();
  freshDeck.shuffleDeck();
  player1.Deck = freshDeck.cards.slice(0, 10);
  computer.Deck = freshDeck.cards.slice(10, 20);
  introDiv.classList.add("noDisplay");
  gameDiv.classList.remove("noDisplay");
  playerStatus.textContent =
    `${player1.name} ` + `Cards: ${player1.Deck.length}`;
  computerStatus.textContent = `Traveller ` + `Cards: ${computer.Deck.length}`;
  limboStatus.textContent = `Limbo Cards: ${limbo.length}`;
  gameStatus.textContent = `Pick a card!`;
  console.log(player1);
  console.log(computer);
});

//
//Section to display the two player's decks
//

//
//Game Logic
//

pickCard.addEventListener("click", () => {
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
  playerCardFight.classList.remove("attrSelection");
  playerCardSpeed.classList.remove("attrSelection");
  playerCardInt.classList.remove("attrSelection");
  gameStatus.textContent = `Fight, run or outplay your enemy!`;
  playerStatus.textContent =
    `${player1.name} ` + `Cards: ${player1.Deck.length}`;
  computerStatus.textContent = `Traveller ` + `Cards: ${computer.Deck.length}`;
  limboStatus.textContent = `Limbo Cards: ${limbo.length}`;
  console.log(`player 1 card ${player1.Card}`);
  console.log(`computer card ${computer.Card}`);
  console.log(`computer card ${limbo}`);
});

fightChallenge.addEventListener("click", () => {
  computerCard.classList.remove("hideDisplay");
  pickCard.classList.remove("noDisplay");
  fightChallenge.classList.add("noDisplay");
  runChallenge.classList.add("noDisplay");
  playChallenge.classList.add("noDisplay");
  if (player1.Card.fight > computer.Card.fight) {
    gameStatus.textContent = `${player1.name} wins the round!`;
    player1.Deck.push(player1.Card, computer.Card);
    if (limbo.length != 0) {
      player1.Deck.push(...limbo);
      limbo = [];
    }
  } else if (player1.Card.fight < computer.Card.fight) {
    gameStatus.textContent = `Traveller wins the round!`;
    computer.Deck.push(player1.Card, computer.Card);
    if (limbo.length != 0) {
      computer.Deck.push(...limbo);
      limbo = [];
    }
  } else if (player1.Card.fight === computer.Card.fight) {
    limbo.push(player1.Card, computer.Card);
    gameStatus.textContent = `Draw! card in the limbo!! who wins the next round will get them!!`;
  }

  console.log(computer);
  console.log(player1);
  console.log(computer.Card);
  console.log(player1.Card);
});
runChallenge.addEventListener("click", () => {
  computerCard.classList.remove("hideDisplay");
  pickCard.classList.remove("noDisplay");
  fightChallenge.classList.add("noDisplay");
  runChallenge.classList.add("noDisplay");
  playChallenge.classList.add("noDisplay");
  if (player1.Card.speed > computer.Card.speed) {
    gameStatus.textContent = `${player1.name} wins the round!`;
    player1.Deck.push(player1.Card, computer.Card);
    if (limbo.length != 0) {
      player1.Deck.push(...limbo);
      limbo = [];
    }
  } else if (player1.Card.speed < computer.Card.speed) {
    gameStatus.textContent = `Traveller wins the round!`;
    computer.Deck.push(player1.Card, computer.Card);
    if (limbo.length != 0) {
      computer.Deck.push(...limbo);
      limbo = [];
    }
  } else if (player1.Card.speed === computer.Card.speed) {
    limbo.push(player1.Card, computer.Card);
    gameStatus.textContent = `Draw! card in the limbo!! who wins the next round will get them!!`;
    console.log(computer);
    console.log(player1);
    console.log(computer.Card);
    console.log(player1.Card);
  }
});
playChallenge.addEventListener("click", () => {
  computerCard.classList.remove("hideDisplay");
  pickCard.classList.remove("noDisplay");
  fightChallenge.classList.add("noDisplay");
  runChallenge.classList.add("noDisplay");
  playChallenge.classList.add("noDisplay");
  if (player1.Card.intelligence > computer.Card.intelligence) {
    gameStatus.textContent = `${player1.name} wins the round!`;
    player1.Deck.push(player1.Card, computer.Card);
    if (limbo.length != 0) {
      player1.Deck.push(...limbo);
      limbo = [];
    }
  } else if (player1.Card.intelligence < computer.Card.intelligence) {
    gameStatus.textContent = `Traveller wins the round!`;
    computer.Deck.push(player1.Card, computer.Card);
    if (limbo.length != 0) {
      computer.Deck.push(...limbo);
      limbo = [];
    }
  } else if (player1.Card.intelligence === computer.Card.intelligence) {
    limbo.push(player1.Card, computer.Card);
    gameStatus.textContent = `Draw! card in the limbo!! who wins the next round will get them!!`;
  }
  console.log(computer);
  console.log(player1);
  console.log(computer.Card);
  console.log(player1.Card);
});
//
// End game
//

//(player1.playerDeck.length != 0 && player2.playerDeck.length != 0) {

//   console.log(player1.playerCard);
//   console.log(player2.playerCard);
//   if (player1.playerCard.value > player2.playerCard.value) {
//     player1.playerDeck.push(player1.playerCard, player2.playerCard);
//     if (limbo.length != 0) {
//       player1.playerDeck.push(...limbo);
//       limbo = [];
//     }
//     console.log("player1 cards are:");
//     console.log(player1.playerDeck);
//     console.log("cards in limbo");
//     console.log(limbo);
//     console.log("Player 1 wins the round!");
//   } else if (player2.playerCard.value > player1.playerCard.value) {
//     player2.playerDeck.push(player1.playerCard, player2.playerCard);
//     if (limbo.length != 0) {
//       player2.playerDeck.push(...limbo);
//       limbo = [];
//     }
//   } else {
//     limbo.push(player1.playerCard, player2.playerCard);
//     console.log("Draw! Cards in the Limbo!!");
//   }
//   if (player1.playerDeck.length == 0) {
//     console.log("Player 2 wins");
//   } else if (player2.playerDeck.length == 0) {
//     console.log("Player 1 wins");
//   }
