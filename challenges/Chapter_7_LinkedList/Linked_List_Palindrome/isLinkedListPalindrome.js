export function isLinkedListAPalindrome(headNode) {
  if (headNode === null) {
    return null;
  }
  let median = findMedianNode(headNode);
  let revMed = reverseList(median);
  while (revMed != null && headNode != null) {
    if (revMed.data !== headNode.data) {
      return false;
    }
    revMed = revMed.next;
    headNode = headNode.next;
  }

  return true;
}

function findMedianNode(head) {
  if (head === null) {
    return null;
  }

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function reverseList(node) {
  if (node === null) {
    return null;
  }

  let prev = null;
  let curr = node;

  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
