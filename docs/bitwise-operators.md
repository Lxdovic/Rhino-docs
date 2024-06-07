---
sidebar_position: 3
---

# Bitwise Operators

Bitwise operators are used to manipulate individual bits of an integer. They are used to perform bit-level operations on binary numbers.

## Bitwise AND

The bitwise AND operator is denoted by `&`. It compares each bit of the first operand to the corresponding bit of the second operand. If both bits are 1, the corresponding result bit is set to 1. Otherwise, it is set to 0.

```jsx
println(5 & 3) // 1
```

## Bitwise OR

The bitwise OR operator is denoted by `|`. It compares each bit of the first operand to the corresponding bit of the second operand. If either bit is 1, the corresponding result bit is set to 1. Otherwise, it is set to 0.

```jsx
println(5 | 3) // 7
```

## Bitwise XOR

The bitwise XOR operator is denoted by `^`. It compares each bit of the first operand to the corresponding bit of the second operand. If the bits are different, the corresponding result bit is set to 1. Otherwise, it is set to 0.

```jsx
println(5 ^ 3) // 6
```

## Bitwise NOT

The bitwise NOT operator is denoted by `~`. It inverts the bits of its operand. If the bit is 0, it is set to 1, and if the bit is 1, it is set to 0.

```jsx
println(~5) // -6
```

## Left Shift

The left shift operator is denoted by `<<`. It shifts the bits of the first operand to the left by the number of positions specified by the second operand. The leftmost bits are discarded, and the rightmost bits are filled with zeros.

```jsx
println(5 << 1) // 10
```

## Right Shift
    
The right shift operator is denoted by `>>`. It shifts the bits of the first operand to the right by the number of positions specified by the second operand. The rightmost bits are discarded, and the leftmost bits are filled with zeros.

```jsx
println(5 >> 1) // 2
```

