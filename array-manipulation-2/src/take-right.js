/* exported takeRight */
function takeRight(array, count) {
  var newArr = [];
  if (count > array.length) {
    return array;
  }
  var ridNum = array.length - count;
  for (var i = ridNum; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
