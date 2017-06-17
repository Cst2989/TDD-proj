import { Stack } from './stack.model';

/* describe('Stack', () => {
  let stack;

  beforeEach(() => {
      //create the stack
      stack = new Stack();
  });

  it('should work', () => {
    expect(stack.title).toEqual('app workss!');
  });

  it('should have size 0 at init', () => {
    let nrOfElements = stack.getSize();
    expect(nrOfElements).toEqual(0);
  });

  //daca pica nu ne dam seama dc pica - nu avem control asupra intrariilor
  it("should have N elements on N elements pushed", () => {
      let numberofElements = Math.floor(Math.random() * 20);

      for (let i = 0; i < numberofElements; i++) {
          stack.pushElement('a');
      }
      let nrOfElements = stack.getSize();
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

          let nrOfElements = newStack.getSize();
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

          let lastElement = stack.popElement();
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

          newStack.popElement();
          let nrOfElements = newStack.getSize();
          expect(nrOfElements).toEqual(d.nr - 1);
      })
  });

  it("should not return anything if stack is empty", () => {
      stack.popElement();
      let nrOfElements = stack.getSize();
      expect(nrOfElements).toEqual(0);
  });

  it("should have the correct elements after push", () => {
      let mockData = [
          { stack: ["a","b","c"], char: ["a","b","c"] },
          { stack: ["b","a","a","x","x"], char: ["b","a","a","x","x"] },
          { stack: ["c","a","b","b"], char: ["c","a","b","b"] },
      ];

      mockData.map(d => {
          let newStack = new Stack();
          d.char.map(c => {
              newStack.pushElement(c);
          });

          let stackContains = newStack.getStack();
          expect(stackContains).toEqual(d.char);
      })
  });
});
*/
