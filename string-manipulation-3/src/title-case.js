/* exported titleCase */
function titleCase(title) {
  var minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  var newArr = title.split(' ');
  for (var k = 0; k < newArr.length; k++) {
    newArr[k] = newArr[k].toLowerCase();
  }
  var firstWord = newArr.splice(0, 1);
  var stringFirstWord = firstWord.toString();
  var emptyFirstString;
  if (stringFirstWord === 'javascript:') {
    emptyFirstString = 'JavaScript:';
  } else if (stringFirstWord === 'Api') {
    emptyFirstString = 'API';
  } else {
    var capFirstWord = stringFirstWord[0].toUpperCase();
    emptyFirstString = stringFirstWord.replace(stringFirstWord[0], capFirstWord);
  }
  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i] === 'javascript' || newArr[i] === 'Javascript') {
      newArr[i] = 'JavaScript';
    }
    if (newArr[i] === 'javascript:') {
      newArr[i] = 'JavaScript:';
    }
    if (newArr[i] === 'api') {
      newArr[i] = 'API';
    }
    if (minor.includes(newArr[i])) {
      newArr[i] = newArr[i].toLowerCase();
    } else {
      newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substr(1);
    }
  }
  newArr.splice(0, 0, emptyFirstString);
  var unfinishedTitle = newArr.join(' ');

  var dashArr = unfinishedTitle.split('-');
  for (var t = 0; t < dashArr.length; t++) {
    if (t === 1) {
      var afterDash = dashArr[1].split(' ');
      afterDash[0] = afterDash[0].charAt(0).toUpperCase() + afterDash[0].substr(1);
      var newDashTitle = afterDash.join(' ');
      dashArr.splice(1, 1, newDashTitle);
    }
  }
  var colonFix = dashArr.join('-');
  var colonArr = colonFix.split(':');
  for (var n = 0; n < colonArr.length; n++) {
    if (n === 1) {
      var afterColon = colonArr[1].split(' ');
      afterColon[1] = afterColon[1].charAt(0).toUpperCase() + afterColon[1].substr(1);
      var newColonTitle = afterColon.join(' ');
      colonArr.splice(1, 1, newColonTitle);
    }
  }
  return colonArr.join(':');

}
