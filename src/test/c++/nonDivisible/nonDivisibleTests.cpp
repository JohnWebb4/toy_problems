#include <gtest/gtest.h>
#include <vector>

#include "../../../main/c++/nonDivisible/nonDivisible.h"

TEST(NonDivisible, Test1)
{
  std::vector<int> vect;
  vect.push_back(10);
  vect.push_back(20);

  ASSERT_EQ(1, nonDivisible(1, vect));
}

TEST(NonDivisible, Test2)
{
  std::vector<int> vect;
  vect.push_back(1);
  vect.push_back(7);
  vect.push_back(2);
  vect.push_back(4);

  ASSERT_EQ(3, nonDivisible(3, vect));

}

TEST(NonDivisible, Test3)
{
  std::vector<int> vect;
  vect.push_back(278);
  vect.push_back(576);
  vect.push_back(496);
  vect.push_back(727);
  vect.push_back(410);
  vect.push_back(124);
  vect.push_back(338);
  vect.push_back(149);
  vect.push_back(209);
  vect.push_back(702);
  vect.push_back(282);
  vect.push_back(718);
  vect.push_back(771);
  vect.push_back(575);
  vect.push_back(436);

  ASSERT_EQ(11, nonDivisible(7, vect));

}
