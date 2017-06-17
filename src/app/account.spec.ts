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

  it("should add to balance if amount is a float number", () => {
      account.depozit(100.5);
      let balance = account.getBalance();
      expect(balance).toEqual(100.5);
  });

  it("should convert deposit of dollars to RON", () => {
      account.depozit(100, '$');
      let balance = account.getBalance();
      expect(balance).toEqual(450);
  });

  it("should add to balance if balance is not 0", () => {
      account = new Account(2);
      account.depozit(100);
      let balance = account.getBalance();
      expect(balance).toEqual(0);
  });

  it("should throw exception if deposit is not in range", () => {
      let mockData = ["-100","1005","-45.5"];

      mockData.map(d=> {
          var foo = function() {
            account.depozit(d)
          };
           expect(foo).toThrowError(TypeError);
           let balance = account.getBalance();
           expect(balance).toEqual(0);
      })
  })

});
