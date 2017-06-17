import { Stack } from './stack.model';

describe('Stack', () => {
  let stack;
  beforeEach(() => {
      stack = new Stack();
  });
  it('should work', () => {
    expect(stack.title).toEqual('app workss!');
  });

  it('should have size 0 at init', () => {
    let size = stack.size();
    expect(size).toEqual(0);
  });

});
