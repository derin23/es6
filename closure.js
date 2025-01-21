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