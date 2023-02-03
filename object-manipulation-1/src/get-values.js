/* exported getValues */
function getValues(object) {
  var newArr = [];
  for (var key in object) {
    newArr.push(object[key]);
  }
  return newArr;
}
