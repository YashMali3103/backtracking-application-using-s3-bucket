
var arr = [[], [], [], [], [], [], [], [], []]

for (var i = 0; i < 9; i++) {
	for (var j = 0; j < 9; j++) {
		arr[i][j] = document.getElementById(i * 9 + j);
	}
}

var board = [[], [], [], [], [], [], [], [], []]

// Predefined puzzles for random selection
const puzzles = [
	[
		[5, 3, 0, 0, 7, 0, 0, 0, 0],
		[6, 0, 0, 1, 9, 5, 0, 0, 0],
		[0, 9, 8, 0, 0, 0, 0, 6, 0],
		[8, 0, 0, 0, 6, 0, 0, 0, 3],
		[4, 0, 0, 8, 0, 3, 0, 0, 1],
		[7, 0, 0, 0, 2, 0, 0, 0, 6],
		[0, 6, 0, 0, 0, 0, 2, 8, 0],
		[0, 0, 0, 4, 1, 9, 0, 0, 5],
		[0, 0, 0, 0, 8, 0, 0, 7, 9]
	],
	[
		[0, 0, 0, 6, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 4, 3],
		[0, 0, 0, 0, 0, 0, 7, 0, 0],
		[0, 0, 9, 0, 2, 0, 0, 0, 0],
		[5, 0, 7, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 3, 0, 0, 0, 9],
		[0, 3, 0, 0, 0, 0, 6, 0, 0],
		[0, 0, 0, 0, 0, 8, 0, 7, 0],
		[0, 2, 0, 5, 0, 0, 0, 0, 0]
	],
	[
		[0, 0, 0, 8, 0, 0, 0, 0, 0],
		[0, 0, 7, 0, 0, 0, 0, 4, 0],
		[3, 0, 0, 5, 0, 2, 0, 0, 0],
		[0, 0, 0, 0, 0, 7, 0, 0, 0],
		[0, 0, 0, 0, 6, 0, 0, 0, 0],
		[0, 0, 0, 3, 0, 0, 0, 0, 9],
		[0, 7, 0, 0, 4, 0, 8, 0, 0],
		[0, 0, 5, 0, 0, 9, 0, 0, 0],
		[6, 0, 0, 0, 0, 0, 0, 1, 0]
	],
	// Puzzle 4
	[
		[1, 0, 0, 0, 7, 0, 0, 0, 0],
		[0, 0, 2, 0, 0, 0, 0, 6, 0],
		[0, 0, 0, 9, 3, 0, 0, 0, 8],
		[0, 4, 0, 0, 0, 5, 0, 0, 0],
		[0, 0, 6, 0, 0, 0, 0, 0, 3],
		[7, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 5, 0, 0, 7, 9],
		[0, 8, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1, 0, 0, 0]
	],
	// Puzzle 5
	[
		[0, 6, 0, 0, 7, 0, 3, 0, 8],
		[0, 3, 0, 0, 0, 0, 0, 0, 4],
		[0, 0, 0, 1, 0, 0, 0, 0, 0],
		[9, 0, 0, 0, 8, 0, 5, 0, 0],
		[0, 8, 0, 0, 6, 0, 0, 7, 0],
		[0, 0, 4, 0, 0, 0, 0, 0, 2],
		[0, 0, 0, 0, 9, 2, 0, 0, 0],
		[2, 0, 0, 0, 0, 0, 0, 3, 0],
		[6, 0, 5, 0, 0, 0, 0, 9, 0]
	],
	// Puzzle 6
	[
		[0, 0, 0, 0, 0, 3, 0, 8, 5],
		[0, 0, 1, 0, 2, 0, 0, 0, 0],
		[0, 0, 0, 7, 0, 0, 0, 0, 0],
		[0, 0, 9, 5, 0, 0, 0, 0, 0],
		[5, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 6, 0, 7, 0],
		[0, 0, 0, 0, 0, 0, 2, 6, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 3, 0, 0, 0, 0, 0, 9, 0]
	],
	// Add more puzzles as needed
];

// Function to generate a random puzzle
function getRandomPuzzle() {
	let randomIndex = Math.floor(Math.random() * puzzles.length);
	board = puzzles[randomIndex];
	FillBoard(board);
}

