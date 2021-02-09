import { isPalindromeNumber } from './palindromeNumber';

describe('Palindrome number', () => {
  it('should return true for 121', () => {
    expect(isPalindromeNumber(121)).toBe(true);
  });

  it('should return false for -121', () => {
    expect(isPalindromeNumber(-121)).toBe(false);
  });
});
