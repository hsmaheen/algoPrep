class ListNode {
  constructor(key, val, next = null, prev = null) {
    this.key = key;
    this.val = val;
    this.next = next;
    this.prev = prev;
  }

  removeBindings() {
    if (this.prev !== null) {
      this.prev.next = this.next;
    }

    if (this.next !== null) {
      this.next.prev = this.prev;
    }
    this.next = null;
    this.prev = null;
  }
}

export class LRUCache {
  constructor(maxSize = 10) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.maxSize = maxSize;
    this.cache = new Map();
  }

  read(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      this.moveToHead(node);
      return node;
    } else {
      return null;
    }
  }

  write(key, val) {
    const node = this.cache.get(key);
    if (!this.cache.has(key)) {
      if (this.length === this.maxSize) {
        this.removeLeastUsed();
      } else {
        this.length++;
      }
      const newNode = new ListNode(key, val);
      this.cache.set(key, newNode);
      this.addToHead(newNode);
    } else {
      node.val = val;
      this.moveToHead(node);
    }
  }

  addToHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      const currHead = this.head;
      currHead.prev = node;

      node.next = currHead;
      this.head = node;
    }
  }

  moveToHead(node) {
    if (this.head === node) {
      return;
    } else {
      if (this.tail === node) {
        this.removeTail();
      }

      node.removeBindings();
      this.addToHead(node);
    }
  }

  removeLeastUsed() {
    const keyToRemove = this.tail.key;
    this.removeTail();
    this.cache.delete(keyToRemove);
  }

  removeTail() {
    if (this.head === null) {
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
}
