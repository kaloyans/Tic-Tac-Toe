let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

function handleCellClick(index) {
  const cell = cells[index];

  if (cell.textContent === '' && !checkWinner()) {
    cell.textContent = currentPlayer;
    if (checkWinner()) {
      alert(`Player ${currentPlayer} wins!`);
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      return true;
    }
  }

  return false;
}
