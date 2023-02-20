/* exported reverseWords */
function reverseWords(string) {
  var newStr = string.split(' ');
  var arr = [];
  for (var i = 0; i < newStr.length; i++) {
    var individual = newStr[i].split('');
    for (var j = individual.length - 1; j >= 0; j--) {
      arr.push(individual[j]);
      if (j === 0) {
        arr.push(' ');
      }
    }
  }
  arr.splice(arr.length - 1, 1);
  return arr.join('');
}
