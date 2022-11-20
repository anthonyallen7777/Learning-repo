var sales = 123456789; //type number
var course = 'TypeScript'; //type string
var is_published = true; //type bool
var sales2 = 123456789; //type number
var course2 = 'TypeScript'; //type string
var is_published2 = true; //type bool
var level; //type any
level = 1;
level = 'a';
function render(document) {
    console.log(document);
}
//arrays
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3]; //type number
var numbers3 = [];
numbers3.forEach(function (n) { return n.toLocaleString; }); //code completion
//tuples
var user = [1, 'Joe'];
user[0].toFixed(2); //code completion
user[1].toLowerCase(); // code completion
//enums
// const small = 1;
// const medium = 2;
// const large = 3;
// PascalCase
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
; // Small is automatically set to 0
var Size2;
(function (Size2) {
    Size2["Small"] = "s";
    Size2["Medium"] = "m";
    Size2["Large"] = "l";
})(Size2 || (Size2 = {}));
;
; // You can init at certain values
var mySize = 2 /* Size3.Medium */;
console.log(mySize);
//functions
function calculateTax(income, taxYear) {
    if (taxYear === void 0) { taxYear = 2022; }
    if (taxYear < 2022)
        return income * 1.2;
    // undefined if not told
    return income * 1.3;
}
calculateTax(10000);
//objects
var employee = {
    id: 1,
    name: '',
    retire: function (date) {
        console.log(date);
    }
};
var employee2 = {
    id: 1,
    name: '',
    retire: function (date) {
        console.log(date);
    }
};
// union types
function kgToLbs(weight) {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
var c = [true, false, false];
console.log(typeof c);
