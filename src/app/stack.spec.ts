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

  //daca pica nu ne dam seama dc pica - nu avem control asupra intrariilor
  it("should have N elements on N elements pushed", () => {
      let numberofElements = Math.floor(Math.random() * 20);

      for (let i = 0; i < numberofElements; i++) {
          stack.pushElement('a');
      }
      let nrOfElements = stack.size();
      expect(nrOfElements).toEqual(numberofElements);

  });

  it("should have correct output given the correct input", () => {
      let mockData = [
          { nr: 2, char: "a" },
          { nr: 3, char: "b" },
          { nr: 4, char: "c" },
      ];

      mockData.map(d => {
          let newStack = new Stack();
          
          for (let i = 0; i < d.nr; i++) {
              newStack.pushElement(d.char);
          }

          let nrOfElements = newStack.size();
          expect(nrOfElements).toEqual(d.nr);
      })

  });

});
