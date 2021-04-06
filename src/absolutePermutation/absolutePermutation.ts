function absolutePermutation(n: number, k: number): number[] {
  if (n % (2 * k) !== 0 && k !== 0) {
    return [-1];
  }

  const usedNums = new Set();
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (!usedNums.has(i - k) && i - k > 0 && i - k <= n) {
      arr.push(i - k);
      usedNums.add(i - k);
    } else if (!usedNums.has(i + k) && i + k && i + k <= n) {
      arr.push(i + k);
      usedNums.add(i + k);
    } else {
      return [-1];
    }
  }

  return arr;
}

export { absolutePermutation };
