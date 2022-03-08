//Global Variables

let checkArray = []
let setsFound = 0
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
let cardsRemaining = document.querySelector('#cardsRemaining')
cardsRemaining.innerText = `Cards Remaining: ${deck.length}`


//Functions

function dealCard(location) {
    //randomizer
    let randomIndex = (Math.floor(Math.random() * deck.length));
    let card = deck[randomIndex];
    //paste card
    location.innerText = `${card.color}, ${card.shape}, ${card.number}`;
    //deplete deck
    deck.splice(randomIndex, 1);
    cardsRemaining.innerText = `Cards Remaining: ${deck.length}`;
    console.log(location)
    return deck;
    
}



function startGame() {
    allCards.forEach(e => {dealCard(e)});
    document.getElementById("idStartGame").disabled = true
    //TIMER!?
    let sec = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; };
    let timer = setInterval( function(){
        document.getElementById("seconds").innerHTML=pad(++sec%60);
        document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);
}

function resetGame() {
    checkArray = [];
    setsFound = 0
    deck = [
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
    ];
    allCards.forEach(e => {
        e.innerText = ""
            });
    allCards.forEach(e => {
        e.setAttribute('style', 'border: 1px solid orange')});
    document.getElementById("idStartGame").disabled = false;
    cardsRemaining.innerText = `Cards Remaining: ${deck.length}`;
    //TRYING TO RESET TIMER
    // sec = 0;
    // document.getElementById("seconds").innerHTML= "00";
    // document.getElementById("minutes").innerHTML= "00";
    // clearInterval ( timer );
    
}

//Event Listeners
allCards.forEach(e => {
    e.addEventListener('click', function(event) {
        console.log('box clicked', event);
        
        e.setAttribute('style', 'border: 3px solid red')
        //if selected, deselect
        //else if array empty, push to checkArray[0]
        // else if array.length = 1, push to checkArray[1]
        //else if array.length = 2, push to checkArray[2] and run check winner

        })
})


//WIN LOGIC PSUEDO-CODE
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
//     deslectCards()
// }