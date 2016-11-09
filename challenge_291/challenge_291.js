/*
[2016-11-07] Challenge #291 [Easy] Goldilocks' Bear Necessities
*/

/*
Read input file and turn string into more readable array i.e.
	[
		[weight, temp],
		[weight, temp]...
	]
*/
var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().replace(/\r/g, "").split('\n');
array = array.map(x => x.split(' '));
console.log(array);