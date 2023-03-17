import * as fs from 'node:fs/promises';

const [, , file] = process.argv;
fs.readFile(file, 'utf8')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
