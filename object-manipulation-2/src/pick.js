/* exported pick */
function pick(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (keys[i] === key && source[key] !== undefined) {
        newObj[keys[i]] = source[key];
      }
    }
  }
  return newObj;
}
