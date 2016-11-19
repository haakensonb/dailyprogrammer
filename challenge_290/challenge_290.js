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
    console.log(range);
    range.map(function (num) {
        if (isKaprekar(num)){
            kaprekarNums.push(num);
        }
    });
    console.log(kaprekarNums);
}

function isKaprekar(num) {
    let square = num * num;
    // console.log(square);
    let sqrStr = String(square);
    let part1 = sqrStr.slice(0,sqrStr.length / 2);
    let part2 = sqrStr.slice(sqrStr.length / 2, sqrStr.length);
    if (Number(part1) + Number(part2) === Number(num)){
        return true;
    }
}

kaprekar(1,50);

// isKaprekar needs to be fixed so that parts are dynamic and not just halves, otherwise it works