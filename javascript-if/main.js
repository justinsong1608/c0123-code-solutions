/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  var even = number % 2;
  if (even === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  var j = string.charAt(0);
  if (j === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  var legal = person.age;
  if (legal >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  var legalDriveAge = person.age;
  if (legalDriveAge >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'netural';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko') {
    return "We're the warner Brothers!";
  } else if (name === ' wakko') {
    return "We're the warner Brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
