// [2016-10-17] Challenge #288 [Easy] Detecting Alliteration
"use strict";
var fs = require('fs');

// get stop words from other file and clean/format into array of strings
let stopWords = fs.readFileSync('stopWords.txt', 'utf8');
stopWords = stopWords.replace(/\r\n/g, ' ').split(' ');
stopWords = stopWords.filter((n) => {return n.length > 0});

console.log(stopWords);