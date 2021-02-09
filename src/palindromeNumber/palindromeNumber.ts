function isPalindromeNumber(aNumber: number): boolean {
  return aNumber.toString() == aNumber.toString().split('').reverse().join('');
}

export { isPalindromeNumber };
