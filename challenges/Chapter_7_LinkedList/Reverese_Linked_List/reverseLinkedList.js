import { LinkedList } from '../Implementation/linkedList';
export function reverseLinkedList(list) {
  if (list.head === null) {
    return null;
  }

  let prev = null;
  const head = list.head;
  let curr = head;
  let newTail = head;

  while (curr != null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  list.head = prev;
  list.tail = newTail;
  list.tail.next = null;
}
