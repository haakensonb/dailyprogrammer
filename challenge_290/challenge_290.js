// [2016-10-31] Challenge #290 [Easy] Kaprekar Numbers
'use strict';
function kaprekar(x, y) {
    //store the result
    let kaprekarNums = [];
    // store the range of the two inputs
    let range = [];
    // populate range
    for (let i = x; i <= y; i++){
        range.push(i);
    }
    range.map(function (num) {
        if (isKaprekar(num)){
            kaprekarNums.push(num);
        }
    });
    console.log(kaprekarNums);
}

function isKaprekar(num) {
    let square = num * num;
    // string version of square
    let sqrStr = String(square);
    // split string dynamically
    for (let i = 1; i <= sqrStr.length; i++){
        let part1 = sqrStr.slice(0,i);
        let part2 = sqrStr.slice(i);
        if(Number(part1) < 1 || Number(part2) < 1){
            return false;
        } else if (Number(part1) + Number(part2) === Number(num)){
            return true;
        }
    }
    
}

kaprekar(1,50);
kaprekar(2, 100);
kaprekar(101, 9000);