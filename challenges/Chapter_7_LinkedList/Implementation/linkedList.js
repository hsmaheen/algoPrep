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
