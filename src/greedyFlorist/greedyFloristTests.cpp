#include <gtest/gtest.h>
#include <vector>

#include "./greedyFlorist.h"

TEST(GreedyFlorist, Test15)
{
  ASSERT_EQ(getMinimumCost(2, {2, 5, 6}), 15);
}

TEST(GreedyFlorist, Test29)
{
  ASSERT_EQ(getMinimumCost(3, {1, 3, 5, 7, 9}), 29);
}