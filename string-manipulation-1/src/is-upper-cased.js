/* exported isUpperCased */
function isUpperCased(word) {
  var allUpperCase = word.toUpperCase();
  if (word === allUpperCase) {
    return true;
  }
  return false;
}
