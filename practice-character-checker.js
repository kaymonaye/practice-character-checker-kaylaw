const readlineSync = require('readline-sync');

const input = readlineSync.question('Enter a word or phrase: ');
const index = Number(readlineSync.question('Enter an index number: '));
const character = input[index];
console.log(`Character at index ${index}: ${character}`);
