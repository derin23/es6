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

console.log(oneArgArrow(4));

