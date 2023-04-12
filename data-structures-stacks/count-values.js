export default function countValues(stack) {
  let answer = 0;
  while (stack.pop() !== undefined) {
    answer++;
  }
  return answer;
}
