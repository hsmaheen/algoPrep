import { Stack } from '../Implementation/stack';

export function findStackData(data, stack) {
  if (!data || !stack || stack.head === null) {
    return false;
  }

  const tempStack = new Stack();
  let isFound = false;
  while (stack.length !== 0) {
    const node = stack.pop();
    tempStack.push(node.data);
    if (node.data === data) {
      isFound = true;
      break;
    }
  }

  while (tempStack.length !== 0) {
    const node = tempStack.pop();
    stack.push(node.data);
  }

  return isFound;
}
