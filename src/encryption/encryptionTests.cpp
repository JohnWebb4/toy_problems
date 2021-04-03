#include <gtest/gtest.h>

#include "encryption.h"

TEST(Encryption, Test1NiceDay)
{
    ASSERT_EQ("hae and via ecy", encryption("haveaniceday"));
}

TEST(Encryption, TestFeedDog)
{
    ASSERT_EQ("fto ehg ee dd", encryption("feedthedog"));
}

TEST(Encryption, TestChill)
{
    ASSERT_EQ("clu hlt io", encryption("chillout"));
}

TEST(Encryption, TestFly)
{
    ASSERT_EQ("imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau", encryption("if man was meant to stay on the ground god would have given us roots"));
}