/* exported isPalindromic */
function isPalindromic(string) {
  var arr = string.split('');
  if (arr.includes(' ')) {
    var spaceArr = string.split(' ');
    var joinString = spaceArr.join('');
    var newSpaceArr = joinString.split('');
    var finalArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      finalArr.push(newSpaceArr[i]);
    }
    var finalBack = finalArr.join('');
    if (joinString === finalBack) {
      return true;
    } else {
      return false;
    }
  } else {
    var newArr = [];
    for (var k = arr.length - 1; k >= 0; k--) {
      newArr.push(arr[k]);
    }
    var backwards = newArr.join('');
    if (string === backwards) {
      return true;
    } else {
      return false;
    }
  }
}
