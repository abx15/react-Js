class Box<T> {
    private content: T;

    constructor(initalContant: T) {
        this.content = initalContant
    }

    getContent(): T {
        return this.content
    }
    setContent(newContent: T): void {
        this.content = newContent
    }
}

const stringBox = new Box<string>("Hello TypeScript")
console.log(stringBox.getContent())

stringBox.setContent("New content update")
console.log(stringBox.getContent())


const numberBox = new Box<number>(30);
console.log(numberBox.getContent());