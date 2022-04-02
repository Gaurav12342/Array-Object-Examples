/**
 * returns the first element in the provided array that is odd number
 * 
 * For Example
 * a= [4,6,8,10,12,14,2,6,3,2,4,7]
 * Input  : arrayCheck(a)
 * Output : 3
 * 
 */


const checkArray = (arrayValue) => {
    let oddNumber = [];
    arrayValue?.filter((data) => {
        if (data % 2 !== 0) {
            oddNumber.push(data);
            return oddNumber
        }
    })
    console.log("get first odd number", oddNumber[0]);
}

let a = [4, 6, 8, 10, 12, 14, 2, 6, 3, 2, 4, 7]
checkArray(a);