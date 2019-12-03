const permCount: { [key: number]: number } = {};

function getBlackJackPermutations(startCount: number = 21): number {
  const cacheCount = permCount[startCount];

  if (cacheCount !== undefined) {
    return cacheCount;
  } else if (startCount <= 0) {
    return 0;
  } else if (startCount === 1) {
    return 1;
  }

  const count =
    (startCount < 10 ? 1 : 0) +
    getBlackJackPermutations(startCount - 1) +
    getBlackJackPermutations(startCount - 2);

  permCount[startCount] = count;

  return count;
}

export { getBlackJackPermutations };
