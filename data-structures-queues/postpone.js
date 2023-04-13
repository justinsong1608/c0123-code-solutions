export default function postpone(queue) {
  if (queue.peek() !== undefined) {
    const value = queue.dequeue();
    queue.enqueue(value);
  }
}
