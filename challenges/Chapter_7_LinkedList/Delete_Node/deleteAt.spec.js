import { LinkedList, Node } from '../Implementation/linkedList';

describe('Delete Node Implementation should work', () => {
  test('delete should not break when linked list is empty', () => {
    const linkedList = new LinkedList();
    linkedList.deleteAt(1);
    expect(linkedList.convertListToArray()).toEqual([]);
  });
  test('should delete node when there is only node', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.deleteAt(0);
    expect(linkedList.convertListToArray()).toEqual([]);
  });

  test('should delete head node', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.deleteAt(0);
    expect(linkedList.convertListToArray()).toEqual([2]);
  });

  test('should delete node in between', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);
    linkedList.deleteAt(2);
    expect(linkedList.convertListToArray()).toEqual([1, 2, 4, 5]);
  });
});
