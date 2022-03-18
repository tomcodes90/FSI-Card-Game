//
// Cards creation
//
class card {
  constructor(name, fight, speed, intelligence, image) {
    this.name = name;
    this.fight = fight;
    this.speed = speed;
    this.intelligence = intelligence;
  }
}
const sTiger = new card("Baby Tiger", 6, 4, 2);
const mTiger = new card("Young Tiger", 8, 6, 3);
const xTiger = new card("Adult Tiger", 10, 7, 5);
const sLion = new card("Baby Lion", 6, 3, 3);
const mLion = new card("Young Lion", 8, 5, 5);
const xLion = new card("Adult Lion", 10, 6, 6);
const sLeopard = new card("Baby Leopard", 3, 6, 2);
const mLeopard = new card("Young Leopard", 5, 8, 4);
const xLeopard = new card("Adult Leopard", 7, 10, 6);
const sFox = new card("Baby fox", 2, 5, 7);
const xFox = new card("Fox", 3, 6, 10);
const turtle = new card("Turtle", 2, 1, 7);
const sHorse = new card("Baby Horse", 4, 6, 4);
const xHorse = new card("Horse", 6, 9, 8);
const sGiraffe = new card("Baby Giraffe", 5, 3, 5);
const xGiraffe = new card("Giraffe", 8, 5, 7);
const sRhino = new card("Baby Rhino", 5, 2, 3);
const xRhino = new card("Rhino", 10, 4, 5);
const hawk = new card("Hawk", 3, 8, 9);
const dragon = new card("Dragon", 11, 7, 6);
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
const gameDiv = document.querySelector("#gameDiv");
const welcomeMessage = document.querySelector("h1");
const startGame = document.querySelector("button");

//
//Players creation
//
class player {
  constructor() {
    this.name;
    this.Deck = [];
    this.Card;
  }
}
let computer = new player();
computer.name = "Traveller";
let player1 = new player();
nameButton.addEventListener("click", () => {
  player1.name = namePrompt.value;
  nameDiv.classList.add("noDisplay");
  gameDiv.classList.remove("noDisplay");
  welcomeMessage.textContent = `Welcome ${player1.name}, Get ready for a card battle!!`;
});

//
//Function to start the game
//
startGame.addEventListener("click", () => {
  let freshDeck = new deck();
  freshDeck.shuffleDeck();
  player1.Deck = freshDeck.cards.slice(0, 10);
  computer.Deck = freshDeck.cards.slice(10, 20);
  gameDiv.classList.add("noDisplay");
});

// Game logic

// let freshDeck = new Deck();
// freshDeck.createDeck();
// freshDeck.shuffleDeck();
// const player1 = new player("player1");
// const player2 = new player("player2");
// player1.playerDeck = freshDeck.cards.slice(0, 10);
// player2.playerDeck = freshDeck.cards.slice(10, 20);
// let limbo = [];
// while (player1.playerDeck.length != 0 && player2.playerDeck.length != 0) {
//   player1.playerCard = player1.playerDeck.shift();
//   player2.playerCard = player2.playerDeck.shift();
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
// }
