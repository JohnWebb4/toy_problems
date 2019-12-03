#include <stdio.h>

#include "sumNSeries.h"

int sumNSeries(long n)
{
  long overflow = 1000000007;

  long truncatedN = n % overflow;

  return (truncatedN * truncatedN) % overflow;
}
