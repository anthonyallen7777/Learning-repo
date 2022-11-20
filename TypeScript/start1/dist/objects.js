"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error('Invalid value');
        this._balance = value;
    }
}
let account = new Account(1, "Joe", 0);
account.deposit(100);
console.log(account.balance);
account.balance = account.balance += 1;
console.log(account.balance);
//# sourceMappingURL=objects.js.map