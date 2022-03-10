//Global Variables
const gameDeck = [
    {selected: false,location: '', color: 'red', shape: 'oval', number: 1},
    {selected: false,location: '', color: 'red', shape: 'oval', number: 2},
    {selected: false,location: '', color: 'red', shape: 'oval', number: 3},
    {selected: false,location: '', color: 'red', shape: 'diamond', number: 1},
    {selected: false,location: '', color: 'red', shape: 'diamond', number: 2},
    {selected: false,location: '', color: 'red', shape: 'diamond', number: 3},
    {selected: false,location: '', color: 'red', shape: 'squiggle', number: 1},
    {selected: false,location: '', color: 'red', shape: 'squiggle', number: 2},
    {selected: false,location: '', color: 'red', shape: 'squiggle', number: 3},
    {selected: false,location: '', color: 'green', shape: 'oval', number: 1},
    {selected: false,location: '', color: 'green', shape: 'oval', number: 2},
    {selected: false,location: '', color: 'green', shape: 'oval', number: 3},
    {selected: false,location: '', color: 'green', shape: 'diamond', number: 1},
    {selected: false,location: '', color: 'green', shape: 'diamond', number: 2},
    {selected: false,location: '', color: 'green', shape: 'diamond', number: 3},
    {selected: false,location: '', color: 'green', shape: 'squiggle', number: 1},
    {selected: false,location: '', color: 'green', shape: 'squiggle', number: 2},
    {selected: false,location: '', color: 'green', shape: 'squiggle', number: 3},
    {selected: false,location: '', color: 'purple', shape: 'oval', number: 1},
    {selected: false,location: '', color: 'purple', shape: 'oval', number: 2},
    {selected: false,location: '', color: 'purple', shape: 'oval', number: 3},
    {selected: false,location: '', color: 'purple', shape: 'diamond', number: 1},
    {selected: false,location: '', color: 'purple', shape: 'diamond', number: 2},
    {selected: false,location: '', color: 'purple', shape: 'diamond', number: 3},
    {selected: false,location: '', color: 'purple', shape: 'squiggle', number: 1},
    {selected: false,location: '', color: 'purple', shape: 'squiggle', number: 2},
    {selected: false,location: '', color: 'purple', shape: 'squiggle', number: 3}
    ]
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



allCardSlots.forEach((e, divLocation) => {
  e.addEventListener("click", function () {
    e.selected = !e.selected;
    selectedCards.push(placedCards[divLocation]);
    e.selected ? e.classList.add("highlight") : e.classList.remove("highlight");
    console.log();
    if (selectedCards.length > 2) {
      checkColor(selectedCards);
      checkShape(selectedCards);
      checkNumber(selectedCards);
    }
  });
});



function checkColor(n) {
    if (n[0].color == n[1].color == n[2].color) return true;
    else if (n[0].color != n[1].color && n[0].color != n[2].color && n[1].color != n[2].color) return true;
    else return false;
     }
function checkShape(n) {
    if (n[0].shape == n[1].shape == n[2].shape) return true;
    else if (n[0].shape != n[1].shape && n[0].shape != n[2].shape && n[1].shape != n[2].shape) return true;
    else return false;
     }
function checkColor(n) {
    if (n[0].number == n[1].number == n[2].number) return true;
    else if (n[0].number != n[1].number && n[0].number != n[2].number && n[1].number != n[2].number) return true;
    else return false;
     }
     