#include <gtest/gtest.h>
#include <vector>

#include "./medianSortedArrays.h"

TEST(MedianSortedArrays, Test132)
{
    std::vector<int> nums1{1, 3};
    std::vector<int> nums2{2};
    ASSERT_EQ(findMedianSortedArrays(nums1, nums2), 2.0);
}

TEST(MedianSortedArrays, Test1234)
{
    std::vector<int> nums1{1, 2};
    std::vector<int> nums2{3, 4};
    ASSERT_EQ(findMedianSortedArrays(nums1, nums2), 2.5);
}

TEST(MedianSortedArrays, Test0000)
{
    std::vector<int> nums1{0, 0};
    std::vector<int> nums2{0, 0};
    ASSERT_EQ(findMedianSortedArrays(nums1, nums2), 0);
}

TEST(MedianSortedArrays, Test1)
{
    std::vector<int> nums1{};
    std::vector<int> nums2{1};
    ASSERT_EQ(findMedianSortedArrays(nums1, nums2), 1);
}

TEST(MedianSortedArrays, Test2)
{
    std::vector<int> nums1{2};
    std::vector<int> nums2{};
    ASSERT_EQ(findMedianSortedArrays(nums1, nums2), 2);
}