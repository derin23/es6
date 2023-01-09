let a = {"name" : "Derin"};
let b = {"name" : "King"};
let coders = {};

coders[a] = "front end dev";
coders[b] = "back end dev";
//can not use objects as keys for other objects
console.log(coders);
console.log(coders[a], coders[b]);

let devs = new Map();
devs.set(a,"js dev");
devs[b] = "python dev";
//use set() when setting key value pair in Maps
console.log(devs)








// Method	Description
// new Map()	Creates a new Map object
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// clear()	Removes all the elements from a Map
// delete()	Removes a Map element specified by a key
// has()	Returns true if a key exists in a Map
// forEach()	Invokes a callback for each key/value pair in a Map
// entries()	Returns an iterator object with the [key, value] pairs in a Map
// keys()	Returns an iterator object with the keys in a Map
// values()	Returns an iterator object of the values in a Map
// Property	Description
// size	Returns the number of Map elements