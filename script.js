//Global Variables

let deck = gameDeck;
let checkArray = [];
let placedCards = [];
let selectedCards = [];
let setsFound = 0;
let allCardSlots = document.querySelectorAll("div.card");
let cardsRemaining = document.querySelector("#cardsRemaining");
cardsRemaining.innerText = `Cards Remaining: ${deck.length}`;

function startGame() {
  allCardSlots.forEach((e) => {
    dealCard(e);
  });
  document.getElementById("idStartGame").disabled = true;
  //TIMER!?
  //     let sec = 0;
  //     function pad ( val ) { return val > 9 ? val : "0" + val; };
  //     let timer = setInterval( function(){
  //         document.getElementById("seconds").innerHTML=pad(++sec%60);
  //         document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
  //     }, 1000);
}

function dealCard(divLocation) {
  //randomizer
  let randomIndex = Math.floor(Math.random() * deck.length);
  let card = deck[randomIndex];
  //paste card and link location
  card.location = divLocation.id;
  divLocation.innerText = `${card.location}, ${card.color}, ${card.shape}, ${card.number}`;
  //deplete deck
  placedCards.push(card);
  deck.splice(randomIndex, 1);
  cardsRemaining.innerText = `Cards Remaining: ${deck.length}`;
  //console.log(placedCards)
  return deck;
}

function resetGame() {
  //All the things become 0
  checkArray = [];
  placedCards = [];
  selectedCards = [];
  setsFound = 0;
  deck = gameDeck;
  allCardSlots.forEach((e) => {
    e.innerText = "";
  });
  allCardSlots.forEach((e) => {
    e.setAttribute("style", "border: 1px solid orange");
  });
  document.getElementById("idStartGame").disabled = false;
  cardsRemaining.innerText = `Cards Remaining: ${deck.length}`;
  //TRYING TO RESET TIMER
  // sec = 0;
  // document.getElementById("seconds").innerHTML= "00";
  // document.getElementById("minutes").innerHTML= "00";
  // clearInterval ( timer );
}

function selectCard() {}

//Event Listeners with some help from Tim Ellis
allCardSlots.forEach((e) => {
  e.addEventListener("click", function () {
    e.selected = !e.selected;
    if (!selectedCards.includes(e)) selectedCards.push(e)
    else if (selectedCards[0] == e) selectedCards.shift()
    else selectedCards.pop();
    e.selected ? e.classList.add("highlight") : e.classList.remove("highlight");
    console.log(selectedCards);
    if (selectedCards.length > 2) {
      checkSet(selectedCards);
    }
  });
});

function checkSet() {
  let colorCheck = [];
  let numberCheck = [];
  let shapeCheck = [];
  let colorSet = false;
  let numberSet = false;
  let shapeSet = false;
  selectedCards.forEach((e) => colorCheck.push(e[1]));
  selectedCards.forEach((e) => numberCheck.push(e[2]));
  selectedCards.forEach((e) => shapeCheck.push(e[3]));
  if (
    colorCheck == ["red", "red", "red"] || ["green", "green", "green"] || ["purple", "purple", "purple"] || ["red", "green", "purple"]
  ) {
    colorSet = true;
  }
  if (numberCheck == [1, 1, 1] || [2, 2, 2] || [3, 3, 3] || [1, 2, 3]) {
    numberSet = true;
  }
  if (
    shapeSet == ["oval", "oval", "oval"] || ["diamond", "diamond", "diamond"] || ["squiggle", "squiggle", "squiggle"] || ["oval", "diamond", "squiggle"]
  ) {
    shapeSet = true;
  }
  if (colorSet === true && numberSet === true && shapeSet === true) {
    console.log("Got a SET!");
    // removeCards()
    // dealCard()
  } //  else {
  //        deslectCards(
  //      }
}
