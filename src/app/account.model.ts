export class Account {
    public title: string = 'app workss!';

    private balance: number = 0;
    private accountNr: number;
    private dollarValue = 4.5;

    constructor(accountNr) {
        this.accountNr = accountNr;
    }

    public getBalance(): number {
        return this.balance;
    }

    public depozit(amount: number, currency?: string): void {
        if (amount > 0 && amount <= 1000) {
            if (currency == '$') {
                this.balance = this.balance + amount * this.dollarValue;
            } else {
                this.balance = this.balance + amount;
            }
        }
    }

}
