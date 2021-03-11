#include <string>
#include <stack>

#include "longestPalindrome.h"

// Iterate through string
// Add all two or three palindromes to queue
// Iterate through queue expanding palindromes
// Check against largest and update
// Return largest

class PalindromeWindow
{
public:
  int index;
  int size;

  PalindromeWindow(int index, int size)
  {
    this->index = index;
    this->size = size;
  }
};

/** Get the longest palindrome substring
 * s: String to search
 * returns: String of longest palindrome
 * effects: None
 **/
std::string getLongestPalindrome(std::string s)
{
  if (s.size() == 0)
  {
    return "";
  }

  std::stack<PalindromeWindow> toCheck;
  PalindromeWindow largestPalindromeWindow = PalindromeWindow(0, 1);

  for (int i = 0; i < s.size() - 1; i++)
  {
    if (s.at(i) == s.at(i + 1))
    {
      toCheck.push(PalindromeWindow(i, 2));
    }

    if (i < s.size() - 2 && s.at(i) == s.at(i + 2))
    {
      toCheck.push(PalindromeWindow(i, 3));
    }
  }

  while (toCheck.size() > 0)
  {
    PalindromeWindow window = toCheck.top();
    toCheck.pop();

    if (window.size > largestPalindromeWindow.size)
    {
      largestPalindromeWindow = window;
    }

    if (window.index > 0 && window.index + window.size < s.size() && s.at(window.index - 1) == s.at(window.index + window.size))
    {
      toCheck.push(PalindromeWindow(window.index - 1, window.size + 2));
    }
  }

  return s.substr(largestPalindromeWindow.index, largestPalindromeWindow.size);
}