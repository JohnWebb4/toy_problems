#include "./maxArraySum.h"

int ArraySummer::getMaxArraySum(std::vector<int> arr)
{
  int size = arr.size();

  if (size == 0)
  {
    return 0;
  }

  if (size == 1)
  {
    return arr.at(0);
  }

  int maxArraySum = 0;
  int prevMaxArraySum = 0;

  for (int i = 0; i < size; i++)
  {
    int number = arr.at(i);

    int prevSum = prevMaxArraySum + number;

    int newMaxSum = std::max({maxArraySum, number, prevSum});

    prevMaxArraySum = maxArraySum;
    maxArraySum = newMaxSum;
  }

  return maxArraySum;
}