package designHashMap

type MyKeyValue struct {
	key   int
	value int
}

type MyHashMap struct {
	values [][]MyKeyValue
}

func Constructor() MyHashMap {
	hashMap := MyHashMap{}

	hashMap.values = make([][]MyKeyValue, 100)

	return hashMap
}

func (hashMap *MyHashMap) Put(key int, value int) {
	// TODO: Resizing. Eh.
	index := hashMap.hash(key)

	doesKeyExist := false
	for i, pair := range hashMap.values[index] {
		if pair.key == key {
			hashMap.values[index][i].value = value
			doesKeyExist = true
			break
		}
	}

	if !doesKeyExist {
		v := append(hashMap.values[index], MyKeyValue{key, value})
		hashMap.values[index] = v
	}
}

func (hashMap *MyHashMap) Get(key int) int {
	index := hashMap.hash(key)

	for _, pair := range hashMap.values[index] {
		if pair.key == key {
			return pair.value
		}
	}

	return -1
}

func (hashMap *MyHashMap) Remove(key int) {
	index := hashMap.hash(key)

	rowIndex := -1
	for i, pair := range hashMap.values[index] {
		if pair.key == key {
			rowIndex = i
			break
		}
	}

	if rowIndex >= 0 {
		hashMap.values[index] = append(hashMap.values[index][:rowIndex], hashMap.values[index][rowIndex+1:]...)
	}
}

func (hashMap *MyHashMap) hash(key int) int {
	// TODO: Cheap.
	return key % len(hashMap.values)
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Put(key,value);
 * param_2 := obj.Get(key);
 * obj.Remove(key);
 */
