var solveSudoku = function (board) {
  let hasUpdate = false;

  do {
    hasUpdate = false;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === ".") {
          let possibleNumbers = getPossibleNumbers(board, i, j);

          if (possibleNumbers.length === 1) {
            board[i][j] = possibleNumbers[0];
            hasUpdate = true;
          } else if (possibleNumbers.length === 0) {
            throw new Error(`Invalid sudoku ${i}, ${j}`);
          }
        }
      }
    }
  } while (hasUpdate);

  let guessI = -1;
  let guessJ = -1;
  let foundIndex = false;

  for (let i = 0; i < board.length; i++) {
    if (foundIndex) {
      break;
    }

    for (let j = 0; j < board[i].length; j++) {
      if (foundIndex) {
        break;
      }

      if (board[i][j] === ".") {
        guessI = i;
        guessJ = j;
        foundIndex = true;
      }
    }
  }

  if (guessI >= 0 && guessJ >= 0) {
    // Take a guess and play it out
    let possibleNumbers = getPossibleNumbers(board, guessI, guessJ);

    if (possibleNumbers.length === 0) {
      throw new Error(`Invalid sudoku ${guessI}, ${guessJ}`);
    }

    for (
      let possibleIndex = 0;
      possibleIndex < possibleNumbers.length;
      possibleIndex++
    ) {
      let guessBoard = [];

      for (let i = 0; i < board.length; i++) {
        guessBoard.push([]);

        for (let j = 0; j < board[i].length; j++) {
          guessBoard[i][j] = board[i][j];
        }
      }

      guessBoard[guessI][guessJ] = possibleNumbers[possibleIndex];

      try {
        solveSudoku(guessBoard);

        if (guessBoard.every((row) => row.every((cell) => cell !== "."))) {
          for (let i = 0; i < guessBoard.length; i++) {
            for (let j = 0; j < guessBoard[i].length; j++) {
              board[i][j] = guessBoard[i][j];
            }
          }
          break;
        }
      } catch (e) {}
    }
  }

  return board;
};

function getPossibleNumbers(board, i, j) {
  let possibleNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
    possibleNumbers = possibleNumbers.filter(
      (num) => num !== board[columnIndex][j]
    );
  }

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    possibleNumbers = possibleNumbers.filter(
      (num) => num !== board[i][rowIndex]
    );
  }

  const squareI = Math.floor(i / 3) * 3;
  const squareJ = Math.floor(j / 3) * 3;

  for (let cellI = 0; cellI < Math.sqrt(board.length); cellI++) {
    for (let cellJ = 0; cellJ < Math.sqrt(board[j].length); cellJ++) {
      possibleNumbers = possibleNumbers.filter(
        (num) => num !== board[squareI + cellI][squareJ + cellJ]
      );
    }
  }

  return possibleNumbers;
}

export { solveSudoku };
