import * as fs from 'node:fs/promises';

const data = Math.random() + '\n';

fs.writeFile('random.txt', data)
  .catch((error) => {
    console.error(error);
  });
