#include <iostream>
#include <stack>

#include "./countStrings.h"

int countStrings(std::string r, int l)
{
  std::stack<std::string> toCheck;
  toCheck.push("");

  while (!toCheck.empty())
  {
    std::string next = toCheck.top();
    toCheck.pop();

    if (next.size() == l)
    {
      std::cout << "hi " << next << std::endl;
    }
    else
    {
      toCheck.push(next + "a");
      toCheck.push(next + "b");
    }
  }

  return 0;
}