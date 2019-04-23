#include "sumNSeries.h"
#include <stdio.h>

int summingSeries(long n)
{
  long overflow = 1000000007;

  long truncatedN = n % overflow;

  return (truncatedN * truncatedN) % overflow;
}
