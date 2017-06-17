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
    let nrOfElements = stack.size();
    expect(nrOfElements).toEqual(0);
  });

  it('should increment size on push element', () => {
    stack.pushElement('a');
    let nrOfElements = stack.size();
    expect(nrOfElements).toEqual(1);
  })

});
