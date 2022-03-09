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
// const selectedInit = [
//     {location: '0', },
//     {location: '1', selected: false},
//     {location: '2', selected: false},
//     {location: '3', selected: false},
//     {location: '4', selected: false},
//     {location: '5', selected: false},
//     {location: '6', selected: false},
//     {location: '7', selected: false},
//     {location: '8', selected: false},
//     {location: '9', selected: false},
//     {location: '10', selected: false},
//     {location: '11', selected: false},
//     ]
let deck = gameDeck
// let selectedDivs = selectedInit
let checkArray = []
let placedCards = []
let selectedCards = []
let setsFound = 0
let allCardSlots = document.querySelectorAll('div.card')
let cardsRemaining = document.querySelector('#cardsRemaining')
cardsRemaining.innerText = `Cards Remaining: ${deck.length}`



function startGame() {
    allCardSlots.forEach(e => {dealCard(e)});
    document.getElementById("idStartGame").disabled = true
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
    let randomIndex = (Math.floor(Math.random() * deck.length));
    let card = deck[randomIndex];
    //paste card and link location
    card.location = divLocation.id
    divLocation.innerText = `${card.location}, ${card.color}, ${card.shape}, ${card.number}`;
    //deplete deck
    placedCards.push(card)
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
    deck = gameDeck
    allCardSlots.forEach(e => {
        e.innerText = ""
            });
    allCardSlots.forEach(e => {
        e.setAttribute('style', 'border: 1px solid orange')});
    document.getElementById("idStartGame").disabled = false;
    cardsRemaining.innerText = `Cards Remaining: ${deck.length}`;
    //TRYING TO RESET TIMER
    // sec = 0;
    // document.getElementById("seconds").innerHTML= "00";
    // document.getElementById("minutes").innerHTML= "00";
    // clearInterval ( timer );
}

function selectCard() {
}




//Event Listeners with some help from Tim Ellis
allCardSlots.forEach(e => {e.addEventListener('click', function() {
    e.selected = !e.selected;
    if (!selectedCards.includes(e)) selectedCards.push(e);
    else if (selectedCards[0] == e) selectedCards.shift();
    else selectedCards.pop();
    e.selected ? e.classList.add("highlight") : e.classList.remove("highlight");
// if (selectedCards.length > 2) {
//   checkSet(selectedCards);
   console.log(selectedCards)
})}) 
    

    

  

// function checkSet
// let colorSet = false
// let numberSet = false
// let shapeSet = false
// if (colorCheck == ['red', 'red', 'red',] || ['green', 'green', 'green',] || ['purple', 'purple', 'purple',] || ['red', 'green', 'purple',]) {
//     colorSet = true
// }
// if (numberCheck == [1, 1, 1,] || [2, 2, 2,] || [3, 3, 3,] || [1, 2, 3,]) {
//     numberSet = true
// }
// if (shapeSet == ['oval', 'oval', 'oval',] || ['diamond', 'diamond', 'diamond',] || ['squiggle', 'squiggle', 'squiggle',] || ['oval', 'diamond', 'squiggle',]) {
//     shapeSet = true
// }

// if (colorSet === true && numberSet === true && shapeSet === true) {
//     removeCards(selected cards)
//     dealCard(to empty locations)

// } else {
//     deslectCards(