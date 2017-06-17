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

    public depozit(amount: number, currency?: string): void {
        if (amount > 0 && amount <= 1000) {
            if (currency == '$') {
                this.balance = this.balance + amount * 4.5;
            } else {
                this.balance = this.balance + amount;
            }
        }
    }

}
