// Generic allows us to write code now BUT define the data types later
class Queue {
    elements;
    constructor() {
        this.elements = [];
    }
    add = (newElement) => this.elements.unshift(newElement);
    remove = () => this.elements.pop();
    view = () => console.log(this.elements);
    count = () => this.elements.length;
}
// now we need to actually use the Queue
let stringQueue = new Queue();
stringQueue.add("dog");
stringQueue.view();
stringQueue.add("cat");
stringQueue.view();
stringQueue.add("bird");
stringQueue.view();
stringQueue.remove();
stringQueue.view();
console.log(`There are ${stringQueue.count()} elements left in our queue.`);
let numberQueue = new Queue();
