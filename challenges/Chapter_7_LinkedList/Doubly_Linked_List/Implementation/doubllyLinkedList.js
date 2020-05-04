export class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return;
  }

  removeTail() {
    if (!this.head) {
      return;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
  }

  removeHead() {
    if (!this.head) {
      return;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const nodeToRemove = this.head;
      this.head = nodeToRemove.next;
    }
    this.length--;
  }
}
