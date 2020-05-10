export class QueueArray {
  constructor(capacity = 0) {
    this.array = [];
    this.start = 0;
    this.end = 0;
    this.length = 0;
    this.capacity = capacity;
  }

  enqueue(data) {
    if (this.length === this.capacity) {
      return false;
    }

    this.array[this.end] = data;
    this.end = (this.end + 1) % this.capacity;
    this.length++;
    return true;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    const data = this.array[this.start];
    this.first = (this.first + 1) % this.capacity;
    this.length--;
    return data;
  }
}
