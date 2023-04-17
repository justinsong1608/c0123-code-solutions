import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers(numbers)', () => {
  it('returns a new array that contains only the even numbers in the given array', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });

  it('returns negative even numbers', () => {
    const numbers = [-3, -4, -9, -10];
    const result = evenNumbers(numbers);
    expect(result).toEqual([-4, -10]);
  });

  it('does not return non-integers', () => {
    const numbers = [1, 4.3, 6, 9, 10.2];
    const result = evenNumbers(numbers);
    expect(result).toEqual([6]);
  });

});

describe('toDollars(amount)', () => {
  it('returns a number formatted in dollars and cents', () => {
    const number = 10;
    const result = toDollars(number);
    expect(result).toEqual('$10.00');
  });

  it('takes negative numbers', () => {
    const number = -10;
    const result = toDollars(number);
    expect(result).toEqual('-$10.00');
  });

  it('takes non-integers', () => {
    const number = 10.3;
    const result = toDollars(number);
    expect(result).toEqual('$10.30');
  });

  it('takes non-integers that has more than 2 decimal places', () => {
    const number = 10.68225;
    const result = toDollars(number);
    expect(result).toEqual('$10.68');
  });
});

describe('divideBy(numbers, divisor)', () => {
  it('returns a new array of numbers where every entry has been divide by the given divisor. Does not modify the original array', () => {
    const numbers = [1, 2, 5, 8, 10, 15];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([0.5, 1, 2.5, 4, 5, 7.5]);
  });

  it('takes negative numbers', () => {
    const numbers = [-1, -2, -5, -8, -10, -15];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([-0.5, -1, -2.5, -4, -5, -7.5]);
  });
});

describe('multiplyBy(obj, multiplier)', () => {
  it('modifies an object by multiplying the value of each key, but only if that value is a number. Key names are arbitrary', () => {
    const obj = {
      dog: 10,
      bird: 'eleven',
      cat: 8
    };
    const multiplier = 3;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ dog: 30, bird: 'eleven', cat: 24 });
  });

  it('only multiplies numbers and does not take NaN', () => {
    const obj = {
      dog: 10,
      bird: {
        one: 1,
        two: 2
      },
      cat: [1, 2, 3],
      snake: 5,
      kevin: NaN
    };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ dog: 20, bird: { one: 1, two: 2 }, cat: [1, 2, 3], snake: 10, kevin: NaN });
  });
});
