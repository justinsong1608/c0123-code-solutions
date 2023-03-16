import * as fs from 'node:fs/promises';

fs.readFile('dijkstra.txt', 'utf8')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
