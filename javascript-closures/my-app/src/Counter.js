import React, { useEffect, useState, useCallback } from 'react';

export default function Counter() {
  const getData = useCallback(() => {
    return { foo: 'bar' };
  }, []);

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    getData();
    setCounter((prev) => prev + 1);
  }, [getData]);

  // function getData() {
  //   // fetch data
  //   return { foo: 'bar' };
  // }

  return <div>Fetching {counter} times</div>;
}
