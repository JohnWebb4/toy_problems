#include <gtest/gtest.h>
#include <vector>

#include "./climbingLeaderboard/climbingLeaderboard.h"

TEST(ClimbingLeaderboard, Test1)
{
  std::vector<int> scores = {3, 2, 1};
  std::vector<int> aliceScores = {4, 2, 0};
  std::vector<int> expected = {1, 3, 5};

  std::vector<int> result = climbingLeaderboard(scores, aliceScores);

  ASSERT_EQ(result, expected);
}
