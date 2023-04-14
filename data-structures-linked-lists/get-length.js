export default function getLength(list) {
  let length = 0;
  let current = list;
  while (current !== null) {
    length++;
    current = current.next;
  }
  return length;
}
