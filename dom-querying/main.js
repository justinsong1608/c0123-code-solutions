console.log('hello, world');

var one = document.querySelector('h1');
console.log('$heading', one);
console.dir(one);

var two = document.querySelector('#explanation');
console.log('$explanation', two);
console.dir(two);

var three = document.querySelector('.hint');
console.log('$hint', three);
console.dir(three);

var four = document.querySelectorAll('p');
console.log('$paragraphs', four);

var five = document.querySelectorAll('.example-link');
console.log('$links', five);
