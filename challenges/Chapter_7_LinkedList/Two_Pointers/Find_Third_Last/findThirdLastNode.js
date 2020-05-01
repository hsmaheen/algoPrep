export function findThirdLastNode(list) {
  if (list.head === null || list === null) {
    return null;
  }

  let slow = list.head;
  let fast = list.head;
  if (slow.next && slow.next.next) {
    fast = slow.next.next;

    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  } else {
    return null;
  }
}
