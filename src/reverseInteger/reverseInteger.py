# reverse_integer

# Input: Number
# Output: Number
# Side effects: None

def reverse_integer(num):
  str_num = str(num).replace('-', '')[::-1]

  if num < 0:
    str_num = '-' + str_num

  rev_num = int(str_num)

  if rev_num > 2147483647:
    return 0

  if rev_num < -2147483648:
    return 0

  return rev_num 
