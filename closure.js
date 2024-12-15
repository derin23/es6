// Closure is function with memories by returning a function from another function.

function createFunction(){
    function multiplyBy2(num){
        return num * 2;
    }
    return multiplyBy2;
}

const generatedFunc = createFunction();
const result = generatedFunc(3);

console.log(result);


// function testFunc(num){
//     return 1;
// }

// let test = testFunc();

// console.log(test(1))