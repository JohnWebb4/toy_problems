#include <gtest/gtest.h>

#include "longestPalindrome.h"

TEST(LongestPalindrome, BAB)
{
  ASSERT_EQ("aba", getLongestPalindrome("babad"));
}

TEST(LongestPalindrome, BB)
{
  ASSERT_EQ("bb", getLongestPalindrome("cbbd"));
}

TEST(LongestPalindrome, A)
{
  ASSERT_EQ("a", getLongestPalindrome("a"));
}

TEST(LongestPalindrome, AC)
{
  ASSERT_EQ("a", getLongestPalindrome("ac"));
}

TEST(LongestPalindrome, Long)
{
  ASSERT_EQ("ranynar", getLongestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
}

TEST(LongestPalindrome, Full)
{
  ASSERT_EQ("aaaa", getLongestPalindrome("aaaa"));
}