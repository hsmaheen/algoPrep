import { Node, LinkedList } from '../Implementation/linkedList';

describe('Linked List Append implementation should work', () => {
  test('should append node to the head when linked list is empty', () => {
    const l = new LinkedList();
    l.append('A');
    expect(l.head.data).toBe('A');
    expect(l.head.next).toBe(null);
  });

  test('should append node to the head when linked list is not empty', () => {
    const l = new LinkedList();
    l.append('A');
    l.append('B');
    l.append('C');
    expect(l.head.data).toBe('A');
    expect(l.head.next.data).toBe('B');
    expect(l.head.next.next.data).toBe('C');
  });
});
