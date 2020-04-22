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
}

// const l = new LinkedList();
// const nodeA = new Node('A');
// const nodeB = new Node('B');
// const nodeC = new Node('C');
// nodeA.next = nodeB;
// nodeB.next = nodeC;

// l.head = nodeA;

// l.getAt(1);
