// Sherlock and the Anagrams
// Goal: Return number of all anagrams for word
// Input: String to compute anagrams
// Output: Number of anagrams
// Side Effects: None

// Thoughts
// Recursive?
// Keep track of previous checked anagrams

// For each character
// // Depth first search
// // // Check if word is not previously checked
// // // If not checked, then check it anagram
// // // // If anagram, then increment count and store
// Return count of anagram

type HashMap<T> = {
  [key: string]: T;
};

function getAnagramCount(word: string): number {
  const indexes: number[] = initialize0ToNArray(word.length);
  const indexesToCheck: string[] = [indexes.join(",")];
  const wordCount: HashMap<number> = {};
  const checkedIndexes: HashMap<boolean> = {};

  while (indexesToCheck.length > 0) {
    const comboIndex: string = indexesToCheck.pop() || "";
    const combination: string = mapDictionaryToWord(word, comboIndex);
    const comboKey = combination
      .split("")
      .sort()
      .join("");
    const count = wordCount[comboKey] || 0;

    // Build next queue
    if (comboIndex.length > 2) {
      let array = comboIndex.split(",");
      let key1 = array.slice(0, -1).join(",");
      if (!checkedIndexes[key1]) {
        indexesToCheck.push(key1);
      }

      let key2 = array.slice(1).join(",");
      if (!checkedIndexes[key2]) {
        indexesToCheck.push(key2);
      }
    }

    wordCount[comboKey] = count + 1;
    if (!checkedIndexes[comboIndex]) {
      checkedIndexes[comboIndex] = true;
    }
  }

  let totalCount = 0;

  for (const word in wordCount) {
    const count = wordCount[word];

    if (count > 1) {
      totalCount += getSumToN(count - 1);
    }
  }

  return totalCount;
}

function initialize0ToNArray(length: number): number[] {
  const array = [];

  for (let i = 0; i < length; i++) {
    array.push(i);
  }

  return array;
}

function mapDictionaryToWord(word: string, dictionary: string): string {
  const indexArray = dictionary.split(",");

  return indexArray.map(index => word[Number.parseInt(index)]).join("");
}

function getSumToN(n: number): number {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}

export { getAnagramCount };
