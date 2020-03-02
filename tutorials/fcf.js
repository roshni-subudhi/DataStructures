// Passing functions as arguments

var year = [1990, 1956, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

var ages = arrayCalc(year, calculateAge);
console.log(ages);

console.log('FUNCTION AS ARGUMENT ENDS HERE')