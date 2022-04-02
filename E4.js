/**
 * creates a new array with all elements which contain leap year 
 * 
 * For Example
 * a= [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2024,2024]
 * Input  : arrayCheck(a)
 * Output : [2012,2016,2020,2024]
 * 
 * * a= [1,2,3,4,-5]
 * Input  : arrayCheck(a)
 * Output : false
 * 
 */

const checkLeapYear = (year) => {
    let result = [];
    year.map((data) => {
        if (data % 400 === 0 && data % 100 !== 0 || data % 4 === 0) {
            result.push(data)
            return result
        }
    });
    console.log("result", result);
}

let a = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2024]
let b = [1, 2, 3, 4, -5]
checkLeapYear(a);