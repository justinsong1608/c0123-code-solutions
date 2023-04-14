export default function swapFront(list) {
  const current = list;
  if (current.next !== null) {
    const newList = current.next;
    current.next = current.next.next;
    newList.next = current;
    return newList;
  }
  return list;
}
