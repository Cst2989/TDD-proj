import { Account } from './account.model';

describe('Account', () => {
  let account;

  beforeEach(() => {
      //create the stack
      account = new Account(1);
  });

  it('should work', () => {
    expect(account.title).toEqual('app workss!');
  });

  it('should have 0 balance', () => {
      let balance = account.getBalance();
      expect(balance).toEqual(0);
  })

  it('should have 100 balance after depozit', () => {
      account.depozit(100);
      let balance = account.getBalance();
      expect(balance).toEqual(100);
  });

  it("should not add to balance if depozit is negative", () => {
      account.depozit(-100);
      let balance = account.getBalance();
      expect(balance).toEqual(0);
  });

  it("should not add to balance if depozit is bigger than 1000", () => {
      account.depozit(1005);
      let balance = account.getBalance();
      expect(balance).toEqual(0);
  });

  it("should add to balance if amount is a float number", function () {
      account.depozit(100.5);
      let balance = account.getBalance();
      expect(balance).toEqual(100.5);
  });

});
