---
sidebar_position: 3
---

# Conditions

Conditions allows you to define whether a piece of code will be executed by comparing values.
Let's say I want to prompt the user and ask them their name, and give a response based on what they answered. 
I can use the `input()` built-in function and store the result in a variable. Then I can use an `if` statement
to compare the user's answer to the expected answer.

```go title="myProgram.ri"
var name = input()

// highlight-next-line
if (name == "Ludovic") {
    println("Hello Ludovic")
}
```

Also, if I want to define what code should be executed if the condition is not met, I can use the `else` statement:

```go title="myProgram.ri"
var name = input()

// highlight-next-line
if (name == "Ludovic") {
    println("Hello Ludovic")
}

else {
    println("I don't know you.")
}
```

Conditions can also be used in [while](#while-statement) statements.