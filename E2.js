/**
 * Write a fuction which will accept two array and return new merged array. 
 * 
 * For Example
 * a= [1,2,3]
 * b= [4,5,6]
 * Input  : arrayMerged(a,b)
 * Output : [1,2,3,4,5,6]
 * 
 */
// run script -> node E2.js

function mergedArrayEx(params) {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const result = array1.concat(array2);
    console.log("merged array result =>", result);
}

mergedArrayEx();