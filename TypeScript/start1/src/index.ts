let sales: number = 123_456_789; //type number
let course: string = 'TypeScript'; //type string
let is_published: boolean = true; //type bool

let sales2 = 123_456_789; //type number
let course2 = 'TypeScript'; //type string
let is_published2 = true; //type bool

let level; //type any
level = 1;
level = 'a';

function render(document: any) {
    console.log(document)
}

//arrays

let numbers: number[] = [1, 2, 3];

let numbers2 = [1, 2, 3]; //type number

let numbers3: number[] = [];
numbers3.forEach(n => n.toLocaleString) //code completion

//tuples

let user: [number, string] = [1, 'Joe'];
user[0].toFixed(2) //code completion
user[1].toLowerCase() // code completion

//enums

// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
enum Size { Small, Medium, Large }; // Small is automatically set to 0

enum Size2 { Small = 's', Medium = 'm', Large = 'l' };

// using const define enum the compiler
// will generate more optimized code
const enum Size3 { Small = 1, Medium, Large }; // You can init at certain values
let mySize: Size3 = Size3.Medium;

// console.log(mySize);

//functions

function calculateTax(income: number, taxYear = 2022): number { //annotate return type
    if (taxYear < 2022)
        return income * 1.2;
    // undefined if not told

    return income * 1.3;
}

calculateTax(10_000);

//objects

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void;
} = {
    id: 1,
    name: '',
    retire: (date: Date) => {
        console.log(date);
    }
};

// type exercise
let c = [true, false, false]; //boolean[] object
let d = {temp: 5}; //object
let e = [3]; //number[] object
let f; //any
// let g = []; //any[]

// type aliases

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void;
}

let employee2: Employee = {
    id: 1,
    name: '',
    retire: (date: Date) => {
        console.log(date);
    }
};

// union types

function kgToLbs(weight: number | string) {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs('10kg');

// type intersection

type Draggable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void
};

type UIWidget = Draggable & Resizeable;

//to init object
//must implement all members
//of Draggable and Resizeable
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// literal types

// literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = 'cm' | 'inch';
let measure: Metric = 'inch';

//nullable types

function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hello!');
}
// greet(null);
// greet(undefined);

// optional chaining

type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// optional property access operator
console.log(customer?.birthday?.getFullYear());

// optional element access operator
// if (customers !== null && customers !== undefined)
// customers[0]
// instead use customers?.[0]

// optional call
let log: any = null;
log?.('a');

// nullish coaelscing operator

let speed: number | null = null;
let ride = {
    // Falsy (undefined, null, '', false, 0)
    // speed: speed !== null ? speed : 30
    //nullish coaelscing operator
    //if speed is not null or undefined
    //use that value otherwise use 30
    speed: speed ?? 30
}

// type assertions

// purely for telling the compilier we know more about the object
let phone = document.getElementById('phone') as HTMLInputElement;
// HTMLElement
// HTMLInputElement

//another way
let phone2 = <HTMLInputElement> document.getElementById('phone');

// the unknown type

// function render(document: unknown) {
//     // Narrowing
//     if (typeof document instanceof WordDocument) [
//         document.toUpperCase();
//     ]
//     document.move();
//     document.fly();
//     document.whateverWeWant();
// }

// the never type

function reject(message: string): never {
    throw new Error(message);
}

function processEvents(): never {
    while (true) {
        //Read a message fro ma queue
    }
}

// processEvents();
// reject('...');
// console.log('Hello World') //will never be executed