/* exported initial */
function initial(array) {
  var newArr = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
