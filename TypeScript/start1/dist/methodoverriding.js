"use strict";
class Account2 {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        console.log(this._balance);
        this._balance += amount;
    }
}
class Over extends Account2 {
    deposit() {
        console.log('BALANCE');
    }
}
let over1 = new Over(2, 'John', 0);
over1.deposit();
//# sourceMappingURL=methodoverriding.js.map