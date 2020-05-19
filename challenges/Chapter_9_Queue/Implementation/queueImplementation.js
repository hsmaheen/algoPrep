class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (!this.last) {
      this.last = newNode;
      this.first = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    const nodeToRemove = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return nodeToRemove;
  }
}
