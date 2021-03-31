#include <gtest/gtest.h>

#include "./countStrings.h"

TEST(CountStrings, TestString2)
{
  ASSERT_EQ(countStrings("((ab)|(ba))", 2), 2);
}