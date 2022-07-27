
let cards = [] // ordered list of items
let Sum = 0 // set initial sum to be 0

let hasBlackJack = false // set initial value of  boolean variable to be false
let isAlive = false  // set initial value of  boolean variable to be false

let message = "" // set the string variable to be empty

let messageEL = document.getElementById("message-el") // gets the id of the message paragraph in html file and store it in this variable
let sumEl = document.querySelector(".sum-el") // gets the id of the Sum paragraph in html file and store it in this variable
let cardsEl = document.getElementById("cards-el") // gets the id of the Cards paragraph in html file and store it in this variable

// Created an Object Player that stores the name and number of chips that player has in the game
let player = {
    Name: "Gurkanwaljot",
    Chips: 145
}

let playerEl = document.getElementById("player-el") // gets the id of the Player paragraph in html file and store it in this variable
playerEl.textContent = player.Name + ": $" + player.Chips // Writes the value of the player name and number of chips from the player object in playerEl variable

//function that gets random numbers of all the 
//cards played in the in the game between 2 and 11
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if( randomNumber === 1){
        return  11
    } else if( randomNumber> 10){
        return  10
    } else{
        return randomNumber
    }
}

// this function starts the game from the beginning 
// and draw two cards with random numbers 
// and store them in array and combine their sum 
// it also continues the game if the if sum of two numbers on the cards is less than 21
// and allows player to access another card
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    Sum = firstCard + secondCard
    renderGame()
}
// this function store's the value of cards in cardsEl variable
// also it store's the value of the sum in sumEl variable
// it also decides the whether player needs more cards or has he achieved Blackjack or he is out of the game
function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0 ; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + Sum
    if (Sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(Sum === 21){
        message = "You've got a Blackjack!"
        hasBlackJack = true
    }else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEL.textContent = message
}
// this funciton draws another card if the player is still isAlive and still didn't get a Blackjack
// if the plyer is alive he gets the chance to draw new card and include it's value with the other cards
// and player is still continues the game till he has been achieved
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let Card = getRandomCard()
        Sum += Card
        cards.push(Card)

        renderGame()
    }
}
