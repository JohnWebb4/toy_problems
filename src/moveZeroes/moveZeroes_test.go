package moveZeroes

import (
	"testing"
)

func TestMoveZeroes(t *testing.T) {
	input := []int{0, 1, 0, 3, 12}
	moveZeroes(input)
	result := []int{1, 3, 12, 0, 0}

	for i := 0; i < len(input); i++ {
		if input[i] != result[i] {
			t.Fatalf("Move Zeroes Test 1 failed expected %v but got %v", result, input)
		}
	}
}
