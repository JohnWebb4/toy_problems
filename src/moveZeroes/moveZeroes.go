package moveZeroes

// Best way is implementing sort.Sort
// But that's no fun

// Sorting algorithm
// Zero better than everything
// Everything else same
// Preserver non-zero order
func moveZeroes(nums []int) {
	// Bubble sort lazy
	for !isSorted(nums) {
		sort(nums)
	}
}

func sort(nums []int) {
	for i := 0; i < len(nums)-1; i++ {
		switch compare(nums[i], nums[i+1]) {
		case 1:
			swap(nums, i, i+1)
		case -1:
		default:
		}

	}
}

func compare(i int, j int) int {
	if i == 0 && j != 0 {
		return 1
	}
	if i != 0 && j == 0 {
		return -1
	}
	return 0
}

func isSorted(nums []int) bool {
	for i := 0; i < len(nums); i++ {
		if nums[i] == 0 {
			for j := i + 1; j < len(nums); j++ {
				if nums[j] != 0 {
					return false
				}
			}
		}
	}

	return true
}

func swap(nums []int, i int, j int) {
	temp := (nums)[i]
	(nums)[i] = (nums)[j]
	(nums)[j] = temp
}
