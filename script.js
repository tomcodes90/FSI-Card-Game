// Deck class
class Card {
  constructor(value) {
    this.value = value;
  }
}
class Deck {
  constructor() {
    this.cards = [];
  }

  createDeck() {
    let values = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];

    for (let i = 0; i < values.length; i++) {
      this.cards.push(new Card(values[i]));
    }
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

// Player class

class player {
  constructor(name) {
    this.name = name;
    this.playerDeck = [];
    this.playerCard;
  }
}
// Game logic

let freshDeck = new Deck();
freshDeck.createDeck();
freshDeck.shuffleDeck();
const player1 = new player("player1");
const player2 = new player("player2");
player1.playerDeck = freshDeck.cards.slice(0, 10);
player2.playerDeck = freshDeck.cards.slice(10, 20);
let limbo = [];
while (player1.playerDeck.length != 0 && player2.playerDeck.length != 0) {
  player1.playerCard = player1.playerDeck.shift();
  player2.playerCard = player2.playerDeck.shift();
  console.log(player1.playerCard);
  console.log(player2.playerCard);
  if (player1.playerCard.value > player2.playerCard.value) {
    player1.playerDeck.push(player1.playerCard, player2.playerCard);
    if (limbo.length != 0) {
      player1.playerDeck.push(...limbo);
      limbo = [];
    }
    console.log("player1 cards are:");
    console.log(player1.playerDeck);
    console.log("cards in limbo");
    console.log(limbo);
    console.log("Player 1 wins the round!");
  } else if (player2.playerCard.value > player1.playerCard.value) {
    player2.playerDeck.push(player1.playerCard, player2.playerCard);
    if (limbo.length != 0) {
      player2.playerDeck.push(...limbo);
      limbo = [];
    }
  } else {
    limbo.push(player1.playerCard, player2.playerCard);
    console.log("Draw! Cards in the Limbo!!");
  }
  if (player1.playerDeck.length == 0) {
    console.log("Player 2 wins");
  } else if (player2.playerDeck.length == 0) {
    console.log("Player 1 wins");
  }
}
