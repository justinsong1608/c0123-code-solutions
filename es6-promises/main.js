import takeAChance from './take-a-chance.js';

takeAChance('Justin')
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.error(reason.message);
  });
