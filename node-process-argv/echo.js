console.log(process.argv[2]);

const [, , ...msg] = process.argv;
console.log(msg.join(' '));
