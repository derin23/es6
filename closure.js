// Closure is function with memories by returning a function from another function.

function createFunction(){
    function multiplyBy2(num){
        return num * 2;
    }
    return multiplyBy2;
}

const generatedFunc = createFunction();
const howManyEverFunc = generatedFunc;
const result = howManyEverFunc(3);

//console.log(result);



function multiplyBy2(num){
    return num * 2;
}

// console.log(typeof multiplyBy2);

function callFunction(){
    return multiplyBy2(2);
}

// console.log(callFunction());

//Function can be returned from other functions in JS
// function outer(){
//     let counter = 0;
//     function incrementCounter(){
//         counter++;
//     }

//     incrementCounter();
// }


//Calling a function outside of the function call in which it was defined
function outer(){
    let counter = 0;
    function incrementCounter() { counter++; console.log(counter)}
    return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

//C.O.V.E or P.L.S.R.D 
//Closed Over Variable Environment 
// Persistent Lexical Scope reference data
//backpack (not real term) is result of JS being a lexically scopped language

const anotherFunction = outer();
anotherFunction();
anotherFunction();

// Challenge 1
// Create a function createFunction that creates and returns a function. 
// When that created function is called, it should print "hello". 
// When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.



function createFunction1(){
   return function1();  
}

function function1(){
    console.log("hello");
}


createFunction1();