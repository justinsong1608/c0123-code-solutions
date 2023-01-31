function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

function greet(name) {
  return 'Hey, ' + name;
}

function getArea(width, height) {
  return width * height;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('value of converMinutesToSeconds:', convertMinutesToSeconds(5));
console.log('value of greet:', greet('Beavis'));
console.log('value of getArea:', getArea(17, 42));
console.log('value of getFirstName:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log('value of getLastElement:', getLastElement(['propane', 'and', 'propane', 'accessories']));
