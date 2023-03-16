function filter(array, predicate) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
