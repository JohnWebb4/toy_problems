#include <vector>

#include "./medianSortedArrays.h"

double findMedianSortedArrays(std::vector<int> &nums1, std::vector<int> &nums2)
{
    size_t num1Index = 0;
    size_t num2Index = 0;
    size_t num1Size = nums1.size();
    size_t num2Size = nums2.size();
    size_t medianIndex = (num1Size + num2Size) / 2;

    int previousValue;
    double median;

    for (int i = 0; i <= medianIndex; i++)
    {
        double num1 = num1Index < num1Size ? nums1.at(num1Index) : INT64_MAX;
        double num2 = num2Index < num2Size ? nums2.at(num2Index) : INT64_MAX;

        previousValue = median;

        if (num1 < num2)
        {
            median = num1;
            num1Index++;
        }
        else
        {
            median = num2;
            num2Index++;
        }
    }

    if ((num1Size + num2Size) % 2 == 0)
    {
        median = (median + previousValue) / 2.0;
    }

    return median;
}