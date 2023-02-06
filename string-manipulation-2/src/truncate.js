/* exported truncate */
function truncate(length, string) {
  var cut = string.slice(0, length);
  return cut + '...';
}
