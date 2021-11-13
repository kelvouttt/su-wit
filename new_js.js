const container = document.querySelector(".container")

const content = document.createElement('div')
content.classList.add('result')



const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', playGame));

function computerPlay() {
  let responses = ["batu", "kertas", "gunting"];
  response = responses[Math.floor(Math.random() * responses.length)];
  return response;
  // console.log(response)
}

function playGame(e) {
  let userScore = 0
  let computerScore = 0
  playerResponse = e.target.className;
  computerSelection = computerPlay()  
  console.log(playerResponse)
    console.log(computerSelection)
  for (let i = userScore; i < 5; i++){
    if (playerResponse == 'gunting' && computerSelection == 'kertas') {
      // console.log("It's a tie!")
      content.textContent = "You win! Scissor beats paper"
    } else if (playerResponse == "kertas" && computerSelection == "batu") {
      userScore++
      // console.log("You win, scissor beats paper")
      content.textContent = "You win! Paper beats rock"
    } else if (playerResponse == "batu" && computerSelection == "gunting") {
      userScore++
      // console.log("You win, rock beats scissor")
      content.textContent = "You win! Rock beats scissor"
    } else if (playerResponse === computerSelection) {
      // console.log("You win, paper beats rock")
      content.textContent = `You both choose ${playerResponse}, it's a tie!`
    } else {
      computerScore++
      // console.log("You lose, try again!")
      content.texContent = "You lose, try again!!"
    }
    container.appendChild(content)
  }
  console.log(computerScore)
  console.log(userScore)
}




