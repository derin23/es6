let name = "Derin";
//console.log(name);

let age = 30;
 if (true){
     let age = 29;
 }
// console.log(age);

// const NUM = 27;
// NUM = 29;
//console.log(NUM);

const AGES = [27, 29, 31];
//console.log(AGES);
AGES.push(25);
//console.log(AGES);

 const OBJ = {
     age:31
 };
// console.log(OBJ);

 OBJ.age = 30;

// console.log(OBJ);

function doSome(){
    num = 27;
}

let num;

doSome();
//console.log(num);

//doSome();
//console.log(num);

//arrow functions
var fn = () => {
console.log("test")
};

var fun = ()=> console.log("testing arrow func without brackets")
//fun();

//arrow func that returns a string is same as a normal func returning a string:
var arrow = ()=> "arrow return";

//arrow();

function regularFunc(){
    return "regular func return";
}

//regularFunc();

let longArrowFunc = ()=>{
    let a = 1;
    let b = 2;
    return a + b;
}

let longArrowFuncWithArgs = (a,b)=>{
    return a+b;
}

//console.log(longArrowFunc());
//console.log(longArrowFuncWithArgs(2,5));

//one arug means no need for "()" :

let oneArgArrow = a => a+5;

//console.log(oneArgArrow(4));

//function default parameters
function isEqualTo(number, compare){
    return number == compare;
}

//console.log(isEqualTo(10,10));

function isEqualTo1(number = 11, compare){
    console.log(number);
    console.log(compare);
    return number == compare;
}

//console.log(isEqualTo1(10,10));

//object literal new additions 
//---------------------------------

let myName = "Derin";
let myAge = 25;

let objectEx = {
    "myName" : "Joseph",
    myAge,
    //es6 lets you create method names that are string and you can call them by usine obj["function"()]
    "greet"(){
        console.log(this.myName + ", " + this.myAge);
    }
};

//objectEx["greet"]();


// rest operator : ...argument used in our fucntion, not the function calls

let numbers = [1,2,3,4,5];

function sumUp(...toAdd){
    let result = 0;
    for(let i = 0; i < toAdd.length; i++){
        result += toAdd[i];
    } 
    return result
}

//console.log(sumUp(100,10,20));

//spread operator : used in function call
let numbers1 = [1,2,3,4,5];
console.log(Math.max(...numbers1));