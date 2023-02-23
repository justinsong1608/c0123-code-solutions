/* exported difference */
function difference(first, second) {
  var newArr = [];
  var togetherArr = first.concat(second);
  for (var i = 0; i < togetherArr.length; i++) {
    if (!newArr.includes(togetherArr[i])) {
      newArr.push(togetherArr[i]);
    } else if (newArr.includes(togetherArr[i])) {
      for (var k = 0; k < newArr.length; k++) {
        if (newArr[k] === togetherArr[i]) {
          newArr.splice(k, 1);
        }
      }
    }
  }
  return newArr;
}
