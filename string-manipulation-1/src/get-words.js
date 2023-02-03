/* exported getWords */
function getWords(string) {
  var emptyArr = [];
  if (string === '') {
    return emptyArr;
  }
  return string.split(' ');
}
