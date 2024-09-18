#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

// Character rules
const numbers = '1234567890';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const specialChar = '~!@#$%^&*()_+-={}[]:;"><,./?';

// Function
function createPassword(useUpperCase, useNumbers, useSpecialChar, length) {
// char specifications
    let Characters = lowerCase
    if (useNumbers) Characters += numbers;
    if (useSpecialChar) Characters += specialChar;
    if (useUpperCase) Characters += upperCase;
// length of pass
    let password = '';
    for (let i=0; i<length; i++) {
        const randomIndex = Math.floor(Math.random() * Characters.length);
    }
    return password;
}

// flags
program
  .version('1.0.0')
  .description('QAP1 - CLI app')
  .option('-l, --length <number>', 'Choose password length (default: 8)', 8)
  .option('-n, --numbers', 'includes numbers')
  .option('-u, --uppercase', 'includes upperrcase')
  .option('-s, --symbols', 'includes special character(s)')
  .helpOption('-h, --help', 'Choose password length and create password');

//parsing
program.parse(process.argv);
const options = program.opts();
const length = parseInt(options.length, 10);

// length
if (isNaN(length) || length <= 0) {
  console.error('Error - password length must be a number');
  process.exit(1);
}

// generation
const password = generatePassword(
  length,
  options.numbers || false,
  options.uppercase || false,
  options.symbols || false
);

// Actual password
console.log(`Your password is: ${password}`);