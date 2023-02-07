/* exported drop */
function drop(array, count) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (i >= count) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
