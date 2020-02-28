import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

// K Candy Store

// Input: First number is length of array, 1 <= T <= 200
// Input: Array of integers, 1 <= n <= 1,000
// Output: For each number, n => n combinations (nC0, nC1, nC2, ..., nCn)
// Side effects: None

// Notes: For large numbers return  n % 10^9

// Plan
// Iterate over each number (Current number is N)
// First and last number is always 1
// Second and second to last number is always N
// To go from r to r + 1, multiply nCr by (n-r)!/((r+1)(n-r-1)!)

function getAllCombinationsAsString(ns: number[]): string {
  return getAllCombinationsAtAllChooses(ns)
    .map(arr => arr.join(" "))
    .join("\n");
}

function getAllCombinationsAtAllChooses(ns: number[]): number[][] {
  return ns.map(n => getCombinationsAtAllChooses(n));
}

function getCombinationsAtAllChooses(n: number): number[] {
  const combinations: number[] = [1];
  let prevBigCombo: bigint = 1n;

  for (let r = 0; r < n; r++) {
    const bigCombo: bigint =
      (prevBigCombo * factorial(BigInt(n - r))) /
      BigInt(r + 1) /
      factorial(BigInt(n - r - 1));

    if (bigCombo <= 0) {
      throw new Error("Combination is not a number");
    }

    const bigMod = bigCombo % 10n ** 9n;
    const combination = Number.parseInt(bigMod.toString());

    combinations.push(combination);
    prevBigCombo = bigCombo;
  }

  return combinations;
}

const cachedFactorial: { [index: string]: bigint } = {
  "1": 1n
};

function factorial(n: bigint): bigint {
  if (n === 0n || n === 1n) {
    return 1n;
  }

  // If already calculated, return value
  if (cachedFactorial[n.toString()]) {
    return cachedFactorial[n.toString()];
  }

  // Find last known value
  let lowestKnownFactorial = 1n;
  for (let i = n; i > 1n; i--) {
    if (cachedFactorial[i.toString()]) {
      lowestKnownFactorial = i;
      break;
    }
  }

  // Calculate next values
  for (let i = lowestKnownFactorial + 1n; i <= n; i++) {
    cachedFactorial[i.toString()] = i * cachedFactorial[(i - 1n).toString()];
  }

  return cachedFactorial[n.toString()];
}

export { getAllCombinationsAsString };
