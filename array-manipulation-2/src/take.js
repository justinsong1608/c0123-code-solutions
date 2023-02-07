/* exported take */
function take(array, count) {
  var newArr = [];
  if (count > array.length) {
    return [];
  }
  for (var i = 0; i < count; i++) {
    if (i < count) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
