import { Stack } from './stack';

describe('Stack Implementation should work', () => {
  test('should have head and tail as null during initialization', () => {
    const stack = new Stack();
    expect(stack.head).toBe(null);
    expect(stack.tail).toBe(null);
  });
  describe('Stack push implementation should work', () => {
    test('push should work with 1 element', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.head.data).toBe(1);
      expect(stack.length).toBe(1);
      expect(stack.tail.data).toBe(1);
    });

    test('push should work with 1 element', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      expect(stack.head.data).toBe(2);
      expect(stack.length).toBe(2);
      expect(stack.tail.data).toBe(1);
    });

    test('push should work with 3 element', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.head.data).toBe(3);
      expect(stack.head.next.data).toBe(2);
      expect(stack.length).toBe(3);
      expect(stack.tail.data).toBe(1);
    });
  });

  describe('Stack pop implementation should work', () => {
    test('pop should work with 0 elements', () => {
      const stack = new Stack();
      stack.push(1);
      const node = stack.pop();
      expect(stack.head).toBe(null);
      expect(stack.length).toBe(0);
      expect(stack.tail).toBe(null);
      expect(node.data).toBe(1);
    });

    test('pop should work with 2 element', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      const node = stack.pop();
      expect(stack.head.data).toBe(1);
      expect(stack.length).toBe(1);
      expect(stack.tail.data).toBe(1);
      expect(node.data).toBe(2);
    });

    test('pop should work with 3 element', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      const node = stack.pop();
      expect(stack.head.data).toBe(2);
      expect(stack.length).toBe(2);
      expect(stack.tail.data).toBe(1);
      expect(node.data).toBe(3);
    });

    test('pop should work with 4 element', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      const node = stack.pop();
      expect(stack.head.data).toBe(3);
      expect(stack.length).toBe(3);
      expect(stack.tail.data).toBe(1);
      expect(stack.head.next.data).toBe(2);
      expect(node.data).toBe(4);
    });
  });

  describe('Stack peek implementation should work', () => {
    test('peek should work with 0 elements', () => {
      const stack = new Stack();
      stack.push(1);
      const node = stack.peek();
      expect(stack.head.data).toBe(1);
      expect(stack.length).toBe(1);
      expect(stack.tail.data).toBe(1);
      expect(node.data).toBe(1);
    });

    test('peek should work with 2 element', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      const node = stack.peek();
      expect(stack.head.data).toBe(2);
      expect(stack.length).toBe(2);
      expect(stack.tail.data).toBe(1);
      expect(node.data).toBe(2);
    });

    test('peek should work with 3 element', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      const node = stack.peek();
      expect(stack.head.data).toBe(3);
      expect(stack.length).toBe(3);
      expect(stack.tail.data).toBe(1);
      expect(node.data).toBe(3);
    });

    test('peek should work with 4 element', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      const node = stack.peek();
      expect(stack.head.data).toBe(4);
      expect(stack.length).toBe(4);
      expect(stack.tail.data).toBe(1);
      expect(stack.head.next.data).toBe(3);
      expect(node.data).toBe(4);
    });
  });
});
