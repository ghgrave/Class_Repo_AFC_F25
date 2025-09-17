// Generic allows us to write code now BUT define the data types later
class Queue<T> {
  private elements: T[];

  constructor() {
    this.elements = [];
  }

  public add = (newElement: T) => this.elements.unshift(newElement);
  public remove = (): T | undefined => this.elements.pop();
  public view = (): void => console.log(this.elements);
  public count = (): number => this.elements.length;
}

// now we need to actually use the Queue
let stringQueue = new Queue<string>()
stringQueue.add("dog")
stringQueue.view()
stringQueue.add("cat")
stringQueue.view()
stringQueue.add("bird")
stringQueue.view()
stringQueue.remove()
stringQueue.view()
console.log(`There are ${stringQueue.count()} elements left in our queue.`)














let numberQueue = new Queue<number>()