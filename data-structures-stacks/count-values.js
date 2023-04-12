export default function countValues(stack) {
  let answer = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    answer++;
  }
  return answer;
}
