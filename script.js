const choices = document.querySelectorAll('.choice');
const result = document.querySelector('.result p');

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showResult(playerChoice, computerChoice, winner);
  });
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getWinner(player, computer) {
  if (player === computer) {
    return 'draw';
  } else if (
    (player === 'rock' && computer === 'scissor') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissor' && computer === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

function showResult(player, computer, winner) {
  const choices = document.querySelector('.choices');
  choices.innerHTML = `
    <button class="choice" disabled><img src="${player}.png" alt="${player}"></button>
    <p>VS</p>
    <button class="choice" disabled><img src="${computer}.png" alt="${computer}"></button>
  `;
  
  if (winner === 'draw') {
    result.innerText = 'It\'s a Draw!';
  } else if (winner === 'player') {
    result.innerHTML = 'You Win!';
  } else {
    result.innerText = 'Computer Wins!';
  }
}
