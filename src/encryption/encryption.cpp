#include <algorithm>
#include <math.h>
#include <sstream>
#include <string>

#include "./encryption.h"

std::string encryption(std::string s)
{
    std::string noSpaces = s;
    noSpaces.erase(std::remove_if(noSpaces.begin(), noSpaces.end(), ::isspace), noSpaces.end());

    double rootLength = sqrt(noSpaces.size());
    size_t rowLength = floor(rootLength);
    size_t columnLength = ceil(rootLength);

    if (rowLength * columnLength < noSpaces.size())
    {
        rowLength = columnLength;
    }

    std::stringstream encryptedString;

    for (int i = 0; i < columnLength; i++)
    {
        for (int j = 0; j < rowLength; j++)
        {
            if (i + j * columnLength >= noSpaces.size())
            {
                break;
            }

            encryptedString << noSpaces.at(i + j * columnLength);
        }

        if (i < columnLength - 1)
        {
            encryptedString << " ";
        }
    }

    return encryptedString.str();
}