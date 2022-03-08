let checkArray = []
let setsFound = 0
let timer = 0

let deck = [
    {color: 'red', shape: 'oval', number: 1},
    {color: 'red', shape: 'oval', number: 2},
    {color: 'red', shape: 'oval', number: 3},
    {color: 'red', shape: 'diamond', number: 1},
    {color: 'red', shape: 'diamond', number: 2},
    {color: 'red', shape: 'diamond', number: 3},
    {color: 'red', shape: 'squiggle', number: 1},
    {color: 'red', shape: 'squiggle', number: 2},
    {color: 'red', shape: 'squiggle', number: 3},
    {color: 'green', shape: 'oval', number: 1},
    {color: 'green', shape: 'oval', number: 2},
    {color: 'green', shape: 'oval', number: 3},
    {color: 'green', shape: 'diamond', number: 1},
    {color: 'green', shape: 'diamond', number: 2},
    {color: 'green', shape: 'diamond', number: 3},
    {color: 'green', shape: 'squiggle', number: 1},
    {color: 'green', shape: 'squiggle', number: 2},
    {color: 'green', shape: 'squiggle', number: 3},
    {color: 'purple', shape: 'oval', number: 1},
    {color: 'purple', shape: 'oval', number: 2},
    {color: 'purple', shape: 'oval', number: 3},
    {color: 'purple', shape: 'diamond', number: 1},
    {color: 'purple', shape: 'diamond', number: 2},
    {color: 'purple', shape: 'diamond', number: 3},
    {color: 'purple', shape: 'squiggle', number: 1},
    {color: 'purple', shape: 'squiggle', number: 2},
    {color: 'purple', shape: 'squiggle', number: 3}
    ]

let allCards = document.querySelectorAll('div.card')
// let cardLoc = document.querySelectorAll('div#c1')

function dealCard(location) {
    let index = (Math.floor(Math.random() * deck.length));
    let card = deck[index];
    location.innerText = `${card.color}, ${card.shape}, ${card.number}`;
    deck.splice(index, 1);
    return deck;
}

function startGame() {
    allCards.forEach(e => {dealCard(e)}
)}

function resetGame() {

}

allCards.forEach(e => {
    e.addEventListener('click', function(event) {
        console.log('box clicked', event);

        e.setAttribute('style', 'border: 3px solid red')
        
        })
})

function checkSet() {

}