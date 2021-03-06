export class Stack {
    public title: String = 'app workss!';

    private nrOfElements: number = 0;

    private list: Array<string> = [];

    constructor() {

    }

    public getSize(): number {
        return this.nrOfElements;
    }

    public pushElement(element: string): void {
        this.list.push(element);
        this.nrOfElements = this.nrOfElements + 1;
    }


    public popElement(): string {
        if (this.list.length > 0) {
            this.nrOfElements = this.nrOfElements - 1;
            return this.list[this.list.length - 1]
        }
    }

    public getStack(): Array<string> {
        return this.list;
    }
}
