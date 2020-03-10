#include <string>

#ifndef COMPARATOR_H
#define COMPARATOR_H

class Player
{
public:
  std::string name;
  int score;

  Player(std::string name, int score);
};

int comparator(Player &a, Player &b);

#endif