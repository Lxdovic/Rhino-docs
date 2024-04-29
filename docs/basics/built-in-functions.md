---
sidebar_position: 1
---

# Built-in Functions

Use these functions for math, io or other features:

## IO

Input/Output allows you to retrieve input from the user or dispay information

### Input

`input()`

- waits for a user prompt
- args `none`
- returns `string`

```jsx
var name = input()
```

### Print

`print(value)`

- prints a given value
- args
  - value `string`
- returns `void`

```jsx
print("Hello")
print("World!")
```

### Println

`println(value)`

- prints a given value at the next line
- args
  - value `string`
- returns `void`

```jsx
println("Hello") // Hello
println("World!") // World
```

## Math

### Cos

`cos(value)`

- gives the cosine of a number in radians
- args
  - value `double`
- returns `double`

```jsx
var cosine = cos(0.4)
println("Value is: " + string(cosine)) // Value is: 0.9210609940028851

```

### Sin

`sin(value)`

- gives the sine of a number in radians
- args
  - value `double`
- returns `double`

```jsx
var sine = sine(0.4)
println("Value is: " + string(sine)) // Value is: 0.3894183423086505
```

### Acos

`acos(value)`

- gives the inverse cosine of a number in radians
- args
  - value `double`
- returns `double`

```jsx
var acosine = acos(0.4)
println("Value is: " + string(acosine)) // Value is: 1.1592794807274085
```

### Floor

`floor(value)`

- gives rounds down and returns the largest integer less than or equal to a given number
- args
  - value `double`
- returns `int`

```jsx
var floored = floor(0.4)
println("Value is: " + string(floored)) // Value is: 0
```