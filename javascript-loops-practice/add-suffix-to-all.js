/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var arrayNew = [];
  for (var i = 0; i < words.length; i++) {
    var newWord = words[i] + suffix;
    arrayNew.push(newWord);
  }
  return arrayNew;
}
