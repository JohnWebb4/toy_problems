# Remove duplicates

# Input 1: Array of sorted integers
# Output: Length of array
# Side effects: Removes duplicates from input array

# Brain storm

def remove_duplicates(nums):
  i = 0
  while i < len(nums):
    if (i < len(nums) - 1):
      if (nums[i] == nums[i + 1]):
        nums.remove(nums[i])
      else:
        i += 1
    else:
      i+= 1

  return len(nums)
    
