#include <stdlib.h>
#include <cstdint>
#include <algorithm>
#include <vector>

int minAbsDiff(std::vector<int> aVector)
{
  int size = aVector.size();

  if (size == 0)
  {
    return 0;
  }

  if (size == 1)
  {
    return aVector.at(0);
  }

  int minAbsDiff = INT32_MAX;
  std::vector<int> sortedVector = aVector;
  std::sort(sortedVector.begin(), sortedVector.end());

  for (int i = 1; i < size; i++)
  {
    int absDiff = abs(sortedVector.at(i) - sortedVector.at(i - 1));

    if (absDiff < minAbsDiff)
    {
      minAbsDiff = absDiff;
    }
  }

  return minAbsDiff;
}
