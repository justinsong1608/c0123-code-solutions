/* exported equal */
function equal(first, second) {
  var firstString = JSON.stringify(first);
  var secondString = JSON.stringify(second);
  if (firstString === secondString) {
    return true;
  } else {
    return false;
  }
}
