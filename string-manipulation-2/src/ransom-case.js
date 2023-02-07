/* exported ransomCase */
function ransomCase(string) {
  var newWord = '';
  for (var i = 0; i < string.length; i++) {
    if ((i % 2) === 1) {
      newWord += string[i].toUpperCase();
    } else {
      newWord += string[i].toLowerCase();
    }
  }
  return newWord;
}
