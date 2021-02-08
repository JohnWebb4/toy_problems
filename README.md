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

The C++ tests are written using GoogleTest. You will need to install it (https://github.com/google/googletest).

Inside the root folder, run the following command to build the Google Test Suite.

```sh
cmake .
make
```

Run the files using the generated executable.

```sh
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
| arrayManipulation      | Java 8     |
| blackJack              | JavaScript |
| balancedBrackets       | JavaScript |
| comparator             | C++        |
| countingValleys        | Python     |
| courseSchedule         | Java       |
| cycleDetection         | Python     |
| determiningDNAHealth   | Java 8     |
| diwaliLights           | Java 8     |
| ransonNote             | Python     |
| extraLongFactorials    | Java 8     |
| hashTableParlor        | Java 8     |
| huffmanDecoding        | Java 8     |
| kCandyStore            | JavaScript |
| maxArraySum            | JavaScript |
| magicSquare            | JavaScript |
| minAbsDiff             | C++ .      |
| nonDivisible           | C++        |
| isFibo                 | JavaScript |
| removeDuplicates       | Python     |
| sherlockAndPermuations | C++        |
| sherlockAndAnagrams    | JavaScript |
| sockMerchant           | JavaScript |
| specialMultiple        | Python     |
| sudokuSolver           | JavaScript |
| sumNSeries             | C++        |

## Problem Count By Language

| Language   | Count |
| ---------- | ----- |
| C++        | 7     |
| Java 8     | 7     |
| JavaScript | 6     |
| Python     | 6     |

## License

[MIT](/LICENSE)
