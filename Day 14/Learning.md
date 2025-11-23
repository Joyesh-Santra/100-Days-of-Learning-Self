# Comparision Operator

- = This symbol means assignment and this symbol == means comparision.
- Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.
- A comparison result can be assigned to a variable, just like any value. :
---
let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

- When comparing values of different types, JavaScript converts the values to numbers.

- A strict equality operator === checks the equality without type conversion.

- For maths and other comparisons < > <= >=
null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

- Comparison operators return a boolean value.

- When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
- The values null and undefined equal == each other and do not equal any other value.

## The OR || operator does the following:

Evaluates operands from left to right.
For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were false), returns the last operand.
A value is returned in its original form, without the conversion.

In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.
## Short-circuit evaluation.

- Another feature of OR || operator is the so-called “short-circuit” evaluation.

It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

In the example below, only the second message is printed:

true || alert("not printed");
false || alert("printed");
In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.

- In other words, AND returns the first falsy value or the last value if none were found.

- Precedence of AND && is higher than OR ||
- A double NOT !! is sometimes used for converting a value to boolean type:

