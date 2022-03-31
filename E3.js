/**
 * check array does not contain negative elements 
 * 
 * not allowed this method : filter, find, forEach and map and for loop
 * 
 * For Example
 * a= [1,2,3,4,5]
 * Input  : arrayCheck(a)
 * Output : true
 * 
 * * a= [1,2,3,4,-5]
 * Input  : arrayCheck(a)
 * Output : false
 * 
 */

// node E3.js

const checkValue = (value) => {
    let result = true;
    value?.length && value?.reduce((total, current) => {
        if (current < 0) {
            result = false
        }
        return result;
    })
    console.log("Output =>", result);
}

const a = [1, 2, 3, 4, 5, 6, 7, -8];
checkValue(a); 