export class Account {
  public title: string = 'app workss!';

  private balance: number = 0;
  private accountNr: number;
  private dollarValue = 4.5;
  private currencyValue = 1;

  constructor(accountNr) {
    if (accountNr == 2) {
      this.balance = -100;
    } else {
      this.balance = 0;
    }
    this.accountNr = accountNr;
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number, currency?: string): void {
    if (amount < 0 || amount > 1000) {
      throw new TypeError("foo bar baz");
    }
    this.balance = this.balance + amount * this.getConverganceValue(currency);
  }

  private getConverganceValue(currency?: string) {
      if (currency == "$") {
          return this.dollarValue
      }
      return this.currencyValue;
  }
}
