export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
    return this.tail;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  deleteAt(idx) {
    if (!this.head) {
      return;
    }
    if (idx === 0) {
      this.head = this.head.next;
    }

    const prevNode = this.getAt(idx - 1);
    if (!prevNode || !prevNode.next) {
      return;
    }
    prevNode.next = prevNode.next.next;
    this.length--;
  }

  deleteWithoutPrev(idx) {
    if (!this.head) {
      return;
    }
    if (idx === 0) {
      this.head = this.head.next;
    }

    let nodeToDelete = this.getAt(idx);
    if (!nodeToDelete || !nodeToDelete.next) {
      return;
    }

    nodeToDelete.data = nodeToDelete.next.data;
    nodeToDelete.next = nodeToDelete.next.next;
    this.length--;
  }

  convertListToArray() {
    let node = this.head;
    let arr = [];
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }
}
