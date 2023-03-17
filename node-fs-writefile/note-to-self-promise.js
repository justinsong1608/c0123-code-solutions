import * as fs from 'node:fs/promises';

const data = process.argv[2];

fs.writeFile('note.txt', data + '\n')
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
