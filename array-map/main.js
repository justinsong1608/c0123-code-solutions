const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map((num) => num * 2);
console.log('Doubled:', doubled);

const prices = numbers.map((num) => '$' + num.toString() + '.00');
console.log('Prices:', prices);

const upperCased = languages.map((language) => language.toUpperCase());
console.log('Uppercased:', upperCased);

const firstLetters = languages.map((letter) => letter.charAt(0));
console.log('First Letter:', firstLetters);
