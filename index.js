
let elements = ["rock", "paper", "scissors"]
let computerNumber = Math.floor((Math.random() * 3))
let computerChoice = elements[computerNumber]

// get user input, make sure it's rock, paper, or scissors

function getUserElement() {
    let userChoice = prompt()
    checkUserElement(userChoice)
    return userChoice
}

function checkUserElement(item) {

    if (elements.includes(item)) {
        console.log(`Accepted. You entered ${item}.`)
        return item
    } else {
        console.log("the input you enetered wasn't valid. Try again.")
        getUserElement()
    }
}

let userElement = getUserElement()
console.log(`you chose ${userElement} and the computer chose ${computerChoice}`)

// determine winner from player and computer selection

function determineWinner(playerSelection, computerSelection) {
    // create logic for all win conditions for the player

    function displayWinMessage() {
        return(`You chose ${playerSelection} and the computer chose ${computerSelection}. YOU WIIIIIN!!!!!.`)
    }
    // if it's a tie...
    if (playerSelection === computerSelection) {
        console.log(`Impossible! You both chose ${playerSelection}! I don't even know what to do!`)
    }

    // all the conditions where the user wins
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(displayWinMessage())

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(displayWinMessage())

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(displayWinMessage())
    
    // If the player doesn't win or tie, the player loses.
    } else {
        console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}. That means you're a loser.`)
    }
}

determineWinner(userElement, computerChoice)