/* exported getKeys */
function getKeys(object) {
  var newArr = [];
  for (var key in object) {
    newArr.push(key);
  }
  return newArr;
}
