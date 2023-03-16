import * as fs from 'node:fs';

const [, , file] = process.argv;
fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
