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
