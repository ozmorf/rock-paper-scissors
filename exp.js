import { winMessages, loseMessages } from "./messages"
// console.log(winMessages)


function generateComputerElement() {
    let elements = ['rock', 'paper', 'scissors']
    let computerNumber = Math.floor((Math.random() * 3))
    let computerElement = elements[computerNumber]
    return computerElement
}

function displayUserElement(element) {
    let userElementText = document.querySelector('.user-p')
    userElementText.textContent = element
}

function displayComputerElement(element) {
    let computerElementText = document.querySelector('.computer-p')
    computerElementText.textContent = element
}

function displayPoints(userPoints, computerPoints) {
    // querySelect right DOM element to display the points
    // update the points
    let userScore = document.querySelector('.user-score')
    userScore.textContent = userPoints

    let computerScore = document.querySelector('.computer-score')
    computerScore.textContent = computerPoints
}

function determineWinner(userE, computerE) {
    if (userE === computerE) {
        console.log("tie")
        return "tie"
    } else if (userE === 'rock' && computerE === 'scissors' || userE === 'paper' && computerE === 'rock' || userE === 'scissors' && computerE === 'paper') {
        console.log("true")
        return true
    } else {
        console.log("false")
        return false
    }

}

function displayMessage() {
    let messages = ['you won!', 'you lose.']

}

function game() {
    let rounds = 0
    let userPoints = 0
    let computerPoints = 0
    let choiceCards = [...document.querySelectorAll('.card')]

    choiceCards.forEach(card => card.addEventListener('click', (_event) => {

        if (rounds < 5) {
            let computerElement = generateComputerElement()
            displayUserElement(card.id)
            displayComputerElement(computerElement)
            let outcome = determineWinner(card.id, computerElement)

            if (outcome === 'tie') {
                console.log("it's a tie")
                userPoints++
                computerPoints++
            } else if (outcome) {
                console.log("you win!")
                userPoints++
            } else if (!outcome) {
                console.log("you lose")
                computerPoints++
            }

            displayPoints(userPoints, computerPoints)
            rounds++
        } else {
            console.log('finshed')
            return userPoints, computerPoints
        }
    }))
}

let score = game()
//console.log(`Game finished. You got ${userPoints} points, and the computer got ${computerPoints} points`)
console.log('score: ' + score)

// Win screen: blur entire page, and display a win message, with a prompt to play again by clicking a button
// Add mouse-over color change on clickable buttons
// Display a message after every round (use seperate file)