/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newArr = string.split('');
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newArr[i] = string[secondIndex];
    } else if (i === secondIndex) {
      newArr[i] = string[firstIndex];
    }
  }
  return newArr.join('');
}
