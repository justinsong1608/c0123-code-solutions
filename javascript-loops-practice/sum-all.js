/* exported sumAll */

function sumAll(numbers) {
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    count += numbers[i];
  }
  return count;
}
