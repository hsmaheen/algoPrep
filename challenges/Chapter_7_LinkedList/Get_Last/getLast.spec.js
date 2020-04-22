import { Node, LinkedList } from '../Implementation/linkedList';

describe('Get Last Implementation should work', () => {
  test('Should return null when linked list is empty', () => {
    const l = new LinkedList();
    expect(l.getLast()).toBe(null);
  });

  test('Should return the last node correctly ', () => {
    const l1 = new LinkedList();
    const nodeA = new Node('A');
    const nodeB = new Node('B');
    const nodeC = new Node('C');
    nodeA.next = nodeB;
    nodeB.next = nodeC;

    l1.head = nodeA;
    expect(l1.getLast()).toBe(nodeC);
  });

  test('Should return head node when there is only one node ', () => {
    const l1 = new LinkedList();
    const nodeA = new Node('A');
    l1.head = nodeA;
    expect(l1.getLast()).toBe(nodeA);
  });
});
