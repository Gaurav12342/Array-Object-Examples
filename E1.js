/**
 * Write a fuction which will accept array and return length of array. 
 * if any one pass non-array value then it will return this is not array 
 * 
 * For Example
 * 
 * Input  : arrayCheck([1,2,3,3])
 * Output : 4
 * 
 * Input  : arrayCheck('Hello')
 * Output : You have pass string you need to pass Array 
 * 
 * 
 * Input  : arrayCheck(2)
 * Output : You have pass number you need to pass Array
 */

// run script -> node E1.js

function checkArray(params) {
    if (Array.isArray(params)) {
        console.log("It is array and lenght is ->", params.length);
    } else if (parseInt(params)) {
        console.log("You have pass number you need to pass Array");
    } else {
        console.log("You have pass string you need to pass Array ");
    }
};
checkArray("1");

