#include <map>
#include <vector>

#include "nonDivisible.h"

int nonDivisible(int k, std::vector<int> v) {
  int nonDivisibleCount = 0;
  std::map<int, bool> hasUsedBeforeMap;
  std::map<int, int> modCount;

  for (std::vector<int>::iterator it = v.begin(); it != v.end(); ++it) {
    int modIt = *it % k;
    if (modIt != 0) {
      modCount[modIt] += 1;
    } else {
      modCount[modIt] = 1;
    }
  }

  for (std::map<int, int>::iterator it = modCount.begin(); it != modCount.end(); ++it) {
    int modPair = k - it->first;

    if (modCount[it->first] >= modCount[modPair] && !hasUsedBeforeMap[modPair]) {
      nonDivisibleCount += modCount[it->first];
      hasUsedBeforeMap[it->first] = true;
    }
  }

  return nonDivisibleCount;
}