var student = {
  firstName: 'Justin',
  lastName: 'Song',
  age: 23
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'teacher';

console.log('value of livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 2017
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of color: ', vehicle['color']);
console.log('value of isConvertible: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Mandu',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
