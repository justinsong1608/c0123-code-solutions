/* exported capitalizeWord */
function capitalizeWord(word) {
  var allLowCase = word.toLowerCase();
  var firstWordCap = word[0].toUpperCase();
  var newWord = allLowCase.replace(allLowCase[0], firstWordCap);
  if (newWord === 'Javascript') {
    return newWord.replace(newWord[4], 'S');
  }
  return newWord;
}
