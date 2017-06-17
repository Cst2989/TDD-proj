export class Stack {
    public title: String = 'app workss!';
    public nrOfElements: number = 0;

    public list: Array<string> = [];

    constructor() {

    }

    public size(): number {
        return this.nrOfElements;
    }

    public pushElement(element: string): void {
        this.list.push(element);
        this.nrOfElements = this.nrOfElements + 1;
    }


    public pop(): string {
        if (this.list.length > 0) {
            this.nrOfElements = this.nrOfElements - 1;
            return this.list[this.list.length - 1]
        }
    }
}
