#include <gtest/gtest.h>

#include "../../../main/c++/sumNSeries/sumNSeries.h"

TEST(SummingNSeriesTest1, Test)
{
  ASSERT_EQ(1, sumNSeries(1));
}

TEST(SummingNSeriesTest2, Test)
{
  ASSERT_EQ(4, sumNSeries(2));
}

TEST(SummingNSeriesTest231677104, Test)
{
  ASSERT_EQ(142106856, sumNSeries(231677104));
}

TEST(SummingNSeriesTestAll, Test)
{
  ASSERT_EQ(100, sumNSeries(10));
  ASSERT_EQ(218194447, sumNSeries(229137999));
  ASSERT_EQ(788019571, sumNSeries(344936985));
  ASSERT_EQ(43914042, sumNSeries(681519110));
  ASSERT_EQ(559130432, sumNSeries(494844394));
  ASSERT_EQ(685508198, sumNSeries(767088309));
  ASSERT_EQ(299528290, sumNSeries(307062702));
  ASSERT_EQ(950527499, sumNSeries(306074554));
  ASSERT_EQ(211497519, sumNSeries(555026606));
  ASSERT_EQ(425277675, sumNSeries(4762607));
  ASSERT_EQ(142106856, sumNSeries(231677104));
}
