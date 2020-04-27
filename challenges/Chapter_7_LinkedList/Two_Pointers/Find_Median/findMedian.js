import { LinkedList } from '../../Implementation/linkedList';

export function getMedian(list = new LinkedList()) {
  if (!list.head) {
    return null;
  }

  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
