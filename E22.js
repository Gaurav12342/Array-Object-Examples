{/*
    Given array of integers. find the sum of its element.

    For example, if the array arrayData = [1,2,3], 1+2+3=6, so return 6
    
    Function Description

    Complete the simpleArraySum function in the editor below.
    it must return the sum of the array elements as an integer.

    simpleArraySum has the following parameter(s):
*/}
const simpleArraySum = (arr) => {
    let result = arr.reduce((prev, cur) => prev + cur, 0);
    console.log("Result", result);
}
const arrayData = [2, 2, 4, 3];
simpleArraySum(arrayData);