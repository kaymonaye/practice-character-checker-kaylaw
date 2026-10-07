const readlineSync = require('readline-sync');

let input = readlineSync.question('Enter a word or phrase: ');
let index = Number(readlineSync.question('Enter an index number: '));
let character = input[index];
console.log(`Character at index ${index}: ${character}`);
