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

//Push strings into new array as numbers
var arrayNum = [];
array.forEach(function(item){
	arrayNum.push(item.map(Number));
});

//store goldilocks weigth and temperature
var 	goldilocksWeight = arrayNum[0][0],
		goldilocksTemp   = arrayNum[0][1];

// remove goldilocks from the array now that we already have her stored
arrayNum.splice(0,1);

arrayNum.forEach(function (item, index) {
	if (goldilocksWeight <= item[0] && goldilocksTemp >= item[1]){
		//add 1 to account for removing goldilocks
		console.log(index + 1);
	}
});

