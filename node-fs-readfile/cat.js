import * as fs from 'node:fs/promises';

const [, , ...rest] = process.argv;

const pending = rest.map((file) => fs.readFile(file, 'utf8'));

Promise.all(pending)
  .then((data) => { console.log(data.join('\n')); })
  .catch((error) => { console.log(error); });
