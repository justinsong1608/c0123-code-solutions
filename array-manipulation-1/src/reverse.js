/* exported reverse */
function reverse(array) {
  var newArr = [];
  var lastIndex = array.length - 1;
  for (var i = lastIndex; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}
