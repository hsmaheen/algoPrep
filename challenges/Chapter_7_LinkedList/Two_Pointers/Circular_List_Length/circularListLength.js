import { LinkedList } from '../../Implementation/linkedList';

export function getCircularListLength(list = new LinkedList()) {
  if (!list.head) {
    return null;
  }

  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  if (slow !== fast) {
    return -1;
  }

  let counter = 1;
  slow = slow.next;
  while (slow !== fast) {
    counter++;
    slow = slow.next;
  }
  return counter;
}
