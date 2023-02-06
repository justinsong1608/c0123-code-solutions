/* exported capitalizeWords */
function capitalizeWords(string) {
  var allLowerCase = string.toLowerCase();
  var newArr = allLowerCase.split(' ');
  for (var i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substr(1);
  }
  return newArr.join(' ');
}
