#include <algorithm>
#include <vector>

#include "./greedyFlorist.h"

int getMinimumCost(int k, std::vector<int> c)
{
  std::vector<int> sorted = c;
  std::sort(sorted.begin(), sorted.end());
  int cost = 0;
  int person = 0;

  std::vector<int>::iterator it = --sorted.end();
  while (it >= sorted.begin())
  {
    cost += *it * (person / k + 1);

    person++;
    it--;
  }

  return cost;
}