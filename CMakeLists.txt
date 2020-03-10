cmake_minimum_required(VERSION 3.10)
set (CMAKE_CXX_STANDARD 11)

# Locate GTest
find_package(GTest REQUIRED)
include_directories(${GTEST_INCLUDE_DIRS})

set(SOURCE 
  tests.cpp
  ./src/sumNSeries/sumNSeries.cpp
  ./src/sherlockAndPermutations/sherlockAndPermutations.cpp
  ./src/nonDivisible/nonDivisible.cpp
  ./src/climbingLeaderboard/climbingLeaderboard.cpp
  ./src/comparator/comparator.cpp
)

# Link tests
add_executable(runTests ${SOURCE})
target_link_libraries(runTests ${GTEST_LIBRARIES} pthread)

target_include_directories(runTests PUBLIC src/)
