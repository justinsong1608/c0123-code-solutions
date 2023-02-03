/* exported reverseWord */
function reverseWord(word) {
  var normalArr = [];
  var backArr = [];
  var backText = '';
  for (var i = 0; i < word.length; i++) {
    normalArr.push(word[i]);
  }
  for (var k = word.length - 1; k >= 0; k--) {
    backArr.push(normalArr[k]);
  }
  for (var t = 0; t < word.length; t++) {
    backText += backArr[t];
  }
  return backText;
}
