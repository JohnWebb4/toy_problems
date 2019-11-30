#include <vector>

#include "climbingLeaderboard.h"

std::vector<int> climbingLeaderboard(std::vector<int> scores, std::vector<int> alice)
{
  std::vector<int> topScores(scores);
  std::vector<int> alicePlacings;

  for (int aliceScore : alice)
  {
    bool hasPlaced = false;
    int placing = 1;

    for (int scoreIndex = 0; scoreIndex < topScores.size(); scoreIndex++)
    {
      if (aliceScore >= topScores.at(scoreIndex))
      {
        topScores.insert(topScores.begin() + scoreIndex, aliceScore);
        alicePlacings.push_back(placing);
        hasPlaced = true;
        break;
      }

      if (scoreIndex == 0)
      {
        placing++;
      }
      else
      {
        if (topScores.at(scoreIndex - 1) != topScores.at(scoreIndex))
        {
          placing++;
        }
      }
    }

    if (!hasPlaced)
    {
      topScores.push_back(aliceScore);
      alicePlacings.push_back(placing);
    }
  }

  return alicePlacings;
}