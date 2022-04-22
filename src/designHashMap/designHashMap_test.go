package designHashMap

import "testing"

type addTest struct {
	operation            string
	key, value, expected int
}

var addTests = []addTest{
	{"put", 1, 2, 2},
	{"remove", 1, 0, -1},
}

func TestDesignHashMap(t *testing.T) {
	commands := []string{"MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"}
	values := [][]int{{}, {1, 1}, {2, 2}, {1}, {3}, {2, 1}, {2}, {2}, {2}}
	expected := []int{0, 0, 0, 1, -1, 0, 1, 0, -1}

	var hashMap MyHashMap
	for i, command := range commands {
		switch command {
		case "MyHashMap":
			hashMap = Constructor()
		case "put":
			hashMap.Put(values[i][0], values[i][1])
		case "remove":
			hashMap.Remove(values[i][0])
		case "get":
			got := hashMap.Get(values[i][0])
			if got != expected[i] {
				t.Fatalf(`Error getting key %v: %v != %v`, values[i][0], got, expected[i])
			}
		}
	}
}
