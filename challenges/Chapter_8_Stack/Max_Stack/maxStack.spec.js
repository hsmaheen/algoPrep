import { MaxStack } from './maxStack';

describe('Max Stack implementation should work', () => {
  test('should be able to push elements into stack and get Max', () => {
    const stack = new MaxStack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(3);
    stack.push(3);
    stack.push(5);
    const maxNode = stack.getMax();
    expect(maxNode.data).toBe(5);
  });

  test('should ignore and not break when trying to insert numbers', () => {
    const stack = new MaxStack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push('rubbish');
    const maxNode = stack.getMax();
    expect(maxNode.data).toBe(3);
  });

  test('should be able to pop the stack', () => {
    const stack = new MaxStack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const node = stack.pop();
    expect(node.data).toBe(3);
  });

  test('should be able to pop the stack and return the correct max', () => {
    const stack = new MaxStack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.getMax().data).toBe(4);
    const node = stack.pop();
    expect(node.data).toBe(4);
    expect(stack.getMax().data).toBe(3);
  });

  test('should return null when there is no max', () => {
    const stack = new MaxStack();
    expect(stack.getMax()).toBe(null);
    expect(stack.pop()).toBe(null);
  });
});
