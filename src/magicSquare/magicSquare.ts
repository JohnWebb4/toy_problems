function formingMagicSquare(s: number[][]): number {
  let minCost = getCost([[8, 3, 4], [1, 5, 9], [6, 7, 2]], s);
  minCost = Math.min(getCost([[6, 1, 8], [7, 5, 3], [2, 9, 4]], s), minCost);
  minCost = Math.min(getCost([[2, 7, 6], [9, 5, 1], [4, 3, 8]], s), minCost);
  minCost = Math.min(getCost([[4, 9, 2], [3, 5, 7], [8, 1, 6]], s), minCost);

  minCost = Math.min(getCost([[4, 3, 8], [9, 5, 1], [2, 7, 6]], s), minCost);
  minCost = Math.min(getCost([[2, 9, 4], [7, 5, 3], [6, 1, 8]], s), minCost);
  minCost = Math.min(getCost([[6, 7, 2], [1, 5, 9], [8, 3, 4]], s), minCost);
  minCost = Math.min(getCost([[8, 1, 6], [3, 5, 7], [4, 9, 2]], s), minCost);

  return minCost;
}

function getCost(expected: number[][], actual: number[][]) {
  if (expected.length !== actual.length) {
    throw new Error("Cannot get cost");
  }

  if (expected[0].length !== actual[0].length) {
    throw new Error("Cannot get cost");
  }

  let cost = 0;

  for (let i = 0; i < expected.length; i += 1) {
    for (let j = 0; j < expected[i].length; j += 1) {
      cost += Math.abs(expected[i][j] - actual[i][j]);
    }
  }

  return cost;
}

export { formingMagicSquare };
