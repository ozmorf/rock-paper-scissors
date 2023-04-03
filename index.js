
let elements = ["rock", "paper", "scissors"]
let userPoints = 0
let computerPoints = 0 
let validChoice = false
let computerElement = ""
let userElement = ""

// get user input, make sure it's rock, paper, or scissors

function getUserElement() {

    while (!validChoice) {
        //prompt for new input
        let userInput = prompt("type in \'rock\', \' paper\', or \' scissors\'.")
        //check if it's valid
        checkUserElement(userInput)
        if (validChoice) {
            validChoice = false
            return userElement = userInput
        }
    }
    //once we exit the while block, we have a valid input
    
}

function checkUserElement(item) {

    if (elements.includes(item)) {
        //console.log(`Accepted. You entered ${item}.`)
        validChoice = true
        //return item
    } else {
        console.log("the input you enetered wasn't valid. Try again.")
        //getUserElement()
    }
}

// generate computer element

function generateComputerElement() {
    let computerNumber = Math.floor((Math.random() * 3))
    let computerChoice = elements[computerNumber]
    return computerElement = computerChoice
    //console.log(`computer element: ${computerChoice}`)
    //return computerChoice
}

// determine winner from player and computer selection

function determineWinner(playerSelection, computerSelection) {

    function displayWinMessage() {
        ++userPoints
        return(`You chose ${playerSelection} and the computer chose ${computerSelection}. YOU WIIIIIN!!!!!.`)
    }

    // if it's a tie...
    if (playerSelection === computerSelection) {
        console.log(`You both chose ${playerSelection}. You each get a point`)
        ++userPoints
        ++computerPoints
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
        ++computerPoints
    }
}



function game() {
    // get user and computer element
    let computerElement = generateComputerElement()
    let userElement = getUserElement()
    //console.log(`you chose ${userElement} and the computer chose ${computerChoice}`)

    // determine winner
    determineWinner(userElement, computerElement)
    console.log(`You have ${userPoints} points and the computer has ${computerPoints} points.`)
}

setTimeout(() => {
    for (i=0; i<4; i++) {
        game()
    }
}, 10)