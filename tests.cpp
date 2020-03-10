#include "./src/sumNSeries/sumNSeriesTests.cpp"
#include "./src/sherlockAndPermutations/sherlockAndPermutationsTests.cpp"
#include "./src/nonDivisible/nonDivisibleTests.cpp"
#include "./src/climbingLeaderboard/climbingLeaderboardTests.cpp"
#include "./src/comparator/comparatorTests.cpp"

int main(int argc, char **argv)
{
  testing::InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
