function map(array, transform) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(transform(array[i]));
  }
  return newArr;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

console.log(map(numbers, (num) => num * 2));
console.log(map(numbers, (num) => `$${num.toFixed(2)}`));
console.log(map(languages, (language) => language.toUpperCase()));
console.log(map(languages, (letter) => letter.charAt(0)));
