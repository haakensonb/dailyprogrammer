// [2016-11-21] Challenge #293 [Easy] Defusing the bomb
'use strict';
let input = `
white
red
green
white
`;

input = input.trim().split('\n');
// each input has an array of acceptable follow up inputs
var rules = {
    white: ['red', 'orange', 'green', 'purple'],
    red: ['green'],
    black: ['red', 'black', 'purple'],
    orange: ['red', 'black'],
    green: ['orange', 'white'],
    purple: ['red', 'black']
};

function defuse () {
    for (let i = 0; i < input.length; i++){
        //if it passed the second to last input without blowing up, it is defused
        if (i === input.length - 1) {
            return 'Bomb defused';
        } else if (check(input[i], input[i + 1]) === false){
            return 'boom'
        }
    }
}


function check (curr, next) {
    return myIncludes(rules[curr], next);
}

function myIncludes (rule, next) {
    if (rule.indexOf(next) === -1) {
        return false;
    } else {
        return true;
    }
}

console.log(defuse());
