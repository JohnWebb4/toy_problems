#include <stdio.h>

#include "./comparator.h"

// Input: Player a
// Input: Player b
// Output: 1 if a > b, -1 if a < b and 0 if a = b
// // Compare score first
// // Compare alplabetical name
// Side Effects: None

Player::Player(std::string name, int score)
{
  this->name = name;
  this->score = score;
}

int comparator(Player &a, Player &b)
{
  if (a.score > b.score)
  {
    return 1;
  }
  else if (a.score < b.score)
  {
    return -1;
  }

  int aNameSize = a.name.size();
  int bNameSize = b.name.size();
  int largestSize = aNameSize > bNameSize ? aNameSize : bNameSize;

  for (int charIndex = 0; charIndex < largestSize; charIndex++)
  {
    if (aNameSize <= charIndex)
    {
      return 1;
    }

    if (bNameSize <= charIndex)
    {
      return -1;
    }

    char aChar = a.name.at(charIndex);
    char bChar = b.name.at(charIndex);

    if (aChar != bChar)
    {
      return aChar < bChar ? 1 : -1;
    }
  }

  return 0;
}