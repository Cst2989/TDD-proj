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

  it("poped element should be last", function () {

      let mockData = [
          { nr: 3, char: ["a","b","c"] },
          { nr: 5, char: ["b","a","a","x","x"] },
          { nr: 4, char: ["c","a","b","b"] },
      ];

      mockData.map(d => {
          let newStack = new Stack();
          for (let i = 0; i < d.nr; i++) {
              newStack.pushElement(d.char[i]);
          }

          let lastElement = stack.pop();
          expect(lastElement).toEqual(d.char[d.nr]);
      })
  });

  it("should reduce the number of elements on pop", () => {
      let mockData = [
          { nr: 3, char: ["a","b","c"] },
          { nr: 5, char: ["b","a","a","x","x"] },
          { nr: 4, char: ["c","a","b","b"] },
      ];

      mockData.map(d => {
          let newStack = new Stack();
          for (let i = 0; i < d.nr; i++) {
              newStack.pushElement(d.char[i]);
          }

          newStack.pop();
          let nrOfElements = newStack.size();
          expect(nrOfElements).toEqual(d.nr - 1);
      })
  });

  it("should not return anything if stack is empty", () => {
      stack.pop();
      let nrOfElements = stack.size();
      expect(nrOfElements).toEqual(0);
  });

});
