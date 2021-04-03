#include "gtest/gtest.h"

// #include "./src/sumNSeries/sumNSeriesTests.cpp"
// #include "./src/sherlockAndPermutations/sherlockAndPermutationsTests.cpp"
// #include "./src/nonDivisible/nonDivisibleTests.cpp"
// #include "./src/climbingLeaderboard/climbingLeaderboardTests.cpp"
// #include "./src/comparator/comparatorTests.cpp"
#include "./src/encryption/encryptionTests.cpp"
// #include "./src/longestPalindrome/longestPalindromeTests.cpp"
// #include "./src/maxArraySum/maxArraySumTests.cpp"
// #include "./src/medianSortedArrays/medianSortedArraysTests.cpp"
// #include "./src/minAbsDiff/minAbsDiffTests.cpp"

int main(int argc, char **argv)
{
  testing::InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
