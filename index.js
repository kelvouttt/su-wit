function computerPlay() {
  let responses = ["batu", "kertas", "gunting"];
  response = responses[Math.floor(Math.random() * responses.length)];
  return response;
  // console.log(response)
}

function game() {
  let userScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    userResponse = prompt("Choose your weapon: ..");
    playerSelection = userResponse.toLowerCase();
    computerSelection = computerPlay();
    // console.log(computerSelection)
    // console.log(playerSelection)
    if (playerSelection == "gunting" && computerSelection == "kertas") {
      alert("You win, gunting beats kertas!!");
      userScore++;
    } else if (
      playerSelection == "kertas" &&
      computerSelection == "batu"
    ) {
      alert("You win, kertas beats batu!!");
      userScore++;
    } else if (
      playerSelection == "batu" &&
      computerSelection == "gunting"
    ) {
      alert("You win, batu beats gunting!!");
      userScore++;
    } else if (playerSelection === computerSelection) {
      alert("It's a tie!!");
    } else {
      alert("You lose, the enemy got 1 point");
      computerScore++;
    }
    console.log("User score: " + userScore);
    console.log("Computer score: " + computerScore);
  }


  if (userScore > computerScore) {
    alert(
      `You have won the game, your score: ${userScore}, theirs: ${computerScore}`
    );
  } else if (userScore == computerScore) {
    alert("You both are strong");
  } else {
    alert("You lost, pick a better weapon next time.");
  }
}


