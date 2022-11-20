// Creating Classes

class Account {
    // ? makes it optional
    nickname?: string;

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number) {
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount');
        // Record a transaction
        this._balance += amount;
    }

    // private calculateTax() {
    // }

    get balance(): number {
        return this._balance
    }

    set balance(value: number) {
        if (value < 0)
            throw new Error('Invalid value');
        this._balance = value;
    }
}

// Creating Objects

let account = new Account(1, "Joe", 0);
// cannot access private property outside of class
// account.balance = -1;
account.deposit(100)
// console.log(account instanceof Account)

// console.log(account.getBalance())
console.log(account.balance);
account.balance = account.balance += 1;
console.log(account.balance);