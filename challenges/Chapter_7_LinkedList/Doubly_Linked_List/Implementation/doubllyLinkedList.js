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
    const oldHead = this.head;
    if (!this.head) {
      return;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
    }
    oldHead.prev = null;
    this.length--;
  }

  addHead(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    if (idx < this.length / 2) {
      let currNode = this.head;
      let counter = 0;
      while (currNode) {
        if (counter === idx) {
          return currNode;
        }
        currNode = currNode.next;
        counter++;
      }
      return null;
    } else {
      let counter = this.length - 1;
      let currNode = this.tail;
      while (currNode) {
        if (counter === idx) {
          return currNode;
        }
        counter--;
        currNode = currNode.prev;
      }
      return null;
    }
  }

  set(idx, data) {
    if (data === undefined) {
      return false;
    }
    const nodeToSet = this.getAt(idx);
    if (nodeToSet !== null) {
      nodeToSet.data = data;
      return true;
    }
    return false;
  }

  insertAt(idx, data) {
    const newNode = new Node(data);
    if (data === undefined) {
      return false;
    }

    if (idx === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const prevNode = this.getAt(idx - 1);
      if (prevNode === null) {
        return false;
      }
      newNode.next = prevNode.next;
      newNode.prev = prevNode;
      prevNode.next = newNode;
    }
    this.length++;
  }
}
