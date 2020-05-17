import { Queue } from './queueImplementation';

describe('Basic Queue implementation should work', () => {
  test('queue implementation should work for multiple elements', () => {
    const queue = new Queue();
    queue.enqueue('A');
    queue.enqueue('B');
    queue.enqueue('C');
    queue.enqueue('D');
    queue.enqueue('E');
    expect(queue.dequeue().data).toBe('A');
  });

  test('queue implementation should work for one element', () => {
    const queue = new Queue();
    queue.enqueue('A');
    expect(queue.dequeue().data).toBe('A');
  });

  test('queue implementation should work 0 elements', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBe(null);
  });
});
