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
    if (data === undefined || idx > this.length) {
      return false;
    }
    if (idx === 0) {
      this.addHead(data);
      return true;
    } else if (idx === this.length) {
      this.append(data);
      return true;
    } else {
      const prevNode = this.getAt(idx - 1);
      const aftNode = prevNode.next;

      newNode.next = aftNode;
      newNode.prev = prevNode;

      prevNode.next = newNode;
      aftNode.prev = newNode;

      this.length++;
      return true;
    }
  }

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return false;
    }

    if (idx === 0) {
      this.removeHead();
    }

    if (idx === this.length - 1) {
      this.removeTail;
    }

    const nodeToRemove = this.getAt(idx);
    const prevNode = nodeToRemove.prev;
    const aftNode = nodeToRemove.next;

    prevNode.next = aftNode;
    aftNode.prev = prevNode;

    nodeToRemove.next = null;
    nodeToRemove.prev = null;
    this.length--;
    return true;
  }
}
