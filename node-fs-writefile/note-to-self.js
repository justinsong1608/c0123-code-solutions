import * as fs from 'node:fs';

const data = process.argv[2];

fs.writeFile('note.txt', data + '\n', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
