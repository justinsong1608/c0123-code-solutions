export default function takeSmaller(queue) {
  let smaller = queue.dequeue();
  if (queue.peek() !== undefined) {
    const compareValue = queue.dequeue();
    if (smaller > compareValue) {
      queue.enqueue(smaller);
      smaller = compareValue;
    } else if (smaller <= compareValue) {
      queue.enqueue(compareValue);
    }
  }
  return smaller;
}
