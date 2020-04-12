#include <gtest/gtest.h>
#include <vector>
#include <fstream>

#include "./maxArraySum.h"

TEST(MaxArraySum, TestSmallArrays)
{
  ASSERT_EQ(ArraySummer::getMaxArraySum({2, 1, 5, 8, 4}), 11);
  ASSERT_EQ(ArraySummer::getMaxArraySum({3, 7, 4, 6, 5}), 13);
  ASSERT_EQ(ArraySummer::getMaxArraySum({3, 5, -7, 8, 10}), 15);
}

TEST(MaxArraySum, TestLargeArrays)
{
  ArraySummer summer;
  std::vector<int> input;

  std::string line;
  std::ifstream testFile("./src/maxArraySum/testData.txt");

  if (testFile.is_open())
  {
    while (std::getline(testFile, line))
    {
      std::istringstream ss(line);
      do
      {
        std::string number;
        ss >> number;
        if (number != "")
        {
          input.push_back(std::stoi(number));
        }

      } while (ss);
    }

    testFile.close();
  }

  ASSERT_EQ(summer.getMaxArraySum(input), 151598486);
}