// Fill the board with the current state values
function FillBoard(board) {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (board[i][j] != 0) {
				arr[i][j].innerText = board[i][j]; // Fill cell with a number
			} else {
				arr[i][j].innerText = ''; // Leave the cell empty if 0
			}
		}
	}
}

// Function to check if placing num in board[row][col] is valid
function isValid(board, row, col, num) {
	for (var x = 0; x < 9; x++) {
		if (board[row][x] == num || board[x][col] == num || 
		    board[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] == num) {
			return false;
		}
	}
	return true;
}

// Function to solve Sudoku using backtracking
function SudokuSolver(board, row, col) {
	if (row == 9) {
		FillBoard(board); // Sudoku is solved, so fill the board
		return true;
	}

	if (col == 9) {
		return SudokuSolver(board, row + 1, 0); // Move to the next row
	}

	if (board[row][col] != 0) {
		return SudokuSolver(board, row, col + 1); // Move to next cell if already filled
	}

	for (var num = 1; num <= 9; num++) {
		if (isValid(board, row, col, num)) {
			board[row][col] = num; // Place the number
			if (SudokuSolver(board, row, col + 1)) {
				return true; // If solution works, return true
			}
			board[row][col] = 0; // Undo the move if it doesn't work
		}
	}
	return false; // Trigger backtracking
} 

let GetPuzzle = document.getElementById('GetPuzzle');
let SolvePuzzle = document.getElementById('SolvePuzzle'); 

// Get a random puzzle and display it on the board
GetPuzzle.onclick = function () {
	getRandomPuzzle();
};

// Solve the Sudoku puzzle and update the board
SolvePuzzle.onclick = function () {
	if (SudokuSolver(board, 0, 0)) {
		console.log('Sudoku solved!');
	} else {
		console.log('No solution exists for this Sudoku puzzle.');
	}
};

