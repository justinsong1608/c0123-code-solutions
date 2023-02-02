/* exported filterOutStrings */
function filterOutStrings(values) {
  var newValues = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number' || typeof values[i] === 'object') {
      newValues.push(values[i]);
    }
  }
  return newValues;
}
