/* exported flatten */
function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var k = 0; k < array[i].length; k++) {
        newArr.push(array[i][k]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
