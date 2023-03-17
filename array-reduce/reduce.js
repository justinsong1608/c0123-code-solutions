function reduce(array, reducer, initialValue) {
  let startValue = initialValue !== undefined ? initialValue : array[0];
  if (initialValue === undefined) {
    for (let i = 1; i < array.length; i++) {
      startValue = reducer(startValue, array[i]);
    }
    return startValue;
  } else {
    for (let i = 0; i < array.length; i++) {
      startValue = reducer(startValue, array[i]);
    }
    return startValue;
  }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

console.log(numbers, (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(numbers, (accumulator, currentValue) => accumulator * currentValue, 0);
console.log(account, (accumulator, currentValue) => currentValue.type === 'deposit' ? accumulator + currentValue.amount : accumulator - currentValue.amount, 0);
console.log(traits, (accumulator, currentValue) => Object.assign(accumulator, currentValue), {});
