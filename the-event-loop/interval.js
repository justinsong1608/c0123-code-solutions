let count = 3;
const interval = setInterval(blastOff, 1000);

function blastOff() {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(interval);
  }
}
