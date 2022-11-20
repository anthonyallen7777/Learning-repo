"use strict";
var _a;
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let sales2 = 123456789;
let course2 = 'TypeScript';
let is_published2 = true;
let level;
level = 1;
level = 'a';
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let numbers2 = [1, 2, 3];
let numbers3 = [];
numbers3.forEach(n => n.toLocaleString);
let user = [1, 'Joe'];
user[0].toFixed(2);
user[1].toLowerCase();
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
var Size2;
(function (Size2) {
    Size2["Small"] = "s";
    Size2["Medium"] = "m";
    Size2["Large"] = "l";
})(Size2 || (Size2 = {}));
;
;
let mySize = 2;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
let c = [true, false, false];
let d = { temp: 5 };
let e = [3];
let f;
let employee2 = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
let measure = 'inch';
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hello!');
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
let phone = document.getElementById('phone');
let phone2 = document.getElementById('phone');
function reject(message) {
    throw new Error(message);
}
function processEvents() {
    while (true) {
    }
}
//# sourceMappingURL=index.js.map