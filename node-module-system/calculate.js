import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const [, , firstNum, , secondNum] = process.argv;
const num1 = Number(firstNum);
const num2 = Number(secondNum);
switch (process.argv[3]) {
  case 'plus':
    console.log('result:', add(num1, num2));
    break;
  case 'minus':
    console.log('result:', subtract(num1, num2));
    break;
  case 'over':
    console.log('result:', divide(num1, num2));
    break;
  case 'times':
    console.log('result:', multiply(num1, num2));
    break;
  default:
    console.log('invalid operation');
}
