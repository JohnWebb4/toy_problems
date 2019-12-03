type isFiboResult = "IsFibo" | "IsNotFibo";

function isFibo(n: number | string): isFiboResult {
  if (typeof n === "string") {
    return isFiboString(n);
  } else {
    return isFiboNumber(n);
  }
}

function isFiboString(n: string): isFiboResult {
  if (n === "1") {
    return "IsFibo";
  }

  let i = "1";
  let j = "1";
  let total = addStringNumbers(i, j);
  let paddedTotal = total.padStart(n.length, "0");

  while (paddedTotal <= n) {
    if (paddedTotal === n) {
      return "IsFibo";
    }

    i = j;
    j = total;
    total = addStringNumbers(i, j);
    paddedTotal = total.padStart(n.length, "0");
  }

  return "IsNotFibo";
}

function isFiboNumber(n: number): isFiboResult {
  if (n === 1) {
    return "IsFibo";
  }

  let i = 1;
  let j = 1;
  let total = i + j;

  while (total <= n) {
    if (total === n) {
      return "IsFibo";
    }

    i = j;
    j = total;
    total = i + j;
  }

  return "IsNotFibo";
}

function addStringNumbers(num1: string, num2: string): string {
  const maxDigits = Math.max(num1.length, num2.length);
  let digitArray: number[] = [];
  let carryOver = 0;

  for (let i = 0; i < maxDigits; i++) {
    let num1Digit: number = parseInt(num1.charAt(num1.length - i - 1)) || 0;
    let num2Digit: number = parseInt(num2.charAt(num2.length - i - 1)) || 0;

    let total = num1Digit + num2Digit + carryOver;
    carryOver = Math.floor(total / 10);

    digitArray.unshift(total % 10);
  }

  if (carryOver > 0) {
    digitArray.unshift(carryOver);
  }

  return digitArray.join("");
}

export { addStringNumbers, isFibo, isFiboResult };
