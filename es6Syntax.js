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

function isEqualTo(number, compare){
    return number == compare;
}

//console.log(isEqualTo(10,10));

function isEqualTo1(number = 11, compare){
    console.log(number);
    console.log(compare);
    return number == compare;
}

console.log(isEqualTo1(10,10));