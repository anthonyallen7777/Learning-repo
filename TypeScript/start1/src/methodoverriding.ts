// Creating Classes

class Account2 {
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
        console.log(this._balance)
        this._balance += amount;
    }
}

class Over extends Account2 {
    override deposit(): void {
        console.log('BALANCE')
    }
}

let over1 = new Over(2, 'John', 0)
over1.deposit()