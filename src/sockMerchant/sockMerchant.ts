// Sock Merchant

// Input: Array of sock colors (Integers)
// Output: Number of pairs of socks
// Side effects none

// Iterate over array
// Store number of each sock type
// Iterate over each color count
// At end divide each sock count by two
// Floor of number is number of pairs
// Sum number of pairs for each color
// Return sum

function countSockPairs(sockColors: number[]): number {
  const sockColorCounts: { [key: number]: number | undefined } = {};
  let sockPairsCount = 0;

  for (const sockColor of sockColors) {
    if (sockColorCounts[sockColor] === 1) {
      sockColorCounts[sockColor] = undefined;
      sockPairsCount++;
    } else {
      sockColorCounts[sockColor] = 1;
    }
  }

  return sockPairsCount;
}

export { countSockPairs };
