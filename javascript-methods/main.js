var a = 7;
var b = 8;
var c = 10;
var maximumValue = Math.max(a, b, c);
console.log('value of maximumValue:', maximumValue);
var heroes = ['Thor', 'Spiderman', 'Batman', 'Black Panther'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling'
  },
  {
    title: "Can't hurt me",
    author: 'David Goggins'
  },
  {
    title: 'Green Eggs and Ham',
    author: 'Dr. Seuss'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Justin Song';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase(firstName);
console.log('value of sayMyName:', sayMyName);
