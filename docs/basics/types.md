---
sidebar_position: 2
---

# Types & Type Conversions

Types defines the nature of the values that a piece of data can take, as well as the operators that can be applied to it.

## Primitive Types

Primitives are the most basic types, there are 5:
- [Bool](#Bool)
- [Int](#Int)
- [Float](#Float)
- [Double](#Double)
- [String](#String)

### Bool

Bool values can hold only two different values, `True` and `False`. 
This is also the type of value expected in `if` statements, more about them [here](#if-statements).

```go
var myVariable: bool = true
```

### Int

Ints values represent whole numbers, they can be positive or negative or zero. Integers are also used in `for` statements
more about them [here](#for-statements).

```go
var myVariable: int = -10
```

### Float

Floats represent floating point numbers, just like integers, they can be positive, negative or zero.

```go
var myVariable: float = 0.2f
```

### Double

Double are also used to represent floating point numbers, they have the same properties as floats but they can represent larger values. 

```go
var myVariable: double = 0.2
```

### String

Strings represent a sequence of characters, they can be used to store human readable data.

```go
var myVariable: string = "Hello World!"
```

## Assigning types

When declaring a variable, you can give it a type. This allows you to define what should be stored inside it.
By default, variables types are assigned automatically so you don't have to do it yourself. But we recommend giving your variables a type.

```go
var myBoolean: bool = true
```

Rhino is a type-safe language, once a type is assigned to a variable, it cannot be changed.

```go
var myBoolean: bool = true
// highlight-next-line
myBoolean = 10 // ERROR: cannot implicitly convert type <int> to <bool>. An explicit conversion exists. Are you missing a cast?
```

You can also give types to functions and function parameters:

```go
// highlight-next-line
function sum(a: int, b: int): int {
    return a + b
}
```

In the example above, we declare a function named `sum` taking two arguments: `a` and `b`. Both of type `int`. 
Since this function returns the sum of both parameters, we also need to define the return type.

## Converting Types

Sometimes, you may want to convert a type a into a type b. For example, let's say I have a variable of type `int`
and I want to use it in a function that has a parameter of type `double`. 
By using the conversion functions I can convert my `int` value to a double like so:

```go
var myIntVariable: int = 10
// highlight-next-line
var myConvertedVariable: double = double(myIntVariable)
cos(myConvertedVariable)
```

Here are all the available conversion functions:

- `double()` expects `int` / `float` / `string`
- `float()` expects `int` / `double` / `string`
- `int()` expects `double` / `float` / `string`
- `string()` expects `int` / `float` / `double` / `bool`
- `bool()` expects `int` / `float` / `double` / `string`

