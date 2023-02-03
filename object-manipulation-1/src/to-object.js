/* exported toObject */
function toObject(keyValuePair) {
  var property = keyValuePair[0];
  var value = keyValuePair[1];
  var newObject = {};
  newObject[property] = value;
  return newObject;
}
