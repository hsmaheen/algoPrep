import { Node, LinkedList } from '../Implementation/linkedList';

describe('Get At Index implementation should work', () => {
  test('Should return null when linked list is empty', () => {
    const l = new LinkedList();
    expect(l.getAt(0)).toBe(null);
    expect(l.getAt(5)).toBe(null);
  });

  test('Should return correct node according to the index ', () => {
    const l = new LinkedList();
    const nodeA = new Node('A');
    const nodeB = new Node('B');
    const nodeC = new Node('C');
    nodeA.next = nodeB;
    nodeB.next = nodeC;

    l.head = nodeA;
    expect(l.getAt(0)).toBe(nodeA);
    expect(l.getAt(1)).toBe(nodeB);
    expect(l.getAt(2)).toBe(nodeC);
    expect(l.getAt(5)).toBe(null);
  });
});
