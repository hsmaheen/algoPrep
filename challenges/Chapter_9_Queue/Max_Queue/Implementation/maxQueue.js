import { Queue } from '../../Implementation/queueImplementation';

export class MaxQueue {
  constructor() {
    this.dataQueue = new Queue();
    this.maxQueue = new Queue();
  }

  length() {
    return this.dataQueue.length;
  }

  enqueue(data) {
    if (this.dataQueue.length === 0) {
      this.dataQueue.enqueue(data);
      this.maxQueue.enqueue(data);
      return;
    }

    while (this.maxQueue.length > 0 && this.maxQueue.first.data < data) {
      this.maxQueue.dequeue();
    }

    this.dataQueue.enqueue(data);
    this.maxQueue.enqueue(data);
  }

  dequeue() {
    if (this.length() === 0) {
      return null;
    }

    if (this.dataQueue.peek().data === this.maxQueue.peek().data) {
      this.maxQueue.dequeue();
    }
    const firstNode = this.dataQueue.dequeue();
    return firstNode.data;
  }

  getMax() {
    if (this.maxQueue.length === 0) {
      return null;
    }
    const max = this.maxQueue.peek();
    return max.data;
  }
}
