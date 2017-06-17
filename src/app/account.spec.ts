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

});
