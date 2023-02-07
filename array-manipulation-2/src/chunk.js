/* exported chunk */
function chunk(array, size) {
  if (size > array.length) {
    return array;
  }
  switch (size) {
    case 1:
      var caseOneArr = [];
      for (var i = 0; i < array.length; i++) {
        var arrOne = [array[i]];
        caseOneArr.push(arrOne);
      }
      return caseOneArr;
    case 2:
      var caseTwoArr = [];
      var chunkTwo = [];
      for (var k = 0; k < array.length; k += size) {
        var arrTwoOne = array[k];
        var arrTwoTwo = array[k + 1];
        if (arrTwoTwo === undefined) {
          chunkTwo.push(arrTwoOne);
          caseTwoArr.push(chunkTwo);
          chunkTwo = [];
        } else {
          chunkTwo.push(arrTwoOne, arrTwoTwo);
          caseTwoArr.push(chunkTwo);
          chunkTwo = [];
        }
      }
      return caseTwoArr;
    case 3:
      var caseThreeArr = [];
      var chunkThree = [];
      for (var y = 0; y < array.length; y += size) {
        var arrThreeOne = array[y];
        var arrThreeTwo = array[y + 1];
        var arrThreeThree = array[y + 2];
        if (arrThreeTwo === undefined && arrThreeThree === undefined) {
          chunkThree.push(arrThreeOne);
          caseThreeArr.push(chunkThree);
          chunkThree = [];
        } else {
          chunkThree.push(arrThreeOne, arrThreeTwo, arrThreeThree);
          caseThreeArr.push(chunkThree);
          chunkThree = [];
        }
      }
      return caseThreeArr;
  }
}
