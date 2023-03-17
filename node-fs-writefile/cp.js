import * as fs from 'node:fs/promises';

const source = process.argv[2];
const destination = process.argv[3];

fs.readFile(source)
  .then((data) => fs.writeFile(destination, data))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// try {
//   const data = await fs.readFile(source);
//   await fs.writeFile(destination, data);
// } catch (err) {
//   console.error(err);
//   process.exit(1);
// }
