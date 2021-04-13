# Toy Problems

Repository of all of my toy problems.

Includes test files for verifying work.

## Installing Toy Problems

Run the following commands to install the toy problems.

```sh
git clone https://github.com/JohnWebb4/toy-problems.git
cd toy-problems
npm install
```

## Running Tests

### Running C++ Tests (GoogleTest)

The C++ tests are written using GoogleTest. It is included as a subdirectory. No extra installation necessary.

Inside the root folder, run the following command to build and run the Google Test Suite.

```sh
mkdir build
cd build
cmake ..
make
./runTests
```

### Running Java Tests (Gradle)

A gradle build is supplied. You will need to build the gradle file and run the tests task.

### Running JavaScript Tests (Jest)

Run the following command to run the jest test files.

```sh
npm run test
```

## Building the repository

Run the following command to build the Typescript files.

```sh
npm run build
```

### Running Python 3.5 Tests

The file `runTests.py` initializes the test runner. Run the following command

```sh
python runTests.py
```

## Problems Solved

| Problem                | Language   |
| ---------------------- | ---------- |
| absolutePermutation    | JavaScript |
| arrayManipulation      | Java 8     |
| blackJack              | JavaScript |
| balancedBrackets       | JavaScript |
| biggerIsGreater        | Java 8     |
| chefAndGroups          | Python     |
| comparator             | C++        |
| containerOfBalls       | Python     |
| countingValleys        | Python     |
| courseSchedule         | Java       |
| cycleDetection         | Python     |
| davisStaircase         | Java 8     |
| determiningDNAHealth   | Java 8     |
| diwaliLights           | Java 8     |
| encryption             | C++        |
| ransonNote             | Python     |
| extraLongFactorials    | Java 8     |
| greedyFlorist          | C++        |
| hashTableParlor        | Java 8     |
| huffmanDecoding        | Java 8     |
| kCandyStore            | JavaScript |
| longestSubstring       | Python     |
| longestPalindrome      | C++        |
| maxArraySum            | JavaScript |
| magicSquare            | JavaScript |
| medianSortedArrays     | C++        |
| minAbsDiff             | C++        |
| nonDivisible           | C++        |
| isFibo                 | JavaScript |
| queenAttackII          | JavaScript |
| removeDuplicates       | Python     |
| reverseInteger         | Python     |
| roadsAndLibraries      | Python     |
| romanToInteger         | Java       |
| sherlockAndPermuations | C++        |
| sherlockAndAnagrams    | JavaScript |
| shortestPathMatrix     | Python     |
| sockMerchant           | JavaScript |
| specialMultiple        | Python     |
| sudokuSolver           | JavaScript |
| sumNSeries             | C++        |
| zigZagConversion       | Java       |

## Problem Count By Language

| Language   | Count |
| ---------- | ----- |
| C++        | 11    |
| Java 8     | 11    |
| JavaScript | 10    |
| Python     | 10    |

## License

[MIT](/LICENSE)
