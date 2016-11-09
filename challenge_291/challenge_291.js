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
var arrayNum = [];
array.forEach(function(item){
	arrayNum.push(item.map(Number));
});

var 	goldilocksWeight = arrayNum[0][0],
		goldilocksTemp   = arrayNum[0][1];

// remove goldilocks from the array now that we already have her stored
arrayNum.splice(0,1);

var results = [];

arrayNum.forEach(function (item, index) {
	if (goldilocksWeight <= item[0] && goldilocksTemp >= item[1]){
		console.log(index + 1);
	}
});

