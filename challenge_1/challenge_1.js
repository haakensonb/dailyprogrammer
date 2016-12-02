// dailyprogrammer challenge #1
var readlineSync = require('readline-sync');

var name = readlineSync.question("name? ");

var age = readlineSync.question("age? ");

var username = readlineSync.question("username? ");

console.log("Your name is " + name + ", you are " + age + " years old, and your username is " + username);