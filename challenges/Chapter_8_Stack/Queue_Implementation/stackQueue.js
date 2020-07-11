import { Stack } from '../Implementation/stack';

export class StackQueue {
  constructor() {
    this.queueStack = new Stack();
    this.deQueueStack = new Stack();
  }

  queue(data) {
    this.queueStack.push(data);
  }

  deQueue() {
    if (this.queueStack.length === 0) {
      return null;
    }

    while (this.queueStack.length !== 0) {
      const node = this.queueStack.pop();
      this.deQueueStack.push(node.data);
    }

    const nodeToRemove = this.deQueueStack.pop();

    while (this.deQueueStack.length !== 0) {
      const node = this.deQueueStack.pop();
      this.queueStack.push(node.data);
    }
    return nodeToRemove.data;
  }
}
