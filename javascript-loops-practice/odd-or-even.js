/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddEvenArray = [];
  for (var i = 0; i < numbers.length; i++) {
    var oddEven = numbers[i] % 2;
    if (oddEven === 1) {
      oddEvenArray.push('odd');
    } else {
      oddEvenArray.push('even');
    }
  }
  return oddEvenArray;
}
