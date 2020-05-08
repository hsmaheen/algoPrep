export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currHead = this.head;
      this.head = newNode;
      this.head.next = currHead;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      const currHead = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return currHead;
    } else {
      const currHead = this.head;
      this.head = this.head.next;
      this.length--;
      return currHead;
    }
  }

  peek() {
    if (!this.head) {
      return null;
    }

    return this.head;
  }
}
