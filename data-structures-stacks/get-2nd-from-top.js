export default function get2ndFromTop(stack) {
  let second;
  if (stack.peek() !== undefined) {
    const top = stack.pop();
    second = stack.peek();
    stack.push(top);
  }
  return second;
}
