export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }
  }

  append(data) {
    const node = new Node(data);
    const last = this.getLast();
    if (last) {
      last.next = node;
    } else {
      this.head = node;
    }
  }
}
