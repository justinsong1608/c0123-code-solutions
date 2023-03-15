import takeAChance from './take-a-chance.js';

const user = takeAChance('Justin');

user
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.error(reason.message);
  });
