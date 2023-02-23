/* exported intersection */
function intersection(first, second) {
  var newArr = [];
  var answer = [];
  var togetherArr = first.concat(second);
  for (var i = 0; i < togetherArr.length; i++) {
    if (!newArr.includes(togetherArr[i])) {
      newArr.push(togetherArr[i]);
    } else if (newArr.includes(togetherArr[i])) {
      answer.unshift(togetherArr[i]);
    }
  }
  return answer;
}
