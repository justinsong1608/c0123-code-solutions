/* exported omit */
function omit(source, keys) {
  var newObj = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
