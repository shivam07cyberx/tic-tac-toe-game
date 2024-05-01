let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

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

function handleMove(cell) {
    if (gameActive && board[cell] === '') {
        board[cell] = currentPlayer;
        document.getElementsByClassName('cell')[cell].innerText = currentPlayer;
        if (checkWinner()) {
            document.getElementById('status').innerText = `Player ${currentPlayer} wins!, now reset to play more`;
            gameActive = false;
        } else if (!board.includes('')) {
            document.getElementById('status').innerText  = "It's a draw!, reset to play again";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').innerText = `Player ${currentPlayer}'s Turn`;
        }
    }
}

function checkWinner() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('status').innerText = "Player X's Turn";
    Array.from(document.getElementsByClassName('cell')).forEach(cell => {
        cell.innerText = '';
    });
}