/* var arr = [[], [], [], [], [], [], [], [], []];

for (var i = 0; i < 9; i++) {
	for (var j = 0; j < 9; j++) {
		arr[i][j] = document.getElementById(i * 9 + j);
	}
}

var board = [[], [], [], [], [], [], [], [], []];

// Predefined puzzles for random selection
const puzzles = [
	// Add your puzzles here
	[
		[5, 3, 0, 0, 7, 0, 0, 0, 0],
		[6, 0, 0, 1, 9, 5, 0, 0, 0],
		[0, 9, 8, 0, 0, 0, 0, 6, 0],
		[8, 0, 0, 0, 6, 0, 0, 0, 3],
		[4, 0, 0, 8, 0, 3, 0, 0, 1],
		[7, 0, 0, 0, 2, 0, 0, 0, 6],
		[0, 6, 0, 0, 0, 0, 2, 8, 0],
		[0, 0, 0, 4, 1, 9, 0, 0, 5],
		[0, 0, 0, 0, 8, 0, 0, 7, 9]
	],
	[
		[0, 0, 0, 6, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 4, 3],
		[0, 0, 0, 0, 0, 0, 7, 0, 0],
		[0, 0, 9, 0, 2, 0, 0, 0, 0],
		[5, 0, 7, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 3, 0, 0, 0, 9],
		[0, 3, 0, 0, 0, 0, 6, 0, 0],
		[0, 0, 0, 0, 0, 8, 0, 7, 0],
		[0, 2, 0, 5, 0, 0, 0, 0, 0]
	],
	[
		[0, 0, 0, 8, 0, 0, 0, 0, 0],
		[0, 0, 7, 0, 0, 0, 0, 4, 0],
		[3, 0, 0, 5, 0, 2, 0, 0, 0],
		[0, 0, 0, 0, 0, 7, 0, 0, 0],
		[0, 0, 0, 0, 6, 0, 0, 0, 0],
		[0, 0, 0, 3, 0, 0, 0, 0, 9],
		[0, 7, 0, 0, 4, 0, 8, 0, 0],
		[0, 0, 5, 0, 0, 9, 0, 0, 0],
		[6, 0, 0, 0, 0, 0, 0, 1, 0]
	],
	// Puzzle 4
	[
		[1, 0, 0, 0, 7, 0, 0, 0, 0],
		[0, 0, 2, 0, 0, 0, 0, 6, 0],
		[0, 0, 0, 9, 3, 0, 0, 0, 8],
		[0, 4, 0, 0, 0, 5, 0, 0, 0],
		[0, 0, 6, 0, 0, 0, 0, 0, 3],
		[7, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 5, 0, 0, 7, 9],
		[0, 8, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1, 0, 0, 0]
	],
	// Puzzle 5
	[
		[0, 6, 0, 0, 7, 0, 3, 0, 8],
		[0, 3, 0, 0, 0, 0, 0, 0, 4],
		[0, 0, 0, 1, 0, 0, 0, 0, 0],
		[9, 0, 0, 0, 8, 0, 5, 0, 0],
		[0, 8, 0, 0, 6, 0, 0, 7, 0],
		[0, 0, 4, 0, 0, 0, 0, 0, 2],
		[0, 0, 0, 0, 9, 2, 0, 0, 0],
		[2, 0, 0, 0, 0, 0, 0, 3, 0],
		[6, 0, 5, 0, 0, 0, 0, 9, 0]
	],
	// Puzzle 6
	[
		[0, 0, 0, 0, 0, 3, 0, 8, 5],
		[0, 0, 1, 0, 2, 0, 0, 0, 0],
		[0, 0, 0, 7, 0, 0, 0, 0, 0],
		[0, 0, 9, 5, 0, 0, 0, 0, 0],
		[5, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 6, 0, 7, 0],
		[0, 0, 0, 0, 0, 0, 2, 6, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 3, 0, 0, 0, 0, 0, 9, 0]
	],
];

// Function to generate a random puzzle
function getRandomPuzzle() {
	let randomIndex = Math.floor(Math.random() * puzzles.length);
	board = puzzles[randomIndex];
	FillBoard(board);
}

// Fill the board with the current state values
function FillBoard(board) {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (board[i][j] != 0) {
				arr[i][j].innerText = board[i][j]; // Fill cell with a number
			} else {
				arr[i][j].innerText = ''; // Leave the cell empty if 0
			}
		}
	}
}

// Function to check if placing num in board[row][col] is valid
function isValid(board, row, col, num) {
	for (var x = 0; x < 9; x++) {
		if (board[row][x] == num || board[x][col] == num || 
		    board[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] == num) {
			return false;
		}
	}
	return true;
}

// Function to delay for dynamic effect (speed in milliseconds)
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to solve Sudoku dynamically
async function SudokuSolver(board, row, col, speed) {
	if (row == 9) {
		FillBoard(board); // Sudoku is solved, so fill the board
		return true;
	}

	if (col == 9) {
		return await SudokuSolver(board, row + 1, 0, speed); // Move to the next row
	}

	if (board[row][col] != 0) {
		return await SudokuSolver(board, row, col + 1, speed); // Move to next cell if already filled
	}

	for (var num = 1; num <= 9; num++) {
		if (isValid(board, row, col, num)) {
			board[row][col] = num; // Place the number
			arr[row][col].innerText = num; // Update UI
			await delay(speed); // Wait for the specified speed

			if (await SudokuSolver(board, row, col + 1, speed)) {
				return true; // If solution works, return true
			}

			board[row][col] = 0; // Undo the move if it doesn't work
			arr[row][col].innerText = ''; // Update UI for undo
			await delay(speed); // Wait for the specified speed
		}
	}
	return false; // Trigger backtracking
}

let GetPuzzle = document.getElementById('GetPuzzle');
let SolvePuzzle = document.getElementById('SolvePuzzle');

// Get a random puzzle and display it on the board
GetPuzzle.onclick = function () {
	getRandomPuzzle();
};

// Solve the Sudoku puzzle dynamically
SolvePuzzle.onclick = function () {
	let speed = 100; // Speed in milliseconds (adjust this value to change the speed)
	SudokuSolver(board, 0, 0, speed).then(solved => {
		if (solved) {
			console.log('Sudoku solved!');
		} else {
			console.log('No solution exists for this Sudoku puzzle.');
		}
	});
};

 */