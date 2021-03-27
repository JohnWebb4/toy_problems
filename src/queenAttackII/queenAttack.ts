// Input n: number rows
// Input k: number obstacles
// Input r_q, c_q: row and column of queen
// Input obstacles: number pair tuples
// Output: number of spaces queen can move to
// Side effects: none

// For each of eight directions
// // start at queen and travel in direction
// // If open increment counter
// // If obstable stop, and continue to new direction
// return counter

// Complete the queensAttack function below.
function queensAttack(
  n: number,
  k: number,
  r_q: number,
  c_q: number,
  obstacles: number[][]
) {
  let obstacleSet = obstacles.reduce((set, obstacle) => {
    set.add(obstacle.join(","));

    return set;
  }, new Set());

  let spaceCount = 0;
  for (let i = r_q + 1; i <= n; i++) {
    if (obstacleSet.has([i, c_q].join(","))) {
      break;
    }

    spaceCount++;
  }
  for (let i = r_q - 1; i > 0; i--) {
    if (obstacleSet.has([i, c_q].join(","))) {
      break;
    }

    spaceCount++;
  }
  for (let i = c_q + 1; i <= n; i++) {
    if (obstacleSet.has([r_q, i].join(","))) {
      break;
    }

    spaceCount++;
  }
  for (let i = c_q - 1; i > 0; i--) {
    if (obstacleSet.has([r_q, i].join(","))) {
      break;
    }

    spaceCount++;
  }
  for (let i = 1; r_q + i <= n && c_q + i <= n; i++) {
    if (obstacleSet.has([r_q + i, c_q + i].join(","))) {
      break;
    }

    spaceCount++;
  }
  for (let i = 1; r_q + i <= n && c_q - i > 0; i++) {
    if (obstacleSet.has([r_q + i, c_q - i].join(","))) {
      break;
    }

    spaceCount++;
  }
  for (let i = 1; r_q - i > 0 && c_q + i <= n; i++) {
    if (obstacleSet.has([r_q - i, c_q + i].join(","))) {
      break;
    }

    spaceCount++;
  }
  for (let i = 1; r_q - i > 0 && c_q - i > 0; i++) {
    if (obstacleSet.has([r_q - i, c_q - i].join(","))) {
      break;
    }

    spaceCount++;
  }

  return spaceCount;
}

export { queensAttack };
