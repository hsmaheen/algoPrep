export function getCircleStart(list) {
  if (!list.head) {
    return null;
  }

  const linkedListLength = getCircularListLength(list);
  if (linkedListLength === -1) {
    return null;
  }

  let slow = list.head;
  let fast = list.head;
  for (let count = 0; count < linkedListLength; count++) {
    fast = fast.next;
  }

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

export function getCircularListLength(list = new LinkedList()) {
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
