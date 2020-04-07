#include <gtest/gtest.h>
#include <vector>

#include "./minAbsDiff.h"

TEST(MinAbsDiff, TestEmpty)
{
  std::vector<int> aVector = {};

  ASSERT_EQ(minAbsDiff(aVector), 0);
}

TEST(MinAbsDiff, TestOne)
{
  std::vector<int> aVector = {1};

  ASSERT_EQ(minAbsDiff(aVector), 1);
}

TEST(MinAbsDiff, Test379)
{
  std::vector<int> aVector = {3, -7, 0};

  ASSERT_EQ(minAbsDiff(aVector), 3);
}

TEST(MinAbsDiff, Test5936)
{
  std::vector<int> aVector = {-59, -36, -13, 1, -53, -92, -2, -96, -54, 75};

  ASSERT_EQ(minAbsDiff(aVector), 1);
}