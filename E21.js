{/*
Given array of integers, calculate the fractions of it's elemets that are positive, negative, and are zeros. Print the decimal value of of each
fraction on a new line.

Note: This challenge introduce precision problem. The test cases are scaled to six decimal places. thiugh answer with absolute error of up
to 10^-4 are acceptable.

For example, given the array arr=[1, 1, 0, -1, -1] there are 5 elements, two positive, tow negative and zero. Their ratios would be 2/5, 2/5 and 1/5
it should be printed as

0.400000
0.400000
0.200000

Functiona Description

Complete the plusMinus functions in the it should print out the ratio of positive, negative and zero items in the array.
each on a separate line rounded to six decimals.
*/}


const plusMins = (arr) => {
    let values = [0, 0, 0];
    let posValue = 0, negValue = 0, zeroValue = 0;
    arr.map((dd) => {
        if (dd > 0) {
            values[0]++;
        } else if (dd < 0) {
            values[1]++;
        } else {
            values[2]++;
        }
    })

    posValue = (values[0] / arr.length).toFixed(6);
    negValue = (values[1] / arr.length).toFixed(6);
    zeroValue = (values[2] / arr.length).toFixed(6);

    console.log("posValue =>", posValue);
    console.log("negValue =>", negValue);
    console.log("zeroValue =>", zeroValue);
}

const arrayData = [1, 1, 0, -1, -1];
plusMins(arrayData)