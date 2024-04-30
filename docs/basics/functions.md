---
sidebar_position: 6
---

# Functions

A function is a separated chunk of code that you need to `call` to execute. They can take parameters and either return a value or nothing

```go
function sum(a: int, b: int): int {
    return a + b
}
```

Here, the function `sum` takes two arguments: a of type `int`, and b of type `int`. It returns an `int` which is the sum of both parameters.
To call a function, you can simply write its name followed by parenthesis. The parenthesis is where you define the parameters.

```go
sum(1, 2) // a = 1, b = 2
```