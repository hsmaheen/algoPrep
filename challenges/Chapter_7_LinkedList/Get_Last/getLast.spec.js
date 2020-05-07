import { Node, LinkedList } from '../Implementation/linkedList';

describe('Get Last Implementation should work', () => {
  test('Should return null when linked list is empty', () => {
    const l = new LinkedList();
    expect(l.getLast()).toBe(null);
  });

  test('Should return the last node correctly ', () => {
    const l1 = new LinkedList();
    l1.append('A');
    l1.append('B');
    l1.append('C');

    expect(l1.getLast().data).toBe('C');
  });

  test('Should return head node when there is only one node ', () => {
    const l1 = new LinkedList();
    l1.append('A');
    expect(l1.getLast().data).toBe('A');
    expect(l1.getLast().next).toBe(null);
  });
});
