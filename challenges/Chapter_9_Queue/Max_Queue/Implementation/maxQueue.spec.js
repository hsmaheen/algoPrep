import { MaxQueue } from './maxQueue';

describe('Max Queue Algo should work', () => {
  test('should return the correct Max for Queue of size 4', () => {
    const maxQueue = new MaxQueue();
    maxQueue.enqueue(3);
    maxQueue.enqueue(5);
    maxQueue.enqueue(9);
    maxQueue.enqueue(7);
    const res = maxQueue.getMax();
    expect(res).toBe(9);
  });

  test('should return the correct Max for Queue of size 1', () => {
    const maxQueue = new MaxQueue();
    maxQueue.enqueue(3);
    const res = maxQueue.getMax();
    expect(res).toBe(3);
  });

  test('should return the correct Max after removal for Queue of size 4', () => {
    const maxQueue = new MaxQueue();
    maxQueue.enqueue(3);
    maxQueue.enqueue(5);
    maxQueue.enqueue(9);
    maxQueue.enqueue(7);
    maxQueue.dequeue();
    maxQueue.dequeue();
    maxQueue.dequeue();
    const res = maxQueue.getMax();
    expect(res).toBe(7);
  });

  test('should return the correct Max for Queue of size 3', () => {
    const maxQueue = new MaxQueue();
    maxQueue.enqueue(3);
    maxQueue.enqueue(7);
    maxQueue.enqueue(5);
    const res = maxQueue.getMax();
    expect(res).toBe(7);
  });

  test('should return the correct Max after removal for Queue of size 3', () => {
    const maxQueue = new MaxQueue();
    maxQueue.enqueue(3);
    maxQueue.enqueue(7);
    maxQueue.enqueue(5);
    maxQueue.dequeue();
    maxQueue.dequeue();
    const res = maxQueue.getMax();
    expect(res).toBe(5);
  });

  test('should return null when queue is empty', () => {
    const maxQueue = new MaxQueue();
    const res = maxQueue.getMax();
    expect(res).toBe(null);
  });
});
