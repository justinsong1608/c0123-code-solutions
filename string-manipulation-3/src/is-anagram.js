/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var first = firstString.replaceAll(' ', '');
  var second = secondString.replaceAll(' ', '');
  var newFirst = first.split('').sort();
  var newSecond = second.split('').sort();
  var correct = 0;
  for (var i = 0; i < newFirst.length; i++) {
    if (newFirst[i] === newSecond[i]) {
      correct++;
    } else {
      return false;
    }
  }
  if (correct === newSecond.length) {
    return true;
  }
}
