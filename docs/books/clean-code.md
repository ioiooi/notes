# Clean Code

## Chapter 2: Meaningful Names

### Use Intention-Revealing Names

The name of a variable, function, or class, should answer all the big questions. It should tell you why it exists, what it does, and how it is used.

Choosing names that reveal intent can make it much easier to understand and change
code.

**BAD**

```java
public List<int[]> getThem() {
  List<int[]> list1 = new ArrayList<int[]>();
  for (int[] x : theList)
    if (x[0] == 4)
      list1.add(x);
  return list1;
}
```

**GOOD**

```java
public List<int[]> getFlaggedCells() {
  List<int[]> flaggedCells = new ArrayList<int[]>();
  for (int[] cell : gameBoard)
  if (cell[STATUS_VALUE] == FLAGGED)
    flaggedCells.add(cell);
  return flaggedCells;
}
```

### Avoid Disinformation

### Make Meaningful Distinctions

### Use Pronounceable Names

### Avoid Mental Mapping

### Class Names

### Method Names

### Don't Be Cute

### Pick One Word per Concept

Pick one word for one abstract concept and stick with it. For instance, it’s confusing to have `fetch`, `retrieve`, and `get` as equivalent methods of different classes.

Another example, it’s confusing to have a `controller` and a `manager` and a `driver` in the same code base. What is the essential difference between a `DeviceManager` and a `ProtocolController`? Why are both not `controllers` or both not `managers`?

## Chapter 3: Functions

## Chapter 4: Comments

## Chapter 5: Formatting

## Chapter 6: Objects and Data Structures

## Chapter 7: Error Handling

## Chapter 8: Boundaries

## Chapter 9: Unit Tests

## Chapter 10: Classes
