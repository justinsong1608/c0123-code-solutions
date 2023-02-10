/* exported defaults */
function defaults(target, source) {
  var tar = Object.keys(target);
  for (var key in source) {
    if (!tar.includes(key)) {
      target[key] = source[key];
    }
  }
}
