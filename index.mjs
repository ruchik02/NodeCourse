// npm is a package manager for the javascript programming language it is the default package manager for the javascript runtime  environement Node.js.


import chalk from 'chalk';
import validator from 'validator';
console.log(chalk.red.bgCyan.underline.italic('hello world'));
const res=validator.isEmail("ruchikaruchika.com");
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));