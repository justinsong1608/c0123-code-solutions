var array = [
  {
    isbn: '1544512287',
    title: "Can't Hurt Me",
    Author: 'David Goggins'
  },
  {
    isbn: '081298160X',
    title: 'The Power of Habit',
    Author: 'Charles Duhigg'
  },
  {
    isbn: '1338865390',
    title: 'The Adventures of Captain Underpants',
    Author: 'Dav Pilkey'
  }
];

console.log('array:', array);
console.log('array typeof:', typeof array);

console.log('JSON.stringify:', JSON.stringify(array));
console.log('JSON.stringify typeof:', JSON.stringify(array));

var student = '{ "Number id": "12345678", "Name": "Justin Song"}';

console.log('student:', student);
console.log('student typeof:', typeof student);

var obj = JSON.parse(student);

console.log('obj:', obj);
console.log('obj typeof:', typeof obj);
