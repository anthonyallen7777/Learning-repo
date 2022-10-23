//ARRAYS

var original = [true, true, undefined, false, null];

//slice
var copy1 = original.slice(0);

//spread operator
var copy2 = [...original];

//console.log(copy1, copy2);

//DEEP copying
var deepArray = [["my music"]];
//when you copy an array that has array inside
//you are creating a pointer to that original
//array and not actually copying it
//(this applies to arrays and objects)
var shallowCopy = deepArray.slice(0);

//shallowCopy[0].push("playlist");
//console.log(deepArray[0], shallowCopy[0]);

var deepCopy = JSON.parse(JSON.stringify(deepArray))
deepCopy[0].push("playlist");;
console.log(deepArray[0], deepCopy[0]);


//OBJECTS

const person = {
    firstName: 'John',
    lastName: 'Doe'
};

//Both spread and assign are SHALLOW copying
//while JSON is DEEP copying

// using spread ...
let p1 = {
    ...person
};

// using  Object.assign() method
let p2 = Object.assign({}, person);

// using JSON
let p3 = JSON.parse(JSON.stringify(person));


//shallow copying objects
var obj = {type: ["BLUE"]};
var copy = obj
copy.key3 = "abc";

//console.log(obj, copy);


//DEEP copying objects
var obj2 = {type: ["BLUE"]};
var copy2 = {...obj2};
copy2.key3 = "abc";

//console.log(obj2, copy2);