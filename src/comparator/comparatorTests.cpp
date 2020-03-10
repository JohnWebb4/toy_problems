#include <gtest/gtest.h>

#include "./comparator.h"

TEST(Comparator, TestScores)
{
  Player heraldo("heraldo", 50);
  Player heraldo2("heraldo", 50);
  Player aakansha("aakansha", 75);
  Player aleksa("aleksa", 150);

  ASSERT_EQ(comparator(heraldo, aakansha), -1);
  ASSERT_EQ(comparator(aleksa, aakansha), 1);
  ASSERT_EQ(comparator(heraldo, heraldo2), 0);
}

TEST(Comparator, TestNames)
{
  Player amy("amy", 100);
  Player david("david", 100);
  Player andrew("andrew", 100);
  Player amy2("amy", 100);
  Player amy3("amy3", 100);

  ASSERT_EQ(comparator(amy, david), 1);
  ASSERT_EQ(comparator(andrew, amy), -1);
  ASSERT_EQ(comparator(amy, amy2), 0);
  ASSERT_EQ(comparator(amy, amy3), 1);
}