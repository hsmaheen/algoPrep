const states = {
  VISITED: 'VISITED',
  VISITING: 'VISITING',
  NOT_PATH: 'NO_PATH',
};

export function doesExitPathExist(maze) {
  if (maze.length === 0) {
    return null;
  }
  const memo = new Map();
  return findIfPathExists(maze, 0, 0, memo);
}

function checkOutOfBound(arr, i, j) {
  if (i > arr.length - 1 || i < 0) {
    return false;
  }

  if (j > arr[0].length - 1 || j < 0) {
    return false;
  }

  return true;
}

function findIfPathExists(maze, i, j, memo = new Map()) {
  const memoKey = `${i}${j}`;

  if (i === maze.length - 1 && j === maze[0].length - 1) {
    return true;
  }
  if (!checkOutOfBound(maze, i, j) || maze[i][j] == 1) {
    return false;
  }

  if (memo.has(memoKey)) {
    if (
      memo.get(memoKey) === states.NOT_PATH ||
      memo.get(memoKey) === states.VISITING
    )
      return false;
  }
  memo.set(memoKey, states.VISITING);

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (const [dRow, dCol] of directions) {
    const nRow = i + dRow;
    const nCOl = j + dCol;
    if (findIfPathExists(maze, nRow, nCOl, memo) === true) {
      return true;
    }
  }

  memo.set(memoKey, states.NOT_PATH);
  return false;
}
