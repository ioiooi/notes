# Clean Code

## Chapter 2: Meaningful Names

### Use Intention-Revealing Names

The name of a variable, function, or class, should answer all the big questions. It should tell you why it exists, what it does, and how it is used.

Choosing names that reveal intent can make it much easier to understand and change code.

**Bad**

```java
public List<int[]> getThem() {
  List<int[]> list1 = new ArrayList<int[]>();
  for (int[] x : theList)
    if (x[0] == 4)
      list1.add(x);
  return list1;
}
```

**Good**

```java
public List<int[]> getFlaggedCells() {
  List<int[]> flaggedCells = new ArrayList<int[]>();
  for (int[] cell : gameBoard)
    if (cell[STATUS_VALUE] == FLAGGED)
      flaggedCells.add(cell);
  return flaggedCells;
}
```

We can go further and write a simple class for cells instead of using an array of `ints`. It can include an intention-revealing function (call it `isFlagged`) to hide the magic numbers.

**Even Better**

```java
public List<Cell> getFlaggedCells() {
  List<Cell> flaggedCells = new ArrayList<Cell>();
  for (Cell cell : gameBoard)
    if (cell.isFlagged())
      flaggedCells.add(cell);
  return flaggedCells;
}
```

### Avoid Disinformation

Avoid leaving false clues that obscure the meaning of code. For example, don't use `os` for "offset" as it typically refers to "operating system." Also, use `accounts` instead of `accountList` if it isn't a List to prevent false conclusions. Clear and precise naming ensures better code understanding.

### Make Meaningful Distinctions

Programmers should avoid writing code solely to satisfy compilers by using arbitrary or misspelled names. Names should be meaningful and distinct rather than adding numbers or noise words. Avoid non-informative names like `a1`, `a2`, or redundant names like `ProductInfo` and `ProductData` when you already have a class named `Product`. `Info` and `Data` are indistinct noise words like a, an, and the. Use clear and descriptive names like `source` and `destination` instead of `a1` and `a2`. Misleading or redundant names, such as `moneyAmount` versus `money`, should be avoided to ensure clarity. Clear naming conventions help programmers understand code intent and functionality, reducing confusion and errors.

### Use Pronounceable Names

### Use Searchable Names

### Avoid Encodings

### Avoid Mental Mapping

Use intuitive names related to the problem or solution domain to avoid confusion. Single-letter names are only acceptable for small loop counters. Avoid placeholders and prioritize clarity.

### Class Names

Classes and objects should have noun or noun phrase names like `Customer`, `WikiPage`, `Account`, and `AddressParser`. Avoid words like `Manager`, `Processor`, `Data`, or `Info` in the name of a class. A class name should not be a verb.

### Method Names

Methods should have verb or verb phrase names like `postPayment`, `deletePage`, or `save`. Accessors, mutators, and predicates should be named for their value and prefixed with `get`, `set`, and `is`.

### Don't Be Cute

If names are too clever, they will be memorable only to people who share the author’s sense of humor, and only as long as these people remember the joke. No memes or cultural references!

### Pick One Word per Concept

Pick one word for one abstract concept and stick with it. For instance, it’s confusing to have `fetch`, `retrieve`, and `get` as equivalent methods of different classes.

Another example, it’s confusing to have a `controller` and a `manager` and a `driver` in the same code base. What is the essential difference between a `DeviceManager` and a `ProtocolController`? Why are both not `controllers` or both not `managers`?

### Don't Pun

### Use Solution Domain Names

### Use Problem Domain Names

### Add Meaningful Context

### Don't Add Gratuitous Context

### Final Words

## Chapter 3: Functions

## Chapter 4: Comments

## Chapter 5: Formatting

## Chapter 6: Objects and Data Structures

## Chapter 7: Error Handling

## Chapter 8: Boundaries

## Chapter 9: Unit Tests

## Chapter 10: Classes
