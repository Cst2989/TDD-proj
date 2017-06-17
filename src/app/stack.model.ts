export class Stack {
    public title: String = 'app workss!';
    public nrOfElements: number = 0;

    constructor() {

    }

    public size(): number {
        return this.nrOfElements;
    }

    public pushElement(element: string): void {
        this.nrOfElements = this.nrOfElements + 1;
    }
}
