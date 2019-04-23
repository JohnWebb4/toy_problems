#include <gtest/gtest.h>

#include "sumNSeries.cpp"

TEST(SummingNSeriesTest1, Test)
{
  ASSERT_EQ(1, summingSeries(1));
}

TEST(SummingNSeriesTest2, Test)
{
  ASSERT_EQ(4, summingSeries(2));
}

TEST(SummingNSeriesTest231677104, Test)
{
  ASSERT_EQ(142106856, summingSeries(231677104));
}

TEST(SummingNSeriesTestAll, Test)
{
  ASSERT_EQ(100, summingSeries(10));
  ASSERT_EQ(218194447, summingSeries(229137999));
  ASSERT_EQ(788019571, summingSeries(344936985));
  ASSERT_EQ(43914042, summingSeries(681519110));
  ASSERT_EQ(559130432, summingSeries(494844394));
  ASSERT_EQ(685508198, summingSeries(767088309));
  ASSERT_EQ(299528290, summingSeries(307062702));
  ASSERT_EQ(950527499, summingSeries(306074554));
  ASSERT_EQ(211497519, summingSeries(555026606));
  ASSERT_EQ(425277675, summingSeries(4762607));
  ASSERT_EQ(142106856, summingSeries(231677104));
}

int main(int argc, char **argv)
{
  testing::InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
