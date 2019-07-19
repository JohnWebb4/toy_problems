type isFiboResult = "IsFibo" | "IsNotFibo";

function isFibo(n: bigint | number): isFiboResult {
  const bigN = BigInt(n);

  if (bigN === 1n) {
    return "IsFibo";
  }

  let i = 1n;
  let j = 1n;
  let total = i + j;

  while (total <= bigN) {
    if (total === bigN) {
      return "IsFibo";
    }

    i = j;
    j = total;
    total = i + j;
  }

  return "IsNotFibo";
}

export { isFibo, isFiboResult };
