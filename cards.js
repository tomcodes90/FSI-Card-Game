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
