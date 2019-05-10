#include "./src/test/c++/sumNSeries/sumNSeriesTests.cpp"
#include "./src/test/c++/sherlockAndPermutations/sherlockAndPermutationsTests.cpp"

int main(int argc, char **argv)
{
  testing::InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
