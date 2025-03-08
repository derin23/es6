//Closures:
// In JavaScript, a closure is the combination of a function bundled together (enclosed)
// with references to its surrounding state (the lexical environment). In other words,
// a closure gives you access to an outer function's scope from an inner function, ' +
// 'even after the outer function has finished executing.
//
// Here's a simple example:
// JavaScript

function outerFunction() {
    let outerVariable = 'Hello';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closure = outerFunction();
closure(); // Outputs: 'Hello'
// Explanation:
//     outerFunction creates a variable outerVariable and defines innerFunction.
//     innerFunction references outerVariable from its surrounding scope.
//     outerFunction returns innerFunction, which is assigned to closure.
//     When closure is called, it can still access outerVariable, even though outerFunction has already finished executing.
//     Key Points:
//     Closures are created every time a function is created, at function creation time.
//     Closures allow for data encapsulation and privacy.
//     Closures are commonly used in callbacks, event handlers, and higher-order functions.
//