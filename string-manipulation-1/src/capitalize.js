/* exported capitalize */
function capitalize(word) {
  var allLowCase = word.toLowerCase();
  var firstWordCap = word[0].toUpperCase();
  return allLowCase.replace(allLowCase[0], firstWordCap);
}
