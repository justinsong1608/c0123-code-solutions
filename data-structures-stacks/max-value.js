export default function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let biggest = stack.pop();
  while (stack.peek() !== undefined) {
    if (stack.peek() > biggest) {
      biggest = stack.peek();
    }
    stack.pop();
  }
  return biggest;
}
