export class Account {
    public title: string = 'app workss!';
    public balance: number = 0;
    public accountNr: number;

    constructor(accountNr) {
        this.accountNr = accountNr;
    }

    public getBalance(): number {
        return this.balance;
    }

    public depozit(amount: number): void {
        if (amount > 0 && amount <= 1000) {
            this.balance = this.balance + amount;
        }
    }

}
