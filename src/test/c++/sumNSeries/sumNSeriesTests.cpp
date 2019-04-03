#include <gtest/gtest.h>

#include "sumNSeries.cpp"

TEST(SummingNSeriesTest, Test) {
  ASSERT_EQ(0, summingSeries(10));
}

int main(int argc, char **argv) {
  testing::InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}