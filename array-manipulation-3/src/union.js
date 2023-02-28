/* exported union */
function union(first, second) {
  var togetherArr = first.concat(second);
  var newArr = [];
  for (var i = 0; i < togetherArr.length; i++) {
    if (!newArr.includes(togetherArr[i])) {
      newArr.push(togetherArr[i]);
    }
  }
  return newArr;
}
