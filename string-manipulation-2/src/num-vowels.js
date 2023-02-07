/* exported numVowels */
function numVowels(string) {
  var count = 0;
  var newString = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (newString[i] === 'a' || newString[i] === 'e' || newString[i] === 'i' || newString[i] === 'o' || newString[i] === 'u') {
      count++;
    }
  }
  return count;
}
