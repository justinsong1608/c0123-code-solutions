export default function takeNextSmallest(numberQueue) {
  let answer = numberQueue.dequeue();
  while (numberQueue.peek() !== undefined) {
    const compareValue = numberQueue.peek();
    if (answer <= compareValue) {
      return answer;
    } else {
      numberQueue.enqueue(answer);
      answer = numberQueue.dequeue();
    }
  }
  return answer;

  // Robert's solution
  // let nextSmallest = numberQueue.dequeue();
  // while (nextSmallest > numberQueue.peek()) {
  //   numberQueue.enqueue(nextSmallest);
  //   nextSmallest = numberQueue.dequeue();
  // }
  // return nextSmallest;
}
