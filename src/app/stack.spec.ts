import { Stack } from './stack.model';

describe('Stack', () => {
  let stack;

  beforeEach(() => {
      //create the stack
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
  });

  it('should increment size on 2 elements pushed', () => {
     stack.pushElement('a');
     stack.pushElement('b');
     let nrOfElements = stack.size();
     expect(nrOfElements).toEqual(2);
  });

  it("should have N elements on N elements pushed", () => {
      let numberofElements = Math.floor(Math.random() * 20);

      for (let i = 0; i < numberofElements; i++) {
          stack.pushElement('a');
      }
      let nrOfElements = stack.size();
      expect(nrOfElements).toEqual(numberofElements);

  });


});
