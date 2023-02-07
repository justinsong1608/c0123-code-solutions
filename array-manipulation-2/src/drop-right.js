/* exported dropRight */
function dropRight(array, count) {
  var newArr = [];
  if (count > array.length) {
    return array;
  }
  var ridNum = array.length - count;
  for (var i = 0; i < ridNum; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
