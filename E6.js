/**
 * write function which accept two params value and array and its
 *  return the index of given value of array if value is 
 * not found from given array then return  "Not Found" 
 * 
 * write multiple function of possible way 
 * 
 * For Example
 * a= [4,6,8,10,12,14,2,6,3,2,4,7]
 * Input  : arrayCheck(222, a)
 * Output : not found
 * 
 * 
 * a= [4,6,8,10,12,14,2,6,3,2,4,7]
 * Input  : arrayCheck(8, a)
 * Output : 2
 * 
 */

// Solution-1
const checkArrayValue1 = (value, arrayValue) => {
    let result;
    let findValue = arrayValue.findIndex((dd) => {
        return dd === value
    })
    if (findValue !== -1) {
        result = findValue;
    } else {
        result = "Not Found..!";
    }

    console.log("result solution-1", result);
}

// Solution-2
const checkArrayValue2 = (value, arrayValue) => {

    let findValue = arrayValue.indexOf(value);

    if (findValue !== -1) {
        result = findValue;
    } else {
        result = "Not Found..!";
    }

    console.log("result solution-2", result);
}

let a = [4, 6, 8, 10, 12, 14, 2, 6, 3, 2, 4, 7]
checkArrayValue1(10, a);
checkArrayValue2(100, a);
