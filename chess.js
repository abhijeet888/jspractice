const readline = require('readline');

// Define the chess board
let board = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
];

// Function to print the board
function printBoard() {
    for (let i = 0; i < 8; i++) {
        let row = '';
        for (let j = 0; j < 8; j++) {
            row += board[i][j] + ' ';
        }
        console.log(row);
    }
}

// Function to convert algebraic notation to board indices
function convertInput(input) {
    const file = input.charCodeAt(0) - 97;
    const rank = 8 - parseInt(input[1]);
    return { rank, file };
}

// Function to check if the move is valid
function isValidMove(start, end) {
    const piece = board[start.rank][start.file];
    if (piece === '_') return false; // No piece to move
    const target = board[end.rank][end.file];
    return target === '_'; // Only allow move if target square is empty
}

// Function to make the move
function makeMove(start, end) {
    board[end.rank][end.file] = board[start.rank][start.file];
    board[start.rank][start.file] = '_';
}

// Function to start the game
function startGame() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let currentPlayer = 'White';

    rl.on('line', (input) => {
        const start = convertInput(input.substring(0, 2));
        const end = convertInput(input.substring(3, 5));

        if (!isValidMove(start, end)) {
            console.log('Invalid move. Try again.');
        } else {
            makeMove(start, end);
            printBoard();
            currentPlayer = currentPlayer === 'White' ? 'Black' : 'White';
            console.log(`${currentPlayer}'s move:`);
        }
    });

    console.log('Welcome to the console chess game!');
    console.log('Enter moves in algebraic notation (e.g., e2 e4)');
    console.log('White starts:');
}

// Start the game
startGame();
