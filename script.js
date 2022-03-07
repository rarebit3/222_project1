let deck = [
    {color: red, shape: oval, number: 1},
    {color: red, shape: oval, number: 2},
    {color: red, shape: oval, number: 3},
    {color: red, shape: diamond, number: 1},
    {color: red, shape: diamond, number: 2},
    {color: red, shape: diamond, number: 3},
    {color: red, shape: squiggle, number: 1},
    {color: red, shape: squiggle, number: 2},
    {color: red, shape: squiggle, number: 3},
    {color: green, shape: oval, number: 1},
    {color: green, shape: oval, number: 2},
    {color: green, shape: oval, number: 3},
    {color: green, shape: diamond, number: 1},
    {color: green, shape: diamond, number: 2},
    {color: green, shape: diamond, number: 3},
    {color: green, shape: squiggle, number: 1},
    {color: green, shape: squiggle, number: 2},
    {color: green, shape: squiggle, number: 3},
    {color: purple, shape: oval, number: 1},
    {color: purple, shape: oval, number: 2},
    {color: purple, shape: oval, number: 3},
    {color: purple, shape: diamond, number: 1},
    {color: purple, shape: diamond, number: 2},
    {color: purple, shape: diamond, number: 3},
    {color: purple, shape: squiggle, number: 1},
    {color: purple, shape: squiggle, number: 2},
    {color: purple, shape: squiggle, number: 3}
    ]

function startGame() {
    let index = Math.floor(Math.random()) * deck.length
    let card = deck[index]
}

