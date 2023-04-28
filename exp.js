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

function determineWinner(userE, computerE) {
    if (userE === computerE) {
        console.log("tie")
        return "tie"
    } else if (userE === 'rock' && computerE === 'scissors' || userE === 'paper' && computerE === 'rock' || userE === 'scissors' && computerE === 'paper' ) {
        console.log("true")
        return true 
    } else {
        console.log("false")
        return false
    }

}

function game() {
    let rounds = 0
    userPoints = 0
    computerPoints = 0

    for (i = 0; i < 5; i++) {
        let computerElement = generateComputerElement()

        let choiceCards = [...document.querySelectorAll('.card')]
        choiceCards.forEach(card => card.addEventListener('click', (_event) => {
            displayUserElement(card.id)
            displayComputerElement(computerElement)
            let outcome = determineWinner(card.id, computerElement)
            if (outcome === 'tie') {
                console.log("it's a tie")
            } else if (outcome) {
                console.log("you win!")
            } else if (!outcome) {
                console.log("you lose")
            }
            rounds++
        }))
    }

    // get user element
    // display user and computer element
    // score appropriately
    // play 5 rounds
}

game()
