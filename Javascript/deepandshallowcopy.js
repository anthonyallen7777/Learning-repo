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
//console.log(deepArray[0], deepCopy[0]);


//OBJECTS

// const person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };
// 
// //Both spread and assign are SHALLOW copying
// //while JSON is DEEP copying
// 
// // using spread ...
// let p1 = {
//     ...person
// };
// 
// // using  Object.assign() method
// let p2 = Object.assign({}, person);
// 
// // using JSON
// let p3 = JSON.parse(JSON.stringify(person));


// let person = {
//     firstName: 'John', //primitive value
//     lastName: 'Doe', //primitive value
//     address: { //reference value b/c it's an object
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     }
// };
// 
// console.log(person);
// 
// let copiedPerson = Object.assign({}, person);
// 
// copiedPerson.firstName = 'Jane'; // disconnected
// 
// copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
// copiedPerson.address.city = 'Mountain View'; // connected
// 
// console.log(copiedPerson);
// 
// console.log(person);

let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};


let copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway';
copiedPerson.address.city = 'Mountain View';

console.log(person);