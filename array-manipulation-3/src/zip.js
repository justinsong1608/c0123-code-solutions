/* exported zip */
function zip(first, second) {
  var newArr = [];
  if (first.length < second.length) {
    for (var i = 0; i < first.length; i++) {
      var arr = [];
      arr.push(first[i]);
      arr.push(second[i]);
      newArr.push(arr);
    }
  } else {
    for (var k = 0; k < second.length; k++) {
      var arrTwo = [];
      arrTwo.push(first[k]);
      arrTwo.push(second[k]);
      newArr.push(arrTwo);
    }
  }
  return newArr;
}
