export default function updateNext(list, value) {
  if (list.next !== null) {
    list.next.data = value;
  }
}
