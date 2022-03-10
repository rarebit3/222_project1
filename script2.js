//Global Variables
const gameDeck = [
    {selected: false, location: '', color: 'red', shape: 'oval', number: 1},
    {selected: false, location: '', color: 'red', shape: 'oval', number: 2},
    {selected: false, location: '', color: 'red', shape: 'oval', number: 3},
    {selected: false, location: '', color: 'red', shape: 'diamond', number: 1},
    {selected: false, location: '', color: 'red', shape: 'diamond', number: 2},
    {selected: false, location: '', color: 'red', shape: 'diamond', number: 3},
    {selected: false, location: '', color: 'red', shape: 'squiggle', number: 1},
    {selected: false, location: '', color: 'red', shape: 'squiggle', number: 2},
    {selected: false, location: '', color: 'red', shape: 'squiggle', number: 3},
    {selected: false, location: '', color: 'green', shape: 'oval', number: 1},
    {selected: false, location: '', color: 'green', shape: 'oval', number: 2},
    {selected: false, location: '', color: 'green', shape: 'oval', number: 3},
    {selected: false, location: '', color: 'green', shape: 'diamond', number: 1},
    {selected: false, location: '', color: 'green', shape: 'diamond', number: 2},
    {selected: false, location: '', color: 'green', shape: 'diamond', number: 3},
    {selected: false, location: '', color: 'green', shape: 'squiggle', number: 1},
    {selected: false, location: '', color: 'green', shape: 'squiggle', number: 2},
    {selected: false, location: '', color: 'green', shape: 'squiggle', number: 3},
    {selected: false, location: '', color: 'purple', shape: 'oval', number: 1},
    {selected: false, location: '', color: 'purple', shape: 'oval', number: 2},
    {selected: false, location: '', color: 'purple', shape: 'oval', number: 3},
    {selected: false, location: '', color: 'purple', shape: 'diamond', number: 1},
    {selected: false, location: '', color: 'purple', shape: 'diamond', number: 2},
    {selected: false, location: '', color: 'purple', shape: 'diamond', number: 3},
    {selected: false, location: '', color: 'purple', shape: 'squiggle', number: 1},
    {selected: false, location: '', color: 'purple', shape: 'squiggle', number: 2},
    {selected: false, location: '', color: 'purple', shape: 'squiggle', number: 3}
    ]
let deck = gameDeck;
let placedCards = [];
let selectedCards = [];
let setsFound = 0;
let allCardSlots = document.querySelectorAll("div.card");
let cardsRemaining = document.querySelector("#cardsRemaining");
cardsRemaining.innerText = `Cards Remaining: ${deck.length}`;
let numberCheck = false
let shapeCheck = false
let colorCheck = false



function startGame() {
  allCardSlots.forEach((e) => {
    dealCard(e);
  });
  document.getElementById("idStartGame").disabled = true;
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
    placedCards = [];
    selectedCards = [];
    setsFound = 0;
    deck = gameDeck;
    allCardSlots.forEach((e) => {
    e.innerText = "";
  });
    document.querySelectorAll(".highlight").forEach((e) => {
    e.classList.remove("highlight");
  });
    document.getElementById("idStartGame").disabled = false;
    cardsRemaining.innerText = `Cards Remaining: ${deck.length}`;
}



allCardSlots.forEach((e, divLocation) => {
  e.addEventListener("click", function clickDiv() {
    e.selected = !e.selected;
    e.selected ? e.classList.add("highlight") : e.classList.remove("highlight");
    if (!selectedCards.includes(placedCards[divLocation]))
    selectedCards.push(placedCards[divLocation]);
    else selectedCards.pop();
    console.log(selectedCards);
    if (selectedCards.length > 2) {
        checkSet(selectedCards);
       }
    
  });
  
});

function checkSet(selectedCards) {
    if (checkColor(selectedCards) /*&& checkShape(selectedCards) && checkNumber(selectedCards) */ === true) {
        console.log('set found')

    } else {console.log('borken')}
    
}


function checkColor(selectedCards) {
    if (selectedCards[0].color == selectedCards[1].color == selectedCards[2].color) return true;
    else if (selectedCards[0].color != selectedCards[1].color && selectedCards[0].color != selectedCards[2].color && selectedCards[1].color != selectedCards[2].color) return true;
    else return false;
     }
function checkShape(n) {
    if (n[0].shape == n[1].shape == n[2].shape) return true;
    else if (n[0].shape != n[1].shape && n[0].shape != n[2].shape && n[1].shape != n[2].shape) return true;
    else return false;
     }
function checkNumber(n) {
    if (n[0].number == n[1].number == n[2].number) return true;
    else if (n[0].number != n[1].number && n[0].number != n[2].number && n[1].number != n[2].number) return true;
    else return false;
     }